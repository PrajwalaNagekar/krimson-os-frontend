import React from "react";
import { Calendar, FileCheck, BarChart2, Shield } from "lucide-react";

const ExamStats = ({ pendingTimetablesCount, auditTrailCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Timetables Pending
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
              {pendingTimetablesCount}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Awaiting approval</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Papers Vetted
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              85%
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
            <FileCheck className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-green-600 font-bold">Ready for printing</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Results Ready
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              3/12
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Pending publication</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Audit Entries
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {auditTrailCount}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Significant actions logged</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

export default ExamStats;
