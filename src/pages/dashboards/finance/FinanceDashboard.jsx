import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, AlertCircle, RefreshCw, Plus,
  FileText, Download, Users, Calendar, CheckCircle,
  XCircle, Clock, Filter, Eye, CreditCard, Activity
} from 'lucide-react';

/**
 * Screen 1: Finance Dashboard Overview
 * Purpose: Provide daily and cumulative overview of school's financial activity
 * Widgets:
 * - Total Fees Collected (Month/Term/Year)
 * - Outstanding Balance (by Grade and Student)
 * - Refunds/Adjustments Summary
 * - Recent Transactions Feed (Last 10)
 * - Quick Links: Generate Invoice, Record Payment, Download Report
 * Integration: Finance API + Payment Gateway + Student Database
 * Design: Clean grid layout with colored financial indicators (Green = Paid, Red = Due)
 */

import Pagination from '../../../components/common/Pagination';

const FinanceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month'); // month, term, year
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Static data - ready for API integration
  const feesCollected = {
    month: { amount: '₹12,45,000', count: 487, percentage: 92 },
    term: { amount: '₹45,67,800', count: 1456, percentage: 87 },
    year: { amount: '₹1,23,45,600', count: 3845, percentage: 89 },
  };

  const stats = [
    { 
      label: 'Total Collected', 
      amount: feesCollected[selectedPeriod].amount,
      count: `${feesCollected[selectedPeriod].count} students`,
      icon: DollarSign, 
      gradient: 'from-green-400 to-emerald-500', 
      change: '+12%',
      indicator: 'paid'
    },
    { 
      label: 'Outstanding Balance', 
      amount: '₹8,45,200',
      count: '128 students',
      icon: AlertCircle, 
      gradient: 'from-red-400 to-pink-500', 
      change: '-5%',
      indicator: 'due'
    },
    { 
      label: 'Refunds Processed', 
      amount: '₹2,34,500',
      count: '23 this month',
      icon: RefreshCw, 
      gradient: 'from-blue-400 to-cyan-500', 
      change: '+3',
      indicator: 'neutral'
    },
    { 
      label: 'Pending Approvals', 
      amount: '₹1,12,300',
      count: '15 requests',
      icon: Clock, 
      gradient: 'from-orange-400 to-yellow-500', 
      change: '+7',
      indicator: 'pending'
    },
  ];

  // Outstanding by Grade
  const outstandingByGrade = [
    { grade: 'Grade 9', totalStudents: 120, paid: 98, outstanding: 22, amount: '₹1,45,000', percentage: 81.7 },
    { grade: 'Grade 10', totalStudents: 115, paid: 102, outstanding: 13, amount: '₹1,89,000', percentage: 88.7 },
    { grade: 'Grade 11', totalStudents: 108, paid: 95, outstanding: 13, amount: '₹2,12,500', percentage: 88.0 },
    { grade: 'Grade 12', totalStudents: 102, paid: 92, outstanding: 10, amount: '₹1,98,700', percentage: 90.2 },
  ];

  // Recent Transactions (Last 10)
  const recentTransactions = [
    {
      id: 'TXN-2024-001245',
      studentName: 'Sarah Martinez',
      studentId: 'STU-2024-1045',
      grade: 'Grade 12',
      amount: '₹45,000',
      paymentMode: 'Online',
      date: '2024-01-20',
      time: '10:30 AM',
      status: 'Paid',
      type: 'Tuition Fee',
    },
    {
      id: 'TXN-2024-001244',
      studentName: 'Michael Brown',
      studentId: 'STU-2024-2156',
      grade: 'Grade 11',
      amount: '₹38,500',
      paymentMode: 'Card',
      date: '2024-01-20',
      time: '09:15 AM',
      status: 'Paid',
      type: 'Tuition Fee',
    },
    {
      id: 'TXN-2024-001243',
      studentName: 'Emily Johnson',
      studentId: 'STU-2024-3089',
      grade: 'Grade 10',
      amount: '₹42,000',
      paymentMode: 'UPI',
      date: '2024-01-19',
      time: '04:45 PM',
      status: 'Paid',
      type: 'Term Fee',
    },
    {
      id: 'TXN-2024-001242',
      studentName: 'Lisa Wang',
      studentId: 'STU-2024-4521',
      grade: 'Grade 9',
      amount: '₹35,000',
      paymentMode: 'Cash',
      date: '2024-01-19',
      time: '02:30 PM',
      status: 'Paid',
      type: 'Tuition Fee',
    },
    {
      id: 'TXN-2024-001241',
      studentName: 'David Lee',
      studentId: 'STU-2024-5632',
      grade: 'Grade 12',
      amount: '₹48,500',
      paymentMode: 'Online',
      date: '2024-01-19',
      time: '11:20 AM',
      status: 'Pending',
      type: 'Annual Fee',
    },
    {
      id: 'TXN-2024-001240',
      studentName: 'Priya Sharma',
      studentId: 'STU-2024-6789',
      grade: 'Grade 11',
      amount: '₹40,000',
      paymentMode: 'Card',
      date: '2024-01-18',
      time: '03:15 PM',
      status: 'Failed',
      type: 'Tuition Fee',
    },
    {
      id: 'TXN-2024-001239',
      studentName: 'Raj Patel',
      studentId: 'STU-2024-7854',
      grade: 'Grade 10',
      amount: '₹39,000',
      paymentMode: 'UPI',
      date: '2024-01-18',
      time: '12:45 PM',
      status: 'Paid',
      type: 'Term Fee',
    },
    {
      id: 'TXN-2024-001238',
      studentName: 'Anita Kumar',
      studentId: 'STU-2024-8965',
      grade: 'Grade 9',
      amount: '₹36,500',
      paymentMode: 'Online',
      date: '2024-01-18',
      time: '10:00 AM',
      status: 'Paid',
      type: 'Tuition Fee',
    },
    {
      id: 'TXN-2024-001237',
      studentName: 'Kevin Zhang',
      studentId: 'STU-2024-9123',
      grade: 'Grade 12',
      amount: '₹47,000',
      paymentMode: 'Card',
      date: '2024-01-17',
      time: '04:20 PM',
      status: 'Paid',
      type: 'Annual Fee',
    },
    {
      id: 'TXN-2024-001236',
      studentName: 'Sofia Rodriguez',
      studentId: 'STU-2024-1234',
      grade: 'Grade 11',
      amount: '₹41,500',
      paymentMode: 'Cash',
      date: '2024-01-17',
      time: '02:10 PM',
      status: 'Paid',
      type: 'Term Fee',
    },
  ];

  // Refunds & Adjustments
  const refundsData = [
    { type: 'Fee Refund', count: 12, amount: '₹1,85,000', status: 'Completed' },
    { type: 'Excess Payment', count: 8, amount: '₹34,500', status: 'Completed' },
    { type: 'Scholarship Adj.', count: 3, amount: '₹15,000', status: 'Pending' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Failed': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
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
                Finance Dashboard Overview
              </h1>
              <p className="text-gray-600">Daily and cumulative overview of school's financial activity.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Period Selector */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedPeriod === 'month' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            This Month
          </button>
          <button
            onClick={() => setSelectedPeriod('term')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedPeriod === 'term' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            This Term
          </button>
          <button
            onClick={() => setSelectedPeriod('year')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedPeriod === 'year' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            This Year
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') || (stat.change.startsWith('-') && stat.indicator === 'due') ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-50'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.amount}
              </p>
              <p className="text-sm text-gray-600 font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.count}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* OutstandingBalance by Grade */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Outstanding Balance by Grade</h2>
                <p className="text-sm text-gray-600">Fee collection status across grades</p>
              </div>
            </div>

            <div className="space-y-4">
              {outstandingByGrade.map((data, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{data.grade}</h3>
                      <p className="text-sm text-gray-600">{data.totalStudents} students total</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Outstanding</p>
                      <p className="text-xl font-bold text-red-600">{data.amount}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Paid</p>
                      <p className="text-lg font-bold text-green-600">{data.paid}</p>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Due</p>
                      <p className="text-lg font-bold text-red-600">{data.outstanding}</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Collection %</p>
                      <p className="text-lg font-bold text-blue-600">{data.percentage}%</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refunds & Adjustments + Quick Links */}
          <div className="space-y-6">
            {/* Refunds Summary */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Refunds Summary</h2>
                  <p className="text-xs text-gray-600">This month</p>
                </div>
              </div>

              <div className="space-y-3">
                {refundsData.map((refund, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{refund.type}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${refund.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {refund.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{refund.count} requests</span>
                      <span className="text-lg font-bold text-blue-600">{refund.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10">Quick Actions</h3>
              <div className="space-y-3 relative z-10">
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span>Generate Invoice</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
                
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Record Payment</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
                
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions Feed */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Recent Transactions</h2>
                <p className="text-sm text-gray-600">Last 10 payment activities</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Transaction ID</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Student Details</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Type</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Amount</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Mode</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Date & Time</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <span className="text-xs font-mono text-gray-600">{transaction.id}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-bold text-gray-800">{transaction.studentName}</p>
                        <p className="text-xs text-gray-600">{transaction.studentId} • {transaction.grade}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {transaction.type}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-lg font-bold text-gray-800">{transaction.amount}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <CreditCard className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{transaction.paymentMode}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-700">{formatDate(transaction.date)}</span>
                        <span className="text-xs text-gray-500">{transaction.time}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(transaction.status)}`}>
                        {transaction.status === 'Paid' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {transaction.status === 'Failed' && <XCircle className="w-3 h-3 inline mr-1" />}
                        {transaction.status === 'Pending' && <Clock className="w-3 h-3 inline mr-1" />}
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(recentTransactions.length / itemsPerPage)}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={recentTransactions.length}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinanceDashboard;
