import React from "react";
import { BookOpen, Clock, Bell } from "lucide-react";

const HomeworkReminders = ({ homeworkList }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <BookOpen className="text-purple-500" size={20} /> Homework Reminders
      </h3>

      <div className="space-y-3">
        {homeworkList.map((hw) => {
          const priorityColors = {
            high: "border-red-200 bg-red-50/50",
            medium: "border-orange-200 bg-orange-50/50",
            low: "border-blue-200 bg-blue-50/50",
          };

          const priorityBadge = {
            high: "bg-red-100 text-red-700",
            medium: "bg-orange-100 text-orange-700",
            low: "bg-blue-100 text-blue-700",
          };

          const statusBadge = {
            pending: "bg-slate-100 text-slate-700",
            "in-progress": "bg-cyan-100 text-cyan-700",
          };

          return (
            <div
              key={hw.id}
              className={`p-4 rounded-2xl border transition-all hover:shadow-md ${
                priorityColors[hw.priority]
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-800">
                      {hw.title}
                    </h4>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        statusBadge[hw.status]
                      }`}
                    >
                      {hw.status.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="font-semibold">{hw.subject}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {hw.dueTime}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span>~{hw.estimatedTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <span
                    className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${
                      priorityBadge[hw.priority]
                    }`}
                  >
                    {hw.priority}
                  </span>
                  <Bell size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeworkReminders;
