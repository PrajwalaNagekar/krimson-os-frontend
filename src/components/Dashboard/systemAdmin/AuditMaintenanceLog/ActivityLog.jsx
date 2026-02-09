import React from "react";
import {
  Terminal,
  Search,
  Filter,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ActivityLog = ({ logs }) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Terminal className="text-slate-600" size={24} />
              System Activity Log
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Real-time audit trail of all system events
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5"
              title="Search Logs"
            >
              <Search size={18} />
              <span className="text-[8px] font-normal">get in app</span>
            </button>
            <button
              className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5"
              title="Filter Logs"
            >
              <Filter size={18} />
              <span className="text-[8px] font-normal">get in app</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 transition-all shadow-md hover:shadow-lg cursor-not-allowed opacity-75 flex-col leading-tight gap-0.5">
              <span className="flex items-center gap-2">
                <Download size={16} /> Export CSV
              </span>
              <span className="text-[9px] opacity-60 font-normal">
                get in app
              </span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Log ID & Date
                </th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Action & Details
                </th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  User
                </th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="p-4">
                    <p className="text-xs font-mono font-bold text-slate-500 mb-1">
                      {log.id}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock size={10} /> {log.date}
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800 mb-1">
                      {log.action}
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs truncate">
                      {log.details}
                    </p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                        log.category === "Incident"
                          ? "bg-red-50 text-red-600 border-red-100"
                          : log.category === "Security"
                            ? "bg-orange-50 text-orange-600 border-orange-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}
                    >
                      {log.category.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                        {log.user.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-700">
                          {log.user}
                        </p>
                        <p className="text-[10px] text-slate-400">{log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                        log.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : log.status === "Flagged"
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {log.status === "Success" ? (
                        <CheckCircle size={10} />
                      ) : (
                        <AlertCircle size={10} />
                      )}
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <button className="text-blue-500 hover:text-blue-700 text-sm font-bold transition-colors cursor-not-allowed opacity-75 flex flex-col items-center w-full">
            <span>View All Logs</span>
            <span className="text-[9px] opacity-60 font-normal text-slate-400">
              get in app
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
