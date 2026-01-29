import React, { useState } from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { 
  HeartPulse, TrendingDown, BrainCircuit, AlertOctagon, 
  TrendingUp, Users, Calendar, AlertTriangle, Eye, ArrowDown,
  Sparkles, Activity, Target, Bell, ExternalLink
} from 'lucide-react';

/**
 * Wellbeing & Mental Health Trends - Screen 3
 * Purpose: Identify overall student wellness indicators
 * Features: Attendance-Mood Correlation, High-Risk Students, AI Wellbeing Index
 * Future: Replace static data with Analytics Engine + Student Profile API
 */
const WellbeingTrends = () => {
  const { wellbeing } = COUNSELOR_DATA;
  const [selectedMetric, setSelectedMetric] = useState('week');

  // Future API: Fetch wellbeing analytics
  const fetchWellbeingData = () => {
    console.log('Future API: GET /api/counselor/analytics/wellbeing');
  };

  // Future API: Get high-risk students
  const fetchHighRiskStudents = () => {
    console.log('Future API: GET /api/counselor/students/high-risk');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <HeartPulse size={32} />
              Wellbeing & Mental Health
            </h1>
            <p className="text-white/90 text-sm md:text-base">Monitor student wellness indicators and identify support needs</p>
          </div>
          
          <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
            <div className="flex items-center gap-2">
              <Activity className="animate-pulse" size={18} />
              <span className="text-sm font-bold">Real-time Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Wellbeing Index - Premium Card */}
      <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-2xl -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                  <BrainCircuit size={24} />
                </div>
                <h2 className="text-2xl font-bold">AI Wellbeing Index</h2>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  CereBro Powered
                </span>
              </div>
              <p className="text-white/80 text-sm max-w-2xl leading-relaxed">
                AI-generated score based on attendance patterns, academic stress markers, behavioral observations, and self-reported mood logs. Updated daily.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-baseline justify-center md:justify-end gap-2">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">{wellbeing.avgMoodIndex}</span>
                <span className="text-2xl text-white/70">/10</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">Stable Range</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Users size={20} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">245</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Total Students</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <TrendingUp size={20} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">32</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Improved</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Target size={20} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">18</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Monitoring</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <AlertOctagon size={20} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">{wellbeing.highRiskStudents}</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">High Risk</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance-to-Mood Correlation Chart */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <Activity className="text-blue-500" size={22} />
              Attendance vs. Mood Correlation
            </h3>
            <div className="flex gap-2">
              {['week', 'month'].map(period => (
                <button
                  key={period}
                  onClick={() => setSelectedMetric(period)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedMetric === period
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}>
                  {period === 'week' ? '7 Days' : '30 Days'}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 flex items-end justify-between gap-2 px-2 mb-4">
            {wellbeing.attendanceCorrelation.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full relative h-52 flex items-end justify-center">
                  {/* Attendance Bar */}
                  <div 
                    className="w-full bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-xl hover:from-blue-500 hover:to-blue-300 transition-all cursor-pointer group relative" 
                    style={{ height: `${day.attendance}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {day.attendance}%
                    </div>
                  </div>
                  {/* Mood Line Point */}
                  <div 
                    className="absolute w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white shadow-lg hover:scale-150 transition-transform cursor-pointer" 
                    style={{ bottom: `${day.mood * 10}%` }}>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{day.day}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-400 to-blue-200 rounded"></div>
              <span className="text-xs font-bold text-slate-600">Attendance %</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-xs font-bold text-slate-600">Mood Score</span>
            </div>
          </div>

          {/* Insight */}
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-3">
              <Sparkles size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-blue-700 mb-1">AI Insight</div>
                <div className="text-xs text-blue-600">Strong positive correlation detected. Students with 90%+ attendance report 23% higher mood scores.</div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Risk Students Alert */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-red-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <AlertOctagon className="text-red-500" size={22} />
              High-Risk Students
            </h3>
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
              <Bell size={14} />
              <span className="text-xs font-bold">{wellbeing.highRiskStudents} Flagged</span>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {/* Mock high-risk students - replace with dynamic data */}
            {[
              { name: 'Sarah Chen', id: 'S2024-145', flag: 'Sharp Attendance Drop (92% → 67%)', severity: 'High', days: '2 days ago' },
              { name: 'Michael Torres', id: 'S2024-089', flag: 'Performance Dip + Mood Decline', severity: 'High', days: '1 week ago' },
              { name: 'Aisha Patel', id: 'S2024-203', flag: 'Behavioral Changes Noted', severity: 'Medium', days: '3 days ago' }
            ].map((student, i) => (
              <div key={i} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {student.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-slate-800 text-sm">{student.name}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          student.severity === 'High' ? 'bg-red-200 text-red-700' : 'bg-orange-200 text-orange-700'
                        }`}>
                          {student.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-1">{student.id}</p>
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={12} className="text-red-500 flex-shrink-0" />
                        <p className="text-xs text-red-600 font-medium">{student.flag}</p>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">Flagged {student.days}</p>
                    </div>
                  </div>
                  <button className="flex flex-col items-center gap-0.5 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105 opacity-0 group-hover:opacity-100 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Eye size={12} />
                      Review
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-white/70 italic">
                      <span>Go to App</span>
                      <ExternalLink size={8} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Alert Info */}
          <div className="pt-4 border-t border-red-100">
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <AlertTriangle size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Students are flagged based on: attendance drops &gt;20%, grade decline, behavioral incidents, or self-reported stress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trend Analysis */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
          <TrendingUp className="text-green-500" size={22} />
          Wellbeing Trend Analysis
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="text-green-600" size={20} />
              <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-1 rounded">+12%</span>
            </div>
            <div className="text-sm font-bold text-slate-700 mb-1">Improved Wellbeing</div>
            <div className="text-xs text-slate-500 mb-2">vs. last month</div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex items-center justify-between mb-3">
              <Activity className="text-blue-600" size={20} />
              <span className="text-xs font-bold text-blue-700">93.2%</span>
            </div>
            <div className="text-sm font-bold text-slate-700 mb-1">Avg Attendance</div>
            <div className="text-xs text-slate-500 mb-2">School-wide</div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
          
          <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100">
            <div className="flex items-center justify-between mb-3">
              <BrainCircuit className="text-purple-600" size={20} />
              <span className="text-xs font-bold text-purple-700">7.8/10</span>
            </div>
            <div className="text-sm font-bold text-slate-700 mb-1">AI Mood Index</div>
            <div className="text-xs text-slate-500 mb-2">Campus average</div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingTrends;
