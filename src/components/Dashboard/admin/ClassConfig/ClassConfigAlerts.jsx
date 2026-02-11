import React from "react";
import { AlertTriangle } from "lucide-react";

const ClassConfigAlerts = ({ warnings }) => {
  if (warnings.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
          <AlertTriangle size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-amber-900 text-lg mb-1">
            Attention Required
          </h3>
          <p className="text-sm text-amber-800/80 mb-3">
            The following items require your immediate attention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {warnings.slice(0, 6).map((warning, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-amber-800 bg-white/60 p-2 rounded-lg border border-amber-100"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                {warning.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassConfigAlerts;
