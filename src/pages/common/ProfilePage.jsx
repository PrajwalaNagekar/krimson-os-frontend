
import React, { useState } from 'react';
import { 
  User, Lock, Bell, Layout, Shield, FileText, 
  Save, Download, CheckCircle, AlertCircle, Camera,
  UserCheck, Key, FileSignature, Clock, Settings, Users,
  Briefcase, Award, Star, Upload, GraduationCap, Medal, LineChart
} from 'lucide-react';

import { authService } from '../../services/authService';

const ROLE_PERMISSIONS = {
  'Administrator': ['Manage Users', 'System Config', 'Audit Logs', 'Financial Access', 'Database Backup', 'Security settings'],
  'Principal': ['View All Students', 'Staff Management', 'Approve Leaves', 'View Financial Reports', 'Academic Oversight'],
  'Teacher': ['View Assigned Classes', 'Grade Students', 'Take Attendance', 'View Class Schedule', 'Upload Resources'],
  'Student': ['View Grades', 'View Timetable', 'Submit Assignments', 'View Attendance', 'Access Library'],
  'Parent': ['View Child Progress', 'View Attendance', 'Pay Fees', 'Contact Teachers', 'View Events'],
  'Registrar': ['Manage Admissions', 'Update Student Records', 'Issue Certificates', 'View Class Lists'],
  'Finance': ['Manage Invoices', 'Track Payments', 'Generate Fee Reports', 'Process Refunds'],
  'Librarian': ['Manage Books', 'Issue/Return Books', 'Track Overdue Books', 'Order New Books'],
  'Academic Coordinator': ['Curriculum Planning', 'Approve Lesson Plans', 'Schedule Exams', 'Teacher Evaluation'],
  'System Admin': ['Server Maintenance', 'Network Config', 'User Access Control', 'System Updates'],
  'Counselor': ['Student Counseling', 'View Behavior Reports', 'Schedule Sessions', 'Private Notes'],
  'Management': ['View Analytics', 'Financial Overview', 'Strategic Reports', 'Staff Performance'],
  'IT/System Admin': ['Server Maintenance', 'Network Config', 'User Access Control', 'System Updates'],
  'Default': ['View Profile', 'Update Settings']
};

const ROLE_THEMES = {
  'Administrator': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Principal': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Teacher': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Student': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Parent': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Management': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Director': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Registrar': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Finance': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'IT/System Admin': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Librarian': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Academic Coordinator': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Coordinator': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Counselor': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'School Counselor': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  'Default': { gradient: 'from-cyan-400 via-blue-400 to-pink-400', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' }
};

const ProfilePage = ({ roleOverride }) => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Initialize with default values, using roleOverride if available
  const [user, setUser] = useState({
    name: 'Dr. Sarah Mitchell',
    email: 'sarah.mitchell@krimson.edu',
    phone: '',
    role: roleOverride || '',
    avatar: '',
    bio: ''
  });

  const theme = ROLE_THEMES[user.role] || ROLE_THEMES['Default'];

  React.useEffect(() => {
    const fetchUserData = () => {
        const currentUser = authService.getCurrentUser();
        const currentRole = localStorage.getItem('currentRole'); // Or get from authService if added

        if (currentUser) {
            setUser(prev => ({
                ...prev,
                name: currentUser.name || prev.name,
                email: currentUser.email || prev.email,
                phone: currentUser.phone || '',
                role: roleOverride || currentRole || currentUser.role || 'User',
                avatar: currentUser.avatar || '',
                bio: currentUser.bio || `Principal / ${roleOverride || currentRole || 'User'}`
            }));
        } else if (roleOverride) {
            // Mock data fallback for dev/preview
             setUser(prev => ({
                ...prev,
                role: roleOverride,
                bio: `${roleOverride} :: Faculty`,
                email: 'teacher@krimson.edu'
            }));
        }
    };
    
    fetchUserData();
  }, [roleOverride]);

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: 'grid', // 'grid' | 'list'
    theme: 'light'
  });

  const [activityLog] = useState([
    { id: 1, action: 'Login', time: 'Today, 09:00 AM', ip: '192.168.1.1' },
    { id: 2, action: 'Updated User Role', time: 'Yesterday, 04:30 PM', ip: '192.168.1.1' },
    { id: 3, action: 'Exported Reports', time: 'Jan 05, 10:15 AM', ip: '192.168.1.1' },
  ]);

  const handleSaveProfile = () => {
    alert('Profile updated successfully! (Mock Action)');
  };

  const handleExportLog = () => {
    alert('Exporting Activity Log... (Mock Action: CSV Download)');
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
              {/* Dynamic Gradient Header in Card with Decorative Blobs */}
              <div className={`h-32 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
                 {/* Decorative Blobs matching sidebar */}
                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
                 <div className="absolute bottom-0 -left-8 w-24 h-24 bg-pink-300 opacity-30 rounded-full blur-xl"></div>
                 <div className="absolute top-4 left-1/3 w-16 h-16 bg-blue-200 opacity-25 rounded-full blur-lg"></div>
              </div>
              <div className="px-6 pb-6 -mt-16 flex flex-col items-center text-center relative z-10">
                 <div className="relative group cursor-pointer mb-3">
                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                           {user.avatar ? (
                             <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                           ) : (
                             <User size={32} />
                           )}
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
                   ...(user.role === 'Principal' ? [{ id: 'credentials', label: 'Credentials & Access', icon: <FileSignature size={18} /> }] : []),
                   ...(user.role === 'Teacher' ? [{ id: 'portfolio', label: 'Professional Portfolio', icon: <Briefcase size={18} /> }] : []),
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
                     onClick={handleSaveProfile}
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
                        value={user.name} 
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Email Address</label>
                      <input 
                        type="email" 
                        value={user.email} 
                        readOnly
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl opacity-70 cursor-not-allowed"
                      />
                      <p className="text-[10px] text-slate-400">Email managed by Organization Admin</p>
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Phone Number</label>
                      <input 
                        type="tel" 
                        value={user.phone} 
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
                      />
                   </div>
                   <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Bio / About</label>
                      <textarea 
                        rows="3"
                        value={user.bio} 
                        onChange={(e) => setUser({...user, bio: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors resize-none"
                      />
                   </div>
                </div>
             </div>
           )}

           {/* SECURITY TAB */}
           {activeTab === 'security' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <h2 className="text-lg font-bold text-slate-800 mb-6">Security & Password</h2>
                
                <div className="max-w-md space-y-4">
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>New Password</label>
                      <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                   </div>
                   <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${theme.text}`}>Confirm Password</label>
                      <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                   </div>
                   <button className={`px-6 py-2.5 text-white rounded-xl font-bold text-sm shadow-lg transition-all bg-gradient-to-r ${theme.gradient}`}>
                      Update Password
                   </button>
                   
                   <div className="mt-8 pt-6 border-t border-slate-100">
                      <h3 className="text-sm font-bold text-slate-700 mb-2">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.bg} ${theme.text}`}>
                               <Shield size={20} />
                            </div>
                            <div>
                               <p className="font-bold text-sm text-slate-700">2FA is currently Active</p>
                               <p className="text-xs text-slate-500">Protecting account via SMS (+65...)</p>
                            </div>
                         </div>
                         <button className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:text-slate-800">
                            Configure
                         </button>
                      </div>
                   </div>
                </div>
             </div>
           )}
           
           {/* PREFERENCES TAB */}
           {activeTab === 'preferences' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <h2 className="text-lg font-bold text-slate-800 mb-6">System Preferences</h2>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="font-bold text-slate-700">Email Notifications</p>
                         <p className="text-sm text-slate-500">Receive weekly digests and critical alerts</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={preferences.emailNotifications} onChange={() => setPreferences(p => ({...p, emailNotifications: !p.emailNotifications}))} className="sr-only peer" />
                        <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}></div>
                      </label>
                   </div>
                   
                   <div className="flex items-center justify-between">
                      <div>
                         <p className="font-bold text-slate-700">SMS Alerts</p>
                         <p className="text-sm text-slate-500">Receive urgent security notifications</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={preferences.smsNotifications} onChange={() => setPreferences(p => ({...p, smsNotifications: !p.smsNotifications}))} className="sr-only peer" />
                        <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}></div>
                      </label>
                   </div>

                   <hr className="border-slate-100" />
                   
                   <div>
                       <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2"><Layout size={18} /> Dashboard Layout</h3>
                       <div className="grid grid-cols-2 gap-4 max-w-md">
                          <button 
                            onClick={() => setPreferences({...preferences, dashboardLayout: 'grid'})}
                            className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${preferences.dashboardLayout === 'grid' ? `${theme.border} ${theme.bg} ${theme.text} ring-1 ring-inset ${theme.border}` : 'border-slate-200 hover:border-slate-300'}`}
                          >
                             <div className="grid grid-cols-2 gap-1 w-12 h-12 opacity-50">
                                <div className="bg-current rounded"></div>
                                <div className="bg-current rounded"></div>
                                <div className="bg-current rounded"></div>
                                <div className="bg-current rounded"></div>
                             </div>
                             <span className="text-sm font-bold">Grid View</span>
                          </button>
                          
                          <button 
                            onClick={() => setPreferences({...preferences, dashboardLayout: 'list'})}
                            className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${preferences.dashboardLayout === 'list' ? `${theme.border} ${theme.bg} ${theme.text} ring-1 ring-inset ${theme.border}` : 'border-slate-200 hover:border-slate-300'}`}
                          >
                             <div className="flex flex-col gap-1 w-12 h-12 opacity-50">
                                <div className="bg-current h-2 rounded w-full"></div>
                                <div className="bg-current h-2 rounded w-full"></div>
                                <div className="bg-current h-2 rounded w-full"></div>
                             </div>
                             <span className="text-sm font-bold">List View</span>
                          </button>
                       </div>
                   </div>
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
                        {(ROLE_PERMISSIONS[user.role] || ROLE_PERMISSIONS['Default']).map((perm, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700">
                               <CheckCircle size={16} className={`flex-shrink-0 ${theme.text}`} />
                               {perm}
                           </div>
                        ))}
                     </div>
                </div>
             </div>
           )}

            {/* CREDENTIALS & ACCESS TAB (Principal Only) */}
            {activeTab === 'credentials' && user.role === 'Principal' && (
              <div className="space-y-6 animate-fade-in">
                {/* ... existing principal content ... */}
                {/* Digital Signature Management */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FileSignature className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Digital Signature Management</h3>
                      <p className="text-sm text-slate-600">For official document approvals</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                      <div>
                        <p className="text-xs text-slate-500">Status</p>
                        <div className="flex items-center gap-2 mt-1">
                          <CheckCircle className="text-green-600" size={16} />
                          <p className="font-bold text-green-600 text-sm">Active & Verified</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-4 bg-white rounded-xl">
                        <p className="text-xs text-slate-500">Issued On</p>
                        <p className="font-semibold text-slate-800 text-sm">01 Jan 2024</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl">
                        <p className="text-xs text-slate-500">Valid Until</p>
                        <p className="font-semibold text-slate-800 text-sm">31 Dec 2026</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <p className="text-xs text-slate-500 mb-1">Certificate ID</p>
                      <p className="font-mono font-bold text-slate-800 text-sm">DS-2024-P1001-K</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <p className="text-xs text-slate-500 mb-1">Security Level</p>
                      <div className="flex items-center gap-2">
                        <Shield className="text-purple-600" size={16} />
                        <p className="font-semibold text-purple-600 text-sm">Level 3 - Highest</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm">
                    <Settings size={16} />
                    <span>Manage Signature</span>
                    <span className="text-xs opacity-80">(get in app)</span>
                  </button>
                </div>

                {/* Proxy Access Assignment */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 md:p-8 rounded-2xl border-2 border-pink-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <UserCheck className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Proxy Access Assignment</h3>
                      <p className="text-sm text-slate-600">Delegate access to Vice Principal</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 mb-4 border border-slate-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                          <Users className="text-purple-700" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-base">Ms. Sarah Johnson</p>
                          <p className="text-xs text-slate-500">Vice Principal</p>
                        </div>
                      </div>
                      
                      {/* Toggle Switch */}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-600 peer-checked:to-purple-600"></div>
                      </label>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Access Level</span>
                        <span className="font-semibold text-slate-800">Temporary Administrative Access</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Granted On</span>
                        <span className="font-semibold text-slate-800">15 Jan 2026</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Valid Until</span>
                        <div className="flex items-center gap-1">
                          <Clock className="text-amber-600" size={14} />
                          <span className="font-semibold text-amber-600">31 Dec 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-600">Access Currently Active</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm mb-4">
                    <Key size={16} />
                    <span>Modify Access</span>
                    <span className="text-xs opacity-80">(get in app)</span>
                  </button>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-xs text-amber-800">
                        Proxy access grants temporary administrative permissions. Review and update regularly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Integration Info */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <Shield className="text-cyan-600" size={18} />
                        System Integration & Security
                      </h4>
                      <p className="text-sm text-slate-600">
                        This profile is synchronized with <span className="font-semibold text-blue-600">Single Sign-On (SSO)</span> and integrated with the <span className="font-semibold text-purple-600">HR/Staff Database</span> for seamless authentication and access management.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-xl border border-green-200">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-sm font-semibold text-green-700">SSO Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROFESSIONAL PORTFOLIO TAB (Teacher Only) */}
            {activeTab === 'portfolio' && user.role === 'Teacher' && (
               <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                     <div>
                        <h2 className="text-xl font-bold text-slate-800">Professional Portfolio</h2>
                        <p className="text-slate-500 text-sm">Manage your achievements, credentials, and growth milestones.</p>
                     </div>
                     <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2">
                        <Download size={18} />
                        Export Digital Portfolio
                     </button>
                  </div>

                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                           <Award size={24} />
                        </div>
                        <div>
                           <p className="text-2xl font-bold text-slate-800">12</p>
                           <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certifications</p>
                        </div>
                     </div>
                     <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                           <GraduationCap size={24} />
                        </div>
                        <div>
                           <p className="text-2xl font-bold text-slate-800">PhD</p>
                           <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Education Level</p>
                        </div>
                     </div>
                     <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-pink-50 text-pink-600 rounded-xl">
                           <Star size={24} />
                        </div>
                        <div>
                           <p className="text-2xl font-bold text-slate-800">4.8</p>
                           <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Avg Rating</p>
                        </div>
                     </div>
                  </div>

                  {/* Main Content Areas */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                     
                     {/* Left Column: Subjects & Credentials */}
                     <div className="space-y-6">
                        {/* Subjects Taught */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                              <Briefcase size={18} className="text-cyan-500" />
                              Subjects & Specializations
                           </h3>
                           <div className="flex flex-wrap gap-2">
                              {['Mathematics (Adv)', 'Physics', 'Statistics', 'Computer Science'].map((sub, i) => (
                                 <span key={i} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium border border-cyan-100">
                                    {sub}
                                 </span>
                              ))}
                              <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-500 rounded-lg text-sm hover:bg-slate-50 flex items-center gap-1 transition-colors">
                                 + Add Subject
                              </button>
                           </div>
                        </div>

                        {/* Credentials & Certificates */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                           <div className="flex justify-between items-center mb-4">
                              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                 <Medal size={18} className="text-blue-500" />
                                 Credentials
                              </h3>
                              <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                 <Upload size={14} /> Upload New
                              </button>
                           </div>
                           <div className="space-y-3">
                              {[
                                 { title: "Master of Education", issuer: "Harvard University", year: "2018", type: "Degree" },
                                 { title: "Advanced Teaching Certificate", issuer: "National Board", year: "2020", type: "Certificate" },
                                 { title: "STEM Workshop Leader", issuer: "TechEd Summit", year: "2023", type: "Workshop" }
                              ].map((cred, i) => (
                                 <div key={i} className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                                          <FileText size={18} />
                                       </div>
                                       <div>
                                          <p className="font-bold text-slate-800 text-sm">{cred.title}</p>
                                          <p className="text-xs text-slate-500">{cred.issuer} • {cred.year}</p>
                                       </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-blue-600 transition-all">
                                       <Download size={16} />
                                    </button>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Right Column: Growth & Endorsements */}
                     <div className="space-y-6">
                        {/* Professional Growth */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                              <LineChart size={18} className="text-green-500" />
                              Professional Growth
                           </h3>
                           <div className="space-y-4">
                              <div className="relative pl-4 border-l-2 border-slate-200 space-y-4">
                                 {[
                                    { title: "Attended Innovation in EdTech", date: "Dec 15, 2025", type: "Workshop" },
                                    { title: "Published Research on STEM", date: "Oct 10, 2025", type: "Publication" },
                                    { title: "Mentored Junior Staff", date: "Sep 01, 2025", type: "Mentorship" }
                                 ].map((item, i) => (
                                    <div key={i} className="relative">
                                       <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white"></div>
                                       <p className="text-sm font-bold text-slate-800">{item.title}</p>
                                       <p className="text-xs text-slate-500">{item.date} • {item.type}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Endorsements */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm border border-purple-100">
                           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                              <Star size={18} className="text-purple-500" />
                              Endorsements
                           </h3>
                           <div className="space-y-3">
                              <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-100">
                                 <p className="text-xs italic text-slate-600 mb-2">"Excellent dedication to student outcomes and innovative teaching methods."</p>
                                 <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                                    <p className="text-xs font-bold text-slate-800">Principal Williams</p>
                                 </div>
                              </div>
                              <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-100">
                                 <p className="text-xs italic text-slate-600 mb-2">"A collaborative team player who always supports peer growth."</p>
                                 <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                                    <p className="text-xs font-bold text-slate-800">Sarah Jenkins (Dept Head)</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Integration Footer */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                           <Users size={18} className="text-slate-500" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                           Synced with <span className="font-bold text-slate-700">HR Module</span> & <span className="font-bold text-slate-700">Staff Database</span>
                        </p>
                     </div>
                     <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-md font-bold">
                        Live Sync On
                     </span>
                  </div>
               </div>
            )}


           {/* ACTIVITY LOG TAB */}
           {activeTab === 'activity' && (
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-lg font-bold text-slate-800">Activity History</h2>
                   <button 
                     onClick={handleExportLog}
                     className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                   >
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
                          {activityLog.map(log => (
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
                          ))}
                       </tbody>
                    </table>
                    <div className="p-4 text-center border-t border-slate-200">
                       <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View All Activity</button>
                    </div>
                </div>

                <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                   <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                   <div>
                       <p className="text-sm font-bold text-blue-800">PDPA Compliance</p>
                       <p className="text-xs text-blue-600 mt-1">This log is maintained for security and compliance purposes. Records are retained for 365 days.</p>
                   </div>
                </div>
             </div>
           )}

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
