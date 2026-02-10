import React, { useState } from 'react';
import {
    Calendar, Clock, Users, BookOpen, ChevronRight,
    Plus, Search, Filter, MoreVertical, FileText,
    CheckCircle, AlertCircle, Trash2, Edit3, ArrowRight,
    Brain, TrendingUp, Target, Award, ShieldCheck,
    LineChart, Zap, Activity, Info, LogOut, Star, Compass, Sparkles
} from 'lucide-react';

const RemedialSessionPlanner = () => {
    const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, drafts, history, remedial, enrichment
    const [searchQuery, setSearchQuery] = useState('');

    const [showWizard, setShowWizard] = useState(false);
    const [wizardStep, setWizardStep] = useState(1);
    const [newSession, setNewSession] = useState({
        title: '',
        type: 'Small Group',
        gap: '',
        students: [],
        objective: '',
        approach: '',
        resources: []
    });

    // Mock Data for Trackers
    const [remedialStudents] = useState([
        { id: 1, name: 'Arjun P.', subject: 'Math', area: 'Fractions', start: '2024-03-01', status: 'Improving', baseline: 42, current: 68, attendance: 4, sessionsTotal: 5, notes: 'Struggles with improper fractions.' },
        { id: 2, name: 'Sana K.', subject: 'Science', area: 'Chemical Bonding', start: '2024-03-05', status: 'Stable', baseline: 35, current: 40, attendance: 2, sessionsTotal: 4, notes: 'Requires visual aids for valency concepts.' },
        { id: 3, name: 'Rahul M.', subject: 'English', area: 'Complex Tenses', start: '2024-03-10', status: 'Ready to Exit', baseline: 55, current: 85, attendance: 5, sessionsTotal: 5, notes: 'Ready for standard assessments.' },
    ]);

    // Mock Data (existing)
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: 'Fractions - Concept Revision',
            status: 'upcoming',
            date: '2024-03-25',
            time: '14:30 - 15:15',
            type: 'Small Group',
            students: 5,
            gap: 'Understanding Denominators',
            mode: 'In-person'
        },
        {
            id: 2,
            title: 'Algebraic Expressions 101',
            status: 'draft',
            lastEdited: '2 hours ago',
            type: 'Workshop',
            gap: 'Variable Substitution'
        },
        {
            id: 3,
            title: 'Reading Comprehension',
            status: 'history',
            date: '2024-03-20',
            attended: 3,
            outcome: 'Improved',
            type: '1-to-1'
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
            {/* Header Section with Gradient - Exact Gradebook Match */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                        Academic Intervention
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                Remedial Session Planner
                            </h1>
                            <p className="opacity-90 font-medium text-sm md:text-base max-w-xl">
                                Plan targeted academic support to bridge learning gaps. This is for focused remediation.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowWizard(true)}
                                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
                            >
                                <Plus size={20} className="stroke-[3px]" />
                                <span>Create Session</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation & Search - Updated with new tabs */}
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <div className="flex flex-1 gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2">
                        {[
                            { id: 'upcoming', label: 'Upcoming', icon: Calendar },
                            { id: 'drafts', label: 'Drafts', icon: FileText },
                            { id: 'history', label: 'History', icon: CheckCircle },
                            { id: 'remedial', label: 'Remedial Tracker', icon: LineChart },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="w-full md:w-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search sessions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-80 pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="animate-fadeIn">
                {/* Tab Views */}

                {activeTab === 'remedial' && (
                    <div className="space-y-8">
                        {/* Summary Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Active Students', value: remedialStudents.length, icon: Users, color: 'blue' },
                                { label: 'Average Improvement', value: '+22%', icon: TrendingUp, color: 'emerald' },
                                { label: 'Ready for Transition', value: remedialStudents.filter(s => s.status === 'Ready to Exit').length, icon: LogOut, color: 'purple' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                                    <div className={`w-12 h-12 bg-${stat.color}-50 text-${stat.color}-500 rounded-2xl flex items-center justify-center`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Tracking Table */}
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-md overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                    <Activity size={20} className="text-blue-500" /> Student Progress Dashboard
                                </h3>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 group">
                                        <Filter size={18} className="group-hover:text-blue-500" />
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-slate-50 text-left">
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Concept Gap</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Sessions</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {remedialStudents.map((student) => (
                                            <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs ring-4 ring-blue-50">
                                                            {student.name.split(' ').map(n => n[0]).join('')}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-800">{student.name}</p>
                                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{student.subject}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-2">
                                                        <span className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                                                            <Target size={14} />
                                                        </span>
                                                        <span className="text-sm font-semibold text-slate-600">{student.area}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 text-center">
                                                    <div className="inline-flex flex-col items-center">
                                                        <span className="text-sm font-bold text-slate-700">{student.attendance} / {student.sessionsTotal}</span>
                                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden border border-slate-200">
                                                            <div className="h-full bg-orange-400" style={{ width: `${(student.attendance / student.sessionsTotal) * 100}%` }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex flex-col gap-1 w-32">
                                                        <div className="flex justify-between text-[10px] font-bold uppercase">
                                                            <span className="text-slate-400">Improvement</span>
                                                            <span className="text-emerald-500">+{student.current - student.baseline}%</span>
                                                        </div>
                                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                                                            <div className="h-full bg-slate-300" style={{ width: `${student.baseline}%` }}></div>
                                                            <div className="h-full bg-emerald-500" style={{ width: `${student.current - student.baseline}%` }}></div>
                                                        </div>
                                                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                                                            <span>Start: {student.baseline}%</span>
                                                            <span>Now: {student.current}%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 ${student.status === 'Ready to Exit' ? 'bg-purple-100 text-purple-700' :
                                                        student.status === 'Improving' ? 'bg-emerald-100 text-emerald-700' :
                                                            'bg-amber-100 text-amber-700'
                                                        }`}>
                                                        {student.status === 'Ready to Exit' ? <Zap size={10} className="fill-purple-700" /> : <TrendingUp size={10} />}
                                                        {student.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <button className="p-2 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all active:scale-95">
                                                        <MoreVertical size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* AI3 Insights & Exit Readiness */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Brain size={24} className="text-blue-400" /> AI3 Intervention Insights
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <AlertCircle size={16} className="text-amber-400" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Slower Progress Detected</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-300 leading-relaxed">
                                            <span className="text-white font-bold">Sana K.</span> is showing minimal improvement in Chemical Bonding. AI suggests switching from Guided Practice to <span className="text-blue-400 underline decoration-dotted">Worked Examples</span> with visual manipulatives.
                                        </p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle size={16} className="text-emerald-400" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Exit Readiness High</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-300 leading-relaxed">
                                            <span className="text-white font-bold">Rahul M.</span> has surpassed his mastery goal (85% vs 75% target). Recommend transitioning back to core classroom instruction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 ring-8 ring-purple-100/50">
                                    <LogOut size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2 font-bold uppercase tracking-tight">Exit Program Readiness</h3>
                                <p className="text-sm text-slate-500 max-w-xs mb-8">Confirm if students are ready to integrate back into regular classroom sessions.</p>
                                <div className="w-full space-y-3">
                                    <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]">
                                        Finalize Transitions (1)
                                    </button>
                                    <button className="w-full py-4 bg-white text-slate-400 border-2 border-slate-100 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                                        View Transition Checklist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'upcoming' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getFilteredSessions('upcoming').map(session => (
                            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 border border-slate-100 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-3xl -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-500 opacity-50"></div>

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className={`px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider ${session.type === '1-to-1' ? 'bg-purple-100 text-purple-700' :
                                        session.type === 'Small Group' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                        {session.type}
                                    </span>
                                    <button className="text-slate-300 hover:text-slate-600 transition-colors">
                                        <MoreVertical size={20} />
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {session.title}
                                </h3>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Focus Gap</p>
                                    <p className="text-sm font-semibold text-slate-700">{session.gap}</p>
                                </div>

                                <div className="flex items-center gap-6 mb-6 text-sm">
                                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                                        <Calendar size={16} className="text-blue-400" />
                                        {session.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                                        <Clock size={16} className="text-orange-400" />
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
                                        <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white pl-0.5">
                                            +{session.students - 3}
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                                        View Plan <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Empty State / Add New */}
                        <button
                            onClick={() => setShowWizard(true)}
                            className="bg-slate-50 rounded-3xl border-4 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/30 transition-all duration-300 min-h-[350px] group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Plus size={32} className="stroke-[3px]" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">Schedule Session</h4>
                            <p className="text-xs font-medium opacity-70 uppercase tracking-wide">Plan Intervention</p>
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
                                    <p className="text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-xl">Gap: {session.gap}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wide hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                                        <Edit3 size={16} /> Continue Editing
                                    </button>
                                    <button className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-red-100 text-red-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getFilteredSessions('history').map(session => (
                            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">
                                            {session.type}
                                        </span>
                                        <CheckCircle size={16} className="text-emerald-500" />
                                    </div>
                                    <h3 className="font-bold text-slate-800">{session.title}</h3>
                                    <p className="text-xs text-slate-400 mt-1 font-medium">{session.date} • {session.attended} Students Attended</p>
                                </div>
                                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-0.5">Outcome</p>
                                    <p className="text-xs font-bold text-emerald-800">{session.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Create Session Wizard Modal - Matching Gradebook's modal style */}
            {showWizard && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">

                        {/* Wizard Header */}
                        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-1">Plan Remedial Session</h2>
                                <p className="text-sm font-medium text-slate-500">Step {wizardStep} of 4: {
                                    wizardStep === 1 ? 'Session Basics' :
                                        wizardStep === 2 ? 'Target Students' :
                                            wizardStep === 3 ? 'Instructional Design' : 'Review & Schedule'
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
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Session Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Fractions - Concept Revision"
                                            className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 focus:outline-none transition-all placeholder:font-medium placeholder:text-slate-400"
                                            value={newSession.title}
                                            onChange={e => setNewSession({ ...newSession, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Type</label>
                                            <div className="flex flex-col gap-2">
                                                {['1-to-1', 'Small Group', 'Workshop'].map(type => (
                                                    <button
                                                        key={type}
                                                        onClick={() => setNewSession({ ...newSession, type })}
                                                        className={`p-4 rounded-xl text-left border-2 transition-all font-bold text-sm ${newSession.type === type
                                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                            : 'border-slate-200 bg-white text-slate-500 hover:border-blue-200'}`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Linked Evidence</label>
                                            <select
                                                className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 focus:border-blue-500 outline-none appearance-none"
                                                value={newSession.evidence || ''}
                                                onChange={e => setNewSession({ ...newSession, evidence: e.target.value })}
                                            >
                                                <option value="">Select Assessment / Outcome</option>
                                                <option value="quiz4">Quiz 4: Fractions (8 Failed)</option>
                                                <option value="assign3">Assignment 3: Mixed Numbers</option>
                                                <option value="outcome_b2">Outcome B.2: Numerators</option>
                                            </select>

                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block pt-4 ml-1">Core Gap Note</label>
                                            <textarea
                                                placeholder="Specific learning gap..."
                                                className="w-full h-24 p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 outline-none resize-none placeholder:font-medium placeholder:text-slate-400"
                                                value={newSession.gap}
                                                onChange={e => setNewSession({ ...newSession, gap: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 2 && (
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="flex-1 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                                                <AlertCircle size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">Low Mastery</h4>
                                                <p className="text-xs font-bold text-orange-600 mt-1">8 Students below 40%</p>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                                                <Brain size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800">AI Suggested</h4>
                                                <p className="text-xs font-bold text-blue-600 mt-1">Based on recent quiz</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 max-h-[400px]">
                                            <span className="font-bold text-slate-500 text-xs uppercase tracking-wider px-2">Select Students</span>
                                            <div className="relative">
                                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input type="text" placeholder="Search roster..." className="pl-8 pr-3 py-1.5 text-xs font-bold border rounded-lg focus:outline-none focus:border-blue-400" />
                                            </div>
                                        </div>
                                        <div className="max-h-[300px] overflow-y-auto p-2">
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <div key={i} className={`flex items-center justify-between p-3 mb-1 rounded-xl transition-all cursor-pointer ${newSession.students.includes(i) ? 'bg-blue-50 border border-blue-100' : 'hover:bg-slate-50 border border-transparent'
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
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${newSession.students.includes(i) ? 'bg-blue-500' : 'bg-slate-300'}`}>
                                                            S{i}
                                                        </div>
                                                        <span className={`font-bold ${newSession.students.includes(i) ? 'text-slate-800' : 'text-slate-500'}`}>Student Name {i}</span>
                                                    </div>
                                                    {newSession.students.includes(i) && <CheckCircle size={20} className="text-blue-500 fill-white" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 3 && (
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Instructional Objective</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 outline-none"
                                            placeholder="e.g. Students will be able to simplify proper fractions"
                                            value={newSession.objective}
                                            onChange={e => setNewSession({ ...newSession, objective: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Teaching Approach</label>
                                        <div className="flex gap-3">
                                            {['Reteaching', 'Guided Practice', 'Worked Examples'].map(app => (
                                                <button
                                                    key={app}
                                                    onClick={() => setNewSession({ ...newSession, approach: app })}
                                                    className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all ${newSession.approach === app ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    {app}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Resources (AI Suggested)</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {['Visual Fraction Models (PDF)', 'Khan Academy Video: Denominators', 'Practice Worksheet A'].map(res => (
                                                <div key={res} className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 text-slate-700 text-sm font-bold bg-white hover:border-blue-300 transition-all cursor-pointer shadow-sm hover:shadow-md">
                                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                                                        <FileText size={16} />
                                                    </div>
                                                    {res}
                                                </div>
                                            ))}
                                            <button className="p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all">
                                                + Upload Material
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 4 && (
                                <div className="space-y-8 flex flex-col items-center justify-center py-8">
                                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center max-w-lg w-full">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm mx-auto mb-6">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to Schedule?</h3>
                                        <p className="text-slate-500 font-medium mb-8">This will log the session in your planner and notify selected students.</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1 text-left">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Date</label>
                                                <input type="date" className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-400" />
                                            </div>
                                            <div className="space-y-1 text-left">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Time</label>
                                                <input type="time" className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-400" />
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
                                className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all text-xs uppercase tracking-wider flex items-center gap-2"
                            >
                                {wizardStep === 4 ? 'Confirm Session' : 'Next Step'}
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

export default RemedialSessionPlanner;
