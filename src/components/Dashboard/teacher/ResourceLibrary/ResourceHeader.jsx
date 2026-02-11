import React from "react";
import { Upload } from "lucide-react";

const ResourceHeader = ({ stats }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
          Resource Library & Content Sharing
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Learning Resources Hub
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-base">
              {stats.total} approved materials • {stats.totalDownloads} total
              downloads
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
              <Upload size={20} />
              <div className="text-left">
                <div>Upload Resource</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceHeader;
