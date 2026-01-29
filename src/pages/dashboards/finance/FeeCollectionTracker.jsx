import React, { useState } from 'react';
import { 
  TrendingUp, AlertTriangle, Bell, Download, Filter,
  Mail, Phone, CheckCircle, Clock, XCircle, Send,
  BarChart3, Users, DollarSign, Calendar, Eye, RefreshCw
} from 'lucide-react';

/**
 * Screen 4: Fee Collection & Defaulter Tracker
 * Purpose: Monitor fee collection trends and overdue accounts
 * Widgets:
 * - Term-wise collection bar chart
 * - Fee Due List (sortable by student, class, or amount)
 * - Automatic reminders to parents for pending dues
 * - "Follow-up Status" tracker (Sent/Replied/Paid)
 * Integration: Finance Module + Notification API + Parent App Sync
 * Output: Generates actionable defaulter reports for each class teacher and admin
 */

import Pagination from '../../../components/common/Pagination';

const FeeCollectionTracker = () => {
  const [sortBy, setSortBy] = useState('amount'); // student, class, amount
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Defaulters', value: '128', icon: AlertTriangle, gradient: 'from-red-400 to-pink-500', change: '+12 this week' },
    { label: 'Total Overdue', value: '₹8,45,200', icon: DollarSign, gradient: 'from-orange-400 to-yellow-500', change: '10.3% of total' },
    { label: 'Reminders Sent', value: '245', icon: Bell, gradient: 'from-blue-400 to-cyan-500', change: 'This month' },
    { label: 'Resolved', value: '87', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: '35.5% success' },
  ];

  // Term-wise collection data
  const termWiseCollection = [
    { term: 'Term 1', collected: 45.6, pending: 8.2, target: 53.8, percentage: 84.8 },
    { term: 'Term 2', collected: 38.4, pending: 12.5, target: 50.9, percentage: 75.4 },
    { term: 'Term 3', collected: 28.7, pending: 15.8, target: 44.5, percentage: 64.5 },
    { term: 'Annual Fee', collected: 10.8, pending: 6.2, target: 17.0, percentage: 63.5 },
  ];

  // Fee defaulters list
  const defaulters = [
    {
      id: 1,
      studentName: 'Rahul Verma',
      studentId: 'STU-2024-1234',
      grade: 'Grade 10',
      parentName: 'Mr. Suresh Verma',
      parentContact: '+91-9876543210',
      parentEmail: 'suresh.v@email.com',
      totalDue: 42000,
      dueDate: '2024-01-15',
      daysOverdue: 5,
      lastReminder: '2024-01-18',
      followUpStatus: 'Sent',
      reminderCount: 3,
      classTeacher: 'Mrs. Sharma',
    },
    {
      id: 2,
      studentName: 'Priya Singh',
      studentId: 'STU-2024-2345',
      grade: 'Grade 11',
      parentName: 'Mrs. Anjali Singh',
      parentContact: '+91-9876543211',
      parentEmail: 'anjali.s@email.com',
      totalDue: 38500,
      dueDate: '2024-01-10',
      daysOverdue: 10,
      lastReminder: '2024-01-19',
      followUpStatus: 'Replied',
      reminderCount: 5,
      classTeacher: 'Mr. Kumar',
    },
    {
      id: 3,
      studentName: 'Amit Patel',
      studentId: 'STU-2024-3456',
      grade: 'Grade 9',
      parentName: 'Mr. Rajesh Patel',
      parentContact: '+91-9876543212',
      parentEmail: 'rajesh.p@email.com',
      totalDue: 35000,
      dueDate: '2024-01-12',
      daysOverdue: 8,
      lastReminder: '2024-01-17',
      followUpStatus: 'Paid',
      reminderCount: 2,
      classTeacher: 'Mrs. Gupta',
    },
    {
      id: 4,
      studentName: 'Sneha Reddy',
      studentId: 'STU-2024-4567',
      grade: 'Grade 12',
      parentName: 'Dr. Ramesh Reddy',
      parentContact: '+91-9876543213',
      parentEmail: 'ramesh.r@email.com',
      totalDue: 48500,
      dueDate: '2024-01-08',
      daysOverdue: 12,
      lastReminder: '2024-01-20',
      followUpStatus: 'Sent',
      reminderCount: 6,
      classTeacher: 'Mr. Desai',
    },
    {
      id: 5,
      studentName: 'Arjun Mehta',
      studentId: 'STU-2024-5678',
      grade: 'Grade 10',
      parentName: 'Mrs. Kavita Mehta',
      parentContact: '+91-9876543214',
      parentEmail: 'kavita.m@email.com',
      totalDue: 40000,
      dueDate: '2024-01-14',
      daysOverdue: 6,
      lastReminder: '2024-01-19',
      followUpStatus: 'Replied',
      reminderCount: 4,
      classTeacher: 'Mrs. Sharma',
    },
  ];

  const getFollowUpStatusColor = (status) => {
    switch (status) {
      case 'Sent': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Replied': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getFollowUpIcon = (status) => {
    switch (status) {
      case 'Sent': return <Send className="w-3 h-3" />;
      case 'Replied': return <Mail className="w-3 h-3" />;
      case 'Paid': return <CheckCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getMaxCollection = () => {
    return Math.max(...termWiseCollection.map(t => t.target));
  };

  // Sort defaulters
  const sortedDefaulters = [...defaulters].sort((a, b) => {
    switch (sortBy) {
      case 'student':
        return a.studentName.localeCompare(b.studentName);
      case 'class':
        return a.grade.localeCompare(b.grade);
      case 'amount':
        return b.totalDue - a.totalDue;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Fee Collection & Defaulter Tracker
              </h1>
              <p className="text-gray-600">Monitor fee collection trends and overdue accounts.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Defaulter Report</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>Send Reminders</span>
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

        {/* Term-wise Collection Bar Chart */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Term-wise Collection Overview</h2>
              <p className="text-sm text-gray-600">Collection vs Target analysis (in Lakhs ₹)</p>
            </div>
          </div>

          <div className="space-y-6">
            {termWiseCollection.map((term, index) => {
              const maxValue = getMaxCollection();
              const collectedWidth = (term.collected / maxValue) * 100;
              const pendingWidth = (term.pending / maxValue) * 100;
              
              return (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{term.term}</h3>
                      <p className="text-sm text-gray-600">Target: {formatCurrency(term.target * 100000)}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${term.percentage >= 80 ? 'text-green-600' : term.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {term.percentage}%
                      </p>
                      <p className="text-xs text-gray-500">Collection Rate</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-xs text-gray-600 mb-1">Collected</p>
                      <p className="text-lg font-bold text-green-700">{formatCurrency(term.collected * 100000)}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                      <p className="text-xs text-gray-600 mb-1">Pending</p>
                      <p className="text-lg font-bold text-red-700">{formatCurrency(term.pending * 100000)}</p>
                    </div>
                  </div>

                  <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-l-full transition-all"
                      style={{ width: `${collectedWidth}%` }}
                    ></div>
                    <div 
                      className="absolute top-0 h-full bg-gradient-to-r from-red-400 to-pink-500 transition-all"
                      style={{ left: `${collectedWidth}%`, width: `${pendingWidth}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700 mix-blend-difference">
                        Collected: {term.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sort & Filter Options */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="amount">Amount (High to Low)</option>
                <option value="student">Student Name (A-Z)</option>
                <option value="class">Class/Grade</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Grade Filter</label>
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
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
              <label className="block text-xs font-semibold text-gray-600 mb-2">Follow-up Status</label>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="all">All Status</option>
                <option value="Sent">Sent</option>
                <option value="Replied">Replied</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fee Defaulters List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Fee Defaulters List</h2>
                <p className="text-sm text-gray-600">Students with pending dues requiring follow-up</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {sortedDefaulters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((defaulter) => (
              <div key={defaulter.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-red-100 hover:border-red-200 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getFollowUpStatusColor(defaulter.followUpStatus)}`}>
                        <div className="flex items-center gap-1">
                          {getFollowUpIcon(defaulter.followUpStatus)}
                          <span>{defaulter.followUpStatus}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {defaulter.daysOverdue} days overdue
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {defaulter.reminderCount} reminders
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{defaulter.studentName}</h3>
                    <div className="grid sm:grid-cols-2 gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{defaulter.studentId} • {defaulter.grade}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700">Due: {formatDate(defaulter.dueDate)}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-3">
                      <p className="text-xs text-gray-600 mb-2">Parent Contact Details</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-gray-800">{defaulter.parentName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{defaulter.parentContact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm col-span-2">
                          <Mail className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700">{defaulter.parentEmail}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Class Teacher: <span className="font-semibold text-gray-800">{defaulter.classTeacher}</span></span>
                      <span className="text-gray-600">Last Reminder: <span className="font-semibold text-gray-800">{formatDate(defaulter.lastReminder)}</span></span>
                    </div>
                  </div>

                  <div className="lg:w-64 space-y-3">
                    <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200 text-center">
                      <p className="text-xs text-gray-600 mb-1">Total Due</p>
                      <p className="text-3xl font-bold text-red-600">{formatCurrency(defaulter.totalDue)}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Send Reminder</span>
                        </div>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </button>

                      <button className="w-full px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(sortedDefaulters.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={sortedDefaulters.length}
          />

          {/* Bulk Actions */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span>Send All Reminders</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
            
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email Teachers</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
            
            <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeeCollectionTracker;
