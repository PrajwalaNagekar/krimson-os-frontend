import React from "react";
// Force HMR update
import { Download } from "lucide-react";
import { principalDashboardData } from "../../../data/principalData.jsx";

// Components
import KeyMetrics from "../../../components/dashboard/principal/PrincipalDashboard/KeyMetrics";
import AcademicProgress from "../../../components/dashboard/principal/PrincipalDashboard/AcademicProgress";
import QuickAlerts from "../../../components/dashboard/principal/PrincipalDashboard/QuickAlerts";
import AttendanceSnapshot from "../../../components/dashboard/principal/PrincipalDashboard/AttendanceSnapshot";
import FeeOverview from "../../../components/dashboard/principal/PrincipalDashboard/FeeOverview";
import OverdueList from "../../../components/dashboard/principal/PrincipalDashboard/OverdueList";

const PrincipalDashboard = () => {
  const {
    academicProgress,
    overdueStudents,
    metrics,
    feeCollection,
    attendanceSnapshot,
  } = principalDashboardData;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header Section */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
                Principal Dashboard
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                360° Executive Overview • Real-time School Operations
              </p>
            </div>
            <div className="flex gap-3">
              <button className="group flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics - Real-time Count */}
      <KeyMetrics metrics={metrics} />

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Academic Progress Index - Takes 2 columns */}
        <AcademicProgress academicProgress={academicProgress} />

        {/* Right Sidebar - Quick Alerts */}
        <div className="space-y-6">
          <QuickAlerts />
          <AttendanceSnapshot data={attendanceSnapshot} />
        </div>
      </div>

      {/* Fee Collection & Overdue Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FeeOverview data={feeCollection} />
        <OverdueList overdueStudents={overdueStudents} />
      </div>
    </div>
  );
};

export default PrincipalDashboard;
