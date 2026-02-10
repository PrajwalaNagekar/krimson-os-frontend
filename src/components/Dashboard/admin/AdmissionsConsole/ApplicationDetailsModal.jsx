import React from "react";
import {
  XCircle,
  Users,
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  CheckSquare,
  Clock,
  DollarSign,
  Award,
  Calendar,
  School,
  Upload,
} from "lucide-react";

const ApplicationDetailsModal = ({
  selectedApplication,
  setSelectedApplication,
}) => {
  if (!selectedApplication) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header - Full Width */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              Application Details
            </h2>
            <p className="text-white/80 text-sm font-mono">
              {selectedApplication.studentId}
            </p>
          </div>
          <button
            onClick={() => setSelectedApplication(null)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <XCircle className="text-white" size={24} />
          </button>
        </div>

        {/* Modal Body - Scrollable with Colored Scrollbar */}
        <div
          className="p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar-cyan"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#06b6d4 #e0f2fe",
          }}
        >
          {/* Student Info */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
              Student Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">Full Name</p>
                <p className="font-bold text-slate-800">
                  {selectedApplication.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Date of Birth</p>
                <p className="font-bold text-slate-800">
                  {selectedApplication.dateOfBirth}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Gender</p>
                <p className="font-bold text-slate-800">
                  {selectedApplication.gender}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Grade Applying For
                </p>
                <p className="font-bold text-slate-800">
                  Grade {selectedApplication.grade}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-500 mb-1">Previous School</p>
                <p className="font-bold text-slate-800">
                  {selectedApplication.previousSchool}
                </p>
              </div>
            </div>
          </div>

          {/* Parent Info */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3 flex items-center gap-2">
              <Users size={14} />
              Parent/Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 mb-1">Name</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {selectedApplication.parentName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 mb-1">Email</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {selectedApplication.parentEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 mb-1">Phone</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {selectedApplication.parentPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Status */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
              Application Workflow Status
            </h3>
            <div className="flex items-center gap-2">
              <div
                className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === "Applied" ? "bg-amber-500 text-white shadow-lg" : "bg-white text-slate-600"}`}
              >
                <p className="text-xs font-bold">Applied</p>
              </div>
              <ArrowRight className="text-slate-400" size={20} />
              <div
                className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === "Verified" ? "bg-blue-500 text-white shadow-lg" : "bg-white text-slate-600"}`}
              >
                <p className="text-xs font-bold">Verified</p>
              </div>
              <ArrowRight className="text-slate-400" size={20} />
              <div
                className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === "Enrolled" ? "bg-green-500 text-white shadow-lg" : "bg-white text-slate-600"}`}
              >
                <p className="text-xs font-bold">Enrolled</p>
              </div>
            </div>
          </div>

          {/* Document Verification Checklist */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
              Document Verification Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(selectedApplication.documents).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className={`p-3 rounded-xl border ${value.verified ? "bg-green-50 border-green-200" : value.uploaded ? "bg-blue-50 border-blue-200" : "bg-slate-50 border-slate-200"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {value.verified ? (
                          <CheckCircle size={18} className="text-green-600" />
                        ) : value.uploaded ? (
                          <Clock size={18} className="text-blue-600" />
                        ) : (
                          <XCircle size={18} className="text-slate-400" />
                        )}
                        <span className="text-sm font-bold text-slate-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          value.verified
                            ? "bg-green-600 text-white"
                            : value.uploaded
                              ? "bg-blue-600 text-white"
                              : "bg-slate-300 text-slate-600"
                        }`}
                      >
                        {value.verified
                          ? "Verified"
                          : value.uploaded
                            ? "Pending"
                            : "Missing"}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Fees */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={16} className="text-purple-600" />
                <p className="text-xs font-bold text-purple-700">
                  Application Fee
                </p>
              </div>
              <p className="text-2xl font-extrabold text-slate-800">
                ₹{selectedApplication.applicationFee}
              </p>
              <span
                className={`inline-flex items-center gap-1 text-xs font-bold mt-2 ${selectedApplication.applicationFeePaid ? "text-green-600" : "text-red-600"}`}
              >
                {selectedApplication.applicationFeePaid ? (
                  <CheckCircle size={14} />
                ) : (
                  <XCircle size={14} />
                )}
                {selectedApplication.applicationFeePaid ? "Paid" : "Pending"}
              </span>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-pink-600" />
                <p className="text-xs font-bold text-pink-700">Admission Fee</p>
              </div>
              <p className="text-2xl font-extrabold text-slate-800">
                ₹{selectedApplication.admissionFee}
              </p>
              <span
                className={`inline-flex items-center gap-1 text-xs font-bold mt-2 ${selectedApplication.admissionFeePaid ? "text-green-600" : "text-red-600"}`}
              >
                {selectedApplication.admissionFeePaid ? (
                  <CheckCircle size={14} />
                ) : (
                  <XCircle size={14} />
                )}
                {selectedApplication.admissionFeePaid ? "Paid" : "Pending"}
              </span>
            </div>
          </div>

          {/* Interview */}
          {selectedApplication.interviewScheduled && (
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={16} className="text-blue-600" />
                <p className="text-xs font-bold text-blue-700">
                  Interview Schedule
                </p>
              </div>
              <p className="font-bold text-slate-800">
                {selectedApplication.interviewDate}
              </p>
              {selectedApplication.interviewCompleted && (
                <span className="inline-flex items-center gap-1 text-xs font-bold mt-2 text-green-600">
                  <CheckCircle size={14} />
                  Interview Completed
                </span>
              )}
            </div>
          )}

          {/* Enrollment Confirmation */}
          {selectedApplication.enrollmentConfirmed && (
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <School size={16} className="text-green-600" />
                <p className="text-xs font-bold text-green-700">
                  Enrollment Confirmation
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-xs text-green-600 mb-1">Enrollment Date</p>
                  <p className="font-bold text-slate-800">
                    {selectedApplication.enrollmentDate}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-green-600 mb-1">Class Assigned</p>
                  <p className="font-bold text-slate-800">
                    {selectedApplication.classAssigned}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Remarks */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Internal Remarks
            </h3>
            <p className="text-sm text-slate-600">
              {selectedApplication.remarks}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
              <div className="flex items-center gap-2">
                <Upload size={18} />
                <span>Upload Document</span>
              </div>
            </button>
            <button className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
              <div className="flex items-center gap-2">
                <CheckSquare size={18} />
                <span>Verify Documents</span>
              </div>
            </button>
            {selectedApplication.stage !== "Enrolled" && (
              <button className="flex-1 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                <div className="flex items-center gap-2">
                  <Award size={18} />
                  <span>Confirm Enrollment</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;
