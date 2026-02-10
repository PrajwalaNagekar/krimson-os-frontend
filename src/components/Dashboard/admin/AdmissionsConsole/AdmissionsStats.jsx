import React from "react";
import { FileText, Users, TrendingUp, CheckSquare } from "lucide-react";

const AdmissionsStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Applications */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20">
            <FileText className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Total
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.total}
        </h3>
        <p className="text-sm font-semibold text-slate-500">
          Applications Received
        </p>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-blue-600 font-bold">
            {stats.applied} Applied
          </span>
          <span className="text-green-600 font-bold">
            {stats.enrolled} Enrolled
          </span>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100">
        </div>
      </div>

      {/* Lead Sources */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20">
            <Users className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Sources
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Web Forms</span>
            <span className="font-bold text-blue-600">
              {stats.webFormLeads}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Referrals</span>
            <span className="font-bold text-purple-600">
              {stats.referralLeads}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Walk-ins</span>
            <span className="font-bold text-pink-600">{stats.walkInLeads}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100">
        </div>
      </div>

      {/* Conversion Rate */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
            <TrendingUp className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Rate
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.conversionRate}%
        </h3>
        <p className="text-sm font-semibold text-slate-500">
          Conversion to Enrolled
        </p>
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
              style={{ width: `${stats.conversionRate}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100">
        </div>
      </div>

      {/* Documents Verified */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20">
            <CheckSquare className="text-white" size={24} />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Docs
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
          {stats.documentsVerified}
        </h3>
        <p className="text-sm font-semibold text-slate-500">Fully Verified</p>
        <div className="mt-3 pt-3 border-t border-slate-100">
          <span className="text-xs font-medium text-slate-400">
            Out of {stats.total} applications
          </span>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100">
        </div>
      </div>
    </div>
  );
};

export default AdmissionsStats;
