import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import ToastContainer from './components/common/ToastContainer';

// Import Route Modules
import AuthRoutes from "./routes/AuthRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import CoordinatorRoutes from "./routes/CoordinatorRoutes";
import RegistrarRoutes from "./routes/RegistrarRoutes";
import PrincipalRoutes from "./routes/PrincipalRoutes";
import ParentRoutes from "./routes/ParentRoutes";
import FinanceRoutes from "./routes/FinanceRoutes";
import ManagementRoutes from "./routes/ManagementRoutes";
import LibrarianRoutes from "./routes/LibrarianRoutes";
import SystemAdminRoutes from "./routes/SystemAdminRoutes";
import CounselorRoutes from "./routes/CounselorRoutes";

export default function App() {
  return (
    <>
      {/* Redux-based toast notifications */}
      <ToastContainer />
      <Routes>
        {/* Auth Routes (Root path handling included within AuthRoutes if needed, but usually handled at top level for / vs /login) */}
        {/* Actually AuthRoutes handles /, /login, etc. So we can mount it at root or handle explicit paths. 
            AuthRoutes has /login inside. So if we mount at /* it will match /login. 
        */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Dashboard Routes - Nested Routing */}
        <Route path="/dashboard/admin/*" element={<AdminRoutes />} />
        <Route path="/dashboard/student/*" element={<StudentRoutes />} />
        <Route path="/dashboard/teacher/*" element={<TeacherRoutes />} />
        <Route path="/dashboard/coordinator/*" element={<CoordinatorRoutes />} />
        <Route path="/dashboard/registrar/*" element={<RegistrarRoutes />} />
        <Route path="/dashboard/principal/*" element={<PrincipalRoutes />} />
        <Route path="/dashboard/parent/*" element={<ParentRoutes />} />
        <Route path="/dashboard/finance/*" element={<FinanceRoutes />} />
        <Route path="/dashboard/management/*" element={<ManagementRoutes />} />
        <Route path="/dashboard/librarian/*" element={<LibrarianRoutes />} />
        <Route path="/dashboard/it-admin/*" element={<SystemAdminRoutes />} />
        <Route path="/dashboard/counselor/*" element={<CounselorRoutes />} />

        {/* Fallback for unknown dashboard routes */}
        <Route
          path="/dashboard/*"
          element={
            <div className="p-10 text-center text-slate-500">
              Other dashboards coming soon...
            </div>
          }
        />
      </Routes>
    </>
  );
}
