import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { 
  Star, AlertTriangle, TrendingUp, Award, CheckCircle, 
  Calendar, User, BookOpen, Users, Trophy, Badge, Clock, ExternalLink
} from 'lucide-react';

/**
 * Student Behavior Log - Screen 11
 * Purpose: Feedback on punctuality, conduct, participation, and achievements
 * Future: Replace static data with Admin + Student Affairs APIs
 */
const BehaviorLog = () => {
  const { behavior } = STUDENT_DATA;
  const [expandedWarning, setExpandedWarning] = useState(null);

  // Category colors for achievements
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Leadership': return 'from-cyan-400 to-blue-500';
      case 'Academic': return 'from-blue-500 to-indigo-500';
      case 'Community Service': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  // Category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Leadership': return Users;
      case 'Academic': return BookOpen;
      case 'Community Service': return Trophy;
      default: return Award;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <Trophy size={32} />
            Behavior & Conduct
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-6">Track your punctuality, achievements, and growth</p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{behavior.totalPoints}</div>
              <div className="text-xs text-white/80 mt-1">Total Points</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{behavior.rank}</div>
              <div className="text-xs text-white/80 mt-1">Rank</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="text-3xl md:text-4xl font-bold">{behavior.percentile}</div>
              <div className="text-xs text-white/80 mt-1">Percentile</div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Trend Chart */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="text-blue-500" size={24} />
            Attendance Trends
          </h2>
        </div>

        {/* Simple Bar Chart */}
        <div className="flex items-end justify-between gap-3 md:gap-4 h-48 mb-6">
          {behavior.attendanceTrends.map((trend, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative w-full bg-slate-100 rounded-t-lg overflow-hidden" 
                   style={{ height: `${(trend.percentage / 100) * 160}px` }}>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-400 to-blue-400 rounded-t-lg transition-all duration-500"
                     style={{ height: '100%' }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white drop-shadow">{trend.percentage}%</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600">{trend.month}</span>
            </div>
          ))}
        </div>

        {/* Punctuality Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
            <div className="p-2 bg-green-200 rounded-xl">
              <CheckCircle size={20} className="text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700">{behavior.punctuality.onTime}</div>
              <div className="text-xs text-green-600 font-medium">On Time</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl">
            <div className="p-2 bg-orange-200 rounded-xl">
              <Clock size={20} className="text-orange-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-700">{behavior.punctuality.late}</div>
              <div className="text-xs text-orange-600 font-medium">Late</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
            <div className="p-2 bg-blue-200 rounded-xl">
              <TrendingUp size={20} className="text-blue-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700">{behavior.punctuality.percentage}%</div>
              <div className="text-xs text-blue-600 font-medium">Punctuality Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Positive Behavior Log - Achievements */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Award className="text-purple-500" size={24} />
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {behavior.achievements.map((achievement) => {
            const Icon = getCategoryIcon(achievement.category);
            return (
              <div key={achievement.id}
                   className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-5 border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4 mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(achievement.category)} text-white shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-base mb-1">{achievement.title}</h3>
                    <span className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white`}>
                      {achievement.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">+{achievement.points}</div>
                    <div className="text-[10px] text-slate-500 font-medium">points</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{achievement.teacher}</span>
                    </div>
                    <span>{achievement.date}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 italic opacity-70">
                    Go to App <ExternalLink size={10} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Participation Points */}
        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Subject Participation</h3>
          <div className="space-y-3">
            {behavior.participationPoints.map((subject, index) => {
              const percentage = (subject.points / subject.maxPoints) * 100;
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">{subject.subject}</span>
                    <span className="text-sm font-bold text-blue-600">{subject.points}/{subject.maxPoints}</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Warnings Section - Only show if warnings exist */}
      {behavior.warnings && behavior.warnings.length > 0 && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-orange-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-orange-500" size={24} />
            Behavioral Notices
          </h2>

          <div className="space-y-4">
            {behavior.warnings.map((warning) => (
              <div key={warning.id}
                   className={`rounded-2xl p-5 border-2 transition-all ${
                     warning.resolved 
                       ? 'bg-green-50 border-green-200' 
                       : 'bg-orange-50 border-orange-200'
                   }`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className={`p-2 rounded-xl ${
                    warning.resolved ? 'bg-green-200' : 'bg-orange-200'
                  }`}>
                    {warning.resolved ? (
                      <CheckCircle size={20} className="text-green-700" />
                    ) : (
                      <AlertTriangle size={20} className="text-orange-700" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-bold text-base ${
                        warning.resolved ? 'text-green-800' : 'text-orange-800'
                      }`}>
                        {warning.type} - {warning.severity}
                      </h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${
                        warning.resolved 
                          ? 'bg-green-200 text-green-700' 
                          : 'bg-orange-200 text-orange-700'
                      }`}>
                        {warning.resolved ? 'Resolved' : 'Active'}
                      </span>
                    </div>
                    <p className={`text-sm mb-2 ${
                      warning.resolved ? 'text-green-700' : 'text-orange-700'
                    }`}>
                      {warning.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span>Reported by: {warning.teacher}</span>
                      <span>Date: {warning.date}</span>
                    </div>
                  </div>
                </div>

                {/* Counselor Notes */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge size={14} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-600 uppercase">Counselor Notes</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">{warning.counselorNotes}</p>
                  <div className="flex justify-end">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 italic opacity-70">
                      Go to App <ExternalLink size={10} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      
    </div>
  );
};

export default BehaviorLog;
