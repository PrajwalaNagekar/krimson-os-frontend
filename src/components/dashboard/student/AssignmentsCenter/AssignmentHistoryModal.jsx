import React from 'react';
import { XCircle, Target, Microscope, FileText, Info } from 'lucide-react';

// AssignmentHistoryModal: Renders a modal showing the reattempt history of a selected assignment
const AssignmentHistoryModal = ({ 
  show, 
  onClose, 
  selectedAssignment, 
  assignmentHistory,
  helpers
}) => {
  if (!show || !selectedAssignment) return null;

  const { getMasteryBadge, getConceptTagColor } = helpers;
  const history = assignmentHistory[selectedAssignment.id];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Reattempt History</h3>
              <p className="text-sm text-white/90 mt-1">{selectedAssignment.title}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <XCircle size={24} className="text-white/80 hover:text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {history ? (
            history.map((attempt, idx) => (
              <div 
                key={idx}
                className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl hover:shadow-md transition-all"
              >
                {/* Attempt Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Target size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-800">Attempt #{attempt.attemptNumber}</p>
                      <p className="text-xs text-slate-500 font-medium">{attempt.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getMasteryBadge(attempt.status)}`}>
                    {attempt.status}
                  </span>
                </div>

                {/* Mastery Score */}
                <div className="mb-4 p-4 bg-white rounded-xl border-2 border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Mastery Score</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-extrabold text-slate-700">{attempt.masteryScore}%</p>
                    <span className="text-sm font-medium text-slate-500">achieved</span>
                  </div>
                </div>

                {/* Concept Mastery */}
                <div className="mb-4 p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-3">Concept Analysis</p>
                  <div className="flex flex-wrap gap-2">
                    {attempt.concepts.map((concept, cidx) => (
                      <span 
                        key={cidx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${getConceptTagColor(concept.strength)}`}
                      >
                        {concept.name}
                        <span className="ml-1.5">
                          {concept.strength === 'strong' && '●'}
                          {concept.strength === 'partial' && '◐'}
                          {concept.strength === 'weak' && '○'}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Feedback */}
                <div className="mb-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1 bg-indigo-100 rounded">
                      <Microscope size={14} className="text-indigo-600" />
                    </div>
                    <p className="text-xs font-bold text-indigo-700 uppercase">✨ AI Feedback</p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-bold text-green-700 mb-1">✓ Strengths:</p>
                      <p className="text-xs text-slate-700">{attempt.feedback.strengths}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-orange-700 mb-1">⚠ Areas for Improvement:</p>
                      <p className="text-xs text-slate-700">{attempt.feedback.improvements}</p>
                    </div>
                  </div>
                </div>

                {/* View My Responses Button */}
                {attempt.hasResponses && (
                  <button className="w-full py-2.5 bg-white border-2 border-indigo-200 text-indigo-600 font-bold rounded-xl text-xs hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                    <FileText size={14} />
                    View My Responses
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info size={32} className="text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium">No previous attempts found</p>
              <p className="text-sm text-slate-400 mt-1">This is your first submission</p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white p-6 border-t border-slate-200">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all shadow-md transform active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentHistoryModal;
