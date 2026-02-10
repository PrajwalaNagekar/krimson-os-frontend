import React, { useState } from 'react';
import {
    Shield, AlertTriangle, CheckCircle, Search, Filter,
    ChevronRight, Clock, Monitor, RefreshCw, Eye,
    MoreHorizontal, ArrowUpRight, User, MousePointer2,
    FileText, Zap, Info, ExternalLink, ShieldAlert,
    CheckCircle2, AlertCircle, Trash2, MessageSquare, History
} from 'lucide-react';

const AcademicIntegrity = () => {
    const [view, setView] = useState('overview'); // 'overview', 'details'
    const [selectedIncident, setSelectedIncident] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRisk, setFilterRisk] = useState('all');

    // Mock Integrity Data
    const integrityStats = {
        totalScan: 1240,
        flagged: 42,
        highRisk: 8,
        resolved: 24,
        avgSimilarity: 12
    };

    const flaggedIncidents = [
        {
            id: 'INC-001',
            student: 'Aarav Singh',
            class: 'Grade 9-A',
            assessment: 'Physics Mid-Term Quiz',
            riskLevel: 'High',
            signals: ['Multiple Tab Switches (12)', 'Fast Completion (4m)'],
            similarity: 88,
            status: 'Pending Review',
            time: '2 hours ago',
            metadata: {
                tabSwitches: 12,
                duration: '4m 12s',
                expectedDuration: '15m - 20m',
                device: 'Chrome on Windows',
                ipMatch: false
            }
        },
        {
            id: 'INC-002',
            student: 'Bianca Liu',
            class: 'Grade 10-C',
            assessment: 'Periodic Table Quiz',
            riskLevel: 'Medium',
            signals: ['Unusual Answer Pattern', 'Late Night Submission'],
            similarity: 45,
            status: 'Investigating',
            time: '5 hours ago',
            metadata: {
                tabSwitches: 2,
                duration: '12m 30s',
                expectedDuration: '10m - 15m',
                device: 'Safari on iPad',
                ipMatch: true
            }
        },
        {
            id: 'INC-003',
            student: 'Charlie Tan',
            class: 'Grade 9-B',
            assessment: 'Kinematics Problem Set',
            riskLevel: 'High',
            signals: ['Plagiarism Detected', 'Source: External Web'],
            similarity: 94,
            status: 'Escalated',
            time: 'Yesterday',
            metadata: {
                tabSwitches: 0,
                duration: '45m 00s',
                expectedDuration: '30m - 60m',
                device: 'Edge on Windows',
                ipMatch: false
            }
        },
        {
            id: 'INC-004',
            student: 'Elena Rodriguez',
            class: 'Grade 10-C',
            assessment: 'Chemistry Lab Report',
            riskLevel: 'Low',
            signals: ['Minor Similarity Flags'],
            similarity: 18,
            status: 'Resolved',
            time: 'Yesterday',
            metadata: {
                tabSwitches: 4,
                duration: '18m 20s',
                expectedDuration: '15m - 25m',
                device: 'Mozilla on macOS',
                ipMatch: false
            }
        }
    ];

    const getRiskColor = (level) => {
        switch (level) {
            case 'High': return 'from-red-500 to-rose-600';
            case 'Medium': return 'from-amber-400 to-orange-500';
            case 'Low': return 'from-emerald-400 to-teal-500';
            default: return 'from-slate-400 to-slate-500';
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Pending Review': return 'bg-orange-50 text-orange-600 border-orange-100';
            case 'Investigating': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'Escalated': return 'bg-red-50 text-red-600 border-red-100';
            case 'Resolved': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            default: return 'bg-slate-50 text-slate-600 border-slate-100';
        }
    };

    const OverviewScreen = () => (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* AI Integrity Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-4 md:p-6 bg-white rounded-3xl shadow-sm border-2 border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ShieldAlert size={60} />
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Scanned</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{integrityStats.totalScan}</h3>
                    <div className="mt-4 flex items-center gap-2 text-emerald-500 font-bold text-xs">
                        <ArrowUpRight size={14} />
                        <span>100% Coverage</span>
                    </div>
                </div>

                <div className="p-4 md:p-6 bg-white rounded-3xl shadow-sm border-2 border-red-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Integrity Risks</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-red-500">{integrityStats.flagged}</h3>
                    <div className="mt-4 flex items-center gap-2 text-red-500 font-bold text-xs">
                        <AlertCircle size={14} />
                        <span>{integrityStats.highRisk} Critical Alerts</span>
                    </div>
                </div>

                <div className="p-4 md:p-6 bg-white rounded-3xl shadow-sm border-2 border-blue-100 relative overflow-hidden group hover:shadow-lg transition-all">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Avg Similarity</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{integrityStats.avgSimilarity}%</h3>
                    <div className="mt-4 flex items-center gap-2 text-blue-500 font-bold text-xs">
                        <CheckCircle2 size={14} />
                        <span>Within Safe Range</span>
                    </div>
                </div>

                <div className="p-4 md:p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-all border-2 border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 relative z-10">AI3 Shield Engine</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10">Active</h3>
                    <div className="mt-4 flex items-center gap-2 text-blue-400 font-bold text-xs relative z-10">
                        <RefreshCw size={14} className="animate-spin-slow" />
                        <span>Monitoring Real-time</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
                <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Integrity Incidents</h2>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Pending Human Verification</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search student or assessment..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none w-64 transition-all"
                            />
                        </div>
                        <button className="p-2.5 bg-white text-slate-400 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Student & Context</th>
                                <th className="px-8 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">AI Integrity Signals</th>
                                <th className="px-8 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Similarity</th>
                                <th className="px-8 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Risk Level</th>
                                <th className="px-8 py-4 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                                <th className="px-8 py-4 text-right text-xs font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {flaggedIncidents.map((incident) => (
                                <tr key={incident.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold overflow-hidden shadow-sm">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{incident.student}</div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">
                                                    {incident.class} • {incident.assessment}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-wrap gap-2">
                                            {incident.signals.map((signal, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white border-2 border-slate-100 rounded-lg text-[9px] font-bold text-slate-600 uppercase tracking-tight shadow-sm"
                                                >
                                                    {signal}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className={`text-sm font-bold ${incident.similarity > 70 ? 'text-red-500' : 'text-slate-800'}`}>
                                            {incident.similarity}%
                                        </div>
                                        <div className="text-[10px] font-bold text-slate-300 uppercase">Match</div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className={`px-4 py-1.5 rounded-full inline-block bg-gradient-to-r ${getRiskColor(incident.riskLevel)} text-white transform group-hover:scale-110 transition-transform shadow-md`}>
                                            <div className="text-[9px] font-bold uppercase tracking-widest">{incident.riskLevel}</div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className={`px-4 py-2 rounded-xl border-2 inline-block text-[9px] font-bold uppercase tracking-widest ${getStatusBadge(incident.status)}`}>
                                            {incident.status}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button
                                            onClick={() => {
                                                setSelectedIncident(incident);
                                                setView('details');
                                            }}
                                            className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 flex items-center gap-1 ml-auto"
                                        >
                                            <Eye size={14} />
                                            Verify
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const EvidenceDetailsView = () => (
        <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
            {/* Header / Back */}
            <div className="flex items-center justify-between">
                <button
                    onClick={() => setView('overview')}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-widest"
                >
                    <RefreshCw size={14} className="rotate-[135deg]" />
                    Back to Overview
                </button>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">CASE ID: {selectedIncident.id}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Evidence Summary & Metadata */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 flex items-center justify-center">
                                <User size={32} className="text-blue-400" />
                            </div>
                            <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${getRiskColor(selectedIncident.riskLevel)} text-white shadow-lg`}>
                                <div className="text-[9px] font-bold uppercase tracking-widest">{selectedIncident.riskLevel} Risk</div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-800">{selectedIncident.student}</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 mb-8">{selectedIncident.class}</p>

                        <div className="space-y-3">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-500">
                                    <Clock size={16} />
                                    <span className="text-xs font-bold uppercase">Duration</span>
                                </div>
                                <span className="text-xs font-bold text-slate-800">{selectedIncident.metadata.duration}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-500">
                                    <Monitor size={16} />
                                    <span className="text-xs font-bold uppercase">Device</span>
                                </div>
                                <span className="text-xs font-bold text-slate-800">{selectedIncident.metadata.device}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-500">
                                    <Zap size={16} />
                                    <span className="text-xs font-bold uppercase">Tab Focus</span>
                                </div>
                                <span className="text-xs font-bold text-red-500">{selectedIncident.metadata.tabSwitches} Switches</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Adjudication actions</h4>
                            <div className="grid grid-cols-1 gap-3">
                                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                                    <CheckCircle2 size={16} /> Mark as Cleared
                                </button>
                                <button className="w-full py-4 bg-amber-500 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-amber-600 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                                    <MessageSquare size={16} /> Issue Warning
                                </button>
                                <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 shadow-lg shadow-red-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                                    <ShieldAlert size={16} /> Escalate Case
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden ring-1 ring-white/10">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl opacity-50" />
                        <h4 className="text-sm font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                            <History size={16} className="text-blue-400" />
                            Attempt Timeline
                        </h4>
                        <div className="space-y-6 relative">
                            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-700" />
                            <div className="flex items-start gap-4 relative">
                                <div className="w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 z-10 mt-1" />
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-blue-400">10:45 AM</div>
                                    <p className="text-xs font-medium text-slate-300">Attempt Started - Baseline Initialized</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 relative">
                                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-slate-900 z-10 mt-1 shadow-lg shadow-red-500/40" />
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-red-400">10:47 AM</div>
                                    <p className="text-xs font-medium text-slate-200">High-Freq Tab Switching Detected</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 relative">
                                <div className="w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 z-10 mt-1" />
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-blue-400">10:52 AM</div>
                                    <p className="text-xs font-medium text-slate-300">Fast Submission (Out of Baseline)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Detailed Evidence Viewer */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
                        <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 tracking-tight">AI3 Evidence Analysis</h3>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1 text-center md:text-left">Cross-Reference Patterns & Similarity</p>
                            </div>
                            <div className="p-3 bg-white border border-blue-100 rounded-2xl shadow-sm hidden md:block">
                                <FileText size={24} className="text-blue-500" />
                            </div>
                        </div>

                        <div className="p-8">
                            {/* Similarity Score */}
                            <div className="mb-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Similarity Intensity</h4>
                                    <p className="text-4xl font-black text-slate-800">{selectedIncident.similarity}%</p>
                                </div>
                                <div className="w-full bg-white h-4 rounded-full overflow-hidden p-1 shadow-inner border border-slate-200">
                                    <div
                                        className={`h-full bg-gradient-to-r ${getRiskColor(selectedIncident.riskLevel)} transition-all duration-1000 rounded-full`}
                                        style={{ width: `${selectedIncident.similarity}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-4 px-1">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">Self-Plagiarism</p>
                                        <p className="text-xs font-bold text-slate-700">Low ({Math.floor(Math.random() * 5)}%)</p>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">External Sources</p>
                                        <p className="text-xs font-bold text-red-500">CRITICAL ({selectedIncident.similarity}%)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Signal Details */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-4 mb-2">Detection Signals (AI3 Engine)</h4>

                                {selectedIncident.signals.map((signal, idx) => (
                                    <div key={idx} className="p-6 bg-white rounded-2xl border-2 border-slate-50 flex items-start gap-6 group hover:border-blue-100 hover:bg-blue-50/20 transition-all shadow-sm">
                                        <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shadow-sm transition-transform group-hover:scale-110">
                                            <Info size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-sm font-bold text-slate-800 mb-1">{signal}</h5>
                                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                                AI3 detected an anomaly where the behavior deviated significantly from the class baseline. {idx === 0 ? 'Repetitive tab focus losses are indicative of external search activity.' : 'Completion speed suggest either high pre-existing mastery or non-human interaction.'}
                                            </p>
                                            <button className="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700">
                                                Audit Raw Logs <ExternalLink size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Response Preview */}
                            <div className="mt-12">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-4 mb-6 text-center">Interleaved Response Review</h4>
                                <div className="p-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 text-center">
                                    <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        <Eye size={32} className="text-slate-300" />
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-800 mb-2">Detailed Attempt Viewer</h5>
                                    <p className="text-xs text-slate-400 max-w-xs mx-auto mb-8 font-medium italic">
                                        "Opening the student's response alongside the similarity evidence provides conclusive proof for decision making."
                                    </p>
                                    <button className="px-8 py-3.5 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95">
                                        Launch Full Evidence Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-[1600px] mx-auto pb-20">
            {view === 'overview' ? <OverviewScreen /> : <EvidenceDetailsView />}
        </div>
    );
};

export default AcademicIntegrity;
