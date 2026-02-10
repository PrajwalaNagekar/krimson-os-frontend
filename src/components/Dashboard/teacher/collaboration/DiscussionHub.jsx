import React, { useState, useEffect, useRef } from 'react';
import { Plus, Search, Send, Paperclip, X, Users, Hash, Image, FileText, Smile, Check, CheckCheck } from 'lucide-react';

const DiscussionHub = () => {
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const messagesEndRef = useRef(null);
    const [newSpace, setNewSpace] = useState({
        title: '',
        topic: 'General',
        description: '',
        participants: []
    });

    const [discussionSpaces, setDiscussionSpaces] = useState([
        {
            id: 1,
            title: 'Grade 6 Math Collaboration',
            topic: 'Mathematics',
            participants: ['Sarah J.', 'Mike C.', 'Emily R.', 'David L.'],
            lastMessage: 'Has anyone tried using manipulatives for fractions?',
            lastActivity: '2h ago',
            unread: 3,
            avatar: 'M',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            id: 2,
            title: 'Science Lab Best Practices',
            topic: 'Science',
            participants: ['Lisa M.', 'John D.', 'Sarah J.'],
            lastMessage: 'The new microscopes arrived today!',
            lastActivity: '5h ago',
            unread: 0,
            avatar: 'S',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            id: 3,
            title: 'Assessment Strategy Discussions',
            topic: 'General',
            participants: ['Emily R.', 'Mike C.', 'Lisa M.', 'David L.', 'Sarah J.'],
            lastMessage: 'I\'ve uploaded the rubric template',
            lastActivity: '1d ago',
            unread: 5,
            avatar: 'A',
            color: 'from-purple-500 to-pink-600'
        },
    ]);

    const [messages, setMessages] = useState({
        1: [
            { id: 1, author: 'Sarah Johnson', content: 'Has anyone tried using manipulatives for teaching fractions? I\'m looking for creative ideas.', time: '2h ago', avatar: 'SJ', read: true },
            { id: 2, author: 'Michael Chen', content: 'Yes! I use fraction bars and circles. The students love the hands-on approach.', time: '1h 45m ago', avatar: 'MC', read: true },
            { id: 3, author: 'Emily Roberts', content: 'I\'ve been using digital manipulatives on tablets. Works great for remote learning too!', time: '1h 30m ago', avatar: 'ER', read: true },
            { id: 4, author: 'You', content: 'Great ideas! Can someone share their lesson plan?', time: '1h ago', avatar: 'YO', isOwn: true, read: true },
            { id: 5, author: 'Michael Chen', content: 'Sure, I\'ll upload it now.', time: '45m ago', avatar: 'MC', attachment: { name: 'fractions_lesson_plan.pdf', type: 'pdf' }, read: true },
        ],
        2: [
            { id: 1, author: 'Lisa Martin', content: 'The new microscopes arrived today!', time: '5h ago', avatar: 'LM', read: true },
            { id: 2, author: 'John Davis', content: 'Excellent! When can we start using them?', time: '4h ago', avatar: 'JD', read: true },
        ],
        3: [
            { id: 1, author: 'Emily Roberts', content: 'I\'ve uploaded the rubric template', time: '1d ago', avatar: 'ER', attachment: { name: 'assessment_rubric.docx', type: 'doc' }, read: true },
        ]
    });

    const availableTeachers = [
        { id: 1, name: 'Sarah Johnson', subject: 'Mathematics', avatar: 'SJ', color: 'from-blue-500 to-indigo-600' },
        { id: 2, name: 'Michael Chen', subject: 'Science', avatar: 'MC', color: 'from-emerald-500 to-teal-600' },
        { id: 3, name: 'Emily Roberts', subject: 'English', avatar: 'ER', color: 'from-purple-500 to-pink-600' },
        { id: 4, name: 'David Lee', subject: 'History', avatar: 'DL', color: 'from-amber-500 to-orange-600' },
        { id: 5, name: 'Lisa Martin', subject: 'Biology', avatar: 'LM', color: 'from-rose-500 to-pink-600' },
        { id: 6, name: 'John Davis', subject: 'Physics', avatar: 'JD', color: 'from-cyan-500 to-blue-600' },
    ];

    const topics = ['General', 'Mathematics', 'Science', 'English', 'History', 'Technology', 'Assessment', 'Classroom Management'];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, selectedSpace]);

    const handleCreateSpace = () => {
        if (!newSpace.title.trim()) return;

        const colors = ['from-blue-500 to-indigo-600', 'from-emerald-500 to-teal-600', 'from-purple-500 to-pink-600', 'from-amber-500 to-orange-600'];
        const space = {
            id: Date.now(),
            title: newSpace.title,
            topic: newSpace.topic,
            participants: newSpace.participants,
            lastMessage: 'Space created',
            lastActivity: 'Just now',
            unread: 0,
            avatar: newSpace.title[0].toUpperCase(),
            color: colors[Math.floor(Math.random() * colors.length)]
        };

        setDiscussionSpaces([space, ...discussionSpaces]);
        setMessages({ ...messages, [space.id]: [] });
        setShowCreateModal(false);
        setNewSpace({ title: '', topic: 'General', description: '', participants: [] });
        setSelectedSpace(space);
    };

    const handleSendMessage = () => {
        if (!messageInput.trim() || !selectedSpace) return;

        const newMessage = {
            id: Date.now(),
            author: 'You',
            content: messageInput,
            time: 'Just now',
            avatar: 'YO',
            isOwn: true,
            read: false
        };

        setMessages({
            ...messages,
            [selectedSpace.id]: [...(messages[selectedSpace.id] || []), newMessage]
        });

        setDiscussionSpaces(discussionSpaces.map(space =>
            space.id === selectedSpace.id
                ? { ...space, lastMessage: messageInput, lastActivity: 'Just now' }
                : space
        ));

        setMessageInput('');

        // Simulate read receipt after 1 second
        setTimeout(() => {
            setMessages(prev => ({
                ...prev,
                [selectedSpace.id]: prev[selectedSpace.id].map(msg =>
                    msg.id === newMessage.id ? { ...msg, read: true } : msg
                )
            }));
        }, 1000);
    };

    const toggleParticipant = (teacherId) => {
        const teacher = availableTeachers.find(t => t.id === teacherId);
        if (!teacher) return;

        if (newSpace.participants.includes(teacher.name)) {
            setNewSpace({
                ...newSpace,
                participants: newSpace.participants.filter(p => p !== teacher.name)
            });
        } else {
            setNewSpace({
                ...newSpace,
                participants: [...newSpace.participants, teacher.name]
            });
        }
    };

    const filteredSpaces = discussionSpaces.filter(space =>
        space.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        space.topic.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex h-[calc(100vh-280px)] bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            {/* LEFT SIDEBAR - Discussion Spaces */}
            <div className="w-full md:w-96 border-r border-slate-200 flex flex-col bg-gradient-to-b from-slate-50 to-white">
                {/* Search Header */}
                <div className="p-4 bg-white border-b border-slate-200 backdrop-blur-xl bg-white/80 sticky top-0 z-10">
                    <div className="flex gap-2 mb-3">
                        <div className="relative flex-1 group">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:bg-white border border-slate-200 transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="p-2.5 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105 active:scale-95"
                            title="New Discussion Space"
                        >
                            <Plus size={20} />
                        </button>
                    </div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">Discussion Spaces</h2>
                </div>

                {/* Spaces List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {filteredSpaces.map((space, index) => (
                        <div
                            key={space.id}
                            onClick={() => setSelectedSpace(space)}
                            style={{ animationDelay: `${index * 50}ms` }}
                            className={`p-4 border-b border-slate-200 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-sm animate-in fade-in slide-in-from-left-4 ${selectedSpace?.id === space.id ? 'bg-white border-l-4 border-l-indigo-600 shadow-sm' : ''
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${space.color} text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md hover:shadow-lg transition-shadow`}>
                                    {space.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">{space.title}</h3>
                                        <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{space.lastActivity}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 truncate mb-1">{space.lastMessage}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded-lg">{space.topic}</span>
                                        {space.unread > 0 && (
                                            <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-bold animate-pulse shadow-lg shadow-indigo-200">
                                                {space.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE - Chat Area */}
            {selectedSpace ? (
                <div className="flex-1 flex flex-col bg-gradient-to-b from-slate-50/50 to-white">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-10 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedSpace.color} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                                    {selectedSpace.avatar}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-800">{selectedSpace.title}</h2>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                        <Users size={14} />
                                        <span>{selectedSpace.participants.length} participants</span>
                                        <span>•</span>
                                        <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 font-medium">{selectedSpace.topic}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                        {(messages[selectedSpace.id] || []).map((message, index) => (
                            <div
                                key={message.id}
                                style={{ animationDelay: `${index * 50}ms` }}
                                className={`flex gap-3 animate-in fade-in slide-in-from-bottom-2 ${message.isOwn ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md transition-transform hover:scale-110 ${message.isOwn ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white' : 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600'
                                    }`}>
                                    {message.avatar}
                                </div>
                                <div className={`flex-1 max-w-lg ${message.isOwn ? 'items-end' : ''}`}>
                                    {!message.isOwn && (
                                        <p className="text-xs font-bold text-slate-600 mb-1">{message.author}</p>
                                    )}
                                    <div className={`p-4 rounded-2xl transition-all hover:shadow-md ${message.isOwn
                                        ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-br-sm shadow-lg shadow-indigo-200'
                                        : 'bg-white border border-slate-200 rounded-bl-sm shadow-sm'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{message.content}</p>
                                        {message.attachment && (
                                            <div className={`mt-3 p-3 rounded-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer ${message.isOwn ? 'bg-indigo-500/50 backdrop-blur-sm' : 'bg-slate-50 hover:bg-slate-100'
                                                }`}>
                                                <FileText size={20} />
                                                <span className="text-sm font-medium">{message.attachment.name}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`flex items-center gap-1 mt-1 ${message.isOwn ? 'justify-end' : ''}`}>
                                        <p className="text-xs text-slate-400">{message.time}</p>
                                        {message.isOwn && (
                                            <span className="text-indigo-600">
                                                {message.read ? <CheckCheck size={14} /> : <Check size={14} />}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-slate-200 bg-white/80 backdrop-blur-xl">
                        <div className="flex items-end gap-3">
                            <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-all rounded-xl hover:bg-indigo-50 active:scale-95">
                                <Paperclip size={20} />
                            </button>
                            <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-all rounded-xl hover:bg-indigo-50 active:scale-95">
                                <Image size={20} />
                            </button>
                            <div className="flex-1 relative">
                                <textarea
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                    placeholder="Type a message..."
                                    className="w-full p-3 pr-12 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 focus:bg-white transition-all"
                                    rows={1}
                                    style={{ minHeight: '44px', maxHeight: '120px' }}
                                />
                                <button className="absolute right-2 bottom-2 p-1.5 text-slate-400 hover:text-indigo-600 transition-all hover:scale-110 active:scale-95">
                                    <Smile size={18} />
                                </button>
                            </div>
                            <button
                                onClick={handleSendMessage}
                                disabled={!messageInput.trim()}
                                className="p-3 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:scale-105 active:scale-95 disabled:hover:scale-100"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50/20">
                    <div className="text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center animate-pulse">
                            <Users size={40} className="text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Select a Discussion Space</h3>
                        <p className="text-slate-500">Choose a space from the left to start collaborating</p>
                    </div>
                </div>
            )}

            {/* Create Space Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in slide-in-from-bottom-4 duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-black text-slate-800">Create Discussion Space</h2>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="p-2 text-slate-400 hover:text-slate-600 transition-all hover:bg-slate-100 rounded-xl hover:rotate-90"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Space Title */}
                            <div className="animate-in slide-in-from-left-4" style={{ animationDelay: '100ms' }}>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                    Space Title *
                                </label>
                                <input
                                    type="text"
                                    value={newSpace.title}
                                    onChange={(e) => setNewSpace({ ...newSpace, title: e.target.value })}
                                    placeholder="e.g., Grade 8 Science Collaboration"
                                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Topic */}
                            <div className="animate-in slide-in-from-left-4" style={{ animationDelay: '200ms' }}>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                    Topic Category
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {topics.map((topic, index) => (
                                        <button
                                            key={topic}
                                            onClick={() => setNewSpace({ ...newSpace, topic })}
                                            style={{ animationDelay: `${300 + index * 50}ms` }}
                                            className={`p-3 rounded-xl text-xs font-bold transition-all animate-in fade-in zoom-in hover:scale-105 active:scale-95 ${newSpace.topic === topic
                                                ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200'
                                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                                }`}
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="animate-in slide-in-from-left-4" style={{ animationDelay: '700ms' }}>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={newSpace.description}
                                    onChange={(e) => setNewSpace({ ...newSpace, description: e.target.value })}
                                    placeholder="What is this space about?"
                                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 focus:bg-white transition-all"
                                    rows={3}
                                />
                            </div>

                            {/* Participants */}
                            <div className="animate-in slide-in-from-left-4" style={{ animationDelay: '800ms' }}>
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">
                                    Add Participants ({newSpace.participants.length} selected)
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto p-1 custom-scrollbar">
                                    {availableTeachers.map((teacher, index) => (
                                        <div
                                            key={teacher.id}
                                            onClick={() => toggleParticipant(teacher.id)}
                                            style={{ animationDelay: `${900 + index * 50}ms` }}
                                            className={`p-3 rounded-xl border-2 cursor-pointer transition-all animate-in fade-in slide-in-from-bottom-2 hover:scale-105 active:scale-95 ${newSpace.participants.includes(teacher.name)
                                                ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                                : 'border-slate-200 hover:border-slate-300 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${teacher.color} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                                                    {teacher.avatar}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-slate-800 text-sm">{teacher.name}</p>
                                                    <p className="text-xs text-slate-500">{teacher.subject}</p>
                                                </div>
                                                {newSpace.participants.includes(teacher.name) && (
                                                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center animate-in zoom-in">
                                                        <span className="text-xs">✓</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4 animate-in slide-in-from-bottom-4" style={{ animationDelay: '1200ms' }}>
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateSpace}
                                    disabled={!newSpace.title.trim()}
                                    className="flex-1 py-3 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:scale-105 active:scale-95 disabled:hover:scale-100"
                                >
                                    Create Space
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiscussionHub;
