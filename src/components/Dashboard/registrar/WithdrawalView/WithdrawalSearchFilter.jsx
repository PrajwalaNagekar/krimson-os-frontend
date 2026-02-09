import React, { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

const WithdrawalSearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
  viewMode,
  filteredCount,
  totalCount,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">
            {viewMode === "active"
              ? "Active Withdrawal Requests"
              : "Archived Records"}
          </h2>
          <p className="text-sm text-slate-600">
            Showing {filteredCount} of {totalCount} requests
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 sm:min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${showFilters ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg" : "bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300"}`}
          >
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Filter Options */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-200">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
              Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
            >
              <option value="all">All Statuses</option>
              <option value="initiated">Initiated</option>
              <option value="in-progress">In Progress</option>
              <option value="ready-tc">Ready for TC</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawalSearchFilter;
