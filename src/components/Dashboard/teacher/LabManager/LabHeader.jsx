import { LayoutDashboard, FlaskConical, Calendar, Award, Sparkles } from "lucide-react";

const LabHeader = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dashboard", label: "Overview", icon: <LayoutDashboard size={16} /> },
    { id: "planner", label: "Planner", icon: <FlaskConical size={16} /> },
    { id: "operations", label: "Operations", icon: <Calendar size={16} /> },
    { id: "assessment", label: "Assessment", icon: <Award size={16} /> },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
      {/* Dynamic Background Elements */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner ring-1 ring-white/20">
            <Sparkles size={12} className="text-white" />
            Krimson OS • Lab Management
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter leading-none">
              {activeTab === "dashboard"
                ? "Lab Intelligence"
                : activeTab === "planner"
                  ? "Experiment Planner"
                  : activeTab === "operations"
                    ? "Lab Operations"
                    : "Skills Assessment"}
            </h1>
            <p className="opacity-90 font-bold text-sm md:text-lg max-w-2xl leading-relaxed">
              {activeTab === "dashboard"
                ? "Master dashboard for real-time visibility into laboratory facilities and equipment readiness."
                : activeTab === "planner"
                  ? "Collaborative workspace for designing rigorous scientific investigations and safety protocols."
                  : activeTab === "operations"
                    ? "Live logistics management for inventory requisition and facility slot allocation."
                    : "Systematic evaluation of laboratory competencies and scientific methodology mastery."}
            </p>
          </div>
        </div>

        {/* Tab Navigation Ribbon - Integrated Design */}
        <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabHeader;
