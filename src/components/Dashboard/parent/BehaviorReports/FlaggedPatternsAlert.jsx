import React from "react";
import { ShieldAlert, Flag, Info, MessageCircle } from "lucide-react";

const FlaggedPatternsAlert = ({ patterns, onEscalate }) => {
  if (!patterns.hasFlags) return null;

  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-amber-300 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex-shrink-0">
            <ShieldAlert size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2 flex items-center gap-2">
              <Flag size={18} className="text-amber-600" />
              Pattern Detected - Attention Required
            </h3>
            {patterns.patterns.map((pattern) => (
              <div
                key={pattern.id}
                className="bg-white/60 rounded-xl p-3 md:p-4 mb-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-sm">
                    {pattern.pattern}
                  </h4>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      pattern.severity === "high"
                        ? "bg-red-100 text-red-700"
                        : pattern.severity === "medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {pattern.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  <span className="font-medium">Frequency:</span>{" "}
                  {pattern.frequency}
                </p>
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-2 mb-3">
                  <p className="text-xs text-cyan-800 flex items-start gap-2">
                    <Info size={12} className="flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-bold">Recommendation:</span>{" "}
                      {pattern.recommendation}
                    </span>
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={onEscalate}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold">
                    Escalate to School Counselor
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlaggedPatternsAlert;
