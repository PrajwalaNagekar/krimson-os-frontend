import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Filter, 
  Plus, 
  Clock,
  Check,
  X,
  Eye,
  Bell,
  Download,
  Users,
  BookOpen,
  Activity,
  UsersRound,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

// Event Card Component
const EventCard = ({ title, category, date, time, location, status, organizer }) => {
  const categoryColors = {
    'Exam': 'bg-red-100 text-red-700 border-red-200',
    'Activity': 'bg-green-100 text-green-700 border-green-200',
    'CCA': 'bg-purple-100 text-purple-700 border-purple-200',
    'PTA': 'bg-blue-100 text-blue-700 border-blue-200',
    'Milestone': 'bg-orange-100 text-orange-700 border-orange-200',
  };

  return (
    <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
          <p className="text-xs text-slate-500">{organizer}</p>
        </div>
        <span className={`px-2 py-1 rounded-lg text-xs font-bold border ${categoryColors[category] || 'bg-slate-100 text-slate-700'}`}>
          {category}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
        <CalendarIcon className="w-3 h-3" />
        <span>{date}</span>
        {time && <span>• {time}</span>}
      </div>
      {location && (
        <p className="text-xs text-slate-500 mb-2">📍 {location}</p>
      )}
      {status && (
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-1.5 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            View Details
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
        </div>
      )}
    </div>
  );
};

// Approval Request Card
const ApprovalRequestCard = ({ title, category, requestedBy, date, time, attendees, priority }) => (
  <div className={`p-4 border-l-4 rounded-xl ${
    priority === 'High' ? 'border-orange-600 bg-orange-50' : 'border-blue-600 bg-blue-50'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Clock className={`w-4 h-4 ${priority === 'High' ? 'text-orange-600' : 'text-blue-600'}`} />
          {priority === 'High' && (
            <span className="px-2 py-0.5 bg-orange-200 text-orange-800 rounded-full text-[10px] font-bold uppercase">
              High Priority
            </span>
          )}
        </div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-xs text-slate-600 mt-1">
          Requested by: <span className="font-semibold">{requestedBy}</span>
        </p>
      </div>
    </div>
    <div className="text-xs text-slate-700 space-y-1 mb-3">
      <p>📅 {date} {time && `• ${time}`}</p>
      {attendees && <p>👥 Expected: {attendees} attendees</p>}
      <p className="font-semibold text-slate-600">Category: {category}</p>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <X className="w-3 h-3" />
        Reject
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Check className="w-3 h-3" />
        Approve
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    </div>
  </div>
);

// Milestone Card
const MilestoneCard = ({ title, type, startDate, endDate, description }) => {
  const milestoneColors = {
    'Midterm': 'from-blue-500 to-indigo-500',
    'Annual Exam': 'from-red-500 to-pink-500',
    'Holiday': 'from-green-500 to-emerald-500',
    'Term Break': 'from-purple-500 to-purple-600',
  };

  return (
    <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all">
      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${milestoneColors[type] || 'from-slate-500 to-slate-600'} text-white rounded-lg text-xs font-bold mb-3`}>
        {type}
      </div>
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-xs text-slate-600 mb-2">
        {startDate} {endDate && `- ${endDate}`}
      </p>
      {description && <p className="text-xs text-slate-500">{description}</p>}
    </div>
  );
};

const EventControl = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('calendar');

  // Static data - to be replaced with API calls
  const upcomingEvents = [
    { title: 'Mid­-Term Mathematics Exam', category: 'Exam', date: 'Jan 25, 2026', time: '9:00 AM', location: 'Exam Hall A', organizer: 'Academic Department', status: 'confirmed' },
    { title: 'Annual Sports Day', category: 'Activity', date: 'Jan 28, 2026', time: '8:00 AM', location: 'Main Stadium', organizer: 'Sports Committee', status: 'confirmed' },
    { title: 'Parent­-Teacher Meeting', category: 'PTA', date: 'Feb 02, 2026', time: '2:00 PM', location: 'Auditorium', organizer: 'PTA Committee', status: 'confirmed' },
    { title: 'Debate Club Meeting', category: 'CCA', date: 'Jan 22, 2026', time: '4:00 PM', location: 'Room 301', organizer: 'CCA Coordinator', status: 'confirmed' },
    { title: 'Science Exhibition', category: 'Activity', date: 'Feb 05, 2026', time: '10:00 AM', location: 'Science Block', organizer: 'Science Department', status: 'confirmed' },
  ];

  const pendingApprovals = [
    { title: 'Science Fair 2026', category: 'Activity', requestedBy: 'Science Department', date: 'Feb 10, 2026', time: '9:00 AM - 5:00 PM', attendees: 200, priority: 'High' },
    { title: 'Cultural Night', category: 'CCA', requestedBy: 'Arts Club', date: 'Feb 15, 2026', time: '6:00 PM', attendees: 150, priority: 'Normal' },
    { title: 'Career Guidance Workshop', category: 'Activity', requestedBy: 'Counseling Dept', date: 'Feb 12, 2026', time: '2:00 PM', attendees: 100, priority: 'Normal' },
  ];

  const termMilestones = [
    { title: 'Mid-Term Examinations', type: 'Midterm', startDate: 'Jan 25', endDate: 'Feb 05', description: 'Grades 7-12' },
    { title: 'Winter Break', type: 'Holiday', startDate: 'Feb 20', endDate: 'Mar 05', description: 'School closed' },
    { title: 'Annual Examinations', type: 'Annual Exam', startDate: 'Mar 15', endDate: 'Apr 10', description: 'Final exams for all grades' },
    { title: 'Summer Vacation', type: 'Holiday', startDate: 'Apr 20', endDate: 'Jun 10', description: 'Long break' },
  ];

  const categoryFilters = ['All', 'Exam', 'Activity', 'CCA', 'PTA'];

  const filteredEvents = activeFilter === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Academic Calendar & Events Control
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Central command for school schedule • Event approvals
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Event</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Total Events</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{upcomingEvents.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <CalendarIcon className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">This month</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Pending</p>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{pendingApprovals.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Require approval</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Milestones</p>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{termMilestones.length}</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">This term</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Sync Status</p>
              <h3 className="text-2xl md:text-3xl font-bold text-green-600">Live</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">All roles synced</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
          <span className="text-sm font-semibold text-slate-600 flex-shrink-0">Filters:</span>
          {categoryFilters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-blue-500" />
              Upcoming Events ({filteredEvents.length})
            </h3>
            <p className="text-sm text-slate-500 mt-1">Filtered by: {activeFilter}</p>
          </div>
          
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto">
            {filteredEvents.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    Approval Queue
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{pendingApprovals.length} pending</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                  {pendingApprovals.filter(a => a.priority === 'High').length} High
                </span>
              </div>
            </div>
            
            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              {pendingApprovals.map((approval, idx) => (
                <ApprovalRequestCard key={idx} {...approval} />
              ))}
            </div>
          </div>

          {/* Auto­-Reminder Config */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 mb-2">Auto-Reminders</h4>
                <p className="text-xs text-purple-800 mb-3">
                  Automated notifications sent to relevant roles upon event creation and 3 days before event date.
                </p>
                <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition-colors">
                  Configure Settings
                  <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Term Milestones */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-500" />
                Color-Coded Term Milestones
              </h3>
              <p className="text-sm text-slate-600 mt-1">Major academic events and breaks</p>
            </div>
          </div>
        </div>
        
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {termMilestones.map((milestone, idx) => (
              <MilestoneCard key={idx} {...milestone} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default EventControl;
