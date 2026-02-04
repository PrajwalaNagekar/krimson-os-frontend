import React, { useState } from 'react';
import {
    Calendar, Clock, Users, FileText, CheckCircle2,
    AlertCircle, ChevronRight, Plus, Search, Filter,
    Sparkles, MessageSquare, Target, ShieldCheck,
    Settings, Save, Lock, ArrowRight, Video, MapPin,
    TrendingUp, Award, Activity, Trash2
} from 'lucide-react';
import SuccessToast from '../../../components/common/SuccessToast';

const PTMManager = () => {
    const [activeTab, setActiveTab] = useState('scheduler'); // 'scheduler', 'agenda', 'tracker'
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookingLock, setBookingLock] = useState(true);
    const [toast, setToast] = useState({ isOpen: false, message: '' });
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Mock Data
    const [slots, setSlots] = useState([
        { id: 1, student: "Arjun Mehta", parent: "Rajesh Mehta", time: "09:00 AM", duration: "15 min", mode: "Online", status: "booked", agendaCompleted: true },
        { id: 2, student: "Sanya Iyer", parent: "Meera Iyer", time: "09:20 AM", duration: "15 min", mode: "In-Person", status: "booked", agendaCompleted: false },
        { id: 3, student: "Kabir Singh", parent: "Jasprit Singh", time: "09:40 AM", duration: "15 min", mode: "Online", status: "available", agendaCompleted: false },
    ]);

    const [filterStatus, setFilterStatus] = useState('all');
    const [showActionModal, setShowActionModal] = useState(false);
    const [actions, setActions] = useState([
        {
            id: 1,
            student: "Arjun Mehta",
            action: "Provide extra physics worksheets for Mechanics",
            owner: "Teacher",
            dueDate: "2026-02-10",
            status: "open",
            priority: "high",
            evidence: [],
            notes: "Parent requested focus on numericals."
        },
        {
            id: 2,
            student: "Sanya Iyer",
            action: "Submit medical leaves for last week",
            owner: "Parent",
            dueDate: "2026-02-05",
            status: "in-progress",
            priority: "medium",
            evidence: ["Medical_Cert.pdf"],
            notes: "Mother will email by Tuesday."
        },
        {
            id: 3,
            student: "Kabir Singh",
            action: "Daily 15-min reading practice",
            owner: "Student",
            dueDate: "2026-02-15",
            status: "completed",
            priority: "critical",
            evidence: ["Reading_Log_Week1.jpg"],
            notes: "Significant improvement noticed."
        }
    ]);

    const [aiDrafting, setAiDrafting] = useState(false);

    // Tab Header Component
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
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-700 rounded-[3.5rem] p-12 text-white shadow-[0_32px_128px_-16px_rgba(79,70,229,0.3)] relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300 opacity-20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 px-6 py-2 bg-indigo-500/10 backdrop-blur-xl rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-[inset_0_0_12px_rgba(165,180,252,0.2)] border border-indigo-400/20 mb-8 w-fit hover:bg-indigo-500/20 transition-all cursor-default group-hover:scale-105 duration-500">
                        <Sparkles size={14} className="text-indigo-200 animate-spin-slow" />
                        <span className="text-indigo-50">Krimson OS • PTM Management Suite</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        <div>
                            <h1 className="text-6xl font-bold mb-4 tracking-tight animate-in slide-in-from-left-4 duration-1000">PTM Manager</h1>
                            <p className="opacity-90 font-medium text-xl max-w-2xl leading-relaxed animate-in fade-in duration-1000 delay-300">
                                Coordinate high-fidelity parent engagement through intelligent slot management, AI-assisted agendas, and clinical action tracking.
                            </p>
                        </div>
                        <div className="flex bg-slate-900/40 backdrop-blur-3xl p-2.5 rounded-[3rem] border border-white/10 shadow-2xl scale-105 lg:scale-110">
                            <TabButton id="scheduler" label="Scheduler" icon={Calendar} />
                            <TabButton id="agenda" label="Agenda" icon={FileText} />
                            <TabButton id="tracker" label="Tracker" icon={CheckCircle2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="min-h-[600px]">
                {activeTab === 'scheduler' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-700">
                        {/* Left: Slot Configuration (Screen 220) */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h2 className="text-2xl font-bold text-indigo-900 tracking-tight mb-1">Upcoming Slots</h2>
                                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Calendar Management</p>
                                    </div>
                                    <button
                                        onClick={() => setShowCreateModal(true)}
                                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                                    >
                                        <Plus size={16} />
                                        Plan PTM Session
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {slots.map((slot) => (
                                        <div key={slot.id} className="group p-5 bg-white border border-indigo-50 hover:border-indigo-300 rounded-2xl transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-lg">
                                            <div className="flex items-center gap-5">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${slot.status === 'booked' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-300'}`}>
                                                    {slot.status === 'booked' ? <Users size={20} /> : <Plus size={20} />}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-indigo-950 tracking-tight">{slot.student || "Unbooked Slot"}</p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="text-[10px] font-medium text-slate-400">{slot.time} • {slot.duration}</span>
                                                        <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider ${slot.mode === 'Online' ? 'bg-indigo-100 text-indigo-600' : 'bg-violet-100 text-violet-600'}`}>
                                                            {slot.mode}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {slot.status === 'booked' && (
                                                    <button className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                                        <MessageSquare size={16} />
                                                    </button>
                                                )}
                                                <button className="px-4 py-2 bg-indigo-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-indigo-800 transition-all shadow-md">
                                                    Manage
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: AI Insights (AI5) */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50 relative overflow-hidden">
                                {/* Subtle background decorations */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] -mr-10 -mt-10"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full blur-[30px] -ml-8 -mb-8"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
                                            <Sparkles size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 tracking-tight">AI5 Optimizer</h3>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Smart Scheduler</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] backdrop-blur-md">
                                            <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-3 bg-emerald-50 w-fit px-2 py-1 rounded-lg">Efficiency Insight</p>
                                            <p className="text-lg font-bold italic leading-relaxed text-indigo-900">"15-minute slots detected as efficient."</p>
                                        </div>

                                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] backdrop-blur-md">
                                            <p className="text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-3 bg-orange-50 w-fit px-2 py-1 rounded-lg">Action Required</p>
                                            <p className="text-sm font-medium text-slate-600 mb-4">4 parents have not yet booked their slots.</p>
                                            <button className="w-full py-3 bg-white border border-orange-200 text-orange-500 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                                                Send Reminders
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <ShieldCheck size={20} className="text-blue-400" />
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Conflict Prevention</h4>
                                </div>
                                <div className="space-y-4">
                                    <div
                                        onClick={() => setBookingLock(!bookingLock)}
                                        className="group flex items-center justify-between p-4 bg-indigo-50/30 hover:bg-white border border-indigo-100 hover:border-indigo-300 rounded-2xl cursor-pointer transition-all duration-300 shadow-sm"
                                    >
                                        <div className="space-y-0.5">
                                            <span className="text-xs font-bold text-indigo-900 block">Double Booking Lock</span>
                                            <span className="text-[9px] font-medium text-indigo-400">Prevent overlapping sessions</span>
                                        </div>
                                        <div className={`w-11 h-6 rounded-full transition-all duration-500 relative flex items-center px-1 ${bookingLock ? 'bg-indigo-600 shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]' : 'bg-indigo-200'}`}>
                                            <div className={`w-4 h-4 bg-indigo-50 rounded-full transition-all duration-500 shadow-sm flex items-center justify-center ${bookingLock ? 'translate-x-5' : 'translate-x-0'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${bookingLock ? 'bg-indigo-600 scale-100' : 'bg-indigo-300 scale-50 opacity-0'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'agenda' && (
                    <div className="flex flex-col lg:flex-row gap-8 animate-in slide-in-from-right-8 duration-700">
                        {/* Left: Enhanced Student Selector */}
                        <div className="w-full lg:w-[320px] bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-6 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-white/40 flex flex-col h-[700px]">
                            <div className="flex items-center justify-between mb-8 px-2">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-900 tracking-tight">Schedule</h3>
                                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-1">Today's Focus</p>
                                </div>
                                <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer">
                                    <Filter size={18} />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                                {slots.filter(s => s.status === 'booked').map(slot => (
                                    <button
                                        key={slot.id}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`w-full text-left p-5 rounded-[2rem] transition-all duration-500 group relative overflow-hidden border-2 ${selectedSlot?.id === slot.id
                                            ? "bg-white border-indigo-400 shadow-xl scale-[1.02]"
                                            : "bg-white/40 border-transparent hover:border-indigo-200 hover:bg-white/60"
                                            }`}
                                    >
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-500 ${selectedSlot?.id === slot.id ? 'bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg rotate-3' : 'bg-indigo-50 text-indigo-600'}`}>
                                                {slot.student[0]}
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-bold tracking-tight transition-colors duration-500 ${selectedSlot?.id === slot.id ? 'text-indigo-900 text-base' : 'text-slate-700 text-sm'}`}>{slot.student}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] font-medium text-slate-400">{slot.time}</span>
                                                    <span className={`w-1 h-1 rounded-full ${slot.mode === 'Online' ? 'bg-indigo-400' : 'bg-violet-400'}`}></span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{slot.mode}</span>
                                                </div>
                                            </div>
                                            <ChevronRight size={18} className={`transition-all duration-500 ${selectedSlot?.id === slot.id ? 'text-indigo-600 translate-x-1' : 'text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                                        </div>
                                        {selectedSlot?.id === slot.id && (
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Cinematic Agenda Workspace */}
                        <div className="flex-1 min-h-[700px]">
                            {!selectedSlot ? (
                                <div className="h-full bg-indigo-50/20 backdrop-blur-xl border-4 border-dashed border-indigo-100 rounded-[3.5rem] flex flex-col items-center justify-center text-center p-16 animate-in zoom-in-95 duration-700">
                                    <div className="w-28 h-28 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-8 rotate-6 animate-bounce">
                                        <Users size={48} className="text-indigo-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-indigo-900 mb-4 tracking-tight">Begin Framework Draft</h3>
                                    <p className="text-indigo-400/80 max-w-sm mx-auto text-base font-medium leading-relaxed">
                                        Select a student to initiate the AI-assisted Parent-Teacher framework synthesis.
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-[3.5rem] shadow-[0_64px_128px_-32px_rgba(79,70,229,0.15)] border border-indigo-100 relative overflow-hidden h-full flex flex-col p-2 animate-in slide-in-from-top-4 duration-700">
                                    {/* Workspace Gradient Background */}
                                    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -mr-32 -mt-32"></div>

                                    <div className="relative z-10 flex-1 flex flex-col">
                                        {/* Cinematic Header Bar */}
                                        <div className="flex items-center justify-between bg-white/60 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/80 shadow-sm mb-8 ring-1 ring-indigo-500/5">
                                            <div className="flex items-center gap-6">
                                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-xl flex items-center justify-center text-white relative group">
                                                    <Users size={32} className="group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white"></div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-4">
                                                        <h3 className="text-4xl font-bold text-indigo-950 tracking-tight">{selectedSlot.student}</h3>
                                                        <div className="flex gap-2">
                                                            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">Active Draft</span>
                                                            <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-lg text-[10px] font-bold uppercase tracking-widest">{selectedSlot.mode}</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-medium text-slate-400 mt-2 flex items-center gap-3">
                                                        <span>Parent: <span className="text-indigo-600 font-bold">{selectedSlot.parent}</span></span>
                                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                                                        <span>Time: <span className="text-indigo-600 font-bold">{selectedSlot.time}</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setAiDrafting(true);
                                                    setTimeout(() => {
                                                        setAiDrafting(false);
                                                        setToast({ isOpen: true, message: `High-impact talk track generated for ${selectedSlot.student}.` });
                                                    }, 2000);
                                                }}
                                                className="px-8 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-[0_20px_40px_-8px_rgba(79,70,229,0.4)] flex items-center gap-4 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all group overflow-hidden"
                                            >
                                                <Sparkles size={20} className={`relative z-10 ${aiDrafting ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />
                                                <span className="relative z-10">{aiDrafting ? "Synthesizing Data..." : "Generate AI Insights"}</span>
                                            </button>
                                        </div>

                                        {/* Redesigned Workspace Fields */}
                                        <div className="flex-1 space-y-8 overflow-y-auto px-8 py-4 custom-scrollbar">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="relative group">
                                                    <div className="absolute inset-0 bg-indigo-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-indigo-50 shadow-sm space-y-4 hover:border-indigo-300 transition-all duration-500">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                                                <Target size={24} />
                                                            </div>
                                                            <div>
                                                                <label className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Primary Objective</label>
                                                                <p className="text-[10px] font-medium text-slate-400">Define the core meeting goal</p>
                                                            </div>
                                                        </div>
                                                        <select className="w-full p-5 bg-white border border-indigo-100 rounded-2xl text-base font-bold text-indigo-900 outline-none focus:ring-4 ring-indigo-500/10 appearance-none transition-all cursor-pointer shadow-sm">
                                                            <option>Performance Optimization</option>
                                                            <option>Behavioral Strategy</option>
                                                            <option>Academic Transition</option>
                                                            <option>Holistic Support Plan</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="relative group">
                                                    <div className="absolute inset-0 bg-violet-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <div className="relative p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-violet-50 shadow-sm space-y-4 hover:border-violet-300 transition-all duration-500">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                                                                <FileText size={24} />
                                                            </div>
                                                            <div>
                                                                <label className="text-xs font-bold text-violet-400 uppercase tracking-widest">Evidence Library</label>
                                                                <p className="text-[10px] font-medium text-slate-400">Link relevant student data</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full p-5 bg-white border-2 border-dashed border-indigo-100 rounded-2xl flex items-center justify-center gap-4 text-indigo-400 font-bold text-sm cursor-pointer hover:border-indigo-400 hover:bg-slate-50 transition-all shadow-sm">
                                                            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                                                                <Plus size={18} />
                                                            </div>
                                                            Attach Evidence Cards
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-10 pb-12">
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between px-4">
                                                        <div>
                                                            <label className="text-sm font-bold text-indigo-950 uppercase tracking-widest">Critical Discussion Tracks</label>
                                                            <p className="text-[11px] font-medium text-slate-400 mt-1">High-impact points to cover during the session</p>
                                                        </div>
                                                        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-wider cursor-pointer hover:bg-indigo-100 transition-all">
                                                            <Sparkles size={14} />
                                                            Refine with AI2
                                                        </div>
                                                    </div>
                                                    <textarea
                                                        placeholder="Synthesize observations into key talk tracks..."
                                                        className="w-full p-8 bg-white/40 backdrop-blur-md border border-indigo-50 rounded-[2.5rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:ring-8 ring-indigo-500/5 min-h-[180px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_10px_rgba(79,70,229,0.02)]"
                                                    />
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="px-4">
                                                        <label className="text-sm font-bold text-indigo-950 uppercase tracking-widest">Actionable Commitments</label>
                                                        <p className="text-[11px] font-medium text-slate-400 mt-1">Define clear ownership for follow-up execution</p>
                                                    </div>
                                                    <textarea
                                                        placeholder="Outline parent & teacher commitments..."
                                                        className="w-full p-8 bg-white/40 backdrop-blur-md border border-indigo-50 rounded-[2.5rem] text-base font-medium text-indigo-950 outline-none focus:bg-white focus:ring-8 ring-indigo-500/5 min-h-[140px] resize-none transition-all placeholder:text-slate-300 shadow-[inset_0_2px_10px_rgba(79,70,229,0.02)]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* High-Fidelity Workspace Footer */}
                                        <div className="relative z-10 px-8 py-6 bg-white/40 backdrop-blur-3xl border-t border-indigo-50 flex items-center justify-between rounded-b-[3.5rem]">
                                            <div className="flex items-center gap-4 py-2 px-5 bg-indigo-50/50 rounded-2xl">
                                                <div className="relative flex items-center justify-center">
                                                    <div className="absolute w-full h-full bg-indigo-400/20 rounded-full animate-ping"></div>
                                                    <Clock size={16} className="text-indigo-400" />
                                                </div>
                                                <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest">Vault protection active • Auto-saving...</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="px-8 py-4 bg-white border border-indigo-100 text-indigo-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">Reset</button>
                                                <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-[1.25rem] font-bold text-xs uppercase tracking-widest shadow-[0_15px_30px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(79,70,229,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3">
                                                    <Save size={18} />
                                                    Finalize Framework
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'tracker' && (
                    <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
                        {/* Action Monitoring (Screen 222) */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3 space-y-6">
                                <div className="bg-white rounded-[3.5rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50">
                                    <div className="flex items-center justify-between mb-10">
                                        <div>
                                            <h2 className="text-3xl font-bold text-indigo-900 tracking-tight leading-none mb-2">Action Tracker</h2>
                                            <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">Execution & Accountability Engine</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex bg-indigo-50 p-1 rounded-xl">
                                                {['all', 'open', 'in-progress', 'completed'].map(f => (
                                                    <button
                                                        key={f}
                                                        onClick={() => setFilterStatus(f)}
                                                        className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${filterStatus === f ? 'bg-white text-indigo-600 shadow-sm' : 'text-indigo-400 hover:text-indigo-600'}`}>
                                                        {f}
                                                    </button>
                                                ))}
                                            </div>
                                            <button
                                                onClick={() => setShowActionModal(true)}
                                                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
                                            >
                                                <Plus size={16} />
                                                Log New Action
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {actions.filter(a => filterStatus === 'all' ? true : a.status === filterStatus).map(action => (
                                            <div key={action.id} className={`p-6 bg-white border rounded-[2rem] transition-all duration-300 relative group overflow-hidden ${action.status === 'completed' ? 'border-emerald-100 bg-emerald-50/10' : 'border-indigo-50 hover:border-indigo-200 hover:shadow-lg'}`}>
                                                {/* Status Light */}
                                                <div className={`absolute top-0 left-0 w-1.5 h-full transition-colors ${action.status === 'completed' ? 'bg-emerald-400' :
                                                    action.status === 'in-progress' ? 'bg-amber-400' :
                                                        'bg-indigo-200'
                                                    }`}></div>

                                                <div className="flex flex-col lg:flex-row lg:items-center gap-6 pl-4">
                                                    {/* Status Icon */}
                                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${action.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                                                        action.status === 'in-progress' ? 'bg-amber-100 text-amber-600' :
                                                            'bg-indigo-50 text-indigo-600'
                                                        }`}>
                                                        {action.status === 'completed' ? <CheckCircle2 size={24} /> :
                                                            action.status === 'in-progress' ? <Activity size={24} /> :
                                                                <Clock size={24} />}
                                                    </div>

                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{action.student}</span>
                                                            <span className="w-1 h-1 bg-indigo-200 rounded-full"></span>
                                                            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${action.owner === 'Parent' ? 'bg-purple-100 text-purple-600' :
                                                                action.owner === 'Teacher' ? 'bg-indigo-100 text-indigo-600' :
                                                                    'bg-slate-100 text-slate-500'
                                                                }`}>
                                                                <Users size={10} />
                                                                {action.owner}
                                                            </div>
                                                            {action.priority === 'critical' && (
                                                                <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[9px] font-bold uppercase tracking-wider">Critical</span>
                                                            )}
                                                        </div>
                                                        <p className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3">{action.action}</p>

                                                        {/* Evidence & Notes */}
                                                        {(action.evidence.length > 0 || action.notes) && (
                                                            <div className="flex items-center gap-4 mt-2">
                                                                {action.evidence.length > 0 && (
                                                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg">
                                                                        <FileText size={12} />
                                                                        {action.evidence.length} Evidence Attached
                                                                    </div>
                                                                )}
                                                                {action.notes && (
                                                                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                                                                        <MessageSquare size={12} />
                                                                        "{action.notes}"
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col items-end gap-3 min-w-[140px]">
                                                        <div className="text-right">
                                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Due Date</p>
                                                            <p className={`text-xs font-bold ${new Date(action.dueDate) < new Date() && action.status !== 'completed' ? 'text-red-500' : 'text-slate-700'}`}>
                                                                {action.dueDate}
                                                            </p>
                                                        </div>

                                                        {/* Action Buttons */}
                                                        <div className="flex items-center gap-2">
                                                            {action.status !== 'completed' ? (
                                                                <>
                                                                    <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors" title="Attach Evidence">
                                                                        <FileText size={16} />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            const newStatus = action.status === 'open' ? 'in-progress' : 'completed';
                                                                            setActions(actions.map(a => a.id === action.id ? { ...a, status: newStatus } : a));
                                                                            setToast({ isOpen: true, message: `Action status updated to ${newStatus}` });
                                                                        }}
                                                                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-md">
                                                                        {action.status === 'open' ? 'Start' : 'Mark Done'}
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <button className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-default">
                                                                    <CheckCircle2 size={14} />
                                                                    Verified
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel: Sentinel & Quick Stats */}
                            <div className="space-y-8">
                                <div className="bg-white rounded-[3rem] p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-indigo-50 relative overflow-hidden">
                                    {/* Subtle background decorations */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-[40px] -mr-10 -mt-10"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full blur-[30px] -ml-8 -mb-8"></div>

                                    <div className="flex items-center gap-3 mb-8 relative z-10">
                                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg">
                                            <AlertCircle size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 tracking-tight">AI5 Sentinel</h3>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Accountability Bot</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        {/* Overdue Alert Card */}
                                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-lg transition-all group">
                                            <div className="flex justify-between items-start mb-3">
                                                <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded-lg">Overdue Alert</p>
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
                                                    <span className="relative block w-2 h-2 bg-red-500 rounded-full"></span>
                                                </div>
                                            </div>
                                            <p className="text-sm font-bold text-slate-700 mb-4 leading-relaxed">
                                                <span className="text-indigo-600">Kabir Singh's</span> reading log is <span className="underline decoration-red-300 decoration-2 underline-offset-2">2 days overdue</span>.
                                            </p>
                                            <button
                                                onClick={() => setToast({ isOpen: true, message: "Reminder sent to Kabir Singh's parents via WhatsApp & Email." })}
                                                className="w-full py-3 bg-white border border-slate-200 text-indigo-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm flex items-center justify-center gap-2 group-hover:shadow-md"
                                            >
                                                <MessageSquare size={14} />
                                                Nudge Parent
                                            </button>
                                        </div>

                                        {/* Closure Rate Card */}
                                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem]">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Closure Rate</p>
                                                <span className="text-emerald-500 text-[10px] font-bold bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                                                    <TrendingUp size={12} />
                                                    +4%
                                                </span>
                                            </div>
                                            <div className="flex items-baseline gap-1 mb-3">
                                                <span className="text-4xl font-bold text-slate-800">92%</span>
                                                <span className="text-xs font-bold text-slate-400">Target: 95%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full w-[92%] bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-[0_2px_10px_rgba(16,185,129,0.3)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <SuccessToast
                isOpen={toast.isOpen}
                message={toast.message}
                onClose={() => setToast({ ...toast, isOpen: false })}
            />

            {/* Create PTM Modal (Screen 220) */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-indigo-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4 animate-in fade-in duration-500">
                    <div className="bg-white rounded-[3.5rem] w-full max-w-lg shadow-[0_32px_128px_-16px_rgba(79,70,229,0.4)] border-2 border-indigo-100 p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-indigo-900 tracking-tight leading-none mb-1">Plan PTM Session</h2>
                            <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-10">Configuration Engine</p>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Meeting Date</label>
                                    <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:border-indigo-500 outline-none transition-all" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Slot Duration</label>
                                        <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none appearance-none transition-all cursor-pointer">
                                            <option>15 Minutes</option>
                                            <option>20 Minutes</option>
                                            <option>30 Minutes</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Meeting Mode</label>
                                        <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none appearance-none transition-all cursor-pointer">
                                            <option>Online (Video)</option>
                                            <option>In-Person</option>
                                            <option>Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex gap-3">
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs hover:bg-slate-200 transition-all"
                                >
                                    Dismiss
                                </button>
                                <button
                                    onClick={() => {
                                        setShowCreateModal(false);
                                        setToast({ isOpen: true, message: "PTM Session successfully indexed and notifications sent." });
                                    }}
                                    className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg hover:bg-indigo-700 transition-all uppercase tracking-wider"
                                >
                                    Initiate Session
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Create Action Modal (New) */}
            {showActionModal && (
                <div className="fixed inset-0 bg-indigo-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4 animate-in fade-in duration-500">
                    <div className="bg-white rounded-[3.5rem] w-full max-w-lg shadow-[0_32px_128px_-16px_rgba(79,70,229,0.4)] border-2 border-indigo-100 p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-indigo-900 tracking-tight leading-none mb-1">Log Action Item</h2>
                            <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-10">Execution Framework</p>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Student Context</label>
                                    <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                                        <option>Arjun Mehta</option>
                                        <option>Sanya Iyer</option>
                                        <option>Kabir Singh</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Action Description</label>
                                    <textarea
                                        className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-800 focus:border-indigo-500 outline-none transition-all resize-none h-24 placeholder:text-slate-300"
                                        placeholder="e.g. Daily reading practice for 15 mins..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Owner</label>
                                        <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none appearance-none transition-all cursor-pointer">
                                            <option>Parent</option>
                                            <option>Teacher</option>
                                            <option>Student</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Due Date</label>
                                        <input type="date" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none transition-all" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex gap-3">
                                <button
                                    onClick={() => setShowActionModal(false)}
                                    className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs hover:bg-slate-200 transition-all uppercase tracking-wider"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setShowActionModal(false);
                                        setToast({ isOpen: true, message: "Action item logged and notified to owner." });
                                    }}
                                    className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg hover:bg-indigo-700 transition-all uppercase tracking-wider"
                                >
                                    Confirm Action
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PTMManager;
