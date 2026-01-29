/**
 * @component FinanceControl
 * @description Finance Control Center - Comprehensive Fee & Payment Management
 */
import React, { useState } from 'react';
import { 
  DollarSign, CreditCard, Wallet, TrendingUp, TrendingDown, Download,
  RefreshCcw, Settings, Filter, Search, CheckCircle, XCircle, Clock,
  AlertCircle, FileText, Send, Eye, BarChart3, PieChart, ArrowUpRight,
  ArrowDownRight, Plus, Edit, Trash2, Receipt, Building2, Bus, Book,
  Gift, Calendar, Users, Activity, Loader
} from 'lucide-react';

const FinanceControl = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Fee Structure Setup Data
  const feeCategories = [
    { 
      id: 'CAT001', 
      name: 'Tuition Fee', 
      icon: <Book size={20} />,
      amount: '₹45,000',
      term: 'Per Year',
      color: 'blue',
      description: 'Core academic instruction fees',
      students: 450,
      collected: '₹1,80,00,000',
      pending: '₹35,00,000'
    },
    { 
      id: 'CAT002', 
      name: 'CCA (Co-Curricular Activities)', 
      icon: <Gift size={20} />,
      amount: '₹12,000',
      term: 'Per Year',
      color: 'purple',
      description: 'Sports, arts, and extracurricular',
      students: 380,
      collected: '₹35,00,000',
      pending: '₹12,00,000'
    },
    { 
      id: 'CAT003', 
      name: 'Transport', 
      icon: <Bus size={20} />,
      amount: '₹18,000',
      term: 'Per Year',
      color: 'amber',
      description: 'School bus transportation',
      students: 220,
      collected: '₹28,00,000',
      pending: '₹12,00,000'
    },
    { 
      id: 'CAT004', 
      name: 'Miscellaneous', 
      icon: <FileText size={20} />,
      amount: '₹8,000',
      term: 'Per Year',
      color: 'green',
      description: 'Books, uniform, and other charges',
      students: 450,
      collected: '₹25,00,000',
      pending: '₹11,00,000'
    }
  ];

  // Live Receipts Data
  const liveReceipts = [
    { 
      id: 'RCP-2026-001', 
      studentName: 'Arjun Sharma', 
      studentId: 'STU-2024-145',
      category: 'Tuition Fee', 
      amount: '₹45,000',
      paymentMethod: 'UPI',
      gateway: 'Razorpay',
      timestamp: '2026-01-20 10:45 AM',
      status: 'Success',
      transactionId: 'TXN123456789'
    },
    { 
      id: 'RCP-2026-002', 
      studentName: 'Priya Patel', 
      studentId: 'STU-2024-089',
      category: 'Transport', 
      amount: '₹18,000',
      paymentMethod: 'Credit Card',
      gateway: 'PayU',
      timestamp: '2026-01-20 10:32 AM',
      status: 'Success',
      transactionId: 'TXN123456790'
    },
    { 
      id: 'RCP-2026-003', 
      studentName: 'Rahul Kumar', 
      studentId: 'STU-2024-234',
      category: 'CCA', 
      amount: '₹12,000',
      paymentMethod: 'Net Banking',
      gateway: 'HDFC Payment Gateway',
      timestamp: '2026-01-20 10:15 AM',
      status: 'Success',
      transactionId: 'TXN123456791'
    },
    { 
      id: 'RCP-2026-004', 
      studentName: 'Sneha Reddy', 
      studentId: 'STU-2024-178',
      category: 'Miscellaneous', 
      amount: '₹8,000',
      paymentMethod: 'Debit Card',
      gateway: 'Razorpay',
      timestamp: '2026-01-20 09:58 AM',
      status: 'Pending',
      transactionId: 'TXN123456792'
    }
  ];

  // Refunds & Adjustments Log
  const refundsLog = [
    {
      id: 'REF-001',
      studentName: 'Karan Singh',
      studentId: 'STU-2024-056',
      category: 'Transport',
      originalAmount: '₹18,000',
      refundAmount: '₹9,000',
      reason: 'Mid-year discontinuation',
      requestDate: '2026-01-15',
      approvedBy: 'Finance Manager',
      status: 'Approved',
      processedDate: '2026-01-18'
    },
    {
      id: 'REF-002',
      studentName: 'Ananya Gupta',
      studentId: 'STU-2024-123',
      category: 'Miscellaneous',
      originalAmount: '₹8,000',
      refundAmount: '₹3,500',
      reason: 'Duplicate payment adjustment',
      requestDate: '2026-01-18',
      approvedBy: 'Principal',
      status: 'Pending',
      processedDate: '-'
    },
    {
      id: 'ADJ-003',
      studentName: 'Rohan Mehta',
      studentId: 'STU-2024-267',
      category: 'Tuition Fee',
      originalAmount: '₹45,000',
      refundAmount: '₹5,000',
      reason: 'Scholarship adjustment',
      requestDate: '2026-01-12',
      approvedBy: 'Academic Director',
      status: 'Completed',
      processedDate: '2026-01-14'
    }
  ];

  // Quick Stats
  const stats = {
    totalCollected: '₹2,68,00,000',
    pendingDues: '₹70,00,000',
    todayCollection: '₹83,000',
    activeGateways: 3,
    successRate: '98.5%',
    avgProcessingTime: '2.3 mins',
    monthlyGrowth: '+12.5%',
    refundsPending: 1
  };

  const getCategoryColor = (category) => {
    const cat = feeCategories.find(c => c.name === category);
    return cat ? cat.color : 'slate';
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', icon: 'bg-blue-100' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', icon: 'bg-purple-100' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', icon: 'bg-amber-100' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', icon: 'bg-green-100' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
      case 'Completed':
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Failed':
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Success':
      case 'Completed':
      case 'Approved':
        return <CheckCircle size={14} />;
      case 'Pending':
        return <Clock size={14} />;
      case 'Failed':
      case 'Rejected':
        return <XCircle size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

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
                  Finance Control Center
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <RefreshCcw size={12} /> Live Sync
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Fee & Payment Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage fee categories, monitor collections, process refunds, and export to accounting systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><Wallet size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalCollected}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Collected</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg"><CreditCard size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.pendingDues}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Pending Dues</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg"><TrendingUp size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.todayCollection}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Today's Collection</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg"><Activity size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.activeGateways}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Gateways</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg"><CheckCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.successRate}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Success Rate</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg"><Clock size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.avgProcessingTime}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg Processing</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><ArrowUpRight size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.monthlyGrowth}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Monthly Growth</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg"><AlertCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.refundsPending}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Refunds Pending</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          ACTION BUTTONS
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              Add Fee Category
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
            <div className="flex items-center gap-2">
              <RefreshCcw size={18} />
              Sync Gateways
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export (QuickBooks)
            </div>
            <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
          </button>
          <button className="bg-white border-2 border-green-100 text-green-600 px-5 py-3 rounded-xl font-bold hover:bg-green-50 hover:border-green-200 transition-all flex flex-col items-center gap-0.5 text-sm">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export (Tally)
            </div>
            <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
          </button>
        </div>
      </div>

      {/* ========================================
          FEE STRUCTURE SETUP
          ======================================== */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Fee Structure Setup</h2>
          <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{feeCategories.length} Categories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const collected = parseInt(category.collected.replace(/[^0-9]/g, ''));
            const pending = parseInt(category.pending.replace(/[^0-9]/g, ''));
            const total = collected + pending;
            const collectionPercentage = ((collected / total) * 100).toFixed(1);
            
            return (
              <div 
                key={category.id}
                className="relative bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.bg} opacity-60`}></div>
                
                {/* Decorative Background Element */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 ${colors.bg} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colors.icon} ${colors.text} rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <Settings size={18} />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{category.description}</p>

                  <div className="space-y-3 mb-4">
                    {/* Fee Amount Card with Gradient */}
                    <div className={`relative ${colors.bg} ${colors.text} p-4 rounded-2xl border ${colors.border} shadow-sm overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold opacity-80 mb-1 flex items-center gap-1.5">
                          <DollarSign size={12} />
                          Fee Amount
                        </p>
                        <p className="text-2xl font-bold">{category.amount}</p>
                        <p className="text-xs opacity-70">{category.term}</p>
                      </div>
                    </div>

                    {/* Enhanced Collection Stats */}
                    <div className="bg-gradient-to-br from-slate-50 to-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-600">Collection Progress</span>
                        <span className="text-xs font-bold text-blue-600">{collectionPercentage}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${collectionPercentage}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white p-2 rounded-lg border border-green-100">
                          <p className="text-slate-500 font-medium mb-1 flex items-center gap-1">
                            <CheckCircle size={10} className="text-green-500" />
                            Collected
                          </p>
                          <p className="font-bold text-green-600">{category.collected}</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-amber-100">
                          <p className="text-slate-500 font-medium mb-1 flex items-center gap-1">
                            <Clock size={10} className="text-amber-500" />
                            Pending
                          </p>
                          <p className="font-bold text-amber-600">{category.pending}</p>
                        </div>
                      </div>
                    </div>

                    {/* Students Info with Icon */}
                    <div className="flex items-center gap-2 text-xs bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="p-1.5 bg-white rounded-md border border-slate-200">
                        <Users size={14} className="text-blue-500" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">{category.students} Students</p>
                        <p className="text-[10px] text-slate-500">Currently enrolled</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Button */}
                  <button className="w-full py-2.5 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 text-slate-600 hover:text-blue-600 font-bold rounded-xl text-xs transition-all flex flex-col items-center gap-0.5 shadow-sm hover:shadow-md border border-slate-200 hover:border-blue-200">
                    <div className="flex items-center gap-1.5">
                      <Edit size={14} />
                      Edit Category
                    </div>
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================
          COLLECTION DASHBOARD (LIVE RECEIPTS)
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        {/* Enhanced Header with Gradient */}
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                Live Collection Dashboard
                <span className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Live
                </span>
              </h2>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <Activity size={14} className="text-blue-500" />
                Real-time payment receipts from gateway APIs
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-white text-blue-600 rounded-xl text-sm font-bold border border-blue-100 shadow-sm">
                {liveReceipts.length} Receipts Today
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Receipt ID</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Student</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Gateway</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Time</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {liveReceipts.map((receipt) => (
                <tr key={receipt.id} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="px-4 py-4">
                    <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                      {receipt.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{receipt.studentName}</p>
                      <p className="text-xs text-slate-400">{receipt.studentId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold border ${getColorClasses(getCategoryColor(receipt.category)).bg} ${getColorClasses(getCategoryColor(receipt.category)).text} ${getColorClasses(getCategoryColor(receipt.category)).border}`}>
                      {receipt.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-slate-800">{receipt.amount}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-slate-600">{receipt.paymentMethod}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">{receipt.gateway}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-slate-600">{receipt.timestamp}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(receipt.status)}`}>
                      {getStatusIcon(receipt.status)}
                      {receipt.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all flex flex-col items-center ml-auto">
                      <div className="flex items-center gap-1">
                        <Receipt size={14} />
                        View
                      </div>
                      <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            <span className="font-bold text-slate-700">PDPA Compliance:</span> Parent banking details are not stored or displayed in this system.
          </p>
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-200">
            ✓ Compliant
          </span>
        </div>
      </div>

      {/* ========================================
          REFUNDS & ADJUSTMENTS LOG
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        {/* Enhanced Header with Gradient */}
        <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-1">Refunds & Adjustments Log</h2>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FileText size={14} className="text-amber-500" />
                Track refund requests and fee adjustments
              </p>
            </div>
            <span className="px-4 py-2 bg-white text-amber-700 rounded-xl text-sm font-bold border border-amber-200 shadow-sm">
              {refundsLog.filter(r => r.status === 'Pending').length} Pending Approval
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Ref ID</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Student</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Original Amount</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Refund Amount</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Reason</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {refundsLog.map((refund) => (
                <tr key={refund.id} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="px-4 py-4">
                    <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                      {refund.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{refund.studentName}</p>
                      <p className="text-xs text-slate-400">{refund.studentId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-slate-600">{refund.category}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-slate-700">{refund.originalAmount}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-red-600">{refund.refundAmount}</span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-slate-600 max-w-xs">{refund.reason}</p>
                    <p className="text-xs text-slate-400 mt-1">Approved by: {refund.approvedBy}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(refund.status)}`}>
                      {getStatusIcon(refund.status)}
                      {refund.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    {refund.status === 'Pending' ? (
                      <div className="flex gap-2 justify-end">
                        <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all flex flex-col items-center">
                          <span>Approve</span>
                          <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                        </button>
                        <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition-all flex flex-col items-center">
                          <span>Reject</span>
                          <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400">Processed: {refund.processedDate}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

     

    </div>
  );
};

export default FinanceControl;
