import React from "react";
import { Users, ChevronRight, Sparkles } from "lucide-react";

const BroadcastCard = ({ broadcast }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-600 bg-green-50 border-green-200";
      case "scheduled":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "draft":
        return "text-slate-600 bg-slate-50 border-slate-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "low":
        return "text-green-600 bg-green-50";
      default:
        return "text-slate-600 bg-slate-50";
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-slate-800">{broadcast.title}</h3>
            {broadcast.aiGenerated && (
              <div className="px-2 py-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-[10px] font-semibold rounded-md flex items-center gap-1">
                <Sparkles size={10} />
                AI {broadcast.aiConfidence}
              </div>
            )}
          </div>
          <p className="text-xs text-slate-600">{broadcast.id}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
            broadcast.status,
          )}`}
        >
          {broadcast.status}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">Type:</span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(
              broadcast.priority,
            )}`}
          >
            {broadcast.type}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Users size={14} className="text-slate-400" />
          <span className="text-slate-600">
            {broadcast.recipient} ({broadcast.recipientCount})
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {broadcast.channels.map((channel, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      {broadcast.status === "Delivered" && (
        <div className="grid grid-cols-2 gap-3 mb-3 p-3 bg-slate-50 rounded-lg">
          <div>
            <p className="text-xs text-slate-500">Open Rate</p>
            <p className="text-sm font-bold text-green-600">
              {broadcast.openRate}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Click Rate</p>
            <p className="text-sm font-bold text-blue-600">
              {broadcast.clickRate}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
        <div className="text-xs text-slate-500">
          <p>By {broadcast.createdBy}</p>
          <p>
            {broadcast.status === "Scheduled"
              ? `Scheduled: ${broadcast.scheduledFor}`
              : broadcast.createdAt}
          </p>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ChevronRight size={16} className="text-slate-400" />
        </button>
      </div>
    </div>
  );
};

export default BroadcastCard;
