import React, { useState } from "react";
import { Download, CheckCircle, BarChart2, Shield } from "lucide-react";
import { examOversightData } from "../../../data/principalData.jsx";

// Components
import ExamStats from "../../../components/dashboard/principal/ExamOversight/ExamStats";
import ExamApprovals from "../../../components/dashboard/principal/ExamOversight/ExamApprovals";
import ExamResults from "../../../components/dashboard/principal/ExamOversight/ExamResults";
import ExamAudit from "../../../components/dashboard/principal/ExamOversight/ExamAudit";

const ExamOversight = () => {
  const [activeTab, setActiveTab] = useState("approvals");
  const {
    pendingTimetables,
    questionPapers,
    performanceSummaries,
    auditTrail,
  } = examOversightData;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Examination Oversight & Approval
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Supervise schedules, validate papers, publish results
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Report</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <ExamStats
        pendingTimetablesCount={pendingTimetables.length}
        auditTrailCount={auditTrail.length}
      />

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex gap-2 border-b border-slate-200 p-2">
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "approvals"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("approvals")}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Pending Approvals
            {pendingTimetables.length + questionPapers.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white rounded-full text-xs font-bold">
                {pendingTimetables.length + questionPapers.length}
              </span>
            )}
          </button>
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "results"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("results")}
          >
            <BarChart2 className="w-4 h-4 inline mr-2" />
            Results & Publication
          </button>
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "audit"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("audit")}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Audit Trail
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "approvals" && (
            <ExamApprovals
              pendingTimetables={pendingTimetables}
              questionPapers={questionPapers}
            />
          )}

          {activeTab === "results" && (
            <ExamResults performanceSummaries={performanceSummaries} />
          )}

          {activeTab === "audit" && <ExamAudit auditTrail={auditTrail} />}
        </div>
      </div>
    </div>
  );
};

export default ExamOversight;
