import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  AlertCircle,
  AlertTriangle,
  Search,
  Plus,
} from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../data/coordinatorData";

/**
 * Page: Unassigned Classes
 * Purpose: Display classes/subjects that need teacher assignments
 * Features:
 * - View unassigned classes
 * - Priority indicators
 * - Quick assign action
 */

const UnassignedClasses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = TEACHER_ASSIGNMENT_DATA.unassignedClasses.filter(
    (item) =>
      item.gradeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subjectName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "from-red-400 to-orange-500";
      case "medium":
        return "from-orange-400 to-yellow-500";
      case "low":
        return "from-yellow-400 to-green-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "low":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/coordinator/teacher-assignment")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Unassigned Classes
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Classes and subjects requiring teacher assignment
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-lg text-white">
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">
                {TEACHER_ASSIGNMENT_DATA.unassignedClasses.length} Unassigned
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by grade or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Unassigned Classes List */}
        <div className="space-y-4">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 flex-wrap">
                {/* Priority Icon */}
                <div
                  className={`p-3 bg-gradient-to-br ${getPriorityColor(item.priority)} rounded-lg shadow-lg`}
                >
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>

                {/* Class Info */}
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.gradeName}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityBadge(item.priority)}`}
                    >
                      {item.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">
                    Subject:{" "}
                    <span className="text-blue-600">{item.subjectName}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Reason:</span> {item.reason}
                  </p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => navigate("/coordinator/teacher-assignment")}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Assign Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClasses.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <AlertCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No unassigned classes found
            </h3>
            <p className="text-gray-500">
              {searchQuery
                ? "Try adjusting your search criteria"
                : "All classes have been assigned teachers!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnassignedClasses;
