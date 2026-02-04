import React, { useState } from 'react';
import {
    X, Plus, Sparkles, Target,
    HelpCircle, CheckCircle2, Info,
    AlertCircle, ArrowRight, Save
} from 'lucide-react';

const QuestionCreationModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        text: '',
        type: 'mcq',
        difficulty: 'Standard',
        outcome: '',
        bloom: 'Apply',
        options: ['', '', '', ''],
        correctAnswer: '',
        rubric: '',
        points: 1
    });

    const [aiSuggestion, setAiSuggestion] = useState(null);

    const bloomLevels = ['Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'];
    const difficultyLevels = ['Basic', 'Standard', 'Advanced'];

    if (!isOpen) return null;

    const handleAiDraft = () => {
        setAiSuggestion("Generating refined wording...");
        setTimeout(() => {
            setAiSuggestion("Suggested refinement: 'Formulate a step-by-step procedure to isolate the variable x in a linear equation with fractional coefficients.'");
        }, 1000);
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-cyan-100 text-cyan-600 rounded-lg text-[10px] font-black uppercase tracking-widest">Screen 200</span>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Create New Question</h3>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Add to your personal and school library</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-slate-100 text-slate-400 rounded-2xl hover:text-slate-600 hover:bg-slate-200 transition-all shadow-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 space-y-8 flex-1">
                    {/* AI Assistance Banner - Using Theme Gradient */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Sparkles size={80} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h4 className="font-bold flex items-center gap-2 mb-1">
                                    <Sparkles size={18} />
                                    AI2 Writing Assistant
                                </h4>
                                <p className="text-sm opacity-80 font-medium">Draft questions, refine wording, or align with Bloom's Taxonomy automatically.</p>
                            </div>
                            <button
                                onClick={handleAiDraft}
                                className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/30 transition-all flex items-center gap-2 active:scale-95"
                            >
                                Draft with AI
                            </button>
                        </div>
                        {aiSuggestion && (
                            <div className="mt-4 pt-4 border-t border-white/20 animate-in slide-in-from-top-2">
                                <p className="text-sm italic font-medium bg-white/10 p-4 rounded-2xl border border-white/10">{aiSuggestion}</p>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Form */}
                        <div className="space-y-6">
                            {/* Question Text */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Question Content</label>
                                <textarea
                                    placeholder="Enter your question here..."
                                    rows="4"
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-medium text-slate-700 resize-none"
                                    value={formData.text}
                                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                />
                            </div>

                            {/* Type & Difficulty */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Type</label>
                                    <select
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:outline-none font-bold text-slate-700 appearance-none"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="mcq">MCQ</option>
                                        <option value="short">Short Answer</option>
                                        <option value="long">Long Answer</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Difficulty</label>
                                    <select
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:outline-none font-bold text-slate-700 appearance-none"
                                        value={formData.difficulty}
                                        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                                    >
                                        {difficultyLevels.map(l => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Tagging */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1 text-cyan-500">Outcome</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., M9.1.A"
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-bold text-slate-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1 text-blue-500">Bloom's level</label>
                                    <select className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:outline-none font-bold text-slate-700 appearance-none">
                                        {bloomLevels.map(l => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Answers/Rubric */}
                        <div className="space-y-6">
                            {formData.type === 'mcq' ? (
                                <div className="space-y-4">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Options & Correct Answer</label>
                                    <div className="space-y-3">
                                        {formData.options.map((opt, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group">
                                                <button className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-all ${formData.correctAnswer === idx.toString() ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-200 text-slate-300'
                                                    }`} onClick={() => setFormData({ ...formData, correctAnswer: idx.toString() })}>
                                                    {String.fromCharCode(65 + idx)}
                                                </button>
                                                <input
                                                    type="text"
                                                    placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                                                    className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all font-medium text-slate-600"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Correct Answer / Model Response</label>
                                        <textarea
                                            placeholder="What is the expected answer?"
                                            rows="4"
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-emerald-400 focus:outline-none transition-all font-medium text-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Grading Rubric / Points</label>
                                        <textarea
                                            placeholder="Key points to look for..."
                                            rows="3"
                                            className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-3xl focus:border-amber-400 focus:outline-none transition-all font-medium text-slate-700 italic"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-wider bg-white px-3 py-1.5 rounded-full ring-1 ring-slate-100">
                            <Info size={12} className="text-cyan-500" />
                            Auto-saving enabled
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-wider bg-white px-3 py-1.5 rounded-full ring-1 ring-slate-100">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            Outcome mapped
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            onClick={onClose}
                            className="flex-1 md:flex-none px-8 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-black text-xs uppercase hover:bg-slate-50 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => { onSave(); onClose(); }}
                            className="flex-1 md:flex-none px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-black text-xs uppercase shadow-xl shadow-cyan-100 hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            <Save size={18} />
                            Save Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCreationModal;
