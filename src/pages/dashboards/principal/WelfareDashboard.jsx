import React, { useState } from "react";
import { Download } from "lucide-react";
import { welfareDashboardData } from "../../../data/principalData.jsx";

// Components
import WelfareStats from "../../../components/dashboard/principal/WelfareDashboard/WelfareStats";
import IncidentHeatmap from "../../../components/dashboard/principal/WelfareDashboard/IncidentHeatmap";
import CounselorReferrals from "../../../components/dashboard/principal/WelfareDashboard/CounselorReferrals";
import WelfareAlerts from "../../../components/dashboard/principal/WelfareDashboard/WelfareAlerts";
import PositiveRecognitions from "../../../components/dashboard/principal/WelfareDashboard/PositiveRecognitions";

const WelfareDashboard = () => {
  const {
    stats,
    incidentHeatmap,
    counselorReferrals,
    positiveRecognitions,
    pendingAlerts,
  } = welfareDashboardData;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
                Behavior & Welfare Dashboard
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 font-medium">
                Student well-being oversight • Discipline & counseling
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Download Report</span>
                <span className="sm:hidden">Download</span>
                <span className="text-[8px] sm:text-[9px] opacity-70 ml-0.5 sm:ml-1">
                  (get in app)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <WelfareStats stats={stats} />

      {/* Behavior Incident Heatmap */}
      <IncidentHeatmap heatmapData={incidentHeatmap} />

      {/* Counselor Referrals & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Counselor Referrals */}
        <CounselorReferrals referrals={counselorReferrals} />

        {/* Pending Alerts */}
        <WelfareAlerts alerts={pendingAlerts} />
      </div>

      {/* Positive Recognition Board */}
      <PositiveRecognitions recognitions={positiveRecognitions} />
    </div>
  );
};

export default WelfareDashboard;
