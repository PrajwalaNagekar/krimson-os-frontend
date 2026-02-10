import React from "react";
import { ClipboardCheck } from "lucide-react";

const TimetableCrossReference = ({ timetableImpact }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ClipboardCheck size={20} className="text-amber-500" />
              Timetable Cross-Reference
            </h3>
            <p className="text-sm text-slate-500">Subject coverage status</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
            All Covered
          </span>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {timetableImpact.map((impact, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl border border-amber-100 bg-amber-50/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-bold text-slate-800">
                  {impact.class} • {impact.period}
                </p>
                <p className="text-sm text-slate-600">{impact.subject}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-lg text-xs font-bold border ${
                  impact.status === "Covered"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-red-100 text-red-700 border-red-200"
                }`}
              >
                {impact.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2 rounded-lg">
                <p className="text-slate-500 font-medium">Absent Teacher</p>
                <p className="font-bold text-slate-700">{impact.teacher}</p>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <p className="text-slate-500 font-medium">Substitute</p>
                <p className="font-bold text-green-600">{impact.substitute}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetableCrossReference;
