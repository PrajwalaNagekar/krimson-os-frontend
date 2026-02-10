import React from "react";
import { Clock } from "lucide-react";

const ScheduledQueue = ({ scheduledItems }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-blue-500" size={20} />
        <h2 className="text-lg font-bold text-slate-800">
          Scheduled Queue ({scheduledItems.length})
        </h2>
      </div>
      <div className="space-y-3">
        {scheduledItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex-1">
              <p className="font-medium text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-600 mt-1">
                To: {item.recipient}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-blue-600">
                {item.scheduledFor}
              </p>
              <span className="text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledQueue;
