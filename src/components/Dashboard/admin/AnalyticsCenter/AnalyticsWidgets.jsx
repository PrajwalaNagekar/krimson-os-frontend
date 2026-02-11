import React from "react";
import {
  TrendingUp,
  DollarSign,
  Activity,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const AnalyticsWidgets = ({ analytics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Widget 1: Admissions Conversion Rate */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
            <TrendingUp size={24} strokeWidth={2.5} />
          </div>
          <span
            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
              analytics.admissionsConversion.trend === "up"
                ? "text-green-600 bg-green-50"
                : "text-red-600 bg-red-50"
            }`}
          >
            <ArrowUpRight size={12} />+
            {(
              analytics.admissionsConversion.currentRate -
              analytics.admissionsConversion.previousRate
            ).toFixed(1)}
            %
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {analytics.admissionsConversion.currentRate}%
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Admissions Conv. Rate
          </p>
          <p className="text-xs text-slate-400 mt-2">
            {analytics.admissionsConversion.enrolled} enrolled from{" "}
            {analytics.admissionsConversion.inquiries} inquiries
          </p>
        </div>
      </div>

      {/* Widget 2: Fee Collection Graph */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
            <DollarSign size={24} strokeWidth={2.5} />
          </div>
          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <ArrowUpRight size={12} />
            +8.2%
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {analytics.feeCollection.collectionRate}%
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Fee Collection Rate
          </p>
          <p className="text-xs text-slate-400 mt-2">
            ₹{(analytics.feeCollection.totalCollected / 1000000).toFixed(1)}M
            collected
          </p>
        </div>
      </div>

      {/* Widget 3: Staff Utilization Ratio */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
            <Activity size={24} strokeWidth={2.5} />
          </div>
          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <ArrowUpRight size={12} />
            +2.1%
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {analytics.staffUtilization.overallRate}%
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Staff Utilization
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Teaching: {analytics.staffUtilization.teaching}% | Admin:{" "}
            {analytics.staffUtilization.administrative}%
          </p>
        </div>
      </div>

      {/* Widget 4: Parent Communication Frequency Index */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl group-hover:scale-110 transition-transform">
            <MessageSquare size={24} strokeWidth={2.5} />
          </div>
          <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <ArrowUpRight size={12} />
            +0.5
          </span>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
            {analytics.parentCommunication.frequencyIndex}
            <span className="text-xl text-slate-400">/10</span>
          </h3>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Communication Index
          </p>
          <p className="text-xs text-slate-400 mt-2">
            {analytics.parentCommunication.totalCommunications} total •{" "}
            {analytics.parentCommunication.responseRate}% response
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWidgets;
