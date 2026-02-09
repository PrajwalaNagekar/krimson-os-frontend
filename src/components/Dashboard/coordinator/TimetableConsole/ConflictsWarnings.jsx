import React from "react";
import { AlertTriangle, Edit } from "lucide-react";

const ConflictsWarnings = ({ teacherIssues }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "from-red-400 to-orange-500";
      case "medium":
        return "from-orange-400 to-yellow-500";
      case "low":
        return "from-blue-400 to-cyan-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  if (teacherIssues.length === 0) return null;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Conflicts & Warnings
          </h2>
          <p className="text-sm text-gray-600">
            Auto-detected scheduling issues requiring attention
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {teacherIssues.map((issue) => (
          <div
            key={issue.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${getSeverityColor(issue.severity)} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    !
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{issue.teacher}</h3>
                    <p className="text-sm text-gray-600">
                      {issue.issue} • {issue.time}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 ml-13">{issue.details}</p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                <Edit className="w-4 h-4" />
                <span>Resolve</span>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConflictsWarnings;
