/**
 * @component AttendanceOversight
 * @description Attendance Oversight Dashboard - Comprehensive Student & Staff Monitoring
 */
import React, { useState } from 'react';
import { 
  Users, CheckCircle, XCircle, AlertTriangle, Clock, Calendar,
  Edit, Download, RefreshCcw, Filter, Search, TrendingUp, TrendingDown,
  UserCheck, Coffee, Activity, FileText, Eye, BarChart3, BookOpen,
  ClipboardCheck, Phone, Mail, Award, Settings, AlertCircle
} from 'lucide-react';

const AttendanceOversight = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showFilters, setShowFilters] = useState(false);

  // Student Attendance Data
  const studentAttendance = {
    summary: {
      totalStudents: 850,
      present: 807,
      absent: 28,
      late: 15,
      overallRate: '94.9%',
      trend: '+2.1%'
    },
    byClass: [
      { grade: 'Grade 1', section: 'A', total: 35, present: 33, absent: 2, late: 0, rate: 94.3, status: 'Good' },
      { grade: 'Grade 1', section: 'B', total: 34, present: 32, absent: 2, late: 0, rate: 94.1, status: 'Good' },
      { grade: 'Grade 2', section: 'A', total: 38, present: 36, absent: 1, late: 1, rate: 94.7, status: 'Good' },
      { grade: 'Grade 3', section: 'A', total: 40, present: 39, absent: 1, late: 0, rate: 97.5, status: 'Excellent' },
      { grade: 'Grade 4', section: 'A', total: 42, present: 40, absent: 2, late: 0, rate: 95.2, status: 'Good' },
      { grade: 'Grade 5', section: 'A', total: 45, present: 43, absent: 1, late: 1, rate: 95.6, status: 'Good' },
      { grade: 'Grade 6', section: 'A', total: 48, present: 45, absent: 3, late: 0, rate: 93.8, status: 'Good' },
      { grade: 'Grade 7', section: 'A', total: 50, present: 47, absent: 2, late: 1, rate: 94.0, status: 'Good' },
      { grade: 'Grade 8', section: 'A', total: 52, present: 49, absent: 2, late: 1, rate: 94.2, status: 'Good' },
      { grade: 'Grade 8', section: 'B', total: 48, present: 40, absent: 7, late: 1, rate: 83.3, status: 'Alert' }
    ],
    chronicAbsentees: [
      { id: 'STU001', name: 'Arjun Sharma', class: 'Grade 8B', consecutiveDays: 4, totalDays: 12, reason: 'Medical', contact: '+91-9876543210' },
      { id: 'STU002', name: 'Priya Patel', class: 'Grade 6A', consecutiveDays: 5, totalDays: 15, reason: 'Family Emergency', contact: '+91-9876543211' },
      { id: 'STU003', name: 'Rohan Mehta', class: 'Grade 5A', consecutiveDays: 3, totalDays: 8, reason: 'Unknown', contact: '+91-9876543212' }
    ]
  };

  // Staff Attendance Data
  const staffAttendance = {
    summary: {
      totalStaff: 75,
      present: 71,
      absent: 2,
      onLeave: 2,
      overallRate: '94.7%',
      trend: '+1.2%'
    },
    byDepartment: [
      { department: 'Mathematics', total: 8, present: 8, absent: 0, onLeave: 0, rate: 100, coverage: 'Complete' },
      { department: 'Science', total: 10, present: 9, absent: 1, onLeave: 0, rate: 90, coverage: 'Partial' },
      { department: 'Languages', total: 12, present: 12, absent: 0, onLeave: 0, rate: 100, coverage: 'Complete' },
      { department: 'Social Studies', total: 8, present: 7, absent: 0, onLeave: 1, rate: 87.5, coverage: 'Complete' },
      { department: 'Arts & Sports', total: 6, present: 6, absent: 0, onLeave: 0, rate: 100, coverage: 'Complete' },
      { department: 'Administration', total: 15, present: 14, absent: 1, onLeave: 1, rate: 93.3, coverage: 'Complete' }
    ],
    absentStaff: [
      { id: 'EMP001', name: 'Dr. Sarah Johnson', department: 'Science', subject: 'Physics', reason: 'Sick Leave', substitute: 'Mr. David Park', status: 'Covered' },
      { id: 'EMP002', name: 'Michael Chen', department: 'Administration', subject: 'Office', reason: 'Personal Leave', substitute: 'N/A', status: 'Not Required' }
    ],
    timetableImpact: [
      { class: 'Grade 10A', period: 'Period 2', subject: 'Physics', teacher: 'Dr. Sarah Johnson', substitute: 'Mr. David Park', status: 'Covered' },
      { class: 'Grade 9B', period: 'Period 4', subject: 'Physics Lab', teacher: 'Dr. Sarah Johnson', substitute: 'Mr. David Park', status: 'Covered' }
    ]
  };

  const getRateColor = (rate) => {
    if (rate >= 95) return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'text-green-500' };
    if (rate >= 85) return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'text-amber-500' };
    return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: 'text-red-500' };
  };

  const getStatusBadge = (status) => {
    const badges = {
      'Excellent': 'bg-green-100 text-green-700 border-green-200',
      'Good': 'bg-blue-100 text-blue-700 border-blue-200',
      'Alert': 'bg-red-100 text-red-700 border-red-200'
    };
    return badges[status] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Attendance Oversight
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live Monitoring
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Student & Staff Attendance
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Monitor daily attendance, track patterns, and ensure maximum engagement across all classes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Users size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{studentAttendance.summary.totalStudents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Students</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><CheckCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{studentAttendance.summary.present}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Present Today</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><XCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{studentAttendance.summary.absent}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Absent</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform"><Clock size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{studentAttendance.summary.late}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Late Arrivals</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform"><Activity size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{studentAttendance.summary.overallRate}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Overall Rate</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><TrendingUp size={16} /></div>
          </div>
          <p className="text-xl font-bold text-green-800">{studentAttendance.summary.trend}</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">vs Last Week</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          ACTION BUTTONS & DATE SELECTOR
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Generate Report
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
            <div className="flex items-center gap-2">
              <RefreshCcw size={18} />
              Refresh Data
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full md:w-auto pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
            />
          </div>
        </div>
      </div>

      {/* ========================================
          TWO-COLUMN LAYOUT: STUDENTS & STAFF
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: STUDENT ATTENDANCE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Users className="text-blue-500" size={24} />
              Student Attendance
            </h2>
            <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              {studentAttendance.byClass.length} Classes
            </span>
          </div>

          {/* Daily Attendance Heatmap by Class */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-800">Daily Attendance Heatmap</h3>
              <p className="text-sm text-slate-500">Class-wise attendance breakdown</p>
            </div>

            <div className="p-6 space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar-hidden">
              {studentAttendance.byClass.map((cls, idx) => {
                const colors = getRateColor(cls.rate);
                return (
                  <div key={idx} className={`p-4 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all group`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg font-bold text-slate-700">
                          {cls.section}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{cls.grade}</p>
                          <p className="text-xs text-slate-500">{cls.total} students total</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusBadge(cls.status)}`}>
                        {cls.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white p-2 rounded-lg border border-green-100 text-center">
                        <p className="text-lg font-bold text-green-600">{cls.present}</p>
                        <p className="text-[10px] font-semibold text-green-600 uppercase">Present</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-red-100 text-center">
                        <p className="text-lg font-bold text-red-600">{cls.absent}</p>
                        <p className="text-[10px] font-semibold text-red-600 uppercase">Absent</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-amber-100 text-center">
                        <p className="text-lg font-bold text-amber-600">{cls.late}</p>
                        <p className="text-[10px] font-semibold text-amber-600 uppercase">Late</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500`}
                        style={{ width: `${cls.rate}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-600">{cls.rate}% Attendance</p>
                      <button className="px-3 py-1 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-200 transition-all opacity-0 group-hover:opacity-100 flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <Edit size={12} />
                          Edit
                        </div>
                        <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chronic Absentees Alert */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 border border-red-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900">Chronic Absentees Alert</h3>
                <p className="text-sm text-red-700">Students absent for &gt;3 consecutive days</p>
              </div>
            </div>

            <div className="space-y-3">
              {studentAttendance.chronicAbsentees.map((student, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-red-100 hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.id} • {student.class}</p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold border border-red-200">
                      {student.consecutiveDays} Days
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <p className="text-slate-500 font-medium">Total Absent Days</p>
                      <p className="font-bold text-slate-700">{student.totalDays} days</p>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg">
                      <p className="text-slate-500 font-medium">Reason</p>
                      <p className="font-bold text-slate-700">{student.reason}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all flex flex-col items-center">
                      <div className="flex items-center gap-1">
                        <Phone size={12} />
                        Call Parent
                      </div>
                      <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                    </button>
                    <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all flex flex-col items-center">
                      <div className="flex items-center gap-1">
                        <FileText size={12} />
                        Auto-Report
                      </div>
                      <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STAFF ATTENDANCE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <UserCheck className="text-purple-500" size={24} />
              Staff Attendance
            </h2>
            <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              {staffAttendance.byDepartment.length} Departments
            </span>
          </div>

          {/* Staff Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Users size={18} />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-800">{staffAttendance.summary.present}/{staffAttendance.summary.totalStaff}</p>
              <p className="text-xs text-slate-500 font-medium">Present/Total</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
                  <Activity size={18} />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-800">{staffAttendance.summary.overallRate}</p>
              <p className="text-xs text-slate-500 font-medium">Attendance Rate</p>
            </div>
          </div>

          {/* Department Breakdown */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-800">Department Breakdown</h3>
              <p className="text-sm text-slate-500">Staff attendance by department</p>
            </div>

            <div className="p-6 space-y-3 max-h-[320px] overflow-y-auto custom-scrollbar-hidden">
              {staffAttendance.byDepartment.map((dept, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 hover:shadow-md hover:border-purple-200 transition-all group bg-gradient-to-br from-white to-slate-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-xl">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{dept.department}</p>
                        <p className="text-xs text-slate-500">{dept.total} staff members</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                      dept.coverage === 'Complete' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-amber-100 text-amber-700 border-amber-200'
                    }`}>
                      {dept.coverage}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-white p-2 rounded-lg border border-green-100 text-center">
                      <p className="text-lg font-bold text-green-600">{dept.present}</p>
                      <p className="text-[10px] font-semibold text-green-600 uppercase">Present</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-red-100 text-center">
                      <p className="text-lg font-bold text-red-600">{dept.absent}</p>
                      <p className="text-[10px] font-semibold text-red-600 uppercase">Absent</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-amber-100 text-center">
                      <p className="text-lg font-bold text-amber-600">{dept.onLeave}</p>
                      <p className="text-[10px] font-semibold text-amber-600 uppercase">On Leave</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-600">{dept.rate}% Attendance</p>
                    <div className="relative w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                        style={{ width: `${dept.rate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timetable Impact / Subject Coverage */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <ClipboardCheck size={20} className="text-amber-500" />
                    Timetable Cross-Reference
                  </h3>
                  <p className="text-sm text-slate-500">Subject coverage status</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                  All Covered
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {staffAttendance.timetableImpact.map((impact, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-amber-100 bg-amber-50/30 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-slate-800">{impact.class} • {impact.period}</p>
                      <p className="text-sm text-slate-600">{impact.subject}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${
                      impact.status === 'Covered' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'
                    }`}>
                      {impact.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded-lg">
                      <p className="text-slate-500 font-medium">Absent Teacher</p>
                      <p className="font-bold text-slate-700">{impact.teacher}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                      <p className="text-slate-500 font-medium">Substitute</p>
                      <p className="font-bold text-green-600">{impact.substitute}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    

    </div>
  );
};

export default AttendanceOversight;
