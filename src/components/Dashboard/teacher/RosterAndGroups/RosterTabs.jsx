import React from "react";
import { List, LayoutGrid, MessageCircle } from "lucide-react";

const RosterTabs = ({ activeTab, setActiveTab, tabsConfig }) => {
  // Fallback config if not provided
  const tabs = tabsConfig || [
    { id: "roster", label: "Student Roster", icon: "List" },
    { id: "groups", label: "Strategic Groups", icon: "LayoutGrid" },
    { id: "messages", label: "Communication Hub", icon: "MessageCircle" },
  ];

  const iconMap = { List, LayoutGrid, MessageCircle };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 flex flex-col md:flex-row gap-2 md:gap-4 border border-white sticky top-4 z-40 mb-8">
      {tabs.map((tab) => {
        const Icon = iconMap[tab.icon] || List;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4.5 rounded-[1.8rem] text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] scale-[1.02]"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Icon
              size={18}
              className={
                activeTab === tab.id ? "text-blue-400" : "text-slate-400"
              }
            />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default RosterTabs;
