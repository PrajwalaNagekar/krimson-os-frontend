import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ResourceHeader from "../../../components/dashboard/student/LessonResources/ResourceHeader";
import ResourceFilters from "../../../components/dashboard/student/LessonResources/ResourceFilters";
import ResourceCard from "../../../components/dashboard/student/LessonResources/ResourceCard";
import RecommendedReading from "../../../components/dashboard/student/LessonResources/RecommendedReading";
import ResourceModal from "../../../components/dashboard/student/LessonResources/ResourceModal";

const LessonResources = () => {
  const { resources, recommendedResources } = STUDENT_DATA;
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedWeek, setSelectedWeek] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const [resourceStates, setResourceStates] = useState(resources);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [modalType, setModalType] = useState(null); // 'details' or 'video'

  // Extract unique values for filters
  const subjects = ["All", ...new Set(resources.map((r) => r.subject))];
  const topics = ["All", ...new Set(resources.map((r) => r.topic))];
  const weeks = ["All", ...new Set(resources.map((r) => r.week))];
  const types = ["All", ...new Set(resources.map((r) => r.type))];

  const toggleSaved = (id) => {
    setResourceStates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, saved: !r.saved } : r)),
    );
  };

  const toggleRead = (id) => {
    setResourceStates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, read: !r.read } : r)),
    );
  };

  const openResourceModal = (resource, type) => {
    setSelectedResource(resource);
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedResource(null);
    setModalType(null);
  };

  const handleDownload = (e, title) => {
    e.stopPropagation();
    // Simulate download
    alert(`Downloading ${title}...`);
  };

  const filteredResources = resourceStates.filter((res) => {
    const matchSubject =
      selectedSubject === "All" || res.subject === selectedSubject;
    const matchTopic = selectedTopic === "All" || res.topic === selectedTopic;
    const matchWeek = selectedWeek === "All" || res.week === selectedWeek;
    const matchType = selectedType === "All" || res.type === selectedType;
    return matchSubject && matchTopic && matchWeek && matchType;
  });

  const clearFilters = () => {
    setSelectedSubject("All");
    setSelectedTopic("All");
    setSelectedWeek("All");
    setSelectedType("All");
  };

  return (
    <div className="space-y-8 relative">
      {/* Premium Gradient Header */}
      <ResourceHeader />

      {/* Filters Section */}
      <ResourceFilters
        subjects={subjects}
        topics={topics}
        weeks={weeks}
        types={types}
        selectedSubject={selectedSubject}
        selectedTopic={selectedTopic}
        selectedWeek={selectedWeek}
        selectedType={selectedType}
        onSubjectChange={setSelectedSubject}
        onTopicChange={setSelectedTopic}
        onWeekChange={setSelectedWeek}
        onTypeChange={setSelectedType}
        onClearFilters={clearFilters}
      />

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <ResourceCard
            key={res.id}
            resource={res}
            onOpenModal={openResourceModal}
            onToggleSaved={toggleSaved}
            onToggleRead={toggleRead}
            onDownload={handleDownload}
          />
        ))}
      </div>

      {/* Recommended Reading */}
      <RecommendedReading recommendedResources={recommendedResources} />

      {/* Modal Overlay */}
      <ResourceModal
        isOpen={modalOpen}
        onClose={closeModal}
        resource={selectedResource}
        type={modalType}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default LessonResources;
