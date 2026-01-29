import React, { useState } from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle, 
  Search, 
  Download,
  ChevronRight,
  Award,
  AlertCircle,
  Users,
  BookOpen,
  Filter
} from 'lucide-react';

// Heatmap Cell Component
const HeatmapCell = ({ subject, grade, score }) => {
  const getColor = (score) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 75) return 'bg-blue-500';
    if (score >= 65) return 'bg-yellow-500';
    if (score >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getTextColor = (score) => {
    return score >= 50 ? 'text-white' : 'text-white';
  };

  return (
    <div 
      className={`${getColor(score)} ${getTextColor(score)} p-3 rounded-lg text-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer shadow-sm`}
      title={`${subject} - Grade ${grade}: ${score}%`}
    >
      {score}%
    </div>
  );
};

// Performance Outlier Card
const OutlierCard = ({ subject, grade, change, avgScore, type, teacherName }) => (
  <div className={`p-4 rounded-xl border-l-4 hover:shadow-lg transition-all ${
    type === 'low' 
      ? 'bg-red-50 border-red-500' 
      : 'bg-green-50 border-green-500'
  }`}>
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {type === 'low' ? (
            <TrendingDown className="w-4 h-4 text-red-600" />
          ) : (
            <TrendingUp className="w-4 h-4 text-green-600" />
          )}
          <h4 className={`font-bold text-sm ${type === 'low' ? 'text-red-800' : 'text-green-800'}`}>
            Grade {grade} - {subject}
          </h4>
        </div>
        <p className={`text-xs ${type === 'low' ? 'text-red-700' : 'text-green-700'} mb-1`}>
          {type === 'low' 
            ? `Average dropped by ${Math.abs(change)}% this term` 
            : `Improved by ${change}% - Top performing`}
        </p>
        <p className="text-xs text-slate-600">Teacher: {teacherName} • Avg: {avgScore}%</p>
      </div>
      {type === 'low' && (
        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      {type === 'high' && (
        <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
      )}
    </div>
    {type === 'low' && (
      <button className="mt-3 w-full px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        Request Review
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    )}
    {type === 'high' && (
      <button className="mt-3 w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        View Details
        <span className="text-[8px] opacity-80">(get in app)</span>
      </button>
    )}
  </div>
);

// Department Row Component
const DepartmentRow = ({ subject, deptHead, avgScore, passRate, status, classCount, teacherCount, onClick }) => {
  const getStatusColor = (status) => {
    if (status === 'Excellent') return 'bg-green-100 text-green-700';
    if (status === 'Good') return 'bg-blue-100 text-blue-700';
    if (status === 'Review Needed') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer" onClick={onClick}>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800">{subject}</p>
            <p className="text-xs text-slate-500">{classCount} classes • {teacherCount} teachers</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
            {deptHead.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-sm text-slate-700">{deptHead}</span>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${avgScore >= 80 ? 'bg-green-500' : avgScore >= 70 ? 'bg-blue-500' : 'bg-orange-500'}`}
              style={{ width: `${avgScore}%` }}
            ></div>
          </div>
          <span className="font-bold text-slate-800 text-sm w-12">{avgScore}%</span>
        </div>
      </td>
      <td className="px-4 py-4 font-semibold text-slate-700">{passRate}%</td>
      <td className="px-4 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(status)}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-4">
        <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
          <ChevronRight className="w-4 h-4 text-slate-600" />
        </button>
      </td>
    </tr>
  );
};

const AcademicMonitor = () => {
  const [selectedView, setSelectedView] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Static data - to be replaced with API calls
  const heatmapData = [
    { subject: 'Mathematics', grades: [78, 76, 72, 75, 79, 82, 85, 88] },
    { subject: 'Science', grades: [85, 82, 80, 78, 84, 86, 89, 92] },
    { subject: 'English', grades: [82, 84, 81, 83, 85, 86, 88, 90] },
    { subject: 'History', grades: [75, 73, 71, 74, 76, 78, 80, 82] },
    { subject: 'Geography', grades: [70, 72, 68, 71, 73, 75, 77, 79] },
  ];

  const outliers = [
    { subject: 'Mathematics', grade: '8', change: -15, avgScore: 72, type: 'low', teacherName: 'Mr. Anderson' },
    { subject: 'Geography', grade: '7', change: -12, avgScore: 68, type: 'low', teacherName: 'Ms. Parker' },
    { subject: 'Science', grade: '12', change: 18, avgScore: 92, type: 'high', teacherName: 'Dr. Wilson' },
    { subject: 'English', grade: '11', change: 12, avgScore: 88, type: 'high', teacherName: 'Ms. Roberts' },
  ];

  const departments = [
    { subject: 'Mathematics', deptHead: 'Mr. Anderson', avgScore: 76, passRate: 88, status: 'Review Needed', classCount: 12, teacherCount: 8 },
    { subject: 'English Literature', deptHead: 'Ms. Roberts', avgScore: 84, passRate: 95, status: 'Excellent', classCount: 10, teacherCount: 6 },
    { subject: 'Science', deptHead: 'Dr. Wilson', avgScore: 85, passRate: 94, status: 'Excellent', classCount: 14, teacherCount: 9 },
    { subject: 'History', deptHead: 'Mr. Thompson', avgScore: 75, passRate: 86, status: 'Good', classCount: 8, teacherCount: 5 },
    { subject: 'Geography', deptHead: 'Ms. Parker', avgScore: 71, passRate: 82, status: 'Review Needed', classCount: 8, teacherCount: 4 },
    { subject: 'Computer Science', deptHead: 'Mr. Chen', avgScore: 88, passRate: 96, status: 'Excellent', classCount: 6, teacherCount: 4 },
  ];

  const grades = ['5', '6', '7', '8', '9', '10', '11', '12'];

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
                Academic Performance Monitor
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Analyze outcomes across grades and subjects • Identify trends
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
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">School Average</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">79.2%</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.3% from last term
          </p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Top Performer</p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Science</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Average: 85% • 94% pass rate</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Needs Attention</p>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">2</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Departments below threshold</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Pass Rate</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">89.4%</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Across all subjects</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Section - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-blue-500" />
                  School-wide Performance Heatmap
                </h3>
                <p className="text-sm text-slate-500 mt-1">Subject vs Grade Average Score</p>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-700 transition-colors">
                <Filter className="w-3 h-3" />
                Filter
              </button>
            </div>
          </div>
          
          <div className="p-5 md:p-6 overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Grade Headers */}
              <div className="grid grid-cols-9 gap-2 mb-2">
                <div className="text-xs font-bold text-slate-500"></div>
                {grades.map(grade => (
                  <div key={grade} className="text-center text-xs font-bold text-slate-700">
                    Grade {grade}
                  </div>
                ))}
              </div>
              
              {/* Heatmap Rows */}
              <div className="space-y-2">
                {heatmapData.map((subject, idx) => (
                  <div key={idx} className="grid grid-cols-9 gap-2 items-center">
                    <div className="text-sm font-bold text-slate-700 pr-2">
                      {subject.subject}
                    </div>
                    {subject.grades.map((score, gIdx) => (
                      <HeatmapCell 
                        key={gIdx}
                        subject={subject.subject}
                        grade={grades[gIdx]}
                        score={score}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-600 font-semibold">Score Range:</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-xs text-slate-600">&lt;50%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-xs text-slate-600">50-64%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-xs text-slate-600">65-74%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-xs text-slate-600">75-84%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-xs text-slate-600">≥85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Outliers Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-100">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Performance Outliers
              </h3>
              <p className="text-xs text-slate-600 mt-1">High and low performers</p>
            </div>
            
            <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
              {outliers.map((outlier, idx) => (
                <OutlierCard key={idx} {...outlier} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Department Analysis */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800">Detailed Department Analysis</h3>
              <p className="text-sm text-slate-500 mt-1">Click department for drill-down to class and teacher level</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search department..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all" 
              />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left">Department</th>
                <th className="px-4 py-3 text-left">Head</th>
                <th className="px-4 py-3 text-left">Avg Score</th>
                <th className="px-4 py-3 text-left">Pass Rate</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {departments
                .filter(dept => dept.subject.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((dept, idx) => (
                  <DepartmentRow 
                    key={idx} 
                    {...dept} 
                    onClick={() => console.log('Drill down to:', dept.subject)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Summary Info */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500 rounded-xl">
            <Download className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-blue-900 mb-2">Automated Weekly Summary</h4>
            <p className="text-sm text-blue-800 mb-3">
              Performance reports are automatically generated every Sunday at 6 PM and sent to the management dashboard. 
              The latest report includes trends, outliers, and recommendations.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
              View Last Report
              <span className="text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicMonitor;
