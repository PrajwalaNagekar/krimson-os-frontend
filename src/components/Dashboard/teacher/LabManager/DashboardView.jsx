import React from "react";
import {
  Shield,
  FlaskConical,
  ClipboardList,
  Clock,
  ArrowRight,
} from "lucide-react";
import { LAB_DATA } from "../../../../data/teacherData";

const DashboardView = () => {
  const { stats, recentActivity } = LAB_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Stats Cards */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { ...stats[0], icon: Shield },
          { ...stats[1], icon: (props) => <FlaskConical {...props} /> },
          { ...stats[2], icon: ClipboardList },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform`}
              >
                {typeof stat.icon === "function" ? (
                  stat.icon({ size: 24 })
                ) : (
                  <stat.icon size={24} />
                )}
              </div>
              <div
                className={`px-3 py-1 rounded-full bg-${stat.color}-50 text-${stat.color}-600 text-xs font-bold uppercase tracking-wider`}
              >
                {stat.sub}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
              {stat.value}
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Clock size={20} className="text-slate-400" /> Recent Lab Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
            >
              <div
                className={`w-2 h-12 rounded-full bg-${activity.color}-500`}
              ></div>
              <div>
                <h4 className="font-bold text-slate-700">{activity.title}</h4>
                <p className="text-xs font-medium text-slate-400">
                  {activity.time} • {activity.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px]"></div>
        <h3 className="text-xl font-bold mb-6 relative z-10">Quick Actions</h3>
        <div className="space-y-3 relative z-10">
          <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold text-sm flex items-center justify-between px-6 transition-all group">
            <span>Log Incident</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm flex items-center justify-between px-6 hover:shadow-lg transition-all group">
            <span>Schedule Maintenance</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
