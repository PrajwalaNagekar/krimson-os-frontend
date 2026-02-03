import React from 'react';
import {
  Calendar,
  Clock,
  Award,
  Users,
  Target,
  CheckCircle,
  Star,
  TrendingUp,
} from 'lucide-react';

/**
 * PillarActivityDetail Component
 * Displays detailed information about a selected activity
 * 
 * @param {Object} activity - Selected activity object
 * @param {String} pillarName - Name of the parent pillar
 * @param {Function} onBack - Handler for back navigation
 */
const PillarActivityDetail = ({ activity }) => {
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
      'Beginner': 'bg-emerald-100 text-emerald-700',
      'Intermediate': 'bg-blue-100 text-blue-700',
      'Advanced': 'bg-purple-100 text-purple-700',
      'Expert': 'bg-orange-100 text-orange-700',
    };
    return styles[level] || 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{activity.title}</h2>
            <p className="text-slate-600 leading-relaxed">{activity.description}</p>
          </div>
          {activity.certificate && (
            <div className="flex-shrink-0 bg-yellow-100 rounded-xl p-3 border border-yellow-200">
              <Award className="text-yellow-600" size={28} />
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1.5 rounded-lg border font-medium text-sm ${getStatusBadge(activity.status)}`}>
            {activity.status.replace('-', ' ')}
          </span>
          <span className={`px-3 py-1.5 rounded-lg font-medium text-sm ${getLevelBadge(activity.level)}`}>
            {activity.level}
          </span>
          {activity.showcase && (
            <span className="px-3 py-1.5 rounded-lg font-medium text-sm bg-purple-100 text-purple-700 flex items-center gap-1">
              <Star size={14} />
              Showcased
            </span>
          )}
        </div>
      </div>

      {/* Key Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
            </div>
            <span className="text-sm font-medium text-slate-600">Date</span>
          </div>
          <p className="text-lg font-semibold text-slate-800">
            {new Date(activity.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Duration */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="text-purple-600" size={20} />
            </div>
            <span className="text-sm font-medium text-slate-600">Duration</span>
          </div>
          <p className="text-lg font-semibold text-slate-800">{activity.duration}</p>
        </div>

        {/* Points Earned */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-medium text-slate-600">Points Earned</span>
          </div>
          <p className="text-lg font-semibold text-green-600">+{activity.points} points</p>
        </div>

        {/* Certificate Status */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${activity.certificate ? 'bg-yellow-100' : 'bg-slate-100'}`}>
              <Award className={activity.certificate ? 'text-yellow-600' : 'text-slate-400'} size={20} />
            </div>
            <span className="text-sm font-medium text-slate-600">Certificate</span>
          </div>
          <p className={`text-lg font-semibold ${activity.certificate ? 'text-yellow-600' : 'text-slate-500'}`}>
            {activity.certificate ? 'Awarded' : 'Not Available'}
          </p>
        </div>
      </div>

      {/* Mentors Section */}
      {activity.mentors && activity.mentors.length > 0 && (
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Users className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-bold text-slate-800">Mentors & Guides</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {activity.mentors.map((mentor, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-700"
              >
                {mentor}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Skills Developed Section */}
      {activity.skills && activity.skills.length > 0 && (
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border-2 border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Target className="text-cyan-600" size={20} />
            </div>
            <h3 className="font-bold text-slate-800">Skills Developed</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {activity.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 text-sm font-medium text-cyan-700 flex items-center gap-1"
              >
                <CheckCircle size={14} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PillarActivityDetail;
