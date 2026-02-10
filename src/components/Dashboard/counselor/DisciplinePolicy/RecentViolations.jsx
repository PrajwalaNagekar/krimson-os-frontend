import React from "react";
import { Eye, MessageSquare, CheckCircle } from "lucide-react";

const RecentViolations = ({ violations, severityLevels }) => {
  // Get severity styling
  const getSeverityStyle = (severity) => {
    const level = severityLevels.find((s) => s.level === severity);
    return level || severityLevels[0];
  };

  // Get status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          border: "border-green-200",
        };
      case "In Progress":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-200",
        };
      case "Pending":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          border: "border-yellow-200",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
        };
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Recent Violations
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Latest discipline incidents and their status
          </p>
        </div>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Violation ID
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Student
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Violation Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Severity
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {violations.map((violation) => {
              const severityStyle = getSeverityStyle(violation.severity);
              const statusStyle = getStatusStyle(violation.status);
              return (
                <tr
                  key={violation.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-mono text-sm text-gray-600">
                      {violation.id}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">
                      {violation.studentName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {violation.class} • {violation.studentId}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-700">
                      {violation.violationType}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${severityStyle.badge} ${severityStyle.text}`}
                    >
                      {violation.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">
                      {violation.date}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {violation.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg text-green-600 transition-colors">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4">
        {violations.map((violation) => {
          const severityStyle = getSeverityStyle(violation.severity);
          const statusStyle = getStatusStyle(violation.status);
          return (
            <div
              key={violation.id}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-gray-800">
                    {violation.studentName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {violation.class} • {violation.studentId}
                  </p>
                </div>
                <span className="font-mono text-xs text-gray-500">
                  {violation.id}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Violation:</span>
                  <span className="text-sm font-medium text-gray-800">
                    {violation.violationType}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Date:</span>
                  <span className="text-sm text-gray-800">
                    {violation.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${severityStyle.badge} ${severityStyle.text}`}
                  >
                    {violation.severity}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}
                  >
                    {violation.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 hover:bg-green-50 rounded-lg text-green-600">
                    <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentViolations;
