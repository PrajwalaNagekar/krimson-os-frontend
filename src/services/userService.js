import { api } from "./api";

export const userService = {
  // Create user / Assign role
  createUser: async (userData) => {
    return await api.post("/administration/users/assign-role", userData);
  },

  // Get all users with roles (with pagination)
  getAllUsers: async (page = 1, limit = 10) => {
    return await api.get(`/administration/users?page=${page}&limit=${limit}`);
  },

  // Get user by identifier (email, id, or sso)
  getUserByIdentifier: async (identifier) => {
    return await api.get(
      `/administration/users/${encodeURIComponent(identifier)}`
    );
  },

  // Edit/Update user
  updateUser: async (identifier, updateData) => {
    return await api.put(
      `/administration/users/${encodeURIComponent(identifier)}`,
      updateData
    );
  },

  // Suspend user
  suspendUser: async (identifier) => {
    return await api.patch("/administration/users/suspend", { identifier });
  },

  // Unsuspend user (reactivate)
  unsuspendUser: async (identifier) => {
    return await api.patch("/administration/users/unsuspend", { identifier });
  },

  // Get all roles
  getRoles: async () => {
    return await api.get("/access-control/roles");
  },
};
