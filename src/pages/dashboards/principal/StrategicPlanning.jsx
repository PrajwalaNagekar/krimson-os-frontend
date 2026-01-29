import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Sparkles,
  BarChart3,
  PieChart
} from 'lucide-react';

const StrategicPlanning = () => {
  // Static data for annual objectives
  const annualObjectives = [
    {
      category: 'Enrollment',
      title: 'Increase Student Enrollment',
      target: 1500,
      current: 1275,
      percentage: 85,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      icon: Users,
      trend: 'up',
      unit: 'students'
    },
    {
      category: 'Results',
      title: 'Improve Overall Pass Rate',
      target: 95,
      current: 87,
      percentage: 92,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: BookOpen,
      trend: 'up',
      unit: '%'
    },
    {
      category: 'Attendance',
      title: 'Achieve 95% Attendance Rate',
      target: 95,
      current: 91,
      percentage: 96,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      icon: Calendar,
      trend: 'up',
      unit: '%'
    },
    {
      category: 'Finance',
      title: 'Increase Revenue Collection',
      target: 50000000,
      current: 32500000,
      percentage: 65,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      icon: DollarSign,
      trend: 'down',
      unit: '₹'
    }
  ];

  // KPI Tracker Data
  const kpiData = [
    {
      label: 'Student-Teacher Ratio',
      value: '18:1',
      target: '15:1',
      status: 'warning',
      icon: Users
    },
    {
      label: 'Avg. Grade GPA',
      value: '3.4',
      target: '3.5',
      status: 'good',
      icon: BookOpen
    },
    {
      label: 'Parent Satisfaction',
      value: '4.2/5',
      target: '4.5/5',
      status: 'good',
      icon: Sparkles
    },
    {
      label: 'Infrastructure Score',
      value: '87%',
      target: '90%',
      status: 'good',
      icon: CheckCircle
    }
  ];

  // Goal Achievement Indicators
  const achievementStatus = [
    { label: 'On Track', count: 8, color: 'bg-green-500' },
    { label: 'At Risk', count: 3, color: 'bg-yellow-500' },
    { label: 'Behind', count: 2, color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Page Header */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-100 via-blue-100 to-cyan-100 rounded-full blur-2xl opacity-40 -ml-24 -mb-24"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Target size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Strategic Planning & Targets
              </h1>
              <p className="text-slate-600 mt-1 text-sm md:text-base">
                Align school goals and measurable academic targets
              </p>
            </div>
          </div>

          {/* Real-time Goal Achievement Indicator */}
          <div className="flex gap-2 flex-wrap">
            {achievementStatus.map((status, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                <div className={`w-3 h-3 rounded-full ${status.color} animate-pulse`}></div>
                <span className="text-xs font-semibold text-slate-700">{status.label}: {status.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Annual Objectives */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
            <Target className="text-white" size={20} />
          </div>
          <h3 className="font-bold text-xl text-slate-800">Annual Objectives (2026)</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {annualObjectives.map((objective, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300">
              {/* Decorative gradient blob */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${objective.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${objective.bgColor} rounded-xl flex items-center justify-center`}>
                      <objective.icon className={objective.textColor} size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{objective.category}</p>
                      <h4 className="font-bold text-slate-800 text-base">{objective.title}</h4>
                    </div>
                  </div>
                  {objective.trend === 'up' ? (
                    <ArrowUp className="text-green-500" size={20} />
                  ) : (
                    <ArrowDown className="text-red-500" size={20} />
                  )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-slate-800">
                        {objective.unit === '₹' 
                          ? `₹${(objective.current / 10000000).toFixed(1)}Cr`
                          : objective.unit === 'students' 
                            ? objective.current 
                            : `${objective.current}${objective.unit}`
                        }
                      </p>
                      <p className="text-xs text-slate-500">
                        of {objective.unit === '₹' 
                          ? `₹${(objective.target / 10000000).toFixed(1)}Cr`
                          : objective.unit === 'students' 
                            ? objective.target 
                            : `${objective.target}${objective.unit}`
                        }
                      </p>
                    </div>
                    <span className={`font-bold text-lg ${objective.percentage >= 90 ? 'text-green-600' : objective.percentage >= 70 ? 'text-blue-600' : 'text-amber-600'}`}>
                      {objective.percentage}% Achieved
                    </span>
                  </div>
                  
                  <div className="relative w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${objective.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${objective.percentage}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI Tracker & AI Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Tracker */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-xl text-slate-800">KPI Tracker</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kpiData.map((kpi, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 ${kpi.status === 'good' ? 'bg-green-50' : 'bg-amber-50'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <kpi.icon className={kpi.status === 'good' ? 'text-green-600' : 'text-amber-600'} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">{kpi.label}</p>
                    <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`text-xs font-medium ${kpi.status === 'good' ? 'text-green-600' : 'text-amber-600'}`}>
                        Target: {kpi.target}
                      </span>
                      {kpi.status === 'warning' && <AlertTriangle size={12} className="text-amber-500" />}
                    </div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full ${kpi.status === 'good' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-amber-400 to-amber-600'}`}
                    style={{ width: kpi.status === 'good' ? '85%' : '70%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <BarChart3 size={18} />
              <span>View Detailed Analytics</span>
              <p className="text-xs opacity-80 ml-auto">(get in app)</p>
            </button>
            <button className="flex-1 bg-white border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <PieChart size={18} />
              <span>Export Report</span>
              <p className="text-xs opacity-60 ml-auto">(get in app)</p>
            </button>
          </div>
        </div>

        {/* AI Recommendation Widget */}
        <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 md:p-8 rounded-3xl text-white shadow-2xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 opacity-10">
            <Target size={200} className="text-white" />
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <Zap size={24} className="text-purple-900" />
              </div>
              <div>
                <h3 className="font-bold text-xl">AI Recommendation</h3>
                <p className="text-purple-200 text-xs">Powered by Analytics Engine</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="text-yellow-300 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm font-semibold mb-2">Focus Area Alert</p>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Based on current academic trends, focusing resources on <strong className="text-white">Grade 8 English</strong> intervention classes will yield the highest impact on overall school ranking this term.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-xs text-purple-200">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} />
                    Confidence: 94%
                  </span>
                  <span>Impact: High</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <span>View Action Plan</span>
              <span className="text-xs opacity-70">(get in app)</span>
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default StrategicPlanning;
