import React, { useState } from 'react';
import {
  Users, FolderOpen, Database, Plus, FileText, Download, History, 
  AlertTriangle, Upload, Search, Eye, Edit, Trash2, Tag,
  Calendar, User, Phone, Mail, Home, FileCheck, Shield,
  Clock, CheckCircle, XCircle, Filter, ChevronDown, Award,
  BookOpen, IdCard, FileSpreadsheet
} from 'lucide-react';

// Static Data - Will be replaced with API calls later
const RECORDS_DATA = {
  stats: [
    { label: 'Total Students', value: '1,240', change: '+45', icon: Users, gradient: 'from-cyan-500 to-blue-500' },
    { label: 'Active Records', value: '1,206', change: '97%', icon: FolderOpen, gradient: 'from-blue-500 to-purple-500' },
    { label: 'Missing Docs', value: '34', change: '-8', icon: AlertTriangle, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Updated Today', value: '18', change: '+18', icon: FileCheck, gradient: 'from-pink-500 to-rose-500' },
  ],
  students: [
    {
      id: 'S-2024-001',
      name: 'Aaliyah Tan Wei Ming',
      class: '10-A',
      enrollmentDate: '2024-08-15',
      guardian: {
        name: 'Mr. Tan Wei Chen',
        phone: '+65 9123 4567',
        email: 'tanweichen@email.com',
        relation: 'Father'
      },
      documents: [
        { name: 'Birth Certificate', status: 'verified', uploadDate: '2024-08-10', uploadedBy: 'Admin' },
        { name: 'Transfer Certificate', status: 'verified', uploadDate: '2024-08-10', uploadedBy: 'Admin' },
        { name: 'Report Card (Grade 9)', status: 'verified', uploadDate: '2024-08-12', uploadedBy: 'Registrar' },
        { name: 'Medical Records', status: 'pending', uploadDate: '2024-08-14', uploadedBy: 'Registrar' },
      ],
      lastUpdated: '2026-01-15 14:30',
      lastUpdatedBy: 'Admin',
      status: 'complete'
    },
    {
      id: 'S-2024-002',
      name: 'Ben Lim Kah Seng',
      class: '09-B',
      enrollmentDate: '2024-08-20',
      guardian: {
        name: 'Mrs. Lim Mei Ling',
        phone: '+65 8765 4321',
        email: 'limmeiling@email.com',
        relation: 'Mother'
      },
      documents: [
        { name: 'Birth Certificate', status: 'verified', uploadDate: '2024-08-18', uploadedBy: 'Registrar' },
        { name: 'Transfer Certificate', status: 'pending', uploadDate: '2024-08-19', uploadedBy: 'Registrar' },
        { name: 'Report Card (Grade 8)', status: 'verified', uploadDate: '2024-08-19', uploadedBy: 'Admin' },
      ],
      lastUpdated: '2026-01-14 10:15',
      lastUpdatedBy: 'Registrar',
      status: 'incomplete'
    },
    {
      id: 'S-2024-003',
      name: 'Chloe Wong Si Ying',
      class: '11-C',
      enrollmentDate: '2024-07-10',
      guardian: {
        name: 'Dr. Wong Kai Hong',
        phone: '+65 9234 5678',
        email: 'wongkaihong@email.com',
        relation: 'Father'
      },
      documents: [
        { name: 'Birth Certificate', status: 'verified', uploadDate: '2024-07-05', uploadedBy: 'Admin' },
        { name: 'Transfer Certificate', status: 'verified', uploadDate: '2024-07-05', uploadedBy: 'Admin' },
        { name: 'Report Card (Grade 10)', status: 'verified', uploadDate: '2024-07-08', uploadedBy: 'Registrar' },
        { name: 'Medical Records', status: 'verified', uploadDate: '2024-07-08', uploadedBy: 'Admin' },
        { name: 'Passport Copy', status: 'verified', uploadDate: '2024-07-09', uploadedBy: 'Registrar' },
      ],
      lastUpdated: '2026-01-18 16:45',
      lastUpdatedBy: 'Admin',
      status: 'complete'
    },
    {
      id: 'S-2024-004',
      name: 'David Kumar Singh',
      class: '08-D',
      enrollmentDate: '2024-09-01',
      guardian: {
        name: 'Mr. Rajesh Kumar',
        phone: '+65 8123 9876',
        email: 'rajeshkumar@email.com',
        relation: 'Father'
      },
      documents: [
        { name: 'Birth Certificate', status: 'verified', uploadDate: '2024-08-28', uploadedBy: 'Registrar' },
        { name: 'Transfer Certificate', status: 'missing', uploadDate: null, uploadedBy: null },
        { name: 'Report Card (Grade 7)', status: 'pending', uploadDate: '2024-08-30', uploadedBy: 'Registrar' },
      ],
      lastUpdated: '2026-01-12 09:20',
      lastUpdatedBy: 'Registrar',
      status: 'incomplete'
    },
  ]
};

const RecordsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState('active'); // 'active' or 'archived'

  // Filter students based on search and filters
  const filteredStudents = RECORDS_DATA.students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesClass && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'complete': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', icon: CheckCircle };
      case 'incomplete': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', icon: AlertTriangle };
      case 'missing': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', icon: XCircle };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', icon: FileText };
    }
  };

  const getDocumentStatusColor = (status) => {
    switch(status) {
      case 'verified': return { bg: 'bg-green-50', text: 'text-green-600', icon: CheckCircle };
      case 'pending': return { bg: 'bg-yellow-50', text: 'text-yellow-600', icon: Clock };
      case 'missing': return { bg: 'bg-red-50', text: 'text-red-600', icon: XCircle };
      default: return { bg: 'bg-gray-50', text: 'text-gray-600', icon: FileText };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
              Student Records & Document Repository
            </h1>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Centralized student record and document management system
            </p>
          </div>
          
          {/* Quick Stats Summary */}
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
            <FolderOpen className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <p className="text-xs text-slate-500 font-semibold">Record Completion</p>
              <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">97.3%</p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {RECORDS_DATA.stats.map((stat, index) => {
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
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('+') || stat.change.includes('%') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-500 font-semibold">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Mode Toggle & Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('active')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === 'active' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
              >
                <FolderOpen className="w-4 h-4" />
                Active Records
              </button>
              <button 
                onClick={() => setViewMode('archived')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${viewMode === 'archived' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-800'}`}
              >
                <Database className="w-4 h-4" />
                Archived
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="relative group/export flex items-center gap-2 px-4 py-2.5 bg-purple-50 text-purple-600 rounded-xl font-semibold text-sm hover:bg-purple-100 transition-all hover:shadow-md">
                <FileSpreadsheet className="w-4 h-4" />
                <span className="hidden md:inline">Export All</span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/export:opacity-100 transition-opacity pointer-events-none">
                  get in app
                </span>
              </button>
              <button className="relative group/add flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all hover:scale-105">
                <Plus className="w-4 h-4" />
                <span className="hidden md:inline">Add Student</span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/add:opacity-100 transition-opacity pointer-events-none">
                  get in app
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Header with Search & Filters */}
          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">Student Records</h2>
                <p className="text-sm text-slate-600">Showing {filteredStudents.length} of {RECORDS_DATA.students.length} students</p>
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
              <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in slide-in-from-top-2 fade-in duration-200">
                {/* Class Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Class</label>
                  <select 
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Classes</option>
                    <option value="08-D">Class 08-D</option>
                    <option value="09-B">Class 09-B</option>
                    <option value="10-A">Class 10-A</option>
                    <option value="11-C">Class 11-C</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Record Status</label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Statuses</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Students List */}
          <div className="divide-y divide-slate-100">
            {filteredStudents.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="flex flex-col items-center justify-center text-slate-400">
                  <FolderOpen className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-lg font-semibold">No students found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              </div>
            ) : (
              filteredStudents.map((student, index) => {
                const isExpanded = selectedStudent === student.id;
                const statusColors = getStatusColor(student.status);
                const StatusIcon = statusColors.icon;

                return (
                  <div key={index} className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors">
                    {/* Student Row */}
                    <div className="p-4 lg:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Student Info */}
                        <div className="flex items-center gap-4 flex-1">
                          {/* Avatar */}
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                            {student.name.charAt(0)}
                          </div>
                          
                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                              <h3 className="font-bold text-slate-800 text-base lg:text-lg">{student.name}</h3>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold`}>
                                <StatusIcon className="w-3.5 h-3.5" />
                                {student.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap text-sm text-slate-600">
                              <span className="flex items-center gap-1.5">
                                <IdCard className="w-4 h-4 text-slate-400" />
                                {student.id}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-slate-400" />
                                {student.class}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                Enrolled: {student.enrollmentDate}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <button 
                            onClick={() => setSelectedStudent(isExpanded ? null : student.id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all text-sm font-semibold"
                          >
                            <Eye className="w-4 h-4" />
                            {isExpanded ? 'Hide' : 'View'} Details
                          </button>
                          
                          <button className="relative group/upload p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all hover:scale-110" title="Upload Document">
                            <Upload className="w-4 h-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/upload:opacity-100 transition-opacity pointer-events-none">
                              get in app
                            </span>
                          </button>
                          
                          <button className="relative group/export p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all hover:scale-110" title="Export PDF">
                            <Download className="w-4 h-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/export:opacity-100 transition-opacity pointer-events-none">
                              get in app
                            </span>
                          </button>
                          
                          <button className="relative group/edit p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110" title="Edit Record">
                            <Edit className="w-4 h-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
                              get in app
                            </span>
                          </button>
                          
                          <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all hover:scale-110" title="History">
                            <History className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-300">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Guardian Information */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-600" />
                                Guardian Information
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <User className="w-4 h-4 text-slate-400 mt-1" />
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold">Name</p>
                                    <p className="text-sm text-slate-700 font-bold">{student.guardian.name}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Shield className="w-4 h-4 text-slate-400 mt-1" />
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold">Relation</p>
                                    <p className="text-sm text-slate-700 font-bold">{student.guardian.relation}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Phone className="w-4 h-4 text-slate-400 mt-1" />
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold">Phone</p>
                                    <p className="text-sm text-slate-700 font-bold">{student.guardian.phone}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Mail className="w-4 h-4 text-slate-400 mt-1" />
                                  <div>
                                    <p className="text-xs text-slate-500 font-semibold">Email</p>
                                    <p className="text-sm text-slate-700 font-bold">{student.guardian.email}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Documents */}
                            <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-2xl p-6 border border-slate-200">
                              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-pink-600" />
                                Documents ({student.documents.length})
                              </h4>
                              <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                                {student.documents.map((doc, docIndex) => {
                                  const docColors = getDocumentStatusColor(doc.status);
                                  const DocIcon = docColors.icon;
                                  return (
                                    <div key={docIndex} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all group">
                                      <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className={`p-2 rounded-lg ${docColors.bg}`}>
                                          <FileText className={`w-4 h-4 ${docColors.text}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-bold text-slate-700 truncate">{doc.name}</p>
                                          <div className="flex items-center gap-2 text-xs text-slate-500">
                                            {doc.uploadDate && (
                                              <>
                                                <span>{doc.uploadDate}</span>
                                                <span>•</span>
                                                <span>by {doc.uploadedBy}</span>
                                              </>
                                            )}
                                            {!doc.uploadDate && <span className="text-red-600 font-semibold">Not uploaded</span>}
                                          </div>
                                        </div>
                                      </div>
                                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${docColors.bg} ${docColors.text} text-xs font-bold shrink-0`}>
                                        <DocIcon className="w-3 h-3" />
                                        {doc.status}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Version Control Info */}
                          <div className="mt-4 bg-slate-100 rounded-xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-slate-500" />
                              <div>
                                <p className="text-xs text-slate-500 font-semibold">Last Updated</p>
                                <p className="text-sm text-slate-700 font-bold">{student.lastUpdated} by {student.lastUpdatedBy}</p>
                              </div>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-slate-600 hover:bg-slate-200 transition-all text-sm font-semibold">
                              <History className="w-4 h-4" />
                              View History
                            </button>
                          </div>
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

export default RecordsView;
