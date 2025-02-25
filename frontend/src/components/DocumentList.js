import React from "react";

const DocumentList = ({ documents, updateStatus }) => {
    return (
        <ul>
            {documents.map((doc) => (
                <li key={doc._id}>
                    {doc.filename} - Status: {doc.status}
                    <button onClick={() => updateStatus(doc._id, "approved")}>Approve</button>
                    <button onClick={() => updateStatus(doc._id, "rejected")}>Reject</button>
                </li>
            ))}
        </ul>
    );
};

export default DocumentList;
