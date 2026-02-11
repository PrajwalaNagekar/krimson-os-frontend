import React, { useState } from "react";
import AbsenceDetail from "./AbsenceDetail";
import SubstituteLeads from "./SubstituteLeads";
import SubstitutionPlanForm from "./SubstitutionPlanForm";

const SubstitutionPlanner = ({ substituteTeachers, initialData }) => {
  const [substitutionData, setSubstitutionData] = useState(
    initialData || {
      absentTeacher: "",
      date: new Date().toISOString().split("T")[0],
      classes: [],
      substitute: null,
      plan: {
        topic: "",
        objective: "",
        activities: "",
        timeSplit: "40m instructions / 20m practice",
      },
    },
  );

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Substitution Context & Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Absence Detail */}
        <div className="lg:col-span-4 space-y-8">
          <AbsenceDetail
            substitutionData={substitutionData}
            setSubstitutionData={setSubstitutionData}
          />
          <SubstituteLeads teachers={substituteTeachers} />
        </div>

        {/* Right: AI Plan Generator */}
        <div className="lg:col-span-8 space-y-8">
          <SubstitutionPlanForm />
        </div>
      </div>
    </div>
  );
};

export default SubstitutionPlanner;
