import React from "react";
import { BookOpen, Book } from "lucide-react";

const QuestionBankStats = ({ questionBank }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <BookOpen size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">Question Bank Library</h3>
            <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
              {questionBank.total} QUESTIONS
            </span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            {questionBank.objective} objective • {questionBank.subjective}{" "}
            subjective questions across all topics
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(questionBank.byTopic).map(([topic, count]) => (
              <span
                key={topic}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium border border-white/30 capitalize"
              >
                {topic}: {count}
              </span>
            ))}
          </div>
        </div>
        <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
          <Book size={18} />
          <div className="text-left">
            <div>Manage Bank</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default QuestionBankStats;
