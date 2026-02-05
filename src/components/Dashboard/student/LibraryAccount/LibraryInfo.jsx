import React from "react";
import { Info, Sparkles } from "lucide-react";

const LibraryInfo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
          <Info className="text-white" size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-blue-900 text-lg mb-2">
            Important Information
          </h3>
          <p className="text-sm text-blue-800 font-medium leading-relaxed">
            Library dues must be cleared before report card release, exams, or
            withdrawal. Please return overdue books or contact the librarian for
            assistance.
          </p>
        </div>
        <Sparkles className="text-blue-400" size={24} />
      </div>
    </div>
  );
};

export default LibraryInfo;
