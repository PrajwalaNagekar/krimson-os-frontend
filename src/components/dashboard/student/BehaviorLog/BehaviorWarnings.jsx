import React, { useState } from "react";
import { AlertTriangle, CheckCircle, Badge } from "lucide-react";

const BehaviorWarnings = ({ warnings }) => {
  // eslint-disable-next-line
  const [expandedWarning, setExpandedWarning] = useState(null);

  if (!warnings || warnings.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-orange-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <AlertTriangle className="text-orange-500" size={24} />
        Character & Behaviour Notes (View)
      </h2>

      <div className="space-y-4">
        {warnings.map((warning) => (
          <div
            key={warning.id}
            className={`rounded-2xl p-5 border-2 transition-all ${
              warning.resolved
                ? "bg-green-50 border-green-200"
                : "bg-orange-50 border-orange-200"
            }`}
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                className={`p-2 rounded-xl ${
                  warning.resolved ? "bg-green-200" : "bg-orange-200"
                }`}
              >
                {warning.resolved ? (
                  <CheckCircle size={20} className="text-green-700" />
                ) : (
                  <AlertTriangle size={20} className="text-orange-700" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`font-bold text-base ${
                      warning.resolved ? "text-green-800" : "text-orange-800"
                    }`}
                  >
                    {warning.type} - {warning.severity}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-lg ${
                      warning.resolved
                        ? "bg-green-200 text-green-700"
                        : "bg-orange-200 text-orange-700"
                    }`}
                  >
                    {warning.resolved ? "Resolved" : "Active"}
                  </span>
                </div>
                <p
                  className={`text-sm mb-2 ${
                    warning.resolved ? "text-green-700" : "text-orange-700"
                  }`}
                >
                  {warning.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span>Reported by: {warning.teacher}</span>
                  <span>Date: {warning.date}</span>
                </div>
              </div>
            </div>

            {/* Counselor Notes */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge size={14} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase">
                  Counselor Notes
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                {warning.counselorNotes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehaviorWarnings;
