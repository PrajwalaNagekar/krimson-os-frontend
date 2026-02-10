import React, { useState } from 'react';
import {
    ClipboardList, MapPin, Calendar,
    FileText, CheckCircle2, ShieldCheck,
    Save, Send, ChevronDown,
    ChevronUp, Plus, Trash2, AlertCircle, Info,
    Clock, Bus, Hotel, DollarSign, Target, Tag,
    Briefcase, Download, Share2, Sparkles, Layout, Shield
} from 'lucide-react';

// --- Tab Button Component ---
const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${activeTab === id
            ? "bg-white/20 backdrop-blur-3xl text-white shadow-lg border border-white/30"
            : "text-blue-100/60 hover:bg-white/10 hover:text-white"
            }`}
    >
        <Icon size={16} />
        <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </button>
);

const EducationalTrips = () => {
    const [activeTab, setActiveTab] = useState('planning'); // planning, risk
    const [tripStatus, setTripStatus] = useState('Draft');

    // Planning State
    const [expandedSections, setExpandedSections] = useState({
        overview: true,
        learning: true,
        logistics: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };


    const StatusBadge = ({ status }) => {
        const styles = {
            'Draft': 'bg-slate-100 text-slate-600 border-slate-200',
            'Submitted': 'bg-amber-50 text-amber-600 border-amber-200',
            'Approved': 'bg-emerald-50 text-emerald-600 border-emerald-200'
        };
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
                {status}
            </span>
        );
    };

    const SectionHeader = ({ title, section, isCompleted }) => (
        <div
            className="flex items-center justify-between p-4 bg-slate-50 cursor-pointer border-b border-slate-200"
            onClick={() => toggleSection(section)}
        >
            <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'
                    }`}>
                    {isCompleted ? <CheckCircle2 size={14} /> : '!'}
                </div>
                <h3 className="font-bold text-slate-700">{title}</h3>
            </div>
            {expandedSections[section] ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-12">

            {/* Header Section with Gradient Card */}
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    {/* Krimson OS Pill Breadcrumb */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
                            <Sparkles size={12} className="text-blue-200" />
                            Krimson OS • Educational Trips
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="space-y-8">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                                        <Bus size={28} className="text-white" />
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Educational Trip Planning</h1>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg">
                                        <Save size={18} /> Save Draft
                                    </button>
                                    <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all flex items-center gap-2">
                                        <Send size={18} /> Submit for Approval
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 ml-1">
                                        <StatusBadge status={tripStatus} />
                                        <span className="text-blue-100 font-medium text-lg opacity-90">• Science Museum Exploration</span>
                                    </div>

                                    {/* Tabs - Moved Below Title */}
                                    <div className="flex bg-slate-900/40 backdrop-blur-3xl p-1.5 rounded-[2.5rem] border border-white/10 shadow-2xl flex-wrap items-center gap-1 w-fit">
                                        <TabButton id="planning" label="Trip Planning" icon={ClipboardList} activeTab={activeTab} onClick={setActiveTab} />
                                        <TabButton id="risk" label="Risk & Consent" icon={ShieldCheck} activeTab={activeTab} onClick={setActiveTab} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {activeTab === 'planning' && (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        {/* Trip Overview Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
                            <SectionHeader title="Trip Overview" section="overview" isCompleted={true} />
                            {expandedSections.overview && (
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Science Museum Exploration"
                                            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Destination</label>
                                        <div className="relative">
                                            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                defaultValue="National Science Centre"
                                                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Type</label>
                                        <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                                            <option>Curriculum Based</option>
                                            <option>Recreational</option>
                                            <option>Sports/Competition</option>
                                            <option>Community Service</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date Range</label>
                                        <div className="relative">
                                            <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                defaultValue="Feb 24, 2026 - Feb 25, 2026"
                                                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Grades / Classes</label>
                                        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                            {['Grade 8A', 'Grade 8B', 'Grade 9C'].map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-600 flex items-center gap-2">
                                                    {tag} <Trash2 size={12} className="text-slate-300 hover:text-red-500 cursor-pointer" />
                                                </span>
                                            ))}
                                            <button className="px-3 py-1 border border-dashed border-blue-300 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-50 flex items-center gap-1">
                                                <Plus size={12} /> Add Class
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Learning Purpose Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
                            <SectionHeader title="Learning Purpose" section="learning" isCompleted={false} />
                            {expandedSections.learning && (
                                <div className="p-6 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                            Learning Objectives <Info size={14} className="text-slate-300" />
                                        </label>
                                        <textarea
                                            rows="4"
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm leading-relaxed"
                                            placeholder="Enter detailed learning objectives for this trip..."
                                            defaultValue="1. Understand basic principles of robotics and automation.
2. Observe real-world applications of physics in high-tech exhibits.
3. Foster collaborative learning through group-based exploration."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Linked Curriculum Topics</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['Physics: Force', 'Applied Science', 'Modern Tech'].map(topic => (
                                                <span key={topic} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 flex items-center gap-2">
                                                    <Tag size={12} /> {topic}
                                                </span>
                                            ))}
                                            <button className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">
                                                + Link Topic
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Logistics Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
                            <SectionHeader title="Logistics" section="logistics" isCompleted={true} />
                            {expandedSections.logistics && (
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Transport Type</label>
                                        <div className="relative">
                                            <Bus size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <select className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                                                <option>School Bus</option>
                                                <option>Private Coach</option>
                                                <option>Public Transport</option>
                                                <option>Parent Drop-off</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Times</label>
                                        <div className="flex gap-4">
                                            <div className="flex-1 relative">
                                                <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input type="text" defaultValue="08:30 AM" className="w-full pl-9 pr-2 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium" />
                                            </div>
                                            <div className="flex-1 relative">
                                                <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input type="text" defaultValue="04:30 PM" className="w-full pl-9 pr-2 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Accommodation</label>
                                            <div className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
                                            <Hotel className="text-blue-500" size={20} />
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-blue-900">City Science Lodge</p>
                                                <p className="text-[11px] text-blue-700/70">241 Science Park, Block B</p>
                                            </div>
                                            <button className="text-xs font-bold text-blue-600 underline">Change</button>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Budget</label>
                                        <div className="relative">
                                            <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                defaultValue="2,500.00"
                                                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">USD</span>
                                        </div>
                                        <p className="text-[10px] text-slate-400 mt-1 pl-1">Target: approx. $25.00 per student</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* RISK & CONSENT TAB */}
                {activeTab === 'risk' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* Risk Assessment Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-blue-600" /> Risk Assessment Checklist
                                </h3>
                                <button className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                                    + Add Risk Item
                                </button>
                            </div>
                            <div className="p-0 border-t border-slate-100">
                                {[
                                    { id: 1, risk: 'Transport safety during transit', desc: 'Ensuring all students are seated and belted at all times.', severity: 'Medium' },
                                    { id: 2, risk: 'Missing students at museum', desc: 'Strict buddy system and regular roll calls scheduled every hour.', severity: 'High' },
                                    { id: 3, risk: 'Allergic reactions to food', desc: 'Identify all students with food allergies beforehand.', severity: 'Medium' },
                                    { id: 4, risk: 'Minor injury / First Aid', desc: 'Carry school first aid kit and emergency contact list.', severity: 'Low' }
                                ].map((item, idx) => (
                                    <div key={item.id} className={`flex items-start gap-4 p-4 ${idx !== 3 ? 'border-b border-slate-50' : ''} hover:bg-slate-50/50 transition-colors`}>
                                        <div className="pt-1">
                                            <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 ring-offset-0" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className="font-bold text-slate-700 text-sm">{item.risk}</h4>
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.severity === 'High' ? 'bg-red-50 text-red-600 border-red-100' :
                                                    item.severity === 'Medium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                        'bg-blue-50 text-blue-600 border-blue-100'
                                                    }`}>
                                                    {item.severity}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Consent Form Preview */}
                            <div className="lg:col-span-12">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Consent Pack Preview</h3>
                            </div>

                            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-500">Document Style Preview</span>
                                    <div className="flex gap-2">
                                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"><Download size={16} /></button>
                                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"><Share2 size={16} /></button>
                                    </div>
                                </div>
                                <div className="p-8 space-y-8 bg-slate-50/20 max-h-[600px] overflow-y-auto custom-scrollbar">
                                    <div className="text-center space-y-2 border-b border-slate-100 pb-6">
                                        <h2 className="text-2xl font-serif text-slate-800 italic">Parental Consent for Educational Visit</h2>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Krimson International School</p>
                                    </div>

                                    <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                                        <p>I, _______________________________ (Parent/Guardian Name), hereby give my consent for my child to participate in the upcoming educational trip to <strong>National Science Centre</strong> on <strong>Feb 24, 2026</strong>.</p>

                                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 border-2 border-slate-300 rounded"></div>
                                                <span>I agree to the itinerary and transport arrangements as detailed in the trip circular.</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 border-2 border-slate-300 rounded"></div>
                                                <span>I have provided all necessary medical information and emergency contact details.</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 pt-4">
                                            <div className="space-y-4">
                                                <p className="font-bold border-b border-slate-200 pb-2">Emergency Contact</p>
                                                <div className="space-y-2 text-xs">
                                                    <p className="text-slate-400 uppercase font-black tracking-tighter">Primary Name</p>
                                                    <p className="h-4 bg-slate-100 rounded w-full"></p>
                                                    <p className="text-slate-400 uppercase font-black tracking-tighter mt-4">Contact Phone</p>
                                                    <p className="h-4 bg-slate-100 rounded w-2/3"></p>
                                                </div>
                                            </div>
                                            <div className="space-y-4 flex flex-col justify-end">
                                                <div className="border-t border-slate-300 pt-2 text-center text-[10px] text-slate-400">
                                                    Signature of Parent / Guardian
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Consent Tracking Section */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col justify-center h-full">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Overall Consent</p>
                                            <h4 className="text-4xl font-bold text-slate-800">72<span className="text-lg text-slate-300">/100</span></h4>
                                        </div>
                                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 mb-1">72% Completed</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-8">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000" style={{ width: '72%' }}></div>
                                    </div>

                                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        <h5 className="text-[10px] font-black text-slate-400 uppercase mb-2">Student List</h5>
                                        {[
                                            { name: 'Aiden Smith', status: 'Received', alert: true },
                                            { name: 'Bella Thorne', status: 'Pending', alert: false },
                                            { name: 'Caleb Wright', status: 'Received', alert: false },
                                            { name: 'Diana Ross', status: 'Pending', alert: true },
                                            { name: 'Ethan Hunt', status: 'Received', alert: false },
                                            { name: 'Fiona G.', status: 'Received', alert: false },
                                            { name: 'George B.', status: 'Pending', alert: false }
                                        ].map((student, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-700">{student.name}</p>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`text-[10px] font-bold uppercase tracking-tighter ${student.status === 'Received' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                                {student.status}
                                                            </span>
                                                            {student.alert && <AlertCircle size={10} className="text-red-500" title="Medical Alert" />}
                                                        </div>
                                                    </div>
                                                </div>
                                                {student.status === 'Pending' && (
                                                    <button className="text-[10px] font-black text-blue-600 uppercase border border-blue-100 px-2 py-1 rounded bg-white hover:bg-blue-600 hover:text-white transition-all">Remind</button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Validation Sticky Bar (Optional but helpful) */}
            <div className="fixed bottom-6 right-6 z-40">
                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 flex items-center gap-6 animate-in slide-in-from-right-8 duration-500">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                        <span className="text-xs font-bold text-slate-600">66% Complete</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex items-center gap-2 text-amber-600">
                        <AlertCircle size={14} />
                        <span className="text-[11px] font-bold tracking-tight">Missing Objectives</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalTrips;
