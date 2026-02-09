import React from "react";
import { TrendingUp, BarChart2, Award, AlertCircle, Users } from "lucide-react";

const SummaryStats = () => {
  // We can pass data as props or use the static data here if it's specific to this view
  // For now, hardcoding based on the original file to match usage

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              School Average
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              79.2%
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-green-600 font-bold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> +2.3% from last term
        </p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Top Performer
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Science
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
            <Award className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Average: 85% • 94% pass rate</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Needs Attention
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-red-600">2</h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Departments below threshold</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Pass Rate
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              89.4%
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Across all subjects</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

export default SummaryStats;
