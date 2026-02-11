import React from "react";
import { AlertCircle } from "lucide-react";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const ValidationBar = () => {
  const { validation } = EDUCATIONAL_TRIPS_DATA;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 flex items-center gap-6 animate-in slide-in-from-right-8 duration-500">
        <div className="flex items-center gap-3">
          <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${validation.progress}%` }}
            ></div>
          </div>
          <span className="text-xs font-bold text-slate-600">
            {validation.progress}% Complete
          </span>
        </div>
        <div className="h-8 w-px bg-slate-200"></div>
        {validation.warnings.map((warning) => (
          <div key={warning} className="flex items-center gap-2 text-amber-600">
            <AlertCircle size={14} />
            <span className="text-[11px] font-bold tracking-tight">
              {warning}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidationBar;
