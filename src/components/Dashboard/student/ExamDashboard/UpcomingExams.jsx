import React from "react";
import { Download, Clock, FileText } from "lucide-react";

const UpcomingExams = ({ exams }) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">Upcoming Exams</h3>

      {exams.map((exam) => (
        <div
          key={exam.id}
          className="group relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>

          {/* Decorative Blobs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6 flex-1">
              {/* Date Badge - Premium Gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 text-cyan-700 px-5 py-4 rounded-2xl text-center min-w-[80px] shadow-lg border-2 border-white">
                  <span className="block text-xs font-bold uppercase tracking-wider">
                    {new Date(exam.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                  <span className="block text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {new Date(exam.date).getDate()}
                  </span>
                </div>
              </div>

              {/* Exam Details */}
              <div className="flex-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                  {exam.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl text-slate-600 text-xs font-bold shadow-sm">
                    <Clock size={14} className="text-blue-500" /> {exam.time}
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl text-xs font-bold shadow-sm">
                    <FileText size={14} /> {exam.syllabus}
                  </span>
                </div>
              </div>
            </div>

            {/* Download Buttons - Enhanced */}
            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 group/btn">
                <Download
                  size={16}
                  className="group-hover/btn:animate-bounce"
                />
                Download Hall Ticket
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 group/btn shadow-lg">
                <Download
                  size={16}
                  className="group-hover/btn:animate-bounce"
                />
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingExams;
