import React from "react";
import { BookOpen } from "lucide-react";
import ResourceCard from "./ResourceCard";

const ResourceGrid = ({
  resources,
  onResourceClick,
  searchQuery,
  filterSubject,
  filterGrade,
  filterFormat,
}) => {
  // Empty State
  if (resources.length === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-md text-center">
        <BookOpen className="mx-auto text-slate-300 mb-3" size={48} />
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          No Resources Found
        </h3>
        <p className="text-sm text-slate-500">
          {searchQuery ||
          filterSubject !== "all" ||
          filterGrade !== "all" ||
          filterFormat !== "all"
            ? "Try adjusting your filters"
            : "No resources available"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onClick={() => onResourceClick(resource)}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;
