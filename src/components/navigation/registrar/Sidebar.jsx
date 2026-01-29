import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Users, FileCheck, Bus, AlertCircle, LayoutGrid, LogOut, FolderOpen, X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { id: 'admissions', title: 'Admissions', path: '/dashboard/registrar/admissions', icon: Users },
        { id: 'records', title: 'Student Records', path: '/dashboard/registrar/records', icon: FolderOpen },
        { id: 'compliance', title: 'Compliance Center', path: '/dashboard/registrar/compliance', icon: AlertCircle },
        { id: 'withdrawals', title: 'Transfers / Exits', path: '/dashboard/registrar/withdrawals', icon: LogOut },
    ];

    const isActive = (path) => {
        if (path === "/dashboard/registrar" && location.pathname === "/dashboard/registrar") return true;
        if (path !== "/dashboard/registrar" && location.pathname.startsWith(path)) return true;
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
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 p-4 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}>
            {/* Premium Gradient Background */}
            <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
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
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
                        <span className="font-bold text-lg text-white">K</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-white tracking-wide">Krimson SSO</h1>
                        <p className="text-xs text-white/80">Registrar Console</p>
                    </div>
                </div>

                {/* Registrar Menu List */}
                <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <Link 
                                key={item.id} 
                                to={item.path}
                                onClick={onClose}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-white text-blue-600 shadow-md font-bold' : 'hover:bg-white/10 text-white/90 hover:text-white hover:translate-x-1'}`}
                            >
                                <Icon className={`w-5 h-5 ${active ? 'text-blue-500' : ''}`} />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Registrar Profile */}
                <div className="mt-4 pt-4 border-t border-white/20 relative z-10 shrink-0">
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md hover:bg-white/20 transition-colors flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">R</div>
                    <div className="overflow-hidden flex-1">
                      <p className="text-sm font-semibold truncate text-white">Registrar</p>
                      <p className="text-[10px] text-white/80">:: Verified</p>
                    </div>
                    <button onClick={handleLogout} className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                        <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </div>
            </div>
            </div>
            </aside>
        </>
    );
};

export default Sidebar;
