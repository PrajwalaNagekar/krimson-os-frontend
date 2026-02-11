import React from "react";
import { Bus, Route, Calendar, Plus } from "lucide-react";

const TransportHeader = ({ activeTab, setActiveTab, setShowCreateModal }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl shadow-lg group-hover:rotate-6 transition-transform">
              <Bus size={24} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Transport Intelligence
            </h1>
          </div>
          <p className="text-slate-500 font-medium ml-1">
            Spatial logistics and fleet manifest management.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tab Switcher - Segmented Control Style */}
          <div className="flex bg-slate-200/50 p-1 rounded-xl border border-slate-300/50">
            <button
              onClick={() => setActiveTab("routes")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "routes"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Route size={16} />
              <span>Routes</span>
            </button>
            <button
              onClick={() => setActiveTab("roster")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "roster"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Calendar size={16} />
              <span>Roster</span>
            </button>
          </div>

          {activeTab === "routes" && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold shadow-sm hover:bg-slate-800 transition-all border border-slate-900"
            >
              <Plus size={18} />
              <span>Create Route</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportHeader;
