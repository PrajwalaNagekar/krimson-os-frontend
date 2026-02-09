import React, { useState } from "react";
import {
  Send,
  Bell,
  Check,
  FileText,
  Download,
  Shield,
  TrendingUp,
  AlertTriangle,
  Clock,
  BarChart2,
  MessageSquare,
  CheckCircle,
  Users,
} from "lucide-react";

import PendingApprovalCard from "../../../components/dashboard/principal/CommunicationConsole/PendingApprovalCard";
import EngagementCard from "../../../components/dashboard/principal/CommunicationConsole/EngagementCard";
import TemplateCard from "../../../components/dashboard/principal/CommunicationConsole/TemplateCard";
import HistoryEntry from "../../../components/dashboard/principal/CommunicationConsole/HistoryEntry";

import {
  pendingApprovals,
  engagementMetrics,
  messageTemplates,
  broadcastHistory,
} from "../../../data/principalData.jsx";

const CommunicationConsole = () => {
  const [activeTab, setActiveTab] = useState("compose");
  const [selectedCategory, setSelectedCategory] = useState("Academic");

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Communication & Announcement Console
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Broadcast messages • Manage approvals • Track engagement
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Report</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Total Broadcasts
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                127
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <Send className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">This month</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Avg Read Rate
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                87%
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold">
            +5% from last month
          </p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Pending Approvals
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
                {pendingApprovals.length}
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Awaiting review</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                PDPA Compliant
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                100%
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">All messages archived</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex gap-2 border-b border-slate-200 p-2">
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "compose"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("compose")}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Compose New
          </button>
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all relative ${
              activeTab === "approvals"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("approvals")}
          >
            <Check className="w-4 h-4 inline mr-2" />
            Approvals
            {pendingApprovals.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white rounded-full text-xs font-bold">
                {pendingApprovals.length}
              </span>
            )}
          </button>
          <button
            className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === "history"
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            onClick={() => setActiveTab("history")}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            History
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "compose" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Compose Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-blue-500" />
                  Create Global Announcement
                </h3>
                <div className="space-y-5">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">
                      Category
                    </label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedCategory("Academic")}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                          selectedCategory === "Academic"
                            ? "bg-blue-100 text-blue-700 border-2 border-blue-400"
                            : "bg-slate-50 text-slate-600 border-2 border-transparent hover:bg-slate-100"
                        }`}
                      >
                        Academic
                      </button>
                      <button
                        onClick={() => setSelectedCategory("Administrative")}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                          selectedCategory === "Administrative"
                            ? "bg-purple-100 text-purple-700 border-2 border-purple-400"
                            : "bg-slate-50 text-slate-600 border-2 border-transparent hover:bg-slate-100"
                        }`}
                      >
                        Administrative
                      </button>
                    </div>
                  </div>

                  {/* Audience Selection */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">
                      Target Audience
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600"
                          defaultChecked
                        />
                        <span className="text-sm font-medium">Students</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600"
                          defaultChecked
                        />
                        <span className="text-sm font-medium">Teachers</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600"
                        />
                        <span className="text-sm font-medium">Parents</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600"
                        />
                        <span className="text-sm font-medium">Staff</span>
                      </label>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all"
                      placeholder="e.g. School Holiday Notification"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">
                      Message
                    </label>
                    <textarea
                      className="w-full border-2 border-slate-200 rounded-xl p-3 h-32 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-all resize-none"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  {/* PDPA Compliance Notice */}
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-blue-900 mb-1">
                        PDPA Compliance
                      </p>
                      <p className="text-xs text-blue-700 leading-relaxed">
                        This message will be digitally signed, timestamped, and
                        archived securely for compliance purposes. All
                        recipients' data is handled according to data protection
                        regulations.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      <Send size={18} />
                      Broadcast Now
                      <span className="text-[9px] opacity-80">
                        (get in app)
                      </span>
                    </button>
                    <button className="px-6 py-3 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-all">
                      Save Draft
                      <span className="text-[9px] opacity-70 ml-1">
                        (get in app)
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Message Templates Sidebar */}
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-4">
                  Quick Templates
                </h3>
                <div className="space-y-3">
                  {messageTemplates.map((template, idx) => (
                    <TemplateCard
                      key={idx}
                      {...template}
                      onClick={() =>
                        console.log("Load template:", template.title)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "approvals" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pending Approvals - Takes 2 columns */}
              <div className="lg:col-span-2">
                <h3 className="font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Pending Department Approvals ({pendingApprovals.length})
                </h3>
                <div className="space-y-4">
                  {pendingApprovals.map((approval, idx) => (
                    <PendingApprovalCard key={idx} {...approval} />
                  ))}
                </div>
                {pendingApprovals.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-slate-500 font-semibold">
                      All caught up!
                    </p>
                    <p className="text-sm text-slate-400">
                      No pending approvals at the moment.
                    </p>
                  </div>
                )}
              </div>

              {/* Engagement Metrics Sidebar */}
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-purple-500" />
                  Engagement Metrics
                </h3>
                <div className="space-y-3">
                  {engagementMetrics.map((metric, idx) => (
                    <EngagementCard key={idx} {...metric} />
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl text-sm font-bold transition-all">
                  View Full Analytics
                  <span className="text-[9px] opacity-80 ml-1">
                    (get in app)
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  Broadcast History
                </h3>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border-2 border-slate-200 rounded-lg text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none">
                    <option>All Categories</option>
                    <option>Academic</option>
                    <option>Administrative</option>
                  </select>
                  <button className="px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-bold transition-colors">
                    Filter
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                {broadcastHistory.map((entry, idx) => (
                  <HistoryEntry key={idx} {...entry} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunicationConsole;
