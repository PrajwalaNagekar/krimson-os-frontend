import React, { useState } from 'react';
import { 
  TrendingUp, Award, BarChart3, PieChart, BookOpen,
  Download, Filter, Eye, Target, Users, Activity,
  CheckCircle, AlertTriangle, Calendar, FileText, TrendingDown
} from 'lucide-react';

/**
 * Screen 2: Academic & Learning Outcomes Dashboard
 * Purpose: Present academic success trends and comparative results across terms
 * Features:
 * - Performance graph by subject cluster (STEM, Humanities, Languages)
 * - Student Performance Distribution (Top 10%, Mid 50%, Bottom 10%)
 * - Pass % by Grade Level
 * - Year-on-Year Improvement line chart
 * - Quick link to Principal's analysis reports
 * Integration: Evaluation Engine + Reporting API
 * Output: Clear, quantifiable academic insights for board discussion
 */

const AcademicOutcomes = () => {
  const [selectedTerm, setSelectedTerm] = useState('current'); // current, term1, term2, term3

  // Static data - ready for API integration
  const stats = [
    { label: 'Overall Pass Rate', value: '96.8%', icon: CheckCircle, gradient: 'from-green-400 to-emerald-500', change: '+2.3% YoY' },
    { label: 'Average Performance', value: '87.5%', icon: Award, gradient: 'from-cyan-400 to-blue-500', change: '+1.8% YoY' },
    { label: 'Top Performers', value: '45', icon: TrendingUp, gradient: 'from-purple-400 to-pink-500', change: '10% of students' },
    { label: 'Need Support', value: '12', icon: AlertTriangle, gradient: 'from-orange-400 to-yellow-500', change: '2.7% of students' },
  ];

  // Subject Cluster Performance
  const subjectClusters = [
    {
      name: 'STEM',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      currentTerm: 85.3,
      previousTerm: 83.8,
      target: 85.0,
      color: 'from-cyan-400 to-blue-500',
      students: 445,
      topScore: 98,
      trend: 'up',
    },
    {
      name: 'Humanities',
      subjects: ['History', 'Geography', 'Economics', 'Political Science'],
      currentTerm: 88.7,
      previousTerm: 87.2,
      target: 85.0,
      color: 'from-purple-400 to-pink-500',
      students: 445,
      topScore: 96,
      trend: 'up',
    },
    {
      name: 'Languages',
      subjects: ['English', 'Hindi', 'Sanskrit', 'French'],
      currentTerm: 89.4,
      previousTerm: 88.9,
      target: 85.0,
      color: 'from-green-400 to-emerald-500',
      students: 445,
      topScore: 97,
      trend: 'up',
    },
  ];

  // Student Performance Distribution
  const performanceDistribution = {
    top10: { count: 45, percentage: 10.1, avgScore: 95.2, range: '90-100%' },
    mid50: { count: 223, percentage: 50.1, avgScore: 87.5, range: '75-89%' },
    bottom40: { count: 177, percentage: 39.8, avgScore: 72.3, range: 'Below 75%' },
  };

  // Pass % by Grade Level
  const gradePassRates = [
    { grade: 'Grade 9', total: 120, passed: 118, passRate: 98.3, avgScore: 84.5, distinctions: 25, failures: 2 },
    { grade: 'Grade 10', total: 115, passed: 110, passRate: 95.7, avgScore: 82.8, distinctions: 22, failures: 5 },
    { grade: 'Grade 11', total: 108, passed: 105, passRate: 97.2, avgScore: 88.1, distinctions: 30, failures: 3 },
    { grade: 'Grade 12', total: 102, passed: 100, passRate: 98.0, avgScore: 91.2, distinctions: 38, failures: 2 },
  ];

  // Year-on-Year Improvement
  const yoyImprovement = [
    { year: '2021', overall: 82.5, stem: 80.2, humanities: 84.3, languages: 83.8 },
    { year: '2022', overall: 84.2, stem: 82.1, humanities: 85.9, languages: 85.6 },
    { year: '2023', overall: 85.7, stem: 83.5, humanities: 87.2, languages: 87.1 },
    { year: '2024', overall: 87.5, stem: 85.3, humanities: 88.7, languages: 89.4 },
  ];

  // Subject-wise Detailed Performance
  const subjectPerformance = [
    { subject: 'Mathematics', cluster: 'STEM', avgScore: 84.2, passRate: 96.5, topScore: 100, students: 445 },
    { subject: 'Physics', cluster: 'STEM', avgScore: 85.8, passRate: 97.1, topScore: 98, students: 210 },
    { subject: 'Chemistry', cluster: 'STEM', avgScore: 86.3, passRate: 97.8, topScore: 99, students: 210 },
    { subject: 'English', cluster: 'Languages', avgScore: 89.2, passRate: 98.4, topScore: 97, students: 445 },
    { subject: 'History', cluster: 'Humanities', avgScore: 87.5, passRate: 96.9, topScore: 96, students: 235 },
  ];

  const getMaxValue = () => {
    return Math.max(...yoyImprovement.map(y => Math.max(y.overall, y.stem, y.humanities, y.languages)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Academic & Learning Outcomes
              </h1>
              <p className="text-gray-600">Academic success trends and comparative results across terms.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Principal's Report</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Data</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-green-600 bg-green-50">
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

        {/* Subject Cluster Performance */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Performance by Subject Cluster</h2>
                <p className="text-sm text-gray-600">Comparative analysis across academic domains</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {subjectClusters.map((cluster, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{cluster.name}</h3>
                  <div className="flex items-center gap-2">
                    {cluster.trend === 'up' ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className={`text-4xl font-bold bg-gradient-to-r ${cluster.color} bg-clip-text text-transparent`}>
                      {cluster.currentTerm}%
                    </p>
                    <span className="text-sm text-gray-500">avg</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span>Previous: {cluster.previousTerm}%</span>
                    <span className={`font-semibold ${cluster.currentTerm > cluster.previousTerm ? 'text-green-600' : 'text-red-600'}`}>
                      ({cluster.currentTerm > cluster.previousTerm ? '+' : ''}{(cluster.currentTerm - cluster.previousTerm).toFixed(1)}%)
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${cluster.color} transition-all`}
                    style={{ width: `${(cluster.currentTerm / cluster.target) * 100}%` }}
                  ></div>
                </div>

                <div className="space-y-2 mb-4">
                  {cluster.subjects.map((subject, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cluster.color}`}></div>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Students</p>
                    <p className="font-bold text-gray-800">{cluster.students}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Top Score</p>
                    <p className="font-bold text-gray-800">{cluster.topScore}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Performance Distribution */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Student Performance Distribution</h2>
              <p className="text-sm text-gray-600">Segmentation by achievement levels</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">Top 10%</h3>
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-green-700 mb-2">{performanceDistribution.top10.count}</p>
              <p className="text-sm text-gray-600 mb-3">students ({performanceDistribution.top10.percentage}%)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Score:</span>
                  <span className="font-bold text-green-700">{performanceDistribution.top10.avgScore}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Range:</span>
                  <span className="font-semibold text-gray-700">{performanceDistribution.top10.range}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">Mid 50%</h3>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-blue-700 mb-2">{performanceDistribution.mid50.count}</p>
              <p className="text-sm text-gray-600 mb-3">students ({performanceDistribution.mid50.percentage}%)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Score:</span>
                  <span className="font-bold text-blue-700">{performanceDistribution.mid50.avgScore}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Range:</span>
                  <span className="font-semibold text-gray-700">{performanceDistribution.mid50.range}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">Bottom 40%</h3>
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-4xl font-bold text-orange-700 mb-2">{performanceDistribution.bottom40.count}</p>
              <p className="text-sm text-gray-600 mb-3">students ({performanceDistribution.bottom40.percentage}%)</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Score:</span>
                  <span className="font-bold text-orange-700">{performanceDistribution.bottom40.avgScore}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Range:</span>
                  <span className="font-semibold text-gray-700">{performanceDistribution.bottom40.range}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pass % by Grade Level */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Pass Rate by Grade</h2>
                <p className="text-sm text-gray-600">Grade-level success metrics</p>
              </div>
            </div>

            <div className="space-y-4">
              {gradePassRates.map((grade, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{grade.grade}</h3>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${grade.passRate >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {grade.passRate}%
                      </p>
                      <p className="text-xs text-gray-500">Pass Rate</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
                    <div 
                      className={`h-full rounded-full transition-all ${grade.passRate >= 95 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
                      style={{ width: `${grade.passRate}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <p className="text-xs text-gray-600">Passed</p>
                      <p className="font-bold text-green-700">{grade.passed}/{grade.total}</p>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-600">Avg Score</p>
                      <p className="font-bold text-blue-700">{grade.avgScore}%</p>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Distinctions</p>
                      <p className="font-bold text-purple-700">{grade.distinctions}</p>
                    </div>
                    <div className="p-2 bg-red-50 rounded-lg">
                      <p className="text-xs text-gray-600">Failed</p>
                      <p className="font-bold text-red-700">{grade.failures}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year-on-Year Improvement */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Year-on-Year Improvement</h2>
                <p className="text-sm text-gray-600">4-year performance trend</p>
              </div>
            </div>

            <div className="space-y-6">
              {yoyImprovement.map((year, index) => {
                const maxValue = getMaxValue();
                
                return (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-gray-800 text-lg">{year.year}</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                        {year.overall}%
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">STEM</span>
                          <span className="text-xs font-bold text-cyan-600">{year.stem}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
                            style={{ width: `${(year.stem / maxValue) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">Humanities</span>
                          <span className="text-xs font-bold text-purple-600">{year.humanities}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all"
                            style={{ width: `${(year.humanities / maxValue) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">Languages</span>
                          <span className="text-xs font-bold text-green-600">{year.languages}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                            style={{ width: `${(year.languages / maxValue) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {index < yoyImprovement.length - 1 && (
                      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
                        Growth: <span className="font-bold text-green-600">
                          +{(yoyImprovement[index + 1].overall - year.overall).toFixed(1)}%
                        </span> next year
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subject-wise Detailed Performance */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Top 5 Subject Performance</h2>
                <p className="text-sm text-gray-600">Detailed subject-wise analysis</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
                  <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">Subject</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Cluster</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Avg Score</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Pass Rate</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Top Score</th>
                  <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">Students</th>
                </tr>
              </thead>
              <tbody>
                {subjectPerformance.map((subject, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{subject.subject}</td>
                    <td className="p-4 text-center">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                        {subject.cluster}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-lg font-bold text-cyan-600">{subject.avgScore}%</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-lg font-bold ${subject.passRate >= 97 ? 'text-green-600' : 'text-yellow-600'}`}>
                        {subject.passRate}%
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-lg font-bold text-purple-600">{subject.topScore}</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">{subject.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademicOutcomes;
