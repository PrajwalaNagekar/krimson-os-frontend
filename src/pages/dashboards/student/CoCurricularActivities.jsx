import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import { COMMUNITY_SERVICE_DATA } from "../../../data/zstudentData";
import { BarChart3, Award, Filter, Calendar, ChevronDown } from "lucide-react";
import {
  StatsHeader,
  CategoryFilterTabs,
  ActivityLog,
  TimelineSection,
  PillarActivitySection,
  CCAAttendanceSection,
  CommunityServiceSection,
} from "../../../components/dashboard/student/CoCurricularActivities";

/**
 * Co-Curricular Activities & Achievements - Screen 14
 * Purpose: Capture holistic student progress beyond academics
 * Future: Replace static data with CCA Module + Award Management System APIs
 *
 * UPDATED: Toggle card layout for better organization and modern UX
 */
const CoCurricularActivities = () => {
  const { cocurricularActivities } = STUDENT_DATA;
  // Track which card is currently expanded for content display
  const [activeCard, setActiveCard] = React.useState(null);
  const contentRef = React.useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle function that also handles scrolling
  const toggleCard = (cardKey) => {
    if (activeCard === cardKey) {
      // Collapse if clicking the same card
      setActiveCard(null);
    } else {
      // Expand new card
      setActiveCard(cardKey);
      // Auto-scroll to content area after a short delay for animation
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    }
  };

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

      {/* Cards Grid - Always in Same Position */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {/* Card 1: CCA Attendance Tracking */}
        <button
          onClick={() => toggleCard("attendance")}
          className={`bg-white rounded-3xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 ${
            activeCard === "attendance" ? "ring-2 ring-cyan-400 shadow-xl" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl shadow-md mb-3">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              CCA Attendance Tracking
            </h2>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold mb-2">
              {
                cocurricularActivities.ccaAttendance?.overview
                  ?.attendancePercentage
              }
              %
            </span>
            <p className="text-xs text-slate-500 text-center line-clamp-2">
              {cocurricularActivities.ccaAttendance?.activities?.length || 0}{" "}
              activities •{" "}
              {cocurricularActivities.ccaAttendance?.overview?.attendedSessions}
              /{cocurricularActivities.ccaAttendance?.overview?.totalSessions}{" "}
              sessions
            </p>
            <ChevronDown
              className={`text-slate-400 transition-transform duration-300 mt-2 ${
                activeCard === "attendance" ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
        </button>

        {/* Card 2: Pillar Activity Views */}
        <button
          onClick={() => toggleCard("pillars")}
          className={`bg-white rounded-3xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 ${
            activeCard === "pillars" ? "ring-2 ring-purple-400 shadow-xl" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-2xl shadow-md mb-3">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              Pillar Activity Views
            </h2>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold mb-2">
              {cocurricularActivities.pillarActivities?.length || 0} Pillars
            </span>
            <p className="text-xs text-slate-500 text-center line-clamp-2">
              Explore activities across{" "}
              {cocurricularActivities.pillarActivities?.length || 0} development
              pillars
            </p>
            <ChevronDown
              className={`text-slate-400 transition-transform duration-300 mt-2 ${
                activeCard === "pillars" ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
        </button>

        {/* Card 3: Activity Log */}
        <button
          onClick={() => toggleCard("activities")}
          className={`bg-white rounded-3xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 ${
            activeCard === "activities" ? "ring-2 ring-green-400 shadow-xl" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 rounded-2xl shadow-md mb-3">
              <Filter className="text-white" size={24} />
            </div>
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              Activity Log
            </h2>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold mb-2">
              {filteredActivities.length}{" "}
              {selectedCategory !== "All" ? selectedCategory : ""}{" "}
              {filteredActivities.length === 1 ? "Activity" : "Activities"}
            </span>
            <p className="text-xs text-slate-500 text-center line-clamp-2">
              View and filter all your co-curricular activities
            </p>
            <ChevronDown
              className={`text-slate-400 transition-transform duration-300 mt-2 ${
                activeCard === "activities" ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
        </button>

        {/* Card 4: Achievement Timeline */}
        <button
          onClick={() => toggleCard("timeline")}
          className={`bg-white rounded-3xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 ${
            activeCard === "timeline" ? "ring-2 ring-orange-400 shadow-xl" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-2xl shadow-md mb-3">
              <Calendar className="text-white" size={24} />
            </div>
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              Achievement Timeline
            </h2>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold mb-2">
              {cocurricularActivities.timeline?.length || 0} Milestones
            </span>
            <p className="text-xs text-slate-500 text-center line-clamp-2">
              Track your journey through{" "}
              {cocurricularActivities.timeline?.length || 0} achievements
            </p>
            <ChevronDown
              className={`text-slate-400 transition-transform duration-300 mt-2 ${
                activeCard === "timeline" ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
        </button>

        {/* Card 5: Community Service */}
        <button
          onClick={() => toggleCard("community")}
          className={`bg-white rounded-3xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 ${
            activeCard === "community" ? "ring-2 ring-rose-400 shadow-xl" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="p-3 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-2xl shadow-md mb-3">
              <svg
                className="text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l.13-.13.13.13a2.13 2.13 0 0 0 3 0h0a2.13 2.13 0 0 0 0-3L12 5.36z" />
              </svg>
            </div>
            <h2 className="text-sm md:text-base font-bold text-slate-800 mb-2">
              Community Service
            </h2>
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold mb-2">
              {COMMUNITY_SERVICE_DATA.opportunities?.overview?.hoursCompleted ||
                0}
              /
              {COMMUNITY_SERVICE_DATA.opportunities?.overview?.hoursRequired ||
                40}{" "}
              hrs
            </span>
            <p className="text-xs text-slate-500 text-center line-clamp-2">
              {COMMUNITY_SERVICE_DATA.opportunities?.availableOpportunities
                ?.length || 0}{" "}
              opportunities •{" "}
              {COMMUNITY_SERVICE_DATA.reflections?.entries?.length || 0}{" "}
              reflections
            </p>
            <ChevronDown
              className={`text-slate-400 transition-transform duration-300 mt-2 ${
                activeCard === "community" ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
        </button>
      </div>

      {/* Expanded Content Area - Below Cards */}
      <div
        ref={contentRef}
        className={`transition-all duration-300 overflow-hidden ${
          activeCard ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeCard && (
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            {/* Content based on active card */}
            {activeCard === "attendance" && (
              <CCAAttendanceSection
                ccaAttendance={cocurricularActivities.ccaAttendance}
              />
            )}

            {activeCard === "pillars" && (
              <PillarActivitySection
                pillarActivities={cocurricularActivities.pillarActivities}
              />
            )}

            {activeCard === "activities" && (
              <>
                <CategoryFilterTabs
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
                <div className="mt-6">
                  <ActivityLog activities={filteredActivities} />
                </div>
              </>
            )}

            {activeCard === "timeline" && (
              <TimelineSection timeline={cocurricularActivities.timeline} />
            )}

            {activeCard === "community" && (
              <CommunityServiceSection
                communityService={COMMUNITY_SERVICE_DATA}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoCurricularActivities;
