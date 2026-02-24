import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Users,
  MapPin,
  Clock,
  User,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

const SubstitutionDetailsCard = ({
  notification,
  actionStatus,
  handleAccept,
  handleDecline,
  showDetails,
  setShowDetails,
}) => {
  const navigate = useNavigate();

  const details = [
    { label: "Class", value: notification?.grade, icon: Users },
    { label: "Subject", value: notification?.subject, icon: BookOpen },
    {
      label: "Period",
      value: `${notification?.period} (${notification?.time})`,
      icon: Clock,
    },
    { label: "Room", value: notification?.room, icon: MapPin },
    {
      label: "Students",
      value: `${notification?.students} Students`,
      icon: Users,
    },
    { label: "Reason", value: notification?.reason, icon: AlertTriangle },
    {
      label: "Orig. Teacher",
      value: notification?.originalTeacher,
      icon: User,
    },
    {
      label: "Assigned By",
      value: `${notification?.assignedBy} (${notification?.assignedByTitle})`,
      icon: User,
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Card Header */}
      <div className="px-6 py-4 bg-orange-50 border-b border-orange-100 flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 bg-orange-100 rounded-xl border border-orange-200">
          <AlertTriangle size={17} className="text-orange-500" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">
            📢 Coordinator Assigned You as Substitute
          </p>
          <p className="text-[13px] font-bold text-slate-800">
            {notification?.grade} · {notification?.subject}
          </p>
        </div>
      </div>

      {/* Detail Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {details.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-white border border-slate-200 rounded-lg shrink-0">
                <Icon size={14} className="text-slate-400" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                  {label}
                </p>
                <p className="text-[13px] font-semibold text-slate-800">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-6 p-3 bg-orange-50 border border-orange-100 rounded-xl">
          <Clock size={14} className="text-orange-500" />
          <span className="text-[12px] font-black uppercase tracking-wider text-orange-700">
            Status:{" "}
          </span>
          <span className="text-[12px] text-orange-600">
            {actionStatus
              ? actionStatus === "accepted"
                ? "✅ Accepted"
                : "❌ Declined"
              : "⏳ Awaiting Your Response"}
          </span>
        </div>

        {/* Action Buttons */}
        {!actionStatus && (
          <div className="flex flex-wrap gap-3">
            <button
              id="btn-accept"
              onClick={handleAccept}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-xl text-[12px] font-black uppercase tracking-wider shadow-md shadow-emerald-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <CheckCircle size={15} /> Accept Substitution
            </button>
            <button
              id="btn-decline"
              onClick={handleDecline}
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-red-50 border border-red-200 text-red-600 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <XCircle size={15} /> Decline
            </button>
            <button
              id="btn-view-details"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-105"
            >
              <FileText size={15} /> View Details
            </button>
          </div>
        )}

        {actionStatus && (
          <button
            onClick={() => navigate("/dashboard/teacher/classes")}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-xl text-[12px] font-black uppercase tracking-wider transition-all"
          >
            <ArrowLeft size={14} /> Back to Class Management
          </button>
        )}
      </div>
    </div>
  );
};

export default SubstitutionDetailsCard;
