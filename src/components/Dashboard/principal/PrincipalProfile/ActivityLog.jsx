import React from "react";
import { FileText, Users } from "lucide-react";

const ActivityLog = ({ theme, activityLog }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
      ></div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Activity History</h2>
        <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
          <FileText size={16} /> Export CSV
        </button>
      </div>

      <div className="overflow-hidden bg-slate-50 rounded-2xl border border-slate-100">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-500 font-bold uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activityLog.map((log) => (
              <tr key={log.id} className="hover:bg-white transition-colors">
                <td className="px-6 py-4 font-bold text-slate-800">
                  {log.action}
                </td>
                <td className="px-6 py-4 text-slate-500 font-medium">
                  {log.time}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                    Success
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-center border-t border-slate-200">
          <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 mx-auto">
            View Full History <Users size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
