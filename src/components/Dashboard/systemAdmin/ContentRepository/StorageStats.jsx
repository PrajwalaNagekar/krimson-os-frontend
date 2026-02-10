import React from "react";
import { Database, FileText, Image, Video, Share2 } from "lucide-react";

const StorageStats = ({ stats }) => {
  const statCards = [
    {
      icon: Database,
      color: "text-cyan-500",
      label: "Total Assets",
      value: stats.totalAssets,
    },
    {
      icon: FileText,
      color: "text-blue-500",
      label: "Documents",
      value: stats.documentsCount,
    },
    {
      icon: Image,
      color: "text-purple-500",
      label: "Images",
      value: stats.imagesCount,
    },
    {
      icon: Video,
      color: "text-pink-500",
      label: "Videos",
      value: stats.videosCount,
    },
    {
      icon: Share2,
      color: "text-green-500",
      label: "Shared",
      value: stats.sharedAssets,
    },
  ];

  const usagePercentage = (
    (parseFloat(stats.storageUsed) / parseFloat(stats.storageLimit)) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={stat.color} size={20} />
              <span className="text-xs text-slate-500">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Storage Usage Bar */}
      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700">
            Storage Usage
          </span>
          <span className="text-sm text-slate-600">
            {stats.storageUsed} / {stats.storageLimit}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">{usagePercentage}% used</p>
      </div>
    </div>
  );
};

export default StorageStats;
