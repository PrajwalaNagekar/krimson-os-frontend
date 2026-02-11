import React from "react";
import { Trophy, Search } from "lucide-react";

const AchievementsSection = ({ achievements }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-slate-800 flex items-center gap-3">
          <div className="p-2 bg-amber-50 rounded-lg">
            <Trophy size={16} className="text-amber-600" />
          </div>
          Achievements & Highlights
        </h4>
        <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
          + New Entry
        </button>
      </div>
      <div className="space-y-4">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm italic shadow-sm">
                {ach.rank}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">{ach.title}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {ach.date}
                </p>
              </div>
            </div>
            <button className="p-2 text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all">
              <Search size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
