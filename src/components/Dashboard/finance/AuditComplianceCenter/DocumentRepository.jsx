import React, { useState } from "react";
import {
  FileText,
  File,
  Upload,
  CheckCircle,
  Clock,
  Calendar,
  User,
  Activity,
  Eye,
  Download,
} from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const DocumentRepository = ({ documents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusColor = (status) => {
    switch (status) {
      case "Verified":
      case "Resolved":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending Review":
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "In Progress":
      case "Under Review":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <File className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Document Repository
            </h2>
            <p className="text-sm text-gray-600">
              Archive and manage supporting files
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="space-y-4">
        {documents
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{doc.name}</h3>
                      <p className="text-xs text-gray-600">
                        {doc.id} • {doc.type}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(doc.status)}`}
                    >
                      {doc.status === "Verified" && (
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {doc.status === "Pending Review" && (
                        <Clock className="w-3 h-3 inline mr-1" />
                      )}
                      {doc.status}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span>{formatDate(doc.uploadDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 text-cyan-500" />
                      <span>{doc.uploadedBy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <File className="w-4 h-4 text-orange-500" />
                      <span>
                        {doc.format} • {doc.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span>Audit Year: {doc.auditYear}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(documents.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={documents.length}
      />
    </div>
  );
};

export default DocumentRepository;
