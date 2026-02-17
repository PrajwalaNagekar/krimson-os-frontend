import React, { useEffect, useMemo } from "react";
import { Check, X } from "lucide-react";

/**
 * CurriculumSelectionForm Component
 * Form for selecting framework, grade, and subject for curriculum creation
 */
const CurriculumSelectionForm = ({
  frameworks,
  grades,
  subjects,
  selectedFramework,
  setSelectedFramework,
  selectedGrade,
  setSelectedGrade,
  selectedSubject,
  setSelectedSubject,
  onConfirm,
  onCancel,
}) => {
  // Filter subjects based on selected framework and grade
  const filteredSubjects = useMemo(() => {
    if (!selectedFramework || !selectedGrade) {
      return [];
    }

    return subjects.filter(
      (subject) =>
        subject.framework === selectedFramework &&
        subject.grades.includes(selectedGrade),
    );
  }, [selectedFramework, selectedGrade, subjects]);

  // Auto-select first subject when filters change
  useEffect(() => {
    if (filteredSubjects.length > 0 && !selectedSubject) {
      setSelectedSubject(filteredSubjects[0].id);
    } else if (selectedSubject) {
      const isValid = filteredSubjects.some((s) => s.id === selectedSubject);
      if (!isValid && filteredSubjects.length > 0) {
        setSelectedSubject(filteredSubjects[0].id);
      }
    }
  }, [filteredSubjects, selectedSubject, setSelectedSubject]);

  const handleConfirm = () => {
    if (selectedFramework && selectedGrade && selectedSubject) {
      onConfirm();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          📋 Curriculum Selection
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Select framework, grade, and subject to create curriculum
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Framework Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Curriculum Framework *
          </label>
          <select
            value={selectedFramework}
            onChange={(e) => {
              setSelectedFramework(e.target.value);
              setSelectedGrade("");
              setSelectedSubject("");
            }}
            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
          >
            <option value="">Select Framework</option>
            {frameworks.map((framework) => (
              <option key={framework.id} value={framework.id}>
                {framework.name}
              </option>
            ))}
          </select>
        </div>

        {/* Grade Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Grade *
          </label>
          <select
            value={selectedGrade}
            onChange={(e) => {
              setSelectedGrade(e.target.value);
              setSelectedSubject("");
            }}
            disabled={!selectedFramework}
            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
              !selectedFramework
                ? "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <option value="">Select Grade</option>
            {grades.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={
              !selectedFramework ||
              !selectedGrade ||
              filteredSubjects.length === 0
            }
            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
              !selectedFramework ||
              !selectedGrade ||
              filteredSubjects.length === 0
                ? "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <option value="">Select Subject</option>
            {filteredSubjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
          {filteredSubjects.length > 0 &&
            selectedFramework &&
            selectedGrade && (
              <p className="text-xs text-green-600 mt-2">
                ✓ {filteredSubjects.length} subject(s) available
              </p>
            )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
        >
          <X className="w-4 h-4" />
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          disabled={!selectedFramework || !selectedGrade || !selectedSubject}
          className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
            selectedFramework && selectedGrade && selectedSubject
              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg hover:scale-105"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <Check className="w-5 h-5" />
          Confirm & Build Curriculum
        </button>
      </div>
    </div>
  );
};

export default CurriculumSelectionForm;
