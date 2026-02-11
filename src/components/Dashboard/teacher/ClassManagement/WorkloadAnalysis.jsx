import React from "react";
import { BarChart3, AlertCircle, Clock, CheckCircle } from "lucide-react";

const WorkloadAnalysis = ({ homeworkLoad }) => {
  return (
    <div className="md:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
            <BarChart3 size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
              Student Workload Analysis
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
              Grade 9-A • Week 4 February
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl">
          <button className="px-4 py-2 bg-white text-slate-800 rounded-lg shadow-sm text-[10px] font-bold uppercase tracking-wider">
            Visual Chart
          </button>
          <button className="px-4 py-2 text-slate-400 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:text-slate-600 transition-all">
            Tabular Data
          </button>
        </div>
      </div>

      {/* Workload Bars */}
      <div className="space-y-8">
        <div className="grid grid-cols-5 gap-6 h-64 items-end px-4">
          {homeworkLoad.daily.map((data, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="relative w-full">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                  {data.load}% Load
                </div>
                <div
                  className={`w-full rounded-2xl transition-all duration-1000 ${data.load > 80 ? "bg-red-500 shadow-lg shadow-red-200" : data.load > 50 ? "bg-orange-400 shadow-lg shadow-orange-100" : "bg-emerald-400 shadow-lg shadow-emerald-100"}`}
                  style={{ height: `${data.load * 2}px` }}
                ></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                {data.day}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shadow-inner">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 tracking-tight">
                Overload Warnings
              </p>
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-0.5">
                Thursday: 95% Volume
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 tracking-tight">
                Average Time/Day
              </p>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-0.5">
                54 Minutes Needed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 tracking-tight">
                Balance Status
              </p>
              <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mt-0.5">
                Optimized for Wed/Fri
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkloadAnalysis;
