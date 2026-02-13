import React from "react";
import { Filter } from "lucide-react";

const EmptyStaffState = () => {
  return (
    <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Filter size={32} className="text-slate-300" />
      </div>
      <h3 className="text-lg font-bold text-slate-700">No staff found</h3>
      <p className="text-slate-500 max-w-xs mx-auto mt-1">
        Try adjusting your filters to see more results.
      </p>
    </div>
  );
};

export default EmptyStaffState;
