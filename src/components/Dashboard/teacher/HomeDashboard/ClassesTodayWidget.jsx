import React from "react";
import { Calendar, Users } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const ClassesTodayWidget = () => {
  const { dashboard } = TEACHER_DATA;

  return (
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
  );
};

export default ClassesTodayWidget;
