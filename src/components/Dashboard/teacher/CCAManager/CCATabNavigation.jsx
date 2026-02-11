import React from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Award,
  CheckCircle2,
} from "lucide-react";

const CCATabNavigation = ({ activeTab, setActiveTab }) => {
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 md:gap-3 ${
        activeTab === id
          ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
          : "text-white/60 hover:text-white hover:bg-white/5"
      }`}
    >
      <Icon size={16} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
      <TabButton id="dashboard" label="Dashboard" icon={LayoutDashboard} />
      <TabButton id="management" label="Clubs" icon={Users} />
      <TabButton id="planner" label="Planner" icon={Calendar} />
      <TabButton id="attendance" label="Attendance" icon={CheckCircle2} />
      <TabButton id="review" label="Badges" icon={Award} />
    </div>
  );
};

export default CCATabNavigation;
