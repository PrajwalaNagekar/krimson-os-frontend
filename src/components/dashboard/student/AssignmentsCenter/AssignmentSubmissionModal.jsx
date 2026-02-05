import React, { useState, useRef } from 'react';
import { XCircle, Upload, FileText, Mic, Save, Send, CheckCircle, AlertCircle } from 'lucide-react';

// AssignmentSubmissionModal: Comprehensive submission interface with file, text, and audio options
const AssignmentSubmissionModal = ({ show, onClose, assignment }) => {
  const [submissionType, setSubmissionType] = useState('file'); // 'file', 'text', 'audio'
  const [file, setFile] = useState(null);
  const [textContent, setTextContent] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  if (!show || !assignment) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    setTimeout(() => setIsDraft(false), 2000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClose = () => {
    setFile(null);
    setTextContent('');
    setSubmitted(false);
    onClose();
  };

  // Submission Receipt View
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={handleClose}>
        <div 
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Submission Successful!</h3>
            <p className="text-slate-600 mb-6">Your assignment has been submitted successfully.</p>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-slate-500">Assignment:</span>
                  <span className="text-sm font-bold text-slate-700">{assignment.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-slate-500">Submitted:</span>
                  <span className="text-sm font-bold text-slate-700">{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-slate-500">Type:</span>
                  <span className="text-sm font-bold text-slate-700 capitalize">{submissionType}</span>
                </div>
                {file && (
                  <div className="flex justify-between">
                    <span className="text-sm font-bold text-slate-500">File:</span>
                    <span className="text-sm font-bold text-slate-700">{file.name}</span>
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={handleClose}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all shadow-md transform active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={handleClose}>
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 border-b border-white/20 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Upload size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Submit Assignment</h3>
              </div>
              <p className="text-sm text-white/90 font-medium">{assignment.title}</p>
            </div>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            >
              <XCircle size={24} className="text-white/80 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Submission Type Selector */}
          <div className="flex gap-3">
            <button
              onClick={() => setSubmissionType('file')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                submissionType === 'file'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileText size={18} className="inline mr-2" />
              File Upload
            </button>
            <button
              onClick={() => setSubmissionType('text')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                submissionType === 'text'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <FileText size={18} className="inline mr-2" />
              Text
            </button>
            <button
              onClick={() => setSubmissionType('audio')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                submissionType === 'audio'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Mic size={18} className="inline mr-2" />
              Audio
            </button>
          </div>

          {/* File Upload */}
          {submissionType === 'file' && (
            <div>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-3 border-dashed border-slate-300 rounded-2xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload size={32} className="text-blue-600" />
                </div>
                <p className="text-lg font-bold text-slate-700 mb-2">
                  {file ? file.name : 'Drop file here or click to browse'}
                </p>
                <p className="text-xs text-slate-500">
                  Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                </p>
              </div>
              
              {file && (
                <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-green-700">{file.name}</p>
                    <p className="text-xs text-green-600">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="p-1 hover:bg-green-100 rounded-full transition-colors"
                  >
                    <XCircle size={18} className="text-green-600" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Text Submission */}
          {submissionType === 'text' && (
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Your Response</label>
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder="Type your assignment response here..."
                className="w-full h-64 p-4 border-2 border-slate-300 rounded-xl focus:border-blue-400 focus:outline-none resize-none text-sm"
              />
              <p className="text-xs text-slate-500 mt-2">{textContent.length} characters</p>
            </div>
          )}

          {/* Audio Recording */}
          {submissionType === 'audio' && (
            <div className="text-center py-8">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
                isRecording 
                  ? 'bg-gradient-to-br from-red-400 to-pink-500 shadow-lg animate-pulse' 
                  : 'bg-gradient-to-br from-blue-100 to-indigo-100'
              }`}>
                <Mic size={48} className={isRecording ? 'text-white' : 'text-blue-600'} />
              </div>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                }`}
              >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
              {isRecording && (
                <p className="text-sm text-slate-600 mt-4">Recording in progress...</p>
              )}
            </div>
          )}

          {/* Draft Saved Indicator */}
          {isDraft && (
            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl flex items-center gap-3">
              <CheckCircle size={20} className="text-blue-600" />
              <p className="text-sm font-bold text-blue-700">Draft saved successfully!</p>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Before you submit</p>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>• Review your work for completeness and accuracy</li>
                  <li>• Check that all requirements are met</li>
                  <li>• Save a draft if you need more time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-6 border-t border-slate-200">
          <div className="flex gap-3">
            <button 
              onClick={handleSaveDraft}
              className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Draft
            </button>
            <button 
              onClick={handleSubmit}
              className="flex-1 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSubmissionModal;
