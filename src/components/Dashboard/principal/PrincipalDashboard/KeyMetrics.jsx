import React from "react";
import { Users, GraduationCap, BookOpen, CheckCircle } from "lucide-react";
import StatCard from "./StatCard";

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <StatCard
        title="Total Students"
        value={metrics.students.value}
        subtext={metrics.students.subtext}
        icon={Users}
        gradient="from-blue-500 to-blue-600"
        trend="up"
      />
      <StatCard
        title="Total Teachers"
        value={metrics.teachers.value}
        subtext={metrics.teachers.subtext}
        icon={GraduationCap}
        gradient="from-green-500 to-emerald-600"
        trend="up"
      />
      <StatCard
        title="Total Classes"
        value={metrics.classes.value}
        subtext={metrics.classes.subtext}
        icon={BookOpen}
        gradient="from-purple-500 to-purple-600"
      />
      <StatCard
        title="Today's Attendance"
        value={metrics.attendance.value}
        subtext={metrics.attendance.subtext}
        icon={CheckCircle}
        gradient="from-cyan-500 to-blue-500"
        trend="up"
      />
    </div>
  );
};

export default KeyMetrics;
