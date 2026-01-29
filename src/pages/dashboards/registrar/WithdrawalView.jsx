import React, { useState } from 'react';
import {
  LogOut, FileCheck, Download, Upload, Eye, CheckCircle, Clock,
  XCircle, AlertTriangle, User, Calendar, BookOpen, DollarSign,
  GraduationCap, Shield, FileText, Archive, Search, Filter,
  ChevronDown, Award, Mail, Phone, Home, IdCard, Briefcase,
  CheckSquare, Activity, PenTool
} from 'lucide-react';

// Static Data - Will be replaced with API calls later
const WITHDRAWAL_DATA = {
  stats: [
    { label: 'Pending Exits', value: '3', change: '-2 this week', icon: LogOut, gradient: 'from-cyan-500 to-blue-500' },
    { label: 'In Clearance', value: '5', change: '+1 today', icon: Activity, gradient: 'from-blue-500 to-purple-500' },
    { label: 'TC Generated', value: '15', change: '+3 this month', icon: FileCheck, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Archived Records', value: '142', change: 'Total', icon: Archive, gradient: 'from-pink-500 to-rose-500' },
  ],
  withdrawalRequests: [
    {
      id: 'W-2026-001',
      studentId: 'S-2024-145',
      name: 'Eleanor Woo Si Ting',
      grade: 'Grade 09',
      class: '09-B',
      enrollmentDate: '2024-08-15',
      withdrawalDate: '2026-01-25',
      reason: 'Relocation',
      guardianName: 'Mr. Woo Chen Kai',
      guardianPhone: '+65 9123 4567',
      guardianEmail: 'woochen@email.com',
      clearance: {
        library: { status: 'cleared', clearedBy: 'Librarian', date: '2026-01-18' },
        finance: { status: 'pending', clearedBy: null, date: null },
        academic: { status: 'pending', clearedBy: null, date: null },
        principal: { status: 'pending', clearedBy: null, date: null }
      },
      status: 'in-progress',
      initiatedDate: '2026-01-15',
      tcGenerated: false
    },
    {
      id: 'W-2026-002',
      studentId: 'S-2024-089',
      name: 'Lucas Chen Wei Hong',
      grade: 'Grade 11',
      class: '11-C',
      enrollmentDate: '2023-07-10',
      withdrawalDate: '2026-01-30',
      reason: 'Transfer to International School',
      guardianName: 'Mrs. Chen Mei Ling',
      guardianPhone: '+65 8765 4321',
      guardianEmail: 'chenmeiling@email.com',
      clearance: {
        library: { status: 'cleared', clearedBy: 'Librarian', date: '2026-01-16' },
        finance: { status: 'cleared', clearedBy: 'Finance Admin', date: '2026-01-17' },
        academic: { status: 'cleared', clearedBy: 'Academic Coordinator', date: '2026-01-18' },
        principal: { status: 'approved', clearedBy: 'Principal', date: '2026-01-19' }
      },
      status: 'ready-tc',
      initiatedDate: '2026-01-14',
      tcGenerated: false
    },
    {
      id: 'W-2026-003',
      studentId: 'S-2023-234',
      name: 'Sophia Tan Li Xuan',
      grade: 'Grade 07',
      class: '07-A',
      enrollmentDate: '2023-08-20',
      withdrawalDate: '2026-02-05',
      reason: 'Family Migration',
      guardianName: 'Dr. Tan Wei Chen',
      guardianPhone: '+65 9234 5678',
      guardianEmail: 'tanweichen@email.com',
      clearance: {
        library: { status: 'pending', clearedBy: null, date: null },
        finance: { status: 'pending', clearedBy: null, date: null },
        academic: { status: 'pending', clearedBy: null, date: null },
        principal: { status: 'pending', clearedBy: null, date: null }
      },
      status: 'initiated',
      initiatedDate: '2026-01-20',
      tcGenerated: false
    },
    {
      id: 'W-2025-145',
      studentId: 'S-2023-112',
      name: 'Mohammed Al-Rashid',
      grade: 'Grade 10',
      class: '10-D',
      enrollmentDate: '2023-08-15',
      withdrawalDate: '2025-12-20',
      reason: 'Completion of Studies',
      guardianName: 'Mr. Ahmed Al-Rashid',
      guardianPhone: '+65 8123 9876',
      guardianEmail: 'ahmed.alrashid@email.com',
      clearance: {
        library: { status: 'cleared', clearedBy: 'Librarian', date: '2025-12-10' },
        finance: { status: 'cleared', clearedBy: 'Finance Admin', date: '2025-12-12' },
        academic: { status: 'cleared', clearedBy: 'Academic Coordinator', date: '2025-12-15' },
        principal: { status: 'approved', clearedBy: 'Principal', date: '2025-12-18' }
      },
      status: 'completed',
      initiatedDate: '2025-12-05',
      tcGenerated: true,
      tcGeneratedDate: '2025-12-20',
      archived: true
    },
  ]
};

const WithdrawalView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState('active'); // 'active' or 'archived'

  // Filter requests based on search, status, and view mode
  const filteredRequests = WITHDRAWAL_DATA.withdrawalRequests.filter(req => {
    const matchesSearch = req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          req.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || req.status === selectedStatus;
    const matchesViewMode = viewMode === 'active' ? !req.archived : req.archived;
    
    return matchesSearch && matchesStatus && matchesViewMode;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'cleared':
      case 'approved':
      case 'completed':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', icon: CheckCircle };
      case 'pending':
      case 'initiated':
        return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', icon: Clock };
      case 'in-progress':
      case 'ready-tc':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', icon: Activity };
      case 'rejected':
        return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', icon: XCircle };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', icon: FileText };
    }
  };

  const getClearanceSteps = () => [
    { key: 'library', label: 'Library', icon: BookOpen, color: 'cyan' },
    { key: 'finance', label: 'Finance', icon: DollarSign, color: 'blue' },
    { key: 'academic', label: 'Academic', icon: GraduationCap, color: 'purple' },
    { key: 'principal', label: 'Principal', icon: Shield, color: 'pink' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
              Transfer Certificate & Withdrawal Management
            </h1>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Manage student exit processes seamlessly with automated clearance workflow
            </p>
          </div>
          
          {/* Quick Stats Summary */}
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
            <Activity className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <p className="text-xs text-slate-500 font-semibold">Active Exits</p>
              <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {WITHDRAWAL_DATA.withdrawalRequests.filter(r => !r.archived).length}
              </p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {WITHDRAWAL_DATA.stats.map((stat, index) => {
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
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-2">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Mode Toggle */}
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('active')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === 'active' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
              >
                <Activity className="w-4 h-4" />
                Active Requests
              </button>
              <button 
                onClick={() => setViewMode('archived')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === 'archived' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
              >
                <Archive className="w-4 h-4" />
                Archived
              </button>
            </div>

            {/* Action Button */}
            <button className="relative group/new flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all hover:scale-105">
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">New Withdrawal Request</span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/new:opacity-100 transition-opacity pointer-events-none z-10">
                get in app
              </span>
            </button>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Header with Search & Filters */}
          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">
                  {viewMode === 'active' ? 'Active Withdrawal Requests' : 'Archived Records'}
                </h2>
                <p className="text-sm text-slate-600">
                  Showing {filteredRequests.length} of {WITHDRAWAL_DATA.withdrawalRequests.filter(r => viewMode === 'active' ? !r.archived : r.archived).length} requests
                </p>
              </div>
              
              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 sm:min-w-[280px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                
                {/* Filter Toggle Button */}
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${showFilters ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'}`}
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden sm:inline">Filters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Expandable Filter Options */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-200">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Status</label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Statuses</option>
                    <option value="initiated">Initiated</option>
                    <option value="in-progress">In Progress</option>
                    <option value="ready-tc">Ready for TC</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Requests List */}
          <div className="divide-y divide-slate-100">
            {filteredRequests.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="flex flex-col items-center justify-center text-slate-400">
                  <LogOut className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-lg font-semibold">No withdrawal requests found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              </div>
            ) : (
              filteredRequests.map((request, index) => {
                const isExpanded = selectedStudent === request.id;
                const statusColors = getStatusColor(request.status);
                const StatusIcon = statusColors.icon;

                return (
                  <div key={index} className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors">
                    {/* Request Row */}
                    <div className="p-4 lg:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Student Info */}
                        <div className="flex items-center gap-4 flex-1">
                          {/* Avatar */}
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                            {request.name.charAt(0)}
                          </div>
                          
                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                              <h3 className="font-bold text-slate-800 text-base lg:text-lg">{request.name}</h3>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold`}>
                                <StatusIcon className="w-3.5 h-3.5" />
                                {request.status.replace('-', ' ').toUpperCase()}
                              </span>
                              {request.tcGenerated && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">
                                  <FileCheck className="w-3 h-3" />
                                  TC Generated
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 flex-wrap text-sm text-slate-600">
                              <span className="flex items-center gap-1.5">
                                <IdCard className="w-4 h-4 text-slate-400" />
                                {request.studentId}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-slate-400" />
                                {request.class}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                Exit: {request.withdrawalDate}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Clearance Progress - Desktop */}
                        <div className="hidden xl:flex items-center gap-2">
                          {getClearanceSteps().map((step, idx) => {
                            const clearanceStatus = request.clearance[step.key].status;
                            const stepColors = getStatusColor(clearanceStatus);
                            return (
                              <div key={idx} className="flex items-center gap-2">
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${stepColors.bg} ${stepColors.text} text-xs font-semibold`}>
                                  <step.icon className="w-3 h-3" />
                                  <span className="hidden 2xl:inline">{step.label}</span>
                                </div>
                                {idx < getClearanceSteps().length - 1 && (
                                  <div className="w-4 h-0.5 bg-slate-200"></div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <button 
                            onClick={() => setSelectedStudent(isExpanded ? null : request.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all text-sm font-semibold"
                          >
                            <Eye className="w-4 h-4" />
                            {isExpanded ? 'Hide' : 'View'} Details
                          </button>
                          
                          {request.status === 'ready-tc' && !request.tcGenerated && (
                            <button className="relative group/tc flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all text-sm font-semibold">
                              <FileCheck className="w-4 h-4" />
                              Generate TC
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/tc:opacity-100 transition-opacity pointer-events-none z-10">
                                get in app
                              </span>
                            </button>
                          )}
                          
                          {request.tcGenerated && (
                            <button className="relative group/download flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all text-sm font-semibold">
                              <Download className="w-4 h-4" />
                              Download TC
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/download:opacity-100 transition-opacity pointer-events-none z-10">
                                get in app
                              </span>
                            </button>
                          )}
                          
                          {request.status === 'completed' && !request.archived && (
                            <button className="relative group/archive p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110" title="Archive">
                              <Archive className="w-4 h-4" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/archive:opacity-100 transition-opacity pointer-events-none z-10">
                                get in app
                              </span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-300">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Student & Guardian Information */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-600" />
                                Student & Guardian Details
                              </h4>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold mb-1">Request ID</p>
                                    <p className="text-sm text-slate-700 font-bold font-mono">{request.id}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold mb-1">Reason</p>
                                    <p className="text-sm text-slate-700 font-bold">{request.reason}</p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold mb-1">Enrollment Date</p>
                                    <p className="text-sm text-slate-700 font-bold">{request.enrollmentDate}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold mb-1">Withdrawal Date</p>
                                    <p className="text-sm text-slate-700 font-bold">{request.withdrawalDate}</p>
                                  </div>
                                </div>
                                <div className="pt-3 border-t border-slate-200">
                                  <p className="text-xs text-slate-500 font-semibold mb-3">Guardian Contact</p>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                      <User className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-700 font-semibold">{request.guardianName}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <Phone className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-700">{request.guardianPhone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <Mail className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-700">{request.guardianEmail}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Clearance Workflow Status */}
                            <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-2xl p-6 border border-slate-200">
                              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <CheckSquare className="w-5 h-5 text-pink-600" />
                                Clearance Workflow
                              </h4>
                              <div className="space-y-3">
                                {getClearanceSteps().map((step, idx) => {
                                  const clearance = request.clearance[step.key];
                                  const stepColors = getStatusColor(clearance.status);
                                  const StepIcon = step.icon;
                                  const StepStatusIcon = stepColors.icon;

                                  return (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                                      <div className={`p-2 rounded-lg bg-${step.color}-100`}>
                                        <StepIcon className={`w-5 h-5 text-${step.color}-600`} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                          <h5 className="font-bold text-slate-800 text-sm">{step.label}</h5>
                                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${stepColors.bg} ${stepColors.text} text-xs font-bold`}>
                                            <StepStatusIcon className="w-3 h-3" />
                                            {clearance.status}
                                          </span>
                                        </div>
                                        {clearance.clearedBy && (
                                          <div className="text-xs text-slate-500">
                                            <span className="font-semibold">Cleared by:</span> {clearance.clearedBy}
                                            <span className="mx-1">•</span>
                                            {clearance.date}
                                          </div>
                                        )}
                                        {!clearance.clearedBy && clearance.status === 'pending' && (
                                          <button className="relative group/clear mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700">
                                            Mark as Cleared
                                            <span className="absolute -top-8 left-0 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/clear:opacity-100 transition-opacity pointer-events-none z-10">
                                              get in app
                                            </span>
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* TC Generation Card */}
                          {request.status === 'ready-tc' || request.tcGenerated && (
                            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-purple-200">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                    <FileCheck className="w-6 h-6 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                                      Transfer Certificate
                                      {request.tcGenerated && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-bold">
                                          <CheckCircle className="w-3 h-3" />
                                          Generated
                                        </span>
                                      )}
                                    </h4>
                                    {request.tcGenerated ? (
                                      <div className="text-sm text-slate-600 space-y-1">
                                        <p>Generated on: <span className="font-bold">{request.tcGeneratedDate}</span></p>
                                        <p className="flex items-center gap-1">
                                          <PenTool className="w-3 h-3" />
                                          Digital signature applied
                                        </p>
                                      </div>
                                    ) : (
                                      <p className="text-sm text-slate-600">
                                        All clearances approved. Ready to generate TC with auto-filled student details and digital signature.
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  {!request.tcGenerated && (
                                    <button className="relative group/gentc flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                                      <FileCheck className="w-4 h-4" />
                                      Generate TC
                                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/gentc:opacity-100 transition-opacity pointer-events-none z-10">
                                        get in app
                                      </span>
                                    </button>
                                  )}
                                  {request.tcGenerated && (
                                    <>
                                      <button className="relative group/dl flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/dl:opacity-100 transition-opacity pointer-events-none z-10">
                                          get in app
                                        </span>
                                      </button>
                                      <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                                        <Eye className="w-4 h-4 text-slate-600" />
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WithdrawalView;
