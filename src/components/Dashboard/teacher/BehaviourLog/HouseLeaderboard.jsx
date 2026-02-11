import React from "react";
import { Award } from "lucide-react";

const HouseLeaderboard = ({ housePoints }) => {
  return (
    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden lg:min-h-[600px] flex flex-col">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
        <Award className="text-yellow-400" /> Leaderboard
      </h3>

      <div className="space-y-6 flex-1 relative z-10">
        {housePoints
          .sort((a, b) => b.points - a.points)
          .map((house, index) => (
            <div key={house.id} className="group">
              <div className="flex items-end justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-2xl font-bold w-8 ${index === 0 ? "text-yellow-400" : "text-slate-600"}`}
                  >
                    #{index + 1}
                  </span>
                  <div>
                    <span className={`block font-bold text-lg ${house.text}`}>
                      {house.house}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      House
                    </span>
                  </div>
                </div>
                <span className="font-bold text-2xl tracking-tighter">
                  {house.points.toLocaleString()}
                </span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-[2px]">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${house.color} transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                  style={{ width: `${(house.points / 2000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>

      <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
        <p className="text-center text-xs text-slate-400 font-medium">
          Updated in real-time. Top house awarded monthly trophy.
        </p>
      </div>
    </div>
  );
};

export default HouseLeaderboard;
