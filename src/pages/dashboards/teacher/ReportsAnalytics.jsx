import React, { useState, useEffect } from 'react';
import { 
  Download, BarChart2, TrendingUp, TrendingDown, Users, Award,
  AlertTriangle, FileText, Calendar, Target, Filter, Share2,
  ChevronDown, Eye, X, CheckCircle, Activity, BookOpen
} from 'lucide-react';

const ReportsAnalytics = () => {
  // Sample analytics data
  const [classPerformance] = useState([
    { class: 'Grade 9-A', termAvg: 82, attendance: 94, students: 32, assignmentCompletion: 88 },
    { class: 'Grade 9-B', termAvg: 76, attendance: 89, students: 30, assignmentCompletion: 82 },
    { class: 'Grade 10-A', termAvg: 85, attendance: 96, students: 28, assignmentCompletion: 92 },
  ]);

  const [assignmentTrend] = useState([
    { week: 'Week 1', completion: 75 },
    { week: 'Week 2', completion: 82 },
    { week: 'Week 3', completion: 78 },
    { week: 'Week 4', completion: 85 },
    { week: 'Week 5', completion: 88 },
    { week: 'Week 6', completion: 92 },
  ]);

  const [topPerformers] = useState([
    { name: 'Aarav Singh', class: 'Grade 9-A', avgScore: 95.5, trend: 'improving' },
    { name: 'Charlie Tan', class: 'Grade 10-A', avgScore: 94.2, trend: 'improving' },
    { name: 'Elena Rodriguez', class: 'Grade 9-A', avgScore: 92.8, trend: 'improving' },
    { name: 'Fatima Khan', class: 'Grade 9-B', avgScore: 91.5, trend: 'stable' },
    { name: 'Sophie Chen', class: 'Grade 10-A', avgScore: 90.3, trend: 'improving' },
  ]);

  const [bottomPerformers] = useState([
    { name: 'Hannah Martinez', class: 'Grade 9-A', avgScore: 56.2, trend: 'declining' },
    { name: 'David Kim', class: 'Grade 9-A', avgScore: 62.5, trend: 'declining' },
    { name: 'James Wilson', class: 'Grade 9-B', avgScore: 64.8, trend: 'stable' },
  ]);

  // School-wide benchmark
  const [benchmark] = useState({
    schoolAverage: 78.5,
    departmentAverage: 81.2,
    myAverage: 81.0,
  });

  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedClass, setSelectedClass] = useState('all');

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/analytics')
    //   .then(res => res.json())
    //   .then(data => setAnalytics(data));
    console.log('Reports & Analytics loaded - Ready for API integration');
  }, []);

  // Calculate overall statistics
  const overallStats = {
    totalStudents: classPerformance.reduce((sum, c) => sum + c.students, 0),
    avgTermScore: (classPerformance.reduce((sum, c) => sum + c.termAvg, 0) / classPerformance.length).toFixed(1),
    avgAttendance: (classPerformance.reduce((sum, c) => sum + c.attendance, 0) / classPerformance.length).toFixed(1),
    avgCompletion: (classPerformance.reduce((sum, c) => sum + c.assignmentCompletion, 0) / classPerformance.length).toFixed(1),
  };

  // Get trend color
  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving':
        return 'text-green-600';
      case 'declining':
        return 'text-red-600';
      default:
        return 'text-slate-600';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving':
        return <TrendingUp size={14} />;
      case 'declining':
        return <TrendingDown size={14} />;
      default:
        return <Activity size={14} />;
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
            Reports & Analytics Console
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Academic Performance Analytics
              </h1>
              <p className="opacity-90 font-medium text-sm md:text-base">
                {overallStats.totalStudents} students across {classPerformance.length} classes
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-bold shadow-lg hover:bg-white/30 transition-all flex items-center gap-2">
                <Download size={20} />
                <div className="text-left">
                  <div>Export PDF</div>
                  <div className="text-[10px] opacity-80">get in app</div>
                </div>
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95">
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

      {/* Benchmark Comparison */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-purple-100 rounded-xl">
            <Target size={24} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Benchmark Comparison</h3>
            <p className="text-slate-600">Your classes vs school-wide and department averages</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* School Average */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500 mb-2">School Average</p>
            <h4 className="text-3xl font-bold text-slate-800 mb-3">{benchmark.schoolAverage}%</h4>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-500 rounded-full"
                style={{ width: `${benchmark.schoolAverage}%` }}
              ></div>
            </div>
          </div>

          {/* Department Average */}
          <div className="p-5 bg-white rounded-2xl border border-blue-200">
            <p className="text-sm text-slate-500 mb-2">Department Average</p>
            <h4 className="text-3xl font-bold text-blue-600 mb-3">{benchmark.departmentAverage}%</h4>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${benchmark.departmentAverage}%` }}
              ></div>
            </div>
          </div>

          {/* My Classes Average */}
          <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-md">
            <p className="text-sm text-white/80 mb-2">My Classes Average</p>
            <h4 className="text-3xl font-bold mb-3">{benchmark.myAverage}%</h4>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full"
                style={{ width: `${benchmark.myAverage}%` }}
              ></div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              {benchmark.myAverage > benchmark.departmentAverage ? (
                <>
                  <TrendingUp size={16} />
                  <span className="text-xs font-bold">
                    +{(benchmark.myAverage - benchmark.departmentAverage).toFixed(1)}% above department
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown size={16} />
                  <span className="text-xs font-bold">
                    {(benchmark.myAverage - benchmark.departmentAverage).toFixed(1)}% below department
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Term Score</p>
            <BarChart2 className="text-blue-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{overallStats.avgTermScore}%</h3>
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
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assignment Rate</p>
            <Target className="text-purple-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{overallStats.avgCompletion}%</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-orange-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Students</p>
            <Users className="text-orange-400 opacity-60" size={20} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{overallStats.totalStudents}</h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>

      {/* Class Performance Graphs */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <BarChart2 className="text-blue-500" size={24} />
              Class Performance Overview
            </h3>
            <p className="text-sm text-slate-500">Term average and attendance rates by class</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classPerformance.map((classData, idx) => (
            <div key={idx} className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
              <h4 className="font-bold text-slate-800 mb-4">{classData.class}</h4>
              
              {/* Term Average Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-600">Term Average</span>
                  <span className="font-bold text-blue-600">{classData.termAvg}%</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                    style={{ width: `${classData.termAvg}%` }}
                  ></div>
                </div>
              </div>

              {/* Attendance Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-600">Attendance</span>
                  <span className="font-bold text-green-600">{classData.attendance}%</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all"
                    style={{ width: `${classData.attendance}%` }}
                  ></div>
                </div>
              </div>

              {/* Students Count */}
              <div className="flex items-center justify-between pt-3 border-t border-blue-100">
                <span className="text-xs text-slate-500">Students</span>
                <span className="font-bold text-slate-800">{classData.students}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assignment Completion Trendline */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
              <TrendingUp className="text-purple-500" size={24} />
              Assignment Completion Trend
            </h3>
            <p className="text-sm text-slate-500">6-week completion rate trend</p>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 px-4">
          {assignmentTrend.map((data, idx) => {
            const maxValue = 100;
            const height = (data.completion / maxValue) * 100;
            
            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-full relative group cursor-pointer">
                  <div className="w-full bg-slate-100 rounded-t-xl relative" style={{ height: '200px' }}>
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-xl transition-all duration-500 group-hover:from-purple-700 group-hover:to-pink-500 shadow-lg"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.completion}%
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 mt-3">{data.week}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top and Bottom Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 border-2 border-green-200 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-xl">
              <Award size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Top Performers</h3>
              <p className="text-sm text-slate-600">Students excelling across subjects</p>
            </div>
          </div>

          <div className="space-y-3">
            {topPerformers.map((student, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      #{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{student.name}</h4>
                      <p className="text-xs text-slate-500">{student.class}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{student.avgScore}%</p>
                    <p className={`text-xs font-bold flex items-center gap-1 justify-end ${getTrendColor(student.trend)}`}>
                      {getTrendIcon(student.trend)}
                      {student.trend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Performers */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border-2 border-orange-200 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 rounded-xl">
              <AlertTriangle size={24} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Students Needing Support</h3>
              <p className="text-sm text-slate-600">Require additional attention</p>
            </div>
          </div>

          <div className="space-y-3">
            {bottomPerformers.map((student, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-orange-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{student.name}</h4>
                      <p className="text-xs text-slate-500">{student.class}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-600">{student.avgScore}%</p>
                    <p className={`text-xs font-bold flex items-center gap-1 justify-end ${getTrendColor(student.trend)}`}>
                      {getTrendIcon(student.trend)}
                      {student.trend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options Card */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <FileText size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Generate Comprehensive Reports</h3>
            <p className="text-sm opacity-90">
              Export detailed analytics reports for departmental review, parent meetings, or administrative purposes
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Download size={18} />
              <div className="text-left">
                <div>PDF Report</div>
                <div className="text-[10px] opacity-70">get in app</div>
              </div>
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2">
              <Download size={18} />
              <div className="text-left">
                <div>Excel Export</div>
                <div className="text-[10px] opacity-80">get in app</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
