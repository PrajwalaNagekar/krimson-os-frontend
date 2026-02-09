import React from "react";
import { Mail } from "lucide-react";
import { staffManagementData } from "../../../data/principalData.jsx";

// Components
import StaffStats from "../../../components/dashboard/principal/StaffManagement/StaffStats";
import DepartmentDirectory from "../../../components/dashboard/principal/StaffManagement/DepartmentDirectory";
import SubstitutionRequests from "../../../components/dashboard/principal/StaffManagement/SubstitutionRequests";
import WeeklyAttendance from "../../../components/dashboard/principal/StaffManagement/WeeklyAttendance";

const StaffManagement = () => {
  // Extract data from principalData
  const {
    departments,
    substitutionRequests,
    weeklyAttendance,
    // Using staffMetrics stats for the cards if available or hardcoded in component for now as per design decision to match UI exactness
  } = staffManagementData;

  // These values were originally hardcoded in the component.
  // We can pass them to StaffStats.
  const metrics = {
    totalStaff: 142,
    onLeave: 8,
    substitutions: 5,
    lateArrivals: 3,
  };

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
                Staff & Department Management
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Staff allocation oversight • Departmental efficiency
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Send Circular</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <StaffStats metrics={metrics} />

      {/* Department Directory */}
      <DepartmentDirectory departments={departments} />

      {/* Substitution Requests & Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Substitution Approvals */}
        <SubstitutionRequests requests={substitutionRequests} />

        {/* Staff Attendance & Punctuality */}
        <WeeklyAttendance
          weeklyAttendance={weeklyAttendance}
          lateArrivals={metrics.lateArrivals}
        />
      </div>
    </div>
  );
};

export default StaffManagement;
