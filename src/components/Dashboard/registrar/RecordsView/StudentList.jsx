import React from "react";
import { FolderOpen } from "lucide-react";
import StudentRow from "./StudentRow";

const StudentList = ({ students, selectedStudent, setSelectedStudent }) => {
  return (
    <div className="divide-y divide-slate-100">
      {students.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <div className="flex flex-col items-center justify-center text-slate-400">
            <FolderOpen className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg font-semibold">No students found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        </div>
      ) : (
        students.map((student, index) => (
          <StudentRow
            key={index}
            student={student}
            isExpanded={selectedStudent === student.id}
            toggleExpand={() =>
              setSelectedStudent(
                selectedStudent === student.id ? null : student.id,
              )
            }
          />
        ))
      )}
    </div>
  );
};

export default StudentList;
