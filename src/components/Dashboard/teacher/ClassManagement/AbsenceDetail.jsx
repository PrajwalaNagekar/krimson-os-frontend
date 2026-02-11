import React from "react";
import { AlertCircle, Search, PlusCircle } from "lucide-react";

const AbsenceDetail = ({ substitutionData, setSubstitutionData }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-red-50 rounded-xl border border-red-100">
          <AlertCircle size={24} className="text-red-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">
            Requirement Details
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            Define Absence Scope
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Absent Teacher
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search faculty name..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
            />
            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Effective Date
          </label>
          <input
            type="date"
            value={substitutionData.date}
            onChange={(e) =>
              setSubstitutionData({ ...substitutionData, date: e.target.value })
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Affected Classes
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["8-A", "9-B", "10-C", "11-A"].map((cls) => (
              <button
                key={cls}
                className="py-2 px-3 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-between"
              >
                {cls}
                <PlusCircle size={12} className="text-slate-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsenceDetail;
