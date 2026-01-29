import React, { useState } from 'react';
import { 
  Heart, 
  Smile, 
  Frown, 
  Award,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  UserCheck,
  MessageCircle,
  Download,
  Eye,
  Star,
  Trophy,
  CheckCircle
} from 'lucide-react';

// Incident Heatmap Cell
const HeatmapCell = ({ grade, incidentType, count }) => {
  const intensity = count > 5 ? 'high' : count > 2 ? 'medium' : count > 0 ? 'low' : 'none';
  
  return (
    <div 
      className={`p-3 rounded-lg text-center transition-all hover:scale-105 cursor-pointer ${
        intensity === 'high' ? 'bg-red-500 text-white' :
        intensity === 'medium' ? 'bg-orange-400 text-white' :
        intensity === 'low' ? 'bg-yellow-300 text-slate-800' :
        'bg-slate-100 text-slate-400'
      }`}
      title={`${incidentType} in Grade ${grade}: ${count} incidents`}
    >
      <span className="text-xs font-bold">{count}</span>
    </div>
  );
};

// Counselor Referral Card
const CounselorReferralCard = ({ studentName, grade, issue, counselor, status, daysOpen }) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">Grade {grade} • {issue}</p>
      </div>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
        status === 'Resolved' ? 'bg-green-100 text-green-700' :
        status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
        'bg-orange-100 text-orange-700'
      }`}>
        {status}
      </span>
    </div>
    <p className="text-sm text-slate-700 mb-2">
      <span className="font-semibold">Counselor:</span> {counselor}
    </p>
    <p className="text-xs text-slate-500">
      {status === 'Resolved' ? 'Resolved' : `${daysOpen} days open`}
    </p>
  </div>
);

// Positive Recognition Card
const RecognitionCard = ({ studentName, grade, achievement, category, date }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-yellow-200 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="flex items-start gap-3 mb-3">
      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl">
        <Trophy className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">Grade {grade}</p>
      </div>
    </div>
    <div className="mb-2">
      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
        category === 'Academic' ? 'bg-blue-100 text-blue-700' :
        category === 'Sports' ? 'bg-green-100 text-green-700' :
        category === 'Arts' ? 'bg-purple-100 text-purple-700' :
        'bg-orange-100 text-orange-700'
      }`}>
        {category}
      </span>
    </div>
    <p className="text-sm text-slate-700 font-medium mb-1">{achievement}</p>
    <p className="text-xs text-slate-500">{date}</p>
  </div>
);

// Alert Card
const AlertCard = ({ title, description, priority, grade, actionLabel }) => (
  <div className={`p-4 border-l-4 rounded-xl ${
    priority === 'Critical' ? 'border-red-600 bg-red-50' :
    priority === 'High' ? 'border-orange-600 bg-orange-50' :
    'border-blue-600 bg-blue-50'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className={`w-4 h-4 ${
            priority === 'Critical' ? 'text-red-600' :
            priority === 'High' ? 'text-orange-600' :
            'text-blue-600'
          }`} />
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
            priority === 'Critical' ? 'bg-red-200 text-red-800' :
            priority === 'High' ? 'bg-orange-200 text-orange-800' :
            'bg-blue-200 text-blue-800'
          }`}>
            {priority}
          </span>
        </div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
        {grade && <p className="text-xs text-slate-500 mt-1">Grade {grade}</p>}
      </div>
    </div>
    <div className="flex gap-2 mt-3">
      <button className="flex-1 px-3 py-2 bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 rounded-lg text-xs font-bold transition-colors">
        View Details
        <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
      </button>
      <button className={`flex-1 px-3 py-2 text-white rounded-lg text-xs font-bold transition-colors ${
        priority === 'Critical' ? 'bg-red-600 hover:bg-red-700' :
        priority === 'High' ? 'bg-orange-600 hover:bg-orange-700' :
        'bg-blue-600 hover:bg-blue-700'
      }`}>
        {actionLabel}
        <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
      </button>
    </div>
  </div>
);

const WelfareDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Static data - to be replaced with API calls
  const incidentHeatmap = {
    grades: ['7', '8', '9', '10', '11', '12'],
    types: ['Bullying', 'Disruption', 'Tardiness', 'Phone Use', 'Uniform'],
    data: {
      'Bullying': [2, 1, 0, 3, 1, 0],
      'Disruption': [4, 5, 3, 2, 1, 1],
      'Tardiness': [3, 2, 4, 5, 2, 1],
      'Phone Use': [1, 2, 6, 4, 3, 2],
      'Uniform': [2, 3, 1, 1, 0, 0],
    }
  };

  const counselorReferrals = [
    { studentName: 'Emily Johnson', grade: '9', issue: 'Anxiety & Stress', counselor: 'Dr. Sarah Miller', status: 'In Progress', daysOpen: 5 },
    { studentName: 'Marcus Lee', grade: '10', issue: 'Peer Conflict', counselor: 'Ms. Chen Park', status: 'In Progress', daysOpen: 3 },
    { studentName: 'Sophia Brown', grade: '8', issue: 'Family Issues', counselor: 'Dr. Sarah Miller', status: 'Resolved', daysOpen: 0 },
    { studentName: 'James Wilson', grade: '11', issue: 'Academic Pressure', counselor: 'Mr. David Roberts', status: 'Pending', daysOpen: 1 },
  ];

  const positiveRecognitions = [
    { studentName: 'Olivia Martinez', grade: '12', achievement: 'National Science Olympiad Gold Medal', category: 'Academic', date: 'Jan 18, 2026' },
    { studentName: 'Noah Thompson', grade: '10', achievement: 'State Basketball Championship MVP', category: 'Sports', date: 'Jan 17, 2026' },
    { studentName: 'Ava Garcia', grade: '11', achievement: 'Art Competition First Prize', category: 'Arts', date: 'Jan 15, 2026' },
    { studentName: 'Liam Anderson', grade: '9', achievement: 'Community Service Award (100+ hours)', category: 'Service', date: 'Jan 14, 2026' },
    { studentName: 'Emma Davis', grade: '12', achievement: 'Debate Team Regional Champion', category: 'Academic', date: 'Jan 12, 2026' },
  ];

  const pendingAlerts = [
    { title: 'Bullying Report #3402', description: 'Pending counselor assignment and parent notification', priority: 'Critical', grade: '7', actionLabel: 'Assign Counselor' },
    { title: 'Bullying Report #3405', description: 'Follow-up meeting required with all parties', priority: 'Critical', grade: '8', actionLabel: 'Schedule Meeting' },
    { title: 'Repeated Tardiness Pattern', description: '3 students with 5+ late arrivals this week', priority: 'High', grade: '10', actionLabel: 'Send Warning' },
  ];

  const totalIncidents = 12;
  const counselingReferrals = 5;
  const sentimentScore = 94;
  const meritsAwarded = 28;
  const resolutionRate = 75;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Behavior & Welfare Dashboard
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Student well-being oversight • Discipline & counseling
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Download Report</span>
                <span className="sm:hidden">Download</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div className="bg-white p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 sm:mb-2">Incidents</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">{totalIncidents}</h3>
            </div>
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <Frown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 flex items-center gap-1">
            <TrendingDown className="w-3 h-3 text-green-600" /> <span className="hidden sm:inline">15% vs last month</span><span className="sm:hidden">↓15%</span>
          </p>
          <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 sm:mb-2">Counseling</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{counselingReferrals}</h3>
            </div>
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">{resolutionRate}% <span className="hidden sm:inline">resolution rate</span></p>
          <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 sm:mb-2">Sentiment</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">{sentimentScore}%</h3>
            </div>
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600"><span className="hidden sm:inline">Overall </span>Well-being<span className="hidden sm:inline"> score</span></p>
          <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1 sm:mb-2">Awards</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600">{meritsAwarded}</h3>
            </div>
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">Merits <span className="hidden sm:inline">this month</span></p>
          <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Behavior Incident Heatmap */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                Behavior Incident Heatmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Current term breakdown by grade and type</p>
            </div>
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap">
              ↓ 15% vs last month
            </span>
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6 overflow-x-auto">
          <div className="min-w-[500px] sm:min-w-[600px]">
            {/* Header Row */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="p-2 text-xs font-bold text-slate-600">Type / Grade</div>
              {incidentHeatmap.grades.map((grade, idx) => (
                <div key={idx} className="p-2 text-xs font-bold text-center text-slate-600">
                  Grade {grade}
                </div>
              ))}
            </div>
            
            {/* Heatmap Rows */}
            {incidentHeatmap.types.map((incidentType, typeIdx) => (
              <div key={typeIdx} className="grid grid-cols-7 gap-2 mb-2">
                <div className="p-2 text-xs font-semibold text-slate-700 flex items-center">
                  {incidentType}
                </div>
                {incidentHeatmap.data[incidentType].map((count, gradeIdx) => (
                  <HeatmapCell 
                    key={gradeIdx} 
                    grade={incidentHeatmap.grades[gradeIdx]} 
                    incidentType={incidentType} 
                    count={count} 
                  />
                ))}
              </div>
            ))}
            
            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 text-xs">
              <span className="font-semibold text-slate-600">Intensity:</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-100 rounded"></div>
                <span>None</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-300 rounded"></div>
                <span>1-2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-400 rounded"></div>
                <span>3-5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <span>5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counselor Referrals & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Counselor Referrals */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-sm sm:text-base">Counselor Referrals</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{resolutionRate}% resolution rate this term</p>
          </div>
          
          <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
            {counselorReferrals.map((referral, idx) => (
              <CounselorReferralCard key={idx} {...referral} />
            ))}
          </div>
        </div>

        {/* Pending Alerts */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  <span className="text-sm sm:text-base">Pending Interventions</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Requiring immediate attention</p>
              </div>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-100 text-red-700 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap">
                {pendingAlerts.filter(a => a.priority === 'Critical').length} Critical
              </span>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            {pendingAlerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </div>
        </div>
      </div>

      {/* Positive Recognition Board */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-sm border border-yellow-200 overflow-hidden">
        <div className="p-4 sm:p-5 md:p-6 border-b border-yellow-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl text-yellow-900 flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                <span className="text-sm sm:text-base md:text-lg">Positive Recognition</span>
              </h3>
              <p className="text-xs sm:text-sm text-yellow-800 mt-1">Celebrating achievements and awards this month</p>
            </div>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap">
              View All Awards
              <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">(get in app)</span>
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {positiveRecognitions.map((recognition, idx) => (
              <RecognitionCard key={idx} {...recognition} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default WelfareDashboard;
