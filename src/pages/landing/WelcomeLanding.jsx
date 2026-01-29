import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import {
    LayoutDashboard,
    Bell,
    CheckSquare,
    FileText,
    User,
    LogOut,
    Calendar,
    School,
    TrendingUp,
    ArrowUpRight
} from "lucide-react";
import { authService } from "../../services/authService";
import RoleSwitcher from "../../components/common/RoleSwitcher";
import { useAppDispatch } from "../../store/hooks";
import { addNotification } from "../../store/slices/uiSlice";
import { getDashboardPath } from "../../utils/roleNavigation";
import { getUserActiveRole, formatRoleForDisplay } from "../../utils/roleUtils";

const WelcomeLanding = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [user] = useState(() => authService.getCurrentUser());
    const [time, setTime] = useState(DateTime.now().setZone("Asia/Singapore"));

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        // Clock ticker
        const timer = setInterval(() => {
            setTime(DateTime.now().setZone("Asia/Singapore"));
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate, user]);

    const handleLogout = () => {
        authService.logout();
        dispatch(addNotification({ type: 'info', message: 'Logged out successfully' }));
        navigate("/login");
    };

    if (!user) return null;

    // Use utility function to safely get user's active role
    const activeRole = getUserActiveRole(user);
    const dashboardPath = getDashboardPath(activeRole);

    // Mock Announcements
    const announcements = [
        { id: 1, text: "Annual Sports Day on 15th Jan", date: "2 days ago" },
        { id: 2, text: "Parent-Teacher meeting scheduled", date: "5 hours ago" },
        { id: 3, text: "New Library books available", date: "Just now" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 font-sans text-slate-800">
            {/* Navbar / Header */}
            <nav className="px-6 py-4 bg-white/80 backdrop-blur border-b border-white/50 shadow-sm flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <School className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-800">
                        Krimson OS
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <RoleSwitcher currentUser={user} />
                    <div className="h-8 w-[1px] bg-slate-200"></div>
                    <button
                        onClick={handleLogout}
                        className="text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-6 sm:p-10">

                {/* Welcome Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white shadow-2xl shadow-blue-900/20 p-8 sm:p-12 mb-10">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-xl font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white/80 font-medium text-lg">Welcome back,</p>
                                    <h1 className="text-3xl sm:text-4xl font-bold">{user.name}</h1>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/10 text-sm font-medium">
                                <User className="h-4 w-4" />
                                Logged in as {formatRoleForDisplay(activeRole)}
                            </div>
                        </div>

                        {/* Clock Widget */}
                        <div className="text-right">
                            <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Singapore Standard Time</p>
                            <div className="text-4xl sm:text-6xl font-mono font-bold leading-none tracking-tight">
                                {time.toFormat("HH:mm")}
                            </div>
                            <p className="text-white/90 text-lg mt-1">{time.toFormat("EEEE, d MMMM yyyy")}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Grid - Premium Edition */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Dashboard Card */}
                    <Link to={dashboardPath} className="group relative overflow-hidden p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Animated Blob */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <LayoutDashboard className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">Dashboard</h3>
                            <p className="text-white/90 text-sm font-medium">Go to your main workspace</p>
                            
                            {/* Hover Arrow */}
                            <div className="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                <span className="text-xs font-bold">Open</span>
                                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* Notifications Card */}
                    <div className="group relative overflow-hidden p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Animated Blob */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative">
                                <Bell className="h-8 w-8 text-white group-hover:animate-bounce" />
                                {/* Notification Badge */}
                                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-rose-600 rounded-full text-xs font-bold flex items-center justify-center shadow-lg">3</span>
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">Notifications</h3>
                            <p className="text-white/90 text-sm font-medium">3 New alerts waiting</p>
                            
                            {/* Pulse Indicator */}
                            <div className="mt-4 flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                <span className="text-xs font-bold text-white/90">Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Reports Card */}
                    <div className="group relative overflow-hidden p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Animated Blob */}
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">Reports</h3>
                            <p className="text-white/90 text-sm font-medium">View analytics & insights</p>
                            
                            {/* Stats Preview */}
                            <div className="mt-4 flex items-center gap-3">
                                <div className="flex items-center gap-1 text-white">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-xs font-bold">+12.5%</span>
                                </div>
                                <div className="h-1 w-1 rounded-full bg-white/60"></div>
                                <span className="text-xs text-white/80 font-medium">This month</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                        Announcements
                    </h3>
                    <div className="space-y-4">
                        {announcements.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-white flex-shrink-0 flex items-center justify-center text-slate-400 font-bold border border-slate-200">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800">{item.text}</p>
                                    <p className="text-sm text-slate-500 mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WelcomeLanding;
