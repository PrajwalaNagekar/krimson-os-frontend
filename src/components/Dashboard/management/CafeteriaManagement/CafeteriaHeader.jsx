import React from "react";
import { Utensils, Clock, X, Download, ShieldCheck, Edit2 } from "lucide-react";

const CafeteriaHeader = ({
  status,
  setStatus,
  handlePublish,
  handleArchive,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center shadow-lg group hover:rotate-6 transition-transform">
            <Utensils size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-1">
              Cafeteria Menu Admin
            </h1>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${
                  status === "Published"
                    ? "bg-green-100 text-green-700"
                    : status === "Archived"
                      ? "bg-gray-100 text-gray-500"
                      : "bg-blue-100 text-blue-700"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    status === "Published"
                      ? "bg-green-500 animate-pulse"
                      : status === "Archived"
                        ? "bg-gray-500"
                        : "bg-blue-500 animate-pulse"
                  }`}
                />
                {status} MODE
              </span>
              <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5 border-l border-gray-200 pl-3">
                <Clock size={14} className="text-blue-500" /> Last Save: 2 mins
                ago
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {status !== "Archived" && (
            <button
              onClick={handleArchive}
              className="px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-red-400 hover:text-red-500 transition-all flex items-center gap-2"
            >
              <X size={18} />
              <span>Archive</span>
            </button>
          )}
          <button className="px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-blue-400 transition-all flex items-center gap-2">
            <Download size={18} className="text-blue-500" />
            <span>Export Report</span>
          </button>
          {status === "Draft" && (
            <button
              onClick={handlePublish}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2"
            >
              <ShieldCheck size={18} />
              <span>Publish Menu</span>
            </button>
          )}
          {status === "Published" && (
            <button
              onClick={() => setStatus("Draft")}
              className="px-6 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Edit2 size={18} className="text-blue-400" />
              <span>Revert to Draft</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CafeteriaHeader;
