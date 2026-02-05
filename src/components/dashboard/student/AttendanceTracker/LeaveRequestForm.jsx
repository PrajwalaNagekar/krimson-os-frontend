import React, { useState } from 'react';
import { Calendar, FileText, Send, X } from 'lucide-react';

/**
 * LeaveRequestForm Component
 * 
 * Layout: LC — Form Builder
 * Data Control: Mixed
 * AI: None
 * Purpose: Submit leave applications with a modern, premium form interface
 */
const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    attachments: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const leaveTypes = [
    'Sick Leave',
    'Medical Emergency',
    'Family Function',
    'Personal Reasons',
    'School Event',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      attachments: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: '',
        attachments: null,
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays;
    }
    return 0;
  };

  const isFormValid = formData.leaveType && formData.startDate && formData.endDate && formData.reason;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-pink-400/10 via-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Success Message */}
      {showSuccess && (
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 animate-fade-in">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">Leave request submitted successfully!</span>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl shadow-md">
            <FileText className="text-white" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Leave Request
          </h2>
        </div>
        <p className="text-sm text-slate-500 ml-16">
          Submit your leave application with supporting details
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        {/* LC — Form Builder: List-Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: List of Fields */}
          <div className="space-y-6">
            {/* Leave Type */}
            <div className="form-group">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Leave Type <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-200 appearance-none cursor-pointer font-medium text-slate-700"
                >
                  <option value="">Select leave type</option>
                  {leaveTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="form-group">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Start Date <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium text-slate-700"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              {/* End Date */}
              <div className="form-group">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  End Date <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    min={formData.startDate}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium text-slate-700"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>
            </div>

            {/* Duration Display */}
            {calculateDays() > 0 && (
              <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-2 border-blue-100 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600">Total Duration</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    {calculateDays()} {calculateDays() === 1 ? 'Day' : 'Days'}
                  </span>
                </div>
              </div>
            )}

            {/* Attachment */}
            <div className="form-group">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Supporting Documents (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
                >
                  <FileText className="text-slate-400 group-hover:text-blue-500" size={20} />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">
                    {formData.attachments ? formData.attachments.name : 'Click to upload file'}
                  </span>
                </label>
                {formData.attachments && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attachments: null }))}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1 ml-1">
                Accepted: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
              </p>
            </div>
          </div>

          {/* Right Column: Reason Field (Content) */}
          <div className="space-y-6">
            {/* Reason */}
            <div className="form-group h-full flex flex-col">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Reason for Leave <span className="text-pink-500">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={12}
                placeholder="Please provide detailed reason for your leave request..."
                className="flex-1 w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none font-medium text-slate-700 placeholder:text-slate-400"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-slate-400">
                  Min. 20 characters
                </p>
                <p className="text-xs text-slate-500 font-semibold">
                  {formData.reason.length} characters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Leave Request</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Info Footer */}
      <div className="relative z-10 mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p className="text-xs text-slate-500 text-center">
          💡 <strong>Note:</strong> Leave requests will be reviewed by your class teacher. You'll receive a notification once approved or rejected.
        </p>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
