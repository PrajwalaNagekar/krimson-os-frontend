import React from "react";
import { Award } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/managementData";

const AuditReadinessIndex = () => {
  const { auditReadiness } = COMPLIANCE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-700 border-green-200";
      case "good":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Audit Readiness Index
          </h2>
          <p className="text-sm text-gray-600">Quarterly assessment report</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          {auditReadiness.overallScore}%
        </p>
        <p className="text-sm text-gray-600">
          Last: {auditReadiness.lastQuarterly} • Next:{" "}
          {auditReadiness.nextQuarterly}
        </p>
      </div>

      <div className="space-y-3">
        {auditReadiness.categories.map((cat, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">{cat.name}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg font-bold ${cat.score >= 95 ? "text-green-600" : cat.score >= 85 ? "text-blue-600" : "text-yellow-600"}`}
                >
                  {cat.score}%
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(cat.status)}`}
                >
                  {cat.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-full rounded-full transition-all ${cat.score >= 95 ? "bg-gradient-to-r from-green-400 to-emerald-500" : cat.score >= 85 ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-yellow-400 to-orange-500"}`}
                style={{ width: `${cat.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditReadinessIndex;
