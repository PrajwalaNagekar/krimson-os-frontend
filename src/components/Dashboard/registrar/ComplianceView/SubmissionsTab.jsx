import React from "react";
import { Upload, FileText, Calendar, Eye, Download } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/registrarData";
import { getStatusColor } from "./utils.jsx";

const SubmissionsTab = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-bold text-slate-800">
          Statutory Document Submissions
        </h3>
        <button className="relative group/upload flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
          <Upload className="w-4 h-4" />
          Upload Document
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/upload:opacity-100 transition-opacity pointer-events-none z-10">
            get in app
          </span>
        </button>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all group cursor-pointer">
        <Upload className="w-12 h-12 text-slate-400 group-hover:text-blue-500 mx-auto mb-4 transition-colors" />
        <h4 className="font-bold text-slate-700 mb-2">
          Upload Scanned Statutory Documents
        </h4>
        <p className="text-sm text-slate-500 mb-4">
          Drag and drop files here, or click to browse
        </p>
        <p className="text-xs text-slate-400">
          Supported formats: PDF, JPG, PNG (Max 10MB)
        </p>
      </div>

      {/* Recent Submissions */}
      <div className="space-y-3 mt-6">
        <h4 className="font-bold text-slate-700 mb-4">Recent Submissions</h4>
        {COMPLIANCE_DATA.statutorySubmissions.map((submission) => {
          const statusColors = getStatusColor(submission.status);
          const StatusIcon = statusColors.icon;

          return (
            <div
              key={submission.id}
              className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-slate-800 mb-1 truncate">
                    {submission.name}
                  </h5>
                  <div className="flex items-center gap-3 flex-wrap text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {submission.uploadDate}
                    </span>
                    <span>•</span>
                    <span>by {submission.uploadedBy}</span>
                    <span>•</span>
                    <span>{submission.fileSize}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold whitespace-nowrap`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  {submission.status.replace("-", " ")}
                </span>
                <div className="flex gap-1">
                  <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="relative group/dl p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all">
                    <Download className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/dl:opacity-100 transition-opacity pointer-events-none z-10">
                      get in app
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmissionsTab;
