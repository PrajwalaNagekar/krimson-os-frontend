import React, { useState } from 'react';
import { Award, Sparkles, TrendingUp, Target, Info } from 'lucide-react';

const SkillBadgesSection = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const earnedSkills = user.earnedSkills || [];
  const recommendedSkills = user.recommendedSkills || [];

  // Get unique categories
  const categories = ['all', ...new Set(earnedSkills.map(skill => skill.category))];

  // Filter skills by category
  const filteredSkills = selectedCategory === 'all'
    ? earnedSkills
    : earnedSkills.filter(skill => skill.category === selectedCategory);

  // Get proficiency color
  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 76) return 'from-green-500 to-emerald-500';
    if (proficiency >= 51) return 'from-blue-500 to-cyan-500';
    if (proficiency >= 26) return 'from-yellow-500 to-orange-500';
    return 'from-slate-400 to-slate-500';
  };

  // Get level badge color
  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-green-100 text-green-700 border-green-200';
      case 'Advanced': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Award className="text-purple-500" size={24} />
          Skill Badges
        </h2>
        <button
          onClick={() => setShowRecommendations(!showRecommendations)}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
            showRecommendations
              ? 'bg-purple-500 text-white'
              : 'bg-purple-50 text-purple-600 border border-purple-200'
          }`}
        >
          <Sparkles size={16} />
          {showRecommendations ? 'View Earned Skills' : 'AI Recommendations'}
        </button>
      </div>

      {/* Category Filters */}
      {!showRecommendations && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>
      )}

      {/* Earned Skills Grid */}
      {!showRecommendations ? (
        <div>
          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100 text-center">
              <div className="text-2xl font-bold text-purple-600">{earnedSkills.length}</div>
              <div className="text-xs text-slate-600">Total Skills</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {earnedSkills.filter(s => s.level === 'Expert' || s.level === 'Advanced').length}
              </div>
              <div className="text-xs text-slate-600">Advanced+</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(earnedSkills.reduce((acc, s) => acc + s.proficiency, 0) / earnedSkills.length) || 0}%
              </div>
              <div className="text-xs text-slate-600">Avg. Proficiency</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredSkills.map(skill => (
              <div
                key={skill.id}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800">{skill.name}</h3>
                      <p className="text-xs text-slate-500">{skill.category}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 mb-3">{skill.description}</p>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Proficiency</span>
                    <span className="font-bold text-slate-700">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} transition-all`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Earned Date */}
                <div className="mt-3 text-xs text-slate-400">
                  Earned: {new Date(skill.earnedDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <Award size={48} className="mx-auto mb-3 opacity-50" />
              <p>No skills in this category yet</p>
            </div>
          )}
        </div>
      ) : (
        /* AI Recommendations */
        <div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6 border border-purple-100">
            <div className="flex items-start gap-3">
              <Sparkles className="text-purple-500 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-purple-800 mb-1">AI-Powered Recommendations</h3>
                <p className="text-sm text-purple-700">
                  Based on your interests, goals, and current skills, we recommend learning these skills next.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {recommendedSkills.map(skill => (
              <div
                key={skill.id}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200 hover:shadow-md transition-all"
              >
                {/* Recommendation Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center gap-1">
                    <Sparkles size={12} />
                    Recommended
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-white text-purple-700 text-xs font-bold border border-purple-200">
                    {skill.difficulty}
                  </span>
                </div>

                {/* Skill Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-800">{skill.name}</h3>
                    <p className="text-xs text-purple-600">{skill.category}</p>
                  </div>
                </div>

                {/* Reason */}
                <div className="bg-white/50 rounded-lg p-3 mb-3 border border-purple-100">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-700">{skill.reason}</p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Target size={16} />
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBadgesSection;
