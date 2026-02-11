import React from "react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const AssessmentHeader = ({ activeTab }) => {
  const { header } = TEACHER_DATA.assessmentTools;
  const data = header[activeTab];

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 opacity-10 rounded-full blur-3xl -ml-10 -mb-10 animate-pulse"></div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] md:text-xs font-bold mb-4 backdrop-blur-md shadow-sm border border-white/30 uppercase tracking-widest">
          {data.screenId}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
              {data.title}
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHeader;
