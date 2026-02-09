import React from "react";

const ViewModeFilter = ({
  viewMode,
  setViewMode,
  selectedClass,
  setSelectedClass,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row gap-4">
        {/* View Mode */}
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            View Mode
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("weekly")}
              className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${viewMode === "weekly" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setViewMode("termwise")}
              className={`flex-1 px-4 py-2 rounded-xl font-semibold transition-all ${viewMode === "termwise" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Term-wise
            </button>
          </div>
        </div>

        {/* Class Filter */}
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Filter by Class
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Classes</option>
            <option value="grade-10-a">Grade 10-A</option>
            <option value="grade-11-b">Grade 11-B</option>
            <option value="grade-12-c">Grade 12-C</option>
          </select>
        </div>

        {/* Export Options */}
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Export As
          </label>
          <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
            <option>By Class</option>
            <option>By Teacher</option>
            <option>By Subject</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ViewModeFilter;
