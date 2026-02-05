import React from "react";
import { Trophy, Clock, MapPin, User, ChevronRight } from "lucide-react";

const CCABlocks = ({ ccaBlocks }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Trophy className="text-pink-500" size={20} /> Co-Curricular Activities
      </h3>

      <div className="space-y-3">
        {ccaBlocks.map((cca) => (
          <div
            key={cca.id}
            className="p-4 rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50 transition-all hover:shadow-md group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl flex-shrink-0">{cca.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-800">
                    {cca.activity}
                  </h4>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-bold">
                    {cca.type}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-semibold">
                    <Clock size={12} className="text-slate-400" /> {cca.time}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-slate-400" /> {cca.venue}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <User size={12} className="text-slate-400" />{" "}
                    {cca.coach || cca.mentor}
                  </span>
                </div>
              </div>
              <div className="hidden group-hover:block">
                <button className="p-2 bg-white text-purple-600 rounded-full shadow-sm hover:bg-purple-50 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCABlocks;
