import React from "react";
import { Home, Download, Filter } from "lucide-react";

const AcademicHeader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center shadow-lg">
            <Home className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              🏠 Academic Dashboard
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Academic overview and performance insights
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicHeader;
