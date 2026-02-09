import React from "react";
import { Bell, Clock, Info } from "lucide-react";

const PaymentReminders = ({ feeStatus }) => {
  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
          <Bell size={16} className="text-white" />
        </div>
        <h3 className="font-bold text-slate-800 text-sm md:text-base">
          Payment Reminders
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-xl border border-red-200">
          <Clock size={18} className="text-red-500 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-red-700">
              Due in {feeStatus.daysLeft} days
            </p>
            <p className="text-xs text-slate-600 truncate">
              {new Date(feeStatus.dueDate).toLocaleDateString("en-SG", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 rounded-xl border border-cyan-200">
          <div className="flex items-center gap-2 mb-2">
            <Info size={14} className="text-cyan-600" />
            <p className="text-xs font-bold text-cyan-700">
              Auto-reminder active
            </p>
          </div>
          <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
            You'll receive notifications 7, 3, and 1 day before due date.
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-slate-100 p-2 rounded-lg">
          <p className="font-medium">Late fees apply after due date</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentReminders;
