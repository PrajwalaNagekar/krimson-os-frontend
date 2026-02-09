import React from "react";
import {
  Database,
  CheckCircle,
  XCircle,
  Clock,
  Activity,
  HardDrive,
  FolderOpen,
  Download,
} from "lucide-react";

const BackupHistoryTable = ({ restorePoints }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Database className="text-blue-500" size={28} />
              Restore Point Selection
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Version-tagged backup history
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="space-y-3">
            {restorePoints.map((point) => (
              <div
                key={point.id}
                className={`p-4 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-md ${
                  point.status === "Verified"
                    ? "bg-green-50/50 border-green-500 hover:bg-green-50"
                    : "bg-red-50/50 border-red-500 hover:bg-red-50"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-bold text-slate-800">{point.id}</p>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-bold">
                        {point.version}
                      </span>
                      {point.status === "Verified" ? (
                        <CheckCircle size={16} className="text-green-600" />
                      ) : (
                        <XCircle size={16} className="text-red-600" />
                      )}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-slate-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-slate-400" />
                        <span>{point.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity size={12} className="text-slate-400" />
                        <span>{point.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HardDrive size={12} className="text-slate-400" />
                        <span>{point.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FolderOpen size={12} className="text-slate-400" />
                        <span>{point.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {point.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded-full text-xs font-bold ${
                            tag === "Failed" || tag === "Corrupted"
                              ? "bg-red-100 text-red-700"
                              : tag === "Production" || tag === "Stable"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    disabled={point.status !== "Verified"}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-200 flex flex-col items-center gap-0.5 leading-tight whitespace-nowrap ${
                      point.status === "Verified"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg cursor-not-allowed opacity-75"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    {point.status === "Verified" ? (
                      <>
                        <span className="flex items-center gap-2">
                          <Download size={16} />
                          Restore
                        </span>
                        <span className="text-[9px] opacity-60 font-normal">
                          get in app
                        </span>
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Unavailable
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupHistoryTable;
