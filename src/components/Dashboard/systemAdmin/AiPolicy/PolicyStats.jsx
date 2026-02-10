import React from "react";
import { Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const PolicyStats = ({ stats }) => {
  const statCards = [
    {
      icon: Shield,
      color: "text-cyan-500",
      label: "Total Policies",
      value: stats.totalPolicies,
    },
    {
      icon: CheckCircle,
      color: "text-green-500",
      label: "Active",
      value: stats.activePolicies,
    },
    {
      icon: AlertTriangle,
      color: "text-orange-500",
      label: "Pending Review",
      value: stats.pendingReview,
    },
    {
      icon: XCircle,
      color: "text-red-500",
      label: "Violations Today",
      value: stats.violationsToday,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={stat.color} size={28} />
              <span className="text-sm font-medium text-slate-600">
                {stat.label}
              </span>
            </div>
            <p className="text-4xl font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-base font-semibold text-slate-700 mb-3">
            Compliance Rate
          </h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {stats.complianceRate}
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-base font-semibold text-slate-700 mb-3">
            Active Guardrails
          </h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {stats.guardrailsActive}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyStats;
