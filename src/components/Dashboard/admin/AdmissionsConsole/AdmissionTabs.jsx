import React from "react";

const AdmissionTabs = ({ filterStatus, setFilterStatus, stats }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => setFilterStatus("all")}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
          filterStatus === "all"
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
        }`}
      >
        All Applications
        <span
          className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === "all" ? "bg-white/20" : "bg-slate-100"}`}
        >
          {stats.total}
        </span>
      </button>
      <button
        onClick={() => setFilterStatus("applied")}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
          filterStatus === "applied"
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
        }`}
      >
        Applied
        <span
          className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === "applied" ? "bg-white/20" : "bg-slate-100"}`}
        >
          {stats.applied}
        </span>
      </button>
      <button
        onClick={() => setFilterStatus("verified")}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
          filterStatus === "verified"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
        }`}
      >
        Verified
        <span
          className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === "verified" ? "bg-white/20" : "bg-slate-100"}`}
        >
          {stats.verified}
        </span>
      </button>
      <button
        onClick={() => setFilterStatus("enrolled")}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
          filterStatus === "enrolled"
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
        }`}
      >
        Enrolled
        <span
          className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === "enrolled" ? "bg-white/20" : "bg-slate-100"}`}
        >
          {stats.enrolled}
        </span>
      </button>
    </div>
  );
};

export default AdmissionTabs;
