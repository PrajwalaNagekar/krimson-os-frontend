import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const EditStructure = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolProfile: { ...ADMIN_DATA.organisationStructure.schoolProfile },
    structuralRules: { ...ADMIN_DATA.organisationStructure.structuralRules },
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Saving Structure:", formData);
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
                  Edit Mode
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2 tracking-tight drop-shadow-sm">
                Edit Organisation Structure
              </h1>
              <p className="text-white/90 text-base max-w-2xl font-medium">
                Update your school's foundational profile and structural
                governance rules
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* School Profile Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-100 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                School Profile
              </h2>
              <p className="text-sm text-slate-500">
                Core identification and contact details
              </p>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <Building2 size={16} className="text-cyan-600" />
                School Name
              </label>
              <input
                type="text"
                value={formData.schoolProfile.name}
                onChange={(e) =>
                  handleChange("schoolProfile", "name", e.target.value)
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  <span className="text-blue-600">#</span>
                  Branch Code
                </label>
                <input
                  type="text"
                  value={formData.schoolProfile.code}
                  onChange={(e) =>
                    handleChange("schoolProfile", "code", e.target.value)
                  }
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-mono font-semibold text-slate-700 shadow-sm hover:shadow-md"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                  <span className="text-pink-600">📅</span>
                  Established
                </label>
                <input
                  type="text"
                  value={formData.schoolProfile.established}
                  onChange={(e) =>
                    handleChange("schoolProfile", "established", e.target.value)
                  }
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <GraduationCap size={16} className="text-purple-600" />
                Affiliation
              </label>
              <input
                type="text"
                value={formData.schoolProfile.affiliation}
                onChange={(e) =>
                  handleChange("schoolProfile", "affiliation", e.target.value)
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <MapPin size={16} className="text-indigo-600" />
                Address
              </label>
              <textarea
                value={formData.schoolProfile.address}
                onChange={(e) =>
                  handleChange("schoolProfile", "address", e.target.value)
                }
                rows={3}
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all resize-none font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <Mail size={16} className="text-teal-600" />
                Primary Email
              </label>
              <input
                type="email"
                value={formData.schoolProfile.contactConfig?.primaryEmail}
                onChange={(e) =>
                  handleChange("schoolProfile", "contactConfig", {
                    ...formData.schoolProfile.contactConfig,
                    primaryEmail: e.target.value,
                  })
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all font-mono font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <Phone size={16} className="text-emerald-600" />
                Support Phone
              </label>
              <input
                type="tel"
                value={formData.schoolProfile.contactConfig?.supportPhone}
                onChange={(e) =>
                  handleChange("schoolProfile", "contactConfig", {
                    ...formData.schoolProfile.contactConfig,
                    supportPhone: e.target.value,
                  })
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-mono font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Structural Rules Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-b border-slate-100 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Structural Rules
              </h2>
              <p className="text-sm text-slate-500">
                Academic governance and policies
              </p>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <GraduationCap size={16} className="text-pink-600" />
                Grade Range
              </label>
              <input
                type="text"
                value={formData.structuralRules.gradeRange}
                onChange={(e) =>
                  handleChange("structuralRules", "gradeRange", e.target.value)
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <span className="text-purple-600">👥</span>
                Max Capacity Per Section
              </label>
              <input
                type="number"
                value={formData.structuralRules.maxCapacityPerSection}
                onChange={(e) =>
                  handleChange(
                    "structuralRules",
                    "maxCapacityPerSection",
                    e.target.value,
                  )
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <span className="text-indigo-600">📋</span>
                Promotion Policy
              </label>
              <select
                value={formData.structuralRules.promotionPolicy}
                onChange={(e) =>
                  handleChange(
                    "structuralRules",
                    "promotionPolicy",
                    e.target.value,
                  )
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white font-semibold text-slate-700 shadow-sm hover:shadow-md"
              >
                <option>Automatic Enrollment</option>
                <option>Automatic with Merit Review</option>
                <option>Manual Approval Required</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wide">
                <span className="text-blue-600">📅</span>
                Academic Year Cycle
              </label>
              <input
                type="text"
                value={formData.structuralRules.academicYearCycle}
                onChange={(e) =>
                  handleChange(
                    "structuralRules",
                    "academicYearCycle",
                    e.target.value,
                  )
                }
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-700 shadow-sm hover:shadow-md"
              />
            </div>
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
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditStructure;
