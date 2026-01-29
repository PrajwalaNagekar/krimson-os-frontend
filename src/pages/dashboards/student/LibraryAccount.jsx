import React, { useState } from 'react';
import { 
  BookOpen, Calendar, AlertCircle, CheckCircle, Clock, 
  ChevronDown, ChevronUp, XCircle, Trophy, User, Hash,
  AlertTriangle, Info, Bell, Sparkles, TrendingUp
} from 'lucide-react';

const LibraryAccount = () => {
  const [selectedTerm, setSelectedTerm] = useState('2025-2026');
  const [showHistory, setShowHistory] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mock student data
  const studentInfo = {
    name: 'Alex Johnson',
    studentId: 'STU2024001',
    academicYear: '2025-2026',
  };

  // Mock issued books data
  const issuedBooks = [
    {
      id: 1,
      bookTitle: 'Advanced Physics: Quantum Mechanics',
      author: 'Dr. Sarah Mitchell',
      issueDate: '2026-01-10',
      dueDate: '2026-02-10',
      status: 'issued',
      daysRemaining: 14,
    },
    {
      id: 2,
      bookTitle: 'Mathematical Analysis Vol. 2',
      author: 'Prof. James Chen',
      issueDate: '2026-01-15',
      dueDate: '2026-01-30',
      status: 'dueSoon',
      daysRemaining: 3,
    },
    {
      id: 3,
      bookTitle: 'Introduction to Organic Chemistry',
      author: 'Dr. Emily Parker',
      issueDate: '2025-12-20',
      dueDate: '2026-01-20',
      status: 'overdue',
      daysOverdue: 7,
    },
    {
      id: 4,
      bookTitle: 'World History: Modern Era',
      author: 'Michael Anderson',
      issueDate: '2026-01-05',
      dueDate: '2026-02-05',
      status: 'issued',
      daysRemaining: 9,
    },
  ];

  // Mock borrowing history
  const borrowingHistory = [
    {
      id: 1,
      bookTitle: 'Fundamentals of Biology',
      issueDate: '2025-11-01',
      returnDate: '2025-11-28',
      status: 'returnedOnTime',
    },
    {
      id: 2,
      bookTitle: 'English Literature Anthology',
      issueDate: '2025-10-15',
      returnDate: '2025-11-20',
      status: 'returnedLate',
    },
    {
      id: 3,
      bookTitle: 'Calculus and Analytical Geometry',
      issueDate: '2025-09-05',
      returnDate: '2025-10-04',
      status: 'returnedOnTime',
    },
    {
      id: 4,
      bookTitle: 'Environmental Science',
      issueDate: '2025-08-20',
      returnDate: '2025-09-19',
      status: 'returnedOnTime',
    },
  ];

  // Calculate overdue summary
  const overdueInfo = {
    count: issuedBooks.filter(book => book.status === 'overdue').length,
    totalDaysOverdue: issuedBooks
      .filter(book => book.status === 'overdue')
      .reduce((sum, book) => sum + (book.daysOverdue || 0), 0),
    fineAmount: issuedBooks
      .filter(book => book.status === 'overdue')
      .reduce((sum, book) => sum + (book.daysOverdue || 0) * 5, 0), // ₹5 per day
    clearanceStatus: issuedBooks.filter(book => book.status === 'overdue').length === 0 
      ? 'cleared' 
      : 'pending',
  };

  // Get status badge styling
  const getStatusBadge = (book) => {
    switch (book.status) {
      case 'overdue':
        return {
          bg: 'bg-gradient-to-r from-red-500 to-rose-600',
          text: 'text-white',
          label: 'Overdue',
          icon: <XCircle size={14} />,
          border: 'border-red-300',
        };
      case 'dueSoon':
        return {
          bg: 'bg-gradient-to-r from-orange-500 to-amber-600',
          text: 'text-white',
          label: 'Due Soon',
          icon: <AlertCircle size={14} />,
          border: 'border-orange-300',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
          text: 'text-white',
          label: 'Issued',
          icon: <CheckCircle size={14} />,
          border: 'border-green-300',
        };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Get alerts
  const alerts = [];
  
  if (overdueInfo.count > 0) {
    alerts.push({
      type: 'error',
      message: `You have ${overdueInfo.count} overdue book${overdueInfo.count > 1 ? 's' : ''} - please return immediately`,
      icon: <AlertTriangle size={18} />,
    });
  }
  
  const dueSoonCount = issuedBooks.filter(book => book.status === 'dueSoon').length;
  if (dueSoonCount > 0) {
    alerts.push({
      type: 'warning',
      message: `${dueSoonCount} book${dueSoonCount > 1 ? 's' : ''} due within 3 days`,
      icon: <Bell size={18} />,
    });
  }
  
  if (overdueInfo.clearanceStatus === 'pending') {
    alerts.push({
      type: 'warning',
      message: 'Library clearance pending - may affect report card access',
      icon: <Info size={18} />,
    });
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header Section - Enhanced with animated gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-10 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                  <BookOpen size={32} className="drop-shadow-lg" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">My Library Account</h1>
              </div>
              <p className="text-white/90 text-sm md:text-base ml-1">Track your issued books and borrowing history</p>
            </div>
            
            {/* Student Info - Enhanced card */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 space-y-2 border border-white/30 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <User size={16} />
                </div>
                <span className="text-sm font-semibold">{studentInfo.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Hash size={16} />
                </div>
                <span className="text-sm font-medium">{studentInfo.studentId}</span>
              </div>
            </div>
          </div>

          {/* Academic Year Selector - Enhanced */}
          <div className="mt-6">
            <label className="text-sm text-white/80 mb-2 block font-medium">Academic Year / Term</label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition-all hover:bg-white/30 cursor-pointer shadow-lg"
            >
              <option value="2025-2026" className="text-slate-800">2025-2026</option>
              <option value="2024-2025" className="text-slate-800">2024-2025</option>
              <option value="2023-2024" className="text-slate-800">2023-2024</option>
            </select>
          </div>
        </div>
      </div>

      {/* Alerts Section - Enhanced with better animations */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                alert.type === 'error' 
                  ? 'bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200' 
                  : 'bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200'
              }`}
            >
              <div className={`p-2 rounded-xl ${alert.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                {alert.icon}
              </div>
              <p className={`text-sm font-semibold flex-1 ${
                alert.type === 'error' ? 'text-red-900' : 'text-orange-900'
              }`}>
                {alert.message}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Account Summary Panel - Premium redesign */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Trophy className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Account Summary</h2>
            <Sparkles className="text-yellow-500 ml-auto" size={20} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Total Books - Enhanced */}
            <div 
              className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCard('books')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <BookOpen size={24} />
                  </div>
                  <div className="text-4xl font-bold drop-shadow-lg">{issuedBooks.length}</div>
                </div>
                <p className="text-sm text-white/90 font-medium">Currently Issued</p>
                <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full transition-all duration-500" style={{ width: hoveredCard === 'books' ? '100%' : '60%' }}></div>
                </div>
              </div>
            </div>

            {/* Overdue Count - Enhanced */}
            <div 
              className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
                overdueInfo.count > 0 
                  ? 'bg-gradient-to-br from-red-500 via-rose-600 to-orange-600' 
                  : 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600'
              }`}
              onMouseEnter={() => setHoveredCard('overdue')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <AlertCircle size={24} />
                  </div>
                  <div className="text-4xl font-bold drop-shadow-lg">{overdueInfo.count}</div>
                </div>
                <p className="text-sm text-white/90 font-medium">Overdue Books</p>
                <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full transition-all duration-500" style={{ width: hoveredCard === 'overdue' ? '100%' : '40%' }}></div>
                </div>
              </div>
            </div>

            {/* Total Fine - Enhanced */}
            <div 
              className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
                overdueInfo.fineAmount > 0 
                  ? 'bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-600' 
                  : 'bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600'
              }`}
              onMouseEnter={() => setHoveredCard('fine')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-2xl font-bold">₹</span>
                  </div>
                  <div className="text-4xl font-bold drop-shadow-lg">{overdueInfo.fineAmount}</div>
                </div>
                <p className="text-sm text-white/90 font-medium">Fine Amount</p>
                <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full transition-all duration-500" style={{ width: hoveredCard === 'fine' ? '100%' : '30%' }}></div>
                </div>
              </div>
            </div>

            {/* Clearance Status - Enhanced */}
            <div 
              className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
                overdueInfo.clearanceStatus === 'cleared' 
                  ? 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600' 
                  : 'bg-gradient-to-br from-orange-500 via-amber-600 to-red-600'
              }`}
              onMouseEnter={() => setHoveredCard('clearance')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {overdueInfo.clearanceStatus === 'cleared' ? (
                      <CheckCircle size={24} />
                    ) : (
                      <XCircle size={24} />
                    )}
                  </div>
                  <div className="text-4xl font-bold drop-shadow-lg">
                    {overdueInfo.clearanceStatus === 'cleared' ? '✓' : '✗'}
                  </div>
                </div>
                <p className="text-sm text-white/90 font-medium">
                  {overdueInfo.clearanceStatus === 'cleared' ? 'Cleared' : 'Pending Dues'}
                </p>
                <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full transition-all duration-500" style={{ width: hoveredCard === 'clearance' ? '100%' : '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Issued Books Section - Premium redesign */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl -z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Currently Issued Books</h2>
            <div className="ml-auto px-4 py-2 bg-blue-50 rounded-xl border border-blue-200">
              <span className="text-sm font-bold text-blue-700">{issuedBooks.length} Books</span>
            </div>
          </div>

          {/* Desktop Table View - Enhanced */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Book Title</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Author</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Issue Date</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Due Date</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-700 uppercase tracking-wide">Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {issuedBooks
                  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                  .map((book) => {
                    const badge = getStatusBadge(book);
                    return (
                      <tr 
                        key={book.id} 
                        className={`hover:bg-slate-50 transition-all duration-200 ${
                          book.status === 'overdue' ? 'bg-red-50/50 hover:bg-red-100/50' : ''
                        }`}
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <BookOpen size={16} className="text-blue-600" />
                            </div>
                            <p className="font-bold text-slate-800">{book.bookTitle}</p>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-slate-600 font-medium">{book.author}</td>
                        <td className="py-5 px-6 text-slate-600">{formatDate(book.issueDate)}</td>
                        <td className="py-5 px-6">
                          <span className="font-semibold text-slate-700">{formatDate(book.dueDate)}</span>
                        </td>
                        <td className="py-5 px-6">
                          <span className={`${badge.bg} ${badge.text} px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-md`}>
                            {badge.icon}
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          {book.status === 'overdue' ? (
                            <div className="flex items-center gap-2">
                              <TrendingUp size={16} className="text-red-500" />
                              <span className="text-red-700 font-bold">+{book.daysOverdue} days</span>
                            </div>
                          ) : (
                            <span className={`${
                              book.status === 'dueSoon' ? 'text-orange-700' : 'text-green-700'
                            } font-bold flex items-center gap-2`}>
                              <Clock size={16} />
                              {book.daysRemaining} days
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View - Enhanced */}
          <div className="md:hidden space-y-4">
            {issuedBooks
              .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
              .map((book) => {
                const badge = getStatusBadge(book);
                return (
                  <div
                    key={book.id}
                    className={`border-2 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      book.status === 'overdue' 
                        ? 'border-red-300 bg-gradient-to-br from-red-50 to-rose-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-blue-100 rounded-xl">
                          <BookOpen size={20} className="text-blue-600" />
                        </div>
                        <h3 className="font-bold text-slate-800 text-lg leading-tight">{book.bookTitle}</h3>
                      </div>
                      <span className={`${badge.bg} ${badge.text} px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-md`}>
                        {badge.icon}
                        {badge.label}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-600 font-medium mb-4 ml-11">{book.author}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="text-xs text-slate-500 mb-1 font-medium">Issue Date</p>
                        <p className="text-sm font-bold text-slate-700">{formatDate(book.issueDate)}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="text-xs text-slate-500 mb-1 font-medium">Due Date</p>
                        <p className="text-sm font-bold text-slate-700">{formatDate(book.dueDate)}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t-2 border-slate-200">
                      {book.status === 'overdue' ? (
                        <div className="flex items-center gap-2">
                          <TrendingUp size={18} className="text-red-600" />
                          <p className="text-sm font-bold text-red-700">
                            Overdue by {book.daysOverdue} day{book.daysOverdue !== 1 ? 's' : ''}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Clock size={18} className={book.status === 'dueSoon' ? 'text-orange-600' : 'text-green-600'} />
                          <p className={`text-sm font-bold ${
                            book.status === 'dueSoon' ? 'text-orange-700' : 'text-green-700'
                          }`}>
                            {book.daysRemaining} day{book.daysRemaining !== 1 ? 's' : ''} remaining
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Borrowing History Section - Premium redesign */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 overflow-hidden">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
              <Clock className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Borrowing History</h2>
            <div className="px-3 py-1 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-xs font-bold text-purple-700">{borrowingHistory.length} Records</span>
            </div>
          </div>
          <div className="p-3 hover:bg-slate-100 rounded-2xl transition-all duration-200 group-hover:scale-110">
            {showHistory ? (
              <ChevronUp className="text-slate-600" size={24} />
            ) : (
              <ChevronDown className="text-slate-600" size={24} />
            )}
          </div>
        </button>

        {showHistory && (
          <div className="space-y-3 mt-6">
            {borrowingHistory.map((record, index) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border border-slate-200 hover:shadow-md group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <BookOpen size={18} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 mb-1 group-hover:text-purple-700 transition-colors">{record.bookTitle}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Issued: {formatDate(record.issueDate)}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle size={12} />
                        Returned: {formatDate(record.returnDate)}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-4 py-2 rounded-xl text-xs font-bold shadow-md ${
                    record.status === 'returnedOnTime'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                  }`}
                >
                  {record.status === 'returnedOnTime' ? '✓ On Time' : '⚠ Late'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Informational Note - Premium redesign */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
            <Info className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Important Information</h3>
            <p className="text-sm text-blue-800 font-medium leading-relaxed">
              Library dues must be cleared before report card release, exams, or withdrawal. 
              Please return overdue books or contact the librarian for assistance.
            </p>
          </div>
          <Sparkles className="text-blue-400" size={24} />
        </div>
      </div>
    </div>
  );
};

export default LibraryAccount;
