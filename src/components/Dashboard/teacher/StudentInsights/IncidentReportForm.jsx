import React from "react";
import {
  AlertOctagon,
  Sparkles,
  Activity,
  Shield,
  CheckCircle,
  User,
  Search,
  Star,
  Plus,
  Target,
  Send,
  Users,
} from "lucide-react";

const IncidentReportForm = ({
  incidentForm,
  setIncidentForm,
  setInsightMode,
  setToast,
}) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Core Details */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-50 rounded-2xl border border-red-100">
                <AlertOctagon size={28} className="text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Formal Incident Documentation
                </h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Administrative Use Only • Serious Occurrences
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Incident Date & Time
                </label>
                <div className="flex gap-3">
                  <input
                    type="date"
                    value={incidentForm.date}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                    onChange={(e) =>
                      setIncidentForm({ ...incidentForm, date: e.target.value })
                    }
                  />
                  <input
                    type="time"
                    value={incidentForm.time}
                    className="w-32 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                    onChange={(e) =>
                      setIncidentForm({ ...incidentForm, time: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Location of Occurrence
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g., Main Hallway, Playground, Bus-Q7"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                    value={incidentForm.location}
                    onChange={(e) =>
                      setIncidentForm({
                        ...incidentForm,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Incident Classification
                </label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none transition-all"
                  value={incidentForm.type}
                  onChange={(e) =>
                    setIncidentForm({ ...incidentForm, type: e.target.value })
                  }
                >
                  <option value="">Select Category...</option>
                  <option value="safety">Safety Violation</option>
                  <option value="physical">Physical Altercation</option>
                  <option value="harassment">Harassment / Bullying</option>
                  <option value="property">Property Damage</option>
                  <option value="theft">Theft / Dishonesty</option>
                  <option value="escalated">Escalated Behavioral Issue</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                  Severity Assessment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["low", "medium", "high"].map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setIncidentForm({ ...incidentForm, severity: level })
                      }
                      className={`py-3 rounded-xl border-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                        incidentForm.severity === level
                          ? level === "low"
                            ? "bg-emerald-50 border-emerald-500 text-emerald-600 shadow-sm"
                            : level === "medium"
                              ? "bg-orange-50 border-orange-500 text-orange-600 shadow-sm"
                              : "bg-red-50 border-red-500 text-red-600 shadow-xl"
                          : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-between px-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Factual Description
                </label>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-blue-100 transition-all border border-blue-100">
                  <Sparkles size={12} /> Refine for Neutrality (AI)
                </button>
              </div>
              <textarea
                rows={8}
                className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none leading-relaxed"
                placeholder="Provide an objective, factual account of the incident. Avoid emotional language or assumptions of intent..."
                value={incidentForm.description}
                onChange={(e) =>
                  setIncidentForm({
                    ...incidentForm,
                    description: e.target.value,
                  })
                }
              />
              <div className="flex items-center gap-2 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <Activity size={14} className="text-blue-500" />
                <p className="text-[10px] font-bold text-blue-600/70 uppercase tracking-wider">
                  AI Guard: Ensuring completeness and objective tone...
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Actions */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                Immediate Actions Taken
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Verbal Warning Issued",
                "Student Removed From Class",
                "Sent to Counsellor",
                "Medication / First Aid Provided",
                "Security Involved",
                "Escalated to HOD",
                "Parent Informed (Initial Call)",
                "Temporary Timeout",
              ].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    const exists = incidentForm.actions.includes(action);
                    setIncidentForm({
                      ...incidentForm,
                      actions: exists
                        ? incidentForm.actions.filter((a) => a !== action)
                        : [...incidentForm.actions, action],
                    });
                  }}
                  className={`p-4 border-2 rounded-2xl text-left transition-all flex items-center gap-3 group ${
                    incidentForm.actions.includes(action)
                      ? "border-blue-500 bg-blue-50/50 shadow-sm"
                      : "border-slate-100 bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${incidentForm.actions.includes(action) ? "bg-blue-500 border-blue-500" : "border-slate-300"}`}
                  >
                    {incidentForm.actions.includes(action) && (
                      <CheckCircle size={12} className="text-white" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-bold ${incidentForm.actions.includes(action) ? "text-blue-700" : "text-slate-600"}`}
                  >
                    {action}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: People & Attachments */}
        <div className="lg:col-span-4 space-y-8">
          {/* Involved Personnel */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
            <Users className="absolute -right-6 -top-6 w-32 h-32 opacity-5 scale-110 group-hover:rotate-12 transition-transform duration-1000" />
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
              <User size={20} className="text-blue-400" />
              Involved Students
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-1 mb-2 block">
                  Primary Student Involved
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search student..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-white/20"
                  />
                  <Search
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-1 mb-2 block">
                  Others Involved / Witnesses
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="Name other students or staff present..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-white/20 resize-none"
                    value={incidentForm.witnesses}
                    onChange={(e) =>
                      setIncidentForm({
                        ...incidentForm,
                        witnesses: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Evidence */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Star size={20} className="text-blue-500" />
              Evidence & Notes
            </h3>
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-blue-400 transition-all cursor-pointer bg-slate-50/50">
              <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Plus size={24} className="text-blue-500" />
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">
                Upload Documentation
              </p>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                Internal Use Only • Encrypted Storage
              </p>
            </div>
          </div>

          {/* Follow-up Recommendations */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Target size={20} className="text-purple-500" />
              Follow-up Recommendation
            </h3>
            <div className="space-y-3">
              {[
                {
                  id: "counsel",
                  label: "Counselling Referral",
                  desc: "Connect with wellbeing department",
                },
                {
                  id: "parent",
                  label: "Mandatory Parent Meeting",
                  desc: "Formal discussion required",
                },
                {
                  id: "monitor",
                  label: "Shadowing / Monitoring",
                  desc: "Increased supervision requested",
                },
                {
                  id: "review",
                  label: "Admin Disciplinary Review",
                  desc: "Escalate to Board/Admin",
                },
              ].map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => {
                    const exists = incidentForm.recommendations.includes(
                      rec.id,
                    );
                    setIncidentForm({
                      ...incidentForm,
                      recommendations: exists
                        ? incidentForm.recommendations.filter(
                            (r) => r !== rec.id,
                          )
                        : [...incidentForm.recommendations, rec.id],
                    });
                  }}
                  className={`w-full p-4 border-2 rounded-2xl text-left transition-all group ${
                    incidentForm.recommendations.includes(rec.id)
                      ? "border-purple-500 bg-purple-50/50 shadow-sm"
                      : "border-slate-50 bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-bold ${incidentForm.recommendations.includes(rec.id) ? "text-purple-700" : "text-slate-700"}`}
                    >
                      {rec.label}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${incidentForm.recommendations.includes(rec.id) ? "bg-purple-500 border-purple-500" : "border-slate-300"}`}
                    >
                      {incidentForm.recommendations.includes(rec.id) && (
                        <CheckCircle size={10} className="text-white" />
                      )}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {rec.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="space-y-4 pt-4">
            <button
              onClick={() => {
                setToast({
                  isOpen: true,
                  message: "Incident Report submitted to Administration.",
                });
                setInsightMode("analytics");
              }}
              className="w-full px-8 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-[1.5rem] font-bold shadow-xl shadow-red-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              <Send size={20} /> Submit Formal Report
            </button>
            <div className="flex items-center gap-2 justify-center text-slate-400">
              <Shield size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                Institutional Digital Signature Applied
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReportForm;
