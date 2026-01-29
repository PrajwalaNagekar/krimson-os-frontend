import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CoordinatorSidebar from "../components/navigation/coordinator/Sidebar";
import { authService } from "../services/authService";
import { Menu } from "lucide-react";

const AcademicCoordinatorLayout = () => {
  const [user] = useState(() => authService.getCurrentUser());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayName = user?.name || "Coordinator";
  const userRole = user?.role || "Academic Coordinator";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <CoordinatorSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 md:ml-80 transition-all duration-300">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <h2 className="text-xl font-semibold text-slate-800">
            Coordinator Dashboard
          </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Welcome, {displayName}</span>
            <Link to="/dashboard/coordinator/profile" className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 transition-all">
              {initial}
            </Link>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AcademicCoordinatorLayout;
