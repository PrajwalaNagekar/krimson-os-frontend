import React from "react";
import ComplianceHeader from "../../../components/dashboard/registrar/ComplianceView/ComplianceHeader";
import KpiCards from "../../../components/dashboard/registrar/ComplianceView/KpiCards";
import ComplianceMetricsDashboard from "../../../components/dashboard/registrar/ComplianceView/ComplianceMetricsDashboard";
import MainContentTabs from "../../../components/dashboard/registrar/ComplianceView/MainContentTabs";

const ComplianceView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ComplianceHeader />
        <KpiCards />
        <ComplianceMetricsDashboard />
        <MainContentTabs />
      </div>
    </div>
  );
};

export default ComplianceView;
