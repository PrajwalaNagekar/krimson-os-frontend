import React from "react";
import { Shield, Plus } from "lucide-react";

const InterventionHeader = ({ onNewCase }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <Shield size={32} />
            Case Management
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Track interventions and counseling follow-ups
          </p>
        </div>

        <button
          onClick={onNewCase}
          className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105"
        >
          <Plus size={18} />
          New Case
        </button>
      </div>
    </div>
  );
};

export default InterventionHeader;
