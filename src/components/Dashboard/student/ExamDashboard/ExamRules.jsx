import React from "react";
import { AlertTriangle } from "lucide-react";

const ExamRules = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-3xl border-2 border-yellow-300 shadow-lg">
      <div className="flex gap-3">
        <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-yellow-800 mb-1">Exam Rules</h4>
          <p className="text-xs text-yellow-700">
            Please bring your Hall Ticket and ID Card. Electronic gadgets are
            strictly prohibited inside the hall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamRules;
