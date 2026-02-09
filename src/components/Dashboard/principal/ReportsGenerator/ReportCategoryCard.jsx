import React from "react";
import { FileText, FileSpreadsheet } from "lucide-react";

const ReportCategoryCard = ({
  title,
  description,
  icon: Icon,
  gradient,
  stats,
  onGenerate,
}) => (
  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div className="flex gap-1 sm:gap-2">
        <button
          className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors group"
          title="Download PDF"
        >
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-red-600" />
        </button>
        <button
          className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors group"
          title="Download Excel"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-green-600" />
        </button>
      </div>
    </div>

    <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-slate-600 mb-4">{description}</p>

    {stats && (
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-50 p-2 sm:p-3 rounded-lg">
            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">
              {stat.label}
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-800">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    )}

    <button
      onClick={onGenerate}
      className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:from-cyan-600 hover:via-blue-600 hover:to-pink-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg"
    >
      Generate Report
      <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">
        (get in app)
      </span>
    </button>
  </div>
);

export default ReportCategoryCard;
