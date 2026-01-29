import React from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  Clock,
  Book,
  AlertCircle,
  ArrowRight,
  PlayCircle,
  ExternalLink,
  Video,
  Upload,
  BarChart3,
  BookOpen,
  MessageCircle,
  Calendar,
  CheckCircle,
  Timer,
  TrendingUp,
  Award,
  Flame,
  Target,
  Zap,
  Users as UsersIcon,
} from "lucide-react";
import { authService } from "../../../services/authService";

const HomeDashboard = () => {
  const navigate = useNavigate();
  const { dashboard } = STUDENT_DATA;
  const user = authService.getCurrentUser() || STUDENT_DATA.user;

  // Icon mapping for quick actions
  const getQuickActionIcon = (iconName) => {
    const icons = {
      video: Video,
      upload: Upload,
      chart: BarChart3,
      book: BookOpen,
      message: MessageCircle,
      calendar: Calendar,
    };
    const Icon = icons[iconName] || BookOpen;
    return <Icon size={24} />;
  };

  // Color classes for quick actions
  const getColorClasses = (color, status) => {
    const colors = {
      cyan:
        status === "active"
          ? "from-cyan-400 to-cyan-500"
          : "from-cyan-400/80 to-cyan-500/80",
      blue:
        status === "pending"
          ? "from-blue-400 to-blue-500"
          : "from-blue-400/80 to-blue-500/80",
      pink:
        status === "ready"
          ? "from-pink-400 to-pink-500"
          : "from-pink-400/80 to-pink-500/80",
      purple: "from-purple-400/80 to-purple-500/80",
      indigo: "from-indigo-400/80 to-indigo-500/80",
      violet: "from-violet-400/80 to-violet-500/80",
    };
    return colors[color] || colors.blue;
  };

  // Status indicator for timetable
  const getStatusBadge = (status) => {
    if (status === "completed")
      return <CheckCircle size={16} className="text-green-500" />;
    if (status === "current")
      return (
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
      );
    return <Clock size={16} className="text-slate-400" />;
  };

  const handleQuickAction = (title) => {
    switch (title) {
      case "Submit Assignment":
        navigate("/dashboard/student/assignments");
        break;
      case "View Report":
        navigate("/dashboard/student/grades");
        break;
      case "Study Materials":
        navigate("/dashboard/student/resources");
        break;
      case "Ask Doubts":
        navigate("/dashboard/student/communication");
        break;
      case "Check Schedule":
        navigate("/dashboard/student/timetable");
        break;
      case "Join Class":
        // For now we can maybe navigate to timetable or a specific class link
        // But user didn't specify, so we'll just log or do nothing/alert
        console.log("Join Class Clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Hero Banner with Achievement Badges */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute left-10 bottom-0 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl -mb-10"></div>
        <div className="absolute right-1/3 top-1/2 w-40 h-40 bg-cyan-300 opacity-15 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Welcome Back
            </span>
            {/* Streak Badge */}
            <div className="bg-orange-500/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              <Flame size={14} className="animate-pulse" />
              {dashboard.streak} Day Streak!
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Hello, {user.name.split(" ")[0]}!
          </h1>
          <p className="opacity-90 text-lg mb-1">
            You have{" "}
            <span className="font-bold underline decoration-2 decoration-white/50">
              {dashboard.assignmentsDue} assignments
            </span>{" "}
            due today. Let's get started!
          </p>
          <p className="text-sm opacity-75">
            Your next class starts in 15 minutes
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/dashboard/student/assignments")}
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              View Assignments
            </button>
            <button
              onClick={() => navigate("/dashboard/student/grades")}
              className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white font-bold rounded-xl text-sm hover:bg-blue-700 shadow-md border border-white/20 hover:scale-105 transition-all"
            >
              Check Grades
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {dashboard.quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleQuickAction(action.title)}
            className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 overflow-hidden text-left"
          >
            {/* Status indicator for active items */}
            {action.status === "active" && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            )}
            {action.status === "pending" && (
              <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            )}

            {/* Gradient Icon Background */}
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(action.color, action.status)} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform shadow-md`}
            >
              {getQuickActionIcon(action.icon)}
            </div>

            <h4 className="font-bold text-slate-800 text-sm mb-1">
              {action.title}
            </h4>
            <p className="text-[10px] text-slate-500 leading-tight">
              {action.description}
            </p>

            {/* Decorative gradient border on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorClasses(action.color, action.status)} opacity-0 group-hover:opacity-10 transition-opacity`}
            ></div>
          </button>
        ))}
      </div>

      {/* Today's Schedule and Homework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Timetable */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400 opacity-5 rounded-full blur-2xl"></div>

          <div className="flex items-center justify-between mb-5 relative z-10">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Calendar className="text-blue-500" size={20} />
              Today's Schedule
            </h3>
            <a
              href="#"
              className="text-xs font-bold text-blue-500 hover:text-blue-700 flex items-center gap-1 group"
            >
              View Full
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="space-y-3 relative z-10">
            {dashboard.todayTimetable.slice(2, 5).map((period, index) => (
              <div
                key={period.period}
                className={`relative pl-6 pb-4 ${index !== 2 ? "border-l-2 border-slate-100" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-[9px]">
                  {getStatusBadge(period.status)}
                </div>

                <div
                  className={`p-4 rounded-2xl transition-all ${
                    period.status === "current"
                      ? "bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-l-4 border-blue-500 shadow-md"
                      : "bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800">
                        {period.subject}
                      </h4>
                      <p className="text-xs text-slate-500">{period.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-600">
                        {period.time.split(" - ")[0]}
                      </p>
                      {period.timeLeft && (
                        <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">
                          {period.timeLeft}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-white px-2 py-1 rounded text-slate-600">
                      {period.room}
                    </span>
                    <span className="text-[10px] bg-white px-2 py-1 rounded text-slate-600">
                      {period.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homework & Assignments */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 opacity-5 rounded-full blur-2xl"></div>

          <div className="flex items-center justify-between mb-5 relative z-10">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Book className="text-pink-500" size={20} />
              Homework Due Today
            </h3>
            <a
              href="#"
              className="text-xs font-bold text-pink-500 hover:text-pink-700 flex items-center gap-1 group"
            >
              View All
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="space-y-3 relative z-10">
            {dashboard.todayHomework.map((hw) => (
              <div
                key={hw.id}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 hover:border-slate-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">
                      {hw.title}
                    </h4>
                    <p className="text-xs text-slate-500">{hw.subject}</p>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                      hw.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : hw.priority === "medium"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {hw.dueTime}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-slate-500 font-medium">
                      Progress
                    </span>
                    <span className="text-[10px] text-slate-700 font-bold">
                      {hw.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        hw.progress >= 90
                          ? "bg-gradient-to-r from-green-400 to-green-500"
                          : hw.progress >= 50
                            ? "bg-gradient-to-r from-blue-400 to-blue-500"
                            : "bg-gradient-to-r from-orange-400 to-orange-500"
                      }`}
                      style={{ width: `${hw.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-center w-full">
                  <button className="w-fit px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-colors">
                    {hw.progress > 0 ? "Continue" : "Start"} Assignment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid - Attendance, Exam Countdown, Achievement Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Widget */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

          <a
            href="#"
            className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group/link z-10"
          >
            <span>View Details</span>
            <ExternalLink
              size={10}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>

          <div className="flex items-center gap-4 relative z-10">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-slate-100"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="url(#gradient-attendance)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251"
                  strokeDashoffset={
                    251 - (251 * parseFloat(user.attendance)) / 100
                  }
                  className="transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">
                {user.attendance}
              </span>

              {/* SVG Gradient Definition */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="gradient-attendance"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 text-lg">Attendance</h4>
              <p className="text-xs text-slate-500 mb-1">Current Month</p>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp size={12} />
                <span className="text-xs font-bold">+2% this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Countdown */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

          <a
            href="#"
            className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group/link z-10"
          >
            <span>View Syllabus</span>
            <ExternalLink
              size={10}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl text-white">
                <Timer size={20} />
              </div>
              <h4 className="font-bold text-slate-800">Exam Countdown</h4>
            </div>

            <div className="space-y-2">
              {dashboard.upcomingExams.slice(0, 2).map((exam) => (
                <div key={exam.id} className="p-3 bg-slate-50 rounded-xl">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-bold text-slate-800">
                      {exam.subject}
                    </p>
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                      {exam.daysLeft} Days
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{exam.syllabus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

          <div className="flex items-center gap-2 mb-4 relative z-10">
            <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
              <Award size={20} />
            </div>
            <h4 className="font-bold text-slate-800">Achievements</h4>
          </div>

          <div className="grid grid-cols-2 gap-3 relative z-10">
            {dashboard.achievementBadges.map((badge) => (
              <div
                key={badge.id}
                className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all text-center group/badge cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover/badge:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <p className="text-xs font-bold text-slate-800 mb-1">
                  {badge.title}
                </p>
                <p className="text-[9px] text-slate-500 leading-tight">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Notifications */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 opacity-5 rounded-full blur-2xl"></div>

        <h3 className="font-bold text-slate-800 mb-5 flex items-center gap-2 relative z-10">
          <AlertCircle size={20} className="text-blue-500" />
          Recent Alerts
        </h3>

        <div className="space-y-3 relative z-10">
          {dashboard.notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all group"
            >
              {/* Category indicator */}
              <div
                className={`w-2 h-2 rounded-full ${
                  notif.priority === "high"
                    ? "bg-red-500 animate-pulse"
                    : notif.priority === "medium"
                      ? "bg-orange-500"
                      : "bg-blue-500"
                }`}
              ></div>

              {/* Icon based on category */}
              <div
                className={`p-2 rounded-xl ${
                  notif.category === "event"
                    ? "bg-purple-100 text-purple-600"
                    : notif.category === "assignment"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                }`}
              >
                {notif.category === "event" && <Calendar size={16} />}
                {notif.category === "assignment" && <Book size={16} />}
                {notif.category === "grade" && <Award size={16} />}
              </div>

              <p className="text-sm font-medium text-slate-700 flex-1">
                {notif.text}
              </p>

              <button className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                View
              </button>
              <button className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">
                Dismiss
              </button>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-3 border-2 border-slate-100 text-slate-600 font-bold rounded-xl text-sm hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default HomeDashboard;
