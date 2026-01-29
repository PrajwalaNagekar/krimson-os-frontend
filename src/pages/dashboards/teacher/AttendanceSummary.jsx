import React, { useState, useEffect } from 'react';
import { 
  Download, TrendingDown, TrendingUp, Users, Calendar,
  AlertTriangle, CheckCircle, BarChart2, FileText, Filter,
  Eye, X, ChevronDown, Activity, Target, Sparkles, Clock
} from 'lucide-react';

const AttendanceSummary = () => {
  // Monthly attendance data
  const [monthlyData] = useState([
    { month: 'Aug', percentage: 92 },
    { month: 'Sep', percentage: 94 },
    { month: 'Oct', percentage: 91 },
    { month: 'Nov', percentage: 93 },
    { month: 'Dec', percentage: 89 },
    { month: 'Jan', percentage: 88 },
  ]);

  // Term-wise data
  const [termData] = useState([
    { term: 'Term 1', percentage: 92.5, students: 90, totalDays: 60 },
    { term: 'Term 2', percentage: 90.3, students: 90, totalDays: 55 },
    { term: 'Term 3', percentage: 88.7, students: 90, totalDays: 45 },
  ]);

  // Class-wise attendance
  const [classAttendance] = useState([
    { class: 'Grade 9-A', current: 88, previous: 93, trend: 'down', students: 32, avgAbsences: 3.8 },
    { class: 'Grade 9-B', current: 91, previous: 89, trend: 'up', students: 30, avgAbsences: 2.7 },
    { class: 'Grade 10-A', current: 94, previous: 94, trend: 'stable', students: 28, avgAbsences: 1.7 },
  ]);

  // Student absence frequency
  const [studentAbsences] = useState([
    { name: 'David Kim', class: 'Grade 9-A', absences: 8, percentage: 78, trend: 'increasing', lastAbsent: '2026-01-18' },
    { name: 'Hannah Martinez', class: 'Grade 9-A', absences: 7, percentage: 82, trend: 'stable', lastAbsent: '2026-01-17' },
    { name: 'James Wilson', class: 'Grade 9-B', absences: 6, percentage: 85, trend: 'decreasing', lastAbsent: '2026-01-15' },
    { name: 'Olivia Brown', class: 'Grade 10-A', absences: 5, percentage: 87, trend: 'stable', lastAbsent: '2026-01-14' },
  ]);

  // Automated insights
  const [insights] = useState([
    {
      type: 'alert',
      severity: 'high',
      message: 'Class 9-A attendance dropped 5% this week (88% vs 93% last week)',
      action: 'Review student absences and send parent notifications'
    },
    {
      type: 'warning',
      severity: 'medium',
      message: '4 students have missed more than 5 classes this month',
      action: 'Schedule counselor intervention meetings'
    },
    {
      type: 'positive',
      severity: 'low',
      message: 'Class 10-A maintains 94% attendance - above school average',
      action: 'Continue current engagement strategies'
    },
    {
      type: 'info',
      severity: 'medium',
      message: 'Overall attendance decreased 1.3% compared to last month',
      action: 'Analyze seasonal patterns and weather impact'
    }
  ]);

  const [selectedView, setSelectedView] = useState('monthly'); // 'monthly', 'term'
  const [showInsights, setShowInsights] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/attendance/summary')
    //   .then(res => res.json())
    //   .then(data => setAttendanceData(data));
    console.log('Attendance Summary loaded - Ready for API integration');
  }, []);

  // Calculate overall stats
  const overallStats = {
    currentMonth: monthlyData[monthlyData.length - 1].percentage,
    totalStudents: classAttendance.reduce((sum, c) => sum + c.students, 0),
    avgAttendance: (classAttendance.reduce((sum, c) => sum + c.current, 0) / classAttendance.length).toFixed(1),
    atRiskStudents: studentAbsences.filter(s => s.percentage < 85).length,
  };

  // Get trend color
  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
      case 'decreasing': // decreasing absences is good
        return 'text-green-600';
      case 'down':
      case 'increasing': // increasing absences is bad
        return 'text-red-600';
      default:
        return 'text-slate-600';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
      case 'decreasing':
        return <TrendingUp size={14} />;
      case 'down':
      case 'increasing':
        return <TrendingDown size={14} />;
      default:
        return <Activity size={14} />;
    }
  };

  // Get insight color
  const getInsightColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'medium':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'low':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="text-red-600" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-orange-600" size={20} />;
      case 'positive':
        return <CheckCircle className="text-green-600" size={20} />;
      default:
        return <Sparkles className="text-blue-600" size={20} />;
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Attendance Summary & Reports
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Cumulative Attendance Overview
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {overallStats.totalStudents} students • {overallStats.avgAttendance}% average attendance
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
                <Download size={20} />
                <div className="text-left">
                  <div>Export Excel</div>
                  <div className="text-[10px] opacity-70">get in app</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Insights */}
      {showInsights && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Sparkles size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Automated Insights</h3>
                <p className="text-slate-600">AI-powered attendance analysis and recommendations</p>
              </div>
            </div>
            <button
              onClick={() => setShowInsights(false)}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {insights.map((insight, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border-2 ${getInsightColor(insight.severity)}`}>
                <div className="flex items-start gap-3">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <p className="font-bold mb-2">{insight.message}</p>
                    <p className="text-sm opacity-80">
                      <span className="font-bold">Recommended Action:</span> {insight.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Month</p>
            <Calendar className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{overallStats.currentMonth}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Attendance</p>
            <CheckCircle className="text-green-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">{overallStats.avgAttendance}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Students</p>
            <Users className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{overallStats.totalStudents}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-red-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">At Risk</p>
            <AlertTriangle className="text-red-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-red-600">{overallStats.atRiskStudents}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white p-4 rounded-3xl shadow-md">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedView('monthly')}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              selectedView === 'monthly'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Monthly View
          </button>
          <button
            onClick={() => setSelectedView('term')}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              selectedView === 'term'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Term-wise View
          </button>
        </div>
      </div>

      {/* Monthly/Term Graph */}
      {selectedView === 'monthly' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                <BarChart2 className="text-blue-500" size={24} />
                Monthly Attendance Trend
              </h3>
              <p className="text-sm text-slate-500">6-month attendance overview</p>
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {monthlyData.map((data, idx) => {
              const maxValue = 100;
              const height = (data.percentage / maxValue) * 100;
              
              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full relative group cursor-pointer">
                    <div className="w-full bg-slate-100 rounded-t-xl relative" style={{ height: '200px' }}>
                      <div 
                        className={`absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl transition-all duration-500 group-hover:from-blue-700 group-hover:to-cyan-500 shadow-lg ${
                          data.percentage < 90 ? 'from-orange-600 to-red-400' : ''
                        }`}
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {data.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 mt-3">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Term-wise View */}
      {selectedView === 'term' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                <Target className="text-purple-500" size={24} />
                Term-wise Attendance Summary
              </h3>
              <p className="text-sm text-slate-500">Academic year overview by term</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {termData.map((term, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
                <h4 className="font-bold text-slate-800 mb-4">{term.term}</h4>
                
                {/* Percentage */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-600">Average Attendance</span>
                    <span className="font-bold text-blue-600">{term.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                      style={{ width: `${term.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Students</span>
                    <span className="font-bold text-slate-800">{term.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Days</span>
                    <span className="font-bold text-slate-800">{term.totalDays}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Class-wise Breakdown */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <Users className="text-green-500" size={24} />
              Class-wise Attendance Breakdown
            </h3>
            <p className="text-sm text-slate-500">Current vs previous week comparison</p>
          </div>
        </div>

        <div className="space-y-4">
          {classAttendance.map((classData, idx) => (
            <div 
              key={idx}
              className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedClass(classData)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-slate-800">{classData.class}</h4>
                  <p className="text-xs text-slate-500">{classData.students} students</p>
                </div>
                <div className={`flex items-center gap-1 font-bold ${getTrendColor(classData.trend)}`}>
                  {getTrendIcon(classData.trend)}
                  <span className="text-sm">{classData.trend}</span>
                </div>
              </div>

              {/* Current Attendance */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-600">Current Week</span>
                  <span className={`font-bold ${classData.current >= 90 ? 'text-green-600' : classData.current >= 85 ? 'text-orange-600' : 'text-red-600'}`}>
                    {classData.current}%
                  </span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      classData.current >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                      classData.current >= 85 ? 'bg-gradient-to-r from-orange-500 to-amber-400' :
                      'bg-gradient-to-r from-red-500 to-pink-400'
                    }`}
                    style={{ width: `${classData.current}%` }}
                  ></div>
                </div>
              </div>

              {/* Comparison */}
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Previous: {classData.previous}%</span>
                <span>Avg Absences: {classData.avgAbsences}/day</span>
              </div>

              {/* Alert */}
              {classData.current < classData.previous - 3 && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-red-800">
                    Attendance dropped {classData.previous - classData.current}% - requires attention
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Student Absence Frequency */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={24} />
              High Absence Frequency Students
            </h3>
            <p className="text-sm text-slate-500">Students requiring attendance intervention</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studentAbsences.map((student, idx) => (
            <div key={idx} className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-800">{student.name}</h4>
                  <p className="text-xs text-slate-500">{student.class}</p>
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${getTrendColor(student.trend)}`}>
                  {getTrendIcon(student.trend)}
                  <span>{student.trend}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Total Absences</p>
                  <p className="text-2xl font-bold text-red-600">{student.absences}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Attendance %</p>
                  <p className="text-2xl font-bold text-orange-600">{student.percentage}%</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 flex items-center gap-1">
                  <Clock size={12} />
                  Last absent: {new Date(student.lastAbsent).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <FileText size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Generate Administrative Reports</h3>
            <p className="text-sm opacity-90">
              Export detailed attendance summaries for administrative submission and record-keeping
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Download size={18} />
              <div className="text-left">
                <div>Excel Report</div>
                <div className="text-[10px] opacity-70">get in app</div>
              </div>
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2">
              <Download size={18} />
              <div className="text-left">
                <div>PDF Report</div>
                <div className="text-[10px] opacity-80">get in app</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
