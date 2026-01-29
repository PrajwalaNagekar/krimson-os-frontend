import React, { useState } from 'react';
import { 
  FileText, Download, Mail, Plus, Filter, Search,
  CreditCard, DollarSign, CheckCircle, Clock, XCircle,
  Eye, Calendar, User, Receipt, Activity, RefreshCw
} from 'lucide-react';

/**
 * Screen 3: Invoice & Payment Management
 * Purpose: Manage all invoices and payments from creation to reconciliation
 * Functions:
 * - Auto-generate invoices upon admission confirmation
 * - Record manual payments and bank transfers
 * - Integrate with online payment gateways (Stripe/Razorpay)
 * - Track payment mode (Cash/Card/Online/Cheque)
 * - Download and email receipts instantly
 * Integration: Payment Gateway API + Student Finance Ledger
 * Design: Table view with filters — Date | Grade | Payment Mode | Status
 */

import Pagination from '../../../components/common/Pagination';

const InvoicePaymentManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterPaymentMode, setFilterPaymentMode] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDateRange, setFilterDateRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Invoices', value: '1,245', icon: FileText, gradient: 'from-cyan-400 to-blue-500', change: '+45 today' },
    { label: 'Paid', value: '1,087', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: '87.3%' },
    { label: 'Pending', value: '128', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '10.3%' },
    { label: 'Failed', value: '30', icon: XCircle, gradient: 'from-red-400 to-pink-500', change: '2.4%' },
  ];

  // Payment modes summary
  const paymentModeStats = [
    { mode: 'Online', count: 687, percentage: 63.2, color: 'from-blue-400 to-cyan-500' },
    { mode: 'Card', count: 245, percentage: 22.5, color: 'from-purple-400 to-pink-500' },
    { mode: 'Cash', count: 98, percentage: 9.0, color: 'from-green-400 to-emerald-500' },
    { mode: 'Cheque', count: 57, percentage: 5.3, color: 'from-orange-400 to-yellow-500' },
  ];

  // Invoice & Payment data
  const invoicePayments = [
    {
      invoiceId: 'INV-2024-001245',
      studentName: 'Sarah Martinez',
      studentId: 'STU-2024-1045',
      grade: 'Grade 12',
      amount: 45000,
      dueDate: '2024-01-25',
      paymentDate: '2024-01-20',
      paymentMode: 'Online',
      gateway: 'Razorpay',
      transactionId: 'RZP-TXN-78945',
      status: 'Paid',
      receiptGenerated: true,
    },
    {
      invoiceId: 'INV-2024-001244',
      studentName: 'Michael Brown',
      studentId: 'STU-2024-2156',
      grade: 'Grade 11',
      amount: 38500,
      dueDate: '2024-01-25',
      paymentDate: '2024-01-19',
      paymentMode: 'Card',
      gateway: 'Stripe',
      transactionId: 'STRP-TXN-56321',
      status: 'Paid',
      receiptGenerated: true,
    },
    {
      invoiceId: 'INV-2024-001243',
      studentName: 'Emily Johnson',
      studentId: 'STU-2024-3089',
      grade: 'Grade 10',
      amount: 42000,
      dueDate: '2024-01-24',
      paymentDate: null,
      paymentMode: null,
      gateway: null,
      transactionId: null,
      status: 'Pending',
      receiptGenerated: false,
    },
    {
      invoiceId: 'INV-2024-001242',
      studentName: 'Lisa Wang',
      studentId: 'STU-2024-4521',
      grade: 'Grade 9',
      amount: 35000,
      dueDate: '2024-01-23',
      paymentDate: '2024-01-18',
      paymentMode: 'Cash',
      gateway: 'Manual',
      transactionId: 'CASH-001242',
      status: 'Paid',
      receiptGenerated: true,
    },
    {
      invoiceId: 'INV-2024-001241',
      studentName: 'David Lee',
      studentId: 'STU-2024-5632',
      grade: 'Grade 12',
      amount: 48500,
      dueDate: '2024-01-22',
      paymentDate: '2024-01-19',
      paymentMode: 'Online',
      gateway: 'Razorpay',
      transactionId: 'RZP-TXN-45678',
      status: 'Failed',
      receiptGenerated: false,
    },
    {
      invoiceId: 'INV-2024-001240',
      studentName: 'Priya Sharma',
      studentId: 'STU-2024-6789',
      grade: 'Grade 11',
      amount: 40000,
      dueDate: '2024-01-26',
      paymentDate: '2024-01-18',
      paymentMode: 'Cheque',
      gateway: 'Manual',
      transactionId: 'CHQ-001240',
      status: 'Paid',
      receiptGenerated: true,
    },
    {
      invoiceId: 'INV-2024-001239',
      studentName: 'Raj Patel',
      studentId: 'STU-2024-7854',
      grade: 'Grade 10',
      amount: 39000,
      dueDate: '2024-01-27',
      paymentDate: null,
      paymentMode: null,
      gateway: null,
      transactionId: null,
      status: 'Pending',
      receiptGenerated: false,
    },
    {
      invoiceId: 'INV-2024-001238',
      studentName: 'Anita Kumar',
      studentId: 'STU-2024-8965',
      grade: 'Grade 9',
      amount: 36500,
      dueDate: '2024-01-28',
      paymentDate: '2024-01-17',
      paymentMode: 'Card',
      gateway: 'Stripe',
      transactionId: 'STRP-TXN-89012',
      status: 'Paid',
      receiptGenerated: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Failed': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPaymentModeIcon = (mode) => {
    switch (mode) {
      case 'Online': return <Activity className="w-4 h-4" />;
      case 'Card': return <CreditCard className="w-4 h-4" />;
      case 'Cash': return <DollarSign className="w-4 h-4" />;
      case 'Cheque': return <Receipt className="w-4 h-4" />;
      default: return null;
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Filter invoices based on selected filters
  const filteredInvoices = invoicePayments.filter(invoice => {
    const matchesGrade = filterGrade === 'all' || invoice.grade === filterGrade;
    const matchesPaymentMode = filterPaymentMode === 'all' || invoice.paymentMode === filterPaymentMode;
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    const matchesSearch = searchQuery === '' || 
      invoice.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesGrade && matchesPaymentMode && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Invoice & Payment Management
              </h1>
              <p className="text-gray-600">Manage all invoices and payments from creation to reconciliation.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Generate Invoice</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Record Payment</span>
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-600 bg-blue-50">
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

        {/* Payment Mode Distribution */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Payment Mode Distribution</h2>
              <p className="text-sm text-gray-600">Breakdown of payment methods</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentModeStats.map((stat, index) => (
              <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    {getPaymentModeIcon(stat.mode)}
                    <span className="text-white font-bold ml-1">{stat.mode}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-800">{stat.count}</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Invoice ID, Student Name..."
                  className="w-full pl-11 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Grade</label>
              <select 
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Grades</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Payment Mode</label>
              <select 
                value={filterPaymentMode}
                onChange={(e) => setFilterPaymentMode(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Modes</option>
                <option value="Online">Online</option>
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Status</label>
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Invoice & Payment Table */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Invoices & Payments</h2>
                <p className="text-sm text-gray-600">Showing {filteredInvoices.length} of {invoicePayments.length} invoices</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Invoice ID</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Student Details</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Amount</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Due Date</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Payment Info</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Status</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((invoice) => (
                  <tr key={invoice.invoiceId} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-mono text-gray-700">{invoice.invoiceId}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-bold text-gray-800">{invoice.studentName}</p>
                        <p className="text-xs text-gray-600">{invoice.studentId} • {invoice.grade}</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-lg font-bold text-gray-800">{formatCurrency(invoice.amount)}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <Calendar className="w-4 h-4 text-orange-500 mb-1" />
                        <span className="text-sm text-gray-700">{formatDate(invoice.dueDate)}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {invoice.paymentDate ? (
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center gap-1">
                            {getPaymentModeIcon(invoice.paymentMode)}
                            <span className="text-sm font-semibold text-gray-700">{invoice.paymentMode}</span>
                          </div>
                          <span className="text-xs text-gray-500">{invoice.gateway}</span>
                          <span className="text-xs text-gray-400 font-mono">{invoice.transactionId}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 inline-flex items-center gap-1 ${getStatusColor(invoice.status)}`}>
                        {invoice.status === 'Paid' && <CheckCircle className="w-3 h-3" />}
                        {invoice.status === 'Pending' && <Clock className="w-3 h-3" />}
                        {invoice.status === 'Failed' && <XCircle className="w-3 h-3" />}
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-4 h-4 text-blue-500" />
                        </button>
                        {invoice.receiptGenerated && (
                          <>
                            <button className="p-2 hover:bg-green-50 rounded-lg transition-colors" title="Download Receipt">
                              <Download className="w-4 h-4 text-green-500" />
                            </button>
                            <button className="p-2 hover:bg-purple-50 rounded-lg transition-colors" title="Email Receipt">
                              <Mail className="w-4 h-4 text-purple-500" />
                            </button>
                          </>
                        )}
                        {invoice.status === 'Failed' && (
                          <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors" title="Retry Payment">
                            <RefreshCw className="w-4 h-4 text-orange-500" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredInvoices.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredInvoices.length}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download All Receipts</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
            
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email Receipts</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
            
            <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvoicePaymentManagement;
