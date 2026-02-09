import React from "react";
import { AlertCircle } from "lucide-react";
import MilestoneCard from "./MilestoneCard";

const TermMilestones = ({ milestones }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-500" />
              Color-Coded Term Milestones
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Major academic events and breaks
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((milestone, idx) => (
            <MilestoneCard key={idx} {...milestone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermMilestones;
