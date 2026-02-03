import React from "react";
import SupportPlanCard from "./SupportPlanCard";
import { motion } from "framer-motion";

const SupportPlanList = ({ plans }) => {
  if (!plans || plans.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-3xl">
          🔍
        </div>
        <h3 className="text-xl font-bold text-slate-800">
          No Learning Support Plans Found
        </h3>
        <p className="text-slate-500 mt-2 max-w-md">
          You don't have any active support plans at the moment. Great job!
          Check back if your teachers assign any specific interventions.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {plans.map((plan, index) => (
        <SupportPlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default SupportPlanList;
