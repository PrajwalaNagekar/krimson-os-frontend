/**
 * @component CreateAcademicYear
 * @description Form to create and configure a new academic year with terms, holidays, and assessment windows
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Plus,
  Trash2,
  Upload,
  FileText,
  Info,
  Save,
} from "lucide-react";
import { ACADEMIC_YEAR_DATA } from "../../../../data/coordinatorData";

const CreateAcademicYear = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    yearName: "",
    startDate: "",
    endDate: "",
    terms: [
      {
        id: 1,
        name: "Term 1",
        startDate: "",
        endDate: "",
        teachingWeeks: 0,
        revisionWeeks: 0,
        assessmentWeeks: 0,
      },
    ],
    holidays: {
      school: [],
      public: [],
      training: [],
      events: [],
    },
    assessmentWindows: {
      diagnostic: { start: "", end: "" },
      formative: { start: "", end: "" },
      summative: { start: "", end: "" },
      project: { start: "", end: "" },
    },
    artifacts: {
      annual: null,
      term: null,
      lesson: null,
    },
  });

  const handleAddTerm = () => {
    setFormData({
      ...formData,
      terms: [
        ...formData.terms,
        {
          id: formData.terms.length + 1,
          name: `Term ${formData.terms.length + 1}`,
          startDate: "",
          endDate: "",
          teachingWeeks: 0,
          revisionWeeks: 0,
          assessmentWeeks: 0,
        },
      ],
    });
  };

  const handleRemoveTerm = (id) => {
    setFormData({
      ...formData,
      terms: formData.terms.filter((term) => term.id !== id),
    });
  };

  const handleTermChange = (id, field, value) => {
    setFormData({
      ...formData,
      terms: formData.terms.map((term) =>
        term.id === id ? { ...term, [field]: value } : term,
      ),
    });
  };

  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        artifacts: { ...formData.artifacts, [type]: file },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Academic Year Data:", formData);
    // TODO: API integration
    navigate("/dashboard/coordinator/academic-year");
  };

  return (
    <div className="w-full">
      <div className="min-h-screen pb-10 animate-fadeIn">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 p-8 text-white">
            <button
              onClick={() => navigate("/dashboard/coordinator/academic-year")}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-medium">Back to Academic Year</span>
            </button>
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={32} />
              <h1 className="text-4xl font-bold">Create Academic Year</h1>
            </div>
            <p className="text-white/90 max-w-2xl">
              Configure academic year structure, terms, holidays, and assessment
              windows
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Academic Year Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Academic Year Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Academic Year Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2025-2026"
                  value={formData.yearName}
                  onChange={(e) =>
                    setFormData({ ...formData, yearName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Term Structure */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-pink-500 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Term Structure
                </h2>
              </div>
              <button
                type="button"
                onClick={handleAddTerm}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Plus size={18} />
                Add Term
              </button>
            </div>

            {/* Document Structure Info */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-400 p-4 rounded-lg mb-6">
              <div className="flex gap-3">
                <Info className="text-cyan-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    Document Structure:
                  </p>
                  <div className="text-sm text-gray-700 font-mono">
                    Academic Year
                    <br />
                    &nbsp;├── Term 1<br />
                    &nbsp;│&nbsp;&nbsp;&nbsp;├── Teaching Weeks
                    <br />
                    &nbsp;│&nbsp;&nbsp;&nbsp;├── Revision
                    <br />
                    &nbsp;│&nbsp;&nbsp;&nbsp;└── Assessments
                    <br />
                    &nbsp;└── Term 2<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Teaching Weeks
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Projects
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Final Assessments
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {formData.terms.map((term, index) => (
                <div
                  key={term.id}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-blue-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {term.name}
                    </h3>
                    {formData.terms.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTerm(term.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Term Name
                      </label>
                      <input
                        type="text"
                        value={term.name}
                        onChange={(e) =>
                          handleTermChange(term.id, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={term.startDate}
                        onChange={(e) =>
                          handleTermChange(term.id, "startDate", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={term.endDate}
                        onChange={(e) =>
                          handleTermChange(term.id, "endDate", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Teaching Weeks
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={term.teachingWeeks}
                        onChange={(e) =>
                          handleTermChange(
                            term.id,
                            "teachingWeeks",
                            parseInt(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Revision Weeks
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={term.revisionWeeks}
                        onChange={(e) =>
                          handleTermChange(
                            term.id,
                            "revisionWeeks",
                            parseInt(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Assessment Weeks
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={term.assessmentWeeks}
                        onChange={(e) =>
                          handleTermChange(
                            term.id,
                            "assessmentWeeks",
                            parseInt(e.target.value),
                          )
                        }
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Holiday & Non-Instructional Days */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Holiday & Non-Instructional Days
              </h2>
            </div>

            {/* System Impact Info */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-4 rounded-lg mb-6">
              <div className="flex gap-3">
                <Info className="text-pink-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    System Impact:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {ACADEMIC_YEAR_DATA.systemImpact.holidays.map(
                      (impact, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-pink-500">✓</span> {impact}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACADEMIC_YEAR_DATA.holidayTypes.map((type) => (
                <div key={type.id}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {type.label}
                  </label>
                  <textarea
                    rows="3"
                    placeholder={`Add ${type.label.toLowerCase()} (one per line)`}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 transition-all outline-none resize-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Exam & Assessment Windows */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-white font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Exam & Assessment Windows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACADEMIC_YEAR_DATA.assessmentWindowTypes.map((window) => (
                <div
                  key={window.id}
                  className="p-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100"
                >
                  <h3 className="font-bold text-gray-800 mb-4">
                    {window.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Planning Artifacts Upload */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Planning Artifacts Upload
              </h2>
            </div>

            {/* LMS Linkage Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
              <div className="flex gap-3">
                <Info className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    LMS Must Link:
                  </p>
                  <p className="text-sm text-gray-700">
                    Lesson Plan → Lesson Content → Assessment
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {ACADEMIC_YEAR_DATA.planningArtifacts.map((artifact) => (
                <div
                  key={artifact.id}
                  className="p-5 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl border border-purple-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        {artifact.label}
                        {artifact.required && (
                          <span className="text-xs text-red-500 font-normal">
                            (Required)
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {artifact.description}
                      </p>
                    </div>
                  </div>
                  <label className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 cursor-pointer transition-all group">
                    <Upload
                      size={20}
                      className="text-gray-400 group-hover:text-cyan-500"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600">
                        {formData.artifacts[artifact.id]
                          ? formData.artifacts[artifact.id].name
                          : "Choose file or drag here"}
                      </span>
                    </div>
                    <FileText
                      size={20}
                      className="text-gray-300 group-hover:text-cyan-400"
                    />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileUpload(artifact.id, e)}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard/coordinator/academic-year")}
              className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Save size={20} />
              Create Academic Year
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAcademicYear;
