import React, { useState } from 'react';
import UserProfile from '../../../components/common/UserProfile';
import { STUDENT_DATA } from '../../../data/studentData';
import { authService } from '../../../services/authService';
import { X, Plus, Trash2, Camera, User, Phone, Mail, Lock, Bell, CheckCircle, Shield, FileText, Download, AlertCircle, Layout } from 'lucide-react';

const ProfileAndGoals = () => {
  const { profile, user, analytics, profileActivityLog } = STUDENT_DATA;
  const [profileData, setProfileData] = useState(profile);
  const [userData, setUserData] = useState(authService.getCurrentUser() || user);
  
  // Tab State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'security', 'preferences', 'permissions', 'activity'

  // Modal States
  const [activeModal, setActiveModal] = useState(null); 
  const [newItemText, setNewItemText] = useState('');

  // Settings State 
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: 'grid',
    theme: 'light'
  });

  const activityLog = profileActivityLog.recentActivity;

  // Handlers
  const handleEditProfile = () => setActiveModal('profile');
  const handleEditGoals = () => setActiveModal('goals');
  const handleEditInterests = () => setActiveModal('interests');
  const handleEditClubs = () => setActiveModal('clubs');
  const closeModal = () => {
    setActiveModal(null);
    setNewItemText('');
  };

  const handleAddItem = (field) => {
    if (!newItemText.trim()) return;
    setProfileData(prev => ({
      ...prev,
      [field]: [...prev[field], newItemText]
    }));
    setNewItemText('');
  };

  const handleRemoveItem = (field, index) => {
    setProfileData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleUpdateUser = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      setUserData(prev => ({
          ...prev,
          name: formData.get('name'),
          email: formData.get('email'), 
          phone: formData.get('phone'),
      }));
      closeModal();
  };

  const combinedProfileData = {
    ...profileData,
    overallGrade: analytics.grade,
    onEditProfile: handleEditProfile,
    onEditGoals: handleEditGoals,
    onEditInterests: handleEditInterests,
    onEditClubs: handleEditClubs,
  };

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
          <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      
      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 flex overflow-x-auto">
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
                className={`flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
            >
                {tab.icon}
                {tab.label}
            </button>
        ))}
      </div>

      {/* Main Content Area */}
      
      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
          <UserProfile 
            role="student" 
            user={userData}
            detailedInfo={combinedProfileData}
          />
      )}

      {/* SECURITY TAB */}
      {activeTab === 'security' && (
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
      )}

      {/* PREFERENCES TAB */}
      {activeTab === 'preferences' && (
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
      )}

      {/* PERMISSIONS TAB */}
      {activeTab === 'permissions' && (
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
      )}

      {/* ACTIVITY LOG TAB */}
      {activeTab === 'activity' && (
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
                </div>
            </div>
      )}

      {/* Modals */}
      {/* 1. Edit Profile Modal */}
      {activeModal === 'profile' && (
        <Modal title="Edit Personal Profile">
          <form onSubmit={handleUpdateUser} className="space-y-6">
            <div className="flex justify-center">
               <div className="relative group cursor-pointer">
                  <img src={userData.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-slate-100" />
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <Camera className="text-white" size={24} />
                  </div>
               </div>
            </div>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-slate-400" size={18} />
                        <input type="text" name="name" defaultValue={userData.name} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                        <input type="email" name="email" defaultValue={userData.email || "student@school.edu"} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700" />
                    </div>
                </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                        <input type="tel" name="phone" defaultValue={userData.phone || "+1 234 567 890"} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700" />
                    </div>
                </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-5 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors">Cancel</button>
                <button type="submit" className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg hover:scale-105 transition-all">Save Changes</button>
            </div>
          </form>
        </Modal>
      )}

      {/* 2. Edit Goals Modal */}
      {activeModal === 'goals' && (
        <Modal title="Manage Academic Goals">
           <div className="space-y-4">
              <div className="flex gap-2">
                 <input 
                    type="text" 
                    placeholder="Add a new goal..." 
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddItem('goals')}
                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
                 />
                 <button onClick={() => handleAddItem('goals')} className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors">
                    <Plus size={24} />
                 </button>
              </div>
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                 {profileData.goals.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                       <span className="font-semibold text-slate-700">{item}</span>
                       <button onClick={() => handleRemoveItem('goals', idx)} className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                       </button>
                    </li>
                 ))}
                 {profileData.goals.length === 0 && <p className="text-center text-slate-400 text-sm py-4">No goals added yet.</p>}
              </ul>
              <div className="pt-4 flex justify-end">
                <button onClick={closeModal} className="px-5 py-2 rounded-xl font-bold text-white bg-blue-500 shadow-md hover:shadow-lg hover:scale-105 transition-all">Done</button>
              </div>
           </div>
        </Modal>
      )}

      {/* 3. Edit Interests Modal */}
      {activeModal === 'interests' && (
        <Modal title="Update Interests">
           <div className="space-y-4">
              <div className="flex gap-2">
                 <input 
                    type="text" 
                    placeholder="Add an interest..." 
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddItem('interests')}
                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-semibold text-slate-700"
                 />
                 <button onClick={() => handleAddItem('interests')} className="bg-pink-500 text-white p-2 rounded-xl hover:bg-pink-600 transition-colors">
                    <Plus size={24} />
                 </button>
              </div>
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                 {profileData.interests.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                       <span className="font-semibold text-slate-700">{item}</span>
                       <button onClick={() => handleRemoveItem('interests', idx)} className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                       </button>
                    </li>
                 ))}
                 {profileData.interests.length === 0 && <p className="text-center text-slate-400 text-sm py-4">No interests added yet.</p>}
              </ul>
              <div className="pt-4 flex justify-end">
                <button onClick={closeModal} className="px-5 py-2 rounded-xl font-bold text-white bg-pink-500 shadow-md hover:shadow-lg hover:scale-105 transition-all">Done</button>
              </div>
           </div>
        </Modal>
      )}

      {/* 4. Edit Clubs Modal */}
      {activeModal === 'clubs' && (
        <Modal title="Manage Clubs">
           <div className="space-y-4">
              <div className="flex gap-2">
                 <input 
                    type="text" 
                    placeholder="Add a club..." 
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddItem('clubs')}
                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all font-semibold text-slate-700"
                 />
                 <button onClick={() => handleAddItem('clubs')} className="bg-cyan-500 text-white p-2 rounded-xl hover:bg-cyan-600 transition-colors">
                    <Plus size={24} />
                 </button>
              </div>
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                 {profileData.clubs.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                       <span className="font-semibold text-slate-700">{item}</span>
                       <button onClick={() => handleRemoveItem('clubs', idx)} className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                       </button>
                    </li>
                 ))}
                 {profileData.clubs.length === 0 && <p className="text-center text-slate-400 text-sm py-4">No clubs joined yet.</p>}
              </ul>
              <div className="pt-4 flex justify-end">
                <button onClick={closeModal} className="px-5 py-2 rounded-xl font-bold text-white bg-cyan-500 shadow-md hover:shadow-lg hover:scale-105 transition-all">Done</button>
              </div>
           </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileAndGoals;
