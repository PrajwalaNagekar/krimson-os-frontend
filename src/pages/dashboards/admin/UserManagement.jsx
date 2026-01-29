/**
 * @component UserManagement
 * @description Admin Screen 3 - User & Role Management
 * Manage user accounts, privileges, and role hierarchies
 */
import React, { useState } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { ROLE_LABELS } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addNotification } from '../../../store/slices/uiSlice';
import {
  Users, UserPlus, Shield, Activity, Lock, Unlock, Eye, EyeOff,
  Mail, Phone, Calendar, Clock, MapPin, Monitor, AlertTriangle,
  CheckCircle, XCircle, Filter, Search, Download, Plus, Edit,
  Trash2, Key, ChevronDown, ChevronRight, X, Check, ShieldAlert,
  UserCheck, Building
} from 'lucide-react';




const USER_ACTIONS = [
  { key: "add", label: "Add User", icon: UserPlus },
  { key: "edit", label: "Edit User", icon: Edit },
  { key: "reset", label: "Reset Password", icon: Key },
  { key: "suspend", label: "Suspend User", icon: Lock },
];

import UserActionPanel from './UserManagement/UserActionPanel';

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const data = ADMIN_DATA.userManagement;
  const [selectedTab, setSelectedTab] = useState('users'); // users, activity, groups, security
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ status: 'all', role: 'all', department: 'all', search: '' });
  const [showCreateForm, setShowCreateForm] = useState(null); // 'department', 'grade', 'role', or null

  const [expandedGroups, setExpandedGroups] = useState({});

  // CRUD State Management
  const [users, setUsers] = useState(data.users);

  // Filter users based on active filters
  const filteredUsers = users.filter(user => {
    if (filters.status !== 'all' && user.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    if (filters.role !== 'all' && !user.roles.includes(filters.role)) return false;
    if (filters.department !== 'all' && user.department !== filters.department) return false;
    if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase()) 
        && !user.email.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  // CRUD Operations Handlers
  const handleAddUser = (newUser) => {
    const user = {
      id: `user_${Date.now()}`,
      userId: `USR${new Date().getFullYear()}${String(users.length + 1).padStart(3, '0')}`,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone || 'N/A',
      roles: newUser.roles,
      status: 'Active',
      department: newUser.department,
      grade: newUser.grade || null,
      avatar: null,
      lastLogin: null,
      lastLoginIp: null,
      accountCreated: new Date().toISOString().split('T')[0],
      totalLogins: 0,
      failedLoginAttempts: 0,
      twoFactorEnabled: false,
      ssoLinked: false,
    };
    
    setUsers([...users, user]);
    dispatch(addNotification({
      type: 'success',
      message: 'User added successfully!'
    }));
  };

  const handleUpdateUser = (updatedUser, successMessage) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    dispatch(addNotification({
      type: 'success',
      message: successMessage || 'User updated successfully!'
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50 border-green-200';
      case 'Suspended': return 'text-red-600 bg-red-50 border-red-200';
      case 'Pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle size={14} />;
      case 'Suspended': return <Lock size={14} />;
      case 'Pending': return <AlertTriangle size={14} />;
      default: return <XCircle size={14} />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };



  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ======================================== HEADER ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Security & Access Control
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                User & Role Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage user accounts, assign roles, track activity, and control system access.
              </p>
            </div>
          </div>
        </div>
      </div>

   {/* ======================================== STATISTICS CARDS ======================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <Users size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{data.stats.totalUsers}</p>
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">Total Users</p>
              <p className="text-[10px] text-white/70 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{data.stats.activeUsers}</p>
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">Active Users</p>
              <p className="text-[10px] text-white/70 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <Lock size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{data.stats.suspendedUsers}</p>
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">Suspended</p>
              <p className="text-[10px] text-white/70 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{data.stats.pendingUsers}</p>
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">Pending</p>
              <p className="text-[10px] text-white/70 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{data.stats.recentRoleChanges}</p>
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">Role Changes</p>
              <p className="text-[10px] text-white/70 mt-1">(get in app)</p>
            </div>
          </div>
        </div>
      </div>


  {/* ======================================== USER ACTION PANEL ======================================== */}
  <UserActionPanel 
    users={users}
    allRoles={data.roles}
    departments={data.departments}
    onAddUser={handleAddUser}
    onUpdateUser={handleUpdateUser}
  />


      {/* Filters Panel */}
      {showFilters && (
        <div className="relative overflow-hidden bg-white border border-cyan-100 rounded-2xl p-6 shadow-lg animate-slideDown">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-50 rounded-full blur-3xl" />
          <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department</label>
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              >
                <option value="all">All Departments</option>
                {data.departments.map(dept => (
                  <option key={dept.id} value={dept.name}>{dept.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="Name or email..."
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl pl-12 pr-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ status: 'all', role: 'all', department: 'all', search: '' })}
                className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-colors w-full"
              >
                Clear Filters
              </button>
            </div>
          </div>
          </div>
        </div>
      )}

      {/* ======================================== TABS ======================================== */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="flex flex-wrap gap-2 p-4 border-b border-slate-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50">
          {[
            { id: 'users', label: 'User Accounts', icon: Users },
            { id: 'activity', label: 'Activity & Logs', icon: Activity },
            { id: 'groups', label: 'Groups & Departments', icon: Building },
            { id: 'security', label: 'Security & Escalations', icon: ShieldAlert },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white text-slate-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 border border-slate-200'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ======================================== USER ACCOUNTS TAB ======================================== */}
        {selectedTab === 'users' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">User (Full Name)</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Role</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:via-blue-50/30 hover:to-transparent transition-all group">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{user.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm text-slate-600 flex items-center gap-1">
                          <Mail size={14} />
                          {user.email}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {user.roles.map((role, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 w-fit ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Mockup */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
               <p className="text-xs font-bold text-slate-500 uppercase">Showing {filteredUsers.length} of {data.stats.totalUsers} Users</p>
               <div className="flex gap-2">
                 <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50">
                    <ChevronDown className="rotate-90" size={16} />
                 </button>
                 <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
                    <ChevronRight size={16} />
                 </button>
               </div>
            </div>
          </div>
        )}
        
        
        {/* ======================================== ACTIVITY & LOGS TAB ======================================== */}
        {selectedTab === 'activity' && (
          <div className="p-6">
            <div className="space-y-4">
              {/* Activity Timeline */}
              <div className="relative">
                {[
                  { action: 'User Account Created', user: 'Sarah Johnson', target: 'john.doe@school.edu', time: '2 hours ago', type: 'success', icon: UserPlus },
                  { action: 'Role Assignment', user: 'Admin', target: 'Emily Chen - Teacher Role Added', time: '5 hours ago', type: 'info', icon: Shield },
                  { action: 'Password Reset', user: 'System', target: 'michael.brown@school.edu', time: '1 day ago', type: 'warning', icon: Key },
                  { action: 'User Suspended', user: 'Admin', target: 'Inactive Account - alex.wong@school.edu', time: '2 days ago', type: 'danger', icon: Lock },
                  { action: 'Login Attempt Failed', user: 'System', target: '3 failed attempts - jane.smith@school.edu', time: '3 days ago', type: 'warning', icon: AlertTriangle },
                  { action: 'User Account Created', user: 'Sarah Johnson', target: 'robert.lee@school.edu', time: '4 days ago', type: 'success', icon: UserPlus },
                  { action: 'Permission Updated', user: 'Admin', target: 'Grade Coordinator - New Permissions', time: '5 days ago', type: 'info', icon: ShieldAlert },
                ].map((log, idx) => (
                  <div key={idx} className="relative pl-8 pb-8 last:pb-0">
                    {/* Timeline Line */}
                    {idx !== 6 && (
                      <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 to-transparent" />
                    )}
                    
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                      log.type === 'success' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                      log.type === 'danger' ? 'bg-gradient-to-br from-pink-400 to-rose-500' :
                      log.type === 'warning' ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                      'bg-gradient-to-br from-cyan-400 to-blue-500'
                    }`}>
                      <log.icon size={10} className="text-white" />
                    </div>

                    {/* Log Content */}
                    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 text-sm mb-1">{log.action}</h4>
                          <p className="text-xs text-slate-500 mb-2">
                            <span className="font-semibold text-slate-600">By: {log.user}</span> • {log.target}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Clock size={12} />
                            {log.time}
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                          log.type === 'success' ? 'bg-green-50 text-green-600 border border-green-200' :
                          log.type === 'danger' ? 'bg-red-50 text-red-600 border border-red-200' :
                          log.type === 'warning' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                          'bg-cyan-50 text-cyan-600 border border-cyan-200'
                        }`}>
                          {log.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================== GROUPS & DEPARTMENTS TAB ======================================== */}
        {selectedTab === 'groups' && (
          <div className="p-6">
            {/* Group Creation Buttons */}
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                onClick={() => setShowCreateForm(showCreateForm === 'department' ? null : 'department')}
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  showCreateForm === 'department'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'bg-white border-2 border-cyan-200 text-cyan-600 hover:border-cyan-300 hover:shadow-md'
                }`}
              >
                <Plus size={16} />
                Create Department
              </button>
              <button
                onClick={() => setShowCreateForm(showCreateForm === 'grade' ? null : 'grade')}
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  showCreateForm === 'grade'
                    ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg'
                    : 'bg-white border-2 border-purple-200 text-purple-600 hover:border-purple-300 hover:shadow-md'
                }`}
              >
                <Plus size={16} />
                Create Grade
              </button>
              <button
                onClick={() => setShowCreateForm(showCreateForm === 'role' ? null : 'role')}
                className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  showCreateForm === 'role'
                    ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg'
                    : 'bg-white border-2 border-pink-200 text-pink-600 hover:border-pink-300 hover:shadow-md'
                }`}
              >
                <Plus size={16} />
                Create Role
              </button>
            </div>

            {/* Collapsible Creation Forms */}
            {showCreateForm && (
              <div className="mb-6 bg-white border border-cyan-100 rounded-2xl shadow-lg overflow-hidden animate-slideDown">
                <div className="p-6">
                  {/* Department Form */}
                  {showCreateForm === 'department' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                          <Building size={18} className="text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Create New Department</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department Name</label>
                          <input
                            type="text"
                            placeholder="e.g., Science Department"
                            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department Head</label>
                          <select className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all">
                            <option>Select User</option>
                            <option>Dr. Sarah Johnson</option>
                            <option>Prof. Michael Chen</option>
                            <option>Ms. Emily Williams</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description</label>
                        <textarea
                          rows="3"
                          placeholder="Department description..."
                          className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <Check size={16} />
                          Create Department
                        </button>
                        <button
                          onClick={() => setShowCreateForm(null)}
                          className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Grade Form */}
                  {showCreateForm === 'grade' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-md">
                          <Users size={18} className="text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Create New Grade</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Grade Name</label>
                          <input
                            type="text"
                            placeholder="e.g., Grade 10"
                            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Grade Level</label>
                          <select className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all">
                            <option>Select Level</option>
                            <option>Primary (1-5)</option>
                            <option>Middle School (6-8)</option>
                            <option>High School (9-12)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Academic Year</label>
                          <input
                            type="text"
                            placeholder="e.g., 2024-2025"
                            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Max Students</label>
                          <input
                            type="number"
                            placeholder="e.g., 150"
                            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <Check size={16} />
                          Create Grade
                        </button>
                        <button
                          onClick={() => setShowCreateForm(null)}
                          className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Role Form */}
                  {showCreateForm === 'role' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-md">
                          <Shield size={18} className="text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Create New Role</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Role Name</label>
                          <input
                            type="text"
                            placeholder="e.g., Grade Coordinator"
                            className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Permission Level</label>
                          <select className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all">
                            <option>Select Level</option>
                            <option>Admin - Full Access</option>
                            <option>Manager - Limited Admin</option>
                            <option>Staff - Standard Access</option>
                            <option>View Only</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Permissions</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['View Users', 'Edit Users', 'Delete Users', 'Manage Roles'].map((perm, idx) => (
                            <label key={idx} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-800 bg-slate-50 px-3 py-2 rounded-lg">
                              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-400" />
                              {perm}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          <Check size={16} />
                          Create Role
                        </button>
                        <button
                          onClick={() => setShowCreateForm(null)}
                          className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Departments */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Building size={20} className="text-cyan-600" />
                  Departments
                </h3>
                {[
                  { name: 'Academic Affairs', members: 45, icon: '📚', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Student Services', members: 28, icon: '🎓', color: 'from-blue-400 to-indigo-500' },
                  { name: 'Finance & Admin', members: 12, icon: '💰', color: 'from-green-400 to-emerald-500' },
                  { name: 'IT & Systems', members: 8, icon: '💻', color: 'from-purple-400 to-indigo-500' },
                  { name: 'Human Resources', members: 6, icon: '👥', color: 'from-pink-400 to-rose-500' },
                ].map((dept, idx) => (
                  <div key={idx} className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-lg transition-all group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl shadow-md`}>
                          {dept.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{dept.name}</h4>
                          <p className="text-xs text-slate-500">{dept.members} Members</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Role Groups */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-cyan-600" />
                  Role Groups
                </h3>
                {[
                  { name: 'Teaching Staff', roles: ['Teacher', 'Subject Coordinator'], count: 34, color: 'from-cyan-400 to-blue-500' },
                  { name: 'Administrative', roles: ['Principal', 'Admin', 'Registrar'], count: 8, color: 'from-purple-400 to-indigo-500' },
                  { name: 'Support Staff', roles: ['Librarian', 'Counselor', 'Finance'], count: 15, color: 'from-green-400 to-emerald-500' },
                  { name: 'Students', roles: ['Student', 'Class Monitor'], count: 450, color: 'from-amber-400 to-orange-500' },
                  { name: 'Parents/Guardians', roles: ['Parent'], count: 380, color: 'from-pink-400 to-rose-500' },
                ].map((group, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">{group.name}</h4>
                        <p className="text-xs text-slate-500 font-semibold">{group.count} Users</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white text-xs font-bold shadow-sm`}>
                        {group.roles.length} Roles
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.roles.map((role, roleIdx) => (
                        <span key={roleIdx} className="px-2 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        )}

        {/* ======================================== SECURITY & ESCALATIONS TAB ======================================== */}
        {selectedTab === 'security' && (
          <div className="p-6">
            <div className="space-y-6">
              {/* Security Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Active Sessions', value: '156', icon: Monitor, gradient: 'from-cyan-400 to-blue-500' },
                  { label: 'Failed Logins (24h)', value: '12', icon: AlertTriangle, gradient: 'from-amber-400 to-orange-500' },
                  { label: '2FA Enabled', value: '78%', icon: Shield, gradient: 'from-green-400 to-emerald-500' },
                  { label: 'Role Changes', value: '5', icon: UserCheck, gradient: 'from-purple-400 to-indigo-500' },
                ].map((stat, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl -translate-y-1/3 translate-x-1/4" />
                    <div className="relative z-10">
                      <stat.icon size={20} className="text-white mb-2" />
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-xs text-white/90 font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Audit Log */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-cyan-600" />
                  Security Audit Log
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Event</th>
                        <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">User</th>
                        <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">IP Address</th>
                        <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Timestamp</th>
                        <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { event: 'Role Escalation Approved', user: 'Sarah Johnson → Admin', ip: '192.168.1.45', time: 'Jan 22, 10:15 AM', risk: 'High', riskColor: 'from-pink-400 to-rose-500' },
                        { event: 'Multiple Login Attempts', user: 'john.doe@school.edu', ip: '203.0.113.45', time: 'Jan 22, 09:32 AM', risk: 'Medium', riskColor: 'from-amber-400 to-orange-500' },
                        { event: 'Password Changed', user: 'emily.chen@school.edu', ip: '192.168.1.78', time: 'Jan 21, 04:20 PM', risk: 'Low', riskColor: 'from-green-400 to-emerald-500' },
                        { event: 'Permission Modified', user: 'Admin → Teacher Group', ip: '192.168.1.12', time: 'Jan 21, 02:15 PM', risk: 'Medium', riskColor: 'from-amber-400 to-orange-500' },
                        { event: '2FA Disabled', user: 'michael.brown@school.edu', ip: '192.168.1.92', time: 'Jan 20, 11:45 AM', risk: 'High', riskColor: 'from-pink-400 to-rose-500' },
                        { event: 'Successful Login', user: 'admin@school.edu', ip: '192.168.1.1', time: 'Jan 20, 09:00 AM', risk: 'Low', riskColor: 'from-green-400 to-emerald-500' },
                      ].map((log, idx) => (
                        <tr key={idx} className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:via-blue-50/30 hover:to-transparent transition-all">
                          <td className="px-4 py-3">
                            <span className="text-sm font-bold text-slate-800">{log.event}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-sm text-slate-600">{log.user}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-sm text-slate-500 font-mono">{log.ip}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs text-slate-500">{log.time}</span>
                          </td>
                          <td className="px-4 py-3">
                            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${log.riskColor} text-white shadow-sm`}>
                              {log.risk}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default UserManagement;
