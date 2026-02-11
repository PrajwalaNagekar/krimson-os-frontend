import React from "react";
import { Shield } from "lucide-react";

const PredictiveAnalyticsAlert = ({ atRiskCount, atRiskStudents }) => {
  if (atRiskCount === 0) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <Shield size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">Predictive Analytics Alert</h3>
            <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
              AI-POWERED
            </span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            {atRiskCount} student{atRiskCount > 1 ? "s are" : " is"} flagged as
            at-risk based on performance trends, attendance patterns, and
            behavioral analytics. Immediate intervention recommended.
          </p>
          <div className="flex flex-wrap gap-2">
            {atRiskStudents.map((s) => (
              <span
                key={s.id}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30"
              >
                {s.name} ({s.avgScore}%)
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsAlert;
