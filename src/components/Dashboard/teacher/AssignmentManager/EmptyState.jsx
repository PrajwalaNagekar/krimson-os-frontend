import React from "react";
import { FileText } from "lucide-react";

const EmptyState = ({ searchQuery, viewMode, onClearFilters }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center border-2 border-dashed border-slate-200">
      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <FileText className="text-slate-400" size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        No Assignments Found
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        {searchQuery
          ? "Try adjusting your search query"
          : "No assignments match the selected filter"}
      </p>
      {(searchQuery || viewMode !== "all") && (
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;
