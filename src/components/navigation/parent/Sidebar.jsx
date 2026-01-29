import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, CalendarCheck, BookOpen, 
  FileBarChart, FileText, MessageSquare, CreditCard, 
  Activity, Calendar, Bell, Trophy, MessageCircle, 
  HelpCircle, UserCircle, LogOut, X 
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isWideScreen }) => {
  const menuItems = [
    { name: "Home Dashboard", path: "/dashboard/parent/home", icon: <LayoutDashboard size={20} /> }, // Screen 1
    { name: "My Children", path: "/dashboard/parent/children", icon: <Users size={20} /> }, // Screen 2
    { name: "Attendance Record", path: "/dashboard/parent/attendance", icon: <CalendarCheck size={20} /> }, // Screen 3
    { name: "Homework Monitor", path: "/dashboard/parent/homework", icon: <BookOpen size={20} /> }, // Screen 4
    { name: "Exam Dashboard", path: "/dashboard/parent/exams", icon: <FileBarChart size={20} /> }, // Screen 5
    { name: "Report Cards", path: "/dashboard/parent/reports", icon: <FileText size={20} /> }, // Screen 6
    { name: "Communication Hub", path: "/dashboard/parent/communication", icon: <MessageSquare size={20} /> }, // Screen 7
    { name: "Fee Payments", path: "/dashboard/parent/fees", icon: <CreditCard size={20} /> }, // Screen 8
    { name: "Behavior Reports", path: "/dashboard/parent/behavior", icon: <Activity size={20} /> }, // Screen 9
    { name: "Calendar & Events", path: "/dashboard/parent/calendar", icon: <Calendar size={20} /> }, // Screen 10
    { name: "Notices & Circulars", path: "/dashboard/parent/notices", icon: <Bell size={20} /> }, // Screen 11
    { name: "Co-Curricular", path: "/dashboard/parent/cca", icon: <Trophy size={20} /> }, // Screen 12
    { name: "Feedback Survey", path: "/dashboard/parent/feedback", icon: <MessageCircle size={20} /> }, // Screen 13
    { name: "Support Center", path: "/dashboard/parent/support", icon: <HelpCircle size={20} /> }, // Screen 14
    { name: "Profile & Settings", path: "/dashboard/parent/profile", icon: <UserCircle size={20} /> }, // Screen 15
  ];

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay - Show only when not wide screen */}
      {isOpen && !isWideScreen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container - 800px breakpoint via isWideScreen */}
      <div className={`h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 ${
        isWideScreen ? 'translate-x-0' : (isOpen ? 'translate-x-0' : '-translate-x-full')
      }`}>
      {/* Gradient Container - Matches screenshot style */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Circles for Glassmorphism effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Close Button for Mobile - Show when not wide screen */}
        {!isWideScreen && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <X size={20} />
          </button>
        )}

        {/* Logo Area */}
        <NavLink to="/dashboard/parent/home" className="flex items-center gap-3 mb-8 pl-2 relative z-10 cursor-pointer">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <LayoutDashboard size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson SSO</h1>
            <p className="text-xs text-white/80">Singapore</p>
          </div>
        </NavLink>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-1 custom-scrollbar relative z-10">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-white text-blue-600 shadow-md font-semibold" 
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-blue-500" : "text-white"}>
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Bottom Profile Section */}
        <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md">
            <NavLink to="/dashboard/parent/profile" className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-xs">
                P
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Parent</p>
                <p className="text-[10px] opacity-80 text-white">:: Verified</p>
              </div>
            </NavLink>
            <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white" title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
