import React, { useState } from 'react';
import { 
  Calendar, AlertTriangle, Users, Download, Upload, 
  Clock, CheckCircle, XCircle, Edit, Plus, Filter,
  User, BookOpen, TrendingUp, RefreshCw, FileDown,
  ChevronDown, Search, AlertCircle
} from 'lucide-react';

/**
 * Screen 2: Timetable & Faculty Allocation Console
 * Purpose: Design and manage timetable structures
 * Features:
 * - Weekly and term-wise timetable creation
 * - Auto-detect teacher conflicts or overload
 * - Substitute management for absent teachers
 * - Export timetable by class, teacher, or subject
 * Integration: Timetable API + HR Module
 */

const TimetableConsole = () => {
  const [viewMode, setViewMode] = useState('weekly'); // weekly or termwise
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedDay, setSelectedDay] = useState('monday');

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Classes', value: '42', icon: BookOpen, gradient: 'from-cyan-400 to-blue-500', change: '+3' },
    { label: 'Active Teachers', value: '28', icon: Users, gradient: 'from-blue-400 to-pink-500', change: '+2' },
    { label: 'Conflicts Detected', value: '2', icon: AlertTriangle, gradient: 'from-orange-400 to-red-500', change: '-1' },
    { label: 'Substitutes Today', value: '5', icon: RefreshCw, gradient: 'from-pink-400 to-cyan-500', change: '+1' },
  ];

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['Period 1\n8:00-9:00', 'Period 2\n9:00-10:00', 'Period 3\n10:30-11:30', 'Period 4\n11:30-12:30', 'Period 5\n13:30-14:30', 'Period 6\n14:30-15:30'];

  // Weekly timetable data
  const timetableData = {
    'Grade 10-A': {
      Monday: [
        { subject: 'Mathematics', teacher: 'Sarah Martinez', room: '204', status: 'active' },
        { subject: 'Physics', teacher: 'Dr. Robert Chen', room: '301', status: 'active' },
        { subject: 'Break', teacher: '-', room: '-', status: 'break' },
        { subject: 'Chemistry', teacher: 'Emily Johnson', room: '302', status: 'active' },
        { subject: 'English', teacher: 'Michael Brown', room: '105', status: 'active' },
        { subject: 'PE', teacher: 'John Davis', room: 'Gym', status: 'active' },
      ],
      Tuesday: [
        { subject: 'English', teacher: 'Michael Brown', room: '105', status: 'active' },
        { subject: 'Mathematics', teacher: 'Sarah Martinez', room: '204', status: 'conflict' },
        { subject: 'Break', teacher: '-', room: '-', status: 'break' },
        { subject: 'Biology', teacher: 'Dr. Lisa Wang', room: '303', status: 'active' },
        { subject: 'History', teacher: 'Prof. Ahmed', room: '201', status: 'substitute' },
        { subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Room', status: 'active' },
      ],
      // Add more days as needed
    },
    'Grade 11-B': {
      Monday: [
        { subject: 'Chemistry', teacher: 'Emily Johnson', room: '302', status: 'active' },
        { subject: 'Mathematics', teacher: 'Sarah Martinez', room: '204', status: 'conflict' },
        { subject: 'Break', teacher: '-', room: '-', status: 'break' },
        { subject: 'English', teacher: 'Michael Brown', room: '105', status: 'active' },
        { subject: 'Physics', teacher: 'Dr. Robert Chen', room: '301', status: 'active' },
        { subject: 'Computer Sci', teacher: 'Mr. Patel', room: 'Lab 1', status: 'active' },
      ],
      // Add more days
    },
  };

  // Teacher conflicts and overload data
  const teacherIssues = [
    {
      id: 1,
      teacher: 'Sarah Martinez',
      issue: 'Schedule Conflict',
      details: 'Double booked on Tuesday Period 2 (Grade 10-A & Grade 11-B)',
      severity: 'high',
      time: 'Tue, 9:00-10:00'
    },
    {
      id: 2,
      teacher: 'Dr. Robert Chen',
      issue: 'Overload Warning',
      details: 'Teaching 8 periods today (recommended max: 6)',
      severity: 'medium',
      time: 'Today'
    },
  ];

  // Substitute management data
  const substituteRequests = [
    {
      id: 1,
      absentTeacher: 'Prof. Ahmed',
      subject: 'History',
      class: 'Grade 10-A',
      period: 'Period 5',
      date: '2024-01-20',
      substitute: 'Dr. Sarah Wilson',
      status: 'assigned',
      reason: 'Medical Leave'
    },
    {
      id: 2,
      absentTeacher: 'Ms. Garcia',
      subject: 'Art',
      class: 'Grade 9-C',
      period: 'Period 3',
      date: '2024-01-20',
      substitute: null,
      status: 'pending',
      reason: 'Personal Emergency'
    },
    {
      id: 3,
      absentTeacher: 'Mr. Kumar',
      subject: 'Mathematics',
      class: 'Grade 12-A',
      period: 'Period 1',
      date: '2024-01-21',
      substitute: 'Prof. Lee',
      status: 'confirmed',
      reason: 'Conference Attendance'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'conflict': return 'bg-red-100 text-red-700 border-red-200';
      case 'substitute': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'break': return 'bg-gray-100 text-gray-500 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'from-red-400 to-orange-500';
      case 'medium': return 'from-orange-400 to-yellow-500';
      case 'low': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getSubstituteStatusColor = (status) => {
    switch (status) {
      case 'assigned': return 'bg-blue-100 text-blue-700';
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Timetable & Faculty Allocation Console
              </h1>
              <p className="text-gray-600">Design and manage timetable structures across all grades.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Create Timetable</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Teacher Conflicts & Overload Alerts */}
        {teacherIssues.length > 0 && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Conflicts & Warnings</h2>
                <p className="text-sm text-gray-600">Auto-detected scheduling issues requiring attention</p>
              </div>
            </div>

            <div className="space-y-3">
              {teacherIssues.map((issue) => (
                <div key={issue.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getSeverityColor(issue.severity)} flex items-center justify-center text-white font-bold text-sm`}>
                          !
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{issue.teacher}</h3>
                          <p className="text-sm text-gray-600">{issue.issue} • {issue.time}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 ml-13">{issue.details}</p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                      <Edit className="w-4 h-4" />
                      <span>Resolve</span>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode Toggle & Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row gap-4">
            {/* View Mode */}
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-600 mb-2">View Mode</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('weekly')}
                  className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${viewMode === 'weekly' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setViewMode('termwise')}
                  className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${viewMode === 'termwise' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Term-wise
                </button>
              </div>
            </div>

            {/* Class Filter */}
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-600 mb-2">Filter by Class</label>
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Classes</option>
                <option value="grade-10-a">Grade 10-A</option>
                <option value="grade-11-b">Grade 11-B</option>
                <option value="grade-12-c">Grade 12-C</option>
              </select>
            </div>

            {/* Export Options */}
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-600 mb-2">Export As</label>
              <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                <option>By Class</option>
                <option>By Teacher</option>
                <option>By Subject</option>
              </select>
            </div>
          </div>
        </div>

        {/* Weekly Timetable Grid */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Weekly Timetable - Grade 10-A</h2>
                <p className="text-sm text-gray-600">Current week schedule overview</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
              <Edit className="w-4 h-4" />
              <span>Edit Schedule</span>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          {/* Timetable Grid */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-3 text-left text-xs font-bold text-gray-600 bg-gradient-to-r from-cyan-50 to-blue-50 border border-gray-200 rounded-tl-xl">
                    Time / Day
                  </th>
                  {weekDays.map((day, idx) => (
                    <th key={idx} className={`p-3 text-center text-sm font-bold text-gray-700 bg-gradient-to-r from-cyan-50 to-blue-50 border border-gray-200 ${idx === weekDays.length - 1 ? 'rounded-tr-xl' : ''}`}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {periods.map((period, periodIdx) => (
                  <tr key={periodIdx}>
                    <td className="p-3 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 whitespace-pre-line">
                      {period}
                    </td>
                    {weekDays.map((day, dayIdx) => {
                      const classData = timetableData['Grade 10-A'][day];
                      const lesson = classData ? classData[periodIdx] : null;
                      
                      if (!lesson) {
                        return <td key={dayIdx} className="p-3 border border-gray-200 bg-white"></td>;
                      }

                      return (
                        <td key={dayIdx} className="p-3 border border-gray-200 bg-white hover:bg-blue-50 transition-colors cursor-pointer group">
                          <div className={`p-3 rounded-xl border-2 ${getStatusColor(lesson.status)} transition-all group-hover:scale-105`}>
                            <p className="font-bold text-sm mb-1">{lesson.subject}</p>
                            {lesson.status !== 'break' && (
                              <>
                                <p className="text-xs text-gray-600 flex items-center gap-1">
                                  <User className="w-3 h-3" />
                                  {lesson.teacher}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Room: {lesson.room}</p>
                                {lesson.status === 'conflict' && (
                                  <p className="text-xs text-red-600 font-semibold mt-2 flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Conflict!
                                  </p>
                                )}
                                {lesson.status === 'substitute' && (
                                  <p className="text-xs text-orange-600 font-semibold mt-2 flex items-center gap-1">
                                    <RefreshCw className="w-3 h-3" />
                                    Substitute
                                  </p>
                                )}
                              </>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-200">
            <span className="text-xs font-semibold text-gray-600">Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-100 border-2 border-green-200"></div>
              <span className="text-xs text-gray-600">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-100 border-2 border-red-200"></div>
              <span className="text-xs text-gray-600">Conflict</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-100 border-2 border-orange-200"></div>
              <span className="text-xs text-gray-600">Substitute</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-100 border-2 border-gray-200"></div>
              <span className="text-xs text-gray-600">Break</span>
            </div>
          </div>
        </div>

        {/* Substitute Management */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-xl">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Substitute Management</h2>
                <p className="text-sm text-gray-600">Manage teacher absences and substitute assignments</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              <span>Add Absence</span>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="space-y-3">
            {substituteRequests.map((request) => (
              <div key={request.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSubstituteStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                      <span className="text-xs text-gray-500">{request.date} • {request.period}</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Absent Teacher</p>
                        <p className="font-bold text-gray-800">{request.absentTeacher}</p>
                        <p className="text-sm text-gray-600">{request.subject} • {request.class}</p>
                        <p className="text-xs text-orange-600 mt-1">Reason: {request.reason}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Substitute Teacher</p>
                        {request.substitute ? (
                          <>
                            <p className="font-bold text-green-700 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" />
                              {request.substitute}
                            </p>
                            <p className="text-sm text-gray-600">Coverage confirmed</p>
                          </>
                        ) : (
                          <>
                            <p className="font-bold text-red-700 flex items-center gap-1">
                              <XCircle className="w-4 h-4" />
                              Not assigned
                            </p>
                            <p className="text-sm text-gray-600">Awaiting assignment</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {!request.substitute && (
                      <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                        <User className="w-4 h-4" />
                        <span>Assign Sub</span>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </button>
                    )}
                    <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimetableConsole;
