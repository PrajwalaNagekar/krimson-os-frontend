import React from "react";

const LeaveManagement = ({ leaveRequests, pendingApprovals }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-1">
            Leave Management
          </h2>
          <p className="text-sm text-slate-500">
            Review and approve leave requests
          </p>
        </div>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold border border-amber-200">
          {pendingApprovals} Pending
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Days
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Reason
              </th>
              <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leaveRequests.map((request) => (
              <tr
                key={request.id}
                className="hover:bg-blue-50/20 transition-colors"
              >
                <td className="px-4 py-4">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">
                      {request.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {request.employeeId}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold border border-blue-100">
                    {request.type}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="text-xs font-semibold text-slate-600">
                    <p>{request.from}</p>
                    <p className="text-slate-400">to {request.to}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="font-bold text-slate-700">
                    {request.days} days
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-slate-600 max-w-xs truncate">
                    {request.reason}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      request.status === "Approved"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-amber-100 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  {request.status === "Pending" ? (
                    <div className="flex gap-2 justify-end">
                      <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all flex flex-col items-center">
                        <span>Approve</span>
                      </button>
                      <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition-all flex flex-col items-center">
                        <span>Reject</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400">
                      No action needed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
