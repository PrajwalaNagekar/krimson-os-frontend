import React, { useState } from 'react';
import { 
  Trophy, 
  Star, 
  Award, 
  Download, 
  Filter,
  Search,
  Calendar,
  Image as ImageIcon,
  Medal,
  Target,
  TrendingUp,
  Users,
  Music,
  BookOpen,
  Palette,
  Crown,
  Zap,
  CheckCircle
} from 'lucide-react';

const CoCurricularTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data - Will be replaced with CCA Module + Student Achievement API
  const activities = [
    {
      id: 1,
      title: 'Inter-School Debate Championship - Regional Finals',
      category: 'Leadership',
      date: '2026-01-15',
      points: 50,
      achievement: 'First Place',
      description: 'Led the school debate team to victory in the regional championship. Demonstrated exceptional leadership and public speaking skills.',
      certificate: true,
      photos: [
        { id: 1, name: 'winning_moment.jpg' },
        { id: 2, name: 'team_photo.jpg' }
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Crown
    },
    {
      id: 2,
      title: 'Annual Art Exhibition - Featured Artist',
      category: 'Arts',
      date: '2026-01-10',
      points: 40,
      achievement: 'Featured Exhibition',
      description: 'Artwork selected for the school\'s annual art exhibition. Created a mixed-media piece exploring environmental themes.',
      certificate: true,
      photos: [
        { id: 1, name: 'artwork_display.jpg' }
      ],
      color: 'from-orange-500 to-amber-500',
      icon: Palette
    },
    {
      id: 3,
      title: 'Mathematics Olympiad - District Level',
      category: 'Academics',
      date: '2026-01-05',
      points: 45,
      achievement: 'Gold Medal',
      description: 'Secured first place in the district-level Mathematics Olympiad, solving complex problems under time constraints.',
      certificate: true,
      photos: [],
      color: 'from-blue-500 to-cyan-500',
      icon: BookOpen
    },
    {
      id: 4,
      title: 'School Swimming Gala - 100m Freestyle',
      category: 'Sports',
      date: '2025-12-20',
      points: 35,
      achievement: 'Silver Medal',
      description: 'Achieved personal best time in 100m freestyle at the annual swimming gala. Improved timing by 3 seconds.',
      certificate: true,
      photos: [
        { id: 1, name: 'swimming_medal.jpg' }
      ],
      color: 'from-green-500 to-emerald-500',
      icon: Trophy
    },
    {
      id: 5,
      title: 'Music Ensemble Performance - Winter Concert',
      category: 'Arts',
      date: '2025-12-15',
      points: 30,
      achievement: 'Outstanding Performance',
      description: 'Performed violin solo as part of the school orchestra during the winter concert. Received standing ovation.',
      certificate: false,
      photos: [
        { id: 1, name: 'concert_performance.jpg' },
        { id: 2, name: 'orchestra_group.jpg' }
      ],
      color: 'from-orange-500 to-amber-500',
      icon: Music
    },
    {
      id: 6,
      title: 'Community Service - Beach Cleanup Drive',
      category: 'Leadership',
      date: '2025-12-10',
      points: 25,
      achievement: 'Service Award',
      description: 'Organized and led a team of 20 students in a beach cleanup initiative, collecting over 100kg of waste.',
      certificate: true,
      photos: [
        { id: 1, name: 'cleanup_team.jpg' }
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', icon: Star, color: 'from-slate-500 to-gray-500' },
    { id: 'Sports', name: 'Sports', icon: Trophy, color: 'from-green-500 to-emerald-500' },
    { id: 'Arts', name: 'Arts', icon: Palette, color: 'from-orange-500 to-amber-500' },
    { id: 'Academics', name: 'Academics', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'Leadership', name: 'Leadership', icon: Crown, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPoints = activities.reduce((sum, activity) => sum + activity.points, 0);
  const totalAchievements = activities.length;
  const certificatesEarned = activities.filter(a => a.certificate).length;

  const handleDownloadCertificate = (activityId) => {
    console.log('Download certificate for activity:', activityId);
    // API call will be added here
  };

  const handleViewPhoto = (photoId) => {
    console.log('View photo:', photoId);
    // API call will be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
              <Star size={24} className="md:hidden text-white" />
              <Star size={28} className="hidden md:block text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Co-Curricular & Activities
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Track participation, achievements & certificates</p>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-cyan-200">
            <div className="flex items-center gap-2 mb-1">
              <Zap size={16} className="text-cyan-600" />
              <span className="text-xs font-medium text-cyan-600">Total Points</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-cyan-700">{totalPoints}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-1">
              <Award size={16} className="text-purple-600" />
              <span className="text-xs font-medium text-purple-600">Achievements</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-purple-700">{totalAchievements}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-1">
              <Medal size={16} className="text-amber-600" />
              <span className="text-xs font-medium text-amber-600">Certificates</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-amber-700">{certificatesEarned}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search activities, achievements, competitions..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white/80 text-slate-600 hover:bg-white hover:scale-105'
                }`}
              >
                <Icon size={16} />
                <span>{category.name}</span>
                {selectedCategory === category.id && (
                  <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">
                    {category.id === 'all' ? activities.length : filteredActivities.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-5xl">
        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[9rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-purple-400 before:to-pink-400 before:opacity-30">
          
          {filteredActivities.map((activity) => {
            const ActivityIcon = activity.icon;
            return (
              <div key={activity.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                {/* Date Column (Desktop) */}
                <div className="hidden md:flex flex-col items-end w-32 flex-shrink-0 pt-1">
                  <span className="text-2xl font-bold text-slate-800">{new Date(activity.date).getDate()}</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{new Date(activity.date).toLocaleString('default', { month: 'long' })}</span>
                  <span className="text-[10px] text-slate-400">{new Date(activity.date).getFullYear()}</span>
                </div>

                {/* Timeline Node */}
                <div className={`absolute left-5 md:left-[9rem] -translate-x-1/2 mt-1.5 w-5 h-5 rounded-full border-3 border-white shadow-lg z-10 transition-transform group-hover:scale-125 bg-gradient-to-br ${activity.color}`}></div>

                {/* Content Card */}
                <div className="flex-1 ml-10 md:ml-0">
                  {/* Mobile Date */}
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-slate-800">{new Date(activity.date).getDate()} {new Date(activity.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className="text-xs text-slate-400">{new Date(activity.date).getFullYear()}</span>
                  </div>

                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-white/60 hover:shadow-2xl hover:border-cyan-100 transition-all duration-300 group-hover:-translate-y-1">
                    
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 md:p-4 bg-gradient-to-br ${activity.color} rounded-xl md:rounded-2xl shadow-lg flex-shrink-0`}>
                        <ActivityIcon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-cyan-600 transition-colors">
                            {activity.title}
                          </h3>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${activity.color} text-white shadow-md flex items-center gap-1`}>
                              <Zap size={12} />
                              +{activity.points} pts
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                            {activity.category}
                          </span>
                          {activity.achievement && (
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${activity.color} text-white flex items-center gap-1`}>
                              <CheckCircle size={12} />
                              {activity.achievement}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                      {activity.description}
                    </p>

                    {/* Photos */}
                    {activity.photos.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <ImageIcon size={14} />
                          Photos ({activity.photos.length})
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                          {activity.photos.map((photo) => (
                            <button
                              key={photo.id}
                              onClick={() => handleViewPhoto(photo.id)}
                              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all flex items-center justify-center group/photo relative overflow-hidden"
                            >
                              <ImageIcon size={24} className="text-slate-400 group-hover/photo:text-cyan-500 transition-colors" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-white text-[10px] font-bold truncate w-full">{photo.name}</span>
                              </div>
                              <div className="absolute top-1 right-1">
                                <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md">
                                  <span className="text-[8px] font-bold text-slate-600">View</span>
                                  <span className="text-[7px] text-slate-400 block">get in app</span>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        {activity.certificate && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold">
                            <Award size={14} />
                            Certificate Available
                          </span>
                        )}
                      </div>
                      
                      {activity.certificate && (
                        <button
                          onClick={() => handleDownloadCertificate(activity.id)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                        >
                          <Download size={16} />
                          <div className="flex flex-col items-start">
                            <span className="text-xs font-bold">Download</span>
                            <span className="text-[8px] opacity-80">get in app</span>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Empty State */}
          {filteredActivities.length === 0 && (
            <div className="ml-10 md:ml-[9rem] bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Star size={40} className="text-cyan-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">No Activities Found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
                {searchQuery 
                  ? `No activities match your search "${searchQuery}"`
                  : `No ${selectedCategory} activities recorded yet`
                }
              </p>
              <button
                onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
                className="text-sm text-cyan-600 font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CoCurricularTracker;
