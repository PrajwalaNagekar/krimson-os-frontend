/**
 * @file store/slices/uiSlice.js
 * @description UI state slice for managing interface elements.
 * Controls sidebar, modals, notifications, and theme preferences.
 * 
 * State Shape:
 * {
 *   sidebarOpen: boolean,
 *   theme: 'light' | 'dark',
 *   notifications: Array,
 *   activeModal: string | null,
 *   loading: Object
 * }
 */

import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial UI state
 */
const initialState = {
  sidebarOpen: false,              // Mobile sidebar state
  theme: localStorage.getItem('theme') || 'light',
  notifications: [],               // In-app notifications
  activeModal: null,               // Currently open modal
  loading: {}                      // Loading states by feature { dashboard: true, users: false }
};

/**
 * UI slice for interface state management
 */
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Toggle sidebar open/close (mobile)
     */
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    
    /**
     * Set sidebar state explicitly
     * @param {Object} action - Action with boolean payload
     */
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    
    /**
     * Toggle theme between light and dark
     */
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    
    /**
     * Set theme explicitly
     * @param {Object} action - Action with 'light' or 'dark' payload
     */
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    
    /**
     * Add notification to queue
     * @param {Object} action - Action with notification object
     * @param {string} action.payload.id - Unique notification ID
     * @param {string} action.payload.type - 'success' | 'error' | 'warning' | 'info'
     * @param {string} action.payload.message - Notification message
     */
    addNotification: (state, action) => {
      state.notifications.push({
        id: action.payload.id || Date.now(),
        type: action.payload.type || 'info',
        message: action.payload.message,
        timestamp: Date.now()
      });
    },
    
    /**
     * Remove notification by ID
     * @param {Object} action - Action with notification ID
     */
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notif => notif.id !== action.payload
      );
    },
    
    /**
     * Clear all notifications
     */
    clearNotifications: (state) => {
      state.notifications = [];
    },
    
    /**
     * Open a modal
     * @param {Object} action - Action with modal name
     */
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    
    /**
     * Close the active modal
     */
    closeModal: (state) => {
      state.activeModal = null;
    },
    
    /**
     * Set loading state for a feature
     * @param {Object} action - Action with { feature: string, isLoading: boolean }
     */
    setLoading: (state, action) => {
      const { feature, isLoading } = action.payload;
      state.loading[feature] = isLoading;
    }
  }
});

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleTheme,
  setTheme,
  addNotification,
  removeNotification,
  clearNotifications,
  openModal,
  closeModal,
  setLoading
} = uiSlice.actions;

export default uiSlice.reducer;
