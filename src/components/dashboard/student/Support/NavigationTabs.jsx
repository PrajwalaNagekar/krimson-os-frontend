import React from "react";
import { HelpCircle, MessageSquare, Heart, Shield } from "lucide-react";
import { STUDENT_DATA } from "../../../../data/studentData";

const iconMap = {
  FAQs: HelpCircle,
  "Request Help": MessageSquare,
  "Connect with Wellbeing": Heart,
  "Govt & Regulations": Shield,
};

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = STUDENT_DATA.supportData.tabs.map((name) => ({
    name,
    icon: iconMap[name] || HelpCircle,
  }));

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {tabs.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onTabChange(name)}
          className={`px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ${
            activeTab === name
              ? "bg-cyan-500 text-white shadow-cyan-200"
              : "bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Icon size={18} />
          {name}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
