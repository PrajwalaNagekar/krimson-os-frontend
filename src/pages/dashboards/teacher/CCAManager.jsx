import React, { useState } from 'react';
import {
    LayoutDashboard, Users, Calendar, ClipboardList,
    Award, Target, MapPin, Clock, Search, Plus,
    MoreHorizontal, Filter, ChevronRight, CheckCircle2,
    X, AlertTriangle, Sparkles, FileText, Star,
    Heart, Globe, Zap, Music, Trophy, Edit3, Trash2,
    Check, ArrowRight, Image as ImageIcon,
    Download, Save, Eye, Briefcase, UploadCloud, ChevronLeft
} from 'lucide-react';

const CCAManager = () => {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState('dashboard');
    const [activeModal, setActiveModal] = useState(null); // 'createClub', 'createSession', 'createBadge'
    const [filterStatus, setFilterStatus] = useState('Active'); // 'Active', 'Archived'

    // --- MOCK DATA ---
    const [clubs, setClubs] = useState([
        { id: 1, name: 'Robotics Club', pillar: 'Innovation', mentor: 'Mr. Stark', members: 24, capacity: 30, status: 'Active' },
        { id: 2, name: 'Debate Society', pillar: 'Leadership', mentor: 'Ms. Carter', members: 18, capacity: 20, status: 'Active' },
        { id: 3, name: 'Green Earth Initiative', pillar: 'Service', mentor: 'Mr. Rogers', members: 45, capacity: 50, status: 'Active' },
        { id: 4, name: 'Drama Club', pillar: 'Arts', mentor: 'Ms. Lawrence', members: 12, capacity: 40, status: 'Archived' },
    ]);

    const [sessions, setSessions] = useState([
        { id: 1, title: 'Bot Assembly 101', club: 'Robotics Club', date: '2026-02-12', formattedDate: 'Feb 12', time: '14:00', location: 'Lab 3', status: 'Upcoming' },
        { id: 2, title: 'Mock UN Preparation', club: 'Debate Society', date: '2026-02-10', formattedDate: 'Feb 10', time: '15:30', location: 'Hall B', status: 'Completed' },
        { id: 3, title: 'Script Reading', club: 'Drama Club', date: '2026-02-14', formattedDate: 'Feb 14', time: '10:00', location: 'Auditorium', status: 'Upcoming' },
    ]);

    const [badges, setBadges] = useState([
        { id: 1, name: 'Innovator Level 1', skill: 'Prototyping', criteria: 'Build a working circuit', icon: 'Zap', color: 'amber' },
        { id: 2, name: 'Community Hero', skill: 'Empathy', criteria: '20 hours of service', icon: 'Heart', color: 'rose' },
    ]);

    // Attendance State
    const [attendanceLog, setAttendanceLog] = useState({
        'Alice Johnson': 'Present',
        'Bob Smith': 'Absent',
        'Charlie Brown': 'Present',
        'Diana Prince': 'Late',
        'Evan Wright': 'Present',
        'Fiona Gallagher': 'Present'
    });

    // Badge Builder State
    const [newBadge, setNewBadge] = useState({ name: '', skill: '', criteria: '', icon: 'Star', color: 'indigo' });

    // Session Builder State
    const [newSession, setNewSession] = useState({
        title: '',
        club: 'Robotics Club', // Default first club
        date: '',
        time: '',
        location: '',
        details: ''
    });

    // Calendar State
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // Attendance View State
    const [selectedAttendanceSession, setSelectedAttendanceSession] = useState(null);

    // Badge View State
    const [badgeViewMode, setBadgeViewMode] = useState('templates'); // 'templates', 'awarded'
    const [assignedBadges, setAssignedBadges] = useState([
        { id: 101, badgeId: 1, name: 'Innovator Level 1', student: 'Alice Johnson', date: '2026-01-15', icon: 'Zap', color: 'amber' },
        { id: 102, badgeId: 2, name: 'Community Hero', student: 'Charlie Brown', date: '2026-02-01', icon: 'Heart', color: 'rose' },
    ]);

    const openCreateSession = (date = '') => {
        if (date) {
            // date is expected to be YYYY-MM-DD
            setNewSession(prev => ({ ...prev, date }));
        } else {
            setNewSession({
                title: '',
                club: clubs[0]?.name || '',
                date: '',
                time: '',
                location: '',
                details: ''
            });
        }
        setActiveModal('createSession');
    };

    const handleAddSession = () => {
        if (!newSession.title || !newSession.date || !newSession.time) {
            alert("Please fill in all required fields.");
            return;
        }

        const dateObj = new Date(newSession.date);
        const month = dateObj.toLocaleString('default', { month: 'short' });
        const day = dateObj.getDate();
        const formattedDate = `${month} ${day}`;

        const sessionToAdd = {
            id: Date.now(),
            ...newSession,
            formattedDate,
            status: 'Upcoming'
        };

        setSessions(prev => [...prev, sessionToAdd]);
        closeModal();
        setNewSession({
            title: '',
            club: clubs[0]?.name || '',
            date: '',
            time: '',
            location: '',
            details: ''
        });
    };

    const getPillarColor = (pillar) => {
        switch (pillar) {
            case 'Innovation': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'Leadership': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Service': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'Arts': return 'bg-pink-100 text-pink-700 border-pink-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    const getEventsForDay = (day) => {
        if (!day) return [];
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateStr = `${year}-${month}-${dayStr}`;
        return sessions.filter(s => s.date === dateStr);
    };

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case 'Zap': return Zap;
            case 'Heart': return Heart;
            case 'Star': return Star;
            case 'Trophy': return Trophy;
            case 'Globe': return Globe;
            case 'Music': return Music;
            default: return Star;
        }
    };

    const handleAttendanceToggle = (student, status) => {
        setAttendanceLog(prev => ({ ...prev, [student]: status }));
    };

    const markAllAttendance = (status) => {
        const newLog = {};
        Object.keys(attendanceLog).forEach(student => newLog[student] = status);
        setAttendanceLog(newLog);
    };

    const filteredClubs = clubs.filter(c => c.status === filterStatus);

    // Badge Assignment State
    const [selectedBadgeForAssignment, setSelectedBadgeForAssignment] = useState(null);
    const [assignmentData, setAssignmentData] = useState({ student: '', date: new Date().toISOString().split('T')[0] });

    // Mock Student Club Mapping for Badge Assignment
    const studentClubs = {
        'Alice Johnson': 'Robotics Club',
        'Bob Smith': 'Debate Society',
        'Charlie Brown': 'Green Earth Initiative',
        'Diana Prince': 'Drama Club',
        'Evan Wright': 'Robotics Club',
        'Fiona Gallagher': 'Debate Society'
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedBadgeForAssignment(null);
        setAssignmentData({ student: '', date: new Date().toISOString().split('T')[0] });
    };

    const openAssignBadgeModal = (badge) => {
        setSelectedBadgeForAssignment(badge);
        setAssignmentData({ student: Object.keys(attendanceLog)[0] || '', date: new Date().toISOString().split('T')[0] });
        setActiveModal('assignBadge');
    };

    const handleAssignBadge = () => {
        if (!assignmentData.student) return;

        const newAssignment = {
            id: Date.now(),
            badgeId: selectedBadgeForAssignment.id,
            name: selectedBadgeForAssignment.name,
            student: assignmentData.student,
            date: assignmentData.date,
            icon: selectedBadgeForAssignment.icon,
            color: selectedBadgeForAssignment.color
        };

        setAssignedBadges(prev => [newAssignment, ...prev]);

        // Mock API call / Logic
        alert(`Successfully assigned "${selectedBadgeForAssignment.name}" to ${assignmentData.student}!`);
        closeModal();
    };
    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 md:gap-3 ${activeTab === id
                ? 'bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5'
                : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
        >
            <Icon size={16} />
            <span className="hidden md:inline">{label}</span>
        </button>
    );

    // Enhanced Calendar Widget based on AcademicCalendar.jsx
    const CalendarWidget = () => {
        // State lifted to CCAManager

        // Calendar Logic
        const getDaysInMonth = () => {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const daysInMonth = lastDay.getDate();
            const startingDayOfWeek = firstDay.getDay();

            const days = [];
            // Previous month
            for (let i = 0; i < startingDayOfWeek; i++) {
                days.push({ day: '', isCurrentMonth: false });
            }
            // Current month
            for (let i = 1; i <= daysInMonth; i++) {
                days.push({ day: i, isCurrentMonth: true });
            }
            return days;
        };



        const nextMonth = () => {
            const newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setCurrentDate(newDate);
        };

        const prevMonth = () => {
            const newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setCurrentDate(newDate);
        };

        const isToday = (day) => {
            const today = new Date();
            return day === today.getDate() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getFullYear() === today.getFullYear();
        };

        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return (
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                            {monthNames[currentDate.getMonth()]} <span className="text-slate-300 font-normal">/</span> {currentDate.getFullYear()}
                        </h3>
                    </div>
                    <div className="flex gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                        <button onClick={prevMonth} className="p-3 rounded-xl hover:bg-white text-slate-500 hover:text-indigo-600 transition-all hover:shadow-sm">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => setCurrentDate(new Date())} className="px-6 py-2 rounded-xl bg-white text-indigo-600 text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-100">
                            Today
                        </button>
                        <button onClick={nextMonth} className="p-3 rounded-xl hover:bg-white text-slate-500 hover:text-indigo-600 transition-all hover:shadow-sm">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Big Grid Header */}
                <div className="grid grid-cols-7 gap-4 mb-4">
                    {dayNames.map(d => (
                        <div key={d} className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider py-2">{d}</div>
                    ))}
                </div>

                {/* Big Grid Body */}
                <div className="grid grid-cols-7 gap-4 mb-8">
                    {getDaysInMonth().map((dayObj, i) => {
                        const dayEvents = dayObj.isCurrentMonth ? getEventsForDay(dayObj.day) : [];
                        const today = isToday(dayObj.day);
                        const isSelected = selectedDate === dayObj.day;

                        return (
                            <div key={i}
                                onClick={() => dayObj.isCurrentMonth && setSelectedDate(dayObj.day)}
                                className={`min-h-[140px] rounded-[1.5rem] p-3 border transition-all cursor-pointer flex flex-col group relative ${!dayObj.isCurrentMonth
                                    ? 'bg-slate-50/30 border-transparent'
                                    : today
                                        ? 'bg-indigo-50 border-indigo-200 shadow-md ring-2 ring-indigo-100'
                                        : isSelected
                                            ? 'bg-white border-indigo-500 shadow-xl scale-105 z-10 ring-4 ring-indigo-50'
                                            : 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1'
                                    }`}
                            >
                                {dayObj.isCurrentMonth && (
                                    <>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-lg font-bold ${today ? 'text-indigo-600' : isSelected ? 'text-indigo-700' : 'text-slate-400 group-hover:text-slate-600'}`}>{dayObj.day}</span>
                                            {dayEvents.length > 0 && <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-[10px] font-bold">{dayEvents.length}</span>}
                                        </div>

                                        <div className="space-y-1 overflow-hidden">
                                            {dayEvents.slice(0, 3).map(ev => (
                                                <div key={ev.id} className="w-full p-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-900 truncate flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                                                    {ev.title}
                                                </div>
                                            ))}
                                            {dayEvents.length > 3 && (
                                                <div className="text-[10px] font-bold text-slate-400 pl-1">+{dayEvents.length - 3} more</div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Session List - Always Visible */}
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                            <span className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm"><Calendar size={20} className="text-indigo-500" /></span>
                            {selectedDate ? `Schedule for ${monthNames[currentDate.getMonth()]} ${selectedDate}` : 'All Sessions'}
                        </h3>
                        {selectedDate && (
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3 py-1 bg-slate-100 rounded-lg transition-colors"
                            >
                                Clear Filter
                            </button>
                        )}
                        <button
                            onClick={() => {
                                const year = currentDate.getFullYear();
                                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                                const day = selectedDate ? String(selectedDate).padStart(2, '0') : '';
                                openCreateSession(selectedDate ? `${year}-${month}-${day}` : '');
                            }}
                            className="text-xs font-bold text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors bg-white border border-indigo-100 shadow-sm"
                        >
                            + Add Session
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(selectedDate ? getEventsForDay(selectedDate) : sessions.sort((a, b) => new Date(a.date) - new Date(b.date))).length > 0 ? (
                            (selectedDate ? getEventsForDay(selectedDate) : sessions).map(session => (
                                <div key={session.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col gap-3 group relative overflow-hidden">
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${session.status === 'Completed' ? 'bg-emerald-400' : 'bg-indigo-400'}`}></div>
                                    <div className="flex justify-between items-start pl-2">
                                        <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">{session.club}</span>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${session.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-500'}`}>
                                            {session.status === 'Completed' ? 'Completed' : session.time}
                                        </span>
                                    </div>
                                    <div className="pl-2">
                                        <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-700 transition-colors mb-1">{session.title}</h4>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{session.formattedDate || session.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mt-auto pt-3 border-t border-slate-50 pl-2">
                                        <MapPin size={12} /> {session.location}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10">
                                <p className="text-slate-400 font-medium mb-4">No sessions found.</p>
                                <button
                                    onClick={() => openCreateSession()}
                                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg"
                                >
                                    Create First Session
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-8 pb-10 font-sans text-slate-600 bg-slate-50/50 min-h-screen">

            {/* --- MODALS --- */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className={`bg-white rounded-[2rem] p-8 w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-8 duration-300 relative ${activeModal === 'createSession' || activeModal === 'createBadge' || activeModal === 'assignBadge' ? 'max-w-4xl' : 'max-w-2xl'}`}>
                        <button onClick={closeModal} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                            <X size={24} />
                        </button>

                        {/* ASSIGN BADGE MODAL */}
                        {activeModal === 'assignBadge' && selectedBadgeForAssignment && (
                            <div className="space-y-8">
                                <div className="text-center">
                                    <div className={`w-24 h-24 mx-auto rounded-full bg-${selectedBadgeForAssignment.color}-100 text-${selectedBadgeForAssignment.color}-600 flex items-center justify-center mb-4 shadow-inner`}>
                                        {React.createElement(getIconComponent(selectedBadgeForAssignment.icon), { size: 48 })}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Assign Badge</h2>
                                    <p className="font-bold text-indigo-500">{selectedBadgeForAssignment.name}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Student</label>
                                            <select
                                                value={assignmentData.student}
                                                onChange={(e) => setAssignmentData({ ...assignmentData, student: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                                            >
                                                {Object.keys(attendanceLog).map(student => (
                                                    <option key={student} value={student}>
                                                        {student} {studentClubs[student] ? `• ${studentClubs[student]}` : ''}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Award Date</label>
                                            <input
                                                type="date"
                                                value={assignmentData.date}
                                                onChange={(e) => setAssignmentData({ ...assignmentData, date: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col justify-center">
                                        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2"><Sparkles size={18} /> Assignment Context</h4>
                                        <p className="text-sm text-indigo-700/80 mb-4 leading-relaxed">
                                            This badge will be added to the student's permanent record. Ensure they have met the following criteria:
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-indigo-100 text-xs font-medium text-slate-500 italic">
                                            "{selectedBadgeForAssignment.criteria}"
                                        </div>
                                    </div>
                                </div>

                                <button onClick={handleAssignBadge} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all flex items-center justify-center gap-2">
                                    <CheckCircle2 size={20} /> Confirm Assignment
                                </button>
                            </div>
                        )}

                        {/* CREATE CLUB MODAL - UPDATED WITH BANNER UPLOAD */}
                        {activeModal === 'createClub' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create New Club</h2>

                                {/* Banner Upload */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Club Banner</label>
                                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-300 group-hover:text-indigo-500 mb-2">
                                            <UploadCloud size={24} />
                                        </div>
                                        <p className="text-sm font-bold text-slate-600 group-hover:text-indigo-700">Click to upload banner</p>
                                        <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
                                        <input type="file" className="hidden" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Club Name</label>
                                    <input type="text" placeholder="e.g. Photography Club" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Development Pillar</label>
                                        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400">
                                            <option>Innovation</option>
                                            <option>Leadership</option>
                                            <option>Service</option>
                                            <option>Arts</option>
                                            <option>Sports</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Capacity</label>
                                        <input type="number" placeholder="30" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400" />
                                    </div>
                                </div>
                                <button onClick={closeModal} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all">Create Club</button>
                            </div>
                        )}

                        {/* CREATE SESSION MODAL */}
                        {activeModal === 'createSession' && (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <div className="lg:col-span-12 mb-2">
                                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Plan CCA Session</h2>
                                </div>
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center text-center">
                                        <Calendar size={40} className="text-indigo-400 mb-2" />
                                        <p className="font-bold text-indigo-900">Select Date</p>
                                        <input
                                            type="date"
                                            value={newSession.date}
                                            onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                                            className="mt-2 bg-white border border-indigo-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                        <input
                                            type="time"
                                            value={newSession.time}
                                            onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                                            className="mt-2 bg-white border border-indigo-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Club</label>
                                            <select
                                                value={newSession.club}
                                                onChange={(e) => setNewSession({ ...newSession, club: e.target.value })}
                                                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-700 focus:outline-none focus:border-indigo-400"
                                            >
                                                {clubs.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Science Lab 1"
                                                value={newSession.location}
                                                onChange={(e) => setNewSession({ ...newSession, location: e.target.value })}
                                                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-700 focus:outline-none focus:border-indigo-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Session Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Intro to Robotics"
                                            value={newSession.title}
                                            onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 focus:outline-none focus:border-indigo-500 text-lg placeholder:text-slate-300"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-bold text-slate-700">Activities</h4>
                                            <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:bg-indigo-50 px-2 py-1 rounded">
                                                <Sparkles size={12} /> AI Suggest
                                            </button>
                                        </div>
                                        <textarea
                                            rows="3"
                                            value={newSession.details}
                                            onChange={(e) => setNewSession({ ...newSession, details: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 focus:outline-none focus:border-indigo-400 resize-none"
                                            placeholder="Describe activities..."
                                        ></textarea>
                                    </div>
                                    <button onClick={handleAddSession} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all">Save & Publish</button>
                                </div>
                            </div>
                        )}

                        {/* CREATE BADGE MODAL */}
                        {activeModal === 'createBadge' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="lg:col-span-2 mb-2">
                                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Badge Builder</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Badge Name</label>
                                        <input
                                            type="text"
                                            value={newBadge.name}
                                            onChange={(e) => setNewBadge({ ...newBadge, name: e.target.value })}
                                            placeholder="e.g. Master Orator"
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Icon</label>
                                        <div className="flex gap-3 overflow-x-auto pb-2">
                                            {['Zap', 'Heart', 'Star', 'Trophy', 'Globe', 'Music'].map(icon => {
                                                const IconComp = getIconComponent(icon);
                                                return (
                                                    <button
                                                        key={icon}
                                                        onClick={() => setNewBadge({ ...newBadge, icon })}
                                                        className={`p-3 rounded-xl border-2 transition-all ${newBadge.icon === icon ? 'border-indigo-500 bg-indigo-50 text-indigo-600 scale-105' : 'border-slate-100 text-slate-400 hover:border-indigo-200'}`}
                                                    >
                                                        <IconComp size={20} />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Criteria</label>
                                        <textarea
                                            rows="3"
                                            value={newBadge.criteria}
                                            onChange={(e) => setNewBadge({ ...newBadge, criteria: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400 resize-none"
                                            placeholder="e.g. Participate in 5 debates..."
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col items-center justify-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Live Preview</p>
                                    <div className="bg-white p-8 rounded-[2rem] shadow-xl w-64 text-center border border-slate-100 transform hover:scale-105 transition-transform duration-500">
                                        <div className={`w-20 h-20 mx-auto rounded-full bg-${newBadge.color}-100 text-${newBadge.color}-600 flex items-center justify-center mb-4 shadow-inner ring-4 ring-white`}>
                                            {React.createElement(getIconComponent(newBadge.icon), { size: 40 })}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{newBadge.name || 'Badge Name'}</h3>
                                        <p className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-3">{newBadge.skill || 'Skill'}</p>
                                        <div className="h-1 w-8 bg-slate-200 rounded-full mx-auto mb-4"></div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                            {newBadge.criteria || 'Criteria description will appear here...'}
                                        </p>
                                    </div>
                                    <button onClick={closeModal} className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 shadow-lg">Create Badge</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}


            {/* HEADER SECTION - Updated with StudentInsights Gradient & Blobs */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

                <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                    <div>
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
                            Co-Curricular Hub
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">CCA Manager</h1>
                        <p className="text-sm md:text-base text-white/90 font-medium max-w-xl">Manage clubs, plan sessions, and track student growth.</p>

                        <div className="flex gap-3 mt-6">
                            <button className="px-5 py-2.5 bg-white text-blue-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-50 shadow-lg transition-all flex items-center gap-2">
                                <Download size={16} /> Export Data
                            </button>
                        </div>
                    </div>

                    {/* LabManager-style Floating Tabs Refactored to Glass Ribbon */}
                    <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
                        <TabButton id="dashboard" label="Dashboard" icon={LayoutDashboard} />
                        <TabButton id="management" label="Clubs" icon={Users} />
                        <TabButton id="planner" label="Planner" icon={Calendar} />
                        <TabButton id="attendance" label="Attendance" icon={CheckCircle2} />
                        <TabButton id="review" label="Badges" icon={Award} />
                    </div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="animate-in slide-in-from-bottom-4 duration-500">

                {/* DASHBOARD TAB */}
                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Metrics */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Total Clubs', value: '14', desc: 'Active Programs', icon: Globe, color: 'blue', border: 'border-blue-200', text: 'text-blue-600' },
                                { label: 'This Week', value: '08', desc: 'Scheduled Sessions', icon: Calendar, color: 'purple', border: 'border-purple-200', text: 'text-purple-600' },
                                { label: 'Enrollment', value: '450', desc: 'Active Students', icon: Users, color: 'emerald', border: 'border-emerald-200', text: 'text-emerald-600' },
                                { label: 'Action Items', value: '12', desc: 'Pending Reviews', icon: ClipboardList, color: 'amber', border: 'border-amber-200', text: 'text-amber-600' },
                            ].map((stat, i) => (
                                <div key={i} className={`bg-white p-6 rounded-3xl shadow-sm border-2 ${stat.border} hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-default`}>
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.desc}</p>
                                        <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-500 flex items-center justify-center opacity-80`}>
                                            <stat.icon size={20} />
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl md:text-3xl font-bold ${stat.text} mb-1`}>{stat.value}</h3>
                                    <p className="font-bold text-slate-700 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Upcoming Sessions Timeline */}
                        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <Calendar size={22} className="text-indigo-500" /> Upcoming Sessions
                                </h3>
                                <button className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">View Schedule</button>
                            </div>

                            <div className="space-y-6">
                                {sessions.filter(s => s.status === 'Upcoming').map((session, index) => (
                                    <div key={session.id} className="flex gap-6 group">
                                        {/* Date Column */}
                                        <div className="w-16 flex flex-col items-center text-center pt-2">
                                            <span className={`text-xs font-bold uppercase tracking-wider ${index === 0 ? 'text-indigo-600' : 'text-slate-400'}`}>{session.formattedDate.split(' ')[0]}</span>
                                            <span className={`text-xl font-bold ${index === 0 ? 'text-indigo-800' : 'text-slate-600'}`}>{session.formattedDate.split(' ')[1]}</span>
                                            {index !== sessions.length - 1 && <div className="w-0.5 h-full bg-slate-100 mt-2"></div>}
                                        </div>

                                        {/* Card */}
                                        <div className="flex-1 bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all cursor-pointer">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-700 transition-colors">{session.title}</h4>
                                                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                                                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200"><Users size={12} /> {session.club}</span>
                                                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200"><Clock size={12} /> {session.time}</span>
                                                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200"><MapPin size={12} /> {session.location}</span>
                                                    </div>
                                                </div>
                                                <button className="p-2 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                                                    <ChevronRight size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Items */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden ring-4 ring-slate-50">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>
                                <h3 className="text-lg font-bold mb-6 relative z-10 flex items-center gap-2">
                                    <Target size={18} className="text-indigo-400" /> Action Items
                                </h3>
                                <div className="space-y-3 relative z-10">
                                    {[
                                        { text: 'Review 5 Reflections', overdue: true },
                                        { text: 'Finalize Robotics Budget', overdue: false },
                                        { text: 'Approve Service Hours', overdue: false },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                            <span className="text-sm font-medium group-hover:text-white/90">{item.text}</span>
                                            {item.overdue ? (
                                                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold uppercase tracking-wider border border-rose-500/30">Due</span>
                                            ) : (
                                                <ArrowRight size={14} className="text-white/50 group-hover:translate-x-1 transition-transform" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MANAGEMENT TAB */}
                {activeTab === 'management' && (
                    <div className="space-y-8">
                        {/* Toolbar */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-[1.5rem] border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <div className="relative flex-1 md:min-w-[300px]">
                                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="text" placeholder="Search clubs, mentors..." className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 border border-transparent focus:border-indigo-200" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-100 p-1 rounded-xl flex items-center font-bold text-xs">
                                    <button
                                        onClick={() => setFilterStatus('Active')}
                                        className={`px-4 py-2 rounded-lg shadow-sm transition-all ${filterStatus === 'Active' ? 'bg-white text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Active
                                    </button>
                                    <button
                                        onClick={() => setFilterStatus('Archived')}
                                        className={`px-4 py-2 rounded-lg shadow-sm transition-all ${filterStatus === 'Archived' ? 'bg-white text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Archived
                                    </button>
                                </div>
                                <button onClick={() => setActiveModal('createClub')} className="px-5 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center gap-2">
                                    <Plus size={16} /> New Club
                                </button>
                            </div>
                        </div>

                        {/* Club Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredClubs.map(club => (
                                <div key={club.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                    <div className="h-32 bg-slate-100 relative">
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border bg-white ${getPillarColor(club.pillar).replace('bg-', 'text-')}`}>
                                            {club.pillar}
                                        </div>
                                        <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-2xl p-1 shadow-md">
                                            <div className="w-full h-full bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                                                <ImageIcon size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8 px-6 pb-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">{club.name}</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Mentor: {club.mentor}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Members</div>
                                                <div className="text-lg font-bold text-slate-700">{club.members}<span className="text-slate-400 text-sm font-bold">/{club.capacity}</span></div>
                                            </div>
                                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status</div>
                                                <div className={`flex items-center gap-1.5 text-sm font-bold ${club.status === 'Active' ? 'text-emerald-600' : 'text-slate-500'}`}>
                                                    <div className={`w-2 h-2 rounded-full ${club.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></div> {club.status}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button className="flex-1 py-3 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-100 transition-colors">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Placeholder - Shows if active or no clubs */}
                            {filterStatus === 'Active' && (
                                <button onClick={() => setActiveModal('createClub')} className="bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-white hover:border-indigo-200 hover:text-indigo-500 transition-all min-h-[350px] gap-4 group">
                                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:scale-110 transition-all">
                                        <Plus size={32} />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wider">Create New Club</span>
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* PLANNER TAB - Big Calendar Style */}
                {activeTab === 'planner' && (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800">Session Planner</h2>
                                <p className="text-blue-500 font-bold text-sm">Manage your monthly schedule</p>
                            </div>
                            <button
                                onClick={() => openCreateSession()}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center gap-2"
                            >
                                <Plus size={16} /> New Plan
                            </button>
                        </div>

                        {/* Full Width Calendar */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <CalendarWidget />
                        </div>
                    </div>
                )}

                {/* ATTENDANCE TAB - 2 Step Flow */}
                {activeTab === 'attendance' && (
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm min-h-[600px]">
                        {!selectedAttendanceSession ? (
                            // STEP 1: SELECT SESSION
                            <div className="space-y-8 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">Attendance Log</h3>
                                        <p className="text-slate-400 font-medium text-sm">Select a session to mark attendance</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                                            <Filter size={20} />
                                        </button>
                                        <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                                            <Search size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sessions.map(session => (
                                        <div
                                            key={session.id}
                                            onClick={() => setSelectedAttendanceSession(session)}
                                            className="group relative bg-white rounded-[2rem] border border-slate-200 p-6 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-indigo-100 transition-colors"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                                                        <ClipboardList size={24} />
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${session.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                                                        }`}>
                                                        {session.status}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">{session.title}</h4>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{session.club}</p>

                                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                                    <span className="flex items-center gap-1"><Calendar size={12} /> {session.formattedDate}</span>
                                                    <span className="flex items-center gap-1"><Clock size={12} /> {session.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // STEP 2: MARK ATTENDANCE
                            <div className="animate-in slide-in-from-right-8 duration-300">
                                <button
                                    onClick={() => setSelectedAttendanceSession(null)}
                                    className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-indigo-600 transition-colors group"
                                >
                                    <div className="p-1 rounded-full bg-slate-50 group-hover:bg-indigo-50 border border-slate-200 group-hover:border-indigo-200">
                                        <ChevronLeft size={16} />
                                    </div>
                                    Back to Sessions
                                </button>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                            {selectedAttendanceSession.title}
                                            <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider border border-indigo-100">
                                                {selectedAttendanceSession.formattedDate}
                                            </span>
                                        </h3>
                                        <p className="text-slate-400 font-medium text-sm mt-1">Mark attendance for {selectedAttendanceSession.club} members</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={() => markAllAttendance('Present')} className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors">
                                            Mark All Present
                                        </button>
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg">
                                            Save Record
                                        </button>
                                    </div>
                                </div>

                                {/* Summary Bar */}
                                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                                    {['Present', 'Absent', 'Late'].map(status => {
                                        const count = Object.values(attendanceLog).filter(s => s === status).length;
                                        const color = status === 'Present' ? 'emerald' : status === 'Absent' ? 'rose' : 'amber';
                                        return (
                                            <div key={status} className={`min-w-[150px] flex-1 p-4 bg-${color}-50 rounded-2xl border border-${color}-100 flex items-center justify-between`}>
                                                <span className={`text-xs font-bold text-${color}-600 uppercase tracking-wider`}>{status}</span>
                                                <span className={`text-2xl font-bold text-${color}-700`}>{count}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Student Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {Object.entries(attendanceLog).map(([student, status], i) => (
                                        <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${status === 'Present' ? 'bg-emerald-50/50 border-emerald-100' : status === 'Absent' ? 'bg-rose-50/50 border-rose-100' : 'bg-amber-50/50 border-amber-100'}`}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-600 shadow-sm">{student[0]}</div>
                                                <div>
                                                    <p className="font-bold text-slate-700 text-sm">{student}</p>
                                                    <p className="text-[10px] font-bold text-slate-400">ID: 9928{i}</p>
                                                </div>
                                            </div>
                                            <div className="flex bg-white rounded-xl p-1 border border-slate-200 shadow-sm gap-1">
                                                <button
                                                    onClick={() => handleAttendanceToggle(student, 'Present')}
                                                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === 'Present' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500'}`}
                                                >
                                                    <CheckCircle2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleAttendanceToggle(student, 'Absent')}
                                                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === 'Absent' ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-300 hover:bg-rose-50 hover:text-rose-500'}`}
                                                >
                                                    <X size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleAttendanceToggle(student, 'Late')}
                                                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${status === 'Late' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-300 hover:bg-amber-50 hover:text-amber-500'}`}
                                                >
                                                    <Clock size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* REVIEW TAB */}
                {activeTab === 'review' && (
                    <div className="space-y-8">
                        {/* Badges Section */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Award size={22} className="text-indigo-500" /> Skill Badges</h3>
                                    <p className="text-sm font-medium text-slate-400 mt-1">Manage badge templates and view awarded history</p>
                                </div>

                                <div className="flex bg-slate-100 p-1 rounded-xl">
                                    <button
                                        onClick={() => setBadgeViewMode('templates')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${badgeViewMode === 'templates' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Templates
                                    </button>
                                    <button
                                        onClick={() => setBadgeViewMode('awarded')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${badgeViewMode === 'awarded' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Awarded History
                                    </button>
                                </div>

                                {badgeViewMode === 'templates' && (
                                    <button
                                        onClick={() => setActiveModal('createBadge')}
                                        className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-700 shadow-lg flex items-center gap-2"
                                    >
                                        <Plus size={16} /> Create Badge
                                    </button>
                                )}
                            </div>

                            {badgeViewMode === 'templates' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    {badges.map(badge => {
                                        const BIcon = getIconComponent(badge.icon);
                                        return (
                                            <div key={badge.id} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative">
                                                <div className={`w-20 h-20 rounded-full bg-${badge.color}-100 text-${badge.color}-600 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                                    <BIcon size={32} />
                                                </div>
                                                <h4 className="font-bold text-lg text-slate-800 mb-1">{badge.name}</h4>
                                                <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-3">{badge.skill}</p>
                                                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">"{badge.criteria}"</p>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openAssignBadgeModal(badge);
                                                    }}
                                                    className="mt-auto px-6 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                                                >
                                                    Assign
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <button onClick={() => setActiveModal('createBadge')} className="p-8 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center hover:bg-white hover:border-indigo-300 hover:text-indigo-500 transition-all gap-3 min-h-[280px]">
                                        <Plus size={32} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Add New Badge</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {assignedBadges.length > 0 ? assignedBadges.map(assigned => {
                                        const BIcon = getIconComponent(assigned.icon);
                                        return (
                                            <div key={assigned.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 rounded-xl bg-${assigned.color}-100 text-${assigned.color}-600 flex items-center justify-center`}>
                                                        <BIcon size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-800">{assigned.name}</h4>
                                                        <p className="text-xs font-medium text-slate-500">Awarded to <span className="text-indigo-600 font-bold">{assigned.student}</span></p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{assigned.date}</span>
                                                    <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }) : (
                                        <div className="text-center py-20 text-slate-400">
                                            <p className="font-medium">No badges have been awarded yet.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CCAManager;
