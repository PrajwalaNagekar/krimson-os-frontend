/**
 * @file examples/ReduxExample.jsx
 * @description Example component demonstrating Redux Toolkit usage.
 * Shows how to use Redux state and dispatch actions.
 * 
 * THIS IS AN EXAMPLE FILE - Use as reference for implementing Redux in your components
 */

import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser, logoutUser, setCurrentRole } from '../store/slices/authSlice';
import { toggleSidebar, addNotification, setLoading } from '../store/slices/uiSlice';
import { fetchAdminDashboard } from '../store/slices/dashboardSlice';

/**
 * @component ReduxExample
 * @description Example showing Redux integration patterns
 */
const ReduxExample = () => {
  const dispatch = useAppDispatch();
  
  // ============================================
  // READING STATE FROM REDUX STORE
  // ============================================
  
  // Auth state
  const { user, isAuthenticated, currentRole, loading: authLoading } = useAppSelector(
    state => state.auth
  );
  
  // UI state
  const { sidebarOpen, theme, notifications } = useAppSelector(
    state => state.ui
  );
  
  // Dashboard state
  // Dashboard state
  const { loading: dashboardLoading } = useAppSelector(
    state => state.dashboard
  );
  
  // ============================================
  // DISPATCHING ACTIONS
  // ============================================
  
  /**
   * Example: Login user
   */
  const handleLogin = async () => {
    try {
      // Dispatch async thunk
      await dispatch(loginUser({
        email: 'admin@school.com',
        password: 'password123'
      })).unwrap(); // .unwrap() throws on rejection
      
      // Success - show notification
      dispatch(addNotification({
        type: 'success',
        message: 'Login successful!'
      }));
    } catch (error) {
      // Error handling
      dispatch(addNotification({
        type: 'error',
        message: error.message || 'Login failed'
      }));
    }
  };
  
  /**
   * Example: Logout user
   */
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(addNotification({
      type: 'info',
      message: 'You have been logged out'
    }));
  };
  
  /**
   * Example: Switch role
   */
  const handleRoleSwitch = (role) => {
    dispatch(setCurrentRole(role));
    dispatch(addNotification({
      type: 'info',
      message: `Switched to ${role} dashboard`
    }));
  };
  
  /**
   * Example: Toggle sidebar
   */
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  
  /**
   * Example: Fetch dashboard data
   */
  /**
   * Example: Fetch dashboard data
   */
  const handleFetchDashboard = useCallback(async () => {
    try {
      dispatch(setLoading({ feature: 'dashboard', isLoading: true }));
      
      await dispatch(fetchAdminDashboard()).unwrap();
      
      dispatch(addNotification({
        type: 'success',
        message: 'Dashboard data loaded'
      }));
    } catch {
      dispatch(addNotification({
        type: 'error',
        message: 'Failed to load dashboard'
      }));
    } finally {
      dispatch(setLoading({ feature: 'dashboard', isLoading: false }));
    }
  }, [dispatch]);
  
  /**
   * Example: Fetch dashboard on component mount
   */
  useEffect(() => {
    if (isAuthenticated && currentRole === 'admin') {
      handleFetchDashboard();
    }
  }, [isAuthenticated, currentRole, handleFetchDashboard]);
  
  // ============================================
  // RENDER EXAMPLE UI
  // ============================================
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="card-base mb-6">
        <h1 className="text-2xl font-bold mb-4">Redux State Management Example</h1>
        <p className="text-slate-600 mb-4">
          This component demonstrates how to use Redux Toolkit in your app.
        </p>
        
        {/* Auth State Display */}
        <div className="bg-slate-50 p-4 rounded-lg mb-4">
          <h3 className="font-bold mb-2">Auth State:</h3>
          <pre className="text-xs overflow-auto">
            {JSON.stringify({
              isAuthenticated,
              currentRole,
              user: user?.name || 'Not logged in'
            }, null, 2)}
          </pre>
        </div>
        
        {/* UI State Display */}
        <div className="bg-slate-50 p-4 rounded-lg mb-4">
          <h3 className="font-bold mb-2">UI State:</h3>
          <pre className="text-xs overflow-auto">
            {JSON.stringify({
              sidebarOpen,
              theme,
              notificationsCount: notifications.length
            }, null, 2)}
          </pre>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleLogin}
            className="btn-primary px-4 py-2 text-sm"
            disabled={authLoading}
          >
            {authLoading ? 'Logging in...' : 'Login Example'}
          </button>
          
          <button
            onClick={handleLogout}
            className="btn-secondary px-4 py-2 text-sm"
          >
            Logout Example
          </button>
          
          <button
            onClick={handleToggleSidebar}
            className="btn-secondary px-4 py-2 text-sm"
          >
            Toggle Sidebar: {sidebarOpen ? 'Open' : 'Closed'}
          </button>
          
          <button
            onClick={handleFetchDashboard}
            className="btn-primary px-4 py-2 text-sm"
            disabled={dashboardLoading}
          >
            {dashboardLoading ? 'Loading...' : 'Fetch Dashboard'}
          </button>
          
          <button
            onClick={() => handleRoleSwitch('teacher')}
            className="btn-secondary px-4 py-2 text-sm"
          >
            Switch to Teacher
          </button>
        </div>
      </div>
      
      {/* Notifications Display */}
      {notifications.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-bold">Notifications:</h3>
          {notifications.map(notif => (
            <div
              key={notif.id}
              className={`p-3 rounded-lg ${
                notif.type === 'success' ? 'bg-green-50 text-green-700' :
                notif.type === 'error' ? 'bg-red-50 text-red-700' :
                'bg-blue-50 text-blue-700'
              }`}
            >
              {notif.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ReduxExample.propTypes = {};

export default ReduxExample;
