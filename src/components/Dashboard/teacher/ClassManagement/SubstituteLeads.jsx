import React from "react";
import { GraduationCap, Clock, Layout } from "lucide-react";

const SubstituteLeads = ({ teachers }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
      <Layout className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
      <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
        <GraduationCap size={20} className="text-blue-400" />
        Substitute Selection
      </h3>
      <div className="space-y-4">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 cursor-pointer transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-bold">{teacher.name}</p>
              <span className="text-[9px] font-bold text-emerald-400 uppercase">
                {teacher.match} Match
              </span>
            </div>
            <p className="text-[10px] text-white/50 mb-1">{teacher.sub}</p>
            <div className="flex items-center gap-2 text-[10px] text-blue-300">
              <Clock size={10} />
              {teacher.avail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubstituteLeads;
