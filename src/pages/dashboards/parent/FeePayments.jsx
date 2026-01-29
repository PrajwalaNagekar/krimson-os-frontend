import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  FileText,
  DollarSign,
  Shield,
  Bell,
  Filter,
  Search,
  ExternalLink,
  Smartphone,
  TrendingUp,
  Receipt,
  ArrowRight,
  Info,
  X,
  Check
} from 'lucide-react';

const FeePayments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock Data - Will be replaced with API
  const feeStatus = {
    totalOutstanding: 850.00,
    dueDate: '2026-01-25',
    daysLeft: 6,
    nextPayment: {
      description: 'Term 1 Tuition Fee - January',
      amount: 450.00,
      dueDate: '2026-01-25'
    },
    upcomingDues: [
      {
        id: 1,
        description: 'Term 1 Tuition Fee - January',
        amount: 450.00,
        dueDate: '2026-01-25',
        category: 'Tuition'
      },
      {
        id: 2,
        description: 'Transport Fee - January',
        amount: 150.00,
        dueDate: '2026-01-25',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Activity Fee - Term 1',
        amount: 250.00,
        dueDate: '2026-01-25',
        category: 'Activities'
      }
    ]
  };

  const transactionHistory = [
    {
      id: 'TXN001234',
      description: 'Term 1 Tuition Fee - December',
      date: '2025-12-01',
      amount: 1200.00,
      status: 'paid',
      category: 'Tuition',
      paymentMethod: 'Stripe',
      receiptUrl: '#'
    },
    {
      id: 'TXN001235',
      description: 'Transport Fee - December',
      date: '2025-12-01',
      amount: 150.00,
      status: 'paid',
      category: 'Transport',
      paymentMethod: 'Razorpay',
      receiptUrl: '#'
    },
    {
      id: 'TXN001236',
      description: 'Activity Fee - Term 1',
      date: '2025-11-15',
      amount: 250.00,
      status: 'paid',
      category: 'Activities',
      paymentMethod: 'Stripe',
      receiptUrl: '#'
    },
    {
      id: 'TXN001237',
      description: 'Library Fee - Annual',
      date: '2025-11-01',
      amount: 100.00,
      status: 'paid',
      category: 'Library',
      paymentMethod: 'Stripe',
      receiptUrl: '#'
    }
  ];

  const filteredTransactions = transactionHistory.filter(txn => {
    const matchesSearch = txn.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         txn.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || txn.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Tuition': 'from-blue-500 to-cyan-500',
      'Transport': 'from-orange-500 to-amber-500',
      'Activities': 'from-purple-500 to-pink-500',
      'Library': 'from-emerald-500 to-teal-500'
    };
    return colors[category] || 'from-slate-500 to-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <CreditCard size={24} className="md:hidden text-white" />
            <CreditCard size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Fee Payment & Receipts
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Manage tuition payments and view transaction history</p>
          </div>
        </div>
      </div>

      {/* Outstanding Payment Card & Due Date */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 relative z-10">
        {/* Outstanding Payment */}
        <div className="lg:col-span-2 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-pink-500/30 rounded-full blur-3xl -ml-10 -mb-10"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div>
                <p className="text-white/80 text-xs md:text-sm mb-1 font-medium flex items-center gap-2">
                  <DollarSign size={16} className="md:w-5 md:h-5" />
                  Total Outstanding
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  SGD {feeStatus.totalOutstanding.toFixed(2)}
                </h1>
                <p className="text-white/70 text-xs md:text-sm font-medium">
                  Due: {new Date(feeStatus.dueDate).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-3 md:px-4 py-2 rounded-xl text-center">
                <p className="text-xl md:text-2xl font-bold">{feeStatus.daysLeft}</p>
                <p className="text-[10px] md:text-xs text-white/80 font-medium">days left</p>
              </div>
            </div>

            <button 
              className="w-full sm:w-auto bg-white text-blue-600 px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <CreditCard size={18} className="md:w-5 md:h-5" />
                <div className="flex flex-col items-center">
                  <span>Pay Now - 2 Click Payment</span>
                  <span className="text-[9px] md:text-[10px] text-blue-400 font-medium">get in app</span>
                </div>
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </div>
            </button>
            
            <div className="mt-4 flex items-center gap-2 text-white/80 text-xs">
              <Shield size={14} />
              <span>Secure payment via Stripe & Razorpay</span>
            </div>
          </div>

          <CreditCard className="absolute right-4 md:right-6 bottom-4 md:bottom-6 text-white/20 w-24 h-24 md:w-32 md:h-32 rotate-12" />
        </div>

        {/* Auto-Reminders & Upcoming */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
              <Bell size={16} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm md:text-base">Payment Reminders</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-xl border border-red-200">
              <Clock size={18} className="text-red-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-red-700">Due in {feeStatus.daysLeft} days</p>
                <p className="text-xs text-slate-600 truncate">
                  {new Date(feeStatus.dueDate).toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'short' })}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 rounded-xl border border-cyan-200">
              <div className="flex items-center gap-2 mb-2">
                <Info size={14} className="text-cyan-600" />
                <p className="text-xs font-bold text-cyan-700">Auto-reminder active</p>
              </div>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                You'll receive notifications 7, 3, and 1 day before due date.
              </p>
            </div>

            <div className="text-xs text-slate-500 bg-slate-100 p-2 rounded-lg">
              <p className="font-medium">Late fees apply after due date</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Payments Breakdown */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-cyan-500" />
            Upcoming Payments Breakdown
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {feeStatus.upcomingDues.map((due) => (
              <div 
                key={due.id}
                className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getCategoryColor(due.category)} flex items-center justify-center`}>
                    <FileText size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-600">{due.category}</span>
                </div>
                <p className="text-sm font-medium text-slate-700 mb-2 line-clamp-2">{due.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-slate-800">SGD {due.amount.toFixed(2)}</p>
                  <button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1.5 rounded-lg font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xs">Pay</span>
                      <span className="text-[8px] opacity-80">get in app</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
            <h3 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
              <Receipt size={20} className="text-cyan-500" />
              Transaction History
            </h3>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search transactions..."
                  className="w-full sm:w-64 pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs md:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-xs text-slate-500 uppercase border-b-2 border-slate-200 bg-gradient-to-r from-slate-50 to-cyan-50">
                <tr>
                  <th className="py-3 px-4 font-bold">Transaction ID</th>
                  <th className="py-3 px-4 font-bold">Description</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Date</th>
                  <th className="py-3 px-4 font-bold">Amount</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">{txn.id}</span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-700">{txn.description}</td>
                    <td className="py-4 px-4">
                      <span className={`text-xs font-bold bg-gradient-to-r ${getCategoryColor(txn.category)} bg-clip-text text-transparent`}>
                        {txn.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      {new Date(txn.date).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="py-4 px-4 text-slate-800 font-bold">SGD {txn.amount.toFixed(2)}</td>
                    <td className="py-4 px-4">
                      {txn.status === 'paid' ? (
                        <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit">
                          <CheckCircle size={12} /> Paid
                        </span>
                      ) : (
                        <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit">
                          <Clock size={12} /> Pending
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          className="text-cyan-600 hover:bg-cyan-50 p-2 rounded-lg transition-all hover:scale-110 active:scale-95"
                          title="Download Receipt"
                        >
                          <Download size={16} />
                        </button>
                        <button className="text-slate-400 hover:bg-slate-100 p-2 rounded-lg text-[10px] font-medium transition-all hover:scale-105">
                          View in App
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filteredTransactions.map((txn) => (
              <div key={txn.id} className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs font-mono text-slate-500 mb-1">{txn.id}</p>
                    <p className="text-sm font-bold text-slate-800 mb-1">{txn.description}</p>
                    <span className={`text-xs font-bold bg-gradient-to-r ${getCategoryColor(txn.category)} bg-clip-text text-transparent`}>
                      {txn.category}
                    </span>
                  </div>
                  {txn.status === 'paid' ? (
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <CheckCircle size={10} /> Paid
                    </span>
                  ) : (
                    <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Clock size={10} /> Pending
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500">{new Date(txn.date).toLocaleDateString('en-SG')}</p>
                    <p className="text-base font-bold text-slate-800">SGD {txn.amount.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-cyan-600 bg-cyan-50 p-2 rounded-lg">
                      <Download size={16} />
                    </button>
                    <button className="text-slate-600 bg-slate-100 px-3 py-2 rounded-lg text-xs font-medium">
                      View in App
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary for Tax/Reimbursement */}
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 rounded-xl border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <TrendingUp size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 mb-1 text-sm md:text-base">Annual Summary</h4>
                <p className="text-xs md:text-sm text-slate-600 mb-3">
                  Total paid in 2025: <span className="font-bold text-slate-800">SGD 1,700.00</span> • Ready for tax filing and reimbursement
                </p>
                <button className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 hover:gap-2 transition-all">
                  Download Annual Statement <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default FeePayments;
