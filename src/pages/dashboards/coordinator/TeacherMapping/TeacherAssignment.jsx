import React, { useState, useMemo } from "react";
import AssignmentHeader from "../../../../components/dashboard/coordinator/TeacherAssignment/AssignmentHeader";
import AssignmentStats from "../../../../components/dashboard/coordinator/TeacherAssignment/AssignmentStats";
import AssignmentForm from "../../../../components/dashboard/coordinator/TeacherAssignment/AssignmentForm";
import AssignmentList from "../../../../components/dashboard/coordinator/TeacherAssignment/AssignmentList";
import { TEACHER_ASSIGNMENT_DATA } from "../../../../data/coordinatorData";
import { Calendar } from "lucide-react";

/**
 * Screen: Teacher Assignment
 * Purpose: Assign teachers to specific grades, sections, and subjects
 * Features:
 * - Select academic year (current and historical)
 * - Assign teachers with role, periods, and period allocation options
 * - View and manage assignments with full audit trail
 * - Validation for overload, duplicates, and conflicts
 * - Edit and deactivate assignments
 * Integration: Teacher Management + Class Management + Academic Year
 */

const TeacherAssignment = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [assignments, setAssignments] = useState(
    TEACHER_ASSIGNMENT_DATA.assignmentsByYear["2024-25"],
  );
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);

  // Determine if viewing historical data
  const isPastYear = useMemo(() => {
    const yearData = TEACHER_ASSIGNMENT_DATA.academicYears.find(
      (y) => y.id === selectedYear,
    );
    return yearData?.status === "past";
  }, [selectedYear]);

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setAssignments(TEACHER_ASSIGNMENT_DATA.assignmentsByYear[year] || []);
    // Reset filters when changing year
    setSelectedGrade("all");
    setSelectedSubject("all");
    setEditMode(false);
    setEditData(null);
  };

  // Filter assignments based on grade and subject
  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const matchesGrade =
        selectedGrade === "all" || assignment.gradeId === selectedGrade;
      const matchesSubject =
        selectedSubject === "all" || assignment.subjectId === selectedSubject;
      return matchesGrade && matchesSubject;
    });
  }, [assignments, selectedGrade, selectedSubject]);

  const handleAddAssignment = (formData) => {
    // Only allow adding assignments for current year
    if (isPastYear) return;

    const teacher = TEACHER_ASSIGNMENT_DATA.teachers.find(
      (t) => t.id === formData.teacherId,
    );
    const grade = TEACHER_ASSIGNMENT_DATA.grades.find(
      (g) => g.id === formData.gradeId,
    );
    const section = TEACHER_ASSIGNMENT_DATA.sections.find(
      (s) => s.id === formData.sectionId,
    );
    const subject = TEACHER_ASSIGNMENT_DATA.subjects.find(
      (s) => s.id === formData.subjectId,
    );

    // Check for duplicate assignment
    const isDuplicate = assignments.some(
      (a) =>
        a.gradeId === formData.gradeId &&
        a.sectionId === formData.sectionId &&
        a.subjectId === formData.subjectId &&
        a.teacherId === formData.teacherId &&
        (!editMode || a.id !== editData?.id),
    );

    if (isDuplicate) {
      alert("This assignment already exists!");
      return;
    }

    const currentDate = new Date().toISOString();
    const contactHours = formData.isDoublePeriod
      ? parseInt(formData.periodsPerWeek) + 1
      : parseInt(formData.periodsPerWeek);

    if (editMode && editData) {
      // Update existing assignment
      const updatedAssignments = assignments.map((a) =>
        a.id === editData.id
          ? {
              ...a,
              teacherId: teacher.id,
              teacherName: teacher.name,
              gradeId: grade.id,
              gradeName: grade.name,
              sectionId: section.id,
              sectionName: section.name,
              subjectId: subject.id,
              subjectName: subject.name,
              role: formData.role,
              periodsPerWeek: parseInt(formData.periodsPerWeek),
              contactHours: contactHours,
              isDoublePeriod: formData.isDoublePeriod,
              isLabPeriod: formData.isLabPeriod,
              isRotational: formData.isRotational,
              hasNonTeachingDuties: formData.hasNonTeachingDuties,
              // Support teacher fields
              roleSplit:
                formData.role === "support" ? formData.roleSplit : undefined,
              isSharedTeaching:
                formData.role === "support"
                  ? formData.isSharedTeaching
                  : undefined,
              // Substitute teacher fields
              effectiveFrom:
                formData.role === "substitute"
                  ? formData.effectiveFrom
                  : undefined,
              effectiveTo:
                formData.role === "substitute"
                  ? formData.effectiveTo
                  : undefined,
              isTemporary: formData.role === "substitute",
              substituteReason:
                formData.role === "substitute"
                  ? formData.substituteReason
                  : undefined,
              lastModified: currentDate,
            }
          : a,
      );
      setAssignments(updatedAssignments);
      setEditMode(false);
      setEditData(null);
    } else {
      // Create new assignment
      const newAssignment = {
        id: Date.now().toString(),
        teacherId: teacher.id,
        teacherName: teacher.name,
        gradeId: grade.id,
        gradeName: grade.name,
        sectionId: section.id,
        sectionName: section.name,
        subjectId: subject.id,
        subjectName: subject.name,
        role: formData.role,
        periodsPerWeek: parseInt(formData.periodsPerWeek),
        contactHours: contactHours,
        isDoublePeriod: formData.isDoublePeriod,
        isLabPeriod: formData.isLabPeriod,
        isRotational: formData.isRotational,
        hasNonTeachingDuties: formData.hasNonTeachingDuties,
        // Support teacher fields
        roleSplit: formData.role === "support" ? formData.roleSplit : undefined,
        isSharedTeaching:
          formData.role === "support" ? formData.isSharedTeaching : undefined,
        // Substitute teacher fields
        effectiveFrom:
          formData.role === "substitute" ? formData.effectiveFrom : undefined,
        effectiveTo:
          formData.role === "substitute" ? formData.effectiveTo : undefined,
        isTemporary: formData.role === "substitute",
        substituteReason:
          formData.role === "substitute"
            ? formData.substituteReason
            : undefined,
        status: "active",
        assignedBy: "Dr. Priya Sharma",
        assignedDate: currentDate,
        lastModified: currentDate,
        academicYear: selectedYear,
      };

      setAssignments([...assignments, newAssignment]);
    }
  };

  const handleEditAssignment = (assignment) => {
    // Only allow editing assignments for current year
    if (isPastYear) return;

    setEditMode(true);
    setEditData(assignment);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditData(null);
  };

  const handleToggleStatus = (assignmentId) => {
    // Only allow toggling status for current year
    if (isPastYear) return;

    const updatedAssignments = assignments.map((a) =>
      a.id === assignmentId
        ? {
            ...a,
            status: a.status === "active" ? "inactive" : "active",
            lastModified: new Date().toISOString(),
          }
        : a,
    );
    setAssignments(updatedAssignments);
  };

  const handleRemoveAssignment = (assignmentId) => {
    // Only allow removing assignments for current year
    if (isPastYear) return;

    if (window.confirm("Are you sure you want to remove this assignment?")) {
      setAssignments(assignments.filter((a) => a.id !== assignmentId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Year Selector and Filters */}
        <AssignmentHeader
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
          selectedGrade={selectedGrade}
          onGradeChange={setSelectedGrade}
          selectedSubject={selectedSubject}
          onSubjectChange={setSelectedSubject}
        />

        {/* Stats Overview */}
        <AssignmentStats />

        {/* Show Assignment Form only for current year */}
        {!isPastYear && (
          <AssignmentForm
            onAddAssignment={handleAddAssignment}
            editMode={editMode}
            editData={editData}
            onCancelEdit={handleCancelEdit}
          />
        )}

        {/* Historical Data Notice */}
        {isPastYear && (
          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-blue-900">
              <div className="p-2 bg-white rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Viewing Historical Data</p>
                <p className="text-sm text-blue-700">
                  You are viewing assignments from{" "}
                  {
                    TEACHER_ASSIGNMENT_DATA.academicYears.find(
                      (y) => y.id === selectedYear,
                    )?.label
                  }
                  . Changes cannot be made to past assignments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Current/Historical Assignments List */}
        <AssignmentList
          assignments={filteredAssignments}
          onRemoveAssignment={handleRemoveAssignment}
          onEditAssignment={handleEditAssignment}
          onToggleStatus={handleToggleStatus}
          isPastYear={isPastYear}
        />
      </div>
    </div>
  );
};

export default TeacherAssignment;
