import React from 'react';
import { Settings, X, Plus, AlertCircle, CheckCircle, FileText } from 'lucide-react';

const ReasonModal = ({
    showReasonModal,
    setShowReasonModal,
    newReason,
    setNewReason,
    addCustomReason,
    customReasons,
    predefinedReasons,
    removeCustomReason,
    reasonOptions
}) => {
    if (!showReasonModal) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
                onClick={() => setShowReasonModal(false)}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto animate-scaleIn flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-6 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                    <Settings size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Manage Absence Reasons</h2>
                                    <p className="text-sm opacity-90 mt-1">Add custom reasons for student absences</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowReasonModal(false)}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto flex-1">
                        {/* Add New Reason */}
                        <div className="mb-6">
                            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <Plus size={18} className="text-blue-500" />
                                Add New Custom Reason
                            </h3>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newReason}
                                    onChange={(e) => setNewReason(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addCustomReason()}
                                    placeholder="Enter new reason..."
                                    className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
                                />
                                <button
                                    onClick={addCustomReason}
                                    disabled={!newReason.trim() || reasonOptions.includes(newReason.trim())}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                >
                                    <Plus size={18} />
                                    Add
                                </button>
                            </div>
                            {newReason.trim() && reasonOptions.includes(newReason.trim()) && (
                                <p className="text-xs text-orange-600 mt-2 flex items-center gap-1">
                                    <AlertCircle size={12} />
                                    This reason already exists
                                </p>
                            )}
                        </div>

                        {/* Predefined Reasons */}
                        <div className="mb-6">
                            <h3 className="font-bold text-slate-800 mb-3">Predefined Reasons</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {predefinedReasons.map(reason => (
                                    <div
                                        key={reason}
                                        className="px-4 py-3 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-xl text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                                        <span className="flex-1">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Custom Reasons */}
                        {customReasons.length > 0 && (
                            <div>
                                <h3 className="font-bold text-slate-800 mb-3">Your Custom Reasons</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {customReasons.map(reason => (
                                        <div
                                            key={reason}
                                            className="px-4 py-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl text-sm font-medium text-slate-700 flex items-center gap-2 group"
                                        >
                                            <span className="flex-1">{reason}</span>
                                            <button
                                                onClick={() => removeCustomReason(reason)}
                                                className="p-1 rounded-lg hover:bg-red-100 text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                                title="Remove custom reason"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {customReasons.length === 0 && (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                                    <FileText className="text-slate-400" size={32} />
                                </div>
                                <p className="text-sm text-slate-500">No custom reasons added yet</p>
                                <p className="text-xs text-slate-400 mt-1">Add your first custom reason above</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-4 md:p-6 bg-slate-50 border-t-2 border-slate-300 flex justify-end gap-3 flex-shrink-0">
                        <button
                            onClick={() => setShowReasonModal(false)}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
                        >
                            <CheckCircle size={20} />
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReasonModal;
