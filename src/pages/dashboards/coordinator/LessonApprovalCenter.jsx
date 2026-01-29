import React, { useState } from 'react';
import { 
  CheckSquare, Clock, XCircle, MessageSquare, Download,
  Eye, Edit, ThumbsUp, ThumbsDown, FileText, AlertCircle,
  Calendar, User, TrendingUp, Filter, Search, RotateCcw
} from 'lucide-react';

/**
 * Screen 3: Lesson & Assessment Approval Center
 * Purpose: Review and approve academic submissions from teachers
 * Features:
 * - Lesson plan approval queue
 * - Assignment and Assessment approval workflow
 * - Comment and revision request section
 * - Approval Log (timestamped)
 * Integration: Lesson Plan API + Evaluation Engine
 */

const LessonApprovalCenter = () => {
  const [selectedTab, setSelectedTab] = useState('pending'); // pending, approved, revision
  const [selectedItem, setSelectedItem] = useState(null);

  // Static data - ready for API integration
  const stats = [
    { label: 'Pending Review', value: '12', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '+3' },
    { label: 'Approved Today', value: '8', icon: CheckSquare, gradient: 'from-green-400 to-emerald-500', change: '+2' },
    { label: 'Revision Requested', value: '5', icon: RotateCcw, gradient: 'from-blue-400 to-cyan-500', change: '-1' },
    { label: 'Total This Month', value: '247', icon: TrendingUp, gradient: 'from-pink-400 to-purple-500', change: '+45' },
  ];

  // Pending approval queue
  const pendingQueue = [
    {
      id: 1,
      type: 'Lesson Plan',
      title: 'Advanced Calculus - Integration Techniques',
      teacher: 'Sarah Martinez',
      subject: 'Mathematics',
      grade: 'Grade 12',
      submittedDate: '2024-01-20T09:30:00',
      priority: 'high',
      description: 'Comprehensive lesson plan covering integration by parts, substitution, and partial fractions',
      duration: '90 minutes',
      learningObjectives: ['Understand integration techniques', 'Apply methods to solve problems'],
    },
    {
      id: 2,
      type: 'Assessment',
      title: 'Mid-term Physics Examination',
      teacher: 'Dr. Robert Chen',
      subject: 'Physics',
      grade: 'Grade 11',
      submittedDate: '2024-01-19T14:20:00',
      priority: 'medium',
      description: 'Comprehensive assessment covering thermodynamics and wave motion',
      duration: '120 minutes',
      totalMarks: 100,
    },
    {
      id: 3,
      type: 'Assignment',
      title: 'English Literature - Macbeth Analysis',
      teacher: 'Michael Brown',
      subject: 'English',
      grade: 'Grade 10',
      submittedDate: '2024-01-18T11:15:00',
      priority: 'low',
      description: 'Essay assignment on themes and character development in Macbeth',
      duration: '1 week',
      totalMarks: 25,
    },
    {
      id: 4,
      type: 'Lesson Plan',
      title: 'Organic Chemistry - Nomenclature',
      teacher: 'Emily Johnson',
      subject: 'Chemistry',
      grade: 'Grade 11',
      submittedDate: '2024-01-20T08:00:00',
      priority: 'high',
      description: 'Interactive lesson on IUPAC nomenclature for organic compounds',
      duration: '60 minutes',
      learningObjectives: ['Master IUPAC naming rules', 'Identify functional groups'],
    },
  ];

  // Approval log
  const approvalLog = [
    {
      id: 1,
      type: 'Lesson Plan',
      title: 'Algebra Fundamentals',
      teacher: 'Sarah Martinez',
      subject: 'Mathematics',
      action: 'Approved',
      approver: 'Dr. Academic Coordinator',
      timestamp: '2024-01-20T10:45:00',
      comments: 'Excellent structure and clear learning objectives.',
    },
    {
      id: 2,
      type: 'Assessment',
      title: 'Chemistry Quiz - Atomic Structure',
      teacher: 'Emily Johnson',
      subject: 'Chemistry',
      action: 'Revision Requested',
      approver: 'Dr. Academic Coordinator',
      timestamp: '2024-01-19T16:30:00',
      comments: 'Please add more questions on electron configuration. Current difficulty level seems too easy.',
    },
    {
      id: 3,
      type: 'Assignment',
      title: 'History Essay - World War II',
      teacher: 'Prof. Ahmed',
      subject: 'History',
      action: 'Approved',
      approver: 'Dr. Academic Coordinator',
      timestamp: '2024-01-19T14:20:00',
      comments: 'Well-structured assignment with appropriate rubric.',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Lesson Plan': return 'from-cyan-400 to-blue-500';
      case 'Assessment': return 'from-pink-400 to-purple-500';
      case 'Assignment': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'Approved': return 'text-green-600';
      case 'Revision Requested': return 'text-orange-600';
      case 'Rejected': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const submitted = new Date(timestamp);
    const diffMs = now - submitted;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHrs / 24);
    
    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHrs > 0) return `${diffHrs}h ago`;
    return 'Just now';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Lesson & Assessment Approval Center
              </h1>
              <p className="text-gray-600">Review and approve academic submissions from teachers.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
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

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'pending' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Pending Review ({pendingQueue.length})
          </button>
          <button
            onClick={() => setSelectedTab('log')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'log' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Approval Log
          </button>
        </div>

        {/* Pending Approval Queue */}
        {selectedTab === 'pending' && (
          <div className="space-y-4">
            {pendingQueue.map((item) => (
              <div key={item.id} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)} shadow-md`}>
                        {item.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(item.priority)}`}>
                        {item.priority} priority
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {getTimeAgo(item.submittedDate)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    
                    {/* Meta Info */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{item.teacher}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-cyan-500" />
                        <span className="text-gray-700">{item.subject} • {item.grade}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-pink-500" />
                        <span className="text-gray-700">Duration: {item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">{formatTimestamp(item.submittedDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Approve</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                  
                  <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Revision</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                  
                  <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      <span>Reject</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                  
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                </div>

                {/* Comment Section */}
                <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-2xl border border-cyan-100">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    Add Comment or Revision Request
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white resize-none"
                    rows="3"
                    placeholder="Enter your comments, suggestions, or revision requests here..."
                    disabled
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2">* Comments will be visible to the teacher when you take action</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Approval Log */}
        {selectedTab === 'log' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Approval Log</h2>
                <p className="text-sm text-gray-600">Timestamped history of all approval actions</p>
              </div>
            </div>

            <div className="space-y-4">
              {approvalLog.map((log) => (
                <div key={log.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(log.type)}`}>
                          {log.type}
                        </span>
                        <span className={`font-bold ${getActionColor(log.action)}`}>
                          {log.action}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{log.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{log.subject} • {log.teacher}</p>
                      
                      {log.comments && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                          <p className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            Coordinator Comments:
                          </p>
                          <p className="text-sm text-gray-700">{log.comments}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right md:text-left md:min-w-[180px]">
                      <p className="text-xs text-gray-500 mb-1">Reviewed by</p>
                      <p className="font-semibold text-gray-800 mb-2">{log.approver}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 md:justify-end">
                        <Clock className="w-3 h-3" />
                        {formatTimestamp(log.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                <span>Load More</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LessonApprovalCenter;
