import React from "react";
import { User, TrendingUp, Target } from "lucide-react";

const PerformanceStats = ({ activeChild, classAverage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-600 mb-3">
            <TrendingUp size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Academic Growth
            </span>
          </div>
          <span className="text-4xl font-extrabold text-slate-800">
            {activeChild.academicGrowth}%
          </span>
          <p className="text-xs text-slate-500 mt-2">This semester</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-purple-600 mb-3">
            <User size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Attendance
            </span>
          </div>
          <span className="text-4xl font-extrabold text-slate-800">
            {activeChild.attendance}%
          </span>
          <p className="text-xs text-slate-500 mt-2">This month</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-green-600 mb-3">
            <Target size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Overall Grade
            </span>
          </div>
          <span className="text-4xl font-extrabold text-slate-800">
            {activeChild.academicGrowth}%
          </span>
          <p className="text-xs text-slate-500 mt-2">
            Class average: {classAverage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;
