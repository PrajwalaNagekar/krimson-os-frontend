import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle, XCircle } from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../data/coordinatorData";

/**
 * Page: Grades Covered
 * Purpose: Display grade-wise coverage statistics
 * Features:
 * - View coverage for each grade
 * - Progress indicators
 * - Missing subjects list
 */

const GradesCovered = () => {
  const navigate = useNavigate();

  const getProgressColor = (percentage) => {
    if (percentage === 100) return "from-green-400 to-emerald-500";
    if (percentage >= 80) return "from-blue-400 to-cyan-500";
    if (percentage >= 60) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  const getProgressBgColor = (percentage) => {
    if (percentage === 100) return "bg-green-100";
    if (percentage >= 80) return "bg-blue-100";
    if (percentage >= 60) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/coordinator/teacher-assignment")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Grades Coverage
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Grade-wise subject coverage and assignment status
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 rounded-lg text-white">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">
                {TEACHER_ASSIGNMENT_DATA.gradesCoverage.length} Grades
              </span>
            </div>
          </div>
        </div>

        {/* Grades Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEACHER_ASSIGNMENT_DATA.gradesCoverage.map((grade) => (
            <div
              key={grade.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Grade Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 bg-gradient-to-br ${getProgressColor(grade.coveragePercentage)} rounded-lg shadow-lg`}
                >
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">
                    {grade.gradeName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {grade.assignedSubjects} of {grade.totalSubjects} subjects
                    assigned
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Coverage
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {grade.coveragePercentage}%
                  </span>
                </div>
                <div
                  className={`w-full h-3 ${getProgressBgColor(grade.coveragePercentage)} rounded-full overflow-hidden`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${getProgressColor(grade.coveragePercentage)} transition-all duration-500 rounded-full`}
                    style={{ width: `${grade.coveragePercentage}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-600">Assigned</p>
                    <p className="font-bold text-green-700">
                      {grade.assignedSubjects}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-600">Missing</p>
                    <p className="font-bold text-red-700">
                      {grade.missingSubjects.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Missing Subjects */}
              {grade.missingSubjects.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Missing Subjects:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grade.missingSubjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium border border-red-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Badge */}
              {grade.coveragePercentage === 100 && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">
                      All subjects assigned!
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradesCovered;
