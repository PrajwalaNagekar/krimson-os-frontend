import React, { useState } from 'react';
import { X, Plus, Trash2, GripVertical, BookOpen, Target, Calendar, CheckSquare, Users, Sparkles } from 'lucide-react';

const UnitPlanModal = ({ isOpen, onClose, onSave, editingPlan = null }) => {
    const [formData, setFormData] = useState(editingPlan || {
        unitName: '',
        grade: '',
        subject: '',
        duration: '',
        startDate: '',
        endDate: '',
        objectives: '',
        outcomes: [],
        lessons: [],
        assessments: [],
        differentiation: '',
        remediation: ''
    });

    const [currentLesson, setCurrentLesson] = useState({
        title: '',
        duration: '1',
        keyConcepts: '',
        outcomes: ''
    });

    const [currentAssessment, setCurrentAssessment] = useState({
        type: 'quiz',
        title: '',
        date: '',
        weightage: ''
    });

    if (!isOpen) return null;

    const handleAddLesson = () => {
        if (currentLesson.title.trim()) {
            setFormData({
                ...formData,
                lessons: [...formData.lessons, { ...currentLesson, id: Date.now() }]
            });
            setCurrentLesson({ title: '', duration: '1', keyConcepts: '', outcomes: '' });
        }
    };

    const handleRemoveLesson = (id) => {
        setFormData({
            ...formData,
            lessons: formData.lessons.filter(l => l.id !== id)
        });
    };

    const handleAddAssessment = () => {
        if (currentAssessment.title.trim()) {
            setFormData({
                ...formData,
                assessments: [...formData.assessments, { ...currentAssessment, id: Date.now() }]
            });
            setCurrentAssessment({ type: 'quiz', title: '', date: '', weightage: '' });
        }
    };

    const handleRemoveAssessment = (id) => {
        setFormData({
            ...formData,
            assessments: formData.assessments.filter(a => a.id !== id)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            {editingPlan ? 'Edit Unit Plan' : 'Create Unit Plan'}
                        </h2>
                        <p className="text-sm text-slate-500">
                            Build a comprehensive teaching plan for one unit from start to finish
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Unit Metadata */}
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="text-blue-500" size={20} />
                            <h3 className="text-lg font-bold text-slate-800">Unit Metadata</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Unit Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.unitName}
                                    onChange={(e) => setFormData({ ...formData, unitName: e.target.value })}
                                    placeholder="e.g., Fractions, Electricity, Grammar - Tenses"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Grade *</label>
                                <select
                                    required
                                    value={formData.grade}
                                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                >
                                    <option value="">Select Grade</option>
                                    <option value="Grade 6">Grade 6</option>
                                    <option value="Grade 7">Grade 7</option>
                                    <option value="Grade 8">Grade 8</option>
                                    <option value="Grade 9">Grade 9</option>
                                    <option value="Grade 10">Grade 10</option>
                                    <option value="Grade 11">Grade 11</option>
                                    <option value="Grade 12">Grade 12</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                                <select
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                >
                                    <option value="">Select Subject</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="English">English</option>
                                    <option value="History">History</option>
                                    <option value="Geography">Geography</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Duration (weeks)</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    placeholder="e.g., 4"
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Start Date</label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Unit Objectives */}
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Target className="text-purple-500" size={20} />
                            <h3 className="text-lg font-bold text-slate-800">Unit Objectives</h3>
                        </div>
                        <textarea
                            value={formData.objectives}
                            onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                            placeholder="What will students learn and be able to do by the end of this unit?"
                            rows="4"
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors resize-none"
                        />
                    </div>

                    {/* Lesson Sequence Builder */}
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="text-green-500" size={20} />
                                <h3 className="text-lg font-bold text-slate-800">Lesson Sequence</h3>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold">
                                {formData.lessons.length} Lesson{formData.lessons.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        {/* Existing Lessons */}
                        {formData.lessons.length > 0 && (
                            <div className="space-y-3 mb-4">
                                {formData.lessons.map((lesson, index) => (
                                    <div key={lesson.id} className="p-4 bg-white rounded-xl border border-green-200 flex items-start gap-3">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold text-sm">
                                            L{index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800">{lesson.title}</h4>
                                            <p className="text-sm text-slate-600 mt-1">
                                                Duration: {lesson.duration} period{lesson.duration > 1 ? 's' : ''}
                                            </p>
                                            {lesson.keyConcepts && (
                                                <p className="text-sm text-slate-600 mt-1">
                                                    <span className="font-semibold">Concepts:</span> {lesson.keyConcepts}
                                                </p>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveLesson(lesson.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Add New Lesson */}
                        <div className="p-4 bg-white rounded-xl border-2 border-dashed border-green-300">
                            <h4 className="font-bold text-slate-700 mb-3">Add New Lesson</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        value={currentLesson.title}
                                        onChange={(e) => setCurrentLesson({ ...currentLesson, title: e.target.value })}
                                        placeholder="Lesson title"
                                        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:border-green-400 focus:outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        min="1"
                                        value={currentLesson.duration}
                                        onChange={(e) => setCurrentLesson({ ...currentLesson, duration: e.target.value })}
                                        placeholder="Duration (periods)"
                                        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:border-green-400 focus:outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={currentLesson.keyConcepts}
                                        onChange={(e) => setCurrentLesson({ ...currentLesson, keyConcepts: e.target.value })}
                                        placeholder="Key concepts"
                                        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:border-green-400 focus:outline-none text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleAddLesson}
                                className="mt-3 w-full px-4 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <Plus size={18} />
                                Add Lesson
                            </button>
                        </div>
                    </div>

                    {/* Assessment Points */}
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <CheckSquare className="text-orange-500" size={20} />
                                <h3 className="text-lg font-bold text-slate-800">Assessment Points</h3>
                            </div>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold">
                                {formData.assessments.length} Assessment{formData.assessments.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        {/* Existing Assessments */}
                        {formData.assessments.length > 0 && (
                            <div className="space-y-3 mb-4">
                                {formData.assessments.map((assessment) => (
                                    <div key={assessment.id} className="p-4 bg-white rounded-xl border border-orange-200 flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold uppercase">
                                                    {assessment.type}
                                                </span>
                                                <h4 className="font-bold text-slate-800">{assessment.title}</h4>
                                            </div>
                                            <p className="text-sm text-slate-600">
                                                {assessment.date && `Date: ${assessment.date}`}
                                                {assessment.weightage && ` • Weightage: ${assessment.weightage}%`}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveAssessment(assessment.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Add New Assessment */}
                        <div className="p-4 bg-white rounded-xl border-2 border-dashed border-orange-300">
                            <h4 className="font-bold text-slate-700 mb-3">Add New Assessment</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <select
                                        value={currentAssessment.type}
                                        onChange={(e) => setCurrentAssessment({ ...currentAssessment, type: e.target.value })}
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none text-sm"
                                    >
                                        <option value="quiz">Quiz</option>
                                        <option value="assignment">Assignment</option>
                                        <option value="lab">Lab</option>
                                        <option value="project">Project</option>
                                        <option value="test">Test</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={currentAssessment.title}
                                        onChange={(e) => setCurrentAssessment({ ...currentAssessment, title: e.target.value })}
                                        placeholder="Assessment title"
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        value={currentAssessment.date}
                                        onChange={(e) => setCurrentAssessment({ ...currentAssessment, date: e.target.value })}
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={currentAssessment.weightage}
                                        onChange={(e) => setCurrentAssessment({ ...currentAssessment, weightage: e.target.value })}
                                        placeholder="Weightage %"
                                        className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none text-sm"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleAddAssessment}
                                className="mt-3 w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                <Plus size={18} />
                                Add Assessment
                            </button>
                        </div>
                    </div>

                    {/* Differentiation & Remediation */}
                    <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="text-indigo-500" size={20} />
                            <h3 className="text-lg font-bold text-slate-800">Differentiation & Remediation</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Differentiation Strategies</label>
                                <textarea
                                    value={formData.differentiation}
                                    onChange={(e) => setFormData({ ...formData, differentiation: e.target.value })}
                                    placeholder="How will you adapt instruction for different learning needs?"
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Remediation Touchpoints</label>
                                <textarea
                                    value={formData.remediation}
                                    onChange={(e) => setFormData({ ...formData, remediation: e.target.value })}
                                    placeholder="What support will you provide for struggling students?"
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* AI Assistant Placeholder */}
                    <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl text-white">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                <Sparkles size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold mb-1">AI Content Drafting Assistant</h4>
                                <p className="text-sm opacity-90">Get AI-powered suggestions for lesson activities, objectives, and assessments</p>
                            </div>
                            <button
                                type="button"
                                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors"
                            >
                                Get Help
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-lg transition-all"
                        >
                            {editingPlan ? 'Update Unit Plan' : 'Create Unit Plan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UnitPlanModal;
