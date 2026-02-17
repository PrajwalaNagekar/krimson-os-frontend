import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, BookOpen, Users } from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../data/coordinatorData";

/**
 * Page: Total Assignments
 * Purpose: Display all current teacher assignments
 * Features:
 * - View all assignments
 * - Filter by grade and subject
 * - Premium table/card view
 */

const TotalAssignments = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGrade, setFilterGrade] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");

  const currentAssignments =
    TEACHER_ASSIGNMENT_DATA.assignmentsByYear["2024-25"] || [];

  const filteredAssignments = currentAssignments.filter((assignment) => {
    const matchesSearch =
      assignment.teacherName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      assignment.gradeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.subjectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade =
      filterGrade === "all" || assignment.gradeId === filterGrade;
    const matchesSubject =
      filterSubject === "all" || assignment.subjectId === filterSubject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/coordinator/teacher-assignment")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                All Assignments
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Current academic year teacher assignments
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 rounded-lg text-white">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">
                {currentAssignments.length} Assignments
              </span>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search assignments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="all">All Grades</option>
              {TEACHER_ASSIGNMENT_DATA.grades.map((grade) => (
                <option key={grade.id} value={grade.id}>
                  {grade.name} {grade.section}
                </option>
              ))}
            </select>
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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

        {/* Assignments Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 flex-wrap">
                {/* Teacher Info */}
                <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Teacher</p>
                    <p className="font-semibold text-gray-900">
                      {assignment.teacherName}
                    </p>
                  </div>
                </div>

                {/* Grade Info */}
                <div className="flex items-center gap-3 flex-1 min-w-[150px]">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-pink-500 rounded-lg shadow-lg">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Grade</p>
                    <p className="font-semibold text-gray-900">
                      {assignment.gradeName}
                    </p>
                  </div>
                </div>

                {/* Subject Info */}
                <div className="flex items-center gap-3 flex-1 min-w-[150px]">
                  <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-lg shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Subject</p>
                    <p className="font-semibold text-gray-900">
                      {assignment.subjectName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAssignments.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <CheckCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No assignments found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalAssignments;
