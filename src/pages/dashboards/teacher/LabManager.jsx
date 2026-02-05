import React, { useState } from 'react';
import {
    FlaskConical, Calendar, ClipboardList, FileText,
    Sparkles, Shield, ChevronRight, LayoutDashboard,
    Microscope, AlertTriangle, CheckCircle2, Search, Filter, Clock,
    Plus, UploadCloud, Image, Award, X, Users, BookOpen, Link, TestTube
} from 'lucide-react';

const LabManager = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'planner', 'operations', 'assessment'

    // Inventory Request States
    const [requestForm, setRequestForm] = useState({ item: '', qty: '', date: '', reason: '' });
    const [inventoryRequests, setInventoryRequests] = useState([
        { id: 1, item: 'Litmus Paper (Red)', qty: '5 pks', status: 'Approved', date: '2026-02-02' },
        { id: 2, item: 'Conc. HCl', qty: '2 L', status: 'Pending', date: '2026-02-04' },
    ]);

    // Planner State (Screen 230)
    const [sessionPlan, setSessionPlan] = useState({
        title: 'Photosynthesis Rate',
        class: '9-A',
        subject: 'Biology',
        teacher: 'Mrs. Verma',
        linkedUnit: 'Unit 4: Plant Physiology',
        linkedLesson: 'L4.2: Introduction to Photosynthesis',
        objective: 'Investigate factors affecting photosynthesis rate',
        outcomes: ['BIO.9.4.1 (Photosynthesis)', 'BIO.9.4.2 (Exp. Design)'],
        duration: '60 Minutes',
        breakdown: { setup: 10, experiment: 35, discussion: 15 },
        grouping: 'Groups of 4 (Station Rotation)',
        resources: [
            { id: 1, name: 'Floating Leaf Disk Protocol', type: 'PDF' },
            { id: 2, name: 'Safety Data Sheet: NaHCO3', type: 'Link' }
        ],
        materials: [],
        safetyStatus: 'Pending',
        isFinalized: false
    });

    const [aiSuggestion, setAiSuggestion] = useState(null);
    const [notification, setNotification] = useState(null);

    // AI Logic for Suggestions
    const checkAiSuggestions = (item) => {
        if (!item) {
            setAiSuggestion(null);
            return;
        }

        const lowerItem = item.toLowerCase();

        // 1. Suggest alternatives
        if (lowerItem.includes('plastic') && lowerItem.includes('beaker')) {
            setAiSuggestion({
                type: 'suggestion',
                message: 'We have 15 "Glass Beakers (500ml)" in storage. Consider using those instead of ordering new plastic ones.'
            });
            return;
        }

        // 2. Flag repeat usage
        const recentRequest = inventoryRequests.find(req =>
            req.item.toLowerCase().includes(lowerItem) &&
            new Date(req.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Within last 7 days
        );

        if (recentRequest) {
            setAiSuggestion({
                type: 'warning',
                message: `Repeat request detected! ${recentRequest.qty} of "${recentRequest.item}" was requested on ${recentRequest.date}. Check current stock.`
            });
            return;
        }

        setAiSuggestion(null);
    };

    // Handle Form Submission
    const handleRequestSubmit = () => {
        if (!requestForm.item || !requestForm.qty || !requestForm.date) return;

        const newRequest = {
            id: Date.now(),
            ...requestForm,
            status: 'Pending'
        };

        setInventoryRequests([newRequest, ...inventoryRequests]);
        setRequestForm({ item: '', qty: '', date: '', reason: '' });
        setAiSuggestion(null);

        // Show notification
        setNotification({
            title: 'Request Submitted',
            message: `Request for ${newRequest.item} sent to Admin.`,
            type: 'success'
        });
        setTimeout(() => setNotification(null), 3000);
    };

    // Simulate Approval Workflow
    const simulateApproval = (id) => {
        setInventoryRequests(prev => prev.map(req => {
            if (req.id === id) {
                const newStatus = 'Approved';
                // Show notification
                setNotification({
                    title: 'Request Approved',
                    message: `Your request for ${req.item} has been approved.`,
                    type: 'success'
                });
                setTimeout(() => setNotification(null), 3000);
                return { ...req, status: newStatus };
            }
            return req;
        }));
    };

    // Planner Logic for Screen 230
    const handleDraftObjective = () => {
        // Simulate AI Drafting
        setSessionPlan(prev => ({ ...prev, objective: "To investigate the effect of light intensity on the rate of photosynthesis using floating leaf disks." }));
        setNotification({ title: 'AI Draft Generated', message: 'Objective aligned with Unit 4 standards.', type: 'success' });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleFinalizePlan = () => {
        setSessionPlan(prev => ({ ...prev, isFinalized: true, safetyStatus: 'Approved' }));
        setNotification({ title: 'Session Finalized', message: 'Lab plan is now locked and ready for scheduling.', type: 'success' });
        setTimeout(() => setNotification(null), 3000);
    };

    const toggleOutcome = (outcome) => {
        if (sessionPlan.isFinalized) return;
        setSessionPlan(prev => {
            const exists = prev.outcomes.includes(outcome);
            return {
                ...prev,
                outcomes: exists ? prev.outcomes.filter(o => o !== outcome) : [...prev.outcomes, outcome]
            };
        });
    };

    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] transition-all duration-500 ${activeTab === id
                ? "bg-indigo-500/20 backdrop-blur-3xl text-white shadow-2xl scale-105 border border-white/20"
                : "text-indigo-100/60 hover:bg-white/10 hover:text-white"
                }`}
        >
            <Icon size={18} />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{label}</span>
        </button>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-12 relative">
            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-24 right-8 z-50 animate-in slide-in-from-right-10 fade-in duration-300">
                    <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[300px]">
                        <div className={`p-2 rounded-xl ${notification.type === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                            {notification.type === 'success' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">{notification.title}</h4>
                            <p className="text-xs text-slate-500 font-medium">{notification.message}</p>
                        </div>
                        <button onClick={() => setNotification(null)} className="ml-auto text-slate-300 hover:text-slate-500">
                            <X size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Header Section with Gradient Card */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    {/* Krimson OS Pill Breadcrumb */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20 mb-6">
                        <Sparkles size={12} className="text-emerald-200" />
                        Krimson OS • Lab Management
                    </div>

                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                                    <Microscope size={28} className="text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Science Labs</h1>
                            </div>
                            <p className="text-emerald-100 font-medium text-lg max-w-2xl leading-relaxed opacity-90">
                                Centralized hub for lab planning, safety compliance, inventory requests, and student assessments.
                            </p>
                        </div>

                        <div className="flex bg-slate-900/40 backdrop-blur-3xl p-2.5 rounded-[3rem] border border-white/10 shadow-2xl scale-105 lg:scale-110">
                            <TabButton id="dashboard" label="Dashboard" icon={LayoutDashboard} />
                            <TabButton id="planner" label="Planner" icon={FlaskConical} />
                            <TabButton id="operations" label="Operations" icon={Shield} />
                            <TabButton id="assessment" label="Assessment" icon={FileText} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Content Placeholder */}
            <div className="min-h-[500px]">
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-bottom-4 duration-500">
                        {/* KPI Cards */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Safety Compliance', value: '98%', desc: 'Last 30 Days', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                                { label: 'Lab Utilization', value: '85%', desc: 'Weekly Average', icon: FlaskConical, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
                                { label: 'Pending Requests', value: '3', desc: 'Inventory Approval', icon: ClipboardList, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-between group hover:scale-[1.02] transition-transform">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</h3>
                                        <p className="text-[10px] font-bold text-slate-500 mt-2 bg-slate-100 px-2 py-1 rounded-lg w-fit">{stat.desc}</p>
                                    </div>
                                    <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} ${stat.border} border-2 group-hover:rotate-12 transition-transform`}>
                                        <stat.icon size={28} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Upcoming Sessions Feed (8 Cols) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                                    <Calendar size={20} className="text-slate-400" /> Upcoming Sessions
                                </h3>
                                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
                                    View Calendar
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { id: 1, title: 'Acid-Base Titration', class: '10-A Chemistry', time: '10:00 AM - 11:30 AM', date: 'Today', status: 'Upcoming', lab: 'Chem Lab 1' },
                                    { id: 2, title: 'Onion Root Tip Mitosis', class: '9-B Biology', time: '02:00 PM - 03:30 PM', date: 'Tomorrow', status: 'Scheduled', lab: 'Bio Lab 2' },
                                    { id: 3, title: 'Ohm’s Law Verification', class: '10-C Physics', time: '09:00 AM - 10:30 AM', date: 'Feb 12', status: 'Scheduled', lab: 'Physics Lab' },
                                ].map((session) => (
                                    <div key={session.id} className="group p-6 bg-white border border-slate-100 hover:border-indigo-200 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-5">
                                                <div className="p-4 bg-slate-50 text-slate-400 rounded-2xl font-bold text-center min-w-[80px]">
                                                    <span className="block text-xs uppercase tracking-wider">{session.date.split(' ')[0]}</span>
                                                    <span className="block text-lg text-slate-800">{session.date.split(' ')[1] || ''}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{session.title}</h4>
                                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">{session.class} • {session.lab}</p>
                                                    <div className="flex items-center gap-2 mt-3 text-xs font-medium text-slate-400">
                                                        <Clock size={14} /> {session.time}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                                                {session.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Alerts / Quick Actions (4 Cols) */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-[50px]"></div>

                                <h4 className="flex items-center gap-2 font-bold text-lg mb-6 relative z-10">
                                    <AlertTriangle size={20} className="text-amber-400" /> Attention Needed
                                </h4>

                                <div className="space-y-4 relative z-10">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Inventory Low</span>
                                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-300">Conc. H2SO4 is running low (Below 500ml).</p>
                                    </div>

                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold text-red-300 uppercase tracking-wider">Safety Audit</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-300">Physics Lab fire extinguisher expiry due in 5 days.</p>
                                    </div>
                                </div>

                                <button className="mt-6 w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-lg">
                                    Resolve All Issues
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-lg">
                                <h4 className="font-bold text-slate-800 mb-4">Quick Actions</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-2xl text-indigo-600 font-bold text-xs flex flex-col items-center gap-2 transition-colors">
                                        <Calendar size={20} /> Book Slot
                                    </button>
                                    <button className="p-4 bg-emerald-50 hover:bg-emerald-100 rounded-2xl text-emerald-600 font-bold text-xs flex flex-col items-center gap-2 transition-colors">
                                        <ClipboardList size={20} /> Request Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'planner' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-right-8 duration-500">
                        {/* Session List (Side Panel) */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl overflow-hidden min-h-[600px] flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">My Plans</h3>
                                    <button className="p-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors">
                                        <Search size={20} />
                                    </button>
                                </div>

                                <button className="w-full py-4 mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                    <FlaskConical size={16} /> Create New Plan
                                </button>

                                <div className="space-y-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                                    {[
                                        { title: 'Photosynthesis Rate', class: '9-A', status: 'Draft', date: 'Feb 15' },
                                        { title: 'Titration Basics', class: '10-C', status: 'Ready', date: 'Feb 18' },
                                        { title: 'Pendulum Motion', class: '9-B', status: 'Completed', date: 'Jan 20' },
                                    ].map((plan, i) => (
                                        <div key={i} className={`p-4 rounded-2xl border transition-all cursor-pointer ${i === 0 ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className={`font-bold text-sm ${i === 0 ? 'text-indigo-900' : 'text-slate-700'}`}>{plan.title}</h4>
                                                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg ${plan.status === 'Draft' ? 'bg-amber-100 text-amber-600' :
                                                    plan.status === 'Ready' ? 'bg-emerald-100 text-emerald-600' :
                                                        'bg-slate-100 text-slate-500'
                                                    }`}>{plan.status}</span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium">{plan.class} • {plan.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Planner Workspace (Functional Screen 230) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex-1 mr-8">
                                        {/* Editable Title */}
                                        <input
                                            type="text"
                                            value={sessionPlan.title}
                                            disabled={sessionPlan.isFinalized}
                                            onChange={(e) => setSessionPlan({ ...sessionPlan, title: e.target.value })}
                                            className="text-2xl font-black text-slate-800 tracking-tight bg-transparent border-b-2 border-transparent hover:border-slate-200 focus:border-indigo-400 focus:outline-none w-full transition-colors p-1"
                                            placeholder="Enter Session Title..."
                                        />
                                        <div className="flex items-center gap-3 mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            <span>{sessionPlan.subject}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span>Grade {sessionPlan.class}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span>{sessionPlan.teacher}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        {!sessionPlan.isFinalized && (
                                            <>
                                                <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-indigo-300 transition-colors">
                                                    Save Draft
                                                </button>
                                                <button
                                                    onClick={handleFinalizePlan}
                                                    className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                                                >
                                                    Finalize Plan
                                                </button>
                                            </>
                                        )}
                                        {sessionPlan.isFinalized && (
                                            <button className="px-5 py-2.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                                <CheckCircle2 size={14} /> Plan Finalized
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Plan Form Sections */}
                                <div className="space-y-8 relative z-10">
                                    {/* Section 1: Context & Outcomes */}
                                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">1</div>
                                            Session Context
                                        </h4>

                                        <div className="space-y-6">
                                            {/* Linked Lesson & Unit */}
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                                        <BookOpen size={10} /> Linked Unit
                                                    </label>
                                                    <select
                                                        value={sessionPlan.linkedUnit}
                                                        disabled={sessionPlan.isFinalized}
                                                        onChange={(e) => setSessionPlan({ ...sessionPlan, linkedUnit: e.target.value })}
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 disabled:opacity-60"
                                                    >
                                                        <option>Unit 4: Plant Physiology</option>
                                                        <option>Unit 5: Human Anatomy</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Linked Lesson</label>
                                                    <select
                                                        value={sessionPlan.linkedLesson}
                                                        disabled={sessionPlan.isFinalized}
                                                        onChange={(e) => setSessionPlan({ ...sessionPlan, linkedLesson: e.target.value })}
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 disabled:opacity-60"
                                                    >
                                                        <option>L4.2: Introduction to Photosynthesis</option>
                                                        <option>L4.3: Chlorophyll Pigments</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Objective with AI */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center px-1">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Learning Objective</label>
                                                    {!sessionPlan.isFinalized && (
                                                        <button
                                                            onClick={handleDraftObjective}
                                                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <Sparkles size={12} /> AI: Draft Objective
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={sessionPlan.objective}
                                                        disabled={sessionPlan.isFinalized}
                                                        onChange={(e) => setSessionPlan({ ...sessionPlan, objective: e.target.value })}
                                                        className="w-full p-3 pr-10 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-70 disabled:bg-slate-50"
                                                        placeholder="Define the goal of this lab..."
                                                    />
                                                </div>
                                            </div>

                                            {/* Duration & Grouping */}
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                                        <Clock size={10} /> Duration
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <select
                                                            value={sessionPlan.duration}
                                                            disabled={sessionPlan.isFinalized}
                                                            onChange={(e) => setSessionPlan({ ...sessionPlan, duration: e.target.value })}
                                                            className="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 disabled:opacity-60"
                                                        >
                                                            <option>90 Minutes</option>
                                                            <option>60 Minutes</option>
                                                            <option>45 Minutes</option>
                                                        </select>
                                                    </div>
                                                    {/* Time Breakdown Inputs */}
                                                    <div className="flex gap-2 mt-2">
                                                        {['Setup', 'Experiment', 'Discussion'].map((type) => (
                                                            <div key={type} className="flex-1 bg-white rounded-lg p-2 border border-slate-100 flex flex-col items-center">
                                                                <span className="text-[9px] text-slate-400 font-bold uppercase">{type}</span>
                                                                <input
                                                                    type="number"
                                                                    disabled={sessionPlan.isFinalized}
                                                                    value={sessionPlan.breakdown[type.toLowerCase()]}
                                                                    onChange={(e) => setSessionPlan({ ...sessionPlan, breakdown: { ...sessionPlan.breakdown, [type.toLowerCase()]: parseInt(e.target.value) } })}
                                                                    className="w-full text-center font-bold text-xs text-slate-700 focus:outline-none bg-transparent"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                                        <Users size={10} /> Student Grouping
                                                    </label>
                                                    <select
                                                        value={sessionPlan.grouping}
                                                        disabled={sessionPlan.isFinalized}
                                                        onChange={(e) => setSessionPlan({ ...sessionPlan, grouping: e.target.value })}
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-400 disabled:opacity-60"
                                                    >
                                                        <option>Groups of 4 (Station Rotation)</option>
                                                        <option>Pairs (Lab Partners)</option>
                                                        <option>Individual</option>
                                                    </select>
                                                    <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
                                                        <p className="text-[10px] text-indigo-800 font-medium leading-relaxed">
                                                            <strong>Note:</strong> Selected grouping will determine the number of data sheets generated for the session.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Outcome Linkage */}
                                            <div className="pt-4 border-t border-slate-200/60">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-3 block">Outcome Linkage (Multi-select)</label>
                                                <div className="flex flex-wrap gap-2">
                                                    {['BIO.9.4.1 (Photosynthesis)', 'BIO.9.4.2 (Exp. Design)', 'SCI.INQ.3 (Data Analysis)', 'SCI.SAF.1 (Lab Safety)'].map((tag, i) => {
                                                        const isSelected = sessionPlan.outcomes.includes(tag);
                                                        return (
                                                            <span
                                                                key={i}
                                                                onClick={() => toggleOutcome(tag)}
                                                                className={`px-3 py-1.5 border rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer transition-all hover:scale-105 ${isSelected
                                                                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm'
                                                                    : 'bg-white border-slate-200 text-slate-500 opacity-60 hover:opacity-100'
                                                                    }`}
                                                            >
                                                                {tag}
                                                                {isSelected && <CheckCircle2 size={12} className="text-emerald-600" />}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2: Resources, Activity & Materials */}
                                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs">2</div>
                                            Resources & Activity
                                        </h4>

                                        <div className="space-y-8">
                                            {/* Activity Cards */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                                        <FileText size={10} /> Activity Cards
                                                    </label>
                                                    <button className="text-[10px] font-bold text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
                                                        <Plus size={12} /> Add Card
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {sessionPlan.resources.map((res) => (
                                                        <div key={res.id} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                                            <div className={`p-2 rounded-lg ${res.type === 'PDF' ? 'bg-indigo-50 text-indigo-600' : 'bg-pink-50 text-pink-600'}`}>
                                                                {res.type === 'PDF' ? <FileText size={16} /> : <Link size={16} />}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-xs font-bold text-slate-800 line-clamp-1">{res.name}</div>
                                                                <div className="text-[10px] text-slate-400 font-medium">{res.type} Resource</div>
                                                            </div>
                                                            {!sessionPlan.isFinalized && (
                                                                <button className="text-slate-300 hover:text-red-400 p-1 rounded-full hover:bg-red-50 transition-colors">
                                                                    <X size={14} />
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                    {sessionPlan.resources.length === 0 && (
                                                        <div className="col-span-2 p-4 text-center border-2 border-dashed border-slate-200 rounded-xl">
                                                            <p className="text-[10px] text-slate-400 font-bold">No activity cards attached.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Materials Linkage */}
                                            <div className="pt-6 border-t border-slate-200/60">
                                                <div className="flex justify-between items-center mb-3">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                                        <TestTube size={10} /> Required Materials (Inventory)
                                                    </label>
                                                    <button
                                                        disabled={sessionPlan.isFinalized}
                                                        className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-colors flex items-center gap-1 disabled:opacity-50"
                                                    >
                                                        <Search size={12} /> Link Item
                                                    </button>
                                                </div>

                                                {/* Empty State for Materials */}
                                                {sessionPlan.materials.length === 0 ? (
                                                    <div className="flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
                                                        <FlaskConical size={24} className="mb-2 opacity-50" />
                                                        <p className="text-xs font-bold">No materials linked yet</p>
                                                        <p className="text-[10px] mt-1">Link items from inventory to auto-check availability.</p>
                                                    </div>
                                                ) : (
                                                    // List would go here
                                                    <div></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 3: Safety & Finalize Checks */}
                                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">3</div>
                                            Safety & Validation
                                        </h4>

                                        <div className="space-y-6">
                                            {/* Safety Status Banner */}
                                            <div className={`p-4 rounded-xl border flex items-center justify-between ${sessionPlan.safetyStatus === 'Approved'
                                                    ? 'bg-emerald-50 border-emerald-200'
                                                    : 'bg-amber-50 border-amber-200'
                                                }`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg ${sessionPlan.safetyStatus === 'Approved' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                                                        }`}>
                                                        {sessionPlan.safetyStatus === 'Approved' ? <Shield size={18} /> : <AlertTriangle size={18} />}
                                                    </div>
                                                    <div>
                                                        <div className={`text-xs font-black uppercase tracking-wider ${sessionPlan.safetyStatus === 'Approved' ? 'text-emerald-700' : 'text-amber-700'
                                                            }`}>
                                                            Safety Audit: {sessionPlan.safetyStatus}
                                                        </div>
                                                        <div className={`text-[10px] font-medium mt-0.5 ${sessionPlan.safetyStatus === 'Approved' ? 'text-emerald-600' : 'text-amber-600'
                                                            }`}>
                                                            {sessionPlan.safetyStatus === 'Approved'
                                                                ? 'All materials and procedures cleared.'
                                                                : 'Pending review of linked chemicals.'}
                                                        </div>
                                                    </div>
                                                </div>
                                                {sessionPlan.safetyStatus !== 'Approved' && !sessionPlan.isFinalized && (
                                                    <button className="px-3 py-1.5 bg-white text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm border border-amber-100 hover:bg-amber-50">
                                                        Run Audit
                                                    </button>
                                                )}
                                            </div>

                                            {/* AI Suggestion Panel */}
                                            {sessionPlan.objective && !sessionPlan.isFinalized && (
                                                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-sm relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10">
                                                        <Sparkles size={48} />
                                                    </div>
                                                    <div className="flex gap-3 relative z-10">
                                                        <div className="mt-0.5 min-w-[20px]">
                                                            <Sparkles size={16} className="text-indigo-600" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[11px] font-black text-indigo-700 uppercase tracking-wider mb-1">AI Insight</h5>
                                                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                                                Based on "Photosynthesis", consider adding a control group with no light source to demonstrate causality clearly.
                                                            </p>
                                                            <div className="flex gap-2 mt-3">
                                                                <button className="text-[9px] font-bold bg-white text-indigo-600 px-2 py-1 rounded border border-indigo-100 hover:border-indigo-300 transition-colors shadow-sm">
                                                                    Add Control Group
                                                                </button>
                                                                <button className="text-[9px] font-bold text-slate-400 px-2 py-1 hover:text-slate-600">
                                                                    Dismiss
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'operations' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-right-8 duration-500">
                        {/* Booking Calendar (Left) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl min-h-[600px]">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 tracking-tight">Lab Booking System</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Select a slot to reserve</p>
                                    </div>
                                    <div className="flex bg-slate-100 p-1 rounded-xl">
                                        <button className="px-4 py-2 bg-white text-slate-800 rounded-xl shadow-sm text-xs font-black uppercase tracking-widest">Day View</button>
                                        <button className="px-4 py-2 text-slate-400 rounded-xl text-xs font-black uppercase tracking-widest hover:text-slate-600">Week View</button>
                                    </div>
                                </div>

                                {/* Mock Calendar Grid */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-12 gap-4 text-center mb-2">
                                        <div className="col-span-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Time</div>
                                        <div className="col-span-5 text-xs font-bold text-indigo-500 uppercase tracking-widest">Chemistry Lab</div>
                                        <div className="col-span-5 text-xs font-bold text-emerald-500 uppercase tracking-widest">Physics Lab</div>
                                    </div>

                                    {[
                                        { time: '08:00 AM', chem: { status: 'Free' }, phys: { status: 'Occupied', class: '12-A', teacher: 'Mr. Sharma' } },
                                        { time: '09:00 AM', chem: { status: 'Occupied', class: '10-B', teacher: 'Ms. Alice' }, phys: { status: 'Free' } },
                                        { time: '10:00 AM', chem: { status: 'Maintenance', type: 'warn' }, phys: { status: 'Occupied', class: '9-C', teacher: 'Mrs. Verma' } },
                                        { time: '11:00 AM', chem: { status: 'Free' }, phys: { status: 'Free' } },
                                        { time: '12:00 PM', chem: { status: 'Free' }, phys: { status: 'Free' } },
                                    ].map((slot, i) => (
                                        <div key={i} className="grid grid-cols-12 gap-4 items-center group">
                                            <div className="col-span-2 text-xs font-bold text-slate-400">{slot.time}</div>

                                            {/* Chem Slot */}
                                            <div className={`col-span-5 p-3 rounded-2xl border transition-all ${slot.chem.status === 'Free' ? 'bg-indigo-50 border-indigo-100 border-dashed text-indigo-400 hover:bg-indigo-100 cursor-pointer' :
                                                slot.chem.type === 'warn' ? 'bg-amber-50 border-amber-100 text-amber-600 opacity-80' :
                                                    'bg-white border-slate-200 text-slate-400 opacity-60'
                                                }`}>
                                                {slot.chem.status === 'Free' ? (
                                                    <div className="flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-wider">
                                                        <Plus size={14} /> Book Slot
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <span className="font-bold text-xs block">{slot.chem.status}</span>
                                                        {slot.chem.class && <span className="text-[9px] uppercase tracking-wide block">{slot.chem.class}</span>}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Physics Slot */}
                                            <div className={`col-span-5 p-3 rounded-2xl border transition-all ${slot.phys.status === 'Free' ? 'bg-emerald-50 border-emerald-100 border-dashed text-emerald-400 hover:bg-emerald-100 cursor-pointer' :
                                                'bg-white border-slate-200 text-slate-400 opacity-60'
                                                }`}>
                                                {slot.phys.status === 'Free' ? (
                                                    <div className="flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-wider">
                                                        <Plus size={14} /> Book Slot
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <span className="font-bold text-xs block">{slot.phys.status}</span>
                                                        {slot.phys.class && <span className="text-[9px] uppercase tracking-wide block">{slot.phys.class}</span>}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Safety & Inventory (Right) */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Inventory Request System (Enhanced with TestManager UI) */}
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col gap-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-slate-800 tracking-tight flex items-center gap-2 text-lg">
                                            <ClipboardList size={22} className="text-indigo-600" /> Inventory Request
                                        </h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Request materials • AI-Assisted</p>
                                    </div>
                                    <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                        Beta
                                    </div>
                                </div>

                                {/* Dynamic Request Form */}
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                                            <Search size={10} /> Item Details
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <FlaskConical size={16} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Search item (e.g. Beakers, H2SO4)..."
                                                value={requestForm.item}
                                                onChange={(e) => setRequestForm({ ...requestForm, item: e.target.value })}
                                                onBlur={() => checkAiSuggestions(requestForm.item)}
                                                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 focus:bg-white focus:border-indigo-400 focus:outline-none transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-1/3 space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Quantity</label>
                                            <div className="relative group">
                                                <input
                                                    type="number"
                                                    placeholder="0"
                                                    value={requestForm.qty}
                                                    onChange={(e) => setRequestForm({ ...requestForm, qty: e.target.value })}
                                                    className="w-full p-3.5 text-center bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-indigo-400 transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-2/3 space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Required By</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Calendar size={16} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                </div>
                                                <input
                                                    type="date"
                                                    value={requestForm.date}
                                                    onChange={(e) => setRequestForm({ ...requestForm, date: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-indigo-400 transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Purpose/Lab</label>
                                        <textarea
                                            rows="2"
                                            placeholder="Reason for request..."
                                            value={requestForm.reason}
                                            onChange={(e) => setRequestForm({ ...requestForm, reason: e.target.value })}
                                            className="w-full p-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-indigo-400 placeholder:text-slate-400 placeholder:font-medium transition-all resize-none shadow-sm"
                                        ></textarea>
                                    </div>

                                    {/* AI Suggestion/Warning Alert */}
                                    {aiSuggestion && (
                                        <div className={`p-4 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 border ${aiSuggestion.type === 'warning' ? 'bg-amber-50 border-amber-200 shadow-sm' : 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 shadow-sm'
                                            }`}>
                                            {aiSuggestion.type === 'warning' ? (
                                                <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600"><AlertTriangle size={16} /></div>
                                            ) : (
                                                <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600"><Sparkles size={16} /></div>
                                            )}
                                            <div>
                                                <p className={`text-xs font-bold ${aiSuggestion.type === 'warning' ? 'text-amber-700' : 'text-indigo-700'
                                                    }`}>
                                                    {aiSuggestion.type === 'warning' ? 'Wait, check this!' : 'AI Suggestion'}
                                                </p>
                                                <p className={`text-[10px] font-medium leading-relaxed mt-1 ${aiSuggestion.type === 'warning' ? 'text-amber-600/90' : 'text-slate-600'
                                                    }`}>
                                                    {aiSuggestion.message}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleRequestSubmit}
                                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                                        Submit Request
                                    </button>
                                </div>

                                {/* Recent Requests Status */}
                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Status</h4>
                                        <button className="text-[10px] font-bold text-indigo-500 hover:text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg transition-colors">View All</button>
                                    </div>
                                    <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                                        {inventoryRequests.map((req) => (
                                            <div key={req.id} className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-indigo-100 transition-all group">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${req.status === 'Approved' ? 'bg-emerald-100 text-emerald-600' :
                                                        req.status === 'Rejected' ? 'bg-red-100 text-red-600' :
                                                            'bg-amber-100 text-amber-600'
                                                        }`}>
                                                        {req.item.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-xs text-slate-700 group-hover:text-indigo-600 transition-colors">{req.item}</div>
                                                        <div className="text-[10px] font-medium text-slate-400">{req.qty} • Needed: {req.date}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {/* Simulation Button for Demo */}
                                                    {req.status === 'Pending' && (
                                                        <button
                                                            onClick={() => simulateApproval(req.id)}
                                                            className="p-1.5 text-slate-300 hover:text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors"
                                                            title="Simulate Approval"
                                                        >
                                                            <CheckCircle2 size={16} />
                                                        </button>
                                                    )}
                                                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                        req.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' :
                                                            'bg-amber-50 text-amber-600 border-amber-100'
                                                        }`}>
                                                        {req.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        {inventoryRequests.length === 0 && (
                                            <div className="text-center py-6 bg-slate-50/50 rounded-xl border border-slate-100 border-dashed">
                                                <ClipboardList size={24} className="mx-auto text-slate-300 mb-2" />
                                                <p className="text-[10px] text-slate-400 italic">No recent requests found</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Safety Card (Compact Version) */}
                            <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-[60px] opacity-30"></div>
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-500/20 rounded-xl">
                                            <Shield size={20} className="text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm">Safety Protocols</h3>
                                            <p className="text-[10px] text-slate-400">All systems operational</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors backdrop-blur-sm">
                                        Verify Layout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'assessment' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-right-8 duration-500">
                        {/* Reports & Evidence (Left) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl min-h-[600px]">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 tracking-tight">Assessment Hub</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Evidence & Lab Reports</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-5 py-2.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-colors flex items-center gap-2">
                                            <UploadCloud size={16} /> Upload Media
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    {[
                                        { title: 'Reaction Video', student: 'John D.', type: 'mp4', time: '2 mins ago' },
                                        { title: 'Titration Curve', student: 'Alice M.', type: 'img', time: '10 mins ago' },
                                        { title: 'Crystal Structure', student: 'Team B', type: 'img', time: '1 hour ago' },
                                    ].map((file, i) => (
                                        <div key={i} className="group relative aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 cursor-pointer">
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                                                {file.type === 'img' ? <Image size={32} /> : <FileText size={32} />}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                                <span className="text-white font-bold text-sm">{file.title}</span>
                                                <span className="text-white/70 text-xs">{file.student}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer">
                                        <Plus size={24} className="mb-2" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Add Evidence</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <FileText size={20} className="text-slate-400" /> Pending Lab Reports
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { student: 'Michael Chang', lab: 'Acid-Base Titration', status: 'Submitted', score: '-' },
                                            { student: 'Sarah Jenkins', lab: 'Acid-Base Titration', status: 'Draft', score: '-' },
                                            { student: 'David Kim', lab: 'Photosynthesis Rate', status: 'Graded', score: '18/20' },
                                        ].map((report, i) => (
                                            <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 cursor-pointer">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                                                        {report.student.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-slate-800 text-sm">{report.student}</h5>
                                                        <p className="text-xs text-slate-500">{report.lab}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${report.status === 'Submitted' ? 'bg-blue-100 text-blue-600' :
                                                        report.status === 'Graded' ? 'bg-emerald-100 text-emerald-600' :
                                                            'bg-slate-200 text-slate-500'
                                                        }`}>{report.status}</span>
                                                    <span className="font-bold text-slate-700 w-12 text-right">{report.score}</span>
                                                    <ChevronRight size={16} className="text-slate-400" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rubric (Right) */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden">
                                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Award size={20} className="text-amber-500" /> Active Rubric
                                </h3>

                                <div className="space-y-6">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Procedure (40%)</span>
                                            <span className="text-xs font-bold text-indigo-600">8/10</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 w-[80%] rounded-full"></div>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2 italic">"Followed safety steps correctly but minor error in titration endpoint."</p>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Analysis (40%)</span>
                                            <span className="text-xs font-bold text-indigo-600">- / 10</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-300 w-0 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Conclusion (20%)</span>
                                            <span className="text-xs font-bold text-indigo-600">- / 10</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-300 w-0 rounded-full"></div>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                                        Edit Rubric
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default LabManager;
