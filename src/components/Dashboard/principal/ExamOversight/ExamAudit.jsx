import React from "react";
import { Shield } from "lucide-react";
import AuditTrailEntry from "./AuditTrailEntry";

const ExamAudit = ({ auditTrail }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan-500" />
          Audit Trail
        </h3>
        <div className="flex gap-2">
          <select className="px-3 py-2 border-2 border-slate-200 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none">
            <option>All Actions</option>
            <option>Approvals Only</option>
            <option>Rejections Only</option>
          </select>
          <button className="px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-bold transition-colors">
            Filter
          </button>
        </div>
      </div>
      <div className="bg-slate-50 rounded-xl p-4 space-y-2">
        {auditTrail.map((entry, idx) => (
          <AuditTrailEntry key={idx} {...entry} />
        ))}
      </div>
      <button className="w-full mt-4 px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-bold transition-colors">
        Load More Entries
        <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
      </button>
    </div>
  );
};

export default ExamAudit;
