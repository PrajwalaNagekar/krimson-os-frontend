import React, { useState } from "react";
import { User, Calendar, X, Combine, XCircle } from "lucide-react";

/**
 * Custom Modal implementation as per prompt requirements
 */
const ReportAbsenceModal = ({ isOpen, onClose, lessonInfo, classInfo }) => {
  if (!isOpen) return null;

  const [reason, setReason] = useState("Sick Leave");
  const [customReason, setCustomReason] = useState("");
  const [requestAction, setRequestAction] = useState("POSTPONE");
  const [postponeDate, setPostponeDate] = useState("19 Mar 2024 - Period 3");
  const [comments, setComments] = useState("");

  const todayStr = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="w-full max-w-[500px] bg-white rounded-xl shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-[14px] font-black text-slate-800">
            Report Absence - Request Action
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Info Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-700 font-semibold items-center justify-center text-center leading-tight">
            <span>{classInfo.grade}</span>{" "}
            <span className="text-slate-300">|</span>
            <span>{classInfo.subject}</span>{" "}
            <span className="text-slate-300">|</span>
            <span>
              {lessonInfo.day} {todayStr}
            </span>{" "}
            <span className="text-slate-300">|</span>
            <span>
              Period {lessonInfo.period} ({lessonInfo.time})
            </span>{" "}
            <span className="text-slate-300">|</span>
            <span className="text-blue-600">
              Topic: {classInfo.currentTopic}
            </span>
          </div>

          {/* Reason Section */}
          <div className="space-y-3">
            <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-widest">
              Reason for Absence
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Sick Leave",
                "Personal Emergency",
                "Official Duty",
                "Other",
              ].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center w-4 h-4 border border-slate-300 rounded-full group-hover:border-blue-400">
                    {reason === opt && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="reason"
                    className="hidden"
                    checked={reason === opt}
                    onChange={() => setReason(opt)}
                  />
                  <span className="text-[13px] font-medium text-slate-600">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
            {reason === "Other" && (
              <input
                type="text"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Specify reason..."
                className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}
          </div>

          {/* Action Cards */}
          <div className="space-y-3">
            <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-widest">
              Request Coordinator to:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "POSTPONE", label: "POSTPONE", icon: Calendar },
                { id: "SUBSTITUTE", label: "ASSIGN SUBSTITUTE", icon: User },
                { id: "MERGE", label: "MERGE CLASSES", icon: Combine },
                { id: "CANCEL", label: "CANCEL", icon: XCircle },
              ].map((card) => {
                const isSelected = requestAction === card.id;
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setRequestAction(card.id)}
                    className={`flex flex-col items-center justify-center p-4 border rounded-xl gap-2 transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isSelected ? "text-blue-600" : "text-slate-400"
                      }
                    />
                    <span
                      className={`text-[11px] font-black tracking-wider text-center ${isSelected ? "text-blue-700" : "text-slate-600"}`}
                    >
                      {card.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Postpone Context Field */}
            {requestAction === "POSTPONE" && (
              <div className="mt-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100 flex items-center justify-between gap-3">
                <span className="text-[12px] font-bold text-slate-700">
                  Preferred/Suggested Date:
                </span>
                <select
                  value={postponeDate}
                  onChange={(e) => setPostponeDate(e.target.value)}
                  className="px-3 py-1.5 border border-slate-200 rounded-lg text-[13px] text-slate-600 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>19 Mar 2024 - Period 3</option>
                  <option>20 Mar 2024 - Period 1</option>
                  <option>Next Week (Unscheduled)</option>
                </select>
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className="space-y-2">
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Additional comments for coordinator..."
              rows={3}
              className="w-full p-3 border border-slate-200 rounded-xl text-[13px] text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 rounded-b-xl flex flex-col gap-3">
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 rounded-lg text-[12px] font-black tracking-wider transition-colors shadow-sm"
            >
              CANCEL
            </button>
            <button
              onClick={onClose} // In real app, submit form
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 rounded-lg text-[12px] font-black tracking-wider transition-all duration-300 shadow-sm hover:shadow-md"
            >
              SUBMIT REQUEST
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-500 font-semibold tracking-wide">
            Request will be sent to Coordinator Dr. Mehta for approval
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportAbsenceModal;
