import React, { useState, useEffect } from 'react';
import {
    ClipboardList, Award, Heart, Plus, Search, Filter,
    AlertTriangle, CheckCircle2, User, Calendar,
    TrendingUp, Shield, MessageCircle, AlertCircle, Activity,
    Zap, X, ChevronRight, BarChart3, Clock, MoreVertical,
    Sparkles
} from 'lucide-react';
import SuccessToast from '../../../components/common/SuccessToast';

const BehaviourLog = () => {
    const [activeTab, setActiveTab] = useState('behaviour'); // 'behaviour', 'house-points', 'wellbeing'
    const [toast, setToast] = useState({ isOpen: false, message: '' });

    // --- Mock Data & State ---

    const [students] = useState([
        { id: 1, name: "Arjun Mehta", class: "10-A", house: "Red" },
        { id: 2, name: "Sanya Iyer", class: "10-A", house: "Blue" },
        { id: 3, name: "Kabir Singh", class: "10-B", house: "Green" },
        { id: 4, name: "Rohan Das", class: "10-A", house: "Yellow" },
    ]);

    // Behaviour Logs State
    const [behaviourLogs, setBehaviourLogs] = useState([
        { id: 1, student: "Kabir Singh", type: "Concern", severity: "Medium", description: "Disruptive during lab session.", context: "Chemistry Lab", date: "2026-02-03", followup: true },
        { id: 2, student: "Sanya Iyer", type: "Positive", severity: "Low", description: "Helped peer with complex topic.", context: "Classroom", date: "2026-02-02", followup: false },
        { id: 3, student: "Rohan Das", type: "Neutral", severity: "Low", description: "Forgot textbook, but borrowed one.", context: "Math Class", date: "2026-02-01", followup: false },
    ]);
    const [logFilter, setLogFilter] = useState('All'); // All, Positive, Concern, Neutral
    const [newLog, setNewLog] = useState({ studentId: '', type: 'Positive', severity: 'Low', context: '', description: '', followup: false });

    // House Points State
    const [housePoints, setHousePoints] = useState([
        { id: 1, house: "Red", points: 1250, color: "from-red-500 to-rose-600", text: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
        { id: 2, house: "Blue", points: 1180, color: "from-blue-500 to-indigo-600", text: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
        { id: 3, house: "Green", points: 1320, color: "from-emerald-500 to-teal-600", text: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
        { id: 4, house: "Yellow", points: 1100, color: "from-amber-400 to-orange-500", text: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
    ]);
    const [awardForm, setAwardForm] = useState({ studentId: '', reason: 'Academic Excellence', points: 10, note: '' });

    // Wellbeing State
    const [moodTrends] = useState([
        { day: 'Mon', mood: 4, label: 'Good' },
        { day: 'Tue', mood: 3, label: 'Okay' },
        { day: 'Wed', mood: 2, label: 'Low' },
        { day: 'Thu', mood: 2, label: 'Low' },
        { day: 'Fri', mood: 3, label: 'Okay' },
    ]);
    const [recentCheckins, setRecentCheckins] = useState([
        { id: 1, student: "Kabir Singh", mood: "worried", note: "Feeling stressed about upcoming physics exam.", date: "Today, 10:30 AM", risk: "Medium" },
        { id: 2, student: "Arjun Mehta", mood: "happy", note: "Excited for the football match!", date: "Yesterday, 2:15 PM", risk: "Low" },
    ]);
    const [checkinForm, setCheckinForm] = useState({ studentId: '', concern: 'Academic Pressure' });


    // --- Actions ---

    const handleAddLog = (e) => {
        e.preventDefault();
        if (!newLog.studentId || !newLog.description) return;

        const studentName = students.find(s => s.id === parseInt(newLog.studentId))?.name || "Unknown";
        const log = {
            id: Date.now(),
            student: studentName,
            type: newLog.type,
            severity: newLog.severity,
            description: newLog.description,
            context: newLog.context,
            date: new Date().toISOString().split('T')[0],
            followup: newLog.followup
        };

        setBehaviourLogs([log, ...behaviourLogs]);
        setNewLog({ studentId: '', type: 'Positive', severity: 'Low', context: '', description: '', followup: false });
        setToast({ isOpen: true, message: `Observation recorded for ${studentName}` });
    };

    const handleAwardPoints = (e) => {
        e.preventDefault();
        if (!awardForm.studentId) return;

        const student = students.find(s => s.id === parseInt(awardForm.studentId));
        if (!student) return;

        const updatedPoints = housePoints.map(h => {
            if (h.house === student.house) {
                return { ...h, points: h.points + awardForm.points };
            }
            return h;
        });

        setHousePoints(updatedPoints);
        setToast({ isOpen: true, message: `${awardForm.points} points awarded to ${student.house} House!` });
        // Optional: Reset form or keep for rapid entry
        setAwardForm({ ...awardForm, note: '' });
    };

    const handleSendCheckin = (e) => {
        e.preventDefault();
        if (!checkinForm.studentId) return;

        const studentName = students.find(s => s.id === parseInt(checkinForm.studentId))?.name || "Unknown";
        setToast({ isOpen: true, message: `Private check-in sent to ${studentName}` });
    };


    // --- UI Components ---

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
        <div className="space-y-8 animate-in fade-in duration-700 pb-12">

            {/* Header Section with Gradient Card */}
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    {/* Krimson OS Pill Breadcrumb */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20 mb-6">
                        <Sparkles size={12} className="text-indigo-200" />
                        Krimson OS • Student Conduct
                    </div>

                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                                    <Shield size={28} className="text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Student Conduct</h1>
                            </div>
                            <p className="text-indigo-100 font-medium text-lg max-w-2xl leading-relaxed opacity-90">
                                Comprehensive behaviour tracking, house points management, and student wellbeing monitoring.
                            </p>
                        </div>

                        <div className="flex bg-slate-900/40 backdrop-blur-3xl p-2.5 rounded-[3rem] border border-white/10 shadow-2xl scale-105 lg:scale-110">
                            <TabButton id="behaviour" label="Behaviour Log" icon={ClipboardList} />
                            <TabButton id="house-points" label="House Points" icon={Award} />
                            <TabButton id="wellbeing" label="Wellbeing" icon={Heart} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-[3.5rem] p-8 lg:p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-slate-100 min-h-[700px] relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

                {/* --- TAB: BEHAVIOUR LOG --- */}
                {activeTab === 'behaviour' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 animate-in slide-in-from-bottom-8 duration-500">
                        {/* Left: Input Form (4 cols) */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-slate-50/50 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                                    <Plus size={20} className="text-indigo-600" /> Log Entry
                                </h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">New Observation</p>

                                <form onSubmit={handleAddLog} className="space-y-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Student</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={newLog.studentId}
                                                onChange={(e) => setNewLog({ ...newLog, studentId: e.target.value })}
                                                className="w-full p-4 pl-12 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Select Student...</option>
                                                {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.class})</option>)}
                                            </select>
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Type</label>
                                            <select
                                                value={newLog.type}
                                                onChange={(e) => setNewLog({ ...newLog, type: e.target.value })}
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
                                            >
                                                <option>Positive</option>
                                                <option>Neutral</option>
                                                <option>Concern</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Severity</label>
                                            <select
                                                value={newLog.severity}
                                                onChange={(e) => setNewLog({ ...newLog, severity: e.target.value })}
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
                                            >
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Context</label>
                                        <input
                                            type="text"
                                            value={newLog.context}
                                            onChange={(e) => setNewLog({ ...newLog, context: e.target.value })}
                                            placeholder="e.g. Science Lab"
                                            className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Details</label>
                                        <textarea
                                            required
                                            value={newLog.description}
                                            onChange={(e) => setNewLog({ ...newLog, description: e.target.value })}
                                            placeholder="Factual description..."
                                            className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all h-28 resize-none"
                                        ></textarea>
                                    </div>

                                    <div
                                        onClick={() => setNewLog({ ...newLog, followup: !newLog.followup })}
                                        className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${newLog.followup ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200 hover:border-indigo-300'}`}
                                    >
                                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${newLog.followup ? 'bg-red-500 text-white' : 'bg-slate-200 text-transparent'}`}>
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className={`text-xs font-bold ${newLog.followup ? 'text-red-600' : 'text-slate-500'}`}>Requires Admin Follow-up</span>
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-1 transition-all">
                                        Record Entry
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right: Feed (8 cols) */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* AI Insight Banner */}
                            <div className="bg-gradient-to-r from-indigo-900 to-violet-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16 animate-pulse"></div>
                                <div className="relative z-10 flex items-start gap-6">
                                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                                        <Zap size={24} className="text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold tracking-tight">AI3 Pattern Detection</h3>
                                            <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Live Analysis</span>
                                        </div>
                                        <p className="text-indigo-100/80 text-sm leading-relaxed mb-4 max-w-2xl">
                                            <span className="font-bold text-white">Attention Required:</span> Kabir Singh has accumulated 3 "Concern" logs in laboratory settings this week. Possible correlation with afternoon sessions.
                                        </p>
                                        <button className="px-6 py-2.5 bg-white text-indigo-900 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg">
                                            View Detailed Report
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Feed Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Recent Logs</h3>
                                <div className="flex gap-2">
                                    {['All', 'Positive', 'Concern', 'Neutral'].map(f => (
                                        <button
                                            key={f}
                                            onClick={() => setLogFilter(f)}
                                            className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${logFilter === f
                                                ? "bg-slate-800 text-white shadow-md"
                                                : "bg-slate-50 text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100"
                                                }`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Logs List */}
                            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {behaviourLogs.filter(l => logFilter === 'All' || l.type === logFilter).map((log) => (
                                    <div key={log.id} className="group p-6 bg-white border border-slate-100 hover:border-indigo-200 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                                        <div className="flex items-start justify-between">
                                            <div className="flex gap-5">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${log.type === 'Positive' ? 'bg-emerald-50 text-emerald-500' :
                                                    log.type === 'Concern' ? 'bg-amber-50 text-amber-500' :
                                                        'bg-blue-50 text-blue-500'
                                                    }`}>
                                                    {log.type === 'Positive' ? <CheckCircle2 size={24} /> :
                                                        log.type === 'Concern' ? <AlertTriangle size={24} /> :
                                                            <MessageCircle size={24} />}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h4 className="text-lg font-bold text-slate-800">{log.student}</h4>
                                                        <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${log.type === 'Positive' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                            log.type === 'Concern' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                                'bg-blue-50 text-blue-600 border-blue-100'
                                                            }`}>
                                                            {log.type}
                                                        </span>
                                                        <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                                                            <Calendar size={12} /> {log.date}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-2xl">{log.description}</p>
                                                    <div className="mt-3 flex items-center gap-4">
                                                        <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                                                            {log.context}
                                                        </span>
                                                        {log.followup && (
                                                            <span className="px-3 py-1 bg-red-50 text-red-500 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-red-100 flex items-center gap-1.5">
                                                                <AlertCircle size={12} /> Follow-up Required
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="p-2 text-slate-300 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all">
                                                <MoreVertical size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TAB: HOUSE POINTS --- */}
                {activeTab === 'house-points' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-right-8 duration-500">
                        {/* Left: Leaderboard (4 cols) - Sticky */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden lg:min-h-[600px] flex flex-col">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                                    <Award className="text-yellow-400" /> Leaderboard
                                </h3>

                                <div className="space-y-6 flex-1 relative z-10">
                                    {housePoints.sort((a, b) => b.points - a.points).map((house, index) => (
                                        <div key={house.id} className="group">
                                            <div className="flex items-end justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-2xl font-bold w-8 ${index === 0 ? 'text-yellow-400' : 'text-slate-600'}`}>#{index + 1}</span>
                                                    <div>
                                                        <span className={`block font-bold text-lg ${house.text}`}>{house.house}</span>
                                                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">House</span>
                                                    </div>
                                                </div>
                                                <span className="font-bold text-2xl tracking-tighter">{house.points.toLocaleString()}</span>
                                            </div>
                                            <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                                                <div
                                                    className={`h-full rounded-full bg-gradient-to-r ${house.color} transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                                                    style={{ width: `${(house.points / 2000) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
                                    <p className="text-center text-xs text-slate-400 font-medium">Updated in real-time. Top house awarded monthly trophy.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Award Form (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <div className="bg-slate-50/50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 text-center relative overflow-hidden group">
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-100 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>

                                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-amber-500 mx-auto mb-8 shadow-xl shadow-amber-100/50 border border-amber-50 relative z-10">
                                    <Award size={48} />
                                </div>

                                <h2 className="text-4xl font-bold text-slate-900 mb-4 relative z-10 tracking-tight">Recognize Excellence</h2>
                                <p className="text-slate-500 font-medium mb-12 max-w-lg mx-auto relative z-10 text-lg">Award points to students for positive contributions. These are instantly reflected on the school leaderboard.</p>

                                <form onSubmit={handleAwardPoints} className="max-w-xl mx-auto space-y-8 relative z-10 text-left">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Student</label>
                                            <select
                                                required
                                                value={awardForm.studentId}
                                                onChange={(e) => setAwardForm({ ...awardForm, studentId: e.target.value })}
                                                className="w-full p-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all shadow-sm cursor-pointer"
                                            >
                                                <option value="">Select Student...</option>
                                                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">House</label>
                                            <div className="w-full p-4 bg-slate-100 rounded-2xl text-sm font-bold text-slate-500 border-2 border-transparent">
                                                {awardForm.studentId
                                                    ? `${students.find(s => s.id === parseInt(awardForm.studentId))?.house} House`
                                                    : "Select Student"}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Category</label>
                                        <select
                                            value={awardForm.reason}
                                            onChange={(e) => setAwardForm({ ...awardForm, reason: e.target.value })}
                                            className="w-full p-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all shadow-sm cursor-pointer"
                                        >
                                            <option>Academic Excellence</option>
                                            <option>Helpers & Volunteers</option>
                                            <option>Sportsmanship</option>
                                            <option>Leadership</option>
                                            <option>Creativity</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Value</label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {[10, 20, 50, 100].map(p => (
                                                <button
                                                    type="button"
                                                    key={p}
                                                    onClick={() => setAwardForm({ ...awardForm, points: p })}
                                                    className={`py-4 rounded-xl text-lg font-bold transition-all border-2 ${awardForm.points === p
                                                        ? "bg-amber-400 text-white border-amber-400 shadow-xl shadow-amber-200 transform scale-105"
                                                        : "bg-white text-slate-500 border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                                                        }`}
                                                >
                                                    +{p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300">
                                        Confirm Award
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}


                {/* --- TAB: WELLBEING --- */}
                {activeTab === 'wellbeing' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-500">
                        {/* Trigger Card */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-indigo-50 relative overflow-hidden">
                                <h3 className="text-xl font-bold text-slate-800 mb-1">Check-in Prompt</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Teacher Initiated</p>

                                <form onSubmit={handleSendCheckin} className="space-y-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Student</label>
                                        <select
                                            value={checkinForm.studentId}
                                            onChange={(e) => setCheckinForm({ ...checkinForm, studentId: e.target.value })}
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
                                        >
                                            <option value="">Select Student...</option>
                                            {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.class})</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Context</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['Academic Pressure', 'Behaviour Shift', 'Absence', 'Routine Check'].map(reason => (
                                                <button
                                                    key={reason}
                                                    type="button"
                                                    onClick={() => setCheckinForm({ ...checkinForm, concern: reason })}
                                                    className={`py-2 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${checkinForm.concern === reason
                                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                                        : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'
                                                        }`}
                                                >
                                                    {reason}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
                                        Send Private Check-in
                                    </button>
                                </form>
                            </div>

                            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100">
                                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Activity size={18} className="text-emerald-500" /> Pulse Live
                                </h4>
                                <div className="space-y-4">
                                    {recentCheckins.map(c => (
                                        <div key={c.id} className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
                                            <div className={`p-2 rounded-xl text-white ${c.mood === 'worried' ? 'bg-orange-400' : 'bg-emerald-400'}`}>
                                                {c.mood === 'worried' ? <AlertCircle size={16} /> : <Heart size={16} />}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-800 text-sm">{c.student}</h5>
                                                <p className="text-xs text-slate-500 mt-1 leading-snug">"{c.note}"</p>
                                                <span className="text-[10px] font-bold text-slate-400 mt-2 block upppercase tracking-wider">{c.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Analytic & Action */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-slate-900 text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                                                <TrendingUp size={24} className="text-indigo-300" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold tracking-tight">AI Analysis</h2>
                                                <p className="text-indigo-200/80 text-xs font-bold uppercase tracking-widest">Kabir Singh</p>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm mb-6">
                                            <h4 className="flex items-center gap-2 font-bold text-orange-300 mb-2">
                                                <AlertTriangle size={18} /> Correlation Detected
                                            </h4>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                Consistent "Academic Pressure" logs correlate with Physics assessment schedules. Recommended remedial support.
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">Intervention</button>
                                            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">Counselor</button>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex items-end justify-between gap-1">
                                        {moodTrends.map((t, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2 w-full group">
                                                <div
                                                    className={`w-full rounded-t-xl transition-all duration-500 relative ${t.mood >= 4 ? 'bg-emerald-400 h-32 opacity-80 group-hover:opacity-100' :
                                                        t.mood === 3 ? 'bg-blue-400 h-20 opacity-60 group-hover:opacity-80' :
                                                            'bg-orange-400 h-12 opacity-80 group-hover:opacity-100'
                                                        }`}
                                                ></div>
                                                <span className="text-[10px] font-bold text-slate-500">{t.day}</span>
                                            </div>
                                        ))}
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
        </div>
    );
};

export default BehaviourLog;
