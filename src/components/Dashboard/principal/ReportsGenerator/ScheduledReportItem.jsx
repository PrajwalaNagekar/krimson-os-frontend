import React from "react";
import { Clock, Settings } from "lucide-react";

const ScheduledReportItem = ({
  title,
  frequency,
  nextRun,
  recipients,
  status,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-slate-200 rounded-lg sm:rounded-xl hover:border-blue-300 transition-all bg-white gap-3 sm:gap-0">
    <div className="flex items-start gap-3 flex-1">
      <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm sm:text-base text-slate-800">
          {title}
        </h4>
        <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
          {frequency} • Next: {nextRun}
        </p>
        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
          To: {recipients}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span
        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
          status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-slate-100 text-slate-600"
        }`}
      >
        {status}
      </span>
      <button className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors">
        <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
      </button>
    </div>
  </div>
);

export default ScheduledReportItem;
