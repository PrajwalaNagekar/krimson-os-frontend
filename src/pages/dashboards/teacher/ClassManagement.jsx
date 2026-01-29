import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Users, BookOpen, Filter, BarChart2, PlusCircle, 
  Clock, TrendingUp, Bell, X, ChevronDown, Search,
  Calendar, FileText, AlertCircle, CheckCircle
} from 'lucide-react';

const ClassManagement = () => {
  const { classes, user } = TEACHER_DATA;
  
  // State management
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    grade: 'All',
    subject: 'All',
    section: 'All'
  });
  const [searchQuery, setSearchQuery] = useState('');

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
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Class & Subject Management
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                My Classes & Subjects
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                Manage {classes.length} assigned classes • {user.subjects.join(', ')}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl">
                <p className="text-xs opacity-80">Total Students</p>
                <p className="text-2xl font-bold">
                  {classes.reduce((sum, cls) => sum + cls.students, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeFiltersCount > 0
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
              <button className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
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
  );
};

export default ClassManagement;
