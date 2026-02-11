import React from "react";
import { Compass, FileText, Award, ChevronRight } from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const StudentMasteryCards = () => {
  const { students } = ENRICHMENT_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white rounded-[2.5rem] border border-slate-100 shadow-md p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-indigo-100 transition-colors"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-xl">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    {student.name}
                  </h3>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase tracking-widest rounded-md border border-indigo-100">
                    {student.participation} Level
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Topic:{" "}
                  <span className="text-indigo-500">{student.topic}</span>
                </p>
              </div>
            </div>

            {/* Skill Mastery Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {Object.entries(student.mastery).map(([skill, val]) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-500">
                      {skill.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-slate-800">{val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div
                      className="h-full bg-slate-800 rounded-full"
                      style={{ width: `${val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Portfolio Glimpse */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Compass size={14} className="text-indigo-500" /> Evidence
                Portfolio
              </h4>
              <div className="flex gap-3">
                {student.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-indigo-300 transition-all cursor-pointer group/item"
                  >
                    <FileText
                      size={16}
                      className="text-slate-400 mb-2 group-hover/item:text-indigo-500"
                    />
                    <p className="text-[11px] font-bold text-slate-700 leading-tight truncate">
                      {proj}
                    </p>
                    <p className="text-[9px] text-slate-400 mt-1">
                      Research Paper
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Milestones */}
            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
              <div className="flex -space-x-2">
                {student.badges.map((badge, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group/badge hover:-translate-y-1 transition-transform cursor-help"
                  >
                    <Award size={18} className="text-amber-500" />
                    <div className="absolute bottom-full mb-2 hidden group-hover/badge:block bg-slate-900 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap z-50">
                      {badge}
                    </div>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 border border-transparent hover:border-indigo-100">
                Next Challenge <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentMasteryCards;
