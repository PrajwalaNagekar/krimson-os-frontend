/**
 * @component AnalyticsCenter
 * @description Screen 13: Analytics & Insight Center - Real-time visual analytics for institutional health
 */
import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  MessageSquare,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  TrendingDown,
  Mail,
  Phone,
  CheckCircle2,
  Clock,
  Target
} from 'lucide-react';

// ========================================
// MOCK DATA - Ready for Analytics Engine + Reporting API Integration
// ========================================
const mockAnalyticsData = {
  // Widget 1: Admissions Conversion Rate
  admissionsConversion: {
    currentRate: 42.5,
    previousRate: 38.2,
    trend: 'up',
    inquiries: 450,
    enrolled: 191,
    byTerm: [
      { term: 'Q1 2026', rate: 38.2 },
      { term: 'Q2 2026', rate: 40.1 },
      { term: 'Q3 2026', rate: 41.8 },
      { term: 'Q4 2026', rate: 42.5 }
    ]
  },

  // Widget 2: Fee Collection
  feeCollection: {
    totalCollected: 8750000,
    totalDue: 12000000,
    collectionRate: 72.9,
    monthlyTrend: [
      { month: 'Jan', collected: 950000, due: 1200000 },
      { month: 'Feb', collected: 880000, due: 1200000 },
      { month: 'Mar', collected: 920000, due: 1200000 },
      { month: 'Apr', collected: 1050000, due: 1200000 },
      { month: 'May', collected: 980000, due: 1200000 },
      { month: 'Jun', collected: 1100000, due: 1200000 }
    ],
    byDepartment: [
      { dept: 'Primary', collected: 3200000, percentage: 36.6 },
      { dept: 'Secondary', collected: 2900000, percentage: 33.1 },
      { dept: 'Senior', collected: 2650000, percentage: 30.3 }
    ]
  },

  // Widget 3: Staff Utilization Ratio
  staffUtilization: {
    overallRate: 87.3,
    teaching: 92.5,
    administrative: 78.4,
    support: 85.2,
    byDepartment: [
      { dept: 'Mathematics', rate: 94.2, staff: 12 },
      { dept: 'Science', rate: 91.8, staff: 15 },
      { dept: 'Languages', rate: 89.5, staff: 10 },
      { dept: 'Arts', rate: 82.1, staff: 8 },
      { dept: 'Administration', rate: 78.4, staff: 18 }
    ]
  },

  // Widget 4: Parent Communication Frequency Index
  parentCommunication: {
    frequencyIndex: 8.7, // out of 10
    totalCommunications: 3542,
    responseRate: 94.2,
    avgResponseTime: '4.2 hours',
    byChannel: [
      { channel: 'SMS', count: 1420, percentage: 40.1, responseRate: 96.5 },
      { channel: 'Email', count: 1180, percentage: 33.3, responseRate: 92.3 },
      { channel: 'App', count: 680, percentage: 19.2, responseRate: 95.8 },
      { channel: 'Phone', count: 262, percentage: 7.4, responseRate: 89.1 }
    ],
    weeklyTrend: [
      { week: 'Week 1', count: 820 },
      { week: 'Week 2', count: 890 },
      { week: 'Week 3', count: 920 },
      { week: 'Week 4', count: 912 }
    ]
  }
};

const AnalyticsCenter = () => {
  const [selectedTerm, setSelectedTerm] = useState('All Terms');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION - Admin Gradient Theme
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Gradient matching Admin Sidebar (Cyan → Blue → Pink) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        
        {/* Decorative Glass Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Business Intelligence
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/5 px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Real-time Data
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Analytics & Insight Center
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Access real-time visual analytics for institutional health and performance metrics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="flex flex-col items-center gap-0.5 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/20 transition-all group">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>This Quarter</span>
                </div>
                <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 px-4 py-2 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all group">
                <div className="flex items-center gap-2">
                  <Download size={18} />
                  <span>Export Report</span>
                </div>
                <span className="text-[10px] text-blue-400 font-normal">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          FOUR KEY WIDGETS - With Hover Scale Effect
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Widget 1: Admissions Conversion Rate */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
              <TrendingUp size={24} strokeWidth={2.5} />
            </div>
            <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${
              mockAnalyticsData.admissionsConversion.trend === 'up' 
                ? 'text-green-600 bg-green-50' 
                : 'text-red-600 bg-red-50'
            }`}>
              <ArrowUpRight size={12} />
              +{(mockAnalyticsData.admissionsConversion.currentRate - mockAnalyticsData.admissionsConversion.previousRate).toFixed(1)}%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockAnalyticsData.admissionsConversion.currentRate}%
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Admissions Conv. Rate
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {mockAnalyticsData.admissionsConversion.enrolled} enrolled from {mockAnalyticsData.admissionsConversion.inquiries} inquiries
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* Widget 2: Fee Collection Graph */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
              <DollarSign size={24} strokeWidth={2.5} />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUpRight size={12} />
              +8.2%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockAnalyticsData.feeCollection.collectionRate}%
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Fee Collection Rate
            </p>
            <p className="text-xs text-slate-400 mt-2">
              ₹{(mockAnalyticsData.feeCollection.totalCollected / 1000000).toFixed(1)}M collected
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* Widget 3: Staff Utilization Ratio */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Activity size={24} strokeWidth={2.5} />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUpRight size={12} />
              +2.1%
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockAnalyticsData.staffUtilization.overallRate}%
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Staff Utilization
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Teaching: {mockAnalyticsData.staffUtilization.teaching}% | Admin: {mockAnalyticsData.staffUtilization.administrative}%
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>

        {/* Widget 4: Parent Communication Frequency Index */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl group-hover:scale-110 transition-transform">
              <MessageSquare size={24} strokeWidth={2.5} />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <ArrowUpRight size={12} />
              +0.5
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-1">
              {mockAnalyticsData.parentCommunication.frequencyIndex}<span className="text-xl text-slate-400">/10</span>
            </h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Communication Index
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {mockAnalyticsData.parentCommunication.totalCommunications} total • {mockAnalyticsData.parentCommunication.responseRate}% response
            </p>
            <p className="text-[10px] text-slate-400 mt-3">(get in app)</p>
          </div>
        </div>
      </div>

      {/* ========================================
          DRILL-DOWN FILTERS
          ======================================== */}
      <div className="flex flex-wrap gap-4 items-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <Filter size={18} className="text-slate-400" />
          Filter Analytics:
        </div>
        <select 
          value={selectedTerm}
          onChange={(e) => setSelectedTerm(e.target.value)}
          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <option>All Terms</option>
          <option>Q1 2026</option>
          <option>Q2 2026</option>
          <option>Q3 2026</option>
          <option>Q4 2026</option>
        </select>
        <select 
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <option>All Departments</option>
          <option>Primary</option>
          <option>Secondary</option>
          <option>Senior</option>
          <option>Administration</option>
        </select>
        <span className="text-xs text-slate-400 ml-auto">(get in app)</span>
      </div>

      {/* ========================================
          INTERACTIVE CHARTS SECTION
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Admissions Conversion Funnel */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Admissions Funnel</h3>
              <p className="text-sm text-slate-500">Quarterly conversion trends</p>
            </div>
            <div className="p-2 bg-blue-50 rounded-full text-blue-600">
              <Target size={20} />
            </div>
          </div>
          
          {/* Funnel Visualization */}
          <div className="space-y-3">
            {mockAnalyticsData.admissionsConversion.byTerm.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="font-semibold text-slate-700">{item.term}</span>
                  <span className="font-bold text-blue-600">{item.rate}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300"
                    style={{ width: `${item.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
            Click on bars for detailed breakdown (get in app)
          </div>
        </div>

        {/* Chart 2: Fee Collection Trends */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Fee Collection Trends</h3>
              <p className="text-sm text-slate-500">Monthly collection vs due</p>
            </div>
            <div className="p-2 bg-green-50 rounded-full text-green-600">
              <BarChart3 size={20} />
            </div>
          </div>
          
          {/* Bar Chart Visualization */}
          <div className="space-y-3">
            {mockAnalyticsData.feeCollection.monthlyTrend.slice(-4).map((item, idx) => {
              const percentage = (item.collected / item.due) * 100;
              return (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="font-semibold text-slate-700">{item.month}</span>
                    <span className="font-bold text-green-600">
                      ₹{(item.collected / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-3 gap-3 text-center">
              {mockAnalyticsData.feeCollection.byDepartment.map((dept, idx) => (
                <div key={idx} className="p-2 bg-slate-50 rounded-lg">
                  <p className="text-xs font-semibold text-slate-500">{dept.dept}</p>
                  <p className="text-sm font-bold text-slate-800">{dept.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart 3: Staff Utilization Dashboard */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Staff Utilization</h3>
              <p className="text-sm text-slate-500">Department-wise breakdown</p>
            </div>
            <div className="p-2 bg-purple-50 rounded-full text-purple-600">
              <Users size={20} />
            </div>
          </div>
          
          {/* Utilization Breakdown */}
          <div className="space-y-4">
            {mockAnalyticsData.staffUtilization.byDepartment.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-slate-700 text-sm">{item.dept}</span>
                    <span className="text-xs text-slate-400 ml-2">({item.staff} staff)</span>
                  </div>
                  <span className={`font-bold text-sm ${
                    item.rate >= 90 ? 'text-green-600' : 
                    item.rate >= 80 ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {item.rate}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      item.rate >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                      item.rate >= 80 ? 'bg-gradient-to-r from-purple-400 to-blue-500' :
                      'bg-gradient-to-r from-orange-400 to-amber-500'
                    }`}
                    style={{ width: `${item.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-600 font-semibold">Teaching</p>
              <p className="text-lg font-bold text-purple-700">{mockAnalyticsData.staffUtilization.teaching}%</p>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-600 font-semibold">Admin</p>
              <p className="text-lg font-bold text-blue-700">{mockAnalyticsData.staffUtilization.administrative}%</p>
            </div>
            <div className="p-2 bg-cyan-50 rounded-lg">
              <p className="text-xs text-cyan-600 font-semibold">Support</p>
              <p className="text-lg font-bold text-cyan-700">{mockAnalyticsData.staffUtilization.support}%</p>
            </div>
          </div>
        </div>

        {/* Chart 4: Communication Analytics */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Communication Analytics</h3>
              <p className="text-sm text-slate-500">Parent engagement metrics</p>
            </div>
            <div className="p-2 bg-pink-50 rounded-full text-pink-600">
              <MessageSquare size={20} />
            </div>
          </div>
          
          {/* Channel Breakdown */}
          <div className="space-y-3 mb-4">
            {mockAnalyticsData.parentCommunication.byChannel.map((channel, idx) => {
              const Icon = channel.channel === 'SMS' ? MessageSquare :
                          channel.channel === 'Email' ? Mail :
                          channel.channel === 'Phone' ? Phone : CheckCircle2;
              return (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Icon size={16} className="text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">{channel.channel}</p>
                      <p className="text-xs text-slate-400">{channel.count} communications</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-pink-600 text-sm">{channel.responseRate}%</p>
                    <p className="text-xs text-slate-400">response</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Weekly Trend */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-3">Weekly Trend</p>
            <div className="flex items-end justify-between gap-2 h-20">
              {mockAnalyticsData.parentCommunication.weeklyTrend.map((week, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center group">
                  <div 
                    className="w-full bg-gradient-to-t from-pink-400 to-pink-300 rounded-t-lg hover:from-pink-500 hover:to-pink-400 transition-all cursor-pointer"
                    style={{ height: `${(week.count / 1000) * 100}%` }}
                  />
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">{week.week.replace('Week ', 'W')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AnalyticsCenter;
