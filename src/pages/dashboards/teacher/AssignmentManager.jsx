import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import {
  FilePlus, Download, CheckSquare, Clock, Upload, FileText,
  TrendingUp, AlertTriangle, CheckCircle, Edit, Trash2,
  Send, Eye, Filter, Search, Calendar, Users, Award,
  Sparkles, Shield, Target, BarChart2, X, ChevronDown,
  MessageSquare, XCircle, FileCheck, Zap, Copy, Share2, Paperclip
} from 'lucide-react';

import CreateAssignmentWizard from '../../../components/dashboard/teacher/AssignmentManager/CreateAssignmentWizard';
import SubmissionTracker from '../../../components/dashboard/teacher/AssignmentManager/SubmissionTracker';
import EvaluationStudio from '../../../components/dashboard/teacher/AssignmentManager/EvaluationStudio';
import QuizBuilder from '../../../components/dashboard/teacher/AssignmentManager/QuizBuilder';
import AssessmentBlueprint from '../../../components/dashboard/teacher/AssignmentManager/AssessmentBlueprint';
import RubricBuilder from '../../../components/dashboard/teacher/AssignmentManager/RubricBuilder';
import AcademicIntegrity from '../../../components/dashboard/teacher/AssignmentManager/AcademicIntegrity';

const AssignmentManager = () => {
  const { assignments: initialAssignments } = TEACHER_DATA;

  // State management
  const [assignmentView, setAssignmentView] = useState('tracker'); // 'tracker', 'repository'
  const [activeTab, setActiveTab] = useState('active'); // 'active', 'quizzes', 'blueprint', 'rubrics'
  const [viewMode, setViewMode] = useState('all'); // 'all', 'active', 'overdue', 'completed', 'remedial'
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('overview'); // 'overview', 'tracking'
  const [showEvaluationStudio, setShowEvaluationStudio] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Wizard State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [newAssignment, setNewAssignment] = useState({
    type: '',
    title: '',
    mappedLessons: [],
    learningOutcomes: [],
    competency: 'Knowledge',
    context: '',
    instructions: '',
    expectedOutput: [],
    successCriteria: '',
    rubric: {
      criteria: [
        { id: 1, name: '', levels: [{ level: 1, descriptor: '' }, { level: 2, descriptor: '' }, { level: 3, descriptor: '' }] }
      ]
    },
    submissionFormat: [],
    isGroup: false,
    deadline: '',
    graceWindow: 0,
    latePenalty: 'none',
    targetGroup: 'All'
  });

  const ASSIGNMENT_TYPES = [
    { id: 'homework', label: 'Homework', description: 'Reinforcement of classroom learning (Same/Next day)' },
    { id: 'project', label: 'Project', description: 'Multi-lesson/week inquiry-based application' },
    { id: 'case_study', label: 'Case Study', description: 'Real-world scenarios with analysis & justification' }
  ];

  const COMPETENCY_TYPES = ['Knowledge', 'Skill', 'Application'];

  const OUTPUT_FORMATS = ['Written', 'Visual', 'Audio', 'Practical'];

  const SUBMISSION_FORMATS = ['File Upload', 'Text Entry', 'Image', 'Video'];

  const resetForm = () => {
    setCurrentStep(1);
    setNewAssignment({
      type: '',
      title: '',
      mappedLessons: [],
      learningOutcomes: [],
      competency: 'Knowledge',
      context: '',
      instructions: '',
      expectedOutput: [],
      successCriteria: '',
      rubric: {
        criteria: [{ id: 1, name: '', levels: [{ level: 1, descriptor: '' }, { level: 2, descriptor: '' }, { level: 3, descriptor: '' }] }]
      },
      submissionFormat: [],
      isGroup: false,
      deadline: '',
      graceWindow: 0,
      latePenalty: 'none',
      targetGroup: 'All'
    });
  };

  // Repository Mock Data (Master Templates)
  const masterRepository = [
    { id: 'M1', title: 'Calculus Advanced Problem Set', type: 'Problem Set', subject: 'Math', grade: 'Grade 12', status: 'Master', used: 12, created: '2025-11-20' },
    { id: 'M2', title: 'Organic Chemistry Lab Structure', type: 'Lab Report', subject: 'Chemistry', grade: 'Grade 11', status: 'Master', used: 8, created: '2025-12-05' },
    { id: 'M3', title: 'Modern History Essay Framework', type: 'Essay', subject: 'History', grade: 'Grade 10', status: 'Draft', used: 0, created: '2026-01-10' },
  ];

  // Filter assignments
  const displayAssignments = assignmentView === 'tracker'
    ? assignments.filter(assignment => {
      if (viewMode !== 'all') {
        if (viewMode === 'active' && assignment.status !== 'Active') return false;
        if (viewMode === 'overdue' && assignment.status !== 'Overdue') return false;
        if (viewMode === 'completed' && assignment.status !== 'Completed') return false;
        if (viewMode === 'remedial' && assignment.status !== 'Remedial') return false;
      }
      if (searchQuery && !assignment.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    : [...masterRepository, ...assignments.map(a => ({ ...a, status: 'Master', used: Math.floor(Math.random() * 10) + 1, created: a.due }))].filter(a => {
      if (searchQuery && !a.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });

  // Calculate statistics
  const stats = {
    total: assignments.length,
    active: assignments.filter(a => a.status === 'Active').length,
    overdue: assignments.filter(a => a.status === 'Overdue').length,
    completed: assignments.filter(a => a.status === 'Completed').length,
    remedial: assignments.filter(a => a.status === 'Remedial').length,
    totalSubmissions: assignments.reduce((sum, a) => sum + a.submitted, 0),
    totalStudents: assignments.reduce((sum, a) => sum + a.total, 0),
    totalPending: assignments.reduce((sum, a) => sum + a.pending, 0)
  };

  // Mock API call
  useEffect(() => {
    console.log('Assignment Manager loaded - Ready for API integration');
  }, []);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'from-blue-400 to-cyan-500';
      case 'Overdue': return 'from-red-400 to-pink-500';
      case 'Completed': return 'from-green-400 to-emerald-500';
      case 'Remedial': return 'from-orange-400 to-amber-500';
      default: return 'from-slate-400 to-slate-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Overdue': return 'bg-red-100 text-red-700 border-red-200';
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Remedial': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
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
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm border border-white/30 uppercase tracking-widest">
            {activeTab === 'active' ? 'Assignment & Evaluation Manager' :
              activeTab === 'quizzes' ? 'Quiz & Assessment Builder' :
                activeTab === 'blueprint' ? 'Pedagogical Blueprinting' :
                  activeTab === 'integrity' ? 'Academic Integrity & Proctoring' : 'Grading Rubric Library'}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight">
                {activeTab === 'active' ? 'Assignment Hub' :
                  activeTab === 'quizzes' ? 'Quiz Studio' :
                    activeTab === 'blueprint' ? 'Design Blueprint' :
                      activeTab === 'integrity' ? 'Integrity Shield' : 'Rubric Studio'}
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {activeTab === 'active' ? (
                  assignmentView === 'tracker'
                    ? `${stats.total} Assignments • ${stats.totalPending} Pending Reviews`
                    : `12 Saved Templates • 5 Recently Used`
                ) : (
                  activeTab === 'quizzes' ? 'Create high-fidelity tests with AI drafting.' :
                    activeTab === 'blueprint' ? 'Ensure balanced difficulty & outcome coverage.' :
                      activeTab === 'integrity' ? 'Monitor assessment legitimacy & AI-detected anomalies.' : 'Define misinterpretation-proof success criteria.'
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === 'active' ? (
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <FilePlus size={20} />
                  <div className="text-left">
                    <div>Create New</div>
                    <div className="text-[10px] opacity-70">Follow Framework</div>
                  </div>
                </button>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20">
                  <Sparkles size={16} />
                  AI2 Assistant Active
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex p-1.5 bg-slate-100 rounded-[2rem] w-full max-w-2xl shadow-inner border border-slate-200/50">
          {[
            { id: 'active', label: 'Assignments', icon: <FileText size={16} /> },
            { id: 'quizzes', label: 'Quiz Builder', icon: <CheckSquare size={16} /> },
            { id: 'integrity', label: 'Integrity', icon: <Shield size={16} /> },
            { id: 'blueprint', label: 'Blueprints', icon: <BarChart2 size={16} /> },
            { id: 'rubrics', label: 'Rubric Library', icon: <Shield size={16} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.5rem] text-xs font-bold transition-all duration-500 ${activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-xl scale-105'
                : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'active' && (
          <div className="flex p-1 bg-blue-50/50 rounded-2xl border border-blue-100 self-end md:self-auto">
            <button
              onClick={() => setAssignmentView('tracker')}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${assignmentView === 'tracker' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-blue-600'}`}
            >
              Live Tracker
            </button>
            <button
              onClick={() => setAssignmentView('repository')}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${assignmentView === 'repository' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-blue-600'}`}
            >
              Master Repository
            </button>
          </div>
        )}
      </div>

      {activeTab === 'active' ? (
        <>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'all'
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg'
                : 'bg-white border-purple-200 hover:border-purple-300'
                }`}
              onClick={() => setViewMode('all')}
            >
              <div className="flex items-center justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'all' ? 'text-white/80' : 'text-slate-400'}`}>Total</p>
                <FileText className={viewMode === 'all' ? 'text-white opacity-60' : 'text-purple-400 opacity-60'} size={20} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'all' ? 'text-white' : 'text-slate-800'}`}>{stats.total}</h3>
            </div>

            <div
              className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'active'
                ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-500 shadow-lg'
                : 'bg-white border-blue-200 hover:border-blue-300'
                }`}
              onClick={() => setViewMode('active')}
            >
              <div className="flex items-center justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'active' ? 'text-white/80' : 'text-slate-400'}`}>Active</p>
                <Zap className={viewMode === 'active' ? 'text-white opacity-60' : 'text-blue-400 opacity-60'} size={20} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'active' ? 'text-white' : 'text-blue-600'}`}>{stats.active}</h3>
            </div>

            <div
              className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'overdue'
                ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg'
                : 'bg-white border-red-200 hover:border-red-300'
                }`}
              onClick={() => setViewMode('overdue')}
            >
              <div className="flex items-center justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'overdue' ? 'text-white/80' : 'text-slate-400'}`}>Overdue</p>
                <AlertTriangle className={viewMode === 'overdue' ? 'text-white opacity-60' : 'text-red-400 opacity-60'} size={20} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'overdue' ? 'text-white' : 'text-red-600'}`}>{stats.overdue}</h3>
            </div>

            <div
              className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${viewMode === 'completed'
                ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg'
                : 'bg-white border-green-200 hover:border-green-300'
                }`}
              onClick={() => setViewMode('completed')}
            >
              <div className="flex items-center justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'completed' ? 'text-white/80' : 'text-slate-400'}`}>Completed</p>
                <CheckCircle className={viewMode === 'completed' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'completed' ? 'text-white' : 'text-green-600'}`}>{stats.completed}</h3>
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

          {/* Release Grades Action */}
          <div className="p-4 bg-orange-50 border border-orange-100 flex flex-col md:flex-row items-center justify-between rounded-3xl mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Shield size={20} className="text-orange-600" />
              </div>
              <p className="text-xs font-bold text-orange-800 uppercase tracking-wide">
                Official Grade Release Policy: Once grades are released, they become official academic records.
              </p>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
              <Send size={16} />
              Batch Release All
            </button>
          </div>

          {/* Action Bar */}
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
            <div className="flex flex-col lg:flex-row gap-4">
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

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <Filter size={18} />
                <span>Templates</span>
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

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
            {displayAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className={`bg-white rounded-3xl p-6 shadow-md border-2 transition-all duration-300 group ${assignmentView === 'repository' ? 'hover:border-purple-200' : 'hover:border-blue-200'} hover:shadow-xl`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 bg-gradient-to-br ${assignmentView === 'repository' ? 'from-purple-500 to-indigo-500' : getStatusColor(assignment.status)} text-white rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                    {assignment.type === 'Quiz' ? <CheckSquare size={24} /> : <FileText size={24} />}
                  </div>
                  <div className={`px-3 py-1 rounded-xl text-xs font-bold border-2 ${assignmentView === 'repository' ? 'border-purple-200 text-purple-600 bg-purple-50' : getStatusBadge(assignment.status)}`}>
                    {assignmentView === 'repository' ? (assignment.status === 'Draft' ? 'DRAFT' : 'MASTER') : assignment.status}
                  </div>
                </div>

                <h4 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">{assignment.title}</h4>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium flex items-center gap-1"><Users size={14} />{assignment.class}</span>
                    <span className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-lg text-xs font-bold`}>{assignment.subject}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium flex items-center gap-1"><Calendar size={14} />Due: {formatDate(assignment.due)}</span>
                    <span className="text-slate-600 font-bold">{assignment.dueTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  {assignmentView === 'tracker' ? (
                    <>
                      <div className="flex justify-between text-xs mb-2 font-semibold text-slate-500">
                        <span>Submissions</span>
                        <span>{assignment.submitted} / {assignment.total}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${getStatusColor(assignment.status)} rounded-full transition-all`} style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}></div>
                      </div>
                    </>
                  ) : (
                    <div className="p-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                        <span>Created: Jan 15, 2026</span>
                        <span>Used: 4 Times</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  {assignmentView === 'tracker' ? (
                    <>
                      <button onClick={() => setSelectedAssignment(assignment)} className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 text-xs">View Details</button>
                      <button className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 text-xs transition-all">Grade Now</button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95 text-xs flex items-center justify-center gap-2">
                        <Copy size={14} />
                        Assign New
                      </button>
                      <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 text-xs transition-all">
                        <Edit size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayAssignments.length === 0 && (
            <div className="bg-white p-12 rounded-3xl shadow-md text-center border-2 border-dashed border-slate-200">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-slate-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No Assignments Found</h3>
              <p className="text-sm text-slate-500 mb-6">{searchQuery ? 'Try adjusting your search query' : 'No assignments match the selected filter'}</p>
              {(searchQuery || viewMode !== 'all') && (
                <button
                  onClick={() => { setSearchQuery(''); setViewMode('all'); }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </>
      ) : activeTab === 'quizzes' ? (
        <QuizBuilder />
      ) : activeTab === 'integrity' ? (
        <AcademicIntegrity />
      ) : activeTab === 'blueprint' ? (
        <AssessmentBlueprint />
      ) : (
        <RubricBuilder />
      )}

      {/* Detailed View Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedAssignment(null)}
              className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(selectedAssignment.status)} text-white rounded-xl font-bold text-sm`}>{selectedAssignment.subject}</span>
                  <span className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadge(selectedAssignment.status)}`}>{selectedAssignment.status}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{selectedAssignment.title}</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Class</p>
                      <p className="text-sm font-bold text-slate-700">{selectedAssignment.class}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Type</p>
                      <p className="text-sm font-bold text-slate-700">{selectedAssignment.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Due Date</p>
                      <p className="text-sm font-bold text-slate-700">{formatDate(selectedAssignment.due)} • {selectedAssignment.dueTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Max Marks</p>
                      <p className="text-sm font-bold text-slate-700">{selectedAssignment.maxMarks || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 border-b border-slate-100">
              <button onClick={() => setActiveModalTab('overview')} className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeModalTab === 'overview' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                Overview {activeModalTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />}
              </button>
              <button onClick={() => setActiveModalTab('tracking')} className={`pb-4 px-2 text-sm font-bold transition-all relative ${activeModalTab === 'tracking' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                Tracking {activeModalTab === 'tracking' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />}
              </button>
            </div>

            {activeModalTab === 'overview' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
                <div className="space-y-6">
                  {/* Overview Stats */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2rem] border border-blue-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="text-blue-500" size={20} />
                      Performance Overview
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-blue-50">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Submissions</p>
                        <p className="text-xl font-black text-slate-800">{selectedAssignment.submitted}/{selectedAssignment.total}</p>
                      </div>
                      <div className="p-4 bg-white rounded-2xl border border-blue-50">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Graded</p>
                        <p className="text-xl font-black text-green-600">{selectedAssignment.graded}</p>
                      </div>
                    </div>
                  </div>

                  {/* Attachment List */}
                  {selectedAssignment.attachments && selectedAssignment.attachments.length > 0 && (
                    <div className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Paperclip className="text-slate-400" size={18} />
                        Resources & Attachments
                      </h3>
                      <div className="space-y-2">
                        {selectedAssignment.attachments.map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <FileText size={16} className="text-blue-500" />
                              <span className="text-xs font-bold text-slate-700">{file}</span>
                            </div>
                            <Download size={14} className="text-slate-300 group-hover:text-blue-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Evaluation Actions */}
                  <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2">Evaluation Studio</h4>
                        <p className="text-xs opacity-60 leading-relaxed">
                          Access the unified grading pipeline. Compare submissions against rubrics and use AI2 for bias detection.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedStudent(null); // Open general evaluation
                          setShowEvaluationStudio(true);
                        }}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                        <Zap size={18} />
                        Launch Studio
                      </button>
                    </div>
                  </div>

                  {/* Evaluation Safeguards (Restore from original) */}
                  <div className="p-6 bg-orange-50 rounded-[2rem] border border-orange-100 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                      <Shield className="text-orange-500" size={20} />
                      Evaluation Safeguards
                    </h3>
                    <div className="space-y-2 text-[10px] font-medium text-slate-600">
                      <p className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-500" />
                        Outcome Mapping Confirmed
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-500" />
                        Rubric Locked for Consistency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <SubmissionTracker
                  assignment={selectedAssignment}
                  onOpenEvaluation={(s) => {
                    setSelectedStudent(s);
                    setShowEvaluationStudio(true);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      <CreateAssignmentWizard
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        ASSIGNMENT_TYPES={ASSIGNMENT_TYPES}
        COMPETENCY_TYPES={COMPETENCY_TYPES}
        OUTPUT_FORMATS={OUTPUT_FORMATS}
        SUBMISSION_FORMATS={SUBMISSION_FORMATS}
      />

      <EvaluationStudio
        isOpen={showEvaluationStudio}
        onClose={() => setShowEvaluationStudio(false)}
        assignment={selectedAssignment}
        student={selectedStudent}
      />
    </div>
  );
};

export default AssignmentManager;
