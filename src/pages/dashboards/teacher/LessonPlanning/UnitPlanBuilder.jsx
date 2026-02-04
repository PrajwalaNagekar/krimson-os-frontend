import React, { useState } from 'react';
import { Plus, BookOpen, Calendar, Target, CheckSquare, Edit, Trash2, Search, Filter, Eye } from 'lucide-react';
import UnitPlanModal from './UnitPlanModal';

const UnitPlanBuilder = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingPlan, setEditingPlan] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterSubject, setFilterSubject] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    const [unitPlans, setUnitPlans] = useState([
        {
            id: 1,
            unitName: 'Fractions and Decimals',
            grade: 'Grade 6',
            subject: 'Mathematics',
            duration: '4',
            startDate: '2026-02-10',
            objectives: 'Students will understand the relationship between fractions and decimals, and be able to convert between them.',
            lessons: [
                { id: 1, title: 'Introduction to Fractions', duration: '2', keyConcepts: 'Numerator, Denominator, Proper/Improper fractions' },
                { id: 2, title: 'Adding and Subtracting Fractions', duration: '2', keyConcepts: 'Common denominators, simplification' },
                { id: 3, title: 'Decimal Basics', duration: '1', keyConcepts: 'Place value, decimal notation' },
                { id: 4, title: 'Converting Fractions to Decimals', duration: '2', keyConcepts: 'Division method, common conversions' }
            ],
            assessments: [
                { id: 1, type: 'quiz', title: 'Fractions Quiz', date: '2026-02-17', weightage: '20' },
                { id: 2, type: 'assignment', title: 'Decimal Conversion Worksheet', date: '2026-02-24', weightage: '15' },
                { id: 3, type: 'test', title: 'Unit Test', date: '2026-03-03', weightage: '30' }
            ],
            differentiation: 'Provide visual aids for struggling students, advanced problems for high achievers',
            remediation: 'One-on-one tutoring sessions, peer mentoring',
            status: 'Active',
            outcomesCount: 8,
            createdDate: '2026-01-15'
        },
        {
            id: 2,
            unitName: 'Electricity and Circuits',
            grade: 'Grade 9',
            subject: 'Physics',
            duration: '6',
            startDate: '2026-03-01',
            objectives: 'Students will understand basic electrical concepts and be able to design simple circuits.',
            lessons: [
                { id: 1, title: 'Introduction to Electricity', duration: '1', keyConcepts: 'Charge, current, voltage' },
                { id: 2, title: 'Ohm\'s Law', duration: '2', keyConcepts: 'Resistance, V=IR' },
                { id: 3, title: 'Series and Parallel Circuits', duration: '2', keyConcepts: 'Circuit configurations' },
                { id: 4, title: 'Circuit Design Lab', duration: '2', keyConcepts: 'Practical application' }
            ],
            assessments: [
                { id: 1, type: 'lab', title: 'Circuit Building Lab', date: '2026-03-15', weightage: '25' },
                { id: 2, type: 'project', title: 'Design Your Own Circuit', date: '2026-03-29', weightage: '35' }
            ],
            differentiation: 'Hands-on activities for kinesthetic learners, simulation software for visual learners',
            remediation: 'Extra lab time, video tutorials',
            status: 'Draft',
            outcomesCount: 12,
            createdDate: '2026-01-20'
        },
        {
            id: 3,
            unitName: 'Grammar - Verb Tenses',
            grade: 'Grade 8',
            subject: 'English',
            duration: '3',
            startDate: '2026-02-15',
            objectives: 'Students will master the use of past, present, and future tenses in writing and speaking.',
            lessons: [
                { id: 1, title: 'Present Tense Review', duration: '1', keyConcepts: 'Simple, continuous, perfect' },
                { id: 2, title: 'Past Tense Forms', duration: '2', keyConcepts: 'Regular/irregular verbs' },
                { id: 3, title: 'Future Tense Usage', duration: '1', keyConcepts: 'Will, going to, present continuous' },
                { id: 4, title: 'Mixed Tense Practice', duration: '1', keyConcepts: 'Context-based usage' }
            ],
            assessments: [
                { id: 1, type: 'quiz', title: 'Tense Identification Quiz', date: '2026-02-22', weightage: '15' },
                { id: 2, type: 'assignment', title: 'Creative Writing - Mixed Tenses', date: '2026-03-01', weightage: '25' }
            ],
            differentiation: 'Grammar games for engagement, additional examples for ESL students',
            remediation: 'Grammar worksheets, online practice exercises',
            status: 'Active',
            outcomesCount: 6,
            createdDate: '2026-01-25'
        }
    ]);

    const handleCreateNew = () => {
        setEditingPlan(null);
        setShowModal(true);
    };

    const handleEdit = (plan) => {
        setEditingPlan(plan);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this unit plan?')) {
            setUnitPlans(unitPlans.filter(p => p.id !== id));
        }
    };

    const handleSave = (planData) => {
        if (editingPlan) {
            // Update existing plan
            setUnitPlans(unitPlans.map(p => p.id === editingPlan.id ? { ...planData, id: p.id, status: p.status, createdDate: p.createdDate, outcomesCount: planData.lessons.length * 2 } : p));
        } else {
            // Create new plan
            const newPlan = {
                ...planData,
                id: Date.now(),
                status: 'Draft',
                outcomesCount: planData.lessons.length * 2,
                createdDate: new Date().toISOString().split('T')[0]
            };
            setUnitPlans([newPlan, ...unitPlans]);
        }
    };

    // Filter plans
    const filteredPlans = unitPlans.filter(plan => {
        const matchesSearch = plan.unitName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            plan.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            plan.grade.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = filterSubject === 'all' || plan.subject === filterSubject;
        const matchesStatus = filterStatus === 'all' || plan.status === filterStatus;
        return matchesSearch && matchesSubject && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700 border-green-200';
            case 'Draft': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    const getSubjectColor = (subject) => {
        const colors = {
            'Mathematics': 'from-blue-400 to-cyan-500',
            'Physics': 'from-purple-400 to-pink-500',
            'Chemistry': 'from-green-400 to-emerald-500',
            'Biology': 'from-teal-400 to-cyan-500',
            'English': 'from-orange-400 to-red-500',
            'History': 'from-amber-400 to-orange-500',
            'Geography': 'from-lime-400 to-green-500'
        };
        return colors[subject] || 'from-slate-400 to-slate-500';
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
                        Screen 194 / Unit Plan Builder
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                Unit Plan Builder
                            </h2>
                            <p className="opacity-90 font-medium text-sm md:text-base">
                                Create detailed teaching plans for complete units • {unitPlans.length} Unit{unitPlans.length !== 1 ? 's' : ''}
                            </p>
                        </div>

                        <button
                            onClick={handleCreateNew}
                            className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
                        >
                            <Plus size={20} />
                            <div className="text-left">
                                <div>Create Unit Plan</div>
                                <div className="text-[10px] opacity-70">get in app</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Units</p>
                        <BookOpen className="text-purple-400 opacity-60" size={20} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-600">{unitPlans.length}</h3>
                    <p className="text-[10px] text-slate-400 mt-1">get in app</p>
                </div>

                <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:border-green-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active</p>
                        <Target className="text-green-400 opacity-60" size={20} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                        {unitPlans.filter(p => p.status === 'Active').length}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1">get in app</p>
                </div>

                <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-orange-200 bg-white hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Drafts</p>
                        <Edit className="text-orange-400 opacity-60" size={20} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
                        {unitPlans.filter(p => p.status === 'Draft').length}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1">get in app</p>
                </div>

                <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Lessons</p>
                        <Calendar className="text-blue-400 opacity-60" size={20} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                        {unitPlans.reduce((sum, p) => sum + p.lessons.length, 0)}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1">get in app</p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search unit plans by name, subject, or grade..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-purple-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="flex gap-3">
                        <select
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                            className="px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-bold focus:border-purple-400 focus:outline-none transition-colors"
                        >
                            <option value="all">All Subjects</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="English">English</option>
                            <option value="History">History</option>
                            <option value="Geography">Geography</option>
                        </select>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-bold focus:border-purple-400 focus:outline-none transition-colors"
                        >
                            <option value="all">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Draft">Draft</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Unit Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-slate-100 hover:border-purple-200"
                    >
                        {/* Card Header with Gradient */}
                        <div className={`bg-gradient-to-r ${getSubjectColor(plan.subject)} p-6 text-white relative overflow-hidden`}>
                            <div className="absolute right-0 top-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl -mr-8 -mt-8"></div>
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-bold">
                                        {plan.grade}
                                    </span>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(plan.status)}`}>
                                        {plan.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 line-clamp-2">{plan.unitName}</h3>
                                <p className="text-sm opacity-90 font-medium">{plan.subject}</p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 space-y-4">
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                                    <Calendar className="mx-auto text-blue-500 mb-1" size={18} />
                                    <p className="text-xs text-slate-600 font-medium">Lessons</p>
                                    <p className="text-lg font-bold text-blue-600">{plan.lessons.length}</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
                                    <CheckSquare className="mx-auto text-green-500 mb-1" size={18} />
                                    <p className="text-xs text-slate-600 font-medium">Assessments</p>
                                    <p className="text-lg font-bold text-green-600">{plan.assessments.length}</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-100">
                                    <Target className="mx-auto text-purple-500 mb-1" size={18} />
                                    <p className="text-xs text-slate-600 font-medium">Outcomes</p>
                                    <p className="text-lg font-bold text-purple-600">{plan.outcomesCount}</p>
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Calendar size={16} className="text-slate-400" />
                                <span className="font-medium">Duration:</span>
                                <span className="font-bold text-slate-800">{plan.duration} weeks</span>
                            </div>

                            {/* Objectives Preview */}
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-xs text-slate-500 font-bold mb-1">Objectives</p>
                                <p className="text-sm text-slate-700 line-clamp-2">{plan.objectives}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={() => handleEdit(plan)}
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 shadow-md transition-all flex items-center justify-center gap-2"
                                >
                                    <Edit size={16} />
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(plan.id)}
                                    className="px-4 py-3 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-100 transition-all"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredPlans.length === 0 && (
                <div className="bg-white rounded-3xl p-12 text-center shadow-md">
                    <BookOpen className="mx-auto text-slate-300 mb-4" size={64} />
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No Unit Plans Found</h3>
                    <p className="text-slate-500 mb-6">
                        {searchQuery || filterSubject !== 'all' || filterStatus !== 'all'
                            ? 'Try adjusting your filters or search query'
                            : 'Create your first unit plan to get started'}
                    </p>
                    {!searchQuery && filterSubject === 'all' && filterStatus === 'all' && (
                        <button
                            onClick={handleCreateNew}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all inline-flex items-center gap-2"
                        >
                            <Plus size={20} />
                            Create Your First Unit Plan
                        </button>
                    )}
                </div>
            )}

            {/* Modal */}
            <UnitPlanModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    setEditingPlan(null);
                }}
                onSave={handleSave}
                editingPlan={editingPlan}
            />
        </div>
    );
};

export default UnitPlanBuilder;
