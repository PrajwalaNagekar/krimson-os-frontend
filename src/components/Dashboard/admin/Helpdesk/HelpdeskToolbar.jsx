import React from "react";
import { Search, Plus, Download } from "lucide-react";

const HelpdeskToolbar = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  stats,
}) => {
  return (
    <div className="space-y-4">
      {/* Status Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === "all"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          All Tickets
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${activeTab === "all" ? "bg-white/20" : "bg-slate-100"}`}
          >
            {stats.total}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("open")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === "open"
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Open Tickets
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${activeTab === "open" ? "bg-white/20" : "bg-slate-100"}`}
          >
            {stats.open}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("closed")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === "closed"
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Closed Tickets
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${activeTab === "closed" ? "bg-white/20" : "bg-slate-100"}`}
          >
            {stats.closed}
          </span>
        </button>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by ticket ID, subject, or submitter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              <span>Create Ticket</span>
            </div>
          </button>
          <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200">
            <div className="flex items-center gap-2">
              <Download size={18} />
              <span className="hidden md:inline">Export Report</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpdeskToolbar;
