import React, { useState } from "react";
import { BarChart3 } from "lucide-react";
import { reportsGeneratorData } from "../../../data/principalData.jsx";

// Components
import ReportsFilterBar from "../../../components/dashboard/principal/ReportsGenerator/ReportsFilterBar";
import ReportCategoryCard from "../../../components/dashboard/principal/ReportsGenerator/ReportCategoryCard";
import ScheduledReportsSection from "../../../components/dashboard/principal/ReportsGenerator/ScheduledReportsSection";
import FeaturesInfo from "../../../components/dashboard/principal/ReportsGenerator/FeaturesInfo";

const ReportsGenerator = () => {
  const [selectedFormat, setSelectedFormat] = useState("PDF");
  const [dateRange, setDateRange] = useState("current-term");

  const { reportCategories, scheduledReports } = reportsGeneratorData;

  const handleGenerateReport = (reportTitle) => {
    console.log(`Generating report: ${reportTitle}`);
    // API integration will be added here
  };

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 sm:w-72 h-64 sm:h-72 bg-white/20 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 h-48 sm:h-56 bg-pink-500/30 rounded-full blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Reports & Insights Generator
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Real-time analytical and compliance reporting
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Analytics</span>
                <span className="sm:hidden">Stats</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                  (get in app)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <ReportsFilterBar
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      {/* Report Categories */}
      <div>
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
            Report Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select a category to generate detailed reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reportCategories.map((category, idx) => (
            <ReportCategoryCard
              key={idx}
              {...category}
              onGenerate={() => handleGenerateReport(category.title)}
            />
          ))}
        </div>
      </div>

      {/* Automated Scheduling Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <ScheduledReportsSection scheduledReports={scheduledReports} />

        {/* Integration & Features Info */}
        <FeaturesInfo />
      </div>
    </div>
  );
};

export default ReportsGenerator;
