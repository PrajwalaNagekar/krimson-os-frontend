import React from "react";
import AwardCategories from "./AwardCategories";
import NominationWorkflow from "./NominationWorkflow";
import NominationForm from "./NominationForm";

const AwardsTab = ({ data }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Category & Selection */}
        <div className="lg:col-span-4 space-y-8">
          <AwardCategories categories={data.awards.categories} />
          <NominationWorkflow workflow={data.awards.workflow} />
        </div>

        {/* Right: Form */}
        <NominationForm />
      </div>
    </div>
  );
};

export default AwardsTab;
