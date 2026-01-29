/**
 * @component SystemSettings
 * @description Screen 14: Settings & System Configuration - Control global system parameters
 */
import React, { useState } from 'react';
import { 
  Settings, 
  Globe, 
  Lock, 
  Palette, 
  Save, 
  Shield, 
  Clock, 
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  MapPin,
  Upload,
  Edit3,
  Key,
  UserCog,
  Database,
  Server,
  Activity,
  Eye,
  EyeOff,
  Image as ImageIcon
} from 'lucide-react';

// ========================================
// MOCK DATA - Ready for Admin Configuration API Integration
// ========================================
const mockSystemData = {
  // Summary Statistics
  stats: {
    activeAcademicYear: '2025-2026',
    configuredUsers: 1247,
    systemUptime: 99.98,
    lastUpdate: '2 hours ago'
  },

  // Academic Year Configuration
  academicYear: {
    current: '2025-2026',
    startDate: '2025-04-01',
    endDate: '2026-03-31',
    terms: [
      { name: 'Term 1', start: '2025-04-01', end: '2025-07-15' },
      { name: 'Term 2', start: '2025-08-01', end: '2025-11-15' },
      { name: 'Term 3', start: '2025-11-25', end: '2026-03-31' }
    ],
    upcomingYear: '2026-2027'
  },

  // Timezone & Currency
  regionalization: {
    timezone: 'Asia/Singapore (GMT+8)',
    currency: 'SGD ($)',
    dateFormat: 'DD/MM/YYYY',
    language: 'English (US)',
    numberFormat: '1,234.56'
  },

  // Default Permissions by Role
  permissions: {
    roles: [
      { 
        name: 'Administrator', 
        userCount: 5,
        permissions: { read: true, write: true, delete: true, config: true }
      },
      { 
        name: 'Principal', 
        userCount: 3,
        permissions: { read: true, write: true, delete: false, config: true }
      },
      { 
        name: 'Teacher', 
        userCount: 89,
        permissions: { read: true, write: true, delete: false, config: false }
      },
      { 
        name: 'Parent', 
        userCount: 1150,
        permissions: { read: true, write: false, delete: false, config: false }
      }
    ],
    securityPolicies: {
      require2FA: true,
      sessionTimeout: 15,
      passwordExpiry: 90,
      loginAttempts: 3
    }
  },

  // School Branding
  branding: {
    schoolName: 'Krimson International School',
    tagline: 'Excellence in Education',
    contactEmail: 'admin@krimsonschool.edu.sg',
    contactPhone: '+65 6123 4567',
    address: '123 Education Boulevard, Singapore 123456',
    website: 'www.krimsonschool.edu.sg',
    themeColor: '#3B82F6',
    logoUrl: null // Placeholder for logo upload
  }
};

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('academic');

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION - Admin Gradient Theme
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Gradient matching Admin Sidebar (Cyan → Blue → Pink) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        
        {/* Decorative Glass Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  System Administration
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/5 px-2 py-1 rounded-md">
                  <Settings size={12} className="animate-spin-slow" />
                  v2.4.0
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Settings & System Configuration
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Control global system parameters and maintain unified digital identity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS - With Hover Effect
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Academic Year Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Calendar size={24} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockSystemData.stats.activeAcademicYear}
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Active Academic Year
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Current session in progress
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* Configured Users */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Users size={24} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockSystemData.stats.configuredUsers.toLocaleString()}
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Configured Users
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Across all roles
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* System Uptime */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Activity size={24} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockSystemData.stats.systemUptime}%
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              System Uptime
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Last 30 days average
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* Last Update */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Clock size={24} strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-1">
              {mockSystemData.stats.lastUpdate}
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Last Configuration
            </p>
            <p className="text-xs text-slate-400 mt-2">
              System settings updated
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>
      </div>

      {/* ========================================
          CONFIGURATION SECTIONS
          ======================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN - Main Settings */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Academic Year Setup */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-800">Academic Year Setup</h3>
                    <p className="text-slate-500 text-sm mt-0.5">Configure academic calendar and terms</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Current Academic Year
                  </label>
                  <p className="text-2xl font-bold text-slate-800">{mockSystemData.academicYear.current}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Upcoming Year
                  </label>
                  <p className="text-2xl font-bold text-slate-800">{mockSystemData.academicYear.upcomingYear}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Session Start Date
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
                    {new Date(mockSystemData.academicYear.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Session End Date
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
                    {new Date(mockSystemData.academicYear.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
              </div>

              {/* Terms Breakdown */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Term Configuration
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {mockSystemData.academicYear.terms.map((term, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100">
                      <div>
                        <p className="font-bold text-slate-800">{term.name}</p>
                        <p className="text-xs text-slate-500 mt-1">
                          {new Date(term.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(term.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                      <CheckCircle2 size={20} className="text-green-500" />
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                <div className="flex items-center gap-2">
                  <Edit3 size={18} />
                  <span>Edit Academic Year Settings</span>
                </div>
                <span className="text-xs text-blue-200">(get in app)</span>
              </button>
            </div>
          </div>

          {/* Time Zone and Currency Configuration */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-800">Regional Configuration</h3>
                  <p className="text-slate-500 text-sm mt-0.5">Timezone, currency, and format settings</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Time Zone
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Clock size={16} className="text-purple-500" />
                    {mockSystemData.regionalization.timezone}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Currency
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <DollarSign size={16} className="text-green-500" />
                    {mockSystemData.regionalization.currency}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Date Format
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
                    {mockSystemData.regionalization.dateFormat}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Language
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
                    {mockSystemData.regionalization.language}
                  </div>
                </div>
              </div>

              <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg">
                <div className="flex items-center gap-2">
                  <Save size={18} />
                  <span>Update Regional Settings</span>
                </div>
                <span className="text-xs text-purple-200">(get in app)</span>
              </button>
            </div>
          </div>

          {/* School Branding */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-pink-50 to-orange-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-800">School Branding</h3>
                  <p className="text-slate-500 text-sm mt-0.5">Logo, name, contact, and theme customization</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  School Logo
                </label>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <ImageIcon className="text-slate-400" size={32} />
                  </div>
                  <div>
                    <button className="flex flex-col items-center gap-0.5 px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg">
                      <div className="flex items-center gap-2">
                        <Upload size={16} />
                        <span>Upload New Logo</span>
                      </div>
                      <span className="text-xs text-slate-400">(get in app)</span>
                    </button>
                    <p className="text-xs text-slate-400 mt-2">Recommended: 512x512px PNG</p>
                  </div>
                </div>
              </div>

              {/* School Information */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    School Name
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Building2 size={16} className="text-pink-500" />
                    {mockSystemData.branding.schoolName}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Tagline
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
                    {mockSystemData.branding.tagline}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Contact Email
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Mail size={16} className="text-blue-500" />
                    <span className="truncate">{mockSystemData.branding.contactEmail}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Contact Phone
                  </label>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-green-500" />
                    {mockSystemData.branding.contactPhone}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Address
                </label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  {mockSystemData.branding.address}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Theme Color
                </label>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl border-2 border-slate-200 shadow-inner"
                    style={{ backgroundColor: mockSystemData.branding.themeColor }}
                  />
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 flex-1">
                    {mockSystemData.branding.themeColor}
                  </div>
                </div>
              </div>

              <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg">
                <div className="flex items-center gap-2">
                  <Save size={18} />
                  <span>Save Branding Settings</span>
                </div>
                <span className="text-xs text-pink-200">(get in app)</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Permissions & Security */}
        <div className="space-y-6">
          
          {/* Default Permissions & Access Control */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Access Control</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Role permissions</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-3">
              {mockSystemData.permissions.roles.map((role, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{role.name}</p>
                      <p className="text-xs text-slate-500">{role.userCount} users</p>
                    </div>
                    <UserCog size={18} className="text-slate-400" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {role.permissions.read && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold">READ</span>
                    )}
                    {role.permissions.write && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-bold">WRITE</span>
                    )}
                    {role.permissions.delete && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-md text-[10px] font-bold">DELETE</span>
                    )}
                    {role.permissions.config && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-[10px] font-bold">CONFIG</span>
                    )}
                  </div>
                </div>
              ))}

              <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg mt-4">
                <div className="flex items-center gap-2">
                  <Key size={18} />
                  <span>Modify Permissions</span>
                </div>
                <span className="text-xs text-red-200">(get in app)</span>
              </button>
            </div>
          </div>

          {/* Security Policies */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Security Policies</h3>
                  <p className="text-slate-500 text-xs mt-0.5">System protection</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Shield size={16} className="text-green-500" />
                    Two-Factor Auth
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Admin only</p>
                </div>
                <CheckCircle2 size={20} className="text-green-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Clock size={16} className="text-blue-500" />
                    Session Timeout
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{mockSystemData.permissions.securityPolicies.sessionTimeout} minutes</p>
                </div>
                <CheckCircle2 size={20} className="text-green-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Key size={16} className="text-purple-500" />
                    Password Expiry
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{mockSystemData.permissions.securityPolicies.passwordExpiry} days</p>
                </div>
                <CheckCircle2 size={20} className="text-green-500" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <Lock size={16} className="text-red-500" />
                    Max Login Attempts
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{mockSystemData.permissions.securityPolicies.loginAttempts} attempts</p>
                </div>
                <CheckCircle2 size={20} className="text-green-500" />
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <Server size={32} className="mb-3 text-cyan-200" />
              <h3 className="font-bold text-lg mb-2">System Health</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cyan-100">Database</span>
                  <span className="font-bold">PostgreSQL 14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Last Backup</span>
                  <span className="font-bold">2 hrs ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Server Status</span>
                  <span className="font-bold flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 py-2.5 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-colors shadow-lg text-sm">
                Run Diagnostics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
