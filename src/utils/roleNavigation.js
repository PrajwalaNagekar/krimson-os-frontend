/**
 * Maps user roles to their respective dashboard paths.
 * @param {string} role - The user's role.
 * @returns {string} The path to the dashboard.
 */
export const getDashboardPath = (role) => {
  if (!role) return "/login";

  // Normalize role string to handle different casing if necessary
  // Normalize role string to handle different casing
  const normalizedRole = role.toUpperCase();

  switch (normalizedRole) {
    case "ADMINISTRATOR":
    case "ADMIN":
      return "/dashboard/admin";

    case "TEACHER":
      return "/dashboard/teacher";

    case "STUDENT":
      return "/dashboard/student";

    case "PRINCIPAL":
      return "/dashboard/principal";

    case "ACADEMIC COORDINATOR":
    case "COORDINATOR":
      return "/dashboard/coordinator";

    case "REGISTRAR":
      return "/dashboard/registrar";

    case "FINANCE":
    case "ACCOUNTANT":
      return "/dashboard/finance";

    case "PARENT":
    case "GUARDIAN":
      return "/dashboard/parent";

    case "MANAGEMENT":
    case "DIRECTOR":
      return "/dashboard/management";

    case "LIBRARIAN":
      return "/dashboard/librarian";

    case "SYSTEM ADMINISTRATOR":
    case "SYSTEMADMIN":
    case "IT ADMIN":
    case "IT/SYSTEM ADMIN":
      return "/dashboard/it-admin";

    case "SCHOOL COUNSELOR":
    case "COUNSELOR":
      return "/dashboard/counselor";

    default:
      console.warn(`Unknown role: ${role}, defaulting to welcome page`);
      return "/welcome";
  }
};
