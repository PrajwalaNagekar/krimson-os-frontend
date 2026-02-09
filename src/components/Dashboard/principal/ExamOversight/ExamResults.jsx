import React from "react";
import { BarChart2, CheckCircle } from "lucide-react";
import PerformanceSummaryCard from "./PerformanceSummaryCard";

const ExamResults = ({ performanceSummaries }) => {
  return (
    <div className="space-y-6">
      {/* Performance Summaries */}
      <div>
        <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-green-500" />
          Auto-Generated Performance Summaries
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Student performance automatically analyzed upon result upload
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {performanceSummaries.map((summary, idx) => (
            <PerformanceSummaryCard key={idx} {...summary} />
          ))}
        </div>
      </div>

      {/* Publication Control */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-500 rounded-xl">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-green-900 mb-2">
              Publish Term Results
            </h4>
            <p className="text-sm text-green-800 mb-4">
              Once verified, results can be published to Student and Parent
              portals instantly. Ensure all marks entries are locked before
              proceeding. This action is irreversible.
            </p>
            <div className="flex gap-3">
              <button className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-md flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Confirm & Publish All
                <span className="text-[9px] opacity-80">(get in app)</span>
              </button>
              <button className="px-5 py-3 border-2 border-green-600 hover:bg-green-50 text-green-700 rounded-xl font-bold transition-all">
                View Summary Preview
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResults;
