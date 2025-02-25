const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Define Document Schema
const documentSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
    metadata: { type: Map, of: String },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    uploadedAt: { type: Date, default: Date.now }
});
const Document = mongoose.model('Document', documentSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Upload API
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const newDoc = new Document({
            filename: req.file.filename,
            filepath: req.file.path,
            metadata: req.body.metadata || {},
            status: 'pending'
        });
        await newDoc.save();
        res.status(201).json({ message: 'File uploaded successfully', document: newDoc });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Search & Retrieve Documents
app.get('/documents', async (req, res) => {
    try {
        const query = req.query.q ? { filename: new RegExp(req.query.q, 'i') } : {};
        const documents = await Document.find(query);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Change Document Status
app.put('/documents/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedDoc = await Document.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedDoc);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
