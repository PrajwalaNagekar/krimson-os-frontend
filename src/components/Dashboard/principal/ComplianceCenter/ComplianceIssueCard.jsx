import React from "react";
import { XCircle, AlertTriangle, Info, Clock } from "lucide-react";

const ComplianceIssueCard = ({
  title,
  description,
  deadline,
  priority,
  status,
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "Critical":
        return "border-red-500 bg-red-50";
      case "High":
        return "border-orange-500 bg-orange-50";
      case "Medium":
        return "border-yellow-500 bg-yellow-50";
      default:
        return "border-blue-500 bg-blue-50";
    }
  };

  const getPriorityIcon = () => {
    switch (priority) {
      case "Critical":
        return <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />;
      case "High":
        return (
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
        );
      default:
        return <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
    }
  };

  return (
    <div
      className={`p-3 sm:p-4 border-l-4 rounded-lg sm:rounded-xl ${getPriorityColor()} transition-all hover:shadow-md`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{getPriorityIcon()}</div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
            <h4 className="font-bold text-sm sm:text-base text-slate-800">
              {title}
            </h4>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap ${
                priority === "Critical"
                  ? "bg-red-200 text-red-800"
                  : priority === "High"
                    ? "bg-orange-200 text-orange-800"
                    : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {priority}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 mb-2">
            {description}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceIssueCard;
