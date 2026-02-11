import React from 'react';
import {
    Edit, Trash2, Target, CheckCircle, Package, Paperclip,
    FileText, Download, Share2, Link2, Award, Lightbulb,
    PlayCircle, Copy, Clock, BookOpen, Upload, Sparkles
} from 'lucide-react';

const LessonDetailPanel = ({
    expandedLesson,
    lessons,
    getStatusColor,
    getStatusBadgeColor,
    setExpandedLesson,
    updateLessonStatus,
    deleteLesson
}) => {
    const [actionFeedback, setActionFeedback] = React.useState('');

    if (!expandedLesson) return null;

    const lesson = Object.values(lessons).flat().find(l => l.id === expandedLesson);
    if (!lesson) return null;

    const handleAction = (message) => {
        setActionFeedback(message);
        setTimeout(() => setActionFeedback(''), 2000);
    };

    const handleUpdateStatus = (newStatus) => {
        updateLessonStatus(lesson.id, newStatus);
        handleAction(`Status updated to ${newStatus}`);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this lesson?')) {
            deleteLesson(lesson.id);
        }
    };

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Action Feedback Toast */}
            {actionFeedback && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-2xl shadow-2xl z-[150] animate-in slide-in-from-top-4 duration-300 font-bold border border-slate-700 flex items-center gap-2">
                    <Sparkles className="text-amber-400" size={18} />
                    {actionFeedback}
                </div>
            )}
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-200 border-2 border-blue-100">
                <div className="p-6 md:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                        <div className="flex-1 text-left">
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(lesson.status)} text-white rounded-xl font-bold text-sm`}>
                                    {lesson.subject}
                                </span>
                                <span className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadgeColor(lesson.status)}`}>
                                    {lesson.status}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{lesson.title}</h2>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                <span className="flex items-center gap-2">
                                    <BookOpen size={16} className="text-blue-500" />
                                    Class: <strong>{lesson.class}</strong>
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} className="text-purple-500" />
                                    {lesson.time} ({lesson.duration})
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleAction('Edit mode coming soon in app')}
                                className="px-4 py-2 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all flex items-center gap-2"
                            >
                                <Edit size={14} />
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl text-xs font-bold hover:bg-red-100 transition-all flex items-center gap-2"
                            >
                                <Trash2 size={14} />
                                Delete
                            </button>
                            <button
                                onClick={() => setExpandedLesson(null)}
                                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Learning Objectives */}
                            <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 text-left">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Target className="text-cyan-500" size={20} />
                                    Learning Objectives
                                </h3>
                                <ul className="space-y-2">
                                    {lesson.objectives.map((obj, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{obj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Materials Required */}
                            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 text-left">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Package className="text-purple-500" size={20} />
                                    Materials Required
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {lesson.materials.map((material, idx) => (
                                        <span key={idx} className="px-3 py-1.5 bg-white border border-purple-200 rounded-lg text-xs font-medium text-slate-700">
                                            {material}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Attachments */}
                            <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 text-left">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Paperclip className="text-blue-500" size={20} />
                                    Attachments & Resources
                                </h3>
                                <div className="space-y-2">
                                    {lesson.attachments.map((file, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-white border border-blue-100 rounded-xl hover:shadow-md transition-all">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className="p-2 bg-blue-100 rounded-lg">
                                                    <FileText size={16} className="text-blue-600" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{file}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleAction(`Downloading ${file}...`)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download"
                                                >
                                                    <Download size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleAction(`Sharing ${file}...`)}
                                                    className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" title="Share"
                                                >
                                                    <Share2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => handleAction('Upload functionality coming soon in app')}
                                    className="w-full mt-4 px-4 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-md"
                                >
                                    <Upload size={18} />
                                    Upload New File
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* NCERT Learning Outcome */}
                            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 text-left">
                                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <Link2 className="text-green-500" size={20} />
                                    NCERT Learning Outcome
                                </h3>
                                <div className="p-4 bg-white rounded-xl border border-green-100">
                                    <p className="text-sm font-medium text-slate-700">{lesson.ncertOutcome}</p>
                                </div>
                            </div>

                            {/* CBSE Competency */}
                            <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 text-left">
                                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <Award className="text-orange-500" size={20} />
                                    CBSE Competency
                                </h3>
                                <div className="p-4 bg-white rounded-xl border border-orange-100">
                                    <p className="text-sm font-medium text-slate-700">{lesson.cbseCompetency}</p>
                                </div>
                            </div>

                            {/* AI Suggestions */}
                            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 text-left">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Lightbulb className="text-purple-500" size={20} />
                                    AI Suggested Resources
                                </h3>
                                <div className="space-y-2">
                                    {lesson.aiSuggestions.map((suggestion, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-purple-100 rounded-xl hover:shadow-md transition-all cursor-pointer group">
                                            <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                                <PlayCircle size={16} className="text-purple-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-slate-700">{suggestion}</p>
                                            </div>
                                            <button
                                                onClick={() => handleAction('Copied to clipboard!')}
                                                className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                                            >
                                                <Copy size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Status Actions */}
                            <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 text-left">
                                <h3 className="font-bold text-slate-800 mb-4">Update Lesson Status</h3>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleUpdateStatus('Taught')}
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex flex-col items-center"
                                    >
                                        <CheckCircle size={18} className="mb-1" />
                                        <span className="text-sm">Mark as Taught</span>
                                    </button>
                                    <button
                                        onClick={() => handleUpdateStatus('Pending')}
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-amber-600 shadow-md transition-all flex flex-col items-center"
                                    >
                                        <Clock size={18} className="mb-1" />
                                        <span className="text-sm">Mark as Pending</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonDetailPanel;
