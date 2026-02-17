import React from "react";
import {
  Trash2,
  UserCheck,
  BookOpen,
  GraduationCap,
  Calendar,
} from "lucide-react";

const AssignmentList = ({ assignments, onRemoveAssignment, isPastYear }) => {
  if (assignments.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <div className="text-center py-12">
          <div className="inline-flex p-4 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full mb-4">
            <UserCheck className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No Assignments Yet
          </h3>
          <p className="text-gray-600">
            Start assigning teachers to grades and subjects using the form
            above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
        Current Assignments
      </h2>

      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Teacher Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Teacher</p>
                  <p className="font-semibold text-gray-900">
                    {assignment.teacherName}
                  </p>
                </div>
              </div>

              {/* Grade Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Grade</p>
                  <p className="font-semibold text-gray-900">
                    {assignment.gradeName}
                  </p>
                </div>
              </div>

              {/* Subject Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <BookOpen className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Subject</p>
                  <p className="font-semibold text-gray-900">
                    {assignment.subjectName}
                  </p>
                </div>
              </div>
            </div>

            {/* Remove Button - Disabled for past years */}
            {!isPastYear ? (
              <button
                onClick={() => onRemoveAssignment(assignment.id)}
                className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Remove Assignment"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            ) : (
              <div
                className="ml-4 p-2 text-gray-400 cursor-not-allowed"
                title="Cannot remove historical assignments"
              >
                <Calendar className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
