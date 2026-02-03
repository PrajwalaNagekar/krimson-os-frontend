import React, { useState } from 'react';
import { Heart, Calendar, Tag, Brain, Sparkles, ChevronDown, ChevronUp, BookHeart } from 'lucide-react';

const ReflectionJournal = ({ data }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [filterMood, setFilterMood] = useState('All');

  const moods = ['All', ...new Set(data.map(entry => entry.mood))];

  const filteredData = data.filter(entry => 
    filterMood === 'All' || entry.mood === filterMood
  );

  const getMoodEmoji = (mood) => {
    const moodMap = {
      'Excited': '😊',
      'Reflective': '🤔',
      'Accomplished': '🎯',
      'Grateful': '🙏',
      'Curious': '🧐',
      'Challenged': '💪'
    };
    return moodMap[mood] || '📝';
  };

  const getMoodColor = (mood) => {
    const colorMap = {
      'Excited': 'from-yellow-400 to-orange-400',
      'Reflective': 'from-blue-400 to-purple-400',
      'Accomplished': 'from-green-400 to-emerald-400',
      'Grateful': 'from-pink-400 to-rose-400',
      'Curious': 'from-cyan-400 to-blue-400',
      'Challenged': 'from-red-400 to-orange-400'
    };
    return colorMap[mood] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-pink-200 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl shadow-lg">
              <Heart size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reflection Journal</h2>
              <p className="text-gray-700 font-medium">
                💭 Develop metacognition and connect learning to values
              </p>
            </div>
          </div>

          {/* Mood Filter */}
          <select
            value={filterMood}
            onChange={(e) => setFilterMood(e.target.value)}
            className="px-4 py-2 bg-white border-2 border-pink-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            {moods.map(mood => (
              <option key={mood} value={mood}>
                {mood === 'All' ? 'All Moods' : `${getMoodEmoji(mood)} ${mood}`}
              </option>
            ))}
          </select>
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-pink-200">
            <span className="text-sm text-gray-600">Total Reflections: </span>
            <span className="font-bold text-pink-600">{data.length}</span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-200">
            <span className="text-sm text-gray-600">Experiments Reflected: </span>
            <span className="font-bold text-purple-600">{new Set(data.flatMap(e => e.linkedExperiments)).size}</span>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-6">
        {filteredData.map(entry => (
          <div
            key={entry.id}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Entry Header */}
            <div className={`bg-gradient-to-r ${getMoodColor(entry.mood)} px-6 py-4`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookHeart size={20} className="text-white" />
                    <h4 className="font-bold text-white text-lg">{entry.title}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>•</span>
                    <span>Mood: {getMoodEmoji(entry.mood)} {entry.mood}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Content */}
            <div className="p-6 space-y-4">
              {/* Prompt */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                <p className="text-sm font-bold text-indigo-700 mb-1">Reflection Prompt:</p>
                <p className="text-gray-700 italic">{entry.prompt}</p>
              </div>

              {/* Main Reflection (Collapsible) */}
              <div>
                <button
                  onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-pink-50 hover:to-purple-50 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 hover:text-pink-600 transition-all group"
                >
                  <span>Read Full Reflection</span>
                  {expandedId === entry.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {expandedId === entry.id && (
                  <div className="mt-4 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-pink-200 animate-in fade-in duration-300">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{entry.reflection}</p>
                  </div>
                )}
              </div>

              {/* Linked Experiments */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  🔗 Linked Experiments:
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.linkedExperiments.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold border border-blue-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Tag size={16} className="text-pink-500" />
                  Tags:
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold border border-pink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Developed */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                  🎯 Skills Developed:
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.skillsDeveloped.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Values Reflection */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                <p className="text-sm font-bold text-purple-700 mb-2 flex items-center gap-2">
                  💎 Values Reflection:
                </p>
                <p className="text-gray-700 leading-relaxed italic">{entry.valuesReflection}</p>
              </div>

              {/* AI Coaching */}
              {entry.aiCoaching && (
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border-2 border-indigo-300">
                  <p className="text-sm font-bold text-indigo-700 mb-2 flex items-center gap-2">
                    <Brain size={16} className="text-indigo-500" />
                    AI Coach Response:
                  </p>
                  <p className="text-gray-700 leading-relaxed">{entry.aiCoaching}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-12 text-center border-2 border-dashed border-pink-200">
          <Heart size={48} className="mx-auto text-pink-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Reflections Found</h3>
          <p className="text-gray-600">Start your reflection journey by documenting your lab experiences.</p>
        </div>
      )}
    </div>
  );
};

export default ReflectionJournal;
