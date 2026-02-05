import React, { useState } from 'react';
import {
    X, ChevronRight, ChevronLeft, Target,
    BookOpen, Sparkles, AlertCircle, FileText,
    CheckCircle2, Info, Users, Shield, Zap,
    Clock, Eye, Upload, Trash2, Send,
    Bell, UserPlus, ListChecks
} from 'lucide-react';

const CreateAssignmentWizard = ({
    isOpen,
    onClose,
    ASSIGNMENT_TYPES,
    COMPETENCY_TYPES,
    OUTPUT_FORMATS,
    SUBMISSION_FORMATS
}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        mappedLessons: [],
        learningOutcomes: [],
        competency: 'Knowledge',
        context: '',
        instructions: '',
        expectedOutput: [],
        successCriteria: '',
        rubric: {
            criteria: [
                {
                    id: 1, name: 'Accuracy', levels: [
                        { level: 1, descriptor: 'Significant errors present' },
                        { level: 2, descriptor: 'Minor errors present' },
                        { level: 3, descriptor: 'Completely accurate' }
                    ]
                }
            ]
        },
        submissionFormat: [],
        isGroup: false,
        deadline: '',
        graceWindow: 0,
        latePenalty: 'none',
        targetGroup: 'All',
        attachments: [],
        distribution: {
            target: 'class', // 'class', 'groups', 'individuals'
            selectedGroups: [],
            selectedStudents: [],
            releaseDate: '',
            releaseTime: '',
            notifyOnRelease: true,
            reminders: true,
            flagMissing: true
        }
    });

    if (!isOpen) return null;

    const steps = [
        { id: 1, title: 'Classification', icon: <Target size={18} /> },
        { id: 2, title: 'Instructions', icon: <FileText size={18} /> },
        { id: 3, title: 'Rubric', icon: <Shield size={18} /> },
        { id: 4, title: 'Submission', icon: <Users size={18} /> },
        { id: 5, title: 'Deadlines', icon: <Zap size={18} /> },
        { id: 6, title: 'Review', icon: <Eye size={18} /> },
        { id: 7, title: 'Distribution', icon: <Send size={18} /> },
    ];

    const totalSteps = 7;

    const handleNext = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col animate-scaleIn">
                {/* Progress Sidebar */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-64 bg-slate-50 border-r border-slate-100 hidden md:flex flex-col p-8">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 mb-4">
                            <Sparkles size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">Assignment Builder</h2>
                        <p className="text-xs text-slate-400 font-medium tracking-tight">Outcome Driven Design</p>
                    </div>

                    <div className="space-y-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex items-center gap-4 transition-all duration-500 ${currentStep === step.id ? 'opacity-100 scale-105' : 'opacity-40'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${currentStep === step.id ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'
                                    }`}>
                                    {step.id < currentStep ? <CheckCircle2 size={18} /> : step.icon}
                                </div>
                                <div className="hidden lg:block text-left">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Step 0{step.id}</p>
                                    <p className={`text-sm font-bold ${currentStep === step.id ? 'text-slate-800' : 'text-slate-500'}`}>{step.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <Info size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Framework Rule</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                            Assignments must be mapped to specific learning outcomes to ensure academic integrity.
                        </p>
                    </div>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-50 md:ml-64">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">Stage {currentStep}: {steps[currentStep - 1].title}</h3>
                        <p className="text-xs text-slate-400 font-medium">Complete all mandatory fields to proceed</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 md:ml-64 bg-white custom-scrollbar">
                    {currentStep === 1 && (
                        <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
                            {/* Assignment Type */}
                            <section>
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                                    <Target size={16} className="text-blue-500" />
                                    1. Select Assignment Type
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {ASSIGNMENT_TYPES.map(type => (
                                        <button
                                            key={type.id}
                                            onClick={() => updateFormData('type', type.id)}
                                            className={`p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden group ${formData.type === type.id
                                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                                : 'border-slate-100 hover:border-blue-200'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`text-sm font-bold ${formData.type === type.id ? 'text-blue-700' : 'text-slate-700'}`}>
                                                    {type.label}
                                                </span>
                                                {formData.type === type.id && <CheckCircle2 size={16} className="text-blue-500" />}
                                            </div>
                                            <p className="text-[10px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                                                {type.description}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Outcome Mapping */}
                            <section className="pt-4 border-t border-slate-50">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                                    <BookOpen size={16} className="text-purple-500" />
                                    2. Outcome & Competency Mapping
                                </label>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Competency Focus</p>
                                        <div className="flex gap-2">
                                            {COMPETENCY_TYPES.map(comp => (
                                                <button
                                                    key={comp}
                                                    onClick={() => updateFormData('competency', comp)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${formData.competency === comp
                                                        ? 'bg-slate-800 text-white shadow-md'
                                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                                        }`}
                                                >
                                                    {comp}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Title</p>
                                            <input
                                                type="text"
                                                placeholder="Enter assignment Title..."
                                                value={formData.title}
                                                onChange={(e) => updateFormData('title', e.target.value)}
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-blue-400 focus:outline-none transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Map Lessons</p>
                                            <input
                                                type="text"
                                                placeholder="Select Learning Outcomes..."
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-blue-400 focus:outline-none transition-all font-medium"
                                            />
                                            <p className="text-[10px] text-slate-400 mt-1 font-medium">Mapped to NCERT Learning Outcomes 3.1, 3.2</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
                            <section>
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                                    <Target size={16} className="text-orange-500" />
                                    3. Context & Instruction Design
                                </label>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Context / Purpose (Why do this?)</p>
                                        <textarea
                                            rows="3"
                                            placeholder="Explain the pedagogical reason for this assignment..."
                                            value={formData.context}
                                            onChange={(e) => updateFormData('context', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-orange-400 focus:outline-none transition-all font-medium resize-none"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Step-by-step Instructions</p>
                                        <textarea
                                            rows="5"
                                            placeholder="Provide clear, misinterpretation-proof instructions..."
                                            value={formData.instructions}
                                            onChange={(e) => updateFormData('instructions', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-orange-400 focus:outline-none transition-all font-medium resize-none"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="pt-4 border-t border-slate-50">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                                    <Zap size={16} className="text-yellow-500" />
                                    4. Expected Output & Success
                                </label>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Expected Output Types</p>
                                        <div className="flex flex-wrap gap-2">
                                            {OUTPUT_FORMATS.map(out => (
                                                <button
                                                    key={out}
                                                    onClick={() => {
                                                        const current = formData.expectedOutput;
                                                        if (current.includes(out)) {
                                                            updateFormData('expectedOutput', current.filter(o => o !== out));
                                                        } else {
                                                            updateFormData('expectedOutput', [...current, out]);
                                                        }
                                                    }}
                                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${formData.expectedOutput.includes(out)
                                                        ? 'bg-yellow-500 text-white shadow-md'
                                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                                        }`}
                                                >
                                                    {out}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Success Criteria (Summary)</p>
                                        <input
                                            type="text"
                                            placeholder="What does 'Good Work' look like?"
                                            value={formData.successCriteria}
                                            onChange={(e) => updateFormData('successCriteria', e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-yellow-400 focus:outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <Shield size={16} className="text-green-500" />
                                    5. Assessment Rubric Builder
                                </label>
                                <button
                                    onClick={() => {
                                        const newId = formData.rubric.criteria.length + 1;
                                        const updated = {
                                            ...formData.rubric,
                                            criteria: [...formData.rubric.criteria, { id: newId, name: '', levels: [{ level: 1, descriptor: '' }, { level: 2, descriptor: '' }, { level: 3, descriptor: '' }] }]
                                        };
                                        updateFormData('rubric', updated);
                                    }}
                                    className="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-bold border border-green-200 hover:bg-green-100 transition-all"
                                >
                                    + Add Criterion
                                </button>
                            </div>

                            <div className="overflow-x-auto border border-slate-100 rounded-3xl shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 w-1/4">Criterion</th>
                                            <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">L1 (Emerging)</th>
                                            <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">L2 (Proficient)</th>
                                            <th className="p-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">L3 (Exemplary)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {formData.rubric.criteria.map((crit, critIdx) => (
                                            <tr key={crit.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="p-4">
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. Reasoning"
                                                        value={crit.name}
                                                        onChange={(e) => {
                                                            const updatedCriteria = [...formData.rubric.criteria];
                                                            updatedCriteria[critIdx].name = e.target.value;
                                                            updateFormData('rubric', { ...formData.rubric, criteria: updatedCriteria });
                                                        }}
                                                        className="w-full bg-transparent border-none text-sm font-bold text-slate-700 focus:ring-0 placeholder:text-slate-300"
                                                    />
                                                </td>
                                                {crit.levels.map((lvl, lvlIdx) => (
                                                    <td key={lvl.level} className="p-4">
                                                        <textarea
                                                            rows="3"
                                                            placeholder="Describe performance..."
                                                            value={lvl.descriptor}
                                                            onChange={(e) => {
                                                                const updatedCriteria = [...formData.rubric.criteria];
                                                                updatedCriteria[critIdx].levels[lvlIdx].descriptor = e.target.value;
                                                                updateFormData('rubric', { ...formData.rubric, criteria: updatedCriteria });
                                                            }}
                                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-xl p-2 text-[10px] font-medium text-slate-600 focus:border-green-400 focus:outline-none transition-all resize-none"
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-3">
                                <AlertCircle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                <p className="text-[10px] text-yellow-700 leading-relaxed font-medium">
                                    <b>System Rule:</b> This rubric will be visible to students before they submit. It serves as their success compass. Once the first grade is recorded, this rubric will be locked to ensure evaluation fairness.
                                </p>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
                            <section>
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-6">
                                    <Users size={16} className="text-blue-500" />
                                    6. Submission Configuration
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">Collaboration Mode</p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => updateFormData('isGroup', false)}
                                                className={`flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${!formData.isGroup ? 'border-blue-500 bg-white shadow-md' : 'border-white bg-white/50 opacity-60'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg ${!formData.isGroup ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                                                    <FileText size={18} />
                                                </div>
                                                <span className="text-xs font-bold">Individual</span>
                                            </button>
                                            <button
                                                onClick={() => updateFormData('isGroup', true)}
                                                className={`flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${formData.isGroup ? 'border-blue-500 bg-white shadow-md' : 'border-white bg-white/50 opacity-60'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg ${formData.isGroup ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                                                    <Users size={18} />
                                                </div>
                                                <span className="text-xs font-bold">Group</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">Submission Format</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {SUBMISSION_FORMATS.map(fmt => (
                                                <button
                                                    key={fmt}
                                                    onClick={() => {
                                                        const current = formData.submissionFormat;
                                                        if (current.includes(fmt)) {
                                                            updateFormData('submissionFormat', current.filter(f => f !== fmt));
                                                        } else {
                                                            updateFormData('submissionFormat', [...current, fmt]);
                                                        }
                                                    }}
                                                    className={`px-3 py-2 rounded-xl text-[10px] font-bold transition-all border ${formData.submissionFormat.includes(fmt)
                                                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                                        : 'bg-white text-slate-500 border-slate-200'
                                                        }`}
                                                >
                                                    {fmt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="pt-6 border-t border-slate-50">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Naming Convention Required?</p>
                                    <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g. RollNo_Name_AssignmentTitle"
                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-blue-400 focus:outline-none transition-all font-medium"
                                />
                            </section>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
                            <section>
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-6">
                                    <Clock size={16} className="text-red-500" />
                                    7. Deadlines & Evaluation Policies
                                </label>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Main Deadline</p>
                                            <input
                                                type="datetime-local"
                                                value={formData.deadline}
                                                onChange={(e) => updateFormData('deadline', e.target.value)}
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-red-400 focus:outline-none transition-all font-bold [color-scheme:light]"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Grace Window (Hours)</p>
                                            <select
                                                value={formData.graceWindow}
                                                onChange={(e) => updateFormData('graceWindow', e.target.value)}
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:border-red-400 focus:outline-none transition-all font-bold appearance-none"
                                            >
                                                <option value="0">No Grace Window</option>
                                                <option value="1">1 Hour</option>
                                                <option value="2">2 Hours</option>
                                                <option value="6">6 Hours</option>
                                                <option value="12">12 Hours</option>
                                                <option value="24">24 Hours (1 Day)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                                        <p className="text-xs font-bold text-red-600 mb-4 uppercase tracking-wide flex items-center gap-2">
                                            <Shield size={14} />
                                            Late Submission Policy
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'none', label: 'Strict Lock', desc: 'No submissions allowed after deadline/grace period.' },
                                                { id: 'penalty', label: 'Percentage Deduction', desc: '10% marks deducted per day late.' },
                                                { id: 'feedback', label: 'Feedback Only', desc: 'Students can submit but will receive no marks.' }
                                            ].map(pol => (
                                                <button
                                                    key={pol.id}
                                                    onClick={() => updateFormData('latePenalty', pol.id)}
                                                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${formData.latePenalty === pol.id
                                                        ? 'border-red-500 bg-white shadow-md'
                                                        : 'border-transparent bg-white/50 hover:bg-white transition-colors'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs font-bold text-slate-800">{pol.label}</span>
                                                        {formData.latePenalty === pol.id && <CheckCircle2 size={14} className="text-red-500" />}
                                                    </div>
                                                    <p className="text-[10px] text-slate-500">{pol.desc}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
                            <div className="text-center mb-10">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Eye size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">Review Assignment Design</h3>
                                <p className="text-sm text-slate-500">Ensure the assignment meets the misinterpretation-proof criteria</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Target & Outcome</p>
                                        <div className="space-y-2">
                                            <p className="text-sm font-bold text-slate-800">{formData.title}</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-bold uppercase">{formData.type}</span>
                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-[10px] font-bold uppercase">{formData.competency}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Evaluation Logic</p>
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-600 font-medium">Rubric criteria count: <b>{formData.rubric.criteria.length}</b></p>
                                            <p className="text-xs text-slate-600 font-medium">Late Policy: <b>{formData.latePenalty}</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Submission Setup</p>
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-600 font-medium">Mode: <b>{formData.isGroup ? 'Group Project' : 'Individual Task'}</b></p>
                                            <div className="flex flex-wrap gap-2">
                                                {formData.submissionFormat.map(f => (
                                                    <span key={f} className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-medium">{f}</span>
                                                ))}
                                            </div>
                                            <p className="text-xs text-slate-600 font-medium">Attachments: <b>{formData.attachments.length} files</b></p>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
                                        <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-3">Compliance Check</p>
                                        <div className="flex items-start gap-3">
                                            <Shield size={20} className="mt-1" />
                                            <p className="text-xs font-medium leading-relaxed italic">
                                                "I confirm that this assignment follows the pedagogical framework and the rubric is aligned with learning outcomes."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <Upload size={16} className="text-blue-500" />
                                        8. Attach Resources / Guidelines
                                    </label>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Optional</p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {formData.attachments.map((file, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                                                <FileText size={14} className="text-blue-500" />
                                                <span className="text-xs font-medium text-slate-700">{file.name}</span>
                                                <button
                                                    onClick={() => {
                                                        const updated = formData.attachments.filter((_, i) => i !== idx);
                                                        updateFormData('attachments', updated);
                                                    }}
                                                    className="p-1 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files);
                                                const newAttachments = files.map(f => ({ name: f.name, size: f.size }));
                                                updateFormData('attachments', [...formData.attachments, ...newAttachments]);
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 group-hover:border-blue-400 group-hover:bg-blue-50/50 transition-all">
                                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                                                <Upload size={24} />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xs font-bold text-slate-700">Click or drag files to upload</p>
                                                <p className="text-[10px] text-slate-400 mt-1 font-medium">PDF, DOCX, ZIP or Images (Max 10MB)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-200 mt-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertCircle className="text-yellow-600" size={18} />
                                    <p className="text-xs font-bold text-yellow-800 uppercase tracking-wide">Validation Warning</p>
                                </div>
                                <p className="text-[10px] text-yellow-700 leading-relaxed font-medium">
                                    Ensure instructions are step-by-step. If a student can misinterpret the task, this assignment will be flagged for review by the HOD.
                                </p>
                            </div>
                        </div>
                    )}

                    {currentStep === 7 && (
                        /* Step 7: Assignment Distribution (Screen 206) */
                        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
                            {/* AI5 Automation Banner */}
                            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
                                    <Sparkles size={100} />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-bold flex items-center gap-2 mb-2">
                                        <Zap size={18} />
                                        AI5 Distribution Engine
                                    </h4>
                                    <p className="text-xs opacity-90 leading-relaxed max-w-lg">
                                        AI5 will automatically handle student notifications, periodic reminders, and flag missing submissions for you.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Target Audience */}
                                <section className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <Users size={16} className="text-blue-500" />
                                        1. Target Audience Selection
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { id: 'class', label: 'Entire Class', desc: 'All 32 enrolled students' },
                                            { id: 'groups', label: 'Specific Groups', desc: 'Select remedial or project groups' },
                                            { id: 'individuals', label: 'Individual Students', desc: 'Differentiated assignment' }
                                        ].map(target => (
                                            <button
                                                key={target.id}
                                                onClick={() => setFormData(prev => ({
                                                    ...prev,
                                                    distribution: { ...prev.distribution, target: target.id }
                                                }))}
                                                className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${formData.distribution.target === target.id
                                                        ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                                                        : 'border-slate-100 hover:border-blue-200'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-bold text-slate-800">{target.label}</span>
                                                    {formData.distribution.target === target.id && <CheckCircle2 size={14} className="text-blue-500" />}
                                                </div>
                                                <p className="text-[10px] text-slate-500">{target.desc}</p>
                                            </button>
                                        ))}

                                        {formData.distribution.target === 'groups' && (
                                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 animate-in slide-in-from-top-2">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Select Groups</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Group A', 'Group B', 'Remedial Group'].map(g => (
                                                        <button key={g} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-blue-300">
                                                            {g}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>

                                {/* Scheduling & Automation */}
                                <section className="space-y-6">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Clock size={16} className="text-purple-500" />
                                            2. Scheduling
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Release Date</p>
                                                <input
                                                    type="date"
                                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold focus:border-purple-400 focus:outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Release Time</p>
                                                <input
                                                    type="time"
                                                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold focus:border-purple-400 focus:outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-3">
                                            <Sparkles size={14} className="text-purple-500" />
                                            <p className="text-[10px] text-purple-700 font-medium leading-relaxed">
                                                <b>AI5 Suggestion:</b> Based on current workload, release on Friday at 4 PM to maximize weekend engagement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-slate-50">
                                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                            <Bell size={16} className="text-orange-500" />
                                            3. Auto-Automation (AI5)
                                        </label>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'notifyOnRelease', label: 'Notify students on release', icon: <Send size={14} /> },
                                                { id: 'reminders', label: 'Send reminders before deadline', icon: <Clock size={14} /> },
                                                { id: 'flagMissing', label: 'Flag missing submissions', icon: <AlertCircle size={14} /> }
                                            ].map(opt => (
                                                <label key={opt.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer hover:border-orange-200 transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-white rounded-lg text-slate-400">
                                                            {opt.icon}
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-700">{opt.label}</span>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.distribution[opt.id]}
                                                        onChange={(e) => setFormData(prev => ({
                                                            ...prev,
                                                            distribution: { ...prev.distribution, [opt.id]: e.target.checked }
                                                        }))}
                                                        className="w-5 h-5 rounded-lg border-2 border-slate-300 text-orange-500 focus:ring-orange-500"
                                                    />
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Final Confirmation Footer */}
                            <div className="p-6 bg-slate-900 rounded-[2rem] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 backdrop-blur-md">
                                        <ListChecks size={28} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">Final Review Complete</h5>
                                        <p className="text-xs opacity-60 font-medium">Assignment is ready for distribution.</p>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                                    Distribute Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-50 md:ml-64 flex justify-between items-center bg-slate-50/50">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`px-8 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 ${currentStep === 1 ? 'opacity-0' : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 active:scale-95'
                            }`}
                    >
                        <ChevronLeft size={20} />
                        Back
                    </button>

                    <div className="flex items-center gap-4">
                        <p className="text-xs font-bold text-slate-400 hidden lg:block">Draft auto-saved at 12:42 PM</p>
                        <button
                            onClick={handleNext}
                            disabled={currentStep === totalSteps || (currentStep === 1 && !formData.type) || (currentStep === 1 && !formData.title)}
                            className="px-10 py-3 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
                        >
                            {currentStep === totalSteps ? 'Finalize' : 'Continue'}
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignmentWizard;
