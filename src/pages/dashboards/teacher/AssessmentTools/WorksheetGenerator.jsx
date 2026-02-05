import React, { useState } from 'react';
import {
    Plus, Trash2, Printer, Download,
    Sparkles, Layers, Book, Target,
    ChevronDown, ChevronUp, FileText,
    AlertCircle, CheckCircle2, MoreVertical,
    HelpCircle, Eye, Share2, Save,
    Search, Filter, Clock, ArrowRight
} from 'lucide-react';

const WorksheetGenerator = () => {
    const [step, setStep] = useState(0); // 0: Library, 1: Setup, 2: Builder/Preview
    const [formData, setFormData] = useState({
        title: '',
        subject: 'Mathematics',
        grade: 'Grade 9',
        topic: '',
        difficulty: 'Standard',
        outcomes: [],
        questionTypes: ['mcq'],
        itemCount: 10
    });

    const [savedWorksheets] = useState([
        { id: 1, title: 'Algebraic Expressions Practice', topic: 'Linear Equations', date: 'Oct 12, 2023', items: 15, difficulty: 'Standard' },
        { id: 2, title: 'Weekly Quiz - Trig Basics', topic: 'Trigonometry', date: 'Oct 05, 2023', items: 10, difficulty: 'Advanced' },
        { id: 3, title: 'Homework: Probability Intro', topic: 'Probability', date: 'Sep 28, 2023', items: 12, difficulty: 'Basic' },
    ]);

    const [questions, setQuestions] = useState([
        {
            id: 1,
            type: 'mcq',
            text: 'What is the value of x in 2x + 5 = 15?',
            options: ['3', '5', '7', '10'],
            answer: '5',
            difficulty: 'Basic'
        },
        {
            id: 2,
            type: 'short',
            text: 'Explain the difference between a variable and a constant.',
            answer: 'A variable can change value while a constant remains fixed.',
            difficulty: 'Standard'
        }
    ]);

    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Mock generation delay
        setTimeout(() => {
            setIsGenerating(false);
            setStep(2);
        }, 1500);
    };

    const difficultyLevels = [
        { id: 'Basic', label: 'Basic', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
        { id: 'Standard', label: 'Standard', color: 'bg-blue-50 text-blue-600 border-blue-200' },
        { id: 'Advanced', label: 'Advanced', color: 'bg-orange-50 text-orange-600 border-orange-200' }
    ];

    const types = [
        { id: 'mcq', label: 'MCQ' },
        { id: 'short', label: 'Short Answer' },
        { id: 'blanks', label: 'Fill in Blanks' }
    ];

    return (
        <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-500">

            {step === 0 && (
                <div className="space-y-6">
                    {/* Library Toolbar */}
                    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-2 border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 relative max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search your worksheets..."
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-medium text-slate-600"
                            />
                        </div>

                        <button
                            onClick={() => setStep(1)}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-cyan-100 hover:scale-105 transition-all text-xs flex items-center justify-center gap-2"
                        >
                            <Plus size={20} />
                            New Worksheet
                        </button>
                    </div>

                    {/* Worksheet Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedWorksheets.map((ws) => (
                            <div key={ws.id} className="bg-white p-6 rounded-[32px] shadow-sm border-2 border-slate-100 hover:border-cyan-200 transition-all group relative overflow-hidden flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                                        <FileText size={24} />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border tracking-widest ${difficultyLevels.find(l => l.id === ws.difficulty)?.color}`}>
                                        {ws.difficulty}
                                    </span>
                                </div>

                                <h4 className="text-lg font-black text-slate-800 mb-2 leading-tight group-hover:text-cyan-600 transition-colors">{ws.title}</h4>
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-6">
                                    <Book size={12} className="text-slate-300" />
                                    <span>{ws.topic}</span>
                                    <span className="mx-1">•</span>
                                    <Clock size={12} className="text-slate-300" />
                                    <span>{ws.date}</span>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{ws.items} Questions</span>
                                    <div className="flex gap-2">
                                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-cyan-600 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-cyan-100">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-blue-600 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Empty State / Create New */}
                        <div
                            onClick={() => setStep(1)}
                            className="bg-slate-50/50 p-6 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-cyan-50/30 hover:border-cyan-300 transition-all group min-h-[240px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all mb-4">
                                <Plus size={32} />
                            </div>
                            <p className="font-black text-slate-400 uppercase tracking-widest text-xs group-hover:text-cyan-500">Create New Sheet</p>
                        </div>
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
                    {/* Step 1: Configuration Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border-2 border-slate-100 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <button
                                    onClick={() => setStep(0)}
                                    className="p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 transition-all"
                                >
                                    <ChevronUp className="-rotate-90" size={18} />
                                </button>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <Layers className="text-cyan-500" size={24} />
                                    Worksheet Configuration
                                </h3>
                            </div>

                            <div className="space-y-6 flex-1">
                                {/* Title */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Worksheet Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Weekly Algebra Practice - Chap 3"
                                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-medium text-slate-700"
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Topic selection */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Topic / Chapter</label>
                                        <select className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-bold text-slate-700 appearance-none">
                                            <option>Linear Equations</option>
                                            <option>Quadratic Functions</option>
                                            <option>Trigonometry</option>
                                            <option>Probability</option>
                                        </select>
                                    </div>

                                    {/* Difficulty */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Complexity Level</label>
                                        <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                                            {difficultyLevels.map(level => (
                                                <button
                                                    key={level.id}
                                                    onClick={() => setFormData({ ...formData, difficulty: level.id })}
                                                    className={`flex-1 py-3 text-xs font-black uppercase rounded-xl transition-all ${formData.difficulty === level.id
                                                            ? 'bg-white text-cyan-600 shadow-md ring-1 ring-slate-200'
                                                            : 'text-slate-400 hover:text-slate-600'
                                                        }`}
                                                >
                                                    {level.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Question Types */}
                                <div className="space-y-4 pt-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Question Types (Multi-select)</label>
                                    <div className="flex flex-wrap gap-3">
                                        {types.map(type => (
                                            <button
                                                key={type.id}
                                                onClick={() => {
                                                    const newTypes = formData.questionTypes.includes(type.id)
                                                        ? formData.questionTypes.filter(t => t !== type.id)
                                                        : [...formData.questionTypes, type.id];
                                                    setFormData({ ...formData, questionTypes: newTypes });
                                                }}
                                                className={`px-4 py-3 rounded-2xl border-2 font-bold text-sm transition-all flex items-center gap-2 ${formData.questionTypes.includes(type.id)
                                                        ? 'bg-cyan-50 border-cyan-200 text-cyan-600 shadow-sm'
                                                        : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                                                    }`}
                                            >
                                                <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${formData.questionTypes.includes(type.id) ? 'bg-cyan-500 border-cyan-500' : 'bg-white border-slate-300'
                                                    }`}>
                                                    {formData.questionTypes.includes(type.id) && <CheckCircle2 size={12} className="text-white" />}
                                                </div>
                                                {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Learning Outcomes */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Map to Learning Outcomes</label>
                                    <div className="space-y-2">
                                        {['M9.1.A: Solve multi-step equations', 'M9.1.B: Map real world to algebra'].map(outcome => (
                                            <div key={outcome} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group cursor-pointer hover:bg-cyan-50 hover:border-cyan-200 transition-all">
                                                <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-300 text-cyan-500 focus:ring-cyan-500 transition-all cursor-pointer" />
                                                <span className="text-sm font-semibold text-slate-600 group-hover:text-cyan-700 transition-colors uppercase tracking-tight">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-cyan-100 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                                >
                                    {isGenerating ? (
                                        <>
                                            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                            AI Drafting in progress...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles size={20} />
                                            Generate Worksheet Draft
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar: Context & Help */}
                    <div className="space-y-6">
                        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-2 mb-2 text-cyan-300">
                                    <HelpCircle size={18} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Pro Tip</span>
                                </div>
                                <h4 className="font-bold text-lg leading-snug">Choose "Advanced" for remediation work.</h4>
                                <p className="text-sm text-slate-400 font-medium">
                                    AI will suggest multi-step problems that challenge high-performing students. For struggling students, stick to "Basic" reinforcement.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 space-y-6">
                            <div className="flex items-center gap-2 text-slate-800">
                                <Book className="text-cyan-500" size={18} />
                                <h4 className="font-black text-sm uppercase tracking-tight">Recent Templates</h4>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Weekly Homework', date: 'Yesterday' },
                                    { name: 'Unit Quiz', date: '2 days ago' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all cursor-pointer group">
                                        <p className="text-xs font-bold text-slate-700 mb-1">{item.name}</p>
                                        <p className="text-[10px] text-slate-400 font-medium">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                /* Step 2: Editor / Preview */
                <div className="space-y-6 animate-in slide-in-from-right duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 md:p-6 rounded-3xl shadow-sm border-2 border-slate-100">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setStep(1)}
                                className="p-3 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-all shadow-sm"
                            >
                                <ChevronUp className="-rotate-90" size={20} />
                            </button>
                            <div>
                                <h4 className="text-lg font-black text-slate-800 tracking-tight">
                                    {formData.title || 'Untitled Worksheet'}
                                </h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ring-1 ring-inset ${difficultyLevels.find(l => l.id === formData.difficulty)?.color
                                        }`}>
                                        {formData.difficulty}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">• 12 Questions Drafted</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 md:flex-none px-5 py-3 bg-slate-100 text-slate-700 rounded-2xl font-black text-xs uppercase transition-all hover:bg-slate-200 flex items-center justify-center gap-2">
                                <Eye size={16} />
                                Preview
                            </button>
                            <button className="flex-1 md:flex-none px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase shadow-lg shadow-blue-100 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                <Download size={16} />
                                Export PDF
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Question List (Main Builder) */}
                        <div className="lg:col-span-3 space-y-4">
                            {questions.map((q, idx) => (
                                <div key={q.id} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 group hover:border-cyan-200 transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500">
                                                {idx + 1}
                                            </div>
                                            <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200">
                                                {q.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all"><Share2 size={16} /></button>
                                            <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pl-11">
                                        <p className="text-lg font-bold text-slate-800 leading-snug">{q.text}</p>

                                        {q.type === 'mcq' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                                {q.options.map((opt, oIdx) => (
                                                    <div key={oIdx} className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${opt === q.answer ? 'bg-cyan-50 border-cyan-500' : 'bg-slate-50 border-slate-100'
                                                        }`}>
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${opt === q.answer ? 'bg-cyan-500 border-cyan-500 text-white' : 'bg-white border-slate-300 text-slate-400'
                                                            }`}>
                                                            {String.fromCharCode(65 + oIdx)}
                                                        </div>
                                                        <span className={`text-sm font-bold ${opt === q.answer ? 'text-cyan-700' : 'text-slate-600'}`}>{opt}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {q.type === 'short' && (
                                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 mt-2">
                                                <div className="flex items-center gap-2 mb-1 text-emerald-600">
                                                    <CheckCircle2 size={14} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Model Answer</span>
                                                </div>
                                                <p className="text-sm font-medium text-emerald-800">{q.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <button className="w-full py-6 bg-white border-2 border-dashed border-slate-200 rounded-3xl text-slate-300 font-black uppercase tracking-widest hover:border-cyan-300 hover:text-cyan-400 hover:bg-cyan-50/20 transition-all flex items-center justify-center gap-3">
                                <Plus size={20} />
                                Add Question Manually
                            </button>
                        </div>

                        {/* Editor Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 space-y-6">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Document Actions</h4>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setStep(0)}
                                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-100 translate-y-0 active:translate-y-px"
                                    >
                                        <Save size={16} />
                                        Finish & Save Library
                                    </button>
                                    <button className="w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                                        <Printer size={16} />
                                        Print Layout
                                    </button>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-100">
                                        <div className="flex items-center gap-2 text-cyan-600 mb-2">
                                            <Sparkles size={16} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">AI Enhancer</span>
                                        </div>
                                        <p className="text-[10px] text-cyan-700 font-medium leading-relaxed">
                                            AI2 found 3 questions that match your recent quiz. Should I replace them to maintain variety?
                                        </p>
                                        <button className="mt-3 text-[10px] font-black text-cyan-600 uppercase hover:underline">Apply Variations</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorksheetGenerator;
