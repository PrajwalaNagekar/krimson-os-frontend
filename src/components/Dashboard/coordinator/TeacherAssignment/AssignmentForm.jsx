import React, { useState, useMemo } from "react";
import {
  Plus,
  X,
  Calendar,
  Users,
  Briefcase,
  Clock,
  BookOpen,
  Award,
} from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../../data/coordinatorData";
import TeacherLoadSummary from "./TeacherLoadSummary";
import ValidationAlerts from "./ValidationAlerts";

const AssignmentForm = ({
  onAddAssignment,
  editMode,
  editData,
  onCancelEdit,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [formData, setFormData] = useState(
    editData || {
      teacherId: "",
      gradeId: "",
      sectionId: "",
      subjectId: "",
      role: "primary",
      periodsPerWeek: "",
      isDoublePeriod: false,
      isLabPeriod: false,
      isRotational: false,
      hasNonTeachingDuties: false,
      // Support Teacher specific fields
      roleSplit: "instruction",
      isSharedTeaching: false,
      // Substitute Teacher specific fields
      effectiveFrom: "",
      effectiveTo: "",
      isTemporary: false,
      substituteReason: "",
    },
  );

  // Get selected teacher for load summary
  const selectedTeacher = useMemo(() => {
    if (!formData.teacherId) return null;
    return TEACHER_ASSIGNMENT_DATA.teachers.find(
      (t) => t.id === formData.teacherId,
    );
  }, [formData.teacherId]);

  // Get available sections based on selected grade
  const availableSections = useMemo(() => {
    if (!formData.gradeId) return TEACHER_ASSIGNMENT_DATA.sections;

    const grade = TEACHER_ASSIGNMENT_DATA.grades.find(
      (g) => g.id === formData.gradeId,
    );
    if (!grade) return TEACHER_ASSIGNMENT_DATA.sections;

    return TEACHER_ASSIGNMENT_DATA.sections.filter((section) => {
      if (section.type === "standard") return true;
      if (section.applicableGrades) {
        return section.applicableGrades.includes(formData.gradeId);
      }
      return true;
    });
  }, [formData.gradeId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlerts([]);
    const newAlerts = [];

    // Validation: Check all required fields
    if (
      !formData.teacherId ||
      !formData.gradeId ||
      !formData.sectionId ||
      !formData.subjectId ||
      !formData.periodsPerWeek
    ) {
      newAlerts.push({
        id: "missing-fields",
        type: "error",
        title: "Missing Required Fields",
        message: "Please fill in all required fields before submitting.",
      });
      setAlerts(newAlerts);
      return;
    }

    // Substitute-specific validation
    if (formData.role === "substitute") {
      if (!formData.effectiveFrom || !formData.effectiveTo) {
        newAlerts.push({
          id: "missing-dates",
          type: "error",
          title: "Missing Dates",
          message:
            "Substitute teachers require Effective From and Effective To dates.",
        });
        setAlerts(newAlerts);
        return;
      }

      if (new Date(formData.effectiveTo) <= new Date(formData.effectiveFrom)) {
        newAlerts.push({
          id: "invalid-dates",
          type: "error",
          title: "Invalid Date Range",
          message: "Effective To date must be after Effective From date.",
        });
        setAlerts(newAlerts);
        return;
      }
    }

    // Validation: Check periods range
    const periods = parseInt(formData.periodsPerWeek);
    if (
      periods < TEACHER_ASSIGNMENT_DATA.validationRules.minPeriodsPerWeek ||
      periods > TEACHER_ASSIGNMENT_DATA.validationRules.maxPeriodsPerWeek
    ) {
      newAlerts.push({
        id: "invalid-periods",
        type: "error",
        title: "Invalid Periods",
        message: `Periods per week must be between ${TEACHER_ASSIGNMENT_DATA.validationRules.minPeriodsPerWeek} and ${TEACHER_ASSIGNMENT_DATA.validationRules.maxPeriodsPerWeek}.`,
      });
      setAlerts(newAlerts);
      return;
    }

    // Validation: Check teacher overload
    if (selectedTeacher) {
      const newTotal = selectedTeacher.currentPeriods + periods;
      if (
        newTotal > TEACHER_ASSIGNMENT_DATA.validationRules.overloadThreshold
      ) {
        newAlerts.push({
          id: "overload-warning",
          type: "warning",
          title: "Teacher Overload Warning",
          message: `This assignment will bring ${selectedTeacher.name}'s total to ${newTotal} periods, exceeding the recommended limit of ${TEACHER_ASSIGNMENT_DATA.validationRules.overloadThreshold}.`,
          details: "Consider assigning a support teacher or reducing periods.",
        });
      }
    }

    if (newAlerts.length > 0 && newAlerts[0].type === "warning") {
      setAlerts(newAlerts);
    }

    onAddAssignment(formData);

    // Reset form
    setFormData({
      teacherId: "",
      gradeId: "",
      sectionId: "",
      subjectId: "",
      role: "primary",
      periodsPerWeek: "",
      isDoublePeriod: false,
      isLabPeriod: false,
      isRotational: false,
      hasNonTeachingDuties: false,
      roleSplit: "instruction",
      isSharedTeaching: false,
      effectiveFrom: "",
      effectiveTo: "",
      isTemporary: false,
      substituteReason: "",
    });
    setAlerts([]);
    setIsFormOpen(false);
    if (onCancelEdit) onCancelEdit();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "gradeId") {
      setFormData((prev) => ({ ...prev, gradeId: value, sectionId: "" }));
    }

    if (name === "role") {
      setFormData((prev) => ({
        ...prev,
        role: value,
        effectiveFrom: value !== "substitute" ? "" : prev.effectiveFrom,
        effectiveTo: value !== "substitute" ? "" : prev.effectiveTo,
        isTemporary: value === "substitute",
        substituteReason: value !== "substitute" ? "" : prev.substituteReason,
        roleSplit: value === "support" ? "instruction" : prev.roleSplit,
        isSharedTeaching: value === "support",
      }));
    }
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setAlerts([]);
    setFormData({
      teacherId: "",
      gradeId: "",
      sectionId: "",
      subjectId: "",
      role: "primary",
      periodsPerWeek: "",
      isDoublePeriod: false,
      isLabPeriod: false,
      isRotational: false,
      hasNonTeachingDuties: false,
      roleSplit: "instruction",
      isSharedTeaching: false,
      effectiveFrom: "",
      effectiveTo: "",
      isTemporary: false,
      substituteReason: "",
    });
    if (onCancelEdit) onCancelEdit();
  };

  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter((alert) => alert.id !== alertId));
  };

  if (!isFormOpen && !editMode) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-xl">
              <Briefcase className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Teacher Assignment
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Assign teachers to grades, sections, and subjects
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-8 py-4 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            <span>New Assignment</span>
          </button>
        </div>
      </div>
    );
  }

  // Get role-specific styling and info
  const getRoleConfig = () => {
    switch (formData.role) {
      case "primary":
        return {
          icon: "🟢",
          color: "green",
          gradient: "from-green-500 to-emerald-500",
          bgGradient: "from-green-50 to-emerald-50",
          borderColor: "border-green-400",
          title: "Primary (Lead Teacher)",
          subtitle:
            "Full Permanent Assignment - Primary teacher with complete academic ownership",
        };
      case "support":
        return {
          icon: "🟡",
          color: "yellow",
          gradient: "from-yellow-500 to-amber-500",
          bgGradient: "from-yellow-50 to-amber-50",
          borderColor: "border-yellow-400",
          title: "Support Teacher",
          subtitle:
            "Co-Teaching / Shared Assignment - Secondary teaching responsibility",
        };
      case "substitute":
        return {
          icon: "🔵",
          color: "blue",
          gradient: "from-blue-500 to-indigo-500",
          bgGradient: "from-blue-50 to-indigo-50",
          borderColor: "border-blue-400",
          title: "Substitute Teacher",
          subtitle:
            "Temporary / Time-Bound Assignment - Leave replacement with auto-expiry",
        };
      default:
        return {
          icon: "",
          color: "",
          gradient: "",
          bgGradient: "",
          borderColor: "",
          title: "",
          subtitle: "",
        };
    }
  };

  const roleConfig = getRoleConfig();

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div
        className={`bg-gradient-to-r ${roleConfig.bgGradient} border-b-4 ${roleConfig.borderColor} p-8`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`p-4 bg-gradient-to-br ${roleConfig.gradient} rounded-2xl shadow-lg`}
            >
              <Briefcase className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {editMode ? "Edit Assignment" : "New Assignment"}
                </h2>
                {formData.role && (
                  <span className="text-2xl">{roleConfig.icon}</span>
                )}
              </div>
              {formData.role && (
                <div className="space-y-1">
                  <p
                    className={`text-sm font-bold text-${roleConfig.color}-700`}
                  >
                    {roleConfig.title}
                  </p>
                  <p className="text-sm text-gray-600 max-w-2xl">
                    {roleConfig.subtitle}
                  </p>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleCancel}
            className="p-3 text-gray-500 hover:text-gray-700 hover:bg-white/80 rounded-xl transition-all duration-200 hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8">
        {/* Validation Alerts */}
        {alerts.length > 0 && (
          <div className="mb-6">
            <ValidationAlerts alerts={alerts} onDismiss={dismissAlert} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Academic Context Section */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                Academic Context
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Grade Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Grade <span className="text-red-500">*</span>
                </label>
                <select
                  name="gradeId"
                  value={formData.gradeId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-cyan-400"
                >
                  <option value="">Choose a grade...</option>
                  {TEACHER_ASSIGNMENT_DATA.grades.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Section Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Section <span className="text-red-500">*</span>
                </label>
                <select
                  name="sectionId"
                  value={formData.sectionId}
                  onChange={handleChange}
                  required
                  disabled={!formData.gradeId}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-cyan-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:hover:border-gray-300"
                >
                  <option value="">Choose a section...</option>
                  {availableSections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  name="subjectId"
                  value={formData.subjectId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-cyan-400"
                >
                  <option value="">Choose a subject...</option>
                  {TEACHER_ASSIGNMENT_DATA.subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Teacher Assignment Section */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                Teacher Assignment
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Teacher Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Select Teacher <span className="text-red-500">*</span>
                </label>
                <select
                  name="teacherId"
                  value={formData.teacherId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-cyan-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-cyan-500"
                >
                  <option value="">Choose a teacher...</option>
                  {TEACHER_ASSIGNMENT_DATA.teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} - {teacher.specialization}
                    </option>
                  ))}
                </select>
              </div>

              {/* Teacher Role */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Teacher Role <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-cyan-300 rounded-xl focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-cyan-500"
                >
                  {TEACHER_ASSIGNMENT_DATA.teacherRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Teacher Load Summary */}
            {selectedTeacher && (
              <div className="mt-4">
                <TeacherLoadSummary teacher={selectedTeacher} />
              </div>
            )}
          </div>

          {/* Support Teacher Specific Fields */}
          {formData.role === "support" && (
            <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-400 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-yellow-900 uppercase tracking-wide">
                  Co-Teaching Configuration
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Role Split */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Role Split <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="roleSplit"
                    value={formData.roleSplit}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-yellow-400 rounded-xl focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-yellow-500"
                  >
                    <option value="instruction">
                      📚 Instruction (Teaching)
                    </option>
                    <option value="assessment">
                      📝 Assessment (Grading & Evaluation)
                    </option>
                    <option value="intervention">
                      🎯 Intervention (Remedial Support)
                    </option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    Define the support teacher's primary responsibility
                  </p>
                </div>

                {/* Shared Teaching Indicator */}
                <div className="flex items-center">
                  <label className="flex items-center gap-4 p-4 border-2 border-yellow-400 rounded-xl bg-white hover:bg-yellow-50 cursor-pointer transition-all shadow-sm hover:shadow-md w-full">
                    <input
                      type="checkbox"
                      name="isSharedTeaching"
                      checked={formData.isSharedTeaching}
                      onChange={handleChange}
                      className="w-6 h-6 text-yellow-600 border-2 border-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-500/20"
                    />
                    <div>
                      <span className="font-bold text-gray-900 block">
                        Shared Teaching
                      </span>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Multiple support teachers allowed
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mt-6">
                <p className="text-sm text-yellow-900 font-semibold">
                  <strong className="text-yellow-800">💡 Note:</strong> Support
                  teachers work under the Primary teacher and share teaching
                  responsibilities.
                </p>
              </div>
            </div>
          )}

          {/* Substitute Teacher Specific Fields */}
          {formData.role === "substitute" && (
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-400 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wide">
                  Temporary Assignment Configuration
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Effective From Date */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Effective From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="effectiveFrom"
                    value={formData.effectiveFrom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-blue-400 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-blue-500"
                  />
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    📅 Start date of substitute assignment
                  </p>
                </div>

                {/* Effective To Date */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Effective To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="effectiveTo"
                    value={formData.effectiveTo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-blue-400 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-blue-500"
                  />
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    ⏰ End date (assignment will auto-expire)
                  </p>
                </div>
              </div>

              {/* Substitute Reason */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Reason for Substitution
                </label>
                <textarea
                  name="substituteReason"
                  value={formData.substituteReason}
                  onChange={handleChange}
                  rows="4"
                  placeholder="e.g., Medical Leave, Conference Attendance, Maternity Leave..."
                  className="w-full px-4 py-3.5 border-2 border-blue-400 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-white text-gray-900 font-medium shadow-sm hover:border-blue-500"
                />
              </div>

              <div className="bg-blue-100 border-2 border-blue-400 rounded-xl p-4 mt-6">
                <p className="text-sm text-blue-900 font-semibold">
                  <strong className="text-blue-800">⏱️ Note:</strong> This is a
                  temporary assignment for leave replacement. Assignment will
                  automatically expire after the end date.
                </p>
              </div>
            </div>
          )}

          {/* Teaching Load Configuration */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                Teaching Load Configuration
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Periods Per Week */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Periods per Week <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="periodsPerWeek"
                  value={formData.periodsPerWeek}
                  onChange={handleChange}
                  min={
                    TEACHER_ASSIGNMENT_DATA.validationRules.minPeriodsPerWeek
                  }
                  max={
                    TEACHER_ASSIGNMENT_DATA.validationRules.maxPeriodsPerWeek
                  }
                  required
                  placeholder="e.g., 6"
                  className="w-full px-4 py-3.5 border-2 border-purple-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all bg-white text-gray-900 font-bold text-lg shadow-sm hover:border-purple-400"
                />
                <p className="text-xs text-gray-600 mt-2 font-medium">
                  {formData.role === "support"
                    ? "✨ Partial allocation allowed for support teachers"
                    : `📊 Range: ${TEACHER_ASSIGNMENT_DATA.validationRules.minPeriodsPerWeek}-${TEACHER_ASSIGNMENT_DATA.validationRules.maxPeriodsPerWeek} periods`}
                </p>
              </div>

              {/* Contact Hours (calculated) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Contact Hours
                </label>
                <div className="w-full px-4 py-3.5 border-2 border-purple-200 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 font-bold text-lg shadow-sm">
                  {formData.periodsPerWeek
                    ? `${formData.isDoublePeriod ? parseInt(formData.periodsPerWeek) + 1 : formData.periodsPerWeek} hours`
                    : "—"}
                </div>
                <p className="text-xs text-gray-600 mt-2 font-medium">
                  🔄 Auto-calculated based on periods
                </p>
              </div>
            </div>
          </div>

          {/* Period Allocation Options - Show for Primary and Support only */}
          {(formData.role === "primary" || formData.role === "support") && (
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                  Period Allocation Options
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-4 p-4 border-2 border-teal-300 rounded-xl hover:bg-white cursor-pointer transition-all shadow-sm hover:shadow-md bg-white/70">
                  <input
                    type="checkbox"
                    name="isDoublePeriod"
                    checked={formData.isDoublePeriod}
                    onChange={handleChange}
                    className="w-6 h-6 text-teal-600 border-2 border-teal-400 rounded-lg focus:ring-4 focus:ring-teal-500/20"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Double Period
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Consecutive class sessions
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-teal-300 rounded-xl hover:bg-white cursor-pointer transition-all shadow-sm hover:shadow-md bg-white/70">
                  <input
                    type="checkbox"
                    name="isLabPeriod"
                    checked={formData.isLabPeriod}
                    onChange={handleChange}
                    className="w-6 h-6 text-teal-600 border-2 border-teal-400 rounded-lg focus:ring-4 focus:ring-teal-500/20"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Lab Period
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Practical/laboratory session
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-teal-300 rounded-xl hover:bg-white cursor-pointer transition-all shadow-sm hover:shadow-md bg-white/70">
                  <input
                    type="checkbox"
                    name="isRotational"
                    checked={formData.isRotational}
                    onChange={handleChange}
                    className="w-6 h-6 text-teal-600 border-2 border-teal-400 rounded-lg focus:ring-4 focus:ring-teal-500/20"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Rotational Schedule
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Alternating schedule pattern
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-teal-300 rounded-xl hover:bg-white cursor-pointer transition-all shadow-sm hover:shadow-md bg-white/70">
                  <input
                    type="checkbox"
                    name="hasNonTeachingDuties"
                    checked={formData.hasNonTeachingDuties}
                    onChange={handleChange}
                    className="w-6 h-6 text-teal-600 border-2 border-teal-400 rounded-lg focus:ring-4 focus:ring-teal-500/20"
                  />
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Non-Teaching Duties
                    </span>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Additional responsibilities
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
            <button
              type="submit"
              className="flex-1 max-w-xs py-4 px-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <Award className="h-5 w-5" />
              {editMode ? "Update Assignment" : "Assign Teacher"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-4 bg-gray-200 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-300 transition-all duration-200 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignmentForm;
