import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import {
  Users, BookOpen, Filter, BarChart2, PlusCircle,
  Clock, TrendingUp, Bell, X, ChevronDown, Search,
  Calendar, FileText, AlertCircle, CheckCircle,
  ArrowRightLeft, BarChart3, Layout, Send, Save,
  Sparkles, Shield, User, GraduationCap, Info
} from 'lucide-react';

const ClassManagement = () => {
  const { classes, user, lessons } = TEACHER_DATA;

  // State management
  const [showTimetable, setShowTimetable] = useState(false);
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    grade: 'All',
    subject: 'All',
    section: 'All'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('classes'); // classes, substitution, homework

  // Screen 255: Substitution State
  const [substitutionData, setSubstitutionData] = useState({
    absentTeacher: '',
    date: new Date().toISOString().split('T')[0],
    classes: [],
    substitute: null,
    plan: {
      topic: '',
      objective: '',
      activities: '',
      timeSplit: '40m instructions / 20m practice'
    }
  });

  // Screen 256: Homework State
  const [homeworkLoad, setHomeworkLoad] = useState({
    daily: [
      { day: 'Mon', load: 45, items: 2 },
      { day: 'Tue', load: 85, items: 4 },
      { day: 'Wed', load: 30, items: 1 },
      { day: 'Thu', load: 95, items: 5 },
      { day: 'Fri', load: 20, items: 1 }
    ],
    threshold: 60 // minutes per subject/day
  });

  // Extract unique values for filters
  const grades = ['All', ...new Set(classes.map(cls => cls.grade.split('-')[0]))];
  const subjects = ['All', ...new Set(classes.map(cls => cls.subject))];
  const sections = ['All', ...new Set(classes.map(cls => {
    const match = cls.grade.match(/-([A-Z])$/);
    return match ? match[1] : null;
  }).filter(Boolean))];

  // Mock substitution alerts
  const substitutionAlerts = [
    {
      id: 'SUB1',
      grade: 'Grade 8-B',
      subject: 'Mathematics',
      period: 'Period 4',
      time: '11:30 AM',
      reason: 'Teacher on Leave',
      urgent: true
    }
  ];

  // Filter logic
  useEffect(() => {
    let result = classes;

    // Apply grade filter
    if (filters.grade !== 'All') {
      result = result.filter(cls => cls.grade.startsWith(filters.grade));
    }

    // Apply subject filter
    if (filters.subject !== 'All') {
      result = result.filter(cls => cls.subject === filters.subject);
    }

    // Apply section filter
    if (filters.section !== 'All') {
      result = result.filter(cls => cls.grade.endsWith(`-${filters.section}`));
    }

    // Apply search query
    if (searchQuery) {
      result = result.filter(cls =>
        cls.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.topic.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredClasses(result);
  }, [filters, searchQuery, classes]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      grade: 'All',
      subject: 'All',
      section: 'All'
    });
    setSearchQuery('');
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/classes')
    //   .then(res => res.json())
    //   .then(data => setClasses(data));
    console.log('Class Management loaded - Ready for API integration');
  }, []);

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'All').length;

  // Calculate average score and attendance  
  const avgScore = classes.length > 0
    ? Math.round(classes.reduce((sum, cls) => sum + (cls.avgScore || 85), 0) / classes.length)
    : 85;

  const avgAttendance = classes.length > 0
    ? Math.round(classes.reduce((sum, cls) => sum + (cls.attendance || 92), 0) / classes.length)
    : 92;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-1 backdrop-blur-sm border border-white/20">
              Institutional Administration
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
                {activeTab === 'classes' ? 'Class Management' :
                  activeTab === 'substitution' ? 'Substitution Planner' :
                    'Homework Load Balancer'}
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-lg max-w-2xl leading-relaxed">
                {activeTab === 'classes' ? `Comprehensive orchestration of ${classes.length} assigned pedagogical streams.` :
                  activeTab === 'substitution' ? 'Systematic continuity planning for faculty absence and class transitions.' :
                    'Analytical oversight of student workload across cross-functional academic domains.'}
              </p>
            </div>
          </div>

          {/* Glass Ribbon Tabs */}
          <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
            {[
              { id: 'classes', label: 'My Classes', icon: Users },
              { id: 'substitution', label: 'Substitution', icon: ArrowRightLeft },
              { id: 'homework', label: 'Homework Load', icon: BarChart3 }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                <tab.icon size={16} />
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Rendering */}
      {activeTab === 'classes' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Substitution Alerts */}
          {substitutionAlerts.length > 0 && (
            <div className="space-y-4">
              {substitutionAlerts.map(alert => (
                <div
                  key={alert.id}
                  className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-2 border-orange-200 p-4 md:p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-orange-500 text-white rounded-xl shadow-md animate-pulse">
                      <Bell size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-orange-900 text-lg">Substitution Required</h4>
                        {alert.urgent && (
                          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                            URGENT
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Class</p>
                          <p className="font-bold text-slate-800">{alert.grade}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Subject</p>
                          <p className="font-bold text-slate-800">{alert.subject}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Period</p>
                          <p className="font-bold text-slate-800">{alert.period}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Time</p>
                          <p className="font-bold text-slate-800">{alert.time}</p>
                        </div>
                      </div>
                      <p className="text-xs text-orange-700 mt-2 font-medium">
                        Reason: {alert.reason}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-xl hover:bg-orange-600 shadow-md transition-all">
                      Accept
                      <span className="block text-[10px] opacity-80">get in app</span>
                    </button>
                    <button className="flex-1 md:flex-none px-4 py-2 bg-white text-orange-600 border-2 border-orange-200 text-xs font-bold rounded-xl hover:bg-orange-50 transition-all">
                      Decline
                      <span className="block text-[10px] opacity-80">get in app</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Search and Filter Bar */}
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by class, subject, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeFiltersCount > 0
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <Filter size={18} />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs">
                    {activeFiltersCount}
                  </span>
                )}
                <ChevronDown size={18} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Filter Panel */}
            {filterOpen && (
              <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Grade Filter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Grade</label>
                    <select
                      value={filters.grade}
                      onChange={(e) => handleFilterChange('grade', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
                    >
                      {grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subject Filter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Subject</label>
                    <select
                      value={filters.subject}
                      onChange={(e) => handleFilterChange('subject', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
                    >
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  {/* Section Filter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2">Section</label>
                    <select
                      value={filters.section}
                      onChange={(e) => handleFilterChange('section', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none bg-white"
                    >
                      {sections.map(section => (
                        <option key={section} value={section}>{section}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all"
                  >
                    <X size={14} />
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between px-2">
            <p className="text-sm text-slate-600 font-medium">
              Showing <span className="font-bold text-slate-800">{filteredClasses.length}</span> of <span className="font-bold text-slate-800">{classes.length}</span> classes
            </p>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Class Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((cls) => (
              <div
                key={cls.id}
                className="bg-white p-6 rounded-3xl shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <Users size={24} />
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
                      {cls.subject}
                    </div>
                  </div>
                </div>

                {/* Class Info */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{cls.grade}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <BookOpen size={14} className="text-slate-400" />
                      <span className="text-slate-600 font-medium">Current Topic:</span>
                      <span className="text-slate-800 font-bold">{cls.topic}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Users size={14} className="text-slate-400" />
                      <span className="text-slate-600 font-medium">Enrollment:</span>
                      <span className="text-slate-800 font-bold">{cls.students} Students</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-medium">Course Progress</span>
                    <span className="text-xs text-blue-600 font-bold">65%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-blue-100">
                  <div className="text-center">
                    <p className="text-xs text-slate-500 font-medium mb-1">Avg Score</p>
                    <p className="text-sm font-bold text-slate-800">85%</p>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <p className="text-xs text-slate-500 font-medium mb-1">Attendance</p>
                    <p className="text-sm font-bold text-green-600">92%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500 font-medium mb-1">Assignments</p>
                    <p className="text-sm font-bold text-blue-600">8/10</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-1">
                      <PlusCircle size={14} />
                      <span>Add Lesson</span>
                    </div>
                    <span className="text-[10px] opacity-80">get in app</span>
                  </button>
                  <button className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 text-xs font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-1">
                      <BarChart2 size={14} />
                      <span>View Reports</span>
                    </div>
                    <span className="text-[10px] text-slate-400">get in app</span>
                  </button>
                </div>

                {/* Quick Links */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setShowTimetable(true)}
                    className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Calendar size={14} />
                    Timetable
                  </button>
                  <button className="flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors">
                    <FileText size={14} />
                    Resources
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredClasses.length === 0 && (
            <div className="bg-white p-12 rounded-3xl shadow-md text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-slate-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No Classes Found</h3>
              <p className="text-sm text-slate-500 mb-6">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Summary Stats Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-3xl border border-cyan-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cyan-400 rounded-lg">
                  <Users className="text-white" size={18} />
                </div>
                <p className="text-xs font-bold text-slate-600">Total Students</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{classes.reduce((sum, c) => sum + c.students, 0)}</h3>
              <p className="text-[10px] text-slate-400 mt-1">get in app</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-3xl border border-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-400 rounded-lg">
                  <BookOpen className="text-white" size={18} />
                </div>
                <p className="text-xs font-bold text-slate-600">Active Classes</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{classes.length}</h3>
              <p className="text-[10px] text-slate-400 mt-1">get in app</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-400 rounded-lg">
                  <TrendingUp className="text-white" size={18} />
                </div>
                <p className="text-xs font-bold text-slate-600">Avg Performance</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{avgScore}%</h3>
              <p className="text-[10px] text-slate-400 mt-1">get in app</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-3xl border border-pink-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-pink-400 rounded-lg">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <p className="text-xs font-bold text-slate-600">Completion Rate</p>
              </div>
              <p className="text-2xl font-bold text-slate-800">92%</p>
            </div>
          </div>
        </div>
      )
      }

      {
        activeTab === 'substitution' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Screen 253 - Substitution Context & Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Absence Detail */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <AlertCircle size={24} className="text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight">Requirement Details</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Define Absence Scope</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Absent Teacher</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search faculty name..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                        />
                        <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Effective Date</label>
                      <input
                        type="date"
                        value={substitutionData.date}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Affected Classes</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['8-A', '9-B', '10-C', '11-A'].map(cls => (
                          <button key={cls} className="py-2 px-3 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-between">
                            {cls}
                            <PlusCircle size={12} className="text-slate-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Substitute Recommendation */}
                <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                  <Layout className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                    <GraduationCap size={20} className="text-blue-400" />
                    Substitute Selection
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Dr. Sarah Wilson', sub: 'Physics/Math', avail: 'Free Period 4', match: '98%' },
                      { name: 'Prof. James Bond', sub: 'Science', avail: 'On Call', match: '85%' }
                    ].map((teacher, idx) => (
                      <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 cursor-pointer transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-sm font-bold">{teacher.name}</p>
                          <span className="text-[9px] font-bold text-emerald-400 uppercase">{teacher.match} Match</span>
                        </div>
                        <p className="text-[10px] text-white/50 mb-1">{teacher.sub}</p>
                        <div className="flex items-center gap-2 text-[10px] text-blue-300">
                          <Clock size={10} />
                          {teacher.avail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: AI Plan Generator */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                        <Sparkles size={24} className="text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Substitution Lesson Plan</h3>
                    </div>
                    <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
                      <Sparkles size={14} /> AI2 Generator
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Planned Topic</label>
                        <input
                          type="text"
                          placeholder="e.g., Quantum Mechanics Overview"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Learning Objective</label>
                        <input
                          type="text"
                          placeholder="e.g., Understanding wave-particle duality"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Teaching Instructions & Activities</label>
                      <textarea
                        rows={10}
                        className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500 transition-all leading-relaxed"
                        placeholder="AI suggest: Start with active recall of last lesson. Use 'Sheet A' for group work. Conclude with a 5-minute quiz."
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Info size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">Pedagogical Continuity Guard</p>
                        <p className="text-xs text-blue-600 font-medium">Topic aligns with Week 24 Syllabus. Substitute teacher Wilson has expertise in this domain. Continuity risks: LOW.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-slate-400" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">Institutional Verification Required</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="px-6 py-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">Save for Review</button>
                      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                        <Send size={16} /> Finalise & Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        activeTab === 'homework' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Screen 256 — Homework Load Balancer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                      <BarChart3 size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Student Workload Analysis</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Grade 9-A • Week 4 February</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl">
                    <button className="px-4 py-2 bg-white text-slate-800 rounded-lg shadow-sm text-[10px] font-bold uppercase tracking-wider">Visual Chart</button>
                    <button className="px-4 py-2 text-slate-400 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:text-slate-600 transition-all">Tabular Data</button>
                  </div>
                </div>

                {/* Workload Bars */}
                <div className="space-y-8">
                  <div className="grid grid-cols-5 gap-6 h-64 items-end px-4">
                    {homeworkLoad.daily.map((data, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-4 group">
                        <div className="relative w-full">
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                            {data.load}% Load
                          </div>
                          <div
                            className={`w-full rounded-2xl transition-all duration-1000 ${data.load > 80 ? 'bg-red-500 shadow-lg shadow-red-200' : data.load > 50 ? 'bg-orange-400 shadow-lg shadow-orange-100' : 'bg-emerald-400 shadow-lg shadow-emerald-100'}`}
                            style={{ height: `${data.load * 2}px` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{data.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shadow-inner">
                        <AlertCircle size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 tracking-tight">Overload Warnings</p>
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-0.5">Thursday: 95% Volume</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 tracking-tight">Average Time/Day</p>
                        <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-0.5">54 Minutes Needed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 tracking-tight">Balance Status</p>
                        <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mt-0.5">Optimized for Wed/Fri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Balancer Sidebar */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                  <Sparkles className="absolute -right-4 -top-4 w-24 h-24 opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-700" />
                  <h4 className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-6">AI1 Balancing Intelligence</h4>
                  <div className="space-y-5">
                    {[
                      { type: 'Suggestion', msg: 'Reschedule Physics HW from Thu to Fri.' },
                      { type: 'Alert', msg: 'Combined Math+Bio exceeds 90m on Tue.' },
                      { type: 'Recommend', msg: 'Reduce History essay page count.' }
                    ].map((tip, idx) => (
                      <div key={idx} className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                        <p className="text-[9px] font-bold text-blue-300 uppercase mb-1">{tip.type}</p>
                        <p className="text-xs font-medium leading-relaxed">{tip.msg}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-3 bg-white text-blue-600 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                    Generate Rebalance Plan
                  </button>
                </div>

                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 block ml-1">Policy Constraints</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">Daily Max</span>
                      <span className="text-xs font-bold text-slate-800">60 Minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">Grade Guideline</span>
                      <span className="text-xs font-bold text-slate-800">Middle School</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">Weekend Policy</span>
                      <span className="text-xs font-bold text-emerald-500">No Homework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* Timetable Modal */}
      {/* Timetable Modal */}
      {showTimetable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
                  <Calendar size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Weekly Schedule</h2>
                  <p className="text-sm font-medium text-slate-500">Academic Timetable & Classroom Allocation</p>
                </div>
              </div>
              <button
                onClick={() => setShowTimetable(false)}
                className="p-3 bg-white text-slate-400 rounded-xl hover:bg-slate-50 hover:text-slate-600 transition-all border border-slate-100 shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Timetable Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                  <div key={day} className="space-y-4">
                    <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 sticky top-0 z-10">
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">{day}</h3>
                    </div>

                    <div className="space-y-4">
                      {lessons[day]?.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`p-4 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-all group bg-white ${lesson.subject === 'Physics' ? 'border-l-blue-500' :
                              lesson.subject === 'Chemistry' ? 'border-l-purple-500' :
                                'border-l-emerald-500'
                            }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">
                              {lesson.time}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">{lesson.duration}</span>
                          </div>

                          <h4 className="font-bold text-slate-800 text-sm mb-1">{lesson.subject}</h4>
                          <p className="text-xs text-slate-500 font-medium mb-3 line-clamp-1">{lesson.title}</p>

                          <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                            <div className="flex items-center gap-1.5">
                              <Users size={12} className="text-slate-400" />
                              <span className="text-[10px] font-bold text-slate-600">{lesson.class}</span>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${lesson.status === 'Taught' ? 'bg-emerald-400' : 'bg-amber-400'
                              }`} />
                          </div>
                        </div>
                      ))}

                      {!lessons[day] && (
                        <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400">
                          <span className="text-xs font-medium">Free Day</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default ClassManagement;
