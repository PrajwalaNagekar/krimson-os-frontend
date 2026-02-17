import React, { useState } from "react";
import { CURRICULUM_MANAGEMENT_DATA } from "../../../../data/coordinatorData";
import CurriculumList from "./CurriculumList";
import CurriculumSelectionForm from "./CurriculumSelectionForm";
import SyllabusBuilder from "./SyllabusBuilder";

/**
 * HierarchyBuilder Component
 * Main orchestrator for curriculum building workflow
 * Manages 3 view states: list → form → builder
 */
const HierarchyBuilder = () => {
  const { frameworks, subjects, grades } = CURRICULUM_MANAGEMENT_DATA;

  // View states: 'list' | 'form' | 'builder'
  const [currentView, setCurrentView] = useState("list");

  // Selection state
  const [selectedFramework, setSelectedFramework] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  // Mock existing curriculum list
  const [existingCurriculums, setExistingCurriculums] = useState([
    {
      id: 1,
      framework: "CBSE",
      grade: "Grade 10",
      subject: "Mathematics",
      lastModified: "2026-02-10",
      status: "Active",
    },
    {
      id: 2,
      framework: "CBSE",
      grade: "Grade 10",
      subject: "Science",
      lastModified: "2026-02-08",
      status: "Active",
    },
    {
      id: 3,
      framework: "Cambridge",
      grade: "Grade 9",
      subject: "English",
      lastModified: "2026-02-05",
      status: "Draft",
    },
  ]);

  // Handlers
  const handleStartNewCurriculum = () => {
    setCurrentView("form");
    setSelectedFramework("");
    setSelectedGrade("");
    setSelectedSubject("");
  };

  const handleCancelForm = () => {
    setCurrentView("list");
  };

  const handleConfirmSelection = () => {
    if (selectedFramework && selectedGrade && selectedSubject) {
      setCurrentView("builder");
    }
  };

  const handleEditCurriculum = (curriculum) => {
    console.log("Edit curriculum:", curriculum);
    // Load the curriculum data
    setCurrentView("builder");
  };

  const handleBackToList = () => {
    setCurrentView("list");
  };

  // Render based on current view
  if (currentView === "list") {
    return (
      <CurriculumList
        curriculums={existingCurriculums}
        onEdit={handleEditCurriculum}
        onAddNew={handleStartNewCurriculum}
      />
    );
  }

  if (currentView === "form") {
    return (
      <CurriculumSelectionForm
        frameworks={frameworks}
        grades={grades}
        subjects={subjects}
        selectedFramework={selectedFramework}
        setSelectedFramework={setSelectedFramework}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        onConfirm={handleConfirmSelection}
        onCancel={handleCancelForm}
      />
    );
  }

  // currentView === 'builder'
  return (
    <SyllabusBuilder
      selectedFramework={selectedFramework}
      selectedGrade={selectedGrade}
      selectedSubject={selectedSubject}
      frameworks={frameworks}
      grades={grades}
      subjects={subjects}
      onBackToList={handleBackToList}
    />
  );
};

export default HierarchyBuilder;
