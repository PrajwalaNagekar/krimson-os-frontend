import React from 'react';
import { X, Upload } from 'lucide-react';

const PlanCreationModal = ({
    showModal,
    setShowModal,
    selectedPlanType,
    formData,
    setFormData,
    handleSubmitApproval
}) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-800">{selectedPlanType}</h3>
                        <p className="text-xs text-slate-500 font-medium">Create and submit for supervisor approval</p>
                    </div>
                    <button
                        onClick={() => setShowModal(false)}
                        className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-slate-600 transition-all shadow-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmitApproval} className="p-6 space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Plan Title</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. Kinematics Review"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Subject</label>
                            <select
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            >
                                <option value="">Select Subject</option>
                                <option value="Physics">Physics</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Class</label>
                            <input
                                type="text"
                                placeholder="e.g. Class 12-B"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                value={formData.class}
                                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Start Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Learning Objectives</label>
                        <textarea
                            rows="2"
                            placeholder="What should students learn?"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm font-medium resize-none"
                            value={formData.objectives}
                            onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                        ></textarea>
                    </div>

                    {/* Dynamic Fields for Term Plan */}
                    {selectedPlanType === 'Term Plan' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-left-4 duration-300">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Academic Term</label>
                                <select
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                    value={formData.term}
                                    onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                                >
                                    <option value="">Select Term</option>
                                    <option value="Term 1">Term 1 (Aug-Oct)</option>
                                    <option value="Term 2">Term 2 (Nov-Jan)</option>
                                    <option value="Term 3">Term 3 (Feb-Apr)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Priority Goals</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Complete Mechanics"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                    value={formData.priorityGoals}
                                    onChange={(e) => setFormData({ ...formData, priorityGoals: e.target.value })}
                                />
                            </div>
                        </div>
                    )}

                    {/* Dynamic Fields for Annual Plan */}
                    {selectedPlanType === 'Annual Plan' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Yearly Milestone</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Board Exams Prep"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                    value={formData.yearMilestone}
                                    onChange={(e) => setFormData({ ...formData, yearMilestone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">Resources Needed</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Lab equipment"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all text-sm font-medium"
                                    value={formData.resourcesNeeded}
                                    onChange={(e) => setFormData({ ...formData, resourcesNeeded: e.target.value })}
                                />
                            </div>
                        </div>
                    )}

                    <div className="pt-4 flex flex-col md:flex-row gap-3">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="flex-1 px-6 py-3 border-2 border-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
                        >
                            <Upload size={18} />
                            Submit for Approval
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlanCreationModal;
