import React from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  FileSignature,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const UpcomingActionsWidget = ({ actions }) => {
  const getIcon = (type) => {
    switch (type) {
      case "Fee":
        return <DollarSign size={20} />;
      case "PTM":
        return <Users size={20} />;
      case "Consent":
        return <FileSignature size={20} />;
      default:
        return <DollarSign size={20} />;
    }
  };

  const getColorClass = (type) => {
    switch (type) {
      case "Fee":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "PTM":
        return "bg-purple-50 text-purple-600 border-purple-100";
      case "Consent":
        return "bg-blue-50 text-blue-600 border-blue-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-bl-[100px] -mr-8 -mt-8"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">
              Upcoming Actions
            </h3>
            <p className="text-xs text-slate-500">
              Important tasks & deadlines
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {actions.map((action, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className={`p-3 rounded-xl ${getColorClass(action.type)}`}>
                {getIcon(action.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-base truncate mb-1">
                  {action.title}
                </h4>
                <p className="text-sm text-slate-500">{action.date}</p>
                {action.amount && (
                  <p className="text-sm font-bold text-slate-700 mt-0.5">
                    {action.amount}
                  </p>
                )}
              </div>
              <button className="text-xs font-bold px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors whitespace-nowrap shadow-md">
                {action.actionLabel}
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4"></div>
      </div>
    </div>
  );
};

export default UpcomingActionsWidget;
