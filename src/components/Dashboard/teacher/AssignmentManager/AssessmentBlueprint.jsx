import React, { useState } from 'react';
import {
    BarChart2, PieChart, Layers, Target,
    Zap, AlertTriangle, CheckCircle2, Info,
    ArrowRight, Sparkles, BookOpen, Shield
} from 'lucide-react';

const AssessmentBlueprint = () => {
    const [blueprint, setBlueprint] = useState({
        type: 'Quiz',
        coverage: 'Unit 3: Plant Biology',
        totalMarks: 50,
        distribution: {
            bloom: [
                { level: 'Recall', percentage: 30, color: 'bg-blue-400' },
                { level: 'Application', percentage: 40, color: 'bg-indigo-500' },
                { level: 'Reasoning', percentage: 30, color: 'bg-purple-600' }
            ],
            outcomes: [
                { label: 'LO 3.1: Cell Structure', marks: 15 },
                { label: 'LO 3.2: Photosynthesis', marks: 20 },
                { label: 'LO 3.3: Reproduction', marks: 15 }
            ],
            mix: [
                { type: 'MCQ (Short)', count: 20 },
                { type: 'Paragraph (Long)', count: 5 },
                { type: 'Scientific Drawing', count: 2 }
            ]
        }
    });

    const validationAlerts = [
        { id: 1, type: 'warning', text: 'Over-reliance on MCQ for "Reasoning" outcomes detected.' },
        { id: 2, type: 'info', text: 'Balanced difficulty detected. AI2 recommends standard timing.' }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
            {/* Top Level Intent */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Assessment Type</label>
                    <select className="w-full px-5 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 rounded-2xl text-sm font-bold outline-none transition-all appearance-none">
                        <option>Periodic Quiz</option>
                        <option>Mid-Term Test</option>
                        <option>Final Examination</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Syllabus Coverage</label>
                    <div className="relative">
                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            defaultValue={blueprint.coverage}
                            className="w-full pl-12 pr-5 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 rounded-2xl text-sm font-bold outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Target Total Marks</label>
                    <div className="relative">
                        <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="number"
                            defaultValue={blueprint.totalMarks}
                            className="w-full pl-12 pr-5 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-400 rounded-2xl text-sm font-bold outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Distribution Visualization Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bloom's Taxonomy Mix */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800">Cognitive Load Balance</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bloom's Taxonomy Distribution</p>
                        </div>
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                            <Layers size={20} />
                        </div>
                    </div>

                    <div className="space-y-8">
                        {blueprint.distribution.bloom.map(b => (
                            <div key={b.level} className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold">
                                    <span className="text-slate-600 uppercase tracking-wider">{b.level}</span>
                                    <span className="text-slate-800">{b.percentage}%</span>
                                </div>
                                <div className="h-4 bg-slate-50 rounded-full overflow-hidden flex">
                                    <div
                                        className={`h-full ${b.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${b.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 text-blue-700 rounded-2xl flex items-center gap-3">
                        <Sparkles size={16} />
                        <p className="text-[10px] font-medium leading-relaxed">
                            <b>AI2 Insight:</b> High "Application" focus detected. Ensure rubric includes process-based scoring.
                        </p>
                    </div>
                </div>

                {/* Question Type Mix & LO Mapping */}
                <div className="space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3">
                            <Shield size={18} className="text-emerald-500" />
                            Validation Health Check
                        </h4>
                        <div className="space-y-4">
                            {validationAlerts.map(alert => (
                                <div key={alert.id} className={`p-4 rounded-2xl border flex items-start gap-4 ${alert.type === 'warning' ? 'bg-orange-50 border-orange-100 text-orange-800' : 'bg-blue-50 border-blue-100 text-blue-800'
                                    }`}>
                                    {alert.type === 'warning' ? <AlertTriangle size={18} className="mt-0.5" /> : <Info size={18} className="mt-0.5" />}
                                    <p className="text-xs font-bold leading-relaxed">{alert.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform">
                            <Zap size={100} />
                        </div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-bold mb-1">Blueprint Verified</h4>
                                <p className="text-[10px] opacity-60 font-medium uppercase tracking-widest">Pedagogical Framework Locked</p>
                            </div>
                            <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                Generate Mock Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outcome Weightage Table */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h4 className="font-bold text-slate-800 text-xl">Outcome Distribution</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Weightage by Learning Object</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs flex items-center gap-2">
                        <ArrowRight size={14} />
                        View Curriculum Map
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blueprint.distribution.outcomes.map(lo => (
                        <div key={lo.label} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-blue-200 transition-all hover:shadow-lg">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{lo.label}</p>
                            <div className="flex items-end justify-between">
                                <h5 className="text-2xl font-black text-slate-800">{lo.marks} <span className="text-xs opacity-50 font-bold">Marks</span></h5>
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-slate-100 group-hover:rotate-12 transition-transform">
                                    <Target size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssessmentBlueprint;
