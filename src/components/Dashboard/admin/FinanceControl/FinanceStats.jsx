import React from "react";
import {
  Wallet,
  CreditCard,
  TrendingUp,
  Activity,
  CheckCircle,
  Clock,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";

const FinanceStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
            <Wallet size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.totalCollected}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Collected
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg">
            <CreditCard size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.pendingDues}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Pending Dues
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg">
            <TrendingUp size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.todayCollection}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Today's Collection
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg">
            <Activity size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.activeGateways}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Active Gateways
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.successRate}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Success Rate
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg">
            <Clock size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.avgProcessingTime}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Avg Processing
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
            <ArrowUpRight size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.monthlyGrowth}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Monthly Growth
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg">
            <AlertCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.refundsPending}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Refunds Pending
        </p>
      </div>
    </div>
  );
};

export default FinanceStats;
