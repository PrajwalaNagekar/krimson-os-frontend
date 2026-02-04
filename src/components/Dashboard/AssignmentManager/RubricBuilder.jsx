import React, { useState } from 'react';
import {
    Shield, Plus, Zap, Sparkles,
    Trash2, Copy, Save, Lock,
    Unlock, Target, BookOpen, LayoutGrid
} from 'lucide-react';

const RubricBuilder = () => {
    const [rubric, setRubric] = useState({
        name: 'Critical Analysis Rubric',
        description: 'Used for evaluating senior secondary history essays.',
        isLocked: false,
        criteria: [
            {
                id: 1,
                name: 'Historical Accuracy',
                competency: 'Knowledge',
                levels: [
                    { proficiency: 'Emerging', description: 'Includes major historical inaccuracies.', score: 1 },
                    { proficiency: 'Proficient', description: 'Accurate with minor chronological errors.', score: 2 },
                    { proficiency: 'Exemplary', description: 'Flawless factual accuracy and context.', score: 3 }
                ]
            }
        ]
    });

    const addCriterion = () => {
        const newCrit = {
            id: Date.now(),
            name: '',
            competency: 'Skill',
            levels: [
                { proficiency: 'Level 1', description: '', score: 1 },
                { proficiency: 'Level 2', description: '', score: 2 },
                { proficiency: 'Level 3', description: '', score: 3 }
            ]
        };
        setRubric({ ...rubric, criteria: [...rubric.criteria, newCrit] });
    };

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-20">
            {/* Rubric Metadata */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 mb-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Source Map</label>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-md text-[8px] font-black uppercase">Standard Framework v2</span>
                    </div>
                    <input
                        type="text"
                        defaultValue={rubric.name}
                        className="w-full bg-transparent border-none text-2xl font-black text-slate-800 focus:ring-0 p-0 placeholder:text-slate-300"
                        placeholder="Unnamed Rubric"
                    />
                    <input
                        type="text"
                        defaultValue={rubric.description}
                        className="w-full bg-transparent border-none text-xs font-medium text-slate-500 focus:ring-0 p-0"
                        placeholder="Add a brief description..."
                    />
                </div>
                <div className="flex gap-3">
                    <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100 hover:text-blue-500 hover:border-blue-200 transition-all">
                        <Copy size={20} />
                    </button>
                    <button
                        onClick={() => setRubric({ ...rubric, isLocked: !rubric.isLocked })}
                        className={`p-4 rounded-2xl border transition-all ${rubric.isLocked ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-slate-50 text-slate-400 border-slate-100'}`}
                    >
                        {rubric.isLocked ? <Lock size={20} /> : <Unlock size={20} />}
                    </button>
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-3 active:scale-95 transition-all">
                        <Save size={18} />
                        Save to Library
                    </button>
                </div>
            </div>

            {/* AI2 Generator Banner */}
            {!rubric.isLocked && (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group">
                    <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
                        <Sparkles size={100} />
                    </div>
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                            <Zap size={24} className="text-yellow-300" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">AI2 - Rubric Assistant</h4>
                            <p className="text-xs opacity-90">Give me a criterion name, and I'll generate misinterpretation-proof descriptors for all levels.</p>
                        </div>
                        <button className="ml-auto px-6 py-3 bg-white text-emerald-600 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all active:scale-95">
                            Auto-Generate Levels
                        </button>
                    </div>
                </div>
            )}

            {/* Criteria Grid */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                        <LayoutGrid size={24} className="text-blue-500" />
                        Grading Matrix
                    </h3>
                    <button
                        onClick={addCriterion}
                        className="px-6 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs border border-blue-100 hover:bg-blue-100 transition-all active:scale-95"
                    >
                        + Add New Criterion
                    </button>
                </div>

                <div className="overflow-x-auto rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 w-64">Criterion & Competency</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Level 1 (Emerging)</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Level 2 (Proficient)</th>
                                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Level 3 (Exemplary)</th>
                                <th className="p-6 border-b border-slate-100 w-16"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {rubric.criteria.map((crit, idx) => (
                                <tr key={crit.id} className="group hover:bg-blue-50/20 transition-colors">
                                    <td className="p-6 space-y-4">
                                        <input
                                            type="text"
                                            defaultValue={crit.name}
                                            placeholder="Criterion name..."
                                            className="w-full bg-transparent border-none text-sm font-black text-slate-800 p-0 focus:ring-0"
                                        />
                                        <div className="flex gap-2">
                                            {['Knowledge', 'Skill', 'Application'].map(c => (
                                                <button
                                                    key={c}
                                                    className={`px-2 py-1 rounded text-[8px] font-black uppercase transition-all ${crit.competency === c ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                                >
                                                    {c}
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                    {crit.levels.map((level, lIdx) => (
                                        <td key={lIdx} className="p-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[8px] font-black text-blue-500 uppercase">{level.proficiency}</span>
                                                    <span className="text-[10px] font-black text-slate-300 italic">{level.score} Points</span>
                                                </div>
                                                <textarea
                                                    defaultValue={level.description}
                                                    placeholder="Describe this level..."
                                                    className="w-full bg-slate-50/50 border border-transparent focus:bg-white focus:border-blue-200 rounded-xl p-3 text-[10px] font-medium text-slate-600 resize-none transition-all outline-none"
                                                    rows="4"
                                                />
                                            </div>
                                        </td>
                                    ))}
                                    <td className="p-6">
                                        <button className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Validation & Constraints */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Target size={18} className="text-blue-500" />
                        Outcome Alignment
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        This rubric is currently influencing <b>4 Learning Outcomes</b> across the curriculum map. Edits may affect previous evaluation benchmarks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['LO 2.1', 'LO 3.4', 'Skill A'].map(t => (
                            <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">{t}</span>
                        ))}
                    </div>
                </div>

                <div className="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100 shadow-sm space-y-4">
                    <h4 className="font-bold text-orange-800 flex items-center gap-2">
                        <Shield size={18} className="text-orange-600" />
                        System Rule: Locking
                    </h4>
                    <p className="text-xs text-orange-700 font-medium leading-relaxed italic">
                        "Once grading for an assignment using this rubric starts, the structure will be locked for evaluation integrity. Any structural changes will require HOD approval."
                    </p>
                    <div className="p-3 bg-white/50 rounded-xl text-[10px] font-bold text-orange-600 flex items-center gap-2">
                        <Lock size={12} />
                        Auto-lock enabled for 12 Jan 2026
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RubricBuilder;
