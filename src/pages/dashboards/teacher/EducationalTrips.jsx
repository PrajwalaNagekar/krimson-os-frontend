import React, { useState } from "react";
import TripsHeader from "../../../components/dashboard/teacher/EducationalTrips/TripsHeader";
import TripOverview from "../../../components/dashboard/teacher/EducationalTrips/TripOverview";
import LearningPurpose from "../../../components/dashboard/teacher/EducationalTrips/LearningPurpose";
import Logistics from "../../../components/dashboard/teacher/EducationalTrips/Logistics";
import RiskAssessment from "../../../components/dashboard/teacher/EducationalTrips/RiskAssessment";
import ConsentManagement from "../../../components/dashboard/teacher/EducationalTrips/ConsentManagement";
import ValidationBar from "../../../components/dashboard/teacher/EducationalTrips/ValidationBar";

const EducationalTrips = () => {
  const [activeTab, setActiveTab] = useState("planning"); // planning, risk
  const [tripStatus, setTripStatus] = useState("Draft");

  // Planning State
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    learning: true,
    logistics: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      <TripsHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tripStatus={tripStatus}
      />

      {/* Content Area */}
      <div className="space-y-6">
        {activeTab === "planning" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <TripOverview
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
            <LearningPurpose
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
            <Logistics
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
          </div>
        )}

        {/* RISK & CONSENT TAB */}
        {activeTab === "risk" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <RiskAssessment />
            <ConsentManagement />
          </div>
        )}
      </div>

      <ValidationBar />
    </div>
  );
};

export default EducationalTrips;
