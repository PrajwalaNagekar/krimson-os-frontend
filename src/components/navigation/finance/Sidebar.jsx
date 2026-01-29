import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Settings, FileText, AlertTriangle, 
  RefreshCcw, BarChart3, ShieldCheck, LogOut, X 
} from 'lucide-react';

const Sidebar = ({ onLogout, isOpen, onClose }) => {
  const menuItems = [
    { name: "Finance Dashboard", path: "/dashboard/finance/dashboard", icon: <LayoutDashboard size={20} /> }, // Screen 1
    { name: "Fee Structure", path: "/dashboard/finance/structure", icon: <Settings size={20} /> }, // Screen 2
    { name: "Invoice Manager", path: "/dashboard/finance/invoices", icon: <FileText size={20} /> }, // Screen 3
    { name: "Defaulter Tracker", path: "/dashboard/finance/defaulters", icon: <AlertTriangle size={20} /> }, // Screen 4
    { name: "Refunds & Ledger", path: "/dashboard/finance/refunds", icon: <RefreshCcw size={20} /> }, // Screen 5
    { name: "Financial Reports", path: "/dashboard/finance/reports", icon: <BarChart3 size={20} /> }, // Screen 6
    { name: "Audit Center", path: "/dashboard/finance/audit", icon: <ShieldCheck size={20} /> }, // Screen 7
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
      {/* Gradient Container - Matches Reference Image */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Glassmorphism Decor */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Close Button for Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 md:hidden"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 pl-2 relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson SSO</h1>
            <p className="text-xs text-white/80">Finance Module</p>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 overflow-y-auto space-y-1 relative z-10">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-white text-blue-600 shadow-md font-bold" 
                    : "text-white/90 hover:bg-white/10"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* User Profile */}
        <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-xs">F</div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Finance</p>
              <p className="text-[10px] opacity-80">:: Verified</p>
            </div>
            <LogOut size={16} className="cursor-pointer hover:text-red-200" onClick={onLogout} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
