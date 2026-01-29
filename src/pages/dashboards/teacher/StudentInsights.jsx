import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  User, TrendingUp, TrendingDown, Users, Search, Filter,
  Award, AlertTriangle, CheckCircle, MessageSquare, Send,
  Eye, Edit, Shield, Lock, Calendar, BarChart2,
  Activity, BookOpen, Heart, Star, AlertOctagon, ChevronDown,
  FileText, X, ThumbsUp, ThumbsDown, Target
} from 'lucide-react';

const StudentInsights = () => {
  // Sample student data
  const [students] = useState([
    {
      id: 'S1',
      name: 'Aarav Singh',
      roll: 1,
      class: 'Grade 9-A',
      photo: null,
      attendance: 96,
      avgGrade: 88.5,
      overallGrade: 'A',
      trend: 'improving',
      trendValue: 7,
      atRisk: false,
      behaviorScore: 92,
      feedbackHistory: [
        { date: '2026-01-15', teacher: 'Ms. Johnson', subject: 'Physics', comment: 'Excellent lab work and participation', type: 'positive' },
        { date: '2026-01-10', teacher: 'Mr. Chen', subject: 'Math', comment: 'Shows great improvement in problem-solving', type: 'positive' },
      ],
      behaviorLog: [
        { date: '2026-01-18', type: 'commendation', note: 'Helped classmate understand complex physics concept', submittedBy: 'Physics Teacher', encrypted: false },
        { date: '2026-01-12', type: 'commendation', note: 'Outstanding presentation on Newton\'s Laws', submittedBy: 'Physics Teacher', encrypted: false },
      ]
    },
    {
      id: 'S2',
      name: 'Bianca Liu',
      roll: 2,
      class: 'Grade 9-A',
      photo: null,
      attendance: 88,
      avgGrade: 73.5,
      overallGrade: 'B',
      trend: 'declining',
      trendValue: -6,
      atRisk: true,
      behaviorScore: 85,
      feedbackHistory: [
        { date: '2026-01-17', teacher: 'Ms. Johnson', subject: 'Physics', comment: 'Needs to improve homework submission consistency', type: 'concern' },
        { date: '2026-01-14', teacher: 'School Counselor', subject: 'Counseling', comment: 'Discussed time management strategies', type: 'neutral' },
      ],
      behaviorLog: [
        { date: '2026-01-19', type: 'warning', note: 'Late submission of assignment (3rd occurrence)', submittedBy: 'Physics Teacher', encrypted: false },
        { date: '2026-01-16', type: 'mentorship', note: 'Meeting scheduled with parents to discuss academic challenges. Student shows willingness to improve.', submittedBy: 'Class Teacher', encrypted: true },
      ]
    },
    {
      id: 'S3',
      name: 'David Kim',
      roll: 4,
      class: 'Grade 9-A',
      photo: null,
      attendance: 82,
      avgGrade: 66.25,
      overallGrade: 'C',
      trend: 'declining',
      trendValue: -8,
      atRisk: true,
      behaviorScore: 78,
      feedbackHistory: [
        { date: '2026-01-18', teacher: 'Ms. Johnson', subject: 'Physics', comment: 'Struggling with fundamental concepts - additional support needed', type: 'concern' },
        { date: '2026-01-15', teacher: 'School Counselor', subject: 'Counseling', comment: 'Personal issues affecting academic performance', type: 'concern' },
      ],
      behaviorLog: [
        { date: '2026-01-19', type: 'warning', note: 'Attendance below 85% threshold', submittedBy: 'Attendance System', encrypted: false },
        { date: '2026-01-17', type: 'mentorship', note: 'Confidential: Student experiencing family difficulties. Additional emotional support provided. Recommended counselor intervention.', submittedBy: 'Class Teacher', encrypted: true },
        { date: '2026-01-15', type: 'warning', note: 'Low participation in class activities', submittedBy: 'Physics Teacher', encrypted: false },
      ]
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRisk, setFilterRisk] = useState('all'); // 'all', 'atRisk', 'onTrack'

  // Filter students
  const filteredStudents = students.filter(student => {
    // Filter by risk status
    if (filterRisk !== 'all') {
      if (filterRisk === 'atRisk' && !student.atRisk) return false;
      if (filterRisk === 'onTrack' && student.atRisk) return false;
    }
    
    // Filter by search
    if (searchQuery) {
      return student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.roll.toString().includes(searchQuery);
    }
    
    return true;
  });

  // Calculate statistics
  const stats = {
    total: students.length,
    atRisk: students.filter(s => s.atRisk).length,
    avgAttendance: (students.reduce((sum, s) => sum + s.attendance, 0) / students.length).toFixed(1),
    avgGrade: (students.reduce((sum, s) => sum + s.avgGrade, 0) / students.length).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/student-insights')
    //   .then(res => res.json())
    //   .then(data => setStudents(data));
    console.log('Student Insights loaded - Ready for API integration');
  }, []);

  // Get trend color
  const getTrendColor = (trend) => {
    return trend === 'improving' ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend) => {
    return trend === 'improving' ? <TrendingUp size={16} /> : <TrendingDown size={16} />;
  };

  // Get behavior type color
  const getBehaviorColor = (type) => {
    switch (type) {
      case 'commendation':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'warning':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'mentorship':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getBehaviorIcon = (type) => {
    switch (type) {
      case 'commendation':
        return <ThumbsUp size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'mentorship':
        return <Heart size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Student Progress & Behavioral Insights
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Student Analytics Dashboard
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {stats.total} students • {stats.atRisk} need attention
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Students</p>
            <Users className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{stats.total}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-red-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              At Risk
            </p>
            <AlertTriangle className="text-red-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-red-600">
            {stats.atRisk}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Attendance</p>
            <Activity className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{stats.avgAttendance}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Grade</p>
            <Award className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">{stats.avgGrade}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* Data Privacy Notice */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-2 border-purple-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 rounded-xl">
            <Shield size={24} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Lock size={18} className="text-purple-600" />
              Data Privacy & Security
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Sensitive notes are end-to-end encrypted</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Access restricted to authorized personnel only</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>All behavioral data tagged and audit-logged</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, roll number, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterRisk('all')}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                filterRisk === 'all'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Students
            </button>
            <button
              onClick={() => setFilterRisk('atRisk')}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                filterRisk === 'atRisk'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              At Risk Only
            </button>
            <button
              onClick={() => setFilterRisk('onTrack')}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                filterRisk === 'onTrack'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              On Track
            </button>
          </div>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div 
            key={student.id}
            className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 cursor-pointer ${
              student.atRisk 
                ? 'border-red-300 bg-red-50/30 hover:shadow-xl' 
                : 'border-transparent hover:border-blue-200 hover:shadow-xl'
            }`}
            onClick={() => setSelectedStudent(student)}
          >
            {/* Student Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md ${
                  student.atRisk 
                    ? 'bg-gradient-to-br from-red-500 to-pink-500' 
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                }`}>
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{student.name}</h4>
                  <p className="text-xs text-slate-500">Roll: {student.roll} • {student.class}</p>
                </div>
              </div>
              {student.atRisk && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold">
                  At Risk
                </span>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 mb-1">Attendance</p>
                <p className={`text-lg font-bold ${student.attendance >= 90 ? 'text-green-600' : student.attendance >= 75 ? 'text-orange-600' : 'text-red-600'}`}>
                  {student.attendance}%
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 mb-1">Avg Grade</p>
                <p className="text-lg font-bold text-slate-800">{student.avgGrade}%</p>
              </div>
            </div>

            {/* Trend */}
            <div className="mb-4 flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-xs text-slate-600 font-medium">Performance Trend</span>
              <span className={`flex items-center gap-1 font-bold ${getTrendColor(student.trend)}`}>
                {getTrendIcon(student.trend)}
                <span className="text-sm">{student.trendValue > 0 ? '+' : ''}{student.trendValue}%</span>
              </span>
            </div>

            {/* View Details Button */}
            <button className="w-full px-4 py-3 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
              <Eye size={16} />
              View Full Profile
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <Users className="mx-auto text-slate-300 mb-3" size={48} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">No Students Found</h3>
          <p className="text-sm text-slate-500">
            {searchQuery || filterRisk !== 'all' ? 'Try adjusting your filters' : 'No students available'}
          </p>
        </div>
      )}

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg ${
                  selectedStudent.atRisk 
                    ? 'bg-gradient-to-br from-red-500 to-pink-500' 
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                }`}>
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{selectedStudent.name}</h2>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span>Roll: {selectedStudent.roll}</span>
                    <span>•</span>
                    <span>{selectedStudent.class}</span>
                    <span>•</span>
                    <span>ID: {selectedStudent.id}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Profile Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Academic Stats */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="text-blue-500" size={20} />
                  Academic Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Attendance Rate</span>
                    <span className={`font-bold ${selectedStudent.attendance >= 90 ? 'text-green-600' : selectedStudent.attendance >= 75 ? 'text-orange-600' : 'text-red-600'}`}>
                      {selectedStudent.attendance}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Average Grade</span>
                    <span className="font-bold text-slate-800">{selectedStudent.avgGrade}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Overall Grade</span>
                    <span className="text-lg font-bold text-blue-600">{selectedStudent.overallGrade}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Performance Trend</span>
                    <span className={`font-bold flex items-center gap-1 ${getTrendColor(selectedStudent.trend)}`}>
                      {getTrendIcon(selectedStudent.trend)}
                      {selectedStudent.trend === 'improving' ? '+' : ''}{selectedStudent.trendValue}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Behavioral Stats */}
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Heart className="text-purple-500" size={20} />
                  Behavioral Score
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Behavior Score</span>
                    <span className="font-bold text-slate-800">{selectedStudent.behaviorScore}/100</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${selectedStudent.behaviorScore >= 85 ? 'bg-green-500' : selectedStudent.behaviorScore >= 70 ? 'bg-orange-500' : 'bg-red-500'}`}
                      style={{ width: `${selectedStudent.behaviorScore}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Commendations</span>
                    <span className="font-bold text-green-600">
                      {selectedStudent.behaviorLog.filter(log => log.type === 'commendation').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Warnings</span>
                    <span className="font-bold text-orange-600">
                      {selectedStudent.behaviorLog.filter(log => log.type === 'warning').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback History */}
            <div className="mb-6 p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MessageSquare className="text-slate-500" size={20} />
                Feedback History
              </h3>
              <div className="space-y-3">
                {selectedStudent.feedbackHistory.map((feedback, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-100">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{feedback.subject}</p>
                        <p className="text-xs text-slate-500">{feedback.teacher} • {new Date(feedback.date).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        feedback.type === 'positive' ? 'bg-green-100 text-green-700' :
                        feedback.type === 'concern' ? 'bg-orange-100 text-orange-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {feedback.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavior Log */}
            <div className="mb-6 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="text-orange-500" size={20} />
                Behavior Log
              </h3>
              <div className="space-y-3">
                {selectedStudent.behaviorLog.map((log, idx) => (
                  <div key={idx} className={`p-4 bg-white rounded-xl border ${log.encrypted ? 'border-purple-200' : 'border-slate-100'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getBehaviorColor(log.type)} flex items-center gap-1`}>
                          {getBehaviorIcon(log.type)}
                          {log.type.toUpperCase()}
                        </span>
                        {log.encrypted && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold flex items-center gap-1 border border-purple-200">
                            <Lock size={12} />
                            Encrypted
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">{new Date(log.date).toLocaleDateString()}</span>
                    </div>
                    <p className={`text-sm mb-2 ${log.encrypted ? 'text-purple-800 font-medium' : 'text-slate-700'}`}>
                      {log.note}
                    </p>
                    <p className="text-xs text-slate-500">— {log.submittedBy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold hover:from-red-600 hover:to-pink-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                <div className="text-left">
                  <div>Send to Counselor</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Edit size={18} />
                <div className="text-left">
                  <div>Add Note</div>
                  <div className="text-[10px] text-slate-400">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInsights;
