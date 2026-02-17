import React from "react";
import { Calendar, Clock } from "lucide-react";
import { ACADEMIC_DASHBOARD_DATA } from "../../../../data/coordinatorData";

const AssessmentTimeline = ({ selectedGrade, setSelectedGrade }) => {
  const { assessmentTimeline } = ACADEMIC_DASHBOARD_DATA;

  const grades = ["all", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

  const filteredAssessments =
    selectedGrade === "all"
      ? assessmentTimeline
      : assessmentTimeline.filter((a) => a.grade === selectedGrade);

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "in-progress":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "summative":
        return "bg-purple-100 text-purple-700";
      case "formative":
        return "bg-cyan-100 text-cyan-700";
      case "project":
        return "bg-pink-100 text-pink-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Assessment Timeline
            </h2>
            <p className="text-sm text-gray-600">
              Upcoming and ongoing assessments
            </p>
          </div>
        </div>

        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        >
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade === "all" ? "All Grades" : grade}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {filteredAssessments.map((assessment) => (
          <div
            key={assessment.id}
            className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-800">
                    {assessment.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(
                      assessment.type,
                    )}`}
                  >
                    {assessment.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {new Date(assessment.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-medium">{assessment.grade}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Completion</p>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${assessment.completionRate}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700">
                      {assessment.completionRate}%
                    </span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(
                    assessment.status,
                  )}`}
                >
                  {assessment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentTimeline;
