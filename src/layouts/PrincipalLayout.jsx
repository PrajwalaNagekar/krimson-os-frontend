import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import PrincipalSidebar from "../components/navigation/principal/Sidebar";
import { authService } from "../services/authService";
import { Menu } from "lucide-react";

const PrincipalLayout = () => {
  const [user] = useState(() => authService.getCurrentUser());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayName = user?.name || "User";
  const userRole = user?.role || "Principal";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <PrincipalSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 lg:ml-80 transition-all duration-300">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-4 md:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-slate-800">
            {/* {userRole}  */}Principal
            Dashboard
          </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-xs md:text-sm text-slate-500">Welcome, {displayName}</span>
            <Link to="/dashboard/principal/profile" className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-md ring-2 ring-white hover:ring-offset-2 hover:ring-cyan-200 transition-all cursor-pointer">
              {initial}
            </Link>
          </div>
        </header>
        <main className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrincipalLayout;
