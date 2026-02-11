import React from "react";
import { Download } from "lucide-react";
import CCATabNavigation from "./CCATabNavigation";

const CCAHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
            Co-Curricular Hub
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            CCA Manager
          </h1>
          <p className="text-sm md:text-base text-white/90 font-medium max-w-xl">
            Manage clubs, plan sessions, and track student growth.
          </p>

          <div className="flex gap-3 mt-6">
            <button className="px-5 py-2.5 bg-white text-blue-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-50 shadow-lg transition-all flex items-center gap-2">
              <Download size={16} /> Export Data
            </button>
          </div>
        </div>

        {/* LabManager-style Floating Tabs Refactored to Glass Ribbon */}
        <CCATabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default CCAHeader;
