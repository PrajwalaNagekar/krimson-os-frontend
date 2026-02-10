import React, { useState } from 'react';
import {
    FileText, Award, GraduationCap, ChevronDown,
    ChevronUp, Sparkles, Save, Send, CheckCircle2,
    Calendar, User, BookOpen, Brain, Microscope,
    Trophy, History, Download, Printer, Shield,
    QrCode, ExternalLink, Filter, Search, MoreVertical,
    Users,
    Heart,
    Layout
} from 'lucide-react';

// --- Shared Components ---
const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
    <button
        type="button"
        onClick={(e) => {
            e.preventDefault();
            onClick(id);
        }}
        className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 relative z-30 ${activeTab === id
            ? 'bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5'
            : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
    >
        <Icon size={16} />
        <span className="hidden md:inline">{label}</span>
    </button>
);

const SectionHeader = ({ title, icon: Icon, description }) => (
    <div className="flex items-center gap-4 mb-6 text-slate-800">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
            <Icon size={24} className="text-slate-600" />
        </div>
        <div>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            {description && <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-0.5">{description}</p>}
        </div>
    </div>
);

const AcademicDecision = () => {
    const [activeTab, setActiveTab] = useState('promotion'); // promotion, awards, certificates
    const [status, setStatus] = useState('Draft');

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-12">

            {/* HEADER SECTION - Aligned with CollaborationHub Theme */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements - Added pointer-events-none */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                                Academic Management
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                                Academic Decision Matrix
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <button type="button" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-sm uppercase tracking-wider">
                                <Save size={18} /> Save Draft
                            </button>
                            <button type="button" className="px-6 py-3 bg-white text-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-50 shadow-xl transition-all flex items-center gap-2 uppercase tracking-wider">
                                <Send size={18} /> {activeTab === 'certificates' ? 'Generate Documents' : 'Submit for Review'}
                            </button>
                        </div>
                    </div>

                    {/* Glass Ribbon Tabs - Strictly below the main title */}
                    <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
                        <TabButton id="promotion" label="Promotion Notes" icon={FileText} activeTab={activeTab} onClick={setActiveTab} />
                        <TabButton id="awards" label="Awards Nomination" icon={Award} activeTab={activeTab} onClick={setActiveTab} />
                        <TabButton id="certificates" label="Certificate Generator" icon={GraduationCap} activeTab={activeTab} onClick={setActiveTab} />
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1600px] mx-auto">
                {activeTab === 'promotion' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Student Details Card */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
                                        <User size={32} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Arjun Mehta</h2>
                                        <div className="flex items-center gap-4 mt-1 text-slate-500 font-bold text-xs uppercase tracking-widest">
                                            <span>Class 10-A</span>
                                            <span className="opacity-20">|</span>
                                            <span>Roll No. 12</span>
                                            <span className="opacity-20">|</span>
                                            <span>Science Stream</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Current Attendance</p>
                                    <div className="text-3xl font-bold text-emerald-500 tracking-tighter">94.2%</div>
                                </div>
                            </div>

                            <div className="bg-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <Search className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                                <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-4">Switch Student</h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search SID or Name..."
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all placeholder:text-white/40"
                                    />
                                    <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                            {/* Left Side: Progress Documentation */}
                            <div className="lg:col-span-8 space-y-8">
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <BookOpen size={16} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-800">Academic & Skill Progress</h4>
                                        </div>
                                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
                                            <Sparkles size={12} className="text-blue-500" /> Refine with AI
                                        </button>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Academic Growth */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Academic Growth Summary</label>
                                                <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">Min. 200 Characters</span>
                                            </div>
                                            <textarea
                                                rows={5}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
                                                placeholder="Provide an evidence-based summary of the student's academic evolution this term..."
                                            ></textarea>
                                        </div>

                                        {/* Skill Development */}
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Skill Development (Key Competencies)</label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {['Problem Solving', 'Communication', 'Leadership', 'Digital Literacy', 'Collaboration', 'Critical Thinking'].map(skill => (
                                                    <button key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all text-center">
                                                        {skill}
                                                    </button>
                                                ))}
                                                <button className="px-4 py-2 border border-slate-200 border-dashed rounded-xl text-[10px] font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all italic">
                                                    + Add Other
                                                </button>
                                            </div>
                                            <textarea
                                                rows={3}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
                                                placeholder="Elaborate on specific skill advancements..."
                                            ></textarea>
                                        </div>

                                        {/* Behavioral Growth */}
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Behavioral Growth (Formal Assessment)</label>
                                            <textarea
                                                rows={3}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
                                                placeholder="Formal observations regarding conduct, social integration, and character development..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements & Highlights */}
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="font-bold text-slate-800 flex items-center gap-3">
                                            <div className="p-2 bg-amber-50 rounded-lg"><Trophy size={16} className="text-amber-600" /></div>
                                            Achievements & Highlights
                                        </h4>
                                        <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">+ New Entry</button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm italic shadow-sm">
                                                    1st
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 text-sm">Zonal Science Olympiad</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">January 2026</p>
                                                </div>
                                            </div>
                                            <button className="p-2 text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Search size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Logic & Decisions */}
                            <div className="lg:col-span-4 space-y-8">
                                {/* Supporting Evidence */}
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                        <Brain size={14} /> Linked Evidence
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assessment Samples</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['MidTerm-MATH-A+', 'Final-PHYS-A', 'Chem-Lab-12'].map(chip => (
                                                    <span key={chip} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[9px] font-bold uppercase border border-blue-100 flex items-center gap-2 animate-in zoom-in-95">
                                                        {chip} <CheckCircle2 size={10} />
                                                    </span>
                                                ))}
                                                <button className="px-3 py-1.5 border border-slate-200 text-slate-400 rounded-lg text-[9px] font-bold uppercase hover:bg-slate-50 transition-all">+ Link</button>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-4 border-t border-slate-100">
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Academic Programs</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[9px] font-bold uppercase border border-emerald-100 flex items-center gap-2">
                                                    Enrichment Track <ExternalLink size={10} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Promotion Recommendation */}
                                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <h4 className="font-bold text-slate-800 mb-6 tracking-tight">Final Recommendation</h4>
                                    <div className="space-y-4">
                                        {[
                                            { id: 'promote', label: 'Recommended for Promotion', desc: 'Meets and exceeds core academic requirements.' },
                                            { id: 'support', label: 'Promotion with Support', desc: 'Recommended with mandatory bridge courses.' },
                                            { id: 'review', label: 'Review Required', desc: 'Case flagged for principal / coordinator review.' }
                                        ].map(opt => (
                                            <div key={opt.id} className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 cursor-pointer transition-all group">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-blue-500 transition-all flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all"></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{opt.label}</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 font-medium ml-7 mt-1 tracking-tight leading-relaxed">{opt.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100/50">
                                        <p className="text-[10px] text-amber-700 font-medium leading-relaxed italic">
                                            Warning: Final promotion status is subject to board approval and complete attendance audit.
                                        </p>
                                    </div>
                                </div>

                                {/* History / Audit Log */}
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Entry History</h4>
                                        <History size={14} className="text-slate-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-[9px] font-bold">
                                            <span className="text-slate-600">Draft Created</span>
                                            <span className="text-slate-400">Feb 04, 2026</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[9px] font-bold">
                                            <span className="text-slate-600">Last Modified</span>
                                            <span className="text-slate-400">10:45 AM Today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'awards' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                            {/* Left: Category & Selection */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <SectionHeader title="Award Category" icon={Filter} description="Select Primary Classification" />
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { id: 'academic', label: 'Academic Excellence', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                                            { id: 'leadership', label: 'Leadership Distinction', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                                            { id: 'service', label: 'Community Service', icon: Heart, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                            { id: 'sports', label: 'Sportsmanship Award', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
                                            { id: 'innovation', label: 'Innovation & Research', icon: Microscope, color: 'text-cyan-600', bg: 'bg-cyan-50' }
                                        ].map(cat => (
                                            <button key={cat.id} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all group">
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 ${cat.bg} ${cat.color} rounded-lg group-hover:scale-110 transition-transform`}>
                                                        <cat.icon size={18} />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-700">{cat.label}</span>
                                                </div>
                                                <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-blue-500 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-white shadow-xl">
                                    <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-8">Nomination Workflow</h4>
                                    <div className="space-y-10 relative">
                                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-800"></div>
                                        {[
                                            { step: '01', label: 'Draft Created', status: 'Completed', date: 'Today, 09:00 AM', role: 'Faculty' },
                                            { step: '02', label: 'Internal Review', status: 'Pending', role: 'Dept. Head' },
                                            { step: '03', label: 'Final Approval', status: 'Locked', role: 'Principal' }
                                        ].map(step => (
                                            <div key={step.step} className="relative flex gap-6 group">
                                                <div className={`relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all ${step.status === 'Completed' ? 'bg-blue-500 border-blue-500' :
                                                    step.status === 'Pending' ? 'bg-slate-900 border-blue-400 text-blue-400' :
                                                        'bg-slate-900 border-slate-700 text-slate-700'
                                                    }`}>
                                                    {step.status === 'Completed' ? <CheckCircle2 size={12} className="text-white" /> : step.step}
                                                </div>
                                                <div className="flex-1">
                                                    <p className={`text-xs font-bold uppercase tracking-widest ${step.status === 'Locked' ? 'text-slate-600' : 'text-white'}`}>{step.label}</p>
                                                    <div className="flex items-center justify-between mt-1">
                                                        <span className="text-[10px] text-slate-500 font-bold uppercase">{step.role}</span>
                                                        {step.date && <span className="text-[10px] text-blue-400/60 font-medium">{step.date}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div className="lg:col-span-8 space-y-8">
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                                            <User size={24} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 tracking-tight">Select Nominee</h3>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Search student records</p>
                                        </div>
                                    </div>
                                    <div className="relative w-full md:w-80">
                                        <input
                                            type="text"
                                            placeholder="Student ID or Name..."
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                                        />
                                        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                                <Award size={16} className="text-amber-600" />
                                            </div>
                                            <h4 className="font-bold text-slate-800">Nomination Justification</h4>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
                                                <History size={12} className="text-slate-400" /> Check Neutrality
                                            </button>
                                            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 hover:border-slate-400 transition-all">
                                                <Sparkles size={12} className="text-blue-500" /> Improve Wording
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-10 space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Detailed Justification</label>
                                                <span className="text-[9px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full uppercase italic">Formal Guidance Applied</span>
                                            </div>
                                            <textarea
                                                rows={12}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-8 text-base font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none leading-relaxed"
                                                placeholder="Document the specific evidence, behavioral patterns, and academic achievements that justify this nomination..."
                                            ></textarea>
                                        </div>

                                        <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Evidence References</label>
                                                <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-blue-300 transition-all cursor-pointer">
                                                    <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform mb-3">
                                                        <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-500" />
                                                    </div>
                                                    <p className="text-xs font-bold text-slate-500 mb-1 group-hover:text-slate-800">Attach Official Docs</p>
                                                    <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">PDF, Docx, or Data Link</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Endorsement Status</label>
                                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm">
                                                        <Shield size={20} className="text-emerald-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-black text-slate-800 uppercase tracking-wide">Self-Audit Passed</p>
                                                        <p className="text-[10px] text-emerald-600 font-bold uppercase mt-0.5">Tone: Professional/Objective</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                            {/* Left: Template & Forms */}
                            <div className="xl:col-span-4 space-y-8">
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <SectionHeader title="Select Template" icon={Layout} description="Institutional Formats" />
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { id: 'academic', name: 'Academic Achievement', desc: 'Global standard for merit recognition.' },
                                            { id: 'sports', name: 'Athletic Distinction', desc: 'Focuses on physical excellence.' },
                                            { id: 'valedictory', name: 'Valedictory Scroll', desc: 'Official graduation document.' }
                                        ].map(tpl => (
                                            <div key={tpl.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-500 cursor-pointer transition-all group">
                                                <div className="aspect-[1.414/1] bg-white border border-slate-200 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-all flex flex-col items-center justify-center p-4">
                                                    <div className="w-full h-full border-4 border-slate-100 rounded flex flex-col items-center justify-center gap-1 opacity-40">
                                                        <div className="w-1/2 h-0.5 bg-slate-300"></div>
                                                        <div className="w-2/3 h-0.5 bg-slate-300"></div>
                                                        <span className="text-[6px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">Institute Of Excelence</span>
                                                    </div>
                                                </div>
                                                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">{tpl.name}</h5>
                                                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">{tpl.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Data Binding</h4>
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Award Title', value: 'Excellence in Applied Physics' },
                                            { label: 'Student Name', value: 'Arjun Mehta', locked: true },
                                            { label: 'Academic Year', value: '2025-26' },
                                            { label: 'Issuing Authority', value: 'Dept. Head - Science' }
                                        ].map(field => (
                                            <div key={field.label} className="space-y-1.5">
                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                                                <div className={`w-full px-4 py-3 rounded-xl text-xs font-bold ${field.locked ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>
                                                    {field.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center: Live Preview */}
                            <div className="xl:col-span-8 flex flex-col gap-8">
                                <div className="bg-slate-200 border border-slate-300 rounded-[2.5rem] p-4 md:p-10 shadow-inner flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-8 px-4">
                                        <div className="flex bg-white/50 backdrop-blur-md p-1 rounded-xl border border-white shadow-sm">
                                            <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all"><Search size={16} /></button>
                                            <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all"><Printer size={16} /></button>
                                            <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all"><Download size={16} /></button>
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-500 font-bold text-xs uppercase tracking-widest">
                                            <span>Zoom: 100%</span>
                                            <span className="opacity-30">|</span>
                                            <span>Format: A4 Landscape</span>
                                        </div>
                                    </div>

                                    {/* The Actual Certificate Mockup */}
                                    <div className="aspect-[1.414/1] bg-white shadow-2xl rounded-sm mx-auto w-full max-w-4xl border-[16px] border-slate-50 p-12 flex flex-col items-center justify-between text-center font-serif relative overflow-hidden">
                                        <div className="absolute inset-0 border-[1px] border-slate-200 m-4"></div>
                                        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-slate-200 m-8"></div>
                                        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-slate-200 m-8"></div>

                                        <div className="space-y-2 relative z-10 pt-10">
                                            <div className="w-16 h-16 bg-slate-900 mx-auto rounded-full flex items-center justify-center mb-6">
                                                <GraduationCap className="text-white" size={32} />
                                            </div>
                                            <h2 className="text-3xl tracking-[0.2em] font-light text-slate-800 uppercase italic">Certificate of Excellence</h2>
                                            <p className="text-xs tracking-widest font-sans font-bold text-slate-400 uppercase">This Award is Proudly Presented To</p>
                                        </div>

                                        <div className="space-y-4 relative z-10 w-full px-10">
                                            <h1 className="text-6xl font-black text-slate-900 tracking-tighter border-b-2 border-slate-900 pb-4 w-fit mx-auto">Arjun Mehta</h1>
                                            <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">For demonstrating exceptional mastery and innovative leadership in the field of <span className="font-bold text-slate-900 underline decoration-slate-300 decoration-4 underline-offset-8 uppercase tracking-widest">Applied Physics</span></p>
                                        </div>

                                        <div className="w-full flex items-end justify-between px-10 pb-8 font-sans relative z-10">
                                            <div className="text-left">
                                                <div className="w-32 h-0.5 bg-slate-200 mb-2"></div>
                                                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Registrar Official</p>
                                                <p className="text-[10px] text-slate-400 font-bold">FEBRUARY 06, 2026</p>
                                            </div>
                                            <div className="w-24 h-24 border border-slate-100 p-2 flex items-center justify-center overflow-hidden grayscale">
                                                <QrCode size={64} className="text-slate-200" />
                                            </div>
                                            <div className="text-right">
                                                <div className="w-32 h-0.5 bg-slate-200 mb-2"></div>
                                                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Department Head</p>
                                                <p className="text-[10px] text-slate-400 font-bold">FACULTY AUTH: #912</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Audit & Bulk Options */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex items-center gap-6">
                                        <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                                            <QrCode size={32} className="text-slate-300" />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Authenticity ID</h5>
                                            <p className="text-lg font-bold text-slate-800 tracking-tight">KOS-ACD-2026-9921</p>
                                            <p className="text-[9px] text-emerald-600 font-bold uppercase mt-1 flex items-center gap-1">
                                                <CheckCircle2 size={10} /> Verified & Locked
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-xl flex items-center justify-between text-white">
                                        <div>
                                            <h5 className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em] mb-1">Bulk Generation</h5>
                                            <p className="text-base font-bold text-white">Select Whole Class</p>
                                            <p className="text-[10px] text-white/50 font-bold uppercase mt-1">12 Students Matching Criteria</p>
                                        </div>
                                        <button className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all">
                                            <Printer size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AcademicDecision;
