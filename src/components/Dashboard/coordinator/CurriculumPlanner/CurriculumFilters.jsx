import React from "react";

const CurriculumFilters = ({
  selectedSubject,
  setSelectedSubject,
  selectedGrade,
  setSelectedGrade,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Filter by Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Subjects</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="english">English Literature</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Filter by Grade
          </label>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Grades</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurriculumFilters;
