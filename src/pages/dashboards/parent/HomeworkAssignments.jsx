import React, { useState } from "react";
import { FileText } from "lucide-react";
import HomeworkHeader from "../../../components/dashboard/parent/HomeworkAssignments/HomeworkHeader";
import HomeworkStats from "../../../components/dashboard/parent/HomeworkAssignments/HomeworkStats";
import HomeworkFilters from "../../../components/dashboard/parent/HomeworkAssignments/HomeworkFilters";
import HomeworkCard from "../../../components/dashboard/parent/HomeworkAssignments/HomeworkCard";
import { homeworkAssignments } from "../../../data/parentData";

const HomeworkAssignments = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [acknowledgments, setAcknowledgments] = useState({});

  const toggleAcknowledgment = (id) => {
    setAcknowledgments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // In future, this will save to API
    console.log(`Acknowledgment toggled for assignment ${id}`);
  };

  const filteredAssignments = homeworkAssignments.filter((assignment) => {
    const matchesFilter =
      activeFilter === "all" ||
      assignment.status.toLowerCase() === activeFilter;
    const matchesSearch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: homeworkAssignments.length,
    pending: homeworkAssignments.filter((a) => a.status === "Pending").length,
    submitted: homeworkAssignments.filter((a) => a.status === "Submitted")
      .length,
    graded: homeworkAssignments.filter((a) => a.status === "Graded").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-6">
      <HomeworkHeader />

      <HomeworkStats stats={stats} />

      <HomeworkFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        stats={stats}
      />

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <FileText className="mx-auto mb-4 text-slate-300" size={64} />
            <h3 className="text-xl font-bold text-slate-600 mb-2">
              No assignments found
            </h3>
            <p className="text-slate-400">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          filteredAssignments.map((assignment) => (
            <HomeworkCard
              key={assignment.id}
              assignment={assignment}
              isAcknowledged={acknowledgments[assignment.id]}
              onToggleAcknowledgment={toggleAcknowledgment}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeworkAssignments;
