import React from 'react';
import { Lock, Shield, Bell, CheckCircle, AlertCircle, Layout, Download, FileText } from 'lucide-react';

export const SecurityTab = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Lock className="text-blue-500" size={24}/> Security & Password
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-blue-600">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-blue-600">New Password</label>
                    <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-blue-600">Confirm Password</label>
                    <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <button className="px-6 py-3 text-white rounded-xl font-bold text-sm shadow-lg transition-all bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/30 hover:scale-[1.02]">
                    Update Password
                </button>
            </div>
            
            <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                        <Shield size={18} className="text-green-500"/> Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">Add an extra layer of security to your account.</p>
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <CheckCircle size={16} />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">Enabled</span>
                        </div>
                        <button className="text-xs font-bold text-slate-500 border px-3 py-1 rounded-lg hover:bg-slate-50">Configure</button>
                    </div>
                </div>

                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                        <div className="flex items-start gap-3">
                        <AlertCircle className="text-amber-500 flex-shrink-0" size={20} />
                        <div>
                            <h3 className="text-sm font-bold text-amber-800 mb-1">Login Alerts</h3>
                            <p className="text-xs text-amber-700">Get notified of unrecognized login attempts.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
);

export const PreferencesTab = ({ preferences, setPreferences }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Bell className="text-blue-500" size={24}/> System Preferences
        </h2>
        
        <div className="max-w-2xl space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                    <p className="font-bold text-slate-700">Email Notifications</p>
                    <p className="text-sm text-slate-500">Receive weekly digests and critical alerts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={preferences.emailNotifications} onChange={() => setPreferences(p => ({...p, emailNotifications: !p.emailNotifications}))} className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                    <p className="font-bold text-slate-700">SMS Alerts</p>
                    <p className="text-sm text-slate-500">Receive urgent security notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={preferences.smsNotifications} onChange={() => setPreferences(p => ({...p, smsNotifications: !p.smsNotifications}))} className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
            </div>

            <div className="pt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2"><Layout size={18} /> Dashboard Layout</h3>
                <div className="grid grid-cols-2 gap-4 max-w-md">
                    <button 
                    onClick={() => setPreferences({...preferences, dashboardLayout: 'grid'})}
                    className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${preferences.dashboardLayout === 'grid' ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-500' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                        <Layout size={24} className="opacity-50"/>
                        <span className="text-sm font-bold">Grid View</span>
                    </button>
                    
                    <button 
                    onClick={() => setPreferences({...preferences, dashboardLayout: 'list'})}
                    className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${preferences.dashboardLayout === 'list' ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-500' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                        <div className="flex flex-col gap-1 w-6 h-6 justify-center opacity-50">
                            <div className="w-full h-1 bg-current rounded"></div>
                            <div className="w-full h-1 bg-current rounded"></div>
                            <div className="w-full h-1 bg-current rounded"></div>
                        </div>
                        <span className="text-sm font-bold">List View</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export const PermissionsTab = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600">
                <Shield size={24} />
            </div>
            <div>
                <h2 className="text-lg font-bold text-slate-800">Role & Permissions</h2>
                <p className="text-slate-500 text-sm">You are logged in as <span className="font-bold text-slate-700">Student</span></p>
            </div>
        </div>

        <div className="space-y-4">
                <p className="text-sm font-bold uppercase text-blue-600">Granted Capabilities</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['View Grades', 'View Timetable', 'Submit Assignments', 'View Attendance', 'Access Library'].map((perm, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700">
                        <CheckCircle size={16} className="flex-shrink-0 text-blue-600" />
                        {perm}
                    </div>
                ))}
                </div>
        </div>
    </div>
);

export const ActivityTab = ({ activityLog = [] }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Activity History</h2>
            <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                <Download size={16} /> Export CSV
            </button>
        </div>

        <div className="overflow-hidden bg-slate-50 rounded-xl border border-slate-100">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-500 font-bold uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Action</th>
                        <th className="px-6 py-4">Date & Time</th>
                        <th className="px-6 py-4">IP Address</th>
                        <th className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {activityLog && activityLog.length > 0 ? (
                        activityLog.map(log => (
                        <tr key={log.id} className="hover:bg-white transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-800">{log.action}</td>
                            <td className="px-6 py-4 text-slate-500">{log.time}</td>
                            <td className="px-6 py-4 text-slate-500 font-mono text-xs">{log.ip}</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Success
                                </span>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-6 py-8 text-center text-slate-400">
                                No activity log available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);
