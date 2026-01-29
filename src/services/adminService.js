import { api } from './api';

export const adminService = {
    getDashboardStats: async () => {
        return await api.get('/admin/dashboard-stats');
    },
    // Future admin specific endpoints can go here (logs, health, etc.)
};
