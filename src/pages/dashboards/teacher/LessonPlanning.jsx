import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData"; // Adjusted import path
import SuccessToast from "../../../components/common/SuccessToast"; // Adjusted import path

// Sub-components
import HeaderSection from "../../../components/dashboard/teacher/LessonPlanning/HeaderSection";
import StatsSection from "../../../components/dashboard/teacher/LessonPlanning/StatsSection";
import AIAssistant from "../../../components/dashboard/teacher/LessonPlanning/AIAssistant";
import WeeklyPlanner from "../../../components/dashboard/teacher/LessonPlanning/WeeklyPlanner";
import AnnualPlans from "../../../components/dashboard/teacher/LessonPlanning/AnnualPlans";
import TermPlans from "../../../components/dashboard/teacher/LessonPlanning/TermPlans";
import LessonDetailPanel from "../../../components/dashboard/teacher/LessonPlanning/LessonDetailPanel";
import PlanCreationModal from "../../../components/dashboard/teacher/LessonPlanning/PlanCreationModal";
import UnitPlanBuilder from "../../../components/dashboard/teacher/LessonPlanning/UnitPlanBuilder";
import SchemeOfWork from "../../../components/dashboard/teacher/LessonPlanning/SchemeOfWork";
import CurriculumMap from "../../../components/dashboard/teacher/LessonPlanning/CurriculumMap";

const LessonPlanning = () => {
  const { user, adminPlans: initialAdminPlans } = TEACHER_DATA; // Destructure adminPlans from data
  const [lessonsList, setLessonsList] = useState(TEACHER_DATA.lessons);
  const [selectedDay, setSelectedDay] = useState("monday");
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [currentWeek, setCurrentWeek] = useState("Week of Jan 20-24, 2026");

  // New Lesson Plan states
  const [showPlanOptions, setShowPlanOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    class: "",
    date: "",
    objectives: "",
    // Advanced fields
    term: "",
    priorityGoals: "",
    yearMilestone: "",
    resourcesNeeded: "",
  });

  // Initialize with data from centralized file
  const [adminPlans, setAdminPlans] = useState(initialAdminPlans || []);
  const weekDays = TEACHER_DATA.weekDays || [];

  // Mock API call
  useEffect(() => {
    console.log("Lesson Planning loaded - Ready for API integration");
  }, []);

  // Helper functions for styling
  const getStatusColor = (status) => {
    switch (status) {
      case "Taught":
        return "from-green-400 to-emerald-500";
      case "Pending":
        return "from-orange-400 to-amber-500";
      default:
        return "from-blue-400 to-cyan-500";
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Taught":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  // Logic handlers
  const toggleLesson = (lessonId) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  const updateLessonStatus = (lessonId, newStatus) => {
    const newLessons = { ...lessonsList };
    Object.keys(newLessons).forEach((day) => {
      newLessons[day] = newLessons[day].map((lesson) =>
        lesson.id === lessonId ? { ...lesson, status: newStatus } : lesson,
      );
    });
    setLessonsList(newLessons);
  };

  const deleteLesson = (lessonId) => {
    const newLessons = { ...lessonsList };
    Object.keys(newLessons).forEach((day) => {
      newLessons[day] = newLessons[day].filter(
        (lesson) => lesson.id !== lessonId,
      );
    });
    setLessonsList(newLessons);
    setExpandedLesson(null);
  };

  const countByStatus = (status) => {
    return Object.values(lessonsList)
      .flat()
      .filter((l) => l.status === status).length;
  };

  const handleCreateNew = (type) => {
    setSelectedPlanType(type);
    setShowModal(true);
    setShowPlanOptions(false);
  };

  const handleSubmitApproval = (e) => {
    e.preventDefault();
    const newPlan = {
      id: Date.now(),
      type: selectedPlanType,
      title: formData.title,
      subject: formData.subject,
      status: "Pending Approval",
      date: formData.date || new Date().toISOString().split("T")[0],
    };

    if (selectedPlanType !== "Weekly Lesson Plan") {
      const advancedPlan = {
        ...newPlan,
        term: formData.term || "General Term",
        goalsCount: formData.priorityGoals ? 1 : 0,
        milestones: formData.yearMilestone ? 1 : 0,
        gradeLevel: formData.class,
      };
      setAdminPlans([advancedPlan, ...adminPlans]);
    }

    setShowModal(false);
    setShowSuccess(true);
    setFormData({
      title: "",
      subject: "",
      class: "",
      date: "",
      objectives: "",
      term: "",
      priorityGoals: "",
      yearMilestone: "",
      resourcesNeeded: "",
    });
  };

  const totalLessons = Object.values(lessonsList).flat().length;

  return (
    <div className="space-y-6 md:space-y-8">
      <HeaderSection
        currentWeek={currentWeek}
        totalLessons={totalLessons}
        showPlanOptions={showPlanOptions}
        setShowPlanOptions={setShowPlanOptions}
        handleCreateNew={handleCreateNew}
      />

      <StatsSection totalLessons={totalLessons} countByStatus={countByStatus} />

      <AIAssistant />

      <LessonDetailPanel
        expandedLesson={expandedLesson}
        lessons={lessonsList}
        getStatusColor={getStatusColor}
        getStatusBadgeColor={getStatusBadgeColor}
        setExpandedLesson={setExpandedLesson}
        updateLessonStatus={updateLessonStatus}
        deleteLesson={deleteLesson}
      />

      <WeeklyPlanner
        weekDays={weekDays}
        lessons={lessonsList}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        getStatusBadgeColor={getStatusBadgeColor}
        getStatusColor={getStatusColor}
        toggleLesson={toggleLesson}
        expandedLesson={expandedLesson}
        handleCreateNew={handleCreateNew}
      />

      <div className="space-y-8">
        <AnnualPlans
          adminPlans={adminPlans}
          setSelectedPlanType={setSelectedPlanType}
          setShowModal={setShowModal}
        />

        <TermPlans
          adminPlans={adminPlans}
          setSelectedPlanType={setSelectedPlanType}
          setShowModal={setShowModal}
        />
      </div>

      <UnitPlanBuilder />

      <div className="pt-8 border-t-2 border-slate-100">
        <SchemeOfWork />
      </div>

      <div className="pt-8 border-t-2 border-slate-100">
        <CurriculumMap />
      </div>

      <PlanCreationModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedPlanType={selectedPlanType}
        formData={formData}
        setFormData={setFormData}
        handleSubmitApproval={handleSubmitApproval}
      />

      <SuccessToast
        isOpen={showSuccess}
        message={`${selectedPlanType} has been submitted for approval successfully!`}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default LessonPlanning;
