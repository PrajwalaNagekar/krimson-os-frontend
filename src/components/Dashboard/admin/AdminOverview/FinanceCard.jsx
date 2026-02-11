import React from "react";
import { DollarSign, AlertTriangle } from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const FinanceCard = () => {
  const { finance } = ADMIN_DATA.ADMIN_OVERVIEW_DATA;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Finance</h2>
        <div className="p-2 bg-green-50 rounded-full text-green-600">
          <DollarSign size={20} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-green-500/20">
          <p className="text-emerald-100 text-sm font-medium mb-1">
            Today's Collection
          </p>
          <h3 className="text-3xl font-bold tracking-tight">
            ₹{finance.todayCollection.toLocaleString()}
          </h3>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors">
          <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-slate-500 text-sm font-medium mb-1 relative z-10">
            Total Due Amount
          </p>
          <h3 className="text-2xl font-bold text-slate-800 relative z-10">
            ₹{finance.totalDue.toLocaleString()}
          </h3>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-orange-500 relative z-10">
            <AlertTriangle size={12} />
            Requires Attention
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
