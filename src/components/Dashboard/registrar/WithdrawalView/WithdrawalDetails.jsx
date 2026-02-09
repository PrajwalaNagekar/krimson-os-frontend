import React from "react";
import {
  User,
  Phone,
  Mail,
  CheckSquare,
  FileCheck,
  CheckCircle,
  PenTool,
  Download,
  Eye,
} from "lucide-react";
import { getStatusColor, getClearanceSteps } from "./utils";

const WithdrawalDetails = ({ request }) => {
  return (
    <div className="mt-6 pt-6 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Student & Guardian Information */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Student & Guardian Details
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1">
                  Request ID
                </p>
                <p className="text-sm text-slate-700 font-bold font-mono">
                  {request.id}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1">
                  Reason
                </p>
                <p className="text-sm text-slate-700 font-bold">
                  {request.reason}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1">
                  Enrollment Date
                </p>
                <p className="text-sm text-slate-700 font-bold">
                  {request.enrollmentDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-1">
                  Withdrawal Date
                </p>
                <p className="text-sm text-slate-700 font-bold">
                  {request.withdrawalDate}
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200">
              <p className="text-xs text-slate-500 font-semibold mb-3">
                Guardian Contact
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700 font-semibold">
                    {request.guardianName}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700">
                    {request.guardianPhone}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700">
                    {request.guardianEmail}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clearance Workflow Status */}
        <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-2xl p-6 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-pink-600" />
            Clearance Workflow
          </h4>
          <div className="space-y-3">
            {getClearanceSteps().map((step, idx) => {
              const clearance = request.clearance[step.key];
              const stepColors = getStatusColor(clearance.status);
              const StepIcon = step.icon;
              const StepStatusIcon = stepColors.icon;

              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200"
                >
                  <div className={`p-2 rounded-lg bg-${step.color}-100`}>
                    <StepIcon className={`w-5 h-5 text-${step.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-slate-800 text-sm">
                        {step.label}
                      </h5>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${stepColors.bg} ${stepColors.text} text-xs font-bold`}
                      >
                        <StepStatusIcon className="w-3 h-3" />
                        {clearance.status}
                      </span>
                    </div>
                    {clearance.clearedBy && (
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold">Cleared by:</span>{" "}
                        {clearance.clearedBy}
                        <span className="mx-1">•</span>
                        {clearance.date}
                      </div>
                    )}
                    {!clearance.clearedBy && clearance.status === "pending" && (
                      <button className="relative group/clear mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        Mark as Cleared
                        <span className="absolute -top-8 left-0 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/clear:opacity-100 transition-opacity pointer-events-none z-10">
                          get in app
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* TC Generation Card */}
      {(request.status === "ready-tc" || request.tcGenerated) && (
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-purple-200">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                  Transfer Certificate
                  {request.tcGenerated && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-bold">
                      <CheckCircle className="w-3 h-3" />
                      Generated
                    </span>
                  )}
                </h4>
                {request.tcGenerated ? (
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>
                      Generated on:{" "}
                      <span className="font-bold">
                        {request.tcGeneratedDate}
                      </span>
                    </p>
                    <p className="flex items-center gap-1">
                      <PenTool className="w-3 h-3" />
                      Digital signature applied
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">
                    All clearances approved. Ready to generate TC with
                    auto-filled student details and digital signature.
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              {!request.tcGenerated && (
                <button className="relative group/gentc flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                  <FileCheck className="w-4 h-4" />
                  Generate TC
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/gentc:opacity-100 transition-opacity pointer-events-none z-10">
                    get in app
                  </span>
                </button>
              )}
              {request.tcGenerated && (
                <>
                  <button className="relative group/dl flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all">
                    <Download className="w-4 h-4" />
                    Download PDF
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/dl:opacity-100 transition-opacity pointer-events-none z-10">
                      get in app
                    </span>
                  </button>
                  <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                    <Eye className="w-4 h-4 text-slate-600" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawalDetails;
