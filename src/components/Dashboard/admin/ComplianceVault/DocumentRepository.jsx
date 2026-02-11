import React from "react";
import {
  FileText,
  FileCheck,
  File,
  User,
  Calendar,
  Eye,
  Download,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DocumentRepository = ({
  documents,
  viewMode,
  filteredDocumentsCount,
  currentPage,
  itemsPerPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
  indexOfFirstItem,
  indexOfLastItem,
  categories,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Current":
        return "bg-green-100 text-green-700 border-green-200";
      case "Expiring Soon":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Expired":
        return "bg-red-100 text-red-700 border-red-200";
      case "Archived":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category)
      return {
        bg: "bg-slate-50",
        text: "text-slate-700",
        border: "border-slate-200",
        icon: "bg-slate-100",
      };

    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        icon: "bg-blue-100",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        icon: "bg-purple-100",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: "bg-green-100",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        icon: "bg-amber-100",
      },
      cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-700",
        border: "border-cyan-200",
        icon: "bg-cyan-100",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        border: "border-pink-200",
        icon: "bg-pink-100",
      },
    };
    return colorMap[category.color] || colorMap.blue;
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText className="text-red-500" size={20} />;
      case "XLSX":
      case "XLS":
        return <FileCheck className="text-green-500" size={20} />;
      case "DOCX":
      case "DOC":
        return <File className="text-blue-500" size={20} />;
      default:
        return <FileText className="text-slate-500" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Document Repository
          </h2>
          <p className="text-sm text-slate-500">
            {filteredDocumentsCount}{" "}
            {filteredDocumentsCount === 1 ? "document" : "documents"} found
          </p>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const colors = getCategoryColor(doc.category);
            return (
              <div
                key={doc.id}
                className={`p-6 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all group bg-gradient-to-br from-white to-slate-50`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${colors.icon} rounded-2xl`}>
                    {getFileIcon(doc.type)}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(
                      doc.status,
                    )}`}
                  >
                    {doc.status}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                  {doc.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <p className="text-slate-500">Type</p>
                    <p className="font-bold text-slate-700">{doc.type}</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <p className="text-slate-500">Size</p>
                    <p className="font-bold text-slate-700">{doc.size}</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <p className="text-slate-500">Version</p>
                    <p className="font-bold text-slate-700">v{doc.version}</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <p className="text-slate-500">Downloads</p>
                    <p className="font-bold text-slate-700">
                      {doc.downloadCount}
                    </p>
                  </div>
                </div>

                {/* Version Control Info */}
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 mb-4">
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <User size={12} className="text-blue-500" />
                    <p className="font-semibold text-slate-700">
                      Last Modified By:
                    </p>
                  </div>
                  <p className="text-xs font-bold text-blue-700">
                    {doc.modifiedBy}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {doc.lastModified}
                  </p>
                </div>

                {/* Expiry Warning */}
                {doc.expiryDate && doc.daysUntilExpiry !== null && (
                  <div
                    className={`p-2 rounded-lg mb-4 text-xs ${
                      doc.daysUntilExpiry < 0
                        ? "bg-red-100 border border-red-200"
                        : doc.daysUntilExpiry <= 60
                          ? "bg-amber-100 border border-amber-200"
                          : "bg-green-100 border border-green-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <p className="font-semibold">
                        {doc.daysUntilExpiry < 0
                          ? `Expired ${Math.abs(doc.daysUntilExpiry)} days ago`
                          : `Expires in ${doc.daysUntilExpiry} days`}
                      </p>
                    </div>
                    <p className="text-[10px] mt-1">Expiry: {doc.expiryDate}</p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {doc.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
                    <Eye size={14} />
                  </button>
                  <button className="py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
                    <Download size={14} />
                  </button>
                  <button className="py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                    <Edit size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {documents.map((doc) => {
            const colors = getCategoryColor(doc.category);
            return (
              <div
                key={doc.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 ${colors.icon} rounded-lg`}>
                    {getFileIcon(doc.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {doc.description}
                        </p>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(
                          doc.status,
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500">Category</p>
                        <p className={`font-bold ${colors.text}`}>
                          {doc.category.toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Type / Size</p>
                        <p className="font-bold text-slate-700">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Version</p>
                        <p className="font-bold text-slate-700">
                          v{doc.version}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Modified By</p>
                        <p className="font-bold text-blue-600">
                          {doc.modifiedBy}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Last Modified</p>
                        <p className="font-bold text-slate-700">
                          {doc.lastModified}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all">
                      <Download size={16} />
                    </button>
                    <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-all">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {filteredDocumentsCount > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 border-t border-slate-100 pt-6 gap-4">
          <div className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-700">
              {indexOfFirstItem + 1}
            </span>{" "}
            to{" "}
            <span className="font-bold text-slate-700">
              {Math.min(indexOfLastItem, filteredDocumentsCount)}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-700">
              {filteredDocumentsCount}
            </span>{" "}
            entries
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-xl border transition-all ${
                currentPage === 1
                  ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-blue-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-xl border transition-all ${
                currentPage === totalPages
                  ? "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentRepository;
