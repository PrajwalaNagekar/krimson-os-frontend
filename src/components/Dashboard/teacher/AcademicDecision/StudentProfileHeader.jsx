import React from "react";
import { User, Search } from "lucide-react";

const StudentProfileHeader = ({ student }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
            <User size={32} className="text-slate-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              {student.name}
            </h2>
            <div className="flex items-center gap-4 mt-1 text-slate-500 font-bold text-xs uppercase tracking-widest">
              <span>{student.class}</span>
              <span className="opacity-20">|</span>
              <span>Roll No. {student.rollNo}</span>
              <span className="opacity-20">|</span>
              <span>{student.stream}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
            Current Attendance
          </p>
          <div className="text-3xl font-bold text-emerald-500 tracking-tighter">
            {student.attendance}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
        <Search className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
        <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">
          Switch Student
        </h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search SID or Name..."
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all placeholder:text-white/40"
          />
          <Search
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileHeader;
