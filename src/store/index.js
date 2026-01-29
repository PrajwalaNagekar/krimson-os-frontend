/**
 * @file store/index.js
 * @description Redux store configuration using Redux Toolkit.
 * Combines all feature slices and configures middleware.
 * 
 * Features:
 * - Centralized state management
 * - Redux DevTools integration
 * - Automatic Redux Toolkit middleware (thunk, immutability checks)
 */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import dashboardReducer from './slices/dashboardSlice';

/**
 * Redux store instance
 * Combines all feature slices into a single store
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,       // Authentication state (user, token, roles)
    ui: uiReducer,           // UI state (sidebar, modals, theme)
    dashboard: dashboardReducer  // Dashboard data (stats, alerts)
  },
  
  // Redux Toolkit includes thunk middleware by default
  // DevTools are automatically enabled in development
  devTools: import.meta.env.DEV,
});

// For TypeScript projects, you would export these types:
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
