import React, { useState } from 'react';
import { 
  ShieldCheck, Upload, FileText, Download, AlertTriangle,
  CheckCircle, Eye, Award, Clock, Calendar, User,
  File, XCircle, TrendingUp, Activity, Search, Filter
} from 'lucide-react';

/**
 * Screen 7: Audit & Compliance Center
 * Purpose: Provide financial documentation for audits and inspections
 * Features:
 * - Upload and archive supporting files (bank statements, invoices)
 * - Track audit remarks and resolution logs
 * - Generate reconciliation certificate with digital signature
 * - Auto-flag discrepancies > ₹1,000 for review
 * Integration: Compliance Database + File Repository + Signature API
 * Output: Audit-ready financial summary linked to Principal and Admin dashboards
 */

import Pagination from '../../../components/common/Pagination';

const AuditComplianceCenter = () => {
  const [selectedTab, setSelectedTab] = useState('documents'); // documents, remarks, discrepancies
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Reset page on tab change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  // Static data - ready for API integration
  const stats = [
    { label: 'Documents Archived', value: '487', icon: FileText, gradient: 'from-cyan-400 to-blue-500', change: 'This year' },
    { label: 'Audit Remarks', value: '23', icon: AlertTriangle, gradient: 'from-orange-400 to-yellow-500', change: '18 resolved' },
    { label: 'Discrepancies', value: '5', icon: XCircle, gradient: 'from-red-400 to-pink-500', change: 'Flagged' },
    { label: 'Compliance Score', value: '96%', icon: ShieldCheck, gradient: 'from-green-400 to-emerald-500', change: 'Excellent' },
  ];

  // Compliance Status
  const complianceStatus = {
    overallScore: 96,
    lastAudit: '2023-12-15',
    nextAudit: '2024-06-15',
    auditor: 'Ernst & Young India',
    certificateValid: true,
    certificateExpiry: '2024-06-30',
    status: 'Compliant',
  };

  // Document Repository
  const documents = [
    {
      id: 'DOC-2024-001',
      name: 'Bank Reconciliation Statement - January 2024',
      type: 'Bank Statement',
      uploadDate: '2024-01-20',
      uploadedBy: 'Finance Admin',
      size: '2.4 MB',
      format: 'PDF',
      status: 'Verified',
      auditYear: '2024',
    },
    {
      id: 'DOC-2024-002',
      name: 'Fee Collection Invoice Register - Q1',
      type: 'Invoice',
      uploadDate: '2024-01-18',
      uploadedBy: 'Accounts Manager',
      size: '5.8 MB',
      format: 'Excel',
      status: 'Verified',
      auditYear: '2024',
    },
    {
      id: 'DOC-2024-003',
      name: 'Expense Vouchers - December 2023',
      type: 'Voucher',
      uploadDate: '2024-01-15',
      uploadedBy: 'Finance Admin',
      size: '3.2 MB',
      format: 'PDF',
      status: 'Pending Review',
      auditYear: '2024',
    },
    {
      id: 'DOC-2024-004',
      name: 'Tuition Fee Ledger - Annual Summary',
      type: 'Ledger',
      uploadDate: '2024-01-12',
      uploadedBy: 'Finance Head',
      size: '1.9 MB',
      format: 'PDF',
      status: 'Verified',
      auditYear: '2024',
    },
    {
      id: 'DOC-2024-005',
      name: 'Payment Gateway Settlement Report - Razorpay',
      type: 'Settlement',
      uploadDate: '2024-01-10',
      uploadedBy: 'Accounts Manager',
      size: '4.5 MB',
      format: 'CSV',
      status: 'Verified',
      auditYear: '2024',
    },
  ];

  // Audit Remarks & Resolution
  const auditRemarks = [
    {
      id: 'REM-2024-001',
      category: 'Documentation',
      remark: 'Missing supporting vouchers for 3 expense entries',
      severity: 'Medium',
      raisedDate: '2024-01-15',
      raisedBy: 'Internal Auditor',
      assignedTo: 'Finance Admin',
      dueDate: '2024-01-25',
      status: 'Resolved',
      resolution: 'All vouchers uploaded and verified',
      resolvedDate: '2024-01-20',
    },
    {
      id: 'REM-2024-002',
      category: 'Reconciliation',
      remark: 'Bank reconciliation pending for December 2023',
      severity: 'High',
      raisedDate: '2024-01-12',
      raisedBy: 'External Auditor',
      assignedTo: 'Accounts Manager',
      dueDate: '2024-01-22',
      status: 'In Progress',
      resolution: null,
      resolvedDate: null,
    },
    {
      id: 'REM-2024-003',
      category: 'Compliance',
      remark: 'GST filing deadline approaching',
      severity: 'High',
      raisedDate: '2024-01-18',
      raisedBy: 'Compliance Officer',
      assignedTo: 'Finance Head',
      dueDate: '2024-01-31',
      status: 'Pending',
      resolution: null,
      resolvedDate: null,
    },
    {
      id: 'REM-2024-004',
      category: 'Record Keeping',
      remark: 'Outdated signature on invoices',
      severity: 'Low',
      raisedDate: '2024-01-08',
      raisedBy: 'Internal Auditor',
      assignedTo: 'Finance Admin',
      dueDate: '2024-01-30',
      status: 'Resolved',
      resolution: 'Digital signature system implemented',
      resolvedDate: '2024-01-19',
    },
  ];

  // Auto-flagged Discrepancies (> ₹1,000)
  const discrepancies = [
    {
      id: 'DIS-2024-001',
      type: 'Payment Mismatch',
      description: 'Online payment recorded but not reflected in bank statement',
      amount: 42000,
      detectedDate: '2024-01-19',
      studentId: 'STU-2024-1234',
      transactionId: 'TXN-2024-001245',
      status: 'Under Review',
      assignedTo: 'Finance Head',
    },
    {
      id: 'DIS-2024-002',
      type: 'Reconciliation Error',
      description: 'Gateway settlement amount differs from recorded amount',
      amount: 8500,
      detectedDate: '2024-01-18',
      gateway: 'Razorpay',
      transactionId: 'RZP-TXN-78945',
      status: 'Resolved',
      assignedTo: 'Accounts Manager',
      resolution: 'Processing fee not accounted for',
    },
    {
      id: 'DIS-2024-003',
      type: 'Duplicate Entry',
      description: 'Same invoice number found in two different records',
      amount: 15000,
      detectedDate: '2024-01-17',
      invoiceId: 'INV-2024-00123',
      status: 'Under Review',
      assignedTo: 'Finance Admin',
    },
    {
      id: 'DIS-2024-004',
      type: 'Missing Receipt',
      description: 'Payment recorded without receipt generation',
      amount: 35000,
      detectedDate: '2024-01-16',
      studentId: 'STU-2024-5678',
      status: 'Resolved',
      assignedTo: 'Finance Admin',
      resolution: 'Receipt regenerated and emailed',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
      case 'Resolved': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending Review':
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'In Progress':
      case 'Under Review': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Audit & Compliance Center
              </h1>
              <p className="text-gray-600">Provide financial documentation for audits and inspections.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Generate Certificate</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Audit Summary</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-gray-600 bg-gray-50">
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

        {/* Compliance Status Overview */}
        <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Compliance Status</h2>
                  <p className="text-sm text-white/80">Audit readiness overview</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
                <p className="text-sm text-white/80 mb-1">Overall Score</p>
                <p className="text-4xl font-bold">{complianceStatus.overallScore}%</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Last Audit</p>
                <p className="font-bold text-lg">{formatDate(complianceStatus.lastAudit)}</p>
                <p className="text-xs text-white/70 mt-1">{complianceStatus.auditor}</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Next Audit</p>
                <p className="font-bold text-lg">{formatDate(complianceStatus.nextAudit)}</p>
                <p className="text-xs text-white/70 mt-1">Scheduled in 5 months</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Certificate Status</p>
                <p className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {complianceStatus.status}
                </p>
                <p className="text-xs text-white/70 mt-1">Valid until {formatDate(complianceStatus.certificateExpiry)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedTab('documents')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'documents' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Documents ({documents.length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('remarks')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'remarks' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Audit Remarks ({auditRemarks.length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('discrepancies')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'discrepancies' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>Discrepancies ({discrepancies.length})</span>
            </div>
          </button>
        </div>

        {/* Document Repository */}
        {selectedTab === 'documents' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                  <File className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Document Repository</h2>
                  <p className="text-sm text-gray-600">Archive and manage supporting files</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Document</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>

            <div className="space-y-4">
              {documents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((doc) => (
                <div key={doc.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{doc.name}</h3>
                          <p className="text-xs text-gray-600">{doc.id} • {doc.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(doc.status)}`}>
                          {doc.status === 'Verified' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                          {doc.status === 'Pending Review' && <Clock className="w-3 h-3 inline mr-1" />}
                          {doc.status}
                        </span>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-purple-500" />
                          <span>{formatDate(doc.uploadDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-cyan-500" />
                          <span>{doc.uploadedBy}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <File className="w-4 h-4 text-orange-500" />
                          <span>{doc.format} • {doc.size}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Activity className="w-4 h-4 text-green-500" />
                          <span>Audit Year: {doc.auditYear}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(documents.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={documents.length}
            />
          </div>
        )}

        {/* Audit Remarks & Resolution */}
        {selectedTab === 'remarks' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Audit Remarks & Resolution</h2>
                <p className="text-sm text-gray-600">Track and resolve audit observations</p>
              </div>
            </div>

            <div className="space-y-4">
              {auditRemarks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((remark) => (
                <div key={remark.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold font-mono">
                          {remark.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getSeverityColor(remark.severity)}`}>
                          {remark.severity} Priority
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(remark.status)}`}>
                          {remark.status === 'Resolved' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                          {remark.status === 'In Progress' && <Clock className="w-3 h-3 inline mr-1" />}
                          {remark.status}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                          {remark.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{remark.remark}</h3>
                      
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-purple-500" />
                          <span>Raised by: {remark.raisedBy}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-cyan-500" />
                          <span>Assigned to: {remark.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span>Due: {formatDate(remark.dueDate)}</span>
                        </div>
                      </div>

                      {remark.status === 'Resolved' && remark.resolution && (
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                          <p className="text-sm font-semibold text-green-800 mb-1">Resolution:</p>
                          <p className="text-sm text-green-700">{remark.resolution}</p>
                          <p className="text-xs text-gray-600 mt-2">Resolved on {formatDate(remark.resolvedDate)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(auditRemarks.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={auditRemarks.length}
            />
          </div>
        )}

        {/* Auto-flagged Discrepancies */}
        {selectedTab === 'discrepancies' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Flagged Discrepancies</h2>
                  <p className="text-sm text-gray-600">Auto-flagged amounts &gt; ₹1,000 for review</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {discrepancies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((disc) => (
                <div key={disc.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-red-100 hover:shadow-lg transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold font-mono">
                          {disc.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(disc.status)}`}>
                          {disc.status}
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                          {disc.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-3">{disc.description}</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>Detected: {formatDate(disc.detectedDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <User className="w-4 h-4 text-purple-500" />
                          <span>Assigned to: {disc.assignedTo}</span>
                        </div>
                        {disc.studentId && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <FileText className="w-4 h-4 text-cyan-500" />
                            <span>Student: {disc.studentId}</span>
                          </div>
                        )}
                        {disc.transactionId && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Activity className="w-4 h-4 text-green-500" />
                            <span>Txn: {disc.transactionId}</span>
                          </div>
                        )}
                      </div>

                      {disc.status === 'Resolved' && disc.resolution && (
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                          <p className="text-sm font-semibold text-green-800 mb-1">Resolution:</p>
                          <p className="text-sm text-green-700">{disc.resolution}</p>
                        </div>
                      )}
                    </div>

                    <div className="lg:w-48">
                      <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200 text-center mb-3">
                        <p className="text-xs text-gray-600 mb-1">Discrepancy Amount</p>
                        <p className="text-2xl font-bold text-red-600">{formatCurrency(disc.amount)}</p>
                      </div>
                      {disc.status === 'Under Review' && (
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Mark Resolved</span>
                          </div>
                          <div className="text-[10px] opacity-70">get in app</div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(discrepancies.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={discrepancies.length}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default AuditComplianceCenter;