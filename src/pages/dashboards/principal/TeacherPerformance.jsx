import React, { useState } from 'react';
import { 
  UserCheck, 
  Clock, 
  FileText, 
  Zap,
  TrendingUp,
  TrendingDown,
  Award,
  Download,
  ChevronRight,
  Users,
  BarChart2,
  Target,
  Eye,
  Calendar
} from 'lucide-react';

// Metric Card Component
const MetricCard = ({ title, value, subtitle, icon: Icon, gradient, trend, percentage }) => (
  <div className="group bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">{title}</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">{value}</h3>
        </div>
        <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      
      {percentage && (
        <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
          <div 
            className={`h-2 rounded-full ${percentage >= 90 ? 'bg-green-500' : percentage >= 75 ? 'bg-blue-500' : 'bg-orange-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
      
      {subtitle && (
        <div className="flex items-center gap-2">
          {trend && (
            <span className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            </span>
          )}
          <p className="text-xs md:text-sm text-slate-600">{subtitle}</p>
        </div>
      )}
      <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
    </div>
  </div>
);

// Teacher Performance Row
const TeacherPerformanceRow = ({ name, department, lessonPlan, feedback, engagement, overall }) => {
  const getStatusColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-700';
    if (score >= 75) return 'bg-blue-100 text-blue-700';
    if (score >= 60) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold shadow-md">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-bold text-slate-800">{name}</p>
            <p className="text-xs text-slate-500">{department}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-200 rounded-full h-2">
            <div className={`h-2 rounded-full ${lessonPlan >= 90 ? 'bg-green-500' : lessonPlan >= 75 ? 'bg-blue-500' : 'bg-orange-500'}`} style={{ width: `${lessonPlan}%` }}></div>
          </div>
          <span className="text-sm font-bold text-slate-700 w-12">{lessonPlan}%</span>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${feedback <= 2 ? 'bg-green-100 text-green-700' : feedback <= 3 ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
          {feedback} days
        </span>
      </td>
      <td className="px-4 py-4 text-center font-semibold text-slate-700">{engagement}%</td>
      <td className="px-4 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(overall)}`}>
          {overall >= 90 ? 'Excellent' : overall >= 75 ? 'Good' : overall >= 60 ? 'Average' : 'Needs Support'}
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

// Correlation Card Component
const CorrelationCard = ({ grade, attendance, performance, correlation }) => (
  <div className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all">
    <div className="flex items-center justify-between mb-3">
      <div>
        <h4 className="font-bold text-slate-800">Grade {grade}</h4>
        <p className="text-xs text-slate-500">Correlation Analysis</p>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
        correlation >= 0.8 ? 'bg-green-100 text-green-700' :
        correlation >= 0.5 ? 'bg-blue-100 text-blue-700' :
        'bg-yellow-100 text-yellow-700'
      }`}>
        {(correlation * 100).toFixed(0)}%
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3">
      <div className="text-center p-3 bg-white rounded-lg">
        <p className="text-xs text-slate-500 mb-1">Attendance</p>
        <p className="text-lg font-bold text-slate-800">{attendance}%</p>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <p className="text-xs text-slate-500 mb-1">Performance</p>
        <p className="text-lg font-bold text-slate-800">{performance}%</p>
      </div>
    </div>
  </div>
);

const TeacherPerformance = () => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Static data - to be replaced with API calls
  const teachers = [
    { name: 'Dr. Sarah Wilson', department: 'Science', lessonPlan: 98, feedback: 1.5, engagement: 96, overall: 95 },
    { name: 'Mr. John Anderson', department: 'Mathematics', lessonPlan: 92, feedback: 2.0, engagement: 88, overall: 90 },
    { name: 'Ms. Emily Roberts', department: 'English', lessonPlan: 96, feedback: 1.8, engagement: 94, overall: 93 },
    { name: 'Mr. David Chen', department: 'Computer Science', lessonPlan: 94, feedback: 2.2, engagement: 92, overall: 91 },
    { name: 'Ms. Jennifer Parker', department: 'Geography', lessonPlan: 78, feedback: 3.5, engagement: 75, overall: 76 },
    { name: 'Mr. Michael Brown', department: 'History', lessonPlan: 85, feedback: 2.8, engagement: 82, overall: 83 },
    { name: 'Ms. Lisa Taylor', department: 'Physics', lessonPlan: 91, feedback: 1.9, engagement: 90, overall: 90 },
    { name: 'Mr. Robert Martin', department: 'Chemistry', lessonPlan: 88, feedback: 2.4, engagement: 85, overall: 86 },
    { name: 'Ms. Jessica White', department: 'Biology', lessonPlan: 95, feedback: 1.7, engagement: 93, overall: 94 },
    { name: 'Mr. Thomas Moore', department: 'Literature', lessonPlan: 82, feedback: 3.1, engagement: 78, overall: 80 },
    { name: 'Ms. Karen Davis', department: 'Art', lessonPlan: 97, feedback: 1.2, engagement: 98, overall: 96 },
    { name: 'Mr. James Wilson', department: 'Physical Ed', lessonPlan: 100, feedback: 0.5, engagement: 99, overall: 99 },
    { name: 'Ms. Patricia Miller', department: 'Music', lessonPlan: 93, feedback: 2.0, engagement: 91, overall: 92 },
    { name: 'Mr. William Taylor', department: 'Economics', lessonPlan: 87, feedback: 2.5, engagement: 84, overall: 86 },
    { name: 'Ms. Elizabeth Anderson', department: 'Psychology', lessonPlan: 89, feedback: 2.3, engagement: 86, overall: 88 },
  ];

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teachers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const correlationData = [
    { grade: '10', attendance: 92, performance: 85, correlation: 0.87 },
    { grade: '11', attendance: 89, performance: 82, correlation: 0.85 },
    { grade: '12', attendance: 94, performance: 88, correlation: 0.91 },
    { grade: '9', attendance: 86, performance: 78, correlation: 0.78 },
  ];

  const aiInsights = [
    {
      type: 'high',
      title: 'High Engagement Champions',
      description: 'Dr. Wilson and Ms. Roberts maintain 95%+ student participation consistently.',
      teachers: ['Dr. Sarah Wilson', 'Ms. Emily Roberts'],
      icon: Award
    },
    {
      type: 'support',
      title: 'Support Recommended',
      description: 'Ms. Parker shows declining feedback turnaround (3.5 days avg). Consider workload review.',
      teachers: ['Ms. Jennifer Parker'],
      icon: Target
    },
    {
      type: 'trend',
      title: 'Positive Trend',
      description: 'Overall lesson plan compliance improved by 8% this quarter across all departments.',
      icon: TrendingUp
    }
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
                Teacher Performance Analytics
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Evaluate teaching effectiveness and engagement • AI-powered insights
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard
          title="Lesson Plan Compliance"
          value="94%"
          subtitle="On-time submissions this week"
          icon={FileText}
          gradient="from-blue-500 to-blue-600"
          trend="up"
          percentage={94}
        />
        <MetricCard
          title="Avg Feedback Time"
          value="1.8 Days"
          subtitle="Assignment turnaround"
          icon={Clock}
          gradient="from-purple-500 to-purple-600"
          trend="up"
        />
        <MetricCard
          title="Engagement Rate"
          value="89%"
          subtitle="Student participation avg"
          icon={Users}
          gradient="from-green-500 to-emerald-600"
          trend="up"
          percentage={89}
        />
        <MetricCard
          title="Top Performers"
          value="12"
          subtitle="Teachers with 95%+ rating"
          icon={Award}
          gradient="from-cyan-500 to-blue-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights - Takes 1 column */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" fill="currentColor" />
              AI Insights
            </h3>
            <p className="text-xs text-slate-600 mt-1">Automated performance analysis</p>
          </div>
          
          <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
            {aiInsights.map((insight, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border-l-4 ${
                  insight.type === 'high' ? 'bg-green-50 border-green-500' :
                  insight.type === 'support' ? 'bg-orange-50 border-orange-500' :
                  'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    insight.type === 'high' ? 'bg-green-100' :
                    insight.type === 'support' ? 'bg-orange-100' :
                    'bg-blue-100'
                  }`}>
                    <insight.icon className={`w-4 h-4 ${
                      insight.type === 'high' ? 'text-green-600' :
                      insight.type === 'support' ? 'text-orange-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm mb-1 ${
                      insight.type === 'high' ? 'text-green-800' :
                      insight.type === 'support' ? 'text-orange-800' :
                      'text-blue-800'
                    }`}>
                      {insight.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed mb-2">
                      {insight.description}
                    </p>
                    {insight.teachers && (
                      <div className="flex flex-wrap gap-1">
                        {insight.teachers.map((teacher, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-2 py-1 bg-white rounded-full text-slate-600 font-medium">
                            {teacher}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2">
              View Full Analysis
              <span className="text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>

        {/* Correlation Analysis - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance vs Performance Correlation */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-blue-500" />
                    Attendance vs Performance Correlation
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">By grade level • Higher correlation indicates better teaching engagement</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {correlationData.map((data, idx) => (
                <CorrelationCard key={idx} {...data} />
              ))}
            </div>
          </div>

          {/* Department Radar Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-500" />
                    Department Performance Radar
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Comparative multi-dimensional analysis</p>
                </div>
                <select 
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
                >
                  <option value="all">All Departments</option>
                  <option value="science">Science</option>
                  <option value="math">Mathematics</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>
            
            <div className="p-6">
              <div className="h-64 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center">
                <Target className="w-16 h-16 text-slate-300 mb-3" />
                <p className="text-slate-400 font-semibold mb-1">Radar Chart Visualization</p>
                <p className="text-xs text-slate-400">Performance across: Lesson Plans • Feedback • Engagement • Results</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Current Quarter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Previous Quarter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>School Average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Teacher Performance Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800">Individual Teacher Metrics</h3>
              <p className="text-sm text-slate-500 mt-1">Click teacher for detailed performance breakdown</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View Comparison
              <span className="text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left">Teacher</th>
                <th className="px-4 py-3 text-left">Lesson Plan %</th>
                <th className="px-4 py-3 text-center">Feedback Time</th>
                <th className="px-4 py-3 text-center">Engagement</th>
                <th className="px-4 py-3 text-left">Overall</th>
                <th className="px-4 py-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentTeachers.map((teacher, idx) => (
                <TeacherPerformanceRow key={idx} {...teacher} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="text-xs text-slate-500">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, teachers.length)} of {teachers.length} entries
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${
                currentPage === 1 
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              Previous
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors flex items-center justify-center border ${
                    currentPage === i + 1
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white border-transparent shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${
                currentPage === totalPages 
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TeacherPerformance;
