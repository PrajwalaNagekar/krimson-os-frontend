import React, { useState } from "react";
import {
  BarChart2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Search,
  Download,
  ChevronRight,
  Award,
  AlertCircle,
  Users,
  BookOpen,
  Filter,
} from "lucide-react";

// Import Data
import {
  heatmapData,
  outliers,
  departments,
  grades,
} from "../../../data/principalData.jsx";

// Import Components
import AcademicMonitorHeader from "../../../components/dashboard/principal/AcademicMonitor/AcademicMonitorHeader";
import SummaryStats from "../../../components/dashboard/principal/AcademicMonitor/SummaryStats";
import PerformanceHeatmap from "../../../components/dashboard/principal/AcademicMonitor/PerformanceHeatmap";
import PerformanceOutliers from "../../../components/dashboard/principal/AcademicMonitor/PerformanceOutliers";
import DepartmentAnalysis from "../../../components/dashboard/principal/AcademicMonitor/DepartmentAnalysis";
import WeeklySummary from "../../../components/dashboard/principal/AcademicMonitor/WeeklySummary";

const AcademicMonitor = () => {
  const [selectedView, setSelectedView] = useState("overview");

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <AcademicMonitorHeader />

      {/* Summary Stats */}
      <SummaryStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Section - Takes 2 columns */}
        <PerformanceHeatmap heatmapData={heatmapData} grades={grades} />

        {/* Performance Outliers Sidebar */}
        <PerformanceOutliers outliers={outliers} />
      </div>

      {/* Detailed Department Analysis */}
      <DepartmentAnalysis departments={departments} />

      {/* Weekly Summary Info */}
      <WeeklySummary />
    </div>
  );
};

export default AcademicMonitor;
