import React from 'react';
import {
    Users, Clock, AlertTriangle, CheckCircle,
    TrendingUp, Calendar, ArrowRight, MessageSquare
} from 'lucide-react';

const SubmissionTracker = ({ assignment, onOpenEvaluation }) => {
    // Mock data for student submissions
    const students = [
        { id: 1, name: 'Aditya Sharma', status: 'on-time', submissionDate: '2026-02-01 14:30', marks: 85 },
        { id: 2, name: 'Ishani Patel', status: 'late', submissionDate: '2026-02-02 09:15', marks: 72, reason: 'Technical Issue' },
        { id: 3, name: 'Rohan Gupta', status: 'missing', submissionDate: '-', marks: 0 },
        { id: 4, name: 'Sanya Malhotra', status: 'on-time', submissionDate: '2026-01-31 16:45', marks: 92 },
        { id: 5, name: 'Vikram Singh', status: 'missing', submissionDate: '-', marks: 0 },
        { id: 6, name: 'Zara Khan', status: 'on-time', submissionDate: '2026-02-01 10:20', marks: 78 },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'on-time': return 'bg-green-100 text-green-700 border-green-200';
            case 'late': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'missing': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            {/* Class Level Heatmap */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <TrendingUp size={16} className="text-blue-500" />
                        Class Submission Heatmap
                    </h3>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 text-green-600">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            On-time
                        </span>
                        <span className="flex items-center gap-1.5 text-yellow-600">
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            Late
                        </span>
                        <span className="flex items-center gap-1.5 text-red-600">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            Missing
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
                    {Array.from({ length: assignment.total }).map((_, idx) => {
                        const student = students[idx] || { status: idx % 3 === 0 ? 'missing' : 'on-time' };
                        const statusColor = student.status === 'on-time' ? 'bg-green-500' : (student.status === 'late' ? 'bg-yellow-500' : 'bg-red-500');

                        return (
                            <div
                                key={idx}
                                className={`h-12 rounded-lg ${statusColor} opacity-20 hover:opacity-100 transition-all cursor-help relative group`}
                            >
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-2 bg-slate-900 text-white rounded-lg text-[10px] font-bold hidden group-hover:block z-10 shadow-xl">
                                    {student.name || `Student ${idx + 1}`}
                                    <p className="font-normal opacity-70 mt-1 capitalize">{student.status}</p>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Student Timeline Feed */}
            <section>
                <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-purple-500" />
                    Submission Timeline & Monitoring
                </h3>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-100/50">
                                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Student</th>
                                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Timestamp</th>
                                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">Status</th>
                                <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-white transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                {student.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-800">{student.name}</p>
                                                {student.reason && <p className="text-[10px] text-orange-500 italic mt-0.5 flex items-center gap-1">
                                                    <MessageSquare size={10} /> {student.reason}
                                                </p>}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-xs font-medium text-slate-500">
                                        {student.submissionDate}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border ${getStatusStyle(student.status)}`}>
                                            {student.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button
                                            onClick={() => onOpenEvaluation(student)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                        >
                                            <ArrowRight size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="p-4 bg-white/50 text-center">
                        <button className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">
                            View All Student Records
                        </button>
                    </div>
                </div>
            </section>

            {/* Monitoring Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl border border-red-100">
                    <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle size={18} className="text-red-500" />
                        <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Critical Follow-up</p>
                    </div>
                    <p className="text-[10px] text-slate-600 font-medium mb-4">
                        3 students have missed the deadline without communication. System has auto-flagged these for parent follow-up.
                    </p>
                    <button className="w-full py-3 bg-white text-red-600 border border-red-200 rounded-xl text-[10px] font-bold hover:bg-red-50 transition-all uppercase tracking-widest">
                        Notify Parents (SMS)
                    </button>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                    <div className="flex items-center gap-2 mb-4">
                        <CheckCircle size={18} className="text-green-500" />
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wide">Submission Health</p>
                    </div>
                    <div className="flex items-end justify-between mb-2">
                        <h4 className="text-2xl font-bold text-slate-800">82%</h4>
                        <p className="text-[10px] text-green-600 font-bold">+5% vs last period</p>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[82%]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmissionTracker;
