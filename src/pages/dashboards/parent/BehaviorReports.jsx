import React, { useState } from 'react';
import { 
  Smile, 
  Frown, 
  MessageCircle,
  TrendingUp,
  TrendingDown,
  Award,
  AlertTriangle,
  Users,
  Send,
  ThumbsUp,
  Flag,
  Calendar,
  CheckCircle,
  Info,
  BarChart3,
  MessageSquare,
  Eye,
  Target,
  Lightbulb,
  ShieldAlert
} from 'lucide-react';

const BehaviorReports = () => {
  const [parentResponse, setParentResponse] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Mock Data - Will be replaced with API
  const behaviorStats = {
    positivePoints: 24,
    negativePoints: 3,
    positiveChange: +12, // % change from last period
    negativeChange: -25, // % change from last period
    overallRating: 'Excellent',
    trend: 'improving'
  };

  const monthlyData = [
    { month: 'Sep', positive: 18, negative: 5 },
    { month: 'Oct', positive: 22, negative: 4 },
    { month: 'Nov', positive: 20, negative: 2 },
    { month: 'Dec', positive: 24, negative: 3 }
  ];

  const teacherFeedback = [
    {
      id: 1,
      teacher: 'Mrs. Sarah Tan',
      subject: 'Class Teacher',
      date: '2026-01-18',
      type: 'positive',
      category: 'Leadership',
      feedback: 'Aravind demonstrated excellent leadership during the group science project. He ensured everyone participated and helped struggling teammates understand the concepts.',
      tags: ['Leadership', 'Teamwork', 'Academic Excellence']
    },
    {
      id: 2,
      teacher: 'Mr. David Lee',
      subject: 'Mathematics',
      date: '2026-01-15',
      type: 'constructive',
      category: 'Punctuality',
      feedback: 'Need to improve homework submission timeliness. Last two assignments were submitted late. Please ensure deadlines are met.',
      tags: ['Time Management', 'Responsibility']
    },
    {
      id: 3,
      teacher: 'Ms. Jennifer Wong',
      subject: 'English',
      date: '2026-01-12',
      type: 'positive',
      category: 'Participation',
      feedback: 'Outstanding participation in class discussions. Aravind asks thoughtful questions and helps create an engaging learning environment.',
      tags: ['Communication', 'Engagement']
    }
  ];

  const peerCollaboration = [
    {
      id: 1,
      activity: 'Science Fair Project - Solar System Model',
      date: '2026-01-10',
      role: 'Team Leader',
      teamSize: 4,
      rating: 'Excellent',
      insights: 'Led team effectively, delegated tasks well, ensured quality output. Team members praised his organizational skills.',
      skills: ['Leadership', 'Coordination', 'Creativity']
    },
    {
      id: 2,
      activity: 'Math Olympics - Team Competition',
      date: '2025-12-15',
      role: 'Problem Solver',
      teamSize: 5,
      rating: 'Very Good',
      insights: 'Contributed significantly to problem-solving. Helped peers understand complex concepts during practice sessions.',
      skills: ['Analytical Thinking', 'Mentoring', 'Patience']
    },
    {
      id: 3,
      activity: 'Cultural Week - Dance Performance',
      date: '2025-11-20',
      role: 'Participant',
      teamSize: 8,
      rating: 'Good',
      insights: 'Showed enthusiasm and commitment. Attended all rehearsals and supported team members.',
      skills: ['Teamwork', 'Dedication', 'Cultural Awareness']
    }
  ];

  const flaggedPatterns = {
    hasFlags: true,
    patterns: [
      {
        id: 1,
        type: 'attention',
        severity: 'low',
        pattern: 'Homework submission delays',
        frequency: '2 times in last month',
        recommendation: 'Consider setting up a homework schedule with reminders'
      }
    ]
  };

  const handleSendResponse = () => {
    if (parentResponse.trim()) {
      console.log('Sending parent response:', parentResponse);
      // API call will be added here
      setParentResponse('');
    }
  };

  const handleEscalateToCounselor = () => {
    console.log('Escalating to counselor');
    // API call will be added here
  };

  const maxValue = Math.max(...monthlyData.map(d => Math.max(d.positive, d.negative)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <Award size={24} className="md:hidden text-white" />
            <Award size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Behavior & Feedback Reports
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Track conduct, discipline, and participation insights</p>
          </div>
        </div>
      </div>

      {/* Behavior Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
        {/* Positive Points */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Smile size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-100 px-2 py-1 rounded-full">
              <TrendingUp size={12} />
              +{behaviorStats.positiveChange}%
            </div>
          </div>
          <h3 className="text-emerald-800 font-bold text-base md:text-lg mb-1">Positive Merits</h3>
          <p className="text-emerald-600 text-xs md:text-sm mb-2">Total this term</p>
          <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {behaviorStats.positivePoints}
          </span>
        </div>

        {/* Negative Points */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl">
              <Frown size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-100 px-2 py-1 rounded-full">
              <TrendingDown size={12} />
              {behaviorStats.negativeChange}%
            </div>
          </div>
          <h3 className="text-red-800 font-bold text-base md:text-lg mb-1">Areas of Concern</h3>
          <p className="text-red-600 text-xs md:text-sm mb-2">Incidents logged</p>
          <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {behaviorStats.negativePoints}
          </span>
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Target size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-1 text-blue-600 text-xs font-bold bg-blue-100 px-2 py-1 rounded-full">
              <CheckCircle size={12} />
              Active
            </div>
          </div>
          <h3 className="text-blue-800 font-bold text-base md:text-lg mb-1">Overall Rating</h3>
          <p className="text-blue-600 text-xs md:text-sm mb-2">This term</p>
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {behaviorStats.overallRating}
          </span>
        </div>

        {/* Trend */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <BarChart3 size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-1 text-purple-600 text-xs font-bold bg-purple-100 px-2 py-1 rounded-full">
              <TrendingUp size={12} />
              Progress
            </div>
          </div>
          <h3 className="text-purple-800 font-bold text-base md:text-lg mb-1">Behavior Trend</h3>
          <p className="text-purple-600 text-xs md:text-sm mb-2">Last 4 months</p>
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent capitalize">
            {behaviorStats.trend}
          </span>
        </div>
      </div>

      {/* Behavior Graph */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
              <BarChart3 size={20} className="text-cyan-500" />
              Behavior Points Graph
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                <span className="text-xs font-medium text-slate-600">Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
                <span className="text-xs font-medium text-slate-600">Negative</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-around gap-2 md:gap-4 h-48 md:h-64">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 justify-center items-end h-full">
                  {/* Positive Bar */}
                  <div 
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg transition-all duration-500 hover:scale-105 relative group"
                    style={{ height: `${(data.positive / maxValue) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      +{data.positive}
                    </div>
                  </div>
                  {/* Negative Bar */}
                  <div 
                    className="flex-1 bg-gradient-to-t from-red-500 to-orange-400 rounded-t-lg transition-all duration-500 hover:scale-105 relative group"
                    style={{ height: `${(data.negative / maxValue) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      -{data.negative}
                    </div>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-600">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher Feedback & Peer Collaboration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 relative z-10">
        {/* Teacher Feedback */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-cyan-500" />
            Teacher Feedback
          </h3>

          <div className="space-y-3">
            {teacherFeedback.map((feedback) => (
              <div 
                key={feedback.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  feedback.type === 'positive'
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/20'
                    : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg hover:shadow-amber-500/20'
                }`}
                onClick={() => setSelectedFeedback(feedback)}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    feedback.type === 'positive' 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                      : 'bg-gradient-to-br from-amber-500 to-orange-600'
                  }`}>
                    {feedback.type === 'positive' ? (
                      <ThumbsUp size={16} className="text-white" />
                    ) : (
                      <Lightbulb size={16} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{feedback.category}</h4>
                      <span className="text-xs text-slate-500">{new Date(feedback.date).toLocaleDateString('en-SG')}</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-700 line-clamp-3 mb-3 leading-relaxed">{feedback.feedback}</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs md:text-sm text-slate-500 font-medium">{feedback.teacher} • {feedback.subject}</p>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1.5 rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex-shrink-0">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold">View More</span>
                          <span className="text-[8px] opacity-80">get in app</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 flex-wrap">
                  {feedback.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-[10px] md:text-xs bg-white/60 text-slate-600 px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Collaboration Insights */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
            <Users size={20} className="text-cyan-500" />
            Peer Collaboration
          </h3>

          <div className="space-y-3">
            {peerCollaboration.map((collab) => (
              <div 
                key={collab.id}
                className="p-4 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                    <Users size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1 line-clamp-1">{collab.activity}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> {new Date(collab.date).toLocaleDateString('en-SG')}
                      </span>
                      <span>•</span>
                      <span>{collab.teamSize} members</span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    collab.rating === 'Excellent' ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700' :
                    collab.rating === 'Very Good' ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700' :
                    'bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700'
                  }`}>
                    {collab.rating}
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-700 mb-3 leading-relaxed">{collab.insights}</p>
                <div className="flex items-center gap-1 flex-wrap">
                  {collab.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] md:text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flagged Patterns Alert */}
      {flaggedPatterns.hasFlags && (
        <div className="mb-4 md:mb-6 relative z-10">
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-amber-300 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex-shrink-0">
                <ShieldAlert size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2 flex items-center gap-2">
                  <Flag size={18} className="text-amber-600" />
                  Pattern Detected - Attention Required
                </h3>
                {flaggedPatterns.patterns.map((pattern) => (
                  <div key={pattern.id} className="bg-white/60 rounded-xl p-3 md:p-4 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-800 text-sm">{pattern.pattern}</h4>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                        pattern.severity === 'high' ? 'bg-red-100 text-red-700' :
                        pattern.severity === 'medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {pattern.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      <span className="font-medium">Frequency:</span> {pattern.frequency}
                    </p>
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-2 mb-3">
                      <p className="text-xs text-cyan-800 flex items-start gap-2">
                        <Info size={12} className="flex-shrink-0 mt-0.5" />
                        <span><span className="font-bold">Recommendation:</span> {pattern.recommendation}</span>
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleEscalateToCounselor}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold">Escalate to School Counselor</span>
                      <span className="text-[9px] opacity-80">get in app</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parent Response Section */}
      <div className="relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
          <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
            <MessageCircle size={20} className="text-cyan-500" />
            Parent Response & Acknowledgment
          </h3>
          
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 mb-6 border border-cyan-200">
            <p className="text-xs md:text-sm text-cyan-800 flex items-start gap-2">
              <Info size={14} className="flex-shrink-0 mt-0.5" />
              <span>Use the app to send responses and acknowledge feedback from teachers and counselors. Your messages will be shared with the relevant staff members.</span>
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSendResponse}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <div className="flex items-center gap-3">
                <Send size={20} />
                <div className="flex flex-col items-center">
                  <span className="text-base font-bold">Send Message</span>
                  <span className="text-[10px] opacity-80">get in app</span>
                </div>
              </div>
            </button>
          </div>
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
      `}</style>
    </div>
  );
};

export default BehaviorReports;
