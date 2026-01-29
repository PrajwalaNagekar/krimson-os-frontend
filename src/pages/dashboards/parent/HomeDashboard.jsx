import React from 'react';
import { useSelector } from 'react-redux';
import { PARENT_DATA } from '../../../data/parentData';
import { 
  Calendar, CheckCircle2, ArrowRight, DollarSign,
  FileText, MessageSquare, CreditCard, Clock,
  User, ExternalLink, ChevronRight, BookMarked
} from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';

/**
 * Parent Home Dashboard - Screen 1
 * Purpose: Single-view summary of child's academic, behavioral, and financial status
 * Features: Attendance, Upcoming Exams, Fee Status, Teacher Remarks, Quick Links
 * Future: Replace static data with Student Database + Attendance API + Finance Module
 */
const HomeDashboard = () => {
  const { user: authUser } = useSelector((state) => state.auth);
  const { children, widgets } = PARENT_DATA;
  const { selectedChildIndex } = useOutletContext();
  const activeChild = children[selectedChildIndex] || children[0];

  // Fallback to static data if authUser is not available (dev mode/unauthenticated preview)
  const userName = authUser?.name || PARENT_DATA.user.name;

  // Future API: Fetch child dashboard data
  const fetchChildData = () => {
    console.log('Future API: GET /api/parent/child/dashboard');
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner - Matching Sidebar Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-2xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block">
              Parent Dashboard
            </span>
            <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block">
              Singapore Campus
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-2">
            Welcome Back, {userName}
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Here's your daily summary for <span className="font-bold text-white">{activeChild.name}</span>—track progress, stay informed, and engage.
          </p>
        </div>
      </div>

      {/* Quick Action Links - Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/dashboard/parent/reports" className="group bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-5 rounded-2xl border-2 border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500 rounded-xl text-white">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">View Report Card</h3>
                <p className="text-xs text-slate-500">Latest grades & feedback</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
          </div>
        </Link>

        <Link to="/dashboard/parent/communication" className="group bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-5 rounded-2xl border-2 border-green-100 hover:border-green-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500 rounded-xl text-white">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Message Teacher</h3>
                <p className="text-xs text-slate-500">Quick communication</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:text-green-500 transition-colors" />
          </div>
        </Link>

        <Link to="/dashboard/parent/fees" className="group bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 p-5 rounded-2xl border-2 border-purple-100 hover:border-purple-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500 rounded-xl text-white">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Pay Fees</h3>
                <p className="text-xs text-slate-500">Secure payment portal</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-400 group-hover:text-purple-500 transition-colors" />
          </div>
        </Link>
      </div>

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Widget */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">Attendance</h3>
              <p className="text-xs text-slate-500">Current Month</p>
            </div>
            <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
              <CheckCircle2 size={22} />
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-800">{activeChild.attendance}</span>
              <span className="text-2xl font-bold text-slate-400">%</span>
            </div>
            <span className="inline-block mt-2 text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-lg">
              Excellent Standing
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Days Present</span>
              <span className="font-bold text-slate-700">{Math.floor(activeChild.attendance * 0.2)} / 20 days</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${activeChild.attendance}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="/dashboard/parent/attendance" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5">
              View Full Record
              <ArrowRight size={12} />
            </Link>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>

        {/* Fee Payment Status */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-red-50 rounded-bl-[100px] -mr-8 -mt-8"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Fee Status</h3>
                <p className="text-xs text-slate-500">Next Due: {widgets.fees.dueDate}</p>
              </div>
              <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                <DollarSign size={22} />
              </div>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-extrabold text-slate-800 mb-2">
                {widgets.fees.amount}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-lg">
                  {widgets.fees.status}
                </span>
                {widgets.fees.status === 'Due' && (
                  <span className="text-xs text-slate-500">• 5 days remaining</span>
                )}
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              Pay Now
            </button>
            <div className="flex justify-end mt-3">
               <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
                  <span>Go to App</span>
                  <ExternalLink size={10} />
               </div>
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">Upcoming Exams</h3>
              <p className="text-xs text-slate-500">Next 7 days</p>
            </div>
            <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
              <Calendar size={22} />
            </div>
          </div>

          <div className="space-y-3">
            {widgets.exams.slice(0, 2).map((exam, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl border border-purple-100">
                <div className="bg-white p-2.5 rounded-lg shadow-sm text-center min-w-[56px] border border-purple-100">
                  <span className="block text-[10px] text-purple-600 font-bold uppercase">{exam.date.split('-')[1]}</span>
                  <span className="block text-xl font-extrabold text-slate-800">{exam.date.split('-')[2]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{exam.subject}</h4>
                  <p className="text-xs text-slate-500">{exam.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="/dashboard/parent/exams" className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1.5">
              View All Exams
              <ArrowRight size={12} />
            </Link>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Remarks & Upcoming Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teacher Remarks - Last 7 Days */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <User size={20} className="text-blue-500" />
              <h3 className="font-bold text-slate-800 text-lg">Teacher Remarks</h3>
            </div>
            <span className="text-xs text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-lg">Last 7 Days</span>
          </div>

          <div className="space-y-4">
            {widgets.remarks.map((remark, i) => (
              <div key={i} className="relative pl-4 border-l-4 border-blue-400 pb-4 last:pb-0 last:border-l-transparent">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                <div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">"{remark.text}"</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-blue-600">{remark.teacher}</span>
                    <span>•</span>
                    <span>{remark.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <BookMarked size={20} className="text-green-500" />
              <h3 className="font-bold text-slate-800 text-lg">Upcoming Assignments</h3>
            </div>
            <span className="text-xs text-green-600 font-bold bg-green-100 px-3 py-1 rounded-lg">3 Pending</span>
          </div>

          <div className="space-y-3">
            {[
              { subject: 'Mathematics', title: 'Chapter 5 Homework', due: '2026-01-22', priority: 'High' },
              { subject: 'Science', title: 'Lab Report - Photosynthesis', due: '2026-01-24', priority: 'Medium' },
              { subject: 'English', title: 'Essay: Environmental Care', due: '2026-01-25', priority: 'Medium' }
            ].map((assignment, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{assignment.title}</h4>
                    <p className="text-xs text-slate-500">{assignment.subject}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                    assignment.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {assignment.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={12} />
                  <span>Due: {assignment.due}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link to="/dashboard/parent/homework" className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1.5">
              View All Assignments
              <ArrowRight size={12} />
            </Link>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>
      </div>

      {/* Connected Applications */}

    </div>
  );
};

export default HomeDashboard;
