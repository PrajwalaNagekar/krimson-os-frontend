import React, { useState } from 'react';
import {
  CheckCircle, Clock, AlertCircle, FileCheck, Users, TrendingUp,
  Download, Upload, FileText, Calendar, Target, Shield, AlertTriangle,
  BarChart3, PieChart, Activity, Award, FileSpreadsheet, FileClock,
  ClipboardCheck, CheckSquare, XCircle, Eye, Play, RefreshCw
} from 'lucide-react';

// Static Data - Will be replaced with API calls later
const COMPLIANCE_DATA = {
  stats: [
    { label: 'PEI Status', value: 'Compliant', change: '100%', icon: Shield, gradient: 'from-cyan-500 to-blue-500', status: 'green' },
    { label: 'SSG Status', value: 'Compliant', change: '100%', icon: Award, gradient: 'from-blue-500 to-purple-500', status: 'green' },
    { label: 'Reports Due', value: '2', change: 'This Month', icon: Clock, gradient: 'from-purple-500 to-pink-500', status: 'orange' },
    { label: 'Reports Submitted', value: '8', change: '+3 this week', icon: CheckCircle, gradient: 'from-pink-500 to-rose-500', status: 'green' },
  ],
  monthlyChecklist: [
    {
      id: 1,
      category: 'Attendance',
      item: 'Monthly Attendance Report',
      due: '2026-01-31',
      status: 'pending',
      priority: 'high',
      description: 'Submit student attendance records for January 2026'
    },
    {
      id: 2,
      category: 'Enrollment',
      item: 'Student Enrollment Count',
      due: '2026-01-31',
      status: 'completed',
      priority: 'high',
      description: 'Verify and submit total student count by grade level',
      completedDate: '2026-01-20'
    },
    {
      id: 3,
      category: 'Financial',
      item: 'Fee Protection Scheme Review',
      due: '2026-02-15',
      status: 'pending',
      priority: 'medium',
      description: 'Review FPS compliance and submit quarterly report'
    },
    {
      id: 4,
      category: 'Enrollment',
      item: 'Enrollment Trends Analysis',
      due: '2026-01-31',
      status: 'in-progress',
      priority: 'medium',
      description: 'Analyze enrollment trends and forecast for next quarter'
    },
    {
      id: 5,
      category: 'Statutory',
      item: 'Foreign Student Visa Verification',
      due: '2026-01-28',
      status: 'completed',
      priority: 'high',
      description: 'Verify all foreign students have valid visas',
      completedDate: '2026-01-18'
    },
    {
      id: 6,
      category: 'Quality',
      item: 'EduTrust Compliance Checklist',
      due: '2026-02-10',
      status: 'pending',
      priority: 'medium',
      description: 'Complete quarterly EduTrust compliance review'
    },
  ],
  reports: [
    {
      id: 1,
      name: 'Attendance Audit Report',
      type: 'Attendance',
      format: 'PDF',
      formCode: 'Form 3A',
      lastGenerated: '2026-01-15',
      status: 'submitted',
      icon: FileCheck
    },
    {
      id: 2,
      name: 'Enrollment Figures Report',
      type: 'Enrollment',
      format: 'CSV',
      formCode: 'PEI Format',
      lastGenerated: '2026-01-20',
      status: 'submitted',
      icon: Users
    },
    {
      id: 3,
      name: 'Student Demographics Report',
      type: 'Demographics',
      format: 'Excel',
      formCode: 'SSG-D01',
      lastGenerated: '2026-01-10',
      status: 'submitted',
      icon: PieChart
    },
    {
      id: 4,
      name: 'Withdrawal & Transfer Report',
      type: 'Statutory',
      format: 'PDF',
      formCode: 'Form 7B',
      lastGenerated: '2026-01-12',
      status: 'pending',
      icon: Activity
    },
  ],
  statutorySubmissions: [
    {
      id: 1,
      name: 'IPA Student List - January 2026',
      uploadDate: '2026-01-15',
      uploadedBy: 'Admin',
      status: 'verified',
      fileSize: '2.4 MB'
    },
    {
      id: 2,
      name: 'CPE Annual Return 2025',
      uploadDate: '2026-01-10',
      uploadedBy: 'Registrar',
      status: 'verified',
      fileSize: '5.1 MB'
    },
    {
      id: 3,
      name: 'Fee Protection Scheme Certificate',
      uploadDate: '2026-01-05',
      uploadedBy: 'Finance',
      status: 'pending-review',
      fileSize: '1.8 MB'
    },
  ],
  complianceMetrics: {
    attendanceCompliance: 98.5,
    enrollmentAccuracy: 100,
    documentCompleteness: 96.2,
    reportTimeliness: 87.5
  }
};

const ComplianceView = () => {
  const [selectedTab, setSelectedTab] = useState('checklist'); // checklist, reports, submissions
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', icon: CheckCircle };
      case 'in-progress':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', icon: Activity };
      case 'pending':
        return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', icon: Clock };
      case 'overdue':
        return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', icon: AlertTriangle };
      case 'submitted':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', icon: CheckCircle };
      case 'verified':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', icon: CheckCircle };
      case 'pending-review':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', icon: Clock };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', icon: FileText };
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high':
        return <span className="px-2 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold">HIGH</span>;
      case 'medium':
        return <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold">MED</span>;
      case 'low':
        return <span className="px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold">LOW</span>;
      default:
        return null;
    }
  };

  const filteredChecklist = COMPLIANCE_DATA.monthlyChecklist.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
              Compliance & Reporting Center
            </h1>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Ensure PEI and SSG compliance with accurate student data
            </p>
          </div>
          
          {/* Overall Compliance Indicator */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-6 py-4 shadow-lg">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold opacity-90">Overall Status</p>
              <p className="text-xl font-bold">COMPLIANT</p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {COMPLIANCE_DATA.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="relative group bg-white rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden"
              >
                {/* Gradient Background Blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`w-3 h-3 rounded-full ${stat.status === 'green' ? 'bg-green-500' : stat.status === 'orange' ? 'bg-orange-500' : 'bg-red-500'} animate-pulse`}></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-2">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Metrics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Compliance Alert Card */}
          <div className="relative bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl lg:rounded-3xl p-8 text-white shadow-xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
                  Monthly Status
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Compliance Alert</h3>
              <p className="text-white/90 text-sm mb-6">
                2 reports require action for January 2026 audit cycle
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completion Progress</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="bg-white h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Metrics */}
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              Compliance Metrics
            </h3>
            <div className="space-y-4">
              {Object.entries(COMPLIANCE_DATA.complianceMetrics).map(([key, value], index) => {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                const isGood = value >= 95;
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">{label}</span>
                      <span className={`text-sm font-bold ${isGood ? 'text-green-600' : 'text-orange-600'}`}>
                        {value}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${isGood ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-orange-500 to-amber-500'}`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-4">
              <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm overflow-x-auto">
                <button
                  onClick={() => setSelectedTab('checklist')}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === 'checklist' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
                >
                  <span className="flex items-center gap-2">
                    <ClipboardCheck className="w-4 h-4" />
                    Monthly Checklist
                  </span>
                </button>
                <button
                  onClick={() => setSelectedTab('reports')}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === 'reports' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Auto-Generate Reports
                  </span>
                </button>
                <button
                  onClick={() => setSelectedTab('submissions')}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === 'submissions' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
                >
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Statutory Submissions
                  </span>
                </button>
              </div>

              {/* Filter for Checklist */}
              {selectedTab === 'checklist' && (
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                >
                  <option value="all">All Items</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Monthly Checklist Tab */}
            {selectedTab === 'checklist' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">
                    January 2026 Compliance Checklist
                  </h3>
                  <span className="text-sm text-slate-500">
                    {filteredChecklist.filter(i => i.status === 'completed').length} of {filteredChecklist.length} completed
                  </span>
                </div>

                {filteredChecklist.map((item) => {
                  const statusColors = getStatusColor(item.status);
                  const StatusIcon = statusColors.icon;
                  const isOverdue = new Date(item.due) < new Date() && item.status !== 'completed';

                  return (
                    <div
                      key={item.id}
                      className={`group p-4 lg:p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                        item.status === 'completed' 
                          ? 'bg-green-50/50 border-green-200' 
                          : isOverdue
                          ? 'bg-red-50/50 border-red-200'
                          : 'bg-white border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Checkbox */}
                        <div className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          item.status === 'completed'
                            ? 'bg-green-500 border-green-500'
                            : 'border-slate-300 group-hover:border-blue-400'
                        }`}>
                          {item.status === 'completed' && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h4 className={`font-bold text-base ${item.status === 'completed' ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                                  {item.item}
                                </h4>
                                {getPriorityBadge(item.priority)}
                                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${statusColors.bg} ${statusColors.text}`}>
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                              <div className="flex items-center gap-4 flex-wrap text-sm">
                                <span className={`flex items-center gap-1.5 ${isOverdue ? 'text-red-600 font-bold' : 'text-slate-500'}`}>
                                  <Calendar className="w-4 h-4" />
                                  Due: {item.due}
                                  {isOverdue && <span className="ml-1 text-xs bg-red-100 px-2 py-0.5 rounded">OVERDUE</span>}
                                </span>
                                {item.completedDate && (
                                  <span className="flex items-center gap-1.5 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    Completed: {item.completedDate}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Status Badge */}
                            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs lg:text-sm font-bold whitespace-nowrap`}>
                              <StatusIcon className="w-4 h-4" />
                              {item.status.replace('-', ' ').toUpperCase()}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          {item.status !== 'completed' && (
                            <div className="flex gap-2 mt-4">
                              <button className="relative group/mark flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all text-sm font-semibold">
                                <CheckSquare className="w-4 h-4" />
                                Mark Complete
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/mark:opacity-100 transition-opacity pointer-events-none">
                                  get in app
                                </span>
                              </button>
                              <button className="relative group/update flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold">
                                <Activity className="w-4 h-4" />
                                Update Status
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/update:opacity-100 transition-opacity pointer-events-none">
                                  get in app
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Auto-Generate Reports Tab */}
            {selectedTab === 'reports' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">
                    Compliance-Ready Reports
                  </h3>
                  <button className="relative group/refresh flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                    <RefreshCw className="w-4 h-4" />
                    Refresh All
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/refresh:opacity-100 transition-opacity pointer-events-none">
                      get in app
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COMPLIANCE_DATA.reports.map((report) => {
                    const Icon = report.icon;
                    const statusColors = getStatusColor(report.status);
                    const StatusIcon = statusColors.icon;

                    return (
                      <div
                        key={report.id}
                        className="group p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-800 mb-1">{report.name}</h4>
                            <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                              <span className="px-2 py-1 bg-slate-100 rounded">{report.format}</span>
                              <span className="px-2 py-1 bg-slate-100 rounded">{report.formCode}</span>
                              <span className="px-2 py-1 bg-slate-100 rounded">{report.type}</span>
                            </div>
                          </div>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} text-xs font-bold`}>
                            <StatusIcon className="w-3 h-3" />
                            {report.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                          <FileClock className="w-4 h-4" />
                          Last generated: {report.lastGenerated}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button className="relative group/generate flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                            <Play className="w-4 h-4" />
                            Generate
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/generate:opacity-100 transition-opacity pointer-events-none z-10">
                              get in app
                            </span>
                          </button>
                          <button className="relative group/download p-2.5 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-all">
                            <Download className="w-4 h-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/download:opacity-100 transition-opacity pointer-events-none z-10">
                              get in app
                            </span>
                          </button>
                          <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Statutory Submissions Tab */}
            {selectedTab === 'submissions' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-lg font-bold text-slate-800">
                    Statutory Document Submissions
                  </h3>
                  <button className="relative group/upload flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                    <Upload className="w-4 h-4" />
                    Upload Document
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/upload:opacity-100 transition-opacity pointer-events-none z-10">
                      get in app
                    </span>
                  </button>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all group cursor-pointer">
                  <Upload className="w-12 h-12 text-slate-400 group-hover:text-blue-500 mx-auto mb-4 transition-colors" />
                  <h4 className="font-bold text-slate-700 mb-2">Upload Scanned Statutory Documents</h4>
                  <p className="text-sm text-slate-500 mb-4">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-slate-400">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                </div>

                {/* Recent Submissions */}
                <div className="space-y-3 mt-6">
                  <h4 className="font-bold text-slate-700 mb-4">Recent Submissions</h4>
                  {COMPLIANCE_DATA.statutorySubmissions.map((submission) => {
                    const statusColors = getStatusColor(submission.status);
                    const StatusIcon = statusColors.icon;

                    return (
                      <div
                        key={submission.id}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-slate-800 mb-1 truncate">{submission.name}</h5>
                            <div className="flex items-center gap-3 flex-wrap text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {submission.uploadDate}
                              </span>
                              <span>•</span>
                              <span>by {submission.uploadedBy}</span>
                              <span>•</span>
                              <span>{submission.fileSize}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold whitespace-nowrap`}>
                            <StatusIcon className="w-3.5 h-3.5" />
                            {submission.status.replace('-', ' ')}
                          </span>
                          <div className="flex gap-1">
                            <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="relative group/dl p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all">
                              <Download className="w-4 h-4" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/dl:opacity-100 transition-opacity pointer-events-none z-10">
                                get in app
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComplianceView;
