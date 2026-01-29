import React, { useState } from 'react';
import { 
  TrendingUp, Users, Target, Globe, MapPin, UserCheck,
  Download, Filter, Activity, PieChart, BarChart3,
  Calendar, Award, AlertCircle, CheckCircle, ArrowRight
} from 'lucide-react';

/**
 * Screen 3: Admissions & Growth Analytics
 * Purpose: Visualize student intake, retention, and demographic distribution
 * Widgets:
 * - Admissions Conversion Funnel (Inquiry → Enrolled)
 * - Retention Rate (%) across grades
 * - Demographics by nationality, gender, and region
 * - Capacity Utilization (Seats filled vs available)
 * - Predictive intake trend for next academic year
 * Integration: Admissions Module + Student Database + Predictive Analytics Engine
 * Outcome: Data to support expansion planning and marketing decisions
 */

const AdmissionsGrowth = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  // Static data - ready for API integration
  const stats = [
    { label: 'Total Enrolled', value: '445', icon: Users, gradient: 'from-cyan-400 to-blue-500', change: '+12% YoY' },
    { label: 'Conversion Rate', value: '68.5%', icon: Target, gradient: 'from-green-400 to-emerald-500', change: 'From inquiries' },
    { label: 'Retention Rate', value: '94.2%', icon: UserCheck, gradient: 'from-purple-400 to-pink-500', change: '+2.1% YoY' },
    { label: 'Capacity Used', value: '92.7%', icon: BarChart3, gradient: 'from-orange-400 to-yellow-500', change: '445/480 seats' },
  ];

  // Admissions Conversion Funnel
  const conversionFunnel = [
    { stage: 'Inquiries', count: 650, percentage: 100, color: 'from-blue-400 to-cyan-500' },
    { stage: 'Application Submitted', count: 520, percentage: 80.0, color: 'from-purple-400 to-pink-500' },
    { stage: 'Interview Scheduled', count: 485, percentage: 74.6, color: 'from-green-400 to-emerald-500' },
    { stage: 'Offer Extended', count: 468, percentage: 72.0, color: 'from-orange-400 to-yellow-500' },
    { stage: 'Enrolled', count: 445, percentage: 68.5, color: 'from-cyan-400 to-blue-500' },
  ];

  // Retention Rate across Grades
  const retentionRates = [
    { grade: 'Grade 9', current: 120, previous: 125, retained: 118, retentionRate: 94.4, newAdmissions: 2 },
    { grade: 'Grade 10', current: 115, previous: 120, retained: 110, retentionRate: 91.7, newAdmissions: 5 },
    { grade: 'Grade 11', current: 108, previous: 110, retained: 105, retentionRate: 95.5, newAdmissions: 3 },
    { grade: 'Grade 12', current: 102, previous: 105, retained: 100, retentionRate: 95.2, newAdmissions: 2 },
  ];

  // Demographics by Nationality
  const nationalityDemographics = [
    { nationality: 'India', count: 378, percentage: 84.9, color: 'from-orange-400 to-yellow-500' },
    { nationality: 'USA', count: 25, percentage: 5.6, color: 'from-blue-400 to-cyan-500' },
    { nationality: 'UK', count: 18, percentage: 4.0, color: 'from-red-400 to-pink-500' },
    { nationality: 'Singapore', count: 12, percentage: 2.7, color: 'from-green-400 to-emerald-500' },
    { nationality: 'Others', count: 12, percentage: 2.7, color: 'from-purple-400 to-pink-500' },
  ];

  // Demographics by Gender
  const genderDemographics = [
    { gender: 'Male', count: 238, percentage: 53.5, color: 'from-blue-400 to-cyan-500' },
    { gender: 'Female', count: 207, percentage: 46.5, color: 'from-pink-400 to-purple-500' },
  ];

  // Demographics by Region
  const regionDemographics = [
    { region: 'Delhi NCR', count: 285, percentage: 64.0, color: 'from-cyan-400 to-blue-500' },
    { region: 'Mumbai', count: 78, percentage: 17.5, color: 'from-purple-400 to-pink-500' },
    { region: 'Bangalore', count: 45, percentage: 10.1, color: 'from-green-400 to-emerald-500' },
    { region: 'International', count: 37, percentage: 8.3, color: 'from-orange-400 to-yellow-500' },
  ];

  // Capacity Utilization
  const capacityUtilization = [
    { grade: 'Grade 9', capacity: 130, enrolled: 120, percentage: 92.3 },
    { grade: 'Grade 10', capacity: 125, enrolled: 115, percentage: 92.0 },
    { grade: 'Grade 11', capacity: 120, enrolled: 108, percentage: 90.0 },
    { grade: 'Grade 12', capacity: 105, enrolled: 102, percentage: 97.1 },
  ];

  // Predictive Intake Trend (Next 4 years)
  const predictiveIntake = [
    { year: '2024', actual: 445, predicted: null, capacity: 480 },
    { year: '2025', actual: null, predicted: 465, capacity: 500 },
    { year: '2026', actual: null, predicted: 485, capacity: 520 },
    { year: '2027', actual: null, predicted: 510, capacity: 550 },
    { year: '2028', actual: null, predicted: 535, capacity: 580 },
  ];

  const getMaxFunnelValue = () => {
    return Math.max(...conversionFunnel.map(f => f.count));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Admissions & Growth Analytics
              </h1>
              <p className="text-gray-600">Student intake, retention, and demographic distribution insights.</p>
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

        {/* Admissions Conversion Funnel */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Admissions Conversion Funnel</h2>
              <p className="text-sm text-gray-600">From inquiry to enrollment journey</p>
            </div>
          </div>

          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => {
              const maxValue = getMaxFunnelValue();
              const widthPercentage = (stage.count / maxValue) * 100;
              const dropOff = index > 0 ? conversionFunnel[index - 1].count - stage.count : 0;

              return (
                <div key={index} className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800">{stage.stage}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                            {stage.count}
                          </span>
                          <span className="text-sm font-semibold text-gray-600">
                            ({stage.percentage.toFixed(1)}%)
                          </span>
                        </div>
                      </div>
                      <div className="relative h-12 bg-gray-100 rounded-2xl overflow-hidden">
                        <div 
                          className={`h-full rounded-2xl bg-gradient-to-r ${stage.color} transition-all flex items-center justify-center`}
                          style={{ width: `${widthPercentage}%` }}
                        >
                          {widthPercentage > 20 && (
                            <span className="text-white font-bold text-sm">{stage.count} students</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {dropOff > 0 && (
                    <div className="flex items-center justify-center my-2">
                      <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200">
                        <ArrowRight className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-semibold text-red-600">Drop-off: {dropOff} students</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Retention Rate across Grades */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Retention Rate by Grade</h2>
                <p className="text-sm text-gray-600">Student retention metrics</p>
              </div>
            </div>

            <div className="space-y-4">
              {retentionRates.map((grade, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{grade.grade}</h3>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${grade.retentionRate >= 95 ? 'text-green-600' : grade.retentionRate >= 90 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {grade.retentionRate}%
                      </p>
                      <p className="text-xs text-gray-500">Retention</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
                    <div 
                      className={`h-full rounded-full transition-all ${grade.retentionRate >= 95 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : grade.retentionRate >= 90 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-pink-500'}`}
                      style={{ width: `${grade.retentionRate}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 bg-blue-50 rounded-lg text-center">
                      <p className="text-gray-600">Previous</p>
                      <p className="font-bold text-blue-700">{grade.previous}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg text-center">
                      <p className="text-gray-600">Retained</p>
                      <p className="font-bold text-green-700">{grade.retained}</p>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg text-center">
                      <p className="text-gray-600">New</p>
                      <p className="font-bold text-purple-700">{grade.newAdmissions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capacity Utilization */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Capacity Utilization</h2>
                <p className="text-sm text-gray-600">Seats filled vs available</p>
              </div>
            </div>

            <div className="space-y-4">
              {capacityUtilization.map((grade, index) => (
                <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{grade.grade}</h3>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${grade.percentage >= 95 ? 'text-green-600' : grade.percentage >= 90 ? 'text-yellow-600' : 'text-orange-600'}`}>
                        {grade.percentage.toFixed(1)}%
                      </p>
                      <p className="text-xs text-gray-500">Utilization</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
                    <div 
                      className={`h-full rounded-full transition-all ${grade.percentage >= 95 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : grade.percentage >= 90 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-orange-400 to-red-500'}`}
                      style={{ width: `${grade.percentage}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-600">Enrolled: </span>
                      <span className="font-bold text-green-700">{grade.enrolled}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Capacity: </span>
                      <span className="font-bold text-blue-700">{grade.capacity}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Available: </span>
                      <span className="font-bold text-orange-700">{grade.capacity - grade.enrolled}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">Total Capacity</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                  445 / 480
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Demographics */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Nationality */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Nationality</h3>
                <p className="text-xs text-gray-600">Distribution</p>
              </div>
            </div>

            <div className="space-y-3">
              {nationalityDemographics.map((demo, index) => (
                <div key={index} className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{demo.nationality}</span>
                    <span className="text-sm font-bold text-gray-700">{demo.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                        style={{ width: `${demo.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{demo.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Gender</h3>
                <p className="text-xs text-gray-600">Distribution</p>
              </div>
            </div>

            <div className="space-y-4">
              {genderDemographics.map((demo, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800">{demo.gender}</h4>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                      {demo.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 mb-2">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                      style={{ width: `${demo.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">{demo.count} students</p>
                </div>
              ))}
            </div>
          </div>

          {/* Region */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Region</h3>
                <p className="text-xs text-gray-600">Distribution</p>
              </div>
            </div>

            <div className="space-y-3">
              {regionDemographics.map((demo, index) => (
                <div key={index} className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{demo.region}</span>
                    <span className="text-sm font-bold text-gray-700">{demo.count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                        style={{ width: `${demo.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{demo.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Predictive Intake Trend */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Predictive Intake Trend</h2>
                <p className="text-sm text-gray-600">Next 4 years enrollment forecast</p>
              </div>
            </div>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              AI-Powered Forecast
            </span>
          </div>

          <div className="space-y-4">
            {predictiveIntake.map((year, index) => (
              <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-gray-800 text-lg">{year.year}</h3>
                    {year.actual === null && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        Predicted
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${year.actual ? 'text-green-600' : 'text-blue-600'}`}>
                      {year.actual || year.predicted}
                    </p>
                    <p className="text-xs text-gray-500">students</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Capacity</p>
                    <p className="font-bold text-gray-800">{year.capacity} seats</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Utilization</p>
                    <p className="font-bold text-gray-800">
                      {((year.actual || year.predicted) / year.capacity * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div 
                    className={`h-full rounded-full transition-all ${year.actual ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500'}`}
                    style={{ width: `${((year.actual || year.predicted) / year.capacity) * 100}%` }}
                  ></div>
                </div>

                {index < predictiveIntake.length - 1 && year.predicted && (
                  <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
                    Projected Growth: <span className="font-bold text-green-600">
                      +{predictiveIntake[index + 1].predicted - year.predicted} students
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdmissionsGrowth;
