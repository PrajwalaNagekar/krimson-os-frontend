import React from 'react';
import { XCircle, FileText, Calendar, Clock, Download, CheckCircle, Mic, Type } from 'lucide-react';

// AssignmentSubmissionViewModal: Displays the details of a submitted assignment
const AssignmentSubmissionViewModal = ({ show, onClose, assignment }) => {
  if (!show || !assignment) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Premium Gradient */}
        <div className="relative p-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-md"
          >
            <XCircle size={24} className="text-white" />
          </button>
          
          <div className="flex items-start gap-4 pr-12">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner border border-white/10">
              <CheckCircle size={32} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[10px] font-bold border border-white/10 uppercase tracking-wider">
                  Submitted
                </span>
                <span className="text-white/80 text-xs font-medium">
                  {assignment.subject}
                </span>
              </div>
              <h2 className="text-2xl font-bold leading-tight">{assignment.title}</h2>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
          
          {/* Submission Meta Data */}
          <div className="flex flex-wrap gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Submitted On</p>
                <p className="text-sm font-bold text-slate-700">Oct 12, 2025</p>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Time</p>
                <p className="text-sm font-bold text-slate-700">10:42 AM</p>
              </div>
            </div>
          </div>

          {/* Submitted Content */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 uppercase flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></span>
              Your Submission
            </h3>

            {/* File Submission Card */}
            <div className="group relative overflow-hidden bg-white border-2 border-slate-100 hover:border-blue-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                   <CheckCircle size={16} />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl flex items-center justify-center border border-indigo-100 group-hover:scale-105 transition-transform duration-300">
                  <FileText size={24} className="text-indigo-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                    {assignment.submittedFile || 'assignment_final.pdf'}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    2.4 MB • PDF Document
                  </p>
                </div>
              </div>
            </div>

            {/* Text Entry (Mock) */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Type size={16} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-500 uppercase">Additional Notes</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                "Here is my submission for the trigonometry worksheet. I have included step-by-step calculations for all problems as requested."
              </p>
            </div>
            
            {/* Audio (Mock) */}
             <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                    <Mic size={14} className="text-slate-500"/>
                 </div>
                 <div className="flex-1 h-8 bg-slate-200 rounded-full overflow-hidden relative">
                    {/* Mock Waveform */}
                    <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-30">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-1 bg-slate-600 rounded-full" style={{height: `${Math.random() * 100}%`}}></div>
                        ))}
                    </div>
                 </div>
                 <span className="text-xs font-bold text-slate-500">00:45</span>
             </div>

          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-6 border-t border-slate-200">
          <div className="flex gap-3">
             <button 
              className="group flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-400 hover:shadow-cyan-500/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Download Submission
            </button>
            <button 
              onClick={onClose}
              className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-red-50 hover:text-red-600 hover:border-red-200 hover:shadow-red-500/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm active:scale-95"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssignmentSubmissionViewModal;
