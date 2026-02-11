import React, { useState } from "react";
import {
  Calendar,
  Shield,
  Bus,
  Layers,
  Users,
  ChevronRight,
  UserPlus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  UserCheck,
} from "lucide-react";
import { TRANSPORT_DATA } from "../../../../data/managementData";

const RosterView = () => {
  const [selectedDate, setSelectedDate] = useState("2026-02-09");
  const [shift, setShift] = useState("Morning");
  const [expandedRoute, setExpandedRoute] = useState("R-101");
  const { rosters } = TRANSPORT_DATA;

  return (
    <div className="space-y-6">
      {/* Roster Header/Controls - Glass Style */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-xl">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
            <Calendar size={16} className="text-slate-400" />
            <input
              type="date"
              className="bg-transparent text-sm font-bold text-slate-800 outline-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="flex bg-slate-200/50 p-1 rounded-xl">
            {["Morning", "Afternoon", "Full Day"].map((s) => (
              <button
                key={s}
                onClick={() => setShift(s)}
                className={`px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all uppercase tracking-wider ${
                  shift === s
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all flex items-center gap-2">
            <Shield size={16} className="text-slate-400" />
            <span>Lock Daily Manifest</span>
          </button>
        </div>
      </div>

      {/* Roster Logs list */}
      <div className="space-y-4">
        {rosters.map((roster) => (
          <div
            key={roster.id}
            className={`bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-300 ${
              expandedRoute === roster.id
                ? "border-white/40 ring-4 ring-blue-500/10 shadow-2xl scale-[1.01]"
                : "border-white/20 shadow-lg hover:shadow-xl hover:border-white/40"
            }`}
          >
            {/* Log Summary */}
            <div
              className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              onClick={() =>
                setExpandedRoute(expandedRoute === roster.id ? null : roster.id)
              }
            >
              <div className="flex items-center gap-5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                    expandedRoute === roster.id
                      ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white border-transparent rotate-6 shadow-lg"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                >
                  <Bus size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-none mb-2">
                    {roster.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 grayscale opacity-70">
                      <Layers size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {roster.vehicle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 grayscale opacity-70">
                      <Users size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {roster.students} students
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1.5 italic">
                    Manifest Status
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] text-slate-400 font-medium">
                      Modified {roster.lastModified}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${roster.status === "Ready" ? "bg-emerald-500" : "bg-amber-500"}`}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      roster.status === "Ready"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-orange-100 text-orange-700 border-orange-200"
                    }`}
                  >
                    {roster.status}
                  </div>
                  <div
                    className={`p-2 rounded-xl transition-all ${expandedRoute === roster.id ? "bg-slate-900 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}
                  >
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Operational Detail */}
            {expandedRoute === roster.id && (
              <div className="border-t border-slate-100 bg-slate-50/50 p-8 space-y-10 animate-fadeIn">
                {/* 1. Fleet & Staff Detail (Compressed Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Assigned Vehicle
                    </label>
                    <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                      <option>{roster.vehicle}</option>
                      <option>MH-12-XX-0000 (Standby)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Primary Operator
                    </label>
                    <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                      <option>{roster.driver}</option>
                      <option>Suresh Raina</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Medical/Safety Attendant
                    </label>
                    <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                      <option>{roster.attendant || "Deploy Attendant"}</option>
                      <option>Meera Bai</option>
                    </select>
                  </div>
                </div>

                {/* 2. Student Cargo Section - Manifest Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30 flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                      Manifest Allocation
                    </h4>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-[10px] uppercase tracking-wider hover:bg-slate-50 transition-all">
                      <UserPlus size={14} />
                      <span>Append Seat</span>
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          <th className="px-6 py-4 font-bold">
                            Passenger Name
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Origin Checkpoint
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Terminal Checkpoint
                          </th>
                          <th className="px-6 py-4 font-bold text-center">
                            Status
                          </th>
                          <th className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[1, 2, 3].map((i) => (
                          <tr
                            key={i}
                            className="hover:bg-slate-50/80 transition-colors group"
                          >
                            <td className="px-6 py-4">
                              <span className="text-xs font-bold text-slate-800 block">
                                Student Name {i}
                              </span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase">
                                Grade 4-B | Male
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">
                                  Camp East Gate
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                <span className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">
                                  Blue Ridge Heights
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center">
                                <span
                                  className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest ${
                                    i === 3
                                      ? "bg-rose-50 text-rose-600 border border-rose-100"
                                      : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                  }`}
                                >
                                  {i === 3 ? "De-allocated" : "Boarded"}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="p-2 text-slate-200 hover:text-rose-500 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                    <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">
                      Inspect Entire Manifest (24 Students)
                    </button>
                  </div>
                </div>

                {/* 3. Operational Exception Block */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                      <Shield size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                        Operational Protocol
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium">
                        Log route anomalies or staff substitutes
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-white transition-all group">
                      <div className="w-6 h-6 rounded flex items-center justify-center border-2 border-slate-300 group-hover:border-slate-900 transition-colors">
                        <CheckCircle2
                          size={14}
                          className="text-white bg-slate-900 rounded-px opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        Assign Substitute Fleet/Operator
                      </span>
                    </div>
                    <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Incident Report Root Cause
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Engine service, Operator sick leave..."
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:bg-white focus:border-slate-900 outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Manifest Control */}
                <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-100">
                  <button className="flex-1 py-3.5 px-6 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <AlertCircle size={16} className="text-rose-500" />
                    Void Roster
                  </button>
                  <button className="flex-1 py-3.5 px-6 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/20 hover:translate-y-[-2px] hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    <UserCheck size={18} />
                    Commit Roster
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RosterView;
