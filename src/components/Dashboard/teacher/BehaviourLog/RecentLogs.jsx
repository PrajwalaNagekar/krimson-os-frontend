import React from "react";
import {
  Zap,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  Calendar,
  AlertCircle,
  MoreVertical,
} from "lucide-react";

const RecentLogs = ({ behaviourLogs, logFilter, setLogFilter }) => {
  return (
    <div className="space-y-8">
      {/* AI Insight Banner */}
      <div className="bg-gradient-to-r from-indigo-900 to-violet-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16 animate-pulse"></div>
        <div className="relative z-10 flex items-start gap-6">
          <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <Zap size={24} className="text-yellow-400 fill-yellow-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold tracking-tight">
                AI3 Pattern Detection
              </h3>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                Live Analysis
              </span>
            </div>
            <p className="text-indigo-100/80 text-sm leading-relaxed mb-4 max-w-2xl">
              <span className="font-bold text-white">Attention Required:</span>{" "}
              Kabir Singh has accumulated 3 "Concern" logs in laboratory
              settings this week. Possible correlation with afternoon sessions.
            </p>
            <button className="px-6 py-2.5 bg-white text-indigo-900 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>

      {/* Feed Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
          Recent Logs
        </h3>
        <div className="flex gap-2">
          {["All", "Positive", "Concern", "Neutral"].map((f) => (
            <button
              key={f}
              onClick={() => setLogFilter(f)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                logFilter === f
                  ? "bg-slate-800 text-white shadow-md"
                  : "bg-slate-50 text-slate-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {behaviourLogs
          .filter((l) => logFilter === "All" || l.type === logFilter)
          .map((log) => (
            <div
              key={log.id}
              className="group p-6 bg-white border border-slate-100 hover:border-indigo-200 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                      log.type === "Positive"
                        ? "bg-emerald-50 text-emerald-500"
                        : log.type === "Concern"
                          ? "bg-amber-50 text-amber-500"
                          : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {log.type === "Positive" ? (
                      <CheckCircle2 size={24} />
                    ) : log.type === "Concern" ? (
                      <AlertTriangle size={24} />
                    ) : (
                      <MessageCircle size={24} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-800">
                        {log.student}
                      </h4>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${
                          log.type === "Positive"
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : log.type === "Concern"
                              ? "bg-amber-50 text-amber-600 border-amber-100"
                              : "bg-blue-50 text-blue-600 border-blue-100"
                        }`}
                      >
                        {log.type}
                      </span>
                      <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                        <Calendar size={12} /> {log.date}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-2xl">
                      {log.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100">
                        {log.context}
                      </span>
                      {log.followup && (
                        <span className="px-3 py-1 bg-red-50 text-red-500 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-red-100 flex items-center gap-1.5">
                          <AlertCircle size={12} /> Follow-up Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button className="p-2 text-slate-300 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentLogs;
