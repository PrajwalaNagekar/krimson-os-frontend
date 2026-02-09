import React from "react";
import { Shield } from "lucide-react";

const EscalationWorkflow = ({ reasons, onEscalate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onEscalate) {
      onEscalate();
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border-l-4 border-red-500">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Shield size={20} className="text-red-500" /> Escalation Protocol
      </h3>
      <p className="text-xs text-slate-500 mb-6">
        Use this channel for critical safeguarding concerns requiring Principal
        intervention.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">
            Case Reference
          </label>
          <input
            type="text"
            placeholder="Enter Case ID"
            className="w-full mt-1 bg-slate-50 p-3 rounded-xl text-sm outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">
            Reason for Escalation
          </label>
          <select className="w-full mt-1 bg-slate-50 p-3 rounded-xl text-sm outline-none text-slate-600">
            {reasons?.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors"
        >
          Escalate to Principal
        </button>
      </form>
    </div>
  );
};

export default EscalationWorkflow;
