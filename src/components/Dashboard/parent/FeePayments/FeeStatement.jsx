import React from "react";
import { DollarSign, Calendar, FileText, AlertCircle } from "lucide-react";
import { getCategoryColor } from "../../../../data/parentData";

const FeeStatement = ({ feeStatus }) => {
  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg">
          <FileText size={20} className="text-white" />
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-lg md:text-xl">
            Fee Statement
          </h2>
          <p className="text-xs text-slate-500">
            Transparent view of financial obligations
          </p>
        </div>
      </div>

      {/* Outstanding Summary */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 md:p-5 mb-4 border border-cyan-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
              <DollarSign size={14} />
              Total Outstanding Balance
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              SGD {feeStatus.totalOutstanding.toFixed(2)}
            </h3>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg text-center border border-cyan-300">
            <p className="text-xl font-bold text-cyan-600">
              {feeStatus.daysLeft}
            </p>
            <p className="text-[10px] text-slate-600 font-medium">days left</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Calendar size={14} />
          <span>
            Due Date:{" "}
            {new Date(feeStatus.dueDate).toLocaleDateString("en-SG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Upcoming Payments Breakdown */}
      <div>
        <h3 className="font-bold text-slate-800 text-sm md:text-base mb-3 flex items-center gap-2">
          <Calendar size={18} className="text-cyan-500" />
          Upcoming Payments Breakdown
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {feeStatus.upcomingDues.map((due) => (
            <div
              key={due.id}
              className="bg-gradient-to-br from-slate-50 to-white p-3 md:p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-7 h-7 rounded-lg bg-gradient-to-br ${getCategoryColor(due.category)} flex items-center justify-center`}
                >
                  <FileText size={14} className="text-white" />
                </div>
                <span className="text-xs font-bold text-slate-600">
                  {due.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                {due.description}
              </p>
              <p className="text-base md:text-lg font-bold text-slate-800">
                SGD {due.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Late Fee Warning */}
      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
        <AlertCircle
          size={16}
          className="text-amber-600 flex-shrink-0 mt-0.5"
        />
        <p className="text-xs text-slate-700">
          <span className="font-bold">Note:</span> Late fees apply after the due
          date. Please ensure timely payment to avoid additional charges.
        </p>
      </div>
    </div>
  );
};

export default FeeStatement;
