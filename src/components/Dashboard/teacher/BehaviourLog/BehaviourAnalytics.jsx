import React from "react";
import {
  BarChart3,
  Sparkles,
  Filter,
  Download,
  TrendingUp,
  Shield,
  Activity,
  Clock,
  ChevronRight,
  Layout,
  Eye,
  User,
  MapPin,
} from "lucide-react";

const BehaviourAnalytics = ({
  analyticsFilter,
  setAnalyticsFilter,
  behaviourAnalytics,
  analyticsView,
  setAnalyticsView,
}) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
      {/* 1. Header & Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/60 shadow-xl shadow-indigo-500/5">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-indigo-600 rounded-[1.5rem] text-white shadow-lg shadow-indigo-200">
            <BarChart3 size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Behaviour Analytics
            </h2>
            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
              <Sparkles size={12} /> AI-Powered Insight Engine
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex bg-slate-100/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-1.5 shadow-inner">
            {["Week", "Month", "Term"].map((r) => (
              <button
                key={r}
                onClick={() =>
                  setAnalyticsFilter({ ...analyticsFilter, range: r })
                }
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${analyticsFilter.range === r ? "bg-white text-indigo-600 shadow-md ring-1 ring-slate-200/50" : "text-slate-400 hover:text-indigo-500"}`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <Filter size={20} />
            </button>
            <button className="p-3 bg-slate-900 text-white rounded-2xl hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-0.5 transition-all duration-300">
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 2. Behaviour Trend Overview Section (LG: 8) */}
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100/80 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.08)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">
                  Pattern Progression
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Aggregate Conduct Index
                </p>
              </div>
              <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="text-slate-600">Positive Signals</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                  <span>Baseline</span>
                </div>
              </div>
            </div>

            {/* Advanced Mock Chart */}
            <div className="h-72 flex items-end justify-between gap-6 px-4 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="border-t border-slate-100 w-full h-0"
                  ></div>
                ))}
              </div>

              {behaviourAnalytics.trends.map((t, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-4 relative z-10 group/bar"
                >
                  <div className="w-full flex justify-center items-end gap-1.5 h-full">
                    <div
                      style={{ height: `${t.positive}%` }}
                      className="w-1.5 md:w-2.5 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full transition-all duration-1000 group-hover/bar:scale-x-150 group-hover/bar:brightness-110 shadow-[0_0_25px_rgba(79,70,229,0.15)]"
                    ></div>
                    <div
                      style={{ height: `${t.negative}%` }}
                      className="w-1.5 md:w-2.5 bg-slate-100 rounded-full transition-all duration-1000 group-hover/bar:bg-slate-200"
                    ></div>
                  </div>
                  <div className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all duration-300 -translate-y-2 group-hover/bar:translate-y-0 absolute -top-10">
                    <span className="text-[10px] font-black text-indigo-600">
                      +{t.positive}%
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {t.period}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-800 tracking-tight">
                    +14.2% Momentum
                  </p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    Efficiency Growth Rate
                  </p>
                </div>
              </div>
              <div className="flex p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                <button className="px-6 py-2.5 bg-white text-slate-800 shadow-md rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Historical
                </button>
                <button className="px-6 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Predictive
                </button>
              </div>
            </div>
          </div>

          {/* 4. Student / Group Breakdown Section */}
          <div className="bg-indigo-900 rounded-[3.5rem] p-10 relative overflow-hidden shadow-2xl shadow-indigo-900/40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

            <div className="relative z-10 flex items-center justify-between mb-10">
              <div className="flex bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-1.5">
                {["Individual", "Class", "Grade"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAnalyticsView(v)}
                    className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${analyticsView === v ? "bg-white text-indigo-900 shadow-xl" : "text-indigo-100/60 hover:text-white"}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="hidden md:block text-right">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">
                  Context Selection
                </h4>
                <div className="flex items-center gap-1 mt-1 justify-end text-indigo-300/60">
                  <Shield size={10} />{" "}
                  <span className="text-[8px] font-bold uppercase tracking-widest">
                    Authenticated View
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Conduct Delta",
                  value: "4.8",
                  suffix: "/5",
                  trend: "down",
                  color: "from-indigo-600 to-indigo-500",
                },
                {
                  label: "Growth Quotient",
                  value: "92",
                  suffix: "%",
                  trend: "up",
                  color: "from-emerald-600 to-emerald-500",
                },
                {
                  label: "Alert Frequency",
                  value: "03",
                  suffix: "pts",
                  trend: "stable",
                  color: "from-amber-600 to-amber-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/15 transition-all duration-500 group cursor-pointer border-t border-l border-white/20"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black text-indigo-200 uppercase tracking-[0.2em]">
                      {stat.label}
                    </span>
                    <div className="p-2 bg-white/10 rounded-xl text-white group-hover:scale-110 transition-transform">
                      {stat.trend === "up" ? (
                        <TrendingUp size={16} />
                      ) : stat.trend === "down" ? (
                        <Activity size={16} />
                      ) : (
                        <Clock size={16} />
                      )}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tighter text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-indigo-300/60 uppercase">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">
                      Explore Details
                    </span>
                    <ChevronRight size={14} className="text-indigo-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel (LG: 4) */}
        <div className="lg:col-span-4 space-y-10">
          {/* 3. AI Pattern Highlights Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-100 rounded-xl text-violet-600">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-black text-slate-800 tracking-tight">
                  AI Insights
                </h3>
              </div>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                Real-time
              </span>
            </div>
            <div className="space-y-6">
              {behaviourAnalytics.aiInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100/80 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-full blur-[40px] -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`px-3 py-1 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase tracking-[0.2em] shadow-lg`}
                      >
                        {insight.action}
                      </span>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3].map((s) => (
                            <div
                              key={s}
                              className={`w-1 h-3 rounded-full ${s <= 2 ? "bg-indigo-500" : "bg-slate-200"}`}
                            ></div>
                          ))}
                        </div>
                        {insight.confidence}% Core
                      </div>
                    </div>
                    <h4 className="text-base font-black text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 mb-4 flex items-center gap-2">
                      <MapPin size={10} /> {insight.context}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                      {insight.suggestion}
                    </p>
                    <button className="w-full py-3 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600 hover:bg-slate-100 transition-all group-hover:ring-2 ring-indigo-50">
                      Deep Analysis &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Action Indicator Panel */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 border border-white/60 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
            <h3 className="font-black text-slate-800 mb-8 flex items-center gap-3">
              <Layout size={20} className="text-indigo-600" /> Proposed Matrix
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "Monitor Only",
                  text: "Passive observation recommended.",
                  color: "from-slate-100 to-slate-50",
                  icon: <Eye size={16} />,
                },
                {
                  label: "Intervention",
                  text: "Scheduled mentor consultation.",
                  color: "from-indigo-100/50 to-white",
                  icon: <User size={16} />,
                },
                {
                  label: "Specialist Review",
                  text: "Professional evaluation track.",
                  color: "from-violet-100/50 to-white",
                  icon: <Shield size={16} />,
                },
              ].map((act, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${act.color} border border-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex items-start gap-4`}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600 group-hover:scale-110 transition-transform">
                    {act.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">
                      {act.label}
                    </span>
                    <p className="text-[10px] text-slate-500 font-medium mt-1 leading-relaxed">
                      {act.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviourAnalytics;
