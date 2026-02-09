import React from "react";
import { Clock, Bell } from "lucide-react";
import ApprovalRequestCard from "./ApprovalRequestCard";

const ApprovalQueue = ({ pendingApprovals }) => {
  return (
    <div className="space-y-6">
      {/* Pending Approvals */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Approval Queue
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {pendingApprovals.length} pending
              </p>
            </div>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
              {pendingApprovals.filter((a) => a.priority === "High").length}{" "}
              High
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
          {pendingApprovals.map((approval, idx) => (
            <ApprovalRequestCard key={idx} {...approval} />
          ))}
        </div>
      </div>

      {/* Auto-Reminder Config */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 border border-purple-100">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-purple-500 rounded-lg">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-purple-900 mb-2">Auto-Reminders</h4>
            <p className="text-xs text-purple-800 mb-3">
              Automated notifications sent to relevant roles upon event creation
              and 3 days before event date.
            </p>
            <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition-colors">
              Configure Settings
              <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalQueue;
