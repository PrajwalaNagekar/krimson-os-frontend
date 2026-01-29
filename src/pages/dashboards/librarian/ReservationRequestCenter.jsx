import React, { useState } from 'react';
import { 
  Clock, CheckCircle, XCircle, Bell, TrendingUp, 
  User, Book, Calendar, Eye, Filter, Download,
  Send, AlertCircle, BarChart3, Award, MessageSquare
} from 'lucide-react';

/**
 * Screen 3: Reservation & Request Center
 * Purpose: Manage book reservations and resource requests
 * Features:
 * - Reservation queue by student ID
 * - Request approval workflow
 * - Notification to student when item available
 * - Summary of most-requested titles
 * Integration: Notification API + Library Database
 */

const ReservationRequestCenter = () => {
  const [selectedTab, setSelectedTab] = useState('pending'); // pending, approved, notified

  // Static data - ready for API integration
  const stats = [
    { label: 'Pending Reservations', value: '24', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: '+5' },
    { label: 'Approved Today', value: '18', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: '+3' },
    { label: 'Notifications Sent', value: '12', icon: Bell, gradient: 'from-blue-400 to-cyan-500', change: '+7' },
    { label: 'Active Requests', value: '67', icon: TrendingUp, gradient: 'from-pink-400 to-purple-500', change: '+8' },
  ];

  // Reservation queue
  const reservationQueue = [
    {
      id: 1,
      bookTitle: 'Introduction to Algorithms',
      bookISBN: '978-0-262-03384-8',
      studentName: 'Sarah Martinez',
      studentId: 'STU-2024-1045',
      studentGrade: 'Grade 12',
      requestDate: '2024-01-18',
      priority: 'high',
      position: 1,
      status: 'Pending',
      expectedAvailable: '2024-01-22',
      contactEmail: 'sarah.m@school.edu',
      contactPhone: '+91-9876543210',
    },
    {
      id: 2,
      bookTitle: 'The Feynman Lectures on Physics',
      bookISBN: '978-0-465-02493-3',
      studentName: 'Michael Brown',
      studentId: 'STU-2024-2156',
      studentGrade: 'Grade 11',
      requestDate: '2024-01-19',
      priority: 'medium',
      position: 3,
      status: 'Pending',
      expectedAvailable: '2024-01-24',
      contactEmail: 'michael.b@school.edu',
      contactPhone: '+91-9876543211',
    },
    {
      id: 3,
      bookTitle: 'Organic Chemistry',
      bookISBN: '978-0-321-80322-1',
      studentName: 'Emily Johnson',
      studentId: 'STU-2024-3089',
      studentGrade: 'Grade 11',
      requestDate: '2024-01-20',
      priority: 'low',
      position: 5,
      status: 'Pending',
      expectedAvailable: '2024-01-25',
      contactEmail: 'emily.j@school.edu',
      contactPhone: '+91-9876543212',
    },
  ];

  // Approved reservations (ready to notify)
  const approvedReservations = [
    {
      id: 1,
      bookTitle: 'Pride and Prejudice',
      bookISBN: '978-0-14-143951-8',
      studentName: 'Lisa Wang',
      studentId: 'STU-2024-4521',
      studentGrade: 'Grade 10',
      approvedDate: '2024-01-20',
      status: 'Ready for Pickup',
      contactEmail: 'lisa.w@school.edu',
      pickupDeadline: '2024-01-23',
    },
    {
      id: 2,
      bookTitle: 'A Brief History of Time',
      bookISBN: '978-0-553-10953-5',
      studentName: 'David Lee',
      studentId: 'STU-2024-5632',
      studentGrade: 'Grade 12',
      approvedDate: '2024-01-20',
      status: 'Ready for Pickup',
      contactEmail: 'david.l@school.edu',
      pickupDeadline: '2024-01-23',
    },
  ];

  // Most requested titles
  const mostRequestedTitles = [
    {
      rank: 1,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0-262-03384-8',
      totalRequests: 45,
      currentStock: 15,
      available: 3,
      trend: '+12',
    },
    {
      rank: 2,
      title: 'The Feynman Lectures on Physics',
      author: 'Richard P. Feynman',
      isbn: '978-0-465-02493-3',
      totalRequests: 38,
      currentStock: 12,
      available: 1,
      trend: '+8',
    },
    {
      rank: 3,
      title: 'Organic Chemistry',
      author: 'Paula Yurkanis Bruice',
      isbn: '978-0-321-80322-1',
      totalRequests: 32,
      currentStock: 18,
      available: 4,
      trend: '+5',
    },
    {
      rank: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0-14-143951-8',
      totalRequests: 28,
      currentStock: 25,
      available: 15,
      trend: '+3',
    },
    {
      rank: 5,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      isbn: '978-0-553-10953-5',
      totalRequests: 24,
      currentStock: 20,
      available: 8,
      trend: '+6',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
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
                Reservation & Request Center
              </h1>
              <p className="text-gray-600">Manage book reservations and resource requests.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
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
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'pending' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Pending Queue ({reservationQueue.length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('approved')}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === 'approved' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Ready for Pickup ({approvedReservations.length})</span>
            </div>
          </button>
        </div>

        {/* Pending Reservation Queue */}
        {selectedTab === 'pending' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Reservation Queue</h2>
                <p className="text-sm text-gray-600">Pending approval sorted by priority</p>
              </div>
            </div>

            <div className="space-y-4">
              {reservationQueue.map((reservation) => (
                <div key={reservation.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(reservation.priority)}`}>
                          {reservation.priority} priority
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          Position #{reservation.position}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Requested {formatDate(reservation.requestDate)}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">{reservation.bookTitle}</h3>
                      <p className="text-sm text-gray-600 mb-3">ISBN: {reservation.bookISBN}</p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{reservation.studentName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Book className="w-4 h-4 text-cyan-500" />
                          <span className="text-gray-700">{reservation.studentId} • {reservation.studentGrade}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-pink-500" />
                          <span className="text-gray-700">Expected: {formatDate(reservation.expectedAvailable)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MessageSquare className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700">{reservation.contactEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>

                    <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4" />
                        <span>Notify Available</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>

                    <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </button>

                    <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Approved Reservations (Ready for Pickup) */}
        {selectedTab === 'approved' && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Ready for Pickup</h2>
                <p className="text-sm text-gray-600">Approved reservations awaiting collection</p>
              </div>
            </div>

            <div className="space-y-4">
              {approvedReservations.map((reservation) => (
                <div key={reservation.id} className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border-2 border-green-200 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {reservation.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          Approved {formatDate(reservation.approvedDate)}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-1">{reservation.bookTitle}</h3>
                      <p className="text-sm text-gray-600 mb-3">ISBN: {reservation.bookISBN}</p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{reservation.studentName} ({reservation.studentId})</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Book className="w-4 h-4 text-cyan-500" />
                          <span className="text-gray-700">{reservation.studentGrade}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-orange-500" />
                          <span className="text-orange-600 font-semibold">
                            Pickup by {formatDate(reservation.pickupDeadline)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MessageSquare className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700">{reservation.contactEmail}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Send Reminder</span>
                        </div>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </button>

                      <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Most Requested Titles */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Most Requested Titles</h2>
              <p className="text-sm text-gray-600">Popular books based on reservation demand</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Rank</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Book Details</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Total Requests</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Stock Status</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Trend</th>
                  <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mostRequestedTitles.map((book) => (
                  <tr key={book.rank} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${book.rank === 1 ? 'from-yellow-400 to-orange-500' : book.rank === 2 ? 'from-gray-300 to-gray-400' : book.rank === 3 ? 'from-orange-300 to-orange-400' : 'from-blue-400 to-cyan-500'} flex items-center justify-center`}>
                        <span className="text-white font-bold">{book.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-gray-800">{book.title}</p>
                      <p className="text-sm text-gray-600">{book.author}</p>
                      <p className="text-xs text-gray-500 font-mono">{book.isbn}</p>
                    </td>
                    <td className="p-4 text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                        {book.totalRequests}
                      </p>
                      <p className="text-xs text-gray-500">requests</p>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-800">{book.available}</span>
                          <span className="text-sm text-gray-500">/ {book.currentStock}</span>
                        </div>
                        <div className="w-24 bg-gray-100 rounded-full h-2">
                          <div 
                            className={`h-full rounded-full ${book.available <= book.currentStock * 0.2 ? 'bg-red-400' : book.available <= book.currentStock * 0.5 ? 'bg-yellow-400' : 'bg-green-400'}`}
                            style={{ width: `${(book.available / book.currentStock) * 100}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs font-semibold ${book.available <= book.currentStock * 0.2 ? 'text-red-600' : book.available <= book.currentStock * 0.5 ? 'text-yellow-600' : 'text-green-600'}`}>
                          {book.available <= book.currentStock * 0.2 ? 'Low Stock' : book.available <= book.currentStock * 0.5 ? 'Medium' : 'Good'}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        {book.trend}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1 ml-auto">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-3 h-3" />
                          <span>View Stats</span>
                        </div>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </button>
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

export default ReservationRequestCenter;
