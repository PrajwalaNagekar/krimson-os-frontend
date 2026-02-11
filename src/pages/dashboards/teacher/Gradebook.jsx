import React, { useState, useEffect } from "react";
import { GRADEBOOK_DATA } from "../../../data/teacherData";
import GradebookHeader from "../../../components/dashboard/teacher/Gradebook/GradebookHeader";
import StatsOverview from "../../../components/dashboard/teacher/Gradebook/StatsOverview";
import PredictiveAnalyticsAlert from "../../../components/dashboard/teacher/Gradebook/PredictiveAnalyticsAlert";
import GradebookControls from "../../../components/dashboard/teacher/Gradebook/GradebookControls";
import PerformanceTable from "../../../components/dashboard/teacher/Gradebook/PerformanceTable";
import StudentDetailModal from "../../../components/dashboard/teacher/Gradebook/StudentDetailModal";

const Gradebook = () => {
  // Use data from centralized file
  const [students, setStudents] = useState(GRADEBOOK_DATA.students);

  const [selectedClass, setSelectedClass] = useState("Grade 9-A");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState("all"); // 'all', 'atRisk', 'improving', 'declining'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter students
  const filteredStudents = students.filter((student) => {
    // Filter by mode
    if (filterMode !== "all") {
      if (filterMode === "atRisk" && !student.atRisk) return false;
      if (filterMode === "improving" && student.trend !== "improving")
        return false;
      if (filterMode === "declining" && student.trend !== "declining")
        return false;
    }

    // Filter by search
    if (searchQuery) {
      return (
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery)
      );
    }

    return true;
  });

  // Calculate class statistics
  const stats = {
    total: students.length,
    atRisk: students.filter((s) => s.atRisk).length,
    improving: students.filter((s) => s.trend === "improving").length,
    declining: students.filter((s) => s.trend === "declining").length,
    avgScore: (
      students.reduce((sum, s) => sum + s.avgScore, 0) / students.length
    ).toFixed(1),
    avgAttendance: (
      students.reduce((sum, s) => sum + s.attendance, 0) / students.length
    ).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/gradebook')
    //   .then(res => res.json())
    //   .then(data => setStudents(data));
    console.log("Gradebook loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      <GradebookHeader
        selectedClass={selectedClass}
        studentCount={students.length}
      />

      <StatsOverview
        stats={stats}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      <PredictiveAnalyticsAlert
        atRiskCount={stats.atRisk}
        atRiskStudents={students.filter((s) => s.atRisk)}
      />

      <GradebookControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      <PerformanceTable
        filteredStudents={filteredStudents}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
        filterMode={filterMode}
        onViewStudent={setSelectedStudent}
      />

      <StudentDetailModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
};

export default Gradebook;
