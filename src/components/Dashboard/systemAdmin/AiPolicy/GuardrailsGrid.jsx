import React from "react";
import { Shield, CheckCircle2 } from "lucide-react";

const GuardrailsGrid = ({ guardrails, complianceMetrics }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Active Guardrails</h2>

      {/* Guardrails List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guardrails.map((guardrail) => (
          <div
            key={guardrail.id}
            className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="text-cyan-600" size={22} />
                <h3 className="text-lg font-bold text-slate-800">
                  {guardrail.name}
                </h3>
              </div>
              <CheckCircle2 className="text-green-500" size={20} />
            </div>

            <p className="text-sm font-medium text-slate-600 mb-3">
              {guardrail.type}
            </p>

            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <span className="text-slate-500">Trigger: </span>
                <span className="text-slate-700 font-medium">
                  {guardrail.trigger}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-slate-500">Action: </span>
                <span className="text-slate-700 font-medium">
                  {guardrail.action}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-cyan-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Success Rate</span>
                <span className="text-lg font-bold text-green-600">
                  {guardrail.successRate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Metrics */}
      <div className="mt-6 p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Compliance Metrics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-slate-500 mb-1">Privacy</p>
            <p className="text-2xl font-bold text-cyan-600">
              {complianceMetrics.privacyCompliance}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Safety</p>
            <p className="text-2xl font-bold text-blue-600">
              {complianceMetrics.safetyCompliance}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Fairness</p>
            <p className="text-2xl font-bold text-purple-600">
              {complianceMetrics.fairnessScore}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Transparency</p>
            <p className="text-2xl font-bold text-pink-600">
              {complianceMetrics.transparencyIndex}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardrailsGrid;
