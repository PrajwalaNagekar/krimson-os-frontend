import React from "react";
import { Plus } from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const EnrichmentHeader = ({ onWizardOpen }) => {
  const { header } = ENRICHMENT_DATA;

  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm border border-white/10">
          {header.badge}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {header.title}
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-base max-w-xl">
              {header.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onWizardOpen}
              className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 border-2 border-transparent hover:border-indigo-100"
            >
              <Plus size={20} className="stroke-[3px]" />
              <span>Create Challenge</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichmentHeader;
