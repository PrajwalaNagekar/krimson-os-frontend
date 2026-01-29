import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STUDENT_DATA } from '../../../data/studentData';
import { 
  TrendingUp, Clock, CheckCircle, Lock, Award, BookOpen, 
  Target, Flame, Calendar, ChevronRight, Trophy, Star,
  Play, BarChart3, Filter, X, FileText, AlertCircle,
  Brain, Sparkles, RefreshCw, Lightbulb, Zap, Microscope,
  Video, Beaker
} from 'lucide-react';

const MyProgress = () => {
  const navigate = useNavigate();
  const { myProgress, resources } = STUDENT_DATA; // Destructure resources
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState(null);
  
  // Filter chapters by selected subject
  const filteredChapters = selectedSubject === 'All' 
    ? myProgress.chapters 
    : myProgress.chapters.filter(ch => ch.subject === selectedSubject);

  // Helper to get resources for a specific chapter
  const getChapterResources = (chapter) => {
    if (!resources) return [];
    
    // Normalize subject (e.g., Mathematics -> MATH if needed, based on data analysis most match or use acronyms)
    // Checking data: STUDENT_DATA.resources uses "MATH", "PHYSICS", "CHEMISTRY" (uppercase)
    // STUDENT_DATA.chapters uses "Mathematics", "Physics", "Chemistry" (Title Case)
    
    const subjectMap = {
      'Mathematics': 'MATH',
      'Physics': 'PHYSICS',
      'Chemistry': 'CHEMISTRY',
      'Biology': 'BIOLOGY',
      'History': 'HISTORY',
      'English': 'ENGLISH'
    };

    const targetSubject = subjectMap[chapter.subject] || chapter.subject.toUpperCase();
    const targetChapter = `Chapter ${chapter.chapterNumber}`;

    const realResources = resources.filter(res => 
      res.subject === targetSubject && 
      res.chapter === targetChapter
    );

    // Mock data for visualization if no real resources exist
    if (realResources.length === 0) {
      return [
        { id: 'mock-1', title: `Intro to ${chapter.title}`, type: 'Video', subject: targetSubject, chapter: targetChapter },
        { id: 'mock-2', title: `${chapter.title} Notes`, type: 'Document', subject: targetSubject, chapter: targetChapter },
        { id: 'mock-3', title: 'Practical Experiment', type: 'Experiment', subject: targetSubject, chapter: targetChapter },
        { id: 'mock-4', title: 'Advanced Problems PDF', type: 'Document', subject: targetSubject, chapter: targetChapter }
      ];
    }

    return realResources;
  };

  // Get mastery badge color
  const getMasteryColor = (mastery) => {
    switch(mastery) {
      case 'mastered': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'advanced': return 'bg-gradient-to-r from-purple-400 to-pink-500';
      case 'intermediate': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      default: return 'bg-slate-400';
    }
  };

  // Get subject color for progress bar
  const getSubjectColor = (subject) => {
    const colors = {
      Mathematics: 'from-blue-400 to-blue-600',
      Physics: 'from-purple-400 to-purple-600',
      Chemistry: 'from-green-400 to-green-600',
      Biology: 'from-teal-400 to-teal-600',
      English: 'from-pink-400 to-pink-600',
      History: 'from-orange-400 to-orange-600',
    };
    return colors[subject] || 'from-blue-400 to-blue-600';
  };

  // Check if chapter should be unlocked (70% threshold)
  const isChapterUnlocked = (chapter) => {
    if (chapter.prerequisites.length === 0) return true;
    
    return chapter.prerequisites.every(prereqId => {
      const prereqChapter = myProgress.chapters.find(ch => ch.id === prereqId);
      return prereqChapter && prereqChapter.progress >= 70;
    });
  };

  // Mock assignments and quizzes for each chapter
  const getChapterDetails = (chapterId) => {
    // In real implementation, this would come from studentData
    const assignmentsMock = [
      { id: 1, name: 'Problem Set 1', status: 'completed', score: 95 },
      { id: 2, name: 'Worksheet Practice', status: 'completed', score: 88 },
      { id: 3, name: 'Advanced Problems', status: 'in-progress', score: null },
    ];

    const quizzesMock = [
      { id: 1, name: 'Chapter Quiz', status: 'completed', score: 92 },
      { id: 2, name: 'Practice Test', status: 'pending', score: null },
    ];

    const aiSuggestions = [
      {
        id: 1,
        type: 'Remedial',
        title: 'Core Concept Review',
        description: 'Review the fundamental principles to improve your baseline understanding.',
        icon: <RefreshCw size={18} className="text-orange-500" />,
        color: 'bg-orange-50 border-orange-200 text-orange-700',
        badge: 'Needs Attention'
      },
      {
        id: 2,
        type: 'Concept',
        title: 'Advanced Applications',
        description: 'Explore real-world applications to deepen your mastery of this topic.',
        icon: <Lightbulb size={18} className="text-purple-500" />,
        color: 'bg-purple-50 border-purple-200 text-purple-700',
        badge: 'Recommended'
      }
    ];

    // Mock Concept Weakness Data (linked to specific topics)
    const conceptWeaknesses = [
      {
        id: 1,
        topic: 'Quadratic Formula',
        weakness: 'Sign Errors in Discriminant',
        observation: 'Frequent calculation errors when a or c is negative.',
        recommendation: 'Use parentheses for every substitution: b² - 4(a)(c)',
        fix: 'Practice: 5 Discriminant Calcs'
      },
      {
        id: 2,
        topic: 'Nature of Roots',
        weakness: 'Condition Memorization',
        observation: 'Mixing up conditions for D > 0 (real/distinct) and D = 0 (real/equal).',
        recommendation: 'Visualizing the graph touching vs crossing the x-axis helps retention.',
        fix: 'Review: Graphical Interpretation'
      }
    ];

    return { assignments: assignmentsMock, quizzes: quizzesMock, aiSuggestions, conceptWeaknesses };
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Learning Progress</h1>
          <p className="text-white/90 text-sm md:text-base">Track your journey to mastery across all subjects</p>
        </div>
      </div>

      {/* Overall Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Progress */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Target size={24} />
            </div>
            <div className="text-4xl font-bold">{myProgress.overallStats.completionPercentage}%</div>
          </div>
          <h3 className="font-bold text-lg mb-1">Overall Progress</h3>
          <p className="text-xs text-white/80">{myProgress.overallStats.completedChapters} of {myProgress.overallStats.totalChapters} chapters completed</p>
        </div>

        {/* Time Spent */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Clock size={24} />
            </div>
            <div className="text-3xl font-bold">{myProgress.overallStats.totalTimeSpent}</div>
          </div>
          <h3 className="font-bold text-lg mb-1">Time Invested</h3>
          <p className="text-xs text-white/80">Total learning hours this term</p>
        </div>

        {/* Learning Streak */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Flame size={24} />
            </div>
            <div className="text-4xl font-bold">{myProgress.learningStreak.currentStreak}</div>
          </div>
          <h3 className="font-bold text-lg mb-1">Day Streak</h3>
          <p className="text-xs text-white/80">Longest: {myProgress.learningStreak.longestStreak} days</p>
        </div>

        {/* Average Mastery */}
        <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Award size={24} />
            </div>
            <div className="text-4xl font-bold">{myProgress.overallStats.averageMastery}%</div>
          </div>
          <h3 className="font-bold text-lg mb-1">Avg Mastery</h3>
          <p className="text-xs text-white/80">Across all subjects</p>
        </div>
      </div>

      {/* Chapter Progress Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Chapter Progress</h2>
            <p className="text-sm text-slate-500">Detailed view of your learning journey</p>
          </div>
          
          {/* Subject Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedSubject('All')}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedSubject === 'All' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Subjects
            </button>
            {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'].map(subj => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  selectedSubject === subj 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Grid - New Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredChapters.map((chapter) => {
            const unlocked = isChapterUnlocked(chapter);
            
            return (
              <div 
                key={chapter.id} 
                className={`relative bg-white border-2 rounded-2xl p-6 transition-all cursor-pointer ${
                  unlocked 
                    ? 'border-slate-200 hover:border-blue-300 hover:shadow-lg' 
                    : 'border-slate-200 bg-slate-50 opacity-75'
                }`}
                onClick={() => unlocked && setSelectedChapter(chapter)}
              >
                {/* Chapter Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                      unlocked ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-slate-400'
                    }`}>
                      {chapter.chapterNumber}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-lg">{chapter.title}</h3>
                      <p className="text-sm text-slate-500">{chapter.subject}</p>
                    </div>
                  </div>

                  {/* Mastery/Lock Badge */}
                  {unlocked ? (
                    <span className={`${getMasteryColor(chapter.mastery)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                      {chapter.mastery}
                    </span>
                  ) : (
                    <div className="p-2 bg-slate-300 rounded-lg">
                      <Lock size={18} className="text-slate-600" />
                    </div>
                  )}
                </div>

                {/* Stats Row */}
                {unlocked && (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock size={14} className="text-blue-500" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{chapter.timeSpent}</p>
                      <p className="text-[10px] text-slate-400">Time Spent</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Calendar size={14} className="text-purple-500" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        {chapter.lastAccessed ? new Date(chapter.lastAccessed).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Not started'}
                      </p>
                      <p className="text-[10px] text-slate-400">Last Access</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star size={14} className="text-yellow-500" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        {chapter.quiz_score > 0 ? `${chapter.quiz_score}%` : '--'}
                      </p>
                      <p className="text-[10px] text-slate-400">Quiz Score</p>
                    </div>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-600">Progress</span>
                    <span className="text-sm font-bold text-slate-800">{unlocked ? chapter.progress : 0}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getSubjectColor(chapter.subject)} rounded-full transition-all duration-500`}
                      style={{ width: `${unlocked ? chapter.progress : 0}%` }}
                    ></div>
                  </div>
                </div>

                {/* Topics Pills */}
                {unlocked && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {chapter.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-medium">
                        {topic}
                      </span>
                    ))}
                    {chapter.topics.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-medium">
                        +{chapter.topics.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Locked Info */}
                {!unlocked && (
                  <div className="mt-3">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle size={14} className="text-slate-500" />
                      <p className="text-xs text-slate-600 font-medium">Complete 70% of required chapters to unlock</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {chapter.prerequisites.map(prereqId => {
                        const prereqChapter = myProgress.chapters.find(ch => ch.id === prereqId);
                        return prereqChapter ? (
                          <span key={prereqId} className="px-2 py-1 bg-slate-200 rounded-md text-xs font-medium text-slate-600">
                            Ch {prereqChapter.chapterNumber}: {prereqChapter. progress}%
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {unlocked && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChapter(chapter);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    {chapter.progress === 0 ? 'Start Chapter' : chapter.progress === 100 ? 'Review' : 'Continue Learning'}
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter Details Modal */}
      {selectedChapter && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedChapter(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Fixed at top */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white p-6 rounded-t-3xl flex-shrink-0">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
                      {selectedChapter.chapterNumber}
                    </div>
                    <h2 className="text-2xl font-bold">{selectedChapter.title}</h2>
                  </div>
                  <p className="text-white/90 text-sm">{selectedChapter.subject}</p>
                </div>
                <button 
                  onClick={() => setSelectedChapter(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">{selectedChapter.progress}%</p>
                  <p className="text-xs text-slate-600 mt-1">Completion</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <p className="text-3xl font-bold text-purple-600">{selectedChapter.timeSpent}</p>
                  <p className="text-xs text-slate-600 mt-1">Time Spent</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <p className="text-3xl font-bold text-green-600">
                    {selectedChapter.quiz_score > 0 ? `${selectedChapter.quiz_score}%` : '--'}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Quiz Score</p>
                </div>
              </div>

              {/* AI Smart Suggestions */}
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 border border-indigo-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Brain size={20} className="text-indigo-600" />
                  AI Learning Suggestions
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] rounded-full uppercase tracking-wider font-bold">Beta</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getChapterDetails(selectedChapter.id).aiSuggestions.map((suggestion) => (
                    <div key={suggestion.id} className={`p-4 rounded-xl border ${suggestion.color} transition-all hover:shadow-md cursor-pointer group`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                          {suggestion.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/50 rounded-md">
                          {suggestion.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm mb-1">{suggestion.title}</h4>
                      <p className="text-xs opacity-80 mb-3 leading-relaxed">{suggestion.description}</p>
                      <div className="flex items-center gap-1 text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                        View Details <ChevronRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>


                 {/* Deep Concept Weakness Analysis */}
                 {getChapterDetails(selectedChapter.id).conceptWeaknesses && getChapterDetails(selectedChapter.id).conceptWeaknesses.length > 0 && (
                  <div className="mt-4 bg-orange-50 border border-orange-100 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-orange-100 flex items-center gap-2 bg-orange-100/50">
                      <Microscope size={18} className="text-orange-600" />
                      <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Identified Concept Gaps</h4>
                    </div>
                    <div className="divide-y divide-orange-100">
                      {getChapterDetails(selectedChapter.id).conceptWeaknesses.map((weakness) => (
                        <div key={weakness.id} className="p-4 hover:bg-orange-100/30 transition-colors">
                          <div className="flex justify-between items-start mb-1">
                            <span className="px-2 py-0.5 bg-white border border-orange-200 rounded text-[10px] font-bold text-orange-700 uppercase">
                              {weakness.topic}
                            </span>
                          </div>
                          <p className="font-bold text-slate-800 text-sm mb-1">{weakness.weakness}</p>
                          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                            <span className="font-semibold text-slate-500">Analysis:</span> {weakness.observation}
                          </p>
                          <div className="flex items-center gap-2 bg-white/60 p-2 rounded-lg border border-orange-100">
                             <Target size={14} className="text-orange-500" />
                             <p className="text-xs font-medium text-orange-800">
                               <span className="font-bold uppercase text-[10px] text-orange-500 mr-1">Fix:</span>
                               {weakness.recommendation}
                             </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                 )}
              </div>

              {/* Topics */}
              <div>
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-500" />
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedChapter.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-sm text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignments */}
              <div>
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <FileText size={18} className="text-purple-500" />
                  Assignments ({getChapterDetails(selectedChapter.id).assignments.length})
                </h3>
                <div className="space-y-2">
                  {getChapterDetails(selectedChapter.id).assignments.map((assignment) => (
                    <div 
                      key={assignment.id}
                      onClick={() => navigate('/dashboard/student/assignments')}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          assignment.status === 'completed' ? 'bg-green-500' : 
                          assignment.status === 'in-progress' ? 'bg-blue-500' : 'bg-slate-400'
                        }`}></div>
                        <div>
                          <p className="font-medium text-slate-800">{assignment.name}</p>
                          <p className="text-xs text-slate-500 capitalize">{assignment.status}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {assignment.score && (
                          <span className="text-sm font-bold text-green-600">{assignment.score}%</span>
                        )}
                        <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quizzes */}
              <div>
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Award size={18} className="text-yellow-500" />
                  Quizzes ({getChapterDetails(selectedChapter.id).quizzes.length})
                </h3>
                <div className="space-y-2">
                  {getChapterDetails(selectedChapter.id).quizzes.map((quiz) => (
                    <div 
                      key={quiz.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Star size={16} className="text-yellow-500" />
                        <div>
                          <p className="font-medium text-slate-800">{quiz.name}</p>
                          <p className="text-xs text-slate-500 capitalize">{quiz.status}</p>
                        </div>
                      </div>
                      {quiz.score && (
                        <span className="text-sm font-bold text-yellow-600">{quiz.score}%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

               {/* Reference Materials */}
               <div>
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-indigo-500" />
                  Reference Materials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Video', 'Document', 'Experiment'].map(type => {
                     const resources = getChapterResources(selectedChapter).filter(r => r.type === type);
                     if (resources.length === 0) return null;
                     
                     return (
                      <div key={type} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="flex items-center gap-2 mb-3">
                          {type === 'Video' && <Video size={16} className="text-red-500" />}
                          {type === 'Document' && <FileText size={16} className="text-blue-500" />}
                          {type === 'Experiment' && <Beaker size={16} className="text-purple-500" />}
                          <h4 className="font-bold text-slate-700 text-sm">
                            {type}s <span className="text-slate-400 font-medium text-xs ml-1">({resources.length})</span>
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {resources.map(res => (
                            <div 
                              key={res.id} 
                              onClick={() => navigate('/dashboard/student/resources')}
                              className="group flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors cursor-pointer"
                            >
                              <p className="text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors line-clamp-1">
                                {res.title}
                              </p>
                              <ChevronRight size={12} className="text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                          ))}
                        </div>
                      </div>
                     );
                  })}
                  {getChapterResources(selectedChapter).length === 0 && (
                     <div className="col-span-full p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                       <p className="text-sm">No specific reference materials linked to this chapter yet.</p>
                     </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate('/dashboard/student/assignments')}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  View Assignments
                </button>
                <button 
                  onClick={() => setSelectedChapter(null)}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProgress;
