import React, { useState, useEffect } from 'react';
import { 
  Plus, Clock, Calendar, CheckCircle, Edit, Eye, Trash2,
  Upload, Download, Send, Award, AlertCircle, Filter,
  Users, FileText, BookOpen, BarChart2, Share2, Settings,
  Search, X, ChevronDown, Target, Zap, Book, CheckSquare
} from 'lucide-react';

const TestManager = () => {
  // Sample test data
  const [tests] = useState([
    {
      id: 'T1',
      title: 'Mid-term Examination - Physics',
      type: 'exam',
      class: 'Grade 9-A',
      date: '2026-01-22',
      time: '09:00 AM',
      duration: 120,
      totalMarks: 100,
      status: 'scheduled',
      questionsTotal: 50,
      questionsObjective: 40,
      questionsSubjective: 10,
      students: 32,
      submitted: 0,
      autoGraded: 0,
      manualGraded: 0
    },
    {
      id: 'T2',
      title: 'Unit Test 3 - Newton\'s Laws',
      type: 'test',
      class: 'Grade 10-B',
      date: '2026-01-20',
      time: '10:30 AM',
      duration: 45,
      totalMarks: 50,
      status: 'live',
      questionsTotal: 25,
      questionsObjective: 20,
      questionsSubjective: 5,
      students: 28,
      submitted: 12,
      autoGraded: 12,
      manualGraded: 0
    },
    {
      id: 'T3',
      title: 'Pop Quiz - Thermodynamics',
      type: 'quiz',
      class: 'Grade 9-A',
      date: '2026-01-18',
      time: '11:00 AM',
      duration: 15,
      totalMarks: 20,
      status: 'completed',
      questionsTotal: 10,
      questionsObjective: 10,
      questionsSubjective: 0,
      students: 32,
      submitted: 30,
      autoGraded: 30,
      manualGraded: 0
    },
    {
      id: 'T4',
      title: 'Quarterly Assessment - Physics',
      type: 'exam',
      class: 'Grade 9-A',
      date: '2026-01-16',
      time: '09:00 AM',
      duration: 180,
      totalMarks: 150,
      status: 'grading',
      questionsTotal: 60,
      questionsObjective: 45,
      questionsSubjective: 15,
      students: 32,
      submitted: 32,
      autoGraded: 32,
      manualGraded: 8
    },
  ]);

  // Question bank
  const [questionBank] = useState({
    total: 250,
    objective: 180,
    subjective: 70,
    byTopic: {
      mechanics: 85,
      thermodynamics: 60,
      optics: 45,
      electricity: 60
    }
  });

  const [selectedTest, setSelectedTest] = useState(null);
  const [filterType, setFilterType] = useState('all'); // 'all', 'exam', 'test', 'quiz'
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'scheduled', 'live', 'completed', 'grading'
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tests
  const filteredTests = tests.filter(test => {
    // Filter by type
    if (filterType !== 'all' && test.type !== filterType) return false;
    
    // Filter by status
    if (filterStatus !== 'all' && test.status !== filterStatus) return false;
    
    // Filter by search
    if (searchQuery) {
      return test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             test.class.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });

  // Calculate statistics
  const stats = {
    total: tests.length,
    scheduled: tests.filter(t => t.status === 'scheduled').length,
    live: tests.filter(t => t.status === 'live').length,
    grading: tests.filter(t => t.status === 'grading').length,
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/tests')
    //   .then(res => res.json())
    //   .then(data => setTests(data));
    console.log('Test Manager loaded - Ready for API integration');
  }, []);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'live':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'completed':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'grading':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'scheduled':
        return <Calendar size={14} />;
      case 'live':
        return <Zap size={14} />;
      case 'completed':
        return <CheckCircle size={14} />;
      case 'grading':
        return <Edit size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'exam':
        return 'bg-red-100 text-red-700';
      case 'test':
        return 'bg-purple-100 text-purple-700';
      case 'quiz':
        return 'bg-cyan-100 text-cyan-700';
      default:
        return 'bg-slate-100 text-slate-700';
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
            Test & Examination Manager
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Test Creation & Management
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {stats.total} total tests • {stats.live} live • {stats.grading} pending grading
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <Plus size={20} />
                <div className="text-left">
                  <div>Create Test</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Question Bank */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <BookOpen size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">Question Bank Library</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">{questionBank.total} QUESTIONS</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              {questionBank.objective} objective • {questionBank.subjective} subjective questions across all topics
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(questionBank.byTopic).map(([topic, count]) => (
                <span key={topic} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30 capitalize">
                  {topic}: {count}
                </span>
              ))}
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <Book size={18} />
            <div className="text-left">
              <div>Manage Bank</div>
              <div className="text-[10px] opacity-70">get in app</div>
            </div>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Scheduled
            </p>
            <Calendar className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
            {stats.scheduled}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:border-green-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Live Now
            </p>
            <Zap className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">
            {stats.live}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-orange-200 bg-white hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Pending Grading
            </p>
            <Edit className="text-orange-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
            {stats.grading}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Tests</p>
            <FileText className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{stats.total}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
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
              placeholder="Search tests by title or class..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'all', label: 'All Types' },
              { value: 'exam', label: 'Exams' },
              { value: 'test', label: 'Tests' },
              { value: 'quiz', label: 'Quizzes' },
            ].map(filter => (
              <button
                key={filter.value}
                onClick={() => setFilterType(filter.value)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                  filterType === filter.value
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTests.map((test) => (
          <div 
            key={test.id}
            className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Test Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-lg text-xs font-bold uppercase ${getTypeColor(test.type)}`}>
                    {test.type}
                  </span>
                  <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${getStatusColor(test.status)} flex items-center gap-1`}>
                    {getStatusIcon(test.status)}
                    {test.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{test.title}</h3>
                <p className="text-sm text-slate-500">{test.class}</p>
              </div>
            </div>

            {/* Test Details */}
            <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-slate-50 rounded-xl">
              <div>
                <p className="text-xs text-slate-500 mb-1">Date & Time</p>
                <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="text-xs text-slate-600">{test.time}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Duration</p>
                <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
                  <Clock size={14} />
                  {test.duration} mins
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Questions</p>
                <p className="text-sm font-bold text-slate-700">{test.questionsTotal}</p>
                <p className="text-xs text-slate-600">{test.questionsObjective} obj • {test.questionsSubjective} subj</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Total Marks</p>
                <p className="text-sm font-bold text-slate-700">{test.totalMarks}</p>
              </div>
            </div>

            {/* Progress Bar (for completed/grading tests) */}
            {(test.status === 'completed' || test.status === 'grading' || test.status === 'live') && (
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-600">Submissions: <span className="font-bold">{test.submitted}/{test.students}</span></span>
                  <span className="text-slate-600">Auto-graded: <span className="font-bold">{test.autoGraded}/{test.submitted}</span></span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                    style={{ width: `${(test.submitted / test.students) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Manual Grading Alert */}
            {test.status === 'grading' && test.questionsSubjective > 0 && (
              <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-2">
                <AlertCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-bold text-orange-800">Manual Grading Required</p>
                  <p className="text-xs text-orange-600">{test.questionsSubjective} subjective questions • {test.submitted - test.manualGraded} pending</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {test.status === 'scheduled' && (
                <>
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-1">
                    <Edit size={14} />
                    <div className="text-left">
                      <div>Edit</div>
                      <div className="text-[9px] opacity-70">get in app</div>
                    </div>
                  </button>
                  <button className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                    <Eye size={14} />
                    Preview
                  </button>
                </>
              )}
              {test.status === 'live' && (
                <button 
                  onClick={() => setSelectedTest(test)}
                  className="col-span-2 px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-xl text-xs font-bold hover:bg-green-100 transition-colors flex items-center justify-center gap-1"
                >
                  <Zap size={14} />
                  Monitor Live
                </button>
              )}
              {(test.status === 'completed' || test.status === 'grading') && (
                <>
                  <button 
                    onClick={() => setSelectedTest(test)}
                    className="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-200 rounded-xl text-xs font-bold hover:bg-orange-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <Edit size={14} />
                    <div className="text-left">
                      <div>Grade</div>
                      <div className="text-[9px] opacity-70">get in app</div>
                    </div>
                  </button>
                  <button className="px-4 py-2 bg-purple-50 text-purple-600 border border-purple-200 rounded-xl text-xs font-bold hover:bg-purple-100 transition-colors flex items-center justify-center gap-1">
                    <Send size={14} />
                    <div className="text-left">
                      <div>Publish</div>
                      <div className="text-[9px] opacity-70">get in app</div>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTests.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <FileText className="mx-auto text-slate-300 mb-3" size={48} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">No Tests Found</h3>
          <p className="text-sm text-slate-500">
            {searchQuery || filterType !== 'all' || filterStatus !== 'all' 
              ? 'Try adjusting your filters' 
              : 'Create your first test to get started'}
          </p>
        </div>
      )}

      {/* Test Detail Modal (for grading) */}
      {selectedTest && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${getTypeColor(selectedTest.type)}`}>
                    {selectedTest.type}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(selectedTest.status)}`}>
                    {selectedTest.status}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedTest.title}</h2>
                <p className="text-slate-600">{selectedTest.class}</p>
              </div>
              <button
                onClick={() => setSelectedTest(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Grading Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Auto-Scoring Progress */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckSquare className="text-blue-500" size={20} />
                  Auto-Scoring Status
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Objective Questions</span>
                    <span className="font-bold text-slate-800">{selectedTest.questionsObjective}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Auto-Graded</span>
                    <span className="font-bold text-green-600">{selectedTest.autoGraded}/{selectedTest.submitted}</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      style={{ width: `${selectedTest.submitted > 0 ? (selectedTest.autoGraded / selectedTest.submitted) * 100 : 0}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500">All objective questions automatically scored</p>
                </div>
              </div>

              {/* Manual Grading */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Edit className="text-orange-500" size={20} />
                  Manual Grading Required
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Subjective Questions</span>
                    <span className="font-bold text-slate-800">{selectedTest.questionsSubjective}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Manually Graded</span>
                    <span className="font-bold text-orange-600">{selectedTest.manualGraded}/{selectedTest.submitted}</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"
                      style={{ width: `${selectedTest.submitted > 0 ? (selectedTest.manualGraded / selectedTest.submitted) * 100 : 0}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500">{selectedTest.submitted - selectedTest.manualGraded} submissions pending review</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-amber-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Edit size={18} />
                <div className="text-left">
                  <div>Start Manual Grading</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                <div className="text-left">
                  <div>Publish Results</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestManager;
