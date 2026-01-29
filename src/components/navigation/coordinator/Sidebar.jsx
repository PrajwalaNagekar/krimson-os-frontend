import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    Home, BookOpen, Calendar, CheckSquare, BarChart, Shield, Scan, LogOut, X
} from 'lucide-react';
import { authService } from "../../../services/authService";

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { title: 'Curriculum Planner', path: '/dashboard/coordinator/curriculum', icon: BookOpen },
        { title: 'Timetable Console', path: '/dashboard/coordinator/timetable', icon: Calendar },
        { title: 'Lesson Approval', path: '/dashboard/coordinator/approval', icon: CheckSquare },
        { title: 'Assessment Tracker', path: '/dashboard/coordinator/assessment', icon: BarChart },
    ];

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    };

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
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 p-4 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}>
            <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
                {/* Close Button for Mobile */}
                <button 
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 md:hidden"
                >
                    <X size={20} />
                </button>

                {/* Top Logo Area */}
                <div className="flex items-center gap-3 mb-8 shrink-0 pl-2">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm"><Shield className="h-6 w-6 text-white" /></div>
                    <div><h1 className="font-bold text-lg tracking-wide text-white">Krimson SSO</h1><p className="text-xs text-white/80 font-medium">Singapore</p></div>
                </div>

                {/* Coordinator Menu List */}
                <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${active ? 'bg-white text-blue-600 font-bold shadow-md' : 'text-white/90 hover:bg-white/10 hover:translate-x-1'}`}
                            >
                                <Icon className={`h-5 w-5 ${active ? 'text-blue-500' : 'text-white'}`} />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Coordinator Profile */}
                <div className="mt-4 pt-4 border-t border-white/20 shrink-0">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 hover:bg-white/20 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">AC</div>
                        <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-white truncate">Coordinator</p><div className="flex items-center gap-1 text-[10px] text-white/80 font-medium"><Scan className="h-2 w-2" /><span>Verified</span></div></div>
                        <button onClick={handleLogout} className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"><LogOut className="h-4 w-4" /></button>
                    </div>
                </div>
            </div>
            </div>
            </aside>
        </>
    );
};

export default Sidebar;
