import React from "react";

const TemplateCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="w-full p-4 border-2 border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
  >
    <div className="flex items-start gap-3">
      <div
        className={`p-2 rounded-lg ${iconColor} group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
    </div>
  </button>
);

export default TemplateCard;
