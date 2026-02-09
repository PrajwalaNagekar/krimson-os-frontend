import React from "react";
import { Users, Calendar, UserCheck, Clock } from "lucide-react";

const StaffStats = ({ metrics }) => {
  // Determine icon based on label/index or pass it from data
  // For now, mapping based on index or label pattern
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return Users;
      case 1:
        return Calendar; // Should be Present? Using Calendar for On Leave usually. Let's fix based on original.
      case 2:
        return UserCheck;
      case 3:
        return Clock;
      default:
        return Users;
    }
  };

  // Original UI used specific icons and colors for specific cards:
  // 1. Total Staff: Users, Blue
  // 2. On Leave: Calendar, Orange
  // 3. Substitutions: UserCheck, Blue/Indigo
  // 4. Late Arrivals: Clock, Red

  // Check if metrics is an array (old behavior) or object (new behavior from StaffManagement.jsx)
  // If it's an array, we try to find by label. If object, we access directly.
  const getValue = (label, key, fallback) => {
    if (Array.isArray(metrics)) {
      return metrics.find((m) => m.label === label)?.value || fallback;
    }
    return metrics?.[key] || fallback;
  };

  const cards = [
    {
      label: "Total Staff",
      value: getValue("Total Staff", "totalStaff", "142"),
      icon: Users,
      color: "blue",
      subtext: "Active members",
    },
    {
      label: "On Leave",
      value: getValue("On Leave", "onLeave", "7"),
      icon: Calendar,
      color: "orange",
      subtext: "Today's absences",
    },
    {
      label: "Substitutions",
      value: getValue("Substitutions", "substitutions", "5"),
      icon: UserCheck,
      color: "blue",
      subtext: "Active today",
    },
    {
      label: "Late Arrivals",
      value: getValue("Late Arrivals", "lateArrivals", "3"),
      icon: Clock,
      color: "red",
      subtext: "This week",
    },
  ];

  // We need to use props if possible, but the data structure in `principalData` (staffMetrics)
  // diverted from the original 4 cards.
  // To keep UI unchanged, I will use the data passed but map it carefully,
  // or accept that I might need to adjust `principalData` or just hardcode/use props for the missing ones if they aren't in `staffMetrics`.
  // Let's assume `StaffManagement.jsx` will pass the values.

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {/* Hand-crafting the 4 cards to ensure UI match, using props for values */}
      {/* Card 1: Total Staff */}
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Total Staff
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {metrics?.totalStaff || 142}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Active members</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      {/* Card 2: On Leave */}
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              On Leave
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
              {metrics?.onLeave || 8}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Today's absences</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      {/* Card 3: Substitutions */}
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Substitutions
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
              {metrics?.substitutions || 5}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <UserCheck className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Active today</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      {/* Card 4: Late Arrivals */}
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Late Arrivals
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-red-600">
              {metrics?.lateArrivals || 3}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">This week</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

export default StaffStats;
