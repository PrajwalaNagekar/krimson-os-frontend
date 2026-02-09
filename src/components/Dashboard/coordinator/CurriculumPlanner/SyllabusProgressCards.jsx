import React from "react";
import { Eye, Edit, FileText, Clock } from "lucide-react";
import { CURRICULUM_PLANNER_DATA } from "../../../../data/registrarData";

const SyllabusProgressCards = () => {
  const { syllabusData } = CURRICULUM_PLANNER_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "ahead":
        return "from-green-400 to-emerald-500";
      case "on-track":
        return "from-cyan-400 to-blue-500";
      case "behind":
        return "from-orange-400 to-red-500";
      case "completed":
        return "from-green-500 to-emerald-600";
      case "in-progress":
        return "from-blue-400 to-cyan-500";
      case "pending":
        return "from-gray-400 to-gray-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  // Note: Filtering logic was not implemented in the original code snippet provided.
  // It mapped `syllabusData` directly. If filtering is needed, it should be done here based on props.
  // Assuming strict adherence to original behavior (mapping all data), but ready for props if asked.

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {syllabusData.map((syllabus) => (
        <div
          key={syllabus.id}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {syllabus.subject}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(syllabus.status)}`}
                >
                  {syllabus.status.replace("-", " ")}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {syllabus.grade} • {syllabus.teacher}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
              </button>
              <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Overall Progress
              </span>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {syllabus.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getStatusColor(syllabus.status)} rounded-full transition-all duration-500`}
                style={{ width: `${syllabus.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
              <p className="text-xs text-gray-600 mb-1">Units</p>
              <p className="text-lg font-bold text-gray-800">
                {syllabus.completedUnits}/{syllabus.totalUnits}
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-xl">
              <p className="text-xs text-gray-600 mb-1">Lessons</p>
              <p className="text-lg font-bold text-gray-800">
                {syllabus.deliveredLessons}/{syllabus.plannedLessons}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              <span>View Syllabus</span>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
            <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              <span>Edit Plan</span>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          {/* Last Updated */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Last updated:{" "}
              {new Date(syllabus.lastUpdated).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusProgressCards;
