import React from "react";
import { Users } from "lucide-react";

const AudienceSegments = ({ segments }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-purple-500" size={20} />
        <h2 className="text-lg font-bold text-slate-800">Audience Segments</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {segments.map((segment, idx) => (
          <div
            key={idx}
            className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs px-2 py-1 bg-purple-200 text-purple-800 rounded-md font-medium">
                {segment.type}
              </span>
              <span className="text-xl font-bold text-purple-600">
                {segment.count}
              </span>
            </div>
            <p className="font-semibold text-slate-800">{segment.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceSegments;
