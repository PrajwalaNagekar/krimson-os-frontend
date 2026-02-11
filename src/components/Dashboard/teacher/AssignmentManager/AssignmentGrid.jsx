import React from "react";
import AssignmentCard from "./AssignmentCard";

const AssignmentGrid = ({
  assignments,
  view,
  onSelectAssignment,
  onGradeAssignment,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          assignment={assignment}
          view={view}
          onSelect={onSelectAssignment}
          onGrade={onGradeAssignment}
        />
      ))}
    </div>
  );
};

export default AssignmentGrid;
