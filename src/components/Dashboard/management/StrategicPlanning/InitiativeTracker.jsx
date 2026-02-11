import React from "react";
import { Flag, CheckCircle, Activity, Clock } from "lucide-react";
import { STRATEGIC_PLANNING_DATA } from "../../../../data/managementData";

const InitiativeTracker = ({ getStatusColor, formatCurrency }) => {
  const { initiatives } = STRATEGIC_PLANNING_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <Flag className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Strategic Initiative Tracker
          </h2>
          <p className="text-sm text-gray-600">
            Major projects and their progress
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {initiatives.map((initiative) => (
          <div
            key={initiative.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold font-mono">
                    {initiative.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(initiative.status)}`}
                  >
                    {initiative.status === "exceeded" && "✓ Exceeded"}
                    {initiative.status === "on-track" && "→ On Track"}
                    {initiative.status === "delayed" && "! Delayed"}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {initiative.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {initiative.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {initiative.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Owner: {initiative.owner}</span>
                  <span>Start: {initiative.startDate}</span>
                  <span>Target: {initiative.targetDate}</span>
                </div>
              </div>

              <div className="lg:w-64">
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 mb-3">
                  <p className="text-xs text-gray-600 mb-2">Progress</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {initiative.progress}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-full rounded-full transition-all ${initiative.status === "exceeded" ? "bg-gradient-to-r from-green-400 to-emerald-500" : initiative.status === "on-track" ? "bg-gradient-to-r from-blue-400 to-cyan-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-gray-600">Budget</p>
                    <p className="font-bold text-green-700">
                      {formatCurrency(initiative.budget)}
                    </p>
                  </div>
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <p className="text-xs text-gray-600">Spent</p>
                    <p className="font-bold text-orange-700">
                      {formatCurrency(initiative.spent)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-3 text-sm">
                Milestones:
              </h4>
              <div className="flex flex-wrap gap-2">
                {initiative.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold border ${getStatusColor(milestone.status)}`}
                  >
                    {milestone.status === "completed" && (
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                    )}
                    {milestone.status === "in-progress" && (
                      <Activity className="w-3 h-3 inline mr-1" />
                    )}
                    {milestone.status === "delayed" && (
                      <Clock className="w-3 h-3 inline mr-1" />
                    )}
                    {milestone.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativeTracker;
