import React from "react";
import { Lightbulb, CheckCircle, AlertCircle } from "lucide-react";

const AIPreparationChecklist = ({ checklist }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Lightbulb className="text-amber-500" size={20} /> AI Preparation
          Checklist
        </h3>
        <span className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700 rounded-full font-bold">
          AI Powered
        </span>
      </div>

      <div className="space-y-3">
        {checklist.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-2xl border transition-all hover:shadow-md ${
              item.completed
                ? "bg-green-50/50 border-green-200"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex-shrink-0 ${
                  item.completed ? "text-green-500" : "text-slate-400"
                }`}
              >
                {item.completed ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h4
                    className={`text-sm font-bold ${
                      item.completed
                        ? "text-green-700 line-through"
                        : "text-slate-800"
                    }`}
                  >
                    {item.task}
                  </h4>
                  <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-bold ml-2">
                    {item.subject}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  <span className="font-semibold">{item.timeSlot}</span> ·{" "}
                  {item.aiReason}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIPreparationChecklist;
