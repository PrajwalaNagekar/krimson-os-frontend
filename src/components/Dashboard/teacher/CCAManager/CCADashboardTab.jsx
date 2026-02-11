import React from "react";
import {
  Globe,
  Calendar,
  Users,
  ClipboardList,
  Target,
  ArrowRight,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

const CCADashboardTab = ({ metrics, sessions, actionItems }) => {
  const getIcon = (iconName) => {
    const icons = {
      Globe: Globe,
      Calendar: Calendar,
      Users: Users,
      ClipboardList: ClipboardList,
    };
    return icons[iconName] || Globe;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Metrics */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((stat, i) => {
          const Icon = getIcon(stat.icon);
          return (
            <div
              key={i}
              className={`bg-white p-6 rounded-3xl shadow-sm border-2 ${stat.border} hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-default`}
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {stat.desc}
                </p>
                <div
                  className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-500 flex items-center justify-center opacity-80`}
                >
                  <Icon size={20} />
                </div>
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold ${stat.text} mb-1`}
              >
                {stat.value}
              </h3>
              <p className="font-bold text-slate-700 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Upcoming Sessions Timeline */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:border-indigo-100 transition-colors">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar size={22} className="text-indigo-500" /> Upcoming Sessions
          </h3>
          <button className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
            View Schedule
          </button>
        </div>

        <div className="space-y-6">
          {sessions
            .filter((s) => s.status === "Upcoming")
            .map((session, index) => (
              <div key={session.id} className="flex gap-6 group">
                {/* Date Column */}
                <div className="w-16 flex flex-col items-center text-center pt-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${index === 0 ? "text-indigo-600" : "text-slate-400"}`}
                  >
                    {session.formattedDate.split(" ")[0]}
                  </span>
                  <span
                    className={`text-xl font-bold ${index === 0 ? "text-indigo-800" : "text-slate-600"}`}
                  >
                    {session.formattedDate.split(" ")[1]}
                  </span>
                  {index !==
                    sessions.filter((s) => s.status === "Upcoming").length -
                      1 && (
                    <div className="w-0.5 h-full bg-slate-100 mt-2"></div>
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-indigo-700 transition-colors">
                        {session.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <Users size={12} /> {session.club}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <Clock size={12} /> {session.time}
                        </span>
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <MapPin size={12} /> {session.location}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden ring-4 ring-slate-50">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>
          <h3 className="text-lg font-bold mb-6 relative z-10 flex items-center gap-2">
            <Target size={18} className="text-indigo-400" /> Action Items
          </h3>
          <div className="space-y-3 relative z-10">
            {actionItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <span className="text-sm font-medium group-hover:text-white/90">
                  {item.text}
                </span>
                {item.overdue ? (
                  <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded text-xs font-bold uppercase tracking-wider border border-rose-500/30">
                    Due
                  </span>
                ) : (
                  <ArrowRight
                    size={14}
                    className="text-white/50 group-hover:translate-x-1 transition-transform"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCADashboardTab;
