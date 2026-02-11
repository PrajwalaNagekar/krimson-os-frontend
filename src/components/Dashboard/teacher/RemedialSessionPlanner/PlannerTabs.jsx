import React from "react";
import {
  Calendar,
  FileText,
  CheckCircle,
  LineChart,
  Search,
} from "lucide-react";

const PlannerTabs = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const tabs = [
    { id: "upcoming", label: "Upcoming", icon: Calendar },
    { id: "drafts", label: "Drafts", icon: FileText },
    { id: "history", label: "History", icon: CheckCircle },
    { id: "remedial", label: "Remedial Tracker", icon: LineChart },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="flex flex-1 gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full md:w-auto relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search sessions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PlannerTabs;
