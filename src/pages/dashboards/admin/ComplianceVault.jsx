/**
 * @component ComplianceVault
 * @description Compliance & Documentation Vault - Regulatory document management
 */
import React, { useState } from 'react';
import { 
  Shield, FileText, Upload, Download, Clock, AlertCircle, CheckCircle,
  FolderOpen, Search, Filter, Calendar, User, Edit, Trash2, Eye,
  Archive, RefreshCcw, File, FileCheck, AlertTriangle, TrendingUp,
  Database, Settings, Star, Lock, Unlock, Grid, List, Plus, Copy,
  Award, BookOpen, DollarSign, Users, BarChart3, Package, ChevronLeft, ChevronRight
} from 'lucide-react';

const ComplianceVault = () => {
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Compliance Categories
  const categories = [
    { id: 'pei', name: 'PEI Compliance', icon: <Award size={20} />, color: 'blue', count: 45 },
    { id: 'ssg', name: 'SSG Compliance', icon: <Shield size={20} />, color: 'purple', count: 32 },
    { id: 'moe', name: 'MOE Compliance', icon: <BookOpen size={20} />, color: 'green', count: 28 },
    { id: 'staff', name: 'Staff Certifications', icon: <Users size={20} />, color: 'amber', count: 67 },
    { id: 'financial', name: 'Financial Statements', icon: <DollarSign size={20} />, color: 'cyan', count: 24 },
    { id: 'attendance', name: 'Attendance Reports', icon: <BarChart3 size={20} />, color: 'pink', count: 156 }
  ];

  // Document Repository
  const documents = [
    {
      id: 'DOC001',
      name: 'PEI Annual Compliance Report 2025',
      category: 'pei',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2025-12-15',
      lastModified: '2026-01-10',
      modifiedBy: 'Dr. Sarah Johnson',
      version: '2.1',
      status: 'Current',
      expiryDate: '2026-12-31',
      daysUntilExpiry: 345,
      description: 'Comprehensive annual compliance report for PEI standards',
      tags: ['Annual', 'Mandatory', 'PEI'],
      downloadCount: 45
    },
    {
      id: 'DOC002',
      name: 'SSG Funding Application Q1 2026',
      category: 'ssg',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2026-01-05',
      lastModified: '2026-01-12',
      modifiedBy: 'Michael Chen',
      version: '1.3',
      status: 'Current',
      expiryDate: '2026-03-31',
      daysUntilExpiry: 70,
      description: 'Quarterly funding application for SSG grant',
      tags: ['Quarterly', 'Financial', 'SSG'],
      downloadCount: 23
    },
    {
      id: 'DOC003',
      name: 'MOE Annual School Survey 2025',
      category: 'moe',
      type: 'XLSX',
      size: '850 KB',
      uploadDate: '2025-11-20',
      lastModified: '2025-12-05',
      modifiedBy: 'Emily Rodriguez',
      version: '1.0',
      status: 'Archived',
      expiryDate: '2025-12-31',
      daysUntilExpiry: -20,
      description: 'Completed annual survey submission to Ministry of Education',
      tags: ['Annual', 'Survey', 'MOE'],
      downloadCount: 67
    },
    {
      id: 'DOC004',
      name: 'Teaching Staff Certification Register',
      category: 'staff',
      type: 'XLSX',
      size: '1.2 MB',
      uploadDate: '2026-01-01',
      lastModified: '2026-01-18',
      modifiedBy: 'HR Department',
      version: '3.2',
      status: 'Current',
      expiryDate: null,
      daysUntilExpiry: null,
      description: 'Master register of all teaching staff certifications and qualifications',
      tags: ['Staff', 'Certifications', 'Active'],
      downloadCount: 89
    },
    {
      id: 'DOC005',
      name: 'Mr. David Park - NIE Certificate',
      category: 'staff',
      type: 'PDF',
      size: '450 KB',
      uploadDate: '2023-06-15',
      lastModified: '2023-06-15',
      modifiedBy: 'David Park',
      version: '1.0',
      status: 'Expiring Soon',
      expiryDate: '2026-02-28',
      daysUntilExpiry: 39,
      description: 'National Institute of Education Teaching Certificate',
      tags: ['NIE', 'Certification', 'Teacher'],
      downloadCount: 12
    },
    {
      id: 'DOC006',
      name: 'Q4 2025 Financial Statement',
      category: 'financial',
      type: 'PDF',
      size: '3.2 MB',
      uploadDate: '2025-12-31',
      lastModified: '2026-01-08',
      modifiedBy: 'Finance Manager',
      version: '1.1',
      status: 'Current',
      expiryDate: '2026-03-31',
      daysUntilExpiry: 70,
      description: 'Quarterly financial statement with audit trail',
      tags: ['Financial', 'Quarterly', 'Audited'],
      downloadCount: 34
    },
    {
      id: 'DOC007',
      name: 'December 2025 Student Attendance Report',
      category: 'attendance',
      type: 'PDF',
      size: '680 KB',
      uploadDate: '2026-01-02',
      lastModified: '2026-01-02',
      modifiedBy: 'Admin Office',
      version: '1.0',
      status: 'Current',
      expiryDate: null,
      daysUntilExpiry: null,
      description: 'Monthly consolidated attendance report for all grades',
      tags: ['Attendance', 'Monthly', 'Students'],
      downloadCount: 56
    },
    {
      id: 'DOC008',
      name: 'Dr. Lisa Chen - PhD Certificate',
      category: 'staff',
      type: 'PDF',
      size: '520 KB',
      uploadDate: '2024-08-12',
      lastModified: '2024-08-12',
      modifiedBy: 'Lisa Chen',
      version: '1.0',
      status: 'Expired',
      expiryDate: '2026-01-15',
      daysUntilExpiry: -5,
      description: 'Doctoral degree certification - renewal required',
      tags: ['PhD', 'Certification', 'Expired'],
      downloadCount: 8
    }
  ];

  // Expiring Documents Summary
  const expiringDocs = documents.filter(doc => doc.daysUntilExpiry !== null && doc.daysUntilExpiry > 0 && doc.daysUntilExpiry <= 60);
  const expiredDocs = documents.filter(doc => doc.daysUntilExpiry !== null && doc.daysUntilExpiry < 0);

  // Statistics
  const stats = {
    totalDocuments: documents.length,
    currentDocuments: documents.filter(d => d.status === 'Current').length,
    expiringDocuments: expiringDocs.length,
    expiredDocuments: expiredDocs.length,
    totalStorage: '12.5 GB',
    lastBackup: '2 hours ago'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Current':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Expiring Soon':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Expired':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Archived':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: 'bg-slate-100' };
    
    const colorMap = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'bg-blue-100' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'bg-purple-100' },
      green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'bg-green-100' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'bg-amber-100' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: 'bg-cyan-100' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: 'bg-pink-100' }
    };
    return colorMap[category.color] || colorMap.blue;
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'PDF':
        return <FileText className="text-red-500" size={20} />;
      case 'XLSX':
      case 'XLS':
        return <FileCheck className="text-green-500" size={20} />;
      case 'DOCX':
      case 'DOC':
        return <File className="text-blue-500" size={20} />;
      default:
        return <FileText className="text-slate-500" size={20} />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Regulatory Compliance
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Lock size={12} className="text-green-300" />
                  Secure Vault
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Compliance & Documentation Vault
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Centralized repository for institutional documents, certifications, and regulatory compliance records.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-4 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105 transition-all group text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white/20 text-white rounded-lg group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner"><FolderOpen size={16} /></div>
          </div>
          <p className="text-xl font-bold text-white">{stats.totalDocuments}</p>
          <p className="text-xs text-cyan-100 font-medium uppercase tracking-wide">Total Documents</p>
          <p className="text-[10px] text-cyan-200 mt-1 opacity-80">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><CheckCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.currentDocuments}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Current</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform"><Clock size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.expiringDocuments}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Expiring Soon</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><AlertCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.expiredDocuments}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Expired</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform"><Database size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalStorage}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Storage</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><RefreshCcw size={16} /></div>
          </div>
          <p className="text-sm font-bold text-green-800">{stats.lastBackup}</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Last Backup</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          EXPIRING DOCUMENTS ALERT
          ======================================== */}
      {(expiringDocs.length > 0 || expiredDocs.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expiring Soon */}
          {expiringDocs.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-900">Documents Expiring Soon</h3>
                  <p className="text-sm text-amber-700">{expiringDocs.length} documents expiring within 60 days</p>
                </div>
              </div>

              <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar-hidden">
                {expiringDocs.map((doc) => (
                  <div key={doc.id} className="bg-white p-3 rounded-xl border border-amber-100 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 text-sm">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.category.toUpperCase()}</p>
                      </div>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold border border-amber-200">
                        {doc.daysUntilExpiry} days
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expired */}
          {expiredDocs.length > 0 && (
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-6 border border-red-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-900">Expired Documents - Action Required</h3>
                  <p className="text-sm text-red-700">{expiredDocs.length} documents require renewal</p>
                </div>
              </div>

              <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar-hidden">
                {expiredDocs.map((doc) => (
                  <div key={doc.id} className="bg-white p-3 rounded-xl border border-red-100 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 text-sm">{doc.name}</p>
                        <p className="text-xs text-slate-500">{doc.category.toUpperCase()}</p>
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold border border-red-200">
                        Expired
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================
          COMPLIANCE CATEGORIES
          ======================================== */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Filter className="text-blue-500" size={24} />
          Compliance Categories Filter
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/30'
                : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className={`p-3 rounded-xl transition-colors ${selectedCategory === 'all' ? 'bg-white/10' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                <Package size={24} />
              </div>
              <p className="font-bold text-sm">All Documents</p>
              <p className="text-xs opacity-80">{documents.length} files</p>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
                selectedCategory === category.id
                  ? `bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 text-white border-${category.color}-500 shadow-lg shadow-${category.color}-500/30`
                  : `bg-white text-slate-600 border-slate-200 hover:border-${category.color}-300 hover:shadow-md`
              }`}
            >
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : `bg-${category.color}-50 text-${category.color}-600 group-hover:scale-110`
                }`}>
                  {category.icon}
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm mb-0.5">{category.name}</p>
                  <p className={`text-xs ${selectedCategory === category.id ? 'text-white/80' : 'text-slate-400'}`}>
                    {category.count} files
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================
          TOOLBAR & SEARCH
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Upload size={18} />
              Upload Document
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-green-500 to-emerald-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-green-500/20">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export Vault
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full md:w-64 pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-100 text-blue-600 border border-blue-200'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-100 text-blue-600 border border-blue-200'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          DOCUMENT REPOSITORY
          ======================================== */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Document Repository</h2>
            <p className="text-sm text-slate-500">
              {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} found
            </p>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDocuments.map((doc) => {
              const colors = getCategoryColor(doc.category);
              return (
                <div key={doc.id} className={`p-6 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all group bg-gradient-to-br from-white to-slate-50`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colors.icon} rounded-2xl`}>
                      {getFileIcon(doc.type)}
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">{doc.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <p className="text-slate-500">Type</p>
                      <p className="font-bold text-slate-700">{doc.type}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <p className="text-slate-500">Size</p>
                      <p className="font-bold text-slate-700">{doc.size}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <p className="text-slate-500">Version</p>
                      <p className="font-bold text-slate-700">v{doc.version}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <p className="text-slate-500">Downloads</p>
                      <p className="font-bold text-slate-700">{doc.downloadCount}</p>
                    </div>
                  </div>

                  {/* Version Control Info */}
                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 mb-4">
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <User size={12} className="text-blue-500" />
                      <p className="font-semibold text-slate-700">Last Modified By:</p>
                    </div>
                    <p className="text-xs font-bold text-blue-700">{doc.modifiedBy}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{doc.lastModified}</p>
                  </div>

                  {/* Expiry Warning */}
                  {doc.expiryDate && doc.daysUntilExpiry !== null && (
                    <div className={`p-2 rounded-lg mb-4 text-xs ${
                      doc.daysUntilExpiry < 0
                        ? 'bg-red-100 border border-red-200'
                        : doc.daysUntilExpiry <= 60
                        ? 'bg-amber-100 border border-amber-200'
                        : 'bg-green-100 border border-green-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        <p className="font-semibold">
                          {doc.daysUntilExpiry < 0
                            ? `Expired ${Math.abs(doc.daysUntilExpiry)} days ago`
                            : `Expires in ${doc.daysUntilExpiry} days`}
                        </p>
                      </div>
                      <p className="text-[10px] mt-1">Expiry: {doc.expiryDate}</p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doc.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
                      <Eye size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                    <button className="py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
                      <Download size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                    <button className="py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                      <Edit size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {currentDocuments.map((doc) => {
              const colors = getCategoryColor(doc.category);
              return (
                <div key={doc.id} className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white group">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 ${colors.icon} rounded-lg`}>
                      {getFileIcon(doc.type)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{doc.name}</h3>
                          <p className="text-xs text-slate-500">{doc.description}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-5 gap-4 text-xs">
                        <div>
                          <p className="text-slate-500">Category</p>
                          <p className={`font-bold ${colors.text}`}>{doc.category.toUpperCase()}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Type / Size</p>
                          <p className="font-bold text-slate-700">{doc.type} • {doc.size}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Version</p>
                          <p className="font-bold text-slate-700">v{doc.version}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Modified By</p>
                          <p className="font-bold text-blue-600">{doc.modifiedBy}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Last Modified</p>
                          <p className="font-bold text-slate-700">{doc.lastModified}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all">
                        <Download size={16} />
                      </button>
                      <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-all">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {filteredDocuments.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 border-t border-slate-100 pt-6 gap-4">
            <div className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-700">{indexOfFirstItem + 1}</span> to <span className="font-bold text-slate-700">{Math.min(indexOfLastItem, filteredDocuments.length)}</span> of <span className="font-bold text-slate-700">{filteredDocuments.length}</span> entries
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentPage === 1
                    ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-blue-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ComplianceVault;
