import React, { useState } from 'react';
import {
    FileText, User, MessageSquare, Calendar,
    CheckCircle2, AlertCircle, Send,
    ChevronRight, Clock, ShieldCheck,
    ArrowRight, Save, X, History
} from 'lucide-react';

const ConferenceNotes = ({ atRiskStudents = [] }) => {
    const [formData, setFormData] = useState({
        studentId: atRiskStudents[0]?.id || '',
        reason: 'Academic Performance Concern',
        summary: '',
        perspective: '',
        actions: '',
        responsibility: 'Both',
        followUp: '',
    });

    const [history, setHistory] = useState([
        {
            date: 'Jan 14, 2026',
            type: 'Academic',
            title: 'Time Management Sync',
            excerpt: 'Agreed to use digital planner to track Physics assignments.',
            studentName: 'Bianca Liu'
        },
        {
            date: 'Dec 02, 2025',
            type: 'General',
            title: 'Mid-Term Goal Setting',
            excerpt: 'Setting targets for Unit 3 mechanics assessment.',
            studentName: 'David Kim'
        }
    ]);

    const handleFinalize = () => {
        if (!formData.studentId || !formData.summary) return;

        const selectedStudent = atRiskStudents.find(s => s.id === formData.studentId);

        const newRecord = {
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            type: formData.reason.split(' ')[0],
            title: formData.reason,
            excerpt: formData.summary.substring(0, 60) + '...',
            studentName: selectedStudent ? selectedStudent.name : 'Unknown Student'
        };

        setHistory([newRecord, ...history]);

        // Reset form
        setFormData({
            studentId: atRiskStudents[0]?.id || '',
            reason: 'Academic Performance Concern',
            summary: '',
            perspective: '',
            actions: '',
            responsibility: 'Both',
            followUp: '',
        });
    };

    const selectedStudentData = atRiskStudents.find(s => s.id === formData.studentId);

    return (
        <div className="max-w-6xl mx-auto space-y-10 animate-in slide-in-from-bottom-8 duration-700">
            {/* Header - Unified with System Style */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/10">
                        <FileText size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Conference Record</h2>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Academic & Behavioral Documentation</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-2.5 bg-white border-2 border-emerald-100 rounded-2xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">End-to-End Encrypted</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Structured Documentation Form */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-md border-2 border-slate-50 space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                            <History size={200} />
                        </div>

                        {/* Context Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Student Focus (At-Risk)</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] text-sm font-bold text-slate-700 focus:border-blue-400 focus:ring-0 outline-none appearance-none transition-all"
                                        value={formData.studentId}
                                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                                    >
                                        <option value="" disabled>Select a student...</option>
                                        {atRiskStudents.map(student => (
                                            <option key={student.id} value={student.id}>{student.name} ({student.id})</option>
                                        ))}
                                    </select>
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" size={18} />
                                </div>
                                {selectedStudentData && (
                                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tight ml-2">
                                        Current Status: {selectedStudentData.class} • Risk Identified
                                    </p>
                                )}
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Discussion Context</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] text-sm font-bold text-slate-700 focus:border-blue-400 focus:ring-0 outline-none appearance-none transition-all"
                                        value={formData.reason}
                                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                    >
                                        <option>Academic Performance Concern</option>
                                        <option>Behavioral Reflection</option>
                                        <option>Goal Setting Session</option>
                                        <option>Parent-Teacher Sync</option>
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Discussion Summary */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between px-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Narrative Summary</label>
                            </div>
                            <textarea
                                className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] text-sm font-medium text-slate-700 focus:border-blue-400 focus:ring-0 outline-none min-h-[160px] transition-all leading-relaxed placeholder:text-slate-300 shadow-inner"
                                placeholder="Document the key points of the conversation..."
                                value={formData.summary}
                                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                            />
                        </div>

                        {/* Perspective & Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Student Perspective</label>
                                <textarea
                                    className="w-full p-5 bg-white border-2 border-slate-100 rounded-[1.5rem] text-sm font-medium text-slate-600 focus:border-blue-400 focus:ring-0 outline-none min-h-[120px] transition-all"
                                    placeholder="Direct quotes or student reflections..."
                                    value={formData.perspective}
                                    onChange={(e) => setFormData({ ...formData, perspective: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Actionable Items</label>
                                <textarea
                                    className="w-full p-5 bg-blue-50/30 border-2 border-blue-100 rounded-[1.5rem] text-sm font-bold text-slate-800 focus:border-blue-400 focus:ring-0 outline-none min-h-[120px] transition-all placeholder:text-blue-200"
                                    placeholder="Enumerate the agreed commitments..."
                                    value={formData.actions}
                                    onChange={(e) => setFormData({ ...formData, actions: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Tasking & Follow Up */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Responsibility Matrix</label>
                                <div className="flex p-1.5 bg-slate-100 rounded-2xl gap-2 shadow-inner">
                                    {['Student', 'Teacher', 'Both'].map(r => (
                                        <button
                                            key={r}
                                            onClick={() => setFormData({ ...formData, responsibility: r })}
                                            className={`flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.responsibility === r ? 'bg-white text-blue-600 shadow-md scale-[1.02]' : 'text-slate-400 hover:text-slate-600'
                                                }`}
                                        >
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2">Follow-up Commitment</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
                                    <input
                                        type="date"
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] text-xs font-bold text-slate-700 outline-none focus:border-blue-400 transition-all"
                                        value={formData.followUp}
                                        onChange={(e) => setFormData({ ...formData, followUp: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <button
                            onClick={handleFinalize}
                            className="flex-1 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2rem] font-bold text-sm tracking-widest uppercase hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            <Save size={20} />
                            Finalize Documentation
                        </button>
                        <button
                            onClick={() => setFormData({
                                studentId: atRiskStudents[0]?.id || '',
                                reason: 'Academic Performance Concern',
                                summary: '',
                                perspective: '',
                                actions: '',
                                responsibility: 'Both',
                                followUp: '',
                            })}
                            className="px-10 py-5 bg-white text-slate-400 border-2 border-slate-100 rounded-[2rem] font-bold text-sm tracking-widest uppercase hover:bg-slate-50 hover:text-slate-600 transition-all"
                        >
                            Discard Draft
                        </button>
                    </div>
                </div>

                {/* Right: History */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Past Records - Refined Style */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-md border-2 border-slate-50 relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] text-slate-400">
                            <Clock size={80} />
                        </div>

                        <h3 className="text-sm font-bold text-slate-800 mb-8 flex items-center gap-3 relative z-10">
                            <div className="p-2 bg-slate-50 rounded-xl">
                                <History size={16} className="text-slate-400" />
                            </div>
                            Incident History
                        </h3>

                        <div className="space-y-4 relative z-10 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                            {history.length > 0 ? history.map((record, idx) => (
                                <div key={idx} className={`p-5 bg-slate-50/50 rounded-2xl space-y-2 border-2 ${idx === 0 ? 'border-blue-100 bg-blue-50/30' : 'border-slate-50'} hover:border-blue-200 transition-all cursor-pointer group`}>
                                    <div className="flex items-center justify-between text-[9px] font-black mb-1">
                                        <span className="text-slate-400 uppercase tracking-widest">{record.date}</span>
                                        <span className={`px-2 py-0.5 rounded-md ${record.type === 'Academic' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>{record.type}</span>
                                    </div>
                                    <p className="text-xs font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{record.title}</p>
                                    <p className="text-[10px] font-bold text-slate-500">{record.studentName}</p>
                                    <p className="text-[10px] text-slate-400 leading-tight line-clamp-2 italic">"{record.excerpt}"</p>
                                </div>
                            )) : (
                                <div className="text-center py-10">
                                    <p className="text-xs text-slate-400 italic">No records found.</p>
                                </div>
                            )}
                        </div>

                        <button className="w-full mt-8 py-4 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/30 transition-all duration-300">
                            View Composite Timeline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConferenceNotes;
