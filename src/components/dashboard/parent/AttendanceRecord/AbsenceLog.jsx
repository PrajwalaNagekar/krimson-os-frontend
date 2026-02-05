import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const AbsenceLog = ({ absenceReasons }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
      <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3 tracking-tight">
        <FileText className="text-orange-500" size={24} />
        Absence Reason Log
      </h2>

      <div className="space-y-4">
        {absenceReasons.length > 0 ? (
          absenceReasons.map((absence, index) => (
            <div
              key={index}
              className="p-5 bg-slate-50 border-l-[6px] border-orange-400 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <span className="text-base font-black text-slate-700 group-hover:text-orange-600 transition-colors">
                  {new Date(absence.date).toLocaleDateString("en-SG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg font-bold w-fit">
                  by {absence.submittedBy}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 leading-relaxed font-serif italic">
                "{absence.reason}"
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-100 border-dashed">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 shadow-lg shadow-emerald-200">
              <CheckCircle size={32} />
            </div>
            <p className="text-slate-800 font-bold mb-1">Perfect attendance!</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              No absences recorded to date
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbsenceLog;
