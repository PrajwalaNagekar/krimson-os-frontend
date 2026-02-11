import React from "react";
import { Send, CheckCircle, Eye, FileText, Users, Zap } from "lucide-react";

const NotificationStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
            <Send size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">{stats.sentToday}</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Sent Today
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
            <CheckCircle size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">99.7%</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Delivery Rate
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
            <Eye size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">81.4%</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Open Rate
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
            <FileText size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">
          {stats.templateCount}
        </p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Templates
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
            <Users size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-slate-800">1,927</p>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
          Total Recipients
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
            <Zap size={16} />
          </div>
        </div>
        <p className="text-xl font-bold text-green-800">3/3</p>
        <p className="text-xs text-green-600 font-medium uppercase tracking-wide">
          Gateways Active
        </p>
      </div>
    </div>
  );
};

export default NotificationStats;
