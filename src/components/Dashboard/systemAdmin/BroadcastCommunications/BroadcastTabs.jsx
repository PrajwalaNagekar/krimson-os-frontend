import React from "react";

const BroadcastTabs = ({ selectedTab, onTabChange }) => {
  const tabs = [
    { id: "all", label: "All" },
    { id: "delivered", label: "Delivered" },
    { id: "scheduled", label: "Scheduled" },
    { id: "draft", label: "Draft" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedTab === tab.id
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default BroadcastTabs;
