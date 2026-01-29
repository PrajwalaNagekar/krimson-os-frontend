import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  FilePlus, Download, CheckSquare, Clock, Upload, FileText,
  TrendingUp, AlertTriangle, CheckCircle, Edit, Trash2,
  Send, Eye, Filter, Search, Calendar, Users, Award,
  Sparkles, Shield, Target, BarChart2, X, ChevronDown,
  MessageSquare, XCircle, FileCheck, Zap, Copy, Share2, Paperclip
} from 'lucide-react';

const AssignmentManager = () => {
  const { assignments: initialAssignments } = TEACHER_DATA;
  
  // State management
  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'active', 'overdue', 'completed'
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter assignments
  const filteredAssignments = assignments.filter(assignment => {
    // Filter by view mode
    if (viewMode !== 'all') {
      if (viewMode === 'active' && assignment.status !== 'Active') return false;
      if (viewMode === 'overdue' && assignment.status !== 'Overdue') return false;
      if (viewMode === 'completed' && assignment.status !== 'Completed') return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      return assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             assignment.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
             assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });

  // Calculate statistics
  const stats = {
    total: assignments.length,
    active: assignments.filter(a => a.status === 'Active').length,
    overdue: assignments.filter(a => a.status === 'Overdue').length,
    completed: assignments.filter(a => a.status === 'Completed').length,
    totalSubmissions: assignments.reduce((sum, a) => sum + a.submitted, 0),
    totalStudents: assignments.reduce((sum, a) => sum + a.total, 0),
    totalPending: assignments.reduce((sum, a) => sum + a.pending, 0)
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/assignments')
    //   .then(res => res.json())
    //   .then(data => setAssignments(data));
    console.log('Assignment Manager loaded - Ready for API integration');
  }, []);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'from-blue-400 to-cyan-500';
      case 'Overdue':
        return 'from-red-400 to-pink-500';
      case 'Completed':
        return 'from-green-400 to-emerald-500';
      default:
        return 'from-slate-400 to-slate-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Overdue':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Assignment templates
  const templates = [
    { id: 1, name: 'Lab Report Template', type: 'Lab Report', icon: <FileText size={20} /> },
    { id: 2, name: 'Multiple Choice Quiz', type: 'Quiz', icon: <CheckSquare size={20} /> },
    { id: 3, name: 'Standard Worksheet', type: 'Worksheet', icon: <FileCheck size={20} /> },
    { id: 4, name: 'Problem Set Template', type: 'Problem Set', icon: <Target size={20} /> },
    { id: 5, name: 'Essay Assignment', type: 'Essay', icon: <FileText size={20} /> },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Assignment & Evaluation Manager
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Assignment Hub
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {stats.total} Assignments • {stats.totalPending} Pending Reviews
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <FilePlus size={20} />
                <div className="text-left">
                  <div>Create New</div>
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
            viewMode === 'all' 
              ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg' 
              : 'bg-white border-purple-200 hover:border-purple-300'
          }`}
          onClick={() => setViewMode('all')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'all' ? 'text-white/80' : 'text-slate-400'}`}>
              Total
            </p>
            <FileText className={viewMode === 'all' ? 'text-white opacity-60' : 'text-purple-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'all' ? 'text-white' : 'text-slate-800'}`}>
            {stats.total}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'active' 
              ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-500 shadow-lg' 
              : 'bg-white border-blue-200 hover:border-blue-300'
          }`}
          onClick={() => setViewMode('active')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'active' ? 'text-white/80' : 'text-slate-400'}`}>
              Active
            </p>
            <Zap className={viewMode === 'active' ? 'text-white opacity-60' : 'text-blue-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'active' ? 'text-white' : 'text-blue-600'}`}>
            {stats.active}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'overdue' 
              ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg' 
              : 'bg-white border-red-200 hover:border-red-300'
          }`}
          onClick={() => setViewMode('overdue')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'overdue' ? 'text-white/80' : 'text-slate-400'}`}>
              Overdue
            </p>
            <AlertTriangle className={viewMode === 'overdue' ? 'text-white opacity-60' : 'text-red-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'overdue' ? 'text-white' : 'text-red-600'}`}>
            {stats.overdue}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'completed' 
              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg' 
              : 'bg-white border-green-200 hover:border-green-300'
          }`}
          onClick={() => setViewMode('completed')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'completed' ? 'text-white/80' : 'text-slate-400'}`}>
              Completed
            </p>
            <CheckCircle className={viewMode === 'completed' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'completed' ? 'text-white' : 'text-green-600'}`}>
            {stats.completed}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* AI Grading Assistant Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Sparkles size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">AI Grading Assistant</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">SMART</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Automatically check assignment completion and detect plagiarism using advanced AI. Get instant insights on student performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {stats.totalPending > 0 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
                  {stats.totalPending} submissions ready for AI analysis
                </span>
              )}
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
                Plagiarism Detection Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search assignments by title, class, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            <span>Templates</span>
            <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Templates Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-slate-800 mb-3 text-sm">Assignment Templates</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {templates.map(template => (
                <button
                  key={template.id}
                  className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                      {template.icon}
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-700 mb-1">{template.name}</p>
                  <p className="text-[10px] text-slate-500">{template.type}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Assignment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssignments.map((assignment) => (
          <div 
            key={assignment.id} 
            className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getStatusColor(assignment.status)} text-white rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                <CheckSquare size={24} />
              </div>
              <div className={`px-3 py-1 rounded-xl text-xs font-bold border-2 ${getStatusBadge(assignment.status)}`}>
                {assignment.status}
              </div>
            </div>

            {/* Assignment Info */}
            <h4 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">
              {assignment.title}
            </h4>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Users size={14} />
                  {assignment.class}
                </span>
                <span className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-lg text-xs font-bold`}>
                  {assignment.subject}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Calendar size={14} />
                  Due: {formatDate(assignment.due)}
                </span>
                <span className="text-slate-600 font-bold">{assignment.dueTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Award size={14} />
                  Max Marks
                </span>
                <span className="text-slate-800 font-bold">{assignment.maxMarks}</span>
              </div>
            </div>

            {/* Submission Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2 font-semibold text-slate-500">
                <span>Submissions</span>
                <span>{assignment.submitted} / {assignment.total}</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getStatusColor(assignment.status)} rounded-full transition-all`}
                  style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-green-600 font-bold flex items-center gap-1">
                  <CheckCircle size={12} />
                  {assignment.graded} Graded
                </span>
                <span className="text-orange-600 font-bold flex items-center gap-1">
                  <Clock size={12} />
                  {assignment.pending} Pending
                </span>
              </div>
            </div>

            {/* AI Analysis Section */}
            {assignment.aiAnalysis && (
              <div className="mb-4 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-purple-500" />
                  <p className="text-xs font-bold text-purple-700">AI Analysis</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-slate-500">Avg. Completion</p>
                    <p className="font-bold text-slate-800">{assignment.aiAnalysis.avgCompletion}%</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Plagiarism</p>
                    <p className={`font-bold ${assignment.aiAnalysis.plagiarismDetected > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {assignment.aiAnalysis.plagiarismDetected} cases
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Attachments */}
            {assignment.attachments && assignment.attachments.length > 0 && (
              <div className="mb-4 flex items-center gap-2 text-xs text-blue-600 font-medium">
                <Paperclip size={12} />
                <span>{assignment.attachments.length} attachment{assignment.attachments.length > 1 ? 's' : ''}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedAssignment(assignment)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 text-xs flex flex-col items-center"
              >
                <div className="flex items-center gap-1 mb-1">
                  <Eye size={14} />
                  <span>View Details</span>
                </div>
                <span className="text-[10px] opacity-80">get in app</span>
              </button>
              <button className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 text-xs flex flex-col items-center">
                <div className="flex items-center gap-1 mb-1">
                  <BarChart2 size={14} />
                  <span>Grade Now</span>
                </div>
                <span className="text-[10px] text-slate-400">get in app</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAssignments.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="text-slate-400" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Assignments Found</h3>
          <p className="text-sm text-slate-500 mb-6">
            {searchQuery ? 'Try adjusting your search query' : 'No assignments match the selected filter'}
          </p>
          {(searchQuery || viewMode !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setViewMode('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}

      {/* Detailed View Modal (when assignment selected) */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(selectedAssignment.status)} text-white rounded-xl font-bold text-sm`}>
                    {selectedAssignment.subject}
                  </span>
                  <span className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadge(selectedAssignment.status)}`}>
                    {selectedAssignment.status}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{selectedAssignment.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-blue-500" />
                    {selectedAssignment.class}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-purple-500" />
                    Due: {formatDate(selectedAssignment.due)} at {selectedAssignment.dueTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Award size={16} className="text-orange-500" />
                    {selectedAssignment.maxMarks} marks
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedAssignment(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Submission Stats */}
                <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="text-blue-500" size={20} />
                    Submission Tracking
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Total Submissions</span>
                      <span className="text-lg font-bold text-slate-800">{selectedAssignment.submitted}/{selectedAssignment.total}</span>
                    </div>
                    <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getStatusColor(selectedAssignment.status)} transition-all`}
                        style={{ width: `${(selectedAssignment.submitted / selectedAssignment.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="text-center p-2 bg-white rounded-lg">
                        <p className="text-xs text-slate-500 mb-1">Graded</p>
                        <p className="text-lg font-bold text-green-600">{selectedAssignment.graded}</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded-lg">
                        <p className="text-xs text-slate-500 mb-1">Pending</p>
                        <p className="text-lg font-bold text-orange-600">{selectedAssignment.pending}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Analysis */}
                {selectedAssignment.aiAnalysis && (
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Sparkles className="text-purple-500" size={20} />
                      AI Grading Assistant
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                        <span className="text-sm text-slate-600 flex items-center gap-2">
                          <Target size={14} />
                          Avg. Completion
                        </span>
                        <span className="font-bold text-slate-800">{selectedAssignment.aiAnalysis.avgCompletion}%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                        <span className="text-sm text-slate-600 flex items-center gap-2">
                          <Shield size={14} />
                          Plagiarism Detected
                        </span>
                        <span className={`font-bold ${selectedAssignment.aiAnalysis.plagiarismDetected > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {selectedAssignment.aiAnalysis.plagiarismDetected} case{selectedAssignment.aiAnalysis.plagiarismDetected !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                        <span className="text-sm text-slate-600 flex items-center gap-2">
                          <AlertTriangle size={14} />
                          Low Scores
                        </span>
                        <span className="font-bold text-orange-600">{selectedAssignment.aiAnalysis.lowScores} student{selectedAssignment.aiAnalysis.lowScores !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Attachments */}
                <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="text-slate-500" size={20} />
                    Attachments
                  </h3>
                  <div className="space-y-2">
                    {selectedAssignment.attachments.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FileText size={16} className="text-blue-600" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{file}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download">
                            <Download size={16} />
                          </button>
                          <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" title="Share">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-3 px-4 py-3 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
                      <Upload size={18} />
                      <div>
                        <div>Upload New File</div>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Template Info */}
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Copy className="text-green-500" size={20} />
                    Template Used
                  </h3>
                  <div className="p-4 bg-white rounded-xl border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <FileCheck size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{selectedAssignment.template}</p>
                        <p className="text-xs text-slate-500">{selectedAssignment.type}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                    <Send size={20} />
                    <div>
                      <div>Return with Feedback</div>
                      <div className="text-[10px] opacity-80">get in app</div>
                    </div>
                  </button>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                    <Sparkles size={20} />
                    <div>
                      <div>Run AI Analysis</div>
                      <div className="text-[10px] opacity-80">get in app</div>
                    </div>
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex flex-col items-center gap-1">
                      <Edit size={18} />
                      <span className="text-xs">Edit</span>
                      <span className="text-[10px] text-slate-400">get in app</span>
                    </button>
                    <button className="px-4 py-3 bg-white text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-50 transition-all flex flex-col items-center gap-1">
                      <Trash2 size={18} />
                      <span className="text-xs">Delete</span>
                      <span className="text-[10px] text-red-400">get in app</span>
                    </button>
                  </div>
                </div>

                {/* Auto-sync Info */}
                <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Zap className="text-orange-500" size={20} />
                    Auto-Sync Status
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Grades auto-synced with student report cards</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Evaluation engine integrated</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Real-time progress tracking enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentManager;
