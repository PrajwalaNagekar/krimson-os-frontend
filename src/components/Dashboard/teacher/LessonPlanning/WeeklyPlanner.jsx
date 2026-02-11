import React from 'react';
import { Calendar, Clock, Paperclip, ChevronDown, ChevronRight, Eye } from 'lucide-react';

const WeeklyPlanner = ({
    weekDays,
    lessons,
    selectedDay,
    setSelectedDay,
    getStatusBadgeColor,
    getStatusColor,
    toggleLesson,
    expandedLesson,
    handleCreateNew
}) => {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Calendar className="text-blue-500" size={24} />
                    Weekly Lesson Schedule
                </h2>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">
                        Previous Week
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-xs font-bold hover:from-blue-600 hover:to-purple-600 transition-all shadow-md">
                        Next Week
                    </button>
                </div>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4">
                {weekDays.map((day) => (
                    <div key={day.key} className="space-y-4">
                        {/* Day Header */}
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                                {day.label}
                            </p>
                            <p className="text-2xl font-bold text-blue-600">{day.date}</p>
                        </div>

                        {/* Lessons for the day */}
                        <div className="space-y-3 min-h-[400px]">
                            {lessons[day.key]?.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className={`p-4 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all cursor-pointer text-left ${lesson.status === 'Taught'
                                        ? 'bg-green-50 border-green-200 hover:border-green-300'
                                        : 'bg-white border-blue-200 hover:border-blue-300'
                                        }`}
                                    onClick={() => toggleLesson(lesson.id)}
                                >
                                    {/* Lesson Header */}
                                    <div className="flex items-start justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-400">{lesson.class}</span>
                                        <div className={`px-2 py-1 rounded-lg text-[10px] font-bold border ${getStatusBadgeColor(lesson.status)}`}>
                                            {lesson.status}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2">
                                        {lesson.title}
                                    </h4>

                                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {lesson.time}
                                        </span>
                                        <span>{lesson.duration}</span>
                                    </div>

                                    {/* Subject Badge */}
                                    <div className={`inline-block px-2 py-1 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-lg text-xs font-bold mb-3`}>
                                        {lesson.subject}
                                    </div>

                                    {/* Attachments */}
                                    {lesson.attachments && lesson.attachments.length > 0 && (
                                        <div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                                            <Paperclip size={12} />
                                            <span>{lesson.attachments.length} files</span>
                                        </div>
                                    )}

                                    {/* Expand indicator */}
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center">
                                        <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700">
                                            {expandedLesson === lesson.id ? (
                                                <>
                                                    <ChevronDown size={14} />
                                                    Less
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronRight size={14} />
                                                    Details
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Empty state */}
                            {(!lessons[day.key] || lessons[day.key].length === 0) && (
                                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center">
                                    <Calendar className="mx-auto text-slate-300 mb-2" size={32} />
                                    <p className="text-xs text-slate-400 italic">No lessons planned</p>
                                    <button
                                        onClick={() => handleCreateNew('Weekly Lesson Plan')}
                                        className="mt-3 px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        + Add Lesson
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile/Tablet List View */}
            <div className="lg:hidden space-y-4">
                {/* Day Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {weekDays.map((day) => (
                        <button
                            key={day.key}
                            onClick={() => setSelectedDay(day.key)}
                            className={`px-4 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${selectedDay === day.key
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <div>{day.label}</div>
                            <div className="text-lg mt-1">{day.date}</div>
                        </button>
                    ))}
                </div>

                {/* Lessons for selected day */}
                <div className="space-y-4">
                    {lessons[selectedDay]?.map((lesson) => (
                        <div
                            key={lesson.id}
                            className={`p-5 rounded-2xl border-2 shadow-sm text-left ${lesson.status === 'Taught'
                                ? 'bg-green-50 border-green-200'
                                : 'bg-white border-blue-200'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-slate-400">{lesson.class}</span>
                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-bold border ${getStatusBadgeColor(lesson.status)}`}>
                                            {lesson.status}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-base mb-2">{lesson.title}</h4>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {lesson.time}
                                        </span>
                                        <span>•</span>
                                        <span>{lesson.duration}</span>
                                        <span>•</span>
                                        <span className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-lg font-bold`}>
                                            {lesson.subject}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => toggleLesson(lesson.id)}
                                className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                            >
                                {expandedLesson === lesson.id ? (
                                    <>
                                        <ChevronDown size={14} />
                                        Hide Details
                                    </>
                                ) : (
                                    <>
                                        <Eye size={14} />
                                        View Full Details
                                    </>
                                )}
                            </button>
                        </div>
                    ))}

                    {(!lessons[selectedDay] || lessons[selectedDay].length === 0) && (
                        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                            <Calendar className="mx-auto text-slate-300 mb-3" size={48} />
                            <p className="text-sm text-slate-400 mb-4">No lessons planned for this day</p>
                            <button
                                onClick={() => handleCreateNew('Weekly Lesson Plan')}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
                            >
                                + Add Lesson Plan
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeeklyPlanner;
