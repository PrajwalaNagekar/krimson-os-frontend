import React, { useState } from 'react';
import { 
  Calendar, TrendingUp, AlertTriangle, Award, Download,
  Clock, CheckCircle, AlertCircle, BarChart3, Users,
  FileText, Filter, Eye, Upload, RefreshCw, Target
} from 'lucide-react';

/**
 * Screen 4: Assessment Calendar & Performance Tracker
 * Purpose: Oversee assessment timelines and performance consistency
 * Features:
 * - Grade-level exam calendar view
 * - Assessment-to-outcome mapping (term averages)
 * - Department performance summaries
 * - Alerts for missing or delayed uploads
 * Integration: Exam Module + Analytics Engine
 */

const AssessmentTracker = () => {
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('january');

  // Static data - ready for API integration
  const stats = [
    { label: 'Avg Performance', value: '76%', icon: TrendingUp, gradient: 'from-green-400 to-emerald-500', change: '+4%' },
    { label: 'Completed Assessments', value: '45', icon: CheckCircle, gradient: 'from-cyan-400 to-blue-500', change: '+12' },
    { label: 'Pending Grading', value: '8', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '-3' },
    { label: 'Upload Alerts', value: '3', icon: AlertTriangle, gradient: 'from-red-400 to-pink-500', change: '-1' },
  ];

  // Calendar data - upcoming assessments
  const calendarData = [
    {
      id: 1,
      title: 'Mid-Term Mathematics Exam',
      grade: 'Grade 10',
      subject: 'Mathematics',
      date: '2024-01-25',
      time: '09:00 AM',
      duration: '120 mins',
      totalMarks: 100,
      status: 'scheduled',
      type: 'Exam',
    },
    {
      id: 2,
      title: 'Physics Unit Test - Thermodynamics',
      grade: 'Grade 11',
      subject: 'Physics',
      date: '2024-01-27',
      time: '10:00 AM',
      duration: '90 mins',
      totalMarks: 50,
      status: 'scheduled',
      type: 'Test',
    },
    {
      id: 3,
      title: 'Chemistry Lab Practical',
      grade: 'Grade 12',
      subject: 'Chemistry',
      date: '2024-01-28',
      time: '02:00 PM',
      duration: '180 mins',
      totalMarks: 40,
      status: 'in-progress',
      type: 'Practical',
    },
    {
      id: 4,
      title: 'English Literature Essay',
      grade: 'Grade 9',
      subject: 'English',
      date: '2024-01-30',
      time: '11:00 AM',
      duration: '60 mins',
      totalMarks: 25,
      status: 'scheduled',
      type: 'Assignment',
    },
  ];

  // Department performance data
  const departmentData = [
    {
      department: 'Mathematics',
      totalAssessments: 18,
      avgScore: 78,
      improvement: +5,
      topPerformer: 'Grade 12-A',
      needsAttention: 'Grade 9-C',
    },
    {
      department: 'Science',
      totalAssessments: 22,
      avgScore: 74,
      improvement: +3,
      topPerformer: 'Grade 11-B',
      needsAttention: 'Grade 10-A',
    },
    {
      department: 'Languages',
      totalAssessments: 15,
      avgScore: 82,
      improvement: +7,
      topPerformer: 'Grade 10-B',
      needsAttention: null,
    },
    {
      department: 'Social Studies',
      totalAssessments: 12,
      avgScore: 71,
      improvement: -2,
      topPerformer: 'Grade 9-A',
      needsAttention: 'Grade 11-C',
    },
  ];

  // Missing/delayed uploads alerts
  const uploadAlerts = [
    {
      id: 1,
      assessment: 'Biology Unit Test 3',
      teacher: 'Dr. Lisa Wang',
      grade: 'Grade 10-B',
      dueDate: '2024-01-18',
      daysOverdue: 2,
      severity: 'high',
    },
    {
      id: 2,
      assessment: 'History Mid-Term Results',
      teacher: 'Prof. Ahmed',
      grade: 'Grade 11-A',
      dueDate: '2024-01-19',
      daysOverdue: 1,
      severity: 'medium',
    },
    {
      id: 3,
      assessment: 'Computer Science Project Marks',
      teacher: 'Mr. Patel',
      grade: 'Grade 12-C',
      dueDate: '2024-01-20',
      daysOverdue: 0,
      severity: 'low',
    },
  ];

  // Term averages - outcome mapping
  const termAverages = [
    { grade: 'Grade 9', term1: 72, term2: 75, current: 78, target: 80 },
    { grade: 'Grade 10', term1: 76, term2: 77, current: 79, target: 82 },
    { grade: 'Grade 11', term1: 74, term2: 76, current: 75, target: 78 },
    { grade: 'Grade 12', term1: 80, term2: 82, current: 84, target: 85 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'in-progress': return 'bg-green-100 text-green-700 border-green-200';
      case 'completed': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Exam': return 'from-red-400 to-pink-500';
      case 'Test': return 'from-blue-400 to-cyan-500';
      case 'Practical': return 'from-purple-400 to-pink-500';
      case 'Assignment': return 'from-green-400 to-emerald-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'from-red-500 to-orange-500';
      case 'medium': return 'from-orange-500 to-yellow-500';
      case 'low': return 'from-yellow-500 to-green-500';
      default: return 'from-gray-400 to-gray-500';
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
                Assessment Calendar & Performance Tracker
              </h1>
              <p className="text-gray-600">Oversee assessment timelines and performance consistency.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Analytics</span>
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

        {/* Upload Alerts */}
        {uploadAlerts.length > 0 && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Missing & Delayed Uploads</h2>
                  <p className="text-sm text-gray-600">Assessment results pending submission</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {uploadAlerts.map((alert) => (
                <div key={alert.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getSeverityColor(alert.severity)} flex items-center justify-center text-white font-bold text-sm`}>
                          {alert.daysOverdue}d
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{alert.assessment}</h3>
                          <p className="text-sm text-gray-600">{alert.teacher} • {alert.grade}</p>
                        </div>
                      </div>
                      <p className="text-sm text-orange-600 ml-13">
                        Due: {new Date(alert.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        {alert.daysOverdue > 0 && ` - ${alert.daysOverdue} day(s) overdue`}
                      </p>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4" />
                        <span>Send Reminder</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grade-Level Exam Calendar */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Exam Calendar</h2>
                <p className="text-sm text-gray-600">Upcoming assessments across all grades</p>
              </div>
            </div>
            <div className="flex gap-3">
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Grades</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {calendarData.map((assessment) => (
              <div key={assessment.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(assessment.type)}`}>
                        {assessment.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(assessment.status)}`}>
                        {assessment.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{assessment.title}</h3>
                    <p className="text-sm text-gray-600">{assessment.subject} • {assessment.grade}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">{new Date(assessment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-gray-700">{assessment.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-700">{assessment.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">{assessment.totalMarks} marks</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Assessment-to-Outcome Mapping */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Term Averages</h2>
                <p className="text-sm text-gray-600">Performance progression by grade</p>
              </div>
            </div>

            <div className="space-y-4">
              {termAverages.map((grade, index) => (
                <div key={index} className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border border-cyan-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{grade.grade}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Target:</span>
                      <span className="text-sm font-bold text-purple-600">{grade.target}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Term 1</p>
                      <p className="text-lg font-bold text-gray-700">{grade.term1}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Term 2</p>
                      <p className="text-lg font-bold text-gray-700">{grade.term2}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Current</p>
                      <p className="text-lg font-bold text-cyan-600">{grade.current}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all"
                      style={{ width: `${(grade.current / grade.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Performance */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Department Summaries</h2>
                <p className="text-sm text-gray-600">Performance by subject area</p>
              </div>
            </div>

            <div className="space-y-4">
              {departmentData.map((dept, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{dept.department}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${dept.improvement >= 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                        {dept.improvement >= 0 ? '+' : ''}{dept.improvement}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Avg Score</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {dept.avgScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Assessments</p>
                      <p className="text-2xl font-bold text-gray-700">{dept.totalAssessments}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-200">
                    <div>
                      <p className="text-gray-500 mb-1">Top Performer</p>
                      <p className="font-semibold text-green-600 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {dept.topPerformer}
                      </p>
                    </div>
                    {dept.needsAttention && (
                      <div className="text-right">
                        <p className="text-gray-500 mb-1">Needs Attention</p>
                        <p className="font-semibold text-orange-600 flex items-center gap-1 justify-end">
                          <AlertCircle className="w-3 h-3" />
                          {dept.needsAttention}
                        </p>
                      </div>
                    )}
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

export default AssessmentTracker;
