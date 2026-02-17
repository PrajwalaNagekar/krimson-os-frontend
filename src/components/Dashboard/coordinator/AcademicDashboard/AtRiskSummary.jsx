import React from "react";
import { AlertTriangle, User, Clock } from "lucide-react";
import { ACADEMIC_DASHBOARD_DATA } from "../../../../data/coordinatorData";

const AtRiskSummary = () => {
  const { atRiskStudents } = ACADEMIC_DASHBOARD_DATA;

  const getRiskColor = (level) => {
    switch (level) {
      case "high":
        return "bg-red-50 border-red-200 text-red-700";
      case "medium":
        return "bg-orange-50 border-orange-200 text-orange-700";
      case "low":
        return "bg-yellow-50 border-yellow-200 text-yellow-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getRiskBadge = (level) => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-700 border-red-300";
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "low":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">At-Risk Summary</h2>
          <p className="text-sm text-gray-600">
            Students requiring intervention
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {atRiskStudents.map((student) => (
          <div
            key={student.id}
            className={`p-4 rounded-xl border-2 ${getRiskColor(
              student.riskLevel,
            )} hover:shadow-md transition-all`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {student.name}
                  </h3>
                  <p className="text-xs text-gray-600">{student.grade}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-lg text-xs font-bold border ${getRiskBadge(
                  student.riskLevel,
                )}`}
              >
                {student.riskLevel.toUpperCase()}
              </span>
            </div>

            <div className="space-y-2 mb-3">
              <p className="text-xs font-semibold text-gray-700">Concerns:</p>
              <ul className="space-y-1">
                {student.concerns.map((concern, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock className="w-3 h-3" />
                <span>
                  Last action:{" "}
                  {new Date(student.lastAction).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <button className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-medium rounded-lg hover:shadow-md transition-all">
                View Details
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 italic">
              Action: {student.actionTaken}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtRiskSummary;
