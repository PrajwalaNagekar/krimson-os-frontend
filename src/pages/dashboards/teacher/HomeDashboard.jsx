import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Clock, CheckCircle, AlertTriangle, BookOpen, UserCheck, Calendar,
  Bell, TrendingUp, Users, FileText, Send, Upload, ClipboardCheck
} from 'lucide-react';

const HomeDashboard = () => {
  const { dashboard, user } = TEACHER_DATA;
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Mock API call - to be replaced with actual API
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/dashboard')
    //   .then(res => res.json())
    //   .then(data => setDashboardData(data));
    console.log('Dashboard loaded - Ready for API integration');
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Crimson Header Band - Matching Teacher Sidebar */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                Teacher Home Dashboard
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Welcome Back, {user.name.split(' ')[1]}
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {formatDate(currentTime)} • {formatTime(currentTime)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl">
                <p className="text-xs opacity-80">Today's Classes</p>
                <p className="text-2xl font-bold">{dashboard.classesToday.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid - Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-cyan-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Classes Today</p>
            <Calendar className="text-cyan-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">
            {dashboard.classesToday.length}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
          <p className="text-xs text-cyan-600 font-semibold mt-1">Scheduled Sessions</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-blue-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Review</p>
            <FileText className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {dashboard.pendingAssignments}
          </h3>
          <p className="text-xs text-blue-600 font-semibold mt-1">Assignments</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-purple-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attendance</p>
            <ClipboardCheck className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
            2/3 Marked
          </h3>
          <p className="text-xs text-green-600 font-semibold mt-1">1 Pending</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-pink-400 group hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alerts</p>
            <AlertTriangle className="text-pink-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
            {dashboard.alerts.length}
          </h3>
          <p className="text-xs text-pink-600 font-semibold mt-1">Performance Alerts</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Classes Today Widget - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg md:text-xl">
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl">
                <Calendar className="text-white" size={20} />
              </div>
              Classes Today
            </h3>
            <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-bold">
              {dashboard.classesToday.length} Sessions
            </span>
          </div>
          
          <div className="space-y-4">
            {dashboard.classesToday.map((cls) => (
              <div 
                key={cls.id} 
                className="p-4 md:p-5 border border-slate-100 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-cyan-50 hover:via-blue-50 hover:to-pink-50 hover:border-blue-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 rounded-xl font-bold text-sm min-w-[90px] text-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                    {cls.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 mb-1">{cls.subject}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {cls.grade}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>{cls.room}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-xs font-bold rounded-xl hover:from-slate-800 hover:to-black shadow-md transition-all active:scale-95 whitespace-nowrap">
                  Start Class
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Alerts & Actions */}
        <div className="space-y-6">
          {/* Assignments Pending Review */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
              <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl">
                <FileText className="text-white" size={18} />
              </div>
              Assignments Pending
            </h3>
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {dashboard.pendingAssignments}
              </div>
              <p className="text-xs text-slate-500 font-medium">Submissions to Review</p>
              <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-md transition-all">
                Review Now
              </button>
            </div>
          </div>

          {/* Performance Alerts */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
              <div className="p-2 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl">
                <AlertTriangle className="text-white" size={18} />
              </div>
              Performance Alerts
            </h3>
            <div className="space-y-3">
              {dashboard.alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className="flex gap-3 items-start p-3 bg-gradient-to-r from-pink-50 to-red-50 border border-pink-100 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 mt-2 bg-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-700 mb-1">{alert.type}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{alert.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Attendance to Mark Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg md:text-xl">
            <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
              <ClipboardCheck className="text-white" size={20} />
            </div>
            Attendance to Mark
          </h3>
          <span className="text-xs px-3 py-1 bg-purple-50 text-purple-600 rounded-full font-bold">
            1 Pending
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dashboard.classesToday.slice(0, 1).map((cls) => (
            <div 
              key={cls.id}
              className="p-4 border-2 border-purple-100 rounded-2xl hover:border-purple-300 transition-all bg-gradient-to-br from-purple-50/50 to-pink-50/50"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-lg">
                  {cls.time}
                </span>
                <span className="text-xs text-slate-500">{cls.room}</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">{cls.subject}</h4>
              <p className="text-xs text-slate-600 mb-3">{cls.grade}</p>
              <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 shadow-md transition-all">
                Mark Attendance
              </button>
            </div>
          ))}
          
          <div className="col-span-1 md:col-span-2 flex items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">
            <div className="text-center">
              <CheckCircle className="mx-auto text-green-500 mb-2" size={32} />
              <p className="text-sm font-bold text-slate-700">Other Classes Marked</p>
              <p className="text-xs text-slate-500 mt-1">2 of 3 classes completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-blue-100">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
          <TrendingUp className="text-blue-500" size={20} />
          Quick Actions
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button className="p-4 bg-white border-2 border-cyan-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-cyan-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <UserCheck size={20} className="text-white" />
            </div>
            <span className="text-slate-700">Take Attendance</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>

          <button className="p-4 bg-white border-2 border-blue-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-blue-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <Upload size={20} className="text-white" />
            </div>
            <span className="text-slate-700">Upload Lesson</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>

          <button className="p-4 bg-white border-2 border-purple-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-purple-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <Send size={20} className="text-white" />
            </div>
            <span className="text-slate-700">Send Announcement</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>

          <button className="p-4 bg-white border-2 border-pink-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-pink-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="text-slate-700">Grade Assignments</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>

          <button className="p-4 bg-white border-2 border-orange-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-orange-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <Calendar size={20} className="text-white" />
            </div>
            <span className="text-slate-700">View Schedule</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>

          <button className="p-4 bg-white border-2 border-green-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-green-300 hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
              <TrendingUp size={20} className="text-white" />
            </div>
            <span className="text-slate-700">View Analytics</span>
            <span className="text-[10px] text-slate-400 font-normal">get in app</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
