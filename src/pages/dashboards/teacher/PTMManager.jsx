/**
 * @component PTMManager
 * @description Teacher Dashboard - High-Fidelity PTM Management & AI Coordination Suite
 */
import React, { useState } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import PTMHeader from "../../../components/dashboard/teacher/PTMManager/PTMHeader";
import PTMStats from "../../../components/dashboard/teacher/PTMManager/PTMStats";
import PTMScheduler from "../../../components/dashboard/teacher/PTMManager/PTMScheduler";
import PTMAgenda from "../../../components/dashboard/teacher/PTMManager/PTMAgenda";
import PTMTracker from "../../../components/dashboard/teacher/PTMManager/PTMTracker";
import CreateSessionModal from "../../../components/dashboard/teacher/PTMManager/CreateSessionModal";
import LogActionModal from "../../../components/dashboard/teacher/PTMManager/LogActionModal";
import { X, Sparkles, Bell } from "lucide-react";

/**
 * @component Toast Notifier
 * @description Stateless Toast Notification Component
 */
const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-10 right-10 bg-indigo-900/95 backdrop-blur-md text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 animate-in slide-in-from-right-10 duration-500 z-[200] border border-white/10">
    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#34d399]"></div>
    <span className="text-[11px] font-bold uppercase tracking-widest">
      {message}
    </span>
    <button
      onClick={onClose}
      className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
    >
      <X size={14} />
    </button>
  </div>
);

const PTMManager = () => {
  // State Management
  const [activeTab, setActiveTab] = useState("scheduler");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [bookingLock, setBookingLock] = useState(true);

  // Safe data access
  const ptmData = TEACHER_DATA.ptm || { slots: [], actions: [] };

  // Calculate high-level stats
  const stats = {
    total: ptmData.slots.length,
    booked: ptmData.slots.filter((s) => s.status === "booked").length,
    openActions: ptmData.actions.filter((a) => a.status !== "completed").length,
  };

  // Helper Functions
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleCreateSession = () => {
    setShowScheduleModal(false);
    showToast("New PTM Session Configured Successfully.");
  };

  const handleLogAction = () => {
    setShowActionModal(false);
    showToast("Action Item logged & synced with Parent Portal.");
  };

  return (
    <div className="space-y-8 pb-20 overflow-x-hidden p-1">
      {/* Header Section */}
      <PTMHeader
        totalSlots={stats.total}
        bookedSlots={stats.booked}
        openActions={stats.openActions}
        onPlanSession={() => setShowScheduleModal(true)}
        bookingLock={bookingLock}
        setBookingLock={setBookingLock}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Global Stats Overview */}
      <PTMStats stats={stats} />

      {/* AI Assistant Banner / Quick Actions */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-[2.5rem] p-8 border border-indigo-100/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm group">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-900 tracking-tight">AI Coordination active</h3>
            <p className="text-sm text-slate-500 font-medium">Smart reminders are scheduled for 4 unbooked parents.</p>
          </div>
        </div>
        <button className="px-8 py-3 bg-indigo-900 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-md hover:bg-slate-800 transition-all flex items-center gap-3 active:scale-95">
          <Bell size={16} />
          Broadcast Reminders Now
        </button>
      </div>

      {/* Content Rendering Engine */}
      <div className="min-h-[600px] relative">
        <div className="absolute -left-20 top-20 w-64 h-64 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -right-20 bottom-20 w-80 h-80 bg-purple-100/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 transition-all duration-500 ease-out translate-y-0 opacity-100">
          {activeTab === "scheduler" && (
            <PTMScheduler
              slots={ptmData.slots}
              onScheduleClick={() => setShowScheduleModal(true)}
            />
          )}

          {activeTab === "agenda" && (
            <PTMAgenda slots={ptmData.slots} onShowToast={showToast} />
          )}

          {activeTab === "tracker" && (
            <PTMTracker
              actions={ptmData.actions}
              onShowActionModal={() => setShowActionModal(true)}
              onShowToast={showToast}
            />
          )}
        </div>
      </div>

      {/* Modals & Overlays */}
      <CreateSessionModal
        showModal={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        onConfirm={handleCreateSession}
      />

      <LogActionModal
        showModal={showActionModal}
        onClose={() => setShowActionModal(false)}
        onConfirm={handleLogAction}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default PTMManager;
