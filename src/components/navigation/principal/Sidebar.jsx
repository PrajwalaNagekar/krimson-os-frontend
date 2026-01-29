import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  User,
  TrendingUp,
  MessageSquare,
  Monitor,
  DollarSign,
  Users,
  Heart,
  Calendar,
  FileText,
  CheckCircle,
  Mic,
  Target,
  Shield,
  LogOut,
  Scan,
  X
} from 'lucide-react';

const PrincipalSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard/principal", icon: Home },
    { title: "Academic Monitor", path: "/dashboard/principal/academic", icon: BookOpen },
    { title: "Teacher Performance", path: "/dashboard/principal/teachers", icon: User },
    { title: "Student Trends", path: "/dashboard/principal/students", icon: TrendingUp },
    { title: "Communication", path: "/dashboard/principal/communication", icon: MessageSquare },
    { title: "Exam Oversight", path: "/dashboard/principal/exams", icon: Monitor },
    { title: "Finances", path: "/dashboard/principal/finance", icon: DollarSign },
    { title: "Staff management", path: "/dashboard/principal/staff", icon: Users },
    { title: "Welfare Dashboard", path: "/dashboard/principal/welfare", icon: Heart },
    { title: "Calendar & Events", path: "/dashboard/principal/events", icon: Calendar },
    { title: "Reports", path: "/dashboard/principal/reports", icon: FileText },
    { title: "Compliance", path: "/dashboard/principal/compliance", icon: CheckCircle },
    { title: "Meetings", path: "/dashboard/principal/meetings", icon: Mic },
    { title: "Strategy", path: "/dashboard/principal/strategy", icon: Target },
    { title: "Profile", path: "/dashboard/principal/profile", icon: Shield },
  ];

  const isActive = (path) => {
      if (path === "/dashboard/principal" && location.pathname === "/dashboard/principal") return true;
      if (path !== "/dashboard/principal" && location.pathname.startsWith(path)) return true;
      return false;
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 z-50 sidebar-width-mobile p-3 md:p-4 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
      {/* Premium Gradient Background - Updated to match standard */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
      
      {/* Decorative Glass Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
        {/* Close Button for Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 lg:hidden"
        >
          <X size={20} />
        </button>

        {/* Top Logo Area */}
        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 shrink-0 pl-1 md:pl-2">
          <div className="p-1.5 md:p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
             <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-lg tracking-wide text-white">Krimson SSO</h1>
            <p className="text-[10px] md:text-xs text-white/80 font-medium">Principal Console</p>
          </div>
        </div>

        {/* Menu List */}
        <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-all duration-200 group min-h-[44px] ${
                  active 
                    ? 'bg-white text-blue-600 shadow-md font-bold' 
                    : 'text-white/90 hover:bg-white/10 hover:translate-x-1'
                }`}
              >
                <Icon className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 ${active ? 'text-blue-500' : 'text-white'}`} />
                <span className="text-xs md:text-sm">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profile / Logout Section */}
        <div className="mt-4 pt-3 md:pt-4 border-t border-white/20 shrink-0">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 hover:bg-white/20 transition-colors">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-[10px] md:text-xs shadow-sm flex-shrink-0">
                  P
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-semibold text-white truncate">Dr. Principal</p>
                  <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-white/80 font-medium">
                    <Scan className="h-2 w-2 flex-shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="text-white/70 hover:text-white transition-colors p-1.5 md:p-2 rounded-lg hover:bg-white/10 flex-shrink-0"
                >
                  <LogOut className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </button>
            </div>
        </div>
      </div>
      </div>
      </aside>
    </>
  );
};

export default PrincipalSidebar;
