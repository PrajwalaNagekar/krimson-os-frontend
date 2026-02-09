import React from "react";
import { BarChart2, Eye } from "lucide-react";
import CorrelationPoint from "./CorrelationPoint";

const CorrelationAnalysis = ({ correlationData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-purple-500" />
          Attendance vs Academic Results
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Correlation analysis by grade
        </p>
      </div>

      <div className="p-5 space-y-3">
        {correlationData.map((data, idx) => (
          <CorrelationPoint key={idx} {...data} />
        ))}

        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-800 mb-2 font-semibold">
            📊 Insights:
          </p>
          <p className="text-xs text-blue-700 leading-relaxed">
            Strong positive correlation (0.89) observed across all grades.
            Students with 90%+ attendance show significantly better academic
            performance, supporting intervention strategies for chronic
            absentees.
          </p>
        </div>

        <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
          <Eye className="w-4 h-4" />
          View Detailed Analysis
          <span className="text-[9px] opacity-80">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default CorrelationAnalysis;
