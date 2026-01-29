import React, { useState } from 'react';
import { 
  User, Shield, Lock, Bell, FileText, Settings, 
  Camera, Save, CheckCircle, Clock, AlertCircle, 
  FileSignature, UserCheck, Users, Briefcase, Award, 
  Calendar, Phone, Mail, MapPin, GraduationCap, Upload, Edit3
} from 'lucide-react';

const PrincipalProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Theme configuration
  const theme = {
    gradient: 'from-cyan-400 via-blue-400 to-pink-400',
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  };

  // Static Data
  const [user, setUser] = useState({
    name: 'Dr. Robert Anderson',
    title: 'Principal & Chief Academic Officer',
    email: 'robert.anderson@krimsonschool.edu',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    bio: 'Dedicated educational leader with a passion for fostering academic excellence and holistic student development. Committed to creating an inclusive learning environment that empowers both students and staff.',
    profileImage: null,
    employeeId: 'P-1001',
    joinDate: 'January 2018',
    qualification: 'PhD in Educational Leadership',
    experience: '18 years in Education'
  });

  const achievements = [
    'National Excellence Award in Education 2024',
    'Certified Educational Administrator',
    'Published 12 research papers on pedagogy'
  ];

  const professionalHistory = [
    { year: '2018 - Present', role: 'Principal', institution: 'Krimson International School' },
    { year: '2014 - 2018', role: 'Vice Principal', institution: 'Delhi Public School' },
    { year: '2010 - 2014', role: 'Academic Coordinator', institution: 'St. Xavier\'s School' }
  ];

  const signatureData = {
    status: 'active',
    issuedOn: '01 Jan 2024',
    validUntil: '31 Dec 2026',
    certificateId: 'DS-2024-P1001-K',
    issuer: 'National Digital Signature Authority',
    securityLevel: 'Level 3 - Highest'
  };

  const proxyData = {
    assignedTo: 'Ms. Sarah Johnson',
    role: 'Vice Principal',
    accessLevel: 'Temporary Administrative Access',
    validUntil: '31 Dec 2026',
    status: 'active',
    grantedOn: '15 Jan 2026'
  };

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: 'grid'
  });

  const activityLog = [
    { id: 1, action: 'Login', time: 'Today, 09:00 AM', ip: '192.168.1.1' },
    { id: 2, action: 'Approved Leave Request', time: 'Yesterday, 04:30 PM', ip: '192.168.1.1' },
    { id: 3, action: 'Exported Financial Report', time: 'Jan 05, 10:15 AM', ip: '192.168.1.1' },
  ];

  const handleSave = () => {
    // Mock save
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Account Settings</h1>
           <p className="text-slate-500 text-sm md:text-base">Manage your personal information, security, and institutional credentials.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Navigation */}
        <div className="w-full lg:w-72 flex-shrink-0">
           <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden sticky top-8">
              {/* Dynamic Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
                 <div className="absolute bottom-0 -left-8 w-24 h-24 bg-pink-300 opacity-30 rounded-full blur-xl"></div>
              </div>
              <div className="px-6 pb-6 -mt-16 flex flex-col items-center text-center relative z-10">
                 <div className="relative group cursor-pointer mb-3">
                    <div className="w-28 h-28 rounded-3xl bg-white p-1.5 shadow-xl">
                        <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                           {user.profileImage ? (
                             <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                           ) : (
                             <User size={40} />
                           )}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Camera size={24} className="text-white" />
                    </div>
                 </div>
                 <h3 className="font-bold text-slate-800 text-xl">{user.name}</h3>
                 <span className={`text-xs font-bold px-3 py-1 rounded-full mt-2 ${theme.bg} ${theme.text} uppercase tracking-wider`}>Principal</span>
              </div>
              
              <nav className="p-4 space-y-1">
                 {[
                   { id: 'overview', label: 'Profile Overview', icon: <User size={18} /> },
                   { id: 'security', label: 'Security & Login', icon: <Lock size={18} /> },
                   { id: 'preferences', label: 'Preferences', icon: <Bell size={18} /> },
                   { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
                   { id: 'activity', label: 'Activity Log', icon: <FileText size={18} /> },
                 ].map(tab => (
                   <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all ${
                       activeTab === tab.id 
                         ? 'bg-gradient-to-r from-slate-50 to-white text-blue-600 shadow-md border border-slate-100 font-bold' 
                         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
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
           
           {/* PROFILE OVERVIEW TAB */}
           {activeTab === 'overview' && (
             <div className="space-y-6 animate-fade-in">
               <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-xl font-bold text-slate-800">Personal Information</h2>
                     <button 
                       onClick={handleSave}
                       className={`px-5 py-2.5 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 bg-gradient-to-r ${theme.gradient}`}
                     >
                        <Save size={18} /> Save Changes
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
                        <label className={`text-xs font-bold uppercase ${theme.text}`}>Professional Title</label>
                        <input 
                          type="text" 
                          value={user.title} 
                          onChange={(e) => setUser({...user, title: e.target.value})}
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
                          rows="4"
                          value={user.bio} 
                          onChange={(e) => setUser({...user, bio: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors resize-none"
                        />
                     </div>
                  </div>
               </div>

               {/* Professional History Section */}
               <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <Briefcase className="text-indigo-500" size={24} />
                      Professional History
                    </h2>
                    <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      <Edit3 size={16} /> Edit
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {professionalHistory.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Briefcase size={20} />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-lg">{item.role}</p>
                          <p className="text-slate-600 font-medium">{item.institution}</p>
                          <p className="text-sm text-indigo-500 font-bold mt-1 bg-indigo-50 inline-block px-3 py-1 rounded-lg">{item.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Achievements Section */}
               <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
                    <Award className="text-amber-500" size={24} />
                    Key Achievements
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-slate-800 font-medium">{achievement}</p>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
           )}

           {/* SECURITY TAB */}
           {activeTab === 'security' && (
             <div className="space-y-6 animate-fade-in">
                {/* Standard Password Change */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6">Security & Password</h2>
                  <div className="max-w-lg space-y-4">
                     <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${theme.text}`}>Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                     </div>
                     <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${theme.text}`}>New Password</label>
                        <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                     </div>
                     <button className={`px-6 py-3 text-white rounded-xl font-bold text-sm shadow-md transition-all bg-gradient-to-r ${theme.gradient}`}>
                        Update Password
                     </button>
                  </div>
                </div>

                {/* Digital Signature Management */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-3xl border-2 border-blue-200 shadow-md">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                         <FileSignature className="text-white" size={28} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-800 text-lg md:text-xl">Digital Signature Management</h3>
                         <p className="text-slate-600">For official document approvals and certifications</p>
                      </div>
                   </div>

                   <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                         <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                            <div className="flex items-center gap-2 mt-1">
                               <CheckCircle className="text-green-600" size={18} />
                               <p className="font-bold text-green-600">Active & Verified</p>
                            </div>
                         </div>
                         <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-200"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="p-4 bg-white rounded-2xl shadow-sm">
                            <p className="text-xs text-slate-500 font-bold uppercase">Issued On</p>
                            <p className="font-bold text-slate-800 mt-1">{signatureData.issuedOn}</p>
                         </div>
                         <div className="p-4 bg-white rounded-2xl shadow-sm">
                            <p className="text-xs text-slate-500 font-bold uppercase">Valid Until</p>
                            <p className="font-bold text-slate-800 mt-1">{signatureData.validUntil}</p>
                         </div>
                      </div>

                      <div className="p-4 bg-white rounded-2xl shadow-sm">
                         <p className="text-xs text-slate-500 font-bold uppercase mb-1">Certificate ID</p>
                         <p className="font-mono font-bold text-slate-800">{signatureData.certificateId}</p>
                      </div>
                   </div>

                   <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <Settings size={18} />
                      <span>Manage Signature Configuration</span>
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white">(get in app)</span>
                   </button>
                </div>
             </div>
           )}
           
           {/* PREFERENCES TAB */}
           {activeTab === 'preferences' && (
             <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fade-in relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <h2 className="text-xl font-bold text-slate-800 mb-6">System Preferences</h2>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div>
                         <p className="font-bold text-slate-800">Email Notifications</p>
                         <p className="text-sm text-slate-500">Receive weekly digests and critical alerts</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={preferences.emailNotifications} onChange={() => setPreferences(p => ({...p, emailNotifications: !p.emailNotifications}))} className="sr-only peer" />
                        <div className={`w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}></div>
                      </label>
                   </div>
                   
                   <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div>
                         <p className="font-bold text-slate-800">SMS Alerts</p>
                         <p className="text-sm text-slate-500">Receive urgent security notifications</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={preferences.smsNotifications} onChange={() => setPreferences(p => ({...p, smsNotifications: !p.smsNotifications}))} className="sr-only peer" />
                        <div className={`w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}></div>
                      </label>
                   </div>
                </div>
             </div>
           )}

           {/* PERMISSIONS TAB */}
           {activeTab === 'permissions' && (
             <div className="space-y-6 animate-fade-in">
                {/* Proxy Access Assignment */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 md:p-8 rounded-3xl border-2 border-pink-200 shadow-md">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                         <UserCheck className="text-white" size={28} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-800 text-lg md:text-xl">Proxy Access Assignment</h3>
                         <p className="text-slate-600">Delegate administrative access to Vice Principal</p>
                      </div>
                   </div>

                   <div className="bg-white rounded-2xl p-6 mb-6 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                               <Users className="text-purple-700" size={24} />
                            </div>
                            <div>
                               <p className="font-bold text-slate-800 text-lg">{proxyData.assignedTo}</p>
                               <p className="text-purple-600 font-bold text-sm bg-purple-50 px-2 py-0.5 rounded-lg inline-block">{proxyData.role}</p>
                            </div>
                         </div>
                         <div className="w-12 h-7 relative inline-flex items-center cursor-pointer">
                            <div className="w-12 h-7 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                            <div className="absolute right-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                         </div>
                      </div>

                      <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">Access Level</span>
                            <span className="font-bold text-slate-700">{proxyData.accessLevel}</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">Valid Until</span>
                            <div className="flex items-center gap-1">
                               <Clock className="text-amber-600" size={14} />
                               <span className="font-bold text-amber-600">{proxyData.validUntil}</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <Settings size={18} />
                      <span>Modify Proxy Settings</span>
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white">(get in app)</span>
                   </button>
                   
                   <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                      <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-amber-800 font-medium">
                        Proxy admin access allows full control over student and staff records. Please audit this access regularly.
                      </p>
                   </div>
                </div>

                {/* Role Capabilities (Generic) */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
                   <h2 className="text-lg font-bold text-slate-800 mb-4">Your Administrative Privileges</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['View All Students', 'Staff Management', 'Approve Leaves', 'View Financial Reports', 'Academic Oversight', 'Event Management'].map((perm, i) => (
                         <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-700">
                            <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                            {perm}
                         </div>
                      ))}
                   </div>
                </div>
             </div>
           )}

           {/* ACTIVITY LOG TAB */}
           {activeTab === 'activity' && (
             <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fade-in relative overflow-hidden">
                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}></div>
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-bold text-slate-800">Activity History</h2>
                   <button 
                     className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                   >
                     <FileText size={16} /> Export CSV
                   </button>
                </div>

                <div className="overflow-hidden bg-slate-50 rounded-2xl border border-slate-100">
                    <table className="w-full text-sm text-left">
                       <thead className="bg-slate-100 text-slate-500 font-bold uppercase text-xs">
                          <tr>
                             <th className="px-6 py-4">Action</th>
                             <th className="px-6 py-4">Time</th>
                             <th className="px-6 py-4">Status</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                          {activityLog.map(log => (
                             <tr key={log.id} className="hover:bg-white transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-800">{log.action}</td>
                                <td className="px-6 py-4 text-slate-500 font-medium">{log.time}</td>
                                <td className="px-6 py-4">
                                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Success
                                   </span>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                    <div className="p-4 text-center border-t border-slate-200">
                       <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 mx-auto">
                          View Full History <Users size={12} />
                       </button>
                    </div>
                </div>
             </div>
           )}

        </div>
      </div>
    </div>
  );
};

export default PrincipalProfile;
