import React from "react";
import {
  CheckCircle,
  FileText,
  AlertTriangle,
  Clock,
  FileQuestion,
  Calendar,
  Eye,
  CheckSquare,
} from "lucide-react";

const AdmissionsTable = ({ applicants }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          border: "border-green-300",
        };
      case "Verification":
        return {
          bg: "bg-orange-100",
          text: "text-orange-700",
          border: "border-orange-300",
        };
      case "Pending":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          border: "border-yellow-300",
        };
      case "Inquiry":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-300",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-300",
        };
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Applicant Name
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Grade
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden md:table-cell">
                Nationality
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden lg:table-cell">
                Documents
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden xl:table-cell">
                Date
              </th>
              <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {applicants.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <FileQuestion className="w-16 h-16 mb-4 opacity-50" />
                    <p className="text-lg font-semibold">No applicants found</p>
                    <p className="text-sm">
                      Try adjusting your search or filters
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              applicants.map((applicant, index) => {
                const statusColors = getStatusColor(applicant.status);
                return (
                  <tr
                    key={index}
                    className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors group"
                  >
                    {/* ID */}
                    <td className="px-4 lg:px-6 py-4">
                      <span className="font-mono text-xs lg:text-sm font-bold text-slate-500">
                        {applicant.id}
                      </span>
                    </td>

                    {/* Name */}
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {applicant.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm lg:text-base">
                            {applicant.name}
                          </p>
                          <p className="text-xs text-slate-500 md:hidden">
                            {applicant.nationality}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Grade */}
                    <td className="px-4 lg:px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs lg:text-sm font-semibold">
                        {applicant.grade}
                      </span>
                    </td>

                    {/* Nationality */}
                    <td className="px-4 lg:px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-slate-600 font-medium">
                        {applicant.nationality}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 lg:px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs lg:text-sm font-bold`}
                      >
                        {applicant.status === "Completed" && (
                          <CheckCircle className="w-3.5 h-3.5" />
                        )}
                        {applicant.status === "Verification" && (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                        {applicant.status === "Pending" && (
                          <AlertTriangle className="w-3.5 h-3.5" />
                        )}
                        {applicant.status === "Inquiry" && (
                          <FileText className="w-3.5 h-3.5" />
                        )}
                        {applicant.status}
                      </span>
                    </td>

                    {/* Documents */}
                    <td className="px-4 lg:px-6 py-4 hidden lg:table-cell">
                      <span className="text-xs lg:text-sm text-slate-600">
                        {applicant.documents}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 lg:px-6 py-4 hidden xl:table-cell">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{applicant.date}</span>
                      </div>
                    </td>

                    {/* Quick Actions */}
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* View Details */}
                        <button
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all hover:scale-110 group/btn"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Approve - Show "get in app" on hover */}
                        <button
                          className="relative p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all hover:scale-110 group/approve"
                          title="Approve"
                        >
                          <CheckSquare className="w-4 h-4" />
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/approve:opacity-100 transition-opacity pointer-events-none">
                            get in app
                          </span>
                        </button>

                        {/* Hold */}
                        <button
                          className="relative p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110 group/hold"
                          title="Hold"
                        >
                          <Clock className="w-4 h-4" />
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/hold:opacity-100 transition-opacity pointer-events-none">
                            get in app
                          </span>
                        </button>

                        {/* Request Documents */}
                        <button
                          className="relative p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all hover:scale-110 group/docs"
                          title="Request Documents"
                        >
                          <FileText className="w-4 h-4" />
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/docs:opacity-100 transition-opacity pointer-events-none">
                            get in app
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination Info */}
      {applicants.length > 0 && (
        <div className="bg-slate-50 px-4 lg:px-6 py-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-600">
              Displaying{" "}
              <span className="font-bold text-slate-800">
                {applicants.length}
              </span>{" "}
              applicant{applicants.length !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-all">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-all">
                  3
                </button>
              </div>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionsTable;
