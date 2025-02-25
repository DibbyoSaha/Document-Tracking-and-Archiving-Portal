# 📂 Document Tracking and Archiving Portal

# 📌 Overview

This is a full-stack web application for tracking and archiving documents. Users can upload documents, search files, update status, and view uploaded files.

# 🛠️ Tech Stack

Frontend: React (with Context API), Tailwind CSS

Backend: Node.js, Express, MongoDB (Mongoose)

File Upload: Multer

# 🚀 Features

✅ Upload Documents (with metadata)✅ Search Documents by filename✅ View Uploaded Files✅ Update Document Status (Pending, Approved, Rejected)✅ Modern UI using Tailwind CSS

# 🏗️ Project Structure

Document-Tracking-and-Archiving-Portal/
│── backend/                  # Backend Server
│   ├── models/               # Mongoose schemas
│   │   ├── Document.js       # Schema for documents
│   ├── routes/               # API Endpoints
│   │   ├── documentRoutes.js # Routes for document handling
│   ├── controllers/          # Business logic
│   │   ├── documentController.js # File handling logic
│   ├── uploads/              # Uploaded files
│   ├── .env                  # Environment variables
│   ├── server.js             # Main backend server
│── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/       # UI Components
│   │   │   ├── UploadForm.js   # Upload File UI
│   │   │   ├── SearchBar.js    # Search UI
│   │   │   ├── DocumentList.js # File listing UI
│   │   │   ├── DocumentContext.js # React Context API
│   │   ├── App.js            # Main React file
│   │   ├── index.js          # React entry file
│   ├── public/               # Public files
│   │   ├── index.html        # Root file
│   ├── tailwind.config.js    # Tailwind CSS config
│   ├── postcss.config.js     # PostCSS config
│   ├── package.json          # Frontend dependencies
│── README.md                 # Project Documentation

# ⚙️ Installation

🔹 Backend Setup

1️⃣ Navigate to backend folder:

cd backend

2️⃣ Install dependencies:

npm install

3️⃣ Create a .env file in backend/:

MONGO_URI=mongodb://localhost:27017/document-tracking
PORT=5000

4️⃣ Start the backend server:

node server.js

🔹 Frontend Setup

1️⃣ Navigate to frontend folder:

cd frontend

2️⃣ Install dependencies:

npm install

3️⃣ Start the React app:

npm start

