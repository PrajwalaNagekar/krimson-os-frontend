import React, { useState, useEffect } from 'react';
import { 
  UserPlus, Edit, Key, Lock, CheckCircle, XCircle, AlertTriangle, 
  Search, Shield, X, Save 
} from 'lucide-react';
import { ROLE_LABELS } from '../../../../utils/constants';

// ==========================================
// SHARED: USER SEARCH COMPONENT
// ==========================================
export const UserSearchStep = ({ onUserFound, users, actionLabel }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError('Please enter a User ID or Email');
      return;
    }

    const user = users.find(u => 
      u.userId?.toLowerCase() === searchTerm.toLowerCase() || 
      u.email?.toLowerCase() === searchTerm.toLowerCase()
    );

    if (user) {
      onUserFound(user);
      setError('');
    } else {
      setError('User not found. Please check the ID or Email.');
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs font-bold text-slate-500 uppercase">
          Search User to {actionLabel}
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter User ID (e.g. USR2024001) or Email"
              className="w-full border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-blue-500/30"
          >
            Search
          </button>
        </div>
        {error && (
          <p className="text-xs text-red-500 font-bold flex items-center gap-1 animate-fadeIn">
            <AlertTriangle size={12} /> {error}
          </p>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 1. ADD USER FORM
// ==========================================
export const AddUserForm = ({ onCancel, onSave, allRoles }) => {
  const [formData, setFormData] = useState({
    name: '', email: '',  department: 'Academic', 
    grade: '', roles: [], status: 'Active'
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || formData.roles.length === 0) {
      alert('Please fill all required fields (Name, Email, Role)');
      return;
    }
    // Ensure department is set if not present (defaulting to Academic is already done in state)
    onSave(formData);
    // Reset form after save if needed, or parent handles it
    setFormData({
        name: '', email: '',  department: 'Academic', 
        grade: '', roles: [], status: 'Active'
    });
  };

  return (
    <div className="w-full animate-slideDown">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe"
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email (SSO ID) *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="user@school.edu"
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300 transition-colors"
          />
        </div>
        <div>
           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Role *</label>
           <div className="relative">
             <select 
               value={formData.roles[0] || ""} 
               onChange={(e) => setFormData({...formData, roles: [e.target.value]})}
               className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none bg-white appearance-none hover:border-blue-300 transition-colors cursor-pointer"
             >
               <option value="" disabled>Select Role...</option>
               {Object.values(ROLE_LABELS).map((role) => (
                 <option key={role} value={role}>{role}</option>
               ))}
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
             </div>
           </div>
        </div>
        <div>
             <button 
                onClick={handleSubmit} 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <UserPlus size={18} /> Add User
              </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. EDIT USER FORM
// ==========================================
export const EditUserForm = ({ user, onCancel, onSave, allRoles }) => {
  const [formData, setFormData] = useState({ ...user });

  const toggleRole = (roleName) => {
    if (formData.roles.includes(roleName)) {
      setFormData(prev => ({ ...prev, roles: prev.roles.filter(r => r !== roleName) }));
    } else {
      setFormData(prev => ({ ...prev, roles: [...prev.roles, roleName] }));
    }
  };

  return (
    <div className="w-full animate-slideDown border-t-2 border-slate-100 pt-6 mt-2">
      <div className="flex items-center gap-4 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm">
            {user.name.charAt(0)}
         </div>
         <div>
            <h3 className="font-bold text-slate-800">Editing: {user.name}</h3>
            <p className="text-xs text-slate-500 font-mono">ID: {user.userId}</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300 transition-colors"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Manage Roles</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {Object.values(ROLE_LABELS).map((roleName) => {
            return (
              <div 
                key={roleName}
                onClick={() => toggleRole(roleName)}
                className={`cursor-pointer p-3 rounded-xl border-2 flex items-center gap-3 transition-all ${
                  formData.roles.includes(roleName)
                    ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-blue-300 hover:shadow-sm'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                  formData.roles.includes(roleName) ? 'bg-blue-600 border-blue-600' : 'border-slate-300'
                }`}>
                  {formData.roles.includes(roleName) && <CheckCircle size={14} className="text-white" />}
                </div>
                <span className="text-xs font-bold">{roleName}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
        <button onClick={onCancel} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
          Cancel
        </button>
        <button 
          onClick={() => onSave(formData)} 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-blue-500/30 flex items-center gap-2"
        >
          <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 3. SUSPEND USER FORM
// ==========================================
export const SuspendUserForm = ({ user, onCancel, onSave }) => {
  const [reason, setReason] = useState(user.suspensionReason || '');
  const isSuspended = user.status === 'Suspended';

  return (
    <div className="w-full animate-slideDown border-t-2 border-slate-100 pt-6 mt-2">
      <div className={`flex items-center gap-4 mb-6 p-4 rounded-xl border shadow-sm ${isSuspended ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
         <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-sm ${isSuspended ? 'bg-white text-green-600' : 'bg-white text-red-600'}`}>
            <AlertTriangle size={24} />
         </div>
         <div>
            <h3 className={`font-bold ${isSuspended ? 'text-green-800' : 'text-red-800'}`}>
              {isSuspended ? 'Activate User Account' : 'Suspend User Account'}
            </h3>
            <p className="text-xs opacity-80 font-semibold">{user.name} ({user.email})</p>
         </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Current Roles</label>
        <div className="flex flex-wrap gap-2">
           {user.roles.map(r => (
             <span key={r} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200 shadow-sm">
               {r}
             </span>
           ))}
        </div>
      </div>

      {!isSuspended && (
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Reason for Suspension *</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please provide a detailed reason for suspension..."
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-red-500 outline-none h-32 resize-none hover:border-red-200 transition-colors"
          />
        </div>
      )}

      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
        <button onClick={onCancel} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
          Cancel
        </button>
        <button 
          onClick={() => onSave(user, reason)} 
          className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-all flex items-center gap-2 ${
             isSuspended 
               ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-500/30' 
               : 'bg-gradient-to-r from-red-500 to-rose-600 shadow-red-500/40' // Premium Red Gradient
          }`}
        >
          {isSuspended ? <CheckCircle size={18} /> : <Lock size={18} />}
          {isSuspended ? 'Activate User' : 'Suspend User'}
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 4. RESET PASSWORD FORM
// ==========================================
export const ResetPasswordForm = ({ user, onCancel, onSave }) => {
  return (
    <div className="w-full animate-slideDown border-t-2 border-slate-100 pt-6 mt-2">
       <div className="flex items-center gap-4 mb-6 bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm">
         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-yellow-600 font-bold shadow-sm">
            <Key size={24} />
         </div>
         <div>
            <h3 className="font-bold text-yellow-800">Reset Password</h3>
            <p className="text-xs text-yellow-700 font-medium">Send a password reset link to <span className="font-bold">{user.email}</span>?</p>
         </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 shadow-inner">
         <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase">User Account</span>
            <span className="px-2 py-1 bg-white rounded border border-slate-200 text-[10px] font-bold text-slate-500">{user.userId}</span>
         </div>
         <p className="text-lg font-bold text-slate-800">{user.name}</p>
         <p className="text-sm text-slate-500">{user.email}</p>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
        <button onClick={onCancel} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
          Cancel
        </button>
        <button 
          onClick={() => onSave(user)} 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-yellow-500/30 flex items-center gap-2"
        >
          <Key size={18} /> Send Reset Link
        </button>
      </div>
    </div>
  );
};
