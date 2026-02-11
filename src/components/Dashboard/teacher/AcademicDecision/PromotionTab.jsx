import React from "react";
import StudentProfileHeader from "./StudentProfileHeader";
import ProgressSection from "./ProgressSection";
import AchievementsSection from "./AchievementsSection";
import DecisionSidebar from "./DecisionSidebar";

const PromotionTab = ({ data }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Student Details Card */}
      <StudentProfileHeader student={data.student} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Progress Documentation */}
        <div className="lg:col-span-8 space-y-8">
          <ProgressSection skills={data.promotion.skills} />
          <AchievementsSection achievements={data.promotion.achievements} />
        </div>

        {/* Right Side: Logic & Decisions */}
        <DecisionSidebar
          evidence={data.promotion.evidence}
          recommendations={data.promotion.recommendations}
          history={data.promotion.history}
        />
      </div>
    </div>
  );
};

export default PromotionTab;
