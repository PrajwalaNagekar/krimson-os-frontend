import React from "react";
import { Search } from "lucide-react";
import { STUDENT_DATA } from "../../../../data/studentData";

const HeroHeader = ({ searchQuery, onSearchChange }) => {
  const { title, subtitle, placeholder } = STUDENT_DATA.supportData.hero;

  return (
    <div className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3"></div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-white/90 text-lg mb-8 max-w-2xl font-medium">
          {subtitle}
        </p>

        <div className="relative max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-800 bg-white shadow-lg outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium placeholder:text-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
