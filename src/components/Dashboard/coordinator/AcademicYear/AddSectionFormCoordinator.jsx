import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  X,
  MapPin,
  Users,
  BookOpen,
  Sparkles,
  GraduationCap,
  School,
} from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const AddSectionFormCoordinator = ({ selectedGrade, onBack }) => {
  const [formData, setFormData] = useState({
    gradeId: selectedGrade?.id || "",
    sectionName: "",
    capacity: "",
    roomLocation: "",
    timetableLinked: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Section added successfully! (This is a mock - implement API call)");
    onBack();
  };

  const handleCancel = () => {
    if (
      Object.values(formData).some((val) =>
        typeof val === "boolean" ? false : val !== "",
      )
    ) {
      if (confirm("Are you sure you want to discard changes?")) {
        onBack();
      }
    } else {
      onBack();
    }
  };

  const grade = ADMIN_DATA.grades?.find((g) => g.id === formData.gradeId);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Premium Header with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-2xl">
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
                <School className="text-white" size={28} />
                <h1 className="text-3xl font-black text-white drop-shadow-lg">
                  Add New Section
                </h1>
              </div>
              <p className="text-white/90 text-sm font-medium backdrop-blur-sm">
                Create a new section for a grade
              </p>
            </div>
          </div>
          <GraduationCap className="text-white/40" size={48} />
        </div>
      </div>

      {/* Form */}
      <form on Submit={handleSubmit} className="space-y-6">
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
                  Grade <span className="text-pink-500">*</span>
                </label>
                <select
                  name="gradeId"
                  value={formData.gradeId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium shadow-sm hover:border-cyan-300 cursor-pointer"
                >
                  <option value="">Select Grade</option>
                  {ADMIN_DATA.grades?.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Section Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="sectionName"
                  value={formData.sectionName}
                  onChange={handleInputChange}
                  placeholder="e.g., Section A, Section B"
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Capacity <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <Users
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                  />
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    placeholder="e.g., 30"
                    required
                    min="1"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Room/Location
                </label>
                <div className="relative">
                  <MapPin
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400"
                  />
                  <input
                    type="text"
                    name="roomLocation"
                    value={formData.roomLocation}
                    onChange={handleInputChange}
                    placeholder="e.g., Room 101, Building A"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-sm hover:border-cyan-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSectionFormCoordinator;
