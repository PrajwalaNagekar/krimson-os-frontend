import React from "react";
import { Target, Clock, MessageCircle, Users } from "lucide-react";

const RosterStats = ({ stats }) => {
  // Mapping string icon names to components if needed, or assuming they are passed as components (but data file has strings if I copied from there).
  // The previous implementation had them hardcoded. I should map them.
  const iconMap = {
    Target: Target,
    Clock: Clock,
    MessageCircle: MessageCircle,
    Users: Users,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-1">
      {stats.map((stat, i) => {
        const Icon = iconMap[stat.icon] || Target;
        return (
          <div
            key={i}
            className="p-6 bg-white rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#F1F5F9] hover:border-blue-100 transition-all hover:translate-y-[-5px] group"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <div
                className={`p-2 bg-${stat.color}-50 text-${stat.color}-500 rounded-xl group-hover:scale-110 transition-transform`}
              >
                <Icon size={18} />
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              {stat.value}
            </h3>
            <p
              className={`text-[9px] font-black mt-1 uppercase ${stat.sub.includes("+") ? "text-green-500" : "text-slate-400"}`}
            >
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RosterStats;
