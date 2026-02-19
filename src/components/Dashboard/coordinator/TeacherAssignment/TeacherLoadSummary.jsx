import React from "react";
import { Users, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

/**
 * TeacherLoadSummary Component
 * Displays the current workload of a selected teacher
 * Shows periods assigned, remaining capacity, and visual indicators
 */
const TeacherLoadSummary = ({ teacher }) => {
  if (!teacher) return null;

  const { currentPeriods, maxPeriods, availableCapacity } = teacher;
  const usagePercentage = (currentPeriods / maxPeriods) * 100;

  // Determine status color based on load
  const getStatusColor = () => {
    if (usagePercentage >= 93) return "red"; // Overload (28+ periods)
    if (usagePercentage >= 83) return "yellow"; // Warning (25+ periods)
    return "green"; // Good
  };

  const statusColor = getStatusColor();

  const colorClasses = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      bar: "bg-gradient-to-r from-green-400 to-emerald-500",
      icon: "text-green-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
      bar: "bg-gradient-to-r from-yellow-400 to-orange-500",
      icon: "text-yellow-600",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      bar: "bg-gradient-to-r from-red-400 to-rose-500",
      icon: "text-red-600",
    },
  };

  const colors = colorClasses[statusColor];

  return (
    <div
      className={`${colors.bg} border ${colors.border} rounded-lg p-4 space-y-3`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className={`h-5 w-5 ${colors.icon}`} />
          <h3 className={`font-semibold ${colors.text}`}>
            Teaching Load Summary
          </h3>
        </div>
        {statusColor === "green" && (
          <CheckCircle className="h-5 w-5 text-green-600" />
        )}
        {statusColor === "yellow" && (
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
        )}
        {statusColor === "red" && (
          <AlertTriangle className="h-5 w-5 text-red-600" />
        )}
      </div>

      {/* Teacher Name */}
      <div>
        <p className="text-sm text-gray-600 font-medium">Selected Teacher</p>
        <p className="font-semibold text-gray-900">{teacher.name}</p>
        <p className="text-xs text-gray-500">{teacher.specialization}</p>
      </div>

      {/* Load Statistics */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Current</p>
          <p className="text-xl font-bold text-gray-900">{currentPeriods}</p>
          <p className="text-xs text-gray-500">periods</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Available</p>
          <p className="text-xl font-bold text-blue-600">{availableCapacity}</p>
          <p className="text-xs text-gray-500">periods</p>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <p className="text-xs text-gray-600 mb-1">Maximum</p>
          <p className="text-xl font-bold text-gray-900">{maxPeriods}</p>
          <p className="text-xs text-gray-500">periods</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-gray-700">
            Workload Usage
          </span>
          <span className={`text-xs font-bold ${colors.text}`}>
            {usagePercentage.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${colors.bar} transition-all duration-500 rounded-full`}
            style={{ width: `${usagePercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Status Message */}
      <div className={`text-xs ${colors.text} font-medium`}>
        {statusColor === "green" && (
          <p>✓ Teacher has sufficient capacity for new assignments</p>
        )}
        {statusColor === "yellow" && (
          <p>⚠ Teacher is approaching maximum workload limit</p>
        )}
        {statusColor === "red" && (
          <p>⚠ Teacher is at or exceeding recommended workload</p>
        )}
      </div>
    </div>
  );
};

export default TeacherLoadSummary;
