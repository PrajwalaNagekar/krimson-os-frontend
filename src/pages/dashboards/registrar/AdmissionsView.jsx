import React, { useState } from 'react';
import { 
  Users, FileText, CheckCircle, Search, Filter, Eye, 
  UserPlus, AlertTriangle, Clock, TrendingUp, Download,
  CheckSquare, XCircle, FileQuestion, ChevronDown, Calendar
} from 'lucide-react';

// Static Data - Will be replaced with API calls later
const ADMISSIONS_DATA = {
  stats: [
    { label: 'Total Inquiries', value: '45', change: '+12%', icon: Users, gradient: 'from-cyan-500 to-blue-500' },
    { label: 'Applications', value: '32', change: '+8%', icon: FileText, gradient: 'from-blue-500 to-purple-500' },
    { label: 'In Verification', value: '12', change: '0%', icon: Clock, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Enrolled', value: '8', change: '+3', icon: CheckCircle, gradient: 'from-pink-500 to-rose-500' },
  ],
  funnel: [
    { step: 'Inquiry', count: 45, percentage: 100, color: 'bg-cyan-500', textColor: 'text-cyan-600' },
    { step: 'Application', count: 32, percentage: 71, color: 'bg-blue-500', textColor: 'text-blue-600' },
    { step: 'Verification', count: 12, percentage: 27, color: 'bg-purple-500', textColor: 'text-purple-600' },
    { step: 'Enrolled', count: 8, percentage: 18, color: 'bg-pink-500', textColor: 'text-pink-600' },
  ],
  applicants: [
    { 
      id: 'A-2026-001', 
      name: 'Tan Wei Ming', 
      grade: 'Grade 1', 
      nationality: 'Singaporean', 
      status: 'Verification', 
      date: '2026-01-15',
      documents: 'Pending: Birth Certificate',
      priority: 'normal'
    },
    { 
      id: 'A-2026-002', 
      name: 'Sarah Johnson', 
      grade: 'Grade 4', 
      nationality: 'American', 
      status: 'Pending', 
      date: '2026-01-16',
      documents: 'All Submitted',
      priority: 'high'
    },
    { 
      id: 'A-2026-003', 
      name: 'Ravi Kumar Patel', 
      grade: 'Grade 9', 
      nationality: 'Indian', 
      status: 'Completed', 
      date: '2026-01-12',
      documents: 'All Verified',
      priority: 'normal'
    },
    { 
      id: 'A-2026-004', 
      name: 'Emma Chen', 
      grade: 'Grade 7', 
      nationality: 'Chinese', 
      status: 'Inquiry', 
      date: '2026-01-18',
      documents: 'Not Submitted',
      priority: 'normal'
    },
    { 
      id: 'A-2026-005', 
      name: 'Mohammed Al-Rashid', 
      grade: 'Grade 2', 
      nationality: 'UAE', 
      status: 'Pending', 
      date: '2026-01-17',
      documents: 'Pending: Passport Copy',
      priority: 'high'
    },
    { 
      id: 'A-2026-006', 
      name: 'Olivia Martinez', 
      grade: 'Grade 11', 
      nationality: 'Spanish', 
      status: 'Verification', 
      date: '2026-01-14',
      documents: 'Under Review',
      priority: 'normal'
    },
  ]
};

const AdmissionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedNationality, setSelectedNationality] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter applicants based on search and filters
  const filteredApplicants = ADMISSIONS_DATA.applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          applicant.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || applicant.grade === selectedGrade;
    const matchesNationality = selectedNationality === 'all' || applicant.nationality === selectedNationality;
    const matchesStatus = selectedStatus === 'all' || applicant.status === selectedStatus;
    
    return matchesSearch && matchesGrade && matchesNationality && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' };
      case 'Verification': return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' };
      case 'Pending': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' };
      case 'Inquiry': return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-2">
              Admissions Workflow Dashboard
            </h1>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Real-time monitoring of student admissions from inquiry to enrollment
            </p>
          </div>
          
          {/* Quick Stats Summary */}
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <div className="text-left">
              <p className="text-xs text-slate-500 font-semibold">Admission Rate</p>
              <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">18%</p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ADMISSIONS_DATA.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="relative group bg-white rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden"
              >
                {/* Gradient Background Blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-500 font-semibold">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Admission Funnel */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 p-6 lg:p-8 overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">Admission Funnel</h2>
                <p className="text-sm text-slate-500">Track progression: Inquiry → Application → Verification → Enrolled</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg transition-all hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">Export</span>
              </button>
            </div>

            {/* Funnel Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
              {ADMISSIONS_DATA.funnel.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connecting Arrow (hidden on mobile, last item) */}
                  {index < ADMISSIONS_DATA.funnel.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-slate-300 transition-all hover:shadow-lg">
                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-slate-100 rounded-full mb-4 overflow-hidden">
                      <div 
                        className={`h-full ${step.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${step.percentage}%` }}
                      ></div>
                    </div>
                    
                    {/* Count */}
                    <div className="text-center mb-2">
                      <p className={`text-4xl lg:text-5xl font-bold ${step.textColor} mb-1`}>{step.count}</p>
                      <p className="text-xs text-slate-400 font-semibold">{step.percentage}% of total</p>
                    </div>
                    
                    {/* Step Name */}
                    <div className={`text-center py-2 px-4 ${step.color} bg-opacity-10 rounded-xl`}>
                      <p className={`text-sm font-bold ${step.textColor} uppercase tracking-wide`}>{step.step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search, Filter & Applicants Table */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Header with Search & Filters */}
          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">Recent Applications</h2>
                <p className="text-sm text-slate-600">Showing {filteredApplicants.length} of {ADMISSIONS_DATA.applicants.length} applicants</p>
              </div>
              
              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 sm:min-w-[280px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                
                {/* Filter Toggle Button */}
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${showFilters ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'}`}
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden sm:inline">Filters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Expandable Filter Options */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in slide-in-from-top-2 fade-in duration-200">
                {/* Grade Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Grade</label>
                  <select 
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Grades</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 11">Grade 11</option>
                  </select>
                </div>

                {/* Nationality Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Nationality</label>
                  <select 
                    value={selectedNationality}
                    onChange={(e) => setSelectedNationality(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Nationalities</option>
                    <option value="Singaporean">Singaporean</option>
                    <option value="American">American</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="UAE">UAE</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Status</label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Pending">Pending</option>
                    <option value="Verification">Verification</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Applicants Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">ID</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Applicant Name</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Grade</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden md:table-cell">Nationality</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden lg:table-cell">Documents</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider hidden xl:table-cell">Date</th>
                  <th className="text-left px-4 lg:px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <FileQuestion className="w-16 h-16 mb-4 opacity-50" />
                        <p className="text-lg font-semibold">No applicants found</p>
                        <p className="text-sm">Try adjusting your search or filters</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredApplicants.map((applicant, index) => {
                    const statusColors = getStatusColor(applicant.status);
                    return (
                      <tr 
                        key={index} 
                        className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors group"
                      >
                        {/* ID */}
                        <td className="px-4 lg:px-6 py-4">
                          <span className="font-mono text-xs lg:text-sm font-bold text-slate-500">{applicant.id}</span>
                        </td>
                        
                        {/* Name */}
                        <td className="px-4 lg:px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                              {applicant.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-800 text-sm lg:text-base">{applicant.name}</p>
                              <p className="text-xs text-slate-500 md:hidden">{applicant.nationality}</p>
                            </div>
                          </div>
                        </td>
                        
                        {/* Grade */}
                        <td className="px-4 lg:px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs lg:text-sm font-semibold">
                            {applicant.grade}
                          </span>
                        </td>
                        
                        {/* Nationality */}
                        <td className="px-4 lg:px-6 py-4 hidden md:table-cell">
                          <span className="text-sm text-slate-600 font-medium">{applicant.nationality}</span>
                        </td>
                        
                        {/* Status */}
                        <td className="px-4 lg:px-6 py-4">
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs lg:text-sm font-bold`}>
                            {applicant.status === 'Completed' && <CheckCircle className="w-3.5 h-3.5" />}
                            {applicant.status === 'Verification' && <Clock className="w-3.5 h-3.5" />}
                            {applicant.status === 'Pending' && <AlertTriangle className="w-3.5 h-3.5" />}
                            {applicant.status === 'Inquiry' && <FileText className="w-3.5 h-3.5" />}
                            {applicant.status}
                          </span>
                        </td>
                        
                        {/* Documents */}
                        <td className="px-4 lg:px-6 py-4 hidden lg:table-cell">
                          <span className="text-xs lg:text-sm text-slate-600">{applicant.documents}</span>
                        </td>
                        
                        {/* Date */}
                        <td className="px-4 lg:px-6 py-4 hidden xl:table-cell">
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{applicant.date}</span>
                          </div>
                        </td>
                        
                        {/* Quick Actions */}
                        <td className="px-4 lg:px-6 py-4">
                          <div className="flex items-center gap-2">
                            {/* View Details */}
                            <button 
                              className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all hover:scale-110 group/btn"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            
                            {/* Approve - Show "get in app" on hover */}
                            <button 
                              className="relative p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all hover:scale-110 group/approve"
                              title="Approve"
                            >
                              <CheckSquare className="w-4 h-4" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/approve:opacity-100 transition-opacity pointer-events-none">
                                get in app
                              </span>
                            </button>
                            
                            {/* Hold */}
                            <button 
                              className="relative p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110 group/hold"
                              title="Hold"
                            >
                              <Clock className="w-4 h-4" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/hold:opacity-100 transition-opacity pointer-events-none">
                                get in app
                              </span>
                            </button>
                            
                            {/* Request Documents */}
                            <button 
                              className="relative p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all hover:scale-110 group/docs"
                              title="Request Documents"
                            >
                              <FileText className="w-4 h-4" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/docs:opacity-100 transition-opacity pointer-events-none">
                                get in app
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer with Pagination Info */}
          {filteredApplicants.length > 0 && (
            <div className="bg-slate-50 px-4 lg:px-6 py-4 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-slate-600">
                  Displaying <span className="font-bold text-slate-800">{filteredApplicants.length}</span> applicant{filteredApplicants.length !== 1 ? 's' : ''}
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm">1</button>
                    <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-all">2</button>
                    <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-all">3</button>
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all">
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdmissionsView;
