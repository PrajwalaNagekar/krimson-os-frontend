import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/navigation/counselor/Sidebar';
import { Search, Bell, Menu } from 'lucide-react';
import { COUNSELOR_DATA } from '../data/counselorData';

const CounselorLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex font-sans">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 lg:ml-72 p-4 md:p-6 lg:p-8 overflow-x-hidden">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Wellbeing Center</h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1">Student Behavior, Intervention & Support</p>
          </div>
          </div>
          <div className="flex items-center gap-3 md:gap-5 w-full md:w-auto justify-end">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search student case files..." 
                className="pl-10 pr-4 py-3 w-64 xl:w-72 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-shadow"
              />
            </div>
            <button className="p-2 md:p-3 bg-white rounded-full shadow-sm text-slate-600 relative hover:text-blue-600 transition-colors">
              <Bell size={18} className="md:hidden" />
              <Bell size={20} className="hidden md:block" />
              <span className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <Link to="/dashboard/counselor/profile" className="flex items-center gap-2 md:gap-3 bg-white p-1.5 pr-3 md:pr-4 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-shadow">
               <img src={COUNSELOR_DATA.user.avatar} alt="Profile" className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover" />
               <div className="hidden md:block text-left">
                  <p className="text-xs font-bold text-slate-700">{COUNSELOR_DATA.user.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">{COUNSELOR_DATA.user.role}</p>
               </div>
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="animate-in fade-in duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CounselorLayout;
