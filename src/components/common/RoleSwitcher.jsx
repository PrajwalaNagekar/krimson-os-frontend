import React, { useState } from 'react';
import { ChevronDown, RefreshCw } from 'lucide-react';
import { authService } from '../../services/authService';
// import { useNavigate } from 'react-router-dom'; // keeping it simple with window.location for full refresh
import { getDashboardPath } from '../../utils/roleNavigation';
import PropTypes from 'prop-types';
import { store } from '../../store';
import { addNotification } from '../../store/slices/uiSlice';
import { getUserRoles, hasMultipleRoles, formatRoleForDisplay, normalizeRole } from '../../utils/roleUtils';

const RoleSwitcher = ({ currentUser }) => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Use utility function to check if user has multiple roles
    // If no roles array or only 1 role, don't show switcher
    if (!hasMultipleRoles(currentUser)) {
        return null;
    }

    // Get user's assigned roles using utility function
    const userRoles = getUserRoles(currentUser);

    const handleSwitchRole = async (role) => {
        setLoading(true);
        try {
            // Ensure role is always uppercase before sending to backend
            const normalizedRole = normalizeRole(role);
            await authService.switchRole(normalizedRole);
            store.dispatch(addNotification({ 
                type: 'success', 
                message: `Switched role to ${formatRoleForDisplay(normalizedRole)}` 
            }));
            
            // Smart Redirect Logic
            const currentPath = window.location.pathname;
            const isDashboard = currentPath.startsWith('/dashboard');

            if (isDashboard) {
                 // If we are already inside a specific dashboard, we must move to the new role's dashboard
                 const targetPath = getDashboardPath(normalizedRole);
                 window.location.href = targetPath;
            } else {
                 // If we are on a neutral page (like Welcome), just reload to update the state in place
                 window.location.reload(); 
            }
            
        } catch (error) {
            console.error("Failed to switch role:", error);
            store.dispatch(addNotification({ type: 'error', message: error.message || 'Failed to switch role' }));
            setLoading(false); 
        } finally {
            if (!loading) { 
                 setIsOpen(false);
            }
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 text-sm font-medium text-slate-600 transition-colors"
            >
                {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : null}
                <span>Switch Role</span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2">
                        <p className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Available Roles
                        </p>
                        {userRoles.map((role) => (
                            <button
                                key={role}
                                onClick={() => handleSwitchRole(role)}
                                disabled={role === currentUser.role}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors flex items-center justify-between
                                    ${role === currentUser.role
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {formatRoleForDisplay(role)}
                                {role === currentUser.role && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Backdrop to close */}
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            )}
        </div>
    );
};

RoleSwitcher.propTypes = {
    currentUser: PropTypes.shape({
        role: PropTypes.string,
        roles: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string // Add name to propTypes if used later, though not used here
    })
};

export default RoleSwitcher;
