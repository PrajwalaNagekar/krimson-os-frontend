import React from "react";
import { ClipboardCheck, CheckCircle } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const AttendanceToMarkWidget = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg md:text-xl">
          <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
            <ClipboardCheck className="text-white" size={20} />
          </div>
          Attendance to Mark
        </h3>
        <span className="text-xs px-3 py-1 bg-purple-50 text-purple-600 rounded-full font-bold">
          1 Pending
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dashboard.classesToday.slice(0, 1).map((cls) => (
          <div
            key={cls.id}
            className="p-4 border-2 border-purple-100 rounded-2xl hover:border-purple-300 transition-all bg-gradient-to-br from-purple-50/50 to-pink-50/50"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-lg">
                {cls.time}
              </span>
              <span className="text-xs text-slate-500">{cls.room}</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{cls.subject}</h4>
            <p className="text-xs text-slate-600 mb-3">{cls.grade}</p>
            <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 shadow-md transition-all">
              Mark Attendance
            </button>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2 flex items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">
          <div className="text-center">
            <CheckCircle className="mx-auto text-green-500 mb-2" size={32} />
            <p className="text-sm font-bold text-slate-700">
              Other Classes Marked
            </p>
            <p className="text-xs text-slate-500 mt-1">
              2 of 3 classes completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceToMarkWidget;
