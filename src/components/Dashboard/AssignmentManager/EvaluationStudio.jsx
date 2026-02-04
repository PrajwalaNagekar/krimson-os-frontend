import React, { useState } from 'react';
import {
    X, Shield, CheckCircle2, AlertCircle,
    MessageSquare, Star, ArrowRight, Save,
    Send, Sparkles, ChevronRight
} from 'lucide-react';

const EvaluationStudio = ({ isOpen, onClose, assignment, student }) => {
    const [scores, setScores] = useState({});
    const [feedback, setFeedback] = useState({
        strengths: '',
        improvements: '',
        nextSteps: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleScoreChange = (criteriaId, level) => {
        setScores(prev => ({ ...prev, [criteriaId]: level }));
    };

    const calculateTotal = () => {
        const values = Object.values(scores);
        if (values.length === 0) return 0;
        const sum = values.reduce((a, b) => a + b, 0);
        return Math.round((sum / (assignment.rubric.criteria.length * 3)) * 100);
    };

    const handleFinalSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="bg-white w-full max-w-6xl h-[90vh] rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col animate-scaleIn">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-50 bg-slate-50/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Evaluation Studio</h3>
                            <p className="text-xs text-slate-400 font-medium">
                                Grading: <span className="text-slate-600 font-bold">{student?.name}</span> • {assignment?.title}
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <div className="flex-1 overflow-hidden flex">
                    {/* Main Scoring Area */}
                    <div className="flex-1 overflow-y-auto p-8 border-r border-slate-50 custom-scrollbar">
                        <section className="mb-10">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
                                    <Star size={16} className="text-yellow-500" />
                                    1. Rubric-Level Assessment
                                </h4>
                                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold border border-blue-200">
                                    Calculated Score: {calculateTotal()}%
                                </div>
                            </div>

                            <div className="space-y-8">
                                {assignment.rubric.criteria.map((crit) => (
                                    <div key={crit.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <p className="text-sm font-bold text-slate-800 mb-4">{crit.name}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {crit.levels.map((lvl) => (
                                                <button
                                                    key={lvl.level}
                                                    onClick={() => handleScoreChange(crit.id, lvl.level)}
                                                    className={`p-4 rounded-2xl border-2 text-left transition-all ${scores[crit.id] === lvl.level
                                                            ? 'border-blue-500 bg-white shadow-md'
                                                            : 'border-white bg-white/50 opacity-60 hover:opacity-100'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase">Level {lvl.level}</span>
                                                        {scores[crit.id] === lvl.level && <CheckCircle2 size={14} className="text-blue-500" />}
                                                    </div>
                                                    <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
                                                        {lvl.descriptor}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2 mb-6">
                                <MessageSquare size={16} className="text-purple-500" />
                                2. Pedagogical Feedback
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Strengths & Key Achievements</label>
                                    <textarea
                                        rows="3"
                                        placeholder="What did the student do well?"
                                        value={feedback.strengths}
                                        onChange={(e) => setFeedback({ ...feedback, strengths: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-purple-400 focus:outline-none transition-all font-medium resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Areas for Improvement</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Specific areas requiring focus..."
                                        value={feedback.improvements}
                                        onChange={(e) => setFeedback({ ...feedback, improvements: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-red-400 focus:outline-none transition-all font-medium resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Next Steps & Intervention</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Actionable steps for the student..."
                                        value={feedback.nextSteps}
                                        onChange={(e) => setFeedback({ ...feedback, nextSteps: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-green-400 focus:outline-none transition-all font-medium resize-none"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Submission Preview Sidebar */}
                    <div className="w-80 bg-slate-50 p-6 flex flex-col">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Submission Files</h4>
                        <div className="space-y-3 mb-8">
                            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                                    <AlertCircle size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-slate-800 truncate">FinalProject.pdf</p>
                                    <p className="text-[10px] text-slate-500 mt-0.5">2.4 MB</p>
                                </div>
                                <button className="text-blue-600">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 bg-purple-100/50 rounded-2xl border border-purple-100">
                            <div className="flex items-center gap-2 text-purple-700 mb-2">
                                <Sparkles size={14} />
                                <span className="text-[10px] font-bold uppercase tracking-wider">AI Insight</span>
                            </div>
                            <p className="text-[10px] text-slate-600 leading-relaxed font-medium italic">
                                "Student has shown consistent growth in Critical Thinking based on previous 3 assignments."
                            </p>
                        </div>

                        <div className="mt-auto space-y-3">
                            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-2">
                                <AlertCircle size={14} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                <p className="text-[10px] text-yellow-700 leading-relaxed font-medium">
                                    <b>Review Policy:</b> All grades are provisional until "Released" to students.
                                </p>
                            </div>
                            <button
                                onClick={handleFinalSubmit}
                                disabled={isSubmitting || Object.keys(scores).length < assignment.rubric.criteria.length}
                                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg shadow-slate-200 flex items-center justify-center gap-2 transition-all hover:bg-slate-800 active:scale-95 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Save size={18} />
                                        Release Grade
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Success Overlay */}
                {isSuccess && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-[200] flex flex-col items-center justify-center animate-fadeIn">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 scale-up">
                            <CheckCircle2 size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Evaluation Saved!</h3>
                        <p className="text-slate-500 font-medium">Student report has been updated successfully.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EvaluationStudio;
