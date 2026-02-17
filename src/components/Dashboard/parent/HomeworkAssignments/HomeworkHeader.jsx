import React from "react";
import { BookOpen } from "lucide-react";

const HomeworkHeader = () => {
  return (
    <div className="relative mb-8 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 text-white shadow-2xl overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            <BookOpen size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Homework & Assignments</h1>
            <p className="text-white/90 text-sm">
              Monitor workload and track submissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkHeader;
