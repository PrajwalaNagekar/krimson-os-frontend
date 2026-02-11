import React from "react";
import {
  Package,
  DollarSign,
  AlertTriangle,
  Wrench,
  Calendar,
  TrendingUp,
} from "lucide-react";

const InfrastructureStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Package size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.totalAssets}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Assets
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <DollarSign size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.totalValue}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Value
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
            <AlertTriangle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.lowStockItems}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Low Stock
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
            <Wrench size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.maintenanceDue}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Maintenance Due
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
            <Calendar size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.activeReservations}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Reservations
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <TrendingUp size={16} />
          </div>
        </div>
        <p className="text-lg font-bold text-green-800">
          {stats.monthlyMaintenanceCost}
        </p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          Monthly Cost
        </p>
      </div>
    </div>
  );
};

export default InfrastructureStats;
