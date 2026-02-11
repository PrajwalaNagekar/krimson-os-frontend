import React, { useState } from "react";
import WorkloadAnalysis from "./WorkloadAnalysis";
import AIBalancerSidebar from "./AIBalancerSidebar";

const HomeworkLoadBalancer = ({
  initialLoad,
  aiBalancingInsights,
  policyConstraints,
}) => {
  const [homeworkLoad, setHomeworkLoad] = useState(initialLoad);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Homework Load Balancer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <WorkloadAnalysis homeworkLoad={homeworkLoad} />

        {/* AI Balancer Sidebar */}
        <div className="space-y-6">
          {/* Passed as a single component wrapper or directly used here. 
              Since the sidebar has 2 distinct blocks in original code but I grouped them in AIBalancerSidebar
           */}
          <AIBalancerSidebar
            aiBalancingInsights={aiBalancingInsights}
            policyConstraints={policyConstraints}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeworkLoadBalancer;
