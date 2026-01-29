import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, AlertCircle, Download,
  Filter, Calendar, CreditCard, PieChart, BarChart3, Activity,
  CheckCircle, Clock, Mail, Users, Building, Award
} from 'lucide-react';

/**
 * Screen 4: Financial Health Snapshot
 * Purpose: Track revenue performance and financial stability indicators
 * Key Metrics:
 * - Total Revenue Collected (Monthly, Term, Annual)
 * - Outstanding Receivables
 * - Expense Tracker (linked from Finance & HR)
 * - Surplus/Deficit visualization
 * - Payment gateway settlement reports
 * Integration: Finance API + HR Payroll + Reporting Engine
 * Automation: Monthly snapshot emailed automatically to trustees
 * Design: Interactive chart cards (Pie, Line, and Heatmap formats)
 */

const FinancialHealth = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly'); // monthly, term, annual

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Revenue', value: '₹1.23Cr', icon: DollarSign, gradient: 'from-green-400 to-emerald-500', change: '+8.5% MoM' },
    { label: 'Outstanding', value: '₹14.5L', icon: AlertCircle, gradient: 'from-orange-400 to-yellow-500', change: '10.5% of total' },
    { label: 'Total Expenses', value: '₹87.2L', icon: TrendingDown, gradient: 'from-red-400 to-pink-500', change: '71% of revenue' },
    { label: 'Net Surplus', value: '₹35.8L', icon: TrendingUp, gradient: 'from-cyan-400 to-blue-500', change: '29% margin' },
  ];

  // Revenue Collection (Monthly, Term, Annual)
  const revenueData = {
    monthly: {
      current: 12300000,
      target: 13800000,
      percentage: 89.1,
      breakdown: [
        { month: 'Apr', revenue: 11800000 },
        { month: 'May', revenue: 12100000 },
        { month: 'Jun', revenue: 13200000 },
        { month: 'Jul', revenue: 11900000 },
        { month: 'Aug', revenue: 12500000 },
        { month: 'Sep', revenue: 12300000 },
      ],
    },
    term: {
      term1: { collected: 45600000, target: 53800000, percentage: 84.8 },
      term2: { collected: 38400000, target: 50900000, percentage: 75.4 },
      term3: { collected: 28700000, target: 44500000, percentage: 64.5 },
    },
    annual: {
      collected: 112700000,
      target: 149200000,
      percentage: 75.5,
    },
  };

  // Outstanding Receivables
  const outstandingReceivables = {
    total: 1450000,
    byCategory: [
      { category: 'Tuition Fees', amount: 892000, percentage: 61.5, count: 78 },
      { category: 'Transport Fees', amount: 345000, percentage: 23.8, count: 32 },
      { category: 'Lab Fees', amount: 123000, percentage: 8.5, count: 18 },
      { category: 'Misc Fees', amount: 90000, percentage: 6.2, count: 12 },
    ],
    byGrade: [
      { grade: 'Grade 9', amount: 145000, students: 22 },
      { grade: 'Grade 10', amount: 189000, students: 13 },
      { grade: 'Grade 11', amount: 212500, students: 13 },
      { grade: 'Grade 12', amount: 198700, students: 10 },
    ],
  };

  // Expense Tracker
  const expenseTracker = {
    total: 8720000,
    categories: [
      { category: 'Salaries & Benefits', amount: 5680000, percentage: 65.1, color: 'from-blue-400 to-cyan-500' },
      { category: 'Infrastructure', amount: 1240000, percentage: 14.2, color: 'from-purple-400 to-pink-500' },
      { category: 'Learning Resources', amount: 890000, percentage: 10.2, color: 'from-green-400 to-emerald-500' },
      { category: 'Operations & Utilities', amount: 560000, percentage: 6.4, color: 'from-orange-400 to-yellow-500' },
      { category: 'Administration', amount: 350000, percentage: 4.0, color: 'from-red-400 to-pink-500' },
    ],
  };

  // Surplus/Deficit Analysis
  const surplusDeficit = {
    current: 3580000,
    status: 'surplus', // surplus or deficit
    history: [
      { month: 'Apr', revenue: 11800000, expense: 8200000, surplus: 3600000 },
      { month: 'May', revenue: 12100000, expense: 8500000, surplus: 3600000 },
      { month: 'Jun', revenue: 13200000, expense: 9100000, surplus: 4100000 },
      { month: 'Jul', revenue: 11900000, expense: 8400000, surplus: 3500000 },
      { month: 'Aug', revenue: 12500000, expense: 8800000, surplus: 3700000 },
      { month: 'Sep', revenue: 12300000, expense: 8720000, surplus: 3580000 },
    ],
  };

  // Payment Gateway Settlement
  const gatewaySettlement = [
    { gateway: 'Razorpay', transactions: 687, amount: 28456000, settled: 27976560, charges: 479440, status: 'Settled' },
    { gateway: 'Stripe', transactions: 245, amount: 10345000, settled: 10138150, charges: 206850, status: 'Settled' },
    { gateway: 'Paytm', transactions: 89, amount: 3789000, settled: 3713430, charges: 75570, status: 'Pending' },
  ];

  // Trustee Report Schedule
  const trusteeReportSchedule = {
    lastSent: '2024-01-01',
    nextScheduled: '2024-02-01',
    frequency: 'Monthly',
    recipients: ['Board of Trustees', 'Principal', 'Finance Head'],
    autoSend: true,
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
  };

  const getMaxRevenue = () => {
    return Math.max(...surplusDeficit.history.map(h => h.revenue));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Financial Health Snapshot
              </h1>
              <p className="text-gray-600">Revenue performance and financial stability indicators.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Trustees</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
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

        {/* Trustee Report Automation */}
        <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Automated Trustee Reports</h2>
                  <p className="text-sm text-white/80">Monthly financial snapshots delivered automatically</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
                <p className="text-sm text-white/80 mb-1">Next Report</p>
                <p className="text-xl font-bold">{trusteeReportSchedule.nextScheduled}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Last Sent</p>
                <p className="font-bold text-lg">{trusteeReportSchedule.lastSent}</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Frequency</p>
                <p className="font-bold text-lg">{trusteeReportSchedule.frequency}</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-white/80 mb-2">Status</p>
                <p className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {trusteeReportSchedule.autoSend ? 'Active' : 'Inactive'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Collection */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Revenue Collection Trends</h2>
                <p className="text-sm text-gray-600">Monthly collection performance</p>
              </div>
            </div>

            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
            >
              <option value="monthly">Monthly View</option>
              <option value="term">Term View</option>
              <option value="annual">Annual View</option>
            </select>
          </div>

          {selectedPeriod === 'monthly' && (
            <div className="space-y-3">
              {revenueData.monthly.breakdown.map((month, index) => {
                const maxValue = getMaxRevenue();
                const widthPercentage = (month.revenue / maxValue) * 100;
                
                return (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800 w-12">{month.month}</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {formatCurrency(month.revenue)}
                      </span>
                    </div>
                    <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                        style={{ width: `${widthPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {selectedPeriod === 'term' && (
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(revenueData.term).map(([key, term], index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 capitalize">{key.replace(/(\d)/, ' $1')}</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {term.percentage}%
                    </p>
                    <p className="text-xs text-gray-500">Collection Rate</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collected:</span>
                      <span className="font-bold text-green-700">{formatCurrency(term.collected)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target:</span>
                      <span className="font-bold text-blue-700">{formatCurrency(term.target)}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 mt-3">
                    <div 
                      className={`h-full rounded-full transition-all ${term.percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
                      style={{ width: `${term.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedPeriod === 'annual' && (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="text-center mb-6">
                <p className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {revenueData.annual.percentage}%
                </p>
                <p className="text-sm text-gray-600">Annual Collection Rate</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Total Collected</p>
                  <p className="text-2xl font-bold text-green-700">{formatCurrency(revenueData.annual.collected)}</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Annual Target</p>
                  <p className="text-2xl font-bold text-blue-700">{formatCurrency(revenueData.annual.target)}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Outstanding Receivables */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Outstanding Receivables</h2>
                <p className="text-sm text-gray-600">Breakdown by category</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                {formatCurrency(outstandingReceivables.total)}
              </p>
              <p className="text-sm text-gray-600">Total Outstanding</p>
            </div>

            <div className="space-y-3">
              {outstandingReceivables.byCategory.map((cat, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{cat.category}</span>
                    <span className="text-sm font-bold text-orange-700">{formatCurrency(cat.amount)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-500"
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{cat.count} students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expense Tracker */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Expense Breakdown</h2>
                <p className="text-sm text-gray-600">Linked from Finance & HR</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {formatCurrency(expenseTracker.total)}
              </p>
              <p className="text-sm text-gray-600">Total Expenses</p>
            </div>

            <div className="space-y-3">
              {expenseTracker.categories.map((cat, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{cat.category}</span>
                    <span className="text-sm font-bold text-red-700">{formatCurrency(cat.amount)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{cat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Surplus/Deficit Visualization */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 bg-gradient-to-br ${surplusDeficit.status === 'surplus' ? 'from-green-400 to-emerald-500' : 'from-red-400 to-pink-500'} rounded-xl`}>
                {surplusDeficit.status === 'surplus' ? (
                  <TrendingUp className="w-6 h-6 text-white" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Surplus/Deficit Analysis</h2>
                <p className="text-sm text-gray-600">6-month financial performance</p>
              </div>
            </div>
            <div className={`px-6 py-3 rounded-2xl ${surplusDeficit.status === 'surplus' ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="text-sm text-gray-600 mb-1">Current Status</p>
              <p className={`text-2xl font-bold ${surplusDeficit.status === 'surplus' ? 'text-green-700' : 'text-red-700'} capitalize`}>
                {surplusDeficit.status}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {surplusDeficit.history.map((month, index) => (
              <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-800 text-lg">{month.month}</span>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${month.surplus >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {month.surplus >= 0 ? '+' : ''}{formatCurrency(month.surplus)}
                    </p>
                    <p className="text-xs text-gray-500">{month.surplus >= 0 ? 'Surplus' : 'Deficit'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <p className="text-xs text-gray-600 mb-1">Revenue</p>
                    <p className="font-bold text-green-700">{formatCurrency(month.revenue)}</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl">
                    <p className="text-xs text-gray-600 mb-1">Expense</p>
                    <p className="font-bold text-red-700">{formatCurrency(month.expense)}</p>
                  </div>
                </div>

                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    style={{ width: `${(month.expense / month.revenue) * 100}%` }}
                  ></div>
                  <div 
                    className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                    style={{ width: `${(month.surplus / month.revenue) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Gateway Settlement */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Payment Gateway Settlement</h2>
              <p className="text-sm text-gray-600">Transaction reconciliation reports</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Gateway</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Transactions</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Amount</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Settled</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Charges</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {gatewaySettlement.map((gateway, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{gateway.gateway}</td>
                    <td className="p-4 text-center text-gray-700">{gateway.transactions}</td>
                    <td className="p-4 text-right font-bold text-gray-800">{formatCurrency(gateway.amount)}</td>
                    <td className="p-4 text-right font-bold text-green-700">{formatCurrency(gateway.settled)}</td>
                    <td className="p-4 text-right font-bold text-red-700">{formatCurrency(gateway.charges)}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${gateway.status === 'Settled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {gateway.status === 'Settled' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {gateway.status === 'Pending' && <Clock className="w-3 h-3 inline mr-1" />}
                        {gateway.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialHealth;
