import React, { useState } from 'react';
import { UserPlus, Edit, Key, Lock, ChevronDown, Check } from 'lucide-react';
import { useAppDispatch } from '../../../../store/hooks';
import { addNotification } from '../../../../store/slices/uiSlice';
import { 
  UserSearchStep, 
  AddUserForm, 
  EditUserForm, 
  SuspendUserForm, 
  ResetPasswordForm 
} from './ActionForms';

const USER_ACTIONS = [
  { key: "add", label: "Add User", icon: UserPlus, gradient: "from-cyan-400 to-blue-500", shadowColor: "shadow-cyan-500/30" },
  { key: "edit", label: "Edit User", icon: Edit, gradient: "from-blue-400 to-indigo-500", shadowColor: "shadow-blue-500/30" },
  { key: "reset", label: "Reset Password", icon: Key, gradient: "from-amber-400 to-orange-500", shadowColor: "shadow-amber-500/30" },
  { key: "suspend", label: "Suspend User", icon: Lock, gradient: "from-pink-400 to-rose-500", shadowColor: "shadow-pink-500/30" },
];

const UserActionPanel = ({ 
  users, 
  allRoles, 
  departments, 
  onAddUser, 
  onUpdateUser 
}) => {
  const dispatch = useAppDispatch();
  const [selectedAction, setSelectedAction] = useState(USER_ACTIONS[0]);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [foundUser, setFoundUser] = useState(null);

  // Reset state when action changes
  const handleActionChange = (action) => {
    setSelectedAction(action);
    setFoundUser(null);
    setShowActionMenu(false);
  };

  const handleUserFound = (user) => {
    setFoundUser(user);
  };

  const handleCancel = () => {
    if (foundUser) {
      setFoundUser(null);
    } 
  };

  return (
    // REMOVED 'overflow-hidden' from parent to allow dropdown to spill out.
    // Added 'z-20' to ensure it sits above other content (like tables/filters below).
    <div className="relative mb-10 z-20"> 
        
        {/* BACKGROUND & DECORATION WRAPPER - HANDLES CLIPPING */}
        <div className="absolute inset-0 bg-white rounded-3xl border border-cyan-100 shadow-2xl shadow-cyan-100/50 overflow-hidden z-0">
             {/* Decorative Circles with Gradient */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60 blur-2xl" />
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-40 blur-xl" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 p-8">
            
            {/* HEADER: TITLE + DROPDOWN */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedAction.gradient} flex items-center justify-center shadow-lg ${selectedAction.shadowColor}`}>
                        <selectedAction.icon className="text-white" size={28} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            {selectedAction.label}
                        </h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">
                            {selectedAction.key === 'add' && 'Create a new user account with specific roles.'}
                            {selectedAction.key === 'edit' && 'Search and modify an existing user details.'}
                            {selectedAction.key === 'reset' && 'Send a password reset link to a user.'}
                            {selectedAction.key === 'suspend' && 'Suspend or active user access.'}
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowActionMenu(!showActionMenu)}
                        className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:from-cyan-100 hover:to-blue-100 hover:border-cyan-300 transition-all shadow-md hover:shadow-lg"
                    >
                        Change Action <ChevronDown size={16} className={`transition-transform duration-200 ${showActionMenu ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* DROPDOWN MENU - Z-INDEX BOOSTED */}
                    {showActionMenu && (
                        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-cyan-100 overflow-hidden animate-slideDown z-50">
                            <div className="p-2 space-y-1">
                                {USER_ACTIONS.map((action) => (
                                <button
                                    key={action.key}
                                    onClick={() => handleActionChange(action)}
                                    className={`w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center gap-3
                                    ${selectedAction.key === action.key 
                                        ? `bg-gradient-to-r ${action.gradient} text-white shadow-md ${action.shadowColor}` 
                                        : `text-slate-600 hover:bg-gradient-to-r hover:${action.gradient} hover:text-white border border-transparent`}`}
                                >
                                    <action.icon size={18} className={selectedAction.key === action.key ? 'text-white' : ''} />
                                    {action.label}
                                    {selectedAction.key === action.key && <Check size={16} className="ml-auto text-white" />}
                                </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* BODY: FORM RENDERING LOGIC */}
            <div className="w-full">
                {/* 1. ADD USER */}
                {selectedAction.key === 'add' && (
                    <AddUserForm 
                        onCancel={handleCancel}
                        onSave={onAddUser}
                        allRoles={allRoles}
                        departments={departments}
                    />
                )}

                {/* 2. OTHER ACTIONS - SEARCH FIRST */}
                {selectedAction.key !== 'add' && !foundUser && (
                    <UserSearchStep 
                        users={users} 
                        onUserFound={handleUserFound}
                        actionLabel={selectedAction.label}
                    />
                )}

                {/* 3. EDIT FORM */}
                {selectedAction.key === 'edit' && foundUser && (
                    <EditUserForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(updatedData) => {
                            onUpdateUser(updatedData, "User details updated successfully");
                            setFoundUser(null);
                        }}
                        allRoles={allRoles}
                    />
                )}

                {/* 4. SUSPEND FORM */}
                {selectedAction.key === 'suspend' && foundUser && (
                    <SuspendUserForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(user, reason) => {
                            const isSuspending = user.status !== 'Suspended';
                            const updatedUser = { 
                                ...user, 
                                status: isSuspending ? 'Suspended' : 'Active',
                                suspensionReason: isSuspending ? reason : null 
                            };
                            onUpdateUser(updatedUser, `User ${isSuspending ? 'Suspended' : 'Activated'} successfully`);
                            setFoundUser(null);
                        }}
                    />
                )}

                {/* 5. RESET FORM */}
                {selectedAction.key === 'reset' && foundUser && (
                    <ResetPasswordForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(user) => {
                            dispatch(addNotification({
                                type: 'success',
                                message: `Password reset link sent to ${user.email}`
                            }));
                            setFoundUser(null);
                        }}
                    />
                )}
            </div>
        </div>
    </div>
  );
};

export default UserActionPanel;
