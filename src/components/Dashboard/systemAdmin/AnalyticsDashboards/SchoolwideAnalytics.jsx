import React from "react";
import { Users, TrendingUp, Award, Activity } from "lucide-react";

const SchoolwideAnalytics = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Total Students
            </span>
          </div>
          <p className="text-4xl font-bold text-slate-800">
            {data.totalStudents.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="text-cyan-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Total Staff
            </span>
          </div>
          <p className="text-4xl font-bold text-slate-800">{data.totalStaff}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Award className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Active Programs
            </span>
          </div>
          <p className="text-4xl font-bold text-slate-800">
            {data.activePrograms}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Performance
            </span>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {data.overallPerformance}
          </p>
          <p className="text-sm text-green-600 mt-1">
            {data.trendIndicator} vs last year
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl"
            >
              <p className="text-sm text-slate-600 mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-slate-800">
                {metric.value}
              </p>
              <p
                className={`text-sm mt-1 font-medium ${metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolwideAnalytics;
