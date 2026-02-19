/**
 * @component AcademicYear
 * @description Coordinator Screen - Academic Year & Structure Management
 */
import React, { useState } from "react";
import { ACADEMIC_YEAR_DATA } from "../../../../data/coordinatorData";
import { ADMIN_DATA } from "../../../../data/adminData";
import AcademicYearHeader from "../../../../components/dashboard/coordinator/AcademicYear/AcademicYearHeader";
import AcademicYearDashboard from "../../../../components/dashboard/coordinator/AcademicYear/AcademicYearDashboard";
import GradesAndSectionsManager from "../../../../components/dashboard/coordinator/AcademicYear/GradesAndSectionsManager";
import AddGradeFormCoordinator from "../../../../components/dashboard/coordinator/AcademicYear/AddGradeFormCoordinator";
import AddSectionFormCoordinator from "../../../../components/dashboard/coordinator/AcademicYear/AddSectionFormCoordinator";

const AcademicYear = () => {
  const [viewMode, setViewMode] = useState("dashboard"); // 'dashboard', 'grades', 'addGrade', 'addSection'
  const [selectedGrade, setSelectedGrade] = useState(null);

  const academicYearData = ACADEMIC_YEAR_DATA;

  // Render Add Grade Form
  if (viewMode === "addGrade") {
    return <AddGradeFormCoordinator onBack={() => setViewMode("grades")} />;
  }

  // Render Add Section Form
  if (viewMode === "addSection") {
    return (
      <AddSectionFormCoordinator
        selectedGrade={selectedGrade}
        onBack={() => setViewMode("grades")}
      />
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn pb-10">
      <AcademicYearHeader
        activeYear={academicYearData.activeYear}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {viewMode === "dashboard" && (
        <AcademicYearDashboard
          academicYearData={academicYearData}
          onManageGrades={() => setViewMode("grades")}
        />
      )}

      {viewMode === "grades" && (
        <GradesAndSectionsManager
          grades={ADMIN_DATA.grades}
          onAddGrade={() => setViewMode("addGrade")}
          onAddSection={(grade) => {
            setSelectedGrade(grade);
            setViewMode("addSection");
          }}
        />
      )}
    </div>
  );
};

export default AcademicYear;
