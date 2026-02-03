import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import GradesReportHeader from '../../../components/dashboard/student/GradesReport/GradesReportHeader';
import PerformanceStats from '../../../components/dashboard/student/GradesReport/PerformanceStats';
import SubjectGradesTable from '../../../components/dashboard/student/GradesReport/SubjectGradesTable';
import TermComparisonChart from '../../../components/dashboard/student/GradesReport/TermComparisonChart';
import TeacherRemarks from '../../../components/dashboard/student/GradesReport/TeacherRemarks';

const GradesReport = () => {
  const { grades, gradesTeacherInsights } = STUDENT_DATA;
  const user = STUDENT_DATA.user;

  // Handle gradesTeacherInsights - it could be an array or object
  // Default to a safe object structure if not properly defined
  const teacherInsights = gradesTeacherInsights?.remarks ? gradesTeacherInsights : {
    remarks: "**Excellent progress this term!** Continue focusing on consistent study habits and active participation in class.",
    teacherInitials: "MS",
    teacherName: "Mr. Sharma",
    teacherRole: "Class Teacher",
    strengths: ["Problem Solving", "Analytical Thinking", "Class Participation"],
    improvements: ["Time Management", "Written Expression"]
  };

  // Function to handle printing/downloading PDF
  const handleDownload = () => {
    window.print();
  };

  // Calculate Overall Averages
  const term1Avg = Math.round(grades.reduce((acc, curr) => acc + curr.term1, 0) / grades.length);
  const term2Avg = Math.round(grades.reduce((acc, curr) => acc + curr.term2, 0) / grades.length);

  return (
    <div className="space-y-8 print:space-y-6 animate-fade-in-up">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-area, .print-area * {
              visibility: visible;
            }
            .print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <GradesReportHeader user={user} handleDownload={handleDownload} />

      <div className="print-area space-y-8">
        
        {/* Performance Overview Cards */}
        <PerformanceStats 
            grades={grades} 
            term1Avg={term1Avg} 
            term2Avg={term2Avg} 
        />

        {/* Detailed Grade Table */}
        <SubjectGradesTable grades={grades} />

        {/* Graphical Comparison (Term 1 vs Term 2) & Teacher Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 break-inside-avoid">
          <TermComparisonChart grades={grades} />
          <TeacherRemarks teacherInsights={teacherInsights} />
        </div>

      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 text-center text-blue-700 text-xs font-bold print:hidden">
         Note: This is a provisional report. The final signed report card will be distributed on Jan 30th.
      </div>
    </div>
  );
};

export default GradesReport;
