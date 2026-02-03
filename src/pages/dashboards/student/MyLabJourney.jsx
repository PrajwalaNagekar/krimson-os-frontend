import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Calendar, Shield, BookOpen, Eye, Lightbulb, Heart } from 'lucide-react';

// Import components
import LabBooking from '../../../components/dashboard/student/MyLabJourney/LabBooking';
import LabSafetyInstructions from '../../../components/dashboard/student/MyLabJourney/LabSafetyInstructions';
import LabLogbook from '../../../components/dashboard/student/MyLabJourney/LabLogbook';
import ObservationNotes from '../../../components/dashboard/student/MyLabJourney/ObservationNotes';
import InferenceBuilder from '../../../components/dashboard/student/MyLabJourney/InferenceBuilder';
import ReflectionJournal from '../../../components/dashboard/student/MyLabJourney/ReflectionJournal';

const MyLabJourney = () => {
  const [activeTab, setActiveTab] = useState('booking');
  const { labJourney } = STUDENT_DATA;

  const tabs = [
    { id: 'booking', name: 'Lab Booking', icon: <Calendar size={18} />, count: labJourney.labBookings.filter(b => b.status === 'upcoming').length },
    { id: 'safety', name: 'Safety', icon: <Shield size={18} />, count: null },
    { id: 'logbook', name: 'Logbook', icon: <BookOpen size={18} />, count: labJourney.labLogbook.length },
    { id: 'observations', name: 'Observations', icon: <Eye size={18} />, count: labJourney.observationNotes.length },
    { id: 'inference', name: 'Inference', icon: <Lightbulb size={18} />, count: labJourney.inferences.length },
    { id: 'reflection', name: 'Reflection', icon: <Heart size={18} />, count: labJourney.reflectionJournal.length },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'booking':
        return <LabBooking data={labJourney.labBookings} />;
      case 'safety':
        return <LabSafetyInstructions data={labJourney.safetyInstructions} />;
      case 'logbook':
        return <LabLogbook data={labJourney.labLogbook} />;
      case 'observations':
        return <ObservationNotes data={labJourney.observationNotes} />;
      case 'inference':
        return <InferenceBuilder data={labJourney.inferences} />;
      case 'reflection':
        return <ReflectionJournal data={labJourney.reflectionJournal} />;
      default:
        return <LabBooking data={labJourney.labBookings} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                🧪
              </div>
              My Lab Journey
            </h1>
            <p className="text-white/90 mt-2 font-medium">
              🔬 Track experiments • 📊 Record observations • 💡 Build inferences • 🎯 Reflect & grow
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
              <div className="text-2xl font-bold text-white">{labJourney.labBookings.filter(b => b.status === 'upcoming').length}</div>
              <div className="text-xs text-white/80 font-medium">Upcoming Labs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
              <div className="text-2xl font-bold text-white">{labJourney.labLogbook.filter(l => l.status === 'completed').length}</div>
              <div className="text-xs text-white/80 font-medium">Completed</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
              {tab.count !== null && (
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[600px]">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default MyLabJourney;
