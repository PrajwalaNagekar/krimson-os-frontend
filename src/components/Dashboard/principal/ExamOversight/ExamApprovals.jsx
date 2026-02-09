import React from "react";
import { Calendar, FileCheck } from "lucide-react";
import TimetableApprovalCard from "./TimetableApprovalCard";
import QuestionPaperCard from "./QuestionPaperCard";

const ExamApprovals = ({ pendingTimetables, questionPapers }) => {
  return (
    <div className="space-y-6">
      {/* Timetable Approvals */}
      <div>
        <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          Exam Timetables ({pendingTimetables.length})
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {pendingTimetables.map((timetable, idx) => (
            <TimetableApprovalCard key={idx} {...timetable} />
          ))}
        </div>
      </div>

      {/* Question Paper Validation */}
      <div>
        <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-purple-500" />
          Question Paper Validation ({questionPapers.length})
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Random samples selected for quality assurance and difficulty index
          validation
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {questionPapers.map((paper, idx) => (
            <QuestionPaperCard key={idx} {...paper} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamApprovals;
