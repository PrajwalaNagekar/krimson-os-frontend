import React, { useState, useEffect } from 'react';
import { 
  BarChart3, TrendingUp, Calendar, Clock, Award, 
  AlertTriangle, BookOpen, FileText, CheckCircle,
  Target, ChevronDown, Star, MessageSquare, Trophy, Eye
} from 'lucide-react';

const ExamPerformance = () => {
  const [selectedTerm, setSelectedTerm] = useState('current');
  const [countdown, setCountdown] = useState({});

  // Static exam schedule data - will be replaced with API calls
  const examSchedule = [
    { 
      id: 1, 
      subject: "Mathematics", 
      topic: "Algebra & Calculus",
      date: "2026-01-28",
      time: "09:00 AM",
      duration: "2 hours",
      room: "Room 301",
      status: "upcoming"
    },
    { 
      id: 2, 
      subject: "Science", 
      topic: "Physics - Mechanics",
      date: "2026-01-30",
      time: "10:30 AM",
      duration: "1.5 hours",
      room: "Lab 2",
      status: "upcoming"
    },
    { 
      id: 3, 
      subject: "English", 
      topic: "Literature Analysis",
      date: "2026-02-02",
      time: "02:00 PM",
      duration: "2 hours",
      room: "Room 205",
      status: "upcoming"
    }
  ];

  // Static performance data
  const performanceData = {
    current: [
      { subject: 'Mathematics', score: 92, maxScore: 100, color: 'from-blue-400 to-cyan-400' },
      { subject: 'Science', score: 88, maxScore: 100, color: 'from-green-400 to-emerald-400' },
      { subject: 'English', score: 95, maxScore: 100, color: 'from-purple-400 to-pink-400' },
      { subject: 'History', score: 78, maxScore: 100, color: 'from-orange-400 to-amber-400' },
      { subject: 'Computer Science', score: 90, maxScore: 100, color: 'from-cyan-400 to-blue-400' },
    ],
    previous: [
      { subject: 'Mathematics', score: 85, maxScore: 100, color: 'from-blue-400 to-cyan-400' },
      { subject: 'Science', score: 82, maxScore: 100, color: 'from-green-400 to-emerald-400' },
      { subject: 'English', score: 90, maxScore: 100, color: 'from-purple-400 to-pink-400' },
      { subject: 'History', score: 75, maxScore: 100, color: 'from-orange-400 to-amber-400' },
      { subject: 'Computer Science', score: 88, maxScore: 100, color: 'from-cyan-400 to-blue-400' },
    ]
  };

  // Top 3 subjects and areas for improvement
  const topSubjects = performanceData[selectedTerm]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const areasForImprovement = performanceData[selectedTerm]
    .filter(item => item.score < 85)
    .sort((a, b) => a.score - b.score);

  // Teacher comments per exam
  const teacherComments = [
    {
      subject: "Mathematics",
      teacher: "Ms. Sarah Johnson",
      comment: "Excellent progress! Strong understanding of algebraic concepts. Keep practicing calculus derivatives.",
      date: "2026-01-15",
      sentiment: "positive"
    },
    {
      subject: "Science",
      teacher: "Dr. Michael Chen",
      comment: "Good work on theory. However, lab report writing needs improvement. Focus on detailed observations.",
      date: "2026-01-14",
      sentiment: "neutral"
    },
    {
      subject: "English",
      teacher: "Mrs. Emily Roberts",
      comment: "Outstanding creative writing! Excellent vocabulary and storytelling techniques. Keep it up!",
      date: "2026-01-16",
      sentiment: "positive"
    },
    {
      subject: "History",
      teacher: "Mr. Robert Taylor",
      comment: "Needs to work on remembering dates and historical events. Consider creating timeline charts for better retention.",
      date: "2026-01-13",
      sentiment: "improvement"
    }
  ];

  // Calculate countdown for next exam
  useEffect(() => {
    const calculateCountdown = () => {
      const nextExam = examSchedule[0];
      const examDateTime = new Date(nextExam.date + ' ' + nextExam.time);
      const now = new Date();
      const difference = examDateTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getSentimentColor = (sentiment) => {
    switch(sentiment) {
      case 'positive': return 'from-green-400 to-emerald-400';
      case 'neutral': return 'from-blue-400 to-cyan-400';
      case 'improvement': return 'from-orange-400 to-amber-400';
      default: return 'from-slate-400 to-gray-400';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch(sentiment) {
      case 'positive': return <CheckCircle size={18} />;
      case 'neutral': return <MessageSquare size={18} />;
      case 'improvement': return <AlertTriangle size={18} />;
      default: return <MessageSquare size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 md:p-6">
      {/* Header Section with Matching Gradient */}
      <div className="relative mb-6 md:mb-8 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 md:p-8 text-white shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm w-fit">
              <BarChart3 size={32} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Exam & Performance Dashboard</h1>
              <p className="text-white/90 text-sm">Track academic progress and examination results</p>
            </div>
            {/* Term Selector */}
            <div className="relative">
              <select
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="appearance-none px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold cursor-pointer hover:bg-white/30 transition-all pr-10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="current" className="text-slate-800">Current Term</option>
                <option value="previous" className="text-slate-800">Previous Term</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        
        {/* Left Column - Performance Chart (8 columns) */}
        <div className="lg:col-span-8 space-y-4 md:space-y-6">
          
          {/* Term Performance Chart */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp className="text-blue-500" size={24} />
                  Term Performance Analysis
                </h2>
                <p className="text-slate-500 text-sm mt-1">Subject-wise performance comparison</p>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="space-y-4">
              {performanceData[selectedTerm].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">{item.subject}</span>
                    <span className="text-sm font-bold text-slate-800">{item.score}%</span>
                  </div>
                  <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden">
                    {/* Animated bar */}
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out flex items-center justify-end px-3 group-hover:shadow-lg`}
                      style={{ width: `${item.score}%` }}
                    >
                      <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.score}/{item.maxScore}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"></div>
                  <span className="text-slate-600">Excellent (&gt;90%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <span className="text-slate-600">Good (85-90%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400"></div>
                  <span className="text-slate-600">Needs Improvement (&lt;85%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Comments Section */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
              <MessageSquare className="text-purple-500" size={24} />
              Teacher Comments & Feedback
            </h2>
            
            <div className="space-y-4">
              {teacherComments.map((comment, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-blue-400 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getSentimentColor(comment.sentiment)} text-white`}>
                        {getSentimentIcon(comment.sentiment)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{comment.subject}</h4>
                        <p className="text-xs text-slate-500">{comment.teacher}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">
                      {new Date(comment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{comment.comment}</p>
                  
                  <button className="w-fit px-6 py-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg font-semibold text-xs hover:shadow-md transition-all flex flex-col items-center gap-0.5 group">
                    <div className="flex items-center gap-1 group-hover:scale-105 transition-transform">
                      <Eye size={14} />
                      <span>View Details</span>
                    </div>
                    <span className="text-[9px] opacity-80">get in app</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Stats and Schedule (4 columns) */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          
          {/* Next Exam Countdown */}
          <div className="relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-2xl overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Clock size={20}/>
                Next Exam Countdown
              </h3>
              
              {/* Countdown Display */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-3xl font-extrabold">{countdown.days || 0}</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Days</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold">{countdown.hours || 0}</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold">{countdown.minutes || 0}</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Mins</div>
                  </div>
                </div>
              </div>

              {/* Next Exam Details */}
              {examSchedule[0] && (
                <div className="bg-white/25 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-bold text-lg mb-1">{examSchedule[0].subject}</p>
                  <p className="text-sm opacity-90 mb-2">{examSchedule[0].topic}</p>
                  <div className="flex items-center gap-2 text-xs opacity-80">
                    <Calendar size={14} />
                    <span>{new Date(examSchedule[0].date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 text-xs opacity-80">
                      <Clock size={14} />
                      <span>{examSchedule[0].time} • {examSchedule[0].duration}</span>
                    </div>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full opacity-80">get in app</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Top 3 Subjects */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-500" size={20} />
              Top 3 Subjects
            </h3>
            <div className="space-y-3">
              {topSubjects.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md transition-all group"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 text-sm">{item.subject}</p>
                    <p className="text-xs text-slate-500">Score: {item.score}%</p>
                  </div>
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Target className="text-orange-500" size={20} />
              Areas for Improvement
            </h3>
            {areasForImprovement.length > 0 ? (
              <div className="space-y-3">
                {areasForImprovement.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-sm group"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-slate-700 font-semibold">{item.subject}</p>
                      <p className="text-xs text-slate-500">Current: {item.score}% • Target: 85%+</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="mx-auto mb-2 text-green-500" size={32} />
                <p className="text-sm text-slate-600 font-semibold">All subjects performing well!</p>
                <p className="text-xs text-slate-400 mt-1">Keep up the excellent work</p>
              </div>
            )}
          </div>

          {/* Upcoming Exams Schedule */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="text-blue-500" size={20} />
              Exam Schedule
            </h3>
            <div className="space-y-3">
              {examSchedule.slice(0, 3).map((exam, index) => (
                <div 
                  key={exam.id}
                  className="p-4 rounded-xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-bold rounded-full">
                      {exam.subject}
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{exam.topic}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {exam.time}
                      </span>
                      <span>•</span>
                      <span>{exam.room}</span>
                    </div>
                    <span className="text-[9px] text-blue-400 font-medium bg-blue-50 px-2 py-0.5 rounded-full opacity-80">get in app</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPerformance;
