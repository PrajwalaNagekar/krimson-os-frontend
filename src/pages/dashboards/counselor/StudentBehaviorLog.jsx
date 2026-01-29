import React, { useState } from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { 
  Plus, Filter, FileText, Download, Smile, Frown, AlertCircle,
  Search, Calendar, ChevronDown, MoreHorizontal, User, Tag,
  Brain, BookOpen, Users, Heart, X, TrendingUp, Clock, Eye
} from 'lucide-react';

/**
 * Student Behavior Log - Screen 1
 * Purpose: Maintain detailed logs of behavioral observations and interventions
 * Features: Add incidents/merits, Tag categories, View history, Export
 */
const StudentBehaviorLog = () => {
  const { behaviorLogs } = COUNSELOR_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // Category Configuration
  const categories = [
    { name: 'Behavioral', color: 'from-red-400 to-rose-500', icon: AlertCircle, bg: 'bg-red-50', text: 'text-red-700' },
    { name: 'Academic', color: 'from-blue-400 to-indigo-500', icon: BookOpen, bg: 'bg-blue-50', text: 'text-blue-700' },
    { name: 'Social', color: 'from-green-400 to-emerald-500', icon: Users, bg: 'bg-green-50', text: 'text-green-700' },
    { name: 'Emotional', color: 'from-purple-400 to-pink-500', icon: Heart, bg: 'bg-purple-50', text: 'text-purple-700' }
  ];

  // Stats Data (Mock)
  const stats = [
    { title: 'Positive Merits', value: 12, icon: Smile, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100' },
    { title: 'Incidents / Concerns', value: 5, icon: Frown, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
    { title: 'Parent Reports', value: 8, icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' }
  ];

  // Helper to get category styles
  const getCategoryStyles = (catName) => {
    const cat = categories.find(c => c.name === catName) || categories[0];
    return cat;
  };

  // View student history
  const viewStudentHistory = (studentName) => {
    setSelectedStudent(studentName);
    setShowHistoryModal(true);
  };

  // Get student history (mock data - filter logs by student)
  const getStudentHistory = (studentName) => {
    return behaviorLogs.filter(log => log.student === studentName);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <Brain size={32} />
              Student Behavior Log
            </h1>
            <p className="text-white/90 text-sm md:text-base">Track and manage student behavioral observations and interventions</p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-white font-bold hover:bg-white/30 transition-all">
              <Filter size={18} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              <Plus size={18} />
              Log Incident
            </button>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Smile size={24} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">12</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Positive Merits</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Frown size={24} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">5</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Incidents / Concerns</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <FileText size={24} />
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">8</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Parent Reports</p>
            <p className="text-xs opacity-60 mt-2">get in app</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search students, classes, or keywords..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'All' 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.name
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {selectedCategory === cat.name && <cat.icon size={14} />}
                {cat.name}
              </button>
            ))}
          </div>

          <button className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors ml-auto md:ml-0">
            <Download size={16} />
            Export Log
          </button>
        </div>

        {/* Logs Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Student</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/3">Observation</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Recorded By</th>
                <th className="p-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {behaviorLogs.map((log) => {
                const styles = getCategoryStyles(log.category);
                return (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold border-2 border-white shadow-sm">
                          {log.student.charAt(0)}
                        </div>
                        <div>
                          <button
                            onClick={() => viewStudentHistory(log.student)}
                            className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors hover:underline text-left">
                            {log.student}
                          </button>
                          <p className="text-xs text-slate-400">{log.class}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${styles.bg} ${styles.text}`}>
                        <styles.icon size={12} />
                        {log.category}
                      </span>
                    </td>
                    <td className="p-5">
                      <p className="text-sm text-slate-600 leading-relaxed max-w-md">{log.description}</p>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                        <Calendar size={12} />
                        {log.date}
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-600">{log.recordedBy}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {/* Pagination (Mock) */}
          <div className="flex items-center justify-between p-5 border-t border-slate-100 bg-slate-50/30">
            <span className="text-xs text-slate-500 font-medium">Showing 1-10 of 45 records</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">Prev</button>
              <button className="px-3 py-1 text-xs font-bold bg-blue-500 text-white rounded-lg shadow-md">1</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">2</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">3</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Student History Modal */}
      {showHistoryModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all">
                <X size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold border-2 border-white/40">
                  {selectedStudent.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedStudent}</h2>
                  <p className="text-white/90 text-sm">Behavior History & Timeline</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Smile size={20} className="text-green-600" />
                    <span className="text-xs font-bold text-green-600 uppercase">Positive</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    {getStudentHistory(selectedStudent).filter(l => l.type === 'Positive').length}
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Frown size={20} className="text-red-600" />
                    <span className="text-xs font-bold text-red-600 uppercase">Incidents</span>
                  </div>
                  <div className="text-2xl font-bold text-red-700">
                    {getStudentHistory(selectedStudent).filter(l => l.type === 'Negative').length}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={20} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-600 uppercase">Total Records</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    {getStudentHistory(selectedStudent).length}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-purple-500" />
                  Behavior Timeline
                </h3>
                <div className="space-y-4">
                  {getStudentHistory(selectedStudent).map((record, index) => {
                    const styles = getCategoryStyles(record.category);
                    return (
                      <div key={record.id} className="relative pl-8 pb-4 border-l-2 border-slate-200 last:border-l-0">
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${styles.color} border-2 border-white shadow-md`}></div>
                        
                        {/* Content */}
                        <div className="bg-slate-50 rounded-2xl p-4 hover:shadow-md transition-all">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${styles.bg} ${styles.text}`}>
                                <styles.icon size={12} />
                                {record.category}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                record.type === 'Positive' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {record.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Calendar size={12} />
                              {record.date}
                            </div>
                          </div>
                          <p className="text-sm text-slate-700 mb-2">{record.description}</p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <User size={12} />
                            Recorded by: <span className="font-bold">{record.recordedBy}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Export Button */}
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                  <Download size={18} />
                  Export Student Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentBehaviorLog;
