import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  Briefcase, 
  Mail,
  Download,
  TrendingUp,
  Check,
  X,
  Eye,
  UserCheck,
  AlertCircle,
  BarChart2,
  Calendar
} from 'lucide-react';

// Department Card Component
const DepartmentCard = ({ department, head, teacherCount, studentsHandled, avgWorkload, attendance }) => (
  <div className="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg text-slate-800 mb-1">{department}</h3>
        <p className="text-xs text-slate-500">Head: {head}</p>
      </div>
      <div className={`p-2 rounded-lg ${
        avgWorkload === 'High' ? 'bg-red-100' :
        avgWorkload === 'Medium' ? 'bg-orange-100' :
        'bg-green-100'
      }`}>
        <Users className={`w-5 h-5 ${
          avgWorkload === 'High' ? 'text-red-600' :
          avgWorkload === 'Medium' ? 'text-orange-600' :
          'text-green-600'
        }`} />
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div>
        <p className="text-xs text-slate-500">Teachers</p>
        <p className="text-xl font-bold text-slate-800">{teacherCount}</p>
      </div>
      <div>
        <p className="text-xs text-slate-500">Students</p>
        <p className="text-xl font-bold text-slate-800">{studentsHandled}</p>
      </div>
    </div>
    
    <div className="mb-3">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-slate-500">Avg Workload</span>
        <span className="font-bold text-slate-700">{avgWorkload}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${
            avgWorkload === 'High' ? 'bg-red-500' :
            avgWorkload === 'Medium' ? 'bg-orange-500' :
            'bg-green-500'
          }`}
          style={{ width: avgWorkload === 'High' ? '85%' : avgWorkload === 'Medium' ? '60%' : '40%' }}
        ></div>
      </div>
    </div>
    
    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
      <span className="text-xs text-slate-500">Attendance</span>
      <span className="text-sm font-bold text-green-600">{attendance}%</span>
    </div>
  </div>
);

// Substitution Request Card
const SubstitutionRequestCard = ({ teacherName, subject, date, reason, duration, priority }) => (
  <div className={`p-4 border-l-4 rounded-xl ${
    priority === 'Urgent' ? 'border-red-500 bg-red-50' : 'border-orange-500 bg-orange-50'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{teacherName}</h4>
        <p className="text-xs text-slate-600">{subject} • {date}</p>
      </div>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
        priority === 'Urgent' ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'
      }`}>
        {priority}
      </span>
    </div>
    <p className="text-sm text-slate-700 mb-2">
      <span className="font-semibold">Reason:</span> {reason}
    </p>
    <p className="text-xs text-slate-500 mb-3">{duration}</p>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-100 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <X className="w-3 h-3" />
        Reject
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Check className="w-3 h-3" />
        Approve
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    </div>
  </div>
);

// Staff Attendance Entry
const StaffAttendanceEntry = ({ date, present, late, absent, punctuality }) => (
  <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold text-slate-700">{date}</span>
      <span className={`text-xs font-bold ${
        punctuality >= 95 ? 'text-green-600' : punctuality >= 90 ? 'text-blue-600' : 'text-orange-600'
      }`}>
        {punctuality}%
      </span>
    </div>
    <div className="flex gap-2 text-xs">
      <div className="flex-1 text-center">
        <p className="text-slate-500">Present</p>
        <p className="font-bold text-green-600">{present}</p>
      </div>
      <div className="flex-1 text-center">
        <p className="text-slate-500">Late</p>
        <p className="font-bold text-orange-600">{late}</p>
      </div>
      <div className="flex-1 text-center">
        <p className="text-slate-500">Absent</p>
        <p className="font-bold text-red-600">{absent}</p>
      </div>
    </div>
  </div>
);

const StaffManagement = () => {
  const [activeTab, setActiveTab] = useState('directory');

  // Static data - to be replaced with API calls
  const departments = [
    { department: 'Mathematics', head: 'Dr. Anderson', teacherCount: 12, studentsHandled: 450, avgWorkload: 'Medium', attendance: 96 },
    { department: 'Science', head: 'Dr. Wilson', teacherCount: 15, studentsHandled: 520, avgWorkload: 'High', attendance: 94 },
    { department: 'English', head: 'Prof. Roberts', teacherCount: 10, studentsHandled: 400, avgWorkload: 'Medium', attendance: 98 },
    { department: 'Social Studies', head: 'Mr. Taylor', teacherCount: 8, studentsHandled: 350, avgWorkload: 'Low', attendance: 97 },
    { department: 'Languages', head: 'Ms. Chen', teacherCount: 9, studentsHandled: 380, avgWorkload: 'Low', attendance: 95 },
    { department: 'Physical Education', head: 'Mr. Gym', teacherCount: 6, studentsHandled: 600, avgWorkload: 'Medium', attendance: 99 },
  ];

  const substitutionRequests = [
    { teacherName: 'Mrs. Green', subject: 'Physics', date: 'Jan 21, 2026', reason: 'Medical appointment', duration: '1 day', priority: 'Urgent' },
    { teacherName: 'Mr. Brown', subject: 'Mathematics', date: 'Jan 22, 2026', reason: 'Personal emergency', duration: '2 days', priority: 'Urgent' },
    { teacherName: 'Dr. Smith', subject: 'Chemistry', date: 'Jan 25, 2026', reason: 'Conference attendance', duration: '3 days', priority: 'Normal' },
  ];

  const weeklyAttendance = [
    { date: 'Mon, Jan 20', present: 138, late: 3, absent: 1, punctuality: 97 },
    { date: 'Tue, Jan 21', present: 140, late: 2, absent: 0, punctuality: 99 },
    { date: 'Wed, Jan 22', present: 136, late: 4, absent: 2, punctuality: 96 },
    { date: 'Thu, Jan 23', present: 139, late: 2, absent: 1, punctuality: 98 },
    { date: 'Fri, Jan 24', present: 141, late: 1, absent: 0, punctuality: 99 },
  ];

  const totalStaff = 142;
  const onLeave = 8;
  const substitutionsActive = 5;
  const lateArrivals = 3;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Staff & Department Management
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Staff allocation oversight • Departmental efficiency
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Send Circular</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Total Staff</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{totalStaff}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Active members</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">On Leave</p>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{onLeave}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Today's absences</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Substitutions</p>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{substitutionsActive}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Active today</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Late Arrivals</p>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">{lateArrivals}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">This week</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Department Directory */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-500" />
                Department Directory & KPIs
              </h3>
              <p className="text-sm text-slate-500 mt-1">Overview of all departments with key performance indicators</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-colors">
              View Full Report
              <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
            </button>
          </div>
        </div>
        
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, idx) => (
              <DepartmentCard key={idx} {...dept} />
            ))}
          </div>
        </div>
      </div>

      {/* Substitution Requests & Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Substitution Approvals */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Pending Approvals
                </h3>
                <p className="text-sm text-slate-600 mt-1">Substitution and duty requests</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                {substitutionRequests.length} Pending
              </span>
            </div>
          </div>
          
          <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
            {substitutionRequests.map((request, idx) => (
              <SubstitutionRequestCard key={idx} {...request} />
            ))}
          </div>
        </div>

        {/* Staff Attendance & Punctuality */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-green-500" />
              Weekly Attendance & Punctuality
            </h3>
            <p className="text-sm text-slate-600 mt-1">Staff attendance tracking</p>
          </div>
          
          <div className="p-5 space-y-3">
            {weeklyAttendance.map((day, idx) => (
              <StaffAttendanceEntry key={idx} {...day} />
            ))}
            
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs text-blue-800 mb-2 font-semibold">📊 Weekly Summary:</p>
              <p className="text-xs text-blue-700 leading-relaxed">
                Average punctuality: 98% • Total late arrivals: {lateArrivals} • Perfect attendance: 92% of staff
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default StaffManagement;
