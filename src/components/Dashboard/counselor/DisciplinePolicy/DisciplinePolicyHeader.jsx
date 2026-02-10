import React from "react";
import { Scale, Plus, FileDown } from "lucide-react";

const DisciplinePolicyHeader = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <Scale size={32} />
            Discipline Policy Setup
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Manage school discipline policies, rules, and violation tracking
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-white font-bold hover:bg-white/30 transition-all">
            <FileDown size={18} />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
            <Plus size={18} />
            Add Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisciplinePolicyHeader;
