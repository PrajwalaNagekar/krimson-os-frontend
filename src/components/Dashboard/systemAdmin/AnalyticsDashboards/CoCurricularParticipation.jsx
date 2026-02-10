import React from "react";
import { Trophy, Users, Star, Award } from "lucide-react";

const CoCurricularParticipation = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Award className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Total Programs
            </span>
          </div>
          <p className="text-5xl font-bold text-purple-600">
            {data.totalPrograms}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Active Participants
            </span>
          </div>
          <p className="text-5xl font-bold text-blue-600">
            {data.activeParticipants.toLocaleString()}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Trophy className="text-yellow-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Participation Rate
            </span>
          </div>
          <p className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            {data.participationRate}
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Co-Curricular Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.programs.map((program, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
            >
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                {program.name}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Participants</span>
                  <span className="text-xl font-bold text-purple-600">
                    {program.participants}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Satisfaction</span>
                  <div className="flex items-center gap-1">
                    <Star
                      className="text-yellow-500"
                      size={16}
                      fill="currentColor"
                    />
                    <span className="text-xl font-bold text-yellow-600">
                      {program.satisfaction}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Recent Achievements
        </h3>
        <div className="space-y-4">
          {data.achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl flex items-center justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-800">
                  {achievement.event}
                </h4>
                <p className="text-sm text-slate-600">
                  {new Date(achievement.date).toLocaleDateString()}
                </p>
              </div>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg text-base font-semibold">
                {achievement.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoCurricularParticipation;
