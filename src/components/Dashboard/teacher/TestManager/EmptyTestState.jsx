import React from "react";
import { FileText } from "lucide-react";

const EmptyTestState = ({ searchQuery, filterType, filterStatus }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center">
      <FileText className="mx-auto text-slate-300 mb-3" size={48} />
      <h3 className="text-lg font-bold text-slate-800 mb-2">No Tests Found</h3>
      <p className="text-sm text-slate-500">
        {searchQuery || filterType !== "all" || filterStatus !== "all"
          ? "Try adjusting your filters"
          : "Create your first test to get started"}
      </p>
    </div>
  );
};

export default EmptyTestState;
