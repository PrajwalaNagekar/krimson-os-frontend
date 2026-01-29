import React, { useState, useEffect } from 'react';
import { Clock, Layout, Bell, FileText, ArrowRight } from 'lucide-react';

/**
 * Common Screen 2: Role Detection & Welcome Landing
 * Roles: All Roles (After Login)
 * 
 * Used in:
 * - src/routes/AuthRoutes.jsx (Redirection target)
 * 
 * Logic:
 * - Landing page after login.
 * - Confirms role and provides quick entry points.
 * - Displays Real-time clock (Singapore Standard Time as per spec).
 */

const RoleLanding = ({ user, role, onContinue }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for Singapore (Asia/Singapore)
  const timeString = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString('en-US', { timeZone: 'Asia/Singapore', weekday: 'long', day: 'numeric', month: 'long' });

  // Default mock if no user
  const effectiveUser = user || { name: "Ms. Neena", role: role || "Teacher" };
  const effectiveRole = role || "Teacher";

  // Dynamic greeting based on Singapore time
  const getGreeting = () => {
    const hour = parseInt(time.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', hour12: false }));
    if (hour < 12) return "Good Morning,";
    if (hour < 18) return "Good Afternoon,";
    return "Good Evening,";
  };

  const quickLinks = [
      { id: 1, title: "Dashboard", icon: <Layout size={20}/>, path: `/dashboard/${effectiveRole.toLowerCase()}` },
      { id: 2, title: "Notifications", icon: <Bell size={20}/>, path: `/dashboard/${effectiveRole.toLowerCase()}/notifications` },
      { id: 3, title: "Reports", icon: <FileText size={20}/>, path: `/dashboard/${effectiveRole.toLowerCase()}/reports` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
       
       <div className="w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Side: Welcome & Time */}
          <div className="flex-1 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-10 left-0 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-2xl -ml-16"></div>
              
              <div>
                  <h1 className="text-4xl font-bold mb-2">{getGreeting()}</h1>
                  <h2 className="text-2xl font-medium opacity-90">{effectiveUser.name}!</h2>
                  <div className="inline-block px-4 py-1 bg-white/20 rounded-full mt-4 text-sm font-bold backdrop-blur-sm">
                      You're logged in as {effectiveRole}
                  </div>
              </div>

              <div className="mt-12">
                  <div className="text-6xl font-bold tracking-tighter">{timeString}</div>
                  <div className="text-lg opacity-80 mt-1 font-medium">{dateString}</div>
                  <div className="text-xs opacity-60 mt-2 uppercase tracking-widest">Singapore Standard Time</div>
              </div>
          </div>

          {/* Right Side: Quick Links & Status */}
          <div className="flex-1 p-12 flex flex-col justify-center bg-white">
              <h3 className="text-xl font-bold text-slate-800 mb-8">Where would you like to go?</h3>
              
              <div className="space-y-4">
                  {quickLinks.map(link => (
                      <button 
                        key={link.id}
                        onClick={() => onContinue && onContinue(link.path)}
                        className="w-full bg-slate-50 hover:bg-cyan-50 border border-slate-100 hover:border-cyan-200 p-6 rounded-2xl flex items-center justify-between group transition-all"
                      >
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:scale-110 transition-transform">
                                  {link.icon}
                              </div>
                              <span className="font-bold text-slate-700 group-hover:text-blue-600">{link.title}</span>
                          </div>
                          <ArrowRight className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </button>
                  ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Current Announcements</h4>
                  <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-100">
                      <p className="text-xs font-bold text-slate-700 line-clamp-2">
                          Reminder: Staff meeting scheduled for tomorrow at 10 AM in the Conference Hall.
                      </p>
                  </div>
              </div>
          </div>
       </div>

    </div>
  );
};

export default RoleLanding;
