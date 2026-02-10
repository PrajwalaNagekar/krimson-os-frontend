import React, { useState } from 'react';
import {
    Plus, Search, Filter, MoreVertical, FileText,
    CheckCircle, AlertCircle, Trash2, Edit3, ArrowRight,
    Brain, Lightbulb, Rocket, Zap, Star, Compass, Sparkles, Award, Target, Activity,
    Calendar,
    Clock,
    ChevronRight
} from 'lucide-react';

const EnrichmentPlanner = () => {
    const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, drafts, history
    const [searchQuery, setSearchQuery] = useState('');

    const [showWizard, setShowWizard] = useState(false);
    const [wizardStep, setWizardStep] = useState(1);
    const [enrichmentStudents] = useState([
        { id: 1, name: 'Kavya R.', topic: 'Quantum Basics', type: 'Research', mastery: { problemSolving: 85, creativity: 92, research: 78, complexity: 80 }, participation: 'High', projects: ['The Qubit Paradox', 'Light Speed Entanglement'], badges: ['Innovation Pro', 'Research Lead'] },
        { id: 2, name: 'Ishaan S.', topic: 'AI Ethics', type: 'Advanced Projects', mastery: { problemSolving: 90, creativity: 85, research: 92, complexity: 88 }, participation: 'Platinum', projects: ['Ethical BOT Design'], badges: ['Critical Thinker'] },
    ]);

    const [newSession, setNewSession] = useState({
        title: '',
        type: 'Challenge Project',
        focus: '',
        students: [],
        question: '',
        competency: '',
        resources: []
    });

    // Mock Data for Enrichment
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: 'Design a Mars Habitat',
            status: 'upcoming',
            date: '2024-03-28',
            time: '14:30 - 15:30',
            type: 'Challenge Project',
            students: 4,
            focus: 'Systems Thinking',
            mode: 'In-person'
        },
        {
            id: 2,
            title: 'Historical Causality Debate',
            status: 'draft',
            lastEdited: '5 hours ago',
            type: 'Advanced Seminar',
            focus: 'Critical Analysis'
        },
        {
            id: 3,
            title: 'Quantum Mechanics Basics',
            status: 'history',
            date: '2024-03-15',
            attended: 6,
            outcome: 'Published Paper',
            type: 'Inquiry Lab'
        }
    ]);

    const getFilteredSessions = (status) => {
        return sessions.filter(s =>
            s.status === status &&
            s.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <div className="space-y-6 md:space-y-8">
            {/* Header Section with Enrichment Gradient (Purple/Indigo/Teal) */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm border border-white/10">
                        Advanced Learning Design
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                Enrichment Planner
                            </h1>
                            <p className="opacity-90 font-medium text-sm md:text-base max-w-xl">
                                Design challenge-based learning for advanced students. Push higher-order thinking, creativity, and application.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowWizard(true)}
                                className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 border-2 border-transparent hover:border-indigo-100"
                            >
                                <Plus size={20} className="stroke-[3px]" />
                                <span>Create Challenge</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation & Search - Consistent with Remedial Planner */}
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <div className="flex flex-1 gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                        {[
                            { id: 'upcoming', label: 'Upcoming', icon: Rocket },
                            { id: 'drafts', label: 'Drafts', icon: FileText },
                            { id: 'history', label: 'History', icon: CheckCircle },
                            { id: 'enrichment', label: 'Enrichment Tracker', icon: Award },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                <tab.icon size={16} />
                                <span className="capitalize">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="w-full md:w-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search challenges..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-80 pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-indigo-400 focus:outline-none transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="animate-fadeIn">
                {activeTab === 'enrichment' && (
                    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                        {/* Advanced Skill Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: 'Enriched Students', value: enrichmentStudents.length, icon: Star, color: 'indigo' },
                                { label: 'Project Velocity', value: 'High', icon: Zap, color: 'amber' },
                                { label: 'Skills Mastered', value: '12', icon: Award, color: 'emerald' },
                                { label: 'Active Challenges', value: '4', icon: Target, color: 'rose' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                                    <div className={`w-10 h-10 bg-${stat.color}-50 text-${stat.color}-500 rounded-xl flex items-center justify-center`}>
                                        <stat.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                                        <p className="text-xl font-bold text-slate-800">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Student Mastery Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {enrichmentStudents.map((student) => (
                                <div key={student.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-md p-8 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-indigo-100 transition-colors"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-xl">
                                                {student.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{student.name}</h3>
                                                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase tracking-widest rounded-md border border-indigo-100">
                                                        {student.participation} Level
                                                    </span>
                                                </div>
                                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Topic: <span className="text-indigo-500">{student.topic}</span></p>
                                            </div>
                                        </div>

                                        {/* Skill Mastery Grid */}
                                        <div className="grid grid-cols-2 gap-6 mb-8">
                                            {Object.entries(student.mastery).map(([skill, val]) => (
                                                <div key={skill} className="space-y-2">
                                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                                        <span className="text-slate-500">{skill.replace(/([A-Z])/g, ' $1')}</span>
                                                        <span className="text-slate-800">{val}%</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                                                        <div className="h-full bg-slate-800 rounded-full" style={{ width: `${val}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Portfolio Glimpse */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <Compass size={14} className="text-indigo-500" /> Evidence Portfolio
                                            </h4>
                                            <div className="flex gap-3">
                                                {student.projects.map((proj, i) => (
                                                    <div key={i} className="flex-1 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-indigo-300 transition-all cursor-pointer group/item">
                                                        <FileText size={16} className="text-slate-400 mb-2 group-hover/item:text-indigo-500" />
                                                        <p className="text-[11px] font-bold text-slate-700 leading-tight truncate">{proj}</p>
                                                        <p className="text-[9px] text-slate-400 mt-1">Research Paper</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievement Milestones */}
                                        <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                {student.badges.map((badge, i) => (
                                                    <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group/badge hover:-translate-y-1 transition-transform cursor-help">
                                                        <Award size={18} className="text-amber-500" />
                                                        <div className="absolute bottom-full mb-2 hidden group-hover/badge:block bg-slate-900 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap z-50">
                                                            {badge}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 border border-transparent hover:border-indigo-100">
                                                Next Challenge <ChevronRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* AI Growth Insight */}
                        <div className="bg-white rounded-[3rem] p-1 border-2 border-dashed border-slate-200">
                            <div className="bg-slate-50 rounded-[2.8rem] p-8 flex flex-col md:flex-row items-center gap-8 group">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-indigo-500 shadow-sm shrink-0 border border-slate-100 group-hover:rotate-12 transition-transform duration-500">
                                    <Sparkles size={40} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-3">
                                        AI3 Strategic Growth Advisor
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight uppercase">Talent Plateau Detected</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
                                        Student <span className="text-slate-900 font-bold">Kavya R.</span> has achieved 92% in creativity but has plateaued in research skills. AI suggests assigning a <span className="text-indigo-600 font-bold">cross-disciplinary project</span> with the Humanities department to stimulate new research pathways.
                                    </p>
                                </div>
                                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
                                    Generate Plan
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'upcoming' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getFilteredSessions('upcoming').map(session => (
                            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 border border-slate-100 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-3xl -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-500 opacity-50"></div>

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className={`px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider ${session.type === 'Challenge Project' ? 'bg-indigo-100 text-indigo-700' :
                                        session.type === 'Advanced Seminar' ? 'bg-purple-100 text-purple-700' : 'bg-teal-100 text-teal-700'
                                        }`}>
                                        {session.type}
                                    </span>
                                    <button className="text-slate-300 hover:text-slate-600 transition-colors">
                                        <MoreVertical size={20} />
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {session.title}
                                </h3>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Key Competency</p>
                                    <p className="text-sm font-semibold text-slate-700">{session.focus}</p>
                                </div>

                                <div className="flex items-center gap-6 mb-6 text-sm">
                                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                                        <Calendar size={16} className="text-indigo-400" />
                                        {session.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                                        <Clock size={16} className="text-purple-400" />
                                        {session.time}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex -space-x-3">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">
                                                S{i + 1}
                                            </div>
                                        ))}
                                        {session.students > 3 && (
                                            <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white pl-0.5">
                                                +{session.students - 3}
                                            </div>
                                        )}
                                    </div>
                                    <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                                        View Challenge <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Empty State / Add New */}
                        <button
                            onClick={() => setShowWizard(true)}
                            className="bg-slate-50 rounded-3xl border-4 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-slate-400 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all duration-300 min-h-[350px] group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Plus size={32} className="stroke-[3px]" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Create Challenge</h4>
                            <p className="text-xs font-medium opacity-70 uppercase tracking-wide">Design Enrichment</p>
                        </button>
                    </div>
                )}

                {activeTab === 'drafts' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getFilteredSessions('draft').map(session => (
                            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 opacity-90 hover:opacity-100 hover:shadow-md transition-all">
                                <div className="mb-6">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                                        Draft • {session.lastEdited}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">{session.title}</h3>
                                    <p className="text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-xl">Focus: {session.focus}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wide hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                                        <Edit3 size={16} /> Edit
                                    </button>
                                    <button className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-red-100 text-red-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Create Enrichment Wizard */}
            {showWizard && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">

                        {/* Wizard Header */}
                        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-1">Design Enrichment</h2>
                                <p className="text-sm font-medium text-slate-500">Step {wizardStep} of 4: {
                                    wizardStep === 1 ? 'Challenge Basics' :
                                        wizardStep === 2 ? 'Select Scholars' :
                                            wizardStep === 3 ? 'Learning Design' : 'Review & Publish'
                                }</p>
                            </div>
                            <button onClick={() => setShowWizard(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-600">
                                <Trash2 size={24} />
                            </button>
                        </div>

                        {/* Wizard Content */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50/50">
                            {wizardStep === 1 && (
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Challenge Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Design a Water-Saving System"
                                            className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 focus:outline-none transition-all placeholder:font-medium placeholder:text-slate-400"
                                            value={newSession.title}
                                            onChange={e => setNewSession({ ...newSession, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Type</label>
                                            <div className="flex flex-col gap-2">
                                                {['Challenge Project', 'Advanced Seminar', 'Inquiry Lab'].map(type => (
                                                    <button
                                                        key={type}
                                                        onClick={() => setNewSession({ ...newSession, type })}
                                                        className={`p-4 rounded-xl text-left border-2 transition-all font-bold text-sm ${newSession.type === type
                                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                            : 'border-slate-200 bg-white text-slate-500 hover:border-indigo-200'}`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Core Competency</label>
                                            <select
                                                className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 focus:border-indigo-500 outline-none appearance-none"
                                                value={newSession.focus || ''}
                                                onChange={e => setNewSession({ ...newSession, focus: e.target.value })}
                                            >
                                                <option value="">Select Competency</option>
                                                <option value="analysis">Critical Analysis</option>
                                                <option value="research">Independent Research</option>
                                                <option value="design">Engineering Design</option>
                                                <option value="synthesis">Synthesis & Reasoning</option>
                                            </select>

                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block pt-4 ml-1">Challenge Concept Note</label>
                                            <textarea
                                                placeholder="Briefly describe the challenge scenario..."
                                                className="w-full h-24 p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 outline-none resize-none placeholder:font-medium placeholder:text-slate-400"
                                                value={newSession.question}
                                                onChange={e => setNewSession({ ...newSession, question: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 2 && (
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="flex-1 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm">
                                                <Zap size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">High Mastery</h4>
                                                <p className="text-xs font-bold text-indigo-600 mt-1">12 Students 90%</p>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-500 shadow-sm">
                                                <Lightbulb size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Rapid Learners</h4>
                                                <p className="text-xs font-bold text-teal-600 mt-1">Identified by pacing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 max-h-[400px]">
                                            <span className="font-bold text-slate-500 text-xs uppercase tracking-wider px-2">Select Scholars</span>
                                            <div className="relative">
                                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input type="text" placeholder="Search roster..." className="pl-8 pr-3 py-1.5 text-xs font-bold border rounded-lg focus:outline-none focus:border-indigo-400" />
                                            </div>
                                        </div>
                                        <div className="max-h-[300px] overflow-y-auto p-2">
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <div key={i} className={`flex items-center justify-between p-3 mb-1 rounded-xl transition-all cursor-pointer ${newSession.students.includes(i) ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-slate-50 border border-transparent'
                                                    }`}
                                                    onClick={() => {
                                                        const exists = newSession.students.includes(i);
                                                        setNewSession({
                                                            ...newSession,
                                                            students: exists ? newSession.students.filter(id => id !== i) : [...newSession.students, i]
                                                        });
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${newSession.students.includes(i) ? 'bg-indigo-500' : 'bg-slate-300'}`}>
                                                            {String.fromCharCode(64 + i)}
                                                        </div>
                                                        <span className={`font-bold ${newSession.students.includes(i) ? 'text-slate-800' : 'text-slate-500'}`}>Advanced Student {i}</span>
                                                    </div>
                                                    {newSession.students.includes(i) && <CheckCircle size={20} className="text-indigo-500 fill-white" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 3 && (
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">The Essential Question</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 outline-none"
                                            placeholder="e.g. How can we optimize energy usage in the school?"
                                            value={newSession.question}
                                            onChange={e => setNewSession({ ...newSession, question: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Format</label>
                                        <div className="flex gap-3">
                                            {['Socratic Seminar', 'Project Sprint', 'Lab Experiment'].map(app => (
                                                <button
                                                    key={app}
                                                    onClick={() => setNewSession({ ...newSession, approach: app })}
                                                    className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all ${newSession.approach === app ? 'bg-teal-50 text-teal-700 border-teal-200' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    {app}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Advanced Resources</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {['Physics Simulation Tool', 'Journal Article: Thermodynamics', 'Data Set: Yearly Usage'].map(res => (
                                                <div key={res} className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 text-slate-700 text-sm font-bold bg-white hover:border-indigo-300 transition-all cursor-pointer shadow-sm hover:shadow-md">
                                                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                                                        <FileText size={16} />
                                                    </div>
                                                    {res}
                                                </div>
                                            ))}
                                            <button className="p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all">
                                                + Upload Guide
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 4 && (
                                <div className="space-y-8 flex flex-col items-center justify-center py-8">
                                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 text-center max-w-lg w-full">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm mx-auto mb-6">
                                            <Rocket size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Launch Challenge?</h3>
                                        <p className="text-slate-500 font-medium mb-8">This will assign the challenge to selected students and add it to their dashboards.</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1 text-left">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Due Date</label>
                                                <input type="date" className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-indigo-400" />
                                            </div>
                                            <div className="space-y-1 text-left">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Kickoff Time</label>
                                                <input type="time" className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-indigo-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-slate-100 bg-white flex justify-between items-center">
                            {wizardStep > 1 ? (
                                <button
                                    onClick={() => setWizardStep(curr => curr - 1)}
                                    className="px-6 py-3 text-slate-500 font-bold uppercase tracking-wider text-xs hover:bg-slate-100 rounded-xl transition-all"
                                >
                                    Back
                                </button>
                            ) : <div></div>}

                            <button
                                onClick={() => wizardStep < 4 ? setWizardStep(curr => curr + 1) : setShowWizard(false)}
                                className="px-8 py-3 bg-indigo-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all text-xs uppercase tracking-wider flex items-center gap-2"
                            >
                                {wizardStep === 4 ? 'Launch Challenge' : 'Next Step'}
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default EnrichmentPlanner;
