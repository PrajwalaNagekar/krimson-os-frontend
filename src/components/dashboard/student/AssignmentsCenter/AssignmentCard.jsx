import React from 'react';
import { Clock } from 'lucide-react';
import PendingView from './views/PendingView';
import SubmittedView from './views/SubmittedView';
import GradedView from './views/GradedView';

// AssignmentCard: Renders the card for a single assignment, switching views based on the current tab
const AssignmentCard = ({ 
  assign, 
  tab, 
  masteryData, 
  scanningId, 
  scanResults, 
  handleScan, 
  expandedDecisions, 
  toggleDecisionExplanation,
  setSelectedAssignment,
  setShowHistoryModal,
  helpers,
  onUploadClick,
  onDetailsClick
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
       <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${
             assign.status.includes('Pending') || assign.status === 'In Progress' ? 'bg-orange-50 text-orange-600 border-orange-100' :
             assign.status === 'Submitted' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'
          }`}>
             {assign.type || 'Assignment'}
          </span>
          {assign.dueDate !== 'Today' && assign.dueDate !== 'Tomorrow' && (
               <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                   <Clock size={12}/> {assign.dueDate}
               </div>
          )}
       </div>

       <h3 className="text-xl font-bold text-slate-800 mb-2">{assign.title}</h3>
       <p className="text-sm font-semibold text-slate-500 mb-6">{assign.subject}</p>

       {/* Render View Based on Tab */}
       {(tab === 'Pending') && (
          <PendingView 
            assign={assign} 
            helpers={helpers}
            scanningId={scanningId}
            scanResults={scanResults}
            handleScan={handleScan}
            onUploadClick={onUploadClick}
            onDetailsClick={onDetailsClick}
          />
       )}

       {(tab === 'Submitted') && (
          <SubmittedView 
            assign={assign} 
            onViewClick={helpers?.onViewSubmissionClick}
          />
       )}

       {tab === 'Graded' && (
          <GradedView 
            assign={assign}
            masteryData={masteryData}
            helpers={helpers}
            expandedDecisions={expandedDecisions}
            toggleDecisionExplanation={toggleDecisionExplanation}
            setSelectedAssignment={setSelectedAssignment}
            setShowHistoryModal={setShowHistoryModal}
          />
       )}
    </div>
  );
};

export default AssignmentCard;
