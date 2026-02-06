import React, { useState } from "react";
import { Calendar, FileText, Users } from "lucide-react";
import { PARENT_DATA } from "../../../data/ParentData";
import {
  PTMBookingSection,
  PTMNotesSection,
  ParentCirclesSection,
} from "../../../components/dashboard/parent/MeetingsCircles";

const MeetingsCircles = () => {
  const [activeSection, setActiveSection] = useState("booking");
  const { meetingsCirclesData } = PARENT_DATA;

  const sections = [
    {
      id: "booking",
      name: "PTM Booking",
      icon: Calendar,
      gradient: "from-cyan-400 via-blue-400 to-indigo-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      id: "notes",
      name: "Notes & Actions",
      icon: FileText,
      gradient: "from-pink-400 via-purple-400 to-indigo-500",
      bgGradient: "from-pink-50 to-purple-50",
    },
    {
      id: "circles",
      name: "Parent Circles",
      icon: Users,
      gradient: "from-green-400 via-emerald-400 to-cyan-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "booking":
        return (
          <PTMBookingSection ptmBooking={meetingsCirclesData.ptmBooking} />
        );
      case "notes":
        return <PTMNotesSection ptmNotes={meetingsCirclesData.ptmNotes} />;
      case "circles":
        return (
          <ParentCirclesSection
            parentCircles={meetingsCirclesData.parentCircles}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white p-8 rounded-b-3xl shadow-2xl mb-8">
        <h1 className="text-4xl font-black mb-2">Meetings & Circles</h1>
        <p className="text-blue-50 text-lg">
          Connect with teachers and join our parent community
        </p>
      </div>

      {/* Section Toggle Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 transform ${
                  isActive
                    ? "scale-105 shadow-2xl border-2 border-white/50"
                    : "scale-100 shadow-lg hover:scale-[1.03] hover:shadow-2xl border-2 border-transparent"
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isActive ? section.gradient : section.bgGradient
                  } transition-all duration-300`}
                />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Content - Horizontal Layout */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Icon
                    className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-700"
                    } group-hover:scale-110`}
                  />
                  <h3
                    className={`text-lg font-bold transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {section.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">{renderContent()}</div>
    </div>
  );
};

export default MeetingsCircles;
