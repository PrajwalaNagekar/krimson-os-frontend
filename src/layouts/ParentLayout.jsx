import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/navigation/parent/Sidebar';
import { Search, Bell, Menu } from 'lucide-react';
import { PARENT_DATA } from '../data/parentData';

const ParentLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 800);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0); // Global state for selected child

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 800);
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex">
      {/* Sidebar - Fixed Width */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} isWideScreen={isWideScreen} />

      {/* Main Content Area - Margin adjusts at 800px */}
      <div 
        className="flex-1 p-6 overflow-x-hidden transition-all duration-300"
        style={{ marginLeft: isWideScreen ? '288px' : '0' }}
      >
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            {!isWideScreen && (
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
              >
                <Menu size={20} />
              </button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
              <p className="text-slate-500 text-sm">Aggregated Data View</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar matching screenshot */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search across all apps..." 
                className="pl-10 pr-4 py-2.5 w-64 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-600"
              />
            </div>
            
            {/* Notification Bell */}
            <button className="p-2.5 bg-white rounded-full shadow-sm text-slate-600 hover:text-blue-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <Link to="/dashboard/parent/profile">
              <img 
                src="https://i.pravatar.cc/150?img=32" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm hover:ring-2 hover:ring-blue-100 transition-all"
              />
            </Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="min-h-[80vh]">
          <Outlet context={{ selectedChildIndex, setSelectedChildIndex }} />
        </div>
      </div>
    </div>
  );
};

export default ParentLayout;
