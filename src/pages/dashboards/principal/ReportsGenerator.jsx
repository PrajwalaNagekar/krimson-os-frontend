import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Mail, 
  Filter,
  Calendar,
  Clock,
  TrendingUp,
  DollarSign,
  UserCheck,
  Users,
  AlertCircle,
  FileSpreadsheet,
  Send,
  Settings,
  BarChart3
} from 'lucide-react';

// Report Category Card Component
const ReportCard = ({ title, description, icon: Icon, gradient, stats, onGenerate }) => (
  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div className="flex gap-1 sm:gap-2">
        <button 
          className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors group"
          title="Download PDF"
        >
          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-red-600" />
        </button>
        <button 
          className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors group"
          title="Download Excel"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-green-600" />
        </button>
      </div>
    </div>
    
    <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-slate-600 mb-4">{description}</p>
    
    {stats && (
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-50 p-2 sm:p-3 rounded-lg">
            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">{stat.label}</p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>
    )}
    
    <button 
      onClick={onGenerate}
      className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:from-cyan-600 hover:via-blue-600 hover:to-pink-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg"
    >
      Generate Report
      <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">(get in app)</span>
    </button>
  </div>
);

// Scheduled Report Item
const ScheduledReportItem = ({ title, frequency, nextRun, recipients, status }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-slate-200 rounded-lg sm:rounded-xl hover:border-blue-300 transition-all bg-white gap-3 sm:gap-0">
    <div className="flex items-start gap-3 flex-1">
      <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm sm:text-base text-slate-800">{title}</h4>
        <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
          {frequency} • Next: {nextRun}
        </p>
        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">To: {recipients}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${
        status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
      }`}>
        {status}
      </span>
      <button className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors">
        <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
      </button>
    </div>
  </div>
);

const ReportsGenerator = () => {
  const [selectedFormat, setSelectedFormat] = useState('PDF');
  const [dateRange, setDateRange] = useState('current-term');

  // Static data for report categories
  const reportCategories = [
    {
      title: 'Academic Performance Summary',
      description: 'Comprehensive analysis of student performance across grades and subjects',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-500',
      stats: [
        { label: 'Total Students', value: '1,247' },
        { label: 'Avg. Score', value: '78.5%' }
      ]
    },
    {
      title: 'Fee Collection vs Enrollment',
      description: 'Financial overview comparing fee collection rates with student enrollment',
      icon: DollarSign,
      gradient: 'from-blue-500 to-purple-500',
      stats: [
        { label: 'Collection Rate', value: '94.2%' },
        { label: 'Outstanding', value: '₹2.8L' }
      ]
    },
    {
      title: 'Attendance by Term',
      description: 'Detailed attendance reports segmented by term, grade, and class',
      icon: UserCheck,
      gradient: 'from-purple-500 to-pink-500',
      stats: [
        { label: 'Avg. Attendance', value: '92.7%' },
        { label: 'Absenteeism', value: '7.3%' }
      ]
    },
    {
      title: 'Teacher Productivity',
      description: 'Analysis of teaching hours, lesson completion, and assessment records',
      icon: Users,
      gradient: 'from-pink-500 to-orange-500',
      stats: [
        { label: 'Total Staff', value: '87' },
        { label: 'Avg. Rating', value: '4.6/5' }
      ]
    },
    {
      title: 'Student Behavior Analytics',
      description: 'Comprehensive behavior tracking including incidents and recognitions',
      icon: AlertCircle,
      gradient: 'from-orange-500 to-red-500',
      stats: [
        { label: 'Incidents', value: '23' },
        { label: 'Recognition', value: '142' }
      ]
    }
  ];

  // Scheduled reports
  const scheduledReports = [
    {
      title: 'Weekly Academic Performance',
      frequency: 'Every Friday',
      nextRun: 'Jan 24, 2026 5:00 PM',
      recipients: 'Management Board',
      status: 'Active'
    },
    {
      title: 'Monthly Fee Collection Report',
      frequency: 'First of Month',
      nextRun: 'Feb 1, 2026 9:00 AM',
      recipients: 'Finance Committee',
      status: 'Active'
    },
    {
      title: 'Bi-weekly Attendance Summary',
      frequency: 'Every 2 weeks',
      nextRun: 'Jan 27, 2026 10:00 AM',
      recipients: 'Academic Coordinator',
      status: 'Active'
    }
  ];

  const handleGenerateReport = (reportTitle) => {
    console.log(`Generating report: ${reportTitle}`);
    // API integration will be added here
  };

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Reports & Insights Generator
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Real-time analytical and compliance reporting
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Analytics</span>
                <span className="sm:hidden">Stats</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm border border-slate-100">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 sm:mb-2 block">
                Report Format
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFormat('PDF')}
                  className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    selectedFormat === 'PDF'
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  PDF
                </button>
                <button
                  onClick={() => setSelectedFormat('Excel')}
                  className={`flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    selectedFormat === 'Excel'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Excel
                </button>
              </div>
            </div>
            
            <div>
              <label className="text-xs sm:text-sm font-semibold text-slate-600 mb-1.5 sm:mb-2 block">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-slate-200 rounded-lg text-xs sm:text-sm font-medium bg-white hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="current-term">Current Term</option>
                <option value="last-month">Last Month</option>
                <option value="last-quarter">Last Quarter</option>
                <option value="academic-year">Academic Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-3">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Apply Filters</span>
              <span className="sm:hidden">Filter</span>
              <span className="text-[8px] sm:text-[9px] opacity-80">(get in app)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div>
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
            Report Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select a category to generate detailed reports
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reportCategories.map((category, idx) => (
            <ReportCard
              key={idx}
              {...category}
              onGenerate={() => handleGenerateReport(category.title)}
            />
          ))}
        </div>
      </div>

      {/* Automated Scheduling Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 sm:p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-cyan-50 to-blue-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                    <span className="text-sm sm:text-base md:text-lg">Scheduled Reports</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Automated email dispatch to stakeholders</p>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap">
                  <span className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    New Schedule
                    <span className="text-[8px] sm:text-[9px] opacity-80">(get in app)</span>
                  </span>
                </button>
              </div>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
              {scheduledReports.map((report, idx) => (
                <ScheduledReportItem key={idx} {...report} />
              ))}
            </div>
          </div>
        </div>

        {/* Integration & Features Info */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-purple-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 sm:p-3 bg-purple-500 rounded-lg sm:rounded-xl">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-purple-900 mb-1">Export Formats</h4>
                <p className="text-xs sm:text-sm text-purple-800">
                  All reports available in PDF and Excel formats
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>PDF with digital signatures</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Excel with raw data</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Charts and visualizations</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 sm:p-3 bg-blue-500 rounded-lg sm:rounded-xl">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-blue-900 mb-1">Email Automation</h4>
                <p className="text-xs sm:text-sm text-blue-800">
                  Schedule weekly/monthly dispatches
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Customizable recipients</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Delivery confirmations</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ReportsGenerator;
