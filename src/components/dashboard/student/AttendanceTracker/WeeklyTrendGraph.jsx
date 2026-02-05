import React from 'react';

/**
 * WeeklyTrendGraph Component
 * 
 * Layout: LF — Analytics
 * Data Control: Mixed
 * AI: AI3 Monitor
 * Purpose: SVG line chart showing weekly attendance trends with interactive tooltips
 */
const WeeklyTrendGraph = ({ chartData = [] }) => {
  const width = 600;
  const height = 260;
  const padding = { top: 20, right: 30, bottom: 40, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;
  const maxY = 100;

  // Calculate points for the line graph
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
            {/* AI3 Monitor: Gradient styling for trend visualization */}
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

          {/* Y-axis grid lines and labels */}
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

          {/* Area fill under the line */}
          <path
            d={`M ${points} L ${
              padding.left + graphWidth
            },${padding.top + graphHeight} L ${
              padding.left
            },${padding.top + graphHeight} Z`}
            fill="url(#areaGradient)"
          />

          {/* Line graph */}
          <path
            d={`M ${points}`}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points with hover tooltips */}
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
  );
};

export default WeeklyTrendGraph;
