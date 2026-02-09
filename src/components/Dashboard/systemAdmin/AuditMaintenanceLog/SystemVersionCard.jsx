import React from "react";
import { GitCommit, CheckCircle } from "lucide-react";

const SystemVersionCard = ({ data }) => {
  return (
    <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
            <GitCommit size={32} className="text-white" />
          </div>
          <div>
            <p className="text-white/80 text-sm font-medium">System Version</p>
            <h2 className="text-3xl font-bold text-white drop-shadow-sm">
              {data.version}
            </h2>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/70 text-sm">Status</span>
            <span className="flex items-center gap-1 text-white font-bold text-sm bg-green-500/20 px-2 py-1 rounded-lg border border-green-400/30">
              <CheckCircle size={14} className="text-green-300" /> {data.status}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70 text-sm">Last Update</span>
            <span className="text-white font-bold text-sm">
              {data.lastUpdate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/70 text-sm">Next Scheduled</span>
            <span className="text-white font-bold text-sm">
              {data.nextUpdate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemVersionCard;
