/**
 * @component HRAdmin
 * @description Staff & HR Administration Dashboard - Comprehensive Staff Management
 */
import React, { useState } from 'react';
import { 
  Users, Phone, Mail, Award, Search, Filter, Download, UserPlus,
  Briefcase, Clock, Calendar, CheckCircle, XCircle, AlertCircle,
  TrendingUp, FileText, UserCheck, Activity, Settings, Eye,
  BarChart3, ClipboardCheck, UserX, Coffee, Fingerprint, ChevronDown
} from 'lucide-react';

const HRAdmin = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Static Staff Data
  const staffData = [
    {
      id: 'EMP001',
      name: 'Dr. Sarah Johnson',
      role: 'Senior Mathematics Teacher',
      department: 'Mathematics',
      subjects: ['Advanced Math', 'Calculus', 'Statistics'],
      status: 'Active',
      email: 'sarah.johnson@school.edu',
      phone: '+1 234-567-8901',
      joinDate: '2018-08-15',
      attendance: '96.5%',
      todayStatus: 'Present',
      lastCheckIn: '08:45 AM',
      performanceRating: 4.8,
      leaveBalance: 12,
      contractType: 'Permanent',
      salary: '₹85,000',
      biometricId: 'BIO-001'
    },
    {
      id: 'EMP002',
      name: 'Michael Chen',
      role: 'Physics & Chemistry Teacher',
      department: 'Science',
      subjects: ['Physics', 'Chemistry', 'Lab Work'],
      status: 'On Leave',
      email: 'michael.chen@school.edu',
      phone: '+1 234-567-8902',
      joinDate: '2019-01-10',
      attendance: '94.2%',
      todayStatus: 'On Leave',
      lastCheckIn: '-',
      performanceRating: 4.6,
      leaveBalance: 5,
      contractType: 'Permanent',
      salary: '₹78,000',
      biometricId: 'BIO-002'
    },
    {
      id: 'EMP003',
      name: 'Emily Rodriguez',
      role: 'English Literature Teacher',
      department: 'Languages',
      subjects: ['English', 'Literature', 'Creative Writing'],
      status: 'Active',
      email: 'emily.rodriguez@school.edu',
      phone: '+1 234-567-8903',
      joinDate: '2020-03-22',
      attendance: '98.1%',
      todayStatus: 'Present',
      lastCheckIn: '08:30 AM',
      performanceRating: 4.9,
      leaveBalance: 15,
      contractType: 'Permanent',
      salary: '₹72,000',
      biometricId: 'BIO-003'
    },
    {
      id: 'EMP004',
      name: 'Rajesh Kumar',
      role: 'Computer Science Teacher',
      department: 'Technology',
      subjects: ['Programming', 'Web Dev', 'Database'],
      status: 'Active',
      email: 'rajesh.kumar@school.edu',
      phone: '+1 234-567-8904',
      joinDate: '2017-06-12',
      attendance: '95.8%',
      todayStatus: 'Present',
      lastCheckIn: '08:50 AM',
      performanceRating: 4.7,
      leaveBalance: 8,
      contractType: 'Permanent',
      salary: '₹82,000',
      biometricId: 'BIO-004'
    },
    {
      id: 'EMP005',
      name: 'Lisa Thompson',
      role: 'Physical Education Teacher',
      department: 'Sports',
      subjects: ['Physical Ed', 'Sports Science', 'Health'],
      status: 'Active',
      email: 'lisa.thompson@school.edu',
      phone: '+1 234-567-8905',
      joinDate: '2021-07-01',
      attendance: '97.3%',
      todayStatus: 'Present',
      lastCheckIn: '08:15 AM',
      performanceRating: 4.5,
      leaveBalance: 18,
      contractType: 'Contract',
      salary: '₹65,000',
      biometricId: 'BIO-005'
    },
    {
      id: 'EMP006',
      name: 'David Park',
      role: 'History & Geography Teacher',
      department: 'Social Studies',
      subjects: ['History', 'Geography', 'Civics'],
      status: 'Contract Ended',
      email: 'david.park@school.edu',
      phone: '+1 234-567-8906',
      joinDate: '2022-01-15',
      attendance: '92.5%',
      todayStatus: 'Inactive',
      lastCheckIn: '-',
      performanceRating: 4.3,
      leaveBalance: 0,
      contractType: 'Contract',
      salary: '₹58,000',
      biometricId: 'BIO-006'
    }
  ];

  // Leave Requests Data
  const leaveRequests = [
    { id: 'LR001', employeeId: 'EMP002', name: 'Michael Chen', type: 'Sick Leave', from: '2026-01-20', to: '2026-01-22', days: 3, status: 'Approved', reason: 'Medical appointment' },
    { id: 'LR002', employeeId: 'EMP001', name: 'Dr. Sarah Johnson', type: 'Casual Leave', from: '2026-01-25', to: '2026-01-26', days: 2, status: 'Pending', reason: 'Personal work' },
    { id: 'LR003', employeeId: 'EMP004', name: 'Rajesh Kumar', type: 'Privilege Leave', from: '2026-02-01', to: '2026-02-05', days: 5, status: 'Pending', reason: 'Family vacation' },
  ];

  // Quick Stats
  const stats = {
    totalStaff: staffData.length,
    activeToday: staffData.filter(s => s.todayStatus === 'Present').length,
    onLeave: staffData.filter(s => s.status === 'On Leave').length,
    pendingApprovals: leaveRequests.filter(r => r.status === 'Pending').length,
    avgAttendance: '96.2%',
    biometricSync: 'Synced 2 mins ago'
  };

  // Filter staff based on selected filters
  const filteredStaff = staffData.filter(staff => {
    if (selectedFilter !== 'all' && staff.status !== selectedFilter) return false;
    if (selectedDepartment !== 'all' && staff.department !== selectedDepartment) return false;
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'On Leave':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Contract Ended':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return <CheckCircle size={14} />;
      case 'On Leave':
        return <Coffee size={14} />;
      case 'Contract Ended':
        return <UserX size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

  const getTodayStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'text-green-600 bg-green-50';
      case 'On Leave':
        return 'text-amber-600 bg-amber-50';
      case 'Inactive':
        return 'text-slate-400 bg-slate-50';
      default:
        return 'text-slate-600 bg-slate-50';
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
                  Staff & HR Administration
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Users size={12} /> {stats.totalStaff} Total Staff
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Staff & HR Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Oversee teacher records, attendance tracking, leave management, and performance data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform"><Users size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.totalStaff}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Staff</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-100 text-green-600 rounded-xl group-hover:scale-110 transition-transform"><CheckCircle size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.activeToday}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Present Today</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-600 rounded-xl group-hover:scale-110 transition-transform"><Coffee size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.onLeave}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">On Leave</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform"><ClipboardCheck size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.pendingApprovals}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Pending Leaves</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-100 text-cyan-600 rounded-xl group-hover:scale-110 transition-transform"><Activity size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stats.avgAttendance}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg Attendance</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform"><Fingerprint size={20} /></div>
            <div>
              <p className="text-sm font-bold text-slate-800">Synced</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Biometric</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          ACTION BUTTONS & FILTERS
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <UserPlus size={18} />
              Add Staff
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
            <div className="flex items-center gap-2">
              <Fingerprint size={18} />
              Sync Biometric
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export Report
            </div>
            <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
          </button>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search staff..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
            />
          </div>
        </div>
      </div>

      {/* Filters Row */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Status</label>
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
              <option value="Contract Ended">Contract Ended</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Department</label>
            <select 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="all">All Departments</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="Languages">Languages</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Social Studies">Social Studies</option>
            </select>
          </div>
          <div className="flex items-end">
            <button 
              onClick={() => { setSelectedFilter('all'); setSelectedDepartment('all'); }}
              className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-colors w-full"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          STAFF DIRECTORY GRID
          ======================================== */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Digital Staff Directory</h2>
          <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{filteredStaff.length} Members</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Decoration */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 opacity-60" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border ${getStatusColor(member.status)}`}>
                      {getStatusIcon(member.status)}
                      {member.status}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${getTodayStatusColor(member.todayStatus)}`}>
                      {member.todayStatus}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                    <Briefcase size={12} />
                    {member.role}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span className="font-bold">ID:</span> {member.id}
                  </div>
                </div>

                {/* Department & Subjects */}
                <div className="mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">Department</span>
                    <span className="text-xs font-bold text-slate-700">{member.department}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.subjects.map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold border border-blue-100">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Attendance & Performance */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Activity size={12} className="text-green-600" />
                      <span className="text-xs font-bold text-green-600">Attendance</span>
                    </div>
                    <p className="text-lg font-bold text-green-700">{member.attendance}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Award size={12} className="text-purple-600" />
                      <span className="text-xs font-bold text-purple-600">Rating</span>
                    </div>
                    <p className="text-lg font-bold text-purple-700">{member.performanceRating}/5</p>
                  </div>
                </div>

                {/* Contact & Details */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail size={12} className="text-slate-400" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone size={12} className="text-slate-400" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-slate-400" />
                      <span>Check-in: {member.lastCheckIn}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-xs hover:bg-blue-100 transition-all flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      View Profile
                    </div>
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                  <button className="flex-1 py-2 bg-slate-50 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-100 transition-all flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      HR Report
                    </div>
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-700">No staff found</h3>
            <p className="text-slate-500 max-w-xs mx-auto mt-1">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      {/* ========================================
          LEAVE MANAGEMENT & APPROVAL WORKFLOW
          ======================================== */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">Leave Management</h2>
            <p className="text-sm text-slate-500">Review and approve leave requests</p>
          </div>
          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold border border-amber-200">
            {stats.pendingApprovals} Pending
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Employee</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Duration</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Days</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Reason</th>
                <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leaveRequests.map((request) => (
                <tr key={request.id} className="hover:bg-blue-50/20 transition-colors">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{request.name}</p>
                      <p className="text-xs text-slate-400">{request.employeeId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold border border-blue-100">
                      {request.type}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-semibold text-slate-600">
                      <p>{request.from}</p>
                      <p className="text-slate-400">to {request.to}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-slate-700">{request.days} days</span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-slate-600 max-w-xs truncate">{request.reason}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      request.status === 'Approved' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-amber-100 text-amber-700 border border-amber-200'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    {request.status === 'Pending' ? (
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
                      <span className="text-xs text-slate-400">No action needed</span>
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

export default HRAdmin;
