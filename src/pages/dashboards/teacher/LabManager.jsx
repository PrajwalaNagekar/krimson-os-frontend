import React, { useState } from 'react';
import {
    FlaskConical, Calendar, ClipboardList, FileText,
    Sparkles, Shield, ChevronRight, LayoutDashboard,
    Microscope, AlertTriangle, CheckCircle2, Search, Filter, Clock,
    Plus, UploadCloud, Image, Award, X, Users, BookOpen, Link, TestTube,
    MoreHorizontal, ArrowRight, PlayCircle, Video, Check
} from 'lucide-react';

const LabManager = () => {
    const [activeTab, setActiveTab] = useState('planner'); // 'dashboard', 'planner', 'operations', 'assessment'

    // Mock Data & State
    const [notifications, setNotifications] = useState([]);

    // Planner State
    const [plans, setPlans] = useState([
        { id: 1, title: 'Photosynthesis Rate', class: '9-A', subject: 'Biology', status: 'Draft', date: 'Feb 15' },
        { id: 2, title: 'Titration Basics', class: '10-C', subject: 'Chemistry', status: 'Ready', date: 'Feb 18' },
        { id: 3, title: 'Pendulum Motion', class: '9-B', subject: 'Physics', status: 'Completed', date: 'Jan 20' },
    ]);
    const [currentPlan, setCurrentPlan] = useState(null); // If null, show list. If set, show editor.

    // Operations State
    const [bookings, setBookings] = useState([
        { id: 1, lab: 'Chemistry', slot: '09:00 AM', status: 'Occupied', class: '10-B', teacher: 'Ms. Alice' },
        { id: 2, lab: 'Physics', slot: '08:00 AM', status: 'Occupied', class: '12-A', teacher: 'Mr. Sharma' },
        { id: 3, lab: 'Chemistry', slot: '10:00 AM', status: 'Maintenance', type: 'warn' },
    ]);
    const [inventoryRequests, setInventoryRequests] = useState([
        { id: 1, item: 'Litmus Paper (Red)', qty: '5 pks', status: 'Approved', date: '2026-02-02' },
        { id: 2, item: 'Conc. HCl', qty: '2 L', status: 'Pending', date: '2026-02-04' },
    ]);

    // Assessment State
    const [students, setStudents] = useState([
        { id: 1, name: 'Michael Chang', lab: 'Acid-Base Titration', status: 'Submitted', score: null, evidence: ['video.mp4'] },
        { id: 2, name: 'Sarah Jenkins', lab: 'Acid-Base Titration', status: 'Draft', score: null, evidence: [] },
        { id: 3, name: 'David Kim', lab: 'Photosynthesis Rate', status: 'Graded', score: 18, evidence: ['graph.png'] },
    ]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    // Helpers
    const showNotification = (title, message, type = 'success') => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, title, message, type }]);
        setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 3000);
    };

    const handleCreatePlan = () => {
        const newPlan = {
            id: Date.now(),
            title: 'Untitled Session',
            class: '10-A',
            subject: 'Physics',
            teacher: 'Mrs. Verma',
            linkedUnit: '',
            objective: '',
            status: 'Draft',
            duration: '60 Minutes',
            resources: [],
            materials: [],
            safetyStatus: 'Pending',
            isFinalized: false
        };
        setCurrentPlan(newPlan);
    };

    const handleSavePlan = () => {
        if (!currentPlan) return;
        setPlans(prev => {
            const exists = prev.find(p => p.id === currentPlan.id);
            if (exists) return prev.map(p => p.id === currentPlan.id ? { ...currentPlan, date: 'Feb 20' } : p); // Mock update
            return [...prev, { ...currentPlan, date: 'Feb 20' }];
        });
        setCurrentPlan(null);
        showNotification('Plan Saved', 'Session details have been updated.');
    };

    const handleBookSlot = (lab, slot) => {
        const exists = bookings.find(b => b.lab === lab && b.slot === slot);
        if (exists) return; // Already booked or blocked

        const newBooking = {
            id: Date.now(),
            lab,
            slot,
            status: 'Occupied',
            class: 'My Class',
            teacher: 'Me'
        };
        setBookings(prev => [...prev, newBooking]);
        showNotification('Slot Booked', `${lab} Lab reserved for ${slot}.`);
    };

    const handleGradeUpdate = (category, score) => {
        // Mock grading logic would go here
        showNotification('Grade Updated', `${category} score set to ${score}/10.`);
    };

    // Components
    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 font-bold text-xs md:text-sm uppercase tracking-wider ${activeTab === id
                ? "bg-white text-emerald-600 shadow-lg scale-105"
                : "text-emerald-100 hover:bg-white/10"
                }`}
        >
            <Icon size={18} />
            <span className="hidden md:inline">{label}</span>
        </button>
    );

    return (
        <div className="space-y-6 md:space-y-8 pb-10 font-sans text-slate-600">
            {/* Notifications */}
            <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 pointer-events-none">
                {notifications.map(n => (
                    <div key={n.id} className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[300px] animate-in slide-in-from-right-10 fade-in duration-300 pointer-events-auto">
                        <div className={`p-2 rounded-xl ${n.type === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                            {n.type === 'success' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">{n.title}</h4>
                            <p className="text-xs text-slate-500 font-medium">{n.message}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
                                Scientific Inquiry Hub
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Lab Manager</h1>
                            <p className="text-sm md:text-base text-white/90 font-medium max-w-2xl leading-relaxed">
                                Design experiments, manage hazardous materials, and assess student inquiry skills in one unified workspace.
                            </p>
                        </div>

                        <div className="flex bg-slate-900/30 backdrop-blur-xl p-2 rounded-[2rem] border border-white/10 shadow-xl">
                            <TabButton id="dashboard" label="Overview" icon={LayoutDashboard} />
                            <TabButton id="planner" label="Planner" icon={FlaskConical} />
                            <TabButton id="operations" label="Operations" icon={Calendar} />
                            <TabButton id="assessment" label="Assessment" icon={Award} />
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="min-h-[600px] animate-in slide-in-from-bottom-4 duration-500">

                {/* DASHBOARD VIEW */}
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Stats Cards */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Safety Index', value: '98/100', sub: 'Audit Passed', icon: Shield, color: 'emerald' },
                                { label: 'Active Experiments', value: '12', sub: 'Across 3 Labs', icon: testTube => <FlaskConical size={24} />, color: 'blue' },
                                { label: 'Pending Reports', value: '24', sub: 'Needs Grading', icon: ClipboardList, color: 'amber' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                                            {typeof stat.icon === 'function' ? stat.icon() : <stat.icon size={24} />}
                                        </div>
                                        <div className={`px-3 py-1 rounded-full bg-${stat.color}-50 text-${stat.color}-600 text-xs font-bold uppercase tracking-wider`}>
                                            {stat.sub}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <Clock size={20} className="text-slate-400" /> Recent Lab Activity
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'Chemical Spill Drill Completed', time: '2 hours ago', type: 'Safety', color: 'emerald' },
                                    { title: 'New Microscope Batch Received', time: '5 hours ago', type: 'Inventory', color: 'blue' },
                                    { title: 'Physics Lab 2 Maintenance', time: 'Yesterday', type: 'Alert', color: 'amber' },
                                ].map((activity, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                                        <div className={`w-2 h-12 rounded-full bg-${activity.color}-500`}></div>
                                        <div>
                                            <h4 className="font-bold text-slate-700">{activity.title}</h4>
                                            <p className="text-xs font-medium text-slate-400">{activity.time} • {activity.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px]"></div>
                            <h3 className="text-xl font-bold mb-6 relative z-10">Quick Actions</h3>
                            <div className="space-y-3 relative z-10">
                                <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold text-sm flex items-center justify-between px-6 transition-all group">
                                    <span>Log Incident</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm flex items-center justify-between px-6 hover:shadow-lg transition-all group">
                                    <span>Schedule Maintenance</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* PLANNER VIEW */}
                {activeTab === 'planner' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* List / Sidebar */}
                        <div className={`lg:col-span-4 space-y-4 ${currentPlan ? 'hidden lg:block' : 'block'}`}>
                            <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl h-full min-h-[600px]">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-slate-800">My Experiments</h3>
                                    <button onClick={handleCreatePlan} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
                                        <Plus size={20} />
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {plans.map(plan => (
                                        <div
                                            key={plan.id}
                                            onClick={() => setCurrentPlan(plan)}
                                            className={`p-5 rounded-[1.5rem] border transition-all cursor-pointer group ${currentPlan?.id === plan.id
                                                ? 'bg-emerald-50 border-emerald-200 shadow-md'
                                                : 'bg-white border-slate-100 hover:border-emerald-200 hover:shadow-sm'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${plan.status === 'Draft' ? 'bg-amber-100 text-amber-700' :
                                                    plan.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                                    }`}>
                                                    {plan.status}
                                                </span>
                                                <ChevronRight size={16} className={`text-slate-300 transition-transform ${currentPlan?.id === plan.id ? 'rotate-90 text-emerald-500' : 'group-hover:text-emerald-400'}`} />
                                            </div>
                                            <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">{plan.title}</h4>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{plan.subject} • {plan.class}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Editor View */}
                        <div className={`lg:col-span-8 ${currentPlan ? 'block' : 'hidden lg:block'}`}>
                            {currentPlan ? (
                                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl relative overflow-hidden animate-in fade-in slide-in-from-right-8">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                                    <div className="flex items-center justify-between mb-8 relative z-10">
                                        <div className="w-full mr-8">
                                            <input
                                                type="text"
                                                value={currentPlan.title}
                                                onChange={(e) => setCurrentPlan({ ...currentPlan, title: e.target.value })}
                                                className="text-2xl md:text-3xl font-bold text-slate-800 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-300 w-full"
                                                placeholder="Experiment Title"
                                            />
                                        </div>
                                        <button onClick={handleSavePlan} className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 shadow-lg whitespace-nowrap">
                                            Save Plan
                                        </button>
                                    </div>

                                    <div className="space-y-8 relative z-10">
                                        {/* Step 1: Context */}
                                        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                            <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">1</div>
                                                Context & Objectives
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                                                    <select
                                                        value={currentPlan.subject}
                                                        onChange={(e) => setCurrentPlan({ ...currentPlan, subject: e.target.value })}
                                                        className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400"
                                                    >
                                                        <option>Physics</option>
                                                        <option>Chemistry</option>
                                                        <option>Biology</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Class</label>
                                                    <select
                                                        value={currentPlan.class}
                                                        onChange={(e) => setCurrentPlan({ ...currentPlan, class: e.target.value })}
                                                        className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400"
                                                    >
                                                        <option>9-A</option>
                                                        <option>9-B</option>
                                                        <option>10-A</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mt-4 space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Learning Objective (AI Draft available)</label>
                                                <textarea
                                                    className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400 resize-none"
                                                    rows="3"
                                                    placeholder="Describe what students will investigate..."
                                                    value={currentPlan.objective}
                                                    onChange={(e) => setCurrentPlan({ ...currentPlan, objective: e.target.value })}
                                                ></textarea>
                                                <button className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:text-emerald-700">
                                                    <Sparkles size={14} /> Auto-generate with AI
                                                </button>
                                            </div>
                                        </div>

                                        {/* Step 2: Resources and Safety */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">2</div>
                                                    Resources
                                                </h4>
                                                <div className="min-h-[100px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
                                                    <p className="text-xs font-bold mb-2">No files attached</p>
                                                    <button className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-xs font-bold shadow-sm border border-slate-200">
                                                        Browse Library
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">3</div>
                                                    Safety Check
                                                </h4>
                                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs font-bold text-slate-600">Chemical Hazard Risk</span>
                                                        <span className="text-xs font-bold text-amber-500">MODERATE</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                        <div className="h-full w-[40%] bg-amber-400 rounded-full"></div>
                                                    </div>
                                                    <p className="text-[10px] text-slate-400 mt-2">Requires safety goggles and gloves.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-[2.5rem]">
                                    <FlaskConical size={64} className="mb-4 text-slate-200" />
                                    <h3 className="text-xl font-bold text-slate-500">Select an experiment to edit</h3>
                                    <p className="text-sm font-medium">Or create a new one to get started</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* OPERATIONS VIEW (Booking) */}
                {activeTab === 'operations' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Calendar size={20} className="text-slate-400" /> Lab Booking Schedule
                                </h3>

                                <div className="space-y-6">
                                    {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'].map((time) => (
                                        <div key={time} className="grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-2 text-xs font-bold text-slate-400">{time}</div>
                                            {['Chemistry', 'Physics'].map(lab => {
                                                const booking = bookings.find(b => b.lab === lab && b.slot === time);
                                                return (
                                                    <button
                                                        key={`${lab}-${time}`}
                                                        onClick={() => handleBookSlot(lab, time)}
                                                        className={`col-span-5 p-4 rounded-2xl border text-left transition-all ${booking
                                                            ? booking.type === 'warn'
                                                                ? 'bg-amber-50 border-amber-200 text-amber-700'
                                                                : 'bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed'
                                                            : 'bg-white border-dashed border-slate-200 text-slate-400 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600'
                                                            }`}
                                                    >
                                                        {booking ? (
                                                            <div>
                                                                <div className="font-bold text-xs uppercase tracking-wider mb-1">{booking.status}</div>
                                                                {booking.class && <div className="text-[10px] font-bold">{booking.class} • {booking.teacher}</div>}
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                                                                <Plus size={14} /> {lab}
                                                            </div>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
                                <h3 className="text-xl font-bold text-slate-800 mb-6">Inventory Express</h3>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input type="text" placeholder="Search item..." className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl font-bold text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400/20" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['Beaker', 'H2SO4', 'Pipette', 'Gloves', 'Lens', 'Magnet'].map(item => (
                                            <button key={item} className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors">
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Requests</h4>
                                    <div className="space-y-3">
                                        {inventoryRequests.map(req => (
                                            <div key={req.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
                                                <div>
                                                    <div className="font-bold text-xs text-slate-700">{req.item}</div>
                                                    <div className="text-[10px] text-slate-400">{req.date}</div>
                                                </div>
                                                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${req.status === 'Approved' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
                                                    {req.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ASSESSMENT VIEW */}
                {activeTab === 'assessment' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Reports List */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl min-h-[600px]">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <Award size={20} className="text-slate-400" /> Student Lab Reports
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {students.map(student => (
                                        <div
                                            key={student.id}
                                            onClick={() => setSelectedStudent(student)}
                                            className={`p-6 rounded-[2rem] border transition-all cursor-pointer hover:shadow-lg ${selectedStudent?.id === student.id
                                                ? 'bg-slate-900 border-slate-900 text-white shadow-xl transform scale-[1.02]'
                                                : 'bg-white border-slate-100 hover:border-emerald-200'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-200/20 backdrop-blur-sm flex items-center justify-center font-bold">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedStudent?.id === student.id
                                                    ? 'bg-white/20 text-white'
                                                    : student.status === 'Submitted' ? 'bg-blue-100 text-blue-600'
                                                        : student.status === 'Graded' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                                    }`}>
                                                    {student.status}
                                                </span>
                                            </div>
                                            <h4 className={`font-bold text-lg mb-1 ${selectedStudent?.id === student.id ? 'text-white' : 'text-slate-800'}`}>{student.name}</h4>
                                            <p className={`text-xs font-medium ${selectedStudent?.id === student.id ? 'text-slate-400' : 'text-slate-500'}`}>{student.lab}</p>

                                            {student.evidence.length > 0 && (
                                                <div className="mt-4 flex gap-2">
                                                    {student.evidence.map((ev, i) => (
                                                        <div key={i} className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 ${selectedStudent?.id === student.id ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'
                                                            }`}>
                                                            {ev.includes('mp4') ? <Video size={10} /> : <Image size={10} />} Evidence
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Grading Panel */}
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl h-full">
                                {selectedStudent ? (
                                    <div className="animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                            <ClipboardList size={20} className="text-emerald-500" /> Grading Rubric
                                        </h3>

                                        <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Grading for</p>
                                            <p className="font-bold text-slate-800 text-lg">{selectedStudent.name}</p>
                                        </div>

                                        <div className="space-y-6">
                                            {[
                                                { cat: 'Procedure', max: 10, current: 8 },
                                                { cat: 'Data Analysis', max: 10, current: selectedStudent.score ? Math.round(selectedStudent.score * 0.4) : null },
                                                { cat: 'Conclusion', max: 10, current: selectedStudent.score ? Math.round(selectedStudent.score * 0.2) : null },
                                            ].map((criteria, i) => (
                                                <div key={i}>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{criteria.cat}</span>
                                                        <span className="text-xs font-bold text-emerald-600">{criteria.current !== null ? criteria.current : '-'}/{criteria.max}</span>
                                                    </div>
                                                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden relative cursor-pointer hover:bg-slate-200 transition-colors" onClick={() => handleGradeUpdate(criteria.cat, Math.floor(Math.random() * 10) + 1)}>
                                                        <div
                                                            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                                                            style={{ width: criteria.current ? `${(criteria.current / criteria.max) * 100}%` : '0%' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-slate-100">
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="text-sm font-bold text-slate-500">Total Score</span>
                                                <span className="text-3xl font-bold text-slate-800">{selectedStudent.score || 0}<span className="text-lg text-slate-400 font-bold">/30</span></span>
                                            </div>
                                            <button
                                                onClick={() => showNotification('Scores Published', `Grades for ${selectedStudent.name} have been released.`)}
                                                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95"
                                            >
                                                Finalize & Release
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 opacity-60">
                                        <Award size={48} className="mb-4" />
                                        <p className="font-bold">Select a student submission to begin grading</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LabManager;
