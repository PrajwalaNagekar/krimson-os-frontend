import React from 'react';
import { FileText } from 'lucide-react';
import ActivityCard from './ActivityCard';

/**
 * ActivityLog Component
 * Container component that displays a grid of activity cards
 * 
 * @param {Array<Object>} activities - Array of activity objects to display
 */
const ActivityLog = ({ activities }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <FileText className="text-blue-500" size={24} />
          Activity Log
          <span className="text-sm font-normal text-slate-500">({activities.length} activities)</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
