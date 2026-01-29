import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Upload, 
  AlertCircle, 
  CheckSquare,
  Download,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileCheck,
  Target,
  Award,
  XCircle,
  Info
} from 'lucide-react';

// Traffic Light Indicator Component
const TrafficLight = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'compliant':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-slate-300';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${getStatusColor()} shadow-lg animate-pulse`}></div>
    </div>
  );
};

// Compliance Issue Card
const ComplianceIssueCard = ({ title, description, deadline, priority, status }) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'Critical':
        return 'border-red-500 bg-red-50';
      case 'High':
        return 'border-orange-500 bg-orange-50';
      case 'Medium':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-blue-500 bg-blue-50';
    }
  };

  const getPriorityIcon = () => {
    switch (priority) {
      case 'Critical':
        return <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />;
      case 'High':
        return <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />;
      default:
        return <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
    }
  };

  return (
    <div className={`p-3 sm:p-4 border-l-4 rounded-lg sm:rounded-xl ${getPriorityColor()} transition-all hover:shadow-md`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{getPriorityIcon()}</div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
            <h4 className="font-bold text-sm sm:text-base text-slate-800">{title}</h4>
            <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap ${
              priority === 'Critical' ? 'bg-red-200 text-red-800' :
              priority === 'High' ? 'bg-orange-200 text-orange-800' :
              'bg-yellow-200 text-yellow-800'
            }`}>
              {priority}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 mb-2">{description}</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Checklist Item Component
const ChecklistItem = ({ title, category, status, dueDate }) => (
  <div className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
    status === 'completed' 
      ? 'bg-green-50 border-green-200 opacity-60' 
      : status === 'overdue'
      ? 'bg-red-50 border-red-200'
      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
  }`}>
    <div className="flex-shrink-0">
      {status === 'completed' ? (
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
      ) : status === 'overdue' ? (
        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
      ) : (
        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-slate-300 rounded"></div>
      )}
    </div>
    <div className="flex-1">
      <h4 className={`font-semibold text-sm sm:text-base ${
        status === 'completed' ? 'line-through text-slate-500' : 'text-slate-800'
      }`}>
        {title}
      </h4>
      <div className="flex flex-wrap items-center gap-2 mt-1">
        <span className="text-[10px] sm:text-xs text-slate-500">{category}</span>
        {dueDate && (
          <>
            <span className="text-slate-300">•</span>
            <span className={`text-[10px] sm:text-xs ${
              status === 'overdue' ? 'text-red-600 font-bold' : 'text-slate-500'
            }`}>
              Due: {dueDate}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
);

// Audit Status Card
const AuditStatusCard = ({ title, status, progress, nextDeadline }) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'compliant':
        return {
          color: 'from-green-500 to-emerald-600',
          textColor: 'text-green-700',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          icon: CheckCircle,
          label: 'Compliant'
        };
      case 'warning':
        return {
          color: 'from-yellow-500 to-orange-500',
          textColor: 'text-yellow-700',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          icon: AlertTriangle,
          label: 'Action Needed'
        };
      case 'critical':
        return {
          color: 'from-red-500 to-red-600',
          textColor: 'text-red-700',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          icon: XCircle,
          label: 'Critical'
        };
      default:
        return {
          color: 'from-slate-400 to-slate-500',
          textColor: 'text-slate-700',
          bgColor: 'bg-slate-50',
          borderColor: 'border-slate-200',
          icon: Info,
          label: 'Pending'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const Icon = statusInfo.icon;

  return (
    <div className={`bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border-2 ${statusInfo.borderColor} hover:shadow-xl transition-all`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${statusInfo.color} shadow-lg`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <TrafficLight status={status} />
      </div>
      
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-2">{title}</h3>
      
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs sm:text-sm font-semibold text-slate-600">Compliance</span>
          <span className={`text-xs sm:text-sm font-bold ${statusInfo.textColor}`}>{progress}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${statusInfo.color} transition-all duration-500 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className={`px-3 py-2 rounded-lg ${statusInfo.bgColor} border ${statusInfo.borderColor}`}>
        <p className="text-xs sm:text-sm font-bold ${statusInfo.textColor}">{statusInfo.label}</p>
        {nextDeadline && (
          <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">Next: {nextDeadline}</p>
        )}
        <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

const ComplianceCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Static data for audit status
  const auditStatuses = [
    {
      title: 'PEI Compliance',
      status: 'compliant',
      progress: 95,
      nextDeadline: 'Mar 15, 2026'
    },
    {
      title: 'SSG Standards',
      status: 'warning',
      progress: 78,
      nextDeadline: 'Feb 1, 2026'
    },
    {
      title: 'EduTrust Certification',
      status: 'compliant',
      progress: 92,
      nextDeadline: 'Apr 30, 2026'
    },
    {
      title: 'Fire Safety Audit',
      status: 'critical',
      progress: 65,
      nextDeadline: 'Jan 28, 2026'
    }
  ];

  // Compliance checklists
  const checklists = [
    {
      title: 'Submit Annual Enrollment Data',
      category: 'PEI',
      status: 'completed',
      dueDate: 'Jan 10, 2026'
    },
    {
      title: 'Update Teacher Qualification Records',
      category: 'SSG',
      status: 'pending',
      dueDate: 'Jan 31, 2026'
    },
    {
      title: 'Fire Drill Log Submission',
      category: 'Safety',
      status: 'overdue',
      dueDate: 'Jan 18, 2026'
    },
    {
      title: 'Student Safety Training Certificates',
      category: 'Safety',
      status: 'pending',
      dueDate: 'Feb 5, 2026'
    },
    {
      title: 'Curriculum Framework Review',
      category: 'EduTrust',
      status: 'completed',
      dueDate: 'Dec 20, 2025'
    },
    {
      title: 'Infrastructure Compliance Report',
      category: 'PEI',
      status: 'pending',
      dueDate: 'Feb 15, 2026'
    }
  ];

  // Open compliance issues
  const openIssues = [
    {
      title: 'Lab Safety Certificate Expired',
      description: 'Chemistry Lab 2 safety certification has expired. Immediate renewal required.',
      deadline: 'Jan 25, 2026',
      priority: 'Critical',
      status: 'open'
    },
    {
      title: 'Missing Background Check Renewals',
      description: '3 staff members require background check renewal documentation.',
      deadline: 'Feb 1, 2026',
      priority: 'High',
      status: 'open'
    },
    {
      title: 'Student Health Records Update',
      description: '47 student health records need annual review and parent signature.',
      deadline: 'Feb 10, 2026',
      priority: 'Medium',
      status: 'open'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Compliance & Audit Center
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Inspection readiness • Regulatory compliance tracking
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">All Checklists</span>
                <span className="sm:hidden">Download</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white text-cyan-600 hover:bg-white/90 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-lg">
                <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Generate Report</span>
                <span className="sm:hidden">Report</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Status Dashboard with Traffic Lights */}
      <div>
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
            Audit Status Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-time compliance tracking with traffic light indicators
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {auditStatuses.map((audit, idx) => (
            <AuditStatusCard key={idx} {...audit} />
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Compliance Checklists - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-sm sm:text-base md:text-lg">Compliance Checklists</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Track and download inspection requirements</p>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Download All
                  <span className="text-[8px] sm:text-[9px] opacity-80">(get in app)</span>
                </span>
              </button>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 md:p-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {['all', 'PEI', 'SSG', 'EduTrust', 'Safety'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {checklists
                .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
                .map((item, idx) => (
                  <ChecklistItem key={idx} {...item} />
                ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Document Upload */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
                <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                <span className="text-sm sm:text-base">Document Upload</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Upload regulatory documents</p>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6">
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-blue-400 transition cursor-pointer group">
                <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 group-hover:text-blue-500 mb-3 transition" />
                <p className="text-xs sm:text-sm font-bold text-slate-700 mb-1">
                  Drag files here or click to upload
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500">
                  PDF, DOCX, XLSX (Max 25MB)
                </p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-md">
                  Select Files
                  <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">(get in app)</span>
                </button>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-slate-600 mb-2">Recent Uploads:</p>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-slate-700 flex-1">teacher_cert_2026.pdf</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                  <FileText className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-slate-700 flex-1">enrollment_data_q1.xlsx</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-cyan-100">
            <h3 className="font-bold text-sm sm:text-base text-cyan-900 mb-3 sm:mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-cyan-800">Total Checklists</span>
                <span className="text-base sm:text-lg font-bold text-cyan-900">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-cyan-800">Completed</span>
                <span className="text-base sm:text-lg font-bold text-green-600">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-cyan-800">Pending</span>
                <span className="text-base sm:text-lg font-bold text-yellow-600">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-cyan-800">Overdue</span>
                <span className="text-base sm:text-lg font-bold text-red-600">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Compliance Issues */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <span className="text-sm sm:text-base md:text-lg">Open Compliance Issues</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {openIssues.filter(i => i.priority === 'Critical').length} critical items requiring immediate attention
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
              {openIssues.length} Issues
            </span>
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          {openIssues.map((issue, idx) => (
            <ComplianceIssueCard key={idx} {...issue} />
          ))}
        </div>
      </div>


    </div>
  );
};

export default ComplianceCenter;
