import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ActionTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
      <button
        onClick={() => setActiveTab("issue")}
        className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "issue" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
      >
        <div className="flex items-center justify-center gap-2">
          <ArrowRight className="w-4 h-4" />
          <span>Issue Books</span>
        </div>
      </button>
      <button
        onClick={() => setActiveTab("return")}
        className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === "return" ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
      >
        <div className="flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Return Books</span>
        </div>
      </button>
    </div>
  );
};

export default ActionTabs;
