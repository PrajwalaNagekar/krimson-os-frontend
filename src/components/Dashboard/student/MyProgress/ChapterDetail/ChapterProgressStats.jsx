import React from "react";

const ChapterProgressStats = ({ chapter }) => {
  const stats = [
    {
      value: `${chapter.progress}%`,
      label: "Completion",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      value: chapter.timeSpent,
      label: "Time Spent",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      value: chapter.quiz_score > 0 ? `${chapter.quiz_score}%` : "--",
      label: "Quiz Score",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`text-center p-6 ${stat.bg} rounded-2xl shadow-sm border ${stat.border}`}
        >
          <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChapterProgressStats;
