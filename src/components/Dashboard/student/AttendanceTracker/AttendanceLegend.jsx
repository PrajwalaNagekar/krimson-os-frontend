import React from "react";

const AttendanceLegend = () => {
  const legendItems = [
    { label: "Present", color: "from-green-400 to-emerald-500" },
    { label: "Absent", color: "from-red-400 to-rose-500" },
    { label: "Absent (Leave)", color: "from-orange-400 to-orange-500" },
    { label: "Holiday", color: "from-blue-400 to-blue-500" },
    { label: "Weekend", color: "from-gray-300 to-gray-400" },
  ];

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.color}`}
            ></div>
            <span className="text-xs font-medium text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceLegend;
