import React from 'react';
import { X, BookOpen, Timer } from 'lucide-react';

const StudentDetailModal = ({
    student,
    onClose,
    calendarSubject,
    setCalendarSubject,
    calendarView,
    setCalendarView,
    subjects,
    periods,
    getCalendarData,
    getStatusColor,
    getDayOfWeek,
    formatDate,
    getStatusIcon
}) => {
    if (!student) return null;

    const calendarData = getCalendarData(student.id);
    const attendanceStats = student.attendanceHistory?.[calendarSubject] || student.attendanceHistory?.overall || {};

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden pointer-events-auto animate-scaleIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="relative z-10 flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {student.roll}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-1">{student.name}</h2>
                                    <div className="flex items-center gap-3 text-sm opacity-90">
                                        <span>ID: {student.id}</span>
                                        <span>•</span>
                                        <span>Roll: {student.roll}</span>
                                    </div>
                                    <div className="mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold inline-block">
                                        {attendanceStats.percentage?.toFixed(1) || 0}% Attendance
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border-2 border-blue-200">
                                <p className="text-xs font-bold text-slate-600 mb-1">Total Classes</p>
                                <h3 className="text-2xl font-bold text-blue-600">{attendanceStats.total || 0}</h3>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border-2 border-green-200">
                                <p className="text-xs font-bold text-slate-600 mb-1">Present</p>
                                <h3 className="text-2xl font-bold text-green-600">{attendanceStats.present || 0}</h3>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-2xl border-2 border-red-200">
                                <p className="text-xs font-bold text-slate-600 mb-1">Absent</p>
                                <h3 className="text-2xl font-bold text-red-600">{attendanceStats.absent || 0}</h3>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl border-2 border-orange-200">
                                <p className="text-xs font-bold text-slate-600 mb-1">Late</p>
                                <h3 className="text-2xl font-bold text-orange-600">{attendanceStats.late || 0}</h3>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-200">
                                <p className="text-xs font-bold text-slate-600 mb-1">Percentage</p>
                                <h3 className="text-2xl font-bold text-purple-600">{attendanceStats.percentage?.toFixed(1) || 0}%</h3>
                            </div>
                        </div>

                        {/* Calendar Controls */}
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h3 className="font-bold text-slate-800 text-lg">Attendance Calendar</h3>
                                {/* Subject Filter */}
                                <select
                                    value={calendarSubject}
                                    onChange={(e) => setCalendarSubject(e.target.value)}
                                    className="px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
                                >
                                    <option value="All Subjects">All Subjects</option>
                                    {subjects?.map(subject => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </select>
                            </div>

                            {/* View Toggle */}
                            <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                                <button
                                    onClick={() => setCalendarView('weekly')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${calendarView === 'weekly'
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    Weekly
                                </button>
                                <button
                                    onClick={() => setCalendarView('monthly')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${calendarView === 'monthly'
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>

                        {/* Calendar Legend */}
                        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-green-500" />
                                <span className="text-slate-600 font-medium">Present</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-red-500" />
                                <span className="text-slate-600 font-medium">Absent</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-orange-500" />
                                <span className="text-slate-600 font-medium">Late</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-gray-200" />
                                <span className="text-slate-600 font-medium">No Class</span>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className={`grid gap-3 ${calendarView === 'weekly' ? 'grid-cols-7' : 'grid-cols-7 md:grid-cols-10'}`}>
                            {calendarData.map((day, index) => {
                                const status = calendarSubject === 'All Subjects'
                                    ? (day.Mathematics || day.Science || day.English || day.History)
                                    : day[calendarSubject];

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        <div className={`
                        p-3 rounded-xl border-2 transition-all cursor-pointer
                        ${getStatusColor(status)}
                        hover:scale-105 hover:shadow-lg
                      `}>
                                            <div className="text-center">
                                                <p className="text-xs font-bold mb-1">{getDayOfWeek(day.date)}</p>
                                                <p className="text-xs opacity-80">{formatDate(day.date)}</p>
                                                <div className="mt-2 flex justify-center">
                                                    {getStatusIcon(status)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tooltip on Hover */}
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                                            <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl">
                                                <p className="font-bold">{formatDate(day.date)}</p>
                                                {calendarSubject === 'All Subjects' ? (
                                                    <>
                                                        {subjects?.map(sub => (
                                                            <p key={sub} className="text-xs">
                                                                {sub}: {day[sub] || 'No Class'}
                                                            </p>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <p>{calendarSubject}: {status || 'No Class'}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Period-wise Breakdown for Today */}
                        <div className="mt-6">
                            <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                                <Timer size={20} className="text-purple-500" />
                                Today's Period-wise Status
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {periods.map((period, idx) => {
                                    // Mock statuses for different periods
                                    const statuses = ['Present', 'Present', 'Present', 'Absent', 'Late', 'Present'];
                                    const status = statuses[(idx + student.roll) % statuses.length];
                                    const subject = subjects[idx % subjects.length];

                                    return (
                                        <div key={period} className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center transition-all hover:shadow-md ${getStatusColor(status)}`}>
                                            <p className="text-[10px] font-bold opacity-70 mb-1">{period.split(' (')[0]}</p>
                                            <div className="flex items-center gap-2 mb-1">
                                                {getStatusIcon(status)}
                                                <span className="text-sm font-bold">{status}</span>
                                            </div>
                                            <p className="text-[10px] font-medium opacity-80">{subject}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Subject-wise Breakdown */}
                        {student.attendanceHistory && (
                            <div className="mt-6">
                                <h3 className="font-bold text-slate-800 text-lg mb-4">Subject-wise Performance</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {subjects?.map(subject => {
                                        const subjectData = student.attendanceHistory[subject];
                                        if (!subjectData) return null;

                                        return (
                                            <div key={subject} className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-2xl border border-blue-100">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen size={18} className="text-blue-500" />
                                                        <h4 className="font-bold text-slate-800">{subject}</h4>
                                                    </div>
                                                    <span className="text-2xl font-bold text-blue-600">
                                                        {subjectData.percentage.toFixed(1)}%
                                                    </span>
                                                </div>
                                                <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-3">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all"
                                                        style={{ width: `${subjectData.percentage}%` }}
                                                    />
                                                </div>
                                                <div className="flex justify-between text-xs text-slate-600">
                                                    <span>P: {subjectData.present}</span>
                                                    <span>A: {subjectData.absent}</span>
                                                    <span>L: {subjectData.late}</span>
                                                    <span>Total: {subjectData.total}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDetailModal;
