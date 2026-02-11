import React, { useState } from 'react';
import {
    Calendar, ChevronLeft, ChevronRight, Lock, Unlock,
    Sparkles, AlertCircle, Clock, CheckCircle2, MoreVertical,
    GripHorizontal, Info
} from 'lucide-react';

const SchemeOfWork = () => {
    const [isLocked, setIsLocked] = useState(false);
    const [currentTerm, setCurrentTerm] = useState('Term 2 (Jan - Mar 2026)');

    // Sample data for weeks
    const [weeks, setWeeks] = useState([
        {
            id: 1,
            label: 'Week 1',
            dates: 'Jan 5 - Jan 9',
            units: [
                { id: 'u1', name: 'Intro to Algebra', duration: 1, color: 'bg-blue-500' }
            ],
            assessments: [],
            isHoliday: false
        },
        {
            id: 2,
            label: 'Week 2',
            dates: 'Jan 12 - Jan 16',
            units: [
                { id: 'u1', name: 'Intro to Algebra', duration: 1, color: 'bg-blue-500' }
            ],
            assessments: [
                { id: 'a1', name: 'Quiz 1', type: 'Quiz' }
            ],
            isHoliday: false
        },
        {
            id: 3,
            label: 'Week 3',
            dates: 'Jan 19 - Jan 23',
            units: [
                { id: 'u2', name: 'Linear Equations', duration: 1, color: 'bg-purple-500' }
            ],
            assessments: [],
            isHoliday: false
        },
        {
            id: 4,
            label: 'Week 4',
            dates: 'Jan 26 - Jan 30',
            units: [],
            assessments: [],
            isHoliday: true,
            holidayName: 'Republic Day Break'
        },
        {
            id: 5,
            label: 'Week 5',
            dates: 'Feb 2 - Feb 6',
            units: [
                { id: 'u2', name: 'Linear Equations', duration: 1, color: 'bg-purple-500' }
            ],
            assessments: [
                { id: 'a2', name: 'Monthly Test', type: 'Test' }
            ],
            isHoliday: false
        },
        {
            id: 6,
            label: 'Week 6',
            dates: 'Feb 9 - Feb 13',
            units: [
                { id: 'u3', name: 'Quadratic Basics', duration: 1, color: 'bg-emerald-500' }
            ],
            assessments: [],
            isHoliday: false
        },
        {
            id: 7,
            label: 'Week 7',
            dates: 'Feb 16 - Feb 20',
            units: [
                { id: 'u3', name: 'Quadratic Basics', duration: 1, color: 'bg-emerald-500' }
            ],
            assessments: [],
            isHoliday: false
        },
        {
            id: 8,
            label: 'Week 8',
            dates: 'Feb 23 - Feb 27',
            units: [
                { id: 'u4', name: 'Revision Week', duration: 1, color: 'bg-amber-500' }
            ],
            assessments: [
                { id: 'a3', name: 'Mid-Term Exam', type: 'Exam' }
            ],
            isHoliday: false
        }
    ]);

    const [availableUnits] = useState([
        { id: 'u5', name: 'Trigonometry', color: 'bg-pink-500', estimatedWeeks: 3 },
        { id: 'u6', name: 'Coordinate Geometry', color: 'bg-indigo-500', estimatedWeeks: 2 },
        { id: 'u7', name: 'Probability', color: 'bg-cyan-500', estimatedWeeks: 1 }
    ]);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                        Screen 195 / Scheme of Work
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                Academic Scheme of Work
                            </h2>
                            <div className="flex items-center gap-3">
                                <p className="opacity-90 font-medium text-sm md:text-base">
                                    {currentTerm} • Grade 9 Mathematics
                                </p>
                                {isLocked ? (
                                    <span className="px-2 py-0.5 bg-red-500/30 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-bold flex items-center gap-1">
                                        <Lock size={10} /> LOCKED
                                    </span>
                                ) : (
                                    <span className="px-2 py-0.5 bg-green-500/30 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-bold flex items-center gap-1">
                                        <Unlock size={10} /> EDITABLE
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsLocked(!isLocked)}
                                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${isLocked ? 'bg-white/20 hover:bg-white/30' : 'bg-white text-emerald-600'
                                    }`}
                            >
                                {isLocked ? <Unlock size={18} /> : <Lock size={18} />}
                                {isLocked ? 'Unlock Plan' : 'Lock & Approve'}
                            </button>

                            <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2">
                                <Sparkles size={20} />
                                <div className="text-left">
                                    <div>AI Optimizer</div>
                                    <div className="text-[10px] opacity-70">adjust pacing</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar - Available Units */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Clock className="text-emerald-500" size={18} />
                            Unplanned Units
                        </h3>
                        <div className="space-y-3">
                            {availableUnits.map(unit => (
                                <div
                                    key={unit.id}
                                    className="p-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-grab active:cursor-grabbing group"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`w-8 h-2 rounded-full ${unit.color}`}></span>
                                        <GripHorizontal size={14} className="text-slate-300 group-hover:text-emerald-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-700 text-sm">{unit.name}</h4>
                                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">
                                        EST: {unit.estimatedWeeks} WEEKS
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                                <div className="flex items-center gap-2 text-amber-600 mb-2">
                                    <AlertCircle size={16} />
                                    <span className="text-xs font-bold uppercase">Workload Alert</span>
                                </div>
                                <p className="text-[10px] text-amber-700 leading-relaxed font-medium">
                                    Week 8 has a major exam. AI suggests reducing revision workload in Week 7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Timeline View */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border-2 border-slate-100 overflow-hidden">
                        {/* Timeline Controls */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                                    <ChevronLeft size={20} className="text-slate-600" />
                                </button>
                                <div className="flex items-center gap-2 font-bold text-slate-700">
                                    <Calendar size={18} className="text-emerald-500" />
                                    <span>January - March 2026</span>
                                </div>
                                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                                    <ChevronRight size={20} className="text-slate-600" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                                    Month View
                                </button>
                                <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-white shadow-sm border border-emerald-600">
                                    Week View
                                </button>
                            </div>
                        </div>

                        {/* Gantt / Calendar Content */}
                        <div className="p-6">
                            <div className="space-y-4">
                                {weeks.map(week => (
                                    <div
                                        key={week.id}
                                        className={`flex items-stretch gap-4 group ${week.isHoliday ? 'opacity-70' : ''}`}
                                    >
                                        {/* Week Indicator */}
                                        <div className="w-24 flex-shrink-0 flex flex-col justify-center text-center">
                                            <span className="text-sm font-black text-slate-800 uppercase tracking-tighter">
                                                {week.label}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-bold whitespace-nowrap">
                                                {week.dates}
                                            </span>
                                        </div>

                                        {/* Content Area */}
                                        <div className={`flex-1 rounded-2xl min-h-[80px] border-2 transition-all p-2 flex flex-col justify-center relative ${week.isHoliday
                                            ? 'bg-slate-50 border-dashed border-slate-200'
                                            : 'bg-white border-slate-100 hover:border-emerald-100'
                                            }`}>
                                            {week.isHoliday ? (
                                                <div className="flex items-center justify-center gap-2 text-slate-400 italic text-sm py-4">
                                                    <MoreVertical size={14} className="opacity-30" />
                                                    <span className="font-medium tracking-wide">{week.holidayName}</span>
                                                    <MoreVertical size={14} className="opacity-30" />
                                                </div>
                                            ) : (
                                                <div className="flex flex-wrap gap-2">
                                                    {week.units.map(unit => (
                                                        <div
                                                            key={unit.id}
                                                            className={`flex-1 min-w-[120px] p-3 rounded-xl border-t-4 shadow-sm relative group/btn overflow-hidden ${unit.color} text-white`}
                                                        >
                                                            <div className="absolute right-0 top-0 w-12 h-12 bg-white/10 rounded-full blur-xl transform translate-x-4 -translate-y-4"></div>
                                                            <div className="relative z-10 flex items-center justify-between">
                                                                <h5 className="font-bold text-xs truncate pr-4">{unit.name}</h5>
                                                                <button className="opacity-0 group-hover/btn:opacity-100 transition-opacity">
                                                                    <MoreVertical size={12} />
                                                                </button>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-1">
                                                                <span className="text-[8px] bg-white/20 px-1 py-0.5 rounded font-bold uppercase">
                                                                    In Progress
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {week.units.length === 0 && !week.isHoliday && (
                                                        <div className="w-full py-4 border-2 border-dashed border-slate-100 rounded-xl flex items-center justify-center text-slate-300 text-xs font-bold uppercase tracking-widest hover:border-emerald-200 hover:text-emerald-300 transition-all cursor-pointer">
                                                            + Drag Unit Here
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Status / Assessments */}
                                        <div className="w-40 flex-shrink-0 space-y-2 py-2">
                                            {week.assessments.map(assessment => (
                                                <div
                                                    key={assessment.id}
                                                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl shadow-sm transform hover:scale-105 transition-all text-[10px] font-bold"
                                                >
                                                    <CheckCircle2 size={12} />
                                                    <span className="truncate">{assessment.type}: {assessment.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI Helper Bar */}
                    <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 shadow-lg relative overflow-hidden group">
                        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-indigo-200/20 to-transparent pointer-events-none"></div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="p-3 bg-white rounded-2xl shadow-md text-indigo-500 ring-4 ring-indigo-50">
                                <Sparkles size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-black text-slate-800 uppercase tracking-tight">AI5 Coordinator</h4>
                                    <span className="bg-indigo-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">Neural</span>
                                </div>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-2xl">
                                    Curriculum pacing is currently optimized. I've detected a <span className="text-red-500 font-bold underline decoration-2 underline-offset-2">potential conflict</span> between "Linear Equations" and the school's sports week in Feb. Would you like me to shift units?
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all uppercase tracking-tighter">
                                    Apply fix
                                </button>
                                <button className="p-2.5 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-slate-600 transition-all">
                                    <Info size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchemeOfWork;
