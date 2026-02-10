import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import {
  CheckCircle, XCircle, Clock
} from 'lucide-react';

// Components
import HeaderSection from '../../../components/dashboard/teacher/AttendanceLog/HeaderSection';
import StatsSection from '../../../components/dashboard/teacher/AttendanceLog/StatsSection';
import ActionBar from '../../../components/dashboard/teacher/AttendanceLog/ActionBar';
import AttendanceList from '../../../components/dashboard/teacher/AttendanceLog/AttendanceList';
import SubmitSection from '../../../components/dashboard/teacher/AttendanceLog/SubmitSection';
import AdditionalInfo from '../../../components/dashboard/teacher/AttendanceLog/AdditionalInfo';
import StudentDetailModal from '../../../components/dashboard/teacher/AttendanceLog/StudentDetailModal';
import ReasonModal from '../../../components/dashboard/teacher/AttendanceLog/ReasonModal';
import EditRequestModal from '../../../components/dashboard/teacher/AttendanceLog/EditRequestModal';

const AttendanceLog = () => {
  const { attendance: initialAttendance, subjects, attendanceCalendar, classes } = TEACHER_DATA;

  // Periods definition
  const periods = [
    "1st Period (08:30 - 09:15)",
    "2nd Period (09:15 - 10:00)",
    "3rd Period (10:00 - 10:45)",
    "4th Period (11:00 - 11:45)",
    "5th Period (11:45 - 12:30)",
    "6th Period (01:15 - 02:00)",
    "7th Period (02:00 - 02:45)",
    "8th Period (02:45 - 03:30)"
  ];

  // State management
  const [attendance, setAttendance] = useState(initialAttendance);
  const [selectedClass, setSelectedClass] = useState('Grade 9-A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'present', 'absent', 'late'
  const [searchQuery, setSearchQuery] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [calendarView, setCalendarView] = useState('weekly'); // 'weekly' or 'monthly'
  const [calendarSubject, setCalendarSubject] = useState('All Subjects');
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [newReason, setNewReason] = useState('');
  const [customReasons, setCustomReasons] = useState(() => {
    const saved = localStorage.getItem('customAbsenceReasons');
    return saved ? JSON.parse(saved) : [];
  });
  const [showEditRequestModal, setShowEditRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLogSubmitted, setIsLogSubmitted] = useState(false);
  const itemsPerPage = 10;

  // Check if selected date is in the past
  const isPastDate = selectedDate < new Date().toISOString().split('T')[0];

  // Reset submission state when core filters change
  useEffect(() => {
    setIsLogSubmitted(false);
  }, [selectedClass, selectedDate, selectedPeriod, selectedSubject]);

  // Filter attendance based on view mode and search
  const filteredAttendance = attendance.filter(student => {
    // Filter by view mode
    if (viewMode !== 'all') {
      if (viewMode === 'present' && student.status !== 'Present') return false;
      if (viewMode === 'absent' && student.status !== 'Absent') return false;
      if (viewMode === 'late' && student.status !== 'Late') return false;
    }

    // Filter by search query
    if (searchQuery) {
      return student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery);
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: attendance.length,
    present: attendance.filter(s => s.status === 'Present').length,
    absent: attendance.filter(s => s.status === 'Absent').length,
    late: attendance.filter(s => s.status === 'Late').length,
    percentage: Math.round((attendance.filter(s => s.status === 'Present').length / attendance.length) * 100)
  };

  // Mark individual attendance
  const markAttendance = (studentId, status) => {
    setAttendance(prev => prev.map(student =>
      student.id === studentId ? { ...student, status, reason: status === 'Absent' ? student.reason : undefined } : student
    ));
  };

  // Mark all present
  const markAllPresent = () => {
    setAttendance(prev => prev.map(student => ({ ...student, status: 'Present', reason: undefined })));
  };

  // Update absence reason
  const updateReason = (studentId, reason) => {
    setAttendance(prev => prev.map(student =>
      student.id === studentId ? { ...student, reason } : student
    ));
  };

  // Final submission logic
  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setIsLogSubmitted(true);
      // Success auto-hide and redirect logic can go here
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  // Get calendar data for student
  const getCalendarData = (studentId) => {
    const calendar = attendanceCalendar[studentId] || [];
    if (calendarView === 'weekly') {
      return calendar.slice(0, 7);
    } else {
      return calendar;
    }
  };

  // Get status color class
  const getStatusColor = (status) => {
    if (!status) return 'bg-gray-100 text-gray-400';
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-600 border-green-300';
      case 'Absent':
        return 'bg-red-100 text-red-600 border-red-300';
      case 'Late':
        return 'bg-orange-100 text-orange-600 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-400';
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Present':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Absent':
        return <XCircle size={16} className="text-red-500" />;
      case 'Late':
        return <Clock size={16} className="text-orange-500" />;
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-300" />;
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get day of week
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  // Absence reason options
  const predefinedReasons = [
    'Sick Leave',
    'Family Emergency',
    'Medical Appointment',
    'Personal Leave',
    'School Event',
    'Other'
  ];
  const reasonOptions = [...predefinedReasons, ...customReasons];

  // Add custom reason
  const addCustomReason = () => {
    if (newReason.trim() && !reasonOptions.includes(newReason.trim())) {
      const updated = [...customReasons, newReason.trim()];
      setCustomReasons(updated);
      localStorage.setItem('customAbsenceReasons', JSON.stringify(updated));
      setNewReason('');
      setShowReasonModal(false);
    }
  };

  // Remove custom reason
  const removeCustomReason = (reason) => {
    const updated = customReasons.filter(r => r !== reason);
    setCustomReasons(updated);
    localStorage.setItem('customAbsenceReasons', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 md:space-y-8 relative">
      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-white/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border border-green-100 animate-scaleIn">
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Success!</h2>
            <p className="text-slate-500 mb-6">Attendance log for <b>{selectedClass}</b> has been submitted and parents have been notified.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}
      <HeaderSection
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedDate={selectedDate}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        classes={classes}
        subjects={subjects}
        periods={periods}
        percentage={stats.percentage}
      />

      <StatsSection
        stats={stats}
        viewMode={viewMode}
        setViewMode={setViewMode}
        isPastDate={isPastDate}
      />

      <ActionBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        markAllPresent={markAllPresent}
        showSummary={showSummary}
        setShowSummary={setShowSummary}
        stats={stats}
        selectedPeriod={selectedPeriod}
        isPastDate={isPastDate}
      />

      <AttendanceList
        filteredAttendance={filteredAttendance}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        markAttendance={markAttendance}
        updateReason={updateReason}
        setSelectedStudent={setSelectedStudent}
        setShowReasonModal={setShowReasonModal}
        reasonOptions={reasonOptions}
        viewMode={viewMode}
        setViewMode={setViewMode}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isPastDate={isPastDate}
        onRequestEdit={() => setShowEditRequestModal(true)}
      />

      <SubmitSection
        stats={stats}
        isPastDate={isPastDate}
        onSubmitRequest={() => setShowEditRequestModal(true)}
        onFinalSubmit={handleFinalSubmit}
        isSubmitting={isSubmitting}
        isSubmitted={isLogSubmitted}
      />

      <AdditionalInfo />

      <StudentDetailModal
        student={selectedStudent}
        onClose={() => {
          setSelectedStudent(null);
          setCalendarSubject('All Subjects');
        }}
        calendarSubject={calendarSubject}
        setCalendarSubject={setCalendarSubject}
        calendarView={calendarView}
        setCalendarView={setCalendarView}
        subjects={subjects}
        periods={periods}
        getCalendarData={getCalendarData}
        getStatusColor={getStatusColor}
        getDayOfWeek={getDayOfWeek}
        formatDate={formatDate}
        getStatusIcon={getStatusIcon}
      />

      <ReasonModal
        showReasonModal={showReasonModal}
        setShowReasonModal={setShowReasonModal}
        newReason={newReason}
        setNewReason={setNewReason}
        addCustomReason={addCustomReason}
        customReasons={customReasons}
        predefinedReasons={predefinedReasons}
        removeCustomReason={removeCustomReason}
        reasonOptions={reasonOptions}
      />

      <EditRequestModal
        isOpen={showEditRequestModal}
        onClose={() => setShowEditRequestModal(false)}
        selectedDate={selectedDate}
        studentCount={attendance.length}
      />

    </div>
  );
};

export default AttendanceLog;
