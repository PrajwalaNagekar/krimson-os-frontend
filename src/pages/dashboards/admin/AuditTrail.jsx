/**
 * @component AuditTrail
 * @description Audit Trail & Activity Log - Complete system activity tracking
 */
import React, { useState } from 'react';
import { 
  Shield, Activity, Clock, User, FileText, Download, Filter, Search,
  Edit, Trash2, Plus, Eye, CheckCircle, XCircle, AlertTriangle,
  Calendar, Users, Database, Settings, Lock, Unlock, RefreshCcw,
  BarChart3, TrendingUp, Package, Book, DollarSign, UserCheck,
  Mail, Smartphone, Bell, FileCheck, Award, AlertCircle, Zap, ChevronLeft, ChevronRight
} from 'lucide-react';

const AuditTrail = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const [searchQuery, setSearchQuery] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Activity Log Data
  const activityLogs = [
    {
      id: 'LOG001',
      timestamp: '2026-01-20 09:45:23',
      user: 'Dr. Sarah Johnson',
      userId: 'EMP001',
      department: 'Administration',
      action: 'CREATE',
      module: 'Staff Management',
      description: 'Created new staff record for John Williams',
      ipAddress: '192.168.1.45',
      details: 'Staff ID: EMP089, Department: Mathematics',
      pdpaRelevant: false,
      severity: 'INFO'
    },
    {
      id: 'LOG002',
      timestamp: '2026-01-20 09:32:15',
      user: 'Michael Chen',
      userId: 'EMP002',
      department: 'Finance',
      action: 'EDIT',
      module: 'Fee Management',
      description: 'Updated fee structure for Grade 8',
      ipAddress: '192.168.1.67',
      details: 'Changed tuition fee from ₹42,000 to ₹45,000',
      pdpaRelevant: false,
      severity: 'WARNING'
    },
    {
      id: 'LOG003',
      timestamp: '2026-01-20 09:18:47',
      user: 'Emily Rodriguez',
      userId: 'EMP003',
      department: 'Academic',
      action: 'DELETE',
      module: 'Class Management',
      description: 'Removed Grade 7C section',
      ipAddress: '192.168.1.89',
      details: 'Section removed due to low enrollment (12 students)',
      pdpaRelevant: false,
      severity: 'CRITICAL'
    },
    {
      id: 'LOG004',
      timestamp: '2026-01-20 08:55:12',
      user: 'System Admin',
      userId: 'SYSTEM',
      department: 'IT Department',
      action: 'CREATE',
      module: 'User Management',
      description: 'Generated new API key for mobile app integration',
      ipAddress: '192.168.1.1',
      details: 'API Key: ****-****-****-4f2a, Scope: Parent App',
      pdpaRelevant: true,
      severity: 'INFO'
    },
    {
      id: 'LOG005',
      timestamp: '2026-01-20 08:42:38',
      user: 'Rajesh Kumar',
      userId: 'EMP004',
      department: 'HR',
      action: 'EDIT',
      module: 'Attendance',
      description: 'Corrected attendance record for Grade 10A',
      ipAddress: '192.168.1.102',
      details: 'Changed status from Absent to Present for STU-2024-145',
      pdpaRelevant: false,
      severity: 'WARNING'
    },
    {
      id: 'LOG006',
      timestamp: '2026-01-20 08:15:29',
      user: 'Lisa Thompson',
      userId: 'EMP005',
      department: 'Communication',
      action: 'CREATE',
      module: 'Notifications',
      description: 'Sent mass notification about Sports Day',
      ipAddress: '192.168.1.78',
      details: 'Recipients: 550 (Parents + Students), Channels: SMS, Email, App',
      pdpaRelevant: true,
      severity: 'INFO'
    },
    {
      id: 'LOG007',
      timestamp: '2026-01-20 07:58:14',
      user: 'David Park',
      userId: 'EMP006',
      department: 'Academic',
      action: 'EDIT',
      module: 'Gradebook',
      description: 'Updated exam scores for Grade 9B',
      ipAddress: '192.168.1.115',
      details: 'Subject: Physics, Students affected: 45',
      pdpaRelevant: false,
      severity: 'INFO'
    },
    {
      id: 'LOG008',
      timestamp: '2026-01-20 07:32:05',
      user: 'Finance Manager',
      userId: 'EMP007',
      department: 'Finance',
      action: 'DELETE',
      module: 'Financial Records',
      description: 'Archived Q3 2025 payment records',
      ipAddress: '192.168.1.56',
      details: 'Moved 1,245 payment records to archive storage',
      pdpaRelevant: true,
      severity: 'WARNING'
    },
    {
      id: 'LOG009',
      timestamp: '2026-01-19 16:45:22',
      user: 'System Admin',
      userId: 'SYSTEM',
      department: 'IT Department',
      action: 'CREATE',
      module: 'System Settings',
      description: 'Automated backup completed successfully',
      ipAddress: '192.168.1.1',
      details: 'Backup size: 14.2 GB, Duration: 45 minutes',
      pdpaRelevant: false,
      severity: 'INFO'
    },
    {
      id: 'LOG010',
      timestamp: '2026-01-19 15:20:18',
      user: 'Admin Office',
      userId: 'EMP008',
      department: 'Administration',
      action: 'EDIT',
      module: 'Student Records',
      description: 'Updated student contact information',
      ipAddress: '192.168.1.92',
      details: 'Student: STU-2024-234, Changed parent mobile number',
      pdpaRelevant: true,
      severity: 'WARNING'
    }
  ];

  // Weekly Summary Statistics
  const weeklySummary = {
    totalEvents: 1247,
    createEvents: 456,
    editEvents: 623,
    deleteEvents: 168,
    pdpaRelevant: 89,
    criticalEvents: 12,
    warningEvents: 234,
    infoEvents: 1001,
    topUsers: [
      { name: 'System Admin', count: 234 },
      { name: 'Dr. Sarah Johnson', count: 189 },
      { name: 'Michael Chen', count: 156 }
    ],
    topModules: [
      { name: 'Student Records', count: 345 },
      { name: 'Attendance', count: 289 },
      { name: 'Fee Management', count: 178 }
    ]
  };

  // Departments
  const departments = [
    'Administration',
    'Academic',
    'Finance',
    'HR',
    'IT Department',
    'Communication'
  ];

  // Users (simplified list)
  const users = [
    'Dr. Sarah Johnson',
    'Michael Chen',
    'Emily Rodriguez',
    'Rajesh Kumar',
    'Lisa Thompson',
    'David Park',
    'System Admin'
  ];

  const getActionColor = (action) => {
    switch (action) {
      case 'CREATE':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'EDIT':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'DELETE':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'WARNING':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'INFO':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getActionIcon = (action) => {
    switch (action) {
      case 'CREATE':
        return <Plus size={16} className="text-green-600" />;
      case 'EDIT':
        return <Edit size={16} className="text-blue-600" />;
      case 'DELETE':
        return <Trash2 size={16} className="text-red-600" />;
      default:
        return <Activity size={16} className="text-slate-600" />;
    }
  };

  const filteredLogs = activityLogs.filter(log => {
    const matchesFilter = selectedFilter === 'all' || log.action === selectedFilter;
    const matchesUser = selectedUser === 'all' || log.user === selectedUser;
    const matchesDepartment = selectedDepartment === 'all' || log.department === selectedDepartment;
    const matchesSearch = log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesUser && matchesDepartment && matchesSearch;
    return matchesFilter && matchesUser && matchesDepartment && matchesSearch;
  });

  // Pagination Logic
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, selectedUser, selectedDepartment, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

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
                  System Integrity
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Shield size={12} className="text-green-300" />
                  Audit Active
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Audit Trail & Activity Log
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Complete system activity tracking with PDPA compliance and non-repudiation for regulatory audits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Activity size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.totalEvents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Events</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><Plus size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.createEvents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Created</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Edit size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.editEvents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Edited</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><Trash2 size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.deleteEvents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Deleted</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform"><Lock size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.pdpaRelevant}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">PDPA Events</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><AlertCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{weeklySummary.criticalEvents}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Critical</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><CheckCircle size={16} /></div>
          </div>
          <p className="text-sm font-bold text-green-800">99.8%</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Integrity</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          WEEKLY AUDIT SUMMARY
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Users */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Users className="text-blue-500" size={20} />
                Most Active Users
              </h3>
              <p className="text-sm text-slate-500">This week</p>
            </div>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Download size={14} />
                Export
              </div>
              <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
            </button>
          </div>

          <div className="space-y-3">
            {weeklySummary.topUsers.map((user, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.count} activities</p>
                    </div>
                  </div>
                  <BarChart3 size={18} className="text-blue-500" />
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                    style={{ width: `${(user.count / weeklySummary.topUsers[0].count) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Modules */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Package className="text-purple-500" size={20} />
                Most Active Modules
              </h3>
              <p className="text-sm text-slate-500">This week</p>
            </div>
            <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-xl font-bold text-xs hover:bg-purple-100 transition-all border border-purple-200 flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Download size={14} />
                Export
              </div>
              <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
            </button>
          </div>

          <div className="space-y-3">
            {weeklySummary.topModules.map((module, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-xl border border-purple-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{module.name}</p>
                      <p className="text-xs text-slate-500">{module.count} activities</p>
                    </div>
                  </div>
                  <TrendingUp size={18} className="text-purple-500" />
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                    style={{ width: `${(module.count / weeklySummary.topModules[0].count) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          FILTERS & SEARCH
          ======================================== */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Filter className="text-blue-500" size={20} />
          Filter Activity Logs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Action Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Action Type</label>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
            >
              <option value="all">All Actions</option>
              <option value="CREATE">Create</option>
              <option value="EDIT">Edit</option>
              <option value="DELETE">Delete</option>
            </select>
          </div>

          {/* User Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">User</label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
            >
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>

          {/* Department Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logs..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="px-5 py-2.5 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Weekly Summary
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="px-5 py-2.5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center text-sm shadow-md shadow-purple-500/20">
            <div className="flex items-center gap-2">
              <Shield size={18} />
              PDPA Report
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
        </div>
      </div>

      {/* ========================================
          ACTIVITY LOG TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Database className="text-blue-500" size={24} />
                Activity Log
              </h2>
              <p className="text-sm text-slate-500">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredLogs.length)} of {filteredLogs.length} events
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock size={14} className="text-green-500" />
              <span className="font-bold text-green-600">Live Monitoring Active</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4">
          {currentItems.map((log) => (
            <div key={log.id} className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group bg-gradient-to-br from-white to-slate-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {getActionIcon(log.action)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getActionColor(log.action)}`}>
                        {log.action}
                      </span>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getSeverityColor(log.severity)}`}>
                        {log.severity}
                      </span>
                      {log.pdpaRelevant && (
                        <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold border border-purple-200 flex items-center gap-1">
                          <Lock size={12} />
                          PDPA
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{log.description}</h4>
                    <p className="text-sm text-slate-600 mb-3">{log.details}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                      <div>
                        <p className="text-slate-500 font-medium mb-1">User</p>
                        <div className="flex items-center gap-1">
                          <User size={12} className="text-blue-500" />
                          <p className="font-bold text-blue-600">{log.user}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium mb-1">Department</p>
                        <p className="font-bold text-slate-700">{log.department}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium mb-1">Module</p>
                        <p className="font-bold text-slate-700">{log.module}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium mb-1">Timestamp</p>
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-slate-400" />
                          <p className="font-bold text-slate-700">{log.timestamp}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium mb-1">IP Address</p>
                        <p className="font-mono text-xs font-bold text-slate-700">{log.ipAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    Details
                  </div>
                  <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredLogs.length > 0 && (
          <div className="px-8 py-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              Page <span className="font-bold text-slate-700">{currentPage}</span> of <span className="font-bold text-slate-700">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentPage === 1
                    ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-blue-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl border transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

   

    </div>
  );
};

export default AuditTrail;
