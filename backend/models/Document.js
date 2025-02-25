const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    filepath: { type: String, required: true },
    metadata: { type: Map, of: String },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Document", documentSchema);