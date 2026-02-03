import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

// SubmittedView: Renders the content for assignments that have been submitted
const SubmittedView = ({ assign, onViewClick }) => {
  return (
    <div className="space-y-4">
        {/* Submitted File Info */}
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg border border-slate-100">
                <FileText size={20} className="text-indigo-500" />
            </div>
            <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-slate-500 uppercase">Submitted File</p>
                <p className="text-sm font-bold text-slate-700 truncate">{assign.submittedFile || 'assignment.pdf'}</p>
            </div>
            <CheckCircle size={20} className="text-green-500" />
        </div>

        {/* Plagiarism Alert (if applicable) */}
        {assign.plagiarismFlag && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    Plagiarism Alert
                </div>
                <p className="text-xs text-red-600 font-medium">
                    AI detection flagged potential overlap. Plagiarism Score: {assign.plagiarismScore}%
                </p>
            </div>
        )}

         <button 
             onClick={() => onViewClick(assign)}
             className="w-full py-3 border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors"
         >
             View Submission
         </button>
    </div>
  );
};

export default SubmittedView;
