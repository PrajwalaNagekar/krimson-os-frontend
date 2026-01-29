import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Calendar, Plus, Download, Filter, Search, Clock,
  CheckCircle, AlertCircle, Users, BookOpen, TrendingUp,
  X, ChevronLeft, ChevronRight, Settings, Share2,
  Bell, Target, BarChart2, Award, Sparkles, Globe,
  ChevronDown, Eye, Edit, Trash2, MapPin
} from 'lucide-react';

const AcademicCalendar = () => {
  // Current date state
  const [currentDate, setCurrentDate] = useState(new Date('2026-01-19'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [filterType, setFilterType] = useState('all'); // 'all', 'school', 'personal', 'exam', 'holiday'
  const [showSyllabusOverlay, setShowSyllabusOverlay] = useState(false);

  // Sample calendar events
  const [events] = useState([
    {
      id: 'E1',
      title: 'Mid-term Examinations',
      type: 'exam',
      date: '2026-01-22',
      endDate: '2026-01-24',
      time: '09:00 AM',
      duration: '3 days',
      location: 'Main Hall',
      source: 'school',
      color: 'red',
      description: 'Mid-term examinations for Grade 9 and 10'
    },
    {
      id: 'E2',
      title: 'Parent-Teacher Meeting',
      type: 'meeting',
      date: '2026-01-20',
      time: '02:00 PM',
      duration: '2 hours',
      location: 'Conference Room A',
      source: 'personal',
      color: 'purple',
      description: 'Quarterly parent-teacher meeting for Grade 9-A'
    },
    {
      id: 'E3',
      title: 'Science Club Session',
      type: 'club',
      date: '2026-01-21',
      time: '03:30 PM',
      duration: '1 hour',
      location: 'Physics Lab',
      source: 'personal',
      color: 'blue',
      description: 'Weekly science club activity - Robotics workshop'
    },
    {
      id: 'E4',
      title: 'Republic Day Holiday',
      type: 'holiday',
      date: '2026-01-26',
      source: 'school',
      color: 'green',
      description: 'National Holiday - School Closed'
    },
    {
      id: 'E5',
      title: 'Assignment Deadline',
      type: 'assignment',
      date: '2026-01-23',
      time: '11:59 PM',
      location: 'Online Submission',
      source: 'school',
      color: 'orange',
      description: 'Physics Lab Report submission deadline'
    },
    {
      id: 'E6',
      title: 'Curriculum Review Meeting',
      type: 'meeting',
      date: '2026-01-25',
      time: '10:00 AM',
      duration: '1.5 hours',
      location: 'Principal Office',
      source: 'school',
      color: 'purple',
      description: 'Quarterly curriculum review with department head'
    },
  ]);

  // Syllabus progress data
  const [syllabusProgress] = useState([
    { subject: 'Physics - Grade 9', completion: 65, target: 70, onTrack: false },
    { subject: 'Physics - Grade 10', completion: 78, target: 75, onTrack: true },
    { subject: 'Chemistry - Grade 10', completion: 72, target: 75, onTrack: false },
  ]);

  // Calculate time elapsed in academic year (assuming starts Aug 1)
  const academicYearStart = new Date('2025-08-01');
  const academicYearEnd = new Date('2026-05-31');
  const totalDays = Math.floor((academicYearEnd - academicYearStart) / (1000 * 60 * 60 * 24));
  const daysPassed = Math.floor((currentDate - academicYearStart) / (1000 * 60 * 60 * 24));
  const timeElapsedPercent = Math.round((daysPassed / totalDays) * 100);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/calendar')
    //   .then(res => res.json())
    //   .then(data => setEvents(data));
    console.log('Academic Calendar loaded - Ready for API integration');
  }, []);

  // Get calendar days for current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add previous month's days
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: '', isCurrentMonth: false });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    return days;
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => {
      if (event.endDate) {
        const eventStart = new Date(event.date);
        const eventEnd = new Date(event.endDate);
        const currentDay = new Date(dateStr);
        return currentDay >= eventStart && currentDay <= eventEnd;
      }
      return event.date === dateStr;
    }).filter(event => filterType === 'all' || event.type === filterType || event.source === filterType);
  };

  // Navigate months
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Get event color
  const getEventColor = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-700 border-red-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return colors[color] || colors.blue;
  };

  const getEventDotColor = (color) => {
    const colors = {
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
    };
    return colors[color] || colors.blue;
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() &&
           currentDate.getMonth() === today.getMonth() &&
           currentDate.getFullYear() === today.getFullYear();
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Academic Calendar & Planner
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {events.length} events this month • {timeElapsedPercent}% academic year elapsed
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowSyllabusOverlay(!showSyllabusOverlay)}
                className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold shadow-lg hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <Target size={20} />
                <div className="text-left">
                  <div>Plan Ahead</div>
                  <div className="text-[10px] text-black">click here</div>
                </div>
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <Plus size={20} />
                <div className="text-left">
                  <div>Add Event</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Globe size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">Calendar Integration</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">SYNCED</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Auto-sync enabled with school calendar. Personal events can be exported to Google Calendar and Outlook.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
                <Share2 size={14} />
                Export to Google
              </button>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
                <Share2 size={14} />
                Export to Outlook
              </button>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
                <Settings size={14} />
                Sync Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Progress Overlay */}
      {showSyllabusOverlay && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 md:p-8 border-2 border-blue-200 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Target className="text-blue-500" size={28} />
                Syllabus vs Calendar Analysis
              </h3>
              <p className="text-slate-600">Track your teaching progress against academic timeline</p>
            </div>
            <button
              onClick={() => setShowSyllabusOverlay(false)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Time Elapsed vs Completion */}
          <div className="mb-6 p-6 bg-white rounded-2xl border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-slate-800">Academic Year Progress</h4>
              <span className="text-sm text-slate-600">{daysPassed} of {totalDays} days</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                style={{ width: `${timeElapsedPercent}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600">Time Elapsed: <span className="font-bold text-slate-800">{timeElapsedPercent}%</span></p>
          </div>

          {/* Subject-wise Progress */}
          <div className="space-y-4">
            {syllabusProgress.map((subject, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-800 mb-1">{subject.subject}</h5>
                    <p className="text-xs text-slate-500">Target: {subject.target}% by now</p>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    subject.onTrack 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {subject.onTrack ? '✓ On Track' : '⚠ Behind'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Current Completion</span>
                    <span className="font-bold text-slate-800">{subject.completion}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        subject.onTrack 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                          : 'bg-gradient-to-r from-orange-400 to-red-500'
                      }`}
                      style={{ width: `${subject.completion}%` }}
                    ></div>
                    {/* Target marker */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-slate-700"
                      style={{ left: `${subject.target}%` }}
                      title={`Target: ${subject.target}%`}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Gap: {subject.target - subject.completion}%</span>
                    <span>vs Time Elapsed: {timeElapsedPercent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Controls */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevMonth}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              Today
            </button>
            <button
              onClick={nextMonth}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'all', label: 'All Events', icon: <Calendar size={14} /> },
              { value: 'school', label: 'School', icon: <BookOpen size={14} /> },
              { value: 'personal', label: 'Personal', icon: <Users size={14} /> },
              { value: 'exam', label: 'Exams', icon: <Award size={14} /> },
              { value: 'holiday', label: 'Holidays', icon: <Bell size={14} /> },
            ].map(filter => (
              <button
                key={filter.value}
                onClick={() => setFilterType(filter.value)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
                  filterType === filter.value
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        {/* Day Headers */}
        <div className="grid grid-cols-7 bg-gradient-to-r from-slate-50 to-blue-50 border-b-2 border-blue-100">
          {dayNames.map(day => (
            <div key={day} className="p-4 text-center font-bold text-slate-600 text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {getDaysInMonth().map((dayObj, idx) => {
            const dayEvents = dayObj.isCurrentMonth ? getEventsForDay(dayObj.day) : [];
            const today = isToday(dayObj.day);
            
            return (
              <div
                key={idx}
                className={`min-h-[120px] p-2 border border-slate-100 transition-all ${
                  !dayObj.isCurrentMonth 
                    ? 'bg-slate-50' 
                    : today 
                      ? 'bg-blue-50 border-blue-300' 
                      : 'hover:bg-slate-50'
                }`}
              >
                {dayObj.isCurrentMonth && (
                  <>
                    <div className={`text-sm font-bold mb-2 ${
                      today 
                        ? 'w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center' 
                        : 'text-slate-700'
                    }`}>
                      {dayObj.day}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map(event => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedDate(event)}
                          className={`px-2 py-1 rounded-lg text-xs font-bold cursor-pointer hover:shadow-md transition-all border ${getEventColor(event.color)}`}
                        >
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${getEventDotColor(event.color)}`}></div>
                            <span className="truncate">{event.title}</span>
                          </div>
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-slate-500 font-bold px-2">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedDate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getEventColor(selectedDate.color)}`}>
                    {selectedDate.type.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                    {selectedDate.source === 'school' ? '🏫 School Event' : '👤 Personal Event'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedDate.title}</h2>
                <p className="text-slate-600">{selectedDate.description}</p>
              </div>
              <button
                onClick={() => setSelectedDate(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Event Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar size={20} className="text-blue-500" />
                <span className="font-bold">
                  {new Date(selectedDate.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              {selectedDate.time && (
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock size={20} className="text-purple-500" />
                  <span>{selectedDate.time} {selectedDate.duration && `• ${selectedDate.duration}`}</span>
                </div>
              )}
              {selectedDate.location && (
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-green-500" />
                  <span>{selectedDate.location}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Edit size={18} />
                <div className="text-left">
                  <div>Edit Event</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                <Trash2 size={18} />
                <div className="text-left">
                  <div>Delete</div>
                  <div className="text-[10px] text-red-400">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicCalendar;
