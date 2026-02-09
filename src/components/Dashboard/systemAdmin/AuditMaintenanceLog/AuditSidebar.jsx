import React from "react";
import {
  FileBarChart,
  Shield,
  Download,
  Database,
  Server,
  AlertCircle,
  FileText,
} from "lucide-react";

const AuditSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Audit Reports */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 shadow-lg">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <FileBarChart className="text-purple-500" size={20} />
          Audit Reports
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Generate and download comprehensive system audit summaries.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-red-500">
                <Shield size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700">
                  Security Audit
                </p>
                <p className="text-[10px] text-slate-400">Last 30 Days</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
              <Download size={16} />
              <span className="text-[8px]">app</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-blue-500">
                <Database size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700">
                  Data Integrity
                </p>
                <p className="text-[10px] text-slate-400">Full Report</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
              <Download size={16} />
              <span className="text-[8px]">app</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-green-500">
                <Server size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-700">
                  Performance Log
                </p>
                <p className="text-[10px] text-slate-400">Weekly Summary</p>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
              <Download size={16} />
              <span className="text-[8px]">app</span>
            </button>
          </div>
        </div>
      </div>

      {/* Incident Report Generator */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg backdrop-blur-md">
              <AlertCircle className="text-orange-400" size={20} />
            </div>
            <h3 className="font-bold">Incident Report</h3>
          </div>

          <p className="text-xs text-slate-400 mb-6">
            Generate a formal incident report for security breaches or system
            failures. Includes automated log attachment.
          </p>

          <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-bold hover:shadow-lg hover:from-orange-400 hover:to-red-400 transition-all cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
            <span className="flex items-center gap-2 text-sm">
              <FileText size={16} /> Generate Report
            </span>
            <span className="text-[9px] opacity-70 font-normal text-white">
              get in app
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditSidebar;
