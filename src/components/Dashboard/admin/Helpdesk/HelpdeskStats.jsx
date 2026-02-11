import React from "react";
import { Layers, Timer, TrendingUp, MessageSquare } from "lucide-react";

const HelpdeskStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Tickets */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20">
            <Layers className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            All Time
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.total}
        </h3>
        <p className="text-sm font-semibold text-slate-500">Total Tickets</p>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-green-600 font-bold">
            {stats.closed} Resolved
          </span>
          <span className="text-orange-600 font-bold">{stats.open} Open</span>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100"></div>
      </div>

      {/* Average Resolution Time */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20">
            <Timer className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Avg Time
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.avgResolution}h
        </h3>
        <p className="text-sm font-semibold text-slate-500">Resolution Time</p>
        <div className="mt-3 pt-3 border-t border-slate-100">
          <span className="text-xs font-medium text-slate-400">
            Target: &lt; 24 hours
          </span>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100"></div>
      </div>

      {/* SLA Compliance */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
            <TrendingUp className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            SLA Rate
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.slaRate}%
        </h3>
        <p className="text-sm font-semibold text-slate-500">Compliance Rate</p>
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full"
              style={{ width: `${stats.slaRate}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100"></div>
      </div>

      {/* Category Breakdown */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20">
            <MessageSquare className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            By Category
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Technical</span>
            <span className="font-bold text-blue-600">{stats.technical}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Academic</span>
            <span className="font-bold text-green-600">{stats.academic}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">HR</span>
            <span className="font-bold text-purple-600">{stats.hr}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Finance</span>
            <span className="font-bold text-orange-600">{stats.finance}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100"></div>
      </div>
    </div>
  );
};

export default HelpdeskStats;
