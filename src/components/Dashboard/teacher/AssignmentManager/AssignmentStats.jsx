import React from "react";
import { FileText, Zap, AlertTriangle, CheckCircle } from "lucide-react";

const AssignmentStats = ({ stats, viewMode, setViewMode }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          viewMode === "all"
            ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg"
            : "bg-white border-purple-200 hover:border-purple-300"
        }`}
        onClick={() => setViewMode("all")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${viewMode === "all" ? "text-white/80" : "text-slate-400"}`}
          >
            Total
          </p>
          <FileText
            className={
              viewMode === "all"
                ? "text-white opacity-60"
                : "text-purple-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${viewMode === "all" ? "text-white" : "text-slate-800"}`}
        >
          {stats.total}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          viewMode === "active"
            ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-500 shadow-lg"
            : "bg-white border-blue-200 hover:border-blue-300"
        }`}
        onClick={() => setViewMode("active")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${viewMode === "active" ? "text-white/80" : "text-slate-400"}`}
          >
            Active
          </p>
          <Zap
            className={
              viewMode === "active"
                ? "text-white opacity-60"
                : "text-blue-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${viewMode === "active" ? "text-white" : "text-blue-600"}`}
        >
          {stats.active}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          viewMode === "overdue"
            ? "bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg"
            : "bg-white border-red-200 hover:border-red-300"
        }`}
        onClick={() => setViewMode("overdue")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${viewMode === "overdue" ? "text-white/80" : "text-slate-400"}`}
          >
            Overdue
          </p>
          <AlertTriangle
            className={
              viewMode === "overdue"
                ? "text-white opacity-60"
                : "text-red-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${viewMode === "overdue" ? "text-white" : "text-red-600"}`}
        >
          {stats.overdue}
        </h3>
      </div>

      <div
        className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
          viewMode === "completed"
            ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg"
            : "bg-white border-green-200 hover:border-green-300"
        }`}
        onClick={() => setViewMode("completed")}
      >
        <div className="flex items-center justify-between mb-2">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${viewMode === "completed" ? "text-white/80" : "text-slate-400"}`}
          >
            Completed
          </p>
          <CheckCircle
            className={
              viewMode === "completed"
                ? "text-white opacity-60"
                : "text-green-400 opacity-60"
            }
            size={20}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold ${viewMode === "completed" ? "text-white" : "text-green-600"}`}
        >
          {stats.completed}
        </h3>
      </div>
    </div>
  );
};

export default AssignmentStats;
