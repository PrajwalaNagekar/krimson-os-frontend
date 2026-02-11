import React from "react";
import StudentCard from "./StudentCard";

const StudentGrid = ({ students, setSelectedStudent }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onClick={() => setSelectedStudent(student)}
        />
      ))}
    </div>
  );
};

export default StudentGrid;
