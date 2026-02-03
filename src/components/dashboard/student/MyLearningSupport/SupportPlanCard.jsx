import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiCalendar,
  FiTarget,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiBook,
} from "react-icons/fi";

const SupportPlanCard = ({ plan }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Status Colors
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
      case "upcoming":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "completed":
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
      default:
        return "bg-pink-500/10 text-pink-500 border-pink-500/20";
    }
  };

  // Progress Bar Color
  const getProgressColor = (value) => {
    if (value >= 75) return "bg-cyan-500";
    if (value >= 40) return "bg-blue-500";
    return "bg-pink-500";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isExpanded
          ? "bg-white border-blue-500/30 ring-1 ring-blue-500/30"
          : "bg-white border-slate-100 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5"
      }`}
    >
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none" />

      <div className="p-5 md:p-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusColor(plan.status)}`}
              >
                {plan.status}
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide uppercase flex items-center gap-1">
                <FiBook className="w-3 h-3" /> {plan.subject}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {plan.title}
            </h3>

            <p className="text-sm text-slate-500 mt-1 mb-4 max-w-xl">
              Focus on {plan.type} • Assigned by{" "}
              <span className="text-slate-700 font-medium">
                {plan.assignedBy}
              </span>
            </p>

            {/* Progress Section */}
            <div className="space-y-2 max-w-md">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Progress</span>
                <span>{plan.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${plan.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${getProgressColor(plan.progress)}`}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats / Actions */}
          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 md:gap-2 min-w-[140px]">
            <div className="text-right hidden md:block">
              <div className="text-xs text-slate-400">Next Session</div>
              <div className="text-sm font-semibold text-slate-700 flex items-center justify-end gap-2">
                {plan.upcomingSessions && plan.upcomingSessions.length > 0 ? (
                  <>
                    <FiCalendar className="text-blue-500 w-4 h-4" />
                    {plan.upcomingSessions[0].date}
                  </>
                ) : (
                  <span className="text-slate-400">No sessions scheduled</span>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 mt-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium text-sm transition-all flex items-center gap-2 border border-slate-200 hover:border-blue-200"
            >
              {isExpanded ? "Show Less" : "View Details"}
              {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100 bg-slate-50/50"
          >
            <div className="p-5 md:p-6 grid gap-6 md:grid-cols-2">
              {/* Goals */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FiTarget className="w-4 h-4" /> Learning Goals
                </h4>
                <ul className="space-y-2">
                  {plan.goals.map((goal, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources / Additional Info */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FiAward className="w-4 h-4" /> Resources & Notes
                </h4>
                {plan.resources && plan.resources.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {plan.resources.map((res, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 shadow-sm flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        {res.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 italic">
                    No specific resources assigned yet.
                  </p>
                )}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <FiClock /> Started: {plan.startDate} • Ends: {plan.endDate}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SupportPlanCard;
