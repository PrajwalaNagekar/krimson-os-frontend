import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import WelcomeLanding from "../pages/landing/WelcomeLanding";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/welcome" element={<WelcomeLanding />} />
    </Routes>
  );
};

export default AuthRoutes;
