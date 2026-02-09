import React from "react";

const LessonApprovalTabs = ({ selectedTab, setSelectedTab, pendingCount }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
      <button
        onClick={() => setSelectedTab("pending")}
        className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${selectedTab === "pending" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
      >
        Pending Review ({pendingCount})
      </button>
      <button
        onClick={() => setSelectedTab("log")}
        className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all ${selectedTab === "log" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
      >
        Approval Log
      </button>
    </div>
  );
};

export default LessonApprovalTabs;
