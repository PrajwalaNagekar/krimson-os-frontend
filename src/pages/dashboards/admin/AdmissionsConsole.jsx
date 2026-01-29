/**
 * @component AdmissionsConsole
 * @description Screen 2: Admissions Management Console - Digitize and monitor entire admissions workflow
 * @features Lead capture, status tracker (Applied→Verified→Enrolled), document verification, auto-ID, enrollment confirmation
 */
import React, { useState, useMemo } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  UserPlus, 
  Filter, 
  Download, 
  CheckCircle, 
  Search, 
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Upload,
  Eye,
  CheckSquare,
  XCircle,
  AlertCircle,
  Mail,
  Phone,
  Calendar,
  School,
  DollarSign,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AdmissionsConsole = () => {
  const { admissions, overview } = ADMIN_DATA;
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // all, applied, verified, enrolled
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Compute statistics
  const stats = useMemo(() => {
    const applied = admissions.filter(a => a.stage === 'Applied').length;
    const verified = admissions.filter(a => a.stage === 'Verified').length;
    const enrolled = admissions.filter(a => a.stage === 'Enrolled').length;
    const webFormLeads = admissions.filter(a => a.leadSource === 'Web Form').length;
    const referralLeads = admissions.filter(a => a.leadSource === 'Referral').length;
    const walkInLeads = admissions.filter(a => a.leadSource === 'Walk-in').length;
    const documentsVerified = admissions.filter(a => {
      const docs = a.documents;
      return Object.values(docs).every(doc => doc.verified);
    }).length;
    const conversionRate = admissions.length > 0 ? Math.round((enrolled / admissions.length) * 100) : 0;

    return {
      total: admissions.length,
      applied,
      verified,
      enrolled,
      webFormLeads,
      referralLeads,
      walkInLeads,
      documentsVerified,
      conversionRate
    };
  }, [admissions]);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filters, setFilters] = useState({
    grade: 'all',
    leadSource: 'all'
  });

  // Unique values for filters
  const grades = useMemo(() => [...new Set(admissions.map(a => a.grade))].sort((a,b) => a - b), [admissions]);
  const sources = useMemo(() => [...new Set(admissions.map(a => a.leadSource))], [admissions]);

  // Filter applications
  const filteredApplications = useMemo(() => {
    let result = admissions;

    // Status Filter
    if (filterStatus !== 'all') {
      result = result.filter(a => a.stage.toLowerCase() === filterStatus.toLowerCase());
    }

    // Dropdown Filters
    if (filters.grade !== 'all') {
      result = result.filter(a => a.grade.toString() === filters.grade.toString());
    }
    if (filters.leadSource !== 'all') {
      result = result.filter(a => a.leadSource === filters.leadSource);
    }

    return result;
  }, [admissions, filterStatus, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredApplications.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredApplications, currentPage]);

  useMemo(() => {
    setCurrentPage(1);
  }, [filterStatus, filters]);

  const resetFilters = () => {
    setFilters({ grade: 'all', leadSource: 'all' });
    setFilterStatus('all');
    setShowFilterMenu(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10" onClick={() => setShowFilterMenu(false)}>
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Screen 2: Admissions Department
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   Academic Year 2025-26
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Admissions Management Console
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Streamline lead capture, track applications through verification, and manage enrollment with automated ID generation.
              </p>
            </div>
            
            <button className="flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-white text-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
               <div className="flex items-center gap-2">
                 <UserPlus size={20} />
                 <span>New Application</span>
               </div>
               <span className="text-[10px] opacity-75 font-normal leading-none">get in app</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Applications */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20">
              <FileText className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Total</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.total}</h3>
          <p className="text-sm font-semibold text-slate-500">Applications Received</p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-blue-600 font-bold">{stats.applied} Applied</span>
            <span className="text-green-600 font-bold">{stats.enrolled} Enrolled</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20">
              <Users className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Sources</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Web Forms</span>
              <span className="font-bold text-blue-600">{stats.webFormLeads}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Referrals</span>
              <span className="font-bold text-purple-600">{stats.referralLeads}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Walk-ins</span>
              <span className="font-bold text-pink-600">{stats.walkInLeads}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Rate</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.conversionRate}%</h3>
          <p className="text-sm font-semibold text-slate-500">Conversion to Enrolled</p>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{width: `${stats.conversionRate}%`}}></div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* Documents Verified */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20">
              <CheckSquare className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Docs</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.documentsVerified}</h3>
          <p className="text-sm font-semibold text-slate-500">Fully Verified</p>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs font-medium text-slate-400">Out of {stats.total} applications</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>
      </div>

      {/* ========================================
          STATUS FILTER TABS
          ======================================== */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setFilterStatus('all')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            filterStatus === 'all'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Applications
          <span className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === 'all' ? 'bg-white/20' : 'bg-slate-100'}`}>
            {stats.total}
          </span>
        </button>
        <button
          onClick={() => setFilterStatus('applied')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            filterStatus === 'applied'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Applied
          <span className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === 'applied' ? 'bg-white/20' : 'bg-slate-100'}`}>
            {stats.applied}
          </span>
        </button>
        <button
          onClick={() => setFilterStatus('verified')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            filterStatus === 'verified'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Verified
          <span className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === 'verified' ? 'bg-white/20' : 'bg-slate-100'}`}>
            {stats.verified}
          </span>
        </button>
        <button
          onClick={() => setFilterStatus('enrolled')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            filterStatus === 'enrolled'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Enrolled
          <span className={`px-2 py-0.5 rounded-full text-xs ${filterStatus === 'enrolled' ? 'bg-white/20' : 'bg-slate-100'}`}>
            {stats.enrolled}
          </span>
        </button>
      </div>

      {/* ========================================
          SEARCH & ACTIONS BAR
          ======================================== */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm z-20 relative">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
               type="text" 
               placeholder="Search by name, ID, or email..." 
               className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto relative">
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFilterMenu(!showFilterMenu);
                }}
                className={`flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors text-sm ${showFilterMenu ? 'ring-2 ring-blue-500/20 bg-blue-50 text-blue-600' : ''}`}
              >
                 <Filter size={18} />
                 <span>Filter</span>
                 {(filters.grade !== 'all' || filters.leadSource !== 'all') && (
                   <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                 )}
              </button>

              {showFilterMenu && (
                <div 
                  className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-fadeIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-sm font-bold text-slate-700">Filter Options</span>
                      <button 
                        onClick={resetFilters}
                        className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Reset All
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Grade</label>
                      <select 
                        value={filters.grade}
                        onChange={(e) => setFilters(prev => ({ ...prev, grade: e.target.value }))}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500"
                      >
                        <option value="all">All Grades</option>
                        {grades.map(g => (
                          <option key={g} value={g}>Grade {g}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Lead Source</label>
                      <select 
                        value={filters.leadSource}
                        onChange={(e) => setFilters(prev => ({ ...prev, leadSource: e.target.value }))}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-500"
                      >
                        <option value="all">All Sources</option>
                        {sources.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-2">
                       <button 
                         onClick={() => setShowFilterMenu(false)}
                         className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg text-sm hover:shadow-lg transition-all"
                       >
                         Apply Filters
                       </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 text-sm">
               <div className="flex items-center gap-2">
                 <Download size={18} />
                 <span>Export</span>
               </div>
               <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
            </button>
         </div>
      </div>

      {/* ========================================
          APPLICATIONS TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Student ID</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Applicant Name</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Grade</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Lead Source</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Documents</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Stage</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {paginatedApplications.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="p-12 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-4 rounded-full bg-slate-100">
                            <AlertCircle className="text-slate-400" size={32} />
                          </div>
                          <p className="text-lg font-bold text-slate-400">No applications found</p>
                          <p className="text-sm text-slate-400">Try adjusting your filters</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedApplications.map(app => {
                      const totalDocs = Object.keys(app.documents).length;
                      const verifiedDocs = Object.values(app.documents).filter(d => d.verified).length;
                      const uploadedDocs = Object.values(app.documents).filter(d => d.uploaded).length;

                      return (
                        <tr key={app.id} className="hover:bg-blue-50/20 transition-colors group">
                           <td className="p-5">
                              <div className="flex flex-col">
                                <span className="font-mono text-xs font-bold text-slate-800">{app.studentId}</span>
                                <span className="text-xs text-slate-400">#{app.id}</span>
                              </div>
                           </td>
                           <td className="p-5">
                              <div>
                                <p className="font-bold text-slate-800 text-base">{app.name}</p>
                                <p className="text-xs text-slate-500">{app.parentName}</p>
                              </div>
                           </td>
                           <td className="p-5">
                              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                Grade {app.grade}
                              </span>
                           </td>
                           <td className="p-5">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                                app.leadSource === 'Web Form' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                app.leadSource === 'Referral' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                                'bg-pink-50 text-pink-600 border-pink-200'
                              }`}>
                                {app.leadSource}
                              </span>
                           </td>
                           <td className="p-5">
                              <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-slate-700">{verifiedDocs}/{totalDocs} Verified</span>
                                <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-green-500 h-full rounded-full" style={{width: `${(verifiedDocs/totalDocs)*100}%`}}></div>
                                </div>
                                <span className="text-xs text-slate-400">{uploadedDocs} uploaded</span>
                              </div>
                           </td>
                           <td className="p-5">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                                app.stage === 'Enrolled' ? 'bg-green-50 text-green-700 border-green-200' :
                                app.stage === 'Verified' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                                'bg-amber-50 text-amber-700 border-amber-200'
                              }`}>
                                 <div className={`w-1.5 h-1.5 rounded-full ${
                                    app.stage === 'Enrolled' ? 'bg-green-500' :
                                    app.stage === 'Verified' ? 'bg-blue-500' : 'bg-amber-500'
                                 }`} />
                                 {app.stage}
                              </span>
                           </td>
                           <td className="p-5 text-right">
                              <button 
                                onClick={() => setSelectedApplication(app)}
                                className="flex flex-col items-center justify-center px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm"
                              >
                                 <div className="flex items-center gap-1">
                                   <Eye size={16} />
                                   <span>View</span>
                                 </div>
                                 <span className="text-[10px] text-black font-normal leading-none mt-0.5">click here</span>
                              </button>
                           </td>
                        </tr>
                      );
                    })
                  )}
               </tbody>
            </table>
         </div>
      </div>

      {/* ========================================
          PAGINATION CONTROLS
          ======================================== */}
      {filteredApplications.length > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-600">
            Showing <span className="font-bold text-slate-800">{((currentPage - 1) * itemsPerPage) + 1}</span> to <span className="font-bold text-slate-800">{Math.min(currentPage * itemsPerPage, filteredApplications.length)}</span> of <span className="font-bold text-slate-800">{filteredApplications.length}</span> applications
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                currentPage === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                currentPage === totalPages
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================
          APPLICATION DETAILS MODAL
          ======================================== */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header - Full Width */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Application Details</h2>
                <p className="text-white/80 text-sm font-mono">{selectedApplication.studentId}</p>
              </div>
              <button 
                onClick={() => setSelectedApplication(null)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <XCircle className="text-white" size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable with Colored Scrollbar */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar-cyan"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#06b6d4 #e0f2fe'
              }}
            >
              {/* Student Info */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Student Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Full Name</p>
                    <p className="font-bold text-slate-800">{selectedApplication.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Date of Birth</p>
                    <p className="font-bold text-slate-800">{selectedApplication.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Gender</p>
                    <p className="font-bold text-slate-800">{selectedApplication.gender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Grade Applying For</p>
                    <p className="font-bold text-slate-800">Grade {selectedApplication.grade}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-500 mb-1">Previous School</p>
                    <p className="font-bold text-slate-800">{selectedApplication.previousSchool}</p>
                  </div>
                </div>
              </div>

              {/* Parent Info */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Users size={14} />
                  Parent/Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-600 mb-1">Name</p>
                      <p className="font-bold text-slate-800 text-sm">{selectedApplication.parentName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-600 mb-1">Email</p>
                      <p className="font-bold text-slate-800 text-sm">{selectedApplication.parentEmail}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-600 mb-1">Phone</p>
                      <p className="font-bold text-slate-800 text-sm">{selectedApplication.parentPhone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Status */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">Application Workflow Status</h3>
                <div className="flex items-center gap-2">
                  <div className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === 'Applied' ? 'bg-amber-500 text-white shadow-lg' : 'bg-white text-slate-600'}`}>
                    <p className="text-xs font-bold">Applied</p>
                  </div>
                  <ArrowRight className="text-slate-400" size={20} />
                  <div className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === 'Verified' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-slate-600'}`}>
                    <p className="text-xs font-bold">Verified</p>
                  </div>
                  <ArrowRight className="text-slate-400" size={20} />
                  <div className={`flex-1 text-center p-3 rounded-lg ${selectedApplication.stage === 'Enrolled' ? 'bg-green-500 text-white shadow-lg' : 'bg-white text-slate-600'}`}>
                    <p className="text-xs font-bold">Enrolled</p>
                  </div>
                </div>
              </div>

              {/* Document Verification Checklist */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Document Verification Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(selectedApplication.documents).map(([key, value]) => (
                    <div key={key} className={`p-3 rounded-xl border ${value.verified ? 'bg-green-50 border-green-200' : value.uploaded ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {value.verified ? (
                            <CheckCircle size={18} className="text-green-600" />
                          ) : value.uploaded ? (
                            <Clock size={18} className="text-blue-600" />
                          ) : (
                            <XCircle size={18} className="text-slate-400" />
                          )}
                          <span className="text-sm font-bold text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          value.verified ? 'bg-green-600 text-white' :
                          value.uploaded ? 'bg-blue-600 text-white' :
                          'bg-slate-300 text-slate-600'
                        }`}>
                          {value.verified ? 'Verified' : value.uploaded ? 'Pending' : 'Missing'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fees */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign size={16} className="text-purple-600" />
                    <p className="text-xs font-bold text-purple-700">Application Fee</p>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-800">₹{selectedApplication.applicationFee}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold mt-2 ${selectedApplication.applicationFeePaid ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedApplication.applicationFeePaid ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {selectedApplication.applicationFeePaid ? 'Paid' : 'Pending'}
                  </span>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-pink-600" />
                    <p className="text-xs font-bold text-pink-700">Admission Fee</p>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-800">₹{selectedApplication.admissionFee}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold mt-2 ${selectedApplication.admissionFeePaid ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedApplication.admissionFeePaid ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {selectedApplication.admissionFeePaid ? 'Paid' : 'Pending'}
                  </span>
                </div>
              </div>

              {/* Interview */}
              {selectedApplication.interviewScheduled && (
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-blue-600" />
                    <p className="text-xs font-bold text-blue-700">Interview Schedule</p>
                  </div>
                  <p className="font-bold text-slate-800">{selectedApplication.interviewDate}</p>
                  {selectedApplication.interviewCompleted && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold mt-2 text-green-600">
                      <CheckCircle size={14} />
                      Interview Completed
                    </span>
                  )}
                </div>
              )}

              {/* Enrollment Confirmation */}
              {selectedApplication.enrollmentConfirmed && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <School size={16} className="text-green-600" />
                    <p className="text-xs font-bold text-green-700">Enrollment Confirmation</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-green-600 mb-1">Enrollment Date</p>
                      <p className="font-bold text-slate-800">{selectedApplication.enrollmentDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 mb-1">Class Assigned</p>
                      <p className="font-bold text-slate-800">{selectedApplication.classAssigned}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Remarks */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Internal Remarks</h3>
                <p className="text-sm text-slate-600">{selectedApplication.remarks}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                  <div className="flex items-center gap-2">
                    <Upload size={18} />
                    <span>Upload Document</span>
                  </div>
                  <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                  <div className="flex items-center gap-2">
                    <CheckSquare size={18} />
                    <span>Verify Documents</span>
                  </div>
                  <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                </button>
                {selectedApplication.stage !== 'Enrolled' && (
                  <button className="flex-1 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                    <div className="flex items-center gap-2">
                      <Award size={18} />
                      <span>Confirm Enrollment</span>
                    </div>
                    <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionsConsole;
