import React from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT_DATA } from "../../../data/studentData";
import { authService } from "../../../services/authService";
import {
  HeroBanner,
  QuickActionsGrid,
  HomeworkCard,
  AttendanceWidget,
  ExamCountdown,
  AchievementBadges,
  NotificationsList,
} from "../../../components/dashboard/student/HomeDashboard";
import TimetableHeader from "../../../components/dashboard/student/TimetableSchedule/TimetableHeader";
import PeriodSchedule from "../../../components/dashboard/student/TimetableSchedule/PeriodSchedule";
import { ArrowRight } from "lucide-react";

const HomeDashboard = () => {
  const navigate = useNavigate();
  const { dashboard } = STUDENT_DATA;
  const user = authService.getCurrentUser() || STUDENT_DATA.user;

  const handleQuickAction = (title) => {
    switch (title) {
      case "Submit Assignment":
        navigate("/dashboard/student/assignments");
        break;
      case "View Report":
        navigate("/dashboard/student/grades");
        break;
      case "Study Materials":
        navigate("/dashboard/student/resources");
        break;
      case "Ask Doubts":
        navigate("/dashboard/student/communication");
        break;
      case "Check Schedule":
        navigate("/dashboard/student/timetable");
        break;
      case "Join Class":
        console.log("Join Class Clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Hero Banner with Achievement Badges */}
      <HeroBanner
        userName={user.name}
        assignmentsDue={dashboard.assignmentsDue}
        streak={dashboard.streak}
        onViewAssignments={() => navigate("/dashboard/student/assignments")}
        onCheckGrades={() => navigate("/dashboard/student/grades")}
      />

      {/* Quick Actions Grid */}
      <QuickActionsGrid
        quickActions={dashboard.quickActions}
        onQuickAction={handleQuickAction}
      />

      {/* Today's Schedule and Homework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Timetable */}
        {/* Today's Timetable Snapshot */}
        <div className="space-y-6">
          <TimetableHeader
            action={
              <button
                onClick={() => navigate("/dashboard/student/timetable")}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl backdrop-blur-md transition-all text-sm font-bold"
              >
                View Full <ArrowRight size={16} />
              </button>
            }
          />
          <PeriodSchedule
            periods={dashboard.todayTimetable}
            title="Today Plan"
            showTeacher={false}
            showDetailsButton={false}
          />
        </div>

        {/* Homework & Assignments */}
        <HomeworkCard
          todayHomework={dashboard.todayHomework}
          onViewAll={() => navigate("/dashboard/student/assignments")}
        />
      </div>

      {/* Stats Grid - Attendance, Exam Countdown, Achievement Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Widget */}
        <AttendanceWidget
          attendance={user.attendance}
          onViewDetails={() => navigate("/dashboard/student/attendance")}
        />

        {/* Exam Countdown */}
        <ExamCountdown
          upcomingExams={dashboard.upcomingExams}
          onViewSyllabus={() => console.log("View Syllabus")}
        />

        {/* Achievement Badges */}
        <AchievementBadges achievementBadges={dashboard.achievementBadges} />
      </div>

      {/* Enhanced Notifications */}
      <NotificationsList
        notifications={dashboard.notifications}
        onViewAll={() => console.log("View All Notifications")}
      />
    </div>
  );
};

export default HomeDashboard;
