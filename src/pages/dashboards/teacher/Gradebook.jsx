import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Download, TrendingUp, TrendingDown, AlertTriangle, CheckCircle,
  Users, Filter, Search, Calendar, BarChart2, MessageSquare,
  Award, Target, Activity, FileText, Eye, Edit, Share2,
  ChevronDown, ChevronLeft, ChevronRight, X, Sparkles, Shield, Send
} from 'lucide-react';

const Gradebook = () => {
  // Sample gradebook data
  const [students] = useState([
    {
      id: 'S1',
      name: 'Aarav Singh',
      roll: 1,
      assessments: { unitTest1: 85, unitTest2: 92, project: 88, midterm: 90 },
      participation: 'A',
      attendance: 96,
      behaviorScore: 92,
      trend: 'improving',
      trendValue: 7,
      overallGrade: 'A',
      avgScore: 88.75,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S2',
      name: 'Bianca Liu',
      roll: 2,
      assessments: { unitTest1: 78, unitTest2: 72, project: 75, midterm: 70 },
      participation: 'B',
      attendance: 88,
      behaviorScore: 85,
      trend: 'declining',
      trendValue: -6,
      overallGrade: 'B',
      avgScore: 73.75,
      atRisk: true,
      remarks: ['Needs improvement in problem-solving']
    },
    {
      id: 'S3',
      name: 'Charlie Tan',
      roll: 3,
      assessments: { unitTest1: 92, unitTest2: 95, project: 98, midterm: 96 },
      participation: 'A+',
      attendance: 98,
      behaviorScore: 95,
      trend: 'improving',
      trendValue: 4,
      overallGrade: 'A+',
      avgScore: 95.25,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S4',
      name: 'David Kim',
      roll: 4,
      assessments: { unitTest1: 68, unitTest2: 65, project: 70, midterm: 62 },
      participation: 'C',
      attendance: 82,
      behaviorScore: 78,
      trend: 'declining',
      trendValue: -8,
      overallGrade: 'C',
      avgScore: 66.25,
      atRisk: true,
      remarks: ['Low participation', 'Attendance concerns']
    },
    {
      id: 'S5',
      name: 'Elena Rodriguez',
      roll: 5,
      assessments: { unitTest1: 88, unitTest2: 90, project: 89, midterm: 92 },
      participation: 'A',
      attendance: 94,
      behaviorScore: 90,
      trend: 'improving',
      trendValue: 4,
      overallGrade: 'A',
      avgScore: 89.75,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S6',
      name: 'Fatima Khan',
      roll: 6,
      assessments: { unitTest1: 82, unitTest2: 85, project: 87, midterm: 84 },
      participation: 'A',
      attendance: 96,
      behaviorScore: 88,
      trend: 'improving',
      trendValue: 5,
      overallGrade: 'A',
      avgScore: 84.5,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S7',
      name: 'George Wilson',
      roll: 7,
      assessments: { unitTest1: 75, unitTest2: 78, project: 72, midterm: 76 },
      participation: 'B',
      attendance: 90,
      behaviorScore: 82,
      trend: 'improving',
      trendValue: 3,
      overallGrade: 'B',
      avgScore: 75.25,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S8',
      name: 'Hannah Martinez',
      roll: 8,
      assessments: { unitTest1: 58, unitTest2: 55, project: 60, midterm: 52 },
      participation: 'D',
      attendance: 78,
      behaviorScore: 70,
      trend: 'declining',
      trendValue: -10,
      overallGrade: 'D',
      avgScore: 56.25,
      atRisk: true,
      remarks: ['Requires immediate intervention', 'Parent meeting scheduled']
    },
    {
      id: 'S9',
      name: 'Isabella Chen',
      roll: 9,
      assessments: { unitTest1: 90, unitTest2: 88, project: 92, midterm: 89 },
      participation: 'A',
      attendance: 95,
      behaviorScore: 91,
      trend: 'improving',
      trendValue: 3,
      overallGrade: 'A',
      avgScore: 89.75,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S10',
      name: 'James Anderson',
      roll: 10,
      assessments: { unitTest1: 72, unitTest2: 76, project: 78, midterm: 74 },
      participation: 'B',
      attendance: 88,
      behaviorScore: 80,
      trend: 'improving',
      trendValue: 5,
      overallGrade: 'B',
      avgScore: 75,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S11',
      name: 'Keira Patel',
      roll: 11,
      assessments: { unitTest1: 95, unitTest2: 93, project: 96, midterm: 94 },
      participation: 'A+',
      attendance: 99,
      behaviorScore: 96,
      trend: 'improving',
      trendValue: 2,
      overallGrade: 'A+',
      avgScore: 94.5,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S12',
      name: 'Liam O\'Brien',
      roll: 12,
      assessments: { unitTest1: 65, unitTest2: 68, project: 70, midterm: 66 },
      participation: 'C',
      attendance: 85,
      behaviorScore: 75,
      trend: 'improving',
      trendValue: 4,
      overallGrade: 'C',
      avgScore: 67.25,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S13',
      name: 'Maya Thompson',
      roll: 13,
      assessments: { unitTest1: 80, unitTest2: 82, project: 85, midterm: 83 },
      participation: 'A',
      attendance: 92,
      behaviorScore: 86,
      trend: 'improving',
      trendValue: 6,
      overallGrade: 'A',
      avgScore: 82.5,
      atRisk: false,
      remarks: []
    },
    {
      id: 'S14',
      name: 'Noah Garcia',
      roll: 14,
      assessments: { unitTest1: 55, unitTest2: 52, project: 58, midterm: 50 },
      participation: 'D',
      attendance: 75,
      behaviorScore: 68,
      trend: 'declining',
      trendValue: -12,
      overallGrade: 'D',
      avgScore: 53.75,
      atRisk: true,
      remarks: ['Critical attention needed', 'Falling behind in coursework']
    },
    {
      id: 'S15',
      name: 'Olivia Brown',
      roll: 15,
      assessments: { unitTest1: 86, unitTest2: 88, project: 90, midterm: 87 },
      participation: 'A',
      attendance: 97,
      behaviorScore: 89,
      trend: 'improving',
      trendValue: 4,
      overallGrade: 'A',
      avgScore: 87.75,
      atRisk: false,
      remarks: []
    },
  ]);

  const [selectedClass, setSelectedClass] = useState('Grade 9-A');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'atRisk', 'improving', 'declining'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter students
  const filteredStudents = students.filter(student => {
    // Filter by mode
    if (filterMode !== 'all') {
      if (filterMode === 'atRisk' && !student.atRisk) return false;
      if (filterMode === 'improving' && student.trend !== 'improving') return false;
      if (filterMode === 'declining' && student.trend !== 'declining') return false;
    }
    
    // Filter by search
    if (searchQuery) {
      return student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.roll.toString().includes(searchQuery);
    }
    
    return true;
  });

  // Calculate class statistics
  const stats = {
    total: students.length,
    atRisk: students.filter(s => s.atRisk).length,
    improving: students.filter(s => s.trend === 'improving').length,
    declining: students.filter(s => s.trend === 'declining').length,
    avgScore: (students.reduce((sum, s) => sum + s.avgScore, 0) / students.length).toFixed(1),
    avgAttendance: (students.reduce((sum, s) => sum + s.attendance, 0) / students.length).toFixed(1)
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/gradebook')
    //   .then(res => res.json())
    //   .then(data => setStudents(data));
    console.log('Gradebook loaded - Ready for API integration');
  }, []);

  // Get grade color
  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-green-600 bg-green-50';
    if (grade >= 75) return 'text-blue-600 bg-blue-50';
    if (grade >= 60) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const getTrendColor = (trend) => {
    return trend === 'improving' ? 'text-green-600' : 'text-red-600';
  };

  const getParticipationColor = (participation) => {
    if (participation === 'A+' || participation === 'A') return 'bg-green-100 text-green-700';
    if (participation === 'B') return 'bg-blue-100 text-blue-700';
    if (participation === 'C') return 'bg-orange-100 text-orange-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Performance Tracker / Gradebook
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Class Performance Analytics
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {selectedClass} • Physics • {students.length} Students
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <Download size={20} />
                <div className="text-left">
                  <div>Export PDF</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            filterMode === 'atRisk' 
              ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg' 
              : 'bg-white border-red-200 hover:border-red-300'
          }`}
          onClick={() => setFilterMode(filterMode === 'atRisk' ? 'all' : 'atRisk')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterMode === 'atRisk' ? 'text-white/80' : 'text-slate-400'}`}>
              At Risk
            </p>
            <AlertTriangle className={filterMode === 'atRisk' ? 'text-white opacity-60' : 'text-red-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterMode === 'atRisk' ? 'text-white' : 'text-red-600'}`}>
            {stats.atRisk}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            filterMode === 'improving' 
              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg' 
              : 'bg-white border-green-200 hover:border-green-300'
          }`}
          onClick={() => setFilterMode(filterMode === 'improving' ? 'all' : 'improving')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${filterMode === 'improving' ? 'text-white/80' : 'text-slate-400'}`}>
              Improving
            </p>
            <TrendingUp className={filterMode === 'improving' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${filterMode === 'improving' ? 'text-white' : 'text-green-600'}`}>
            {stats.improving}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Score</p>
            <BarChart2 className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{stats.avgScore}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Attendance</p>
            <CheckCircle className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{stats.avgAttendance}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* Predictive Analytics Banner */}
      {stats.atRisk > 0 && (
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
              <Shield size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">Predictive Analytics Alert</h3>
                <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">AI-POWERED</span>
              </div>
              <p className="text-sm opacity-90 mb-3">
                {stats.atRisk} student{stats.atRisk > 1 ? 's are' : ' is'} flagged as at-risk based on performance trends, attendance patterns, and behavioral analytics. Immediate intervention recommended.
              </p>
              <div className="flex flex-wrap gap-2">
                {students.filter(s => s.atRisk).map(s => (
                  <span key={s.id} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
                    {s.name} ({s.avgScore}%)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Bar */}
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

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            <span>Filters</span>
            <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  filterMode === 'all'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Students
              </button>
              <button
                onClick={() => setFilterMode('atRisk')}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  filterMode === 'atRisk'
                    ? 'bg-red-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                At Risk Only
              </button>
              <button
                onClick={() => setFilterMode('improving')}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  filterMode === 'improving'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Improving
              </button>
              <button
                onClick={() => setFilterMode('declining')}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  filterMode === 'declining'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Declining
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Performance Table */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-50 to-blue-50 border-b-2 border-blue-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Unit Test 1</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Unit Test 2</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Midterm</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Participation</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Attendance</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((student) => (
                <tr 
                  key={student.id} 
                  className={`hover:bg-slate-50 transition-colors ${student.atRisk ? 'bg-red-50/30' : ''}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                        {student.roll}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{student.name}</h4>
                        <p className="text-xs text-slate-500">ID: {student.id}</p>
                      </div>
                      {student.atRisk && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1">
                          <AlertTriangle size={12} />
                          At Risk
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.unitTest1)}`}>
                      {student.assessments.unitTest1}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.unitTest2)}`}>
                      {student.assessments.unitTest2}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.project)}`}>
                      {student.assessments.project}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.midterm)}`}>
                      {student.assessments.midterm}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getParticipationColor(student.participation)}`}>
                      {student.participation}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-slate-800">{student.attendance}%</span>
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${student.attendance >= 90 ? 'bg-green-500' : student.attendance >= 75 ? 'bg-orange-500' : 'bg-red-500'}`}
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`flex items-center justify-center gap-1 font-bold ${getTrendColor(student.trend)}`}>
                      {student.trend === 'improving' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      <span className="text-sm">{student.trendValue > 0 ? '+' : ''}{student.trendValue}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-lg font-bold text-slate-800">{student.overallGrade}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1 mx-auto"
                    >
                      <Eye size={12} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="p-12 text-center">
            <Users className="mx-auto text-slate-300 mb-3" size={48} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Students Found</h3>
            <p className="text-sm text-slate-500">
              {searchQuery || filterMode !== 'all' ? 'Try adjusting your filters' : 'No students in this class'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredStudents.length > itemsPerPage && (
          <div className="p-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredStudents.length)} to {Math.min(currentPage * itemsPerPage, filteredStudents.length)} of {filteredStudents.length} entries
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredStudents.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(filteredStudents.length / itemsPerPage)}
                className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedStudent.name}</h2>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>Roll: {selectedStudent.roll}</span>
                  <span>•</span>
                  <span>ID: {selectedStudent.id}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-lg font-bold ${selectedStudent.atRisk ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {selectedStudent.atRisk ? 'At Risk' : 'On Track'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="text-blue-500" size={20} />
                  Academic Performance
                </h3>
                <div className="space-y-3">
                  {Object.entries(selectedStudent.assessments).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(value)}`}>
                        {value}%
                      </span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-blue-200 flex justify-between items-center">
                    <span className="font-bold text-slate-700">Overall Average</span>
                    <span className="text-lg font-bold text-blue-600">{selectedStudent.avgScore}%</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Activity className="text-purple-500" size={20} />
                  Behavioral Analytics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Participation</span>
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm ${getParticipationColor(selectedStudent.participation)}`}>
                      {selectedStudent.participation}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Attendance Rate</span>
                    <span className="font-bold text-slate-800">{selectedStudent.attendance}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Behavior Score</span>
                    <span className="font-bold text-slate-800">{selectedStudent.behaviorScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Performance Trend</span>
                    <span className={`font-bold flex items-center gap-1 ${getTrendColor(selectedStudent.trend)}`}>
                      {selectedStudent.trend === 'improving' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {selectedStudent.trend === 'improving' ? '+' : ''}{selectedStudent.trendValue}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remarks Section */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 mb-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MessageSquare className="text-orange-500" size={20} />
                Teacher Remarks
              </h3>
              {selectedStudent.remarks.length > 0 ? (
                <div className="space-y-2 mb-4">
                  {selectedStudent.remarks.map((remark, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-orange-100">
                      <p className="text-sm text-slate-700">{remark}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500 mb-4">No remarks added yet</p>
              )}
              <button className="w-full px-4 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                <Edit size={18} />
                <div>
                  <div>Add Remark for Parent Report</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex flex-col items-center gap-1">
                <Send size={18} />
                <span className="text-sm">Send Report</span>
                <span className="text-[10px] opacity-80">get in app</span>
              </button>
              <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex flex-col items-center gap-1">
                <Share2 size={18} />
                <span className="text-sm">Share</span>
                <span className="text-[10px] text-slate-400">get in app</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gradebook;
