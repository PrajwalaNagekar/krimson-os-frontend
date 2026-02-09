import React from "react";
import { FileText, Eye, Download } from "lucide-react";

const MoMCard = ({ mom }) => (
  <div className="bg-slate-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white transition-all">
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-800">
            {mom.meeting}
          </h4>
          <p className="text-[10px] sm:text-xs text-slate-500">{mom.date}</p>
        </div>
      </div>
      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold">
        Recorded
      </span>
    </div>
    <p className="text-xs sm:text-sm text-slate-600 mb-2 line-clamp-2">
      {mom.summary}
    </p>
    <div className="flex gap-2">
      <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-bold text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all">
        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        View
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        Download
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
    </div>
  </div>
);

export default MoMCard;
