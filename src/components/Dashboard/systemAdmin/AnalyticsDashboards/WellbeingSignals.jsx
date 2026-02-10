import React from "react";
import { Heart, Activity, Users, AlertTriangle } from "lucide-react";

const WellbeingSignals = ({ data }) => {
  const getTrendColor = (trend) => {
    if (trend === "improving") return "text-green-600";
    if (trend === "concern") return "text-red-600";
    return "text-blue-600";
  };

  const getSeverityColor = (severity) => {
    if (severity === "High") return "bg-red-100 text-red-700";
    if (severity === "Medium") return "bg-orange-100 text-orange-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Heart className="text-pink-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Overall Wellbeing
            </span>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {data.overallWellbeing}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Students Monitored
            </span>
          </div>
          <p className="text-4xl font-bold text-blue-600">
            {data.studentsMonitored.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="text-orange-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Active Alerts
            </span>
          </div>
          <p className="text-4xl font-bold text-orange-600">
            {data.alertsActive}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Activity className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Support Active
            </span>
          </div>
          <p className="text-4xl font-bold text-green-600">
            {data.supportActive}
          </p>
        </div>
      </div>

      {/* Wellbeing Indicators */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Wellbeing Indicators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.wellbeingIndicators.map((indicator, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-800">
                  {indicator.category}
                </h4>
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-medium capitalize ${getTrendColor(indicator.trend)}`}
                >
                  {indicator.trend}
                </span>
              </div>
              <p className="text-4xl font-bold text-purple-600">
                {indicator.score}/10
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Concerns */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Recent Concerns
        </h3>
        <div className="space-y-4">
          {data.recentConcerns.map((concern, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    {concern.student}
                  </h4>
                  <p className="text-sm text-slate-600">{concern.concern}</p>
                </div>
                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${getSeverityColor(concern.severity)}`}
                  >
                    {concern.severity}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                    {concern.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellbeingSignals;
