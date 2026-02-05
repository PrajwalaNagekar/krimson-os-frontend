import React from 'react';
import { XCircle, FileText, Target, CheckCircle, AlertCircle, Download } from 'lucide-react';

// AssignmentDetailModal: Shows comprehensive assignment details, rubric, and submission instructions
const AssignmentDetailModal = ({ show, onClose, assignment }) => {
  if (!show || !assignment) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 border-b border-white/20 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <FileText size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{assignment.title}</h3>
              </div>
              <p className="text-sm text-white/90 font-medium">{assignment.subject}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            >
              <XCircle size={24} className="text-white/80 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Task Description */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-indigo-100 rounded-lg">
                <FileText size={16} className="text-indigo-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-700 uppercase">Task Description</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {assignment.description || "Complete the assigned tasks following the guidelines provided. Ensure all requirements are met before submission."}
            </p>
          </div>

          {/* Success Criteria */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-emerald-100 rounded-lg">
                <Target size={16} className="text-emerald-600" />
              </div>
              <h4 className="text-sm font-bold text-emerald-700 uppercase">Success Criteria</h4>
            </div>
            <div className="space-y-3">
              {(assignment.successCriteria || [
                "All questions answered with clear explanations",
                "Work shown for mathematical problems",
                "Proper citation of sources",
                "Neat and organized presentation"
              ]).map((criteria, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-medium">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rubric - Enhanced with Plain Language Descriptors */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-blue-700 uppercase">Grading Rubric</h4>
            </div>
            <p className="text-xs text-blue-600 mb-4 font-medium">
              This rubric shows how your work will be assessed. Focus on the improvement areas to maximize your score.
            </p>
            <div className="space-y-4">
              {(assignment.rubric || [
                { 
                  category: "Content Accuracy", 
                  weight: "40%", 
                  description: "Correctness and depth of answers",
                  plainLanguage: "Your answers should be correct and show deep understanding of the topic.",
                  improvementTip: "Double-check your facts, provide examples, and explain your reasoning clearly."
                },
                { 
                  category: "Presentation", 
                  weight: "25%", 
                  description: "Organization and clarity",
                  plainLanguage: "Your work should be well-organized, easy to read, and professionally presented.",
                  improvementTip: "Use headings, bullet points, and proper formatting. Check for spelling and grammar errors."
                },
                { 
                  category: "Critical Thinking", 
                  weight: "25%", 
                  description: "Analysis and reasoning",
                  plainLanguage: "Show that you can analyze information and think critically about the subject.",
                  improvementTip: "Don't just describe - explain why and how. Make connections between ideas."
                },
                { 
                  category: "Timeliness", 
                  weight: "10%", 
                  description: "Submitted on time",
                  plainLanguage: "Submit your assignment before the deadline.",
                  improvementTip: "Plan your time wisely. Aim to finish early so you can review your work."
                }
              ]).map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border-2 border-blue-100 hover:border-blue-300 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-slate-800">{item.category}</p>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-lg text-xs font-bold">
                      {item.weight}
                    </span>
                  </div>
                  
                  {/* Plain Language Description */}
                  <div className="mb-3 p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200">
                    <p className="text-xs font-bold text-slate-600 mb-1 uppercase">What this means:</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.plainLanguage || item.description}
                    </p>
                  </div>

                  {/* Improvement Tip */}
                  {item.improvementTip && (
                    <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-amber-700 mb-1">How to improve:</p>
                          <p className="text-xs text-amber-700 leading-relaxed">
                            {item.improvementTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submission Instructions */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <AlertCircle size={16} className="text-orange-600" />
              </div>
              <h4 className="text-sm font-bold text-orange-700 uppercase">Submission Instructions</h4>
            </div>
            <div className="space-y-3">
              {(assignment.submissionInstructions || [
                "Use the 'Upload File' button to submit your work",
                "Accepted formats: PDF, DOC, DOCX, JPG, PNG",
                "Maximum file size: 10 MB",
                "You can save drafts before final submission",
                "Check your work before submitting - limited reattempts may apply"
              ]).map((instruction, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-700">{idx + 1}</span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{instruction}</p>
                </div>
              ))}
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
              Download Assignment
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

export default AssignmentDetailModal;
