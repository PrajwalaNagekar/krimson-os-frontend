import React, { useState } from 'react';
import { 
  TrendingUp, AlertTriangle, Award, Download, Filter,
  Book, Users, Calendar, BarChart3, PieChart, LineChart,
  FileText, Clock, CheckCircle, Target, BookOpen, Activity
} from 'lucide-react';

/**
 * Screen 4: Library Reports & Analytics
 * Purpose: Generate usage and resource reports
 * Reports:
 * - Top Borrowed Books
 * - Overdue Trends
 * - Student Reading Frequency Index
 * Integration: Analytics Engine + Library Database
 */

const LibraryReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month'); // week, month, quarter, year
  const [selectedGrade, setSelectedGrade] = useState('all');

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Checkouts', value: '3,241', icon: Book, gradient: 'from-cyan-400 to-blue-500', change: '+12%', period: 'this month' },
    { label: 'Active Readers', value: '847', icon: Users, gradient: 'from-green-400 to-emerald-500', change: '+8%', period: 'this month' },
    { label: 'Avg Books/Student', value: '3.8', icon: BarChart3, gradient: 'from-purple-400 to-pink-500', change: '+0.5', period: 'this month' },
    { label: 'Overdue Rate', value: '4.2%', icon: AlertTriangle, gradient: 'from-orange-400 to-red-500', change: '-1.3%', period: 'this month' },
  ];

  // Top Borrowed Books
  const topBorrowedBooks = [
    {
      rank: 1,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0-262-03384-8',
      category: 'Computer Science',
      totalBorrows: 127,
      currentlyIssued: 12,
      averageReturnTime: '12 days',
      popularGrades: ['Grade 11', 'Grade 12'],
      trend: '+15',
    },
    {
      rank: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isbn: '978-0-14-143951-8',
      category: 'Literature',
      totalBorrows: 98,
      currentlyIssued: 8,
      averageReturnTime: '10 days',
      popularGrades: ['Grade 10', 'Grade 11'],
      trend: '+8',
    },
    {
      rank: 3,
      title: 'The Feynman Lectures on Physics',
      author: 'Richard P. Feynman',
      isbn: '978-0-465-02493-3',
      category: 'Physics',
      totalBorrows: 85,
      currentlyIssued: 10,
      averageReturnTime: '14 days',
      popularGrades: ['Grade 11', 'Grade 12'],
      trend: '+12',
    },
    {
      rank: 4,
      title: 'Organic Chemistry',
      author: 'Paula Yurkanis Bruice',
      isbn: '978-0-321-80322-1',
      category: 'Chemistry',
      totalBorrows: 76,
      currentlyIssued: 13,
      averageReturnTime: '13 days',
      popularGrades: ['Grade 11', 'Grade 12'],
      trend: '+6',
    },
    {
      rank: 5,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      isbn: '978-0-553-10953-5',
      category: 'Science',
      totalBorrows: 68,
      currentlyIssued: 7,
      averageReturnTime: '11 days',
      popularGrades: ['Grade 10', 'Grade 11'],
      trend: '+9',
    },
  ];

  // Overdue Trends
  const overdueTrends = [
    { month: 'Aug', overdueCount: 52, totalIssued: 1245, rate: 4.2 },
    { month: 'Sep', overdueCount: 48, totalIssued: 1298, rate: 3.7 },
    { month: 'Oct', overdueCount: 61, totalIssued: 1356, rate: 4.5 },
    { month: 'Nov', overdueCount: 43, totalIssued: 1289, rate: 3.3 },
    { month: 'Dec', overdueCount: 38, totalIssued: 1187, rate: 3.2 },
    { month: 'Jan', overdueCount: 47, totalIssued: 1421, rate: 3.3 },
  ];

  // Student Reading Frequency Index
  const readingFrequency = [
    {
      grade: 'Grade 9',
      totalStudents: 120,
      activeReaders: 87,
      avgBooksPerStudent: 2.8,
      topCategory: 'Literature',
      readingRate: 72.5,
      trend: 'up',
    },
    {
      grade: 'Grade 10',
      totalStudents: 115,
      activeReaders: 95,
      avgBooksPerStudent: 3.5,
      topCategory: 'Science',
      readingRate: 82.6,
      trend: 'up',
    },
    {
      grade: 'Grade 11',
      totalStudents: 108,
      activeReaders: 92,
      avgBooksPerStudent: 4.2,
      topCategory: 'Computer Science',
      readingRate: 85.2,
      trend: 'up',
    },
    {
      grade: 'Grade 12',
      totalStudents: 102,
      activeReaders: 89,
      avgBooksPerStudent: 4.8,
      topCategory: 'Mathematics',
      readingRate: 87.3,
      trend: 'up',
    },
  ];

  // Category-wise distribution
  const categoryDistribution = [
    { category: 'Computer Science', percentage: 24, color: 'from-cyan-400 to-blue-500' },
    { category: 'Literature', percentage: 22, color: 'from-pink-400 to-purple-500' },
    { category: 'Science', percentage: 18, color: 'from-green-400 to-emerald-500' },
    { category: 'Mathematics', percentage: 15, color: 'from-orange-400 to-yellow-500' },
    { category: 'History', percentage: 12, color: 'from-blue-400 to-cyan-500' },
    { category: 'Others', percentage: 9, color: 'from-gray-400 to-gray-500' },
  ];

  const getMaxOverdue = () => {
    return Math.max(...overdueTrends.map(t => t.overdueCount));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Library Reports & Analytics
              </h1>
              <p className="text-gray-600">Generate usage and resource reports with insights.</p>
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
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') || stat.change.startsWith('-') && parseFloat(stat.change) < 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.period}</p>
            </div>
          ))}
        </div>

        {/* Period & Grade Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Report Period</label>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Filter by Grade</label>
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Grades</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>
        </div>

        {/* Top Borrowed Books */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Top Borrowed Books</h2>
                <p className="text-sm text-gray-600">Most popular titles this month</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Rank</th>
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Book Details</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Total Borrows</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Currently Out</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Avg Return Time</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topBorrowedBooks.map((book) => (
                  <tr key={book.rank} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${book.rank === 1 ? 'from-yellow-400 to-orange-500' : book.rank === 2 ? 'from-gray-300 to-gray-400' : book.rank === 3 ? 'from-orange-300 to-orange-400' : 'from-blue-400 to-cyan-500'} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-lg">{book.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
                          <Book className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{book.title}</p>
                          <p className="text-sm text-gray-600">{book.author}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                              {book.category}
                            </span>
                            {book.popularGrades.map((grade, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                        {book.totalBorrows}
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <p className="text-lg font-bold text-gray-800">{book.currentlyIssued}</p>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-700">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>{book.averageReturnTime}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        {book.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Overdue Trends */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Overdue Trends</h2>
                <p className="text-sm text-gray-600">6-month overdue analysis</p>
              </div>
            </div>

            <div className="space-y-3">
              {overdueTrends.map((trend, index) => {
                const maxValue = getMaxOverdue();
                const barWidth = (trend.overdueCount / maxValue) * 100;
                
                return (
                  <div key={index} className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-700">{trend.month}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-600">{trend.overdueCount} / {trend.totalIssued}</span>
                        <span className={`text-sm font-bold ${trend.rate >= 4.0 ? 'text-red-600' : trend.rate >= 3.5 ? 'text-orange-600' : 'text-green-600'}`}>
                          {trend.rate}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${trend.rate >= 4.0 ? 'bg-gradient-to-r from-red-400 to-red-500' : trend.rate >= 3.5 ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-green-400 to-green-500'}`}
                        style={{ width: `${barWidth}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
              <p className="text-sm text-gray-700">
                <strong className="text-orange-700">Insight:</strong> Overdue rates have decreased by 1.3% this month. Continue sending timely reminders to maintain this trend.
              </p>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Category Distribution</h2>
                <p className="text-sm text-gray-600">Borrowing by subject area</p>
              </div>
            </div>

            <div className="space-y-3">
              {categoryDistribution.map((cat, index) => (
                <div key={index} className="p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800">{cat.category}</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                      {cat.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Reading Frequency Index */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Student Reading Frequency Index</h2>
                <p className="text-sm text-gray-600">Reading engagement by grade level</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Full Report</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {readingFrequency.map((data, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{data.grade}</h3>
                  <span className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Reading Rate</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {data.readingRate}%
                    </p>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                        style={{ width: `${data.readingRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-500">Active</p>
                      <p className="font-bold text-gray-800">{data.activeReaders}/{data.totalStudents}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Avg Books</p>
                      <p className="font-bold text-gray-800">{data.avgBooksPerStudent}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Top Category</p>
                    <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                      {data.topCategory}
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

export default LibraryReports;
