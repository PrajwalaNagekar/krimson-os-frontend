import React, { useState } from 'react';
import { 
  BookOpen, Calendar, TrendingUp, Edit, Eye, Filter, 
  CheckCircle, Clock, AlertCircle, Download, Upload,
  ChevronDown, BarChart3, Users, FileText
} from 'lucide-react';

/**
 * Screen 1: Curriculum Planner & Progress Map
 * Purpose: Define curriculum and monitor lesson coverage across grades
 * Features:
 * - View and Edit yearly syllabus per subject
 * - Lesson Completion Tracker (Planned vs Delivered)
 * - Auto-sync with Teacher Lesson Plan uploads
 * - Visual "Curriculum Heatmap" for progress monitoring
 * Integration: Curriculum API + Lesson Plan Engine
 */

const CurriculumPlanner = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');

  // Static data - ready for API integration
  const syllabusData = [
    {
      id: 1,
      subject: "Mathematics",
      grade: "Grade 10",
      totalUnits: 12,
      completedUnits: 8,
      plannedLessons: 45,
      deliveredLessons: 32,
      progress: 71,
      status: "on-track",
      teacher: "Sarah Martinez",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      subject: "Physics",
      grade: "Grade 11",
      totalUnits: 10,
      completedUnits: 4,
      plannedLessons: 38,
      deliveredLessons: 15,
      progress: 39,
      status: "behind",
      teacher: "Dr. Robert Chen",
      lastUpdated: "2024-01-14"
    },
    {
      id: 3,
      subject: "Chemistry",
      grade: "Grade 12",
      totalUnits: 15,
      completedUnits: 13,
      plannedLessons: 52,
      deliveredLessons: 48,
      progress: 92,
      status: "ahead",
      teacher: "Emily Johnson",
      lastUpdated: "2024-01-16"
    },
    {
      id: 4,
      subject: "English Literature",
      grade: "Grade 9",
      totalUnits: 8,
      completedUnits: 6,
      plannedLessons: 32,
      deliveredLessons: 24,
      progress: 75,
      status: "on-track",
      teacher: "Michael Brown",
      lastUpdated: "2024-01-15"
    },
  ];

  const curriculumUnits = [
    { id: 1, name: "Algebra Fundamentals", subject: "Mathematics", grade: "Grade 10", status: "completed", lessons: 8, completedLessons: 8 },
    { id: 2, name: "Geometry Basics", subject: "Mathematics", grade: "Grade 10", status: "in-progress", lessons: 6, completedLessons: 4 },
    { id: 3, name: "Trigonometry", subject: "Mathematics", grade: "Grade 10", status: "pending", lessons: 7, completedLessons: 0 },
    { id: 4, name: "Newton's Laws", subject: "Physics", grade: "Grade 11", status: "completed", lessons: 5, completedLessons: 5 },
    { id: 5, name: "Thermodynamics", subject: "Physics", grade: "Grade 11", status: "in-progress", lessons: 8, completedLessons: 3 },
    { id: 6, name: "Organic Chemistry", subject: "Chemistry", grade: "Grade 12", status: "completed", lessons: 10, completedLessons: 10 },
  ];

  // Heatmap data - 12 months x subjects
  const heatmapMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const heatmapSubjects = ['Math', 'Physics', 'Chemistry', 'English'];
  const heatmapData = {
    'Math': [85, 90, 88, 75, 70, 68, 72, 78, 82, 80, 0, 0],
    'Physics': [70, 65, 60, 55, 58, 62, 68, 70, 75, 72, 0, 0],
    'Chemistry': [95, 92, 90, 88, 85, 87, 90, 92, 94, 95, 0, 0],
    'English': [80, 78, 82, 85, 83, 80, 78, 75, 77, 80, 0, 0],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ahead': return 'from-green-400 to-emerald-500';
      case 'on-track': return 'from-cyan-400 to-blue-500';
      case 'behind': return 'from-orange-400 to-red-500';
      case 'completed': return 'from-green-500 to-emerald-600';
      case 'in-progress': return 'from-blue-400 to-cyan-500';
      case 'pending': return 'from-gray-400 to-gray-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getHeatmapColor = (value) => {
    if (value === 0) return 'bg-gray-100';
    if (value < 40) return 'bg-red-200';
    if (value < 60) return 'bg-orange-200';
    if (value < 80) return 'bg-yellow-200';
    return 'bg-green-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Curriculum Planner & Progress Map
              </h1>
              <p className="text-gray-600">Define curriculum and monitor lesson coverage across grades.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span>Import Curriculum</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Subjects", value: "24", icon: BookOpen, gradient: "from-cyan-400 to-blue-500", change: "+3" },
            { label: "Active Teachers", value: "18", icon: Users, gradient: "from-blue-400 to-pink-500", change: "+2" },
            { label: "Avg. Progress", value: "69%", icon: TrendingUp, gradient: "from-pink-400 to-cyan-500", change: "+8%" },
            { label: "Lessons Delivered", value: "119", icon: CheckCircle, gradient: "from-cyan-500 to-pink-500", change: "+15" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
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

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-600 mb-2">Filter by Subject</label>
              <select 
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="english">English Literature</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-600 mb-2">Filter by Grade</label>
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Grades</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>
        </div>

        {/* Syllabus Progress Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {syllabusData.map((syllabus) => (
            <div key={syllabus.id} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{syllabus.subject}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(syllabus.status)}`}>
                      {syllabus.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{syllabus.grade} • {syllabus.teacher}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                    <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                    <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                    {syllabus.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getStatusColor(syllabus.status)} rounded-full transition-all duration-500`}
                    style={{ width: `${syllabus.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                  <p className="text-xs text-gray-600 mb-1">Units</p>
                  <p className="text-lg font-bold text-gray-800">
                    {syllabus.completedUnits}/{syllabus.totalUnits}
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-xl">
                  <p className="text-xs text-gray-600 mb-1">Lessons</p>
                  <p className="text-lg font-bold text-gray-800">
                    {syllabus.deliveredLessons}/{syllabus.plannedLessons}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>View Syllabus</span>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
                <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span>Edit Plan</span>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
              </div>

              {/* Last Updated */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Last updated: {new Date(syllabus.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Heatmap */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Curriculum Heatmap</h2>
                <p className="text-sm text-gray-600">Monthly progress visualization across subjects</p>
              </div>
            </div>
            <Filter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Month Headers */}
              <div className="flex gap-2 mb-2 pl-24">
                {heatmapMonths.map((month, idx) => (
                  <div key={idx} className="w-12 text-center text-xs font-semibold text-gray-600">
                    {month}
                  </div>
                ))}
              </div>

              {/* Heatmap Rows */}
              {heatmapSubjects.map((subject, subIdx) => (
                <div key={subIdx} className="flex items-center gap-2 mb-2">
                  <div className="w-20 text-sm font-semibold text-gray-700">{subject}</div>
                  {heatmapData[subject].map((value, monthIdx) => (
                    <div 
                      key={monthIdx}
                      className={`w-12 h-12 rounded-lg ${getHeatmapColor(value)} flex items-center justify-center text-xs font-bold text-gray-700 hover:scale-110 transition-transform cursor-pointer group relative`}
                      title={`${subject} - ${heatmapMonths[monthIdx]}: ${value}%`}
                    >
                      {value > 0 ? value : '—'}
                    </div>
                  ))}
                </div>
              ))}

              {/* Legend */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-600">Progress:</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-200"></div>
                  <span className="text-xs text-gray-600">{'<40%'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-orange-200"></div>
                  <span className="text-xs text-gray-600">40-60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-yellow-200"></div>
                  <span className="text-xs text-gray-600">60-80%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-300"></div>
                  <span className="text-xs text-gray-600">80-100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Completion Tracker */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Lesson Completion Tracker</h2>
              <p className="text-sm text-gray-600">Planned vs Delivered lessons across curriculum units</p>
            </div>
          </div>

          <div className="space-y-3">
            {curriculumUnits.map((unit) => (
              <div key={unit.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-800">{unit.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(unit.status)}`}>
                        {unit.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{unit.subject} • {unit.grade}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">
                          {unit.completedLessons}/{unit.lessons} Lessons Delivered
                        </span>
                      </div>
                      <div className="text-xs font-bold text-cyan-600">
                        {Math.round((unit.completedLessons / unit.lessons) * 100)}%
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                    <Edit className="w-4 h-4" />
                    <span>Update Progress</span>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CurriculumPlanner;
