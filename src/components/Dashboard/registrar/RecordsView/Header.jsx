import React from "react";
import { FolderOpen } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
          Student Records & Document Repository
        </h1>
        <p className="text-slate-600 text-sm md:text-base font-medium">
          Centralized student record and document management system
        </p>
      </div>

      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
        <FolderOpen className="w-5 h-5 text-blue-600" />
        <div className="text-left">
          <p className="text-xs text-slate-500 font-semibold">
            Record Completion
          </p>
          <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
            97.3%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
