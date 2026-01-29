import React, { useState } from 'react';
import { 
  Scan, Search, Calendar, DollarSign, CheckCircle, 
  XCircle, User, Book, Clock, AlertTriangle, TrendingUp,
  ArrowRight, ArrowLeft, Download, RefreshCw, FileText
} from 'lucide-react';

/**
 * Screen 2: Issue & Return Manager
 * Purpose: Streamline daily book issue and return processes
 * Features:
 * - Barcode scan entry
 * - Student/Staff member lookup
 * - Due date and overdue fine calculator
 * - Return confirmation and auto-update of stock count
 * Integration: Library API + Student Database
 */

const IssueReturnManager = () => {
  const [activeTab, setActiveTab] = useState('issue'); // issue or return
  const [barcodeInput, setBarcodeInput] = useState('');
  const [memberSearch, setMemberSearch] = useState('');

  // Static data - ready for API integration
  const stats = [
    { label: 'Issued Today', value: '47', icon: ArrowRight, gradient: 'from-green-400 to-emerald-500', change: '+12' },
    { label: 'Returned Today', value: '38', icon: ArrowLeft, gradient: 'from-blue-400 to-cyan-500', change: '+8' },
    { label: 'Pending Returns', value: '156', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '-5' },
    { label: 'Fines Collected', value: '₹2,450', icon: DollarSign, gradient: 'from-pink-400 to-purple-500', change: '+₹350' },
  ];

  // Recent transactions
  const recentTransactions = [
    {
      id: 1,
      type: 'Issue',
      bookTitle: 'Introduction to Algorithms',
      bookISBN: '978-0-262-03384-8',
      memberName: 'Sarah Martinez',
      memberId: 'STU-2024-1045',
      memberType: 'Student',
      issueDate: '2024-01-20',
      dueDate: '2024-02-03',
      status: 'Active',
      barcode: 'BK-CS-101-001',
    },
    {
      id: 2,
      type: 'Return',
      bookTitle: 'Pride and Prejudice',
      bookISBN: '978-0-14-143951-8',
      memberName: 'Dr. Robert Chen',
      memberId: 'TCH-2019-045',
      memberType: 'Teacher',
      issueDate: '2024-01-05',
      returnDate: '2024-01-20',
      dueDate: '2024-01-19',
      daysOverdue: 1,
      fine: 10,
      status: 'Returned',
      barcode: 'BK-LIT-203-005',
    },
    {
      id: 3,
      type: 'Issue',
      bookTitle: 'Organic Chemistry',
      bookISBN: '978-0-321-80322-1',
      memberName: 'Emily Johnson',
      memberId: 'STU-2024-2156',
      memberType: 'Student',
      issueDate: '2024-01-20',
      dueDate: '2024-02-03',
      status: 'Active',
      barcode: 'BK-CHE-078-003',
    },
  ];

  // Currently issued books (for return)
  const issuedBooks = [
    {
      id: 1,
      bookTitle: 'The Feynman Lectures on Physics',
      bookISBN: '978-0-465-02493-3',
      barcode: 'BK-PHY-045-002',
      memberName: 'Michael Brown',
      memberId: 'STU-2024-3089',
      issueDate: '2024-01-10',
      dueDate: '2024-01-24',
      daysUntilDue: 4,
      isOverdue: false,
    },
    {
      id: 2,
      bookTitle: 'A Brief History of Time',
      bookISBN: '978-0-553-10953-5',
      barcode: 'BK-SCI-156-008',
      memberName: 'Lisa Wang',
      memberId: 'STU-2024-4521',
      issueDate: '2024-01-05',
      dueDate: '2024-01-19',
      daysOverdue: 1,
      fine: 10,
      isOverdue: true,
    },
    {
      id: 3,
      bookTitle: 'The Great Gatsby',
      bookISBN: '978-0-7432-7356-5',
      barcode: 'BK-LIT-215-012',
      memberName: 'Prof. Ahmed',
      memberId: 'TCH-2020-087',
      issueDate: '2024-01-08',
      dueDate: '2024-01-22',
      daysUntilDue: 2,
      isOverdue: false,
    },
  ];

  const calculateFine = (daysOverdue) => {
    const finePerDay = 10; // ₹10 per day
    return daysOverdue * finePerDay;
  };

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
                Issue & Return Manager
              </h1>
              <p className="text-gray-600">Streamline daily book issue and return processes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-green-600 bg-green-50">
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

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setActiveTab('issue')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'issue' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Issue Books</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('return')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'return' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Return Books</span>
            </div>
          </button>
        </div>

        {/* Issue/Return Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 bg-gradient-to-br ${activeTab === 'issue' ? 'from-green-400 to-emerald-500' : 'from-blue-400 to-cyan-500'} rounded-xl`}>
              <Scan className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {activeTab === 'issue' ? 'Issue New Book' : 'Return Book'}
              </h2>
              <p className="text-sm text-gray-600">Scan barcode or search manually</p>
            </div>
          </div>

          {/* Barcode Scanner & Search */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Book Barcode / ISBN
              </label>
              <div className="relative">
                <Scan className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  placeholder="Scan or enter barcode..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">* Use barcode scanner or type manually</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Member ID / Name
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={memberSearch}
                  onChange={(e) => setMemberSearch(e.target.value)}
                  placeholder="Search student or staff..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">* Enter member ID or name to search</p>
            </div>
          </div>

          {/* Due Date & Fine Calculator */}
          <div className="grid md:grid-cols-3 gap-6 mb-6 p-5 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-2xl border border-cyan-100">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                {activeTab === 'issue' ? 'Due Date' : 'Return Date'}
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                defaultValue={activeTab === 'issue' ? '2024-02-03' : '2024-01-20'}
              />
            </div>

            {activeTab === 'return' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    Days Overdue
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    placeholder="0"
                    defaultValue="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-pink-600" />
                    Fine Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-bold">₹</span>
                    <input
                      type="number"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                      placeholder="0"
                      defaultValue="0"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">₹10 per day overdue</p>
                </div>
              </>
            )}

            {activeTab === 'issue' && (
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Period
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                  <option value="14">14 Days (Standard)</option>
                  <option value="7">7 Days (Short Term)</option>
                  <option value="30">30 Days (Extended)</option>
                </select>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {activeTab === 'issue' ? (
              <>
                <button className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirm Issue</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset Form</span>
                </button>
              </>
            ) : (
              <>
                <button className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Confirm Return</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Collect Fine</span>
                  </div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Currently Issued Books (for return tab) */}
        {activeTab === 'return' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Currently Issued Books</h2>
                <p className="text-sm text-gray-600">Books pending return</p>
              </div>
            </div>

            <div className="space-y-4">
              {issuedBooks.map((book) => (
                <div key={book.id} className={`p-5 rounded-2xl border-2 ${book.isOverdue ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'} hover:shadow-lg transition-all`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {book.isOverdue && (
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            OVERDUE
                          </span>
                        )}
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                          {book.barcode}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-gray-800 mb-1">{book.bookTitle}</h3>
                      <p className="text-sm text-gray-600 mb-3">ISBN: {book.bookISBN}</p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{book.memberName} ({book.memberId})</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-cyan-500" />
                          <span className="text-gray-700">Issued: {formatDate(book.issueDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className={`w-4 h-4 ${book.isOverdue ? 'text-red-500' : 'text-green-500'}`} />
                          <span className={book.isOverdue ? 'text-red-600 font-semibold' : 'text-gray-700'}>
                            Due: {formatDate(book.dueDate)}
                            {book.isOverdue && ` (${book.daysOverdue}d overdue)`}
                          </span>
                        </div>
                        {book.isOverdue && (
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="w-4 h-4 text-pink-500" />
                            <span className="text-pink-600 font-bold">Fine: ₹{book.fine}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Process Return</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Transactions */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Recent Transactions</h2>
                <p className="text-sm text-gray-600">Today's activity log</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${transaction.type === 'Issue' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}>
                        {transaction.type === 'Issue' ? <ArrowRight className="w-3 h-3 inline mr-1" /> : <ArrowLeft className="w-3 h-3 inline mr-1" />}
                        {transaction.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {transaction.barcode}
                      </span>
                      {transaction.daysOverdue > 0 && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                          Fine: ₹{transaction.fine}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-gray-800 mb-1">{transaction.bookTitle}</h3>
                    <p className="text-sm text-gray-600 mb-2">{transaction.memberName} • {transaction.memberId} • {transaction.memberType}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                      <span>ISBN: {transaction.bookISBN}</span>
                      <span>•</span>
                      <span>{transaction.type === 'Issue' ? 'Issued' : 'Returned'}: {formatDate(transaction.type === 'Issue' ? transaction.issueDate : transaction.returnDate)}</span>
                      <span>•</span>
                      <span>Due: {formatDate(transaction.dueDate)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold ${transaction.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {transaction.status}
                    </span>
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

export default IssueReturnManager;
