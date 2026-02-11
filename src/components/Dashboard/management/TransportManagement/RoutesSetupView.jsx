import React, { useState } from "react";
import { Search, Bus, MapPin, Timer, ChevronRight } from "lucide-react";
import { TRANSPORT_DATA } from "../../../../data/managementData";

const RoutesSetupView = ({ onRouteSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { routes } = TRANSPORT_DATA;

  return (
    <div className="space-y-6">
      {/* Filtering Header - Glass Style */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-xl">
        <div className="relative flex-1 w-full max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search route name, ID, or vehicle..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="bg-white/50 backdrop-blur-sm border border-slate-200 px-4 py-2.5 rounded-2xl text-sm font-medium text-slate-600 outline-none hover:border-slate-300">
            <option>All Types</option>
            <option>Bus</option>
            <option>Van</option>
          </select>
        </div>
      </div>

      {/* Routes Grid - Card Based Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {routes.map((route) => (
          <div
            key={route.id}
            onClick={() => onRouteSelect(route)}
            className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer group transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Body */}
            <div className="p-6 flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${route.status === "Active" ? "from-cyan-400 to-blue-500" : "from-slate-400 to-slate-500"} text-white shadow-lg group-hover:rotate-6 transition-transform`}
                >
                  <Bus size={24} />
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border-2 ${
                    route.status === "Active"
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {route.status}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  {route.id}
                </span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  {route.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {route.stops} Stops
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-colors">
                    <Timer size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {route.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-slate-50/50 border-t border-white/20 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
              <span className="text-[11px] font-bold text-slate-400 group-hover:text-white/80 transition-colors">
                Vehicle: {route.vehicle}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 group-hover:text-white transition-colors">
                <span>Manage</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesSetupView;
