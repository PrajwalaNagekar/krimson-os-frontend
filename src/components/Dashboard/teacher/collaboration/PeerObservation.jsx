import React, { useState, useRef } from 'react';
import {
    Plus, Eye, Clock, Save, Send, Shield, User, Users, ChevronRight,
    Target, BookOpen, MessageSquare, TrendingUp, Star, AlertCircle,
    CheckCircle, FileText, Paperclip, Smile, Meh, Frown, ThumbsUp,
    Award, Lightbulb, X, Check, Search
} from 'lucide-react';

const PeerObservation = () => {
    const [viewMode, setViewMode] = useState('list'); // 'list' | 'teacher-observe' | 'view-student-feedback'
    const [selectedObservation, setSelectedObservation] = useState(null);
    const [activeSection, setActiveSection] = useState('planning');
    const [showTeacherSelectModal, setShowTeacherSelectModal] = useState(false);
    const [userRole, setUserRole] = useState('teacher'); // 'teacher' | 'student'

    const sectionRefs = {
        planning: useRef(null),
        engagement: useRef(null),
        methodology: useRef(null),
        management: useRef(null),
        strengths: useRef(null),
        improvements: useRef(null)
    };

    // Available teachers to observe
    const [availableTeachers, setAvailableTeachers] = useState([
        { id: 1, name: 'Michael Chen', subject: 'Science', grade: 'Grade 7', avatar: 'MC', color: 'from-blue-500 to-indigo-600' },
        { id: 2, name: 'Emily Roberts', subject: 'Mathematics', grade: 'Grade 8', avatar: 'ER', color: 'from-emerald-500 to-teal-600' },
        { id: 3, name: 'David Lee', subject: 'English', grade: 'Grade 9', avatar: 'DL', color: 'from-purple-500 to-pink-600' },
        { id: 4, name: 'Lisa Martinez', subject: 'History', grade: 'Grade 6', avatar: 'LM', color: 'from-amber-500 to-orange-600' },
    ]);

    const [selectedTeacherToObserve, setSelectedTeacherToObserve] = useState(null);

    const [observations, setObservations] = useState([
        {
            id: 1,
            type: 'Teacher Observation',
            title: 'Grade 7 Science - Ecosystems Lesson',
            observer: 'Sarah Johnson',
            observedTeacher: 'Michael Chen',
            subject: 'Science',
            grade: 'Grade 7',
            date: '2024-02-01',
            status: 'Submitted',
            confidential: true,
            acknowledged: false
        },
        {
            id: 2,
            type: 'Student Appreciation',
            title: 'Peer Appreciation - Grade 8',
            observer: 'Students',
            grade: 'Grade 8',
            date: '2024-02-03',
            status: 'Active',
            appreciationCount: 15
        }
    ]);

    const [teacherObservationData, setTeacherObservationData] = useState({
        planning: { rating: 4, notes: 'Lesson objectives were clearly defined and aligned with curriculum standards. Materials were well-prepared.' },
        engagement: { rating: 5, notes: 'Students were highly engaged throughout the lesson. Multiple hands raised during Q&A sessions.' },
        methodology: { rating: 4, notes: 'Effective use of inquiry-based learning. Good balance between direct instruction and student exploration.' },
        management: { rating: 4, notes: 'Smooth transitions between activities. Clear expectations set at the beginning.' },
        strengths: { notes: 'Excellent rapport with students. Creative use of real-world examples to explain abstract concepts.' },
        improvements: { notes: 'Consider incorporating more differentiation strategies for advanced learners.' }
    });

    // Student Peer Appreciation Cards (students appreciating each other)
    const [studentAppreciations, setStudentAppreciations] = useState([
        {
            id: 1,
            fromStudent: { name: 'Emma Wilson', avatar: 'EW', image: null, color: 'from-pink-500 to-rose-600' },
            toStudent: { name: 'Alex Kumar', avatar: 'AK', image: null, color: 'from-blue-500 to-indigo-600' },
            badge: { type: 'Kindness', icon: '💝', color: 'from-pink-500 to-rose-500' },
            message: 'Thank you for helping me understand the math problem! You explained it so patiently.',
            date: '2024-02-05',
            grade: 'Grade 8'
        },
        {
            id: 2,
            fromStudent: { name: 'Ryan Chen', avatar: 'RC', image: null, color: 'from-emerald-500 to-teal-600' },
            toStudent: { name: 'Sophia Martinez', avatar: 'SM', image: null, color: 'from-purple-500 to-pink-600' },
            badge: { type: 'Helpful', icon: '🤝', color: 'from-blue-500 to-cyan-500' },
            message: 'You always share your notes with everyone. That really helps!',
            date: '2024-02-05',
            grade: 'Grade 8'
        },
        {
            id: 3,
            fromStudent: { name: 'Mia Johnson', avatar: 'MJ', image: null, color: 'from-amber-500 to-orange-600' },
            toStudent: { name: 'Liam Brown', avatar: 'LB', image: null, color: 'from-indigo-500 to-blue-600' },
            badge: { type: 'Teamwork', icon: '👥', color: 'from-emerald-500 to-green-500' },
            message: 'Great job leading our group project! You made sure everyone had a chance to contribute.',
            date: '2024-02-04',
            grade: 'Grade 8'
        },
        {
            id: 4,
            fromStudent: { name: 'Noah Davis', avatar: 'ND', image: null, color: 'from-violet-500 to-purple-600' },
            toStudent: { name: 'Olivia Taylor', avatar: 'OT', image: null, color: 'from-rose-500 to-pink-600' },
            badge: { type: 'Creativity', icon: '🎨', color: 'from-purple-500 to-fuchsia-500' },
            message: 'Your presentation was amazing! The drawings really helped me understand the topic.',
            date: '2024-02-04',
            grade: 'Grade 8'
        },
        {
            id: 5,
            fromStudent: { name: 'Ava Anderson', avatar: 'AA', image: null, color: 'from-cyan-500 to-blue-600' },
            toStudent: { name: 'Ethan White', avatar: 'EW', image: null, color: 'from-green-500 to-emerald-600' },
            badge: { type: 'Encouragement', icon: '⭐', color: 'from-amber-500 to-yellow-500' },
            message: 'Thanks for cheering me up when I was feeling down. You\'re a great friend!',
            date: '2024-02-03',
            grade: 'Grade 8'
        },
        {
            id: 6,
            fromStudent: { name: 'Isabella Lee', avatar: 'IL', image: null, color: 'from-fuchsia-500 to-pink-600' },
            toStudent: { name: 'Mason Garcia', avatar: 'MG', image: null, color: 'from-teal-500 to-cyan-600' },
            badge: { type: 'Leadership', icon: '🏆', color: 'from-orange-500 to-red-500' },
            message: 'You always help organize our class activities. Thank you for being such a good leader!',
            date: '2024-02-03',
            grade: 'Grade 8'
        }
    ]);

    const teacherSections = [
        { id: 'planning', label: 'Lesson Planning Quality', icon: Target, color: 'text-blue-600' },
        { id: 'engagement', label: 'Student Engagement', icon: Users, color: 'text-emerald-600' },
        { id: 'methodology', label: 'Teaching Methodology', icon: BookOpen, color: 'text-purple-600' },
        { id: 'management', label: 'Classroom Management', icon: TrendingUp, color: 'text-amber-600' },
        { id: 'strengths', label: 'Strengths Observed', icon: Star, color: 'text-pink-600' },
        { id: 'improvements', label: 'Improvement Suggestions', icon: Lightbulb, color: 'text-indigo-600' }
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSelectTeacher = (teacher) => {
        setSelectedTeacherToObserve(teacher);
        setShowTeacherSelectModal(false);
        setViewMode('teacher-observe');
        setSelectedObservation({
            type: 'Teacher Observation',
            status: 'Draft',
            observedTeacher: teacher.name,
            subject: teacher.subject,
            grade: teacher.grade
        });
    };

    const RatingSelector = ({ value, onChange }) => {
        const ratings = [
            { value: 5, label: 'Excellent', color: 'from-emerald-500 to-green-600' },
            { value: 4, label: 'Good', color: 'from-blue-500 to-indigo-600' },
            { value: 3, label: 'Satisfactory', color: 'from-amber-500 to-orange-600' },
            { value: 2, label: 'Needs Support', color: 'from-orange-500 to-red-600' },
            { value: 1, label: 'Significant Concern', color: 'from-red-500 to-red-700' }
        ];

        return (
            <div className="flex gap-2 flex-wrap">
                {ratings.map((rating) => (
                    <button
                        key={rating.value}
                        onClick={() => onChange(rating.value)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${value === rating.value
                            ? `bg-gradient-to-br ${rating.color} text-white shadow-lg scale-105`
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        {rating.label}
                    </button>
                ))}
            </div>
        );
    };

    const TeacherObservationSection = ({ sectionId, title, icon: Icon, color, hasRating = true }) => {
        const data = teacherObservationData[sectionId] || {};

        return (
            <div ref={sectionRefs[sectionId]} className="scroll-mt-24 mb-8 group">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color === 'text-blue-600' ? 'from-blue-50 to-blue-100' :
                            color === 'text-emerald-600' ? 'from-emerald-50 to-emerald-100' :
                                color === 'text-purple-600' ? 'from-purple-50 to-purple-100' :
                                    color === 'text-amber-600' ? 'from-amber-50 to-amber-100' :
                                        color === 'text-pink-600' ? 'from-pink-50 to-pink-100' :
                                            'from-indigo-50 to-indigo-100'
                            } flex items-center justify-center flex-shrink-0`}>
                            <Icon size={20} className={color} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>

                            {hasRating && (
                                <div className="mb-4">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                        Rating
                                    </label>
                                    <RatingSelector
                                        value={data.rating}
                                        onChange={(val) => setTeacherObservationData({
                                            ...teacherObservationData,
                                            [sectionId]: { ...data, rating: val }
                                        })}
                                    />
                                </div>
                            )}

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                                    {hasRating ? 'Detailed Observations' : 'Notes'}
                                </label>
                                <textarea
                                    value={data.notes || ''}
                                    onChange={(e) => setTeacherObservationData({
                                        ...teacherObservationData,
                                        [sectionId]: { ...data, notes: e.target.value }
                                    })}
                                    placeholder="Provide specific examples and evidence..."
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm leading-relaxed text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/20 focus:border-indigo-300 transition-all min-h-[100px]"
                                    rows={4}
                                />
                            </div>

                            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                                <Paperclip size={14} />
                                <button className="text-indigo-600 font-medium hover:text-indigo-700">
                                    Attach evidence or resources
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full">
            {viewMode === 'list' ? (
                <>
                    {/* Observation List View */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">Peer Observations</h2>
                            <p className="text-xs text-slate-500 mt-1">Professional development and feedback</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowTeacherSelectModal(true)}
                                className="px-5 py-2.5 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-200 flex items-center gap-2 transition-all hover:scale-105"
                            >
                                <Eye size={16} /> Observe Teacher
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {observations.map((obs, index) => (
                            <div
                                key={obs.id}
                                onClick={() => {
                                    setSelectedObservation(obs);
                                    setViewMode(obs.type === 'Teacher Observation' ? 'teacher-observe' : 'view-student-appreciation');
                                }}
                                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${obs.type === 'Teacher Observation'
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        {obs.type}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {obs.confidential && (
                                            <Shield size={14} className="text-slate-400" />
                                        )}
                                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${obs.status === 'Submitted' || obs.status === 'Active' ? 'bg-blue-50 text-blue-600' :
                                            obs.status === 'Draft' ? 'bg-slate-50 text-slate-600' :
                                                'bg-emerald-50 text-emerald-600'
                                            }`}>
                                            {obs.status}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {obs.title}
                                </h3>
                                <div className="space-y-2 text-xs text-slate-500">
                                    {obs.type === 'Teacher Observation' ? (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <User size={14} />
                                                <span className="font-medium">Observer: {obs.observer}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Eye size={14} />
                                                <span className="font-medium">Teacher: {obs.observedTeacher}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BookOpen size={14} />
                                                <span className="font-medium">{obs.subject} - {obs.grade}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Star size={14} className="text-amber-500" />
                                                <span className="font-medium">{obs.appreciationCount} Appreciation Cards</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={14} />
                                                <span className="font-medium">{obs.grade}</span>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span className="font-medium">{obs.date}</span>
                                    </div>
                                </div>
                                {obs.acknowledged && (
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                                        <CheckCircle size={14} />
                                        Acknowledged by teacher
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            ) : viewMode === 'teacher-observe' ? (
                <>
                    {/* Teacher Observation Workspace */}
                    <div className="flex flex-col h-full">
                        {/* Sticky Toolbar */}
                        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
                            <div className="px-6 py-4">
                                <div className="flex items-center justify-between mb-3">
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className="text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors"
                                    >
                                        ← Back to Observations
                                    </button>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-bold">
                                            <Shield size={14} />
                                            Confidential
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">
                                            <Save size={14} />
                                            Auto-saved
                                        </div>
                                        <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all">
                                            Save Draft
                                        </button>
                                        <button className="px-4 py-2 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl text-xs font-bold hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-200 flex items-center gap-2">
                                            <Send size={14} /> Submit Observation
                                        </button>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Observation Title / Lesson Topic"
                                    className="text-3xl font-black text-slate-800 w-full border-none outline-none bg-transparent placeholder-slate-300 mb-2"
                                />
                                <div className="flex items-center gap-3 text-sm text-slate-500">
                                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-medium text-xs">Teacher Observation</span>
                                    <span>•</span>
                                    <span>Observer: Sarah Johnson (You)</span>
                                    <span>•</span>
                                    <span>Observing: {selectedObservation?.observedTeacher || 'Not selected'}</span>
                                    <span>•</span>
                                    <span>{selectedObservation?.subject} - {selectedObservation?.grade}</span>
                                    <span>•</span>
                                    <span className="text-xs">{new Date().toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left Navigator */}
                            <div className="w-64 border-r border-slate-200 bg-slate-50/50 p-4 overflow-y-auto">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Observation Sections</p>
                                <div className="space-y-1">
                                    {teacherSections.map((section) => {
                                        const Icon = section.icon;
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${activeSection === section.id
                                                    ? 'bg-white text-indigo-600 shadow-sm'
                                                    : 'text-slate-600 hover:bg-white/50'
                                                    }`}
                                            >
                                                <Icon size={18} className={activeSection === section.id ? 'text-indigo-600' : section.color} />
                                                <span className="flex-1 text-left text-xs">{section.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Main Editor */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="max-w-4xl mx-auto px-8 py-8">
                                    {teacherSections.map((section) => (
                                        <TeacherObservationSection
                                            key={section.id}
                                            sectionId={section.id}
                                            title={section.label}
                                            icon={section.icon}
                                            color={section.color}
                                            hasRating={!['strengths', 'improvements'].includes(section.id)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right Feedback Panel */}
                            <div className="w-80 border-l border-slate-200 bg-slate-50/50 p-4 overflow-y-auto">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <FileText size={18} />
                                    Observation Summary
                                </h3>
                                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                                    <p className="text-xs text-slate-500 mb-2">Overall Impression</p>
                                    <div className="flex gap-1 mb-3">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={18} className="text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        Strong lesson delivery with excellent student engagement. Consider more differentiation.
                                    </p>
                                </div>

                                <div className="border-t border-slate-200 pt-4 mt-4">
                                    <h4 className="font-bold text-slate-700 text-sm mb-3 flex items-center gap-2">
                                        <MessageSquare size={16} />
                                        Teacher Reflection
                                    </h4>
                                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 text-xs text-slate-600">
                                        <p className="font-medium text-blue-700 mb-1">Awaiting acknowledgment</p>
                                        <p className="text-xs">The observed teacher will be able to add their reflection after submission.</p>
                                    </div>
                                </div>

                                <div className="border-t border-slate-200 pt-4 mt-4">
                                    <h4 className="font-bold text-slate-700 text-sm mb-3">Workflow Status</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                                            <span className="text-slate-600">Draft</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs opacity-50">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">2</div>
                                            <span className="text-slate-400">Submitted</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs opacity-50">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">3</div>
                                            <span className="text-slate-400">Acknowledged</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs opacity-50">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">4</div>
                                            <span className="text-slate-400">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Student Peer Appreciation Cards View */}
                    <div className="flex flex-col h-full">
                        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
                            <div className="px-6 py-4">
                                <div className="flex items-center justify-between mb-3">
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className="text-sm font-medium text-slate-400 hover:text-emerald-600 transition-colors"
                                    >
                                        ← Back
                                    </button>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">
                                        <Star size={14} />
                                        {studentAppreciations.length} Appreciation Cards
                                    </div>
                                </div>

                                <h1 className="text-3xl font-black text-slate-800 mb-2">Student Peer Appreciation</h1>
                                <p className="text-sm text-slate-500">Students appreciating each other for kindness, helpfulness, and positive behavior</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 p-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {studentAppreciations.map((appreciation) => (
                                        <div key={appreciation.id} className="group bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-indigo-200 transition-all duration-300 relative overflow-hidden">
                                            {/* Decorative background gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                {/* From Student */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${appreciation.fromStudent.color} text-white flex items-center justify-center text-base font-black shadow-lg ring-4 ring-white`}>
                                                        {appreciation.fromStudent.avatar}
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">From</p>
                                                        <p className="font-black text-slate-800 text-sm">{appreciation.fromStudent.name}</p>
                                                    </div>
                                                </div>

                                                {/* Arrow & Badge */}
                                                <div className="flex items-center justify-center mb-4 py-2">
                                                    <div className={`px-5 py-2.5 rounded-2xl bg-gradient-to-br ${appreciation.badge.color} text-white text-xs font-black uppercase tracking-widest shadow-xl flex items-center gap-2 ring-4 ring-white/50`}>
                                                        <span className="text-xl">{appreciation.badge.icon}</span>
                                                        {appreciation.badge.type}
                                                    </div>
                                                </div>

                                                {/* To Student */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${appreciation.toStudent.color} text-white flex items-center justify-center text-base font-black shadow-lg ring-4 ring-white`}>
                                                        {appreciation.toStudent.avatar}
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">To</p>
                                                        <p className="font-black text-slate-800 text-sm">{appreciation.toStudent.name}</p>
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div className="p-4 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl border-2 border-slate-100 shadow-inner">
                                                    <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                        <MessageSquare size={14} className="text-indigo-400" />
                                                        Message
                                                    </p>
                                                    <p className="text-sm text-slate-700 leading-relaxed font-medium italic">"{appreciation.message}"</p>
                                                </div>

                                                {/* Footer */}
                                                <div className="mt-4 pt-3 border-t-2 border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                                                    <span className="px-2 py-1 bg-slate-100 rounded-lg">{appreciation.grade}</span>
                                                    <span className="px-2 py-1 bg-slate-100 rounded-lg">{appreciation.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Teacher Selection Modal */}
            {showTeacherSelectModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-black text-slate-800">Select Teacher to Observe</h2>
                                <p className="text-sm text-slate-500 mt-1">Choose which teacher you would like to observe</p>
                            </div>
                            <button
                                onClick={() => setShowTeacherSelectModal(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 transition-all hover:bg-slate-100 rounded-xl"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by teacher name or subject..."
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availableTeachers.map((teacher) => (
                                <div
                                    key={teacher.id}
                                    onClick={() => handleSelectTeacher(teacher)}
                                    className="p-4 border-2 border-slate-200 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${teacher.color} text-white flex items-center justify-center text-sm font-bold`}>
                                            {teacher.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{teacher.name}</h3>
                                            <p className="text-xs text-slate-500">{teacher.subject} • {teacher.grade}</p>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PeerObservation;
