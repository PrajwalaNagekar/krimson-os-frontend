/**
 * @file store/slices/authSlice.js
 * @description Authentication state slice using Redux Toolkit.
 * Manages user authentication, roles, and session data.
 *
 * State Shape:
 * {
 *   user: { id, name, email, avatar } | null,
 *   token: string | null,
 *   currentRole: string | null,
 *   availableRoles: string[],
 *   isAuthenticated: boolean,
 *   loading: boolean,
 *   error: string | null
 * }
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

// ---------------------------------------------------
// TODO: API INTEGRATION POINT - Authentication
// ---------------------------------------------------
// Backend Routes:
// - POST /api/auth/login (email, password)
// - POST /api/auth/logout
// - GET /api/auth/me (verify token)
// - POST /api/auth/refresh-token
// ---------------------------------------------------

/**
 * Initial authentication state
 */
const initialState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token") || null,
  currentRole: localStorage.getItem("currentRole") || null,
  availableRoles: JSON.parse(localStorage.getItem("availableRoles") || "[]"),
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

/**
 * Async thunk for user login
 *
 * @async
 * @param {Object} credentials - Login credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<Object>} User data and token
 */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // ---------------------------------------------------
      // API call
      // ---------------------------------------------------
      const data = await api.post("/auth/login", credentials);

      if (!data.success) {
        throw new Error(data.message || "Login failed");
      }

      return {
        user: data.data.user,
        token: data.data.token,
        roles: data.data.user.roles,
        currentRole: data.data.user.active_role || data.data.user.role, // Use active_role if available
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/**
 * Async thunk for user logout
 */
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  // ---------------------------------------------------
  // TODO: Call logout API to invalidate token on server
  // ---------------------------------------------------
  // try {
  //   await api.post('/auth/logout');
  // } catch (error) {
  //   console.error("Logout failed", error);
  // }
  // ---------------------------------------------------
  return true;
});

/**
 * Authentication slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Set current active role
     * @param {Object} state - Current state
     * @param {Object} action - Action with role payload
     */
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
      localStorage.setItem("currentRole", action.payload);
    },

    /**
     * Clear authentication error
     */
    clearError: (state) => {
      state.error = null;
    },

    /**
     * Restore session from localStorage
     */
    restoreSession: (state) => {
      const token = localStorage.getItem("token");
      const currentRole = localStorage.getItem("currentRole");
      const availableRoles = JSON.parse(
        localStorage.getItem("availableRoles") || "[]",
      );

      if (token) {
        state.token = token;
        state.currentRole = currentRole;
        state.availableRoles = availableRoles;
        state.user = JSON.parse(localStorage.getItem("user") || "null");
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.availableRoles = action.payload.roles;
      // Use active_role from payload if explicit, otherwise first role
      state.currentRole = action.payload.currentRole || action.payload.roles[0];
      state.isAuthenticated = true;
      state.error = null;

      // Persist to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("currentRole", state.currentRole);
      localStorage.setItem(
        "availableRoles",
        JSON.stringify(action.payload.roles),
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // Also persist user object for WelcomeLanding
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Login failed";
      state.isAuthenticated = false;
    });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.currentRole = null;
      state.availableRoles = [];
      state.isAuthenticated = false;

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("currentRole");
      localStorage.removeItem("availableRoles");
    });
  },
});

export const { setCurrentRole, clearError, restoreSession } = authSlice.actions;
export default authSlice.reducer;
