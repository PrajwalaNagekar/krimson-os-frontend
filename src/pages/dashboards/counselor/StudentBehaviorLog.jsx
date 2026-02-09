import React, { useState } from "react";
import { COUNSELOR_DATA } from "../../../data/counselorData";
import { AlertCircle, BookOpen, Users, Heart } from "lucide-react";

import LogHeader from "../../../components/dashboard/counselor/StudentBehaviorLog/LogHeader";
import StatsSummary from "../../../components/dashboard/counselor/StudentBehaviorLog/StatsSummary";
import LogFilters from "../../../components/dashboard/counselor/StudentBehaviorLog/LogFilters";
import LogTable from "../../../components/dashboard/counselor/StudentBehaviorLog/LogTable";
import StudentHistoryModal from "../../../components/dashboard/counselor/StudentBehaviorLog/StudentHistoryModal";

/**
 * Student Behavior Log - Screen 1
 * Purpose: Maintain detailed logs of behavioral observations and interventions
 * Features: Add incidents/merits, Tag categories, View history, Export
 */
const StudentBehaviorLog = () => {
  const { behaviorLogs, behaviorCategories, behaviorStats } = COUNSELOR_DATA;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // Map category icons
  const categoryIconMap = {
    AlertCircle: AlertCircle,
    BookOpen: BookOpen,
    Users: Users,
    Heart: Heart,
  };

  const enhancedCategories = behaviorCategories.map((cat) => ({
    ...cat,
    IconComponent: categoryIconMap[cat.icon],
  }));

  // Helper to get category styles (needed for filtering logic? No, just passing data)

  // View student history
  const viewStudentHistory = (studentName) => {
    setSelectedStudent(studentName);
    setShowHistoryModal(true);
  };

  // Get student history (mock data - filter logs by student)
  const getStudentHistory = (studentName) => {
    return behaviorLogs.filter((log) => log.student === studentName);
  };

  // Filter logs based on search and category
  const filteredLogs = behaviorLogs.filter((log) => {
    const matchesCategory =
      selectedCategory === "All" || log.category === selectedCategory;
    const matchesSearch =
      log.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.class.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <LogHeader />

      {/* Stats Summary */}
      <StatsSummary stats={behaviorStats} />

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        {/* Toolbar */}
        <LogFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={enhancedCategories}
        />

        {/* Logs Table */}
        <LogTable
          behaviorLogs={filteredLogs}
          categories={enhancedCategories}
          viewStudentHistory={viewStudentHistory}
        />
      </div>

      {/* Student History Modal */}
      {showHistoryModal && selectedStudent && (
        <StudentHistoryModal
          selectedStudent={selectedStudent}
          onClose={() => setShowHistoryModal(false)}
          historyLogs={getStudentHistory(selectedStudent)}
          categories={enhancedCategories}
        />
      )}
    </div>
  );
};

export default StudentBehaviorLog;
