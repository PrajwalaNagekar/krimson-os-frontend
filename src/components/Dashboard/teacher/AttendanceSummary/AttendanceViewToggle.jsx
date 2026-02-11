import React from "react";

const AttendanceViewToggle = ({ selectedView, setSelectedView }) => {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-md">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSelectedView("monthly")}
          className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            selectedView === "monthly"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Monthly View
        </button>
        <button
          onClick={() => setSelectedView("term")}
          className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            selectedView === "term"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Term-wise View
        </button>
      </div>
    </div>
  );
};

export default AttendanceViewToggle;
