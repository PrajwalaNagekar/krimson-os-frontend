import React, { useState } from 'react';
import { 
  Calendar,
  CalendarCheck,
  AlertCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle,
  XCircle,
  Users
} from 'lucide-react';

const AttendanceRecord = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = Jan, 1 = Dec, etc.

  // Mock Data - Will be replaced with Attendance Service API
  const attendanceData = {
    currentMonth: 'January 2026',
    totalDays: 22,
    present: 19,
    absent: 3,
    holidays: 8,
    percentage: 86.4,
    classAverage: 92.5,
    term: {
      totalDays: 110,
      present: 95,
      percentage: 86.4
    },
    absenceReasons: [
      { date: '2026-01-08', reason: 'Sick Leave - Medical certificate verified by nurse', submittedBy: 'Class Teacher' },
      { date: '2026-01-15', reason: 'Medical appointment - Early dismissal approved', submittedBy: 'Class Teacher' },
      { date: '2026-01-22', reason: 'Family emergency - Parent informed administration', submittedBy: 'Class Teacher' }
    ],
    monthlyTrend: [
      { month: 'Sep', percentage: 95.2, classAvg: 93.8 },
      { month: 'Oct', percentage: 92.1, classAvg: 92.5 },
      { month: 'Nov', percentage: 88.5, classAvg: 91.2 },
      { month: 'Dec', percentage: 84.3, classAvg: 90.8 },
      { month: 'Jan', percentage: 86.4, classAvg: 92.5 }
    ],
    calendar: [
      // Week 1
      { day: null, status: null }, { day: null, status: null }, { day: 1, status: 'present' },
      { day: 2, status: 'present' }, { day: 3, status: 'present' },
      { day: 4, status: 'weekend' }, { day: 5, status: 'weekend' },
      // Week 2
      { day: 6, status: 'present' }, { day: 7, status: 'present' },
      { day: 8, status: 'absent' }, { day: 9, status: 'present' },
      { day: 10, status: 'present' }, { day: 11, status: 'weekend' },
      { day: 12, status: 'weekend' },
      // Week 3
      { day: 13, status: 'present' }, { day: 14, status: 'present' },
      { day: 15, status: 'absent' }, { day: 16, status: 'present' },
      { day: 17, status: 'present' }, { day: 18, status: 'weekend' },
      { day: 19, status: 'weekend' },
      // Week 4
      { day: 20, status: 'present' }, { day: 21, status: 'present' },
      { day: 22, status: 'absent' }, { day: 23, status: 'present' },
      { day: 24, status: 'present' }, { day: 25, status: 'weekend' },
      { day: 26, status: 'weekend' },
      // Week 5
      { day: 27, status: 'holiday' }, { day: 28, status: 'present' },
      { day: 29, status: 'present' }, { day: 30, status: 'present' },
      { day: 31, status: 'present' }, { day: null, status: null },
      { day: null, status: null }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-500 hover:bg-green-600';
      case 'absent':
        return 'bg-red-500 hover:bg-red-600';
      case 'holiday':
        return 'bg-purple-400 hover:bg-purple-500';
      case 'weekend':
        return 'bg-slate-200 hover:bg-slate-300';
      default:
        return 'bg-transparent';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'absent':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'holiday':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleDownloadReport = () => {
    console.log('Downloading attendance report');
    // API call will be added here
  };

  const isLowAttendance = attendanceData.percentage < 85;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
              <CalendarCheck size={24} className="md:hidden text-white" />
              <CalendarCheck size={28} className="hidden md:block text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Attendance Record
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Track daily, weekly, and term-wise attendance</p>
            </div>
          </div>

          <button
            onClick={handleDownloadReport}
            className="bg-white border-2 border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            <div className="flex flex-col items-center">
              <span>Download Report</span>
              <span className="text-[8px] text-slate-500">get in app</span>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {/* Left Column - Stats and Trend */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          {/* Stats Summary */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="text-cyan-600" size={20} />
              This Month Summary
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <span className="text-sm font-medium text-slate-600">Total School Days</span>
                <span className="text-lg font-bold text-slate-800">{attendanceData.totalDays}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                <span className="text-sm font-medium text-emerald-700 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Present
                </span>
                <span className="text-lg font-bold text-emerald-700">{attendanceData.present}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">
                <span className="text-sm font-medium text-red-700 flex items-center gap-2">
                  <XCircle size={16} />
                  Absent
                </span>
                <span className="text-lg font-bold text-red-700">{attendanceData.absent}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                <span className="text-sm font-medium text-purple-700">Holidays</span>
                <span className="text-lg font-bold text-purple-700">{attendanceData.holidays}</span>
              </div>
            </div>

            {/* Attendance Percentage */}
            <div className="mt-4 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-cyan-800">Attendance Rate</span>
                <span className={`text-2xl font-bold ${
                  attendanceData.percentage >= 85 ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {attendanceData.percentage}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    attendanceData.percentage >= 85
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                      : 'bg-gradient-to-r from-red-500 to-orange-500'
                  }`}
                  style={{ width: `${attendanceData.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Class Average Comparison */}
            <div className="mt-3 p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 flex items-center gap-1">
                  <Users size={14} />
                  Class Average
                </span>
                <span className="font-bold text-slate-700">{attendanceData.classAverage}%</span>
              </div>
            </div>
          </div>

          {/* Low Attendance Alert */}
          {isLowAttendance && (
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-5 border-2 border-red-200 shadow-lg animate-pulse">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="text-red-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-red-800 text-sm mb-1">Low Attendance Alert!</h4>
                  <p className="text-red-700 text-xs leading-relaxed">
                    Attendance has fallen below 85%. Regular attendance is crucial for academic success. Please ensure consistent presence.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Monthly Trend Chart */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-purple-600" size={20} />
              Attendance Trend
            </h2>

            <div className="space-y-4">
              {attendanceData.monthlyTrend.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">{month.month}</span>
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${
                        month.percentage >= 85 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {month.percentage}%
                      </span>
                      {month.percentage > attendanceData.monthlyTrend[index - 1]?.percentage && index > 0 ? (
                        <TrendingUp size={14} className="text-emerald-600" />
                      ) : index > 0 ? (
                        <TrendingDown size={14} className="text-red-600" />
                      ) : null}
                    </div>
                  </div>
                  <div className="relative">
                    {/* Student bar */}
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          month.percentage >= 85
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : 'bg-gradient-to-r from-red-500 to-orange-500'
                        }`}
                        style={{ width: `${month.percentage}%` }}
                      ></div>
                    </div>
                    {/* Class average indicator */}
                    <div
                      className="absolute top-0 h-3 w-0.5 bg-purple-600"
                      style={{ left: `${month.classAvg}%` }}
                      title={`Class Avg: ${month.classAvg}%`}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>You</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                      Class Avg: {month.classAvg}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Calendar and Absence Log */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Calendar Heatmap */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">{attendanceData.currentMonth}</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronLeft size={20} className="text-slate-600" />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronRight size={20} className="text-slate-600" />
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 text-xs font-medium">
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                Present
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                Absent
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-400"></div>
                Holiday
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-200"></div>
                Weekend
              </span>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day Headers */}
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center text-slate-500 text-xs md:text-sm font-bold py-2">
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {attendanceData.calendar.map((dayData, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm md:text-base font-bold transition-all cursor-pointer ${
                    dayData.day ? getStatusColor(dayData.status) : ''
                  } ${
                    dayData.day && dayData.status !== 'weekend' && dayData.status !== 'holiday'
                      ? 'text-white shadow-md'
                      : dayData.day
                      ? 'text-white'
                      : ''
                  }`}
                  title={dayData.day ? `${dayData.day} - ${dayData.status}` : ''}
                >
                  {dayData.day || ''}
                </div>
              ))}
            </div>
          </div>

          {/* Absence Reason Log */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FileText className="text-orange-600" size={20} />
              Absence Reason Log
            </h2>

            <div className="space-y-3">
              {attendanceData.absenceReasons.length > 0 ? (
                attendanceData.absenceReasons.map((absence, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 border-l-4 border-red-400 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-slate-800">
                        {new Date(absence.date).toLocaleDateString('en-SG', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium w-fit">
                        Auto-filled by {absence.submittedBy}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{absence.reason}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle size={40} className="text-emerald-500 mx-auto mb-3" />
                  <p className="text-slate-500 font-medium">Perfect attendance! No absences recorded.</p>
                </div>
              )}
            </div>
          </div>

          {/* Term Summary */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-cyan-200 shadow-lg">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold text-cyan-800 mb-2">Term-Wise Summary</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-xs text-cyan-600 mb-1">Total Days</p>
                    <p className="text-xl font-bold text-cyan-800">{attendanceData.term.totalDays}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-cyan-600 mb-1">Present</p>
                    <p className="text-xl font-bold text-cyan-800">{attendanceData.term.present}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-cyan-600 mb-1">Percentage</p>
                    <p className={`text-xl font-bold ${
                      attendanceData.term.percentage >= 85 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {attendanceData.term.percentage}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AttendanceRecord;
