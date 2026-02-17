import React from "react";
import { Users, Calendar, Filter } from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../../data/coordinatorData";

const AssignmentHeader = ({
  selectedYear,
  onYearChange,
  selectedGrade,
  onGradeChange,
  selectedSubject,
  onSubjectChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col gap-4">
        {/* Title Row */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              {TEACHER_ASSIGNMENT_DATA.header.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">
              {TEACHER_ASSIGNMENT_DATA.header.subtitle}
            </p>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Academic Year Selector */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 px-4 py-2 rounded-lg border border-blue-100">
            <Calendar className="h-4 w-4 text-blue-600" />
            <select
              value={selectedYear}
              onChange={(e) => onYearChange(e.target.value)}
              className="bg-transparent border-none outline-none font-medium text-gray-900 cursor-pointer text-sm"
            >
              {TEACHER_ASSIGNMENT_DATA.academicYears.map((year) => (
                <option key={year.id} value={year.id}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>

          {/* Grade Filter */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 px-4 py-2 rounded-lg border border-blue-100">
            <Filter className="h-4 w-4 text-cyan-600" />
            <select
              value={selectedGrade}
              onChange={(e) => onGradeChange(e.target.value)}
              className="bg-transparent border-none outline-none font-medium text-gray-900 cursor-pointer text-sm"
            >
              <option value="all">All Grades</option>
              {TEACHER_ASSIGNMENT_DATA.grades.map((grade) => (
                <option key={grade.id} value={grade.id}>
                  {grade.name} {grade.section}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 px-4 py-2 rounded-lg border border-blue-100">
            <Filter className="h-4 w-4 text-pink-600" />
            <select
              value={selectedSubject}
              onChange={(e) => onSubjectChange(e.target.value)}
              className="bg-transparent border-none outline-none font-medium text-gray-900 cursor-pointer text-sm"
            >
              <option value="all">All Subjects</option>
              {TEACHER_ASSIGNMENT_DATA.subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentHeader;
