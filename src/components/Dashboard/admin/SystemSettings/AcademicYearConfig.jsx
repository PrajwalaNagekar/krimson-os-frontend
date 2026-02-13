import React from "react";
import { Calendar, CheckCircle2, Edit3 } from "lucide-react";

/**
 * @component AcademicYearConfig
 * @description Component for configuring academic year settings.
 * @param {Object} academicYear - The academic year configuration data.
 */
const AcademicYearConfig = ({ academicYear }) => {
  if (!academicYear) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800">
                Academic Year Setup
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">
                Configure academic calendar and terms
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Current Academic Year
            </label>
            <p className="text-2xl font-bold text-slate-800">
              {academicYear.current}
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Upcoming Year
            </label>
            <p className="text-2xl font-bold text-slate-800">
              {academicYear.upcomingYear}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Session Start Date
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
              {new Date(academicYear.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Session End Date
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
              {new Date(academicYear.endDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Terms Breakdown */}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Term Configuration
          </label>
          <div className="grid grid-cols-1 gap-3">
            {academicYear.terms &&
              academicYear.terms.map((term, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100"
                >
                  <div>
                    <p className="font-bold text-slate-800">{term.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Date(term.start).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(term.end).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
              ))}
          </div>
        </div>

        <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
          <div className="flex items-center gap-2">
            <Edit3 size={18} />
            <span>Edit Academic Year Settings</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AcademicYearConfig;
