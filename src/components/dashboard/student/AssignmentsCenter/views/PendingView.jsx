import React from 'react';
import { Clock, Upload, XCircle, CheckCircle } from 'lucide-react';

// PendingView: Renders the content for assignments that are pending or in progress
const PendingView = ({ 
  assign, 
  helpers, 
  scanningId, 
  scanResults, 
  handleScan,
  onUploadClick,
  onDetailsClick
}) => {
  const { getDeadlineColor } = helpers;

  return (
    <div className="space-y-4">
       {/* Deadline Indicator */}
       <div className={`flex items-center gap-3 p-3 rounded-xl border ${getDeadlineColor(assign.daysLeft)}`}>
          <Clock size={18} />
          <div className="flex-1">
              <p className="text-xs font-bold uppercase opacity-80">Deadline</p>
              <p className="text-sm font-bold">{assign.dueDate} ({assign.daysLeft <= 0 ? 'Today' : `${assign.daysLeft} days left`})</p>
          </div>
       </div>

       {/* Progress Bar */}
       <div>
          <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Progress</span>
              <span>{assign.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${assign.progress}%` }}></div>
          </div>
       </div>
       
       {/* AI Plagiarism Check Mockup - Only for 'In Progress' assignments */}
       {assign.status === 'In Progress' && (
           <div className="mt-2">
               {scanningId === assign.id ? (
                  <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center gap-2 text-indigo-600 font-bold text-xs animate-pulse">
                      <div className="w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                      AI Scanning content...
                  </div>
               ) : scanResults[assign.id] ? (
                  <div className={`p-3 border rounded-xl flex items-center gap-2 text-xs font-bold ${scanResults[assign.id].score > 10 ? 'bg-red-50 border-red-100 text-red-600' : 'bg-green-50 border-green-100 text-green-600'}`}>
                      {scanResults[assign.id].score > 10 ? <XCircle size={14}/> : <CheckCircle size={14}/>}
                      AI Check: {scanResults[assign.id].score}% Plagiarism Detected
                  </div>
               ) : (
                  <button 
                      onClick={() => handleScan(assign.id)}
                      className="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 border border-purple-100 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                      ✨ Run AI Plagiarism Check
                  </button>
               )}
           </div>
       )}

       {/* Action Buttons */}
       <div className="flex gap-3 pt-2">
          <button 
            onClick={() => onUploadClick(assign)}
            className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl text-xs hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center gap-2 transition-all shadow-md"
          >
             <Upload size={16}/> Upload File
          </button>
          <button 
            onClick={() => onDetailsClick(assign)}
            className="px-5 py-3 border-2 border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            Details
          </button>
       </div>
    </div>
  );
};

export default PendingView;
