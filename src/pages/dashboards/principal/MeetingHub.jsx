import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Clock,
  MapPin,
  Users,
  FileText,
  Star,
  ThumbsUp,
  AlertCircle,
  CheckCircle,
  Plus,
  Download,
  Eye,
  Send,
  UserPlus,
  TrendingUp
} from 'lucide-react';

// Meeting Card Component
const MeetingCard = ({ meeting }) => {
  const getTypeColor = () => {
    switch (meeting.type) {
      case 'Internal':
        return 'from-blue-500 to-indigo-500';
      case 'Parent':
        return 'from-purple-500 to-pink-500';
      case 'Department':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  const getStatusBadge = () => {
    switch (meeting.status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-700';
      case 'Scheduled':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 hover:shadow-lg transition-all hover:border-blue-300">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Time Badge */}
        <div className={`flex flex-col items-center justify-center p-2 sm:p-3 bg-gradient-to-br ${getTypeColor()} rounded-lg text-white min-w-[70px] sm:min-w-[80px]`}>
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
          <span className="text-xs sm:text-sm font-bold text-center leading-tight">{meeting.time}</span>
        </div>
        
        {/* Meeting Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h4 className="font-bold text-sm sm:text-base text-slate-800 truncate">{meeting.title}</h4>
            <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap self-start ${getStatusBadge()}`}>
              {meeting.status}
            </span>
          </div>
          
          <div className="space-y-1 mb-3">
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {meeting.location}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {meeting.attendees} attendees
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-lg text-xs font-bold text-slate-700 transition-all">
              <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">View Agenda</span>
              <span className="sm:hidden">Agenda</span>
              <span className="text-[8px] opacity-70">(get in app)</span>
            </button>
            <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg text-xs font-bold transition-all shadow-sm">
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Record MoM</span>
              <span className="sm:hidden">MoM</span>
              <span className="text-[8px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feedback Card Component
const FeedbackCard = ({ feedback }) => {
  const getTypeColor = () => {
    switch (feedback.type) {
      case 'Parent':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-800',
          badge: 'bg-purple-100 text-purple-700',
          icon: 'text-purple-600'
        };
      case 'Teacher':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          badge: 'bg-blue-100 text-blue-700',
          icon: 'text-blue-600'
        };
      case 'Staff':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-800',
          badge: 'bg-green-100 text-green-700',
          icon: 'text-green-600'
        };
      default:
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-800',
          badge: 'bg-slate-100 text-slate-700',
          icon: 'text-slate-600'
        };
    }
  };

  const colors = getTypeColor();

  return (
    <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 ${colors.border} ${colors.bg} hover:shadow-md transition-all`}>
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <User className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.icon}`} />
          <div>
            <h4 className={`font-bold text-xs sm:text-sm ${colors.text}`}>{feedback.sender}</h4>
            <span className={`text-[10px] sm:text-xs ${colors.badge} px-2 py-0.5 rounded-full font-bold`}>
              {feedback.type}
            </span>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">{feedback.time}</span>
      </div>
      
      <p className={`text-xs sm:text-sm ${colors.text} mb-3 line-clamp-2 italic`}>
        "{feedback.message}"
      </p>
      
      {feedback.rating && (
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                i < feedback.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
              }`}
            />
          ))}
        </div>
      )}
      
      <div className="flex gap-2">
        <button className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 ${colors.badge} hover:opacity-80 rounded-lg text-xs font-bold transition-all`}>
          <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Acknowledge
          <span className="text-[8px] opacity-70">(get in app)</span>
        </button>
        <button className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-700 transition-all">
          <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Reply
          <span className="text-[8px] opacity-70">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

// Minutes of Meeting Card
const MoMCard = ({ mom }) => (
  <div className="bg-slate-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white transition-all">
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-800">{mom.meeting}</h4>
          <p className="text-[10px] sm:text-xs text-slate-500">{mom.date}</p>
        </div>
      </div>
      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold">
        Recorded
      </span>
    </div>
    <p className="text-xs sm:text-sm text-slate-600 mb-2 line-clamp-2">{mom.summary}</p>
    <div className="flex gap-2">
      <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-bold text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all">
        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        View
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        Download
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
    </div>
  </div>
);

const MeetingHub = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [feedbackFilter, setFeedbackFilter] = useState('all');

  // Static data for meetings
  const meetings = [
    {
      title: 'Weekly Staff Sync',
      time: '09:00 AM',
      location: 'Conference Room A',
      type: 'Internal',
      status: 'Scheduled',
      attendees: 24
    },
    {
      title: 'Parent Meeting: Mr. & Mrs. Lee',
      time: '11:30 AM',
      location: 'Principal Office',
      type: 'Parent',
      status: 'Scheduled',
      attendees: 3
    },
    {
      title: 'Science Department Review',
      time: '02:00 PM',
      location: 'Lab Building',
      type: 'Department',
      status: 'Scheduled',
      attendees: 8
    },
    {
      title: 'Budget Planning Session',
      time: '04:30 PM',
      location: 'Admin Block',
      type: 'Internal',
      status: 'Scheduled',
      attendees: 6
    }
  ];

  // Static data for feedback
  const feedbackData = [
    {
      sender: 'Mrs. Sarah Johnson',
      type: 'Parent',
      message: 'The new bus route timing is causing delays for Grade 4 students. Could we review the schedule?',
      time: 'Yesterday',
      rating: 4
    },
    {
      sender: 'Mr. David Chen',
      type: 'Teacher',
      message: 'The projector in Lab 3 needs urgent replacement. It\'s affecting our practical sessions.',
      time: '2 hours ago',
      rating: 3
    },
    {
      sender: 'Ms. Emily Roberts',
      type: 'Staff',
      message: 'Cafeteria supplies need restocking. Running low on essentials for next week.',
      time: '5 hours ago',
      rating: null
    },
    {
      sender: 'Mr. & Mrs. Kumar',
      type: 'Parent',
      message: 'Very pleased with the new library facilities. Our daughter loves the reading corner!',
      time: '1 day ago',
      rating: 5
    },
    {
      sender: 'Dr. Lisa Wong',
      type: 'Teacher',
      message: 'Request for additional training on the new LMS platform for better student engagement.',
      time: '2 days ago',
      rating: 4
    }
  ];

  // Static data for Minutes of Meetings
  const minutesOfMeetings = [
    {
      meeting: 'Monthly Board Review',
      date: 'Jan 15, 2026',
      summary: 'Discussed Q4 performance, budget allocation for next term, and infrastructure upgrades.'
    },
    {
      meeting: 'Academic Excellence Committee',
      date: 'Jan 12, 2026',
      summary: 'Reviewed student performance metrics, introduced new teaching methodologies for science subjects.'
    },
    {
      meeting: 'Parent-Teacher Association',
      date: 'Jan 10, 2026',
      summary: 'Addressed parent concerns about extracurricular activities and upcoming sports day event.'
    }
  ];

  const filteredFeedback = feedbackFilter === 'all' 
    ? feedbackData 
    : feedbackData.filter(f => f.type === feedbackFilter);

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Meeting & Feedback Hub
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Track meetings, attendance & departmental feedback
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Schedule Meeting</span>
                <span className="sm:hidden">Schedule</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white text-cyan-600 hover:bg-white/90 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-lg">
                <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Add Attendees</span>
                <span className="sm:hidden">Attendees</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Pane: Meetings */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                  <span className="text-sm sm:text-base md:text-lg">Today's Schedule</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{meetings.length} meetings planned</p>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap">
                View Calendar
                <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 max-h-[600px]">
            {meetings.map((meeting, idx) => (
              <MeetingCard key={idx} meeting={meeting} />
            ))}
          </div>

          {/* Minutes of Meetings Section */}
          <div className="border-t border-slate-200 bg-slate-50">
            <div className="p-4 sm:p-5">
              <h4 className="font-bold text-sm sm:text-base text-slate-800 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                Recent MoM
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {minutesOfMeetings.slice(0, 2).map((mom, idx) => (
                  <MoMCard key={idx} mom={mom} />
                ))}
              </div>
              <button className="w-full mt-3 px-3 py-2 border-2 border-slate-300 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 rounded-lg text-xs sm:text-sm font-bold transition-all">
                View All Minutes
                <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Pane: Feedback */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-sm sm:text-base md:text-lg">Feedback Summary</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{filteredFeedback.length} items to review</p>
              </div>
            </div>

            {/* Feedback Filter */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['all', 'Parent', 'Teacher', 'Staff'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFeedbackFilter(filter)}
                  className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    feedbackFilter === filter
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 max-h-[600px]">
            {filteredFeedback.map((feedback, idx) => (
              <FeedbackCard key={idx} feedback={feedback} />
            ))}
          </div>

          {/* Feedback Stats */}
          <div className="border-t border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5">
            <h4 className="font-bold text-sm sm:text-base text-slate-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              Feedback Overview
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-blue-600">42</p>
                <p className="text-[10px] sm:text-xs text-slate-600">This Week</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-green-600">4.2</p>
                <p className="text-[10px] sm:text-xs text-slate-600">Avg Rating</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-yellow-600">87%</p>
                <p className="text-[10px] sm:text-xs text-slate-600">Resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MeetingHub;
