import React from "react";
import {
  BarChart3,
  Download,
  Clock,
  Target,
  Smartphone,
  Mail,
  Bell,
  Users,
  CheckCircle,
  Eye,
  TrendingUp,
  Globe,
} from "lucide-react";

const RecentBroadcasts = ({ recentNotifications, getStatusColor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <BarChart3 className="text-blue-500" size={24} />
              Recent Broadcasts & Analytics
            </h2>
            <p className="text-sm text-slate-500">
              Delivery and engagement tracking
            </p>
          </div>
          <button className="px-5 py-2.5 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-md flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export Report
            </div>
          </button>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {recentNotifications.map((notification) => (
          <div
            key={notification.id}
            className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-blue-50/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    {notification.title}
                  </h3>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(notification.status)}`}
                  >
                    {notification.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  {notification.content}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <Clock size={14} className="text-slate-400" />
                  <span className="text-slate-500">
                    {notification.sentDate}
                  </span>
                  <span className="text-slate-300">•</span>
                  <Target size={14} className="text-slate-400" />
                  <span className="text-slate-600 font-semibold">
                    {notification.targetGroup.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {notification.channels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white rounded-lg border border-slate-200"
                  >
                    {channel === "SMS" && (
                      <Smartphone size={16} className="text-blue-500" />
                    )}
                    {channel === "Email" && (
                      <Mail size={16} className="text-purple-500" />
                    )}
                    {channel === "App" && (
                      <Bell size={16} className="text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery & Engagement Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users size={14} className="text-blue-500" />
                </div>
                <p className="text-lg font-bold text-slate-800">
                  {notification.totalRecipients}
                </p>
                <p className="text-[10px] text-slate-500 font-semibold uppercase">
                  Total Recipients
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-green-200 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle size={14} className="text-green-500" />
                </div>
                <p className="text-lg font-bold text-green-600">
                  {notification.delivered}
                </p>
                <p className="text-[10px] text-slate-500 font-semibold uppercase">
                  Delivered
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-purple-200 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Eye size={14} className="text-purple-500" />
                </div>
                <p className="text-lg font-bold text-purple-600">
                  {notification.opened}
                </p>
                <p className="text-[10px] text-slate-500 font-semibold uppercase">
                  Opened
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp size={14} className="text-green-600" />
                </div>
                <p className="text-lg font-bold text-green-700">
                  {notification.deliveryRate}
                </p>
                <p className="text-[10px] text-green-600 font-semibold uppercase">
                  Delivery Rate
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-200 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 size={14} className="text-purple-600" />
                </div>
                <p className="text-lg font-bold text-purple-700">
                  {notification.openRate}
                </p>
                <p className="text-[10px] text-purple-600 font-semibold uppercase">
                  Open Rate
                </p>
              </div>
            </div>

            {/* Channel Breakdown */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-bold text-slate-600 mb-3">
                Channel Breakdown:
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Smartphone size={14} className="text-blue-500" />
                  <span className="text-slate-600">SMS:</span>
                  <span className="font-bold text-slate-800">
                    {notification.smsCount}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-purple-500" />
                  <span className="text-slate-600">Email:</span>
                  <span className="font-bold text-slate-800">
                    {notification.emailCount}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell size={14} className="text-green-500" />
                  <span className="text-slate-600">App:</span>
                  <span className="font-bold text-slate-800">
                    {notification.appNotifications}
                  </span>
                </div>
              </div>
            </div>

            {/* Auto-Duplicate Notice */}
            <div className="mt-4 p-3 bg-cyan-50 rounded-xl border border-cyan-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-cyan-600" />
                <p className="text-xs font-semibold text-cyan-700">
                  Auto-duplicated to Parent & Teacher apps simultaneously
                </p>
              </div>
              <span className="text-xs font-bold text-cyan-600 bg-white px-2 py-1 rounded-md border border-cyan-200">
                ✓ Synced
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBroadcasts;
