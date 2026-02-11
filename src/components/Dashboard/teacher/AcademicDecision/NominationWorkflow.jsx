import React from "react";
import { CheckCircle2 } from "lucide-react";

const NominationWorkflow = ({ workflow }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl">
      <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-8">
        Nomination Workflow
      </h4>
      <div className="space-y-10 relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-800"></div>
        {workflow.map((step) => (
          <div key={step.step} className="relative flex gap-6 group">
            <div
              className={`relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all ${
                step.status === "Completed"
                  ? "bg-blue-500 border-blue-500"
                  : step.status === "Pending"
                    ? "bg-slate-900 border-blue-400 text-blue-400"
                    : "bg-slate-900 border-slate-700 text-slate-700"
              }`}
            >
              {step.status === "Completed" ? (
                <CheckCircle2 size={12} className="text-white" />
              ) : (
                step.step
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-xs font-bold uppercase tracking-widest ${step.status === "Locked" ? "text-slate-600" : "text-white"}`}
              >
                {step.label}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase">
                  {step.role}
                </span>
                {step.date && (
                  <span className="text-[10px] text-blue-400/60 font-medium">
                    {step.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NominationWorkflow;
