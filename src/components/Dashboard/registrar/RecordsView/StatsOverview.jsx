import React from "react";

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="relative group bg-white rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden"
          >
            {/* Gradient Background Blob */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes("+") || stat.change.includes("%") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-500 font-semibold">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
