import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ResourceHeader from "../../../components/dashboard/teacher/ResourceLibrary/ResourceHeader";
import LMSBanner from "../../../components/dashboard/teacher/ResourceLibrary/LMSBanner";
import QuickStats from "../../../components/dashboard/teacher/ResourceLibrary/QuickStats";
import SearchFilters from "../../../components/dashboard/teacher/ResourceLibrary/SearchFilters";
import ResourceGrid from "../../../components/dashboard/teacher/ResourceLibrary/ResourceGrid";
import LabManager from "../../../components/dashboard/teacher/ResourceLibrary/LabManager";
import ResourceDetailModal from "../../../components/dashboard/teacher/ResourceLibrary/ResourceDetailModal";

const ResourceLibrary = () => {
  // Data from constant
  const [resources] = useState(TEACHER_DATA.resourceLibrary.resources);

  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterGrade, setFilterGrade] = useState("all");
  const [filterFormat, setFilterFormat] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    // Filter by subject
    if (filterSubject !== "all" && resource.subject !== filterSubject)
      return false;

    // Filter by grade
    if (filterGrade !== "all" && resource.grade !== filterGrade) return false;

    // Filter by format
    if (filterFormat !== "all" && resource.format !== filterFormat)
      return false;

    // Filter by search
    if (searchQuery) {
      return (
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        resource.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: resources.length,
    byFormat: {
      pdf: resources.filter((r) => r.format === "pdf").length,
      video: resources.filter((r) => r.format === "video").length,
      ppt: resources.filter((r) => r.format === "ppt").length,
      worksheet: resources.filter((r) => r.format === "worksheet").length,
      image: resources.filter((r) => r.format === "image").length,
    },
    totalDownloads: resources.reduce((sum, r) => sum + r.downloads, 0),
    avgRating: (
      resources.reduce((sum, r) => sum + r.rating, 0) / resources.length
    ).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Resource Library loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <ResourceHeader stats={stats} />

      {/* LMS Integration Banner */}
      <LMSBanner />

      {/* Quick Stats */}
      <QuickStats stats={stats} />

      {/* Search and Filters */}
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterSubject={filterSubject}
        setFilterSubject={setFilterSubject}
        filterGrade={filterGrade}
        setFilterGrade={setFilterGrade}
        filterFormat={filterFormat}
        setFilterFormat={setFilterFormat}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {/* Resource Cards Grid */}
      <ResourceGrid
        resources={filteredResources}
        onResourceClick={setSelectedResource}
        searchQuery={searchQuery}
        filterSubject={filterSubject}
        filterGrade={filterGrade}
        filterFormat={filterFormat}
      />

      {/* --- LAB & MATERIALS MANAGER SECTION --- */}
      <LabManager initialData={TEACHER_DATA.resourceLibrary} />

      {/* Resource Detail Modal */}
      <ResourceDetailModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
};

export default ResourceLibrary;
