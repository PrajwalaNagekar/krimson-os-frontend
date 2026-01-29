import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock,
  Download,
  Users,
  Trophy,
  BookOpen,
  Music,
  Filter,
  Search,
  CheckCircle,
  Plus,
  Share2,
  Bell,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tag
} from 'lucide-react';

const CalendarEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock Data - Will be replaced with API
  const events = [
    {
      id: 1,
      title: 'Science Fair 2026 - Innovation Showcase',
      date: '2026-01-20',
      time: '09:00 AM - 03:00 PM',
      location: 'School Auditorium, Main Campus',
      category: 'Academic',
      type: 'academic',
      description: 'Annual science fair showcasing student projects and innovations. Parents are invited to view exhibits and interact with student presentations.',
      rsvpRequired: true,
      rsvpStatus: 'pending',
      attendees: 150,
      brochureUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference - Term 1',
      date: '2026-01-25',
      time: '10:30 AM - 04:00 PM',
      location: 'Individual Classrooms',
      category: 'Meeting',
      type: 'academic',
      description: 'Individual meetings with class teachers to discuss student progress, behavior, and goals for the upcoming term.',
      rsvpRequired: true,
      rsvpStatus: 'confirmed',
      attendees: 45,
      brochureUrl: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Inter-House Sports Championship Finals',
      date: '2026-02-02',
      time: '08:00 AM - 05:00 PM',
      location: 'School Sports Complex',
      category: 'Sports',
      type: 'sports',
      description: 'Annual inter-house sports championship featuring track and field events, team sports, and award ceremony. Family attendance is encouraged.',
      rsvpRequired: false,
      rsvpStatus: null,
      attendees: 300,
      brochureUrl: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Music & Arts Festival',
      date: '2026-02-10',
      time: '06:00 PM - 09:00 PM',
      location: 'School Amphitheater',
      category: 'Enrichment',
      type: 'enrichment',
      description: 'Celebration of student talents in music, dance, drama, and visual arts. Evening showcase with refreshments provided.',
      rsvpRequired: true,
      rsvpStatus: 'pending',
      attendees: 200,
      brochureUrl: '#',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 5,
      title: 'Robotics Club Competition',
      date: '2026-02-15',
      time: '02:00 PM - 05:00 PM',
      location: 'STEM Lab, Block C',
      category: 'CCA',
      type: 'cca',
      description: 'Robotics Club annual competition showcasing student-built robots and automated systems. Open to parent visitors.',
      rsvpRequired: false,
      rsvpStatus: null,
      attendees: 80,
      brochureUrl: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'School Open House 2026',
      date: '2026-02-20',
      time: '09:00 AM - 12:00 PM',
      location: 'Entire Campus',
      category: 'Meeting',
      type: 'academic',
      description: 'Annual open house for prospective families. Current parents welcome to volunteer and share experiences.',
      rsvpRequired: true,
      rsvpStatus: 'pending',
      attendees: 250,
      brochureUrl: '#',
      color: 'from-pink-500 to-rose-500'
    },
    // Adding mock events to demonstrate pagination
    { id: 7, title: 'Math Olympiad', date: '2026-02-22', time: '10:00 AM - 12:00 PM', location: 'Hall A', category: 'Academic', type: 'academic', description: 'National level math competition.', rsvpRequired: false, attendees: 100, color: 'from-blue-500 to-cyan-500' },
    { id: 8, title: 'Football Match vs St. Mary', date: '2026-02-25', time: '04:00 PM - 06:00 PM', location: 'Main Field', category: 'Sports', type: 'sports', description: 'Friendly football match.', rsvpRequired: false, attendees: 300, color: 'from-green-500 to-emerald-500' },
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: CalendarIcon, color: 'from-slate-500 to-gray-500' },
    { id: 'academic', name: 'Academic', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'sports', name: 'Sports', icon: Trophy, color: 'from-green-500 to-emerald-500' },
    { id: 'enrichment', name: 'Enrichment', icon: Music, color: 'from-orange-500 to-amber-500' },
    { id: 'cca', name: 'CCA', icon: Users, color: 'from-indigo-500 to-purple-500' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.type === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRSVP = (eventId) => {
    console.log('RSVP for event:', eventId);
    // API call will be added here
  };

  const handleDownloadBrochure = (eventId) => {
    console.log('Download brochure for event:', eventId);
    // API call will be added here
  };

  const handleSyncCalendar = (type) => {
    console.log('Sync with calendar:', type);
    // API call will be added here
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getCategoryIcon = (type) => {
    const category = categories.find(cat => cat.id === type);
    return category ? category.icon : CalendarIcon;
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
              <CalendarIcon size={24} className="md:hidden text-white" />
              <CalendarIcon size={28} className="hidden md:block text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Calendar & Events
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Academic, sports, enrichment, and parent events</p>
            </div>
          </div>

          {/* Calendar Sync Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => handleSyncCalendar('google')}
              className="flex-1 md:flex-initial bg-white border-2 border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center justify-center gap-2"
            >
              <Share2 size={16} />
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">Sync Google</span>
                <span className="text-[8px] text-slate-500">get in app</span>
              </div>
            </button>
            <button
              onClick={() => handleSyncCalendar('apple')}
              className="flex-1 md:flex-initial bg-white border-2 border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all flex items-center justify-center gap-2"
            >
              <Share2 size={16} />
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">Sync Apple</span>
                <span className="text-[8px] text-slate-500">get in app</span>
              </div>
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
            />
          </div>
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
                    {category.id === 'all' ? events.length : filteredEvents.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
        {currentItems.map((event) => {
          const CategoryIcon = getCategoryIcon(event.type);
          return (
            <div
              key={event.id}
              className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Event Header with Gradient */}
              <div className={`bg-gradient-to-r ${event.color} p-4 md:p-5`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <CategoryIcon size={20} className="text-white" />
                    </div>
                    <span className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                      {event.category}
                    </span>
                  </div>
                  {event.rsvpRequired && (
                    <div className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                      event.rsvpStatus === 'confirmed' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : event.rsvpStatus === 'pending'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-white/30 text-white'
                    }`}>
                      {event.rsvpStatus === 'confirmed' ? '✓ Confirmed' : 
                       event.rsvpStatus === 'pending' ? 'RSVP Pending' : 'RSVP'}
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-white/90 text-xs md:text-sm">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon size={14} />
                    {formatDate(event.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Event Body */}
              <div className="p-4 md:p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 font-medium">{event.location}</p>
                </div>
                
                <p className="text-sm md:text-base text-slate-700 mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                  <Users size={14} />
                  <span className="font-medium">{event.attendees} attendees expected</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  {event.rsvpRequired && (
                    <button
                      onClick={() => handleRSVP(event.id)}
                      className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                        event.rsvpStatus === 'confirmed'
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {event.rsvpStatus === 'confirmed' ? (
                          <>
                            <CheckCircle size={16} />
                            <span>RSVP Confirmed</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <div className="flex flex-col items-center">
                              <span>RSVP Now</span>
                              <span className="text-[8px] opacity-80">get in app</span>
                            </div>
                          </>
                        )}
                      </div>
                    </button>
                  )}
                  <button
                    onClick={() => handleDownloadBrochure(event.id)}
                    className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    <div className="flex flex-col items-center">
                      <span>Download Details</span>
                      <span className="text-[8px] text-slate-500">get in app</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

       {/* Pagination Controls */}
      {filteredEvents.length > itemsPerPage && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 px-2 pb-8">
           <div className="text-sm text-slate-500 font-medium order-2 sm:order-1">
             Showing <span className="font-bold text-slate-800">{indexOfFirstItem + 1}</span> to <span className="font-bold text-slate-800">{Math.min(indexOfLastItem, filteredEvents.length)}</span> of <span className="font-bold text-slate-800">{filteredEvents.length}</span> events
           </div>
           
           <div className="flex items-center gap-2 order-1 sm:order-2">
             <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-xl transition-all ${
                  currentPage === 1 
                    ? 'text-slate-300 cursor-not-allowed bg-white/50' 
                    : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-cyan-600 bg-white/50 border border-slate-200'
                }`}
             >
               <ChevronLeft size={20} />
             </button>
             
             <div className="flex items-center gap-1.5">
               {[...Array(totalPages)].map((_, index) => (
                 <button
                   key={index}
                   onClick={() => handlePageChange(index + 1)}
                   className={`w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${
                     currentPage === index + 1
                       ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                       : 'bg-white/50 text-slate-600 hover:bg-white hover:shadow-sm border border-slate-200'
                   }`}
                 >
                   {index + 1}
                 </button>
               ))}
             </div>

             <button
                onClick={() => handlePageChange(currentPage + 1)}
                 disabled={currentPage === totalPages}
                className={`p-2 rounded-xl transition-all ${
                  currentPage === totalPages 
                    ? 'text-slate-300 cursor-not-allowed bg-white/50' 
                    : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-cyan-600 bg-white/50 border border-slate-200'
                }`}
             >
               <ChevronRight size={20} />
             </button>
           </div>
        </div>
      )}

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <CalendarIcon size={40} className="text-cyan-500" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">No Events Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {searchQuery 
              ? `No events match your search "${searchQuery}"`
              : `No ${selectedCategory} events available at the moment`
            }
          </p>
        </div>
      )}

      {/* Quick Stats */}


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

export default CalendarEvents;
