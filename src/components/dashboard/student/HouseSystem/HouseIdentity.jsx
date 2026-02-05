import React from "react";
import { Trophy, Star, Users, Award } from "lucide-react";

/**
 * House Identity Component
 * Displays the student's assigned House, values, and collective progress.
 * Focuses on positive, team-based information.
 */
const HouseIdentity = ({ houseInfo, stats }) => {
  if (!houseInfo) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          {/* House Icon/Mascot */}
          <div
            className={`w-20 h-20 rounded-2xl ${houseInfo.color} flex items-center justify-center text-4xl shadow-lg shadow-red-100 text-white`}
          >
            {houseInfo.mascot}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {houseInfo.name}
            </h2>
            <p className="text-slate-500 font-medium mt-1">
              "{houseInfo.motto}"
            </p>
          </div>
        </div>

        {/* House Position Badge */}
        <div className="bg-amber-50 px-5 py-3 rounded-2xl flex items-center gap-3 border border-amber-100">
          <Trophy className="w-6 h-6 text-amber-500" />
          <div className="text-right">
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
              House Position
            </div>
            <div className="text-lg font-bold text-slate-800">
              {houseInfo.position}
              <span className="text-sm font-medium text-slate-400 ml-1">
                st Place
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* House Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Points */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <div className="text-slate-500 text-sm font-medium">
              Total House Points
            </div>
            <div className="text-2xl font-bold text-slate-800">
              {houseInfo.totalPoints.toLocaleString()}
            </div>
          </div>
        </div>

        {/* My Contribution */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-slate-500 text-sm font-medium">
              My Contribution
            </div>
            <div className="text-2xl font-bold text-slate-800">
              +{stats.contribution} pt
            </div>
          </div>
        </div>

        {/* Recent Recognitions */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-slate-500 text-sm font-medium">
              Visual Arts Winner
            </div>
            <div className="text-sm font-bold text-slate-800 mt-0.5">
              Latest House Win
            </div>
          </div>
        </div>
      </div>

      {/* House Activities */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">
          Recent House Activities
        </h3>
        <div className="flex flex-col gap-3">
          {houseInfo.recentActivities?.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${houseInfo.color} bg-opacity-10`}
              >
                <Trophy
                  className={`w-5 h-5 ${houseInfo.textColor.replace(
                    "600",
                    "500",
                  )}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-slate-800">
                    {activity.title}
                  </h4>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-lg ${houseInfo.color} bg-opacity-10 ${houseInfo.textColor}`}
                  >
                    {activity.result}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-0.5">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseIdentity;
