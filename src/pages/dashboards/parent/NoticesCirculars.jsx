import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Bell, 
  Search, 
  Filter, 
  Calendar, 
  Tag, 
  AlertCircle,
  Paperclip,
  Image as ImageIcon,
  Link as LinkIcon,
  ChevronRight,
  Clock,
  Mail,
  ArrowRight,
  Eye,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const NoticesCirculars = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // all, urgent, saved

  // Mock Data - Will be replaced with API
  const notices = [
    {
      id: 1,
      title: 'Emergency School Closure - Heavy Rain Warning',
      date: '2026-01-19',
      category: 'Admin',
      priority: 'high',
      description: 'Due to severe weather warnings issued by the meteorological department, the school will remain closed tomorrow, 20th January 2026. Online classes will be conducted as per the regular schedule.',
      attachments: [
        { type: 'pdf', name: 'Official_Order.pdf', size: '1.2 MB' }
      ],
      read: false
    },
    {
      id: 2,
      title: 'Annual Sports Day Registration Open',
      date: '2026-01-15',
      category: 'Sports',
      priority: 'medium',
      description: 'Registration for the Annual Sports Day is now open. Students can register for up to 3 events. Please find the event schedule and registration link attached.',
      attachments: [
        { type: 'pdf', name: 'Event_Schedule.pdf', size: '2.4 MB' },
        { type: 'link', name: 'Registration Form', url: '#' }
      ],
      read: true
    },
    {
      id: 3,
      title: 'Term 1 Examination Schedule Revised',
      date: '2026-01-10',
      category: 'Academic',
      priority: 'high',
      description: 'The examination schedule for Term 1 has been revised due to the upcoming public holiday. Please check the new dates for Mathematics and Science papers.',
      attachments: [
        { type: 'image', name: 'Revised_Timetable.png', size: '4.1 MB' }
      ],
      read: true
    },
    {
      id: 4,
      title: 'School Canteen Menu Update',
      date: '2026-01-05',
      category: 'General',
      priority: 'low',
      description: 'We have updated our canteen menu to include more healthy and nutritional options based on parent feedback. The new menu is effective from next week.',
      attachments: [
        { type: 'pdf', name: 'Jan_Menu.pdf', size: '0.8 MB' }
      ],
      read: true
    },
    {
      id: 5,
      title: 'Uniform Policy Reminder',
      date: '2026-01-02',
      category: 'Discipline',
      priority: 'medium',
      description: 'A gentle reminder to all parents regarding the school uniform policy. Students must wear the complete uniform, including proper footwear, every day.',
      attachments: [],
      read: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Notices' },
    { id: 'Admin', name: 'Administrative' },
    { id: 'Academic', name: 'Academic' },
    { id: 'Sports', name: 'Sports' },
    { id: 'Discipline', name: 'Discipline' },
    { id: 'General', name: 'General' }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'urgent' && notice.priority === 'high') ||
                      (activeTab === 'saved' && notice.saved); // Mock saved logic
    return matchesCategory && matchesSearch && matchesTab;
  });

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-600 border-blue-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Admin': return 'text-purple-600 bg-purple-50';
      case 'Academic': return 'text-blue-600 bg-blue-50';
      case 'Sports': return 'text-green-600 bg-green-50';
      case 'Discipline': return 'text-red-600 bg-red-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };
  
  const getAttachmentIcon = (type) => {
    switch(type) {
      case 'pdf': return <FileText size={14} className="text-red-500" />;
      case 'image': return <ImageIcon size={14} className="text-blue-500" />;
      case 'link': return <LinkIcon size={14} className="text-cyan-500" />;
      default: return <Paperclip size={14} className="text-slate-500" />;
    }
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
              <Bell size={24} className="md:hidden text-white" />
              <Bell size={28} className="hidden md:block text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Notices & Circulars
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Official school announcements and updates</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto p-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <Mail size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-700">Weekly Digest</p>
              <p className="text-[10px] text-slate-500">Auto-emailed every Friday</p>
            </div>
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
              placeholder="Search circulars by title, content, or ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
              <Calendar size={16} />
              <span className="hidden sm:inline">Date</span>
            </button>
            <button className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs & Categories */}
      <div className="mb-6 relative z-10 flex flex-col gap-4">
        <div className="flex gap-2 p-1 bg-white/50 backdrop-blur-sm rounded-xl w-fit">
          {['all', 'urgent', 'saved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-white/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 border ${
                selectedCategory === category.id
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative z-10 max-w-4xl">
        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[8.5rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-300 before:via-purple-300 before:to-transparent before:opacity-30">
          
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
              {/* Date Column (Desktop) */}
              <div className="hidden md:flex flex-col items-end w-28 flex-shrink-0 pt-1">
                <span className="text-xl font-bold text-slate-800">{new Date(notice.date).getDate()}</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{new Date(notice.date).toLocaleString('default', { month: 'long' })}</span>
                <span className="text-[10px] text-slate-400">{new Date(notice.date).getFullYear()}</span>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-5 md:left-[8.5rem] -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 transition-transform group-hover:scale-125 bg-gradient-to-br from-cyan-400 to-blue-500"></div>

              {/* Content Card */}
              <div className="flex-1 ml-10 md:ml-0">
                {/* Mobile Date */}
                <div className="md:hidden flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-slate-800">{new Date(notice.date).getDate()} {new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-xs text-slate-400">{new Date(notice.date).getFullYear()}</span>
                </div>

                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 group-hover:-translate-y-1">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getPriorityColor(notice.priority)} uppercase tracking-wider flex items-center gap-1`}>
                        {notice.priority === 'high' && <AlertCircle size={10} />}
                        {notice.priority} Priority
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getCategoryColor(notice.category)}`}>
                        {notice.category}
                      </span>
                    </div>
                    {!notice.read && (
                       <span className="flex h-2 w-2 relative">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                       </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-cyan-600 transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {notice.description}
                  </p>

                  {/* Attachments */}
                  {notice.attachments.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {notice.attachments.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-1 py-1.5 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer group/file">
                          {getAttachmentIcon(file.type)}
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-slate-700 max-w-[150px] truncate">{file.name}</span>
                            {file.size && <span className="text-[9px] text-slate-400">{file.size}</span>}
                          </div>
                          <button className="p-1.5 hover:bg-white rounded-md text-slate-400 hover:text-cyan-600 transition-colors ml-1">
                            {file.type === 'link' ? <ExternalLink size={14} /> : <Download size={14} />}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <button className="text-xs font-bold text-slate-500 hover:text-cyan-600 flex items-center gap-1 transition-colors">
                         <Eye size={14} /> View
                      </button>
                      <button className="text-xs font-bold text-slate-500 hover:text-pink-600 flex items-center gap-1 transition-colors">
                         <Bookmark size={14} /> Save
                      </button>
                    </div>
                    
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold">Details</span>
                        <span className="text-[8px] opacity-80">get in app</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredNotices.length === 0 && (
             <div className="ml-10 md:ml-[8.5rem] bg-white rounded-2xl p-8 border border-dashed border-slate-300 text-center">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                 <Search size={24} className="text-slate-400" />
               </div>
               <p className="text-slate-500 font-medium">No circulars found matching your criteria</p>
               <button 
                 onClick={() => {setSelectedCategory('all'); setSearchQuery('');}}
                 className="mt-2 text-sm text-cyan-600 font-bold hover:underline"
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

export default NoticesCirculars;
