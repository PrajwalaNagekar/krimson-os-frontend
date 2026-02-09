import React from "react";

const AttendanceHeader = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "monthly", label: "Monthly View" },
    { id: "trends", label: "Trends & Stats" },
    { id: "requests", label: "Leave Requests" },
  ];

  return (
    <div className="mb-6">
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Attendance Trends and Summaries
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Track your attendance patterns, view monthly heatmaps, and monitor
            weekly trend
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-xl flex items-center shadow-inner self-start md:self-center overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-lg scale-105"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceHeader;
