import React from "react";
import {
  Calendar,
  FileText,
  ClipboardCheck,
  AlertTriangle,
} from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const QuickStatsGrid = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-cyan-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Classes Today
          </p>
          <Calendar className="text-cyan-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
          {dashboard.classesToday.length}
        </h3>

        <p className="text-xs text-cyan-600 font-semibold mt-1">
          Scheduled Sessions
        </p>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-blue-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Pending Review
          </p>
          <FileText className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
          {dashboard.pendingAssignments}
        </h3>
        <p className="text-xs text-blue-600 font-semibold mt-1">Assignments</p>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-purple-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Attendance
          </p>
          <ClipboardCheck className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
          2/3 Marked
        </h3>
        <p className="text-xs text-green-600 font-semibold mt-1">1 Pending</p>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-pink-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="flex items-start justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Alerts
          </p>
          <AlertTriangle className="text-pink-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
          {dashboard.alerts.length}
        </h3>
        <p className="text-xs text-pink-600 font-semibold mt-1">
          Performance Alerts
        </p>
      </div>
    </div>
  );
};

export default QuickStatsGrid;
