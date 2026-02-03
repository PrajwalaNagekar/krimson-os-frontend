import React from 'react';
import { Calendar, Award, Clock, ChevronRight } from 'lucide-react';

/**
 * PillarActivityList Component
 * Displays a list of activities for a selected pillar
 * 
 * @param {String} pillarName - Name of the selected pillar
 * @param {Array} activities - Array of activity objects
 * @param {Function} onActivitySelect - Handler for when an activity is clicked
 * @param {Function} onBack - Handler for back navigation
 */
const PillarActivityList = ({ pillarName, activities, onActivitySelect }) => {
  // Get status badge styling
  const getStatusBadge = (status) => {
    const styles = {
      'completed': 'bg-green-100 text-green-700 border-green-200',
      'in-progress': 'bg-blue-100 text-blue-700 border-blue-200',
      'upcoming': 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return styles[status] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  // Get level badge styling
  const getLevelBadge = (level) => {
    const styles = {
      'Beginner': 'bg-emerald-50 text-emerald-700',
      'Intermediate': 'bg-blue-50 text-blue-700',
      'Advanced': 'bg-purple-50 text-purple-700',
      'Expert': 'bg-orange-50 text-orange-700',
    };
    return styles[level] || 'bg-slate-50 text-slate-700';
  };

  return (
    <div>
      {/* List Header */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">
          Showing {activities.length} {activities.length === 1 ? 'activity' : 'activities'} in <span className="font-semibold">{pillarName}</span>
        </p>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity) => (
          <button
            key={activity.id}
            onClick={() => onActivitySelect(activity)}
            className="group w-full bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-md transition-all text-left"
          >
            <div className="flex items-start justify-between gap-4">
              {/* Activity Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  {activity.certificate && (
                    <Award className="text-yellow-500 flex-shrink-0" size={16} />
                  )}
                </div>

                <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                  {activity.description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-2 items-center text-xs">
                  {/* Status Badge */}
                  <span className={`px-2 py-1 rounded-lg border font-medium ${getStatusBadge(activity.status)}`}>
                    {activity.status.replace('-', ' ')}
                  </span>

                  {/* Level Badge */}
                  <span className={`px-2 py-1 rounded-lg font-medium ${getLevelBadge(activity.level)}`}>
                    {activity.level}
                  </span>

                  {/* Date */}
                  <div className="flex items-center gap-1 text-slate-500">
                    <Calendar size={12} />
                    <span>{new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock size={12} />
                    <span>{activity.duration}</span>
                  </div>

                  {/* Points */}
                  <div className="ml-auto flex items-center gap-1 font-semibold text-blue-600">
                    +{activity.points} pts
                  </div>
                </div>
              </div>

              {/* Arrow Icon */}
              <ChevronRight
                className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                size={20}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Empty State */}
      {activities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">No Activities Yet</h3>
          <p className="text-sm text-slate-500">Activities in this pillar will appear here</p>
        </div>
      )}
    </div>
  );
};

export default PillarActivityList;
