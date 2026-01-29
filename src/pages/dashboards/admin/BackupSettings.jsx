/**
 * @component BackupSettings
 * @description Data Backup & Recovery Settings - System data security management
 */
import React, { useState } from 'react';
import { 
  Shield, Database, Download, Upload, Clock, CheckCircle, XCircle,
  Calendar, RefreshCcw, Lock, Unlock, HardDrive, Cloud, Server,
  AlertTriangle, Settings, Eye, Play, Pause, BarChart3, Activity,
  FileText, Award, Zap, Archive, Copy, Trash2, Edit, Plus, Filter,
  TrendingUp, AlertCircle, Check, X, Package, Folder, File
} from 'lucide-react';

const BackupSettings = () => {
  const [selectedSchedule, setSelectedSchedule] = useState('daily');

  // Backup Settings
  const backupConfig = {
    autoBackupEnabled: true,
    schedule: 'Daily at 2:00 AM',
    lastBackup: '2026-01-20 02:00:15',
    nextBackup: '2026-01-21 02:00:00',
    backupLocation: 'AWS S3 - Asia Pacific (Singapore)',
    encryption: 'AES-256',
    retentionPeriod: '90 days',
    compressionEnabled: true,
    notificationsEnabled: true
  };

  // Backup History / Restore Points
  const restorePoints = [
    {
      id: 'BP001',
      timestamp: '2026-01-20 02:00:15',
      type: 'Automatic',
      size: '14.2 GB',
      duration: '45 minutes',
      status: 'Completed',
      dataIncluded: ['Student Records', 'Staff Data', 'Financial Records', 'Academic Data', 'Media Files'],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: 'SHA256:a7f3...9b2c',
      downloadUrl: 'encrypted_backup_20260120.enc'
    },
    {
      id: 'BP002',
      timestamp: '2026-01-19 02:00:12',
      type: 'Automatic',
      size: '14.1 GB',
      duration: '43 minutes',
      status: 'Completed',
      dataIncluded: ['Student Records', 'Staff Data', 'Financial Records', 'Academic Data', 'Media Files'],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: 'SHA256:b8e4...8c3d',
      downloadUrl: 'encrypted_backup_20260119.enc'
    },
    {
      id: 'BP003',
      timestamp: '2026-01-18 02:00:18',
      type: 'Automatic',
      size: '14.0 GB',
      duration: '44 minutes',
      status: 'Completed',
      dataIncluded: ['Student Records', 'Staff Data', 'Financial Records', 'Academic Data', 'Media Files'],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: 'SHA256:c9f5...7d4e',
      downloadUrl: 'encrypted_backup_20260118.enc'
    },
    {
      id: 'BP004',
      timestamp: '2026-01-15 14:30:22',
      type: 'Manual',
      size: '13.8 GB',
      duration: '42 minutes',
      status: 'Completed',
      dataIncluded: ['Student Records', 'Staff Data', 'Financial Records', 'Academic Data'],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: 'SHA256:d0g6...6e5f',
      downloadUrl: 'encrypted_backup_manual_20260115.enc'
    },
    {
      id: 'BP005',
      timestamp: '2026-01-17 02:00:25',
      type: 'Automatic',
      size: '13.9 GB',
      duration: '46 minutes',
      status: 'Completed',
      dataIncluded: ['Student Records', 'Staff Data', 'Financial Records', 'Academic Data', 'Media Files'],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: 'SHA256:e1h7...5f6g',
      downloadUrl: 'encrypted_backup_20260117.enc'
    },
    {
      id: 'BP006',
      timestamp: '2026-01-14 02:00:10',
      type: 'Automatic',
      size: '13.7 GB',
      duration: '41 minutes',
      status: 'Failed',
      dataIncluded: [],
      encryption: 'AES-256',
      location: 'AWS S3',
      checksum: null,
      downloadUrl: null,
      errorMessage: 'Network timeout during upload'
    }
  ];

  // Statistics
  const stats = {
    totalBackups: restorePoints.length,
    successfulBackups: restorePoints.filter(r => r.status === 'Completed').length,
    failedBackups: restorePoints.filter(r => r.status === 'Failed').length,
    totalStorage: '84.7 GB',
    averageBackupSize: '14.1 GB',
    lastBackupStatus: 'Success'
  };

  // Storage Breakdown
  const storageBreakdown = [
    { category: 'Student Records', size: '42.3 GB', percentage: 50 },
    { category: 'Media Files', size: '25.4 GB', percentage: 30 },
    { category: 'Staff Data', size: '8.5 GB', percentage: 10 },
    { category: 'Financial Records', size: '5.1 GB', percentage: 6 },
    { category: 'Academic Data', size: '3.4 GB', percentage: 4 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Failed':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Scheduled':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Automatic' ? <RefreshCcw size={16} className="text-blue-600" /> : <Play size={16} className="text-purple-600" />;
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
                  Data Security
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Shield size={12} className="text-green-300" />
                  Protected
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Data Backup & Recovery Settings
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Secure automated backups with AES-256 encryption and point-in-time recovery capabilities.
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
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Database size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalBackups}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Backups</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><CheckCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.successfulBackups}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Successful</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><XCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.failedBackups}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Failed</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform"><HardDrive size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalStorage}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Storage</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform"><BarChart3 size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.averageBackupSize}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg Size</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><Shield size={16} /></div>
          </div>
          <p className="text-lg font-bold text-green-800">{stats.lastBackupStatus}</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Last Backup</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          BACKUP CONFIGURATION
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Auto-Backup Settings */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Settings size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Automated Backup Configuration</h3>
              <p className="text-sm text-slate-500">Schedule and manage automatic backups</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-green-800">Auto-Backup Status</span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5">
                  <Activity size={12} className="animate-pulse" />
                  Enabled
                </span>
              </div>
              <p className="text-xs text-green-700">System is automatically backed up {backupConfig.schedule.toLowerCase()}</p>
            </div>

            {/* Schedule Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Backup Schedule</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedSchedule('daily')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedSchedule === 'daily'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <Calendar size={20} className="mx-auto mb-1" />
                  <p className="text-xs font-bold">Daily</p>
                </button>
                <button
                  onClick={() => setSelectedSchedule('weekly')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedSchedule === 'weekly'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <Calendar size={20} className="mx-auto mb-1" />
                  <p className="text-xs font-bold">Weekly</p>
                </button>
              </div>
            </div>

            {/* Backup Details */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <p className="text-slate-500 mb-1">Last Backup</p>
                <p className="font-bold text-slate-800">{backupConfig.lastBackup}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <p className="text-slate-500 mb-1">Next Backup</p>
                <p className="font-bold text-blue-600">{backupConfig.nextBackup}</p>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Lock size={16} className="text-purple-600" />
                <p className="text-sm font-bold text-purple-800">Encryption: {backupConfig.encryption}</p>
              </div>
              <p className="text-xs text-purple-700">All backups are encrypted with military-grade AES-256 encryption</p>
            </div>

            {/* Storage Location */}
            <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
              <div className="flex items-center gap-2 mb-2">
                <Cloud size={16} className="text-cyan-600" />
                <p className="text-sm font-bold text-cyan-800">Storage Location</p>
              </div>
              <p className="text-xs text-cyan-700">{backupConfig.backupLocation}</p>
            </div>

            {/* Settings Button */}
            <button className="w-full py-3 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 text-slate-600 hover:text-blue-600 font-bold rounded-xl text-sm transition-all flex flex-col items-center gap-0.5 shadow-sm border border-slate-200 hover:border-blue-200">
              <div className="flex items-center gap-2">
                <Settings size={18} />
                Configure Settings
              </div>
              <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
            </button>
          </div>
        </div>

        {/* Manual Backup & Actions */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Play size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Manual Backup & Actions</h3>
              <p className="text-sm text-slate-500">Trigger backups on-demand</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Manual Backup Button */}
            <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex flex-col items-center gap-1 shadow-md shadow-purple-500/20">
              <div className="flex items-center gap-2">
                <Play size={20} />
                <span>Trigger Manual Backup Now</span>
              </div>
              <span className="text-xs text-white/70">Creates full system backup immediately</span>
              <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
            </button>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl font-bold text-sm transition-all border border-green-200 flex flex-col items-center gap-1">
                <Download size={20} />
                <span>Download Latest</span>
                <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
              </button>
              <button className="p-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl font-bold text-sm transition-all border border-blue-200 flex flex-col items-center gap-1">
                <Upload size={20} />
                <span>Restore Data</span>
                <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
              </button>
            </div>

            {/* Storage Breakdown */}
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Storage Breakdown</h4>
              <div className="space-y-3">
                {storageBreakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">{item.category}</span>
                      <span className="font-bold text-slate-600">{item.size}</span>
                    </div>
                    <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-800 mb-1">Retention Policy</p>
                  <p className="text-xs text-amber-700">Backups are retained for {backupConfig.retentionPeriod}. Older backups are automatically archived.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          RESTORE POINTS MANAGEMENT
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Archive className="text-blue-500" size={24} />
                Restore Points Management
              </h2>
              <p className="text-sm text-slate-500">Available backup snapshots for data recovery</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Lock size={14} className="text-green-500" />
              <span className="font-bold text-green-600">AES-256 Encrypted</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar-hidden">
          {restorePoints.map((point) => (
            <div key={point.id} className={`p-6 rounded-2xl border-2 transition-all group ${
              point.status === 'Completed'
                ? 'bg-gradient-to-br from-white to-green-50/20 border-green-200 hover:shadow-lg hover:border-green-300'
                : 'bg-gradient-to-br from-white to-red-50/20 border-red-200'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    point.status === 'Completed' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <Database size={24} className={point.status === 'Completed' ? 'text-green-600' : 'text-red-600'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-slate-800 text-lg">Backup #{point.id}</h4>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1 ${getStatusColor(point.status)}`}>
                        {getTypeIcon(point.type)}
                        {point.type}
                      </span>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(point.status)}`}>
                        {point.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{point.timestamp}</p>

                    {point.status === 'Completed' ? (
                      <>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3 text-xs">
                          <div>
                            <p className="text-slate-500 font-medium mb-1">Size</p>
                            <p className="font-bold text-slate-800">{point.size}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium mb-1">Duration</p>
                            <p className="font-bold text-slate-800">{point.duration}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium mb-1">Encryption</p>
                            <div className="flex items-center gap-1">
                              <Lock size={12} className="text-purple-500" />
                              <p className="font-bold text-purple-600">{point.encryption}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium mb-1">Location</p>
                            <div className="flex items-center gap-1">
                              <Cloud size={12} className="text-cyan-500" />
                              <p className="font-bold text-cyan-600">{point.location}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium mb-1">Checksum</p>
                            <p className="font-mono text-[10px] font-bold text-slate-700">{point.checksum}</p>
                          </div>
                        </div>

                        {/* Data Included */}
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3">
                          <p className="text-xs font-bold text-slate-600 mb-2">Data Included:</p>
                          <div className="flex flex-wrap gap-2">
                            {point.dataIncluded.map((data, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-semibold border border-blue-200">
                                {data}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <button className="flex-1 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <Download size={14} />
                              Download Encrypted
                            </div>
                            <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                          </button>
                          <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <Upload size={14} />
                              Restore from Point
                            </div>
                            <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                          </button>
                          <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <Eye size={14} />
                              View Details
                            </div>
                            <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="bg-red-100 p-3 rounded-xl border border-red-200">
                        <div className="flex items-center gap-2">
                          <AlertTriangle size={16} className="text-red-600" />
                          <p className="text-sm font-bold text-red-800">Backup Failed</p>
                        </div>
                        <p className="text-xs text-red-700 mt-1">{point.errorMessage}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Security Info */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 border border-purple-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-purple-500 text-white rounded-2xl">
            <Shield size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-purple-900 mb-2">Security & Encryption Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-purple-700 font-semibold mb-1">Encryption Standard</p>
                <p className="text-purple-900 font-bold">AES-256 (Military Grade)</p>
              </div>
              <div>
                <p className="text-purple-700 font-semibold mb-1">Storage Location</p>
                <p className="text-purple-900 font-bold">AWS S3 - Verified Servers</p>
              </div>
              <div>
                <p className="text-purple-700 font-semibold mb-1">Compliance</p>
                <p className="text-purple-900 font-bold">PDPA & ISO 27001 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default BackupSettings;
