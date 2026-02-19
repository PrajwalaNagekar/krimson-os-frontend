import React from "react";
import { Award, Star } from "lucide-react";

const ChapterQuizzes = ({ quizzes }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
        <Award size={20} className="text-yellow-500" />
        Quizzes
        <span className="ml-2 px-2.5 py-0.5 bg-yellow-100 text-yellow-600 text-xs font-bold rounded-full">
          {quizzes.length}
        </span>
      </h2>

      <div className="space-y-2">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Star size={16} className="text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-slate-800">{quiz.name}</p>
                <p className="text-xs text-slate-500 capitalize">
                  {quiz.status}
                </p>
              </div>
            </div>
            {quiz.score ? (
              <span className="text-sm font-bold text-yellow-600">
                {quiz.score}%
              </span>
            ) : (
              <span className="text-xs text-slate-400 italic">Not taken</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterQuizzes;
