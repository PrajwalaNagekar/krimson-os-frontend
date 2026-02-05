import React, { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import PillarCard from "./PillarCard";
import PillarActivityList from "./PillarActivityList";
import PillarActivityDetail from "./PillarActivityDetail";

/**
 * PillarActivitySection Component
 * Main component for displaying pillar activities with List to Detail (LB) layout
 * Shows 6 pillars: Imaginarium, Literary, Science & Astronomy, Leadership & Service, Sports & Wellness, Music & Dance
 *
 * @param {Object} pillarActivities - Pillar activities data from studentData
 */
const PillarActivitySection = ({ pillarActivities }) => {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Get pillar data based on selected pillar
  const getPillarData = (pillarName) => {
    const pillarMap = {
      Imaginarium: pillarActivities.imaginarium,
      Literary: pillarActivities.literary,
      "Science & Astronomy": pillarActivities.scienceAstronomy,
      "Leadership & Service": pillarActivities.leadershipService,
      "Sports & Wellness": pillarActivities.sportsWellness,
      "Music & Dance": pillarActivities.musicDance,
    };
    return pillarMap[pillarName] || [];
  };

  // Handle pillar selection
  const handlePillarSelect = (pillar) => {
    setSelectedPillar(pillar);
    setSelectedActivity(null); // Reset activity selection
  };

  // Handle activity selection
  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  // Handle back navigation
  const handleBack = () => {
    if (selectedActivity) {
      setSelectedActivity(null); // Go back to list
    } else {
      setSelectedPillar(null); // Go back to pillars
    }
  };

  return (
    <>
      {/* Breadcrumb Navigation - Enhanced */}
      {(selectedPillar || selectedActivity) && (
        <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-slate-200">
          <button
            onClick={() => {
              setSelectedPillar(null);
              setSelectedActivity(null);
            }}
            className="text-blue-600 hover:text-blue-700 font-bold text-xl md:text-2xl transition-colors"
          >
            Pillars
          </button>
          {selectedPillar && (
            <>
              <ChevronRight
                size={24}
                className="text-slate-400 flex-shrink-0"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className={`font-bold text-xl md:text-2xl transition-colors ${
                  selectedActivity
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-slate-800"
                }`}
              >
                {selectedPillar}
              </button>
            </>
          )}
          {selectedActivity && (
            <>
              <ChevronRight
                size={20}
                className="text-slate-400 flex-shrink-0"
              />
              <span className="text-purple-600 font-semibold text-base md:text-lg">
                {selectedActivity.title}
              </span>
            </>
          )}
        </div>
      )}

      {/* Content Area - Conditional Rendering */}
      {!selectedPillar && !selectedActivity ? (
        /* Pillar Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillarActivities.pillarStats.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              onClick={() => handlePillarSelect(pillar.pillar)}
            />
          ))}
        </div>
      ) : !selectedActivity ? (
        /* Activity List View */
        <PillarActivityList
          pillarName={selectedPillar}
          activities={getPillarData(selectedPillar)}
          onActivitySelect={handleActivitySelect}
          onBack={handleBack}
        />
      ) : (
        /* Activity Detail View */
        <PillarActivityDetail
          activity={selectedActivity}
          pillarName={selectedPillar}
          onBack={handleBack}
        />
      )}
    </>
  );
};

export default PillarActivitySection;
