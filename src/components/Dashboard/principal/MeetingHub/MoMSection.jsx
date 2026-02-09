import React from "react";
import { FileText } from "lucide-react";
import MoMCard from "./MoMCard";

const MoMSection = ({ minutesOfMeetings }) => {
  return (
    <div className="border-t border-slate-200 bg-slate-50">
      <div className="p-4 sm:p-5">
        <h4 className="font-bold text-sm sm:text-base text-slate-800 mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
          Recent MoM
        </h4>
        <div className="space-y-2 sm:space-y-3">
          {minutesOfMeetings.slice(0, 2).map((mom, idx) => (
            <MoMCard key={idx} mom={mom} />
          ))}
        </div>
        <button className="w-full mt-3 px-3 py-2 border-2 border-slate-300 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 rounded-lg text-xs sm:text-sm font-bold transition-all">
          View All Minutes
          <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default MoMSection;
