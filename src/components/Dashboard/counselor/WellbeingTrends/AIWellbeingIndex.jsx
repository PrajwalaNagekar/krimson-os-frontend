import React from "react";
import { BrainCircuit, Sparkles } from "lucide-react";

const AIWellbeingIndex = ({ avgMoodIndex }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-2xl -ml-12 -mb-12"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <BrainCircuit size={24} />
              </div>
              <h2 className="text-2xl font-bold">AI Wellbeing Index</h2>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold flex items-center gap-1">
                <Sparkles size={12} />
                CereBro Powered
              </span>
            </div>
            <p className="text-white/80 text-sm max-w-2xl leading-relaxed">
              AI-generated score based on attendance patterns, academic stress
              markers, behavioral observations, and self-reported mood logs.
              Updated daily.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-baseline justify-center md:justify-end gap-2">
              <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">
                {avgMoodIndex}
              </span>
              <span className="text-2xl text-white/70">/10</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold">Stable Range</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWellbeingIndex;
