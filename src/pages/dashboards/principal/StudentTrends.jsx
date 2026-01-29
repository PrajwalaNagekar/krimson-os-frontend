import React, { useState } from 'react';
import { 
  Users, 
  TrendingDown, 
  TrendingUp,
  AlertCircle,
  Award,
  Download,
  Filter,
  Bell,
  Calendar,
  BarChart2,
  Flag,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Heatmap Cell Component
const HeatmapCell = ({ percentage, gender }) => {
  const getColor = (pct) => {
    if (pct >= 95) return 'bg-green-500';
    if (pct >= 90) return 'bg-blue-500';
    if (pct >= 85) return 'bg-yellow-500';
    if (pct >= 80) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div 
      className={`${getColor(percentage)} text-white p-3 rounded-lg text-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer shadow-sm`}
      title={`${gender}: ${percentage}%`}
    >
      {percentage}%
    </div>
  );
};

// Class Ranking Card
const ClassRankingCard = ({ className, grade, attendance, students, rank, type }) => (
  <div className={`p-4 rounded-xl border-l-4 hover:shadow-lg transition-all ${
    type === 'top' 
      ? 'bg-green-50 border-green-500' 
      : 'bg-red-50 border-red-500'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            type === 'top' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            #{rank}
          </span>
          <h4 className={`font-bold text-sm ${type === 'top' ? 'text-green-800' : 'text-red-800'}`}>
            {className}
          </h4>
        </div>
        <p className="text-xs text-slate-600">Grade {grade} • {students} students</p>
      </div>
      <div className="text-center">
        <p className={`text-2xl font-bold ${type === 'top' ? 'text-green-700' : 'text-red-700'}`}>
          {attendance}%
        </p>
      </div>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
      <div 
        className={`h-2 rounded-full ${type === 'top' ? 'bg-green-500' : 'bg-red-500'}`}
        style={{ width: `${attendance}%` }}
      ></div>
    </div>
  </div>
);

// Absenteeism Alert Card
const AbsenteeismAlert = ({ studentName, grade, rollNumber, daysAbsent, lastPresent, severity }) => (
  <div className={`p-4 rounded-xl border-l-4 hover:shadow-md transition-all ${
    severity === 'critical' ? 'bg-red-50 border-red-500' :
    severity === 'high' ? 'bg-orange-50 border-orange-500' :
    'bg-yellow-50 border-yellow-500'
  }`}>
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg flex-shrink-0 ${
        severity === 'critical' ? 'bg-red-100' :
        severity === 'high' ? 'bg-orange-100' :
        'bg-yellow-100'
      }`}>
        <AlertCircle className={`w-4 h-4 ${
          severity === 'critical' ? 'text-red-600' :
          severity === 'high' ? 'text-orange-600' :
          'text-yellow-600'
        }`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-slate-800 text-sm">{studentName}</h4>
          <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
            severity === 'critical' ? 'bg-red-200 text-red-800' :
            severity === 'high' ? 'bg-orange-200 text-orange-800' :
            'bg-yellow-200 text-yellow-800'
          }`}>
            {severity}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Grade {grade} • Roll #{rollNumber} • Absent {daysAbsent} consecutive days
        </p>
        <p className="text-xs text-slate-500">Last present: {lastPresent}</p>
        <div className="flex gap-2 mt-3">
          <button className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            severity === 'critical' ? 'bg-red-600 hover:bg-red-700 text-white' :
            'bg-slate-600 hover:bg-slate-700 text-white'
          }`}>
            <span className="flex items-center justify-center gap-1">
              Flag for Review
              <span className="text-[8px] opacity-80">(get in app)</span>
            </span>
          </button>
          <button className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 transition-colors">
            Contact Parent
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Correlation Point Component
const CorrelationPoint = ({ attendance, academic, grade }) => (
  <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold text-slate-700">Grade {grade}</span>
      <div className="flex gap-2">
        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-semibold">
          📊 {academic}%
        </span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500">Attendance:</span>
      <div className="flex-1 bg-slate-200 rounded-full h-1.5">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full" style={{ width: `${attendance}%` }}></div>
      </div>
      <span className="text-xs font-bold text-slate-700">{attendance}%</span>
    </div>
  </div>
);

const StudentTrends = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedGender, setSelectedGender] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Static data - to be replaced with API calls
  const heatmapData = [
    { grade: '5', male: 88, female: 92 },
    { grade: '6', male: 90, female: 94 },
    { grade: '7', male: 85, female: 89 },
    { grade: '8', male: 87, female: 91 },
    { grade: '9', male: 91, female: 95 },
    { grade: '10', male: 94, female: 96 },
    { grade: '11', male: 93, female: 97 },
    { grade: '12', male: 96, female: 98 },
  ];

  const topClasses = [
    { className: '12-A', grade: '12', attendance: 98.5, students: 42, rank: 1 },
    { className: '11-B', grade: '11', attendance: 97.2, students: 38, rank: 2 },
    { className: '10-Science', grade: '10', attendance: 96.8, students: 45, rank: 3 },
    { className: '9-A', grade: '9', attendance: 95.4, students: 40, rank: 4 },
    { className: '8-C', grade: '8', attendance: 94.6, students: 36, rank: 5 },
  ];

  const bottomClasses = [
    { className: '7-B', grade: '7', attendance: 82.1, students: 34, rank: 1 },
    { className: '8-D', grade: '8', attendance: 83.5, students: 32, rank: 2 },
    { className: '6-C', grade: '6', attendance: 84.2, students: 35, rank: 3 },
    { className: '5-A', grade: '5', attendance: 85.8, students: 38, rank: 4 },
    { className: '9-D', grade: '9', attendance: 86.3, students: 33, rank: 5 },
  ];

  const absenteeismAlerts = [
    { studentName: 'John Miller', grade: '9-B', rollNumber: '2145', daysAbsent: 6, lastPresent: 'Jan 10, 2026', severity: 'critical' },
    { studentName: 'Sarah Lee', grade: '11-A', rollNumber: '3421', daysAbsent: 5, lastPresent: 'Jan 12, 2026', severity: 'critical' },
    { studentName: 'Mike Johnson', grade: '8-C', rollNumber: '1823', daysAbsent: 4, lastPresent: 'Jan 14, 2026', severity: 'high' },
    { studentName: 'Emma Davis', grade: '10-B', rollNumber: '2756', daysAbsent: 3, lastPresent: 'Jan 15, 2026', severity: 'high' },
    { studentName: 'Alex Chen', grade: '7-A', rollNumber: '1534', daysAbsent: 3, lastPresent: 'Jan 16, 2026', severity: 'medium' },
  ];

  const correlationData = [
    { grade: '12', attendance: 96, academic: 88 },
    { grade: '11', attendance: 94, academic: 85 },
    { grade: '10', attendance: 92, academic: 82 },
    { grade: '9', attendance: 90, academic: 79 },
    { grade: '8', attendance: 88, academic: 76 },
    { grade: '7', attendance: 86, academic: 74 },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Attendance & Student Trends
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Monitor attendance patterns • Early intervention support
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Report</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Overall Attendance</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">92.4%</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +1.2% from last month
          </p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Best Performing</p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">12-A</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">98.5% attendance rate</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Chronic Absences</p>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">12</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Students requiring intervention</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Needs Attention</p>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">5</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Classes below 85% threshold</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Heatmap - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-blue-500" />
                  Attendance Heatmap
                </h3>
                <p className="text-sm text-slate-500 mt-1">By grade and gender • Real-time tracking</p>
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-blue-100 outline-none"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="term">This Term</option>
                </select>
                <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors">
                  <Filter className="w-3 h-3" />
                  Filter
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-5 md:p-6 overflow-x-auto">
            <div className="min-w-[500px]">
              {/* Headers */}
              <div className="grid grid-cols-3 gap-3 mb-2">
                <div className="text-xs font-bold text-slate-500"></div>
                <div className="text-center text-xs font-bold text-blue-700">👨 Male</div>
                <div className="text-center text-xs font-bold text-pink-700">👩 Female</div>
              </div>
              
              {/* Heatmap Rows */}
              <div className="space-y-2">
                {heatmapData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((data, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-3 items-center">
                    <div className="text-sm font-bold text-slate-700">
                      Grade {data.grade}
                    </div>
                    <HeatmapCell percentage={data.male} gender="Male" />
                    <HeatmapCell percentage={data.female} gender="Female" />
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {heatmapData.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <span className="text-xs font-semibold text-slate-600">
                    Page {currentPage + 1} of {Math.ceil(heatmapData.length / itemsPerPage)}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(Math.ceil(heatmapData.length / itemsPerPage) - 1, p + 1))}
                    disabled={currentPage >= Math.ceil(heatmapData.length / itemsPerPage) - 1}
                    className="p-1 rounded-full hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              )}

              {/* Legend */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-600 font-semibold">Attendance Rate:</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-xs text-slate-600">&lt;80%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-xs text-slate-600">80-84%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-xs text-slate-600">85-89%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-xs text-slate-600">90-94%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-xs text-slate-600">≥95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class Rankings Sidebar */}
        <div className="space-y-4">
          {/* Top 5 Classes */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-500" />
                Top 5 Classes
              </h3>
              <p className="text-xs text-slate-600 mt-1">Best attendance performers</p>
            </div>
            
            <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
              {topClasses.map((cls, idx) => (
                <ClassRankingCard key={idx} {...cls} type="top" />
              ))}
            </div>
          </div>

          {/* Bottom 5 Classes */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-red-500" />
                Bottom 5 Classes
              </h3>
              <p className="text-xs text-slate-600 mt-1">Need improvement</p>
            </div>
            
            <div className="p-3 space-y-2 max-h-[300px] overflow-y-auto">
              {bottomClasses.map((cls, idx) => (
                <ClassRankingCard key={idx} {...cls} type="bottom" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Correlation Graph & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance vs Academic Correlation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-purple-500" />
              Attendance vs Academic Results
            </h3>
            <p className="text-sm text-slate-500 mt-1">Correlation analysis by grade</p>
          </div>
          
          <div className="p-5 space-y-3">
            {correlationData.map((data, idx) => (
              <CorrelationPoint key={idx} {...data} />
            ))}
            
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs text-blue-800 mb-2 font-semibold">📊 Insights:</p>
              <p className="text-xs text-blue-700 leading-relaxed">
                Strong positive correlation (0.89) observed across all grades. Students with 90%+ attendance show 
                significantly better academic performance, supporting intervention strategies for chronic absentees.
              </p>
            </div>

            <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              View Detailed Analysis
              <span className="text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>

        {/* Chronic Absenteeism Alerts */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-red-500" />
                  Chronic Absenteeism Alerts
                </h3>
                <p className="text-sm text-slate-600 mt-1">Requiring immediate intervention</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                {absenteeismAlerts.length} Active
              </span>
            </div>
          </div>
          
          <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
            {absenteeismAlerts.map((alert, idx) => (
              <AbsenteeismAlert key={idx} {...alert} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default StudentTrends;
