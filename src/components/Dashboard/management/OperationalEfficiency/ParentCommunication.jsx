import React from "react";
import { MessageSquare } from "lucide-react";
import { OPERATIONAL_EFFICIENCY_DATA } from "../../../../data/managementData";

const ParentCommunication = () => {
  const { parentCommunication } = OPERATIONAL_EFFICIENCY_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Parent Communication Response Time
          </h2>
          <p className="text-sm text-gray-600">
            Multi-channel response analysis
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
          <p className="text-sm text-gray-600 mb-2">Overall Avg</p>
          <p className="text-3xl font-bold text-purple-700">
            {parentCommunication.overall.avgHours} hrs
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
          <p className="text-sm text-gray-600 mb-2">Total Queries</p>
          <p className="text-3xl font-bold text-green-700">
            {parentCommunication.overall.total}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
          <p className="text-sm text-gray-600 mb-2">Responded</p>
          <p className="text-3xl font-bold text-blue-700">
            {parentCommunication.overall.responded}
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
          <p className="text-sm text-gray-600 mb-2">Pending</p>
          <p className="text-3xl font-bold text-orange-700">
            {parentCommunication.overall.pending}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-gray-800 mb-4">By Channel</h3>
          <div className="space-y-3">
            {parentCommunication.byChannel.map((channel, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    {channel.channel}
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    {channel.avgHours} hrs
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">
                    {channel.percentage}%
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {channel.responded}/{channel.total} responded
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">By Urgency</h3>
          <div className="space-y-3">
            {parentCommunication.urgencyBreakdown.map((urgency, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    {urgency.urgency}
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {urgency.avgHours} hrs
                  </span>
                </div>
                <p className="text-sm text-gray-600">{urgency.count} queries</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentCommunication;
