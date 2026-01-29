# Krimson OS - AI Coding Guidelines

## Project Overview

Krimson OS is a React-based centralized school ecosystem built with Vite, featuring role-based authentication for multiple user types (Student, Teacher, Parent, Principal, Admin, etc.). The application uses a glassmorphism design with Tailwind CSS and Lucide React icons.

## Architecture

- **SPA Structure**: Single-page application with component-based architecture
- **Routing**: Not yet implemented; plan for React Router with role-based route protection
- **Styling**: Tailwind CSS v4 with custom gradients (cyan-blue-pink) and glassmorphism effects
- **Icons**: Lucide React for consistent iconography
- **State Management**: Not yet implemented; consider Context API or Redux for user roles/authentication

## Key Components

- `src/pages/auth/Login.jsx`: Main authentication interface with role selection simulation
- `src/App.jsx`: Root component (currently minimal)
- Future dashboards: `src/pages/dashboard/` (per role, e.g., `StudentDashboard.jsx`)

## Development Workflow

- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview**: `npm run preview` (serve built app)

## Coding Conventions

- **Component Structure**: Functional components with hooks (React 19)
- **Styling**: Tailwind utility classes; use `bg-white/80 backdrop-blur-xl` for glass effects
- **Icons**: Import from `lucide-react`, e.g., `import { Shield } from "lucide-react"`
- **Role Handling**: Use `ROLES` object from `Login.jsx` for consistent role definitions
- **ESLint**: Ignores `dist/`; custom rule allows unused uppercase vars (for components)

## Patterns & Examples

- **Glass Card**: `<div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl">`
- **Gradient Background**: `bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300`
- **Role Simulation**: `handleLogin(role)` logs role; extend to navigate or set context
- **Input Styling**: `border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-blue-500`

## Dependencies

- React 19 with StrictMode
- Tailwind CSS v4 (via Vite plugin)
- Lucide React for icons
- ESLint with React-specific rules

## Future Integrations

- Authentication: Implement SSO gateway
- Routing: Add React Router for `/dashboard/:role`
- State: Add user context for role persistence
- API: Connect to backend for real authentication</content>
  <parameter name="filePath">r:\BRD Projet\krimson-os\.github\copilot-instructions.md
