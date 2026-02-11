import React from "react";
import {
  Bus,
  Save,
  Send,
  Sparkles,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const TripsHeader = ({ activeTab, setActiveTab, tripStatus }) => {
  // Tab Button Component
  const TabButton = ({ id, label, icon: Icon, activeTab, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${
        activeTab === id
          ? "bg-white/20 backdrop-blur-3xl text-white shadow-lg border border-white/30"
          : "text-blue-100/60 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={16} />
      <span className="text-[9px] font-black uppercase tracking-widest">
        {label}
      </span>
    </button>
  );

  const StatusBadge = ({ status }) => {
    const styles = {
      Draft: "bg-slate-100 text-slate-600 border-slate-200",
      Submitted: "bg-amber-50 text-amber-600 border-amber-200",
      Approved: "bg-emerald-50 text-emerald-600 border-emerald-200",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        {/* Krimson OS Pill Breadcrumb */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
            <Sparkles size={12} className="text-blue-200" />
            Krimson OS • Educational Trips
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                  <Bus size={28} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                  Educational Trip Planning
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg">
                  <Save size={18} /> Save Draft
                </button>
                <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all flex items-center gap-2">
                  <Send size={18} /> Submit for Approval
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 ml-1">
                  <StatusBadge status={tripStatus} />
                  <span className="text-blue-100 font-medium text-lg opacity-90">
                    • Science Museum Exploration
                  </span>
                </div>

                {/* Tabs - Moved Below Title */}
                <div className="flex bg-slate-900/40 backdrop-blur-3xl p-1.5 rounded-[2.5rem] border border-white/10 shadow-2xl flex-wrap items-center gap-1 w-fit">
                  <TabButton
                    id="planning"
                    label="Trip Planning"
                    icon={ClipboardList}
                    activeTab={activeTab}
                    onClick={setActiveTab}
                  />
                  <TabButton
                    id="risk"
                    label="Risk & Consent"
                    icon={ShieldCheck}
                    activeTab={activeTab}
                    onClick={setActiveTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsHeader;
