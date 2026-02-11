/**
 * @component ClassConfig
 * @description Admin Screen - Comprehensive Class & Section Configuration Management
 */
import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import ClassConfigHeader from "../../../components/dashboard/admin/ClassConfig/ClassConfigHeader";
import ClassConfigStats from "../../../components/dashboard/admin/ClassConfig/ClassConfigStats";
import ClassConfigAlerts from "../../../components/dashboard/admin/ClassConfig/ClassConfigAlerts";
import ClassConfigActions from "../../../components/dashboard/admin/ClassConfig/ClassConfigActions";
import ClassConfigFilters from "../../../components/dashboard/admin/ClassConfig/ClassConfigFilters";
import GradeList from "../../../components/dashboard/admin/ClassConfig/GradeList";
import SectionTable from "../../../components/dashboard/admin/ClassConfig/SectionTable";
import StudentAllocationModal from "../../../components/dashboard/admin/ClassConfig/StudentAllocationModal";

const ClassConfig = () => {
  const [selectedGrade, setSelectedGrade] = useState(ADMIN_DATA.grades[0]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    teacher: "all",
    search: "",
  });

  // Calculate summary statistics
  const totalGrades = ADMIN_DATA.grades.length;
  const totalSections = ADMIN_DATA.grades.reduce(
    (sum, grade) => sum + grade.sections,
    0,
  );
  const totalStudentsAllocated = ADMIN_DATA.grades.reduce(
    (sum, grade) => sum + grade.totalStudents,
    0,
  );
  const unassignedStudents = ADMIN_DATA.unassignedStudents?.length || 0;
  const activeAcademicYear =
    ADMIN_DATA.academicYears?.find((y) => y.isActive)?.label || "2025-2026";

  // Identify warnings
  const warnings = [];
  ADMIN_DATA.grades.forEach((grade) => {
    grade.sectionsData.forEach((section) => {
      if (section.students > section.capacity) {
        warnings.push({
          type: "capacity",
          section: section.id,
          message: `Section ${section.id} capacity exceeded (${section.students}/${section.capacity})`,
        });
      }
      if (!section.teacher) {
        warnings.push({
          type: "teacher",
          section: section.id,
          message: `Section ${section.id} has no class teacher assigned`,
        });
      }
      if (!section.timetableLinked) {
        warnings.push({
          type: "timetable",
          section: section.id,
          message: `Section ${section.id} timetable not linked`,
        });
      }
    });
  });

  if (unassignedStudents > 0) {
    warnings.push({
      type: "students",
      message: `${unassignedStudents} students unassigned`,
    });
  }

  // Filter sections based on active filters
  const filteredSections = selectedGrade.sectionsData.filter((section) => {
    if (
      filters.status !== "all" &&
      section.status.toLowerCase() !== filters.status.toLowerCase()
    )
      return false;
    if (filters.teacher !== "all" && section.teacherId !== filters.teacher)
      return false;
    if (
      filters.search &&
      !section.section.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <ClassConfigHeader activeYear={activeAcademicYear} />
      <ClassConfigStats
        totalGrades={totalGrades}
        totalSections={totalSections}
        totalStudentsAllocated={totalStudentsAllocated}
        unassignedStudents={unassignedStudents}
      />
      <ClassConfigAlerts warnings={warnings} />
      <ClassConfigActions
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />
      <ClassConfigFilters
        filters={filters}
        setFilters={setFilters}
        showFilters={showFilters}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <GradeList
          grades={ADMIN_DATA.grades}
          selectedGrade={selectedGrade}
          onSelectGrade={setSelectedGrade}
        />
        <SectionTable
          sections={filteredSections}
          gradeName={selectedGrade.name}
          totalSections={selectedGrade.sectionsData.length}
          onSelectSection={setSelectedSection}
          onShowModal={setShowStudentModal}
          onClearFilters={() =>
            setFilters({ status: "all", teacher: "all", search: "" })
          }
        />
      </div>

      <StudentAllocationModal
        section={selectedSection}
        students={
          selectedSection
            ? ADMIN_DATA.studentsAllocation?.[selectedSection.id] || []
            : []
        }
        showModal={showStudentModal}
        onClose={() => {
          setShowStudentModal(false);
          setSelectedSection(null);
        }}
      />
    </div>
  );
};

export default ClassConfig;
