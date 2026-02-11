import React from "react";
import {
  XCircle,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  School,
  DollarSign,
  Award,
  CheckSquare,
  X,
  Download,
  Upload,
  Clock,
} from "lucide-react";

const ApplicationModal = ({ application, onClose }) => {
  if (!application) return null;

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
              {application.studentId}
            </p>
          </div>
          <button
            onClick={onClose}
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
                <p className="font-bold text-slate-800">{application.name}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Date of Birth</p>
                <p className="font-bold text-slate-800">
                  {application.dateOfBirth}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Gender</p>
                <p className="font-bold text-slate-800">{application.gender}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Grade Applying For
                </p>
                <p className="font-bold text-slate-800">
                  Grade {application.grade}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-500 mb-1">Previous School</p>
                <p className="font-bold text-slate-800">
                  {application.previousSchool}
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
                    {application.parentName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 mb-1">Email</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {application.parentEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 mb-1">Phone</p>
                  <p className="font-bold text-slate-800 text-sm">
                    {application.parentPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3">
              Document Verification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Object.entries(application.documents).map(([key, status]) => (
                <div
                  key={key}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    status.verified
                      ? "bg-green-50 border-green-200"
                      : status.uploaded
                        ? "bg-amber-50 border-amber-200"
                        : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        status.verified
                          ? "bg-green-200 text-green-700"
                          : status.uploaded
                            ? "bg-amber-200 text-amber-700"
                            : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {status.verified ? (
                        <CheckCircle size={14} />
                      ) : status.uploaded ? (
                        <Upload size={14} />
                      ) : (
                        <XCircle size={14} />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-wide ${
                          status.verified
                            ? "text-green-600"
                            : status.uploaded
                              ? "text-amber-600"
                              : "text-slate-400"
                        }`}
                      >
                        {status.verified
                          ? "Verified"
                          : status.uploaded
                            ? "Pending Review"
                            : "Not Uploaded"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview & Enrollment Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interview Status */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-purple-500" />
                Interview Schedule
              </h3>
              {application.interviewScheduled ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <div>
                      <p className="text-xs text-purple-600 font-bold uppercase">
                        Date & Time
                      </p>
                      <p className="font-bold text-slate-800">
                        {application.interviewDate}
                      </p>
                    </div>
                    {application.interviewCompleted ? (
                      <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-bold">
                        <CheckCircle size={12} />
                        Completed
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-xs font-bold">
                        <Clock size={12} />
                        Scheduled
                      </div>
                    )}
                  </div>
                  <button className="w-full py-2 border-2 border-dashed border-purple-200 text-purple-600 rounded-xl text-xs font-bold hover:bg-purple-50 transition-colors">
                    Reschedule Interview
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="text-slate-400" size={20} />
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-3">
                    No interview scheduled yet
                  </p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-colors">
                    Schedule Now
                  </button>
                </div>
              )}
            </div>

            {/* Fee Status */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <DollarSign size={18} className="text-green-500" />
                Fee Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm font-medium text-slate-600">
                    Application Fee
                  </span>
                  {application.applicationFeePaid ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">
                      <CheckCircle size={12} /> Paid
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md">
                      <XCircle size={12} /> Pending
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm font-medium text-slate-600">
                    Admission Fee
                  </span>
                  {application.admissionFeePaid ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">
                      <CheckCircle size={12} /> Paid
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-md">
                      <Clock size={12} /> Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Admin Actions */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">
              Administrative Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs transition-colors">
                <School size={16} />
                Assign Section
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs transition-colors border border-slate-700">
                <Award size={16} />
                Grant Scholarship
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs transition-colors border border-slate-700">
                <Download size={16} />
                Download PDF
              </button>
              <div className="flex-1"></div>
              <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 rounded-xl font-bold text-xs transition-colors">
                Reject Application
              </button>
              <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded-xl font-bold text-xs transition-colors shadow-lg shadow-green-900/20">
                Approve Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
