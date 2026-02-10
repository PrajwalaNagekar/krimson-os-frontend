import React from "react";
import { Users, Activity } from "lucide-react";

const StaffOverviewStats = ({ summary }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
            <Users size={18} />
          </div>
        </div>
        <p className="text-2xl font-bold text-slate-800">
          {summary.present}/{summary.totalStaff}
        </p>
        <p className="text-xs text-slate-500 font-medium">Present/Total</p>
      </div>
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
            <Activity size={18} />
          </div>
        </div>
        <p className="text-2xl font-bold text-slate-800">
          {summary.overallRate}
        </p>
        <p className="text-xs text-slate-500 font-medium">Attendance Rate</p>
      </div>
    </div>
  );
};

export default StaffOverviewStats;
