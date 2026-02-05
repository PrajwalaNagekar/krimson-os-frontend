import React from "react";
import { Search } from "lucide-react";

const ResourceHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-xl">
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Resource Library</h2>
            <p className="text-white/90 text-sm">
              Curated study materials for your subjects.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              size={20}
            />
            <input
              type="text"
              placeholder="Search topics (e.g. Gravity)..."
              className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 placeholder-white/70 text-white outline-none focus:bg-white/30 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceHeader;
