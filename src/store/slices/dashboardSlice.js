/**
 * @file store/slices/dashboardSlice.js
 * @description Dashboard data slice for managing stats and alerts.
 * Handles data fetching and caching for all role dashboards.
 * 
 * State Shape:
 * {
 *   admin: { stats, alerts, lastFetch },
 *   student: { stats, assignments, grades, lastFetch },
 *   teacher: { classes, students, schedule, lastFetch },
 *   loading: boolean,
 *   error: string | null
 * }
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../../services/adminService';

/**
 * Initial dashboard state
 */
const initialState = {
  admin: {
    stats: null,
    alerts: [],
    lastFetch: null
  },
  student: {
    stats: null,
    assignments: [],
    grades: [],
    lastFetch: null
  },
  teacher: {
    classes: [],
    students: [],
    schedule: [],
    lastFetch: null
  },
  loading: false,
  error: null
};

/**
 * Fetch admin dashboard stats
 * Uses existing adminService
 * 
 * @async
 * @returns {Promise<Object>} Dashboard statistics
 */
export const fetchAdminDashboard = createAsyncThunk(
  'dashboard/fetchAdmin',
  async (_, { rejectWithValue }) => {
    try {
      const response = await adminService.getDashboardStats();
      if (response.success) {
        return response.data;
      }
      throw new Error('Failed to fetch dashboard');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Fetch student dashboard data
 * 
 * ---------------------------------------------------
 * TODO: API INTEGRATION POINT
 * Backend Route: GET /api/students/:id/dashboard
 * Action: Implement studentService.getDashboard()
 * ---------------------------------------------------
 */
export const fetchStudentDashboard = createAsyncThunk(
  'dashboard/fetchStudent',
  async (studentId, { rejectWithValue }) => {
    try {
      // TODO: Replace with real API call
      // const response = await studentService.getDashboard(studentId);
      
      // Mock data for now
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        stats: { attendance: 94, rank: 5 },
        assignments: [],
        grades: []
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Dashboard slice
 */
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    /**
     * Clear dashboard error
     */
    clearDashboardError: (state) => {
      state.error = null;
    },
    
    /**
     * Clear specific role dashboard data
     * @param {Object} action - Action with role name
     */
    clearRoleDashboard: (state, action) => {
      const role = action.payload;
      if (state[role]) {
        state[role] = initialState[role];
      }
    }
  },
  extraReducers: (builder) => {
    // Admin Dashboard
    builder.addCase(fetchAdminDashboard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAdminDashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.admin.stats = action.payload;
      state.admin.alerts = action.payload.alerts || [];
      state.admin.lastFetch = Date.now();
    });
    builder.addCase(fetchAdminDashboard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    
    // Student Dashboard
    builder.addCase(fetchStudentDashboard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStudentDashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.student = {
        ...action.payload,
        lastFetch: Date.now()
      };
    });
    builder.addCase(fetchStudentDashboard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { clearDashboardError, clearRoleDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
