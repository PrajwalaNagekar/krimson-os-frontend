import React from "react";

const MilestoneCard = ({ title, type, startDate, endDate, description }) => {
  const milestoneColors = {
    Midterm: "from-blue-500 to-indigo-500",
    "Annual Exam": "from-red-500 to-pink-500",
    Holiday: "from-green-500 to-emerald-500",
    "Term Break": "from-purple-500 to-purple-600",
  };

  return (
    <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all">
      <div
        className={`inline-block px-3 py-1 bg-gradient-to-r ${
          milestoneColors[type] || "from-slate-500 to-slate-600"
        } text-white rounded-lg text-xs font-bold mb-3`}
      >
        {type}
      </div>
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-xs text-slate-600 mb-2">
        {startDate} {endDate && `- ${endDate}`}
      </p>
      {description && <p className="text-xs text-slate-500">{description}</p>}
    </div>
  );
};

export default MilestoneCard;
