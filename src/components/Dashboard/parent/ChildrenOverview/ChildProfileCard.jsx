import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import PerformanceStats from "./PerformanceStats";
import AcademicComparison from "./AcademicComparison";

const ChildProfileCard = ({ activeChild, classAverages }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-pink-50 rounded-bl-[100px] -mr-16 -mt-16 opacity-50"></div>

      <div className="relative z-10">
        {/* Child Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-100">
          <div className="relative group">
            <img
              src={activeChild.photo}
              alt={activeChild.name}
              className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
              {activeChild.name}
            </h2>
            <p className="text-slate-600 font-semibold mb-3">
              {activeChild.class}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Active Student
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg">
                <Award size={12} />
                ID: {activeChild.id}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Summary Grid */}
        <PerformanceStats
          activeChild={activeChild}
          classAverage={classAverages[activeChild.class]}
        />

        {/* Academic Comparison Graph */}
        <AcademicComparison
          activeChild={activeChild}
          classAverage={classAverages[activeChild.class]}
        />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() =>
              navigate(`/dashboard/parent/children/${activeChild.id}`)
            }
            className="py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
            View Full Profile
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="py-3 px-6 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-center gap-2">
            <BookOpen size={18} />
            Academic Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileCard;
