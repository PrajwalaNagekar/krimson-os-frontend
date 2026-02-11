import React from "react";
import {
  Plus,
  Search,
  Users,
  MoreHorizontal,
  CheckCheck,
  Paperclip,
  Send,
  MessageCircle,
  Award,
  Activity,
} from "lucide-react";

const CommunicationHub = ({
  activeChat,
  setActiveChat,
  messages,
  setMessages,
  chatMessage,
  setChatMessage,
  sendMessage,
  conversations,
  searchQuery,
  setSearchQuery,
  config,
}) => {
  const {
    sidebarTitle = "Channels",
    searchPlaceholder = "Find a group channel...",
    sidebarTabs = ["Global", "Priority"],
    sectionTitle = "Active Strategic Units",
    sessionStartText = "Session Started 10:15 AM",
    securityText = "Security Link",
    encryptedLabel = "ENCRYPTED",
    footerText = "Krimson Hub • Secure Pedagogical Gateway",
    emptyState = {
      title: "Select Strategic Channel",
      description:
        "Select a dynamic cluster to initiate high-impact pedagogical communication.",
      stats: [
        { label: "Growth Pins", icon: "Award", color: "orange" },
        { label: "Real-time Check", icon: "Activity", color: "blue" },
      ],
    },
    quickActions = [
      { text: "Supportive Praise", color: "blue" },
      { text: "Remedial Action", color: "purple" },
      { text: "Strategic Check", color: "pink" },
    ],
  } = config || {};

  const iconMap = { Award, Activity };

  return (
    <div className="bg-white rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-[#F1F5F9] overflow-hidden flex h-[750px] animate-scaleIn mx-1 relative">
      {/* Glassmorphism Sidebar */}
      <div className="w-[340px] border-r border-[#F1F5F9] flex flex-col bg-[#F8FAFC]/50 backdrop-blur-md">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              {sidebarTitle}
            </h3>
            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
              <Plus size={16} className="stroke-[3px]" />
            </div>
          </div>
          <div className="relative mb-8">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 focus:border-blue-400 rounded-[1.5rem] text-sm font-bold focus:outline-none transition-all shadow-sm placeholder:text-slate-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            {sidebarTabs.map((tab, i) => (
              <button
                key={i}
                className={`flex-1 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] transition-all ${i === 0 ? "bg-slate-900 text-white shadow-lg shadow-slate-200" : "bg-white text-slate-400 border border-slate-200 hover:bg-slate-50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-2 custom-scrollbar">
          <p className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">
            {sectionTitle}
          </p>
          {conversations.map((chat) => (
            <button
              key={`group-${chat.id}`}
              onClick={() => setActiveChat(chat)}
              className={`w-full p-5 rounded-[2rem] flex items-center gap-4 transition-all duration-300 border-2 ${
                activeChat?.id === chat.id
                  ? "bg-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] border-blue-500/10 scale-[1.02]"
                  : "hover:bg-white/80 border-transparent hover:shadow-md"
              }`}
            >
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs shadow-md transition-transform ${activeChat?.id === chat.id ? "bg-blue-600 text-white rotate-6" : "bg-slate-800 text-white"}`}
                >
                  <Users size={20} />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white shadow-sm">
                  {chat.members?.length || 0}
                </span>
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p
                    className={`text-sm font-black tracking-tight truncate ${activeChat?.id === chat.id ? "text-blue-600" : "text-slate-800"}`}
                  >
                    {chat.name}
                  </p>
                  <span
                    className={`text-[8px] font-black uppercase tracking-widest ${activeChat?.id === chat.id ? "text-blue-400" : "text-slate-400"}`}
                  >
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate leading-relaxed font-medium">
                  Monitoring cluster performance...
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Messaging Pane */}
      <div className="flex-1 flex flex-col bg-white">
        {activeChat ? (
          <>
            <header className="h-24 px-10 border-b border-[#F1F5F9] flex items-center justify-between bg-white relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white shadow-xl shadow-blue-100 text-lg">
                  <Users size={24} className="stroke-[2.5px]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {activeChat.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border-2 border-white bg-slate-200"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                      Active Intervention Channel
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {securityText}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-slate-900">
                      {encryptedLabel}
                    </span>
                  </div>
                </div>
                <button className="p-3.5 bg-[#F8FAFC] text-slate-400 hover:text-slate-900 hover:bg-[#F1F5F9] rounded-2xl transition-all border border-[#F1F5F9]">
                  <MoreHorizontal size={22} />
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-[#FBFDFF] custom-scrollbar">
              <div className="flex justify-center mb-4">
                <div className="px-6 py-2 bg-white rounded-2xl text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] border border-[#F1F5F9] shadow-sm">
                  {sessionStartText}
                </div>
              </div>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isMe ? "justify-end" : "justify-start"} animate-fadeIn`}
                >
                  <div
                    className={`max-w-[75%] ${msg.isMe ? "items-end" : "items-start"} flex flex-col group`}
                  >
                    {!msg.isMe && (
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2">
                        {msg.sender}
                      </span>
                    )}
                    <div
                      className={`p-5 rounded-[2.2rem] shadow-sm text-[13px] font-bold leading-[1.6] transition-all relative ${
                        msg.isMe
                          ? "bg-blue-500 text-white rounded-tr-none shadow-[0_10px_25px_rgba(59,130,246,0.15)] group-hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)]"
                          : "bg-white border border-[#F1F5F9] text-slate-700 rounded-tl-none group-hover:shadow-lg group-hover:border-blue-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div
                      className={`flex items-center gap-2 mt-2.5 ${msg.isMe ? "justify-end pr-1" : "justify-start pl-4"}`}
                    >
                      <span className="text-[9px] font-black text-slate-300 uppercase">
                        {msg.timestamp}
                      </span>
                      {msg.isMe && (
                        <CheckCheck size={12} className="text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Elevated Input Area */}
            <div className="p-8 bg-white border-t border-[#F1F5F9]">
              <div className="flex items-center gap-3 mb-5 overflow-x-auto pb-2 no-scrollbar">
                {quickActions.map((btn, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setChatMessage(
                        `Strategic Update: ${btn.text} required for this cluster.`,
                      )
                    }
                    className={`px-4 py-2 bg-${btn.color}-50 text-${btn.color}-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-${btn.color}-100 hover:bg-${btn.color}-100 transition-all whitespace-nowrap active:scale-95`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
              <div className="flex items-end gap-4 p-2.5 bg-[#F8FAFC] border-2 border-transparent focus-within:border-blue-100 focus-within:bg-white rounded-[2.2rem] transition-all group/input shadow-inner">
                <div className="flex pb-1.5 pl-2">
                  <button className="p-3 text-slate-400 hover:text-blue-600 transition-all hover:scale-110 active:scale-90">
                    <Paperclip size={22} />
                  </button>
                </div>
                <textarea
                  rows="1"
                  placeholder="Draft cluster intervention..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    (e.preventDefault(), sendMessage())
                  }
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold min-h-[50px] py-4 no-scrollbar resize-none text-slate-800 placeholder:text-slate-300 transition-all"
                />
                <button
                  onClick={sendMessage}
                  className={`p-4 rounded-[1.5rem] transition-all duration-300 shadow-xl mb-1 mr-1 ${chatMessage.trim() ? "bg-slate-900 text-white scale-100 hover:bg-black hover:translate-y-[-2px]" : "bg-slate-200 text-slate-400 scale-90 cursor-not-allowed"}`}
                >
                  <Send size={22} className="stroke-[2.5px]" />
                </button>
              </div>
              <p className="text-[9px] text-slate-300 text-center font-black uppercase mt-4 tracking-[0.2em]">
                {footerText}
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-16 text-center bg-[#FBFDFF]">
            <div className="w-32 h-32 bg-white rounded-[4rem] shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex items-center justify-center mb-8 border border-[#F1F5F9] animate-pulse">
              <MessageCircle size={48} className="text-blue-500 opacity-20" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
              {emptyState.title}
            </h3>
            <p className="text-sm text-slate-400 max-w-sm font-bold leading-relaxed uppercase tracking-wider opacity-60 px-6">
              {emptyState.description}
            </p>
            <div className="grid grid-cols-2 gap-5 mt-16 w-full max-w-md">
              {emptyState.stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Award;
                return (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-[2.5rem] shadow-sm border border-[#F1F5F9] flex flex-col items-center group/stat hover:border-blue-200 transition-all"
                  >
                    <div
                      className={`w-10 h-10 bg-${stat.color}-50 text-${stat.color}-400 rounded-2xl flex items-center justify-center mb-3 group-hover/stat:bg-${stat.color}-400 group-hover/stat:text-white transition-all`}
                    >
                      <Icon size={20} />
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationHub;
