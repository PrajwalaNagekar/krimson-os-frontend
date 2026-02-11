import React from "react";
import {
  TrendingUp,
  UserCheck,
  Upload,
  Send,
  BookOpen,
  Calendar,
} from "lucide-react";

const QuickActionsBar = () => {
  return (
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
        </button>

        <button className="p-4 bg-white border-2 border-blue-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-blue-300 hover:-translate-y-1">
          <div className="p-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Upload size={20} className="text-white" />
          </div>
          <span className="text-slate-700">Upload Lesson</span>
        </button>

        <button className="p-4 bg-white border-2 border-purple-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-purple-300 hover:-translate-y-1">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Send size={20} className="text-white" />
          </div>
          <span className="text-slate-700">Send Announcement</span>
        </button>

        <button className="p-4 bg-white border-2 border-pink-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-pink-300 hover:-translate-y-1">
          <div className="p-3 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <BookOpen size={20} className="text-white" />
          </div>
          <span className="text-slate-700">Grade Assignments</span>
        </button>

        <button className="p-4 bg-white border-2 border-orange-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-orange-300 hover:-translate-y-1">
          <div className="p-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Calendar size={20} className="text-white" />
          </div>
          <span className="text-slate-700">View Schedule</span>
        </button>

        <button className="p-4 bg-white border-2 border-green-100 rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group hover:border-green-300 hover:-translate-y-1">
          <div className="p-3 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <TrendingUp size={20} className="text-white" />
          </div>
          <span className="text-slate-700">View Analytics</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActionsBar;
