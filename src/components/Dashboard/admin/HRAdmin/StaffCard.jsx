import React from "react";
import {
  Briefcase,
  Activity,
  Award,
  Mail,
  Phone,
  Clock,
  Eye,
  FileText,
  CheckCircle,
  Coffee,
  UserX,
  AlertCircle,
} from "lucide-react";

const StaffCard = ({ member }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "On Leave":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Contract Ended":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle size={14} />;
      case "On Leave":
        return <Coffee size={14} />;
      case "Contract Ended":
        return <UserX size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

  const getTodayStatusColor = (status) => {
    switch (status) {
      case "Present":
        return "text-green-600 bg-green-50";
      case "On Leave":
        return "text-amber-600 bg-amber-50";
      case "Inactive":
        return "text-slate-400 bg-slate-50";
      default:
        return "text-slate-600 bg-slate-50";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 opacity-60" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {member.name.charAt(0)}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border ${getStatusColor(member.status)}`}
            >
              {getStatusIcon(member.status)}
              {member.status}
            </span>
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${getTodayStatusColor(member.todayStatus)}`}
            >
              {member.todayStatus}
            </span>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <Briefcase size={12} />
            {member.role}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span className="font-bold">ID:</span> {member.id}
          </div>
        </div>

        {/* Department & Subjects */}
        <div className="mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Department</span>
            <span className="text-xs font-bold text-slate-700">
              {member.department}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {member.subjects.map((subject, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold border border-blue-100"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Attendance & Performance */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-green-50 p-3 rounded-xl border border-green-100">
            <div className="flex items-center gap-1.5 mb-1">
              <Activity size={12} className="text-green-600" />
              <span className="text-xs font-bold text-green-600">
                Attendance
              </span>
            </div>
            <p className="text-lg font-bold text-green-700">
              {member.attendance}
            </p>
          </div>
          <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
            <div className="flex items-center gap-1.5 mb-1">
              <Award size={12} className="text-purple-600" />
              <span className="text-xs font-bold text-purple-600">Rating</span>
            </div>
            <p className="text-lg font-bold text-purple-700">
              {member.performanceRating}/5
            </p>
          </div>
        </div>

        {/* Contact & Details */}
        <div className="space-y-2 mb-4 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <Mail size={12} className="text-slate-400" />
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Phone size={12} className="text-slate-400" />
            <span>{member.phone}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-slate-400" />
              <span>Check-in: {member.lastCheckIn}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-xs hover:bg-blue-100 transition-all flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1">
              <Eye size={14} />
              View Profile
            </div>
          </button>
          <button className="flex-1 py-2 bg-slate-50 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-100 transition-all flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1">
              <FileText size={14} />
              HR Report
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
