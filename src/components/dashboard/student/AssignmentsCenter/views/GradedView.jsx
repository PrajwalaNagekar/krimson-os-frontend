import React from 'react';
import { TrendingUp, AlertTriangle, Unlock, Lock, Info, ChevronUp, ChevronDown, Clock, FileText, Upload } from 'lucide-react';

// GradedView: Renders the content for graded assignments, including mastery data and feedback
const GradedView = ({ 
  assign, 
  masteryData, 
  helpers, 
  expandedDecisions, 
  toggleDecisionExplanation, 
  onHistoryClick,
  setSelectedAssignment,
  setShowHistoryModal
}) => {
  const { getMasteryColor, getMasteryBadge, getConceptTagColor } = helpers;

  // Fallback for when mastery data is not available
  if (!masteryData) {
      return (
        <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                <div>
                    <p className="text-xs font-bold text-green-600 uppercase mb-1">Final Grade</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-green-700">{assign.grade}</span>
                        <span className="text-sm font-bold text-green-500">/ {assign.maxGrade || '100'}</span>
                    </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg border-4 border-white shadow-sm">
                    {assign.grade}
                </div>
            </div>
            
            {assign.teacherFeedback && (
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Teacher Feedback</p>
                    <p className="text-sm text-slate-600 italic leading-relaxed">"{assign.teacherFeedback}"</p>
                </div>
            )}

             <div className="flex flex-col gap-3">
               <button 
                 onClick={() => {
                   setSelectedAssignment(assign);
                   setShowHistoryModal(true);
                 }}
                 className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl text-xs hover:from-cyan-600 hover:via-blue-600 hover:to-pink-600 transition-all shadow-md flex items-center justify-center gap-2"
               >
                 <Clock size={16} />
                 View Reattempted History
               </button>
               
               <div className="grid grid-cols-2 gap-3">
                 <button className="py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                   <FileText size={14} />
                   Download Paper
                 </button>
                 <button className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl text-xs hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md flex items-center justify-center gap-2">
                   <Upload size={14} />
                   Reattempt
                 </button>
               </div>
             </div>
         </div>
      );
  }

  // View with Mastery Data
  return (
    <div className="space-y-4">
        {/* Mastery Score Indicator */}
        <div className={`p-4 border-2 rounded-2xl ${getMasteryColor(masteryData.score)}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} />
              <p className="text-xs font-bold uppercase">Mastery Score</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getMasteryBadge(masteryData.status)}`}>
              {masteryData.status}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold">{masteryData.score}%</span>
            <span className="text-sm font-bold opacity-70">mastery achieved</span>
          </div>
        </div>

        {/* Grade Display */}
        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Final Grade</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-700">{assign.grade}</span>
                    <span className="text-sm font-bold text-slate-400">/ {assign.maxGrade || '100'}</span>
                </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg border-4 border-white shadow-sm">
                {assign.grade}
            </div>
        </div>

        {/* Concept Strength Tags */}
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
          <p className="text-xs font-bold text-slate-500 uppercase mb-3">Concept Mastery</p>
          <div className="flex flex-wrap gap-2">
            {masteryData.concepts.map((concept, idx) => (
              <span 
                key={idx}
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
          <div className="flex gap-4 mt-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1"><span className="text-green-600">● Strong</span></span>
            <span className="flex items-center gap-1"><span className="text-yellow-600">◐ Partial</span></span>
            <span className="flex items-center gap-1"><span className="text-red-600">○ Needs Work</span></span>
          </div>
        </div>

        {/* Next Action Panel */}
        <div className={`p-4 border-2 rounded-2xl ${
          masteryData.canProgress 
            ? 'bg-emerald-50 border-emerald-200' 
            : 'bg-orange-50 border-orange-200'
        }`}>
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${
              masteryData.canProgress 
                ? 'bg-emerald-100' 
                : 'bg-orange-100'
            }`}>
              {masteryData.canProgress ? (
                <Unlock size={20} className="text-emerald-600" />
              ) : (
                <Lock size={20} className="text-orange-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase mb-1 text-slate-600">Next Action</p>
              <p className={`text-sm font-bold ${
                masteryData.canProgress 
                  ? 'text-emerald-700' 
                  : 'text-orange-700'
              }`}>
                {masteryData.nextActionText}
              </p>
            </div>
          </div>

          {/* Remedial Tasks */}
          {masteryData.remedialTasks && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-bold text-orange-700 uppercase">Required Tasks:</p>
              {masteryData.remedialTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                  {task}
                </div>
              ))}
            </div>
          )}

          {/* Reinforcement Task */}
          {masteryData.reinforcementTask && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-bold text-blue-700 mb-1">⚡ Quick Reinforcement</p>
              <p className="text-xs text-blue-600 font-medium">{masteryData.reinforcementTask}</p>
            </div>
          )}

          {/* Teacher Notification */}
          {masteryData.teacherNotified && (
            <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-medium">
              <AlertTriangle size={14} />
              Teacher has been notified for additional support
            </div>
          )}
        </div>

        {/* AI Feedback Section */}
        <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-indigo-100 rounded-lg">
              <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v2H9v-2zm0-6h2v4H9V5z"/>
              </svg>
            </div>
            <p className="text-xs font-bold text-indigo-700 uppercase">✨ AI Feedback</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs font-bold text-green-700 mb-1">✓ What you did well:</p>
              <p className="text-xs text-slate-700 leading-relaxed">{masteryData.feedback.wellDone}</p>
            </div>
            
            <div>
              <p className="text-xs font-bold text-orange-700 mb-1">⚠ Areas for improvement:</p>
              <p className="text-xs text-slate-700 leading-relaxed">{masteryData.feedback.improve}</p>
            </div>
            
            <div>
              <p className="text-xs font-bold text-blue-700 mb-1">→ Next Steps:</p>
              <p className="text-xs text-slate-700 leading-relaxed">{masteryData.feedback.nextSteps}</p>
            </div>
          </div>
        </div>

        {/* Why This Decision? - Expandable */}
        <button
          onClick={() => toggleDecisionExplanation(assign.id)}
          className="w-full p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700">
              <Info size={16} />
              <span className="text-xs font-bold">Why this decision?</span>
            </div>
            {expandedDecisions[assign.id] ? (
              <ChevronUp size={16} className="text-slate-500" />
            ) : (
              <ChevronDown size={16} className="text-slate-500" />
            )}
          </div>
          
          {expandedDecisions[assign.id] && (
            <div className="mt-3 pt-3 border-t border-slate-200 text-left">
              <p className="text-xs text-slate-600 leading-relaxed">
                {masteryData.feedback.reason}
              </p>
              <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-slate-500 mb-2">Decision Logic:</p>
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    Mastery score: {masteryData.score}%
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    Category: {masteryData.status}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    Action: {masteryData.nextAction === 'advance' ? 'Unlock next assignment' : 
                             masteryData.nextAction === 'reinforcement' ? 'Light reinforcement required' :
                             masteryData.nextAction === 'remedial' ? 'Targeted remediation' : 'Full remediation + teacher notification'}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    Progress status: {masteryData.canProgress ? 'Unlocked' : 'Blocked until mastery ≥ 60%'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </button>
        
        {/* Teacher Feedback (if available) */}
        {assign.teacherFeedback && (
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">👨‍🏫 Teacher Feedback</p>
                <p className="text-sm text-slate-600 italic leading-relaxed">"{assign.teacherFeedback}"</p>
            </div>
        )}

         <div className="flex flex-col gap-3">
           <button 
             onClick={() => {
               setSelectedAssignment(assign);
               setShowHistoryModal(true);
             }}
             className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl text-xs hover:from-cyan-600 hover:via-blue-600 hover:to-pink-600 transition-all shadow-md flex items-center justify-center gap-2"
           >
             <Clock size={16} />
             View Reattempted History
           </button>
           
           <div className="grid grid-cols-2 gap-3">
             <button className="py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
               <FileText size={14} />
               Download Paper
             </button>
             <button className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl text-xs hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md flex items-center justify-center gap-2">
               <Upload size={14} />
               Reattempt
             </button>
           </div>
         </div>
    </div>
  );
};

export default GradedView;
