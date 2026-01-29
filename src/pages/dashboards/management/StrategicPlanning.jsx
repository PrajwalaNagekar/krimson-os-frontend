import React, { useState } from 'react';
import { 
  Target, TrendingUp, Lightbulb, CheckCircle, Clock,
  Download, Filter, Calendar, Activity, Award, Users,
  DollarSign, BookOpen, Zap, Flag, BarChart3, Eye
} from 'lucide-react';

/**
 * Screen 7: Strategic Planning & Vision Alignment
 * Purpose: Link measurable school data to long-term strategic goals
 * Features:
 * - Annual Targets vs Actual (Enrollment, Results, Finance)
 * - 3-Year Trend Projection (Growth %)
 * - Initiative Tracker (New Campus, New Curriculum, etc.)
 * - AI-powered Insights and recommendations
 * - Export meeting reports in PDF format for board circulation
 * Integration: Analytics Engine + Strategic KPI Database
 * Outcome: Data-driven governance ensuring alignment with institutional mission
 */

const StrategicPlanning = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  // Static data - ready for API integration
  const stats = [
    { label: 'Goals Achieved', value: '12/15', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: '80% complete' },
    { label: 'On Track', value: '8', icon: TrendingUp, gradient: 'from-cyan-400 to-blue-500', change: 'Initiatives' },
    { label: 'Needs Attention', value: '3', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: 'Behind schedule' },
    { label: 'Vision Alignment', value: '92%', icon: Target, gradient: 'from-purple-400 to-pink-500', change: 'Strategic fit' },
  ];

  // Annual Targets vs Actual
  const annualTargets = [
    {
      category: 'Enrollment',
      target: 480,
      actual: 445,
      percentage: 92.7,
      status: 'on-track',
      variance: -35,
      yoyGrowth: 12,
    },
    {
      category: 'Academic Results',
      target: 85.0,
      actual: 87.5,
      percentage: 102.9,
      status: 'exceeded',
      variance: 2.5,
      yoyGrowth: 2.8,
    },
    {
      category: 'Revenue (Cr)',
      target: 14.92,
      actual: 11.27,
      percentage: 75.5,
      status: 'needs-attention',
      variance: -3.65,
      yoyGrowth: 8.5,
    },
    {
      category: 'Student Satisfaction',
      target: 90.0,
      actual: 93.5,
      percentage: 103.9,
      status: 'exceeded',
      variance: 3.5,
      yoyGrowth: 5.2,
    },
    {
      category: 'Teacher Retention',
      target: 90.0,
      actual: 89.0,
      percentage: 98.9,
      status: 'on-track',
      variance: -1.0,
      yoyGrowth: 3.1,
    },
    {
      category: 'Fee Collection',
      target: 95.0,
      actual: 89.5,
      percentage: 94.2,
      status: 'needs-attention',
      variance: -5.5,
      yoyGrowth: 4.2,
    },
  ];

  // 3-Year Trend Projection
  const trendProjection = {
    enrollment: [
      { year: 2022, actual: 398, target: 420 },
      { year: 2023, actual: 433, target: 450 },
      { year: 2024, actual: 445, target: 480 },
      { year: 2025, actual: null, target: 500, projected: 465 },
      { year: 2026, actual: null, target: 520, projected: 485 },
      { year: 2027, actual: null, target: 550, projected: 510 },
    ],
    academicResults: [
      { year: 2022, actual: 82.5, target: 82.0 },
      { year: 2023, actual: 85.7, target: 83.0 },
      { year: 2024, actual: 87.5, target: 85.0 },
      { year: 2025, actual: null, target: 87.0, projected: 89.2 },
      { year: 2026, actual: null, target: 89.0, projected: 90.8 },
      { year: 2027, actual: null, target: 91.0, projected: 92.5 },
    ],
    revenue: [
      { year: 2022, actual: 8.5, target: 9.2 },
      { year: 2023, actual: 10.2, target: 11.5 },
      { year: 2024, actual: 11.27, target: 14.92 },
      { year: 2025, actual: null, target: 16.5, projected: 12.8 },
      { year: 2026, actual: null, target: 18.2, projected: 14.5 },
      { year: 2027, actual: null, target: 20.5, projected: 16.2 },
    ],
  };

  // Initiative Tracker
  const initiatives = [
    {
      id: 'INIT-2024-001',
      name: 'New Science Wing Construction',
      description: 'Expand infrastructure with dedicated science laboratories',
      category: 'Infrastructure',
      startDate: '2024-01-15',
      targetDate: '2024-12-31',
      status: 'on-track',
      progress: 35,
      budget: 5000000,
      spent: 1750000,
      owner: 'Infrastructure Team',
      milestones: [
        { name: 'Planning & Approval', status: 'completed', date: '2024-01-31' },
        { name: 'Foundation Work', status: 'completed', date: '2024-03-31' },
        { name: 'Structural Construction', status: 'in-progress', date: '2024-08-31' },
        { name: 'Interior Work', status: 'pending', date: '2024-11-30' },
        { name: 'Handover', status: 'pending', date: '2024-12-31' },
      ],
    },
    {
      id: 'INIT-2024-002',
      name: 'AI-Enhanced Curriculum',
      description: 'Integrate artificial intelligence tools in teaching methodology',
      category: 'Academic',
      startDate: '2024-02-01',
      targetDate: '2024-06-30',
      status: 'on-track',
      progress: 65,
      budget: 800000,
      spent: 520000,
      owner: 'Academic Head',
      milestones: [
        { name: 'Teacher Training', status: 'completed', date: '2024-03-15' },
        { name: 'Pilot Program', status: 'completed', date: '2024-04-30' },
        { name: 'Full Rollout', status: 'in-progress', date: '2024-06-30' },
      ],
    },
    {
      id: 'INIT-2024-003',
      name: 'Student Wellness Program',
      description: 'Comprehensive mental health and wellness initiative',
      category: 'Student Support',
      startDate: '2024-01-10',
      targetDate: '2024-05-31',
      status: 'exceeded',
      progress: 95,
      budget: 300000,
      spent: 285000,
      owner: 'Counseling Team',
      milestones: [
        { name: 'Program Design', status: 'completed', date: '2024-01-31' },
        { name: 'Counselor Hiring', status: 'completed', date: '2024-02-28' },
        { name: 'Implementation', status: 'completed', date: '2024-04-30' },
        { name: 'Evaluation', status: 'in-progress', date: '2024-05-31' },
      ],
    },
    {
      id: 'INIT-2024-004',
      name: 'Digital Transformation',
      description: 'Complete digitization of administrative processes',
      category: 'Technology',
      startDate: '2024-03-01',
      targetDate: '2024-09-30',
      status: 'delayed',
      progress: 40,
      budget: 1200000,
      spent: 480000,
      owner: 'IT Department',
      milestones: [
        { name: 'System Analysis', status: 'completed', date: '2024-03-31' },
        { name: 'Vendor Selection', status: 'completed', date: '2024-04-30' },
        { name: 'System Development', status: 'delayed', date: '2024-07-31' },
        { name: 'UAT & Training', status: 'pending', date: '2024-08-31' },
        { name: 'Go Live', status: 'pending', date: '2024-09-30' },
      ],
    },
  ];

  // AI-Powered Insights
  const aiInsights = [
    {
      id: 1,
      priority: 'high',
      category: 'Retention',
      insight: 'Focus on middle school retention improvement',
      recommendation: 'Grade 10 shows 91.7% retention vs 95%+ in other grades. Implement targeted parent engagement program and enhanced student support.',
      impact: 'Potential +15 students retained annually',
      confidence: 87,
    },
    {
      id: 2,
      priority: 'high',
      category: 'Revenue',
      insight: 'Fee collection efficiency requires strategic intervention',
      recommendation: 'Current 89.5% vs 95% target. Automate reminder system and offer flexible payment plans to reduce ₹14.5L outstanding.',
      impact: 'Projected +₹8L annual revenue recovery',
      confidence: 92,
    },
    {
      id: 3,
      priority: 'medium',
      category: 'Enrollment',
      insight: 'Enrollment trending 92.7% of target capacity',
      recommendation: 'Strengthen digital marketing and alumni referral program. Current pace suggests 465 students by 2025 vs 500 target.',
      impact: 'Close 35-student gap over 12 months',
      confidence: 85,
    },
    {
      id: 4,
      priority: 'medium',
      category: 'Academic',
      insight: 'Science and Mathematics departments underperforming',
      recommendation: 'Performance at 76% and 82% vs 85% target. Consider peer tutoring program and additional teacher training workshops.',
      impact: 'Improve avg performance by 5-7%',
      confidence: 79,
    },
    {
      id: 5,
      priority: 'low',
      category: 'Infrastructure',
      insight: 'Lab utilization at capacity (93.3%)',
      recommendation: 'Computer Lab 1 showing peak utilization. New Science Wing will address capacity constraints, but consider interim scheduling optimization.',
      impact: 'Better resource allocation',
      confidence: 90,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'exceeded':
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'on-track':
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'needs-attention':
      case 'delayed': return 'bg-red-100 text-red-700 border-red-200';
      case 'pending': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatCurrency = (amount) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Strategic Planning & Vision Alignment
              </h1>
              <p className="text-gray-600">Link measurable data to long-term strategic goals and institutional mission.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Board Report (PDF)</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-gray-600 bg-gray-50">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* AI-Powered Insights */}
        <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">AI-Powered Strategic Insights</h2>
                <p className="text-sm text-white/80">Data-driven recommendations for institutional growth</p>
              </div>
            </div>

            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(insight.priority)}`}>
                        {insight.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                        {insight.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/80">Confidence</p>
                      <p className="text-lg font-bold">{insight.confidence}%</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    {insight.insight}
                  </h3>
                  
                  <p className="text-sm text-white/90 mb-3">{insight.recommendation}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <span className="text-sm font-semibold">Expected Impact:</span>
                    <span className="text-sm">{insight.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Annual Targets vs Actual */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Annual Targets vs Actual</h2>
              <p className="text-sm text-gray-600">Performance against strategic goals (2024)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annualTargets.map((item, index) => (
              <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{item.category}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(item.status)}`}>
                    {item.status === 'exceeded' && '✓ Exceeded'}
                    {item.status === 'on-track' && '→ On Track'}
                    {item.status === 'needs-attention' && '! Attention'}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className={`text-3xl font-bold ${item.status === 'exceeded' ? 'text-green-600' : item.status === 'on-track' ? 'text-blue-600' : 'text-red-600'}`}>
                      {item.actual}
                    </p>
                    <span className="text-sm text-gray-500">/ {item.target}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">
                    {item.percentage}% of target
                  </p>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
                  <div 
                    className={`h-full rounded-full transition-all ${item.status === 'exceeded' ? 'bg-gradient-to-r from-green-400 to-emerald-500' : item.status === 'on-track' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                    style={{ width: `${Math.min(item.percentage, 100)}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className={`font-semibold ${item.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    Variance: {item.variance > 0 ? '+' : ''}{item.variance}
                  </span>
                  <span className="text-gray-600">YoY: +{item.yoyGrowth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Year Trend Projection */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">3-Year Trend Projection</h2>
              <p className="text-sm text-gray-600">Historical performance and future forecasts</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Enrollment Projection */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-600" />
                Enrollment Growth
              </h3>
              <div className="space-y-3">
                {trendProjection.enrollment.map((year, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{year.year}</span>
                      <div className="text-right">
                        {year.actual ? (
                          <p className="text-lg font-bold text-green-600">{year.actual}</p>
                        ) : (
                          <p className="text-lg font-bold text-blue-600">{year.projected}</p>
                        )}
                        <p className="text-xs text-gray-500">Target: {year.target}</p>
                      </div>
                    </div>
                    {!year.actual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Projected
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Results Projection */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Academic Results (%)
              </h3>
              <div className="space-y-3">
                {trendProjection.academicResults.map((year, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{year.year}</span>
                      <div className="text-right">
                        {year.actual ? (
                          <p className="text-lg font-bold text-green-600">{year.actual}%</p>
                        ) : (
                          <p className="text-lg font-bold text-blue-600">{year.projected}%</p>
                        )}
                        <p className="text-xs text-gray-500">Target: {year.target}%</p>
                      </div>
                    </div>
                    {!year.actual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Projected
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Projection */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Revenue (₹ Cr)
              </h3>
              <div className="space-y-3">
                {trendProjection.revenue.map((year, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{year.year}</span>
                      <div className="text-right">
                        {year.actual ? (
                          <p className="text-lg font-bold text-green-600">₹{year.actual}Cr</p>
                        ) : (
                          <p className="text-lg font-bold text-blue-600">₹{year.projected}Cr</p>
                        )}
                        <p className="text-xs text-gray-500">Target: ₹{year.target}Cr</p>
                      </div>
                    </div>
                    {!year.actual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Projected
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Initiative Tracker */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Strategic Initiative Tracker</h2>
              <p className="text-sm text-gray-600">Major projects and their progress</p>
            </div>
          </div>

          <div className="space-y-6">
            {initiatives.map((initiative) => (
              <div key={initiative.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold font-mono">
                        {initiative.id}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(initiative.status)}`}>
                        {initiative.status === 'exceeded' && '✓ Exceeded'}
                        {initiative.status === 'on-track' && '→ On Track'}
                        {initiative.status === 'delayed' && '! Delayed'}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {initiative.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{initiative.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{initiative.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Owner: {initiative.owner}</span>
                      <span>Start: {initiative.startDate}</span>
                      <span>Target: {initiative.targetDate}</span>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 mb-3">
                      <p className="text-xs text-gray-600 mb-2">Progress</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {initiative.progress}%
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-full rounded-full transition-all ${initiative.status === 'exceeded' ? 'bg-gradient-to-r from-green-400 to-emerald-500' : initiative.status === 'on-track' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                          style={{ width: `${initiative.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <p className="text-xs text-gray-600">Budget</p>
                        <p className="font-bold text-green-700">{formatCurrency(initiative.budget)}</p>
                      </div>
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <p className="text-xs text-gray-600">Spent</p>
                        <p className="font-bold text-orange-700">{formatCurrency(initiative.spent)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm">Milestones:</h4>
                  <div className="flex flex-wrap gap-2">
                    {initiative.milestones.map((milestone, idx) => (
                      <div key={idx} className={`px-3 py-2 rounded-lg text-xs font-semibold border ${getStatusColor(milestone.status)}`}>
                        {milestone.status === 'completed' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {milestone.status === 'in-progress' && <Activity className="w-3 h-3 inline mr-1" />}
                        {milestone.status === 'delayed' && <Clock className="w-3 h-3 inline mr-1" />}
                        {milestone.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StrategicPlanning;
