import React from "react";
import {
  Award,
  Plus,
  Trash2,
  Zap,
  Heart,
  Star,
  Trophy,
  Globe,
  Music,
} from "lucide-react";

const CCAReviewTab = ({
  badges,
  assignedBadges,
  badgeViewMode,
  setBadgeViewMode,
  setActiveModal,
  openAssignBadgeModal,
}) => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Zap":
        return Zap;
      case "Heart":
        return Heart;
      case "Star":
        return Star;
      case "Trophy":
        return Trophy;
      case "Globe":
        return Globe;
      case "Music":
        return Music;
      default:
        return Star;
    }
  };

  return (
    <div className="space-y-8">
      {/* Badges Section */}
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Award size={22} className="text-indigo-500" /> Skill Badges
            </h3>
            <p className="text-sm font-medium text-slate-400 mt-1">
              Manage badge templates and view awarded history
            </p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setBadgeViewMode("templates")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${badgeViewMode === "templates" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Templates
            </button>
            <button
              onClick={() => setBadgeViewMode("awarded")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${badgeViewMode === "awarded" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Awarded History
            </button>
          </div>

          {badgeViewMode === "templates" && (
            <button
              onClick={() => setActiveModal("createBadge")}
              className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-700 shadow-lg flex items-center gap-2"
            >
              <Plus size={16} /> Create Badge
            </button>
          )}
        </div>

        {badgeViewMode === "templates" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge) => {
              const BIcon = getIconComponent(badge.icon);
              return (
                <div
                  key={badge.id}
                  className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative"
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-${badge.color}-100 text-${badge.color}-600 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <BIcon size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800 mb-1">
                    {badge.name}
                  </h4>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-3">
                    {badge.skill}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">
                    "{badge.criteria}"
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openAssignBadgeModal(badge);
                    }}
                    className="mt-auto px-6 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                  >
                    Assign
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => setActiveModal("createBadge")}
              className="p-8 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center hover:bg-white hover:border-indigo-300 hover:text-indigo-500 transition-all gap-3 min-h-[280px]"
            >
              <Plus size={32} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Add New Badge
              </span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {assignedBadges.length > 0 ? (
              assignedBadges.map((assigned) => {
                const BIcon = getIconComponent(assigned.icon);
                return (
                  <div
                    key={assigned.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-${assigned.color}-100 text-${assigned.color}-600 flex items-center justify-center`}
                      >
                        <BIcon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">
                          {assigned.name}
                        </h4>
                        <p className="text-xs font-medium text-slate-500">
                          Awarded to{" "}
                          <span className="text-indigo-600 font-bold">
                            {assigned.student}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {assigned.date}
                      </span>
                      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-20 text-slate-400">
                <p className="font-medium">No badges have been awarded yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CCAReviewTab;
