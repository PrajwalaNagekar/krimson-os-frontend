import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  AlertCircle,
  ChevronRight,
  Activity,
  Download
} from 'lucide-react';

// Enhanced StatCard Component with Premium Design
const StatCard = ({ title, value, subtext, icon: Icon, gradient, trend }) => (
  <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    {/* Gradient Background on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">{title}</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">{value}</h3>
        </div>
        <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      {subtext && (
        <div className="flex items-center gap-2 mt-3">
          {trend && (
            <span className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className={`w-3 h-3 ${trend === 'down' ? 'rotate-180' : ''}`} />
            </span>
          )}
          <p className="text-xs md:text-sm text-slate-600">{subtext}</p>
        </div>
      )}
      <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
    </div>
  </div>
);

// Academic Progress Card Component
const AcademicProgressCard = ({ grade, percentage, students, status }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
    <div className="flex items-center gap-4 flex-1">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold shadow-md">
        {grade}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-slate-800">Grade {grade}</span>
          <span className="text-sm font-bold text-slate-700">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              percentage >= 85 ? 'bg-gradient-to-r from-green-400 to-green-500' :
              percentage >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
              'bg-gradient-to-r from-orange-400 to-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-slate-500 mt-1">{students} students</p>
      </div>
    </div>
    <span className={`ml-3 px-3 py-1 rounded-full text-xs font-bold ${
      status === 'excellent' ? 'bg-green-100 text-green-700' :
      status === 'good' ? 'bg-blue-100 text-blue-700' :
      'bg-orange-100 text-orange-700'
    }`}>
      {status}
    </span>
  </div>
);

// Overdue Fee Entry Component
const OverdueFeeEntry = ({ studentName, grade, amount, days }) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 last:border-0">
    <div className="flex-1">
      <p className="font-semibold text-slate-800 text-sm">{studentName}</p>
      <p className="text-xs text-slate-500">Grade {grade} • {days} days overdue</p>
    </div>
    <div className="text-right">
      <p className="font-bold text-red-600">${amount}</p>
    </div>
  </div>
);

const PrincipalDashboard = () => {
  // Static data - to be replaced with API calls in future
  const academicProgress = [
    { grade: '12', percentage: 88, students: 145, status: 'excellent' },
    { grade: '11', percentage: 85, students: 152, status: 'excellent' },
    { grade: '10', percentage: 78, students: 158, status: 'good' },
    { grade: '9', percentage: 82, students: 147, status: 'good' },
    { grade: '8', percentage: 68, students: 156, status: 'needs improvement' },
    { grade: '7', percentage: 75, students: 149, status: 'good' },
  ];

  const overdueStudents = [
    { studentName: 'Alex Johnson', grade: '10-B', amount: '2,400', days: 45 },
    { studentName: 'Maria Garcia', grade: '12-A', amount: '1,850', days: 30 },
    { studentName: 'David Chen', grade: '9-C', amount: '1,200', days: 22 },
    { studentName: 'Sarah Williams', grade: '11-B', amount: '980', days: 15 },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header Section */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
                Principal Dashboard
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                360° Executive Overview • Real-time School Operations
              </p>
            </div>
            <div className="flex gap-3">
              <button className="group flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics - Real-time Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Total Students" 
          value="1,248" 
          subtext="+12 this month" 
          icon={Users} 
          gradient="from-blue-500 to-blue-600"
          trend="up"
        />
        <StatCard 
          title="Total Teachers" 
          value="142" 
          subtext="96% present today" 
          icon={GraduationCap} 
          gradient="from-green-500 to-emerald-600"
          trend="up"
        />
        <StatCard 
          title="Total Classes" 
          value="48" 
          subtext="All sessions active" 
          icon={BookOpen} 
          gradient="from-purple-500 to-purple-600"
        />
        <StatCard 
          title="Today's Attendance" 
          value="92.4%" 
          subtext="1,154 / 1,248 present" 
          icon={CheckCircle} 
          gradient="from-cyan-500 to-blue-500"
          trend="up"
        />
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Academic Progress Index - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  Academic Progress Index by Grade
                </h3>
                <p className="text-sm text-slate-500 mt-1">Current term performance overview</p>
              </div>
              <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-xs transition-all hover:scale-105 shadow-md">
                View Details
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                <span className="text-[8px] opacity-80">(get in app)</span>
              </button>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-3 max-h-[500px] overflow-y-auto">
            {academicProgress.map((grade, index) => (
              <AcademicProgressCard key={index} {...grade} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Quick Alerts */}
        <div className="space-y-6">
          {/* Quick Alerts */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Quick Alerts
              </h3>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-red-700 text-sm block mb-1">Attendance Alert</span>
                    <p className="text-slate-700 text-xs leading-relaxed">3 classes currently unmarked for today.</p>
                    <button className="mt-2 text-xs font-bold text-red-700 hover:underline flex items-center gap-1">
                      Mark Now <span className="text-[8px] opacity-70">(get in app)</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-orange-700 text-sm block mb-1">Finance Alert</span>
                    <p className="text-slate-700 text-xs leading-relaxed">2 significant fee anomalies detected in Grade 10.</p>
                    <button className="mt-2 text-xs font-bold text-orange-700 hover:underline flex items-center gap-1">
                      Investigate <span className="text-[8px] opacity-70">(get in app)</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Activity className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-blue-700 text-sm block mb-1">System Update</span>
                    <p className="text-slate-700 text-xs leading-relaxed">Report generation scheduled for 4 PM today.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Snapshot */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Today's Presence
            </h4>
            <div className="relative">
              <div className="flex items-center justify-center mb-3">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle cx="64" cy="64" r="56" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                    <circle 
                      cx="64" 
                      cy="64" 
                      r="56" 
                      stroke="url(#gradient)" 
                      strokeWidth="12" 
                      fill="none"
                      strokeDasharray="351.68"
                      strokeDashoffset="26.38"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-800">92.4%</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-slate-600">
                <p className="font-semibold">1,154 out of 1,248 students</p>
                <p className="text-slate-500 mt-1">94 absent • Trending upward</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Collection & Overdue Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fee Collection Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              Fee Collection
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Collection Rate</span>
                <span className="text-2xl font-bold text-green-600">85%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-xs text-green-700 font-semibold mb-1">Collected</p>
                <p className="text-lg font-bold text-green-800">$425K</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <p className="text-xs text-red-700 font-semibold mb-1">Overdue</p>
                <p className="text-lg font-bold text-red-800">$75K</p>
              </div>
            </div>

            <button className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md">
              View Finance Dashboard
              <span className="text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>

        {/* Overdue Fee List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Top Overdue Payments
                </h3>
                <p className="text-sm text-slate-600 mt-1">Students with pending fee payments</p>
              </div>
              <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs transition-all shadow-sm border border-slate-200 flex items-center gap-1">
                View All
                <span className="text-[8px] opacity-70">(get in app)</span>
              </button>
            </div>
          </div>
          
          <div className="p-5">
            {overdueStudents.map((student, index) => (
              <OverdueFeeEntry key={index} {...student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
