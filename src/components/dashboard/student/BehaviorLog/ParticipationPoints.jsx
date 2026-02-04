import React from "react";

const ParticipationPoints = ({ participationPoints }) => {
  return (
    <div className="pt-6 border-t border-slate-100">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        Subject Participation
      </h3>
      <div className="space-y-3">
        {participationPoints?.map((subject, index) => {
          const percentage = (subject.points / subject.maxPoints) * 100;
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  {subject.subject}
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {subject.points}/{subject.maxPoints}
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParticipationPoints;
