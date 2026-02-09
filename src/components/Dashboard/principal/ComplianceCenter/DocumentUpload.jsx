import React from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";

const DocumentUpload = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
        <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
          <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          <span className="text-sm sm:text-base">Document Upload</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Upload regulatory documents
        </p>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition cursor-pointer group">
          <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 group-hover:text-blue-500 mb-3 transition" />
          <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">
            Drag files here or click to upload
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500">
            PDF, DOCX, XLSX (Max 25MB)
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-md">
            Select Files
            <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">
              (get in app)
            </span>
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs font-semibold text-slate-600 mb-2">
            Recent Uploads:
          </p>
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
            <FileText className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-slate-700 flex-1">
              teacher_cert_2026.pdf
            </span>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
            <FileText className="w-4 h-4 text-green-600" />
            <span className="text-xs text-slate-700 flex-1">
              enrollment_data_q1.xlsx
            </span>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
