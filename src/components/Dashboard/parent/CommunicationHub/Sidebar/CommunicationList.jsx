import React from "react";
import { Clock, CheckCheck, ShieldAlert, Lock, Tag } from "lucide-react";
import { getTabIcon, getTabGradient } from "../utils";

const CommunicationList = ({
  data,
  activeTab,
  selectedThread,
  onSelectThread,
}) => {
  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 text-sm">No messages found</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectThread(item)}
          className={`group p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
            selectedThread?.id === item.id
              ? "bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-pink-50/50 border-blue-200 shadow-lg ring-2 ring-blue-100"
              : "bg-white border-slate-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10"
          }`}
        >
          {/* Decorative gradient orb */}
          <div
            className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity ${
              activeTab === "counselor"
                ? "bg-purple-400"
                : activeTab === "broadcasts"
                  ? "bg-orange-400"
                  : activeTab === "announcements"
                    ? "bg-emerald-400"
                    : "bg-cyan-400"
            }`}
          ></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${getTabGradient(activeTab)}`}
                >
                  {getTabIcon(activeTab)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-800">{item.sender}</h4>
                    {!item.read && (
                      <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  {(item.role || item.title) && (
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.role || item.title}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <Clock size={10} /> {item.time}
                </span>
                {item.readReceipt && (
                  <span
                    className="text-cyan-500 flex items-center gap-1"
                    title={`Read at ${item.readReceipt.time}`}
                  >
                    <CheckCheck size={14} />
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-600 line-clamp-2 pl-[60px] mb-3">
              {item.preview || item.content}
            </p>

            <div className="pl-[60px] flex items-center gap-2 flex-wrap">
              {item.urgent && (
                <span className="bg-red-50 text-red-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-red-200 flex items-center gap-1 shadow-sm">
                  <ShieldAlert size={10} /> Urgent
                </span>
              )}
              {item.confidential && (
                <span className="bg-purple-50 text-purple-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-purple-200 flex items-center gap-1 shadow-sm">
                  <Lock size={10} /> Confidential
                </span>
              )}
              {item.followUp && (
                <span className="bg-amber-50 text-amber-600 text-[10px] px-2.5 py-1 rounded-full font-bold border border-amber-200 flex items-center gap-1 shadow-sm">
                  <Tag size={10} /> Follow-up
                </span>
              )}
              {item.tags &&
                item.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-full font-medium border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunicationList;
