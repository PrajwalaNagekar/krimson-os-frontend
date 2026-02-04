import React, { useState } from 'react';
import { X, Send, AlertCircle, Calendar, MessageSquare } from 'lucide-react';

const EditRequestModal = ({ isOpen, onClose, selectedDate, studentCount }) => {
    const [reason, setReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setReason('');
            }, 2000);
        }, 1500);
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fadeIn"
                onClick={onClose}
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto animate-scaleIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                    <AlertCircle size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Attendance Edit Request</h2>
                                    <p className="text-sm opacity-90">For past date: {new Date(selectedDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {isSuccess ? (
                            <div className="text-center py-8 animate-fadeIn">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Request Submitted!</h3>
                                <p className="text-slate-500">Your request to edit attendance for {new Date(selectedDate).toLocaleDateString()} has been sent to the administration.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 flex items-start gap-3">
                                    <Calendar className="text-orange-500 mt-0.5" size={20} />
                                    <div>
                                        <p className="text-sm font-bold text-orange-800">Past Date Restriction</p>
                                        <p className="text-xs text-orange-700">Attendance for previous days is locked. You must provide a valid reason to request an unlock for editing.</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        <MessageSquare size={16} className="text-slate-400" />
                                        Reason for Change
                                    </label>
                                    <textarea
                                        required
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        placeholder="Explain why you need to modify this record (e.g., Incorrect marking, late entry update, etc.)"
                                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-orange-400 focus:outline-none transition-colors min-h-[120px] resize-none"
                                    />
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-xs text-slate-500">
                                        Submitting for <span className="font-bold text-slate-700">{studentCount} Students</span>
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !reason.trim()}
                                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-50 active:scale-95"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Submit Request
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditRequestModal;
