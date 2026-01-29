import React, { useState } from 'react';
import { 
  Eye, 
  CheckCircle, 
  FileText, 
  AlertTriangle,
  Download,
  Shield,
  Clock,
  TrendingUp,
  Check,
  X,
  BarChart2,
  Users,
  Calendar,
  FileCheck
} from 'lucide-react';

// Timetable Approval Card
const TimetableApprovalCard = ({ title, grade, submittedBy, timestamp, examCount, status }) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-xs text-slate-500">Grade {grade} • {examCount} exams scheduled</p>
          </div>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Submitted by: <span className="font-semibold">{submittedBy}</span> • {timestamp}
        </p>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            View Draft
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
            <Check size={14} />
            Approve
            <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-bold transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Question Paper Validation Card
const QuestionPaperCard = ({ subject, grade, uploadedBy, timestamp, difficulty, status }) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FileCheck className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800">{subject}</h4>
            <p className="text-xs text-slate-500">Grade {grade} • Random Sample</p>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            difficulty === 'Medium' ? 'bg-blue-100 text-blue-700' :
            difficulty === 'Hard' ? 'bg-orange-100 text-orange-700' :
            'bg-green-100 text-green-700'
          }`}>
            {difficulty}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Uploaded by: <span className="font-semibold">{uploadedBy}</span> • {timestamp}
        </p>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            Inspect Paper
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
            <CheckCircle size={14} />
            Validate
            <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Performance Summary Card
const PerformanceSummaryCard = ({ exam, grade, totalStudents, avgScore, passRate, status }) => (
  <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 text-sm">{exam}</h4>
        <p className="text-xs text-slate-500">Grade {grade} • {totalStudents} students</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
        status === 'Published' ? 'bg-green-100 text-green-700' :
        status === 'Ready' ? 'bg-blue-100 text-blue-700' :
        'bg-yellow-100 text-yellow-700'
      }`}>
        {status}
      </span>
    </div>
    <div className="flex gap-4 text-sm">
      <div className="flex-1">
        <p className="text-xs text-slate-500 mb-1">Avg Score</p>
        <p className="text-lg font-bold text-slate-800">{avgScore}%</p>
      </div>
      <div className="flex-1">
        <p className="text-xs text-slate-500 mb-1">Pass Rate</p>
        <p className="text-lg font-bold text-green-600">{passRate}%</p>
      </div>
    </div>
  </div>
);

// Audit Trail Entry
const AuditTrailEntry = ({ action, performedBy, timestamp, status }) => (
  <div className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
      status === 'Approved' ? 'bg-green-500' :
      status === 'Rejected' ? 'bg-red-500' :
      'bg-blue-500'
    }`}></div>
    <div className="flex-1">
      <p className="text-sm font-medium text-slate-800">{action}</p>
      <p className="text-xs text-slate-500">
        By {performedBy} • {timestamp}
      </p>
    </div>
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
      status === 'Approved' ? 'bg-green-100 text-green-700' :
      status === 'Rejected' ? 'bg-red-100 text-red-700' :
      'bg-blue-100 text-blue-700'
    }`}>
      {status}
    </span>
  </div>
);

const ExamOversight = () => {
  const [activeTab, setActiveTab] = useState('approvals');

  // Static data - to be replaced with API calls
  const pendingTimetables = [
    { title: 'Final Exam Timetable', grade: '10', submittedBy: 'Academic Coordinator', timestamp: '2 hours ago', examCount: 8, status: 'Pending' },
    { title: 'Mid-term Exam Schedule', grade: '12', submittedBy: 'Exam Controller', timestamp: '5 hours ago', examCount: 12, status: 'Pending' },
  ];

  const questionPapers = [
    { subject: 'Physics Paper', grade: '12', uploadedBy: 'Dr. Wilson', timestamp: '1 day ago', difficulty: 'Medium', status: 'Pending' },
    { subject: 'Mathematics Paper', grade: '10', uploadedBy: 'Dr. Anderson', timestamp: '1 day ago', difficulty: 'Hard', status: 'Pending' },
    { subject: 'Chemistry Paper', grade: '11', uploadedBy: 'Prof. Chen', timestamp: '2 days ago', difficulty: 'Medium', status: 'Pending' },
  ];

  const performanceSummaries = [
    { exam: 'Mid-term Mathematics', grade: '10', totalStudents: 145, avgScore: 76, passRate: 88, status: 'Ready' },
    { exam: 'Mid-term Science', grade: '11', totalStudents: 132, avgScore: 82, passRate: 92, status: 'Ready' },
    { exam: 'Mid-term English', grade: '12', totalStudents: 156, avgScore: 79, passRate: 85, status: 'Published' },
    { exam: 'Mid-term History', grade: '9', totalStudents: 178, avgScore: 71, passRate: 80, status: 'Ready' },
  ];

  const auditTrail = [
    { action: 'Grade 12 Final Exam Timetable Approved', performedBy: 'Principal', timestamp: 'Jan 19, 2026 3:45 PM', status: 'Approved' },
    { action: 'Chemistry Question Paper Validated', performedBy: 'Principal', timestamp: 'Jan 19, 2026 2:30 PM', status: 'Approved' },
    { action: 'Grade 11 Mid-term Results Published', performedBy: 'Principal', timestamp: 'Jan 18, 2026 10:15 AM', status: 'Approved' },
    { action: 'Physics Timetable Modification Requested', performedBy: 'Academic Coordinator', timestamp: 'Jan 17, 2026 4:20 PM', status: 'Rejected' },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Examination Oversight & Approval
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Supervise schedules, validate papers, publish results
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Report</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Timetables Pending</p>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{pendingTimetables.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Awaiting approval</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Papers Vetted</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">85%</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold">Ready for printing</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Results Ready</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">3/12</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Pending publication</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Audit Entries</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{auditTrail.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Significant actions logged</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex gap-2 border-b border-slate-200 p-2">
          <button 
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'approvals' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
            onClick={() => setActiveTab('approvals')}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Pending Approvals
            {(pendingTimetables.length + questionPapers.length) > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white rounded-full text-xs font-bold">
                {pendingTimetables.length + questionPapers.length}
              </span>
            )}
          </button>
          <button 
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'results' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
            onClick={() => setActiveTab('results')}
          >
            <BarChart2 className="w-4 h-4 inline mr-2" />
            Results & Publication
          </button>
          <button 
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'audit' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
            onClick={() => setActiveTab('audit')}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Audit Trail
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'approvals' && (
            <div className="space-y-6">
              {/* Timetable Approvals */}
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Exam Timetables ({pendingTimetables.length})
                </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {pendingTimetables.map((timetable, idx) => (
                    <TimetableApprovalCard key={idx} {...timetable} />
                  ))}
                </div>
              </div>

              {/* Question Paper Validation */}
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-purple-500" />
                  Question Paper Validation ({questionPapers.length})
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Random samples selected for quality assurance and difficulty index validation
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {questionPapers.map((paper, idx) => (
                    <QuestionPaperCard key={idx} {...paper} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              {/* Performance Summaries */}
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-green-500" />
                  Auto-Generated Performance Summaries
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Student performance automatically analyzed upon result upload
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {performanceSummaries.map((summary, idx) => (
                    <PerformanceSummaryCard key={idx} {...summary} />
                  ))}
                </div>
              </div>

              {/* Publication Control */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-900 mb-2">Publish Term Results</h4>
                    <p className="text-sm text-green-800 mb-4">
                      Once verified, results can be published to Student and Parent portals instantly. 
                      Ensure all marks entries are locked before proceeding. This action is irreversible.
                    </p>
                    <div className="flex gap-3">
                      <button className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-md flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Confirm & Publish All
                        <span className="text-[9px] opacity-80">(get in app)</span>
                      </button>
                      <button className="px-5 py-3 border-2 border-green-600 hover:bg-green-50 text-green-700 rounded-xl font-bold transition-all">
                        View Summary Preview
                        <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-500" />
                  Audit Trail
                </h3>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border-2 border-slate-200 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none">
                    <option>All Actions</option>
                    <option>Approvals Only</option>
                    <option>Rejections Only</option>
                  </select>
                  <button className="px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-bold transition-colors">
                    Filter
                  </button>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                {auditTrail.map((entry, idx) => (
                  <AuditTrailEntry key={idx} {...entry} />
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-bold transition-colors">
                Load More Entries
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default ExamOversight;
