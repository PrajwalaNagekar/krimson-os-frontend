import React, { useState, useMemo } from "react";
import AssignmentHeader from "../../../components/dashboard/coordinator/TeacherAssignment/AssignmentHeader";
import AssignmentStats from "../../../components/dashboard/coordinator/TeacherAssignment/AssignmentStats";
import AssignmentForm from "../../../components/dashboard/coordinator/TeacherAssignment/AssignmentForm";
import AssignmentList from "../../../components/dashboard/coordinator/TeacherAssignment/AssignmentList";
import { TEACHER_ASSIGNMENT_DATA } from "../../../data/coordinatorData";
import { Calendar } from "lucide-react";

/**
 * Screen: Teacher Assignment
 * Purpose: Assign teachers to specific grades and subjects
 * Features:
 * - Select academic year (current and historical)
 * - View all teachers available
 * - Assign teachers to grade and subject combinations
 * - View current assignments
 * - Remove assignments
 * - Filter by grade and subject
 * Integration: Teacher Management + Class Management
 */

const TeacherAssignment = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [assignments, setAssignments] = useState(
    TEACHER_ASSIGNMENT_DATA.assignmentsByYear["2024-25"],
  );

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
    const subject = TEACHER_ASSIGNMENT_DATA.subjects.find(
      (s) => s.id === formData.subjectId,
    );

    const newAssignment = {
      id: Date.now().toString(),
      teacherId: teacher.id,
      teacherName: teacher.name,
      gradeId: grade.id,
      gradeName: `${grade.name} ${grade.section}`,
      subjectId: subject.id,
      subjectName: subject.name,
    };

    setAssignments([...assignments, newAssignment]);
  };

  const handleRemoveAssignment = (assignmentId) => {
    // Only allow removing assignments for current year
    if (isPastYear) return;

    setAssignments(assignments.filter((a) => a.id !== assignmentId));
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
          <AssignmentForm onAddAssignment={handleAddAssignment} />
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
          isPastYear={isPastYear}
        />
      </div>
    </div>
  );
};

export default TeacherAssignment;
