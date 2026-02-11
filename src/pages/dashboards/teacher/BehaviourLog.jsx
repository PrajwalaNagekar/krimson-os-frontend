import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import SuccessToast from "../../../components/common/SuccessToast";
import BehaviourHeader from "../../../components/dashboard/teacher/BehaviourLog/BehaviourHeader";
import LogEntryForm from "../../../components/dashboard/teacher/BehaviourLog/LogEntryForm";
import RecentLogs from "../../../components/dashboard/teacher/BehaviourLog/RecentLogs";
import HouseLeaderboard from "../../../components/dashboard/teacher/BehaviourLog/HouseLeaderboard";
import AwardPointsForm from "../../../components/dashboard/teacher/BehaviourLog/AwardPointsForm";
import WellbeingCheckin from "../../../components/dashboard/teacher/BehaviourLog/WellbeingCheckin";
import WellbeingInsight from "../../../components/dashboard/teacher/BehaviourLog/WellbeingInsight";
import BehaviourAnalytics from "../../../components/dashboard/teacher/BehaviourLog/BehaviourAnalytics";
import WellbeingAnalytics from "../../../components/dashboard/teacher/BehaviourLog/WellbeingAnalytics";

const BehaviourLog = () => {
  const [activeTab, setActiveTab] = useState("behaviour"); // 'behaviour', 'house-points', 'wellbeing', 'behaviour-analytics', 'wellbeing-analytics'
  const [toast, setToast] = useState({ isOpen: false, message: "" });

  // --- Mock Data & State ---
  const { behaviourLog: mockData } = TEACHER_DATA;

  const [students] = useState(mockData.students);

  // Behaviour Logs State
  const [behaviourLogs, setBehaviourLogs] = useState(mockData.behaviourLogs);
  const [logFilter, setLogFilter] = useState("All"); // All, Positive, Concern, Neutral
  const [newLog, setNewLog] = useState({
    studentId: "",
    type: "Positive",
    severity: "Low",
    context: "",
    description: "",
    followup: false,
  });

  // House Points State
  const [housePoints, setHousePoints] = useState(mockData.housePoints);
  const [awardForm, setAwardForm] = useState({
    studentId: "",
    reason: "Academic Excellence",
    points: 10,
    note: "",
  });

  // Wellbeing State
  const [moodTrends] = useState(mockData.moodTrends);
  const [recentCheckins, setRecentCheckins] = useState(mockData.recentCheckins);
  const [checkinForm, setCheckinForm] = useState({
    studentId: "",
    concern: "Academic Pressure",
  });

  // Analytics Mock Data
  const [behaviourAnalytics] = useState(mockData.behaviourAnalytics);

  const [wellbeingAnalytics] = useState(mockData.wellbeingAnalytics);

  const [analyticsFilter, setAnalyticsFilter] = useState({
    student: "All",
    range: "Month",
    type: "All",
  });
  const [analyticsView, setAnalyticsView] = useState("Individual"); // Individual, Class, Grade

  // --- Actions ---

  const handleAddLog = (e) => {
    e.preventDefault();
    if (!newLog.studentId || !newLog.description) return;

    const studentName =
      students.find((s) => s.id === parseInt(newLog.studentId))?.name ||
      "Unknown";
    const log = {
      id: Date.now(),
      student: studentName,
      type: newLog.type,
      severity: newLog.severity,
      description: newLog.description,
      context: newLog.context,
      date: new Date().toISOString().split("T")[0],
      followup: newLog.followup,
    };

    setBehaviourLogs([log, ...behaviourLogs]);
    setNewLog({
      studentId: "",
      type: "Positive",
      severity: "Low",
      context: "",
      description: "",
      followup: false,
    });
    setToast({
      isOpen: true,
      message: `Observation recorded for ${studentName}`,
    });
  };

  const handleAwardPoints = (e) => {
    e.preventDefault();
    if (!awardForm.studentId) return;

    const student = students.find(
      (s) => s.id === parseInt(awardForm.studentId),
    );
    if (!student) return;

    const updatedPoints = housePoints.map((h) => {
      if (h.house === student.house) {
        return { ...h, points: h.points + awardForm.points };
      }
      return h;
    });

    setHousePoints(updatedPoints);
    setToast({
      isOpen: true,
      message: `${awardForm.points} points awarded to ${student.house} House!`,
    });
    // Optional: Reset form or keep for rapid entry
    setAwardForm({ ...awardForm, note: "" });
  };

  const handleSendCheckin = (e) => {
    e.preventDefault();
    if (!checkinForm.studentId) return;

    const studentName =
      students.find((s) => s.id === parseInt(checkinForm.studentId))?.name ||
      "Unknown";
    setToast({
      isOpen: true,
      message: `Private check-in sent to ${studentName}`,
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      {/* Header Section with Gradient Card */}
      <BehaviourHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Card */}
      <div className="bg-white rounded-[3.5rem] p-8 lg:p-10 shadow-[0_32px_128px_-16px_rgba(79,70,229,0.1)] border border-slate-100 min-h-[700px] relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

        {/* --- TAB: BEHAVIOUR LOG --- */}
        {activeTab === "behaviour" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 animate-in slide-in-from-bottom-8 duration-500">
            {/* Left: Input Form (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              <LogEntryForm
                students={students}
                newLog={newLog}
                setNewLog={setNewLog}
                handleAddLog={handleAddLog}
              />
            </div>

            {/* Right: Feed (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <RecentLogs
                behaviourLogs={behaviourLogs}
                logFilter={logFilter}
                setLogFilter={setLogFilter}
              />
            </div>
          </div>
        )}

        {/* --- TAB: HOUSE POINTS --- */}
        {activeTab === "house-points" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in slide-in-from-right-8 duration-500">
            {/* Left: Leaderboard (4 cols) - Sticky */}
            <div className="lg:col-span-4 space-y-6">
              <HouseLeaderboard housePoints={housePoints} />
            </div>

            {/* Right: Award Form (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <AwardPointsForm
                students={students}
                awardForm={awardForm}
                setAwardForm={setAwardForm}
                handleAwardPoints={handleAwardPoints}
              />
            </div>
          </div>
        )}

        {/* --- TAB: WELLBEING --- */}
        {activeTab === "wellbeing" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-8 duration-500">
            {/* Trigger Card */}
            <div className="lg:col-span-1 space-y-8">
              <WellbeingCheckin
                students={students}
                checkinForm={checkinForm}
                setCheckinForm={setCheckinForm}
                handleSendCheckin={handleSendCheckin}
                recentCheckins={recentCheckins}
              />
            </div>

            {/* Analytic & Action */}
            <div className="lg:col-span-2 space-y-8">
              <WellbeingInsight moodTrends={moodTrends} />
            </div>
          </div>
        )}

        {/* --- TAB: BEHAVIOUR ANALYTICS (SCREEN 274) --- */}
        {activeTab === "behaviour-analytics" && (
          <BehaviourAnalytics
            analyticsFilter={analyticsFilter}
            setAnalyticsFilter={setAnalyticsFilter}
            behaviourAnalytics={behaviourAnalytics}
            analyticsView={analyticsView}
            setAnalyticsView={setAnalyticsView}
          />
        )}

        {/* --- TAB: WELLBEING ANALYTICS (SCREEN 275) --- */}
        {activeTab === "wellbeing-analytics" && (
          <WellbeingAnalytics wellbeingAnalytics={wellbeingAnalytics} />
        )}
      </div>

      <SuccessToast
        isOpen={toast.isOpen}
        message={toast.message}
        onClose={() => setToast({ ...toast, isOpen: false })}
      />
    </div>
  );
};

export default BehaviourLog;
