import React from "react";
import { Award, Users, BookOpen, Trophy, User } from "lucide-react";

const AchievementsLog = ({ achievements }) => {
  // Category colors for achievements
  const getCategoryColor = (category) => {
    switch (category) {
      case "Leadership":
        return "from-cyan-400 to-blue-500";
      case "Academic":
        return "from-blue-500 to-indigo-500";
      case "Community Service":
        return "from-purple-500 to-pink-500";
      default:
        return "from-slate-400 to-slate-600";
    }
  };

  // Category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Leadership":
        return Users;
      case "Academic":
        return BookOpen;
      case "Community Service":
        return Trophy;
      default:
        return Award;
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Award className="text-purple-500" size={24} />
        Achievements & Recognition
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {achievements?.map((achievement) => {
          const Icon = getCategoryIcon(achievement.category);
          return (
            <div
              key={achievement.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-5 border-2 border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-3">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(achievement.category)} text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 text-base mb-1">
                    {achievement.title}
                  </h3>
                  <span
                    className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-lg bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white`}
                  >
                    {achievement.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    +{achievement.points}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    points
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {achievement.description}
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{achievement.teacher}</span>
                  </div>
                  <span>{achievement.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AchievementsLog;
