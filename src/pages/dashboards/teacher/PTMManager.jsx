/**
 * @component PTMManager
 * @description Teacher Dashboard - High-Fidelity PTM Management & AI Coordination Suite
 */
import React, { useState } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import PTMHeader from "../../../components/dashboard/teacher/PTMManager/PTMHeader";
import PTMScheduler from "../../../components/dashboard/teacher/PTMManager/PTMScheduler";
import PTMAgenda from "../../../components/dashboard/teacher/PTMManager/PTMAgenda";
import PTMTracker from "../../../components/dashboard/teacher/PTMManager/PTMTracker";
import CreateSessionModal from "../../../components/dashboard/teacher/PTMManager/CreateSessionModal";
import LogActionModal from "../../../components/dashboard/teacher/PTMManager/LogActionModal";
import { X } from "lucide-react";

/**
 * @component Toast Notifier
 * @description Stateless Toast Notification Component
 */
const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-10 right-10 bg-indigo-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-500 z-[200]">
    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
    <span className="text-xs font-bold uppercase tracking-widest">
      {message}
    </span>
    <button
      onClick={onClose}
      className="hover:text-indigo-200 transition-colors"
    >
      <X size={16} />
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
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans text-slate-600 space-y-12 pb-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-100/40 to-transparent -z-10 pointer-events-none"></div>

      {/* Header Section */}
      <PTMHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Rendering Engine */}
      <div className="max-w-[1600px] mx-auto min-h-[600px]">
        {activeTab === "scheduler" && (
          <PTMScheduler
            slots={ptmData.slots}
            onScheduleClick={() => setShowScheduleModal(true)}
            bookingLock={bookingLock}
            setBookingLock={setBookingLock}
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
