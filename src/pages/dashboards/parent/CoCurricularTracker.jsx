import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import TrackerHeader from "../../../components/dashboard/parent/CoCurricularTracker/TrackerHeader";
import TrackerFilters from "../../../components/dashboard/parent/CoCurricularTracker/TrackerFilters";
import ActivityTimeline from "../../../components/dashboard/parent/CoCurricularTracker/ActivityTimeline";

const CoCurricularTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { activities, categories } = PARENT_DATA.coCurricular;

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "all" ||
      activity.category === selectedCategory ||
      activity.categoryId === selectedCategory;
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPoints = activities.reduce(
    (sum, activity) => sum + activity.points,
    0,
  );
  const totalAchievements = activities.length; // Simply count for now, or filter by 'achievement' existence if needed
  const certificatesEarned = activities.filter((a) => a.certificate).length;

  const handleDownloadCertificate = (activityId) => {
    console.log("Download certificate for activity:", activityId);
    // API call will be added here
  };

  const handleViewPhoto = (photoId) => {
    console.log("View photo:", photoId);
    // API call will be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header & Stats */}
      <TrackerHeader
        totalPoints={totalPoints}
        totalAchievements={totalAchievements}
        certificatesEarned={certificatesEarned}
      />

      {/* Filters */}
      <TrackerFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        totalActivitiesCount={activities.length}
        filteredActivitiesCount={filteredActivities.length}
      />

      {/* Timeline */}
      <ActivityTimeline
        activities={filteredActivities}
        handleDownloadCertificate={handleDownloadCertificate}
        handleViewPhoto={handleViewPhoto}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onClearFilters={() => {
          setSelectedCategory("all");
          setSearchQuery("");
        }}
      />
    </div>
  );
};

export default CoCurricularTracker;
