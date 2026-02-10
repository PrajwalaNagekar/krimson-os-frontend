import React from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const AuditStats = ({ stats }) => {
  const statCards = [
    {
      icon: Activity,
      color: "text-blue-500",
      label: "Total Logs",
      value: stats.totalLogs.toLocaleString(),
    },
    {
      icon: TrendingUp,
      color: "text-green-500",
      label: "Today",
      value: stats.todayLogs,
    },
    {
      icon: AlertTriangle,
      color: "text-red-500",
      label: "High Risk",
      value: stats.highRiskDecisions,
    },
    {
      icon: CheckCircle2,
      color: "text-cyan-500",
      label: "Flagged",
      value: stats.flaggedDecisions,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={stat.color} size={20} />
              <span className="text-xs text-slate-500">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">
            Explainability Score
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {stats.explainabilityScore}
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">
            Avg Confidence
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {stats.avgConfidence}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditStats;
