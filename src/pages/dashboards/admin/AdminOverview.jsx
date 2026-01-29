/**
 * @component AdminOverview
 * @description Admin Control Dashboard - Central operational hub for school system
 */
import React from 'react';
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  XCircle,
  UserPlus,
  FileText,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Calendar,
  Eye,
  Settings,
  MoreHorizontal,
  ArrowUpRight
} from 'lucide-react';
import clsx from 'clsx';

// ========================================
// MOCK DATA
// ========================================
const mockData = {
  summary: {
    totalStudents: 1247,
    totalStaff: 89,
    totalClasses: 42,
    totalCourses: 156
  },
  attendance: {
    students: { present: 1189, absent: 58, total: 1247, percentage: 95.3 },
    staff: { present: 84, absent: 5, total: 89, percentage: 94.4 }
  },
  admissions: { inquiry: 234, applied: 187, verified: 142, enrolled: 98 },
  finance: { todayCollection: 45680, totalDue: 234500 },
  alerts: [
    { id: 1, type: 'compliance', severity: 'high', message: 'Accreditation renewal due in 15 days', timestamp: '2 hours ago' },
    { id: 2, type: 'system', severity: 'medium', message: 'Server backup completed successfully', timestamp: '3 hours ago' },
    { id: 3, type: 'compliance', severity: 'high', message: '12 student medical records need update', timestamp: '5 hours ago' },
    { id: 4, type: 'system', severity: 'low', message: 'System maintenance scheduled for weekend', timestamp: '1 day ago' }
  ]
};

const AdminOverview = () => {
  // Calculate admission funnel percentages
  const totalInquiries = mockData.admissions.inquiry;
  const calculatePercentage = (value) => Math.round((value / totalInquiries) * 100);

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH SIDEBAR GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Gradient matching Sidebar (Cyan -> Blue -> Pink) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        
        {/* Decorative Glass/Blur Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  System Overview
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/5 px-2 py-1 rounded-md">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                   Live Updates
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Admin Dashboard
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Snapshot of school operations, attendance, admissions, and financial health.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-50 font-medium uppercase tracking-wide">Today's Date</p>
                <p className="text-lg font-bold text-white leading-none">
                  {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          STATS CARDS - PREMIUM & MODERN
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            label: "Total Students", 
            value: mockData.summary.totalStudents.toLocaleString(), 
            sub: "Active enrollment",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "group-hover:border-blue-200"
          },
          { 
            label: "Total Staff", 
            value: mockData.summary.totalStaff, 
            sub: "Teaching & support",
            icon: UserCheck,
            color: "text-purple-500",
            bg: "bg-purple-50",
            border: "group-hover:border-purple-200"
          },
          { 
            label: "Active Classes", 
            value: mockData.summary.totalClasses, 
            sub: "Current sections",
            icon: BookOpen,
            color: "text-cyan-500",
            bg: "bg-cyan-50",
            border: "group-hover:border-cyan-200"
          },
          { 
            label: "Courses", 
            value: mockData.summary.totalCourses, 
            sub: "Programs offered",
            icon: GraduationCap, 
            color: "text-pink-500",
            bg: "bg-pink-50",
            border: "group-hover:border-pink-200"
          }
        ].map((stat, idx) => (
          <div key={idx} className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${stat.border}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={24} strokeWidth={2.5} />
              </div>
              <div className="px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                <MoreHorizontal size={16} className="text-slate-400" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
              <p className="text-[10px] text-slate-400 mt-2">(get in app)</p>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================
          MAIN CONTENT GRID
          Left: Attendance & Admissions (2/3 width on large screens)
          Right: Finance & Quick Actions (1/3 width)
          ======================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN (2 spans) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* ATTENDANCE SECTION */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Today's Attendance</h2>
                <p className="text-sm text-slate-500">Live tracking of students and staff</p>
              </div>
              <button className="flex flex-col items-center gap-0.5 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors group">
                <div className="flex items-center gap-1">
                  View Report
                  <ArrowUpRight size={16} />
                </div>
                <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Attendance Card */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <Users size={20} />
                    </div>
                    <span className="font-bold text-slate-700">Students</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{mockData.attendance.students.percentage}%</span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full animate-pulse" 
                    style={{ width: `${mockData.attendance.students.percentage}%` }} 
                  />
                </div>

                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="font-semibold text-slate-600">{mockData.attendance.students.present} Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-slate-400">{mockData.attendance.students.absent} Absent</span>
                  </div>
                </div>
              </div>

              {/* Staff Attendance Card */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      <UserCheck size={20} />
                    </div>
                    <span className="font-bold text-slate-700">Staff</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">{mockData.attendance.staff.percentage}%</span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full animate-pulse" 
                    style={{ width: `${mockData.attendance.staff.percentage}%` }} 
                  />
                </div>

                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="font-semibold text-slate-600">{mockData.attendance.staff.present} Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-slate-400">{mockData.attendance.staff.absent} Absent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADMISSIONS FUNNEL */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h2 className="text-xl font-bold text-slate-800">Admissions Pipeline</h2>
                  <p className="text-sm text-slate-500">Funnel conversion overview</p>
               </div>
               <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-bold border border-green-100">
                  <TrendingUp size={16} />
                  {Math.round((mockData.admissions.enrolled / mockData.admissions.inquiry) * 100)}% Conv.
               </div>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Inquiry', value: mockData.admissions.inquiry, color: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', icon: '1' },
                { label: 'Applied', value: mockData.admissions.applied, color: 'bg-cyan-500', bg: 'bg-cyan-50', text: 'text-cyan-600', icon: '2' },
                { label: 'Verified', value: mockData.admissions.verified, color: 'bg-purple-500', bg: 'bg-purple-50', text: 'text-purple-600', icon: '3' },
                { label: 'Enrolled', value: mockData.admissions.enrolled, color: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-600', icon: <CheckCircle size={14} /> }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="font-bold text-slate-700 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${step.bg} ${step.text}`}>
                        {step.icon}
                      </div>
                      {step.label}
                    </span>
                    <span className={`font-bold ${step.text}`}>{step.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${step.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${calculatePercentage(step.value)}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (1 span) */}
        <div className="space-y-6">
          
          {/* FINANCE CARD */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">Finance</h2>
                <div className="p-2 bg-green-50 rounded-full text-green-600">
                   <DollarSign size={20} />
                </div>
             </div>

             <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-green-500/20">
                   <p className="text-emerald-100 text-sm font-medium mb-1">Today's Collection</p>
                   <h3 className="text-3xl font-bold tracking-tight">₹{mockData.finance.todayCollection.toLocaleString()}</h3>
                </div>
                
                <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors">
                   <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                   <p className="text-slate-500 text-sm font-medium mb-1 relative z-10">Total Due Amount</p>
                   <h3 className="text-2xl font-bold text-slate-800 relative z-10">₹{mockData.finance.totalDue.toLocaleString()}</h3>
                   <div className="mt-2 flex items-center gap-1 text-xs font-bold text-orange-500 relative z-10">
                      <AlertTriangle size={12} />
                      Requires Attention
                   </div>
                </div>
             </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
             <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
             <div className="space-y-3">
                {[
                   { label: 'Add Student', sub: 'New enrollment', icon: UserPlus, color: 'text-blue-600', bg: 'bg-blue-50', gradient: 'hover:from-blue-50 hover:to-blue-100' },
                   { label: 'New User', sub: 'Staff access', icon: Settings, color: 'text-purple-600', bg: 'bg-purple-50', gradient: 'hover:from-purple-50 hover:to-purple-100' },
                   { label: 'Reports', sub: 'View analytics', icon: FileText, color: 'text-pink-600', bg: 'bg-pink-50', gradient: 'hover:from-pink-50 hover:to-pink-100' }
                ].map((action, idx) => (
                   <button key={idx} className={`w-full flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-200 transition-all duration-200 group ${action.bg} ${action.gradient}`}>
                      <div className="flex items-center gap-4">
                         <div className={`p-3 rounded-xl bg-white shadow-sm ${action.color}`}>
                            <action.icon size={20} />
                         </div>
                         <div className="text-left">
                            <p className="font-bold text-slate-700">{action.label}</p>
                            <p className="text-xs text-slate-500">{action.sub}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">(get in app)</p>
                         </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                         <ArrowUpRight size={18} className="text-slate-400" />
                      </div>
                   </button>
                ))}
             </div>
          </div>

          {/* ALERTS */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Alerts</h2>
                <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                   {mockData.alerts.filter(a => a.severity === 'high').length} Critical
                </span>
             </div>
             
             <div className="space-y-4">
                {mockData.alerts.slice(0, 3).map((alert, idx) => (
                   <div key={idx} className="flex gap-3 items-start p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                      <div className={`
                         w-2 h-2 rounded-full mt-2 flex-shrink-0
                         ${alert.severity === 'high' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 
                           alert.severity === 'medium' ? 'bg-amber-400' : 'bg-blue-400'}
                      `} />
                      <div>
                         <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-snug">
                            {alert.message}
                         </p>
                         <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wide">
                            {alert.timestamp} • {alert.type}
                         </p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
      
     
    </div>
  );
};

export default AdminOverview;
