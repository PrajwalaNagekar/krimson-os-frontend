import React, { useState } from "react";
import WorksheetGenerator from "../../../components/dashboard/teacher/AssessmentTools/WorksheetGenerator";
import QuestionBank from "../../../components/dashboard/teacher/AssessmentTools/QuestionBank";
import AssessmentHeader from "../../../components/dashboard/teacher/AssessmentTools/AssessmentHeader";
import AssessmentNavigation from "../../../components/dashboard/teacher/AssessmentTools/AssessmentNavigation";
import AssessmentFooter from "../../../components/dashboard/teacher/AssessmentTools/AssessmentFooter";

const AssessmentToolsDashboard = () => {
  const [activeTab, setActiveTab] = useState("worksheet"); // 'worksheet' or 'bank'

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Dynamic Header */}
      <AssessmentHeader activeTab={activeTab} />

      {/* Navigation Tabs */}
      <AssessmentNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="min-h-[60vh]">
        {activeTab === "worksheet" ? <WorksheetGenerator /> : <QuestionBank />}
      </div>

      {/* AI Notification Footer */}
      <AssessmentFooter />
    </div>
  );
};

export default AssessmentToolsDashboard;
