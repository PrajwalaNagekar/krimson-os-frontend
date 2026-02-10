import React from "react";
import {
  Archive,
  Lock,
  Database,
  RefreshCcw,
  Play,
  Cloud,
  Download,
  Upload,
  Eye,
  AlertTriangle,
} from "lucide-react";

const RestorePointsList = ({ restorePoints }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Failed":
        return "bg-red-100 text-red-700 border-red-200";
      case "Scheduled":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getTypeIcon = (type) => {
    return type === "Automatic" ? (
      <RefreshCcw size={16} className="text-blue-600" />
    ) : (
      <Play size={16} className="text-purple-600" />
    );
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Archive className="text-blue-500" size={24} />
              Restore Points Management
            </h2>
            <p className="text-sm text-slate-500">
              Available backup snapshots for data recovery
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Lock size={14} className="text-green-500" />
            <span className="font-bold text-green-600">AES-256 Encrypted</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar-hidden">
        {restorePoints.map((point) => (
          <div
            key={point.id}
            className={`p-6 rounded-2xl border-2 transition-all group ${
              point.status === "Completed"
                ? "bg-gradient-to-br from-white to-green-50/20 border-green-200 hover:shadow-lg hover:border-green-300"
                : "bg-gradient-to-br from-white to-red-50/20 border-red-200"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${
                    point.status === "Completed" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <Database
                    size={24}
                    className={
                      point.status === "Completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-slate-800 text-lg">
                      Backup #{point.id}
                    </h4>
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1 ${getStatusColor(point.status)}`}
                    >
                      {getTypeIcon(point.type)}
                      {point.type}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(point.status)}`}
                    >
                      {point.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    {point.timestamp}
                  </p>

                  {point.status === "Completed" ? (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3 text-xs">
                        <div>
                          <p className="text-slate-500 font-medium mb-1">
                            Size
                          </p>
                          <p className="font-bold text-slate-800">
                            {point.size}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium mb-1">
                            Duration
                          </p>
                          <p className="font-bold text-slate-800">
                            {point.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium mb-1">
                            Encryption
                          </p>
                          <div className="flex items-center gap-1">
                            <Lock size={12} className="text-purple-500" />
                            <p className="font-bold text-purple-600">
                              {point.encryption}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium mb-1">
                            Location
                          </p>
                          <div className="flex items-center gap-1">
                            <Cloud size={12} className="text-cyan-500" />
                            <p className="font-bold text-cyan-600">
                              {point.location}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium mb-1">
                            Checksum
                          </p>
                          <p className="font-mono text-[10px] font-bold text-slate-700">
                            {point.checksum}
                          </p>
                        </div>
                      </div>

                      {/* Data Included */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3">
                        <p className="text-xs font-bold text-slate-600 mb-2">
                          Data Included:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {point.dataIncluded.map((data, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold border border-blue-200"
                            >
                              {data}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
                          <div className="flex items-center gap-1">
                            <Download size={14} />
                            Download Encrypted
                          </div>
                          <span className="text-[9px] text-slate-400 font-normal">
                            ()
                          </span>
                        </button>
                        <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
                          <div className="flex items-center gap-1">
                            <Upload size={14} />
                            Restore from Point
                          </div>
                          <span className="text-[9px] text-slate-400 font-normal">
                            ()
                          </span>
                        </button>
                        <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            View Details
                          </div>
                          <span className="text-[9px] text-slate-400 font-normal">
                            ()
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="bg-red-100 p-3 rounded-xl border border-red-200">
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={16} className="text-red-600" />
                        <p className="text-sm font-bold text-red-800">
                          Backup Failed
                        </p>
                      </div>
                      <p className="text-xs text-red-700 mt-1">
                        {point.errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestorePointsList;
