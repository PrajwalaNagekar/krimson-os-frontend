import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, LayoutGrid, Hash, Tag, FileCode } from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const NamingConfig = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ...ADMIN_DATA.organisationStructure.namingConfiguration,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving Naming Config:", formData);
    navigate("/dashboard/admin/classes");
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      {/* Premium Header Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-6 md:p-7 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105 shadow-lg font-semibold"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
                  Configuration
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-1 tracking-tight drop-shadow-sm">
                Naming Configuration
              </h1>
              <p className="text-white/90 text-sm max-w-2xl font-medium">
                Standardize how your institution identifies and labels academic
                entities
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Save size={20} />
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Naming */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-100 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg">
              <LayoutGrid size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Class & Section Naming
              </h2>
              <p className="text-sm text-slate-500">
                Define how sections are labeled within grades
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  <Tag size={16} className="text-cyan-600" />
                  Section Pattern
                </label>
                <select
                  value={formData.sectionPattern}
                  onChange={(e) =>
                    handleChange("sectionPattern", e.target.value)
                  }
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all bg-white font-semibold text-slate-700 shadow-sm hover:shadow-md"
                >
                  <option>Alphabetical (A, B, C...)</option>
                  <option>Numeric (1, 2, 3...)</option>
                  <option>Planets (Mars, Venus...)</option>
                  <option>Colors (Red, Blue...)</option>
                </select>
                <p className="text-xs text-slate-400 pl-1">
                  Choose the naming convention for section divisions
                </p>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  <Hash size={16} className="text-blue-600" />
                  Grade Prefix
                </label>
                <input
                  type="text"
                  value={formData.gradePrefix}
                  onChange={(e) => handleChange("gradePrefix", e.target.value)}
                  placeholder="e.g. Grade, Class, Year"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
                />
                <p className="text-xs text-slate-400 pl-1">
                  Prefix used before grade numbers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ID Formats */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-b border-slate-100 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg">
              <FileCode size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Identification Formats
              </h2>
              <p className="text-sm text-slate-500">
                Configure ID patterns for students, exams, and records
              </p>
            </div>
          </div>
          <div className="p-8 space-y-8">
            {/* Student ID */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <Hash size={16} className="text-pink-600" />
                Student ID Format
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={formData.studentIdFormat}
                  onChange={(e) =>
                    handleChange("studentIdFormat", e.target.value)
                  }
                  className="flex-1 px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-mono font-semibold text-slate-700 shadow-sm hover:shadow-md"
                />
                <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 text-slate-600 rounded-2xl font-mono font-bold text-sm flex items-center shadow-sm">
                  <span className="text-slate-400 mr-2">Preview:</span>
                  <span className="text-pink-600">ST-2025-001</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pl-1">
                <span className="text-xs text-slate-500 font-semibold">
                  Variables:
                </span>
                {["{YYYY}", "{SEQ}", "{GRADE}"].map((v) => (
                  <span
                    key={v}
                    className="px-2 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-mono font-bold border border-pink-200"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Exam Code */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <FileCode size={16} className="text-purple-600" />
                Exam Code Format
              </label>
              <input
                type="text"
                value={formData.examCodeFormat}
                onChange={(e) => handleChange("examCodeFormat", e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all font-mono font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
              <p className="text-xs text-slate-400 pl-1">
                Example: YYYY-TERM-SUB generates "2025-T1-MATH"
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Save Button */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full justify-center"
          >
            <Save size={20} />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default NamingConfig;
