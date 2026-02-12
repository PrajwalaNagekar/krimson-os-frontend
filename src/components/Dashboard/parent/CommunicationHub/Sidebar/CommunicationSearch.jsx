import React from "react";
import { Search, Filter } from "lucide-react";

const CommunicationSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={16}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search conversations..."
          className="w-full pl-9 md:pl-11 pr-3 md:pr-4 py-2.5 md:py-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300 font-medium placeholder:text-slate-400"
        />
      </div>
      <button className="p-2.5 md:p-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
        <Filter size={16} className="md:w-[18px] md:h-[18px] text-slate-600" />
      </button>
    </div>
  );
};

export default CommunicationSearch;
