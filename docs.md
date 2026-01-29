# Krimson-OS Codebase & API Documentation

## 1. Project Overview

**Structure**: The project is organized by role-based dashboards in `src/pages/dashboards`.
**State Management**: Currently relies heavily on local state and mock data files (`src/data/`).
**API Service**: Centralized in `src/services/api.js` using Axios with JWT authentication.

---

## 2. API Services Configuration

- **Base URL**: `import.meta.env.VITE_API_URL` or `http://localhost:5000/api/v1`
- **Authentication**: Bearer Token from `localStorage`.
- **Global Error Handling**: Redirects to `/login` on 401 Unauthorized.
- **Key Files**:
  - `src/services/api.js`: Core Axios setup.
  - `src/services/userService.js`: User management endpoints.
  - `src/services/authService.js`: Authentication endpoints.

---

## 3. Role-Based Dashboard Analysis

### 3.1. Admin Dashboard

- **Location**: `src/pages/dashboards/admin`
- **Status**: **Partially Integrated**
- **Key Components**:
  - `UserManagement.jsx`: **CONNECTED**. Uses `userService.getAllUsers` and `userService.createUser`.
  - `AdminOverview.jsx`: **MOCK**. Uses `src/data/adminData.js`.
- **API Needed**:
  - System Logs, Compliance Alerts, Infrastructure Monitoring.

### 3.2. Student Dashboard

- **Location**: `src/pages/dashboards/student`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `HomeDashboard.jsx` (and others): Uses `src/data/studentData.js`.
- **API Needed**:
  - GET `/student/assignments`
  - GET `/student/grades`
  - GET `/student/attendance`
  - GET `/student/timetable`

### 3.3. Teacher Dashboard

- **Location**: `src/pages/dashboards/teacher`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `HomeDashboard.jsx`: Uses `src/data/teacherData.js`.
  - `ClassManagement.jsx`: Mock.
- **API Needed**:
  - GET `/teacher/classes`
  - POST `/teacher/attendance`
  - POST `/teacher/assignments`

### 3.4. Parent Dashboard

- **Location**: `src/pages/dashboards/parent`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `HomeDashboard.jsx`: Uses `src/data/parentData.js`.
  - `CommunicationHub.jsx`: Internal local state dummy data.
- **API Needed**:
  - GET `/parent/children`
  - GET `/parent/fees`
  - GET `/parent/{childId}/progress`

### 3.5. Registrar Dashboard

- **Location**: `src/pages/dashboards/registrar`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `RegistrarDashboard.jsx`: UI Shell.
  - `AdmissionsView.jsx`: Uses `ADMISSIONS_DATA` mock object.
- **API Needed**:
  - GET/POST `/registrar/inquiries`
  - GET `/registrar/compliance`
  - _Note_: `api.js` contains commented-out stubs for registrar services.

### 3.6. Finance Dashboard

- **Location**: `src/pages/dashboards/finance`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `FinanceDashboard.jsx`: Uses `src/data/financeData.js`.
- **API Needed**:
  - GET `/finance/summary`
  - GET `/finance/transactions`
  - POST `/finance/invoice`

### 3.7. Academic Coordinator Dashboard

- **Location**: `src/pages/dashboards/coordinator`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `CoordinatorDashboard.jsx`: Uses hardcoded UI values.
- **API Needed**:
  - GET `/coordinator/curriculum`
  - GET `/coordinator/performance-stats`

### 3.8. Principal Dashboard

- **Location**: `src/pages/dashboards/principal`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `PrincipalDashboard.jsx`: UI Shell with static data.
- **API Needed**:
  - GET `/principal/overview` (Aggregated stats)
  - GET `/principal/staff-attendance`

### 3.9. Counselor Dashboard

- **Location**: `src/pages/dashboards/counselor`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `InterventionCaseDashboard.jsx`: Uses `src/data/counselorData.js`.
- **API Needed**:
  - GET/POST `/counselor/cases`
  - GET `/counselor/students`

### 3.10. Librarian Dashboard

- **Location**: `src/pages/dashboards/librarian`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `LibraryDashboard.jsx`: Uses `src/data/librarianData.js`.
- **API Needed**:
  - GET `/library/catalog`
  - POST `/library/issue`
  - GET `/library/overdue`

### 3.11. Management (Executive) Dashboard

- **Location**: `src/pages/dashboards/management`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `InstitutionalOverview.jsx`: Uses `src/data/managementData.js`.
- **API Needed**:
  - GET `/management/metrics` (High-level KPI aggregation)

### 3.12. System Admin Dashboard

- **Location**: `src/pages/dashboards/systemAdmin`
- **Status**: **Mock Data Only**
- **Key Components**:
  - `SystemHealthMonitoring.jsx`: Uses `src/data/systemAdminData.js`.
- **API Needed**:
  - GET `/system/health`
  - GET `/system/logs`

---

## 4. Next Steps for Development

1.  **Backend Alignment**: Ensure Backend API endpoints match the data structures defined in `src/data/`.
2.  **Service Creation**: Create dedicated service files (e.g., `studentService.js`, `financeService.js`) following the pattern in `userService.js`.
3.  **Component Refactoring**: Replace mock data hooks with `useEffect` calls to these new services.
