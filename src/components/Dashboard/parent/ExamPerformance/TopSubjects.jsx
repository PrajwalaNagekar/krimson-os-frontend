import React from "react";
import { Trophy, Star } from "lucide-react";

const TopSubjects = ({ subjects }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Trophy className="text-yellow-500" size={20} />
        Top 3 Subjects
      </h3>
      <div className="space-y-3">
        {subjects.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md transition-all group"
          >
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform`}
            >
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 text-sm">
                {item.subject}
              </p>
              <p className="text-xs text-slate-500">Score: {item.score}%</p>
            </div>
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSubjects;
