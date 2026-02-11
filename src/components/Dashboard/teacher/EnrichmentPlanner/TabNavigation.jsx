import React from "react";
import { Search, Rocket, FileText, CheckCircle, Award } from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const iconMap = {
  Rocket,
  FileText,
  CheckCircle,
  Award,
};

const TabNavigation = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const { tabs } = ENRICHMENT_DATA;

  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="flex flex-1 gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = iconMap[tab.icon];
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Icon size={16} />
                <span className="capitalize">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-auto relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search challenges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-indigo-400 focus:outline-none transition-colors"
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

export default TabNavigation;
