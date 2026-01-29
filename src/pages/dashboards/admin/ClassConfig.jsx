/**
 * @component ClassConfig
 * @description Admin Screen - Comprehensive Class & Section Configuration Management
 */
import React, { useState } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Users, Edit, Lock, CheckCircle, AlertTriangle, XCircle, 
  Plus, Download, RefreshCw, Building, UserCheck, Calendar,
  ChevronRight, FileText, Info, Filter, Search, X
} from 'lucide-react';

const ClassConfig = () => {
  const [selectedGrade, setSelectedGrade] = useState(ADMIN_DATA.grades[0]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ status: 'all', teacher: 'all', search: '' });

  // Calculate summary statistics
  const totalGrades = ADMIN_DATA.grades.length;
  const totalSections = ADMIN_DATA.grades.reduce((sum, grade) => sum + grade.sections, 0);
  const totalStudentsAllocated = ADMIN_DATA.grades.reduce((sum, grade) => sum + grade.totalStudents, 0);
  const unassignedStudents = ADMIN_DATA.unassignedStudents?.length || 0;
  const activeAcademicYear = ADMIN_DATA.academicYears?.find(y => y.isActive)?.label || '2025-2026';

  // Identify warnings
  const warnings = [];
  ADMIN_DATA.grades.forEach(grade => {
    grade.sectionsData.forEach(section => {
      if (section.students > section.capacity) {
        warnings.push({ type: 'capacity', section: section.id, message: `Section ${section.id} capacity exceeded (${section.students}/${section.capacity})` });
      }
      if (!section.teacher) {
        warnings.push({ type: 'teacher', section: section.id, message: `Section ${section.id} has no class teacher assigned` });
      }
      if (!section.timetableLinked) {
        warnings.push({ type: 'timetable', section: section.id, message: `Section ${section.id} timetable not linked` });
      }
    });
  });

  if (unassignedStudents > 0) {
    warnings.push({ type: 'students', message: `${unassignedStudents} students unassigned` });
  }

  // Filter sections based on active filters
  const filteredSections = selectedGrade.sectionsData.filter(section => {
    if (filters.status !== 'all' && section.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    if (filters.teacher !== 'all' && section.teacherId !== filters.teacher) return false;
    if (filters.search && !section.section.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50 border-green-100';
      case 'Locked': return 'text-red-600 bg-red-50 border-red-100';
      case 'Draft': return 'text-yellow-600 bg-yellow-50 border-yellow-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle size={14} />;
      case 'Locked': return <Lock size={14} />;
      case 'Draft': return <AlertTriangle size={14} />;
      default: return <Info size={14} />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION (Updated to match other screens)
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Academic Configuration
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Calendar size={12} /> {activeAcademicYear}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Class & Section Config
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage grade structure, section capacity, and teacher assignments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform"><Building size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{totalGrades}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Grades</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform"><FileText size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{totalSections}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Sections</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-100 text-green-600 rounded-xl group-hover:scale-110 transition-transform"><Users size={20} /></div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{totalStudentsAllocated}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Allocated Students</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all group ${
          unassignedStudents > 0 
            ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200' 
            : 'bg-white border-slate-100'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl group-hover:scale-110 transition-transform ${
              unassignedStudents > 0 ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${unassignedStudents > 0 ? 'text-amber-700' : 'text-slate-800'}`}>{unassignedStudents}</p>
              <p className={`text-xs font-medium uppercase tracking-wide ${unassignedStudents > 0 ? 'text-amber-600' : 'text-slate-500'}`}>Unassigned</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 WARNINGS & ALERTS */}
      {warnings.length > 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
               <AlertTriangle size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-amber-900 text-lg mb-1">Attention Required</h3>
              <p className="text-sm text-amber-800/80 mb-3">The following items require your immediate attention.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {warnings.slice(0, 6).map((warning, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-amber-800 bg-white/60 p-2 rounded-lg border border-amber-100">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                    {warning.message}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 ACTION BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              Add Grade
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              Add Section
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
            <div className="flex items-center gap-2">
              <RefreshCw size={18} />
              Auto-Assign Students
            </div>
            <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
          </button>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex-1 md:flex-none px-5 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm ${showFilters ? 'bg-slate-800 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
          >
            <Filter size={18} />
            Filters
          </button>
          <button className="flex-1 md:flex-none bg-slate-50 text-slate-600 px-5 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex flex-col items-center justify-center gap-0.5 text-sm">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export
            </div>
            <span className="text-[10px] text-slate-400 font-normal">(get in app)</span>
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md animate-slideDown">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Filter by Status</label>
              <select 
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="locked">Locked</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Search Section</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="e.g. 5A"
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl pl-12 pr-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => setFilters({ status: 'all', teacher: 'all', search: '' })}
                className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-colors w-full"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 🔹 2. GRADE LIST (Left Panel) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between mb-2">
             <h3 className="font-bold text-slate-800 text-lg">Grades</h3>
             <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{ADMIN_DATA.grades.length} Total</span>
          </div>
          
          <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar-hidden">
             {ADMIN_DATA.grades.map(grade => (
               <div 
                 key={grade.id}
                 onClick={() => setSelectedGrade(grade)}
                 className={`p-5 rounded-2xl cursor-pointer transition-all border-2 relative overflow-hidden group ${
                   selectedGrade.id === grade.id 
                     ? 'bg-gradient-to-br from-white to-blue-50/50 border-blue-500 shadow-md ring-4 ring-blue-500/5' 
                     : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg'
                 }`}
               >
                 <div className="flex justify-between items-start mb-4 relative z-10">
                   <div>
                     <h4 className={`font-bold text-lg ${selectedGrade.id === grade.id ? 'text-blue-700' : 'text-slate-700'}`}>{grade.name}</h4>
                     <p className="text-xs font-medium text-slate-400 mt-0.5">{grade.sections} Sections Managed</p>
                   </div>
                   <div className={`px-2 py-1 rounded-lg text-[10px] uppercase font-bold flex items-center gap-1 border ${getStatusColor(grade.status)}`}>
                     {getStatusIcon(grade.status)}
                     {grade.status}
                   </div>
                 </div>

                 <div className="space-y-3 relative z-10">
                   <div className="flex items-center justify-between text-xs font-semibold">
                     <span className="text-slate-500 flex items-center gap-1.5">
                       <Users size={14} />
                       Capacity
                     </span>
                     <span className="text-slate-700">{grade.totalStudents} / {grade.capacity}</span>
                   </div>
                   
                   {/* Capacity Progress Bar */}
                   <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                     <div 
                       className={`h-full rounded-full transition-all duration-1000 ${
                         grade.totalStudents > grade.capacity ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                       }`}
                       style={{ width: `${Math.min((grade.totalStudents / grade.capacity) * 100, 100)}%` }}
                     />
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* 🔹 3. SECTION TABLE (Main Area) */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
            <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                 <h3 className="font-bold text-slate-800 text-xl flex items-center gap-3">
                   {selectedGrade.name} Sections
                   <span className="text-sm font-bold text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full">{filteredSections.length}</span>
                 </h3>
                 <p className="text-sm text-slate-500 mt-1">Manage individual class sections details</p>
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Section ID</th>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Class Teacher</th>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Capacity</th>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Config</th>
                    <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSections.map(section => (
                    <tr key={section.id} className="hover:bg-blue-50/20 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            {section.section}
                          </div>
                          <div>
                             <span className="font-bold text-slate-700 block text-sm">{section.id}</span>
                             <span className="text-xs text-slate-400">Regular</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        {section.teacher ? (
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-700 text-sm">{section.teacher}</span>
                            <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit mt-1 border border-green-100">
                               Verified
                            </span>
                          </div>
                        ) : (
                          <span className="text-red-500 text-xs font-bold bg-red-50 px-3 py-1 rounded-lg border border-red-100 inline-flex items-center gap-1">
                            <AlertTriangle size={10} /> Unassigned
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                           <div className="flex items-center gap-2">
                              <span className={`font-bold text-sm ${section.students > section.capacity ? 'text-red-600' : 'text-slate-700'}`}>
                                {section.students} <span className="text-slate-400 text-xs">/ {section.capacity}</span>
                              </span>
                           </div>
                           <button 
                             onClick={() => {
                               setSelectedSection(section);
                               setShowStudentModal(true);
                             }}
                             className="text-blue-600 hover:text-blue-700 text-xs font-bold hover:underline text-left"
                           >
                             Manage Students
                           </button>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-slate-600 font-semibold text-sm bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                           {section.room}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        {section.timetableLinked ? (
                          <span className="text-slate-400">
                             <CheckCircle size={20} className="text-green-500" />
                          </span>
                        ) : (
                          <span className="text-slate-400" title="Timetable Missing">
                             <XCircle size={20} className="text-slate-300" />
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(section.status)}`}>
                          {getStatusIcon(section.status)}
                          {section.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            title="Edit Section"
                          >
                            <Edit size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredSections.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Filter size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700">No sections found</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mt-1">Try adjusting your active filters to see more results.</p>
                  <button 
                     onClick={() => setFilters({ status: 'all', teacher: 'all', search: '' })}
                     className="mt-4 text-blue-600 font-bold text-sm hover:underline"
                  >
                     Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Footer */}
            {filteredSections.length > 0 && (
               <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-center">
                  <p className="text-xs text-slate-400 font-semibold">
                     Viewing {filteredSections.length} of {selectedGrade.sectionsData.length} sections for {selectedGrade.name}
                  </p>
               </div>
            )}
            
          </div>
        </div>
      </div>

      {/* 🔹 5. STUDENT ALLOCATION MODAL (Updated) */}
      {showStudentModal && selectedSection && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Class {selectedSection.section} Allocation</h3>
                <p className="text-sm text-white/90 mt-1 font-medium opacity-90">Manage students assigned to this section</p>
              </div>
              <button 
                onClick={() => { setShowStudentModal(false); setSelectedSection(null); }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Capacity Indicator Bar */}
            <div className="px-8 py-5 bg-slate-50 border-b border-slate-200">
               <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Occupancy</span>
                  <span className={`text-sm font-bold ${selectedSection.students > selectedSection.capacity ? 'text-red-500' : 'text-slate-700'}`}>
                     {selectedSection.students} / {selectedSection.capacity} Students
                  </span>
               </div>
               <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                 <div 
                   className={`h-full rounded-full transition-all ${
                     selectedSection.students > selectedSection.capacity ? 'bg-red-500' : 'bg-gradient-to-r from-green-400 to-emerald-500'
                   }`}
                   style={{ width: `${Math.min((selectedSection.students / selectedSection.capacity) * 100, 100)}%` }}
                 />
               </div>
            </div>

            {/* Student List */}
            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-4">
                   <h4 className="font-bold text-slate-800">Enrolled Students</h4>
                   <button className="text-blue-600 text-xs font-bold hover:underline flex flex-col items-end">
                      <div className="flex items-center gap-1">
                        <Plus size={14} /> Add New
                      </div>
                      <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                   </button>
                </div>
                
                {(ADMIN_DATA.studentsAllocation?.[selectedSection.id] || []).map(student => (
                  <div key={student.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 text-slate-600 font-bold flex items-center justify-center text-sm shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{student.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{student.admissionId} • {student.gender}</p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                       <X size={18} />
                    </button>
                  </div>
                ))}

                {(!ADMIN_DATA.studentsAllocation?.[selectedSection.id] || ADMIN_DATA.studentsAllocation[selectedSection.id].length === 0) && (
                   <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl">
                      <p className="text-slate-400 font-semibold mb-2">No students yet</p>
                      <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors">
                         Auto-Assign Students
                      </button>
                   </div>
                )}
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
               <button onClick={() => setShowStudentModal(false)} className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm">Cancel</button>
               <button className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30 flex flex-col items-center gap-0.5">
                 <span>Save Changes</span>
                 <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
               </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ClassConfig;
