import React from "react";
import { Users } from "lucide-react";

const EmptyState = ({ searchQuery, filterRisk }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center">
      <Users className="mx-auto text-slate-300 mb-3" size={48} />
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        No Students Found
      </h3>
      <p className="text-sm text-slate-500">
        {searchQuery || filterRisk !== "all"
          ? "Try adjusting your filters"
          : "No students available"}
      </p>
    </div>
  );
};

export default EmptyState;
