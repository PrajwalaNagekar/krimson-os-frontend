import React from "react";

const ClassRankingCard = ({
  className,
  grade,
  attendance,
  students,
  rank,
  type,
}) => (
  <div
    className={`p-4 rounded-xl border-l-4 hover:shadow-lg transition-all ${
      type === "top"
        ? "bg-green-50 border-green-500"
        : "bg-red-50 border-red-500"
    }`}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              type === "top"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            #{rank}
          </span>
          <h4
            className={`font-bold text-sm ${
              type === "top" ? "text-green-800" : "text-red-800"
            }`}
          >
            {className}
          </h4>
        </div>
        <p className="text-xs text-slate-600">
          Grade {grade} • {students} students
        </p>
      </div>
      <div className="text-center">
        <p
          className={`text-2xl font-bold ${
            type === "top" ? "text-green-700" : "text-red-700"
          }`}
        >
          {attendance}%
        </p>
      </div>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
      <div
        className={`h-2 rounded-full ${
          type === "top" ? "bg-green-500" : "bg-red-500"
        }`}
        style={{ width: `${attendance}%` }}
      ></div>
    </div>
  </div>
);

export default ClassRankingCard;
