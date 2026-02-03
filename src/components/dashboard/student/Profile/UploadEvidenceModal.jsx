import React, { useState } from 'react';
import { X, Upload, FileText, Image, Film, Plus } from 'lucide-react';

const UploadEvidenceModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Project',
    tags: '',
    visibility: 'Portfolio'
  });

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here (mock)
    alert("File drop simulated!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
        ...formData,
        date: new Date().toISOString().split('T')[0],
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60", // Placeholder
        type: formData.category,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        showcase: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-slate-100 p-6 flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Upload Evidence</h2>
                <p className="text-slate-500 text-sm">Add new work to your portfolio</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors">
                <X size={24} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* Upload Area */}
            <div 
                className={`relative border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center text-center transition-all ${
                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-blue-500">
                    <Upload size={32} />
                </div>
                <h3 className="font-bold text-lg text-slate-700 mb-2">Drag & Drop files here</h3>
                <p className="text-slate-500 text-sm mb-6 max-w-xs">Support for Images, Videos, PDFs and Documents. Max size 50MB.</p>
                
                <div className="flex gap-4">
                    <button type="button" className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 hover:shadow-sm transition-all text-sm flex items-center gap-2">
                        <Image size={16} /> Photos
                    </button>
                    <button type="button" className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 hover:shadow-sm transition-all text-sm flex items-center gap-2">
                        <Film size={16} /> Videos
                    </button>
                    <button type="button" className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 hover:shadow-sm transition-all text-sm flex items-center gap-2">
                        <FileText size={16} /> Document
                    </button>
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                    <input 
                        required
                        type="text" 
                        placeholder="e.g. Science Fair Robot" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                    <textarea 
                        rows={4}
                        placeholder="Describe what you did, what you learned..." 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700 resize-none"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                        <select 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700 outline-none cursor-pointer"
                            value={formData.category}
                            onChange={e => setFormData({...formData, category: e.target.value})}
                        >
                            <option>Project</option>
                            <option>Lab</option>
                            <option>Assessment</option>
                            <option>Achievement</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Tags</label>
                        <input 
                            type="text" 
                            placeholder="Separate with commas" 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
                            value={formData.tags}
                            onChange={e => setFormData({...formData, tags: e.target.value})}
                        />
                    </div>
                </div>

                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Visibility</label>
                    <div className="flex gap-4">
                        {['Private', 'Teacher Only', 'Portfolio', 'Showcase'].map((opt) => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.visibility === opt ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                                    {formData.visibility === opt && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                </div>
                                <input 
                                    type="radio" 
                                    name="visibility" 
                                    value={opt} 
                                    checked={formData.visibility === opt}
                                    onChange={() => setFormData({...formData, visibility: opt})}
                                    className="hidden"
                                />
                                <span className={`text-sm font-bold transition-colors ${formData.visibility === opt ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'}`}>{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button type="button" onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors">
                    Cancel
                </button>
                <div className="flex gap-3">
                    <button type="button" className="px-6 py-3 rounded-xl font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">
                        Save Draft
                    </button>
                    <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all">
                        Upload Evidence
                    </button>
                </div>
            </div>

        </form>
      </div>
    </div>
  );
};

export default UploadEvidenceModal;
