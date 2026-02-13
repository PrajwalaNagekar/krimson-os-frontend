import React from "react";
import { BarChart3, ChevronDown } from "lucide-react";

const ExamHeader = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div className="relative mb-6 md:mb-8 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 md:p-8 text-white shadow-2xl overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm w-fit">
            <BarChart3 size={32} />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">
              Exam & Performance Dashboard
            </h1>
            <p className="text-white/90 text-sm">
              Track academic progress and examination results
            </p>
          </div>
          {/* Term Selector */}
          <div className="relative">
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="appearance-none px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold cursor-pointer hover:bg-white/30 transition-all pr-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="current" className="text-slate-800">
                Current Term
              </option>
              <option value="previous" className="text-slate-800">
                Previous Term
              </option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHeader;
