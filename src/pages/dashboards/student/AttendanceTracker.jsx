import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import {
  Download,
  XCircle,
  ExternalLink,
} from 'lucide-react';

const AttendanceTracker = () => {
  const { attendance, attendanceContext } = STUDENT_DATA;
  const { currentMonth, daysInMonth, heatmapStart } = attendanceContext;

  /* =========================
     MONTHLY HEATMAP DATA
  ========================= */
  const calendarGrid = Array.from({ length: daysInMonth }, (_, i) => {
    const dateStr = `${heatmapStart}${String(i + 1).padStart(2, '0')}`;
    let status = 'neutral';

    if (attendance.heatmap.present.includes(dateStr)) status = 'present';
    if (attendance.heatmap.absent.includes(dateStr)) status = 'absent';

    return { date: i + 1, status };
  });

  const handleDownload = () => {
    alert('Downloading Attendance Certificate...');
  };

  /* =========================
     WEEKLY GRAPH DATA
  ========================= */
  const chartData = attendance.weeklyAttendance || [];

  const width = 600;
  const height = 260;
  const padding = { top: 20, right: 30, bottom: 40, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;
  const maxY = 100;

  const points =
    chartData.length > 0
      ? chartData
          .map((d, i) => {
            const x =
              padding.left +
              (i / Math.max(chartData.length - 1, 1)) * graphWidth;
            const y =
              padding.top +
              graphHeight -
              (d.percentage / maxY) * graphHeight;
            return `${x},${y}`;
          })
          .join(' ')
      : '';

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* =========================
           SUMMARY CARD
        ========================= */}
        <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-between h-fit">
          <div>
            <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border-[8px] border-green-500 bg-green-50 mb-4">
              <span className="text-3xl font-extrabold text-green-700">
                {attendance.percentage}%
              </span>

              {attendance.percentage < 90 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full border-4 border-white">
                  <XCircle size={20} />
                </div>
              )}
            </div>

            <h3 className="font-bold text-slate-800">
              Overall Attendance
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Total Days: {attendance.totalDays} • Present:{' '}
              {attendance.presentDays}
            </p>
          </div>

          <div>
            <button
              onClick={handleDownload}
              className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition"
            >
              <Download size={16} />
              Download Certificate
            </button>

            <a
              href="#"
              className="mt-3 flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition group"
            >
              View detailed report
              <ExternalLink
                size={10}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
              />
            </a>
          </div>
        </div>

        {/* =========================
           HEATMAP + GRAPH
        ========================= */}
        <div className="md:col-span-2 space-y-6">
          {/* -------- Heatmap -------- */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">
                {currentMonth}
              </h3>
              <div className="flex gap-4 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-sm" />
                  Present
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-sm" />
                  Absent
                </span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                <div
                  key={d}
                  className="text-center text-xs font-bold text-slate-300"
                >
                  {d}
                </div>
              ))}

              {calendarGrid.map((day) => (
                <div
                  key={day.date}
                  className={`h-10 rounded-xl flex items-center justify-center text-sm font-bold
                    ${
                      day.status === 'present'
                        ? 'bg-green-100 text-green-700'
                        : day.status === 'absent'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-slate-50 text-slate-400'
                    }`}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </div>

          {/* -------- Weekly Line Graph -------- */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">
              Weekly Attendance Trend
            </h3>

            {chartData.length === 0 ? (
              <div className="text-center text-sm text-slate-400 py-12">
                No weekly data available
              </div>
            ) : (
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full max-w-3xl h-auto"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>

                  <linearGradient
                    id="areaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#3b82f6"
                      stopOpacity="0.25"
                    />
                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {[0, 25, 50, 75, 100].map((val) => {
                  const y =
                    padding.top +
                    graphHeight -
                    (val / maxY) * graphHeight;
                  return (
                    <g key={val}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={width - padding.right}
                        y2={y}
                        stroke="#e5e7eb"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={padding.left - 10}
                        y={y + 4}
                        textAnchor="end"
                        fontSize="11"
                        fill="#94a3b8"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Area */}
                <path
                  d={`M ${points} L ${
                    padding.left + graphWidth
                  },${padding.top + graphHeight} L ${
                    padding.left
                  },${padding.top + graphHeight} Z`}
                  fill="url(#areaGradient)"
                />

                {/* Line */}
                <path
                  d={`M ${points}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Points */}
                {chartData.map((d, i) => {
                  const x =
                    padding.left +
                    (i / Math.max(chartData.length - 1, 1)) *
                      graphWidth;
                  const y =
                    padding.top +
                    graphHeight -
                    (d.percentage / maxY) * graphHeight;

                  return (
                    <g key={i} className="group">
                      <circle
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#3b82f6"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <text
                        x={x}
                        y={y - 10}
                        textAnchor="middle"
                        fontSize="10"
                        fill="#0f172a"
                        className="opacity-0 group-hover:opacity-100 transition"
                      >
                        {d.percentage}%
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* =========================
         WARNING
      ========================= */}
      {attendance.percentage < 90 && (
        <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex gap-4">
          <div className="p-3 bg-orange-200 text-orange-700 rounded-full">
            <XCircle />
          </div>
          <div>
            <h4 className="font-bold text-orange-800 text-lg">
              Attendance Warning
            </h4>
            <p className="text-sm text-orange-700 mt-1">
              Your attendance is below 90%. Please attend upcoming
              classes to avoid disciplinary action.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceTracker;
