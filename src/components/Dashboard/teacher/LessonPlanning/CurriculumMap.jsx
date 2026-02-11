import React, { useState } from 'react';
import {
    Search, Filter, Download, AlertTriangle, CheckCircle,
    Target, BarChart, Layers, ArrowUpRight, ShieldCheck,
    Eye, Info, Sparkles
} from 'lucide-react';

const CurriculumMap = () => {
    const [activeTab, setActiveTab] = useState('coverage');
    const [selectedSubject, setSelectedSubject] = useState('Mathematics');

    // Sample data for learning outcomes
    const [outcomes] = useState([
        { id: 'LO1', code: 'M9.1.A', label: 'Knowledge', name: 'Define linear equations and variables', status: 'Covered', unit: 'Linear Equations', strength: 85 },
        { id: 'LO2', code: 'M9.1.B', label: 'Skill', name: 'Solve multi-step linear equations', status: 'In Progress', unit: 'Linear Equations', strength: 62 },
        { id: 'LO3', code: 'M9.2.A', label: 'Knowledge', name: 'Identify properties of quadratic functions', status: 'Not Covered', unit: 'Quadratic Basics', strength: 0 },
        { id: 'LO4', code: 'M9.3.A', label: 'Application', name: 'Apply algebraic concepts to finance problems', status: 'Planed', unit: 'Financial Algebra', strength: 0 },
        { id: 'LO5', code: 'M9.4.A', label: 'Skill', name: 'Construct graphs from data sets', status: 'Covered', unit: 'Coordinate Geometry', strength: 92 },
        { id: 'LO6', code: 'M9.1.C', label: 'Application', name: 'Model real-world scenarios with lines', status: 'Covered', unit: 'Linear Equations', strength: 78 }
    ]);

    const coverageStats = {
        total: outcomes.length,
        covered: outcomes.filter(o => o.status === 'Covered').length,
        inProgress: outcomes.filter(o => o.status === 'In Progress').length,
        notCovered: outcomes.filter(o => o.status === 'Not Covered').length,
        percentage: Math.round((outcomes.filter(o => o.status === 'Covered').length / outcomes.length) * 100)
    };

    const balanceStats = [
        { type: 'Knowledge', value: 35, color: 'bg-blue-500' },
        { type: 'Skills', value: 45, color: 'bg-purple-500' },
        { type: 'Application', value: 20, color: 'bg-pink-500' }
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Covered': return 'bg-green-100 text-green-700 border-green-200';
            case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Not Covered': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    const getLabelColor = (label) => {
        switch (label) {
            case 'Knowledge': return 'text-blue-600 bg-blue-50';
            case 'Skill': return 'text-purple-600 bg-purple-50';
            case 'Application': return 'text-pink-600 bg-pink-50';
            default: return 'text-slate-600 bg-slate-50';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                            Screen 196 / Curriculum Map
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Curriculum Insight Dashboard</h2>
                        <p className="opacity-80 text-sm font-medium">Monitoring standard coverage across Grade 9 • {selectedSubject}</p>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all flex flex-col items-center gap-1 group">
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase">Export Audit</span>
                        </button>
                        <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg transition-all flex flex-col items-center gap-1">
                            <ShieldCheck size={20} />
                            <span className="text-[10px] font-black uppercase">Verify Compliance</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Analytics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Coverage Radial */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 flex items-center justify-between">
                    <div className="space-y-1">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Coverage</h4>
                        <p className="text-4xl font-black text-slate-800">{coverageStats.percentage}%</p>
                        <div className="flex items-center gap-2 text-green-500 text-[10px] font-bold">
                            <ArrowUpRight size={12} />
                            <span>+4% from last term</span>
                        </div>
                    </div>
                    <div className="relative w-24 h-24">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 - (251.2 * coverageStats.percentage) / 100} className="text-blue-500" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Target className="text-blue-200" size={24} />
                        </div>
                    </div>
                </div>

                {/* Balance Bar */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Curriculum Balance</h4>
                    <div className="h-6 w-full rounded-full flex overflow-hidden mb-4">
                        {balanceStats.map(item => (
                            <div key={item.type} className={`${item.color}`} style={{ width: `${item.value}%` }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        {balanceStats.map(item => (
                            <div key={item.type} className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500">{item.type}</span>
                                <span className="text-xs font-black text-slate-800">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Counts */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 rounded-2xl border border-green-100">
                        <span className="text-[10px] font-bold text-green-600 uppercase">Covered</span>
                        <p className="text-2xl font-black text-green-700">{coverageStats.covered}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-2xl border border-red-100">
                        <span className="text-[10px] font-bold text-red-600 uppercase">Gaps</span>
                        <p className="text-2xl font-black text-red-700">{coverageStats.notCovered}</p>
                    </div>
                </div>
            </div>

            {/* Coverage Table */}
            <div className="bg-white rounded-3xl shadow-sm border-2 border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
                    <div className="flex items-center gap-3">
                        <Layers className="text-slate-400" size={20} />
                        <h3 className="font-bold text-slate-800 uppercase tracking-tight">Outcome Coverage Matrix</h3>
                    </div>

                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search codes..."
                                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none w-48"
                            />
                        </div>
                        <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600">
                            <Filter size={16} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-4 text-left">Code</th>
                                <th className="px-6 py-4 text-left">Outcome Name</th>
                                <th className="px-6 py-4 text-center">Focus Area</th>
                                <th className="px-6 py-4 text-left">Unit Context</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Strength</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {outcomes.map(outcome => (
                                <tr key={outcome.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4 truncate">
                                        <span className="font-black text-slate-800 text-xs">{outcome.code}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-xs font-bold text-slate-700 leading-tight">{outcome.name}</p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${getLabelColor(outcome.label)}`}>
                                            {outcome.label}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                            <span className="text-xs font-medium text-slate-600">{outcome.unit}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusStyle(outcome.status)}`}>
                                            {outcome.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-[10px] font-black text-slate-800">{outcome.strength}%</span>
                                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${outcome.strength}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* AI AI6 Insight Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl text-white shadow-xl shadow-red-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                        <AlertTriangle size={80} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="text-white/80" size={20} />
                            <h4 className="font-black uppercase tracking-tighter text-sm">Critical Gap Analysis</h4>
                        </div>
                        <p className="text-xl font-black mb-3 leading-tight">3 Learning Outcomes are at risk of non-coverage.</p>
                        <p className="text-xs opacity-90 mb-6 max-w-md font-medium">Standards M9.2.A and M9.3.A have no teaching hours allocated in the current term plan. AI6 suggests merging these into the "Financial Algebra" unit.</p>
                        <button className="px-6 py-3 bg-white text-red-600 rounded-2xl font-black text-xs uppercase tracking-tighter shadow-xl hover:scale-105 transition-all">
                            Re-route Curriculum
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border-2 border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-blue-500" size={18} />
                                <h4 className="font-black uppercase tracking-tighter text-sm text-slate-800">Smart Search (AI6)</h4>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Search</p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
                                <span className="text-xs font-bold text-slate-600 group-hover:text-blue-700">Where are differentiation touchpoints located?</span>
                                <Eye size={14} className="text-slate-300 group-hover:text-blue-500" />
                            </div>
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
                                <span className="text-xs font-bold text-slate-600 group-hover:text-blue-700">Audit report for M9.1 standard cluster</span>
                                <Eye size={14} className="text-slate-300 group-hover:text-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                            <Info size={12} />
                            <span>Last audited 2 hours ago</span>
                        </div>
                        <button className="font-black text-blue-600 uppercase hover:underline">View Full Log</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumMap;
