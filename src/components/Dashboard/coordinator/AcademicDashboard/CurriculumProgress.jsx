import React from "react";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { ACADEMIC_DASHBOARD_DATA } from "../../../../data/coordinatorData";

const CurriculumProgress = ({ selectedSubject, setSelectedSubject }) => {
  const { curriculumProgress } = ACADEMIC_DASHBOARD_DATA;

  const subjects = [
    "all",
    ...new Set(curriculumProgress.map((p) => p.subject)),
  ];

  const filteredProgress =
    selectedSubject === "all"
      ? curriculumProgress
      : curriculumProgress.filter((p) => p.subject === selectedSubject);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-pink-500 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Curriculum Progress
            </h2>
            <p className="text-sm text-gray-600">Topic completion by subject</p>
          </div>
        </div>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject === "all" ? "All Subjects" : subject}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredProgress.map((progress, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-xl border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {progress.subject}
                </h3>
                <p className="text-xs text-gray-600">{progress.grade}</p>
              </div>
              <div className="flex items-center gap-2">
                {progress.onTrack ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    progress.onTrack
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {progress.onTrack ? "On Track" : "Behind"}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Completed: {progress.completed} / {progress.planned} topics
                </span>
                <span className="font-bold text-gray-800">
                  {progress.coverage.toFixed(1)}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    progress.onTrack
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : "bg-gradient-to-r from-orange-400 to-red-600"
                  }`}
                  style={{ width: `${progress.coverage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumProgress;
