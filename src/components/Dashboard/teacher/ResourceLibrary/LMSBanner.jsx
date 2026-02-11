import React from "react";
import { Cloud, Link } from "lucide-react";

const LMSBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <Cloud size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">
              Cloud Storage & LMS Integration
            </h3>
            <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
              SKOLARO LMS
            </span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            All resources are backed up to cloud storage and ready for
            integration with Skolaro-based LMS modules. Share materials with
            colleagues and access from anywhere.
          </p>
        </div>
        <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
          <Link size={18} />
          <span>Connect LMS</span>
        </button>
      </div>
    </div>
  );
};

export default LMSBanner;
