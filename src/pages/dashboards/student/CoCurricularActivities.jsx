import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  StatsHeader,
  CategoryCard,
  CategoryFilterTabs,
  ActivityLog,
  TimelineSection,
  PillarActivitySection,
  CCAAttendanceSection,
} from "../../../components/dashboard/student/CoCurricularActivities";

/**
 * Co-Curricular Activities & Achievements - Screen 14
 * Purpose: Capture holistic student progress beyond academics
 * Future: Replace static data with CCA Module + Award Management System APIs
 *
 * REFACTORED: Organized into reusable components in:
 * src/components/dashboard/student/CoCurricularActivities/
 */
const CoCurricularActivities = () => {
  const { cocurricularActivities } = STUDENT_DATA;
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter activities by selected category
  const filteredActivities =
    selectedCategory === "All"
      ? cocurricularActivities.activities
      : cocurricularActivities.activities.filter(
          (a) => a.category === selectedCategory,
        );

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <StatsHeader
        totalPoints={cocurricularActivities.totalPoints}
        totalActivities={cocurricularActivities.totalActivities}
        certificatesEarned={cocurricularActivities.certificatesEarned}
      />

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cocurricularActivities.categories.map((cat, index) => (
          <CategoryCard
            key={index}
            category={cat}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      {/* CCA Attendance Tracking */}
      <CCAAttendanceSection
        ccaAttendance={cocurricularActivities.ccaAttendance}
      />

      {/* Pillar Activity Views */}
      <PillarActivitySection
        pillarActivities={cocurricularActivities.pillarActivities}
      />
      {/* Filter Tabs */}
      <CategoryFilterTabs
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* Activity Log */}
      <ActivityLog activities={filteredActivities} />

      {/* Achievement Timeline */}
      <TimelineSection timeline={cocurricularActivities.timeline} />
    </div>
  );
};

export default CoCurricularActivities;
