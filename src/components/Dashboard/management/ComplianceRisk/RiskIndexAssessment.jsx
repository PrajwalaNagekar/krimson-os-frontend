import React from "react";
import { Shield } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/managementData";

const RiskIndexAssessment = () => {
  const { riskAssessment } = COMPLIANCE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "compliant":
      case "safe":
      case "excellent":
        return "bg-green-100 text-green-700 border-green-200";
      case "warning":
      case "moderate":
      case "good":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Risk Index Assessment</h2>
              <p className="text-sm text-white/80">
                Current risk exposure analysis
              </p>
            </div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
            <p className="text-sm text-white/80 mb-1">Overall Risk Level</p>
            <p className="text-2xl font-bold capitalize">
              {riskAssessment.overallRiskLevel}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <p className="text-sm text-white/80">Critical Risks</p>
            </div>
            <p className="text-3xl font-bold">{riskAssessment.criticalRisks}</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <p className="text-sm text-white/80">Moderate Risks</p>
            </div>
            <p className="text-3xl font-bold">{riskAssessment.moderateRisks}</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-sm text-white/80">Safe Items</p>
            </div>
            <p className="text-3xl font-bold">{riskAssessment.safeItems}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {riskAssessment.riskBreakdown.map((risk, index) => (
            <div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold">{risk.category}</span>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(risk.level)}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${risk.level === "safe" ? "bg-green-500" : risk.level === "moderate" ? "bg-yellow-500" : "bg-red-500"}`}
                  ></div>
                  <span className="capitalize">{risk.level}</span>
                </div>
              </div>
              <p className="text-sm text-white/90">{risk.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskIndexAssessment;
