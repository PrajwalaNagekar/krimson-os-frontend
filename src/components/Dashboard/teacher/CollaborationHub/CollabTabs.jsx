import React from "react";
import { Users2, FileEdit, Eye, Target } from "lucide-react";

const iconMap = {
  Users2: Users2,
  FileEdit: FileEdit,
  Eye: Eye,
  Target: Target,
};

const CollabTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = iconMap[tab.icon];
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {Icon && <Icon size={16} />}
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CollabTabs;
