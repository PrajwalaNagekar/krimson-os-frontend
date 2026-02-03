import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronRight,
  BookOpen,
  Trophy,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Bell,
  Target,
  X,
  MessageSquare,
  FileText,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";

const TimetableSchedule = () => {
  const [view, setView] = useState("Daily"); // Daily or Weekly
  const [dailySection, setDailySection] = useState("schedule"); // schedule or planning
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { timetable, classDetails } = STUDENT_DATA;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Mock data for today's homework reminders
  const todayHomework = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Complete Trigonometry Worksheet",
      dueTime: "5:00 PM",
      priority: "high",
      estimatedTime: "30 min",
      status: "pending",
    },
    {
      id: 2,
      subject: "Physics",
      title: "Lab Report - Optics Experiment",
      dueTime: "11:59 PM",
      priority: "medium",
      estimatedTime: "45 min",
      status: "in-progress",
    },
    {
      id: 3,
      subject: "English",
      title: "Read Chapter 5",
      dueTime: "Tomorrow 9:00 AM",
      priority: "low",
      estimatedTime: "20 min",
      status: "pending",
    },
  ];

  // Mock data for CCA (Co-Curricular Activities) blocks
  const ccaBlocks = [
    {
      id: 1,
      activity: "Basketball Practice",
      time: "15:30 - 17:00",
      venue: "Sports Complex",
      coach: "Coach Williams",
      type: "Sports",
      icon: "🏀",
    },
    {
      id: 2,
      activity: "Science Club Meeting",
      time: "16:00 - 17:00",
      venue: "Lab 1",
      mentor: "Dr. Patel",
      type: "Club",
      icon: "🔬",
    },
  ];

  // AI-generated preparation checklist
  const aiPreparationChecklist = [
    {
      id: 1,
      task: "Review Physics formulas before lab",
      subject: "Physics",
      timeSlot: "Before Period 3",
      aiReason: "Lab exam next week - strengthen fundamentals",
      completed: false,
    },
    {
      id: 2,
      task: "Prepare questions for Math class",
      subject: "Mathematics",
      timeSlot: "Before Period 1",
      aiReason: "You struggled with last topic - seek clarification",
      completed: true,
    },
    {
      id: 3,
      task: "Bring project materials",
      subject: "Chemistry",
      timeSlot: "Period 4",
      aiReason: "Group project presentation scheduled",
      completed: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header with View Toggle */}
      <div className="flex justify-between items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 rounded-3xl shadow-lg border-0">
        <h2 className="text-2xl font-bold text-white">Class Timetable</h2>
        <div className="flex bg-white/20 p-1.5 rounded-xl backdrop-blur-md border border-white/10">
          {["Daily", "Weekly"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === v ? "bg-white text-blue-600 shadow-lg" : "text-white/80 hover:text-white hover:bg-white/10"}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Daily View with Two Sections Toggle */}
      {view === "Daily" && (
        <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 p-6 rounded-3xl shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="flex bg-white p-1.5 rounded-xl shadow-sm">
              <button
                onClick={() => setDailySection("schedule")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                  dailySection === "schedule"
                    ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Calendar size={16} />
                Today's Schedule
              </button>
              <button
                onClick={() => setDailySection("planning")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                  dailySection === "planning"
                    ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <Target size={16} />
                Planning & Activities
              </button>
            </div>
          </div>

          {/* Schedule Section */}
          {dailySection === "schedule" && (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Target className="text-blue-500" size={20} />
                  Today's Progress
                </h3>
                
                {(() => {
                  const mondaySchedule = timetable["monday"] || [];
                  const completedClasses = mondaySchedule.filter(slot => slot.status === "completed").length;
                  const activeClasses = mondaySchedule.filter(slot => slot.status === "active").length;
                  const upcomingClasses = mondaySchedule.filter(slot => slot.status === "upcoming").length;
                  const totalClasses = mondaySchedule.length;
                  const progressPercentage = totalClasses > 0 ? Math.round((completedClasses / totalClasses) * 100) : 0;

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Progress Circle */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* SVG Circle Progress */}
                          <svg className="transform -rotate-90" width="160" height="160">
                            {/* Background Circle */}
                            <circle
                              cx="80"
                              cy="80"
                              r="70"
                              stroke="#e2e8f0"
                              strokeWidth="12"
                              fill="none"
                            />
                            {/* Progress Circle */}
                            <circle
                              cx="80"
                              cy="80"
                              r="70"
                              stroke="url(#gradient)"
                              strokeWidth="12"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 70}`}
                              strokeDashoffset={`${2 * Math.PI * 70 * (1 - progressPercentage / 100)}`}
                              className="transition-all duration-1000 ease-out"
                            />
                            {/* Gradient Definition */}
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#ec4899" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Center Text */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                              {progressPercentage}%
                            </span>
                            <span className="text-xs font-semibold text-slate-500 mt-1">Complete</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 gap-3">
                        {/* Completed */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-blue-500 rounded-xl">
                                <CheckCircle size={20} className="text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-600">Completed</p>
                                <p className="text-2xl font-bold text-blue-700">{completedClasses}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Active */}
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-yellow-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-yellow-500 rounded-xl">
                                <Clock size={20} className="text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-600">Active Now</p>
                                <p className="text-2xl font-bold text-yellow-700">{activeClasses}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Upcoming */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-100 border-2 border-purple-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                <Calendar size={20} className="text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-600">Upcoming</p>
                                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{upcomingClasses}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Period-wise Schedule */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20} /> Monday -
                  Period Schedule
                </h3>

                <div className="space-y-4">
                  {timetable["monday"] ? (
                    timetable["monday"].map((slot, idx) => {
                      // Determine border and accent color based on status
                      let borderColor = "border-slate-100";
                      let accentColor = "bg-slate-200";
                      let typeColor = "bg-slate-100 text-slate-700";

                      if (slot.status === "active") {
                        borderColor = "border-yellow-200 bg-yellow-50/50";
                        accentColor = "bg-yellow-500";
                      } else if (slot.status === "completed") {
                        borderColor = "border-blue-100 bg-blue-50/30";
                        accentColor = "bg-blue-500";
                      }

                      // Type badge color override - Lab indicator
                      if (slot.type === "Lab")
                        typeColor = "bg-pink-100 text-pink-700";
                      else if (slot.type === "Lecture")
                        typeColor = "bg-cyan-100 text-cyan-700";

                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            const classKey = `${slot.subject}-${slot.period}-Monday`;
                            setSelectedClass({ ...slot, day: "Monday", classKey });
                            setIsModalOpen(true);
                          }}
                          className={`flex gap-4 p-4 border rounded-2xl transition-all group cursor-pointer relative overflow-visible ${borderColor} hover:shadow-md`}
                        >
                          <div
                            className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-lg ${accentColor}`}
                          ></div>

                          <div className="flex flex-col items-center justify-center min-w-[80px] bg-white rounded-xl p-2 shadow-sm z-10">
                            <span className="text-xs font-bold text-slate-500">
                              Period {slot.period}
                            </span>
                            <Clock
                              size={16}
                              className="text-slate-400 mt-2 mb-1"
                            />
                          </div>

                          <div className="flex-1 ml-2">
                            <div className="flex justify-between items-start">
                              <div className="flex flex-col">
                                <h4 className="text-lg font-bold text-slate-800">
                                  {slot.subject}
                                </h4>
                                <p className="text-sm font-medium text-slate-500">
                                  {slot.time}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span
                                  className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${typeColor}`}
                                >
                                  {slot.type}
                                </span>
                                {slot.isSubstitute && (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-600 border border-red-200">
                                    Substitute
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100/50">
                              <div className="flex items-center gap-2">
                                {slot.teacherImage ? (
                                  <img
                                    src={slot.teacherImage}
                                    alt={slot.teacher}
                                    className="w-6 h-6 rounded-full object-cover border border-slate-200"
                                  />
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-slate-200 grid place-items-center">
                                    <User
                                      size={14}
                                      className="text-slate-500"
                                    />
                                  </div>
                                )}
                                <span className="text-xs font-bold text-slate-600">
                                  {slot.teacher}
                                </span>
                              </div>
                              <div className="w-px h-4 bg-slate-200"></div>
                              <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                                <MapPin size={12} className="text-slate-400" />{" "}
                                {slot.room}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-center pl-4">
                            <button className="px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl shadow-sm hover:bg-blue-50 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95">
                              View Details
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-slate-400 italic text-sm">
                      No classes scheduled.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Planning & Activities Section */}
          {dailySection === "planning" && (
            <div className="space-y-6">
              {/* AI Preparation Checklist */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Lightbulb className="text-amber-500" size={20} /> AI
                    Preparation Checklist
                  </h3>
                  <span className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700 rounded-full font-bold">
                    AI Powered
                  </span>
                </div>

                <div className="space-y-3">
                  {aiPreparationChecklist.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-2xl border transition-all hover:shadow-md ${
                        item.completed
                          ? "bg-green-50/50 border-green-200"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex-shrink-0 ${item.completed ? "text-green-500" : "text-slate-400"}`}
                        >
                          {item.completed ? (
                            <CheckCircle size={20} />
                          ) : (
                            <AlertCircle size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h4
                              className={`text-sm font-bold ${item.completed ? "text-green-700 line-through" : "text-slate-800"}`}
                            >
                              {item.task}
                            </h4>
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded font-bold ml-2">
                              {item.subject}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            <span className="font-semibold">
                              {item.timeSlot}
                            </span>{" "}
                            · {item.aiReason}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homework Reminders */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <BookOpen className="text-purple-500" size={20} /> Homework
                  Reminders
                </h3>

                <div className="space-y-3">
                  {todayHomework.map((hw) => {
                    const priorityColors = {
                      high: "border-red-200 bg-red-50/50",
                      medium: "border-orange-200 bg-orange-50/50",
                      low: "border-blue-200 bg-blue-50/50",
                    };

                    const priorityBadge = {
                      high: "bg-red-100 text-red-700",
                      medium: "bg-orange-100 text-orange-700",
                      low: "bg-blue-100 text-blue-700",
                    };

                    const statusBadge = {
                      pending: "bg-slate-100 text-slate-700",
                      "in-progress": "bg-cyan-100 text-cyan-700",
                    };

                    return (
                      <div
                        key={hw.id}
                        className={`p-4 rounded-2xl border transition-all hover:shadow-md ${priorityColors[hw.priority]}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-sm font-bold text-slate-800">
                                {hw.title}
                              </h4>
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${statusBadge[hw.status]}`}
                              >
                                {hw.status.replace("-", " ")}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-600">
                              <span className="font-semibold">
                                {hw.subject}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} /> {hw.dueTime}
                              </span>
                              <span className="text-slate-300">•</span>
                              <span>~{hw.estimatedTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-2">
                            <span
                              className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${priorityBadge[hw.priority]}`}
                            >
                              {hw.priority}
                            </span>
                            <Bell size={16} className="text-slate-400" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CCA Blocks */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Trophy className="text-pink-500" size={20} /> Co-Curricular
                  Activities
                </h3>

                <div className="space-y-3">
                  {ccaBlocks.map((cca) => (
                    <div
                      key={cca.id}
                      className="p-4 rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50 transition-all hover:shadow-md group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl flex-shrink-0">{cca.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-bold text-slate-800">
                              {cca.activity}
                            </h4>
                            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded font-bold">
                              {cca.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-600">
                            <span className="flex items-center gap-1 font-semibold">
                              <Clock size={12} className="text-slate-400" />{" "}
                              {cca.time}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} className="text-slate-400" />{" "}
                              {cca.venue}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1">
                              <User size={12} className="text-slate-400" />{" "}
                              {cca.coach || cca.mentor}
                            </span>
                          </div>
                        </div>
                        <div className="hidden group-hover:block">
                          <button className="p-2 bg-white text-purple-600 rounded-full shadow-sm hover:bg-purple-50 transition-colors">
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Weekly View - Enhanced with Color-Coding, Lab Icons, Free Periods */}
      {view === "Weekly" && (
        <div className="space-y-6">
          {days.map((day) => {
            const daySchedule = timetable[day.toLowerCase()] || [];
            
            // Define subject colors for consistency
            const subjectColors = {
              'Math': 'from-blue-500 to-blue-600',
              'Mathematics': 'from-blue-500 to-blue-600',
              'English': 'from-purple-500 to-purple-600',
              'Physics': 'from-cyan-500 to-cyan-600',
              'Chemistry': 'from-green-500 to-green-600',
              'Biology': 'from-teal-500 to-teal-600',
              'History': 'from-orange-500 to-orange-600',
              'Geography': 'from-yellow-500 to-yellow-600',
              'Computer Science': 'from-indigo-500 to-indigo-600',
            };

            // Get subject color or default
            const getSubjectColor = (subject) => {
              return subjectColors[subject] || 'from-slate-400 to-slate-500';
            };

            return (
              <div key={day} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                {/* Day Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <Calendar className="text-white" size={20} />
                    </div>
                    {day}
                  </h3>
                  <span className="text-sm px-4 py-2 bg-slate-100 rounded-xl font-bold text-slate-600">
                    {daySchedule.length} Period{daySchedule.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {daySchedule.length > 0 ? (
                    daySchedule.map((slot, idx) => {
                      const isLab = slot.type === 'Lab' || slot.type === 'Practical';
                      const subjectGradient = getSubjectColor(slot.subject);

                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            const classKey = `${slot.subject}-${slot.period}-${day}`;
                            setSelectedClass({ ...slot, day, classKey });
                            setIsModalOpen(true);
                          }}
                          className="group relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        >
                          {/* Color Strip */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${subjectGradient}`}></div>

                          {/* Period Badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              Period {slot.period}
                            </span>
                            {isLab && (
                              <div className="flex items-center gap-1 px-2 py-1 bg-pink-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M7 2h10M9 2v4M15 2v4M6 6h12l-1 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 6z"/>
                                </svg>
                                <span className="text-[10px] font-bold text-pink-700 uppercase">Lab</span>
                              </div>
                            )}
                          </div>

                          {/* Subject Name with Color */}
                          <h4 className={`text-base font-bold mb-2 bg-gradient-to-r ${subjectGradient} bg-clip-text text-transparent`}>
                            {slot.subject}
                          </h4>

                          {/* Time */}
                          <div className="flex items-center gap-2 mb-3 text-slate-600">
                            <Clock size={14} className="text-slate-400" />
                            <span className="text-sm font-semibold">{slot.time}</span>
                          </div>

                          {/* Teacher Info */}
                          <div className="flex items-center gap-2 mb-2">
                            {slot.teacherImage ? (
                              <img
                                src={slot.teacherImage}
                                alt={slot.teacher}
                                className="w-5 h-5 rounded-full object-cover border border-slate-300"
                              />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-slate-200 grid place-items-center">
                                <User size={12} className="text-slate-500" />
                              </div>
                            )}
                            <span className="text-xs font-bold text-slate-700">{slot.teacher}</span>
                          </div>

                          {/* Room */}
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin size={12} className="text-slate-400" />
                            <span className="text-xs font-medium text-slate-500">{slot.room}</span>
                          </div>

                          {/* View Details Button */}
                          <div className="mt-auto pt-2 border-t border-slate-100/50 flex justify-end">
                            <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                              View Details <ChevronRight size={12} />
                            </span>
                          </div>

                          {/* Substitute Badge */}
                          {slot.isSubstitute && (
                            <div className="absolute top-3 right-3">
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-[9px] font-bold rounded-lg border border-red-200 uppercase">
                                Substitute
                              </span>
                            </div>
                          )}

                          {/* Hover Effect Arrow - Removed in favor of button */}
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-slate-400 italic text-sm">No classes scheduled</p>
                    </div>
                  )}

                  {/* Free Period Placeholder - Add if schedule has gaps */}
                  {daySchedule.length > 0 && daySchedule.length < 6 && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-dashed border-green-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="p-3 bg-green-100 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-green-700">Free Period</span>
                      <span className="text-xs text-green-600 mt-1">Break / Self Study</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Class Details Modal */}
      {isModalOpen && selectedClass && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedClass.subject}</h2>
                  <div className="flex items-center gap-3 mt-2 text-white/90">
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      <Clock size={14} />
                      {selectedClass.time}
                    </span>
                    <span className="text-white/60">•</span>
                    <span className="text-sm font-semibold">Period {selectedClass.period}</span>
                    <span className="text-white/60">•</span>
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      <MapPin size={14} />
                      {selectedClass.room}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
              {(() => {
                const details = classDetails[selectedClass.classKey];
                
                if (!details) {
                  return (
                    <div className="text-center py-12">
                      <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <AlertCircle className="text-slate-400" size={32} />
                      </div>
                      <p className="text-slate-500 font-medium">No class details available for this period.</p>
                    </div>
                  );
                }

                return (
                  <div className="space-y-6">
                    {/* Current Topic */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                          <Sparkles size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Current Topic</h3>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {details.currentTopic}
                      </p>
                    </div>

                    {/* Latest Post */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                          <MessageSquare size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Latest Post</h3>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed mb-2">
                        {details.latestPost.message}
                      </p>
                      <p className="text-xs text-slate-500 font-semibold">
                        {details.latestPost.time}
                      </p>
                    </div>

                    {/* Two Column Layout for Upcoming Work and Key Resources */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Upcoming Work */}
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
                            <FileText size={20} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-800">Upcoming Work</h3>
                        </div>
                        <div className="space-y-3">
                          {details.upcomingWork.length > 0 ? (
                            details.upcomingWork.map((work, idx) => {
                              const priorityColors = {
                                urgent: "bg-red-100 text-red-700 border-red-200",
                                high: "bg-orange-100 text-orange-700 border-orange-200",
                                medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
                                low: "bg-green-100 text-green-700 border-green-200",
                              };
                              return (
                                <div key={idx} className="bg-white p-4 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                                  <div className="flex items-start justify-between mb-1">
                                    <h4 className="font-bold text-slate-800 text-sm">{work.title}</h4>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${priorityColors[work.priority] || priorityColors.medium}`}>
                                      {work.priority}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                                    <Clock size={12} className="text-slate-400" />
                                    Due: {work.dueDate}
                                  </p>
                                  <p className="text-xs text-slate-500 mt-1 capitalize">{work.type}</p>
                                </div>
                              );
                            })
                          ) : (
                            <p className="text-slate-500 text-sm italic">No upcoming work</p>
                          )}
                        </div>
                      </div>

                      {/* Key Resources */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                            <LinkIcon size={20} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-800">Key Resources</h3>
                        </div>
                        <div className="space-y-2">
                          {details.keyResources.length > 0 ? (
                            details.keyResources.map((resource, idx) => (
                              <a
                                key={idx}
                                href={resource.url}
                                className="flex items-center gap-3 bg-white p-3 rounded-xl border border-green-200 hover:shadow-md hover:border-green-300 transition-all group"
                              >
                                <span className="text-2xl">{resource.icon}</span>
                                <div className="flex-1">
                                  <p className="font-bold text-slate-800 text-sm group-hover:text-green-600 transition-colors">
                                    {resource.title}
                                  </p>
                                  <p className="text-xs text-slate-500 capitalize">{resource.type}</p>
                                </div>
                                <ChevronRight size={16} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                              </a>
                            ))
                          ) : (
                            <p className="text-slate-500 text-sm italic">No resources available</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Teacher Info Footer */}
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
                      {selectedClass.teacherImage ? (
                        <img
                          src={selectedClass.teacherImage}
                          alt={selectedClass.teacher}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-slate-300 grid place-items-center">
                          <User size={24} className="text-slate-600" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold text-slate-700">{selectedClass.teacher}</p>
                        <p className="text-xs text-slate-500 font-semibold">{selectedClass.type} Teacher</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableSchedule;
