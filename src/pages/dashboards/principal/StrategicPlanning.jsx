import React from "react";
import { Target } from "lucide-react";
import { strategicPlanningData } from "../../../data/principalData.jsx";

// Components
import AnnualObjectives from "../../../components/dashboard/principal/StrategicPlanning/AnnualObjectives";
import KPITracker from "../../../components/dashboard/principal/StrategicPlanning/KPITracker";
import AIRecommendation from "../../../components/dashboard/principal/StrategicPlanning/AIRecommendation";

const StrategicPlanning = () => {
  const { annualObjectives, kpiData, achievementStatus } =
    strategicPlanningData;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Page Header */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-100 via-blue-100 to-cyan-100 rounded-full blur-2xl opacity-40 -ml-24 -mb-24"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Target size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Strategic Planning & Targets
              </h1>
              <p className="text-slate-600 mt-1 text-sm md:text-base">
                Align school goals and measurable academic targets
              </p>
            </div>
          </div>

          {/* Real-time Goal Achievement Indicator */}
          <div className="flex gap-2 flex-wrap">
            {achievementStatus.map((status, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200"
              >
                <div
                  className={`w-3 h-3 rounded-full ${status.color} animate-pulse`}
                ></div>
                <span className="text-xs font-semibold text-slate-700">
                  {status.label}: {status.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Annual Objectives */}
      <AnnualObjectives objectives={annualObjectives} />

      {/* KPI Tracker & AI Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Tracker */}
        <KPITracker kpiData={kpiData} />

        {/* AI Recommendation Widget */}
        <AIRecommendation />
      </div>
    </div>
  );
};

export default StrategicPlanning;
