import React from "react";
import { Edit } from "lucide-react";

const StudentAttendanceHeatmap = ({
  byClass,
  getRateColor,
  getStatusBadge,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-6 py-4 border-b border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">
          Daily Attendance Heatmap
        </h3>
        <p className="text-sm text-slate-500">
          Class-wise attendance breakdown
        </p>
      </div>

      <div className="p-6 space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar-hidden">
        {byClass.map((cls, idx) => {
          const colors = getRateColor(cls.rate);
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all group`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg font-bold text-slate-700">
                    {cls.section}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{cls.grade}</p>
                    <p className="text-xs text-slate-500">
                      {cls.total} students total
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusBadge(cls.status)}`}
                >
                  {cls.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-white p-2 rounded-lg border border-green-100 text-center">
                  <p className="text-lg font-bold text-green-600">
                    {cls.present}
                  </p>
                  <p className="text-[10px] font-semibold text-green-600 uppercase">
                    Present
                  </p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-red-100 text-center">
                  <p className="text-lg font-bold text-red-600">{cls.absent}</p>
                  <p className="text-[10px] font-semibold text-red-600 uppercase">
                    Absent
                  </p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-amber-100 text-center">
                  <p className="text-lg font-bold text-amber-600">{cls.late}</p>
                  <p className="text-[10px] font-semibold text-amber-600 uppercase">
                    Late
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500`}
                  style={{ width: `${cls.rate}%` }}
                >
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-600">
                  {cls.rate}% Attendance
                </p>
                <button className="px-3 py-1 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-200 transition-all opacity-0 group-hover:opacity-100 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Edit size={12} />
                    Edit
                  </div>
                  <span className="text-[9px] text-slate-400 font-normal">
                    ()
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentAttendanceHeatmap;
