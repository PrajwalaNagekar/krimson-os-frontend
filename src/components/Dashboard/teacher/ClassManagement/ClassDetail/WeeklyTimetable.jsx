import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  MapPin,
  BookOpen,
  X,
  Library,
  FileText,
  Presentation,
  Download,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ReportAbsenceModal from "./ReportAbsenceModal";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const WEEKEND = ["Saturday", "Sunday"];
const PERIODS = [
  { p: 1, time: "8:00 AM - 9:00 AM" },
  { p: 2, time: "9:00 AM - 10:00 AM" },
  { p: 3, time: "10:00 AM - 11:00 AM" },
  { p: 4, time: "11:30 AM - 12:30 PM" },
  { p: 5, time: "1:30 PM - 2:30 PM" },
];

const LessonDetailsModal = ({
  isOpen,
  classInfo,
  lessonBlock,
  onClose,
  onReportAbsence,
}) => {
  if (!isOpen || !lessonBlock) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 p-5">
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h2 className="text-[18px] font-black tracking-tight flex items-center gap-2">
                <BookOpen size={18} /> Lesson Details
              </h2>
              <p className="text-[12px] font-bold text-blue-50 mt-1">
                {classInfo.grade} • {classInfo.subject} • {lessonBlock.day},
                Period {lessonBlock.period}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* Topic */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Current Chapter / Topic
            </h4>
            <div className="flex items-center gap-3 text-slate-800 font-extrabold text-[13px] bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Library size={14} />
              </div>
              {classInfo.currentTopic}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Attached Materials
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <FileText size={14} />
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-slate-700 group-hover:text-blue-700 transition-colors leading-tight">
                      Worksheet_12.pdf
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                      1.2 MB • PDF
                    </p>
                  </div>
                </div>
                <Download
                  size={15}
                  className="text-slate-400 group-hover:text-blue-500"
                />
              </div>

              <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Presentation size={14} />
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-slate-700 group-hover:text-blue-700 transition-colors leading-tight">
                      Topic_Slides.pptx
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                      4.5 MB • PPTX
                    </p>
                  </div>
                </div>
                <Download
                  size={15}
                  className="text-slate-400 group-hover:text-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Teacher Notes & Actions */}
          <div className="border-t border-slate-100 pt-5">
            <div className="flex justify-between items-end gap-2">
              <div className="flex-1">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  Teacher Notes
                </h4>
                <p className="text-[12px] font-medium text-slate-600 leading-relaxed bg-yellow-50/50 p-3 rounded-xl border border-yellow-100/80 italic">
                  "Ensure students have completed Worksheet 11 before
                  introducing this."
                </p>
              </div>

              {/* Embedded Report Absence Button */}
              <button
                onClick={() => onReportAbsence(lessonBlock)}
                className="flex items-center justify-center gap-1.5 shrink-0 px-4 py-3 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 rounded-xl text-[11px] font-black uppercase tracking-wider transition-colors"
                title="Report Absence for this block"
              >
                <AlertCircle size={14} /> Report Absence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyTimetable = ({ classInfo }) => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [absenceBlock, setAbsenceBlock] = useState(null);
  const [weekOffset, setWeekOffset] = useState(0); // 0 = current week, -1 = last, +1 = next

  // Compute Monday of current week + offset
  const getWeekMonday = (offset) => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon...
    const diff = now.getDate() - day + (day === 0 ? -6 : 1); // adjust to Monday
    const monday = new Date(now.setDate(diff + offset * 7));
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  const monday = getWeekMonday(weekOffset);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const fmt = (d) =>
    d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });

  const weekLabel = `${fmt(monday)} – ${fmt(sunday)}, ${sunday.getFullYear()}`;

  const handleBlockClick = (block) => setSelectedBlock(block);
  const handleReportAbsenceClick = (block) => {
    setSelectedBlock(null);
    setAbsenceBlock(block);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">
      <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <CalendarIcon size={16} />
          </div>
          <div>
            <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">
              Weekly Timetable
            </h3>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              {classInfo.grade} — {classInfo.subject}
            </p>
          </div>
        </div>

        {/* Week Navigator */}
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
          <button
            onClick={() => setWeekOffset((p) => p - 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-[12px] font-extrabold text-slate-700 px-2 min-w-max">
            {weekOffset === 0
              ? "This Week"
              : weekOffset < 0
                ? `${Math.abs(weekOffset)}w ago`
                : `+${weekOffset}w`}
            &nbsp;
            <span className="font-medium text-slate-400">{weekLabel}</span>
          </span>
          <button
            onClick={() => setWeekOffset((p) => p + 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
          {weekOffset !== 0 && (
            <button
              onClick={() => setWeekOffset(0)}
              className="ml-1 text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-700 border border-blue-200 hover:border-blue-300 px-2.5 py-1 rounded-lg bg-blue-50 transition-colors"
            >
              Today
            </button>
          )}
        </div>
      </div>

      <div className="p-5 overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 p-3 text-left text-[11px] font-black uppercase tracking-widest text-slate-500 w-32 shadow-sm">
                Time / Day
              </th>
              {DAYS.map((day) => (
                <th
                  key={day}
                  className="border border-slate-200 bg-slate-50 p-3 text-center text-[12px] font-extrabold text-slate-700 w-48 shadow-sm"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map((period) => (
              <tr key={period.p}>
                <td className="border border-slate-200 p-3 text-left align-top bg-slate-50/30">
                  <p className="text-[13px] font-black text-slate-700">
                    Period {period.p}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                    {period.time}
                  </p>
                </td>
                {DAYS.map((day) => {
                  const block = classInfo.schedule.find(
                    (s) => s.day === day && s.period === period.p,
                  );
                  const isWeekend = WEEKEND.includes(day);

                  return (
                    <td
                      key={day}
                      className={`border border-slate-200 p-2 text-center h-28 align-top relative group ${
                        isWeekend ? "bg-slate-50/80" : ""
                      }`}
                    >
                      {isWeekend ? (
                        <div className="w-full h-full rounded-xl bg-slate-100/60 border border-dashed border-slate-200 flex items-center justify-center">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                            Weekend
                          </span>
                        </div>
                      ) : block ? (
                        <div
                          onClick={() => handleBlockClick(block)}
                          className="w-full h-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300 rounded-xl p-3 cursor-pointer transition-all text-left flex flex-col justify-between shadow-sm relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-2 h-full bg-emerald-400 opacity-20"></div>
                          <div>
                            <p className="text-[13px] font-extrabold text-emerald-800 tracking-tight leading-tight">
                              {classInfo.subject}
                            </p>
                            <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-emerald-600">
                              <MapPin size={11} /> {classInfo.room}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700/70 mt-3 pt-2 border-t border-emerald-200/50 w-full truncate">
                              {classInfo.currentTopic}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-xl bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center opacity-50">
                          {/* Empty Block */}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      <LessonDetailsModal
        isOpen={!!selectedBlock}
        classInfo={classInfo}
        lessonBlock={selectedBlock}
        onClose={() => setSelectedBlock(null)}
        onReportAbsence={handleReportAbsenceClick}
      />

      {/* Report Absence Modal */}
      {absenceBlock && (
        <ReportAbsenceModal
          isOpen={true}
          lessonInfo={absenceBlock}
          classInfo={classInfo}
          onClose={() => setAbsenceBlock(null)}
        />
      )}
    </div>
  );
};

export default WeeklyTimetable;
