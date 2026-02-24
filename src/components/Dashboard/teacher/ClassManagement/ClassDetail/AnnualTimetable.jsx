import React from "react";
import {
  Calendar,
  LayoutList,
  Briefcase,
  MapIcon,
  CalendarX,
  Lock,
  CopyCheck,
} from "lucide-react";

/**
 * Annual Plan / Timetable showing A-E sections as requested
 */
const AnnualTimetable = ({ classInfo }) => {
  return (
    <div className="space-y-6">
      {/* ── A. Academic Year Structure ── */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
            <Calendar size={18} className="text-blue-500" />
          </div>
          <div>
            <h2 className="text-[14px] font-black uppercase tracking-widest text-slate-800">
              A. Academic Year Structure
            </h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Based on Academic Year Configuration
            </p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Academic Year</th>
                <th className="py-3 px-4">Start Date</th>
                <th className="py-3 px-4">End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 last:border-0 text-[13px] font-semibold text-slate-700">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  2026–2027
                </td>
                <td className="py-3 px-4">1 June 2026</td>
                <td className="py-3 px-4">31 March 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── B. Term Distribution ── */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-50 rounded-xl border border-cyan-100">
              <LayoutList size={18} className="text-cyan-500" />
            </div>
            <div>
              <h2 className="text-[14px] font-black uppercase tracking-widest text-slate-800">
                B. Term Distribution
              </h2>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 rounded-lg text-[10px] font-black uppercase tracking-wider">
              <Lock size={12} /> Assesment Windows Locked
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 rounded-lg text-[10px] font-black uppercase tracking-wider">
              <Lock size={12} /> Grade Freeze Periods Locked
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Term</th>
                <th className="py-3 px-4">Total Weeks</th>
                <th className="py-3 px-4">Teaching Weeks</th>
                <th className="py-3 px-4">Revision</th>
                <th className="py-3 px-4">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-slate-100 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">Term 1</td>
                <td className="py-3 px-4">16</td>
                <td className="py-3 px-4 text-cyan-600">13</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">1</td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-slate-100 last:border-0 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">Term 2</td>
                <td className="py-3 px-4">14</td>
                <td className="py-3 px-4 text-cyan-600">11</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── C. Teacher Annual Load View ── */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-pink-50 rounded-xl border border-pink-100">
            <Briefcase size={18} className="text-pink-500" />
          </div>
          <div>
            <h2 className="text-[14px] font-black uppercase tracking-widest text-slate-800">
              C. Teacher Annual Load View
            </h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {classInfo.grade} {classInfo.subject} Aligned with Load & Protocol
              Rules
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Sections Assigned", val: "3" },
            { label: "Periods per Week", val: "18" },
            { label: "Inst. Weeks", val: "24", highlight: true },
            { label: "Est. Total Periods", val: "432", highlight: true },
            { label: "Lab / Double", val: "24" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border ${stat.highlight ? "bg-gradient-to-br from-pink-50 to-pink-100/50 border-pink-200" : "bg-slate-50 border-slate-200"} flex flex-col items-center justify-center text-center space-y-1`}
            >
              <span
                className={`text-2xl font-black ${stat.highlight ? "text-pink-600" : "text-slate-700"}`}
              >
                {stat.val}
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── D. Annual Curriculum Coverage Map ── */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <MapIcon size={18} className="text-emerald-500" />
            </div>
            <div>
              <h2 className="text-[14px] font-black uppercase tracking-widest text-slate-800">
                D. Curriculum Coverage Map
              </h2>
            </div>
          </div>
          <div className="flex gap-2 text-[10px] font-black tracking-widest uppercase">
            <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg">
              <CopyCheck size={12} /> Pacing Adjusted
            </span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Unit / Module</th>
                <th className="py-3 px-4">Planned Start</th>
                <th className="py-3 px-4">Planned End</th>
                <th className="py-3 px-4">Total Periods</th>
                <th className="py-3 px-4">Lab Sessions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  unit: "Matter & Materials",
                  start: "Week 1",
                  end: "Week 4",
                  periods: 12,
                  labs: 2,
                },
                {
                  unit: "Motion & Force",
                  start: "Week 5",
                  end: "Week 9",
                  periods: 18,
                  labs: 3,
                },
                {
                  unit: "Electricity",
                  start: "Week 10",
                  end: "Week 13",
                  periods: 12,
                  labs: 2,
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-100 last:border-0 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-4 text-emerald-700">{row.unit}</td>
                  <td className="py-3 px-4">{row.start}</td>
                  <td className="py-3 px-4">{row.end}</td>
                  <td className="py-3 px-4 font-black">{row.periods}</td>
                  <td className="py-3 px-4">
                    {row.labs}{" "}
                    <span className="text-[10px] text-slate-400 font-medium ml-1">
                      Sessions
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── E. Annual Non-Instructional Blocks ── */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-50 rounded-xl border border-orange-100">
            <CalendarX size={18} className="text-orange-500" />
          </div>
          <div>
            <h2 className="text-[14px] font-black uppercase tracking-widest text-slate-800">
              E. Non-Instructional Blocks
            </h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              System Auto-Adjusts Pacing Based on Holidays & Events
            </p>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px] border border-slate-200 bg-slate-50 rounded-xl p-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-600 mb-2 border-b border-slate-200 pb-2">
              Holidays Configured
            </h3>
            <ul className="text-[12px] font-medium text-slate-600 space-y-1.5 list-disc list-inside marker:text-orange-400">
              <li>Summer Break: Jun 1 - Jul 15</li>
              <li>Diwali Break: Nov 10 - Nov 15</li>
              <li>Winter Break: Dec 25 - Jan 2</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] border border-slate-200 bg-slate-50 rounded-xl p-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-600 mb-2 border-b border-slate-200 pb-2">
              Training Days
            </h3>
            <ul className="text-[12px] font-medium text-slate-600 space-y-1.5 list-disc list-inside marker:text-blue-400">
              <li>Pre-Term Prep: May 25 - May 28</li>
              <li>Mid-Year PD: Oct 15 - Oct 16</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] border border-slate-200 bg-slate-50 rounded-xl p-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-600 mb-2 border-b border-slate-200 pb-2">
              School Events
            </h3>
            <ul className="text-[12px] font-medium text-slate-600 space-y-1.5 list-disc list-inside marker:text-pink-400">
              <li>Annual Sports Day: Dec 5</li>
              <li>Science Fair: Feb 12</li>
              <li>Cultural Fest: Mar 1</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualTimetable;
