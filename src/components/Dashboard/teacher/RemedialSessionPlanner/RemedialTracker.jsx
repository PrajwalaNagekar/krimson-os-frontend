import React from "react";
import TrackerStats from "./TrackerStats";
import StudentProgressTable from "./StudentProgressTable";
import AIInsights from "./AIInsights";

const RemedialTracker = ({ students }) => {
  return (
    <div className="space-y-8">
      {/* Summary Dashboard */}
      <TrackerStats students={students} />

      {/* Progress Tracking Table */}
      <StudentProgressTable students={students} />

      {/* AI3 Insights & Exit Readiness */}
      <AIInsights />
    </div>
  );
};

export default RemedialTracker;
