import React, { useState } from "react";
import { Plus } from "lucide-react";
import { TEACHER_DATA } from "../../../data/teacherData";
import CCAHeader from "../../../components/dashboard/teacher/CCAManager/CCAHeader";
import CCADashboardTab from "../../../components/dashboard/teacher/CCAManager/CCADashboardTab";
import CCAManagementTab from "../../../components/dashboard/teacher/CCAManager/CCAManagementTab";
import CCACalendar from "../../../components/dashboard/teacher/CCAManager/CCACalendar";
import CCAAttendanceTab from "../../../components/dashboard/teacher/CCAManager/CCAAttendanceTab";
import CCAReviewTab from "../../../components/dashboard/teacher/CCAManager/CCAReviewTab";
import CCAModals from "../../../components/dashboard/teacher/CCAManager/CCAModals";

const CCAManager = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeModal, setActiveModal] = useState(null); // 'createClub', 'createSession', 'createBadge', 'assignBadge'
  const [filterStatus, setFilterStatus] = useState("Active"); // 'Active', 'Archived'

  // --- DATA ---
  const {
    clubs: initialClubs,
    sessions: initialSessions,
    badges: initialBadges,
    attendanceLog: initialAttendanceLog,
    assignedBadges: initialAssignedBadges,
    studentClubs,
    dashboardMetrics,
    actionItems,
  } = TEACHER_DATA.ccaManager;

  const [clubs, setClubs] = useState(initialClubs);
  const [sessions, setSessions] = useState(initialSessions);
  const [badges, setBadges] = useState(initialBadges);
  const [attendanceLog, setAttendanceLog] = useState(initialAttendanceLog);
  const [assignedBadges, setAssignedBadges] = useState(initialAssignedBadges);

  // Badge Builder State
  const [newBadge, setNewBadge] = useState({
    name: "",
    skill: "",
    criteria: "",
    icon: "Star",
    color: "indigo",
  });

  // Session Builder State
  const [newSession, setNewSession] = useState({
    title: "",
    club: "Robotics Club", // Default first club
    date: "",
    time: "",
    location: "",
    details: "",
  });

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Attendance View State
  const [selectedAttendanceSession, setSelectedAttendanceSession] =
    useState(null);

  // Badge View State
  const [badgeViewMode, setBadgeViewMode] = useState("templates"); // 'templates', 'awarded'

  // Badge Assignment State
  const [selectedBadgeForAssignment, setSelectedBadgeForAssignment] =
    useState(null);
  const [assignmentData, setAssignmentData] = useState({
    student: "",
    date: new Date().toISOString().split("T")[0],
  });

  const closeModal = () => {
    setActiveModal(null);
    setSelectedBadgeForAssignment(null);
    setAssignmentData({
      student: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const openCreateSession = (date = "") => {
    if (date) {
      // date is expected to be YYYY-MM-DD
      setNewSession((prev) => ({ ...prev, date }));
    } else {
      setNewSession({
        title: "",
        club: clubs[0]?.name || "",
        date: "",
        time: "",
        location: "",
        details: "",
      });
    }
    setActiveModal("createSession");
  };

  const handleAddSession = () => {
    if (!newSession.title || !newSession.date || !newSession.time) {
      alert("Please fill in all required fields.");
      return;
    }

    const dateObj = new Date(newSession.date);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const formattedDate = `${month} ${day}`;

    const sessionToAdd = {
      id: Date.now(),
      ...newSession,
      formattedDate,
      status: "Upcoming",
    };

    setSessions((prev) => [...prev, sessionToAdd]);
    closeModal();
    setNewSession({
      title: "",
      club: clubs[0]?.name || "",
      date: "",
      time: "",
      location: "",
      details: "",
    });
  };

  const handleAttendanceToggle = (student, status) => {
    setAttendanceLog((prev) => ({ ...prev, [student]: status }));
  };

  const markAllAttendance = (status) => {
    const newLog = {};
    Object.keys(attendanceLog).forEach((student) => (newLog[student] = status));
    setAttendanceLog(newLog);
  };

  const openAssignBadgeModal = (badge) => {
    setSelectedBadgeForAssignment(badge);
    setAssignmentData({
      student: Object.keys(attendanceLog)[0] || "",
      date: new Date().toISOString().split("T")[0],
    });
    setActiveModal("assignBadge");
  };

  const handleAssignBadge = () => {
    if (!assignmentData.student) return;

    const newAssignment = {
      id: Date.now(),
      badgeId: selectedBadgeForAssignment.id,
      name: selectedBadgeForAssignment.name,
      student: assignmentData.student,
      date: assignmentData.date,
      icon: selectedBadgeForAssignment.icon,
      color: selectedBadgeForAssignment.color,
    };

    setAssignedBadges((prev) => [newAssignment, ...prev]);

    // Mock API call / Logic
    alert(
      `Successfully assigned "${selectedBadgeForAssignment.name}" to ${assignmentData.student}!`,
    );
    closeModal();
  };

  return (
    <div className="space-y-8 pb-10 font-sans text-slate-600 bg-slate-50/50 min-h-screen">
      <CCAModals
        activeModal={activeModal}
        closeModal={closeModal}
        selectedBadgeForAssignment={selectedBadgeForAssignment}
        assignmentData={assignmentData}
        setAssignmentData={setAssignmentData}
        attendanceLog={attendanceLog}
        studentClubs={studentClubs}
        handleAssignBadge={handleAssignBadge}
        clubs={clubs}
        newSession={newSession}
        setNewSession={setNewSession}
        handleAddSession={handleAddSession}
        newBadge={newBadge}
        setNewBadge={setNewBadge}
      />

      <CCAHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="animate-in slide-in-from-bottom-4 duration-500">
        {activeTab === "dashboard" && (
          <CCADashboardTab
            metrics={dashboardMetrics}
            sessions={sessions}
            actionItems={actionItems}
          />
        )}

        {activeTab === "management" && (
          <CCAManagementTab
            clubs={clubs}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            onOpenCreateClub={() => setActiveModal("createClub")}
          />
        )}

        {activeTab === "planner" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Session Planner
                </h2>
                <p className="text-blue-500 font-bold text-sm">
                  Manage your monthly schedule
                </p>
              </div>
              <button
                onClick={() => openCreateSession()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center gap-2"
              >
                <Plus size={16} /> New Plan
              </button>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <CCACalendar
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                sessions={sessions}
                openCreateSession={openCreateSession}
              />
            </div>
          </div>
        )}

        {activeTab === "attendance" && (
          <CCAAttendanceTab
            sessions={sessions}
            attendanceLog={attendanceLog}
            handleAttendanceToggle={handleAttendanceToggle}
            markAllAttendance={markAllAttendance}
            selectedAttendanceSession={selectedAttendanceSession}
            setSelectedAttendanceSession={setSelectedAttendanceSession}
          />
        )}

        {activeTab === "review" && (
          <CCAReviewTab
            badges={badges}
            assignedBadges={assignedBadges}
            badgeViewMode={badgeViewMode}
            setBadgeViewMode={setBadgeViewMode}
            setActiveModal={setActiveModal}
            openAssignBadgeModal={openAssignBadgeModal}
          />
        )}
      </div>
    </div>
  );
};

export default CCAManager;
