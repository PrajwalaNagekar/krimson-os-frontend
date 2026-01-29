import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { 
  Trophy, Award, Upload, CheckCircle, Calendar, User,
  Filter, Palette, MessageSquare, Star, Medal, ExternalLink,
  Clock, Tag, FileText
} from 'lucide-react';

/**
 * Co-Curricular Activities & Achievements - Screen 14
 * Purpose: Capture holistic student progress beyond academics
 * Future: Replace static data with CCA Module + Award Management System APIs
 */
const CoCurricularActivities = () => {
  const { cocurricularActivities } = STUDENT_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Pagination State for Timeline
  const [timelinePage, setTimelinePage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(cocurricularActivities.timeline.length / itemsPerPage);
  const displayedTimeline = cocurricularActivities.timeline.slice(
    (timelinePage - 1) * itemsPerPage,
    timelinePage * itemsPerPage
  );

  const handlePrevPage = () => setTimelinePage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setTimelinePage(prev => Math.min(prev + 1, totalPages));

  // Category colors
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Sports': return 'from-orange-400 to-red-500';
      case 'Arts': return 'from-purple-400 to-pink-500';
      case 'Debate': return 'from-blue-400 to-indigo-500';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  // Category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Sports': return Trophy;
      case 'Arts': return Palette;
      case 'Debate': return MessageSquare;
      default: return Award;
    }
  };

  // Filter activities by category
  const filteredActivities = selectedCategory === 'All'
    ? cocurricularActivities.activities
    : cocurricularActivities.activities.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <Trophy size={32} />
            Co-Curricular Activities
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-6">Track your achievements beyond academics</p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{cocurricularActivities.totalPoints}</div>
              <div className="text-xs text-white/80 mt-1">Total Points</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{cocurricularActivities.totalActivities}</div>
              <div className="text-xs text-white/80 mt-1">Activities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{cocurricularActivities.certificatesEarned}</div>
              <div className="text-xs text-white/80 mt-1">Certificates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cocurricularActivities.categories.map((cat, index) => {
          const Icon = getCategoryIcon(cat.name);
          return (
            <div key={index}
                 className={`bg-gradient-to-br ${getCategoryColor(cat.name)} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
                 onClick={() => setSelectedCategory(cat.name)}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Icon size={28} />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">+{cat.points}</div>
                  <div className="text-xs opacity-90">points</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
              <p className="text-sm opacity-90">{cat.count} Activities</p>
            </div>
          );
        })}
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl p-2 shadow-sm">
        <div className="flex gap-2 overflow-x-auto">
          {['All', 'Sports', 'Arts', 'Debate'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Filter size={16} />
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FileText className="text-blue-500" size={24} />
            Activity Log
            <span className="text-sm font-normal text-slate-500">({filteredActivities.length} activities)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredActivities.map((activity) => {
            const Icon = getCategoryIcon(activity.category);
            return (
              <div key={activity.id}
                   className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(activity.category)} text-white shadow-md flex-shrink-0`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-base mb-1">{activity.name}</h3>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryColor(activity.category)} text-white`}>
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
          })}
        </div>
      </div>

      {/* Achievement Timeline */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Clock className="text-purple-500" size={24} />
            Achievement Timeline
          </h2>
        </div>

        <div className="space-y-4">
          {displayedTimeline.map((month, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-xl font-bold text-sm">
                  {month.month} {month.year}
                </div>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-6">
                {month.achievements.map((ach, achIndex) => {
                  const Icon = getCategoryIcon(ach.category);
                  return (
                    <div key={achIndex}
                         className={`bg-gradient-to-br ${getCategoryColor(ach.category)} text-white rounded-xl p-4 shadow-md`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} />
                        <span className="text-xs font-semibold opacity-90">{ach.category}</span>
                      </div>
                      <div className="font-bold text-sm mb-1">{ach.name}</div>
                      <div className="text-xs opacity-90">+{ach.points} points</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 pt-4 border-t border-slate-100">
                <button 
                  onClick={handlePrevPage} 
                  disabled={timelinePage === 1}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    timelinePage === 1 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Previous
                </button>
                <span className="text-sm font-bold text-slate-500">
                  Page {timelinePage} of {totalPages}
                </span>
                <button 
                  onClick={handleNextPage} 
                  disabled={timelinePage === totalPages}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    timelinePage === totalPages 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Next
                </button>
            </div>
        )}
      </div>

      {/* Digital Portfolio / Certificate Upload */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-dashed border-blue-200">
        <div className="text-center">
          <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
            <Upload className="text-blue-500" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Digital Portfolio</h3>
          <p className="text-slate-600 text-sm mb-4">Upload certificates to build your achievement portfolio</p>
          <button 
            onClick={() => console.log('Future: Open certificate upload modal')}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto">
            <Upload size={18} />
            Upload Certificate
          </button>
          <p className="text-xs text-slate-400 mt-4">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
        </div>
      </div>
    </div>
  );
};

export default CoCurricularActivities;
