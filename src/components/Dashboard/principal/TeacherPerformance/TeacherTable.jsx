import React, { useState } from "react";
import { Eye, ChevronRight } from "lucide-react";

const TeacherPerformanceRow = ({
  name,
  department,
  lessonPlan,
  feedback,
  engagement,
  overall,
}) => {
  const getStatusColor = (score) => {
    if (score >= 90) return "bg-green-100 text-green-700";
    if (score >= 75) return "bg-blue-100 text-blue-700";
    if (score >= 60) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold shadow-md">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="font-bold text-slate-800">{name}</p>
            <p className="text-xs text-slate-500">{department}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                lessonPlan >= 90
                  ? "bg-green-500"
                  : lessonPlan >= 75
                    ? "bg-blue-500"
                    : "bg-orange-500"
              }`}
              style={{ width: `${lessonPlan}%` }}
            ></div>
          </div>
          <span className="text-sm font-bold text-slate-700 w-12">
            {lessonPlan}%
          </span>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            feedback <= 2
              ? "bg-green-100 text-green-700"
              : feedback <= 3
                ? "bg-blue-100 text-blue-700"
                : "bg-orange-100 text-orange-700"
          }`}
        >
          {feedback} days
        </span>
      </td>
      <td className="px-4 py-4 text-center font-semibold text-slate-700">
        {engagement}%
      </td>
      <td className="px-4 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
            overall,
          )}`}
        >
          {overall >= 90
            ? "Excellent"
            : overall >= 75
              ? "Good"
              : overall >= 60
                ? "Average"
                : "Needs Support"}
        </span>
      </td>
      <td className="px-4 py-4">
        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
          <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>
      </td>
    </tr>
  );
};

const TeacherTable = ({ teachers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teachers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800">
              Individual Teacher Metrics
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Click teacher for detailed performance breakdown
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md flex items-center gap-2">
            <Eye className="w-4 h-4" />
            View Comparison
            <span className="text-[9px] opacity-80">(get in app)</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left">Teacher</th>
              <th className="px-4 py-3 text-left">Lesson Plan %</th>
              <th className="px-4 py-3 text-center">Feedback Time</th>
              <th className="px-4 py-3 text-center">Engagement</th>
              <th className="px-4 py-3 text-left">Overall</th>
              <th className="px-4 py-3 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentTeachers.map((teacher, idx) => (
              <TeacherPerformanceRow key={idx} {...teacher} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="text-xs text-slate-500">
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, teachers.length)} of {teachers.length}{" "}
          entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${
              currentPage === 1
                ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors flex items-center justify-center border ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white border-transparent shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${
              currentPage === totalPages
                ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherTable;
