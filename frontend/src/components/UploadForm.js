import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            alert(data.message);
            onUpload();
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;
