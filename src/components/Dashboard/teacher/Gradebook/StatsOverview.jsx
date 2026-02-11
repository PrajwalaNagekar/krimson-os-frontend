import React from "react";
import {
  AlertTriangle,
  TrendingUp,
  BarChart2,
  CheckCircle,
} from "lucide-react";

const StatsOverview = ({ stats, filterMode, setFilterMode }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* At Risk Card */}
      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          filterMode === "atRisk"
            ? "bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg"
            : "bg-white border-red-200 hover:border-red-300"
        }`}
        onClick={() =>
          setFilterMode(filterMode === "atRisk" ? "all" : "atRisk")
        }
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterMode === "atRisk" ? "text-white/80" : "text-slate-400"}`}
          >
            At Risk
          </p>
          <AlertTriangle
            className={
              filterMode === "atRisk"
                ? "text-white opacity-60"
                : "text-red-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterMode === "atRisk" ? "text-white" : "text-red-600"}`}
        >
          {stats.atRisk}
        </h3>
      </div>

      {/* Improving Card */}
      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          filterMode === "improving"
            ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg"
            : "bg-white border-green-200 hover:border-green-300"
        }`}
        onClick={() =>
          setFilterMode(filterMode === "improving" ? "all" : "improving")
        }
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${filterMode === "improving" ? "text-white/80" : "text-slate-400"}`}
          >
            Improving
          </p>
          <TrendingUp
            className={
              filterMode === "improving"
                ? "text-white opacity-60"
                : "text-green-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${filterMode === "improving" ? "text-white" : "text-green-600"}`}
        >
          {stats.improving}
        </h3>
      </div>

      {/* Avg Score Card */}
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Score
          </p>
          <BarChart2 className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          {stats.avgScore}%
        </h3>
      </div>

      {/* Avg Attendance Card */}
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Attendance
          </p>
          <CheckCircle className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {stats.avgAttendance}%
        </h3>
      </div>
    </div>
  );
};

export default StatsOverview;
