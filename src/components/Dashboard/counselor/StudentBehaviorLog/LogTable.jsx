import React from "react";
import { Calendar, User, MoreHorizontal } from "lucide-react";

const LogTable = ({ behaviorLogs, categories, viewStudentHistory }) => {
  // Helper to get category styles
  const getCategoryStyles = (catName) => {
    // If categories already have IconComponent, we can use it, or we rely on the parent having processed it
    const cat = categories.find((c) => c.name === catName) || categories[0];
    return cat;
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100">
      <table className="w-full min-w-[800px] text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Student
            </th>
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Category
            </th>
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/3">
              Observation
            </th>
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Date
            </th>
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Recorded By
            </th>
            <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {behaviorLogs.map((log) => {
            const styles = getCategoryStyles(log.category);
            const Icon = styles.IconComponent;

            return (
              <tr
                key={log.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold border-2 border-white shadow-sm">
                      {log.student.charAt(0)}
                    </div>
                    <div>
                      <button
                        onClick={() => viewStudentHistory(log.student)}
                        className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors hover:underline text-left"
                      >
                        {log.student}
                      </button>
                      <p className="text-xs text-slate-400">{log.class}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${styles.bg} ${styles.text}`}
                  >
                    {Icon && <Icon size={12} />}
                    {log.category}
                  </span>
                </td>
                <td className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                    {log.description}
                  </p>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                    <Calendar size={12} />
                    {log.date}
                  </div>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">
                      {log.recordedBy}
                    </span>
                  </div>
                </td>
                <td className="p-5">
                  <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination (Mock) */}
      <div className="flex items-center justify-between p-5 border-t border-slate-100 bg-slate-50/30">
        <span className="text-xs text-slate-500 font-medium">
          Showing 1-10 of 45 records
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
            Prev
          </button>
          <button className="px-3 py-1 text-xs font-bold bg-blue-500 text-white rounded-lg shadow-md">
            1
          </button>
          <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
            3
          </button>
          <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogTable;
