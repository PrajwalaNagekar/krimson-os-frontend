import React from "react";
import { Calendar, Clock, FileText, Target, Eye } from "lucide-react";
import { ASSESSMENT_TRACKER_DATA } from "../../../../data/registrarData";

const ExamCalendar = ({ selectedGrade, setSelectedGrade }) => {
  const { calendarData } = ASSESSMENT_TRACKER_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "in-progress":
        return "bg-green-100 text-green-700 border-green-200";
      case "completed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Exam":
        return "from-red-400 to-pink-500";
      case "Test":
        return "from-blue-400 to-cyan-500";
      case "Practical":
        return "from-purple-400 to-pink-500";
      case "Assignment":
        return "from-green-400 to-emerald-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  // Filter functionality logic should ideally be here or passed down if it's complex.
  // The original component just displayed all calendarData but had a select input.
  // It seems the filtering logic wasn't fully implemented in the original snippet provided (it mapped `calendarData` directly).
  // However, `selectedGrade` state existed. I should probably implement the filtering if the original intended it,
  // but the user said "make sure ui not chnage".
  // Looking at the original code:
  // `calendarData.map(...)`
  // It did NOT filter by `selectedGrade`. It just had the dropdown.
  // I will reproduce the EXACT behavior: show dropdown, but map all data (or filtered if I want to be "better", but strict adherence says don't change behavior).
  // Wait, "make sure code api interation readay".
  // I'll stick to reproducing the original behavior first. If the original didn't filter, I won't filter, but I will keep the state connected.

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Exam Calendar</h2>
            <p className="text-sm text-gray-600">
              Upcoming assessments across all grades
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Grades</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {calendarData.map((assessment) => (
          <div
            key={assessment.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(assessment.type)}`}
                  >
                    {assessment.type}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(assessment.status)}`}
                  >
                    {assessment.status}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {assessment.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {assessment.subject} • {assessment.grade}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">
                  {new Date(assessment.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span className="text-gray-700">{assessment.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-pink-500" />
                <span className="text-gray-700">{assessment.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-purple-500" />
                <span className="text-gray-700">
                  {assessment.totalMarks} marks
                </span>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamCalendar;
