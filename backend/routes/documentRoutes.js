const express = require("express");
const { uploadFile, getDocuments, updateStatus } = require("../controllers/documentController");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

// API Routes
router.post("/upload", upload.single("file"), uploadFile);
router.get("/documents", getDocuments);
router.put("/documents/:id/status", updateStatus);

module.exports = router;
