import React from "react";
import AIPreparationChecklist from "./AIPreparationChecklist";
import HomeworkReminders from "./HomeworkReminders";
import CCABlocks from "./CCABlocks";

const PlanningSection = ({ checklist, homeworkList, ccaBlocks }) => {
  return (
    <div className="space-y-6">
      <AIPreparationChecklist checklist={checklist} />
      <HomeworkReminders homeworkList={homeworkList} />
      <CCABlocks ccaBlocks={ccaBlocks} />
    </div>
  );
};

export default PlanningSection;
