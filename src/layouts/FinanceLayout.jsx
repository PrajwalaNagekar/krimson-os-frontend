import React, { useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/navigation/finance/Sidebar';
import { Search, Bell, Menu } from 'lucide-react';
import { FINANCE_DATA } from '../data/financeData';
import { authService } from '../services/authService';

const FinanceLayout = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex">
      <Sidebar onLogout={handleLogout} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 md:ml-72 p-8 overflow-x-hidden">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Finance Overview</h2>
            <p className="text-slate-500 text-sm">Manage fees, invoices, and compliance audits.</p>
          </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search Invoice ID or Student..." 
                className="pl-10 pr-4 py-2.5 w-64 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <button className="p-2.5 bg-white rounded-full shadow-sm text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <Link to="/dashboard/finance/profile">
              <img src={FINANCE_DATA.user.avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm hover:ring-2 hover:ring-blue-100 transition-all" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="animate-in fade-in duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FinanceLayout;
