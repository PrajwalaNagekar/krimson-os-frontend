import React, { useState } from "react";
import {
  Edit,
  Power,
  PowerOff,
  UserCheck,
  BookOpen,
  GraduationCap,
  Calendar,
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AssignmentList = ({
  assignments,
  onRemoveAssignment,
  onEditAssignment,
  onToggleStatus,
  isPastYear,
}) => {
  const [expandedRow, setExpandedRow] = useState(null);

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

  const getRoleBadge = (role) => {
    const badges = {
      primary: { bg: "bg-blue-100", text: "text-blue-700", label: "Primary" },
      support: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        label: "Support",
      },
      substitute: {
        bg: "bg-orange-100",
        text: "text-orange-700",
        label: "Substitute",
      },
    };
    const badge = badges[role] || badges.primary;
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}
      >
        {badge.label}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    if (status === "active") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          <CheckCircle2 className="h-3 w-3" />
          Active
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
        <XCircle className="h-3 w-3" />
        Inactive
      </span>
    );
  };

  const toggleExpand = (assignmentId) => {
    setExpandedRow(expandedRow === assignmentId ? null : assignmentId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          Assignment Records
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {assignments.length}{" "}
          {assignments.length === 1 ? "assignment" : "assignments"} found
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Section
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Periods/Week
              </th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assignments.map((assignment, index) => (
              <React.Fragment key={assignment.id}>
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-cyan-600" />
                      <span className="font-semibold text-gray-900">
                        {assignment.gradeName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-gray-700">
                      {assignment.sectionName}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-pink-600" />
                      <span className="font-medium text-gray-900">
                        {assignment.subjectName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-900">
                        {assignment.teacherName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">{getRoleBadge(assignment.role)}</td>
                  <td className="px-4 py-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-lg">
                      <Clock className="h-3 w-3 text-blue-600" />
                      <span className="font-bold text-blue-700">
                        {assignment.periodsPerWeek}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    {getStatusBadge(assignment.status)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {!isPastYear && (
                        <>
                          <button
                            onClick={() => onEditAssignment(assignment)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Assignment"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => onToggleStatus(assignment.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              assignment.status === "active"
                                ? "text-gray-600 hover:bg-gray-100"
                                : "text-green-600 hover:bg-green-50"
                            }`}
                            title={
                              assignment.status === "active"
                                ? "Deactivate"
                                : "Activate"
                            }
                          >
                            {assignment.status === "active" ? (
                              <PowerOff className="h-4 w-4" />
                            ) : (
                              <Power className="h-4 w-4" />
                            )}
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => toggleExpand(assignment.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        {expandedRow === assignment.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Expanded Row - Audit Information */}
                {expandedRow === assignment.id && (
                  <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50">
                    <td colSpan="8" className="px-4 py-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Assigned By
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {assignment.assignedBy}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Assigned Date
                          </p>
                          <p className="text-gray-900">
                            {formatDate(assignment.assignedDate)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Last Modified
                          </p>
                          <p className="text-gray-900">
                            {formatDate(assignment.lastModified)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Academic Year
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {assignment.academicYear}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Contact Hours
                          </p>
                          <p className="text-gray-900">
                            {assignment.contactHours} hours
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Period Type
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {assignment.isDoublePeriod && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                                Double
                              </span>
                            )}
                            {assignment.isLabPeriod && (
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">
                                Lab
                              </span>
                            )}
                            {assignment.isRotational && (
                              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded">
                                Rotational
                              </span>
                            )}
                            {!assignment.isDoublePeriod &&
                              !assignment.isLabPeriod &&
                              !assignment.isRotational && (
                                <span className="text-gray-500 text-xs">
                                  Standard
                                </span>
                              )}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">
                            Non-Teaching Duties
                          </p>
                          <p className="text-gray-900">
                            {assignment.hasNonTeachingDuties ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden divide-y divide-gray-200">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 text-cyan-600" />
                  <span className="font-bold text-gray-900">
                    {assignment.gradeName} - {assignment.sectionName}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="h-4 w-4 text-pink-600" />
                  <span className="font-medium text-gray-900">
                    {assignment.subjectName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">
                    {assignment.teacherName}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {getRoleBadge(assignment.role)}
                {getStatusBadge(assignment.status)}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-200">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  {assignment.periodsPerWeek} periods/week
                </span>
              </div>

              {!isPastYear && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEditAssignment(assignment)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onToggleStatus(assignment.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      assignment.status === "active"
                        ? "text-gray-600 hover:bg-gray-100"
                        : "text-green-600 hover:bg-green-50"
                    }`}
                  >
                    {assignment.status === "active" ? (
                      <PowerOff className="h-4 w-4" />
                    ) : (
                      <Power className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
