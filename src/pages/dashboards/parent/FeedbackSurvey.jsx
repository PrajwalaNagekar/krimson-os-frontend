import React, { useState } from 'react';
import { 
  MessageCircle, 
  Star,
  Send,
  CheckCircle,
  Search,
  Filter,
  BarChart3,
  BookOpen,
  Users,
  Building2,
  Trophy,
  Clock,
  TrendingUp,
  AlertCircle,
  Eye,
  FileText
} from 'lucide-react';

const FeedbackSurvey = () => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [responses, setResponses] = useState({});
  const [comments, setComments] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data - Will be replaced with Feedback Engine + Survey API
  const surveys = [
    {
      id: 1,
      title: 'Term 1 Academic Experience Survey',
      category: 'Academics',
      deadline: '2026-01-25',
      status: 'active',
      completed: false,
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        { id: 1, text: 'How satisfied are you with the quality of teaching?', category: 'Teaching Quality' },
        { id: 2, text: 'Are the curriculum and learning materials appropriate for your child\'s level?', category: 'Curriculum' },
        { id: 3, text: 'How effective is the homework and assignment system?', category: 'Assessment' },
        { id: 4, text: 'Rate the availability of academic support and resources.', category: 'Resources' }
      ]
    },
    {
      id: 2,
      title: 'Parent-Teacher Communication Survey',
      category: 'Communication',
      deadline: '2026-01-30',
      status: 'active',
      completed: true,
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      questions: [
        { id: 1, text: 'How timely is the communication from teachers?', category: 'Responsiveness' },
        { id: 2, text: 'Rate the clarity and usefulness of progress reports.', category: 'Reporting' },
        { id: 3, text: 'How accessible are teachers for parent meetings?', category: 'Accessibility' },
        { id: 4, text: 'Are school announcements and updates delivered effectively?', category: 'Information Flow' }
      ]
    },
    {
      id: 3,
      title: 'School Facilities & Infrastructure Survey',
      category: 'Infrastructure',
      deadline: '2026-02-05',
      status: 'active',
      completed: false,
      icon: Building2,
      color: 'from-green-500 to-emerald-500',
      questions: [
        { id: 1, text: 'How would you rate the cleanliness and maintenance of facilities?', category: 'Maintenance' },
        { id: 2, text: 'Are the sports and recreational facilities adequate?', category: 'Sports Facilities' },
        { id: 3, text: 'Rate the quality of classroom technology and equipment.', category: 'Technology' },
        { id: 4, text: 'How safe and secure do you feel the school environment is?', category: 'Safety' }
      ]
    },
    {
      id: 4,
      title: 'Co-Curricular Activities Feedback',
      category: 'Activities',
      deadline: '2026-02-10',
      status: 'upcoming',
      completed: false,
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
      questions: [
        { id: 1, text: 'How satisfied are you with the variety of co-curricular activities?', category: 'Variety' },
        { id: 2, text: 'Rate the quality of coaching and supervision.', category: 'Supervision' },
        { id: 3, text: 'Are activity schedules convenient for your family?', category: 'Scheduling' },
        { id: 4, text: 'How well do activities support your child\'s overall development?', category: 'Development' }
      ]
    }
  ];

  const filteredSurveys = surveys.filter(survey =>
    survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    survey.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRatingClick = (questionId, rating) => {
    setResponses({
      ...responses,
      [questionId]: rating
    });
  };

  const handleCommentChange = (questionId, value) => {
    setComments({
      ...comments,
      [questionId]: value
    });
  };

  const handleSubmitSurvey = () => {
    console.log('Submitting survey:', selectedSurvey.id);
    console.log('Responses:', responses);
    console.log('Comments:', comments);
    // API call will be added here
    alert('Survey submitted! This will be sent to the Feedback Engine API.');
    setSelectedSurvey(null);
    setResponses({});
    setComments({});
  };

  const getStatusBadge = (status, completed) => {
    if (completed) {
      return <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1">
        <CheckCircle size={12} /> Completed
      </span>;
    }
    if (status === 'active') {
      return <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center gap-1">
        <Clock size={12} /> Active
      </span>;
    }
    return <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1">
      <AlertCircle size={12} /> Upcoming
    </span>;
  };

  const getDaysRemaining = (deadline) => {
    const days = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
    return days;
  };

  if (selectedSurvey) {
    // Survey Form View
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Back Button */}
          <button
            onClick={() => setSelectedSurvey(null)}
            className="mb-4 text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors flex items-center gap-2"
          >
            ← Back to Surveys
          </button>

          {/* Survey Header */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/60 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-4 bg-gradient-to-br ${selectedSurvey.color} rounded-2xl shadow-lg`}>
                <selectedSurvey.icon size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{selectedSurvey.title}</h1>
                <p className="text-sm text-slate-500 mb-3">Your feedback helps us improve. All responses are anonymized and shared with management for analysis.</p>
                <div className="flex flex-wrap items-center gap-2">
                  {getStatusBadge(selectedSurvey.status, selectedSurvey.completed)}
                  <span className="text-xs text-slate-500">
                    Deadline: {new Date(selectedSurvey.deadline).toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {selectedSurvey.questions.map((question, index) => (
              <div key={question.id} className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-lg border border-white/60">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">{question.text}</h3>
                    <span className="text-xs text-slate-500 font-medium">{question.category}</span>
                  </div>
                </div>

                {/* Rating Scale */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-medium">Very Dissatisfied</span>
                    <span className="text-xs text-slate-500 font-medium">Very Satisfied</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingClick(question.id, rating)}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl font-bold text-base md:text-lg transition-all ${
                          responses[question.id] === rating
                            ? `bg-gradient-to-br ${selectedSurvey.color} text-white shadow-lg scale-110`
                            : 'bg-slate-50 text-slate-600 border-2 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50'
                        }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 px-1">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <Star
                        key={rating}
                        size={16}
                        className={`${
                          responses[question.id] >= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Optional Comment */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    value={comments[question.id] || ''}
                    onChange={(e) => handleCommentChange(question.id, e.target.value)}
                    placeholder="Share your thoughts or suggestions..."
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all resize-none"
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60">
            <div className="flex items-start gap-3 mb-4 p-3 bg-cyan-50 border border-cyan-200 rounded-xl">
              <AlertCircle size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm text-cyan-800">
                <p className="font-bold mb-1">Anonymous Submission</p>
                <p>Your responses will be anonymized and aggregated for analysis. Individual responses are not shared with specific staff members.</p>
              </div>
            </div>
            <button
              onClick={handleSubmitSurvey}
              disabled={Object.keys(responses).length !== selectedSurvey.questions.length}
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="flex items-center justify-center gap-3">
                <Send size={20} />
                <div className="flex flex-col items-center">
                  <span className="text-base">Submit Survey</span>
                  <span className="text-xs opacity-80">get in app</span>
                </div>
              </div>
            </button>
            {Object.keys(responses).length !== selectedSurvey.questions.length && (
              <p className="text-xs text-center text-slate-500 mt-3">
                Please answer all questions before submitting
              </p>
            )}
          </div>
        </div>

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
  }

  // Survey List View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <MessageCircle size={24} className="md:hidden text-white" />
            <MessageCircle size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Feedback & Survey Center
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Share your thoughts to help us improve</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-100 mb-4">
          <div className="flex items-start gap-3">
            <BarChart3 size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-800 mb-1">Survey Analytics Integration</h3>
              <p className="text-xs text-slate-600">
                Your anonymous feedback is analyzed and shared with the Principal's dashboard to drive continuous improvement in academics, communication, and infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search surveys..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>
      </div>

      {/* Survey Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
        {filteredSurveys.map((survey) => {
          const SurveyIcon = survey.icon;
          const daysLeft = getDaysRemaining(survey.deadline);
          
          return (
            <div
              key={survey.id}
              className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl border border-white/60 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${survey.color} p-5`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <SurveyIcon size={24} className="text-white" />
                  </div>
                  {getStatusBadge(survey.status, survey.completed)}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{survey.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                    {survey.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {survey.questions.length} questions
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <Clock size={14} />
                  {survey.completed ? (
                    <span className="text-emerald-600 font-medium">Completed</span>
                  ) : daysLeft > 0 ? (
                    <span>{daysLeft} days remaining</span>
                  ) : (
                    <span className="text-red-600 font-medium">Deadline passed</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-2">
                  {survey.completed ? (
                    <button className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                      <Eye size={16} />
                      <div className="flex flex-col items-center">
                        <span>View Responses</span>
                        <span className="text-[8px]">get in app</span>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedSurvey(survey)}
                      className={`bg-gradient-to-r ${survey.color} text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2`}
                    >
                      <FileText size={16} />
                      <span>Take Survey</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSurveys.length === 0 && (
        <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <Search size={40} className="text-cyan-500" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">No Surveys Found</h3>
          <p className="text-sm text-slate-500">
            No surveys match your search "{searchQuery}"
          </p>
        </div>
      )}

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

export default FeedbackSurvey;
