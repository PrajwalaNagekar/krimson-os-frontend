import React, { useState } from 'react';
import {
    BookOpen,
    Compass,
    BarChart3,
    Award,
    ChevronRight,
    Star,
    Clock,
    CheckCircle2,
    Sparkles,
    Target,
    MessageSquare,
    ArrowRight,
    Save,
    Bell,
    Zap,
    TrendingUp,
    ShieldCheck,
    Lightbulb,
    FileText
} from 'lucide-react';

const ProfessionalGrowthHub = () => {
    const [subTab, setSubTab] = useState('learning'); // 'learning' or 'coach'

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Workspace Sub-Navigation */}
            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-fit">
                <button
                    onClick={() => setSubTab('learning')}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${subTab === 'learning'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    <BookOpen size={16} /> Learning Hub
                </button>
                <button
                    onClick={() => setSubTab('coach')}
                    className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${subTab === 'coach'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-500 hover:bg-slate-50'
                        }`}
                >
                    <Compass size={16} /> Pedagogical Coach
                </button>
            </div>

            {subTab === 'learning' ? <LearningHub /> : <PedagogicalCoach />}
        </div>
    );
};

/* --- LEARNING HUB MODULE --- */
const LearningHub = () => {
    const [viewState, setViewState] = useState('discovery'); // 'discovery', 'library', 'player'
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');

    const [courses, setCourses] = useState([
        { id: 1, title: 'Inquiry-Based Learning Mastery', category: 'Pedagogy', duration: '4h 30m', progress: 65, instructor: 'Dr. Sarah Jensen', source: 'Internal Academy', level: 'Intermediate', rating: 4.8 },
        { id: 2, title: 'AI in the Modern Classroom', category: 'Technology', duration: '2h 15m', progress: 0, instructor: 'Prof. Mark Vane', source: 'Coursera Partner', level: 'Beginner', rating: 4.9 },
        { id: 3, title: 'Social Emotional Learning (SEL)', category: 'Wellbeing', duration: '6h 00m', progress: 30, instructor: 'Elena Rodriguez', source: 'Krimson Ed', level: 'Advanced', rating: 4.7 },
        { id: 4, title: 'Classroom Management 2.0', category: 'Pedagogy', duration: '3h 45m', progress: 10, instructor: 'Dr. Jane Smith', source: 'Internal Academy', level: 'Intermediate', rating: 4.6 },
    ]);

    const recommendations = [
        { id: 1, title: 'Differentiated Instruction', reason: 'Based on your recent Lesson Plans', alignment: '95% Match' },
        { id: 2, title: 'Advanced Lab Safety', reason: 'Skill Gap: Science Lab Operations', alignment: 'High Priority' },
    ];

    const handleEnroll = (course) => {
        setCourses(prev => prev.map(c =>
            c.id === course.id ? { ...c, progress: Math.max(c.progress, 1) } : c
        ));
        setSelectedCourse(course);
        setViewState('player');
    };

    if (viewState === 'library') {
        return (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                <div className="flex items-center justify-between">
                    <div>
                        <button onClick={() => setViewState('discovery')} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors mb-2">
                            <ChevronRight size={14} className="rotate-180" /> Back to Discovery
                        </button>
                        <h2 className="text-2xl font-bold text-slate-800">Learning Library</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Compass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {['All', 'Pedagogy', 'Technology', 'Wellbeing', 'Leadership'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${filter === f ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.filter(c => filter === 'All' || c.category === filter).map(course => (
                        <CourseCard key={course.id} course={course} onAction={() => handleEnroll(course)} />
                    ))}
                </div>
            </div>
        );
    }

    if (viewState === 'player' && selectedCourse) {
        return <CoursePlayer course={selectedCourse} onBack={() => setViewState('discovery')} />;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Main Learning Discovery */}
            <div className="lg:col-span-8 space-y-8">
                {/* Discovery Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">Learning Discovery</h2>
                            <p className="text-sm text-slate-500">Explore new skills and pedagogical strategies</p>
                        </div>
                        <button
                            onClick={() => setViewState('library')}
                            className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all border border-indigo-100"
                        >
                            View Library
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.slice(0, 3).map(course => (
                            <CourseCard key={course.id} course={course} onAction={() => handleEnroll(course)} />
                        ))}
                    </div>
                </section>

                {/* Recommendations Strip */}
                <section>
                    <div className="flex items-center gap-2 mb-6 text-slate-800">
                        <Sparkles size={20} className="text-amber-500" />
                        <h2 className="text-xl font-bold">Recommended for You</h2>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        {recommendations.map(rec => (
                            <div key={rec.id} className="min-w-[320px] bg-gradient-to-br from-indigo-50/50 to-white p-6 rounded-[2.5rem] border border-indigo-100/50 flex flex-col justify-between shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                                <div>
                                    <div className="inline-block px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-[9px] font-bold text-indigo-600 uppercase tracking-widest border border-indigo-100/30 mb-3">
                                        {rec.alignment}
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-1 leading-tight">{rec.title}</h4>
                                    <p className="text-xs text-slate-500 mb-4">{rec.reason}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-sm">Details</button>
                                    <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-100 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">Later</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Progress & Achievements Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                {/* Active Learning Progress Section */}
                <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 font-bold">Active Progress</h3>
                    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100 before:z-0">
                        {[
                            { step: 'Module 3: Engagement', date: 'Tomorrow, 2:00 PM', status: 'Next Up', color: 'indigo' },
                            { step: 'Reflection Quiz', date: 'Feb 10', status: 'Locked', color: 'slate' },
                            { step: 'Mastery Certificate', date: 'Est. Feb 15', status: 'Goal', color: 'amber' },
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex gap-4">
                                <div className={`w-6 h-6 rounded-full bg-white border-2 border-${item.color}-500 flex items-center justify-center shrink-0`}>
                                    <div className={`w-2 h-2 rounded-full bg-${item.color}-500 shadow-sm shadow-indigo-200`}></div>
                                </div>
                                <div>
                                    <div className={`text-[10px] font-bold uppercase tracking-wider text-${item.color}-600 mb-0.5`}>{item.status}</div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight font-bold">{item.step}</h4>
                                    <p className="text-[11px] text-slate-400 font-medium">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certification & Achievement Showcase */}
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Award size={20} className="text-amber-400" /> Mastery Archive
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: 'Creative Tech', icon: Zap, color: 'emerald' },
                            { name: 'SEL Lead', icon: CheckCircle2, color: 'blue' },
                        ].map((badge, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center group cursor-pointer hover:bg-white/10 transition-all active:scale-95">
                                <div className={`w-12 h-12 rounded-full bg-${badge.color === 'blue' ? 'indigo' : badge.color}-500/20 text-${badge.color === 'blue' ? 'indigo' : badge.color}-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner border border-white/5`}>
                                    <badge.icon size={24} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 group-hover:text-white">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3.5 bg-white text-indigo-950 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-50 transition-all active:scale-95 shadow-xl font-bold">
                        View All Certificates
                    </button>
                </div>
            </div>
        </div>
    );
};

const CourseCard = ({ course, onAction }) => (
    <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-indigo-100">
                {course.category}
            </span>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <Star size={12} className="text-amber-400 fill-amber-400" /> {course.rating}
            </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors leading-tight font-bold">
            {course.title}
        </h3>
        <p className="text-xs text-slate-500 mb-6">by {course.instructor} • {course.source}</p>

        <div className="mt-auto space-y-4">
            {course.progress > 0 && (
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-indigo-600">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                        <div
                            className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                            style={{ width: `${course.progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                <span>{course.level}</span>
            </div>

            <button
                onClick={onAction}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95 font-bold"
            >
                {course.progress > 0 ? 'Resume' : 'Enroll Now'} <ArrowRight size={14} />
            </button>
        </div>
    </div>
);

const CoursePlayer = ({ course, onBack }) => {
    const [activeModule, setActiveModule] = useState(0);
    const curriculum = [
        { title: 'Introduction to Inquiry', duration: '15m', completed: true },
        { title: 'Designing Questions', duration: '45m', completed: true },
        { title: 'Evidence-Based Reasoning', duration: '1h 20m', completed: false },
        { title: 'Peer Collaboration Flow', duration: '50m', completed: false },
        { title: 'Mastery Assessment', duration: '30m', completed: false },
    ];

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">
                    <ChevronRight size={14} className="rotate-180" /> Back to Hub
                </button>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
                            <span className="text-slate-400">Overall Course Progress</span>
                            <span className="text-indigo-600">{course.progress}%</span>
                        </div>
                        <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Content Area */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="aspect-video bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative group border-4 border-white">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                                <Zap size={32} className="text-white fill-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white/60 text-xs font-bold uppercase tracking-widest">
                            <span>04:20 / {curriculum[activeModule].duration}</span>
                            <div className="flex gap-4">
                                <span className="hover:text-white cursor-pointer transition-colors">CC</span>
                                <span className="hover:text-white cursor-pointer transition-colors">HD</span>
                                <span className="hover:text-white cursor-pointer transition-colors">Full</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-bold text-slate-800">{curriculum[activeModule].title}</h1>
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-indigo-100">
                                {course.category}
                            </span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm mb-8">
                            In this module, we explore the core principles of {curriculum[activeModule].title.toLowerCase()}. Focus on how these strategies can be adapted for differentiated classrooms and inquiry-based learning environments.
                        </p>

                        <div className="flex gap-4 border-t border-slate-100 pt-8">
                            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg active:scale-95">
                                Complete & Next <ChevronRight size={14} />
                            </button>
                            <button className="px-6 py-3 border border-slate-200 text-slate-500 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 active:scale-95">
                                Download Materials
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Curriculum */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Course Curriculum</h3>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {curriculum.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveModule(i)}
                                    className={`p-4 cursor-pointer transition-all hover:bg-slate-50 flex items-center justify-between ${activeModule === i ? 'bg-indigo-50/50 border-l-4 border-indigo-500' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.completed ? (
                                            <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0">
                                                {i + 1}
                                            </div>
                                        )}
                                        <div className="overflow-hidden">
                                            <h4 className={`text-xs font-bold leading-tight truncate ${activeModule === i ? 'text-indigo-600' : 'text-slate-700'}`}>{item.title}</h4>
                                            <p className="text-[10px] text-slate-400 truncate">{item.duration}</p>
                                        </div>
                                    </div>
                                    {activeModule === i && <Zap size={14} className="text-indigo-500 animate-pulse" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-6 text-white shadow-xl">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-4">
                            <MessageSquare size={16} /> Course Notes
                        </h4>
                        <textarea
                            className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none mb-4"
                            rows="4"
                            placeholder="Type your notes here while watching..."
                        ></textarea>
                        <button className="w-full py-3 bg-white text-indigo-600 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg active:scale-95">
                            Save Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- PEDAGOGICAL COACH MODULE --- */
const PedagogicalCoach = () => {
    const [reflection, setReflection] = useState('');
    const [actions, setActions] = useState([
        { id: 1, task: 'Master Socratic Methods', done: false, date: 'Mar 15' },
        { id: 2, task: 'Clean Inventory Log', done: true, date: 'Feb 1' },
        { id: 3, task: 'Student Lab Safety Audit', done: false, date: 'Tomorrow' },
    ]);

    const toggleAction = (id) => {
        setActions(prev => prev.map(a => a.id === id ? { ...a, done: !a.done } : a));
    };

    const addAction = () => {
        const newTask = prompt("Enter new improvement goal:");
        if (newTask) {
            setActions(prev => [...prev, { id: Date.now(), task: newTask, done: false, date: 'Active' }]);
        }
    };

    const [notification, setNotification] = useState(null);
    const showNotice = (msg) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {notification && (
                <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-bottom-4 z-[100] flex items-center gap-3">
                    <Sparkles size={18} className="text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">{notification}</span>
                </div>
            )}

            {/* Insights and Reflections */}
            <div className="lg:col-span-8 space-y-8">
                {/* Teaching Insight Summary */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 mb-6 text-slate-800">
                        <TrendingUp size={20} className="text-emerald-500" />
                        <h2 className="text-xl font-bold">Growth Insights</h2>
                    </div>

                    {[
                        { title: 'Student Choice Architecture', confidence: 92, trend: 'Improving', tag: 'Engagement', icon: Zap, color: 'indigo' },
                        { title: 'Questioning Depth', confidence: 78, trend: 'Opportunity', tag: 'Pedagogy', icon: MessageSquare, color: 'amber' },
                    ].map((insight, i) => (
                        <div key={i} className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow group flex items-center gap-6">
                            <div className={`w-14 h-14 rounded-2xl bg-${insight.color}-50 text-${insight.color}-600 flex items-center justify-center shrink-0`}>
                                <insight.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none border-r border-slate-200 pr-2">{insight.tag}</span>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                                        <ShieldCheck size={12} /> {insight.confidence}% Confidence
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{insight.title}</h3>
                                <p className="text-xs text-slate-500 font-medium">Insight: Current {insight.title.toLowerCase()} indicates a positive {insight.trend.toLowerCase()} trend.</p>
                            </div>
                            <button onClick={() => showNotice(`Viewing details for ${insight.title}`)} className="p-3 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 rounded-xl transition-all active:scale-95">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    ))}
                </section>

                {/* Teaching Strategy Suggestions */}
                <section>
                    <div className="flex items-center gap-2 mb-6 text-slate-800">
                        <Lightbulb size={20} className="text-indigo-500" />
                        <h2 className="text-xl font-bold">Strategy Suggestions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'Socratic Circles Integration', desc: 'Implement structured student-led discussions to deepen analysis within Science units.', action: 'Apply to Planning' },
                            { title: 'Visual Scaffolding for Labs', desc: 'Use diagrams and color-coded steps for students who need additional differentiation support.', action: 'Save to List' },
                        ].map((strategy, i) => (
                            <details key={i} className="group bg-slate-50 rounded-[1.8rem] border border-slate-100 shadow-sm overflow-hidden transition-all">
                                <summary className="p-6 cursor-pointer flex items-center justify-between list-none">
                                    <h4 className="font-bold text-slate-700 tracking-tight uppercase text-sm">{strategy.title}</h4>
                                    <div className="p-1 bg-white rounded-lg shadow-sm group-open:rotate-180 transition-transform">
                                        <ChevronRight size={16} className="text-slate-400" />
                                    </div>
                                </summary>
                                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{strategy.desc}</p>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => showNotice(strategy.action === 'Apply to Planning' ? "Integrating with Lesson Planner..." : "Added to Action Tracker")}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100 active:scale-95"
                                        >
                                            {strategy.action === 'Apply to Planning' ? <Zap size={14} /> : <Save size={14} />} {strategy.action}
                                        </button>
                                        <button className="px-4 py-2 bg-white text-slate-400 border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-slate-600 transition-all">Preview Strategy</button>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </div>

            {/* Reflection and Tracker Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                {/* Reflection Prompt Workspace */}
                <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <MessageSquare size={20} className="text-white" /> Reflection
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                            <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">Prompt of the week</p>
                            <h4 className="text-sm font-bold mb-4 leading-relaxed tracking-tight">How did your last differentiation strategy affect the high-performers?</h4>
                            <textarea
                                value={reflection}
                                onChange={(e) => setReflection(e.target.value)}
                                className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                                rows="3"
                                placeholder="Jot down your reflection..."
                            ></textarea>
                            <button
                                onClick={() => { showNotice("Reflection Saved!"); setReflection(''); }}
                                className={`w-full mt-3 py-2 bg-white text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95 ${!reflection && 'opacity-50 cursor-not-allowed'}`}
                                disabled={!reflection}
                            >
                                Save Note
                            </button>
                        </div>
                    </div>
                </div>

                {/* Improvement Action Tracker */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Target size={20} className="text-rose-500" /> Improvement
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{actions.filter(a => !a.done).length} Active</span>
                    </div>
                    <div className="space-y-3">
                        {actions.map((item, i) => (
                            <div key={item.id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${item.done ? 'bg-slate-50 border-transparent opacity-60' : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-sm'}`}>
                                <div
                                    onClick={() => toggleAction(item.id)}
                                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer ${item.done ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-200 text-transparent hover:border-indigo-300'}`}
                                >
                                    <CheckCircle2 size={12} />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-xs font-bold leading-tight uppercase tracking-tight ${item.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{item.task}</h4>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{item.date}</p>
                                </div>
                                {!item.done && item.date === 'Tomorrow' && (
                                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={addAction}
                        className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-indigo-300 hover:text-indigo-500 transition-all active:scale-95"
                    >
                        + New Action Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalGrowthHub;
