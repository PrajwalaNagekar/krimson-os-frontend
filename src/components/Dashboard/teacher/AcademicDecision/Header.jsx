import React from "react";
import { Save, Send, FileText, Award, GraduationCap } from "lucide-react";

const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick(id);
    }}
    className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 relative z-30 ${
      activeTab === id
        ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
        : "text-white/60 hover:text-white hover:bg-white/5"
    }`}
  >
    <Icon size={16} />
    <span className="hidden md:inline">{label}</span>
  </button>
);

const Header = ({ activeTab, setActiveTab, data }) => {
  // Map string icon names to Lucide components if needed in future, but for now we import them directly
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FileText":
        return FileText;
      case "Award":
        return Award;
      case "GraduationCap":
        return GraduationCap;
      default:
        return FileText;
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative Elements - Added pointer-events-none */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
              Academic Management
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Academic Decision Matrix
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-sm uppercase tracking-wider"
            >
              <Save size={18} /> Save Draft
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-white text-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-50 shadow-xl transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <Send size={18} />{" "}
              {activeTab === "certificates"
                ? "Generate Documents"
                : "Submit for Review"}
            </button>
          </div>
        </div>

        {/* Glass Ribbon Tabs - Strictly below the main title */}
        <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
          {data.tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={getIcon(tab.icon)}
              activeTab={activeTab}
              onClick={setActiveTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
