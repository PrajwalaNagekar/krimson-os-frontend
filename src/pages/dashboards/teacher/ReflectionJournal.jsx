import React, { useState, useEffect } from 'react';
import { 
  PenTool, Share2, Eye, Calendar, TrendingUp, Users,
  BookOpen, MessageSquare, Award, Sparkles, Send, Plus,
  ChevronDown, X, FileText, BarChart2, Clock, Target,
  CheckCircle, AlertCircle, Activity, Download
} from 'lucide-react';

const ReflectionJournal = () => {
  // Sample reflection entries
  const [reflections] = useState([
    {
      id: 'RF1',
      date: '2026-01-19',
      lessonTopic: 'Newton\'s Third Law - Action and Reaction',
      class: 'Grade 9-A',
      whatWentWell: 'Students were highly engaged during the practical demonstration with toy cars and springs. The visual representation really helped them understand the concept.',
      areasForImprovement: 'Could have managed time better for the Q&A session. Need to allocate 10 more minutes for student questions next time.',
      studentEngagement: 92,
      participationRate: 88,
      questionsAsked: 15,
      shared: false,
      weekNumber: 3
    },
    {
      id: 'RF2',
      date: '2026-01-18',
      lessonTopic: 'Thermodynamics - Heat Transfer Methods',
      class: 'Grade 10-A',
      whatWentWell: 'The group activity on identifying heat transfer in everyday life was very effective. Students came up with creative examples.',
      areasForImprovement: 'Some students struggled with the mathematical calculations. Will create additional practice worksheets with step-by-step solutions.',
      studentEngagement: 85,
      participationRate: 76,
      questionsAsked: 12,
      shared: true,
      weekNumber: 3
    },
    {
      id: 'RF3',
      date: '2026-01-17',
      lessonTopic: 'Optics - Reflection and Refraction',
      class: 'Grade 9-B',
      whatWentWell: 'Mirror and lens experiments went smoothly. Lab equipment was well-organized, saving time.',
      areasForImprovement: 'Need to prepare clearer safety instructions. Two students were confused about proper handling of glass lenses.',
      studentEngagement: 78,
      participationRate: 82,
      questionsAsked: 10,
      shared: false,
      weekNumber: 3
    },
  ]);

  // Auto-suggested analytics
  const [analytics] = useState({
    weeklyAvgEngagement: 85,
    weeklyAvgParticipation: 82,
    totalQuestionsAsked: 37,
    mostEngagingTopic: 'Newton\'s Third Law',
    areasNeedingAttention: ['Time Management', 'Mathematical Problem Solving'],
    studentFeedbackScore: 4.6,
    improvementTrend: '+8%'
  });

  // Weekly report data
  const [weeklyReport] = useState({
    weekNumber: 3,
    periodStart: '2026-01-13',
    periodEnd: '2026-01-19',
    totalLessons: 12,
    reflectionsCompleted: 10,
    avgEngagement: 85,
    keyInsights: [
      'Practical demonstrations consistently lead to higher engagement',
      'Q&A sessions need more allocated time',
      'Mathematical concepts require additional support materials'
    ],
    principalViewed: true,
    principalComments: 'Excellent self-awareness and commitment to improvement. The practical approach is yielding great results.'
  });

  const [selectedReflection, setSelectedReflection] = useState(null);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/reflections')
    //   .then(res => res.json())
    //   .then(data => setReflections(data));
    console.log('Reflection Journal loaded - Ready for API integration');
  }, []);

  // Get engagement color
  const getEngagementColor = (score) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-blue-600 bg-blue-100';
    if (score >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Feedback & Reflection Journal
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Teaching Reflection Hub
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base italic">
                "We do not learn from experience... we learn from reflecting on experience."
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowWeeklyReport(!showWeeklyReport)}
                className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold shadow-lg hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <FileText size={20} />
                <span>Weekly Report</span>
              </button>
              <button 
                onClick={() => setShowNewEntry(!showNewEntry)}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <Plus size={20} />
                <div className="text-left">
                  <div>New Entry</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Suggested Analytics */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-purple-100 rounded-xl">
            <Sparkles size={24} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI-Powered Insights from Student Data</h3>
            <p className="text-slate-600">Automated analytics to enhance your teaching reflection</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weekly Engagement */}
          <div className="p-5 bg-white rounded-2xl border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="text-purple-500" size={20} />
              <h4 className="font-bold text-slate-800">Weekly Engagement</h4>
            </div>
            <p className="text-3xl font-bold text-purple-600 mb-2">{analytics.weeklyAvgEngagement}%</p>
            <p className="text-sm text-slate-600">Average across all classes</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600 font-bold">
              <TrendingUp size={14} />
              <span>{analytics.improvementTrend} vs last week</span>
            </div>
          </div>

          {/* Average Lesson Rating */}
          <div className="p-5 bg-white rounded-2xl border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-yellow-500" size={20} />
              <h4 className="font-bold text-slate-800">Avg Lesson Rating</h4>
            </div>
            <p className="text-3xl font-bold text-yellow-600 mb-2">
              {analytics.avgLessonRating}/5
            </p>
            <p className="text-[10px] text-slate-400 mt-1">get in app</p>
          </div>

          {/* Participation Rate */}
          <div className="p-5 bg-white rounded-2xl border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-blue-500" size={20} />
              <h4 className="font-bold text-slate-800">Participation</h4>
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-2">{analytics.weeklyAvgParticipation}%</p>
            <p className="text-sm text-slate-600">Active student participation</p>
          </div>

          {/* Questions Asked */}
          <div className="p-5 bg-white rounded-2xl border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="text-green-500" size={20} />
              <h4 className="font-bold text-slate-800">Questions This Week</h4>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-2">{analytics.totalQuestionsAsked}</p>
            <p className="text-sm text-slate-600">Student inquiries</p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-6 p-5 bg-white rounded-2xl border border-purple-100">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Target className="text-purple-500" size={20} />
            Suggested Focus Areas
          </h4>
          <div className="space-y-2">
            {analytics.areasNeedingAttention.map((area, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm">
                <AlertCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-bold">Most Engaging Topic:</span> {analytics.mostEngagingTopic}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Reflections</p>
            <PenTool className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{reflections.length}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Positive Feedback</p>
            <Share2 className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">
            {(reflections.filter(r => r.rating >= 4).length / reflections.length * 100).toFixed(0)}%
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">This Week</p>
            <Calendar className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
            {reflections.filter(r => r.weekNumber === 3).length}
          </h3>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-yellow-200 bg-white hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Student Rating</p>
            <Award className="text-yellow-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">{analytics.studentFeedbackScore}/5</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* Recent Reflections */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <BookOpen className="text-blue-500" size={24} />
              Recent Reflections
            </h3>
            <p className="text-sm text-slate-500">Your teaching journal entries</p>
          </div>
        </div>

        <div className="space-y-4">
          {reflections.map((reflection) => (
            <div 
              key={reflection.id}
              className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedReflection(reflection)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-slate-800">{reflection.lessonTopic}</h4>
                    {reflection.shared && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Share2 size={12} />
                        Shared
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(reflection.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>•</span>
                    <span>{reflection.class}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-lg font-bold text-sm ${getEngagementColor(reflection.studentEngagement)}`}>
                    {reflection.studentEngagement}% engaged
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-bold text-green-600 mb-1">✓ What Went Well</p>
                  <p className="text-slate-700 line-clamp-2">{reflection.whatWentWell}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-600 mb-1">→ Areas for Improvement</p>
                  <p className="text-slate-700 line-clamp-2">{reflection.areasForImprovement}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {reflection.participationRate}% participated
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {reflection.questionsAsked} questions
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors">
                  <Eye size={14} className="inline mr-1" />
                  View Full
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Report Modal */}
      {showWeeklyReport && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Weekly Teaching Reflection Report</h2>
                <p className="text-slate-600">
                  Week {weeklyReport.weekNumber} • {new Date(weeklyReport.periodStart).toLocaleDateString()} - {new Date(weeklyReport.periodEnd).toLocaleDateString()}
                </p>
                {weeklyReport.principalViewed && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                    <CheckCircle size={16} />
                    Viewed by Principal
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowWeeklyReport(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Report Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <p className="text-sm text-slate-600 mb-2">Total Lessons</p>
                <p className="text-3xl font-bold text-blue-600">{weeklyReport.totalLessons}</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <p className="text-sm text-slate-600 mb-2">Reflections Completed</p>
                <p className="text-3xl font-bold text-green-600">{weeklyReport.reflectionsCompleted}</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <p className="text-sm text-slate-600 mb-2">Avg Engagement</p>
                <p className="text-3xl font-bold text-purple-600">{weeklyReport.avgEngagement}%</p>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Sparkles className="text-orange-500" size={20} />
                Key Insights This Week
              </h3>
              <ul className="space-y-3">
                {weeklyReport.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Principal Comments */}
            {weeklyReport.principalComments && (
              <div className="mb-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <MessageSquare className="text-blue-500" size={20} />
                  Principal's Feedback
                </h3>
                <p className="text-slate-700 italic">"{weeklyReport.principalComments}"</p>
                <p className="text-xs text-slate-500 mt-2">— Principal, {new Date(weeklyReport.periodEnd).toLocaleDateString()}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                <div className="text-left">
                  <div>Download PDF</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-green-600 border-2 border-green-200 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2">
                <Share2 size={18} />
                <div className="text-left">
                  <div>Share Report</div>
                  <div className="text-[10px] text-green-400">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reflection Detail Modal */}
      {selectedReflection && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedReflection.lessonTopic}</h2>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(selectedReflection.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span>{selectedReflection.class}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedReflection(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Engagement Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-xs text-green-600 font-bold mb-1">Student Engagement</p>
                <p className="text-2xl font-bold text-green-600">{selectedReflection.studentEngagement}%</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-xs text-blue-600 font-bold mb-1">Participation Rate</p>
                <p className="text-2xl font-bold text-blue-600">{selectedReflection.participationRate}%</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-xs text-purple-600 font-bold mb-1">Questions Asked</p>
                <p className="text-2xl font-bold text-purple-600">{selectedReflection.questionsAsked}</p>
              </div>
            </div>

            {/* Reflection Content */}
            <div className="space-y-6 mb-6">
              <div className="p-5 bg-green-50 rounded-2xl border border-green-200">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={20} />
                  What Went Well
                </h3>
                <p className="text-slate-700 leading-relaxed">{selectedReflection.whatWentWell}</p>
              </div>

              <div className="p-5 bg-orange-50 rounded-2xl border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <Target className="text-orange-600" size={20} />
                  Areas for Improvement
                </h3>
                <p className="text-slate-700 leading-relaxed">{selectedReflection.areasForImprovement}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center justify-center gap-2">
                <Share2 size={18} />
                <div className="text-left">
                  <div>Share with Peers</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                <div className="text-left">
                  <div>Edit Entry</div>
                  <div className="text-[10px] text-blue-400">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReflectionJournal;
