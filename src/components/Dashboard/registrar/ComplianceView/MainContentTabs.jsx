import React, { useState } from "react";
import { ClipboardCheck, FileText, Upload } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/registrarData";
import ChecklistTab from "./ChecklistTab";
import ReportsTab from "./ReportsTab";
import SubmissionsTab from "./SubmissionsTab";

const MainContentTabs = () => {
  const [selectedTab, setSelectedTab] = useState("checklist"); // checklist, reports, submissions
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredChecklist = COMPLIANCE_DATA.monthlyChecklist.filter((item) => {
    if (filterStatus === "all") return true;
    return item.status === filterStatus;
  });

  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Tab Navigation */}
      <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-4 lg:p-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-4">
          <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm overflow-x-auto">
            <button
              onClick={() => setSelectedTab("checklist")}
              className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === "checklist" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
            >
              <span className="flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" />
                Monthly Checklist
              </span>
            </button>
            <button
              onClick={() => setSelectedTab("reports")}
              className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === "reports" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Auto-Generate Reports
              </span>
            </button>
            <button
              onClick={() => setSelectedTab("submissions")}
              className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${selectedTab === "submissions" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md" : "text-slate-600 hover:text-slate-800"}`}
            >
              <span className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Statutory Submissions
              </span>
            </button>
          </div>

          {/* Filter for Checklist */}
          {selectedTab === "checklist" && (
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold text-slate-700"
            >
              <option value="all">All Items</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {selectedTab === "checklist" && (
          <ChecklistTab checklist={filteredChecklist} />
        )}
        {selectedTab === "reports" && <ReportsTab />}
        {selectedTab === "submissions" && <SubmissionsTab />}
      </div>
    </div>
  );
};

export default MainContentTabs;
