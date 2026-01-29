/**
 * Utility functions for role management and filtering
 * Ensures only user-assigned roles are used throughout the application
 */

/**
 * Get user's assigned roles from user object
 * @param {Object} user - User object from auth service
 * @returns {string[]} - Array of role strings assigned to the user
 */
export const getUserRoles = (user) => {
  if (!user) return [];

  // Prioritize roles array, fallback to single role if array is empty
  if (Array.isArray(user.roles) && user.roles.length > 0) {
    return user.roles.filter((role) => role && typeof role === "string");
  }

  // Fallback to active_role or role
  const singleRole = user.active_role || user.role;
  return singleRole ? [singleRole] : [];
};

/**
 * Get user's active/current role
 * @param {Object} user - User object from auth service
 * @returns {string|null} - Active role string or null
 */
export const getUserActiveRole = (user) => {
  if (!user) return null;
  return user.active_role || user.role || null;
};

/**
 * Check if user has multiple roles
 * @param {Object} user - User object from auth service
 * @returns {boolean} - True if user has more than one role
 */
export const hasMultipleRoles = (user) => {
  const roles = getUserRoles(user);
  return roles.length > 1;
};

/**
 * Check if user has a specific role
 * @param {Object} user - User object from auth service
 * @param {string} roleToCheck - Role to check for
 * @returns {boolean} - True if user has the role
 */
export const userHasRole = (user, roleToCheck) => {
  const roles = getUserRoles(user);
  return roles.includes(roleToCheck);
};

/**
 * Format role name for display
 * Converts UPPERCASE_ROLE to Title Case
 * @param {string} role - Role in uppercase format (e.g., "IT_ADMIN")
 * @returns {string} - Formatted role (e.g., "IT Admin")
 */
export const formatRoleForDisplay = (role) => {
  if (!role || typeof role !== "string") return "";
  return role
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Normalize role to uppercase (for API calls)
 * @param {string} role - Role in any case
 * @returns {string} - Role in uppercase
 */
export const normalizeRole = (role) => {
  if (!role || typeof role !== "string") return "";
  return role.toUpperCase().trim();
};
