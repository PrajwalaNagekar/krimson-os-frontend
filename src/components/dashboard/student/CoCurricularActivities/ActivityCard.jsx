import React from 'react';
import { CheckCircle, Calendar, Medal, Tag, ExternalLink } from 'lucide-react';
import { getCategoryColor, getCategoryIcon } from './utils';

/**
 * ActivityCard Component
 * Displays detailed information about a single co-curricular activity
 * 
 * @param {Object} activity - Activity object with all details
 */
const ActivityCard = ({ activity }) => {
  const Icon = getCategoryIcon(activity.category);
  const gradientColor = getCategoryColor(activity.category);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-3">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientColor} text-white shadow-md flex-shrink-0`}>
          <Icon size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-800 text-base mb-1">{activity.name}</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-lg bg-gradient-to-r ${gradientColor} text-white`}>
              {activity.category}
            </span>
            <span className="text-xs text-slate-500">{activity.type}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-bold text-blue-600">+{activity.points}</div>
          <div className="text-[10px] text-slate-500 font-medium">points</div>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{activity.description}</p>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Medal size={12} />
            <span>{activity.achievement}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={12} />
            <span>{activity.role}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{activity.date}</span>
          </div>
        </div>
        {activity.certificate && (
          <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
            <CheckCircle size={12} />
            Certified
          </div>
        )}
      </div>

      <div className="flex justify-end mt-2 pt-2 border-t border-slate-100">
        <span className="text-[10px] text-slate-400 flex items-center gap-1 italic opacity-70">
          Go to App <ExternalLink size={10} />
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;
