import React, { useState, useRef, useEffect } from 'react';
import {
    Plus, Clock, Users, Sparkles, History, Save, Check, X, MessageCircle,
    Send, FileText, Zap, RotateCcw, Share2, ChevronRight, Target, BookOpen,
    ClipboardCheck, UserCheck, Folder, StickyNote, Bold, Italic, Underline,
    List, ListOrdered, CheckSquare, Table, MoreHorizontal, AtSign, Eye
} from 'lucide-react';

const CoPlanningWorkspace = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showVersionHistory, setShowVersionHistory] = useState(false);
    const [showCollaborators, setShowCollaborators] = useState(false);
    const [activeSection, setActiveSection] = useState('objectives');
    const [showCommentPanel, setShowCommentPanel] = useState(true);

    const sectionRefs = {
        objectives: useRef(null),
        activities: useRef(null),
        assessment: useRef(null),
        differentiation: useRef(null),
        resources: useRef(null),
        notes: useRef(null)
    };

    const [activeCollaborators, setActiveCollaborators] = useState([
        { id: 1, name: 'Sarah Johnson', avatar: 'SJ', color: 'from-blue-500 to-indigo-600', active: true, editing: 'objectives' },
        { id: 2, name: 'Mike Chen', avatar: 'MC', color: 'from-emerald-500 to-teal-600', active: true, editing: null },
    ]);

    const [newPlan, setNewPlan] = useState({
        title: '',
        type: 'Lesson Plan',
        subject: '',
        grade: '',
        collaborators: []
    });

    const [planningDocs, setPlanningDocs] = useState([
        {
            id: 1,
            title: 'Grade 7 Ecosystems Unit',
            collaborators: ['Sarah J.', 'Mike C.'],
            status: 'In Progress',
            lastEdited: '1h ago',
            version: 3,
            type: 'Unit Plan',
            subject: 'Science',
            grade: 'Grade 7'
        },
        {
            id: 2,
            title: 'Fractions Teaching Sequence',
            collaborators: ['Emily R.', 'David L.'],
            status: 'Draft',
            lastEdited: '3h ago',
            version: 1,
            type: 'Lesson Plan',
            subject: 'Mathematics',
            grade: 'Grade 6'
        },
        {
            id: 3,
            title: 'Poetry Analysis Workshop',
            collaborators: ['Lisa M.'],
            status: 'Pending Approval',
            lastEdited: '2d ago',
            version: 5,
            type: 'Activity Plan',
            subject: 'English',
            grade: 'Grade 8'
        },
    ]);

    const [sections, setSections] = useState({
        objectives: 'Students will understand the interdependence of organisms in an ecosystem and identify key relationships within food chains and food webs.',
        activities: '1. Introduction: Ecosystem mapping activity (15 min)\n2. Group work: Food chain simulation game (25 min)\n3. Discussion: Real-world ecosystem examples (15 min)\n4. Individual practice: Create your own food web (20 min)',
        assessment: 'Formative: Exit tickets with 3-2-1 reflection\nSummative: Ecosystem poster project with rubric\nPeer assessment: Food web presentations',
        differentiation: 'Advanced learners: Research local ecosystems and present findings\nSupport needed: Guided note-taking templates and visual aids\nELL students: Vocabulary cards with images',
        resources: '• PhET Interactive Simulations\n• National Geographic Ecosystem Videos\n• Printable food web templates\n• Vocabulary flashcards',
        notes: 'Consider extending to 2 periods if students need more time for the food web activity.'
    });

    const [comments, setComments] = useState([
        { id: 1, section: 'activities', author: 'Sarah J.', content: 'Should we add a virtual simulation option?', time: '2h ago', resolved: false, replies: [] },
        { id: 2, section: 'assessment', author: 'Mike C.', content: 'Great idea with the peer assessment!', time: '1h ago', resolved: true, replies: [] },
        { id: 3, section: 'objectives', author: 'Sarah J.', content: 'Can we make this more measurable?', time: '3h ago', resolved: false, replies: [] },
    ]);

    const [versionHistory, setVersionHistory] = useState([
        { version: 3, author: 'Sarah J.', changes: 'Updated differentiation strategies', time: '1h ago', current: true },
        { version: 2, author: 'Mike C.', changes: 'Added assessment rubric details', time: '5h ago', current: false },
        { version: 1, author: 'Sarah J.', changes: 'Initial draft created', time: '1d ago', current: false },
    ]);

    const navigationSections = [
        { id: 'objectives', label: 'Learning Objectives', icon: Target, color: 'text-blue-600' },
        { id: 'activities', label: 'Teaching Activities', icon: BookOpen, color: 'text-emerald-600' },
        { id: 'assessment', label: 'Assessment Plan', icon: ClipboardCheck, color: 'text-purple-600' },
        { id: 'differentiation', label: 'Differentiation', icon: UserCheck, color: 'text-amber-600' },
        { id: 'resources', label: 'Resources', icon: Folder, color: 'text-pink-600' },
        { id: 'notes', label: 'Notes', icon: StickyNote, color: 'text-slate-600' },
    ];

    const availableTeachers = [
        { id: 1, name: 'Sarah Johnson', subject: 'Science', avatar: 'SJ', color: 'from-blue-500 to-indigo-600' },
        { id: 2, name: 'Michael Chen', subject: 'Science', avatar: 'MC', color: 'from-emerald-500 to-teal-600' },
        { id: 3, name: 'Emily Roberts', subject: 'Mathematics', avatar: 'ER', color: 'from-purple-500 to-pink-600' },
        { id: 4, name: 'David Lee', subject: 'English', avatar: 'DL', color: 'from-amber-500 to-orange-600' },
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleCreatePlan = () => {
        if (!newPlan.title.trim()) return;

        const plan = {
            id: Date.now(),
            title: newPlan.title,
            type: newPlan.type,
            subject: newPlan.subject,
            grade: newPlan.grade,
            collaborators: newPlan.collaborators,
            status: 'Draft',
            lastEdited: 'Just now',
            version: 1
        };

        setPlanningDocs([plan, ...planningDocs]);
        setShowCreateModal(false);
        setNewPlan({ title: '', type: 'Lesson Plan', subject: '', grade: '', collaborators: [] });
        setSelectedPlan(plan);
    };

    const toggleCollaborator = (teacherId) => {
        const teacher = availableTeachers.find(t => t.id === teacherId);
        if (!teacher) return;

        if (newPlan.collaborators.includes(teacher.name)) {
            setNewPlan({
                ...newPlan,
                collaborators: newPlan.collaborators.filter(c => c !== teacher.name)
            });
        } else {
            setNewPlan({
                ...newPlan,
                collaborators: [...newPlan.collaborators, teacher.name]
            });
        }
    };

    const SectionEditor = ({ sectionId, title, icon: Icon, color, placeholder }) => {
        const commentsForSection = comments.filter(c => c.section === sectionId && !c.resolved);

        return (
            <div
                ref={sectionRefs[sectionId]}
                className="scroll-mt-24 mb-8 group"
            >
                <div className="flex items-start gap-4">
                    {/* Section Icon */}
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color === 'text-blue-600' ? 'from-blue-50 to-blue-100' : color === 'text-emerald-600' ? 'from-emerald-50 to-emerald-100' : color === 'text-purple-600' ? 'from-purple-50 to-purple-100' : color === 'text-amber-600' ? 'from-amber-50 to-amber-100' : color === 'text-pink-600' ? 'from-pink-50 to-pink-100' : 'from-slate-50 to-slate-100'} flex items-center justify-center flex-shrink-0 mt-1`}>
                        <Icon size={20} className={color} />
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 min-w-0">
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-indigo-600">
                                    <Sparkles size={16} />
                                </button>
                                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600">
                                    <MoreHorizontal size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Rich Text Editor */}
                        <div className="relative">
                            <textarea
                                value={sections[sectionId]}
                                onChange={(e) => setSections({ ...sections, [sectionId]: e.target.value })}
                                placeholder={placeholder || `Start writing...`}
                                className="w-full p-4 bg-white border border-slate-200 rounded-xl text-[15px] leading-relaxed text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/20 focus:border-indigo-300 transition-all min-h-[120px] hover:border-slate-300"
                                rows={6}
                            />

                            {/* Formatting Toolbar */}
                            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm opacity-0 focus-within:opacity-100 hover:opacity-100 transition-opacity">
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <Bold size={14} />
                                </button>
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <Italic size={14} />
                                </button>
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <Underline size={14} />
                                </button>
                                <div className="w-px h-4 bg-slate-200 mx-1"></div>
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <List size={14} />
                                </button>
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <ListOrdered size={14} />
                                </button>
                                <button className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-800 transition-colors">
                                    <CheckSquare size={14} />
                                </button>
                            </div>

                            {/* AI Suggestion Button */}
                            <button className="absolute bottom-3 right-3 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-xs font-bold hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100">
                                <Sparkles size={12} />
                                AI Suggest
                            </button>
                        </div>

                        {/* Comment Indicator */}
                        {commentsForSection.length > 0 && (
                            <div className="mt-2 flex items-center gap-2 text-xs text-amber-600">
                                <MessageCircle size={14} />
                                <span className="font-medium">{commentsForSection.length} unresolved comment{commentsForSection.length > 1 ? 's' : ''}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-full">
            {!selectedPlan ? (
                <>
                    {/* Document List View */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">Shared Planning Documents</h2>
                            <p className="text-xs text-slate-500 mt-1">Collaborate in real-time with your team</p>
                        </div>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="px-6 py-3 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                        >
                            <Plus size={16} /> New Plan
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {planningDocs.map((doc, index) => (
                            <div
                                key={doc.id}
                                onClick={() => setSelectedPlan(doc)}
                                style={{ animationDelay: `${index * 50}ms` }}
                                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${doc.status === 'Pending Approval' ? 'bg-amber-50 text-amber-600' :
                                            doc.status === 'In Progress' ? 'bg-blue-50 text-blue-600' :
                                                'bg-slate-50 text-slate-600'
                                        }`}>
                                        {doc.status}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400">v{doc.version}</span>
                                </div>
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{doc.title}</h3>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-medium">{doc.type}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500">{doc.subject}</span>
                                    </div>
                                </div>
                                <div className="space-y-2 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        <span className="font-medium">{doc.collaborators.join(', ')}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span className="font-medium">Edited {doc.lastEdited}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    {/* Notion-Style Editor Layout */}
                    <div className="flex flex-col h-full">
                        {/* Top Collaboration Toolbar (Sticky) */}
                        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
                            <div className="px-6 py-4">
                                <div className="flex items-center justify-between mb-3">
                                    <button
                                        onClick={() => setSelectedPlan(null)}
                                        className="text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2"
                                    >
                                        ← Back to Documents
                                    </button>
                                    <div className="flex items-center gap-3">
                                        {/* Active Collaborators */}
                                        <div className="flex -space-x-2">
                                            {activeCollaborators.map(collab => (
                                                <div
                                                    key={collab.id}
                                                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${collab.color} text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-md relative cursor-pointer hover:scale-110 transition-transform`}
                                                    title={`${collab.name}${collab.editing ? ` - editing ${collab.editing}` : ''}`}
                                                >
                                                    {collab.avatar}
                                                    {collab.active && (
                                                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setShowCollaborators(!showCollaborators)}
                                            className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                                        >
                                            <Share2 size={14} /> Share
                                        </button>

                                        <button
                                            onClick={() => setShowVersionHistory(!showVersionHistory)}
                                            className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                                        >
                                            <History size={14} /> History
                                        </button>

                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">
                                            <Save size={14} />
                                            <span>Saved</span>
                                        </div>

                                        {selectedPlan.status === 'In Progress' && (
                                            <button className="px-4 py-1.5 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-lg text-xs font-bold hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200 flex items-center gap-1.5">
                                                <Send size={14} /> Submit for Approval
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Editable Title */}
                                <input
                                    type="text"
                                    value={selectedPlan.title}
                                    onChange={(e) => setSelectedPlan({ ...selectedPlan, title: e.target.value })}
                                    className="text-4xl font-black text-slate-800 w-full border-none outline-none focus:outline-none bg-transparent placeholder-slate-300"
                                    placeholder="Untitled Document"
                                />
                                <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg font-medium text-xs">{selectedPlan.type}</span>
                                    <span>•</span>
                                    <span>{selectedPlan.subject}</span>
                                    <span>•</span>
                                    <span>{selectedPlan.grade}</span>
                                    <span>•</span>
                                    <span className="text-xs">Version {selectedPlan.version}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left Navigation Panel */}
                            <div className="w-64 border-r border-slate-200 bg-slate-50/50 p-4 overflow-y-auto">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Sections</p>
                                    {navigationSections.map((section) => {
                                        const Icon = section.icon;
                                        const commentsCount = comments.filter(c => c.section === section.id && !c.resolved).length;

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
                                                <span className="flex-1 text-left">{section.label}</span>
                                                {commentsCount > 0 && (
                                                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center">
                                                        {commentsCount}
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Main Editor Workspace */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="max-w-4xl mx-auto px-8 py-8">
                                    <SectionEditor
                                        sectionId="objectives"
                                        title="Learning Objectives"
                                        icon={Target}
                                        color="text-blue-600"
                                        placeholder="What will students learn? Define clear, measurable objectives..."
                                    />
                                    <SectionEditor
                                        sectionId="activities"
                                        title="Teaching Activities"
                                        icon={BookOpen}
                                        color="text-emerald-600"
                                        placeholder="Outline the teaching sequence and learning activities..."
                                    />
                                    <SectionEditor
                                        sectionId="assessment"
                                        title="Assessment Plan"
                                        icon={ClipboardCheck}
                                        color="text-purple-600"
                                        placeholder="How will you assess student learning? Include formative and summative assessments..."
                                    />
                                    <SectionEditor
                                        sectionId="differentiation"
                                        title="Differentiation Strategy"
                                        icon={UserCheck}
                                        color="text-amber-600"
                                        placeholder="How will you support diverse learners? Include scaffolding and extensions..."
                                    />
                                    <SectionEditor
                                        sectionId="resources"
                                        title="Resources"
                                        icon={Folder}
                                        color="text-pink-600"
                                        placeholder="List materials, tools, and resources needed..."
                                    />
                                    <SectionEditor
                                        sectionId="notes"
                                        title="Notes"
                                        icon={StickyNote}
                                        color="text-slate-600"
                                        placeholder="Additional notes, reminders, or reflections..."
                                    />
                                </div>
                            </div>

                            {/* Right Collaboration Panel */}
                            {showCommentPanel && (
                                <div className="w-80 border-l border-slate-200 bg-slate-50/50 overflow-y-auto">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                                <MessageCircle size={18} />
                                                Comments
                                            </h3>
                                            <button
                                                onClick={() => setShowCommentPanel(false)}
                                                className="p-1 hover:bg-slate-200 rounded-lg transition-colors text-slate-400"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        <div className="space-y-3">
                                            {comments.map((comment) => (
                                                <div
                                                    key={comment.id}
                                                    className={`p-3 rounded-xl border transition-all ${comment.resolved
                                                            ? 'bg-slate-50 border-slate-200 opacity-60'
                                                            : 'bg-white border-amber-200 shadow-sm'
                                                        }`}
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                                                                {comment.author.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-slate-700 text-xs">{comment.author}</p>
                                                                <p className="text-[10px] text-slate-400">{comment.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-slate-600 mb-2">{comment.content}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-lg text-[10px] font-bold">
                                                            {comment.section}
                                                        </span>
                                                        {!comment.resolved && (
                                                            <button className="text-emerald-600 font-bold hover:text-emerald-700 text-[10px] uppercase tracking-wider">
                                                                Resolve
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Activity Log */}
                                        <div className="mt-6 pt-6 border-t border-slate-200">
                                            <h4 className="font-bold text-slate-700 text-sm mb-3 flex items-center gap-2">
                                                <Clock size={16} />
                                                Activity Log
                                            </h4>
                                            <div className="space-y-2 text-xs text-slate-500">
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                                    <div>
                                                        <p><span className="font-medium text-slate-700">Sarah J.</span> edited objectives</p>
                                                        <p className="text-[10px] text-slate-400">1h ago</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                                                    <div>
                                                        <p><span className="font-medium text-slate-700">Mike C.</span> added comment</p>
                                                        <p className="text-[10px] text-slate-400">2h ago</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                                                    <div>
                                                        <p><span className="font-medium text-slate-700">Sarah J.</span> created document</p>
                                                        <p className="text-[10px] text-slate-400">1d ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Version History Modal */}
                    {showVersionHistory && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                                        <History size={24} />
                                        Version History
                                    </h2>
                                    <button
                                        onClick={() => setShowVersionHistory(false)}
                                        className="p-2 text-slate-400 hover:text-slate-600 transition-all hover:bg-slate-100 rounded-xl"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {versionHistory.map((v) => (
                                        <div
                                            key={v.version}
                                            className={`p-4 rounded-xl transition-all ${v.current ? 'bg-indigo-50 border-2 border-indigo-200' : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 cursor-pointer'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                                                        v{v.version}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-700">{v.changes}</p>
                                                        <p className="text-xs text-slate-500">{v.author} • {v.time}</p>
                                                    </div>
                                                </div>
                                                {v.current ? (
                                                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold">
                                                        Current
                                                    </span>
                                                ) : (
                                                    <button className="px-3 py-1.5 bg-white border border-slate-200 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-all flex items-center gap-1.5">
                                                        <RotateCcw size={12} /> Restore
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Create Plan Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-black text-slate-800">Create Planning Document</h2>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 transition-all hover:bg-slate-100 rounded-xl hover:rotate-90"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                    Plan Title *
                                </label>
                                <input
                                    type="text"
                                    value={newPlan.title}
                                    onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                                    placeholder="e.g., Grade 8 Ecosystems Unit"
                                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 focus:bg-white transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                    Plan Type
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Lesson Plan', 'Unit Plan', 'Activity Plan'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setNewPlan({ ...newPlan, type })}
                                            className={`p-3 rounded-xl text-xs font-bold transition-all ${newPlan.type === type
                                                    ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-lg'
                                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        value={newPlan.subject}
                                        onChange={(e) => setNewPlan({ ...newPlan, subject: e.target.value })}
                                        placeholder="e.g., Science"
                                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                        Grade Level
                                    </label>
                                    <input
                                        type="text"
                                        value={newPlan.grade}
                                        onChange={(e) => setNewPlan({ ...newPlan, grade: e.target.value })}
                                        placeholder="e.g., Grade 7"
                                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">
                                    Add Collaborators ({newPlan.collaborators.length} selected)
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {availableTeachers.map(teacher => (
                                        <div
                                            key={teacher.id}
                                            onClick={() => toggleCollaborator(teacher.id)}
                                            className={`p-3 rounded-xl border-2 cursor-pointer transition-all hover:scale-105 active:scale-95 ${newPlan.collaborators.includes(teacher.name)
                                                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                                    : 'border-slate-200 hover:border-slate-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${teacher.color} text-white flex items-center justify-center text-xs font-bold`}>
                                                    {teacher.avatar}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-slate-800 text-xs truncate">{teacher.name}</p>
                                                    <p className="text-[10px] text-slate-500">{teacher.subject}</p>
                                                </div>
                                                {newPlan.collaborators.includes(teacher.name) && (
                                                    <Check size={16} className="text-indigo-600" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreatePlan}
                                    disabled={!newPlan.title.trim()}
                                    className="flex-1 py-3 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Create Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoPlanningWorkspace;
