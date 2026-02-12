import React, { useState } from "react";
import { examPerformanceData } from "../../../data/parentData";
import ExamHeader from "../../../components/dashboard/parent/ExamPerformance/ExamHeader";
import PerformanceChart from "../../../components/dashboard/parent/ExamPerformance/PerformanceChart";
import TeacherComments from "../../../components/dashboard/parent/ExamPerformance/TeacherComments";
import CountdownTimer from "../../../components/dashboard/parent/ExamPerformance/CountdownTimer";
import TopSubjects from "../../../components/dashboard/parent/ExamPerformance/TopSubjects";
import ImprovementAreas from "../../../components/dashboard/parent/ExamPerformance/ImprovementAreas";
import ExamSchedule from "../../../components/dashboard/parent/ExamPerformance/ExamSchedule";

const ExamPerformance = () => {
  const [selectedTerm, setSelectedTerm] = useState("current");
  const { examSchedule, performance, teacherComments } = examPerformanceData;

  // Top 3 subjects and areas for improvement
  const topSubjects = performance[selectedTerm]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const areasForImprovement = performance[selectedTerm]
    .filter((item) => item.score < 85)
    .sort((a, b) => a.score - b.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 md:p-6">
      <ExamHeader
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left Column - Performance Chart (8 columns) */}
        <div className="lg:col-span-8 space-y-4 md:space-y-6">
          <PerformanceChart data={performance[selectedTerm]} />
          <TeacherComments comments={teacherComments} />
        </div>

        {/* Right Column - Stats and Schedule (4 columns) */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          <CountdownTimer nextExam={examSchedule[0]} />
          <TopSubjects subjects={topSubjects} />
          <ImprovementAreas subjects={areasForImprovement} />
          <ExamSchedule schedule={examSchedule} />
        </div>
      </div>
    </div>
  );
};

export default ExamPerformance;
