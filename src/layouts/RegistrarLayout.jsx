import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/navigation/registrar/Sidebar";
import { authService } from "../services/authService";
import { Menu } from "lucide-react";

const RegistrarLayout = () => {
  const [user] = useState(() => authService.getCurrentUser());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const displayName = user?.name || "Registrar";
  const userRole = user?.role || "Registrar";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 lg:ml-80 transition-all duration-300 flex flex-col min-h-screen">
         {/* Top Decoration similar to monolithic file */}
         <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none z-0"></div>

        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-4 md:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-slate-800">
            {userRole} Workspace
          </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-xs md:text-sm text-slate-500">Welcome, {displayName}</span>
            <Link to="/dashboard/registrar/profile" className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-cyan-200 transition-all">
              {initial}
            </Link>
          </div>
        </header>

        <main className="p-4 md:p-6 lg:p-8 relative z-10 flex-1 overflow-y-auto pb-20 md:pb-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RegistrarLayout;
