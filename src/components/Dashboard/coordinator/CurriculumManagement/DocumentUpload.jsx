import React, { useState } from "react";
import {
  Upload,
  FileText,
  Download,
  Trash2,
  Lock,
  Unlock,
  Calendar,
} from "lucide-react";

/**
 * DocumentUpload Component
 * Handles curriculum document upload, version control, and locking
 */
const DocumentUpload = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState([
    {
      id: 1,
      name: "CBSE_Grade10_Mathematics_Syllabus.pdf",
      type: "Syllabus PDF",
      uploadedOn: "2026-02-01",
      version: "1.2",
      locked: true,
    },
    {
      id: 2,
      name: "Pacing_Guide_Term1.pdf",
      type: "Pacing Guide",
      uploadedOn: "2026-02-05",
      version: "1.0",
      locked: false,
    },
    {
      id: 3,
      name: "Scope_Sequence_2026.pdf",
      type: "Scope & Sequence",
      uploadedOn: "2026-01-28",
      version: "2.1",
      locked: true,
    },
  ]);

  const [isLocked, setIsLocked] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    console.log("Files to upload:", files);
    // TODO: Implement actual file upload logic
    alert(`${files.length} file(s) selected for upload`);
  };

  const handleDownload = (doc) => {
    console.log("Download:", doc);
    alert(`Downloading: ${doc.name}`);
  };

  const handleDelete = (docId) => {
    if (confirm("Are you sure you want to delete this document?")) {
      setUploadedDocuments(uploadedDocuments.filter((d) => d.id !== docId));
    }
  };

  const handleToggleLock = (docId) => {
    setUploadedDocuments(
      uploadedDocuments.map((doc) =>
        doc.id === docId ? { ...doc, locked: !doc.locked } : doc,
      ),
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          📄 Curriculum Document Upload & Control
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Upload syllabus PDFs, pacing guides, and scope & sequence documents
        </p>
      </div>

      {/* Upload Section */}
      <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-cyan-400 transition-all">
        <label className="flex flex-col items-center cursor-pointer">
          <Upload className="w-12 h-12 text-cyan-500 mb-3" />
          <span className="text-sm font-semibold text-gray-700 mb-1">
            Upload Documents
          </span>
          <span className="text-xs text-gray-500">
            Click to browse or drag & drop files
          </span>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Document Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
          <h4 className="text-xs font-bold text-cyan-700 mb-1">
            📘 Syllabus PDF
          </h4>
          <p className="text-xs text-gray-600">Approved curriculum syllabus</p>
        </div>
        <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h4 className="text-xs font-bold text-purple-700 mb-1">
            📅 Pacing Guide
          </h4>
          <p className="text-xs text-gray-600">Term timeline and pacing</p>
        </div>
        <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
          <h4 className="text-xs font-bold text-green-700 mb-1">
            📊 Scope & Sequence
          </h4>
          <p className="text-xs text-gray-600">Comprehensive overview</p>
        </div>
      </div>

      {/* Uploaded Documents List */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3">
          📚 Uploaded Documents
        </h3>
        <div className="space-y-2">
          {uploadedDocuments.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8">
              No documents uploaded yet
            </p>
          ) : (
            uploadedDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-4 border border-gray-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all bg-white flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {doc.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-600">{doc.type}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">
                        v{doc.version}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Calendar className="w-3 h-3" />
                        {doc.uploadedOn}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Lock/Unlock Button */}
                  <button
                    onClick={() => handleToggleLock(doc.id)}
                    className={`p-2 rounded-lg transition-all ${
                      doc.locked
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-green-100 text-green-600 hover:bg-green-200"
                    }`}
                    title={doc.locked ? "Locked" : "Unlocked"}
                  >
                    {doc.locked ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <Unlock className="w-4 h-4" />
                    )}
                  </button>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(doc)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(doc.id)}
                    disabled={doc.locked}
                    className={`p-2 rounded-lg transition-all ${
                      doc.locked
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-red-100 text-red-600 hover:bg-red-200"
                    }`}
                    title={doc.locked ? "Locked - Cannot delete" : "Delete"}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Version Control Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <h4 className="text-sm font-bold text-blue-900 mb-2">
          🔒 Version Control & Locking
        </h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>
            • Lock documents before term starts to prevent accidental changes
          </li>
          <li>• Locked documents cannot be edited or deleted</li>
          <li>• Version numbers auto-increment on each upload</li>
          <li>• Download previous versions from version history</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentUpload;
