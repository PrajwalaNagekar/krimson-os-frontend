import React from "react";
import { QrCode, CheckCircle2, Printer } from "lucide-react";

const AuditAndBulkOptions = ({ auditId, bulkCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6">
        <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
          <QrCode size={32} className="text-slate-300" />
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
            Authenticity ID
          </h5>
          <p className="text-lg font-bold text-slate-800 tracking-tight">
            {auditId}
          </p>
          <p className="text-[9px] text-emerald-600 font-bold uppercase mt-1 flex items-center gap-1">
            <CheckCircle2 size={10} /> Verified & Locked
          </p>
        </div>
      </div>
      <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-xl flex items-center justify-between text-white">
        <div>
          <h5 className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] mb-1">
            Bulk Generation
          </h5>
          <p className="text-base font-bold text-white">Select Whole Class</p>
          <p className="text-[10px] text-white/50 font-bold uppercase mt-1">
            {bulkCount} Students Matching Criteria
          </p>
        </div>
        <button className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all">
          <Printer size={24} />
        </button>
      </div>
    </div>
  );
};

export default AuditAndBulkOptions;
