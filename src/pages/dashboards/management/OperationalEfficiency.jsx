import React, { useState } from 'react';
import { 
  Activity, Users, FileText, Clock, MessageSquare, Building,
  Download, Filter, TrendingUp, CheckCircle, AlertTriangle,
  Calendar, Award, Target, BookOpen, Laptop, UserCheck
} from 'lucide-react';

/**
 * Screen 5: Operational Efficiency Monitor
 * Purpose: Evaluate school process efficiency and resource utilization
 * KPIs:
 * - Teacher-to-Student Ratio (target vs actual)
 * - Average Lesson Plan Submission Rate
 * - Assignment Feedback Time (avg days)
 * - Parent Communication Response Time
 * - Resource Utilization (Labs, Rooms, Equipment)
 * Integration: Lesson Plan API + HR Module + Resource Management Database
 * Outcome: Data-backed performance metrics for operational governance meetings
 */

const OperationalEfficiency = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Static data - ready for API integration
  const stats = [
    { label: 'Teacher:Student Ratio', value: '1:10.6', icon: Users, gradient: 'from-cyan-400 to-blue-500', change: 'Target: 1:12' },
    { label: 'Plan Submission', value: '94.8%', icon: FileText, gradient: 'from-green-400 to-emerald-500', change: 'This month' },
    { label: 'Feedback Time', value: '2.3 days', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: 'Average' },
    { label: 'Response Time', value: '4.2 hrs', icon: MessageSquare, gradient: 'from-purple-400 to-pink-500', change: 'To parents' },
  ];

  // Teacher-to-Student Ratio
  const teacherStudentRatio = {
    overall: { teachers: 42, students: 445, ratio: 10.6, target: 12, status: 'good' },
    byDepartment: [
      { department: 'Science', teachers: 12, students: 120, ratio: 10.0, target: 12, status: 'good' },
      { department: 'Mathematics', teachers: 10, students: 115, ratio: 11.5, target: 12, status: 'good' },
      { department: 'English', teachers: 8, students: 108, ratio: 13.5, target: 12, status: 'warning' },
      { department: 'Social Studies', teachers: 9, students: 102, ratio: 11.3, target: 12, status: 'good' },
      { department: 'Languages', teachers: 7, students: 98, ratio: 14.0, target: 12, status: 'warning' },
    ],
  };

  // Lesson Plan Submission Rate
  const lessonPlanSubmission = {
    overall: { submitted: 398, total: 420, percentage: 94.8, onTime: 378, late: 20 },
    byDepartment: [
      { department: 'Science', submitted: 118, total: 120, percentage: 98.3, onTime: 115, late: 3 },
      { department: 'Mathematics', submitted: 112, total: 115, percentage: 97.4, onTime: 110, late: 2 },
      { department: 'English', submitted: 98, total: 108, percentage: 90.7, onTime: 93, late: 5 },
      { department: 'Social Studies', submitted: 96, total: 102, percentage: 94.1, onTime: 92, late: 4 },
      { department: 'Languages', submitted: 92, total: 98, percentage: 93.9, onTime: 88, late: 4 },
    ],
    monthlyTrend: [
      { month: 'Apr', percentage: 92.5 },
      { month: 'May', percentage: 93.8 },
      { month: 'Jun', percentage: 95.2 },
      { month: 'Jul', percentage: 94.1 },
      { month: 'Aug', percentage: 93.5 },
      { month: 'Sep', percentage: 94.8 },
    ],
  };

  // Assignment Feedback Time
  const feedbackTime = {
    overall: { avgDays: 2.3, target: 3.0, status: 'good' },
    byDepartment: [
      { department: 'Science', avgDays: 2.1, assignments: 245, onTime: 232, delayed: 13 },
      { department: 'Mathematics', avgDays: 1.9, assignments: 230, onTime: 225, delayed: 5 },
      { department: 'English', avgDays: 2.8, assignments: 198, onTime: 178, delayed: 20 },
      { department: 'Social Studies', avgDays: 2.5, assignments: 187, onTime: 175, delayed: 12 },
      { department: 'Languages', avgDays: 2.4, assignments: 165, onTime: 158, delayed: 7 },
    ],
    distribution: [
      { range: '0-1 days', count: 425, percentage: 41.5 },
      { range: '1-2 days', count: 332, percentage: 32.4 },
      { range: '2-3 days', count: 178, percentage: 17.4 },
      { range: '3-5 days', count: 65, percentage: 6.3 },
      { range: '5+ days', count: 25, percentage: 2.4 },
    ],
  };

  // Parent Communication Response Time
  const parentCommunication = {
    overall: { avgHours: 4.2, total: 567, responded: 542, pending: 25 },
    byChannel: [
      { channel: 'Email', avgHours: 3.8, total: 245, responded: 238, percentage: 97.1 },
      { channel: 'App Messages', avgHours: 2.5, total: 198, responded: 195, percentage: 98.5 },
      { channel: 'Phone Calls', avgHours: 1.2, total: 87, responded: 86, percentage: 98.9 },
      { channel: 'Parent Portal', avgHours: 6.1, total: 37, responded: 23, percentage: 62.2 },
    ],
    urgencyBreakdown: [
      { urgency: 'High Priority', avgHours: 1.5, count: 89 },
      { urgency: 'Medium Priority', avgHours: 3.8, count: 312 },
      { urgency: 'Low Priority', avgHours: 8.2, count: 166 },
    ],
  };

  // Resource Utilization
  const resourceUtilization = {
    labs: [
      { name: 'Physics Lab', capacity: 40, avgUsage: 34, utilization: 85.0, sessionsPerWeek: 28 },
      { name: 'Chemistry Lab', capacity: 40, avgUsage: 36, utilization: 90.0, sessionsPerWeek: 30 },
      { name: 'Biology Lab', capacity: 40, avgUsage: 32, utilization: 80.0, sessionsPerWeek: 25 },
      { name: 'Computer Lab 1', capacity: 45, avgUsage: 42, utilization: 93.3, sessionsPerWeek: 35 },
      { name: 'Computer Lab 2', capacity: 45, avgUsage: 38, utilization: 84.4, sessionsPerWeek: 32 },
    ],
    rooms: [
      { type: 'Classrooms', total: 16, utilized: 16, utilization: 100.0 },
      { type: 'Activity Rooms', total: 4, utilized: 3, utilization: 75.0 },
      { type: 'Conference Rooms', total: 2, utilized: 1, utilization: 50.0 },
      { type: 'Staff Rooms', total: 3, utilized: 3, utilization: 100.0 },
    ],
    equipment: [
      { item: 'Projectors', total: 20, working: 18, utilization: 90.0, maintenance: 2 },
      { item: 'Smart Boards', total: 16, working: 15, utilization: 93.8, maintenance: 1 },
      { item: 'Laptops (Staff)', total: 50, working: 48, utilization: 96.0, maintenance: 2 },
      { item: 'Lab Equipment', total: 85, working: 80, utilization: 94.1, maintenance: 5 },
      { item: 'Sports Equipment', total: 120, working: 112, utilization: 93.3, maintenance: 8 },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
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
                Operational Efficiency Monitor
              </h1>
              <p className="text-gray-600">School process efficiency and resource utilization metrics.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-gray-600 bg-gray-50">
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

        {/* Teacher-to-Student Ratio */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Teacher-to-Student Ratio</h2>
              <p className="text-sm text-gray-600">Target vs Actual by department</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
              <h3 className="font-bold text-gray-800 mb-4">Overall Ratio</h3>
              <div className="flex items-baseline gap-3 mb-3">
                <p className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  1:{teacherStudentRatio.overall.ratio}
                </p>
                <div className={`w-4 h-4 rounded-full ${getStatusColor(teacherStudentRatio.overall.status)} animate-pulse`}></div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-white rounded-xl">
                  <p className="text-gray-600 mb-1">Teachers</p>
                  <p className="font-bold text-gray-800">{teacherStudentRatio.overall.teachers}</p>
                </div>
                <div className="p-3 bg-white rounded-xl">
                  <p className="text-gray-600 mb-1">Students</p>
                  <p className="font-bold text-gray-800">{teacherStudentRatio.overall.students}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">Target: 1:{teacherStudentRatio.overall.target}</p>
            </div>

            <div className="space-y-3">
              {teacherStudentRatio.byDepartment.map((dept, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(dept.status)}`}></div>
                      <span className="font-bold text-gray-800">{dept.department}</span>
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                      1:{dept.ratio}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{dept.teachers} teachers</span>
                    <span>{dept.students} students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lesson Plan Submission Rate */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Lesson Plan Submission</h2>
                <p className="text-sm text-gray-600">Department-wise submission rates</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {lessonPlanSubmission.overall.percentage}%
              </p>
              <p className="text-sm text-gray-600">
                {lessonPlanSubmission.overall.submitted}/{lessonPlanSubmission.overall.total} plans submitted ({lessonPlanSubmission.overall.onTime} on time, {lessonPlanSubmission.overall.late} late)
              </p>
            </div>

            <div className="space-y-3">
              {lessonPlanSubmission.byDepartment.map((dept, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{dept.department}</span>
                    <span className={`text-lg font-bold ${dept.percentage >= 95 ? 'text-green-600' : dept.percentage >= 90 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {dept.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                    <div 
                      className={`h-full rounded-full transition-all ${dept.percentage >= 95 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : dept.percentage >= 90 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                      style={{ width: `${dept.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{dept.submitted}/{dept.total} submitted</span>
                    <span>{dept.late} late</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment Feedback Time */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Assignment Feedback Time</h2>
                <p className="text-sm text-gray-600">Average turnaround by department</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <p className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  {feedbackTime.overall.avgDays}
                </p>
                <span className="text-2xl text-gray-600">days</span>
              </div>
              <p className="text-sm text-gray-600">Target: {feedbackTime.overall.target} days</p>
            </div>

            <div className="space-y-3">
              {feedbackTime.byDepartment.map((dept, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{dept.department}</span>
                    <span className={`text-lg font-bold ${dept.avgDays <= 2 ? 'text-green-600' : dept.avgDays <= 3 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {dept.avgDays} days
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{dept.assignments} assignments</span>
                    <span className="text-green-600">{dept.onTime} on time</span>
                    <span className="text-red-600">{dept.delayed} delayed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parent Communication Response Time */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Parent Communication Response Time</h2>
              <p className="text-sm text-gray-600">Multi-channel response analysis</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <p className="text-sm text-gray-600 mb-2">Overall Avg</p>
              <p className="text-3xl font-bold text-purple-700">{parentCommunication.overall.avgHours} hrs</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <p className="text-sm text-gray-600 mb-2">Total Queries</p>
              <p className="text-3xl font-bold text-green-700">{parentCommunication.overall.total}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
              <p className="text-sm text-gray-600 mb-2">Responded</p>
              <p className="text-3xl font-bold text-blue-700">{parentCommunication.overall.responded}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
              <p className="text-sm text-gray-600 mb-2">Pending</p>
              <p className="text-3xl font-bold text-orange-700">{parentCommunication.overall.pending}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">By Channel</h3>
              <div className="space-y-3">
                {parentCommunication.byChannel.map((channel, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{channel.channel}</span>
                      <span className="text-sm font-bold text-purple-600">{channel.avgHours} hrs</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                          style={{ width: `${channel.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{channel.percentage}%</span>
                    </div>
                    <p className="text-xs text-gray-600">{channel.responded}/{channel.total} responded</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">By Urgency</h3>
              <div className="space-y-3">
                {parentCommunication.urgencyBreakdown.map((urgency, index) => (
                  <div key={index} className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{urgency.urgency}</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {urgency.avgHours} hrs
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{urgency.count} queries</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Resource Utilization</h2>
              <p className="text-sm text-gray-600">Labs, Rooms, and Equipment efficiency</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Labs */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                Laboratory Utilization
              </h3>
              <div className="space-y-3">
                {resourceUtilization.labs.map((lab, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-sm">{lab.name}</span>
                      <span className={`text-lg font-bold ${lab.utilization >= 85 ? 'text-green-600' : lab.utilization >= 70 ? 'text-yellow-600' : 'text-orange-600'}`}>
                        {lab.utilization}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                      <div 
                        className={`h-full rounded-full transition-all ${lab.utilization >= 85 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : lab.utilization >= 70 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-orange-400 to-red-500'}`}
                        style={{ width: `${lab.utilization}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Avg: {lab.avgUsage}/{lab.capacity}</span>
                      <span>{lab.sessionsPerWeek} sessions/wk</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-purple-600" />
                Room Utilization
              </h3>
              <div className="space-y-3">
                {resourceUtilization.rooms.map((room, index) => (
                  <div key={index} className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-800">{room.type}</span>
                      <span className={`text-2xl font-bold ${room.utilization >= 90 ? 'text-green-600' : room.utilization >= 70 ? 'text-yellow-600' : 'text-orange-600'}`}>
                        {room.utilization}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                      <div 
                        className={`h-full rounded-full transition-all ${room.utilization >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : room.utilization >= 70 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-orange-400 to-red-500'}`}
                        style={{ width: `${room.utilization}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{room.utilized}/{room.total} in use</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-600" />
                Equipment Status
              </h3>
              <div className="space-y-3">
                {resourceUtilization.equipment.map((equip, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-sm">{equip.item}</span>
                      <span className={`text-lg font-bold ${equip.utilization >= 90 ? 'text-green-600' : equip.utilization >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {equip.utilization}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                      <div 
                        className={`h-full rounded-full transition-all ${equip.utilization >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : equip.utilization >= 80 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                        style={{ width: `${equip.utilization}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="text-green-600">{equip.working} working</span>
                      <span className="text-red-600">{equip.maintenance} maintenance</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OperationalEfficiency;
