import React, { useState } from 'react';
import { 
  BookOpen, FileText, CheckCircle, Clock, Download, 
  Eye, MessageSquare, Calendar, Filter, Search,
  ChevronDown, AlertCircle, CheckCheck
} from 'lucide-react';

const HomeworkAssignments = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [acknowledgments, setAcknowledgments] = useState({});

  // Static data - will be replaced with API calls in the future
  const assignments = [
    { 
      id: 1,
      subject: "Mathematics", 
      title: "Algebra Worksheet 4 - Quadratic Equations", 
      status: "Pending", 
      dueDate: "2026-01-22",
      assignedDate: "2026-01-15",
      description: "Complete exercises 1-20 from Chapter 5. Show all working steps.",
      hasDocument: true,
      documentUrl: "/documents/math_worksheet_4.pdf",
      teacherName: "Ms. Sarah Johnson",
      feedback: null,
      grade: null,
      acknowledged: false
    },
    { 
      id: 2,
      subject: "Science", 
      title: "Plant Life Cycle Report", 
      status: "Submitted", 
      dueDate: "2026-01-18",
      submittedDate: "2026-01-17",
      assignedDate: "2026-01-10",
      description: "Research and document the complete life cycle of flowering plants with diagrams.",
      hasDocument: true,
      documentUrl: "/documents/science_plant_lifecycle.pdf",
      teacherName: "Mr. David Chen",
      feedback: "Good research work. Please add more detailed diagrams for better understanding.",
      grade: null,
      acknowledged: true
    },
    { 
      id: 3,
      subject: "English", 
      title: "Essay: My Summer Vacation", 
      status: "Graded", 
      dueDate: "2026-01-16",
      submittedDate: "2026-01-15",
      gradedDate: "2026-01-18",
      assignedDate: "2026-01-08",
      description: "Write a creative essay (500 words) about your summer vacation experiences.",
      hasDocument: true,
      documentUrl: "/documents/english_essay_summer.pdf",
      teacherName: "Mrs. Emily Roberts",
      feedback: "Excellent descriptive writing! Great use of vocabulary and storytelling techniques. Keep up the good work!",
      grade: "A",
      score: "92/100",
      acknowledged: true
    },
    { 
      id: 4,
      subject: "History", 
      title: "Ancient Civilizations Project", 
      status: "Pending", 
      dueDate: "2026-01-25",
      assignedDate: "2026-01-12",
      description: "Create a presentation on any ancient civilization of your choice. Include culture, architecture, and contributions.",
      hasDocument: true,
      documentUrl: "/documents/history_project_guidelines.pdf",
      teacherName: "Mr. Robert Taylor",
      feedback: null,
      grade: null,
      acknowledged: false
    },
    { 
      id: 5,
      subject: "Physics", 
      title: "Newton's Laws Lab Report", 
      status: "Submitted", 
      dueDate: "2026-01-20",
      submittedDate: "2026-01-19",
      assignedDate: "2026-01-13",
      description: "Document observations and conclusions from the Newton's Laws laboratory experiment.",
      hasDocument: true,
      documentUrl: "/documents/physics_lab_report.pdf",
      teacherName: "Dr. Michael Brown",
      feedback: "Well-documented observations. Consider adding more analysis in the conclusion section.",
      grade: null,
      acknowledged: false
    },
    { 
      id: 6,
      subject: "Computer Science", 
      title: "Python Programming Assignment", 
      status: "Graded", 
      dueDate: "2026-01-14",
      submittedDate: "2026-01-13",
      gradedDate: "2026-01-16",
      assignedDate: "2026-01-05",
      description: "Write a Python program to implement a basic calculator with all arithmetic operations.",
      hasDocument: true,
      documentUrl: "/documents/cs_python_assignment.pdf",
      teacherName: "Ms. Jennifer Lee",
      feedback: "Perfect implementation! Clean code structure and excellent error handling. Outstanding work!",
      grade: "A+",
      score: "98/100",
      acknowledged: true
    },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'from-orange-400 to-red-400';
      case 'Submitted': return 'from-blue-400 to-cyan-400';
      case 'Graded': return 'from-green-400 to-emerald-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Pending': return <Clock size={16} />;
      case 'Submitted': return <CheckCircle size={16} />;
      case 'Graded': return <CheckCheck size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  const handleDownload = (documentUrl, title) => {
    // In future, this will trigger actual download
    console.log(`Downloading: ${documentUrl}`);
    alert(`Downloading: ${title}`);
  };

  const handlePreview = (documentUrl, title) => {
    // In future, this will open document viewer
    console.log(`Previewing: ${documentUrl}`);
    alert(`Opening preview: ${title}`);
  };

  const toggleAcknowledgment = (id) => {
    setAcknowledgments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    // In future, this will save to API
    console.log(`Acknowledgment toggled for assignment ${id}`);
  };

  const filteredAssignments = assignments.filter(assignment => {
    const matchesFilter = activeFilter === 'all' || assignment.status.toLowerCase() === activeFilter;
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter(a => a.status === 'Pending').length,
    submitted: assignments.filter(a => a.status === 'Submitted').length,
    graded: assignments.filter(a => a.status === 'Graded').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-6">
      {/* Header Section with Gradient */}
      <div className="relative mb-8 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 text-white shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <BookOpen size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Homework & Assignments</h1>
              <p className="text-white/90 text-sm">Monitor workload and track submissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Total Assignments</p>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{stats.total}</h3>
            </div>
            <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
              <FileText className="text-cyan-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Pending</p>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{stats.pending}</h3>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
              <Clock className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Submitted</p>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{stats.submitted}</h3>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
              <CheckCircle className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Graded</p>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">{stats.graded}</h3>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
              <CheckCheck className="text-green-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 border border-slate-100">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({stats.total})
            </button>
            <button 
              onClick={() => setActiveFilter('pending')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'pending' 
                  ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button 
              onClick={() => setActiveFilter('submitted')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'submitted' 
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Submitted ({stats.submitted})
            </button>
            <button 
              onClick={() => setActiveFilter('graded')}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'graded' 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Graded ({stats.graded})
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search assignments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <FileText className="mx-auto mb-4 text-slate-300" size={64} />
            <h3 className="text-xl font-bold text-slate-600 mb-2">No assignments found</h3>
            <p className="text-slate-400">Try adjusting your filters or search query</p>
          </div>
        ) : (
          filteredAssignments.map((assignment) => (
            <div 
              key={assignment.id} 
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Assignment Header */}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left Section: Subject and Title */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${getStatusColor(assignment.status)} bg-opacity-10 flex-shrink-0`}>
                      <BookOpen className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-bold rounded-full">
                          {assignment.subject}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md`}>
                          {getStatusIcon(assignment.status)}
                          {assignment.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{assignment.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{assignment.description}</p>
                      
                      {/* Dates */}
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>Assigned: {new Date(assignment.assignedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span className={assignment.status === 'Pending' ? 'text-orange-600 font-semibold' : ''}>
                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        {assignment.submittedDate && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <CheckCircle size={14} />
                            <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                        {assignment.gradedDate && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCheck size={14} />
                            <span>Graded: {new Date(assignment.gradedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-2 text-xs text-slate-500">
                        <span className="font-semibold">Teacher:</span> {assignment.teacherName}
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Grade and Actions */}
                  <div className="flex flex-col gap-3 items-end">
                    {assignment.grade && (
                      <div className="bg-gradient-to-br from-green-400 to-emerald-400 text-white px-6 py-3 rounded-2xl text-center shadow-lg">
                        <div className="text-3xl font-bold">{assignment.grade}</div>
                        <div className="text-xs opacity-90">{assignment.score}</div>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      {assignment.hasDocument && (
                        <>
                          <button 
                            onClick={() => handlePreview(assignment.documentUrl, assignment.title)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex flex-col items-center gap-0.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <Eye size={16} />
                              <span>Preview</span>
                            </div>
                            <span className="text-[10px] opacity-80">get in app</span>
                          </button>
                          <button 
                            onClick={() => handleDownload(assignment.documentUrl, assignment.title)}
                            className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex flex-col items-center gap-0.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <Download size={16} />
                              <span>Download</span>
                            </div>
                            <span className="text-[10px] opacity-80">get in app</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Teacher Feedback Section */}
                {assignment.feedback && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-slate-700 mb-1">Teacher Feedback</h4>
                        <p className="text-sm text-slate-600">{assignment.feedback}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Parent Acknowledgment Toggle */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox"
                      id={`ack-${assignment.id}`}
                      checked={acknowledgments[assignment.id] || assignment.acknowledged}
                      onChange={() => toggleAcknowledgment(assignment.id)}
                      className="w-5 h-5 rounded accent-blue-500 cursor-pointer"
                    />
                    <label htmlFor={`ack-${assignment.id}`} className="text-sm font-semibold text-slate-700 cursor-pointer">
                      I acknowledge home supervision for this assignment
                    </label>
                  </div>
                  {(acknowledgments[assignment.id] || assignment.acknowledged) && (
                    <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      <CheckCircle size={14} />
                      Acknowledged
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default HomeworkAssignments;
