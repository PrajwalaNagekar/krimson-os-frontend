import React from "react";
import { FileCheck, CheckCircle } from "lucide-react";

const QuestionPaperCard = ({
  subject,
  grade,
  uploadedBy,
  timestamp,
  difficulty,
  status,
}) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FileCheck className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800">{subject}</h4>
            <p className="text-xs text-slate-500">
              Grade {grade} • Random Sample
            </p>
          </div>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              difficulty === "Medium"
                ? "bg-blue-100 text-blue-700"
                : difficulty === "Hard"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
            }`}
          >
            {difficulty}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-2">
          Uploaded by: <span className="font-semibold">{uploadedBy}</span> •{" "}
          {timestamp}
        </p>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors">
            Inspect Paper
            <span className="text-[8px] opacity-70 ml-1">(get in app)</span>
          </button>
          <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
            <CheckCircle size={14} />
            Validate
            <span className="text-[8px] opacity-80 ml-1">(get in app)</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionPaperCard;
