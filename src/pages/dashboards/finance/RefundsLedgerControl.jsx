import React, { useState } from 'react';
import { 
  RefreshCw, FileText, Check, X, Download, Eye,
  Plus, Clock, CheckCircle, XCircle, Filter, Calendar,
  User, DollarSign, AlertCircle, TrendingUp, Activity
} from 'lucide-react';

/**
 * Screen 5: Refunds, Adjustments & Ledger Control
 * Purpose: Maintain accuracy of fee corrections, refunds, and transfers
 * Features:
 * - Initiate refund requests with approval workflow (Admin → Finance Head)
 * - Adjustment logs (credit/debit notes)
 * - Linked to student ledger for audit traceability
 * - View monthly reconciliation reports
 * Integration: Finance Engine + Audit Log API
 * Outcome: Fully transparent transaction correction process
 */

import Pagination from '../../../components/common/Pagination';

const RefundsLedgerControl = () => {
  const [selectedTab, setSelectedTab] = useState('pending'); // pending, approved, rejected
  const [selectedMonth, setSelectedMonth] = useState('january');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Reset page on tab change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  // Static data - ready for API integration
  const stats = [
    { label: 'Pending Requests', value: '15', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '+3 today' },
    { label: 'Approved', value: '87', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: 'This month' },
    { label: 'Total Refunded', value: '₹2,34,500', icon: RefreshCw, gradient: 'from-blue-400 to-cyan-500', change: 'This month' },
    { label: 'Adjustments', value: '23', icon: Activity, gradient: 'from-purple-400 to-pink-500', change: 'Credit/Debit' },
  ];

  // Refund requests with approval workflow
  const refundRequests = [
    {
      id: 'RF-2024-001',
      studentName: 'Rahul Sharma',
      studentId: 'STU-2024-1234',
      grade: 'Grade 10',
      reason: 'Withdrawal',
      amount: 42000,
      requestDate: '2024-01-18',
      requestedBy: 'Admin Office',
      status: 'Pending',
      approvalStage: 'Finance Head',
      linkedTransaction: 'TXN-2024-001245',
      description: 'Student withdrew from school mid-term',
      refundMode: 'Bank Transfer',
      accountDetails: '***1234',
    },
    {
      id: 'RF-2024-002',
      studentName: 'Priya Singh',
      studentId: 'STU-2024-2345',
      grade: 'Grade 11',
      reason: 'Scholarship Applied Late',
      amount: 15000,
      requestDate: '2024-01-19',
      requestedBy: 'Academic Coordinator',
      status: 'Pending',
      approvalStage: 'Admin',
      linkedTransaction: 'TXN-2024-001234',
      description: 'Merit scholarship approved after fee payment',
      refundMode: 'Credit to Next Term',
      accountDetails: null,
    },
    {
      id: 'RF-2024-003',
      studentName: 'Amit Patel',
      studentId: 'STU-2024-3456',
      grade: 'Grade 9',
      reason: 'Double Payment',
      amount: 35000,
      requestDate: '2024-01-17',
      requestedBy: 'Finance Admin',
      status: 'Approved',
      approvalStage: 'Completed',
      approvedBy: 'Finance Head',
      approvedDate: '2024-01-19',
      linkedTransaction: 'TXN-2024-001223',
      description: 'Accidental double payment via online gateway',
      refundMode: 'Bank Transfer',
      accountDetails: '***5678',
    },
    {
      id: 'RF-2024-004',
      studentName: 'Sneha Reddy',
      studentId: 'STU-2024-4567',
      grade: 'Grade 12',
      reason: 'Fee Adjustment',
      amount: 8500,
      requestDate: '2024-01-16',
      requestedBy: 'Admin Office',
      status: 'Rejected',
      approvalStage: 'Rejected',
      rejectedBy: 'Finance Head',
      rejectedDate: '2024-01-18',
      rejectionReason: 'Insufficient documentation provided',
      linkedTransaction: 'TXN-2024-001212',
      description: 'Request for sibling discount application',
      refundMode: null,
      accountDetails: null,
    },
  ];

  // Adjustment logs (credit/debit notes)
  const adjustmentLogs = [
    {
      id: 'ADJ-2024-001',
      type: 'Credit Note',
      studentName: 'Arjun Mehta',
      studentId: 'STU-2024-5678',
      amount: 12000,
      date: '2024-01-19',
      reason: 'Excess payment adjustment',
      processedBy: 'Finance Admin',
      linkedLedger: 'LED-5678',
      status: 'Posted',
    },
    {
      id: 'ADJ-2024-002',
      type: 'Debit Note',
      studentName: 'Kavita Kumar',
      studentId: 'STU-2024-6789',
      amount: 5000,
      date: '2024-01-18',
      reason: 'Late fee penalty',
      processedBy: 'Finance Admin',
      linkedLedger: 'LED-6789',
      status: 'Posted',
    },
    {
      id: 'ADJ-2024-003',
      type: 'Credit Note',
      studentName: 'Ravi Prasad',
      studentId: 'STU-2024-7890',
      amount: 18500,
      date: '2024-01-17',
      reason: 'Sports scholarship retroactive',
      processedBy: 'Academic Head',
      linkedLedger: 'LED-7890',
      status: 'Posted',
    },
  ];

  // Monthly reconciliation summary
  const reconciliationData = {
    month: 'January 2024',
    totalRefunds: 234500,
    totalAdjustments: 45600,
    creditNotes: 35600,
    debitNotes: 10000,
    pendingApprovals: 57000,
    completedTransactions: 87,
    discrepancies: 0,
    reconciliationStatus: 'Balanced',
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeColor = (type) => {
    return type === 'Credit Note' 
      ? 'bg-green-100 text-green-700 border-green-200'
      : 'bg-orange-100 text-orange-700 border-orange-200';
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

  const filteredRequests = refundRequests.filter(req => {
    switch (selectedTab) {
      case 'pending': return req.status === 'Pending';
      case 'approved': return req.status === 'Approved';
      case 'rejected': return req.status === 'Rejected';
      default: return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Refunds, Adjustments & Ledger Control
              </h1>
              <p className="text-gray-600">Maintain accuracy of fee corrections, refunds, and transfers.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>New Refund</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Reconciliation Report</span>
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

        {/* Monthly Reconciliation Summary */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Monthly Reconciliation</h2>
                <p className="text-sm text-gray-600">{reconciliationData.month}</p>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${reconciliationData.reconciliationStatus === 'Balanced' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              <CheckCircle className="w-4 h-4 inline mr-1" />
              {reconciliationData.reconciliationStatus}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <p className="text-xs text-gray-600 mb-2">Total Refunds</p>
              <p className="text-2xl font-bold text-blue-700">{formatCurrency(reconciliationData.totalRefunds)}</p>
              <p className="text-xs text-gray-500 mt-1">{reconciliationData.completedTransactions} transactions</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <p className="text-xs text-gray-600 mb-2">Credit Notes</p>
              <p className="text-2xl font-bold text-green-700">{formatCurrency(reconciliationData.creditNotes)}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100">
              <p className="text-xs text-gray-600 mb-2">Debit Notes</p>
              <p className="text-2xl font-bold text-orange-700">{formatCurrency(reconciliationData.debitNotes)}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <p className="text-xs text-gray-600 mb-2">Pending Approvals</p>
              <p className="text-2xl font-bold text-purple-700">{formatCurrency(reconciliationData.pendingApprovals)}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'pending' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Pending ({refundRequests.filter(r => r.status === 'Pending').length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('approved')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'approved' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Approved ({refundRequests.filter(r => r.status === 'Approved').length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('rejected')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'rejected' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>Rejected ({refundRequests.filter(r => r.status === 'Rejected').length})</span>
            </div>
          </button>
        </div>

        {/* Refund Requests with Approval Workflow */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Refund Requests</h2>
              <p className="text-sm text-gray-600">Approval workflow: Admin → Finance Head</p>
            </div>
          </div>

          <div className="space-y-4">
            {filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((request) => (
              <div key={request.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold font-mono">
                        {request.id}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(request.status)}`}>
                        {request.status === 'Pending' && <Clock className="w-3 h-3 inline mr-1" />}
                        {request.status === 'Approved' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {request.status === 'Rejected' && <XCircle className="w-3 h-3 inline mr-1" />}
                        {request.status}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {request.approvalStage}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{request.studentName}</h3>
                    <p className="text-sm text-gray-600 mb-3">{request.studentId} • {request.grade}</p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700">Reason: <span className="font-semibold">{request.reason}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">Requested: {formatDate(request.requestDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">By: {request.requestedBy}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-cyan-500" />
                        <span className="text-gray-700">Txn: {request.linkedTransaction}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-3">
                      <p className="text-sm text-gray-700">{request.description}</p>
                      {request.refundMode && (
                        <p className="text-xs text-gray-600 mt-2">
                          Refund Mode: <span className="font-semibold">{request.refundMode}</span>
                          {request.accountDetails && ` • Account: ${request.accountDetails}`}
                        </p>
                      )}
                    </div>

                    {request.rejectionReason && (
                      <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <p className="text-sm text-red-700">
                          <strong>Rejection Reason:</strong> {request.rejectionReason}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Rejected by {request.rejectedBy} on {formatDate(request.rejectedDate)}
                        </p>
                      </div>
                    )}

                    {request.approvedBy && (
                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-sm text-green-700">
                          Approved by {request.approvedBy} on {formatDate(request.approvedDate)}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-64 space-y-3">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 text-center">
                      <p className="text-xs text-gray-600 mb-1">Refund Amount</p>
                      <p className="text-3xl font-bold text-green-700">{formatCurrency(request.amount)}</p>
                    </div>

                    {request.status === 'Pending' && (
                      <div className="flex flex-col gap-2">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            <span>Approve</span>
                          </div>
                          <div className="text-[10px] opacity-70">get in app</div>
                        </button>
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4" />
                            <span>Reject</span>
                          </div>
                          <div className="text-[10px] opacity-70">get in app</div>
                        </button>
                      </div>
                    )}

                    <button className="w-full px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Ledger</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredRequests.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredRequests.length}
          />
        </div>

        {/* Adjustment Logs (Credit/Debit Notes) */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Adjustment Logs</h2>
                <p className="text-sm text-gray-600">Credit & Debit notes with audit traceability</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>New Adjustment</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">ID</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Type</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Student</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Amount</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Reason</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Date</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Status</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adjustmentLogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <span className="text-sm font-mono text-blue-600">{log.id}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getTypeColor(log.type)}`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-bold text-gray-800">{log.studentName}</p>
                        <p className="text-xs text-gray-600">{log.studentId}</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`text-lg font-bold ${log.type === 'Credit Note' ? 'text-green-600' : 'text-orange-600'}`}>
                        {log.type === 'Credit Note' ? '+' : '-'}{formatCurrency(log.amount)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{log.reason}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm text-gray-700">{formatDate(log.date)}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {log.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-blue-500" />
                        </button>
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                          <FileText className="w-4 h-4 text-green-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(adjustmentLogs.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={adjustmentLogs.length}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default RefundsLedgerControl;