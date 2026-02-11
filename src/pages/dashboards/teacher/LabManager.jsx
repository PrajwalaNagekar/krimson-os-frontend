import React, { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { LAB_DATA } from "../../../data/teacherData";
import LabHeader from "../../../components/dashboard/teacher/LabManager/LabHeader";
import DashboardView from "../../../components/dashboard/teacher/LabManager/DashboardView";
import PlannerView from "../../../components/dashboard/teacher/LabManager/PlannerView";
import OperationsView from "../../../components/dashboard/teacher/LabManager/OperationsView";
import AssessmentView from "../../../components/dashboard/teacher/LabManager/AssessmentView";

const LabManager = () => {
  const [activeTab, setActiveTab] = useState("planner"); // 'dashboard', 'planner', 'operations', 'assessment'

  // Mock Data & State - Initialized from LAB_DATA
  const [notifications, setNotifications] = useState([]);

  // Planner State
  const [plans, setPlans] = useState(LAB_DATA.plans);
  const [currentPlan, setCurrentPlan] = useState(null); // If null, show list. If set, show editor.

  // Operations State
  const [bookings, setBookings] = useState(LAB_DATA.bookings);
  const [inventoryRequests, setInventoryRequests] = useState(
    LAB_DATA.inventoryRequests,
  );

  // Assessment State
  const [students, setStudents] = useState(LAB_DATA.students);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Helpers
  const showNotification = (title, message, type = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, title, message, type }]);
    setTimeout(
      () => setNotifications((prev) => prev.filter((n) => n.id !== id)),
      3000,
    );
  };

  const handleCreatePlan = () => {
    const newPlan = {
      id: Date.now(),
      title: "Untitled Session",
      class: "10-A",
      subject: "Physics",
      teacher: "Mrs. Verma",
      linkedUnit: "",
      objective: "",
      status: "Draft",
      duration: "60 Minutes",
      resources: [],
      materials: [],
      safetyStatus: "Pending",
      isFinalized: false,
    };
    setCurrentPlan(newPlan);
  };

  const handleSavePlan = () => {
    if (!currentPlan) return;
    setPlans((prev) => {
      const exists = prev.find((p) => p.id === currentPlan.id);
      if (exists)
        return prev.map((p) =>
          p.id === currentPlan.id ? { ...currentPlan, date: "Feb 20" } : p,
        ); // Mock update
      return [...prev, { ...currentPlan, date: "Feb 20" }];
    });
    setCurrentPlan(null);
    showNotification("Plan Saved", "Session details have been updated.");
  };

  const handleBookSlot = (lab, slot) => {
    const exists = bookings.find((b) => b.lab === lab && b.slot === slot);
    if (exists) return; // Already booked or blocked

    const newBooking = {
      id: Date.now(),
      lab,
      slot,
      status: "Occupied",
      class: "My Class",
      teacher: "Me",
    };
    setBookings((prev) => [...prev, newBooking]);
    showNotification("Slot Booked", `${lab} Lab reserved for ${slot}.`);
  };

  const handleGradeUpdate = (category, score) => {
    // Mock grading logic would go here
    showNotification("Grade Updated", `${category} score set to ${score}/10.`);
  };

  return (
    <div className="space-y-6 md:space-y-8 pb-10 font-sans text-slate-600">
      {/* Notifications */}
      <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 pointer-events-none">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[300px] animate-in slide-in-from-right-10 fade-in duration-300 pointer-events-auto"
          >
            <div
              className={`p-2 rounded-xl ${n.type === "success" ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"}`}
            >
              {n.type === "success" ? (
                <CheckCircle2 size={20} />
              ) : (
                <AlertTriangle size={20} />
              )}
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{n.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{n.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <LabHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTENT AREA */}
      <div className="min-h-[600px] animate-in slide-in-from-bottom-4 duration-500">
        {/* DASHBOARD VIEW */}
        {activeTab === "dashboard" && <DashboardView />}

        {/* PLANNER VIEW */}
        {activeTab === "planner" && (
          <PlannerView
            plans={plans}
            setPlans={setPlans}
            currentPlan={currentPlan}
            setCurrentPlan={setCurrentPlan}
            handleCreatePlan={handleCreatePlan}
            handleSavePlan={handleSavePlan}
          />
        )}

        {/* OPERATIONS VIEW (Booking) */}
        {activeTab === "operations" && (
          <OperationsView
            bookings={bookings}
            setBookings={setBookings}
            inventoryRequests={inventoryRequests}
            handleBookSlot={handleBookSlot}
          />
        )}

        {/* ASSESSMENT VIEW */}
        {activeTab === "assessment" && (
          <AssessmentView
            students={students}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
            handleGradeUpdate={handleGradeUpdate}
            showNotification={showNotification}
          />
        )}
      </div>
    </div>
  );
};

export default LabManager;
