import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Lock, Bell, Shield, FileText, 
  Save, Download, CheckCircle, AlertCircle, Camera,
  Mail, Phone, MapPin, Smartphone, History, ChevronRight, Plus
} from 'lucide-react';
import { PARENT_DATA } from '../../../data/parentData';

const ParentProfile = () => {
  const { user, children } = PARENT_DATA;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Theme configuration for Parent
  const theme = {
    gradient: 'from-cyan-400 via-blue-400 to-pink-400',
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  };

  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    sms: false,
    push: true
  });

  const [preferredCommMode, setPreferredCommMode] = useState('Email');

  const loginHistory = [
    { device: "Chrome on Windows", ip: "192.168.1.1", time: "Today, 10:30 AM", location: "Singapore" },
    { device: "Safari on iPhone", ip: "10.0.0.123", time: "Yesterday, 8:15 PM", location: "Singapore" },
    { device: "App on Android", ip: "172.16.0.5", time: "Jan 18, 9:00 AM", location: "Singapore" },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleNotification = (type) => {
    setNotificationPrefs(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>
           <p className="text-slate-500 text-sm">Manage your personal information, security, and preferences.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
           <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-8">
              {/* Dynamic Gradient Header in Card */}
              <div className={`h-32 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
                 <div className="absolute bottom-0 -left-8 w-24 h-24 bg-pink-300 opacity-30 rounded-full blur-xl"></div>
                 <div className="absolute top-4 left-1/3 w-16 h-16 bg-blue-200 opacity-25 rounded-full blur-lg"></div>
              </div>
              <div className="px-6 pb-6 -mt-16 flex flex-col items-center text-center relative z-10">
                 <div className="relative group cursor-pointer mb-3">
                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                           <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Camera size={20} className="text-white" />
                    </div>
                 </div>
                 <h3 className="font-bold text-slate-800 text-lg">{user.name}</h3>
                 <span className={`text-xs font-bold px-3 py-1 rounded-full mt-1 ${theme.bg} ${theme.text} uppercase tracking-wider`}>{user.role}</span>
              </div>
              <nav className="p-3 space-y-1">
                 {[
                   { id: 'profile', label: 'Personal Info', icon: <User size={18} /> },
                   { id: 'security', label: 'Security & Login', icon: <Lock size={18} /> },
                   { id: 'preferences', label: 'Preferences', icon: <Bell size={18} /> },
                   { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
                   { id: 'activity', label: 'Activity Log', icon: <FileText size={18} /> },
                 ].map(tab => (
                   <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                       activeTab === tab.id 
                         ? 'bg-white text-blue-600 shadow-md font-bold' 
                         : 'text-slate-500 hover:bg-white/10 hover:text-slate-900'
                     }`}
                   >
                     {tab.icon}
                     {tab.label}
                   </button>
                 ))}
                 <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4 border-t border-slate-100"
                 > 
                    <Shield size={18} /> Logout
                 </button>
              </nav>
           </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 space-y-6">
           
           {/* PERSONAL INFO TAB */}
           {activeTab === 'profile' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-lg font-bold text-slate-800">Personal Information</h2>
                   <button 
                     className={`px-4 py-2 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 bg-gradient-to-r ${theme.gradient}`}
                   >
                      <Save size={16} /> Save Changes
                   </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={user.name} 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Email Address</label>
                      <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                          <Mail size={16} className="text-slate-400" />
                          <span className="text-slate-600">admin.parent@krimson.edu</span>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Phone Number</label>
                      <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                          <Phone size={16} className="text-slate-400" />
                          <span className="text-slate-600">+65 9123 4567</span>
                      </div>
                   </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Address</label>
                      <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
                          <MapPin size={16} className="text-slate-400" />
                          <span className="text-slate-600">12, Orchard Road, Singapore</span>
                      </div>
                   </div>

                   {/* Preferred Communication */}
                   <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Preferred Communication Mode</label>
                      <div className="flex gap-2">
                        {['Email', 'SMS', 'App'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setPreferredCommMode(mode)}
                            className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                              preferredCommMode === mode 
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Linked Students moved here */}
                   <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <label className={`text-xs font-bold uppercase ${theme.text}`}>Linked Students</label>
                        <button className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1.5 transition-all hover:shadow-md hover:scale-105 active:scale-95 bg-gradient-to-r ${theme.gradient}`}>
                            <Plus size={14} /> Add Student
                        </button>
                      </div>
                      <div className="space-y-3">
                         {children.map((child) => (
                           <div key={child.id} className="flex items-center gap-4 p-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors bg-white group cursor-pointer hover:border-blue-200 hover:shadow-sm">
                             <div className="relative">
                               <img src={child.photo} alt={child.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                               <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                             </div>
                             <div className="flex-1">
                               <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{child.name}</h4>
                               <p className="text-xs text-slate-500">{child.class} • ID: {child.id}</p>
                             </div>
                             <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" size={18} />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
           )}

           {/* SECURITY TAB */}
           {activeTab === 'security' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <h2 className="text-lg font-bold text-slate-800 mb-6">Security & Login</h2>
                
                <div className="space-y-6">
                   <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="bg-green-100 p-3 rounded-full text-green-600">
                             <Shield size={20} />
                         </div>
                         <div>
                             <h3 className="font-bold text-slate-800 text-sm">Two-Factor Authentication</h3>
                             <p className="text-xs text-slate-500">Secure your account with 2FA</p>
                         </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">Active</span>
                   </div>

                   <div className="space-y-4 max-w-md">
                      <h3 className="text-sm font-bold text-slate-700 border-b border-slate-100 pb-2">Change Password</h3>
                       <div className="space-y-2">
                          <label className={`text-xs font-bold uppercase ${theme.text}`}>Current Password</label>
                          <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                       </div>
                       <div className="space-y-2">
                          <label className={`text-xs font-bold uppercase ${theme.text}`}>New Password</label>
                          <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                       </div>
                       <button className={`px-6 py-2.5 text-white rounded-xl font-bold text-sm shadow-lg transition-all bg-gradient-to-r ${theme.gradient}`}>
                          Update Password
                       </button>
                   </div>
                   
                   <div className="mt-8 pt-6 border-t border-slate-100">
                       <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                         <History size={16} /> Recent Login Activity
                       </h3>
                       <div className="space-y-2">
                         {loginHistory.map((login, idx) => (
                           <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                             <div className="flex items-center gap-3">
                               <Smartphone size={16} className="text-slate-400" />
                               <div>
                                 <p className="font-bold text-slate-700">{login.device}</p>
                                 <p className="text-xs text-slate-500">{login.location} • {login.ip}</p>
                               </div>
                             </div>
                             <span className="text-xs font-medium text-slate-500">{login.time}</span>
                           </div>
                         ))}
                       </div>
                   </div>
                </div>
             </div>
           )}
           
           {/* PREFERENCES TAB */}
           {activeTab === 'preferences' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <h2 className="text-lg font-bold text-slate-800 mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                   {[
                     { id: 'email', label: 'Email Alerts', icon: Mail, desc: "Receive updates via email" },
                     { id: 'sms', label: 'SMS Notifications', icon: Smartphone, desc: "Get urgent updates via SMS" },
                     { id: 'push', label: 'Push Notifications', icon: Bell, desc: "In-app alerts and updates" }
                   ].map((item) => (
                     <div key={item.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${notificationPrefs[item.id] ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-700">{item.label}</p>
                            <p className="text-xs text-slate-400">{item.desc}</p>
                          </div>
                        </div>
                        {/* Toggle Switch */}
                        <button 
                          onClick={() => toggleNotification(item.id)}
                          className={`w-12 h-7 rounded-full transition-colors relative ${
                            notificationPrefs[item.id] ? 'bg-cyan-500' : 'bg-slate-200'
                          }`}
                        >
                          <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            notificationPrefs[item.id] ? 'left-6' : 'left-1'
                          }`} />
                        </button>
                     </div>
                   ))}
                </div>
             </div>
           )}

           {/* PERMISSIONS TAB */}
           {activeTab === 'permissions' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme.bg} ${theme.text}`}>
                        <Shield size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Role & Permissions</h2>
                        <p className="text-slate-500 text-sm">You are logged in as <span className="font-bold text-slate-700">{user.role}</span></p>
                    </div>
                </div>

                <div className="space-y-4">
                     <p className={`text-sm font-bold uppercase ${theme.text}`}>Granted Capabilities</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['View Child Progress', 'View Attendance', 'Pay Fees', 'Contact Teachers', 'View Events'].map((perm, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700">
                               <CheckCircle size={16} className={`flex-shrink-0 ${theme.text}`} />
                               {perm}
                           </div>
                        ))}
                     </div>
                </div>
             </div>
           )}

            {/* ACTIVITY LOG TAB */}
            {activeTab === 'activity' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
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
                              <th className="px-6 py-4">Status</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                           {[
                              { action: 'Logged In', time: 'Today, 10:30 AM', status: 'Success' },
                              { action: 'Viewed Report Card', time: 'Yesterday, 8:45 PM', status: 'Success' },
                              { action: 'Paid Term Fees', time: 'Jan 15, 2:00 PM', status: 'Success' }
                           ].map((log, i) => (
                              <tr key={i} className="hover:bg-white transition-colors">
                                 <td className="px-6 py-4 font-medium text-slate-800">{log.action}</td>
                                 <td className="px-6 py-4 text-slate-500">{log.time}</td>
                                 <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                       <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {log.status}
                                    </span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                 </div>
              </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default ParentProfile;
