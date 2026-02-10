import React from "react";
import { Users, Package, Download, BarChart3, TrendingUp } from "lucide-react";

const WeeklySummary = ({ summary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top Users */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Users className="text-blue-500" size={20} />
              Most Active Users
            </h3>
            <p className="text-sm text-slate-500">This week</p>
          </div>
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Download size={14} />
              Export
            </div>
          </button>
        </div>

        <div className="space-y-3">
          {summary.topUsers.map((user, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{user.name}</p>
                    <p className="text-xs text-slate-500">
                      {user.count} activities
                    </p>
                  </div>
                </div>
                <BarChart3 size={18} className="text-blue-500" />
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  style={{
                    width: `${(user.count / summary.topUsers[0].count) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Modules */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Package className="text-purple-500" size={20} />
              Most Active Modules
            </h3>
            <p className="text-sm text-slate-500">This week</p>
          </div>
          <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-xl font-bold text-xs hover:bg-purple-100 transition-all border border-purple-200 flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Download size={14} />
              Export
            </div>
          </button>
        </div>

        <div className="space-y-3">
          {summary.topModules.map((module, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-xl border border-purple-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{module.name}</p>
                    <p className="text-xs text-slate-500">
                      {module.count} activities
                    </p>
                  </div>
                </div>
                <TrendingUp size={18} className="text-purple-500" />
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                  style={{
                    width: `${(module.count / summary.topModules[0].count) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;
