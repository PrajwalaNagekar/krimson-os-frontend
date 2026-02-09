import React from "react";
import { CheckCircle, Edit } from "lucide-react";
import { CURRICULUM_PLANNER_DATA } from "../../../../data/registrarData";

const LessonCompletionTracker = () => {
  const { curriculumUnits } = CURRICULUM_PLANNER_DATA;

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

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Lesson Completion Tracker
          </h2>
          <p className="text-sm text-gray-600">
            Planned vs Delivered lessons across curriculum units
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {curriculumUnits.map((unit) => (
          <div
            key={unit.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-800">{unit.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(unit.status)}`}
                  >
                    {unit.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {unit.subject} • {unit.grade}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">
                      {unit.completedLessons}/{unit.lessons} Lessons Delivered
                    </span>
                  </div>
                  <div className="text-xs font-bold text-cyan-600">
                    {Math.round((unit.completedLessons / unit.lessons) * 100)}%
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                <Edit className="w-4 h-4" />
                <span>Update Progress</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonCompletionTracker;
