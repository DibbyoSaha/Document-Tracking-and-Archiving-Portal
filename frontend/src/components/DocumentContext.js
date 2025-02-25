import React, { createContext, useState, useEffect } from "react";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
    const [documents, setDocuments] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch documents from backend
    const fetchDocuments = async () => {
        try {
            const response = await fetch(`http://localhost:5000/documents?q=${search}`);
            const data = await response.json();
            setDocuments(data);
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, [search]);

    const updateStatus = async (id, status) => {
        try {
            await fetch(`http://localhost:5000/documents/${id}/status`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            fetchDocuments();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <DocumentContext.Provider value={{ documents, fetchDocuments, updateStatus, search, setSearch }}>
            {children}
        </DocumentContext.Provider>
    );
};
