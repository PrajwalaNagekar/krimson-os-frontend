import React, { useState } from 'react';
import { 
  Users, GraduationCap, TrendingUp, DollarSign, Activity,
  AlertTriangle, CheckCircle, Calendar, Target, Award,
  BookOpen, Clock, TrendingDown, Download, Filter, Bell
} from 'lucide-react';

/**
 * Screen 1: Institutional Overview Dashboard
 * Purpose: Provide complete institutional performance summary for leadership
 * Key Widgets:
 * - Total Student Strength (Current/Target)
 * - Faculty Strength and Retention Rate
 * - Average Attendance (Term-to-Date)
 * - Academic Performance Index (Average %)
 * - Fee Collection Efficiency (Collected vs Expected)
 * - Real-Time Alerts: departments below target, compliance pending
 * Integration: Core Aggregation API + Academic, Finance, and HR Modules
 * Design: Executive analytics style with clean panels, infographics, and traffic-light KPIs
 */

const InstitutionalOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current'); // current, ytd, quarterly

  // Static data - ready for API integration
  // Key Performance Indicators with traffic-light status
  const kpiMetrics = [
    {
      label: 'Student Strength',
      current: 445,
      target: 480,
      percentage: 92.7,
      status: 'warning', // good, warning, critical
      icon: Users,
      gradient: 'from-cyan-400 to-blue-500',
      trend: '+12 this term',
      unit: 'students',
    },
    {
      label: 'Faculty Strength',
      current: 42,
      target: 45,
      percentage: 93.3,
      status: 'warning',
      icon: GraduationCap,
      gradient: 'from-purple-400 to-pink-500',
      trend: '89% retention',
      unit: 'teachers',
    },
    {
      label: 'Average Attendance',
      current: 94.2,
      target: 95.0,
      percentage: 94.2,
      status: 'warning',
      icon: Calendar,
      gradient: 'from-green-400 to-emerald-500',
      trend: 'Term-to-Date',
      unit: '%',
    },
    {
      label: 'Academic Performance',
      current: 87.5,
      target: 85.0,
      percentage: 102.9,
      status: 'good',
      icon: Award,
      gradient: 'from-orange-400 to-yellow-500',
      trend: '+2.5% from target',
      unit: '% avg',
    },
  ];

  // Fee Collection Efficiency
  const feeCollection = {
    collected: 12345600,
    expected: 13800000,
    percentage: 89.5,
    outstanding: 1454400,
    status: 'warning',
    monthlyBreakdown: [
      { month: 'Apr', collected: 92, expected: 100 },
      { month: 'May', collected: 88, expected: 100 },
      { month: 'Jun', collected: 95, expected: 100 },
      { month: 'Jul', collected: 87, expected: 100 },
      { month: 'Aug', collected: 91, expected: 100 },
      { month: 'Sep', collected: 85, expected: 100 },
    ],
  };

  // Department Performance (below target alerts)
  const departmentPerformance = [
    { name: 'Science', performance: 76, target: 85, status: 'critical', students: 120, teachers: 12 },
    { name: 'Mathematics', performance: 82, target: 85, status: 'warning', students: 115, teachers: 10 },
    { name: 'English', performance: 89, target: 85, status: 'good', students: 108, teachers: 8 },
    { name: 'Social Studies', performance: 91, target: 85, status: 'good', students: 102, teachers: 9 },
    { name: 'Languages', performance: 88, target: 85, status: 'good', students: 98, teachers: 7 },
  ];

  // Real-Time Alerts
  const realTimeAlerts = [
    {
      id: 1,
      type: 'Performance',
      severity: 'high',
      message: '2 departments below performance target',
      department: 'Science & Mathematics',
      timestamp: '2024-01-20 07:30 AM',
      actionRequired: 'Review teaching strategies',
    },
    {
      id: 2,
      type: 'Compliance',
      severity: 'high',
      message: 'GST filing deadline approaching',
      department: 'Finance',
      timestamp: '2024-01-20 06:00 AM',
      actionRequired: 'Complete filing by Jan 31',
    },
    {
      id: 3,
      type: 'Attendance',
      severity: 'medium',
      message: 'Grade 10 attendance below 90%',
      department: 'Admin',
      timestamp: '2024-01-19 04:15 PM',
      actionRequired: 'Send parent notifications',
    },
    {
      id: 4,
      type: 'Fee Collection',
      severity: 'medium',
      message: '128 students with pending dues',
      department: 'Finance',
      timestamp: '2024-01-19 02:00 PM',
      actionRequired: 'Send reminders',
    },
  ];

  // Grade-wise Summary
  const gradeWiseSummary = [
    { grade: 'Grade 9', students: 120, attendance: 93.5, performance: 85.2, feesPaid: 92 },
    { grade: 'Grade 10', students: 115, attendance: 89.8, performance: 84.7, feesPaid: 88 },
    { grade: 'Grade 11', students: 108, attendance: 95.1, performance: 88.3, feesPaid: 91 },
    { grade: 'Grade 12', students: 102, attendance: 96.2, performance: 91.5, feesPaid: 94 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const formatCurrency = (amount) => {
    return `₹${(amount / 100000).toFixed(2)}L`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Institutional Overview Dashboard
              </h1>
              <p className="text-gray-600">Complete institutional performance summary for leadership.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
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

        {/* Real-Time Alerts */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Real-Time Alerts</h2>
              <p className="text-xs text-gray-600">Critical notifications requiring immediate attention</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {realTimeAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-2xl border-2 ${getSeverityColor(alert.severity)} transition-all hover:shadow-md`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`w-5 h-5 ${alert.severity === 'high' ? 'text-red-600' : 'text-yellow-600'}`} />
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${alert.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {alert.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="font-bold text-gray-800 text-sm mb-1">{alert.message}</p>
                <p className="text-xs text-gray-600 mb-2">{alert.department}</p>
                <p className="text-xs text-blue-600 font-semibold">→ {alert.actionRequired}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Performance Indicators with Traffic Lights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiMetrics.map((kpi, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                {/* Traffic Light Indicator */}
                <div className={`w-4 h-4 rounded-full ${getStatusColor(kpi.status)} shadow-lg animate-pulse`}></div>
              </div>

              <p className="text-sm text-gray-600 font-medium mb-2">{kpi.label}</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                  {kpi.current}
                </p>
                <span className="text-sm text-gray-500">/ {kpi.target}</span>
                <span className="text-xs text-gray-400">{kpi.unit}</span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${kpi.gradient} transition-all`}
                  style={{ width: `${Math.min(kpi.percentage, 100)}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className={`font-semibold ${kpi.percentage >= 100 ? 'text-green-600' : kpi.percentage >= 90 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {kpi.percentage.toFixed(1)}%
                </span>
                <span className="text-gray-500">{kpi.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Collection Efficiency */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Fee Collection Efficiency</h2>
                <p className="text-sm text-gray-600">Collected vs Expected (Academic Year)</p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-full ${feeCollection.status === 'good' ? 'bg-green-100' : 'bg-yellow-100'} flex items-center gap-2`}>
              <div className={`w-3 h-3 rounded-full ${getStatusColor(feeCollection.status)} animate-pulse`}></div>
              <span className={`font-bold ${feeCollection.status === 'good' ? 'text-green-700' : 'text-yellow-700'}`}>
                {feeCollection.percentage}% Collection Rate
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <p className="text-sm text-gray-600 mb-1">Total Collected</p>
              <p className="text-3xl font-bold text-green-700">{formatCurrency(feeCollection.collected)}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <p className="text-sm text-gray-600 mb-1">Expected</p>
              <p className="text-3xl font-bold text-blue-700">{formatCurrency(feeCollection.expected)}</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100">
              <p className="text-sm text-gray-600 mb-1">Outstanding</p>
              <p className="text-3xl font-bold text-red-700">{formatCurrency(feeCollection.outstanding)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700 mb-3">Monthly Collection Trends</p>
            {feeCollection.monthlyBreakdown.map((month, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-12 text-sm font-bold text-gray-700">{month.month}</span>
                <div className="flex-1 relative h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${month.collected >= 90 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : month.collected >= 85 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                    style={{ width: `${month.collected}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                    {month.collected}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Department Performance */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Department Performance</h2>
                <p className="text-sm text-gray-600">Academic outcomes by department</p>
              </div>
            </div>

            <div className="space-y-4">
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(dept.status)} shadow-lg`}></div>
                      <h3 className="font-bold text-gray-800">{dept.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${dept.performance >= dept.target ? 'text-green-600' : dept.performance >= dept.target - 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {dept.performance}%
                      </p>
                      <p className="text-xs text-gray-500">Target: {dept.target}%</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
                    <div 
                      className={`h-full rounded-full transition-all ${dept.status === 'good' ? 'bg-gradient-to-r from-green-400 to-emerald-500' : dept.status === 'warning' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                      style={{ width: `${(dept.performance / dept.target) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{dept.students} students</span>
                    <span>{dept.teachers} teachers</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grade-wise Summary */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Grade-wise Summary</h2>
                <p className="text-sm text-gray-600">Composite metrics by grade level</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                    <th className="p-3 text-left text-xs font-bold text-gray-700 uppercase">Grade</th>
                    <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">Students</th>
                    <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">Attendance</th>
                    <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">Performance</th>
                    <th className="p-3 text-center text-xs font-bold text-gray-700 uppercase">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeWiseSummary.map((grade, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                      <td className="p-3 font-bold text-gray-800">{grade.grade}</td>
                      <td className="p-3 text-center text-gray-700">{grade.students}</td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-sm font-bold ${grade.attendance >= 95 ? 'text-green-600' : grade.attendance >= 90 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {grade.attendance}%
                          </span>
                          <div className={`w-2 h-2 rounded-full ${grade.attendance >= 95 ? 'bg-green-500' : grade.attendance >= 90 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-sm font-bold ${grade.performance >= 85 ? 'text-green-600' : grade.performance >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {grade.performance}%
                          </span>
                          <div className={`w-2 h-2 rounded-full ${grade.performance >= 85 ? 'bg-green-500' : grade.performance >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-sm font-bold ${grade.feesPaid >= 90 ? 'text-green-600' : grade.feesPaid >= 85 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {grade.feesPaid}%
                          </span>
                          <div className={`w-2 h-2 rounded-full ${grade.feesPaid >= 90 ? 'bg-green-500' : grade.feesPaid >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstitutionalOverview;
