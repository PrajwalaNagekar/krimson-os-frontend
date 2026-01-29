import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  GitCommit, 
  AlertCircle,
  Shield,
  Clock,
  CheckCircle,
  RefreshCw,
  Search,
  Filter,
  FileBarChart,
  Terminal,
  Database,
  Server
} from 'lucide-react';

const AuditMaintenanceLog = () => {
  // Static data for UI demonstration
  const [systemInfo] = useState({
    version: '4.5.2',
    lastUpdate: '2026-01-15',
    nextUpdate: '2026-02-01',
    status: 'Stable',
    branch: 'production/main'
  });

  const [stats] = useState({
    totalLogs: '12,450',
    securityIncidents: 3,
    maintenanceTasks: 45,
    lastAudit: '2 hours ago'
  });

  const [logs] = useState([
    {
      id: 'LOG-20260119-001',
      action: 'System Patch Applied',
      category: 'Maintenance',
      user: 'System AUTO',
      role: 'System',
      date: '2026-01-19 14:30:22',
      status: 'Success',
      details: 'Security patch KB-4592 applied successfully'
    },
    {
      id: 'LOG-20260119-002',
      action: 'User Role Modified',
      category: 'Security',
      user: 'Sarah Admin',
      role: 'Super Admin',
      date: '2026-01-19 13:15:10',
      status: 'Success',
      details: 'Elevated privileges for user: john.doe'
    },
    {
      id: 'LOG-20260119-003',
      action: 'Database Backup',
      category: 'Maintenance',
      user: 'Automated Job',
      role: 'System',
      date: '2026-01-19 04:00:00',
      status: 'Success',
      details: 'Daily full backup to AWS S3'
    },
    {
      id: 'LOG-20260118-045',
      action: 'Failed Login Attempt',
      category: 'Incident',
      user: 'Unknown IP',
      role: 'N/A',
      date: '2026-01-18 22:45:12',
      status: 'Flagged',
      details: 'Multiple failed attempts from 192.168.1.105'
    },
    {
      id: 'LOG-20260118-032',
      action: 'Config Updated',
      category: 'Update',
      user: 'Mike IT',
      role: 'System Admin',
      date: '2026-01-18 10:20:00',
      status: 'Success',
      details: 'Updated firewall rules for port 8080'
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Audit & Maintenance Log
          </h1>
          <p className="text-slate-600">Track all maintenance activities, system updates, and security audit trails</p>
        </div>

        {/* System Version & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* System Version Card */}
          <div className="group relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
                  <GitCommit size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">System Version</p>
                  <h2 className="text-3xl font-bold text-white drop-shadow-sm">{systemInfo.version}</h2>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Status</span>
                  <span className="flex items-center gap-1 text-white font-bold text-sm bg-green-500/20 px-2 py-1 rounded-lg border border-green-400/30">
                    <CheckCircle size={14} className="text-green-300" /> {systemInfo.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Last Update</span>
                  <span className="text-white font-bold text-sm">{systemInfo.lastUpdate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Next Scheduled</span>
                  <span className="text-white font-bold text-sm">{systemInfo.nextUpdate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                  <FileText size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">Total Logs</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">{stats.totalLogs}</h3>
              <p className="text-xs text-slate-500">Recorded activities this year</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-100 rounded-2xl text-red-600">
                  <AlertCircle size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">Incidents</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">{stats.securityIncidents}</h3>
              <p className="text-xs text-slate-500">Security flags requiring attention</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                  <RefreshCw size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">Maintenance</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">{stats.maintenanceTasks}</h3>
              <p className="text-xs text-slate-500">Tasks completed this month</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                  <Clock size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">Last Audit</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{stats.lastAudit}</h3>
              <p className="text-xs text-slate-500">System scan completed</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Activity Log */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Terminal className="text-slate-600" size={24} />
                    System Activity Log
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Real-time audit trail of all system events</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5" title="Search Logs">
                     <Search size={18} />
                     <span className="text-[8px] font-normal">get in app</span>
                  </button>
                  <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5" title="Filter Logs">
                     <Filter size={18} />
                     <span className="text-[8px] font-normal">get in app</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 transition-all shadow-md hover:shadow-lg cursor-not-allowed opacity-75 flex-col leading-tight gap-0.5">
                     <span className="flex items-center gap-2"><Download size={16} /> Export CSV</span>
                     <span className="text-[9px] opacity-60 font-normal">get in app</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Log ID & Date</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Action & Details</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">User</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {logs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="p-4">
                          <p className="text-xs font-mono font-bold text-slate-500 mb-1">{log.id}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-400">
                            <Clock size={10} /> {log.date}
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-sm font-bold text-slate-800 mb-1">{log.action}</p>
                          <p className="text-xs text-slate-500 max-w-xs truncate">{log.details}</p>
                          <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                            log.category === 'Incident' ? 'bg-red-50 text-red-600 border-red-100' :
                            log.category === 'Security' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                            'bg-blue-50 text-blue-600 border-blue-100'
                          }`}>
                            {log.category.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                {log.user.charAt(0)}
                             </div>
                             <div>
                               <p className="text-xs font-bold text-slate-700">{log.user}</p>
                               <p className="text-[10px] text-slate-400">{log.role}</p>
                             </div>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                            log.status === 'Success' ? 'bg-green-100 text-green-700' :
                            log.status === 'Flagged' ? 'bg-red-100 text-red-700' :
                            'bg-slate-100 text-slate-700'
                          }`}>
                            {log.status === 'Success' ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                 <button className="text-blue-500 hover:text-blue-700 text-sm font-bold transition-colors cursor-not-allowed opacity-75 flex flex-col items-center w-full">
                    <span>View All Logs</span>
                    <span className="text-[9px] opacity-60 font-normal text-slate-400">get in app</span>
                 </button>
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            
            {/* Audit Reports */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 shadow-lg">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <FileBarChart className="text-purple-500" size={20} />
                 Audit Reports
               </h3>
               <p className="text-xs text-slate-500 mb-4">Generate and download comprehensive system audit summaries.</p>
               
               <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white rounded-lg shadow-sm text-red-500"><Shield size={16}/></div>
                       <div>
                         <p className="text-xs font-bold text-slate-700">Security Audit</p>
                         <p className="text-[10px] text-slate-400">Last 30 Days</p>
                       </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
                       <Download size={16} />
                       <span className="text-[8px]">app</span>
                    </button>
                 </div>

                 <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white rounded-lg shadow-sm text-blue-500"><Database size={16}/></div>
                       <div>
                         <p className="text-xs font-bold text-slate-700">Data Integrity</p>
                         <p className="text-[10px] text-slate-400">Full Report</p>
                       </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
                       <Download size={16} />
                       <span className="text-[8px]">app</span>
                    </button>
                 </div>

                 <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white rounded-lg shadow-sm text-green-500"><Server size={16}/></div>
                       <div>
                         <p className="text-xs font-bold text-slate-700">Performance Log</p>
                         <p className="text-[10px] text-slate-400">Weekly Summary</p>
                       </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
                       <Download size={16} />
                       <span className="text-[8px]">app</span>
                    </button>
                 </div>
               </div>
            </div>

            {/* Incident Report Generator */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-orange-500/20 rounded-lg backdrop-blur-md">
                     <AlertCircle className="text-orange-400" size={20} />
                   </div>
                   <h3 className="font-bold">Incident Report</h3>
                 </div>
                 
                 <p className="text-xs text-slate-400 mb-6">
                   Generate a formal incident report for security breaches or system failures. 
                   Includes automated log attachment.
                 </p>

                 <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-bold hover:shadow-lg hover:from-orange-400 hover:to-red-400 transition-all cursor-not-allowed opacity-75 flex flex-col items-center leading-tight gap-0.5">
                    <span className="flex items-center gap-2 text-sm"><FileText size={16} /> Generate Report</span>
                    <span className="text-[9px] opacity-70 font-normal text-white">get in app</span>
                 </button>
               </div>
            </div>

            {/* Integration Note */}
            {/* <div className="p-4 rounded-3xl bg-blue-50/50 border border-blue-100">
               <p className="text-[10px] text-slate-500 leading-relaxed text-center">
                 <span className="font-bold text-blue-600 block mb-1">System Integration Active</span>
                 Connected to <span className="font-semibold">Audit Database</span> and <span className="font-semibold">Admin Configuration API</span> based on system settings.
               </p>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditMaintenanceLog;
