import React from "react";
import {
  Filter,
  Search,
  ClipboardList,
  Calendar,
  Clock,
  ChevronLeft,
  CheckCircle2,
  X,
} from "lucide-react";

const CCAAttendanceTab = ({
  sessions,
  attendanceLog,
  handleAttendanceToggle,
  markAllAttendance,
  selectedAttendanceSession,
  setSelectedAttendanceSession,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm min-h-[600px]">
      {!selectedAttendanceSession ? (
        // STEP 1: SELECT SESSION
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Attendance Log
              </h3>
              <p className="text-slate-400 font-medium text-sm">
                Select a session to mark attendance
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                <Filter size={20} />
              </button>
              <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                onClick={() => setSelectedAttendanceSession(session)}
                className="group relative bg-white rounded-[2rem] border border-slate-200 p-6 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-indigo-100 transition-colors"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                      <ClipboardList size={24} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        session.status === "Completed"
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                          : "bg-amber-50 text-amber-600 border-amber-100"
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                    {session.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    {session.club}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {session.formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {session.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // STEP 2: MARK ATTENDANCE
        <div className="animate-in slide-in-from-right-8 duration-300">
          <button
            onClick={() => setSelectedAttendanceSession(null)}
            className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-indigo-600 transition-colors group"
          >
            <div className="p-1 rounded-full bg-slate-50 group-hover:bg-indigo-50 border border-slate-200 group-hover:border-indigo-200">
              <ChevronLeft size={16} />
            </div>
            Back to Sessions
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                {selectedAttendanceSession.title}
                <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider border border-indigo-100">
                  {selectedAttendanceSession.formattedDate}
                </span>
              </h3>
              <p className="text-slate-400 font-medium text-sm mt-1">
                Mark attendance for {selectedAttendanceSession.club} members
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => markAllAttendance("Present")}
                className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors"
              >
                Mark All Present
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg">
                Save Record
              </button>
            </div>
          </div>

          {/* Summary Bar */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {["Present", "Absent", "Late"].map((status) => {
              const count = Object.values(attendanceLog).filter(
                (s) => s === status,
              ).length;
              const color =
                status === "Present"
                  ? "emerald"
                  : status === "Absent"
                    ? "rose"
                    : "amber";
              return (
                <div
                  key={status}
                  className={`min-w-[150px] flex-1 p-4 bg-${color}-50 rounded-2xl border border-${color}-100 flex items-center justify-between`}
                >
                  <span
                    className={`text-xs font-bold text-${color}-600 uppercase tracking-wider`}
                  >
                    {status}
                  </span>
                  <span className={`text-2xl font-bold text-${color}-700`}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(attendanceLog).map(([student, status], i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${status === "Present" ? "bg-emerald-50/50 border-emerald-100" : status === "Absent" ? "bg-rose-50/50 border-rose-100" : "bg-amber-50/50 border-amber-100"}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-600 shadow-sm">
                    {student[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 text-sm">
                      {student}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400">
                      ID: 9928{i}
                    </p>
                  </div>
                </div>
                <div className="flex bg-white rounded-xl p-1 border border-slate-200 shadow-sm gap-1">
                  <button
                    onClick={() => handleAttendanceToggle(student, "Present")}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === "Present" ? "bg-emerald-500 text-white shadow-sm" : "text-slate-300 hover:bg-emerald-50 hover:text-emerald-500"}`}
                  >
                    <CheckCircle2 size={18} />
                  </button>
                  <button
                    onClick={() => handleAttendanceToggle(student, "Absent")}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === "Absent" ? "bg-rose-500 text-white shadow-sm" : "text-slate-300 hover:bg-rose-50 hover:text-rose-500"}`}
                  >
                    <X size={18} />
                  </button>
                  <button
                    onClick={() => handleAttendanceToggle(student, "Late")}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === "Late" ? "bg-amber-500 text-white shadow-sm" : "text-slate-300 hover:bg-amber-50 hover:text-amber-500"}`}
                  >
                    <Clock size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CCAAttendanceTab;
