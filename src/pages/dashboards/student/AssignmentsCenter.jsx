import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Upload, FileText, CheckCircle, Clock, XCircle, TrendingUp, AlertTriangle, Info, ChevronDown, ChevronUp, Lock, Unlock, Microscope, Target } from 'lucide-react';

const AssignmentsCenter = () => {
  const [tab, setTab] = useState('Pending');
  const [scanningId, setScanningId] = useState(null);
  const [scanResults, setScanResults] = useState({}); // { id: { score: 12, flagged: true } }
  const [expandedDecisions, setExpandedDecisions] = useState({});
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const { assignments, masteryData, assignmentHistory, conceptWeaknessAnalysis } = STUDENT_DATA;
  
  // Mock AI Mastery Data - In production, this would come from backend AI analysis


  // Mock Assignment History - Previous Attempts with AI Feedback


  // Add Detailed Concept Weakness Analysis (Mock)


  // Get unique subjects for filter
  const uniqueSubjects = ['All', ...new Set(assignments.map(a => a.subject))];

  // Filter logic - by status and subject
  const displayedAssignments = assignments.filter(a => {
      const statusMatch = tab === 'Pending' 
        ? (a.status === 'Pending' || a.status === 'In Progress')
        : a.status === tab;
      
      const subjectMatch = selectedSubject === 'All' || a.subject === selectedSubject;
      
      return statusMatch && subjectMatch;
  });

  const getDeadlineColor = (days) => {
      if (days <= 1) return 'text-red-500 bg-red-50 border-red-100';
      if (days <= 3) return 'text-orange-500 bg-orange-50 border-orange-100';
      return 'text-green-600 bg-green-50 border-green-100';
  };

  const getMasteryColor = (score) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 75) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getMasteryBadge = (status) => {
    const badges = {
      'Mastered': 'bg-emerald-500 text-white',
      'Strong Pass': 'bg-green-500 text-white',
      'Pass': 'bg-blue-500 text-white',
      'Weak': 'bg-orange-500 text-white',
      'Not Mastered': 'bg-red-500 text-white'
    };
    return badges[status] || 'bg-gray-500 text-white';
  };

  const getConceptTagColor = (strength) => {
    const colors = {
      'strong': 'bg-green-100 text-green-700 border-green-300',
      'partial': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'weak': 'bg-red-100 text-red-700 border-red-300'
    };
    return colors[strength] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const handleScan = (id) => {
      setScanningId(id);
      setTimeout(() => {
          setScanningId(null);
          setScanResults(prev => ({
              ...prev,
              [id]: { score: Math.floor(Math.random() * 15), flagged: true }
          }));
      }, 2000);
  };

  const toggleDecisionExplanation = (id) => {
    setExpandedDecisions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      {/* Header Section */}
      <div className="flex flex-col gap-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-lg border-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Homework & Assignments</h2>
            <p className="text-sm text-white/90 font-semibold mt-2">✨ AI-powered mastery tracking • Adaptive learning paths • Personalized feedback</p>
          </div>
          
          {/* Subject Filter */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-white/90 uppercase">Filter by Subject:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 bg-white/10 border-2 border-white/30 rounded-xl text-sm font-bold text-white hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer backdrop-blur-md [&>option]:text-slate-700"
            >
              {uniqueSubjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Tab Selector */}
        <div className="flex bg-white/20 p-1.5 rounded-xl w-full md:w-auto backdrop-blur-md border border-white/10">
          {['Pending', 'Submitted', 'Graded'].map(t => (
            <button 
              key={t} 
              onClick={() => setTab(t)}
              className={`flex-1 md:flex-none px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${tab === t ? 'bg-white text-blue-600 shadow-lg scale-105' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
         {displayedAssignments.map(assign => (
            <div key={assign.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
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

               {/* PENDING VIEW */}
               {(tab === 'Pending') && (
                  <div className="space-y-4">
                     <div className={`flex items-center gap-3 p-3 rounded-xl border ${getDeadlineColor(assign.daysLeft)}`}>
                        <Clock size={18} />
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase opacity-80">Deadline</p>
                            <p className="text-sm font-bold">{assign.dueDate} ({assign.daysLeft <= 0 ? 'Today' : `${assign.daysLeft} days left`})</p>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                            <span>Progress</span>
                            <span>{assign.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${assign.progress}%` }}></div>
                        </div>
                     </div>
                     
                     {/* AI Plagiarism Check Mockup */}
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

                     <div className="flex gap-3 pt-2">
                        <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors">
                           <Upload size={16}/> Upload File
                        </button>
                        <button className="px-5 py-3 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors">Details</button>
                     </div>
                  </div>
               )}

               {/* SUBMITTED VIEW */}
               {tab === 'Submitted' && (
                   <div className="space-y-4">
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

                        <button className="w-full py-3 border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors">
                            View Submission
                        </button>
                   </div>
               )}

               {/* GRADED VIEW - Enhanced with AI Mastery System */}
               {tab === 'Graded' && masteryData[assign.id] && (
                   <div className="space-y-4">
                       {/* Mastery Score Indicator */}
                       <div className={`p-4 border-2 rounded-2xl ${getMasteryColor(masteryData[assign.id].score)}`}>
                         <div className="flex items-center justify-between mb-3">
                           <div className="flex items-center gap-2">
                             <TrendingUp size={20} />
                             <p className="text-xs font-bold uppercase">Mastery Score</p>
                           </div>
                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${getMasteryBadge(masteryData[assign.id].status)}`}>
                             {masteryData[assign.id].status}
                           </span>
                         </div>
                         <div className="flex items-baseline gap-2">
                           <span className="text-4xl font-extrabold">{masteryData[assign.id].score}%</span>
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
                           {masteryData[assign.id].concepts.map((concept, idx) => (
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
                         masteryData[assign.id].canProgress 
                           ? 'bg-emerald-50 border-emerald-200' 
                           : 'bg-orange-50 border-orange-200'
                       }`}>
                         <div className="flex items-start gap-3">
                           <div className={`p-2 rounded-lg ${
                             masteryData[assign.id].canProgress 
                               ? 'bg-emerald-100' 
                               : 'bg-orange-100'
                           }`}>
                             {masteryData[assign.id].canProgress ? (
                               <Unlock size={20} className="text-emerald-600" />
                             ) : (
                               <Lock size={20} className="text-orange-600" />
                             )}
                           </div>
                           <div className="flex-1">
                             <p className="text-xs font-bold uppercase mb-1 text-slate-600">Next Action</p>
                             <p className={`text-sm font-bold ${
                               masteryData[assign.id].canProgress 
                                 ? 'text-emerald-700' 
                                 : 'text-orange-700'
                             }`}>
                               {masteryData[assign.id].nextActionText}
                             </p>
                           </div>
                         </div>

                         {/* Remedial Tasks */}
                         {masteryData[assign.id].remedialTasks && (
                           <div className="mt-4 space-y-2">
                             <p className="text-xs font-bold text-orange-700 uppercase">Required Tasks:</p>
                             {masteryData[assign.id].remedialTasks.map((task, idx) => (
                               <div key={idx} className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                 {task}
                               </div>
                             ))}
                           </div>
                         )}

                         {/* Reinforcement Task */}
                         {masteryData[assign.id].reinforcementTask && (
                           <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                             <p className="text-xs font-bold text-blue-700 mb-1">⚡ Quick Reinforcement</p>
                             <p className="text-xs text-blue-600 font-medium">{masteryData[assign.id].reinforcementTask}</p>
                           </div>
                         )}

                         {/* Teacher Notification */}
                         {masteryData[assign.id].teacherNotified && (
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
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.wellDone}</p>
                           </div>
                           
                           <div>
                             <p className="text-xs font-bold text-orange-700 mb-1">⚠ Areas for improvement:</p>
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.improve}</p>
                           </div>
                           
                           <div>
                             <p className="text-xs font-bold text-blue-700 mb-1">→ Next Steps:</p>
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.nextSteps}</p>
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
                               {masteryData[assign.id].feedback.reason}
                             </p>
                             <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                               <p className="text-xs font-bold text-slate-500 mb-2">Decision Logic:</p>
                               <div className="space-y-1 text-xs text-slate-600">
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Mastery score: {masteryData[assign.id].score}%
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Category: {masteryData[assign.id].status}
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Action: {masteryData[assign.id].nextAction === 'advance' ? 'Unlock next assignment' : 
                                            masteryData[assign.id].nextAction === 'reinforcement' ? 'Light reinforcement required' :
                                            masteryData[assign.id].nextAction === 'remedial' ? 'Targeted remediation' : 'Full remediation + teacher notification'}
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Progress status: {masteryData[assign.id].canProgress ? 'Unlocked' : 'Blocked until mastery ≥ 60%'}
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
               )}

               {/* Fallback Graded View (if no mastery data) */}
               {tab === 'Graded' && !masteryData[assign.id] && (
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
                )}

            </div>
         ))}
      </div>

       {/* Assignment History Modal */}
       {showHistoryModal && selectedAssignment && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setShowHistoryModal(false)}>
           <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" onClick={(e) => e.stopPropagation()}>
             <div className="sticky top-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 border-b border-white/20">
               <div className="flex items-center justify-between">
                 <div>
                   <h3 className="text-2xl font-bold text-white">Reattempt History</h3>
                   <p className="text-sm text-white/90 mt-1">{selectedAssignment.title}</p>
                 </div>
                 <button 
                   onClick={() => setShowHistoryModal(false)}
                   className="p-2 hover:bg-white/20 rounded-full transition-colors"
                 >
                   <XCircle size={24} className="text-white/80 hover:text-white" />
                 </button>
               </div>
             </div>

             <div className="p-6 space-y-4">
               {assignmentHistory[selectedAssignment.id] ? (
                 assignmentHistory[selectedAssignment.id].map((attempt, idx) => (
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
                 onClick={() => setShowHistoryModal(false)}
                 className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all shadow-md transform active:scale-95"
               >
                 Close
               </button>
             </div>
           </div>
         </div>
       )}
    </div>
  );
};

export default AssignmentsCenter;
