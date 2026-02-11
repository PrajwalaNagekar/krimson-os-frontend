import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import AttendanceHeader from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceStats";
import AttendanceInsights from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceInsights";
import AttendanceViewToggle from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceViewToggle";
import AttendanceGraph from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceGraph";
import ClassAttendanceList from "../../../components/dashboard/teacher/AttendanceSummary/ClassAttendanceList";
import StudentAbsenceList from "../../../components/dashboard/teacher/AttendanceSummary/StudentAbsenceList";
import AttendanceReports from "../../../components/dashboard/teacher/AttendanceSummary/AttendanceReports";

const AttendanceSummary = () => {
  const { attendanceSummary } = TEACHER_DATA;

  // Use data from teacherData
  const [monthlyData] = useState(attendanceSummary.monthlyData);
  const [termData] = useState(attendanceSummary.termData);
  const [classAttendance] = useState(attendanceSummary.classAttendance);
  const [studentAbsences] = useState(attendanceSummary.studentAbsences);
  const [insights] = useState(attendanceSummary.insights);

  const [selectedView, setSelectedView] = useState("monthly"); // 'monthly', 'term'
  const [showInsights, setShowInsights] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/attendance/summary')
    //   .then(res => res.json())
    //   .then(data => setAttendanceData(data));
    console.log("Attendance Summary loaded - Ready for API integration");
  }, []);

  // Calculate overall stats
  const overallStats = {
    currentMonth: monthlyData[monthlyData.length - 1].percentage,
    totalStudents: classAttendance.reduce((sum, c) => sum + c.students, 0),
    avgAttendance: (
      classAttendance.reduce((sum, c) => sum + c.current, 0) /
      classAttendance.length
    ).toFixed(1),
    atRiskStudents: studentAbsences.filter((s) => s.percentage < 85).length,
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Header Section with Gradient */}
      <AttendanceHeader overallStats={overallStats} />

      {/* Automated Insights */}
      <AttendanceInsights
        insights={insights}
        showInsights={showInsights}
        setShowInsights={setShowInsights}
      />

      {/* Quick Stats */}
      <AttendanceStats overallStats={overallStats} />

      {/* View Toggle */}
      <AttendanceViewToggle
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />

      {/* Monthly/Term Graph */}
      <AttendanceGraph
        selectedView={selectedView}
        monthlyData={monthlyData}
        termData={termData}
      />

      {/* Class-wise Breakdown */}
      <ClassAttendanceList
        classAttendance={classAttendance}
        setSelectedClass={setSelectedClass}
      />

      {/* Student Absence Frequency */}
      <StudentAbsenceList studentAbsences={studentAbsences} />

      {/* Export Options */}
      <AttendanceReports />
    </div>
  );
};

export default AttendanceSummary;
