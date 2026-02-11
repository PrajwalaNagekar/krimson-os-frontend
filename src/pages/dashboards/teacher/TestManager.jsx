import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import TestManagerHeader from "../../../components/dashboard/teacher/TestManager/TestManagerHeader";
import QuestionBankStats from "../../../components/dashboard/teacher/TestManager/QuestionBankStats";
import TestManagerStats from "../../../components/dashboard/teacher/TestManager/TestManagerStats";
import TestSearchFilters from "../../../components/dashboard/teacher/TestManager/TestSearchFilters";
import TestGrid from "../../../components/dashboard/teacher/TestManager/TestGrid";
import EmptyTestState from "../../../components/dashboard/teacher/TestManager/EmptyTestState";
import TestDetailModal from "../../../components/dashboard/teacher/TestManager/TestDetailModal";

const TestManager = () => {
  // Sample test data from centralized data
  const [tests, setTests] = useState(TEACHER_DATA.testManager?.tests || []);
  const [questionBank, setQuestionBank] = useState(
    TEACHER_DATA.testManager?.questionBank || {
      total: 0,
      objective: 0,
      subjective: 0,
      byTopic: {},
    },
  );

  const [selectedTest, setSelectedTest] = useState(null);
  const [filterType, setFilterType] = useState("all"); // 'all', 'exam', 'test', 'quiz'
  const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'scheduled', 'live', 'completed', 'grading'
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tests
  const filteredTests = tests.filter((test) => {
    // Filter by type
    if (filterType !== "all" && test.type !== filterType) return false;

    // Filter by status
    if (filterStatus !== "all" && test.status !== filterStatus) return false;

    // Filter by search
    if (searchQuery) {
      return (
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.class.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: tests.length,
    scheduled: tests.filter((t) => t.status === "scheduled").length,
    live: tests.filter((t) => t.status === "live").length,
    grading: tests.filter((t) => t.status === "grading").length,
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/tests')
    //   .then(res => res.json())
    //   .then(data => setTests(data));
    console.log("Test Manager loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <TestManagerHeader stats={stats} />

      {/* Question Bank */}
      <QuestionBankStats questionBank={questionBank} />

      {/* Quick Stats */}
      <TestManagerStats stats={stats} />

      {/* Search and Filter */}
      <TestSearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {/* Test Cards Grid */}
      <TestGrid tests={filteredTests} setSelectedTest={setSelectedTest} />

      {/* Empty State */}
      {filteredTests.length === 0 && (
        <EmptyTestState
          searchQuery={searchQuery}
          filterType={filterType}
          filterStatus={filterStatus}
        />
      )}

      {/* Test Detail Modal (for grading) */}
      <TestDetailModal
        selectedTest={selectedTest}
        setSelectedTest={setSelectedTest}
      />
    </div>
  );
};

export default TestManager;
