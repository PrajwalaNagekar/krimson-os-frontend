// src/components/navigation/admin/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, LogOut, X } from 'lucide-react';

import { ADMIN_MENU_ITEMS } from './adminMenuData';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, onLogout }) => {

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 sidebar-width-mobile p-3 md:p-4 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
         {/* Gradient Box - Updated to match Screenshot (Cyan -> Blue -> Pink) */}
         <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
            
            {/* Glass Effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

            {/* Close Button for Mobile */}
            <button 
               onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
               className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 lg:hidden"
            >
               <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 pl-1 md:pl-2 relative z-10">
               <div className="p-1.5 md:p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
               </div>
               <div>
                  <h1 className="font-bold text-base md:text-lg tracking-wide">Krimson SSO</h1>
                  <p className="text-[10px] md:text-xs text-white/80">Singapore</p>
               </div>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar pr-1">
               {ADMIN_MENU_ITEMS.map((item) => (
                  <NavLink
                     key={item.id}
                     to={item.path}
                     end={item.path === '/dashboard/admin'} 
                     onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
                     className={({ isActive }) => `
                        flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-all duration-200 group min-h-[44px]
                        ${isActive 
                           ? "bg-white text-blue-600 shadow-md font-bold" 
                           : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                        }
                     `}
                  >
                     <span className={({ isActive }) => isActive ? "text-blue-500 flex-shrink-0" : "text-white flex-shrink-0"}>{item.icon}</span>
                     <span className="text-xs md:text-sm">{item.name}</span>
                  </NavLink>
               ))}
            </div>

            {/* Footer Profile */}
            <div className="mt-4 pt-3 md:pt-4 border-t border-white/20 relative z-10">
               <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                  <NavLink to="/dashboard/admin/profile" className="flex items-center gap-2 md:gap-3 flex-1 group cursor-pointer">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-[10px] md:text-xs shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">A</div>
                     <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm font-semibold text-white group-hover:text-blue-100 transition-colors truncate">Administrator</p>
                        <p className="text-[9px] md:text-[10px] text-white/80">:: Verified</p>
                     </div>
                  </NavLink>
                  <button 
                     onClick={onLogout}
                     className="p-1.5 md:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                     title="Logout"
                  >
                     <LogOut className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Sidebar;