import React from "react";
import {
  Users,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Eye,
} from "lucide-react";

const PerformanceTable = ({
  filteredStudents,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
  filterMode,
  onViewStudent,
}) => {
  const getGradeColor = (grade) => {
    if (grade >= 90) return "text-green-600 bg-green-50";
    if (grade >= 75) return "text-blue-600 bg-blue-50";
    if (grade >= 60) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getTrendColor = (trend) => {
    return trend === "improving" ? "text-green-600" : "text-red-600";
  };

  const getParticipationColor = (participation) => {
    if (participation === "A+" || participation === "A")
      return "bg-green-100 text-green-700";
    if (participation === "B") return "bg-blue-100 text-blue-700";
    if (participation === "C") return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50 to-blue-50 border-b-2 border-blue-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Unit Test 1
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Unit Test 2
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Midterm
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Participation
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Attendance
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Trend
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredStudents
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
              )
              .map((student) => (
                <tr
                  key={student.id}
                  className={`hover:bg-slate-50 transition-colors ${student.atRisk ? "bg-red-50/30" : ""}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                        {student.roll}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">
                          {student.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          ID: {student.id}
                        </p>
                      </div>
                      {student.atRisk && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center gap-1">
                          <AlertTriangle size={12} />
                          At Risk
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.unitTest1)}`}
                    >
                      {student.assessments.unitTest1}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.unitTest2)}`}
                    >
                      {student.assessments.unitTest2}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.project)}`}
                    >
                      {student.assessments.project}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(student.assessments.midterm)}`}
                    >
                      {student.assessments.midterm}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold text-sm ${getParticipationColor(student.participation)}`}
                    >
                      {student.participation}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-slate-800">
                        {student.attendance}%
                      </span>
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${student.attendance >= 90 ? "bg-green-500" : student.attendance >= 75 ? "bg-orange-500" : "bg-red-500"}`}
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div
                      className={`flex items-center justify-center gap-1 font-bold ${getTrendColor(student.trend)}`}
                    >
                      {student.trend === "improving" ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      <span className="text-sm">
                        {student.trendValue > 0 ? "+" : ""}
                        {student.trendValue}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-lg font-bold text-slate-800">
                      {student.overallGrade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onViewStudent(student)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1 mx-auto"
                    >
                      <Eye size={12} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="p-12 text-center">
          <Users className="mx-auto text-slate-300 mb-3" size={48} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            No Students Found
          </h3>
          <p className="text-sm text-slate-500">
            {searchQuery || filterMode !== "all"
              ? "Try adjusting your filters"
              : "No students in this class"}
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredStudents.length > itemsPerPage && (
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              filteredStudents.length,
            )}{" "}
            to {Math.min(currentPage * itemsPerPage, filteredStudents.length)}{" "}
            of {filteredStudents.length} entries
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredStudents.length / itemsPerPage),
                  ),
                )
              }
              disabled={
                currentPage ===
                Math.ceil(filteredStudents.length / itemsPerPage)
              }
              className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceTable;
