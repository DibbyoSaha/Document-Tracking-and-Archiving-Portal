import React from "react";
import UploadForm from "./components/UploadForm";
import SearchBar from "./components/SearchBar";
import DocumentList from "./components/DocumentList";
import { DocumentProvider } from "./components/DocumentContext";
import { DocumentContext } from "./components/DocumentContext";

const App = () => {
    return (
        <DocumentProvider>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                        📂 Document Tracking Portal
                    </h1>

                    <div className="space-y-4">
                        <UploadForm />
                        <DocumentContext.Consumer>
                            {({ search, setSearch, documents, updateStatus }) => (
                                <>
                                    <SearchBar search={search} setSearch={setSearch} />
                                    <DocumentList documents={documents} updateStatus={updateStatus} />
                                </>
                            )}
                        </DocumentContext.Consumer>
                    </div>
                </div>
            </div>
        </DocumentProvider>
    );
};

export default App;
