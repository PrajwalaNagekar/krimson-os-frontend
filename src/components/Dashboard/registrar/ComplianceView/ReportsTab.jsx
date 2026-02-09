import React from "react";
import { RefreshCw, FileClock, Play, Download, Eye } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/registrarData";
import { getStatusColor } from "./utils.jsx";

const ReportsTab = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">
          Compliance-Ready Reports
        </h3>
        <button className="relative group/refresh flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
          <RefreshCw className="w-4 h-4" />
          Refresh All
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/refresh:opacity-100 transition-opacity pointer-events-none">
            get in app
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMPLIANCE_DATA.reports.map((report) => {
          const Icon = report.icon;
          const statusColors = getStatusColor(report.status);
          const StatusIcon = statusColors.icon;

          return (
            <div
              key={report.id}
              className="group p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-1">
                    {report.name}
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                    <span className="px-2 py-1 bg-slate-100 rounded">
                      {report.format}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 rounded">
                      {report.formCode}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 rounded">
                      {report.type}
                    </span>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} text-xs font-bold`}
                >
                  <StatusIcon className="w-3 h-3" />
                  {report.status}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <FileClock className="w-4 h-4" />
                Last generated: {report.lastGenerated}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="relative group/generate flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                  <Play className="w-4 h-4" />
                  Generate
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/generate:opacity-100 transition-opacity pointer-events-none z-10">
                    get in app
                  </span>
                </button>
                <button className="relative group/download p-2.5 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-all">
                  <Download className="w-4 h-4" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/download:opacity-100 transition-opacity pointer-events-none z-10">
                    get in app
                  </span>
                </button>
                <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportsTab;
