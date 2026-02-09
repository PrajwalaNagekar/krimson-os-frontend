import React from "react";
import { Download } from "lucide-react";
import { teacherPerformanceData } from "../../../data/principalData.jsx";

// Components
import TeacherStats from "../../../components/dashboard/principal/TeacherPerformance/TeacherStats";
import AIInsights from "../../../components/dashboard/principal/TeacherPerformance/AIInsights";
import TeacherCorrelation from "../../../components/dashboard/principal/TeacherPerformance/TeacherCorrelation";
import DepartmentRadar from "../../../components/dashboard/principal/TeacherPerformance/DepartmentRadar";
import TeacherTable from "../../../components/dashboard/principal/TeacherPerformance/TeacherTable";

const TeacherPerformance = () => {
  const { performanceMetrics, teachers, correlationData, aiInsights } =
    teacherPerformanceData;

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
                Teacher Performance Analytics
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Evaluate teaching effectiveness and engagement • AI-powered
                insights
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

      {/* Key Metrics */}
      <TeacherStats metrics={performanceMetrics} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights - Takes 1 column */}
        <AIInsights insights={aiInsights} />

        {/* Correlation Analysis - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance vs Performance Correlation */}
          <TeacherCorrelation correlationData={correlationData} />

          {/* Department Radar Chart */}
          <DepartmentRadar />
        </div>
      </div>

      {/* Detailed Teacher Performance Table */}
      <TeacherTable teachers={teachers} />
    </div>
  );
};

export default TeacherPerformance;
