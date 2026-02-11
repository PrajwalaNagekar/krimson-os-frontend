import React from "react";
import { Users, Plus, MessageCircle, Edit3, Trash2 } from "lucide-react";

const GroupCluster = ({
  groups,
  createNewGroup,
  setSelectorGroupId,
  initiateChat,
  deleteGroup,
  config,
}) => {
  // Default configuration with fallbacks
  const {
    title = "Strategic Clusters",
    activeTopologyText = "Topology Optimization Active",
    performanceLabel = "Performance",
    performanceValue = "Highly Optimized",
    newDeploymentButton = "New Deployment",
    membersLinkedText = "Members Linked",
    linkedTalentTitle = "Linked Talent",
    othersText = "OTHERS",
    deployStudentsButton = "Deploy Students",
    channelButton = "Channel",
    emptyCard = {
      title: "Strategic Cluster",
      description: "High-impact pedagogical targeting",
    },
  } = config || {};

  return (
    <div className="animate-fadeIn">
      {/* Hub-Style Section Header */}
      <div className="bg-white border border-[#F1F5F9] rounded-[2.5rem] p-6 md:p-8 mb-8 shadow-sm overflow-hidden relative">
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">
              {title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {activeTopologyText}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                {performanceLabel}
              </p>
              <p className="text-sm font-black text-blue-600">
                {performanceValue}
              </p>
            </div>
            <div className="w-[1px] h-10 bg-slate-100 hidden sm:block"></div>
            <button
              onClick={createNewGroup}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg"
            >
              {newDeploymentButton}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-[3rem] border border-[#F1F5F9] p-8 flex flex-col transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:translate-y-[-8px] group/card relative overflow-hidden h-full min-h-[420px]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-[5rem] group-hover/card:bg-slate-900 transition-all duration-500 -mr-8 -mt-8 flex items-center justify-center pl-6 pt-6">
              <Users
                size={28}
                className="text-slate-300 group-hover/card:text-white transition-colors"
              />
            </div>

            <div className="mb-8 relative z-10">
              <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover/card:text-blue-600 transition-colors">
                {group.name}
              </h4>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
                  {group.type}
                </span>
                <span className="text-[11px] text-slate-400 font-bold tracking-tight">
                  • {group.members.length} {membersLinkedText}
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-3">
                {linkedTalentTitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.members.slice(0, 5).map((m) => (
                  <div
                    key={m.id}
                    className="p-2.5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl flex items-center gap-2.5 hover:bg-white hover:border-blue-100 transition-all cursor-default"
                  >
                    <div className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500">
                      {m.name[0]}
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      {m.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
                {group.members.length > 5 && (
                  <div className="p-2.5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-[10px] font-black text-slate-400 px-4">
                    +{group.members.length - 5} {othersText}
                  </div>
                )}
                {group.members.length === 0 && (
                  <button
                    onClick={() => setSelectorGroupId(group.id)}
                    className="w-full h-24 rounded-[2rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/30 transition-all group/add"
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center mb-2 group-hover/add:border-blue-300 group-hover/add:bg-white transition-all">
                      <Plus size={20} className="stroke-[3px]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {deployStudentsButton}
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-[#F8FAFC]">
              <button
                onClick={() => initiateChat(group)}
                className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-slate-800 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={18} className="fill-white/10" />
                {channelButton}
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectorGroupId(group.id)}
                  className="w-12 h-12 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all shadow-sm"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => deleteGroup(group.id)}
                  className="w-12 h-12 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50/50 transition-all shadow-sm"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={createNewGroup}
          className="bg-white rounded-[3rem] border-4 border-dashed border-[#F1F5F9] flex flex-col items-center justify-center p-12 text-slate-300 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50/10 transition-all min-h-[420px] group/new"
        >
          <div className="w-20 h-20 bg-[#F8FAFC] rounded-[2.5rem] flex items-center justify-center mb-6 group-hover/new:bg-blue-600 group-hover/new:text-white group-hover/new:rotate-90 transition-all duration-500 shadow-sm group-hover/new:shadow-xl group-hover/new:shadow-blue-200">
            <Plus size={40} className="stroke-[3px]" />
          </div>
          <h4 className="text-lg font-black uppercase tracking-widest text-slate-400 group-hover/new:text-blue-600 transition-colors">
            {emptyCard.title}
          </h4>
          <p className="text-[11px] text-slate-400 mt-3 font-bold tracking-tight opacity-60">
            {emptyCard.description}
          </p>
        </button>
      </div>
    </div>
  );
};

export default GroupCluster;
