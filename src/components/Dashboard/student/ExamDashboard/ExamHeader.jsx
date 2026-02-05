import React from "react";
import { Calendar } from "lucide-react";

const ExamHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-xl mb-4">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <Calendar size={32} />
          <h2 className="text-3xl font-bold">Exam & Assessment Dashboard</h2>
        </div>
        <p className="text-white/90 text-sm">
          Track your exams, view performance, and download important documents.
        </p>
      </div>
    </div>
  );
};

export default ExamHeader;
