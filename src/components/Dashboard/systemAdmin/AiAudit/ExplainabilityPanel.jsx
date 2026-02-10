import React from "react";
import { Brain, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

const ExplainabilityPanel = ({ reports, riskAssessment }) => {
  return (
    <div className="space-y-4">
      {/* Risk Assessment Summary */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          Risk Assessment Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border border-red-100">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-red-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">
                High Risk
              </span>
            </div>
            <p className="text-3xl font-bold text-red-600">
              {riskAssessment.highRisk}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-orange-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">
                Medium Risk
              </span>
            </div>
            <p className="text-3xl font-bold text-orange-600">
              {riskAssessment.mediumRisk}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">
                Low Risk
              </span>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {riskAssessment.lowRisk}
            </p>
          </div>
        </div>
      </div>

      {/* Explainability Reports */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Brain className="text-purple-500" size={20} />
          Explainability Reports
        </h2>

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-800">Decision Analysis</h3>
                <span className="text-xs text-slate-500">{report.logId}</span>
              </div>

              {/* Decision Factors */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-slate-600 mb-2">
                  Decision Factors:
                </p>
                <div className="space-y-2">
                  {report.decisionFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-700">
                            {factor.factor}
                          </span>
                          <span className="text-xs font-medium text-slate-600">
                            {factor.weight}% • {factor.value}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${factor.weight}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-3 p-3 bg-white rounded-lg border border-purple-200">
                <p className="text-xs font-semibold text-slate-600 mb-1">
                  Explanation:
                </p>
                <p className="text-sm text-slate-700">{report.explanation}</p>
              </div>

              {/* Alternative Outcomes */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-slate-600 mb-1">
                  Alternative Outcomes:
                </p>
                <p className="text-sm text-slate-700">
                  {report.alternativeOutcomes}
                </p>
              </div>

              {/* Bias Check */}
              <div className="flex items-center gap-2 pt-3 border-t border-purple-200">
                <CheckCircle2 className="text-green-500" size={16} />
                <span className="text-xs text-slate-600">
                  <strong>Bias Check:</strong> {report.biasCheck}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplainabilityPanel;
