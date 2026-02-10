import React from "react";
import { AlertTriangle, Phone, FileText } from "lucide-react";

const ChronicAbsentees = ({ chronicAbsentees }) => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 border border-red-200 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-900">
            Chronic Absentees Alert
          </h3>
          <p className="text-sm text-red-700">
            Students absent for &gt;3 consecutive days
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {chronicAbsentees.map((student, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl border border-red-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-bold text-slate-800">{student.name}</p>
                <p className="text-xs text-slate-500">
                  {student.id} • {student.class}
                </p>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold border border-red-200">
                {student.consecutiveDays} Days
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="bg-slate-50 p-2 rounded-lg">
                <p className="text-slate-500 font-medium">Total Absent Days</p>
                <p className="font-bold text-slate-700">
                  {student.totalDays} days
                </p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg">
                <p className="text-slate-500 font-medium">Reason</p>
                <p className="font-bold text-slate-700">{student.reason}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Phone size={12} />
                  Call Parent
                </div>
                <span className="text-[9px] text-slate-400 font-normal">
                  ()
                </span>
              </button>
              <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <FileText size={12} />
                  Auto-Report
                </div>
                <span className="text-[9px] text-slate-400 font-normal">
                  ()
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChronicAbsentees;
