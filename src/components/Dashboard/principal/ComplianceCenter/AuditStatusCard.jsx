import React from "react";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";
import TrafficLight from "./TrafficLight";

const AuditStatusCard = ({ title, status, progress, nextDeadline }) => {
  const getStatusInfo = () => {
    switch (status) {
      case "compliant":
        return {
          color: "from-green-500 to-emerald-600",
          textColor: "text-green-700",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          icon: CheckCircle,
          label: "Compliant",
        };
      case "warning":
        return {
          color: "from-yellow-500 to-orange-500",
          textColor: "text-yellow-700",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          icon: AlertTriangle,
          label: "Action Needed",
        };
      case "critical":
        return {
          color: "from-red-500 to-red-600",
          textColor: "text-red-700",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          icon: XCircle,
          label: "Critical",
        };
      default:
        return {
          color: "from-slate-400 to-slate-500",
          textColor: "text-slate-700",
          bgColor: "bg-slate-50",
          borderColor: "border-slate-200",
          icon: Info,
          label: "Pending",
        };
    }
  };

  const statusInfo = getStatusInfo();
  const Icon = statusInfo.icon;

  return (
    <div
      className={`bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border-2 ${statusInfo.borderColor} hover:shadow-xl transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${statusInfo.color} shadow-lg`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <TrafficLight status={status} />
      </div>

      <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-2">
        {title}
      </h3>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs sm:text-sm font-semibold text-slate-600">
            Compliance
          </span>
          <span
            className={`text-xs sm:text-sm font-bold ${statusInfo.textColor}`}
          >
            {progress}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 sm:h-2.5 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${statusInfo.color} transition-all duration-500 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div
        className={`px-3 py-2 rounded-lg ${statusInfo.bgColor} border ${statusInfo.borderColor}`}
      >
        <p className="text-xs sm:text-sm font-bold ${statusInfo.textColor}">
          {statusInfo.label}
        </p>
        {nextDeadline && (
          <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
            Next: {nextDeadline}
          </p>
        )}
        <p className="text-[8px] sm:text-[9px] text-slate-400 mt-1">
          (get in app)
        </p>
      </div>
    </div>
  );
};

export default AuditStatusCard;
