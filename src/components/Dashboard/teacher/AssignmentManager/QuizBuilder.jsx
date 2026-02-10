import React, { useState } from 'react';
import {
    Plus, HelpCircle, Clock, Zap, Target,
    BookOpen, Sparkles, Filter, Database,
    ChevronDown, Trash2, Edit, CheckCircle2,
    Settings, AlertTriangle, Shield, List, X,
    LayoutGrid, ChevronRight, Layers
} from 'lucide-react';

const QuizBuilder = () => {
    const [quizData, setQuizData] = useState({
        title: '',
        purpose: 'Formative',
        grade: 'Grade 10',
        classSection: 'Section A',
        subject: 'Biology',
        topic: '',
        totalMarks: 0,
        timeLimit: 30,
        attempts: 1,
        scoringLogic: 'best', // 'best' or 'latest'
        openDate: '',
        openTime: '',
        closeDate: '',
        closeTime: '',
        randomizeQuestions: true,
        randomizeOptions: true,
        randomizeSections: false,
        useSections: false,
        sections: [
            {
                id: Date.now(),
                name: 'Section 1',
                timeLimit: 0,
                questions: []
            }
        ]
    });

    const [showTypeDropdown, setShowTypeDropdown] = useState(null); // sectionId
    const [activeTypeSwitcher, setActiveTypeSwitcher] = useState(null); // questionId

    const QUESTION_TYPES = [
        { id: 'mcq', label: 'MCQ', icon: <CheckCircle2 size={16} /> },
        { id: 'short', label: 'Short Answer', icon: <List size={16} /> },
        { id: 'long', label: 'Long Answer', icon: <BookOpen size={16} /> }
    ];

    const handlePurposeChange = (purpose) => {
        let updates = { purpose };
        if (purpose === 'Summative') {
            updates.attempts = 1;
        }
        setQuizData(prev => ({ ...prev, ...updates }));
    };

    const addSection = () => {
        const newSection = {
            id: Date.now(),
            name: `Section ${quizData.sections.length + 1}`,
            timeLimit: 0,
            questions: []
        };
        setQuizData(prev => ({
            ...prev,
            sections: [...prev.sections, newSection]
        }));
    };

    const removeSection = (sectionId) => {
        if (quizData.sections.length === 1) return;
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.filter(s => s.id !== sectionId)
        }));
    };

    const updateSection = (sectionId, updates) => {
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === sectionId ? { ...s, ...updates } : s)
        }));
    };

    const addQuestion = (sectionId, type) => {
        const newQuestion = {
            id: Date.now(),
            type,
            text: '',
            marks: 1,
            options: type === 'mcq' ? ['', '', '', ''] : null,
            correctAnswer: '',
            rubric: type === 'long' ? [] : null,
            randomizeOptions: true
        };
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === sectionId
                    ? { ...s, questions: [...s.questions, newQuestion] }
                    : s
            )
        }));
    };

    const removeQuestion = (sectionId, questionId) => {
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === sectionId
                    ? { ...s, questions: s.questions.filter(q => q.id !== questionId) }
                    : s
            )
        }));
    };

    const updateQuestion = (sectionId, questionId, updates) => {
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === sectionId
                    ? { ...s, questions: s.questions.map(q => q.id === questionId ? { ...q, ...updates } : q) }
                    : s
            )
        }));
    };

    const updateMCQOption = (sectionId, qId, optIdx, val) => {
        setQuizData(prev => ({
            ...prev,
            sections: prev.sections.map(s => {
                if (s.id === sectionId) {
                    return {
                        ...s,
                        questions: s.questions.map(q => {
                            if (q.id === qId) {
                                const newOptions = [...q.options];
                                newOptions[optIdx] = val;
                                return { ...q, options: newOptions };
                            }
                            return q;
                        })
                    }
                }
                return s;
            })
        }));
    };

    const totalQuestions = quizData.sections.reduce((acc, s) => acc + s.questions.length, 0);
    const calculatedTotalMarks = quizData.sections.reduce((acc, s) =>
        acc + s.questions.reduce((qAcc, q) => qAcc + (q.marks || 0), 0)
        , 0);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Header / Quiz Basics */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Quiz Title</label>
                            <input
                                type="text"
                                value={quizData.title}
                                onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
                                placeholder="e.g., Photosynthesis Mastery Check"
                                className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-400 focus:bg-white rounded-2xl text-lg font-bold transition-all outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Grade</label>
                                <select
                                    value={quizData.grade}
                                    onChange={(e) => setQuizData({ ...quizData, grade: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 focus:bg-white rounded-xl text-sm font-bold transition-all outline-none"
                                >
                                    {['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(g => (
                                        <option key={g} value={g}>{g}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Class/Section</label>
                                <select
                                    value={quizData.classSection}
                                    onChange={(e) => setQuizData({ ...quizData, classSection: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 focus:bg-white rounded-xl text-sm font-bold transition-all outline-none"
                                >
                                    {['Section A', 'Section B', 'Section C', 'Combined'].map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Topic/Chapter</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                    <input
                                        type="text"
                                        value={quizData.topic}
                                        onChange={(e) => setQuizData({ ...quizData, topic: e.target.value })}
                                        placeholder="e.g. Unit 4: Genetics"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 focus:bg-white rounded-xl text-sm font-bold transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Purpose/Intent</label>
                                <div className="flex p-1 bg-slate-100 rounded-xl overflow-hidden">
                                    {['Diagnostic', 'Formative', 'Summative'].map(p => (
                                        <button
                                            key={p}
                                            onClick={() => handlePurposeChange(p)}
                                            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${quizData.purpose === p ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[9px] text-slate-400 font-medium px-1">
                                    {quizData.purpose === 'Diagnostic' && "Flexible window, multi-attempt allowed."}
                                    {quizData.purpose === 'Formative' && "Scheduled learning check, allows practice."}
                                    {quizData.purpose === 'Summative' && "Strict evaluation: Fixed window & single attempt."}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center pl-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Total Marks</label>
                                    <span className="text-[10px] font-black text-blue-500">Sum: {calculatedTotalMarks}</span>
                                </div>
                                <div className="relative">
                                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input
                                        type="number"
                                        value={quizData.totalMarks}
                                        onChange={(e) => setQuizData({ ...quizData, totalMarks: parseInt(e.target.value) || 0 })}
                                        className="w-full pl-12 pr-6 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 focus:bg-white rounded-xl text-sm font-bold transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-80 space-y-4">
                        <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                            <h4 className="font-bold text-sm mb-4 flex items-center gap-2 relative z-10">
                                <Settings size={16} className="text-blue-400" />
                                Behavior & Constraints
                            </h4>
                            <div className="space-y-4 relative z-10">
                                <div className="space-y-3 p-3 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Availability Window</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-bold opacity-50 uppercase">Opens</span>
                                            <input type="date" value={quizData.openDate} onChange={(e) => setQuizData({ ...quizData, openDate: e.target.value })} className="w-full bg-white/10 border-none rounded-lg p-2 text-[10px] outline-none focus:ring-1 ring-blue-500" />
                                            <input type="time" value={quizData.openTime} onChange={(e) => setQuizData({ ...quizData, openTime: e.target.value })} className="w-full bg-white/10 border-none rounded-lg p-2 text-[10px] outline-none focus:ring-1 ring-blue-500" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-bold opacity-50 uppercase">Closes</span>
                                            <input type="date" value={quizData.closeDate} onChange={(e) => setQuizData({ ...quizData, closeDate: e.target.value })} className="w-full bg-white/10 border-none rounded-lg p-2 text-[10px] outline-none focus:ring-1 ring-blue-500" />
                                            <input type="time" value={quizData.closeTime} onChange={(e) => setQuizData({ ...quizData, closeTime: e.target.value })} className="w-full bg-white/10 border-none rounded-lg p-2 text-[10px] outline-none focus:ring-1 ring-blue-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] font-bold opacity-70 uppercase">Attempts</span>
                                        </div>
                                        <input
                                            type="number"
                                            disabled={quizData.purpose === 'Summative'}
                                            value={quizData.attempts}
                                            onChange={(e) => setQuizData({ ...quizData, attempts: parseInt(e.target.value) || 1 })}
                                            className={`w-12 bg-white/10 rounded-lg px-2 py-1 text-xs font-bold text-center outline-none focus:ring-2 ring-blue-500 ${quizData.purpose === 'Summative' ? 'opacity-50' : ''}`}
                                        />
                                    </div>
                                    {quizData.attempts > 1 && (
                                        <div className="flex items-center justify-between animate-in slide-in-from-top-2">
                                            <span className="text-[9px] font-bold opacity-60 uppercase">Scoring</span>
                                            <select
                                                value={quizData.scoringLogic}
                                                onChange={(e) => setQuizData({ ...quizData, scoringLogic: e.target.value })}
                                                className="bg-white/10 border-none rounded-lg px-2 py-1 text-[10px] font-bold outline-none"
                                            >
                                                <option value="best" className="text-slate-900">Best Score</option>
                                                <option value="latest" className="text-slate-900">Latest Score</option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Time Limit (Min)</span>
                                    <input
                                        type="number"
                                        value={quizData.timeLimit}
                                        onChange={(e) => setQuizData({ ...quizData, timeLimit: parseInt(e.target.value) || 0 })}
                                        className="w-16 bg-white/10 rounded-lg px-2 py-1 text-xs font-bold text-center outline-none focus:ring-2 ring-blue-500"
                                    />
                                </div>

                                <div className="space-y-2 border-t border-white/5 pt-3 mt-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold opacity-70 uppercase">Randomize Qs</span>
                                        <button
                                            onClick={() => setQuizData({ ...quizData, randomizeQuestions: !quizData.randomizeQuestions })}
                                            className={`w-10 h-6 rounded-full relative transition-all ${quizData.randomizeQuestions ? 'bg-blue-500' : 'bg-slate-700'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizData.randomizeQuestions ? 'right-1' : 'left-1'}`} />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-2">
                                        <span className="text-[10px] font-bold opacity-70 uppercase">Enable Sections</span>
                                        <button
                                            onClick={() => setQuizData({ ...quizData, useSections: !quizData.useSections })}
                                            className={`w-10 h-6 rounded-full relative transition-all ${quizData.useSections ? 'bg-blue-500' : 'bg-slate-700'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizData.useSections ? 'right-1' : 'left-1'}`} />
                                        </button>
                                    </div>
                                    {quizData.useSections && (
                                        <div className="flex items-center justify-between animate-in slide-in-from-top-1 pl-2 border-l border-white/10">
                                            <span className="text-[10px] font-bold opacity-70 uppercase">Randomize Sections</span>
                                            <button
                                                onClick={() => setQuizData({ ...quizData, randomizeSections: !quizData.randomizeSections })}
                                                className={`w-10 h-6 rounded-full relative transition-all ${quizData.randomizeSections ? 'bg-blue-500' : 'bg-slate-700'}`}
                                            >
                                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizData.randomizeSections ? 'right-1' : 'left-1'}`} />
                                            </button>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold opacity-70 uppercase">Randomize Options</span>
                                        <button
                                            onClick={() => setQuizData({ ...quizData, randomizeOptions: !quizData.randomizeOptions })}
                                            className={`w-10 h-6 rounded-full relative transition-all ${quizData.randomizeOptions ? 'bg-blue-500' : 'bg-slate-700'}`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${quizData.randomizeOptions ? 'right-1' : 'left-1'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Suggestion Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
                    <Sparkles size={120} />
                </div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl ring-4 ring-white/10">
                        <Zap size={28} className="text-yellow-300" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-1">AI2 - Question Drafter</h4>
                        <p className="text-xs opacity-90 max-w-xl">
                            Based on your title, AI2 can suggest 5 high-quality MCQs aligned with Bloom's Taxonomy.
                        </p>
                    </div>
                    <button className="ml-auto px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-xs hover:scale-105 transition-all shadow-lg active:scale-95">
                        Suggest Questions
                    </button>
                </div>
            </div>

            {/* Sections & Questions Builder */}
            <div className="space-y-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">Assessment Structure</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Total: {totalQuestions} Questions {quizData.useSections ? `in ${quizData.sections.length} Sections` : ''}</p>
                    </div>
                    {quizData.useSections && (
                        <button
                            onClick={addSection}
                            className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-50 hover:border-blue-100 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm active:scale-95 animate-in zoom-in-95"
                        >
                            <Layers size={16} />
                            Add Section
                        </button>
                    )}
                </div>

                <div className="space-y-12">
                    {quizData.sections.map((section, sIdx) => (
                        <div key={section.id} className={`relative animate-in slide-in-from-bottom-4 ${!quizData.useSections && sIdx > 0 ? 'mt-8' : ''}`}>
                            {/* Section Header - Only visible if useSections is true */}
                            {quizData.useSections && (
                                <div className="flex items-center gap-4 mb-6 group/sec transition-all">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 font-black text-lg">
                                        {sIdx + 1}
                                    </div>
                                    <div className="flex-1 flex items-center gap-6 p-4 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                                        <input
                                            type="text"
                                            value={section.name}
                                            onChange={(e) => updateSection(section.id, { name: e.target.value })}
                                            className="flex-1 bg-transparent border-none text-sm font-black text-slate-800 focus:ring-0 placeholder:text-slate-300"
                                            placeholder="Section Name"
                                        />
                                        <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} className="text-slate-400" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase">Limit:</span>
                                                <input
                                                    type="number"
                                                    value={section.timeLimit}
                                                    onChange={(e) => updateSection(section.id, { timeLimit: parseInt(e.target.value) || 0 })}
                                                    className="w-12 bg-white rounded-lg px-2 py-1 text-[10px] font-bold text-slate-800 focus:ring-2 ring-blue-500 outline-none"
                                                />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase">Min</span>
                                            </div>
                                            <button
                                                onClick={() => removeSection(section.id)}
                                                className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Section Questions */}
                            <div className={`${quizData.useSections ? 'ml-6 border-l-2 border-slate-100 pl-10 space-y-4' : 'space-y-4'}`}>
                                {section.questions.map((q, idx) => (
                                    <div key={q.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-all group relative animate-in slide-in-from-bottom-2">
                                        <div className="flex items-start gap-6">
                                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 font-black text-xs">
                                                {idx + 1}
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative">
                                                            <button
                                                                onClick={() => setActiveTypeSwitcher(activeTypeSwitcher === q.id ? null : q.id)}
                                                                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-[10px] font-black uppercase flex items-center gap-1 hover:bg-blue-200 transition-all font-mono"
                                                            >
                                                                {q.type}
                                                                <ChevronDown size={10} />
                                                            </button>
                                                            {activeTypeSwitcher === q.id && (
                                                                <>
                                                                    <div className="fixed inset-0 z-20" onClick={() => setActiveTypeSwitcher(null)} />
                                                                    <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-xl shadow-xl border border-slate-100 z-30 overflow-hidden animate-in zoom-in-95 duration-200 origin-top-left">
                                                                        {QUESTION_TYPES.map(type => (
                                                                            <button
                                                                                key={type.id}
                                                                                onClick={() => {
                                                                                    updateQuestion(section.id, q.id, {
                                                                                        type: type.id,
                                                                                        options: type.id === 'mcq' ? (q.options || ['', '', '', '']) : null
                                                                                    });
                                                                                    setActiveTypeSwitcher(null);
                                                                                }}
                                                                                className={`w-full px-4 py-2 text-left text-[10px] font-bold flex items-center gap-2 hover:bg-slate-50 ${q.type === type.id ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500'}`}
                                                                            >
                                                                                {type.icon}
                                                                                {type.label}
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">Total Marks: {q.marks}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuestion(section.id, q.id, { randomizeOptions: !q.randomizeOptions })}
                                                            className={`p-2 rounded-lg transition-all flex items-center gap-2 ${q.randomizeOptions ? 'text-blue-600 bg-blue-50' : 'text-slate-300'}`}
                                                            title="Randomize Options"
                                                        >
                                                            <LayoutGrid size={16} />
                                                            <span className="text-[8px] font-black uppercase">Shuffle</span>
                                                        </button>
                                                        <button
                                                            onClick={() => removeQuestion(section.id, q.id)}
                                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <textarea
                                                    placeholder="Type your question here..."
                                                    value={q.text}
                                                    onChange={(e) => updateQuestion(section.id, q.id, { text: e.target.value })}
                                                    className="w-full bg-transparent border-none text-sm font-bold text-slate-800 focus:ring-0 resize-none placeholder:text-slate-300"
                                                    rows="2"
                                                />

                                                {q.type === 'mcq' && (
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {q.options.map((opt, optIdx) => (
                                                            <div key={optIdx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl group/opt border border-transparent hover:border-blue-100 transition-all">
                                                                <button
                                                                    onClick={() => updateQuestion(section.id, q.id, { correctAnswer: optIdx })}
                                                                    className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${q.correctAnswer === optIdx ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 group-hover/opt:border-blue-300'}`}
                                                                >
                                                                    {q.correctAnswer === optIdx && <CheckCircle2 size={12} />}
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    value={opt}
                                                                    onChange={(e) => updateMCQOption(section.id, q.id, optIdx, e.target.value)}
                                                                    placeholder={`Option ${optIdx + 1}`}
                                                                    className="flex-1 bg-transparent border-none text-xs font-medium text-slate-600 focus:ring-0"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="w-24 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                <p className="text-[9px] font-black text-slate-400 uppercase text-center mb-2">Marks</p>
                                                <input
                                                    type="number"
                                                    value={q.marks}
                                                    onChange={(e) => updateQuestion(section.id, q.id, { marks: parseInt(e.target.value) || 0 })}
                                                    className="w-full bg-white border-2 border-transparent focus:border-blue-400 rounded-xl py-2 text-center text-sm font-black outline-none transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Add Question in Section */}
                                <div className="relative pt-4">
                                    <button
                                        onClick={() => setShowTypeDropdown(showTypeDropdown === section.id ? null : section.id)}
                                        className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-2 border-dashed border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 rounded-[1.5rem] w-full transition-all group/add"
                                    >
                                        <div className="w-8 h-8 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover/add:scale-110 transition-transform">
                                            <Plus size={18} className="text-blue-500" />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/add:text-blue-600">
                                            {quizData.useSections ? `Add Item to ${section.name}` : 'Add Quiz Item'}
                                        </span>
                                    </button>

                                    {showTypeDropdown === section.id && (
                                        <>
                                            <div className="fixed inset-0 z-20" onClick={() => setShowTypeDropdown(null)} />
                                            <div className="absolute left-0 bottom-full mb-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 z-30 overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-left">
                                                {QUESTION_TYPES.map(type => (
                                                    <button
                                                        key={type.id}
                                                        onClick={() => {
                                                            addQuestion(section.id, type.id);
                                                            setShowTypeDropdown(null);
                                                        }}
                                                        className="w-full px-5 py-4 text-left text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 transition-colors border-b border-slate-50 last:border-0"
                                                    >
                                                        <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors">
                                                            {type.icon}
                                                        </div>
                                                        {type.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Finalize */}
            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <Shield size={20} className="text-blue-400" />
                            Final Compliance & Integrity Rules
                        </h4>
                        <p className="text-xs opacity-60 leading-relaxed font-medium">
                            Randomization and timing rules are enforced at the session level. Students will see questions in {quizData.randomizeQuestions ? 'random' : 'fixed'} order.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold text-xs hover:bg-white/20 transition-all border border-white/10">
                            Save Draft
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                            Finalize Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizBuilder;
