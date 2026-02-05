import React from "react";
import { FiLifeBuoy, FiBookOpen } from "react-icons/fi";

const LearningSupportHeader = ({ activePlansCount }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-blue-500/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-white">
            <span className="p-2 bg-white/20 backdrop-blur-md rounded-xl shadow-sm text-white">
              <FiLifeBuoy className="w-6 h-6" />
            </span>
            My Learning Support
          </h1>
          <p className="text-white/90 mt-2 text-sm md:text-base max-w-2xl font-medium">
            View your personalized academic support plans, remedial sessions,
            and enrichment activities designed to help you excel.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3">
          <div className="px-5 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-sm flex items-center gap-3 min-w-[160px]">
            <div className="p-2 bg-white rounded-xl text-blue-500 shadow-sm">
              <FiBookOpen size={20} />
            </div>
            <div>
              <div className="text-xs text-white/80 font-bold uppercase tracking-wider">
                Active Plans
              </div>
              <div className="text-2xl font-extrabold text-white leading-none mt-1">
                {activePlansCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSupportHeader;
