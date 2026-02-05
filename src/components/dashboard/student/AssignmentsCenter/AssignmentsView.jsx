import React, { useState } from "react";
import { STUDENT_DATA } from "../../../../data/studentData";
import AssignmentCard from "./AssignmentCard";
import AssignmentHistoryModal from "./AssignmentHistoryModal";
import AssignmentDetailModal from "./AssignmentDetailModal";
import AssignmentSubmissionModal from "./AssignmentSubmissionModal";
import AssignmentSubmissionViewModal from "./AssignmentSubmissionViewModal";

const AssignmentsView = () => {
  // --- State Management ---
  const [tab, setTab] = useState("Pending"); // Current active tab
  const [scanningId, setScanningId] = useState(null); // ID of assignment being scanned
  const [scanResults, setScanResults] = useState({}); // Results of AI scan: { id: { score: 12, flagged: true } }
  const [expandedDecisions, setExpandedDecisions] = useState({}); // Toggles for "Why this decision?"
  const [selectedSubject, setSelectedSubject] = useState("All"); // Filter by subject
  const [showHistoryModal, setShowHistoryModal] = useState(false); // Toggle history modal
  const [selectedAssignment, setSelectedAssignment] = useState(null); // Assignment selected for details/history
  const [showDetailModal, setShowDetailModal] = useState(false); // Toggle detail modal
  const [showSubmissionModal, setShowSubmissionModal] = useState(false); // Toggle submission modal
  const [showSubmissionViewModal, setShowSubmissionViewModal] = useState(false); // Toggle view submission modal

  // --- Data Retrieval ---
  const { assignments, masteryData, assignmentHistory } = STUDENT_DATA;

  // --- Helper Functions ---
  const helpers = {
    getDeadlineColor: (days) => {
      if (days <= 1) return "text-red-500 bg-red-50 border-red-100";
      if (days <= 3) return "text-orange-500 bg-orange-50 border-orange-100";
      return "text-green-600 bg-green-50 border-green-100";
    },
    getMasteryColor: (score) => {
      if (score >= 90)
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      if (score >= 75) return "text-green-600 bg-green-50 border-green-200";
      if (score >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
      if (score >= 40) return "text-orange-600 bg-orange-50 border-orange-200";
      return "text-red-600 bg-red-50 border-red-200";
    },
    getMasteryBadge: (status) => {
      const badges = {
        Mastered: "bg-emerald-500 text-white",
        "Strong Pass": "bg-green-500 text-white",
        Pass: "bg-blue-500 text-white",
        Weak: "bg-orange-500 text-white",
        "Not Mastered": "bg-red-500 text-white",
      };
      return badges[status] || "bg-gray-500 text-white";
    },
    getConceptTagColor: (strength) => {
      const colors = {
        strong: "bg-green-100 text-green-700 border-green-300",
        partial: "bg-yellow-100 text-yellow-700 border-yellow-300",
        weak: "bg-red-100 text-red-700 border-red-300",
      };
      return colors[strength] || "bg-gray-100 text-gray-700 border-gray-300";
    },
    onViewSubmissionClick: (assignment) => {
      setSelectedAssignment(assignment);
      setShowSubmissionViewModal(true);
    },
  };

  // --- Event Handlers ---
  const handleScan = (id) => {
    setScanningId(id);
    setTimeout(() => {
      setScanningId(null);
      setScanResults((prev) => ({
        ...prev,
        [id]: { score: Math.floor(Math.random() * 15), flagged: true },
      }));
    }, 2000);
  };

  const toggleDecisionExplanation = (id) => {
    setExpandedDecisions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDetailsClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDetailModal(true);
  };

  const handleUploadClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionModal(true);
  };

  // --- Filter Logic ---
  const uniqueSubjects = ["All", ...new Set(assignments.map((a) => a.subject))];

  const displayedAssignments = assignments.filter((a) => {
    const statusMatch =
      tab === "Pending"
        ? a.status === "Pending" || a.status === "In Progress"
        : a.status === tab;

    const subjectMatch =
      selectedSubject === "All" || a.subject === selectedSubject;

    return statusMatch && subjectMatch;
  });

  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
      {/* Filters and Tabs Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">
        {/* Tab Selector */}
        <div className="flex bg-white/60 p-1.5 rounded-xl w-full md:w-auto border border-gray-100 shadow-inner">
          {["Pending", "Submitted", "Graded"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${tab === t ? "bg-white text-blue-600 shadow-md transform scale-[1.02]" : "text-slate-500 hover:text-slate-700 hover:bg-white/50"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Subject:
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-transparent text-sm font-bold text-slate-700 focus:outline-none cursor-pointer min-w-[120px]"
          >
            {uniqueSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {displayedAssignments.map((assign) => (
          <AssignmentCard
            key={assign.id}
            assign={assign}
            tab={tab}
            masteryData={masteryData[assign.id]}
            scanningId={scanningId}
            scanResults={scanResults}
            handleScan={handleScan}
            expandedDecisions={expandedDecisions}
            toggleDecisionExplanation={toggleDecisionExplanation}
            setSelectedAssignment={setSelectedAssignment}
            setShowHistoryModal={setShowHistoryModal}
            helpers={helpers}
            onDetailsClick={handleDetailsClick}
            onUploadClick={handleUploadClick}
          />
        ))}
        {displayedAssignments.length === 0 && (
          <div className="col-span-full p-12 text-center text-slate-400 font-medium italic">
            No assignments found in this category.
          </div>
        )}
      </div>

      {/* Modals */}
      <AssignmentHistoryModal
        show={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
        selectedAssignment={selectedAssignment}
        assignmentHistory={assignmentHistory}
        helpers={helpers}
      />
      <AssignmentDetailModal
        show={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        assignment={selectedAssignment}
      />
      <AssignmentSubmissionModal
        show={showSubmissionModal}
        onClose={() => setShowSubmissionModal(false)}
        assignment={selectedAssignment}
      />
      <AssignmentSubmissionViewModal
        show={showSubmissionViewModal}
        onClose={() => setShowSubmissionViewModal(false)}
        assignment={selectedAssignment}
      />
    </div>
  );
};

export default AssignmentsView;
