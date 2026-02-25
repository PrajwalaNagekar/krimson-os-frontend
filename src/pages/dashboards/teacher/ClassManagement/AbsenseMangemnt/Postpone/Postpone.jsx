import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TEACHER_DATA } from "../../../../../../data/teacherData";
import PostponeHeader from "../../../../../../components/dashboard/teacher/ClassManagement/AbsenceManagement/Postpone/PostponeHeader";
import PostponeScheduler from "../../../../../../components/dashboard/teacher/ClassManagement/AbsenceManagement/Postpone/PostponeScheduler";
import AvailabilityCheck from "../../../../../../components/dashboard/teacher/ClassManagement/AbsenceManagement/Postpone/AvailabilityCheck";
import PostponeSummary from "../../../../../../components/dashboard/teacher/ClassManagement/AbsenceManagement/Postpone/PostponeSummary";

const PostponePage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  const postponeData =
    TEACHER_DATA.classManagement.absenceManagement.postponeLesson;
  const lesson = postponeData.lesson;
  const availablePeriods = postponeData.availablePeriods;
  // Static checks data – replace with API: POST /api/teacher/check-slot-availability
  const baseChecks = postponeData.availabilityChecks;

  const today = new Date().toISOString().split("T")[0];
  const [newDate, setNewDate] = useState(today);
  const [newPeriod, setNewPeriod] = useState("");

  // Derived from auto-check
  const [isChecking, setIsChecking] = useState(false);
  const [checks, setChecks] = useState(null);

  const [isPostposing, setIsPostposing] = useState(false);
  const [approvalSent, setApprovalSent] = useState(false);

  // Auto-check whenever date or period changes
  useEffect(() => {
    if (!newDate || !newPeriod) {
      setChecks(null);
      setIsPostposing(false);
      setApprovalSent(false);
      return;
    }

    setIsChecking(true);
    setIsPostposing(false);
    setApprovalSent(false);

    // Simulate async API call: POST /api/teacher/check-slot-availability
    const timer = setTimeout(() => {
      // For demo, Period 5 and P6 simulate a room conflict; others are clear
      const conflictPeriods = ["P5", "P6"];
      const hasConflict = conflictPeriods.includes(newPeriod);
      setChecks({
        roomAvailable: !hasConflict,
        noTeacherClash: !hasConflict,
        gradeConflict: baseChecks.gradeConflict,
        room: lesson.room,
      });
      setIsChecking(false);
    }, 700); // simulate 700ms network call

    return () => clearTimeout(timer);
  }, [newDate, newPeriod]);

  const handleBack = () => navigate("/dashboard/teacher/classes/absence");

  const handleConfirmPostpone = () => setIsPostposing(true);

  const handleSendApproval = () => {
    // TODO: replace with API call: POST /api/teacher/postpone-approval-request
    setApprovalSent(true);
  };

  // When user switches to a suggested alternative period
  const handleSwitchPeriod = (periodId) => {
    setNewPeriod(periodId);
  };

  const selectedPeriodLabel = availablePeriods.find(
    (p) => p.id === newPeriod,
  )?.label;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <PostponeHeader lesson={lesson} onBack={handleBack} />

      {/* Scheduler + Auto Availability */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <PostponeScheduler
          newDate={newDate}
          setNewDate={setNewDate}
          newPeriod={newPeriod}
          setNewPeriod={setNewPeriod}
          availablePeriods={availablePeriods}
        />

        {/* Auto-triggered availability — no button needed */}
        <AvailabilityCheck
          checks={checks}
          isChecking={isChecking}
          newPeriod={newPeriod}
          availablePeriods={availablePeriods}
          onSwitchPeriod={handleSwitchPeriod}
          onConfirmPostpone={handleConfirmPostpone}
          isPostposing={isPostposing}
        />
      </div>

      {/* Summary + Coordinator Approval */}
      <PostponeSummary
        lesson={lesson}
        newDate={newDate}
        newPeriodLabel={selectedPeriodLabel}
        isPostposing={isPostposing}
        onSendApproval={handleSendApproval}
        onDone={handleBack}
        approvalSent={approvalSent}
      />
    </div>
  );
};

export default PostponePage;
