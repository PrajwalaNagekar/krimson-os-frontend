import React from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const TodaySnapshotWidget = ({ schedule }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Present":
        return "text-green-600 bg-green-50 border-green-100";
      case "Absent":
        return "text-red-600 bg-red-50 border-red-100";
      case "Late":
        return "text-orange-600 bg-orange-50 border-orange-100";
      default:
        return "text-slate-500 bg-slate-50 border-slate-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Present":
        return <CheckCircle2 size={14} />;
      case "Absent":
        return <XCircle size={14} />;
      case "Late":
        return <AlertCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all h-full">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-1">
            Today's Snapshot
          </h3>
          <p className="text-xs text-slate-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <Link
          to="/dashboard/parent/attendance"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-blue-200 shadow-lg flex items-center gap-1.5"
        >
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="p-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Time
              </th>
              <th className="p-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {schedule && schedule.length > 0 ? (
              schedule.map((cls, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-3">
                    <div className="font-bold text-slate-700 text-sm">
                      {cls.subject}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {cls.teacher}
                    </div>
                  </td>
                  <td className="p-3 text-xs text-slate-500 font-medium whitespace-nowrap">
                    {cls.time}
                  </td>
                  <td className="p-3 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(cls.status)}`}
                    >
                      {getStatusIcon(cls.status)}
                      {cls.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="p-4 text-center text-sm text-slate-400 italic"
                >
                  No classes scheduled for today.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodaySnapshotWidget;
