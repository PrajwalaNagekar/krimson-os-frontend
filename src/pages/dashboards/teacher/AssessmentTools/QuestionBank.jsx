import React, { useState } from 'react';
import {
    Search, Filter, Plus, Database,
    Sparkles, Layers, LayoutGrid, List,
    Edit, Trash2, Tag,
    CheckCircle2, AlertTriangle, Eye,
    ArrowUpRight, Share2, MoreHorizontal,
    ArrowRight
} from 'lucide-react';
import QuestionCreationModal from './QuestionCreationModal';

const QuestionBank = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'

    const [questions] = useState([
        {
            id: 1,
            text: 'What is the sum of angles in a triangle?',
            type: 'MCQ',
            difficulty: 'Basic',
            outcome: 'G9.2.A',
            bloom: 'Remember',
            usage: 12,
            lastUsed: '2 days ago'
        },
        {
            id: 2,
            text: 'Calculate the hypothetical yield of the reaction.',
            type: 'Short',
            difficulty: 'Advanced',
            outcome: 'C10.4.B',
            bloom: 'Analyze',
            usage: 3,
            lastUsed: '1 month ago'
        },
        {
            id: 3,
            text: 'Identify the active and passive voice in this paragraph.',
            type: 'Long',
            difficulty: 'Standard',
            outcome: 'E8.1.C',
            bloom: 'Apply',
            usage: 8,
            lastUsed: '2 weeks ago'
        }
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const getDifficultyColor = (diff) => {
        switch (diff) {
            case 'Basic': return 'text-emerald-500 bg-emerald-50 border-emerald-100';
            case 'Standard': return 'text-blue-500 bg-blue-50 border-blue-100';
            case 'Advanced': return 'text-orange-500 bg-orange-50 border-orange-100';
            default: return 'text-slate-500 bg-slate-50 border-slate-100';
        }
    };

    return (
        <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Search & Actions Bar */}
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-2 border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1 flex flex-col md:flex-row gap-4">
                    {/* AI6 Smart Search */}
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder='Smart Search (e.g. "Easy Algebra MCQs")'
                            className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-cyan-400 focus:bg-white focus:outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <Sparkles size={14} className="text-cyan-400" />
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest hidden md:inline">AI6 Powered</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 md:flex-none px-6 py-4 bg-slate-50 border-2 border-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                            <Filter size={18} />
                            Filters
                        </button>
                        <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-cyan-600 shadow-md' : 'text-slate-400'}`}
                            >
                                <List size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-cyan-600 shadow-md' : 'text-slate-400'}`}
                            >
                                <LayoutGrid size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-cyan-100 hover:scale-105 transition-all text-xs flex items-center justify-center gap-2"
                >
                    <Plus size={20} />
                    Create Question
                </button>
            </div>

            {/* Main List / Grid */}
            <div className="grid grid-cols-1 gap-4">
                {viewMode === 'list' ? (
                    <div className="bg-white rounded-[40px] shadow-sm border-2 border-slate-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <tr>
                                        <th className="px-8 py-5 text-left w-12"><input type="checkbox" className="w-5 h-5 rounded-md border-2" /></th>
                                        <th className="px-6 py-5 text-left">Question Details</th>
                                        <th className="px-6 py-5 text-center">Outcome</th>
                                        <th className="px-6 py-5 text-center">Difficulty</th>
                                        <th className="px-6 py-5 text-center">Usage</th>
                                        <th className="px-6 py-5 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {questions.map((q, idx) => (
                                        <tr key={idx} className="hover:bg-cyan-50/30 transition-colors group">
                                            <td className="px-8 py-6"><input type="checkbox" className="w-5 h-5 rounded-md border-2" /></td>
                                            <td className="px-6 py-6 max-w-lg">
                                                <div className="flex flex-col gap-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-200">{q.type}</span>
                                                        <span className="px-2 py-0.5 bg-purple-100 text-purple-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-purple-200">{q.bloom}</span>
                                                    </div>
                                                    <p className="text-sm font-bold text-slate-700 leading-snug line-clamp-2">{q.text}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className="p-2 bg-cyan-50 text-cyan-600 rounded-xl text-xs font-black uppercase tracking-tighter ring-1 ring-inset ring-cyan-200">
                                                    {q.outcome}
                                                </span>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase border tracking-widest ${getDifficultyColor(q.difficulty)}`}>
                                                    {q.difficulty}
                                                </span>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-xs font-black text-slate-700">{q.usage} times</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">Last: {q.lastUsed}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:text-cyan-600 hover:bg-white transition-all shadow-sm"><Eye size={16} /></button>
                                                    <button className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:text-blue-600 hover:bg-white transition-all shadow-sm"><Edit size={16} /></button>
                                                    <button className="p-2.5 bg-slate-100 text-slate-500 rounded-xl hover:text-red-600 hover:bg-white transition-all shadow-sm"><Trash2 size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {questions.map((q, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-[32px] shadow-sm border-2 border-slate-100 hover:border-cyan-200 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 bg-slate-100 text-slate-400 rounded-xl hover:bg-white hover:text-cyan-600 shadow-sm"><MoreHorizontal size={16} /></button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-black uppercase border border-slate-100">{q.type}</span>
                                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase border ${getDifficultyColor(q.difficulty)}`}>{q.difficulty}</span>
                                    </div>

                                    <p className="text-base font-bold text-slate-800 leading-snug line-clamp-3 min-h-[4.5rem] group-hover:text-cyan-600 transition-colors">{q.text}</p>

                                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-cyan-600">
                                            <Tag size={12} />
                                            <span className="text-[10px] font-black uppercase tracking-tighter">{q.outcome}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                                            <CheckCircle2 size={12} className="text-emerald-500" />
                                            {q.usage} uses
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* AI6 Insights Bar */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>

                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex-shrink-0">
                        <AlertTriangle className="text-amber-400" size={32} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="font-black uppercase tracking-widest text-cyan-400 text-xs mb-2">Duplicate Detection Engine</h4>
                        <h5 className="text-xl font-bold mb-3">AI6 detected 4 potential duplicate questions.</h5>
                        <p className="text-sm text-slate-400 font-medium max-w-2xl">
                            We've found similar wording and logic in the school library. Would you like to merge them or archive your local copies to maintain question integrity?
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2">
                        Audit Questions
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <QuestionCreationModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSave={() => console.log('Saved!')}
            />
        </div>
    );
};

export default QuestionBank;
