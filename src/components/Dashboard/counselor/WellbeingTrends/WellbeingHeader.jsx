import React from "react";
import { HeartPulse, Activity } from "lucide-react";

const WellbeingHeader = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <HeartPulse size={32} />
            Wellbeing & Mental Health
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Monitor student wellness indicators and identify support needs
          </p>
        </div>

        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
          <div className="flex items-center gap-2">
            <Activity className="animate-pulse" size={18} />
            <span className="text-sm font-bold">Real-time Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingHeader;
