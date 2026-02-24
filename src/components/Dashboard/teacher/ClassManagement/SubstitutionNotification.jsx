import React from "react";
import { AlertTriangle, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SubstitutionNotification = ({ notification }) => {
  const navigate = useNavigate();
  if (!notification || notification.status === "declined") return null;
  const isAwaiting = notification.status === "awaiting";

  return (
    <div className="border border-orange-200 bg-orange-50 rounded-2xl p-4 sm:p-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg border border-orange-200 shrink-0">
          <AlertTriangle size={16} className="text-orange-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">
            ⚠ Substitution Notification
          </p>
          <p className="text-[11px] text-orange-500 font-medium truncate">
            From {notification.assignedBy} ({notification.assignedByTitle})
          </p>
        </div>
        {isAwaiting && (
          <span className="flex items-center gap-1 px-2.5 py-1 bg-orange-100 border border-orange-200 rounded-full text-[10px] font-black uppercase tracking-wider text-orange-600 shrink-0">
            <Clock size={9} /> Awaiting
          </span>
        )}
      </div>

      {/* Detail grid — 2 cols on mobile, 3 on md */}
      <div className="bg-white border border-orange-100 rounded-xl p-3 sm:p-4 mb-4 shadow-xs">
        <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-3">
          📢 Coordinator Assigned You as Substitute
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
          {[
            { label: "Class", value: notification.grade },
            { label: "Subject", value: notification.subject },
            {
              label: "Period",
              value: `${notification.period} (${notification.time})`,
            },
            { label: "Room", value: notification.room },
            { label: "Students", value: `${notification.students} Students` },
            { label: "Reason", value: notification.reason },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">
                {label}
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-800 font-semibold">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action */}
      {isAwaiting && (
        <button
          id="btn-give-response"
          onClick={() =>
            navigate("/dashboard/teacher/classes/substitution-response")
          }
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl text-[11px] sm:text-[12px] font-black uppercase tracking-wider shadow-md shadow-orange-200 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Give Response <ArrowRight size={14} />
        </button>
      )}
      {notification.status === "accepted" && (
        <div className="flex items-center gap-2 text-emerald-600 text-[12px] font-black uppercase tracking-wider">
          ✅ You have accepted this substitution
        </div>
      )}
    </div>
  );
};

export default SubstitutionNotification;
