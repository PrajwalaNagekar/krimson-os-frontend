import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import {
  Calendar, Plus, Download, Filter, Search, Clock,
  CheckCircle, AlertCircle, Users, BookOpen, TrendingUp,
  X, ChevronLeft, ChevronRight, Settings, Share2,
  Bell, Target, BarChart2, Award, Sparkles, Globe,
  ChevronDown, Eye, Edit, Trash2, MapPin, MessageSquare,
  Layout, Send, ShieldCheck, CheckCircle2, Lock, Unlock, ClipboardList, Activity
} from 'lucide-react';

import SuccessToast from '../../../components/common/SuccessToast';

const AcademicCalendar = () => {
  // Current date state
  const [currentDate, setCurrentDate] = useState(new Date('2026-01-19'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [filterType, setFilterType] = useState('all'); // 'all', 'school', 'personal', 'exam', 'holiday'
  const [showSyllabusOverlay, setShowSyllabusOverlay] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [toast, setToast] = useState({ isOpen: false, message: '' });
  const [isExporting, setIsExporting] = useState(null); // 'google', 'outlook', or null
  const [syncSettings, setSyncSettings] = useState({
    autoSync: true,
    syncFrequency: 'daily',
    exportFormat: 'ical'
  });
  const [newEventData, setNewEventData] = useState({
    title: '',
    type: 'school',
    date: '2026-01-19',
    time: '',
    location: '',
    description: '',
    color: 'blue'
  });

  // Daily Update Composer States
  const [showUpdateComposer, setShowUpdateComposer] = useState(false);
  const [isAiDrafting, setIsAiDrafting] = useState(false);
  const [updatePreview, setUpdatePreview] = useState(false);
  const [updateDraft, setUpdateDraft] = useState({
    topic: '',
    activity: '',
    takeaway: '',
    homework: '',
    classId: '9-A',
    visibility: 'all' // 'all', 'parents', 'students'
  });

  const [updateHistory, setUpdateHistory] = useState([
    {
      id: 'U1',
      date: 'Jan 18, 2026',
      class: '9-B',
      topic: 'Photosynthesis Lab',
      message: 'Completed the iodine test for starch. Most students observed dark blue color in exposed leaves.',
      visibility: 'all'
    }
  ]);

  const handleAiDraft = () => {
    setIsAiDrafting(true);
    setTimeout(() => {
      const draft = `Today in ${updateDraft.classId}, we explored ${updateDraft.topic || '[Topic]'}. ` +
        `The students participated in ${updateDraft.activity || '[Activity]'} and observed ${updateDraft.takeaway || '[Key Observation]'}. ` +
        `${updateDraft.homework ? 'Please remember to: ' + updateDraft.homework : ''}`;

      setUpdateDraft(prev => ({ ...prev, message: draft }));
      setIsAiDrafting(false);
    }, 1500);
  };

  // Fortnight Reflection Composer States (Screen 219)
  const [showReflectionComposer, setShowReflectionComposer] = useState(false);
  const [reflectionDraft, setReflectionDraft] = useState({
    misconceptions: '',
    engagement: '',
    pacing: '',
    adjustments: '',
    classId: '9-A',
    cycle: 'Jan 15 - Jan 30, 2026'
  });

  const [reflectionHistory, setReflectionHistory] = useState([
    {
      id: 'R1',
      cycle: 'Jan 01 - Jan 14, 2026',
      class: '9-A',
      summary: 'Focused on Mechanics. Students engaged well with the pulley systems lab, but several struggled with free-body diagrams.',
      status: 'locked'
    }
  ]);

  const [isAiRefining, setIsAiRefining] = useState(false);
  const [reflectionSummary, setReflectionSummary] = useState('');
  // const timeElapsedPercent = 32.5; // Calculated based on current cycle

  const handleAiReflection = () => {
    setIsAiRefining(true);
    setTimeout(() => {
      const summary = `Reflection for ${reflectionDraft.cycle}: The last fortnight showed ${reflectionDraft.engagement || 'consistent'} engagement. ` +
        `The primary hurdle was ${reflectionDraft.misconceptions || 'general conceptual understanding'}. ` +
        `Pacing was ${reflectionDraft.pacing || 'on track'}. Strategic adjustment: ${reflectionDraft.adjustments || 'increase guided practice'}.`;

      setReflectionSummary(summary);
      setIsAiRefining(false);
    }, 1500);
  };

  // Sample calendar events
  const [events, setEvents] = useState([
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

  // Handle Save Event
  const handleSaveEvent = () => {
    if (!newEventData.title || !newEventData.date) return;

    if (newEventData.id) {
      // Update existing event
      setEvents(prev => prev.map(ev => ev.id === newEventData.id ? { ...newEventData } : ev));
    } else {
      // Add new event
      const newEvent = {
        ...newEventData,
        id: `E${Date.now()}`,
        source: 'personal' // Newly added events are personal by default
      };
      setEvents(prev => [...prev, newEvent]);
    }

    setShowAddModal(false);
    setToast({ isOpen: true, message: `Event "${newEventData.title}" ${newEventData.id ? 'updated' : 'saved'} successfully!` });
    setNewEventData({
      title: '',
      type: 'school',
      date: '2026-01-19',
      time: '',
      location: '',
      description: '',
      color: 'blue'
    });
  };

  // Handle Delete Event
  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(ev => ev.id !== id));
      setSelectedDate(null);
    }
  };

  // Open Edit Modal
  const openEditModal = (event) => {
    setNewEventData({ ...event });
    setShowAddModal(true);
    setSelectedDate(null);
  };

  // Handle Export Simulation
  const handleExport = (platform) => {
    setIsExporting(platform);
    setTimeout(() => {
      setIsExporting(null);
      setToast({ isOpen: true, message: `Calendar exported to ${platform === 'google' ? 'Google' : 'Outlook'} successfully!` });
    }, 2000);
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20 mb-4">
            <Sparkles size={12} className="text-cyan-300" />
            Krimson OS • Academic Planner
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter leading-none">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <p className="opacity-80 font-bold text-sm md:text-lg max-w-2xl leading-relaxed">
                {events.length} system events indexed for the current cycle • {timeElapsedPercent}% academic progress.
              </p>
            </div>

            <div className="flex items-center gap-3 relative z-20">
              <button
                onClick={() => setShowSyllabusOverlay(!showSyllabusOverlay)}
                className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-lg hover:bg-white/20 transition-all flex items-center gap-4 group"
              >
                <div className="p-2 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform">
                  <Target size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tighter leading-none mb-1">Plan Ahead</div>
                  <div className="text-[9px] font-black text-white/60 uppercase tracking-widest">Curriculum Map</div>
                </div>
              </button>

              <button
                onClick={() => setShowReflectionComposer(true)}
                className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-lg hover:bg-white/20 transition-all flex items-center gap-4 group"
              >
                <div className="p-2 bg-white/20 rounded-xl group-hover:translate-y-[-2px] transition-transform">
                  <ClipboardList size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tighter leading-none mb-1">Fortnight Reflection</div>
                  <div className="text-[9px] font-black text-white/60 uppercase tracking-widest">Internal Analysis</div>
                </div>
              </button>

              <button
                onClick={() => setShowUpdateComposer(true)}
                className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-lg hover:bg-white/20 transition-all flex items-center gap-4 group"
              >
                <div className="p-2 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageSquare size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tighter leading-none mb-1">Daily Update</div>
                  <div className="text-[9px] font-black text-white/60 uppercase tracking-widest">Community Feed</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setNewEventData({ ...newEventData, date: currentDate.toISOString().split('T')[0] });
                  setShowAddModal(true);
                }}
                className="px-6 py-4 bg-white text-blue-600 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center gap-4 active:scale-95 group"
              >
                <div className="p-2 bg-blue-50 rounded-xl group-hover:rotate-90 transition-transform">
                  <Plus size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tighter leading-none mb-1">Add Event</div>
                  <div className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Manual Sync</div>
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
              <button
                onClick={() => handleExport('google')}
                disabled={isExporting !== null}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2 disabled:opacity-50"
              >
                {isExporting === 'google' ? <Clock size={14} className="animate-spin" /> : <Share2 size={14} />}
                {isExporting === 'google' ? 'Exporting...' : 'Export to Google'}
              </button>
              <button
                onClick={() => handleExport('outlook')}
                disabled={isExporting !== null}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2 disabled:opacity-50"
              >
                {isExporting === 'outlook' ? <Clock size={14} className="animate-spin" /> : <Share2 size={14} />}
                {isExporting === 'outlook' ? 'Exporting...' : 'Export to Outlook'}
              </button>
              <button
                onClick={() => setShowSyncModal(true)}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2"
              >
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
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${subject.onTrack
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
                      className={`h-full rounded-full transition-all ${subject.onTrack
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
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md active:scale-95"
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
                className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${filterType === filter.value
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {filter.icon}
                <span className="leading-none mt-0.5">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        {/* Day Headers */}
        <div className="grid grid-cols-7 bg-gradient-to-r from-slate-50 to-blue-50 border-b-2 border-blue-100 p-1">
          {dayNames.map(day => (
            <div key={day} className="py-4 text-center font-black text-slate-400 text-[10px] uppercase tracking-[0.2em]">
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
                className={`min-h-[120px] p-2 border border-slate-100 transition-all ${!dayObj.isCurrentMonth
                  ? 'bg-slate-50'
                  : today
                    ? 'bg-blue-50 border-blue-300'
                    : 'hover:bg-slate-50'
                  }`}
              >
                {dayObj.isCurrentMonth && (
                  <>
                    <div className={`text-xs font-black mb-2 ${today
                      ? 'w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30'
                      : 'text-slate-400 tracking-tighter'
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
              <button
                onClick={() => openEditModal(selectedDate)}
                className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Edit size={18} />
                <div className="text-left">
                  <div>Edit Event</div>
                </div>
              </button>
              <button
                onClick={() => handleDeleteEvent(selectedDate.id)}
                className="px-6 py-4 bg-white text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
              >
                <Trash2 size={18} />
                <div className="text-left">
                  <div>Delete</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-2">Add Event</h2>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Manual Schedule Entry</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Event Title</label>
                <input
                  type="text"
                  placeholder="Enter event title..."
                  value={newEventData.title}
                  onChange={(e) => setNewEventData({ ...newEventData, title: e.target.value })}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Date</label>
                  <input
                    type="date"
                    value={newEventData.date}
                    onChange={(e) => setNewEventData({ ...newEventData, date: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Type</label>
                  <select
                    value={newEventData.type}
                    onChange={(e) => setNewEventData({ ...newEventData, type: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                  >
                    <option value="school">School</option>
                    <option value="personal">Personal</option>
                    <option value="exam">Exam</option>
                    <option value="holiday">Holiday</option>
                    <option value="meeting">Meeting</option>
                    <option value="club">Club</option>
                    <option value="assignment">Assignment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Time (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., 09:00 AM"
                    value={newEventData.time}
                    onChange={(e) => setNewEventData({ ...newEventData, time: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Color Tag</label>
                  <select
                    value={newEventData.color}
                    onChange={(e) => setNewEventData({ ...newEventData, color: e.target.value })}
                    className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm"
                  >
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Location</label>
                <input
                  type="text"
                  placeholder="e.g., Main Hall"
                  value={newEventData.location}
                  onChange={(e) => setNewEventData({ ...newEventData, location: e.target.value })}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Description</label>
                <textarea
                  placeholder="Event details..."
                  value={newEventData.description}
                  onChange={(e) => setNewEventData({ ...newEventData, description: e.target.value })}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none min-h-[100px] text-sm"
                />
              </div>

              <div className="flex gap-3 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Discard
                </button>
                <button
                  onClick={handleSaveEvent}
                  disabled={!newEventData.title || !newEventData.date}
                  className="flex-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 disabled:opacity-50"
                >
                  {newEventData.id ? 'Update Entry' : 'Lock Event'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Daily Update Composer Modal (Screen 218) */}
      {showUpdateComposer && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[70] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-500">
          <div className="bg-white rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-[0_32px_128px_-16px_rgba(0,0,0,0.3)] border-2 border-white/20 flex flex-col md:flex-row relative">

            {/* Close Button */}
            <button
              onClick={() => setShowUpdateComposer(false)}
              className="absolute top-6 right-6 p-3 bg-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-2xl transition-all z-20 active:scale-90"
            >
              <X size={24} />
            </button>

            {/* Left Column: Selection & Guided Writing */}
            <div className="w-full md:w-[45%] p-8 bg-slate-50/50 border-r-2 border-slate-100 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Layout size={28} />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-2">Daily Update</h2>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Guided Classroom Documentation</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Meta Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Target Class</label>
                    <div className="relative">
                      <select
                        value={updateDraft.classId}
                        onChange={(e) => setUpdateDraft({ ...updateDraft, classId: e.target.value })}
                        className="w-full p-4 bg-white border-2 border-slate-100 rounded-[1.5rem] text-xs font-black text-slate-700 outline-none focus:border-blue-400 appearance-none transition-all shadow-sm"
                      >
                        <option>9-A</option>
                        <option>9-B</option>
                        <option>10-A</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Visibility</label>
                    <div className="relative">
                      <select
                        value={updateDraft.visibility}
                        onChange={(e) => setUpdateDraft({ ...updateDraft, visibility: e.target.value })}
                        className="w-full p-4 bg-white border-2 border-slate-100 rounded-[1.5rem] text-xs font-black text-slate-700 outline-none focus:border-blue-400 appearance-none transition-all shadow-sm"
                      >
                        <option value="all">Parents & Students</option>
                        <option value="parents">Parents Only</option>
                        <option value="students">Students Only</option>
                      </select>
                      <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* Writing Slots */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">1. Today's Topic</label>
                    <input
                      type="text"
                      placeholder="e.g. Evaporation and Condensation"
                      value={updateDraft.topic}
                      onChange={(e) => setUpdateDraft({ ...updateDraft, topic: e.target.value })}
                      className="w-full p-5 bg-white border-2 border-slate-100 rounded-[1.5rem] text-sm font-bold text-slate-800 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">2. Core Activity</label>
                    <textarea
                      placeholder="e.g. Conducted Lab Activity 4.2 with beaker and hot plate..."
                      value={updateDraft.activity}
                      onChange={(e) => setUpdateDraft({ ...updateDraft, activity: e.target.value })}
                      className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2rem] text-sm font-medium text-slate-700 outline-none focus:border-blue-500 min-h-[120px] resize-none transition-all placeholder:text-slate-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-3" >
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">3. Key Takeaway / Observation</label>
                    <textarea
                      placeholder="e.g. Students successfully identified boiling points and humidity effects..."
                      value={updateDraft.takeaway}
                      onChange={(e) => setUpdateDraft({ ...updateDraft, takeaway: e.target.value })}
                      className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2rem] text-sm font-medium text-slate-700 outline-none focus:border-blue-500 min-h-[120px] resize-none transition-all placeholder:text-slate-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">4. Homework / Next Steps (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Complete worksheet 4 Exercise B"
                      value={updateDraft.homework}
                      onChange={(e) => setUpdateDraft({ ...updateDraft, homework: e.target.value })}
                      className="w-full p-5 bg-blue-50/50 border-2 border-blue-100 rounded-[1.5rem] text-sm font-bold text-blue-800 outline-none focus:border-blue-500 transition-all placeholder:text-blue-200 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: AI Output & Publish */}
            <div className="flex-1 p-8 bg-gradient-to-br from-slate-900 to-[#0f172a] text-white flex flex-col relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-xl">
                      <Sparkles size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black tracking-tight">AI2 Draft Engine</h3>
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mt-1">Tone Optimization Active</p>
                    </div>
                  </div>
                  <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                    <button
                      onClick={() => setUpdatePreview(false)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!updatePreview ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                      Draft
                    </button>
                    <button
                      onClick={() => setUpdatePreview(true)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${updatePreview ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div className="flex-1 relative">
                  {!updatePreview ? (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="p-8 bg-white/5 rounded-[2.5rem] border-2 border-white/10 min-h-[350px] relative group backdrop-blur-sm">
                        {isAiDrafting ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest animate-pulse">Contextualizing Content...</p>
                          </div>
                        ) : updateDraft.message ? (
                          <textarea
                            value={updateDraft.message}
                            onChange={(e) => setUpdateDraft({ ...updateDraft, message: e.target.value })}
                            className="w-full h-full bg-transparent border-none outline-none text-base md:text-lg font-medium leading-relaxed italic text-blue-50 resize-none"
                          />
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
                            <Layout size={64} className="text-blue-400" />
                            <div>
                              <p className="text-lg font-black mb-1">Update Empty</p>
                              <p className="text-xs text-slate-400">Fill in the guided slots on the left to begin drafting.</p>
                            </div>
                            <button
                              onClick={handleAiDraft}
                              className="px-6 py-3 bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
                            >
                              Initialize Auto-Draft
                            </button>
                          </div>
                        )}
                      </div>

                      {updateDraft.message && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <button
                            onClick={handleAiDraft}
                            className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                          >
                            <Sparkles size={14} className="text-blue-400" />
                            Refine Tone
                          </button>
                          <button
                            onClick={() => setUpdateDraft({ ...updateDraft, message: '' })}
                            className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all flex items-center justify-center gap-2"
                          >
                            <X size={14} />
                            Reset Engine
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white rounded-[2.5rem] p-8 text-slate-800 animate-in zoom-in-95 duration-500 h-full relative overflow-hidden backdrop-blur-xl border border-white/20">
                      {/* Parent View Mockup */}
                      <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-5">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">T</div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-tight">Krimson OS • Daily Update</p>
                          <p className="text-[10px] text-slate-400 font-bold">Science Teacher • Grade {updateDraft.classId}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
                          {updateDraft.topic || 'Class Update'}
                        </h4>
                        <div className="prose prose-slate max-w-none">
                          <p className="text-sm font-medium leading-relaxed text-slate-600">
                            {updateDraft.message || 'Complete the draft to see instructions here.'}
                          </p>
                        </div>

                        <div className="pt-8 flex items-center gap-4">
                          <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                            Topic: {updateDraft.topic || 'General'}
                          </div>
                          <div className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                            Official Sync
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8 p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-center justify-between">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authentication Signature</p>
                        <ShieldCheck className="text-emerald-500" size={16} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex items-center gap-3 text-slate-500 mb-2">
                    <div className={`w-2 h-2 rounded-full ${updateDraft.message ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse' : 'bg-slate-600'}`}></div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                      {updateDraft.message ? 'Integrity Check Passed • Ready for publication' : 'Awaiting content generation'}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowUpdateComposer(false)}
                      className="flex-1 py-5 bg-white/5 border border-white/10 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-slate-400"
                    >
                      Save As Internal Draft
                    </button>
                    <button
                      onClick={() => {
                        const newUpdate = {
                          id: Date.now(),
                          date: new Date().toLocaleDateString(),
                          class: updateDraft.classId,
                          topic: updateDraft.topic,
                          message: updateDraft.message,
                          visibility: updateDraft.visibility
                        };
                        setUpdateHistory([newUpdate, ...updateHistory]);
                        setToast({ isOpen: true, message: 'Daily Update published to parents successfully.' });
                        setShowUpdateComposer(false);
                        setUpdateDraft({
                          topic: '',
                          activity: '',
                          takeaway: '',
                          homework: '',
                          classId: '9-A',
                          visibility: 'all'
                        });
                      }}
                      disabled={!updateDraft.message}
                      className="flex-[1.5] py-5 bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-700 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale disabled:scale-100"
                    >
                      <Send size={18} />
                      Publish Official Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fortnight Reflection Composer Modal (Screen 219) */}
      {showReflectionComposer && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-2xl z-[80] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-700">
          <div className="bg-white rounded-[3.5rem] w-full max-w-7xl max-h-[92vh] overflow-hidden shadow-[0_40px_160px_-24px_rgba(0,0,0,0.4)] border-4 border-white/40 flex flex-col lg:flex-row relative">

            {/* Close Button */}
            <button
              onClick={() => setShowReflectionComposer(false)}
              className="absolute top-8 right-8 p-3 bg-slate-100/80 text-slate-400 hover:text-slate-800 hover:bg-white rounded-2xl transition-all z-30 active:scale-90 border border-slate-200"
            >
              <X size={24} />
            </button>

            {/* Left Column: Reflection Inputs */}
            <div className="w-full lg:w-[42%] p-10 bg-slate-50/80 border-r-4 border-slate-100 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-5 mb-12">
                <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                  <ClipboardList size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-2">Fortnight Reflection</h2>
                  <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">Internal Professional Dialogue</p>
                </div>
              </div>

              <div className="space-y-10">
                {/* Meta Selection */}
                <div className="flex items-center gap-4 bg-white p-2 rounded-[2rem] border-2 border-slate-100 shadow-sm">
                  <div className="flex-1 px-6">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Observation Period</p>
                    <p className="text-xs font-black text-slate-800 tracking-tight">{reflectionDraft.cycle}</p>
                  </div>
                  <div className="w-px h-10 bg-slate-100"></div>
                  <div className="flex-1 px-6">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Context</p>
                    <p className="text-xs font-black text-slate-800 tracking-tight">Grade {reflectionDraft.classId} • Physics</p>
                  </div>
                </div>

                {/* Reflection Slots */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">1. Recurring Misconceptions</label>
                    <textarea
                      placeholder="Identify patterns in student errors or conceptual blocks..."
                      value={reflectionDraft.misconceptions}
                      onChange={(e) => setReflectionDraft({ ...reflectionDraft, misconceptions: e.target.value })}
                      className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 min-h-[140px] resize-none transition-all placeholder:text-slate-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">2. Engagement Patterns</label>
                    <textarea
                      placeholder="Reflect on student focus, participation, and classroom atmosphere..."
                      value={reflectionDraft.engagement}
                      onChange={(e) => setReflectionDraft({ ...reflectionDraft, engagement: e.target.value })}
                      className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 min-h-[140px] resize-none transition-all placeholder:text-slate-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">3. Strategic Adjustments</label>
                    <textarea
                      placeholder="What specific changes will you implement in the next fortnight?"
                      value={reflectionDraft.adjustments}
                      onChange={(e) => setReflectionDraft({ ...reflectionDraft, adjustments: e.target.value })}
                      className="w-full p-6 bg-emerald-50/30 border-2 border-emerald-100 rounded-[2.5rem] text-sm font-black text-emerald-900 outline-none focus:border-emerald-500 min-h-[140px] resize-none transition-all placeholder:text-emerald-200 shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Analytics & Review */}
            <div className="flex-1 bg-slate-900 border-l-4 border-slate-800 p-10 flex flex-col relative overflow-hidden">
              {/* Decorative Gradient Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

              <div className="relative z-10 flex flex-col h-full space-y-10">
                {/* System Signals (Data Pulled) */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-xl">
                        <Activity size={20} className="text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-black text-white tracking-tight">Fortnight Analytics Signals</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black text-emerald-400 uppercase tracking-widest">LIVE SYNC</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group hover:bg-white/[0.08] transition-all">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] mb-4">Syllabus Completion</p>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-white tracking-tighter">84%</span>
                        <span className="text-emerald-400 text-[10px] font-black mb-1.5">+2.4%</span>
                      </div>
                      <div className="mt-5 h-2 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-[84%] bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.3)]"></div>
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group hover:bg-white/[0.08] transition-all">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] mb-4">Avg Assessment Score</p>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-white tracking-tighter">72.5%</span>
                        <span className="text-red-400 text-[10px] font-black mb-1.5">-1.2%</span>
                      </div>
                      <div className="mt-5 flex items-end gap-1.5 h-10">
                        {[20, 35, 65, 40, 85, 48, 42].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-sm transition-all duration-500 h-full ${i === 4 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]' : 'bg-white/20'}`} style={{ height: h + '%' }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Reflection Area */}
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Sparkles size={18} className="text-blue-400" />
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">AI2 Reflective Assistant</h4>
                    </div>
                    <button
                      onClick={handleAiReflection}
                      disabled={isAiRefining}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-50"
                    >
                      {isAiRefining ? 'Contextualizing...' : 'Synthesize Insights'}
                    </button>
                  </div>

                  <div className="flex-1 p-8 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm relative group overflow-y-auto">
                    {isAiRefining ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <div className="w-10 h-10 border-4 border-blue-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                        <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Detecting Patterns...</p>
                      </div>
                    ) : reflectionSummary ? (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p className="text-lg font-medium leading-relaxed italic text-blue-50">{reflectionSummary}</p>
                        <div className="pt-6 border-t border-white/10">
                          <h5 className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-3">Suggested Prompts:</h5>
                          <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300">How did the last lab impact the low achievers?</span>
                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300">Is the assessment average tied to pacing pressure?</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                        <div className="p-4 bg-white/5 rounded-full">
                          <ClipboardList size={48} className="text-slate-500" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-400">Reflection Empty</p>
                          <p className="text-[10px] text-slate-500 max-w-[240px] mt-1 italic">Professional reflection is a private process. Your entries are visible only to you and academic leadership.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-8 border-t border-white/5 space-y-6">
                  <div className="flex items-center justify-between p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <ShieldCheck size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.25em]">Private & Encrypted Analysis</p>
                        <p className="text-[9px] text-slate-500 font-black mt-1">Visible to Teacher • Dept. Head • Academic Leadership</p>
                      </div>
                    </div>
                    <Lock size={16} className="text-emerald-500/40" />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowReflectionComposer(false)}
                      className="flex-1 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:bg-white/10 transition-all"
                    >
                      Discard Analysis
                    </button>
                    <button
                      onClick={() => {
                        const newRef = {
                          id: Date.now(),
                          cycle: reflectionDraft.cycle,
                          class: reflectionDraft.classId,
                          summary: reflectionSummary || 'Internal Professional Reflection',
                          status: 'locked'
                        };
                        setReflectionHistory([newRef, ...reflectionHistory]);
                        setToast({ isOpen: true, message: 'Fortnight reflection locked and stored securely.' });
                        setShowReflectionComposer(false);
                        setReflectionDraft({
                          misconceptions: '',
                          engagement: '',
                          pacing: '',
                          adjustments: '',
                          classId: '9-A',
                          cycle: 'Jan 15 - Jan 30, 2026'
                        });
                        setReflectionSummary('');
                      }}
                      disabled={!reflectionDraft.misconceptions && !reflectionDraft.adjustment}
                      className="flex-[1.5] py-5 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.25em] shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale disabled:scale-100"
                    >
                      <Lock size={18} />
                      Lock Fortnight Cycle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSyncModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tighter">Sync Settings</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">External API Integrations</p>
              </div>
              <button
                onClick={() => setShowSyncModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div>
                  <h4 className="font-bold text-slate-800">Automatic Sync</h4>
                  <p className="text-xs text-slate-500">Keep school calendar updated</p>
                </div>
                <button
                  onClick={() => setSyncSettings({ ...syncSettings, autoSync: !syncSettings.autoSync })}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${syncSettings.autoSync ? 'bg-blue-500' : 'bg-slate-300'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${syncSettings.autoSync ? 'translate-x-6' : ''}`} />
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Sync Frequency</label>
                <select
                  value={syncSettings.syncFrequency}
                  onChange={(e) => setSyncSettings({ ...syncSettings, syncFrequency: e.target.value })}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none bg-white text-sm font-medium"
                >
                  <option value="realtime">Real-time</option>
                  <option value="hourly">Every Hour</option>
                  <option value="daily">Daily</option>
                </select>
              </div>

              <div className="flex gap-3 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setShowSyncModal(false)}
                  className="flex-1 px-6 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Discard
                </button>
                <button
                  onClick={() => {
                    setToast({ isOpen: true, message: 'Synchronization settings updated.' });
                    setShowSyncModal(false);
                  }}
                  className="flex-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <SuccessToast
        isOpen={toast.isOpen}
        message={toast.message}
        onClose={() => setToast({ ...toast, isOpen: false })}
      />
    </div >
  );
};

export default AcademicCalendar;
