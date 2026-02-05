import React from "react";
import { Star } from "lucide-react";
import ActivityCard from "./ActivityCard";

const ActivityTimeline = ({
  activities,
  handleDownloadCertificate,
  handleViewPhoto,
  searchQuery,
  selectedCategory,
  onClearFilters,
}) => {
  if (activities.length === 0) {
    return (
      <div className="ml-10 md:ml-[9rem] bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <Star size={40} className="text-cyan-500" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
          No Activities Found
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
          {searchQuery
            ? `No activities match your search "${searchQuery}"`
            : `No ${selectedCategory} activities recorded yet`}
        </p>
        <button
          onClick={onClearFilters}
          className="text-sm text-cyan-600 font-bold hover:underline"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-10 max-w-5xl">
      <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[9rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-purple-400 before:to-pink-400 before:opacity-30">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            handleViewPhoto={handleViewPhoto}
            handleDownloadCertificate={handleDownloadCertificate}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
