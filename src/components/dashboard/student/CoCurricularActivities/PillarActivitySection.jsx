import React, { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import PillarCard from './PillarCard';
import PillarActivityList from './PillarActivityList';
import PillarActivityDetail from './PillarActivityDetail';

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
      'Imaginarium': pillarActivities.imaginarium,
      'Literary': pillarActivities.literary,
      'Science & Astronomy': pillarActivities.scienceAstronomy,
      'Leadership & Service': pillarActivities.leadershipService,
      'Sports & Wellness': pillarActivities.sportsWellness,
      'Music & Dance': pillarActivities.musicDance,
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
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="text-purple-500" size={24} />
          Pillar Activity Views
          <span className="text-sm font-normal text-slate-500">
            ({pillarActivities.totalPillarActivities} activities)
          </span>
        </h2>
      </div>

      {/* Breadcrumb Navigation */}
      {(selectedPillar || selectedActivity) && (
        <div className="flex items-center gap-2 mb-6 text-sm">
          <button
            onClick={() => {
              setSelectedPillar(null);
              setSelectedActivity(null);
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Pillars
          </button>
          {selectedPillar && (
            <>
              <ChevronRight size={16} className="text-slate-400" />
              <button
                onClick={() => setSelectedActivity(null)}
                className={`font-medium ${
                  selectedActivity ? 'text-blue-600 hover:text-blue-700' : 'text-slate-600'
                }`}
              >
                {selectedPillar}
              </button>
            </>
          )}
          {selectedActivity && (
            <>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="text-slate-600">{selectedActivity.title}</span>
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
    </div>
  );
};

export default PillarActivitySection;
