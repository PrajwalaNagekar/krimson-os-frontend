import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Unlock, 
  Key, 
  Settings, 
  LogOut,
  Users,
  FileText,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Smartphone,
  Globe,
  UserCheck,
  Activity,
  Clock
} from 'lucide-react';

const SecurityAccessControl = () => {
  // Static data - to be replaced with dynamic API later
  const [activeSessions] = useState([
    { 
      id: 'USR-1001', 
      name: 'Admin User', 
      role: 'System Administrator', 
      email: 'admin@school.edu',
      lastLogin: '2026-01-19 17:45:23', 
      device: 'Windows Desktop',
      ipAddress: '192.168.1.100',
      location: 'Mumbai, India',
      status: 'Active',
      sessionDuration: '2h 15m'
    },
    { 
      id: 'USR-1002', 
      name: 'John Doe', 
      role: 'Teacher', 
      email: 'john@school.edu',
      lastLogin: '2026-01-19 16:30:45', 
      device: 'iPhone 14',
      ipAddress: '192.168.1.105',
      location: 'Delhi, India',
      status: 'Active',
      sessionDuration: '3h 45m'
    },
    { 
      id: 'USR-1003', 
      name: 'Jane Smith', 
      role: 'Parent', 
      email: 'jane@parent.com',
      lastLogin: '2026-01-19 18:10:12', 
      device: 'Android Tablet',
      ipAddress: '192.168.1.110',
      location: 'Bangalore, India',
      status: 'Active',
      sessionDuration: '7m'
    },
    { 
      id: 'USR-1004', 
      name: 'Bob Wilson', 
      role: 'Student', 
      email: 'bob@student.edu',
      lastLogin: '2026-01-19 12:15:30', 
      device: 'MacBook Pro',
      ipAddress: '192.168.1.115',
      location: 'Chennai, India',
      status: 'Suspended',
      sessionDuration: 'N/A'
    },
  ]);

  const [rolePermissions] = useState([
    { 
      role: 'System Administrator', 
      permissions: {
        viewLogs: true,
        editLogs: true,
        manageUsers: true,
        systemSettings: true,
        securityConfig: true
      },
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      role: 'Teacher', 
      permissions: {
        viewLogs: true,
        editLogs: false,
        manageUsers: false,
        systemSettings: false,
        securityConfig: false
      },
      color: 'from-blue-500 to-purple-500'
    },
    { 
      role: 'Parent', 
      permissions: {
        viewLogs: true,
        editLogs: false,
        manageUsers: false,
        systemSettings: false,
        securityConfig: false
      },
      color: 'from-pink-500 to-purple-500'
    },
    { 
      role: 'Student', 
      permissions: {
        viewLogs: false,
        editLogs: false,
        manageUsers: false,
        systemSettings: false,
        securityConfig: false
      },
      color: 'from-purple-500 to-pink-500'
    },
  ]);

  const [twoFactorSettings] = useState({
    enabled: true,
    method: 'SMS + Authenticator App',
    enrolledUsers: 156,
    totalUsers: 245,
    mandatoryRoles: ['System Administrator', 'Teacher', 'Finance Manager']
  });

  const [securityMetrics] = useState({
    mfaStatus: 'Enabled',
    ssoProvider: 'Google Workspace',
    encryption: 'AES-256',
    failedLoginAttempts: 12,
    blockedIPs: 3,
    lastSecurityAudit: '2026-01-15'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            User Access & Security Control
          </h1>
          <p className="text-slate-600">Manage cybersecurity, roles, and user privileges</p>
        </div>

        {/* Security Status Header */}
        <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 lg:p-8 text-white shadow-xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl">
                  <Shield size={28} />
                </div>
                Security Status Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
                  <CheckCircle className="text-white" size={18} />
                  <div>
                    <p className="text-xs text-white/80 font-medium">MFA Status</p>
                    <p className="text-sm font-bold text-white drop-shadow-md">{securityMetrics.mfaStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
                  <Lock className="text-white" size={18} />
                  <div>
                    <p className="text-xs text-white/80 font-medium">Encryption</p>
                    <p className="text-sm font-bold text-white drop-shadow-md">{securityMetrics.encryption}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-colors">
                  <Globe className="text-white" size={18} />
                  <div>
                    <p className="text-xs text-white/80 font-medium">SSO Provider</p>
                    <p className="text-sm font-bold text-white drop-shadow-md">{securityMetrics.ssoProvider}</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-2xl text-sm font-bold flex flex-col items-center leading-tight gap-0.5 backdrop-blur-md transition-all duration-200 border border-white/30 hover:border-white/40 cursor-not-allowed opacity-75">
              <span className="flex items-center gap-2">
                <Settings size={18} />
                Configure Policy
              </span>
              <span className="text-[9px] opacity-60 font-normal">get in app</span>
            </button>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-fit mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Active Sessions</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {activeSessions.filter(s => s.status === 'Active').length}
              </p>
              <p className="text-xs text-slate-400 mt-2">Currently logged in</p>
            </div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-fit mb-4">
                <UserCheck className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">2FA Enrolled</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {twoFactorSettings.enrolledUsers}/{twoFactorSettings.totalUsers}
              </p>
              <p className="text-xs text-slate-400 mt-2">{Math.round((twoFactorSettings.enrolledUsers/twoFactorSettings.totalUsers)*100)}% adoption rate</p>
            </div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit mb-4">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Failed Logins</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {securityMetrics.failedLoginAttempts}
              </p>
              <p className="text-xs text-slate-400 mt-2">Last 24 hours</p>
            </div>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl w-fit mb-4">
                <XCircle className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Blocked IPs</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                {securityMetrics.blockedIPs}
              </p>
              <p className="text-xs text-slate-400 mt-2">Security threats blocked</p>
            </div>
          </div>
        </div>

        {/* Active Sessions Table */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="text-cyan-500" size={28} />
                  Active User Sessions
                </h3>
                <p className="text-sm text-slate-500 mt-1">Monitor and manage current user sessions</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-50 to-blue-50 text-slate-600 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4 rounded-tl-xl">User Info</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Device & Location</th>
                    <th className="p-4">Session</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 rounded-tr-xl text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-slate-50/50 transition-colors group/row">
                      <td className="p-4">
                        <div>
                          <p className="font-bold text-slate-800">{session.name}</p>
                          <p className="text-xs text-slate-500">{session.email}</p>
                          <p className="text-xs text-slate-400 font-mono mt-1">{session.id}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                          {session.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          <p className="text-slate-700 font-medium">{session.device}</p>
                          <p className="text-xs text-slate-500">{session.location}</p>
                          <p className="text-xs text-slate-400 font-mono">{session.ipAddress}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          <p className="text-slate-700 font-medium flex items-center gap-1">
                            <Clock size={12} className="text-slate-400" />
                            {session.sessionDuration}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{session.lastLogin}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          session.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          {session.status === 'Active' ? (
                            <button 
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-not-allowed opacity-75 group/btn relative" 
                              title="Revoke Access"
                            >
                              <Lock size={16} />
                              <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                                Get in App
                              </span>
                            </button>
                          ) : (
                            <button 
                              className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors cursor-not-allowed opacity-75 group/btn relative" 
                              title="Unlock User"
                            >
                              <Unlock size={16} />
                              <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                                Get in App
                              </span>
                            </button>
                          )}
                          <button 
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-not-allowed opacity-75 group/btn relative" 
                            title="Reset Password"
                          >
                            <Key size={16} />
                            <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                              Get in App
                            </span>
                          </button>
                          <button 
                            className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-not-allowed opacity-75 group/btn relative" 
                            title="Force Logout"
                          >
                            <LogOut size={16} />
                            <span className="absolute hidden group-hover/btn:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap">
                              Get in App
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Role-Based Permission Table */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="text-blue-500" size={28} />
                  Role-Based Permissions
                </h3>
                <p className="text-sm text-slate-500 mt-1">View and edit log access by role</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50 text-slate-600 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4 rounded-tl-xl">Role</th>
                    <th className="p-4 text-center">View Logs</th>
                    <th className="p-4 text-center">Edit Logs</th>
                    <th className="p-4 text-center">Manage Users</th>
                    <th className="p-4 text-center">System Settings</th>
                    <th className="p-4 rounded-tr-xl text-center">Security Config</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rolePermissions.map((role, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <span className={`px-4 py-2 bg-gradient-to-r ${role.color} text-white rounded-xl text-sm font-bold`}>
                          {role.role}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        {role.permissions.viewLogs ? (
                          <div className="flex justify-center">
                            <div className="p-2 bg-green-100 rounded-full">
                              <Eye className="text-green-600" size={18} />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="p-2 bg-red-100 rounded-full">
                              <EyeOff className="text-red-600" size={18} />
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {role.permissions.editLogs ? (
                          <CheckCircle className="text-green-600 mx-auto" size={20} />
                        ) : (
                          <XCircle className="text-red-600 mx-auto" size={20} />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {role.permissions.manageUsers ? (
                          <CheckCircle className="text-green-600 mx-auto" size={20} />
                        ) : (
                          <XCircle className="text-red-600 mx-auto" size={20} />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {role.permissions.systemSettings ? (
                          <CheckCircle className="text-green-600 mx-auto" size={20} />
                        ) : (
                          <XCircle className="text-red-600 mx-auto" size={20} />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {role.permissions.securityConfig ? (
                          <CheckCircle className="text-green-600 mx-auto" size={20} />
                        ) : (
                          <XCircle className="text-red-600 mx-auto" size={20} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication Settings */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Smartphone className="text-pink-500" size={28} />
                  Two-Factor Authentication Settings
                </h3>
                <p className="text-sm text-slate-500 mt-1">Manage 2FA policies and enrollment</p>
              </div>
              <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
                twoFactorSettings.enabled ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                <div className={`w-2 h-2 rounded-full ${twoFactorSettings.enabled ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                {twoFactorSettings.enabled ? 'Enabled' : 'Disabled'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 2FA Method */}
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">Authentication Method</p>
                <p className="text-lg font-bold text-slate-800">{twoFactorSettings.method}</p>
                <p className="text-xs text-slate-500 mt-2">Primary & backup methods</p>
              </div>

              {/* Enrollment Stats */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">User Enrollment</p>
                <p className="text-lg font-bold text-slate-800">
                  {twoFactorSettings.enrolledUsers} / {twoFactorSettings.totalUsers} Users
                </p>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(twoFactorSettings.enrolledUsers/twoFactorSettings.totalUsers)*100}%` }}
                  ></div>
                </div>
              </div>

              {/* Mandatory Roles */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">Mandatory for Roles</p>
                <div className="space-y-1 mt-2">
                  {twoFactorSettings.mandatoryRoles.map((role, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span className="text-xs text-slate-700 font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
                <span className="flex items-center gap-2">
                  <Settings size={18} />
                  Configure 2FA
                </span>
                <span className="text-[9px] opacity-60 font-normal">get in app</span>
              </button>
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
                <span className="flex items-center gap-2">
                  <UserCheck size={18} />
                  Enforce Policy
                </span>
                <span className="text-[9px] opacity-60 font-normal">get in app</span>
              </button>
            </div>
          </div>
        </div>

       
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default SecurityAccessControl;
