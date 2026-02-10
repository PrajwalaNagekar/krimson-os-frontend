import React from "react";
import { MessageSquare, Mail, Phone, CheckCircle2 } from "lucide-react";

const CommunicationAnalyticsChart = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Communication Analytics
          </h3>
          <p className="text-sm text-slate-500">Parent engagement metrics</p>
        </div>
        <div className="p-2 bg-pink-50 rounded-full text-pink-600">
          <MessageSquare size={20} />
        </div>
      </div>

      {/* Channel Breakdown */}
      <div className="space-y-3 mb-4">
        {data.byChannel.map((channel, idx) => {
          const Icon =
            channel.channel === "SMS"
              ? MessageSquare
              : channel.channel === "Email"
                ? Mail
                : channel.channel === "Phone"
                  ? Phone
                  : CheckCircle2;
          return (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Icon size={16} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-sm">
                    {channel.channel}
                  </p>
                  <p className="text-xs text-slate-400">
                    {channel.count} communications
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-pink-600 text-sm">
                  {channel.responseRate}%
                </p>
                <p className="text-xs text-slate-400">response</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weekly Trend */}
      <div className="pt-4 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-500 mb-3">
          Weekly Trend
        </p>
        <div className="flex items-end justify-between gap-2 h-20">
          {data.weeklyTrend.map((week, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center group">
              <div
                className="w-full bg-gradient-to-t from-pink-400 to-pink-300 rounded-t-lg hover:from-pink-500 hover:to-pink-400 transition-all cursor-pointer"
                style={{ height: `${(week.count / 1000) * 100}%` }}
              />
              <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                {week.week.replace("Week ", "W")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunicationAnalyticsChart;
