import React from "react";
import {
  Waves,
  Shield,
  Calendar,
  Frown,
  Meh,
  Smile,
  User,
  GraduationCap,
  ChevronRight,
  Clock,
  PieChart,
  AlertTriangle,
  Activity,
  Heart,
} from "lucide-react";

const WellbeingAnalytics = ({ wellbeingAnalytics }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
      {/* 1. Header & Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/60 shadow-xl shadow-indigo-500/5">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[1.5rem] text-white shadow-lg shadow-indigo-200">
            <Waves size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Wellbeing Analytics
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Holistic Student Support
              </p>
              <span className="px-3 py-1 bg-emerald-50 text-[8px] font-black text-emerald-600 rounded-full uppercase tracking-widest border border-emerald-100 flex items-center gap-1.5 shadow-sm">
                <Shield size={10} /> Secure Data
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex bg-slate-100/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-1.5 shadow-inner">
            {["Class 10-A", "Grade 10", "Global"].map((f) => (
              <button
                key={f}
                className="px-5 py-2 text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-all duration-300 uppercase tracking-widest"
              >
                {f}
              </button>
            ))}
          </div>
          <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 hover:shadow-xl transition-all duration-300">
            <Calendar size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 2. Wellbeing Trend Dashboard (LG: 8) */}
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white rounded-[3.5rem] p-10 border border-slate-50/80 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.06)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">
                  Sentiment Resonance
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  AI-Modeled Emotional Baseline
                </p>
              </div>
              <div className="flex bg-slate-50/80 backdrop-blur-md rounded-2xl p-1.5 border border-slate-100/50 shadow-inner">
                <button className="px-6 py-2 bg-white shadow-md rounded-xl text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                  Temporal
                </button>
                <button className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-500 transition-colors">
                  Cohort
                </button>
              </div>
            </div>

            {/* Fluid Mood Graph */}
            <div className="h-72 relative px-4 z-10">
              <div className="absolute inset-0 flex flex-col justify-between opacity-30 select-none">
                {["Flourishing", "Stabilized", "Fragile"].map((l) => (
                  <div key={l} className="flex items-center gap-6 w-full">
                    <span className="text-[8px] font-black uppercase text-slate-300 tracking-[0.2em] w-20">
                      {l}
                    </span>
                    <div className="border-t border-slate-100 w-full mb-1"></div>
                  </div>
                ))}
              </div>

              <svg
                className="w-full h-full overflow-visible relative z-10"
                viewBox="0 0 800 200"
              >
                <defs>
                  <linearGradient
                    id="moodFillGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 50,150 Q 150,120 250,80 T 450,110 T 650,40 T 750,65"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />
                <path
                  d="M 50,150 Q 150,120 250,80 T 450,110 T 650,40 T 750,65 V 200 H 50 Z"
                  fill="url(#moodFillGradient)"
                />

                {/* Indicators */}
                {[
                  {
                    x: 50,
                    y: 150,
                    mood: <Frown size={16} />,
                    color: "text-indigo-400",
                  },
                  {
                    x: 250,
                    y: 80,
                    mood: <Meh size={16} />,
                    color: "text-indigo-500",
                  },
                  {
                    x: 450,
                    y: 110,
                    mood: <Meh size={16} />,
                    color: "text-indigo-500",
                  },
                  {
                    x: 650,
                    y: 40,
                    mood: <Smile size={16} />,
                    color: "text-indigo-600",
                  },
                ].map((pt, i) => (
                  <foreignObject
                    key={i}
                    x={pt.x - 18}
                    y={pt.y - 18}
                    width="36"
                    height="36"
                  >
                    <div
                      className={`w-9 h-9 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-indigo-50 hover:scale-125 transition-all duration-500 cursor-help ${pt.color} group/emoji`}
                    >
                      {pt.mood}
                    </div>
                  </foreignObject>
                ))}
              </svg>

              <div className="flex justify-between mt-10 px-10">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                  (d) => (
                    <span
                      key={d}
                      className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]"
                    >
                      {d}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mt-16 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex items-center gap-6 relative z-10">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-xl bg-white border-2 border-slate-50 shadow-sm flex items-center justify-center text-indigo-600"
                  >
                    <User size={18} />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Derived from{" "}
                <span className="font-black text-slate-800">
                  142 individual check-ins
                </span>{" "}
                this week. Insights are indicative of cohort momentum and should
                be validated through 1-on-1 sessions.
              </p>
            </div>
          </div>

          {/* 5. Correlation Insights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-indigo-50/30 rounded-[3rem] p-10 border border-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                <GraduationCap size={20} className="text-indigo-400" /> Academic
                Friction
              </h4>
              <div className="space-y-5">
                {[
                  {
                    label: "Assessment Cycle",
                    mood: 42,
                    participation: 38,
                    color: "bg-indigo-500",
                  },
                  {
                    label: "Post-Assessment",
                    mood: 84,
                    participation: 91,
                    color: "bg-emerald-500",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-indigo-100/50 shadow-sm hover:translate-x-2 transition-transform duration-500"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        {item.label}
                      </span>
                      <ChevronRight size={14} className="text-slate-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-bold text-slate-400 uppercase">
                            Mood
                          </span>{" "}
                          <span className="text-xs font-black text-indigo-600">
                            {item.mood}%
                          </span>
                        </div>
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.mood}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-bold text-slate-400 uppercase">
                            Engage
                          </span>{" "}
                          <span className="text-xs font-black text-emerald-600">
                            {item.participation}%
                          </span>
                        </div>
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${item.participation}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100/80 shadow-xl shadow-indigo-500/5 relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100/60 transition-colors"></div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.3em] mb-8 flex items-center gap-3 relative z-10">
                <Clock size={20} className="text-indigo-400" /> Temporal Shifts
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium relative z-10 mb-8 pr-4">
                A consistent pattern of{" "}
                <span className="text-indigo-600 font-black italic">
                  mid-week fatigue
                </span>{" "}
                detected. Sentiment dips by{" "}
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-lg">
                  22%
                </span>{" "}
                every Wednesday afternoon.
              </p>
              <div className="flex items-center gap-4 bg-indigo-900 text-white p-5 rounded-2xl relative z-10 shadow-xl shadow-indigo-900/20 group-hover:scale-105 transition-transform duration-500">
                <div className="p-3 bg-white/10 rounded-xl">
                  <PieChart size={20} className="text-indigo-300" />
                </div>
                <div>
                  <span className="text-lg font-black tracking-tight">
                    64.2%
                  </span>
                  <p className="text-[9px] font-black text-indigo-200 uppercase tracking-widest leading-none">
                    Report Low Focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (LG: 4) */}
        <div className="lg:col-span-4 space-y-10">
          {/* 3. AI Risk Signal Cards */}
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-xl text-amber-500">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="font-black text-slate-800 tracking-tight">
                  Active Signals
                </h3>
              </div>
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest ring-1 ring-amber-100 bg-amber-50 px-2 py-1 rounded-lg">
                Priority
              </span>
            </div>
            <div className="space-y-6">
              {wellbeingAnalytics.riskSignals.map((signal) => (
                <div
                  key={signal.id}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100/80 shadow-xl shadow-amber-500/5 hover:shadow-amber-500/10 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/30 rounded-full blur-[40px] -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-2xl ${signal.level === "Medium" ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"} shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <Activity size={20} />
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${signal.level === "Medium" ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-indigo-50 text-indigo-600 border-indigo-100"} shadow-sm`}
                    >
                      {signal.level} Escalation
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                    {signal.signal}
                  </h4>
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                      <Clock size={16} className="text-slate-300" />{" "}
                      Sustainability: {signal.duration}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                      <User size={16} className="text-slate-300" /> Focus
                      Target: {signal.context}
                    </div>
                  </div>
                  <button className="w-full py-3.5 bg-slate-900 text-white rounded-[1.25rem] text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-slate-200 hover:-translate-y-1 transition-all">
                    Access Case Log
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Follow-Up Suggestions Section */}
          <div className="bg-indigo-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/40">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>
            <h3 className="text-xl font-black mb-10 flex items-center gap-4 relative z-10 tracking-tight">
              <Heart
                size={24}
                className="text-indigo-400 fill-indigo-400 animate-pulse"
              />{" "}
              Care Protocol
            </h3>
            <div className="space-y-6 relative z-10">
              {[
                {
                  label: "Check-in Suggestion",
                  type: "Teacher",
                  text: "Gentle check-in after periods for Kabir Singh.",
                  icon: <Smile />,
                },
                {
                  label: "Counsellor Referral",
                  type: "Specialist",
                  text: "Recommended for 10-B due to sustained low mood.",
                  icon: <User />,
                },
              ].map((rec, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-6 hover:bg-white/15 transition-all duration-500 cursor-pointer group hover:translate-x-2"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-indigo-300 opacity-80">
                      {rec.label}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-indigo-300 shadow-inner">
                      {React.cloneElement(rec.icon, { size: 16 })}
                    </div>
                  </div>
                  <p className="text-sm text-indigo-50/90 leading-relaxed mb-6 font-medium">
                    {rec.text}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-200 group-hover:text-white transition-colors">
                    Draft Message{" "}
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10 text-[9px] font-bold text-indigo-200/60 leading-relaxed italic text-center">
              Care suggestions are AI-generated based on behavioral resonance.
              Professional judgment is mandatory.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellbeingAnalytics;
