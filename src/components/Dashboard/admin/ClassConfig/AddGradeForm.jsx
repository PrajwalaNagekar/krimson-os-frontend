import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  X,
  Plus,
  Trash2,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

const AddGradeForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    gradeName: "",
    academicYear: "2025-2026",
    defaultCapacity: "",
    description: "",
    subjects: [],
  });

  const [newSubject, setNewSubject] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubject = () => {
    if (newSubject.trim() && !formData.subjects.includes(newSubject.trim())) {
      setFormData((prev) => ({
        ...prev,
        subjects: [...prev.subjects, newSubject.trim()],
      }));
      setNewSubject("");
    }
  };

  const handleRemoveSubject = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.filter((s) => s !== subject),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to save grade
    console.log("Form submitted:", formData);
    alert("Grade added successfully! (This is a mock - implement API call)");
    onBack();
  };

  const handleCancel = () => {
    if (
      Object.values(formData).some((val) =>
        Array.isArray(val) ? val.length > 0 : val !== "" && val !== "2025-2026",
      )
    ) {
      if (confirm("Are you sure you want to discard changes?")) {
        onBack();
      }
    } else {
      onBack();
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Premium Header with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-2xl">
        {/* Glass Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleCancel}
              className="p-3 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-2xl transition-all text-white shadow-lg hover:scale-105"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="text-white" size={28} />
                <h1 className="text-3xl font-black text-white drop-shadow-lg">
                  Add New Grade
                </h1>
              </div>
              <p className="text-white/90 text-sm font-medium backdrop-blur-sm">
                Create a new grade level for the academic year
              </p>
            </div>
          </div>
          <Sparkles className="text-white/40" size={48} />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information Card - Premium Design */}
        <div className="relative overflow-hidden bg-white p-8 rounded-3xl border-2 border-gradient-to-r from-cyan-100 via-blue-100 to-pink-100 shadow-xl hover:shadow-2xl transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200/20 via-blue-200/20 to-pink-200/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Basic Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Grade Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="gradeName"
                  value={formData.gradeName}
                  onChange={handleInputChange}
                  placeholder="e.g., Grade 1, Grade 2"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Academic Year <span className="text-pink-500">*</span>
                </label>
                <select
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium shadow-sm hover:border-cyan-300 cursor-pointer"
                >
                  <option value="2025-2026">2025-2026</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2026-2027">2026-2027</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Default Capacity <span className="text-pink-500">*</span>
                </label>
                <input
                  type="number"
                  name="defaultCapacity"
                  value={formData.defaultCapacity}
                  onChange={handleInputChange}
                  placeholder="e.g., 30"
                  required
                  min="1"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Optional description"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Configuration Card - Premium Design */}
        <div className="relative overflow-hidden bg-white p-8 rounded-3xl border-2 border-gradient-to-r from-pink-100 via-blue-100 to-cyan-100 shadow-xl hover:shadow-2xl transition-all">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200/20 via-blue-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-400 via-blue-400 to-cyan-400 rounded-2xl shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-black bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Subjects Configuration
              </h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Add Subjects
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  placeholder="Enter subject name"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), handleAddSubject())
                  }
                  className="flex-1 px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-pink-300"
                />
                <button
                  type="button"
                  onClick={handleAddSubject}
                  className="px-6 py-4 bg-gradient-to-br from-pink-500 via-blue-500 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-2 shadow-lg hover:scale-105"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </div>

            {/* Subjects List with Premium Design */}
            {formData.subjects.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-xs">
                    {formData.subjects.length}
                  </span>
                  Added Subjects
                </p>
                <div className="flex flex-wrap gap-3">
                  {formData.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-pink-50 via-blue-50 to-cyan-50 px-5 py-3 rounded-2xl flex items-center gap-3 border-2 border-pink-100 hover:border-pink-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <span className="text-sm font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                        {subject}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSubject(subject)}
                        className="p-1.5 text-pink-400 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 rounded-lg transition-all"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons - Premium Design */}
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <X size={20} />
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-2xl font-black hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
          >
            <Save size={20} />
            Save Grade
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGradeForm;
