import React, { useState } from "react";
import SupportPlanList from "./SupportPlanList";

const AssignedPlans = ({ plans }) => {
  const [filter, setFilter] = useState("all");

  const filteredPlans = plans.filter((plan) => {
    if (filter === "all") return true;
    if (filter === "active") return plan.status === "Active";
    if (filter === "upcoming") return plan.status === "Upcoming";
    if (filter === "completed") return plan.status === "Completed";
    return true;
  });

  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Assigned Plans</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-slate-200 text-sm rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500/50 outline-none text-slate-600 font-medium shadow-sm hover:border-blue-300 transition-colors cursor-pointer"
        >
          <option value="all">All Plans</option>
          <option value="active">Active</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <SupportPlanList plans={filteredPlans} />
    </div>
  );
};

export default AssignedPlans;
