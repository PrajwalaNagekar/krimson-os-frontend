import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  Layout,
  Bus,
  ChevronRight,
  Layers,
  MapPin,
  ArrowRight,
  Map,
  Plus,
  Clock,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { TRANSPORT_DATA } from "../../../../data/managementData";

const RouteDetailPanel = ({ route, onClose }) => {
  const { stops } = TRANSPORT_DATA;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl h-full shadow-2xl flex flex-col animate-slideInRight border-l border-white/20">
        {/* Modern Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/20 bg-white/50 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-5">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {route.id}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-widest">
                  Active Fleet Configuration
                </span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                {route.name}
              </h2>
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95">
            <Save size={16} />
            <span>Update Route</span>
          </button>
        </div>

        {/* Panel Content - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">
          {/* Section: Core Logistics */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Layout size={16} />
              </div>
              <h3 className="font-bold text-slate-900 tracking-tight">
                Core Logistics
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Assigned Vehicle
                </label>
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Bus size={14} />
                  </div>
                  <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all appearance-none cursor-pointer">
                    <option>{route.vehicle}</option>
                    <option>MH-12-XX-0000</option>
                  </select>
                  <ChevronRight
                    size={14}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Transport Fleet
                </label>
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Layers size={14} />
                  </div>
                  <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all appearance-none">
                    <option>{route.type}</option>
                  </select>
                  <ChevronRight
                    size={14}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Route Path Origin & Terminal
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-500">
                      <MapPin size={14} />
                    </div>
                    <input
                      type="text"
                      defaultValue="Central Station"
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all"
                    />
                  </div>
                  <ArrowRight size={16} className="text-slate-300 shrink-0" />
                  <div className="flex-1 relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-500">
                      <MapPin size={14} />
                    </div>
                    <input
                      type="text"
                      defaultValue="Main Campus"
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Fleet Journey Plan (Stops) */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <Map size={16} />
                </div>
                <h3 className="font-bold text-slate-900 tracking-tight">
                  Fleet Journey Plan
                </h3>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-100 text-slate-900 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-slate-200 transition-colors">
                <Plus size={14} />
                <span>Add Checkpoint</span>
              </button>
            </div>

            <div className="space-y-0 relative">
              {/* Vertical Connector Line */}
              <div className="absolute left-[21px] top-6 bottom-6 w-0.5 bg-slate-100 pointer-events-none" />

              {stops.map((stop, index) => (
                <div
                  key={stop.id}
                  className="relative pl-14 pb-10 last:pb-0 group"
                >
                  {/* Stop Marker */}
                  <div className="absolute left-0 top-1.5 w-11 h-11 flex items-center justify-center z-10">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-4 border-white shadow-md z-10 transition-transform group-hover:scale-125 ${
                        index === 0
                          ? "bg-emerald-500 ring-8 ring-emerald-50"
                          : index === stops.length - 1
                            ? "bg-rose-500 ring-8 ring-rose-50"
                            : "bg-slate-800 ring-8 ring-slate-50"
                      }`}
                    />
                  </div>

                  {/* Stop Card */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 pr-12 shadow-sm relative group-hover:border-slate-300 group-hover:shadow-md transition-all">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                    <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-200 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <Trash2 size={16} />
                    </button>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            Checkpoint {index + 1}
                          </span>
                          <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded uppercase tracking-tighter">
                            {stop.students} students
                          </span>
                        </div>
                        <input
                          type="text"
                          defaultValue={stop.name}
                          className="w-full bg-transparent font-bold text-slate-800 outline-none border-b border-transparent focus:border-slate-900 pb-0.5"
                        />
                      </div>

                      <div className="flex gap-4 shrink-0">
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-bold text-slate-400 tracking-widest pl-1">
                            Arrival
                          </label>
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200/50">
                            <Clock size={12} className="text-slate-400" />
                            <input
                              type="text"
                              defaultValue={stop.pickup}
                              className="w-16 text-xs font-bold text-slate-700 bg-transparent outline-none"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] uppercase font-bold text-slate-400 tracking-widest pl-1">
                            Departure
                          </label>
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200/50">
                            <Clock size={12} className="text-slate-400" />
                            <input
                              type="text"
                              defaultValue={stop.drop}
                              className="w-16 text-xs font-bold text-slate-700 bg-transparent outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend / Tip */}
            <div className="mt-8 p-5 bg-slate-900 rounded-2xl flex gap-4 text-white shadow-xl shadow-slate-900/10">
              <div className="shrink-0 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <AlertTriangle size={18} className="text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm tracking-tight text-white/95 uppercase">
                  Optimization Insight
                </h4>
                <p className="text-[11px] text-white/60 leading-relaxed font-medium">
                  Rerouting or reordering checkpoints will recalculate the
                  entire journey duration. Ensure that arrival times allow for a
                  5-minute buffer per stop during peak traffic hours (07:00 AM -
                  08:30 AM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetailPanel;
