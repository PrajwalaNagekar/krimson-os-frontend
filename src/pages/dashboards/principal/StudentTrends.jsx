import React from "react";
import { Download } from "lucide-react";
import { studentTrendsData } from "../../../data/principalData.jsx";

// Components
import StudentTrendsStats from "../../../components/dashboard/principal/StudentTrends/StudentTrendsStats";
import AttendanceHeatmap from "../../../components/dashboard/principal/StudentTrends/AttendanceHeatmap";
import ClassRankings from "../../../components/dashboard/principal/StudentTrends/ClassRankings";
import CorrelationAnalysis from "../../../components/dashboard/principal/StudentTrends/CorrelationAnalysis";
import AbsenteeismAlerts from "../../../components/dashboard/principal/StudentTrends/AbsenteeismAlerts";

const StudentTrends = () => {
  const {
    heatmapData,
    classRankings,
    absenteeismAlerts,
    correlationData,
    trendStats,
  } = studentTrendsData;

  const { topClasses, bottomClasses } = classRankings;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Attendance & Student Trends
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Monitor attendance patterns • Early intervention support
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Report</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <StudentTrendsStats stats={trendStats} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Heatmap - Takes 2 columns */}
        <AttendanceHeatmap heatmapData={heatmapData} />

        {/* Class Rankings Sidebar */}
        <ClassRankings topClasses={topClasses} bottomClasses={bottomClasses} />
      </div>

      {/* Correlation Graph & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance vs Academic Correlation */}
        <CorrelationAnalysis correlationData={correlationData} />

        {/* Chronic Absenteeism Alerts */}
        <AbsenteeismAlerts alerts={absenteeismAlerts} />
      </div>
    </div>
  );
};

export default StudentTrends;
