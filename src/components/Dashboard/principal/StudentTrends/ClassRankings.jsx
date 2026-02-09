import React from "react";
import { Award, TrendingDown } from "lucide-react";
import ClassRankingCard from "./ClassRankingCard";

const ClassRankings = ({ topClasses, bottomClasses }) => {
  return (
    <div className="space-y-4">
      {/* Top 5 Classes */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-500" />
            Top 5 Classes
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Best attendance performers
          </p>
        </div>

        <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
          {topClasses.map((cls, idx) => (
            <ClassRankingCard key={idx} {...cls} type="top" />
          ))}
        </div>
      </div>

      {/* Bottom 5 Classes */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-500" />
            Bottom 5 Classes
          </h3>
          <p className="text-xs text-slate-600 mt-1">Need improvement</p>
        </div>

        <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
          {bottomClasses.map((cls, idx) => (
            <ClassRankingCard key={idx} {...cls} type="bottom" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassRankings;
