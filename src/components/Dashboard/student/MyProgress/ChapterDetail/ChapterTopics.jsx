import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

const ChapterTopics = ({ topics }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
        <BookOpen size={20} className="text-blue-500" />
        Topics Covered
        <span className="ml-auto text-xs font-medium text-slate-400">
          {topics.length} topics
        </span>
      </h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors"
          >
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-sm text-slate-700">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterTopics;
