import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  CafeteriaMenu,
  TransportUpdates,
} from "../../../components/dashboard/student/Facilities";
import { Bus, UtensilsCrossed, Sparkles } from "lucide-react";

const Facilities = () => {
  const { cafeteriaMenu, transportUpdates } = STUDENT_DATA.facilitiesData;
  const [activeSection, setActiveSection] = useState("transport");

  // Color scheme matching student sidebar
  const gradientBg = "bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400";

  const sections = [
    {
      id: "transport",
      title: "Transport Updates",
      icon: Bus,
      description: "Real-time bus alerts and route information",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "cafeteria",
      title: "Cafeteria Menu",
      icon: UtensilsCrossed,
      description: "Daily menu with nutritional information",
      color: "from-pink-400 to-purple-500",
    },
  ];

  return (
    <div className="space-y-8 pb-10 max-w-7xl mx-auto animate-fade-in-up">
      {/* Header Section */}
      <div
        className={`${gradientBg} rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden`}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Facilities</h1>
              <p className="text-white/90 text-sm md:text-base">
                School amenities and services at your fingertips
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`relative group p-6 rounded-2xl border-3 transition-all duration-300 text-left ${
                isActive
                  ? `bg-gradient-to-br ${section.color} text-white shadow-xl scale-105 border-transparent`
                  : "bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 border-gray-200 hover:border-cyan-300 hover:shadow-lg hover:scale-102"
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -top-2 -right-2 bg-white text-cyan-600 rounded-full p-2 shadow-lg animate-bounce">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`p-4 rounded-xl transition-colors ${
                    isActive
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-200 group-hover:to-blue-200"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isActive ? "text-white" : "text-cyan-600"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-2 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base ${
                      isActive ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Click indicator */}
              <div
                className={`mt-4 pt-4 border-t ${
                  isActive ? "border-white/20" : "border-gray-200"
                }`}
              >
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-white" : "text-cyan-600"
                  }`}
                >
                  {isActive ? "✓ Active" : "Click to view"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Details Section with smooth transition */}
      <div className="relative">
        {/* Transport Details */}
        <div
          className={`transition-all duration-500 ${
            activeSection === "transport"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
          }`}
        >
          {activeSection === "transport" && (
            <TransportUpdates
              transportData={transportUpdates}
              userTransport={STUDENT_DATA.user.transport}
            />
          )}
        </div>

        {/* Cafeteria Details */}
        <div
          className={`transition-all duration-500 ${
            activeSection === "cafeteria"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
          }`}
        >
          {activeSection === "cafeteria" && (
            <CafeteriaMenu menuData={cafeteriaMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
