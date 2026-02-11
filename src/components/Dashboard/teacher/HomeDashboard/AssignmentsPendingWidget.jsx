import React from "react";
import { FileText } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const AssignmentsPendingWidget = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base">
        <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl">
          <FileText className="text-white" size={18} />
        </div>
        Assignments Pending
      </h3>
      <div className="text-center py-4">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {dashboard.pendingAssignments}
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Submissions to Review
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-md transition-all">
          Review Now
        </button>
      </div>
    </div>
  );
};

export default AssignmentsPendingWidget;
