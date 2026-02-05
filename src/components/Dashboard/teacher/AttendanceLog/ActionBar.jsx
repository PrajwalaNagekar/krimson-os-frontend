import React from 'react';
import { Search, CheckCircle, TrendingUp, ChevronDown, Timer } from 'lucide-react';

const ActionBar = ({
    searchQuery,
    setSearchQuery,
    markAllPresent,
    showSummary,
    setShowSummary,
    stats,
    selectedPeriod,
    isPastDate
}) => {
    return (
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, roll number, or ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
                    />
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={!isPastDate ? markAllPresent : undefined}
                        disabled={isPastDate}
                        className={`px-6 py-3 rounded-xl font-bold shadow-md transition-all flex items-center gap-2 active:scale-95 ${isPastDate
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                            }`}
                    >
                        <CheckCircle size={18} />
                        <span className="hidden md:inline">Mark All Present</span>
                        <span className="md:hidden">All Present</span>
                        {isPastDate && <span className="ml-1 text-[8px] border border-slate-300 px-1 rounded">LOCKED</span>}
                    </button>
                    <button
                        onClick={() => setShowSummary(!showSummary)}
                        className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
                    >
                        <TrendingUp size={18} />
                        <span className="hidden md:inline">Summary</span>
                        <ChevronDown size={16} className={`transition-transform ${showSummary ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Summary Panel */}
            {showSummary && (
                <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-slate-800 mb-3 text-sm">Attendance Summary</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center">
                            <p className="text-xs text-slate-500 mb-1">Attendance Rate</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{stats.percentage}%</h3>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-slate-500 mb-1">Present</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-green-600">{stats.present}</h3>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-slate-500 mb-1">Absent</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{stats.absent}</h3>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-slate-500 mb-1">Late Arrivals</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{stats.late}</h3>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 flex items-center gap-2">
                            <Timer size={14} className="text-purple-500" />
                            Currently Logging: {selectedPeriod}
                        </span>
                        <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">View All Periods Report</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionBar;
