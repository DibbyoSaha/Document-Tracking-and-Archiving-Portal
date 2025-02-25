const Document = require("../models/Document");

// Upload File
const uploadFile = async (req, res) => {
    try {
        const newDoc = new Document({
            filename: req.file.filename,
            filepath: req.file.path,
            metadata: req.body.metadata || {},
            status: "pending",
        });
        await newDoc.save();
        res.status(201).json({ message: "File uploaded successfully", document: newDoc });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Documents
const getDocuments = async (req, res) => {
    try {
        const query = req.query.q ? { filename: new RegExp(req.query.q, "i") } : {};
        const documents = await Document.find(query);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Document Status
const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updatedDoc = await Document.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedDoc);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { uploadFile, getDocuments, updateStatus };
