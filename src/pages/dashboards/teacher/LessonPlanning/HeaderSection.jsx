import React from 'react';
import { Plus, ChevronDown, Calendar, BookOpen, Target, Sparkles } from 'lucide-react';

const HeaderSection = ({
    currentWeek,
    totalLessons,
    showPlanOptions,
    setShowPlanOptions,
    handleCreateNew
}) => {
    return (
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative">
            {/* Background blobs with their own clipping to prevent dropdown from being cut off */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </div>

            <div className="relative z-10 text-left">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                    Lesson Planning & Upload Center
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                            Weekly Academic Planner
                        </h1>
                        <p className="opacity-90 font-medium text-sm md:text-base">
                            {currentWeek} • {totalLessons} Lessons Planned
                        </p>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowPlanOptions(!showPlanOptions)}
                            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 w-fit"
                        >
                            <Plus size={20} />
                            <span>New Lesson Plan</span>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${showPlanOptions ? 'rotate-180' : ''}`} />
                        </button>

                        {showPlanOptions && (
                            <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-50 py-3 z-[100] animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-black/5">
                                <div className="px-5 py-2 mb-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Plan Type</p>
                                </div>

                                <button
                                    onClick={() => handleCreateNew('Weekly Lesson Plan')}
                                    className="w-full px-5 py-3 text-left hover:bg-blue-50/50 flex items-start gap-4 transition-all duration-200 group relative"
                                >
                                    <div className="p-2.5 bg-blue-100/50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors text-sm">Weekly Lesson Plan</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Schedule lessons for the week</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleCreateNew('Term Plan')}
                                    className="w-full px-5 py-3 text-left hover:bg-purple-50/50 flex items-start gap-4 transition-all duration-200 group"
                                >
                                    <div className="p-2.5 bg-purple-100/50 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <BookOpen size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-700 group-hover:text-purple-600 transition-colors text-sm">Term Plan</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Define goals for the semester</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleCreateNew('Annual Plan')}
                                    className="w-full px-5 py-3 text-left hover:bg-green-50/50 flex items-start gap-4 transition-all duration-200 group"
                                >
                                    <div className="p-2.5 bg-green-100/50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Target size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-700 group-hover:text-green-600 transition-colors text-sm">Annual Plan</p>
                                        <p className="text-[11px] text-slate-500 font-medium">Year-long academic roadmap</p>
                                    </div>
                                </button>

                                <div className="mt-2 pt-2 border-t border-slate-50 px-5">
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                                        <Sparkles size={12} className="text-amber-400" />
                                        <span>AI ASSISTED PLANNING AVAILABLE</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
