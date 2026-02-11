import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";

// Import New Components
import AssignmentHeader from "../../../components/dashboard/teacher/AssignmentManager/AssignmentHeader";
import AssignmentTabs from "../../../components/dashboard/teacher/AssignmentManager/AssignmentTabs";
import AssignmentStats from "../../../components/dashboard/teacher/AssignmentManager/AssignmentStats";
import AIGradingBanner from "../../../components/dashboard/teacher/AssignmentManager/AIGradingBanner";
import ReleaseGradesAction from "../../../components/dashboard/teacher/AssignmentManager/ReleaseGradesAction";
import AssignmentFilters from "../../../components/dashboard/teacher/AssignmentManager/AssignmentFilters";
import AssignmentGrid from "../../../components/dashboard/teacher/AssignmentManager/AssignmentGrid";
import EmptyState from "../../../components/dashboard/teacher/AssignmentManager/EmptyState";
import AssignmentDetailModal from "../../../components/dashboard/teacher/AssignmentManager/AssignmentDetailModal";

// Existing Sub-pages/Components
import CreateAssignmentWizard from "../../../components/dashboard/teacher/AssignmentManager/CreateAssignmentWizard";
import EvaluationStudio from "../../../components/dashboard/teacher/AssignmentManager/EvaluationStudio";
import QuizBuilder from "../../../components/dashboard/teacher/AssignmentManager/QuizBuilder";
import AssessmentBlueprint from "../../../components/dashboard/teacher/AssignmentManager/AssessmentBlueprint";
import RubricBuilder from "../../../components/dashboard/teacher/AssignmentManager/RubricBuilder";
import AcademicIntegrity from "../../../components/dashboard/teacher/AssignmentManager/AcademicIntegrity";

const AssignmentManager = () => {
  const {
    assignments: initialAssignments,
    masterRepository,
    assignmentTemplates,
    assignmentConstants,
  } = TEACHER_DATA;
  const {
    ASSIGNMENT_TYPES,
    COMPETENCY_TYPES,
    OUTPUT_FORMATS,
    SUBMISSION_FORMATS,
  } = assignmentConstants;

  // State management
  const [assignmentView, setAssignmentView] = useState("tracker"); // 'tracker', 'repository'
  const [activeTab, setActiveTab] = useState("active"); // 'active', 'quizzes', 'blueprint', 'rubrics'
  const [viewMode, setViewMode] = useState("all"); // 'all', 'active', 'overdue', 'completed', 'remedial'
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Modal & Selection States
  const [showEvaluationStudio, setShowEvaluationStudio] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Filter assignments
  const displayAssignments =
    assignmentView === "tracker"
      ? assignments.filter((assignment) => {
          if (viewMode !== "all") {
            if (viewMode === "active" && assignment.status !== "Active")
              return false;
            if (viewMode === "overdue" && assignment.status !== "Overdue")
              return false;
            if (viewMode === "completed" && assignment.status !== "Completed")
              return false;
            if (viewMode === "remedial" && assignment.status !== "Remedial")
              return false;
          }
          if (
            searchQuery &&
            !assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
            return false;
          return true;
        })
      : [
          ...masterRepository,
          ...assignments.map((a) => ({
            ...a,
            status: "Master",
            used: Math.floor(Math.random() * 10) + 1,
            created: a.due,
          })),
        ].filter((a) => {
          if (
            searchQuery &&
            !a.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
            return false;
          return true;
        });

  // Calculate statistics
  const stats = {
    total: assignments.length,
    active: assignments.filter((a) => a.status === "Active").length,
    overdue: assignments.filter((a) => a.status === "Overdue").length,
    completed: assignments.filter((a) => a.status === "Completed").length,
    remedial: assignments.filter((a) => a.status === "Remedial").length,
    totalSubmissions: assignments.reduce((sum, a) => sum + a.submitted, 0),
    totalStudents: assignments.reduce((sum, a) => sum + a.total, 0),
    totalPending: assignments.reduce((sum, a) => sum + a.pending, 0),
  };

  // Mock API call
  useEffect(() => {
    console.log("Assignment Manager loaded - Ready for API integration");
  }, []);

  const handleOpenEvaluation = (student) => {
    setSelectedStudent(student);
    setShowEvaluationStudio(true);
  };

  const handleGradeAssignment = (assignment) => {
    // Logic to start grading a specific assignment
    // Could set selected assignment and open studio, or navigate
    console.log("Grading assignment:", assignment);
    // For now, let's say it opens the detail modal like before, but maybe directly to tracking?
    // The original code had a "Grade Now" button that didn't do anything specific in the tracker view other than being there.
    // We can make it open the modal.
    setSelectedAssignment(assignment);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <AssignmentHeader
        activeTab={activeTab}
        assignmentView={assignmentView}
        stats={stats}
        onCreateNew={() => setShowCreateModal(true)}
      />

      <AssignmentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        assignmentView={assignmentView}
        setAssignmentView={setAssignmentView}
      />

      {activeTab === "active" ? (
        <>
          <AssignmentStats
            stats={stats}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          <AIGradingBanner pendingReviews={stats.totalPending} />

          <ReleaseGradesAction />

          <AssignmentFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            templates={assignmentTemplates}
          />

          {displayAssignments.length > 0 ? (
            <AssignmentGrid
              assignments={displayAssignments}
              view={assignmentView}
              onSelectAssignment={setSelectedAssignment}
              onGradeAssignment={handleGradeAssignment}
            />
          ) : (
            <EmptyState
              searchQuery={searchQuery}
              viewMode={viewMode}
              onClearFilters={() => {
                setSearchQuery("");
                setViewMode("all");
              }}
            />
          )}
        </>
      ) : activeTab === "quizzes" ? (
        <QuizBuilder />
      ) : activeTab === "integrity" ? (
        <AcademicIntegrity />
      ) : activeTab === "blueprint" ? (
        <AssessmentBlueprint />
      ) : (
        <RubricBuilder />
      )}

      {selectedAssignment && (
        <AssignmentDetailModal
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
          onOpenEvaluation={handleOpenEvaluation}
        />
      )}

      <CreateAssignmentWizard
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        ASSIGNMENT_TYPES={ASSIGNMENT_TYPES}
        COMPETENCY_TYPES={COMPETENCY_TYPES}
        OUTPUT_FORMATS={OUTPUT_FORMATS}
        SUBMISSION_FORMATS={SUBMISSION_FORMATS}
      />

      <EvaluationStudio
        isOpen={showEvaluationStudio}
        onClose={() => setShowEvaluationStudio(false)}
        assignment={selectedAssignment}
        student={selectedStudent}
      />
    </div>
  );
};

export default AssignmentManager;
