import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const ActionBanner = ({ actionStatus, notification }) => {
  if (!actionStatus) return null;

  if (actionStatus === "accepted") {
    return (
      <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 shadow-sm">
        <CheckCircle size={20} className="shrink-0 text-emerald-500" />
        <div>
          <p className="font-black text-[14px]">Substitution Accepted</p>
          <p className="text-[12px] text-emerald-600">
            You have accepted the substitution for {notification?.grade} —{" "}
            {notification?.subject}. The coordinator has been notified.
          </p>
        </div>
      </div>
    );
  }

  if (actionStatus === "declined") {
    return (
      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 shadow-sm">
        <XCircle size={20} className="shrink-0 text-red-500" />
        <div>
          <p className="font-black text-[14px]">Substitution Declined</p>
          <p className="text-[12px] text-red-600">
            You have declined. The coordinator will assign another teacher.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ActionBanner;
