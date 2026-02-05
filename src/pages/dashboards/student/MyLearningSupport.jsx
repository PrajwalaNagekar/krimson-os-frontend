import React from "react";
import { STUDENT_DATA } from "../../../data/studentData"; // Adjust path if needed
import LearningSupportHeader from "../../../components/dashboard/student/MyLearningSupport/LearningSupportHeader";
import AssignedPlans from "../../../components/dashboard/student/MyLearningSupport/AssignedPlans";
import GrowthInsightCard from "../../../components/dashboard/student/MyLearningSupport/GrowthInsightCard";
import SupportResources from "../../../components/dashboard/student/MyLearningSupport/SupportResources";

const MyLearningSupport = () => {
  // Access the learning support data.
  // Fallback to empty array if not found to prevent crashes during dev
  const learningSupport = STUDENT_DATA.user.learningSupport || {};
  const plans = learningSupport.plans || [];
  const insight = learningSupport.insight;
  const resources = learningSupport.resources || [];
  const activePlansCount = plans.filter((p) => p.status === "Active").length;

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 lg:p-10 space-y-8 !pb-24">
      {/* Header Section */}
      <LearningSupportHeader activePlansCount={activePlansCount} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Plans List (2/3 width) */}
        <AssignedPlans plans={plans} />

        {/* Right Column: Info & Tips (1/3 width) - "Mixed" Data Control */}
        <div className="space-y-6">
          {/* AI Insight / Static Tip */}
          <GrowthInsightCard insight={insight} />

          {/* Quick Links / Resources */}
          <SupportResources resources={resources} />
        </div>
      </div>
    </div>
  );
};

export default MyLearningSupport;
