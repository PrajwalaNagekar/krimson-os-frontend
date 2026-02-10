import React, { useState } from 'react';
import {
    AlertTriangle, Clock, CheckCircle2, MoreVertical,
    User, BookOpen, Calendar, ArrowRight, MessageSquare,
    Trash2, Filter, Search, ChevronRight, Zap, Target,
    RefreshCw, TrendingDown, Users
} from 'lucide-react';

const InterventionQueue = () => {
    const [activeStatus, setActiveStatus] = useState('New');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data for interventions
    const [interventions, setInterventions] = useState([
        {
            id: 'INT-001',
            student: 'David Kim',
            class: 'Grade 9-A',
            reason: 'Repeated Quiz Failure (Kinematics)',
            evidence: 'Failed last 3 formative assessments in Unit 2. Score trend: 45% -> 38% -> 32%.',
            risk: 'Critical',
            status: 'New',
            signals: ['Low Mastery', 'Declining Trend'],
            assignedTo: 'Unassigned',
            timestamp: '2 hours ago'
        },
        {
            id: 'INT-002',
            student: 'Bianca Liu',
            class: 'Grade 9-A',
            reason: 'Low Outcome Mastery',
            evidence: 'Objective LO-9.PS.3.1 (Kinematic Equations) at 42% after remedial attempt.',
            risk: 'High',
            status: 'Planned',
            signals: ['Outcome Match'],
            assignedTo: 'Ms. Sarah Mitchell',
            timestamp: '5 hours ago'
        },
        {
            id: 'INT-003',
            student: 'Rahul Varma',
            class: 'Grade 9-B',
            reason: 'Assignment Delay Cluster',
            evidence: '3 major lab reports missing in the last 10 days. No response to automated reminders.',
            risk: 'Medium',
            status: 'New',
            signals: ['Engagement Drop'],
            assignedTo: 'Unassigned',
            timestamp: 'Yesterday'
        },
        {
            id: 'INT-004',
            student: 'Zoe Chen',
            class: 'Grade 10-C',
            reason: 'Attendance Threshold Breach',
            evidence: 'Weekly attendance dropped to 72%. Signals overlap with low quiz participation.',
            risk: 'High',
            status: 'In Progress',
            signals: ['Attendance', 'Quiz Skip'],
            assignedTo: 'Counselor Team',
            timestamp: '2 days ago'
        }
    ]);

    const stats = {
        new: interventions.filter(i => i.status === 'New').length,
        planned: interventions.filter(i => i.status === 'Planned').length,
        inProgress: interventions.filter(i => i.status === 'In Progress').length,
        closed: interventions.filter(i => i.status === 'Closed').length
    };

    const getRiskStyles = (risk) => {
        switch (risk) {
            case 'Critical': return 'bg-red-500 text-white shadow-red-200';
            case 'High': return 'bg-orange-500 text-white shadow-orange-200';
            case 'Medium': return 'bg-amber-500 text-white shadow-amber-200';
            default: return 'bg-blue-500 text-white shadow-blue-200';
        }
    };

    const filteredInterventions = interventions.filter(i => {
        const matchesStatus = i.status === activeStatus;
        const matchesSearch = i.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
            i.reason.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Workflow Tabs - Premium Design */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 border-b border-slate-100">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Support Workflow</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Managed Identification & Action</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search student or reason..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 pr-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none w-64 transition-all"
                        />
                    </div>
                    <button className="p-2.5 bg-white text-slate-400 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            <div className="flex p-1.5 bg-slate-100/50 backdrop-blur-sm rounded-2xl w-full max-w-3xl border border-slate-200/50 shadow-inner">
                {['New', 'Planned', 'In Progress', 'Closed'].map(status => (
                    <button
                        key={status}
                        onClick={() => setActiveStatus(status)}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative ${activeStatus === status
                            ? 'bg-white text-blue-600 shadow-md scale-[1.02] ring-1 ring-black/5'
                            : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        {status}
                        {stats[status.toLowerCase().replace(' ', '')] > 0 && (
                            <span className={`ml-2 px-2 py-0.5 rounded-lg ${activeStatus === status ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-500'
                                }`}>
                                {stats[status.toLowerCase().replace(' ', '')]}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Intervention List */}
            <div className="grid grid-cols-1 gap-6">
                {filteredInterventions.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-[2.5rem] p-8 shadow-sm border-2 border-slate-50 hover:border-blue-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    >
                        {/* Subtle Gradient Glow */}
                        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${getRiskStyles(item.risk)}`} />

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column: Student Detail */}
                            <div className="lg:w-1/4 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center text-blue-500 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-500">
                                        <User size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800">{item.student}</h3>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.class}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                                        <span>Signal Risk</span>
                                        <span className={item.risk === 'Critical' ? 'text-red-500' : 'text-blue-500'}>{item.risk}</span>
                                    </div>
                                    <div className="w-full bg-slate-50 h-2 rounded-full overflow-hidden p-0.5 border border-slate-100">
                                        <div className={`h-full rounded-full bg-gradient-to-r ${getRiskStyles(item.risk)}`} style={{ width: item.risk === 'Critical' ? '90%' : item.risk === 'High' ? '75%' : '45%' }} />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 w-fit">
                                    <Clock size={12} />
                                    <span className="uppercase tracking-widest">{item.timestamp}</span>
                                </div>
                            </div>

                            {/* Middle Column: Analysis & Evidence */}
                            <div className="flex-1 bg-slate-50/50 rounded-3xl p-6 border border-slate-100 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl shadow-sm text-white bg-gradient-to-br ${getRiskStyles(item.risk)}`}>
                                        <TrendingDown size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base font-bold text-slate-800 tracking-tight">{item.reason}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed mt-2 font-medium italic">
                                            "{item.evidence}"
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">
                                        <Zap size={12} className="text-blue-400 fill-blue-400" />
                                        AI5 Analysis Active
                                    </div>
                                    {item.signals.map(signal => (
                                        <span key={signal} className="px-3 py-1.5 bg-white text-slate-600 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-slate-200 shadow-sm">
                                            {signal}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Decisions */}
                            <div className="lg:w-1/4 flex flex-col justify-center gap-3">
                                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-3xl space-y-3">
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Intervention Hub</p>
                                    <button className="w-full flex items-center justify-between px-5 py-3 bg-blue-600 text-white rounded-2xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 group active:scale-95">
                                        <span>Plan Remedial</span>
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-full flex items-center justify-between px-5 py-3 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl text-xs font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95">
                                        <span>Conference</span>
                                        <MessageSquare size={16} className="text-slate-300" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between px-3">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ownership</span>
                                    <span className="text-[10px] font-bold text-blue-600 underline decoration-blue-100 cursor-pointer hover:text-blue-700">{item.assignedTo}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredInterventions.length === 0 && (
                    <div className="py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Users size={32} className="text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Clear for now</h3>
                        <p className="text-sm text-slate-400 max-w-xs mx-auto mt-2">
                            No students match the "{activeStatus}" status in the intervention queue. High five! ✋
                        </p>
                    </div>
                )}
            </div>

            {/* AI Performance Insight Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white relative overflow-hidden border-2 border-slate-700">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <RefreshCw size={32} className="animate-spin-slow" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
                            <Target size={18} className="text-blue-400" />
                            Queue Prioritization Active
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">
                            AI5 is currently ranking {interventions.length} items by support urgency. Students with "at-risk" trends and engagement drops are surfaced first.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-bold transition-all backdrop-blur-sm">
                        View Prioritization Logic
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InterventionQueue;
