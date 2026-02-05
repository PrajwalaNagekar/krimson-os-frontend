import React from 'react';
import { Users, UserCheck, UserX, Timer } from 'lucide-react';

const StatsSection = ({ stats, viewMode, setViewMode, isPastDate }) => {
    return (
        <div className="relative">
            {isPastDate && (
                <div className="absolute -top-6 right-2 flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest animate-fadeIn">
                    <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" />
                    Viewing Historical Records
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                    className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'all'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white border-blue-500 shadow-lg'
                        : 'bg-white border-blue-200 hover:border-blue-300'
                        }`}
                    onClick={() => setViewMode('all')}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'all' ? 'text-white/80' : 'text-slate-400'}`}>
                            Total Students
                        </p>
                        <Users className={viewMode === 'all' ? 'text-white opacity-60' : 'text-blue-400 opacity-60'} size={20} />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'all' ? 'text-white' : 'text-slate-800'}`}>
                        {stats.total}
                    </h3>
                </div>

                <div
                    className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'present'
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg'
                        : 'bg-white border-green-200 hover:border-green-300'
                        }`}
                    onClick={() => setViewMode('present')}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'present' ? 'text-white/80' : 'text-slate-400'}`}>
                            Present
                        </p>
                        <UserCheck className={viewMode === 'present' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'present' ? 'text-white' : 'text-green-600'}`}>
                        {stats.present}
                    </h3>
                </div>

                <div
                    className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'absent'
                        ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg'
                        : 'bg-white border-red-200 hover:border-red-300'
                        }`}
                    onClick={() => setViewMode('absent')}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'absent' ? 'text-white/80' : 'text-slate-400'}`}>
                            Absent
                        </p>
                        <UserX className={viewMode === 'absent' ? 'text-white opacity-60' : 'text-red-400 opacity-60'} size={20} />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'absent' ? 'text-white' : 'text-red-600'}`}>
                        {stats.absent}
                    </h3>
                </div>

                <div
                    className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'late'
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg'
                        : 'bg-white border-orange-200 hover:border-orange-300'
                        }`}
                    onClick={() => setViewMode('late')}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'late' ? 'text-white/80' : 'text-slate-400'}`}>
                            Late
                        </p>
                        <Timer className={viewMode === 'late' ? 'text-white opacity-60' : 'text-orange-400 opacity-60'} size={20} />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'late' ? 'text-white' : 'text-orange-600'}`}>
                        {stats.late}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
