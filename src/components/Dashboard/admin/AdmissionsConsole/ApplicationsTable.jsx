import React from "react";
import { AlertCircle, Eye } from "lucide-react";

const ApplicationsTable = ({ applications, setSelectedApplication }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Student ID
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Applicant Name
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Lead Source
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Documents
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Stage
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {applications.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-slate-100">
                      <AlertCircle className="text-slate-400" size={32} />
                    </div>
                    <p className="text-lg font-bold text-slate-400">
                      No applications found
                    </p>
                    <p className="text-sm text-slate-400">
                      Try adjusting your filters
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              applications.map((app) => {
                const totalDocs = Object.keys(app.documents).length;
                const verifiedDocs = Object.values(app.documents).filter(
                  (d) => d.verified,
                ).length;
                const uploadedDocs = Object.values(app.documents).filter(
                  (d) => d.uploaded,
                ).length;

                return (
                  <tr
                    key={app.id}
                    className="hover:bg-blue-50/20 transition-colors group"
                  >
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-mono text-xs font-bold text-slate-800">
                          {app.studentId}
                        </span>
                        <span className="text-xs text-slate-400">
                          #{app.id}
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div>
                        <p className="font-bold text-slate-800 text-base">
                          {app.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {app.parentName}
                        </p>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        Grade {app.grade}
                      </span>
                    </td>
                    <td className="p-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                          app.leadSource === "Web Form"
                            ? "bg-blue-50 text-blue-600 border-blue-200"
                            : app.leadSource === "Referral"
                              ? "bg-purple-50 text-purple-600 border-purple-200"
                              : "bg-pink-50 text-pink-600 border-pink-200"
                        }`}
                      >
                        {app.leadSource}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-slate-700">
                          {verifiedDocs}/{totalDocs} Verified
                        </span>
                        <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-green-500 h-full rounded-full"
                            style={{
                              width: `${(verifiedDocs / totalDocs) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          {uploadedDocs} uploaded
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                          app.stage === "Enrolled"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : app.stage === "Verified"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            app.stage === "Enrolled"
                              ? "bg-green-500"
                              : app.stage === "Verified"
                                ? "bg-blue-500"
                                : "bg-amber-500"
                          }`}
                        />
                        {app.stage}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      <button
                        onClick={() => setSelectedApplication(app)}
                        className="flex flex-col items-center justify-center px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm"
                      >
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>View</span>
                        </div>
                        <span className="text-[10px] text-black font-normal leading-none mt-0.5">
                          click here
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
