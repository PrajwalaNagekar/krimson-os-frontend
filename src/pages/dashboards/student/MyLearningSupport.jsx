import React from "react";
import { STUDENT_DATA } from "../../../data/studentData"; // Adjust path if needed
import SupportPlanList from "../../../components/dashboard/student/MyLearningSupport/SupportPlanList";
import { motion } from "framer-motion";
import { FiLifeBuoy, FiBookOpen, FiActivity } from "react-icons/fi";

const MyLearningSupport = () => {
  // Access the learning support data.
  // Fallback to empty array if not found to prevent crashes during dev
  const plans = STUDENT_DATA.user.learningSupport?.plans || [];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 lg:p-10 space-y-8 !pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="p-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <FiLifeBuoy className="w-6 h-6" />
            </span>
            My Learning Support
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base max-w-2xl">
            View your personalized academic support plans, remedial sessions,
            and enrichment activities designed to help you excel.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
            <div className="p-1.5 bg-cyan-50 text-cyan-600 rounded-lg">
              <FiBookOpen size={16} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium uppercase">
                Active Plans
              </div>
              <div className="text-lg font-bold text-slate-800 leading-none">
                {plans.filter((p) => p.status === "Active").length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Plans List (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Assigned Plans</h2>
            <select className="bg-white border border-slate-200 text-sm rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option value="all">All Plans</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <SupportPlanList plans={plans} />
        </div>

        {/* Right Column: Info & Tips (1/3 width) - "Mixed" Data Control */}
        <div className="space-y-6">
          {/* AI Insight / Static Tip */}
          <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FiActivity size={120} />
            </div>
            <h3 className="text-lg font-bold mb-2 relative z-10">
              Maximize Your Growth
            </h3>
            <p className="text-white/90 text-sm mb-4 relative z-10">
              Consistency is key! Attending your scheduled sessions regularly
              boosts your improved conceptual understanding by 40%.
            </p>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all relative z-10 backdrop-blur-sm">
              View Progress Report
            </button>
          </div>

          {/* Quick Links / Resources */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Support Resources
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <span className="font-bold text-xs">PDF</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-700">
                    Guide to Effective Study
                  </div>
                  <div className="text-xs text-slate-400">General Advice</div>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <span className="font-bold text-xs">DOC</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-700">
                    Request 1-on-1 Session
                  </div>
                  <div className="text-xs text-slate-400">Form</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearningSupport;
