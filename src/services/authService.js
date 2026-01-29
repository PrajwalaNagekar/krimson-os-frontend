import { api } from './api';

/**
 * Service to handle frontend authentication API calls.
 */
export const authService = {
    /**
     * Login user and set session.
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<Object>}
     */
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        if (response.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    /**
     * Clear session. 
     * NOTE: Does NOT redirect. Caller must handle redirection.
     */
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // window.location.href = '/login'; // Let caller handle nav for better UX (toasts)
    },

    /**
     * Get current user from local storage.
     * @returns {Object|null}
     */
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Get JWT token.
     * @returns {string|null}
     */
    getToken: () => {
        return localStorage.getItem('token');
    },

    /**
     * Request password reset link.
     * @param {string} email 
     * @returns {Promise<Object>}
     */
    forgotPassword: async (email) => {
        const response = await api.post('/auth/forgotpassword', { email });
        return response.data;
    },

    /**
     * Set new password using token.
     * @param {string} token 
     * @param {string} password 
     * @returns {Promise<Object>}
     */
    resetPassword: async (token, password) => {
        const response = await api.put(`/auth/resetpassword/${token}`, { password });
        return response.data;
    },

    /**
     * Switch active role and update session.
     * @param {string} role 
     * @returns {Promise<Object>}
     */
    switchRole: async (role) => {
        const response = await api.post('/auth/switch-role', { role });
        if (response.success && response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            // Trigger storage event or context update if needed
        }
        return response.data;
    }
};
