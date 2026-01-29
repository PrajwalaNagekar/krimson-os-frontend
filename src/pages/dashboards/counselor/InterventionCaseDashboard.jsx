import React, { useState } from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { 
  Lock, Clock, CheckCircle, MoreHorizontal, AlertTriangle, 
  Plus, Filter, Calendar, User, FileText, Bell, Eye, X,
  Shield, TrendingUp, MessageSquare, Download
} from 'lucide-react';

/**
 * Intervention & Case Management Dashboard - Screen 2
 * Purpose: Track interventions and counseling follow-ups
 * Features: Case cards, Progress tracking, Confidential notes, Follow-up reminders
 * Future: Replace static data with Counselor Database + Notification API
 */
const InterventionCaseDashboard = () => {
  const { cases } = COUNSELOR_DATA;
  const [selectedCase, setSelectedCase] = useState(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');

  // Future API: Fetch cases
  const fetchCases = () => {
    console.log('Future API: GET /api/counselor/cases');
  };

  // Future API: Add confidential note
  const addNote = (caseId, note) => {
    console.log(`Future API: POST /api/counselor/cases/${caseId}/notes`, { note });
  };

  // Future API: Set reminder
  const setReminder = (caseId, date) => {
    console.log(`Future API: POST /api/counselor/cases/${caseId}/reminders`, { date });
  };

  // Get progress status
  const getProgressStatus = (progress) => {
    if (progress === 100) return { label: 'Resolved', color: 'from-green-400 to-emerald-500', bg: 'bg-green-50', text: 'text-green-700' };
    if (progress >= 34) return { label: 'Ongoing', color: 'from-orange-400 to-orange-500', bg: 'bg-orange-50', text: 'text-orange-700' };
    return { label: 'Initial', color: 'from-blue-400 to-blue-500', bg: 'bg-blue-50', text: 'text-blue-700' };
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-green-100 text-green-700';
    }
  };

  const CaseCard = ({ data }) => {
    const status = getProgressStatus(data.progress);
    const hasUpcomingReminder = data.nextFollowUp && new Date(data.nextFollowUp) - new Date() < 3 * 24 * 60 * 60 * 1000;

    return (
      <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group cursor-pointer">
        {/* Severity Corner */}
        {data.severity === 'High' && (
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-red-500 opacity-20"></div>
        )}
        
        {/* Reminder Badge */}
        {hasUpcomingReminder && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 animate-pulse">
            <Bell size={12} />
            Due Soon
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-lg ${status.bg} ${status.text}`}>
                <CheckCircle size={12} />
                {status.label}
              </span>
              <span className={`text-xs font-bold px-2 py-1 rounded ${getSeverityColor(data.severity)}`}>
                {data.severity}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">{data.student}</h3>
            <p className="text-xs text-slate-400">Case ID: {data.id}</p>
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>

        {/* Issue Summary */}
        <div className="mb-4 p-4 bg-slate-50 rounded-xl">
          <div className="flex items-start gap-2 mb-2">
            {data.severity === 'High' && <AlertTriangle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />}
            <p className="text-sm font-semibold text-slate-700">{data.issue}</p>
          </div>
          {data.description && (
            <p className="text-xs text-slate-500 leading-relaxed">{data.description}</p>
          )}
        </div>

        {/* Assigned Counselor */}
        <div className="mb-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
            {data.counselor?.charAt(0) || 'C'}
          </div>
          <div>
            <div className="text-xs text-slate-400">Assigned to</div>
            <div className="text-sm font-bold text-slate-700">{data.counselor || 'Unassigned'}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-500 font-medium">Progress</span>
            <span className="font-bold text-slate-700">{data.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${status.color} transition-all duration-500`} 
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Next Follow-up */}
        {data.nextFollowUp && (
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-500 bg-blue-50 p-2 rounded-lg">
            <Calendar size={12} className="text-blue-600" />
            <span>Next Follow-up: <span className="font-bold text-blue-700">{data.nextFollowUp}</span></span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Lock size={12} />
            <span className="font-medium">Confidential</span>
          </div>
          <button
            onClick={() => {
              setSelectedCase(data);
              setShowNotesModal(true);
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors">
            <Eye size={12} />
            View Notes
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <Shield size={32} />
              Case Management
            </h1>
            <p className="text-white/90 text-sm md:text-base">Track interventions and counseling follow-ups</p>
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
            <Plus size={18} />
            New Case
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <Shield size={24} className="opacity-90" />
          </div>
          <h3 className="text-3xl font-bold mb-1">5</h3>
          <p className="text-sm opacity-90 font-medium">Active Cases</p>
          <p className="text-xs opacity-60 mt-2">get in app</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <Bell size={24} className="opacity-90" />
          </div>
          <h3 className="text-3xl font-bold mb-1">12</h3>
          <p className="text-sm opacity-90 font-medium">Follow-ups Due</p>
          <p className="text-xs opacity-60 mt-2">get in app</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle size={24} className="opacity-90" />
          </div>
          <h3 className="text-3xl font-bold mb-1">28</h3>
          <p className="text-sm opacity-90 font-medium">Resolved YTD</p>
          <p className="text-xs opacity-60 mt-2">get in app</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp size={24} className="opacity-90" />
          </div>
          <h3 className="text-3xl font-bold mb-1">87%</h3>
          <p className="text-sm opacity-90 font-medium">Success Rate</p>
          <p className="text-xs opacity-60 mt-2">get in app</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-slate-200 flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <Filter size={16} />
          Filter:
        </div>
        {['All', 'Initial', 'Ongoing', 'Resolved'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              filterStatus === status
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
            }`}>
            {status}
          </button>
        ))}
      </div>

      {/* Case Grid */}
      <div>
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
          <Clock className="text-orange-500" size={22} />
          Ongoing Interventions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => <CaseCard key={c.id} data={c} />)}
          
          {/* Add New Case Card */}
          <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-slate-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50/30 cursor-pointer transition-all min-h-[300px] group">
            <div className="bg-slate-100 group-hover:bg-blue-100 p-6 rounded-full mb-4 transition-colors">
              <Plus size={32} />
            </div>
            <span className="font-bold text-sm">Open New Case File</span>
            <span className="text-xs mt-1">Click to create intervention case</span>
          </div>
        </div>
      </div>

      {/* Confidential Notes Modal */}
      {showNotesModal && selectedCase && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
              <button
                onClick={() => setShowNotesModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all">
                <X size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                  <Lock size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Confidential Case Notes</h2>
                  <p className="text-white/90 text-sm">{selectedCase.student} - Case #{selectedCase.id}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Case Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${getSeverityColor(selectedCase.severity)}`}>
                    {selectedCase.severity} Priority
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-500">{getProgressStatus(selectedCase.progress).label}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{selectedCase.issue}</h3>
                <p className="text-sm text-slate-600">{selectedCase.description}</p>
              </div>

              {/* Notes Timeline */}
              <div className="mb-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-purple-500" />
                  Notes History
                </h3>
                <div className="space-y-4">
                  {/* Mock notes - replace with dynamic data */}
                  <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50/50 rounded-r-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-700">Initial Assessment</span>
                      <span className="text-xs text-slate-500">2026-01-15</span>
                    </div>
                    <p className="text-sm text-slate-700">Student showing signs of stress. Recommended weekly check-ins and connection with school psychologist.</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50/50 rounded-r-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-orange-700">Follow-up Session</span>
                      <span className="text-xs text-slate-500">2026-01-12</span>
                    </div>
                    <p className="text-sm text-slate-700">Progress noted. Student engaging more in class. Continue monitoring.</p>
                  </div>
                </div>
              </div>

              {/* Add Note */}
              <div>
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <FileText size={18} className="text-green-500" />
                  Add New Note
                </h3>
                <textarea 
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  rows="4"
                  placeholder="Enter confidential case notes here..."
                ></textarea>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Lock size={12} />
                    Notes are strictly confidential
                  </span>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                    <Plus size={16} />
                    Save Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterventionCaseDashboard;
