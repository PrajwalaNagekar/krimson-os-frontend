import React from "react";
import {
  DollarSign,
  TrendingUp,
  AlertOctagon,
  BarChart2,
  CreditCard,
} from "lucide-react";

const FinanceStats = ({
  totalCollected,
  totalTarget,
  totalOutstanding,
  studentCount,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Total Collected
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              ${(totalCollected / 1000).toFixed(0)}k
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-green-600 font-bold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> +5% vs last year
        </p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Outstanding
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-red-600">
              ${(totalOutstanding / 1000).toFixed(1)}k
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <AlertOctagon className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">across {studentCount} students</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Collection Rate
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {Math.round((totalCollected / totalTarget) * 100)}%
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">
          vs ${(totalTarget / 1000).toFixed(0)}k target
        </p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Cash on Hand
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              $128k
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Available funds</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

export default FinanceStats;
