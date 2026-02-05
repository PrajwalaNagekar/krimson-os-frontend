import React from 'react';
import { Calendar, Timer, ChevronLeft, ChevronRight } from 'lucide-react';

const HeaderSection = ({
    selectedClass,
    setSelectedClass,
    selectedDate,
    selectedSubject,
    setSelectedSubject,
    selectedPeriod,
    setSelectedPeriod,
    classes,
    subjects,
    periods,
    percentage
}) => {
    return (
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10" />

            <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                    Attendance & Class Log
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                            Daily Attendance Register
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base opacity-90 font-medium">
                            {/* Class Selector */}
                            <select
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold border-2 border-white/30 focus:outline-none focus:border-white/50 transition-all cursor-pointer hover:bg-white/30 flex items-center gap-2"
                            >
                                {classes?.map(classItem => (
                                    <option key={classItem.grade} value={classItem.grade} className="text-slate-800">
                                        {classItem.grade}
                                    </option>
                                ))}
                            </select>
                            <span>•</span>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        const date = new Date(selectedDate);
                                        date.setDate(date.getDate() - 1);
                                        setSelectedDate(date.toISOString().split('T')[0]);
                                    }}
                                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
                                    title="Previous Day"
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                <label className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                                    <Calendar size={18} />
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        max={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="bg-transparent border-none text-sm font-bold focus:outline-none [color-scheme:dark] pointer-events-auto"
                                    />
                                </label>

                                <button
                                    onClick={() => {
                                        const date = new Date(selectedDate);
                                        date.setDate(date.getDate() + 1);
                                        const today = new Date().toISOString().split('T')[0];
                                        const nextDate = date.toISOString().split('T')[0];
                                        if (nextDate <= today) {
                                            setSelectedDate(nextDate);
                                        }
                                    }}
                                    disabled={selectedDate === new Date().toISOString().split('T')[0]}
                                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                    title="Next Day"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                            <span>•</span>
                            {/* Subject Selector */}
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold border-2 border-white/30 focus:outline-none focus:border-white/50 transition-all cursor-pointer hover:bg-white/30"
                            >
                                <option value="All Subjects" className="text-slate-800">All Subjects</option>
                                {subjects?.map(subject => (
                                    <option key={subject} value={subject} className="text-slate-800">{subject}</option>
                                ))}
                            </select>
                            <span>•</span>
                            {/* Period Selector */}
                            <div className="flex items-center gap-2">
                                <Timer size={18} />
                                <select
                                    value={selectedPeriod}
                                    onChange={(e) => setSelectedPeriod(e.target.value)}
                                    className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold border-2 border-white/30 focus:outline-none focus:border-white/50 transition-all cursor-pointer hover:bg-white/30"
                                >
                                    {periods.map(period => (
                                        <option key={period} value={period} className="text-slate-800">{period}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-center">
                            <p className="text-xs opacity-80">Attendance Rate</p>
                            <p className="text-2xl font-bold">{percentage}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
