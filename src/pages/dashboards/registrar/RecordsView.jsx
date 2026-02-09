import React, { useState } from "react";
import { RECORDS_DATA } from "../../../data/registrarData";
import Header from "../../../components/dashboard/registrar/RecordsView/Header";
import StatsOverview from "../../../components/dashboard/registrar/RecordsView/StatsOverview";
import RecordsToolbar from "../../../components/dashboard/registrar/RecordsView/RecordsToolbar";
import RecordsFilter from "../../../components/dashboard/registrar/RecordsView/RecordsFilter";
import StudentList from "../../../components/dashboard/registrar/RecordsView/StudentList";

const RecordsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState("active"); // 'active' or 'archived'

  // Filter students based on search and filters
  const filteredStudents = RECORDS_DATA.students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "all" || student.class === selectedClass;
    const matchesStatus =
      selectedStatus === "all" || student.status === selectedStatus;

    return matchesSearch && matchesClass && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header Section */}
        <Header />

        {/* KPI Cards */}
        <StatsOverview stats={RECORDS_DATA.stats} />

        {/* View Mode Toggle & Actions */}
        <RecordsToolbar viewMode={viewMode} setViewMode={setViewMode} />

        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <RecordsFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            totalStudents={RECORDS_DATA.students.length}
            filteredCount={filteredStudents.length}
          />

          {/* Students List */}
          <StudentList
            students={filteredStudents}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        </div>
      </div>
    </div>
  );
};

export default RecordsView;
