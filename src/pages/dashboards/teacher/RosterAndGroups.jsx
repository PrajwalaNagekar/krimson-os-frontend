import React, { useState } from 'react';
import {
    Users, UserPlus, Trash2, Edit3, Sparkles,
    Check, X, ChevronRight, UserCheck, Search,
    Plus, LayoutGrid, List, AlertCircle,
    ArrowRight, Download, Filter, MoreVertical,
    ChevronDown, GraduationCap, Clock, Target,
    FileText, Shield, Send, Mail, Phone,
    Calendar, Award, TrendingUp, MoreHorizontal,
    MessageCircle, Hash, User, Activity,
    Image as ImageIcon, Paperclip, Smile,
    CheckCheck, CornerDownRight, Zap, BarChart2
} from 'lucide-react';

const RosterAndGroups = () => {
    // --- State Management ---
    const [students, setStudents] = useState([
        { id: 1, name: 'Aditya Sharma', mastery: 85, pace: 'Fast', competency: 'Advanced', email: 'aditya.s@krimson.edu', phone: '+91 98765 43210', roll: 'T-001', attendance: '98%', status: 'Online' },
        { id: 2, name: 'Ishani Patel', mastery: 72, pace: 'Moderate', competency: 'Proficient', email: 'ishani.p@krimson.edu', phone: '+91 98765 43211', roll: 'T-002', attendance: '92%', status: 'Away' },
        { id: 3, name: 'Rohan Gupta', mastery: 45, pace: 'Slow', competency: 'Remedial', email: 'rohan.g@krimson.edu', phone: '+91 98765 43212', roll: 'T-003', attendance: '85%', status: 'Offline' },
        { id: 4, name: 'Sanya Malhotra', mastery: 92, pace: 'Fast', competency: 'Advanced', email: 'sanya.m@krimson.edu', phone: '+91 98765 43213', roll: 'T-004', attendance: '99%', status: 'Online' },
        { id: 5, name: 'Vikram Singh', mastery: 38, pace: 'Slow', competency: 'Remedial', email: 'vikram.s@krimson.edu', phone: '+91 98765 43214', roll: 'T-005', attendance: '78%', status: 'Offline' },
        { id: 6, name: 'Zara Khan', mastery: 78, pace: 'Moderate', competency: 'Proficient', email: 'zara.k@krimson.edu', phone: '+91 98765 43215', roll: 'T-006', attendance: '91%', status: 'Online' },
        { id: 7, name: 'Ananya Rao', mastery: 65, pace: 'Moderate', competency: 'Proficient', email: 'ananya.r@krimson.edu', phone: '+91 98765 43216', roll: 'T-007', attendance: '88%', status: 'Away' },
        { id: 8, name: 'Kunal Verma', mastery: 88, pace: 'Fast', competency: 'Advanced', email: 'kunal.v@krimson.edu', phone: '+91 98765 43217', roll: 'T-008', attendance: '95%', status: 'Online' },
        { id: 9, name: 'Meera Deshmukh', mastery: 42, pace: 'Slow', competency: 'Remedial', email: 'meera.d@krimson.edu', phone: '+91 98765 43218', roll: 'T-009', attendance: '82%', status: 'Online' },
        { id: 10, name: 'Rahul Nair', mastery: 70, pace: 'Moderate', competency: 'Proficient', email: 'rahul.n@krimson.edu', phone: '+91 98765 43219', roll: 'T-010', attendance: '90%', status: 'Offline' },
    ]);

    const [groups, setGroups] = useState([
        { id: 101, name: 'Geometry Advanced', members: [], type: 'Enrichment' },
        { id: 102, name: 'Remedial Algebra', members: [], type: 'Support' }
    ]);

    const [activeTab, setActiveTab] = useState('roster'); // 'roster', 'groups', 'messages'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showAIModal, setShowAIModal] = useState(false);
    const [showAddStudentModal, setShowAddStudentModal] = useState(false);
    const [newStudent, setNewStudent] = useState({ name: '', email: '', roll: '', competency: 'Proficient', pace: 'Moderate' });

    // Chat Specific State
    const [activeChat, setActiveChat] = useState(null);
    const [chatMessage, setChatMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, senderId: 1, text: "Teacher, I'm stuck on problem 4.", timestamp: '10:15 AM', isMe: false, sender: 'Student' },
        { id: 2, senderId: 'me', text: "No worries! Focus on identifying the alternate interior angles first.", timestamp: '10:17 AM', isMe: true, sender: 'You' },
        { id: 3, senderId: 1, text: "Ah! I see it now. Thank you!", timestamp: '10:18 AM', isMe: false, sender: 'Student' },
    ]);

    const [selectorGroupId, setSelectorGroupId] = useState(null);
    const [studentToGroup, setStudentToGroup] = useState(null);

    // --- Actions ---
    const createNewGroup = () => {
        const newGroup = {
            id: Date.now(),
            name: `New Strategic Group ${groups.length + 1}`,
            members: [],
            type: 'General'
        };
        setGroups([newGroup, ...groups]);
        setActiveTab('groups');
    };

    const deleteGroup = (id) => setGroups(groups.filter(g => g.id !== id));

    const toggleStudentInGroup = (groupId, studentId) => {
        setGroups(prev => prev.map(group => {
            if (group.id === groupId) {
                const isMember = group.members.some(m => m.id === studentId);
                if (isMember) return { ...group, members: group.members.filter(m => m.id !== studentId) };
                const student = students.find(s => s.id === studentId);
                return { ...group, members: [...group.members, student] };
            }
            return group;
        }));
    };

    const handleAddStudent = (e) => {
        e.preventDefault();
        const id = students.length + 1;
        setStudents([...students, { ...newStudent, id, mastery: 0, attendance: '100%', phone: 'Not Assigned', status: 'Online' }]);
        setNewStudent({ name: '', email: '', roll: '', competency: 'Proficient', pace: 'Moderate' });
        setShowAddStudentModal(false);
    };

    const initiateChat = (target) => {
        setActiveChat(target);
        setActiveTab('messages');
        setSelectedStudent(null);
    };

    const sendMessage = () => {
        if (!chatMessage.trim()) return;
        const newMsg = {
            id: Date.now(),
            senderId: 'me',
            text: chatMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true,
            sender: 'You'
        };
        setMessages([...messages, newMsg]);
        setChatMessage('');
    };

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const conversations = groups.filter(g => g.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // --- Stats calculation ---
    const totalMastery = students.reduce((acc, curr) => acc + curr.mastery, 0);
    const avgMastery = Math.round(totalMastery / students.length);

    return (
        <div className="space-y-6 md:space-y-8 min-h-screen bg-[#F8FAFC] pb-12 font-sans">

            {/* Glossy Gradient Header */}
            <div className="bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#EC4899] rounded-[2.5rem] p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)] relative overflow-hidden transition-all duration-500">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-white/70 text-[11px] font-black uppercase tracking-[0.2em] mb-5">
                        <span className="hover:text-white cursor-pointer transition-colors">Dashboard</span>
                        <ChevronRight size={12} className="opacity-50" />
                        <span className="hover:text-white cursor-pointer transition-colors">Teacher</span>
                        <ChevronRight size={12} className="opacity-50" />
                        <span className="text-white">Roster & Groups</span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-black mb-4 backdrop-blur-md border border-white/20 shadow-sm uppercase tracking-[0.15em]">
                                Strategic Classroom Management
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight drop-shadow-sm">
                                Classroom Hub
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/20">
                                    {students.length} ENROLLED
                                </div>
                                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/20 uppercase">
                                    {groups.length} STRATEGIC GROUPS
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowAddStudentModal(true)}
                                className="px-7 py-3.5 bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-2xl font-black shadow-2xl hover:bg-white/20 transition-all active:scale-95 text-xs uppercase tracking-wider"
                            >
                                <div className="flex items-center gap-2">
                                    <UserPlus size={20} />
                                    <span>Onboard</span>
                                </div>
                            </button>
                            <button
                                onClick={createNewGroup}
                                className="px-8 py-3.5 bg-white text-blue-600 rounded-2xl font-black shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:translate-y-[-2px] transition-all active:scale-95 text-xs uppercase tracking-wider"
                            >
                                <div className="flex items-center gap-2">
                                    <Plus size={22} className="stroke-[3px]" />
                                    <span>Create Group</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-1">
                {[
                    { label: 'Mastery', value: `${avgMastery}%`, sub: '+2% Trend', icon: Target, color: 'blue' },
                    { label: 'Attendance', value: '94.2%', sub: 'Stable', icon: Clock, color: 'purple' },
                    { label: 'Messages', value: '12', sub: '3 Pending', icon: MessageCircle, color: 'pink' },
                    { label: 'Clusters', value: groups.length, sub: 'Optimized', icon: Users, color: 'cyan' }
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#F1F5F9] hover:border-blue-100 transition-all hover:translate-y-[-5px] group">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            <div className={`p-2 bg-${stat.color}-50 text-${stat.color}-500 rounded-xl group-hover:scale-110 transition-transform`}>
                                <stat.icon size={18} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
                        <p className={`text-[9px] font-black mt-1 uppercase ${stat.sub.includes('+') ? 'text-green-500' : 'text-slate-400'}`}>{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* High-End Sub-Navigation */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-2.5 flex gap-2 sticky top-6 z-40 mx-1">
                {['roster', 'groups', 'messages'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4.5 rounded-[1.8rem] text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === tab
                            ? 'bg-slate-900 text-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] scale-[1.02]'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                    >
                        {tab === 'roster' ? <List size={18} /> : tab === 'groups' ? <LayoutGrid size={18} /> : <MessageCircle size={18} />}
                        {tab === 'roster' ? 'Student Roster' : tab === 'groups' ? 'Strategic Groups' : 'Communication Hub'}
                    </button>
                ))}
            </div>

            {/* Content Transition Wrapper */}
            <div className="animate-fadeIn mt-8">

                {activeTab === 'roster' && (
                    <div className="space-y-6">
                        {/* Modern Filter Bar */}
                        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-5 items-center">
                            <div className="flex-1 relative w-full group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by student name, roll number, or competency cluster..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-6 py-4.5 bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 focus:bg-white rounded-[1.8rem] text-sm font-bold transition-all focus:outline-none"
                                />
                            </div>
                            <button className="px-8 py-4.5 bg-slate-900 text-white rounded-[1.8rem] text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-100">
                                <Filter size={18} />
                                Analytics
                            </button>
                        </div>

                        {/* Premium Student Table */}
                        <div className="bg-white rounded-[3rem] border border-[#F1F5F9] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.032)]">
                            <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-black text-slate-800 text-lg tracking-tight">
                                        Student Intelligence Roster
                                    </h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                                        Showing {filteredStudents.length} active profiles
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                                        <Download size={14} />
                                        Export Roster
                                    </button>
                                </div>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
                                        <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Profile</th>
                                        <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Cluster</th>
                                        <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Performance</th>
                                        <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Engagement</th>
                                        <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F5F9]">
                                    {filteredStudents.map(student => (
                                        <tr
                                            key={student.id}
                                            onClick={() => setSelectedStudent(student)}
                                            className="group/row hover:bg-blue-50/20 cursor-pointer transition-all duration-300"
                                        >
                                            <td className="px-10 py-5">
                                                <div className="flex items-center gap-5">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm transition-transform group-hover/row:scale-110 ${student.competency === 'Advanced' ? 'bg-purple-100 text-purple-600' :
                                                        student.competency === 'Remedial' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                                                        }`}>
                                                        {student.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <p className="text-[15px] font-black text-slate-900 tracking-tight">{student.name}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{student.roll}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-5 text-center">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${student.competency === 'Advanced' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                                                    student.competency === 'Remedial' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                                                    }`}>
                                                    {student.competency}
                                                </span>
                                            </td>
                                            <td className="px-10 py-5">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden p-[1px]">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-1000 ${student.mastery >= 80 ? 'bg-green-500' : student.mastery >= 60 ? 'bg-blue-500' : 'bg-orange-500'}`}
                                                            style={{ width: `${student.mastery}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-[11px] font-black text-slate-700 tracking-tight">{student.mastery}% Mastery</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-5 text-center">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full shadow-sm ${student.status === 'Online' ? 'bg-green-500' : student.status === 'Away' ? 'bg-yellow-500' : 'bg-slate-300'}`} />
                                                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">{student.status}</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-5 text-right">
                                                <div className="flex items-center justify-end gap-3 opacity-0 group-hover/row:opacity-100 transition-all translate-x-4 group-hover/row:translate-x-0">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setStudentToGroup(student); }}
                                                        className="p-2.5 text-green-600 hover:bg-green-100 rounded-2xl transition-all"
                                                        title="Assign to Group"
                                                    >
                                                        <UserPlus size={20} />
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); initiateChat(student); }}
                                                        className="p-2.5 text-blue-500 hover:bg-blue-100 rounded-2xl transition-all"
                                                        title="Message"
                                                    >
                                                        <MessageCircle size={20} />
                                                    </button>
                                                    <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-2xl transition-all">
                                                        <MoreHorizontal size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'groups' && (
                    <div className="animate-fadeIn">
                        {/* Hub-Style Section Header */}
                        <div className="bg-white border border-[#F1F5F9] rounded-[2.5rem] p-6 md:p-8 mb-8 shadow-sm overflow-hidden relative">
                            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">Strategic Clusters</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Topology Optimization Active</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Performance</p>
                                        <p className="text-sm font-black text-blue-600">Highly Optimized</p>
                                    </div>
                                    <div className="w-[1px] h-10 bg-slate-100 hidden sm:block"></div>
                                    <button
                                        onClick={createNewGroup}
                                        className="px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg"
                                    >
                                        New Deployment
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                            {groups.map(group => (
                                <div key={group.id} className="bg-white rounded-[3rem] border border-[#F1F5F9] p-8 flex flex-col transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:translate-y-[-8px] group/card relative overflow-hidden h-full min-h-[420px]">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-[5rem] group-hover/card:bg-slate-900 transition-all duration-500 -mr-8 -mt-8 flex items-center justify-center pl-6 pt-6">
                                        <Users size={28} className="text-slate-300 group-hover/card:text-white transition-colors" />
                                    </div>

                                    <div className="mb-8 relative z-10">
                                        <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover/card:text-blue-600 transition-colors">{group.name}</h4>
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">{group.type}</span>
                                            <span className="text-[11px] text-slate-400 font-bold tracking-tight">• {group.members.length} Members Linked</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4 mb-8">
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-3">Linked Talent</p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {group.members.slice(0, 5).map(m => (
                                                <div key={m.id} className="p-2.5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl flex items-center gap-2.5 hover:bg-white hover:border-blue-100 transition-all cursor-default">
                                                    <div className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500">{m.name[0]}</div>
                                                    <span className="text-xs font-bold text-slate-700">{m.name.split(' ')[0]}</span>
                                                </div>
                                            ))}
                                            {group.members.length > 5 && (
                                                <div className="p-2.5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-[10px] font-black text-slate-400 px-4">
                                                    +{group.members.length - 5} OTHERS
                                                </div>
                                            )}
                                            {group.members.length === 0 && (
                                                <button
                                                    onClick={() => setSelectorGroupId(group.id)}
                                                    className="w-full h-24 rounded-[2rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/30 transition-all group/add"
                                                >
                                                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center mb-2 group-hover/add:border-blue-300 group-hover/add:bg-white transition-all">
                                                        <Plus size={20} className="stroke-[3px]" />
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Deploy Students</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-[#F8FAFC]">
                                        <button
                                            onClick={() => initiateChat(group)}
                                            className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-slate-800 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2.5"
                                        >
                                            <MessageCircle size={18} className="fill-white/10" />
                                            Channel
                                        </button>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectorGroupId(group.id)}
                                                className="w-12 h-12 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all shadow-sm"
                                            >
                                                <Edit3 size={18} />
                                            </button>
                                            <button
                                                onClick={() => deleteGroup(group.id)}
                                                className="w-12 h-12 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50/50 transition-all shadow-sm"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={createNewGroup}
                                className="bg-white rounded-[3rem] border-4 border-dashed border-[#F1F5F9] flex flex-col items-center justify-center p-12 text-slate-300 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50/10 transition-all min-h-[420px] group/new"
                            >
                                <div className="w-20 h-20 bg-[#F8FAFC] rounded-[2.5rem] flex items-center justify-center mb-6 group-hover/new:bg-blue-600 group-hover/new:text-white group-hover/new:rotate-90 transition-all duration-500 shadow-sm group-hover/new:shadow-xl group-hover/new:shadow-blue-200">
                                    <Plus size={40} className="stroke-[3px]" />
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-widest text-slate-400 group-hover/new:text-blue-600 transition-colors">Strategic Cluster</h4>
                                <p className="text-[11px] text-slate-400 mt-3 font-bold tracking-tight opacity-60">High-impact pedagogical targeting</p>
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="bg-white rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-[#F1F5F9] overflow-hidden flex h-[750px] animate-scaleIn mx-1 relative">

                        {/* Glassmorphism Sidebar */}
                        <div className="w-[340px] border-r border-[#F1F5F9] flex flex-col bg-[#F8FAFC]/50 backdrop-blur-md">
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Channels</h3>
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                                        <Plus size={16} className="stroke-[3px]" />
                                    </div>
                                </div>
                                <div className="relative mb-8">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Find a group channel..."
                                        className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-400 rounded-[1.5rem] text-sm font-bold focus:outline-none transition-all shadow-sm placeholder:text-slate-300"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex-1 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] transition-all shadow-lg shadow-slate-200">Global</button>
                                    <button className="flex-1 py-3.5 bg-white text-slate-400 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] hover:bg-slate-50 transition-all">Priority</button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-2 custom-scrollbar">
                                <p className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Active Strategic Units</p>
                                {conversations.map(chat => (
                                    <button
                                        key={`group-${chat.id}`}
                                        onClick={() => setActiveChat(chat)}
                                        className={`w-full p-5 rounded-[2rem] flex items-center gap-4 transition-all duration-300 border-2 ${activeChat?.id === chat.id
                                            ? 'bg-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] border-blue-500/10 scale-[1.02]'
                                            : 'hover:bg-white/80 border-transparent hover:shadow-md'
                                            }`}
                                    >
                                        <div className="relative">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs shadow-md transition-transform ${activeChat?.id === chat.id ? 'bg-blue-600 text-white rotate-6' : 'bg-slate-800 text-white'}`}>
                                                <Users size={20} />
                                            </div>
                                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white shadow-sm">
                                                {chat.members?.length || 0}
                                            </span>
                                        </div>
                                        <div className="text-left flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <p className={`text-sm font-black tracking-tight truncate ${activeChat?.id === chat.id ? 'text-blue-600' : 'text-slate-800'}`}>{chat.name}</p>
                                                <span className={`text-[8px] font-black uppercase tracking-widest ${activeChat?.id === chat.id ? 'text-blue-400' : 'text-slate-400'}`}>LIVE</span>
                                            </div>
                                            <p className="text-[11px] text-slate-400 truncate leading-relaxed font-medium">Monitoring cluster performance...</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Premium Messaging Pane */}
                        <div className="flex-1 flex flex-col bg-white">
                            {activeChat ? (
                                <>
                                    <header className="h-24 px-10 border-b border-[#F1F5F9] flex items-center justify-between bg-white relative z-10">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white shadow-xl shadow-blue-100 text-lg">
                                                <Users size={24} className="stroke-[2.5px]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black text-slate-900 tracking-tight">{activeChat.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="flex -space-x-2">
                                                        {[1, 2, 3].map(i => (
                                                            <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200" />
                                                        ))}
                                                    </div>
                                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Active Intervention Channel</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="hidden md:flex flex-col items-end mr-4">
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Security Link</span>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                    <span className="text-[10px] font-black text-slate-900">ENCRYPTED</span>
                                                </div>
                                            </div>
                                            <button className="p-3.5 bg-[#F8FAFC] text-slate-400 hover:text-slate-900 hover:bg-[#F1F5F9] rounded-2xl transition-all border border-[#F1F5F9]">
                                                <MoreHorizontal size={22} />
                                            </button>
                                        </div>
                                    </header>

                                    <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[#FBFDFF] custom-scrollbar">
                                        <div className="flex justify-center mb-4">
                                            <div className="px-6 py-2 bg-white rounded-2xl text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border border-[#F1F5F9] shadow-sm">
                                                Session Started 10:15 AM
                                            </div>
                                        </div>
                                        {messages.map(msg => (
                                            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                                                <div className={`max-w-[75%] ${msg.isMe ? 'items-end' : 'items-start'} flex flex-col group`}>
                                                    {!msg.isMe && <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2">{msg.sender}</span>}
                                                    <div className={`p-5 rounded-[2.2rem] shadow-sm text-[13px] font-bold leading-[1.6] transition-all relative ${msg.isMe
                                                        ? 'bg-blue-500 text-white rounded-tr-none shadow-[0_10px_25px_rgba(59,130,246,0.15)] group-hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)]'
                                                        : 'bg-white border border-[#F1F5F9] text-slate-700 rounded-tl-none group-hover:shadow-lg group-hover:border-blue-100'
                                                        }`}>
                                                        {msg.text}
                                                    </div>
                                                    <div className={`flex items-center gap-2 mt-2.5 ${msg.isMe ? 'justify-end pr-1' : 'justify-start pl-4'}`}>
                                                        <span className="text-[9px] font-black text-slate-300 uppercase">{msg.timestamp}</span>
                                                        {msg.isMe && <CheckCheck size={12} className="text-blue-500" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Elevated Input Area */}
                                    <div className="p-8 bg-white border-t border-[#F1F5F9]">
                                        <div className="flex items-center gap-3 mb-5 overflow-x-auto pb-2 no-scrollbar">
                                            {[
                                                { text: 'Supportive Praise', color: 'blue' },
                                                { text: 'Remedial Action', color: 'purple' },
                                                { text: 'Strategic Check', color: 'pink' }
                                            ].map((btn, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setChatMessage(`Strategic Update: ${btn.text} required for this cluster.`)}
                                                    className={`px-4 py-2 bg-${btn.color}-50 text-${btn.color}-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-${btn.color}-100 hover:bg-${btn.color}-100 transition-all whitespace-nowrap active:scale-95`}
                                                >
                                                    {btn.text}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex items-end gap-4 p-2.5 bg-[#F8FAFC] border-2 border-transparent focus-within:border-blue-100 focus-within:bg-white rounded-[2.2rem] transition-all group/input shadow-inner">
                                            <div className="flex pb-1.5 pl-2">
                                                <button className="p-3 text-slate-400 hover:text-blue-600 transition-all hover:scale-110 active:scale-90"><Paperclip size={22} /></button>
                                            </div>
                                            <textarea
                                                rows="1"
                                                placeholder="Draft cluster intervention..."
                                                value={chatMessage}
                                                onChange={(e) => setChatMessage(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold min-h-[50px] py-4 no-scrollbar resize-none text-slate-800 placeholder:text-slate-300 transition-all"
                                            />
                                            <button
                                                onClick={sendMessage}
                                                className={`p-4 rounded-[1.5rem] transition-all duration-300 shadow-xl mb-1 mr-1 ${chatMessage.trim() ? 'bg-slate-900 text-white scale-100 hover:bg-black hover:translate-y-[-2px]' : 'bg-slate-200 text-slate-400 scale-90 cursor-not-allowed'}`}
                                            >
                                                <Send size={22} className="stroke-[2.5px]" />
                                            </button>
                                        </div>
                                        <p className="text-[9px] text-slate-300 text-center font-black uppercase mt-4 tracking-[0.2em]">Krimson Hub • Secure Pedagogical Gateway</p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center p-16 text-center bg-[#FBFDFF]">
                                    <div className="w-32 h-32 bg-white rounded-[4rem] shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex items-center justify-center mb-8 border border-[#F1F5F9] animate-pulse">
                                        <MessageCircle size={48} className="text-blue-500 opacity-20" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Select Strategic Channel</h3>
                                    <p className="text-sm text-slate-400 max-w-sm font-bold leading-relaxed uppercase tracking-wider opacity-60 px-6">Select a dynamic cluster to initiate high-impact pedagogical communication.</p>
                                    <div className="grid grid-cols-2 gap-5 mt-16 w-full max-w-md">
                                        <div className="p-6 bg-white rounded-[2.5rem] shadow-sm border border-[#F1F5F9] flex flex-col items-center group/stat hover:border-blue-200 transition-all">
                                            <div className="w-10 h-10 bg-orange-50 text-orange-400 rounded-2xl flex items-center justify-center mb-3 group-hover/stat:bg-orange-400 group-hover/stat:text-white transition-all">
                                                <Award size={20} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Growth Pins</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-[2.5rem] shadow-sm border border-[#F1F5F9] flex flex-col items-center group/stat hover:border-blue-200 transition-all">
                                            <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-2xl flex items-center justify-center mb-3 group-hover/stat:bg-blue-400 group-hover/stat:text-white transition-all">
                                                <Activity size={20} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Real-time Check</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Premium Overlays */}

            {/* Student To Group Selection */}
            {studentToGroup && (
                <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-all duration-500" onClick={() => setStudentToGroup(null)} />
                    <div className="bg-white w-full max-w-md rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative overflow-hidden animate-scaleIn border-[10px] border-white p-10">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Deploy to Cluster</h3>
                            <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">{studentToGroup.name}</p>
                        </div>

                        <div className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-3 mb-8">
                            {groups.map(group => (
                                <button
                                    key={group.id}
                                    onClick={() => { toggleStudentInGroup(group.id, studentToGroup.id); setStudentToGroup(null); }}
                                    className="w-full flex items-center justify-between p-5 bg-[#F8FAFC] hover:bg-blue-600 hover:text-white hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-200/50 rounded-[1.8rem] transition-all group/btn border border-[#F1F5F9]"
                                >
                                    <span className="text-sm font-black tracking-tight">{group.name}</span>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm opacity-0 group-hover/btn:opacity-100 transition-all scale-75 group-hover/btn:scale-100">
                                        <Plus size={16} className="stroke-[3px]" />
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setStudentToGroup(null)} className="w-full py-5 bg-slate-100 text-slate-500 rounded-[1.8rem] font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 transition-all active:scale-95">Dismiss Configuration</button>
                    </div>
                </div>
            )}

            {/* AI Strategic Analysis Overlay */}
            {showAIModal && (
                <div className="fixed inset-0 z-[600] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-2xl" onClick={() => setShowAIModal(false)} />
                    <div className="bg-white w-full max-w-2xl rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.3)] relative overflow-hidden animate-scaleIn border-8 border-white/20">
                        <div className="p-12 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white relative">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 anim-float"></div>
                            <Sparkles size={40} className="mb-6 animate-pulse" />
                            <h3 className="text-3xl font-black mb-3 tracking-tighter uppercase tracking-[-0.02em]">Cognitive Clustering Engine</h3>
                            <p className="opacity-80 text-[15px] font-bold leading-relaxed max-w-md">Optimizing classroom topology through multi-factor competency analysis and behavioral pattern mapping.</p>
                            <div className="absolute top-12 right-12 flex flex-col items-end gap-1">
                                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">System V.4.0</span>
                                <span className="text-[10px] font-black text-green-400 uppercase tracking-widest animate-pulse">Engaged</span>
                            </div>
                        </div>
                        <div className="p-12 text-center space-y-8 bg-white">
                            <div className="relative w-32 h-32 mx-auto">
                                <div className="absolute inset-0 border-[6px] border-slate-50 rounded-full"></div>
                                <div className="absolute inset-0 border-[6px] border-t-purple-600 rounded-full animate-spin"></div>
                                <div className="absolute inset-4 bg-slate-50 rounded-[2rem] flex items-center justify-center">
                                    <Target size={32} className="text-purple-600" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-2">Simulating Group Scenarios</p>
                                <p className="text-xs font-bold text-slate-400 tracking-tight">Processing historical mastery curves for 10 identities...</p>
                            </div>
                            <div className="pt-8 flex gap-4">
                                <button className="flex-1 py-4 bg-slate-900 text-white rounded-[1.8rem] font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-[0_15px_30px_rgba(0,0,0,0.15)] active:scale-95">Accelerate Analysis</button>
                                <button onClick={() => setShowAIModal(false)} className="px-10 py-4 bg-[#F8FAFC] text-slate-500 rounded-[1.8rem] font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all">Abort</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 20px; border: 2px solid transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
                
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes scaleIn {
                  from { opacity: 0; transform: scale(0.9) translateY(30px); }
                  to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-scaleIn { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .anim-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default RosterAndGroups;
