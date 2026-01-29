import React, { useState } from 'react';
import { 
  BarChart3, Download, FileText, Calendar, Mail,
  TrendingUp, DollarSign, CreditCard, Filter, Eye,
  Settings, Clock, CheckCircle, PieChart, Activity
} from 'lucide-react';

/**
 * Screen 6: Financial Reports & Analytics
 * Purpose: Generate on-demand and scheduled finance reports
 * Reports Available:
 * - Collection Summary by Term/Month
 * - Fee Dues Report
 * - Payment Gateway Settlement Report
 * - Expense Tracker (future integration)
 * Export Formats: PDF, Excel, CSV
 * Automation: Auto-email of reports to Principal every Friday
 * Integration: Reporting Engine + Analytics API
 */

import Pagination from '../../../components/common/Pagination';

const FinancialReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('collection');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Static data - ready for API integration
  const stats = [
    { label: 'Reports Generated', value: '245', icon: FileText, gradient: 'from-cyan-400 to-blue-500', change: 'This month' },
    { label: 'Auto-Emails Sent', value: '48', icon: Mail, gradient: 'from-green-400 to-emerald-500', change: 'Last 30 days' },
    { label: 'Export Downloads', value: '156', icon: Download, gradient: 'from-purple-400 to-pink-500', change: 'This month' },
    { label: 'Scheduled Reports', value: '12', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: 'Active' },
  ];

  // Collection Summary Data (Monthly)
  const monthlyCollection = [
    { month: 'Jan', collected: 12.5, target: 14.0, percentage: 89.3 },
    { month: 'Feb', collected: 13.2, target: 14.5, percentage: 91.0 },
    { month: 'Mar', collected: 14.8, target: 15.0, percentage: 98.7 },
    { month: 'Apr', collected: 15.6, target: 16.0, percentage: 97.5 },
    { month: 'May', collected: 14.2, target: 15.5, percentage: 91.6 },
    { month: 'Jun', collected: 13.8, target: 15.0, percentage: 92.0 },
    { month: 'Jul', collected: 12.4, target: 14.0, percentage: 88.6 },
    { month: 'Aug', collected: 13.9, target: 14.5, percentage: 95.9 },
  ];

  // Term-wise Collection
  const termCollection = [
    { term: 'Term 1 (Apr-Jun)', collected: 45.6, target: 53.8, percentage: 84.8 },
    { term: 'Term 2 (Jul-Sep)', collected: 38.4, target: 50.9, percentage: 75.4 },
    { term: 'Term 3 (Oct-Dec)', collected: 28.7, target: 44.5, percentage: 64.5 },
  ];

  // Available Reports
  const availableReports = [
    {
      id: 'collection-summary',
      name: 'Collection Summary',
      description: 'Total fee collection by term and month',
      icon: BarChart3,
      color: 'from-cyan-400 to-blue-500',
      lastGenerated: '2024-01-20 09:30 AM',
      frequency: 'Daily',
      recipients: ['Principal', 'Finance Head'],
    },
    {
      id: 'fee-dues',
      name: 'Fee Dues Report',
      description: 'Outstanding balances by grade and student',
      icon: DollarSign,
      color: 'from-red-400 to-pink-500',
      lastGenerated: '2024-01-20 08:00 AM',
      frequency: 'Weekly',
      recipients: ['Finance Head', 'Class Teachers'],
    },
    {
      id: 'gateway-settlement',
      name: 'Payment Gateway Settlement',
      description: 'Online payment reconciliation (Razorpay/Stripe)',
      icon: CreditCard,
      color: 'from-green-400 to-emerald-500',
      lastGenerated: '2024-01-19 06:00 PM',
      frequency: 'Daily',
      recipients: ['Finance Head', 'Accounts Manager'],
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      description: 'School expenses and budget tracking (Coming Soon)',
      icon: Activity,
      color: 'from-purple-400 to-pink-500',
      lastGenerated: null,
      frequency: 'Monthly',
      recipients: ['Principal', 'Finance Head'],
      comingSoon: true,
    },
  ];

  // Fee Dues by Grade
  const feeDuesData = [
    { grade: 'Grade 9', totalStudents: 120, paid: 98, due: 22, amount: 145000 },
    { grade: 'Grade 10', totalStudents: 115, paid: 102, due: 13, amount: 189000 },
    { grade: 'Grade 11', totalStudents: 108, paid: 95, due: 13, amount: 212500 },
    { grade: 'Grade 12', totalStudents: 102, paid: 92, due: 10, amount: 198700 },
  ];

  // Gateway Settlement Data
  const gatewayData = [
    { gateway: 'Razorpay', transactions: 687, amount: 2845600, settlement: 2798856, charges: 46744, status: 'Settled' },
    { gateway: 'Stripe', transactions: 245, amount: 1034500, settlement: 1014015, charges: 20485, status: 'Settled' },
    { gateway: 'Paytm', transactions: 89, amount: 378900, settlement: 371343, charges: 7557, status: 'Pending' },
  ];

  // Scheduled Reports
  const scheduledReports = [
    { name: 'Weekly Collection Summary', schedule: 'Every Friday at 5:00 PM', recipients: 'Principal', active: true },
    { name: 'Monthly Fee Dues Report', schedule: '1st of every month at 9:00 AM', recipients: 'Finance Head, Class Teachers', active: true },
    { name: 'Daily Gateway Settlement', schedule: 'Every day at 6:00 PM', recipients: 'Accounts Manager', active: true },
  ];

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const getMaxCollection = () => {
    return Math.max(...monthlyCollection.map(m => m.target));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Financial Reports & Analytics
              </h1>
              <p className="text-gray-600">Generate on-demand and scheduled finance reports.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export All</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span>Automation</span>
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

        {/* Available Reports */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Available Reports</h2>
              <p className="text-sm text-gray-600">Generate and download reports in multiple formats</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {availableReports.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((report) => (
              <div key={report.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${report.color}`}>
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  {report.comingSoon && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{report.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{report.description}</p>

                <div className="space-y-2 mb-4">
                  {report.lastGenerated && (
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>Last generated: {report.lastGenerated}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="w-3 h-3" />
                    <span>Frequency: {report.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Mail className="w-3 h-3" />
                    <span>Recipients: {report.recipients.join(', ')}</span>
                  </div>
                </div>

                {!report.comingSoon && (
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <Download className="w-3 h-3" />
                        <span>Export PDF</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                    <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center justify-center gap-2">
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(availableReports.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={availableReports.length}
          />
        </div>

        {/* Collection Summary Chart */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Collection Summary</h2>
                <p className="text-sm text-gray-600">Monthly collection vs target (in Lakhs ₹)</p>
              </div>
            </div>

            <div className="flex gap-3">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="month">Monthly</option>
                <option value="term">Term-wise</option>
              </select>

              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {selectedPeriod === 'month' ? (
            <div className="space-y-3">
              {monthlyCollection.map((month, index) => {
                const maxValue = getMaxCollection();
                const collectedWidth = (month.collected / maxValue) * 100;
                const targetWidth = (month.target / maxValue) * 100;

                return (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800 w-16">{month.month}</span>
                      <div className="flex-1 px-4">
                        <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-l-full transition-all"
                            style={{ width: `${collectedWidth}%` }}
                          ></div>
                          <div 
                            className="absolute left-0 top-0 h-full border-2 border-blue-400 border-dashed rounded-full transition-all"
                            style={{ width: `${targetWidth}%` }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-700">
                              {month.percentage}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-600 font-bold">{formatCurrency(month.collected * 100000)}</span>
                        <span className="text-gray-400">/ {formatCurrency(month.target * 100000)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {termCollection.map((term, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{term.term}</h3>
                    <span className={`text-2xl font-bold ${term.percentage >= 80 ? 'text-green-600' : term.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {term.percentage}%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Collected</p>
                      <p className="text-xl font-bold text-green-700">{formatCurrency(term.collected * 100000)}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Target</p>
                      <p className="text-xl font-bold text-blue-700">{formatCurrency(term.target * 100000)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Fee Dues Summary */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Fee Dues by Grade</h2>
                  <p className="text-xs text-gray-600">Outstanding balances</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Excel</span>
              </button>
            </div>

            <div className="space-y-3">
              {feeDuesData.map((data, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-800">{data.grade}</span>
                    <span className="text-lg font-bold text-red-600">{formatCurrency(data.amount)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{data.due} students with dues</span>
                    <span className="text-green-600">{data.paid}/{data.totalStudents} paid</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gateway Settlement */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Gateway Settlement</h2>
                  <p className="text-xs text-gray-600">Payment reconciliation</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>CSV</span>
              </button>
            </div>

            <div className="space-y-3">
              {gatewayData.map((gateway, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{gateway.gateway}</h3>
                      <p className="text-xs text-gray-600">{gateway.transactions} transactions</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${gateway.status === 'Settled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {gateway.status === 'Settled' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                      {gateway.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-gray-500">Amount</p>
                      <p className="font-bold text-gray-800">{formatCurrency(gateway.amount)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Settlement</p>
                      <p className="font-bold text-green-600">{formatCurrency(gateway.settlement)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Charges</p>
                      <p className="font-bold text-red-600">{formatCurrency(gateway.charges)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Scheduled Reports</h2>
                <p className="text-sm text-gray-600">Auto-email configuration</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Configure</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="space-y-4">
            {scheduledReports.map((report, index) => (
              <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-800">{report.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${report.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {report.active ? <CheckCircle className="w-3 h-3 inline mr-1" /> : null}
                        {report.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{report.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4 text-purple-500" />
                        <span>{report.recipients}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialReports;