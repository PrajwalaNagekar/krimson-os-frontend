import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Calendar, Plus, Paperclip, CheckCircle, Clock, BookOpen,
  Target, Package, Link2, Sparkles, ChevronRight, ChevronDown,
  FileText, Upload, Edit, Trash2, Eye, Award, Lightbulb,
  PlayCircle, Download, Share2, Copy
} from 'lucide-react';

const LessonPlanning = () => {
  const { lessons, user } = TEACHER_DATA;
  const [selectedDay, setSelectedDay] = useState('monday');
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentWeek, setCurrentWeek] = useState('Week of Jan 20-24, 2026');

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/lessons')
    //   .then(res => res.json())
    //   .then(data => setLessons(data));
    console.log('Lesson Planning loaded - Ready for API integration');
  }, []);

  const weekDays = [
    { key: 'monday', label: 'Monday', date: '20' },
    { key: 'tuesday', label: 'Tuesday', date: '21' },
    { key: 'wednesday', label: 'Wednesday', date: '22' },
    { key: 'thursday', label: 'Thursday', date: '23' },
    { key: 'friday', label: 'Friday', date: '24' }
  ];

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Taught':
        return 'from-green-400 to-emerald-500';
      case 'Pending':
        return 'from-orange-400 to-amber-500';
      default:
        return 'from-blue-400 to-cyan-500';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Taught':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  // Toggle lesson details
  const toggleLesson = (lessonId) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  // Count lessons by status
  const countByStatus = (status) => {
    return Object.values(lessons).flat().filter(l => l.status === status).length;
  };

  const totalLessons = Object.values(lessons).flat().length;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Lesson Planning & Upload Center
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Weekly Academic Planner
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {currentWeek} • {totalLessons} Lessons Planned
              </p>
            </div>
            
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 w-fit">
              <Plus size={20} />
              <span>New Lesson Plan</span>
              <span className="text-[10px] opacity-70">get in app</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-cyan-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Lessons</p>
            <BookOpen className="text-cyan-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{totalLessons}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Taught</p>
            <CheckCircle className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">{countByStatus('Taught')}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-orange-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending</p>
            <Clock className="text-orange-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{countByStatus('Pending')}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-purple-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completion</p>
            <Award className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
            {Math.round((countByStatus('Taught') / totalLessons) * 100)}%
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* AI Assistant Card */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Sparkles size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">AI Lesson Assistant</h3>
              <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">SMART</span>
            </div>
            <p className="text-sm opacity-90 mb-3">
              Based on your "Intro to Kinematics" lesson, we suggest: <strong>"Video: Motion in One Dimension"</strong> and <strong>"Worksheet: Velocity-Time Graphs"</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {['Video: Motion Demo', 'Past Lesson: Force Analysis', 'Interactive: Vector Simulator'].map((suggestion, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30">
                  {suggestion}
                </span>
              ))}
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex flex-col items-center active:scale-95 whitespace-nowrap">
            <span>View Suggestions</span>
            <span className="text-[10px] opacity-70">get in app</span>
          </button>
        </div>
      </div>

      {/* Weekly Planner Grid */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="text-blue-500" size={24} />
            Weekly Lesson Schedule
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors">
              Previous Week
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-xs font-bold hover:from-blue-600 hover:to-purple-600 transition-all shadow-md">
              Next Week
            </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {weekDays.map((day) => (
            <div key={day.key} className="space-y-4">
              {/* Day Header */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {day.label}
                </p>
                <p className="text-2xl font-bold text-blue-600">{day.date}</p>
              </div>

              {/* Lessons for the day */}
              <div className="space-y-3 min-h-[400px]">
                {lessons[day.key]?.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all cursor-pointer ${
                      lesson.status === 'Taught'
                        ? 'bg-green-50 border-green-200 hover:border-green-300'
                        : 'bg-white border-blue-200 hover:border-blue-300'
                    }`}
                    onClick={() => toggleLesson(lesson.id)}
                  >
                    {/* Lesson Header */}
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400">{lesson.class}</span>
                      <div className={`px-2 py-1 rounded-lg text-[10px] font-bold border ${getStatusBadgeColor(lesson.status)}`}>
                        {lesson.status}
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2">
                      {lesson.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {lesson.time}
                      </span>
                      <span>{lesson.duration}</span>
                    </div>

                    {/* Subject Badge */}
                    <div className={`inline-block px-2 py-1 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-lg text-xs font-bold mb-3`}>
                      {lesson.subject}
                    </div>

                    {/* Attachments */}
                    {lesson.attachments && lesson.attachments.length > 0 && (
                      <div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                        <Paperclip size={12} />
                        <span>{lesson.attachments.length} files</span>
                      </div>
                    )}

                    {/* Expand indicator */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center">
                      <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700">
                        {expandedLesson === lesson.id ? (
                          <>
                            <ChevronDown size={14} />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronRight size={14} />
                            Details
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}

                {/* Empty state */}
                {(!lessons[day.key] || lessons[day.key].length === 0) && (
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center">
                    <Calendar className="mx-auto text-slate-300 mb-2" size={32} />
                    <p className="text-xs text-slate-400 italic">No lessons planned</p>
                    <button className="mt-3 px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors">
                      + Add Lesson
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet List View */}
        <div className="lg:hidden space-y-4">
          {/* Day Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {weekDays.map((day) => (
              <button
                key={day.key}
                onClick={() => setSelectedDay(day.key)}
                className={`px-4 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
                  selectedDay === day.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div>{day.label}</div>
                <div className="text-lg mt-1">{day.date}</div>
              </button>
            ))}
          </div>

          {/* Lessons for selected day */}
          <div className="space-y-4">
            {lessons[selectedDay]?.map((lesson) => (
              <div
                key={lesson.id}
                className={`p-5 rounded-2xl border-2 shadow-sm ${
                  lesson.status === 'Taught'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-white border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-400">{lesson.class}</span>
                      <span className={`px-2 py-1 rounded-lg text-[10px] font-bold border ${getStatusBadgeColor(lesson.status)}`}>
                        {lesson.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-base mb-2">{lesson.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {lesson.time}
                      </span>
                      <span>•</span>
                      <span>{lesson.duration}</span>
                      <span>•</span>
                      <span className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-lg font-bold`}>
                        {lesson.subject}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleLesson(lesson.id)}
                  className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                >
                  {expandedLesson === lesson.id ? (
                    <>
                      <ChevronDown size={14} />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <Eye size={14} />
                      View Full Details
                    </>
                  )}
                </button>
              </div>
            ))}

            {(!lessons[selectedDay] || lessons[selectedDay].length === 0) && (
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                <Calendar className="mx-auto text-slate-300 mb-3" size={48} />
                <p className="text-sm text-slate-400 mb-4">No lessons planned for this day</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all">
                  + Add Lesson Plan
                  <span className="block text-[10px] opacity-80">get in app</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Lesson Details Modal/Panel */}
      {expandedLesson && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-blue-200">
          {Object.values(lessons).flat().filter(l => l.id === expandedLesson).map((lesson) => (
            <div key={lesson.id} className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-xl font-bold text-sm`}>
                      {lesson.subject}
                    </span>
                    <span className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadgeColor(lesson.status)}`}>
                      {lesson.status}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{lesson.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} className="text-blue-500" />
                      Class: <strong>{lesson.class}</strong>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-purple-500" />
                      {lesson.time} ({lesson.duration})
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all flex items-center gap-2">
                    <Edit size={14} />
                    Edit
                    <span className="text-[10px] opacity-70">get in app</span>
                  </button>
                  <button className="px-4 py-2 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl text-xs font-bold hover:bg-red-100 transition-all flex items-center gap-2">
                    <Trash2 size={14} />
                    Delete
                    <span className="text-[10px] opacity-70">get in app</span>
                  </button>
                  <button
                    onClick={() => setExpandedLesson(null)}
                    className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Learning Objectives */}
                  <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Target className="text-cyan-500" size={20} />
                      Learning Objectives
                    </h3>
                    <ul className="space-y-2">
                      {lesson.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials Required */}
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Package className="text-purple-500" size={20} />
                      Materials Required
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {lesson.materials.map((material, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white border border-purple-200 rounded-lg text-xs font-medium text-slate-700">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Paperclip className="text-blue-500" size={20} />
                      Attachments & Resources
                    </h3>
                    <div className="space-y-2">
                      {lesson.attachments.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white border border-blue-100 rounded-xl hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <FileText size={16} className="text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">{file}</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download">
                              <Download size={16} />
                            </button>
                            <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" title="Share">
                              <Share2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-4 px-4 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-md">
                      <Upload size={18} />
                      Upload New File
                      <span className="text-[10px] opacity-80">get in app</span>
                    </button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* NCERT Learning Outcome */}
                  <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Link2 className="text-green-500" size={20} />
                      NCERT Learning Outcome
                    </h3>
                    <div className="p-4 bg-white rounded-xl border border-green-100">
                      <p className="text-sm font-medium text-slate-700">{lesson.ncertOutcome}</p>
                    </div>
                  </div>

                  {/* CBSE Competency */}
                  <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Award className="text-orange-500" size={20} />
                      CBSE Competency
                    </h3>
                    <div className="p-4 bg-white rounded-xl border border-orange-100">
                      <p className="text-sm font-medium text-slate-700">{lesson.cbseCompetency}</p>
                    </div>
                  </div>

                  {/* AI Suggestions */}
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Lightbulb className="text-purple-500" size={20} />
                      AI Suggested Resources
                    </h3>
                    <div className="space-y-2">
                      {lesson.aiSuggestions.map((suggestion, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                          <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <PlayCircle size={16} className="text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-700">{suggestion}</p>
                          </div>
                          <button className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <Copy size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Actions */}
                  <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-800 mb-4">Update Lesson Status</h3>
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex flex-col items-center">
                        <CheckCircle size={18} className="mb-1" />
                        <span className="text-sm">Mark as Taught</span>
                        <span className="text-[10px] opacity-80">get in app</span>
                      </button>
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-amber-600 shadow-md transition-all flex flex-col items-center">
                        <Clock size={18} className="mb-1" />
                        <span className="text-sm">Mark as Pending</span>
                        <span className="text-[10px] opacity-80">get in app</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonPlanning;
