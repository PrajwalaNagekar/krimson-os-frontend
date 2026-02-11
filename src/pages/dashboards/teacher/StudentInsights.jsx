import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import SuccessToast from "../../../components/common/SuccessToast";
import InterventionQueue from "../../../components/dashboard/teacher/StudentInsights/InterventionQueue";
import ConferenceNotes from "../../../components/dashboard/teacher/StudentInsights/ConferenceNotes";
import StudentInsightsHeader from "../../../components/dashboard/teacher/StudentInsights/StudentInsightsHeader";
import QuickStats from "../../../components/dashboard/teacher/StudentInsights/QuickStats";
import PrivacyNotice from "../../../components/dashboard/teacher/StudentInsights/PrivacyNotice";
import SearchFilters from "../../../components/dashboard/teacher/StudentInsights/SearchFilters";
import StudentGrid from "../../../components/dashboard/teacher/StudentInsights/StudentGrid";
import EmptyState from "../../../components/dashboard/teacher/StudentInsights/EmptyState";
import IncidentReportForm from "../../../components/dashboard/teacher/StudentInsights/IncidentReportForm";
import StudentDetailModal from "../../../components/dashboard/teacher/StudentInsights/StudentDetailModal";
import FeedbackModal from "../../../components/dashboard/teacher/StudentInsights/FeedbackModal";
import BehaviorLogModal from "../../../components/dashboard/teacher/StudentInsights/BehaviorLogModal";

const StudentInsights = () => {
  // Sample student data from centralized data
  const [students, setStudents] = useState(
    TEACHER_DATA.studentInsights?.students || [],
  );

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRisk, setFilterRisk] = useState("all"); // 'all', 'atRisk', 'onTrack'
  const [insightMode, setInsightMode] = useState("analytics"); // 'analytics', 'intervention', 'conference'

  // Modals handle
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    subject: "",
    comment: "",
    type: "positive",
  });
  const [newLog, setNewLog] = useState({
    type: "commendation",
    note: "",
    encrypted: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ isOpen: false, message: "" });

  // Incident Report State
  const [incidentForm, setIncidentForm] = useState({
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().slice(0, 5),
    location: "",
    type: "",
    severity: "medium",
    description: "",
    primaryStudent: null,
    involvedStudents: [],
    witnesses: "",
    actions: [],
    recommendations: [],
  });

  // Filter students
  const filteredStudents = students.filter((student) => {
    // Filter by risk status
    if (filterRisk !== "all") {
      if (filterRisk === "atRisk" && !student.atRisk) return false;
      if (filterRisk === "onTrack" && student.atRisk) return false;
    }

    // Filter by search
    if (searchQuery) {
      return (
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery)
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: students.length,
    atRisk: students.filter((s) => s.atRisk).length,
    avgAttendance:
      students.length > 0
        ? (
            students.reduce((sum, s) => sum + s.attendance, 0) / students.length
          ).toFixed(1)
        : 0,
    avgGrade:
      students.length > 0
        ? (
            students.reduce((sum, s) => sum + s.avgGrade, 0) / students.length
          ).toFixed(1)
        : 0,
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/student-insights')
    //   .then(res => res.json())
    //   .then(data => setStudents(data));
    console.log("Student Insights loaded - Ready for API integration");
  }, []);

  // Sync selectedStudent when students array changes
  useEffect(() => {
    if (selectedStudent) {
      const updated = students.find((s) => s.id === selectedStudent.id);
      if (updated) setSelectedStudent(updated);
    }
  }, [students]);

  // Handle Add Feedback
  const handleAddFeedback = () => {
    if (!newFeedback.subject || !newFeedback.comment) return;

    const feedbackEntry = {
      ...newFeedback,
      date: new Date().toISOString().split("T")[0],
      teacher: TEACHER_DATA.user.name,
    };

    setStudents((prev) =>
      prev.map((s) =>
        s.id === selectedStudent.id
          ? { ...s, feedbackHistory: [feedbackEntry, ...s.feedbackHistory] }
          : s,
      ),
    );

    setShowFeedbackModal(false);
    setToast({
      isOpen: true,
      message: `Feedback for ${selectedStudent.name} saved successfully.`,
    });
    setNewFeedback({ subject: "", comment: "", type: "positive" });
  };

  // Handle Add Behavior Log
  const handleAddLog = () => {
    if (!newLog.note) return;

    const logEntry = {
      ...newLog,
      date: new Date().toISOString().split("T")[0],
      submittedBy: TEACHER_DATA.user.name,
    };

    setStudents((prev) =>
      prev.map((s) =>
        s.id === selectedStudent.id
          ? { ...s, behaviorLog: [logEntry, ...s.behaviorLog] }
          : s,
      ),
    );

    setShowLogModal(false);
    setToast({
      isOpen: true,
      message: `Behavioral note for ${selectedStudent.name} recorded.`,
    });
    setNewLog({ type: "commendation", note: "", encrypted: false });
  };

  // Handle Toggle Risk
  const handleToggleRisk = (id) => {
    const student = students.find((s) => s.id === id);
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, atRisk: !s.atRisk } : s)),
    );
    setToast({
      isOpen: true,
      message: `${student.name} is now marked as ${!student.atRisk ? "At Risk" : "On Track"}.`,
    });
  };

  // Handle Send to Counselor
  const handleSendToCounselor = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setToast({
        isOpen: true,
        message: `Confidential report for ${selectedStudent.name} transmitted.`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in duration-700">
      {/* Header Section */}
      <StudentInsightsHeader
        insightMode={insightMode}
        setInsightMode={setInsightMode}
        stats={stats}
      />

      {insightMode === "analytics" ? (
        <>
          {/* Quick Stats */}
          <QuickStats stats={stats} />

          {/* Data Privacy Notice */}
          <PrivacyNotice />

          {/* Search and Filter */}
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterRisk={filterRisk}
            setFilterRisk={setFilterRisk}
          />

          {/* Student Cards Grid */}
          <StudentGrid
            students={filteredStudents}
            setSelectedStudent={setSelectedStudent}
          />

          {/* Empty State */}
          {filteredStudents.length === 0 && (
            <EmptyState searchQuery={searchQuery} filterRisk={filterRisk} />
          )}
        </>
      ) : insightMode === "intervention" ? (
        <InterventionQueue />
      ) : insightMode === "conference" ? (
        <ConferenceNotes atRiskStudents={students.filter((s) => s.atRisk)} />
      ) : (
        /* Incident Report Form */
        <IncidentReportForm
          incidentForm={incidentForm}
          setIncidentForm={setIncidentForm}
          setInsightMode={setInsightMode}
          setToast={setToast}
        />
      )}

      {/* Student Detail Modal */}
      <StudentDetailModal
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleToggleRisk={handleToggleRisk}
        setShowFeedbackModal={setShowFeedbackModal}
        setShowLogModal={setShowLogModal}
        handleSendToCounselor={handleSendToCounselor}
        isSending={isSending}
      />

      {/* Add Feedback Modal */}
      <FeedbackModal
        show={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        newFeedback={newFeedback}
        setNewFeedback={setNewFeedback}
        handleAddFeedback={handleAddFeedback}
      />

      {/* Add Behavioral Log Modal */}
      <BehaviorLogModal
        show={showLogModal}
        onClose={() => setShowLogModal(false)}
        newLog={newLog}
        setNewLog={setNewLog}
        handleAddLog={handleAddLog}
      />

      <SuccessToast
        isOpen={toast.isOpen}
        message={toast.message}
        onClose={() => setToast({ ...toast, isOpen: false })}
      />
    </div>
  );
};

export default StudentInsights;
