import React, { useState } from 'react';
import { 
  Database, 
  Cloud, 
  RefreshCw, 
  CheckCircle,
  HardDrive,
  Calendar,
  Clock,
  Shield,
  Download,
  Upload,
  Settings,
  AlertCircle,
  Server,
  FolderOpen,
  Activity,
  Zap,
  Archive,
  XCircle
} from 'lucide-react';

const BackupRecoveryCenter = () => {
  // Static data - to be replaced with dynamic API later
  const [backupStats] = useState({
    lastBackup: '2026-01-19 17:30:00',
    lastBackupStatus: 'Success',
    nextScheduled: '2026-01-20 02:00:00',
    totalBackups: 145,
    totalSize: '2.4 TB',
    integrityScore: '100%',
    cloudStorage: 'AWS S3 (ap-south-1)',
    localStorage: '/var/backups/krimson',
    encryption: 'AES-256',
    retentionPeriod: '90 days'
  });

  const [backupSchedule] = useState({
    automated: {
      enabled: true,
      frequency: 'Daily',
      time: '02:00 AM',
      type: 'Full Backup',
      destination: 'Cloud + Local'
    },
    manual: {
      lastTriggered: '2026-01-15 14:30:00',
      triggeredBy: 'Admin User',
      status: 'Completed'
    }
  });

  const [restorePoints] = useState([
    {
      id: 'BKP-20260119-1730',
      version: 'v4.2.15',
      date: '2026-01-19 17:30:00',
      type: 'Automated Full',
      size: '18.5 GB',
      location: 'Cloud + Local',
      status: 'Verified',
      tags: ['Stable', 'Production']
    },
    {
      id: 'BKP-20260118-0200',
      version: 'v4.2.14',
      date: '2026-01-18 02:00:00',
      type: 'Automated Full',
      size: '18.3 GB',
      location: 'Cloud + Local',
      status: 'Verified',
      tags: ['Stable']
    },
    {
      id: 'BKP-20260117-1445',
      version: 'v4.2.13',
      date: '2026-01-17 14:45:00',
      type: 'Manual Incremental',
      size: '2.1 GB',
      location: 'Local Only',
      status: 'Verified',
      tags: ['Pre-Update']
    },
    {
      id: 'BKP-20260117-0200',
      version: 'v4.2.12',
      date: '2026-01-17 02:00:00',
      type: 'Automated Full',
      size: '18.1 GB',
      location: 'Cloud + Local',
      status: 'Verified',
      tags: ['Stable']
    },
    {
      id: 'BKP-20260116-0200',
      version: 'v4.2.11',
      date: '2026-01-16 02:00:00',
      type: 'Automated Full',
      size: '17.9 GB',
      location: 'Cloud',
      status: 'Corrupted',
      tags: ['Failed']
    }
  ]);

  const [cloudBackupSummary] = useState({
    provider: 'AWS S3',
    region: 'ap-south-1 (Mumbai)',
    totalSize: '1.8 TB',
    filesCount: '2,45,678',
    lastSync: '5 mins ago',
    syncStatus: 'Active',
    bandwidth: '125 Mbps'
  });

  const [localBackupSummary] = useState({
    path: '/var/backups/krimson',
    totalSize: '650 GB',
    filesCount: '1,12,340',
    diskSpace: '42% used',
    lastBackup: '12 hours ago',
    status: 'Healthy'
  });

  const [integrityLog] = useState([
    { id: 1, timestamp: '2026-01-19 17:35:00', file: 'BKP-20260119-1730', status: 'Passed', checksum: 'MD5: a8f5f167...', message: 'All files verified successfully' },
    { id: 2, timestamp: '2026-01-18 02:15:00', file: 'BKP-20260118-0200', status: 'Passed', checksum: 'MD5: b2d4e891...', message: 'Integrity check completed' },
    { id: 3, timestamp: '2026-01-17 14:50:00', file: 'BKP-20260117-1445', status: 'Passed', checksum: 'MD5: c9e7f234...', message: 'Incremental backup verified' },
    { id: 4, timestamp: '2026-01-16 02:20:00', file: 'BKP-20260116-0200', status: 'Failed', checksum: 'N/A', message: 'Checksum mismatch detected - file corrupted' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Backup & Data Recovery Center
          </h1>
          <p className="text-slate-600">Ensure system resilience and data safety</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Last Backup */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-fit mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Last Backup</h3>
              <p className="text-lg font-bold text-slate-800 mb-2">{backupStats.lastBackup}</p>
              <div className="flex items-center gap-1 text-xs">
                <CheckCircle size={14} className="text-green-500" />
                <span className="text-green-600 font-bold">{backupStats.lastBackupStatus}</span>
              </div>
            </div>
          </div>

          {/* Next Scheduled */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-fit mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Next Scheduled</h3>
              <p className="text-lg font-bold text-slate-800 mb-2">{backupStats.nextScheduled}</p>
              <p className="text-xs text-slate-500">Automated Daily Cycle</p>
            </div>
          </div>

          {/* Total Backups */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl w-fit mb-4">
                <Archive className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Total Backups</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {backupStats.totalBackups}
              </p>
              <p className="text-xs text-slate-500 mt-1">{backupStats.totalSize} total size</p>
            </div>
          </div>

          {/* Data Integrity */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-cyan-400 opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl w-fit mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Data Integrity</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                {backupStats.integrityScore}
              </p>
              <p className="text-xs text-slate-500 mt-1">Verified via Checksum</p>
            </div>
          </div>
        </div>

        {/* Backup Scheduling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Automated Backup Schedule */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Zap className="text-cyan-500" size={24} />
                    Automated Backup Schedule
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Scheduled backup configuration</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
                  backupSchedule.automated.enabled ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${backupSchedule.automated.enabled ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  {backupSchedule.automated.enabled ? 'Active' : 'Inactive'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-slate-500 uppercase font-bold">Frequency</p>
                    <p className="text-sm font-bold text-slate-800">{backupSchedule.automated.frequency}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-slate-500 uppercase font-bold">Time</p>
                    <p className="text-sm font-bold text-slate-800">{backupSchedule.automated.time}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-slate-500 uppercase font-bold">Type</p>
                    <p className="text-sm font-bold text-slate-800">{backupSchedule.automated.type}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-500 uppercase font-bold">Destination</p>
                    <p className="text-sm font-bold text-slate-800">{backupSchedule.automated.destination}</p>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
                  <span className="flex items-center gap-2">
                    <Settings size={18} />
                    Configure Schedule
                  </span>
                  <span className="text-[9px] opacity-60 font-normal">get in app</span>
                </button>
              </div>
            </div>
          </div>

          {/* Manual Backup */}
          <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 lg:p-8 text-white shadow-xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Upload size={24} />
                  Manual Backup Trigger
                </h3>
                <p className="text-white/80 text-sm">Initiate on-demand backup process</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/20">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/70">Last Manual Backup</span>
                    <span className="text-sm font-bold">{backupSchedule.manual.lastTriggered}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/70">Triggered By</span>
                    <span className="text-sm font-bold">{backupSchedule.manual.triggeredBy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/70">Status</span>
                    <span className="text-sm font-bold flex items-center gap-1">
                      <CheckCircle size={14} />
                      {backupSchedule.manual.status}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-2xl font-bold transition-all duration-200 border border-white/30 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
                <span className="flex items-center gap-2">
                  <RefreshCw size={18} />
                  Trigger Manual Backup
                </span>
                <span className="text-[9px] opacity-60 font-normal">get in app</span>
              </button>
            </div>
          </div>
        </div>

        {/* Restore Points */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Database className="text-blue-500" size={28} />
                  Restore Point Selection
                </h3>
                <p className="text-sm text-slate-500 mt-1">Version-tagged backup history</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="space-y-3">
                {restorePoints.map((point) => (
                  <div 
                    key={point.id} 
                    className={`p-4 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-md ${
                      point.status === 'Verified' 
                        ? 'bg-green-50/50 border-green-500 hover:bg-green-50' 
                        : 'bg-red-50/50 border-red-500 hover:bg-red-50'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-bold text-slate-800">{point.id}</p>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-bold">
                            {point.version}
                          </span>
                          {point.status === 'Verified' ? (
                            <CheckCircle size={16} className="text-green-600" />
                          ) : (
                            <XCircle size={16} className="text-red-600" />
                          )}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-slate-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Clock size={12} className="text-slate-400" />
                            <span>{point.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity size={12} className="text-slate-400" />
                            <span>{point.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <HardDrive size={12} className="text-slate-400" />
                            <span>{point.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FolderOpen size={12} className="text-slate-400" />
                            <span>{point.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {point.tags.map((tag, i) => (
                            <span 
                              key={i} 
                              className={`px-2 py-1 rounded-full text-xs font-bold ${
                                tag === 'Failed' || tag === 'Corrupted' ? 'bg-red-100 text-red-700' :
                                tag === 'Production' || tag === 'Stable' ? 'bg-green-100 text-green-700' :
                                'bg-blue-100 text-blue-700'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button 
                        disabled={point.status !== 'Verified'}
                        className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-200 flex flex-col items-center gap-0.5 leading-tight whitespace-nowrap ${
                          point.status === 'Verified'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg cursor-not-allowed opacity-75'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {point.status === 'Verified' ? (
                          <>
                            <span className="flex items-center gap-2">
                              <Download size={16} />
                              Restore
                            </span>
                            <span className="text-[9px] opacity-60 font-normal">get in app</span>
                          </>
                        ) : (
                          <>
                            <Download size={16} />
                            Unavailable
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & Local Backup Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cloud Backup Summary */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Cloud className="text-cyan-500" size={24} />
                    Cloud Backup Summary
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{cloudBackupSummary.provider}</p>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {cloudBackupSummary.syncStatus}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Region</p>
                  <p className="text-sm font-bold text-slate-800">{cloudBackupSummary.region}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Total Size</p>
                  <p className="text-sm font-bold text-slate-800">{cloudBackupSummary.totalSize}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Files Count</p>
                  <p className="text-sm font-bold text-slate-800">{cloudBackupSummary.filesCount}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Bandwidth</p>
                  <p className="text-sm font-bold text-slate-800">{cloudBackupSummary.bandwidth}</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500">Last Sync: <span className="font-bold text-slate-700">{cloudBackupSummary.lastSync}</span></p>
              </div>
            </div>
          </div>

          {/* Local Backup Summary */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Server className="text-pink-500" size={24} />
                    Local Backup Summary
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 font-mono text-xs">{localBackupSummary.path}</p>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-2">
                  <CheckCircle size={14} />
                  {localBackupSummary.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Total Size</p>
                  <p className="text-sm font-bold text-slate-800">{localBackupSummary.totalSize}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Files Count</p>
                  <p className="text-sm font-bold text-slate-800">{localBackupSummary.filesCount}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Disk Usage</p>
                  <p className="text-sm font-bold text-slate-800">{localBackupSummary.diskSpace}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-pink-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Last Backup</p>
                  <p className="text-sm font-bold text-slate-800">{localBackupSummary.lastBackup}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: '42%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Integrity Verification Log */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-cyan-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Shield className="text-green-500" size={28} />
                  Data Integrity Verification Log
                </h3>
                <p className="text-sm text-slate-500 mt-1">Checksum validation history</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-green-50 to-cyan-50 text-slate-600 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4 rounded-tl-xl">Timestamp</th>
                    <th className="p-4">Backup File</th>
                    <th className="p-4">Checksum</th>
                    <th className="p-4">Message</th>
                    <th className="p-4 rounded-tr-xl text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {integrityLog.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <p className="text-sm text-slate-700 font-medium font-mono">{log.timestamp}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-slate-800 font-bold">{log.file}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-xs text-slate-500 font-mono">{log.checksum}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-slate-600">{log.message}</p>
                      </td>
                      <td className="p-4 text-center">
                        {log.status === 'Passed' ? (
                          <div className="flex justify-center">
                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
                              <CheckCircle size={14} />
                              Passed
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold flex items-center gap-1">
                              <AlertCircle size={14} />
                              Failed
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Emergency Recovery */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-red-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-400 to-pink-400 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <AlertCircle className="text-red-500" size={24} />
                  Disaster Recovery
                </h3>
                <p className="text-sm text-slate-500 mt-1">Emergency system rollback capability</p>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-2xl border border-red-100 mb-4">
              <p className="text-sm text-red-800">
                <span className="font-bold">⚠️ Warning:</span> Rollback will restore the system to a previous stable state. 
                This action is logged and requires administrative approval. All recent changes will be reverted.
              </p>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200 cursor-not-allowed opacity-75 flex flex-col items-center gap-0.5 leading-tight">
              <span className="flex items-center gap-2">
                <RefreshCw size={18} />
                Initiate Emergency Rollback
              </span>
              <span className="text-[9px] opacity-60 font-normal">get in app</span>
            </button>
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

export default BackupRecoveryCenter;
