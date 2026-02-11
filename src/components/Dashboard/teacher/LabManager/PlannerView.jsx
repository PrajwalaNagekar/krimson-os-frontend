import React from "react";
import { Plus, ChevronRight, FlaskConical, Sparkles } from "lucide-react";

const PlannerView = ({
  plans,
  setPlans,
  currentPlan,
  setCurrentPlan,
  handleCreatePlan,
  handleSavePlan,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* List / Sidebar */}
      <div
        className={`lg:col-span-4 space-y-4 ${currentPlan ? "hidden lg:block" : "block"}`}
      >
        <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl h-full min-h-[600px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">My Experiments</h3>
            <button
              onClick={handleCreatePlan}
              className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          <div className="space-y-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setCurrentPlan(plan)}
                className={`p-5 rounded-[1.5rem] border transition-all cursor-pointer group ${
                  currentPlan?.id === plan.id
                    ? "bg-emerald-50 border-emerald-200 shadow-md"
                    : "bg-white border-slate-100 hover:border-emerald-200 hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                      plan.status === "Draft"
                        ? "bg-amber-100 text-amber-700"
                        : plan.status === "Ready"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {plan.status}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`text-slate-300 transition-transform ${currentPlan?.id === plan.id ? "rotate-90 text-emerald-500" : "group-hover:text-emerald-400"}`}
                  />
                </div>
                <h4 className="font-bold text-slate-800 mb-1 line-clamp-1">
                  {plan.title}
                </h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {plan.subject} • {plan.class}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editor View */}
      <div
        className={`lg:col-span-8 ${currentPlan ? "block" : "hidden lg:block"}`}
      >
        {currentPlan ? (
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl relative overflow-hidden animate-in fade-in slide-in-from-right-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-full mr-8">
                <input
                  type="text"
                  value={currentPlan.title}
                  onChange={(e) =>
                    setCurrentPlan({ ...currentPlan, title: e.target.value })
                  }
                  className="text-2xl md:text-3xl font-bold text-slate-800 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-slate-300 w-full"
                  placeholder="Experiment Title"
                />
              </div>
              <button
                onClick={handleSavePlan}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 shadow-lg whitespace-nowrap"
              >
                Save Plan
              </button>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Step 1: Context */}
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">
                    1
                  </div>
                  Context & Objectives
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Subject
                    </label>
                    <select
                      value={currentPlan.subject}
                      onChange={(e) =>
                        setCurrentPlan({
                          ...currentPlan,
                          subject: e.target.value,
                        })
                      }
                      className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400"
                    >
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Class
                    </label>
                    <select
                      value={currentPlan.class}
                      onChange={(e) =>
                        setCurrentPlan({
                          ...currentPlan,
                          class: e.target.value,
                        })
                      }
                      className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400"
                    >
                      <option>9-A</option>
                      <option>9-B</option>
                      <option>10-A</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Learning Objective (AI Draft available)
                  </label>
                  <textarea
                    className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-emerald-400 resize-none"
                    rows="3"
                    placeholder="Describe what students will investigate..."
                    value={currentPlan.objective}
                    onChange={(e) =>
                      setCurrentPlan({
                        ...currentPlan,
                        objective: e.target.value,
                      })
                    }
                  ></textarea>
                  <button className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:text-emerald-700">
                    <Sparkles size={14} /> Auto-generate with AI
                  </button>
                </div>
              </div>

              {/* Step 2: Resources and Safety */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                      2
                    </div>
                    Resources
                  </h4>
                  <div className="min-h-[100px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
                    <p className="text-xs font-bold mb-2">No files attached</p>
                    <button className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-xs font-bold shadow-sm border border-slate-200">
                      Browse Library
                    </button>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">
                      3
                    </div>
                    Safety Check
                  </h4>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-600">
                        Chemical Hazard Risk
                      </span>
                      <span className="text-xs font-bold text-amber-500">
                        MODERATE
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-amber-400 rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">
                      Requires safety goggles and gloves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-[2.5rem]">
            <FlaskConical size={64} className="mb-4 text-slate-200" />
            <h3 className="text-xl font-bold text-slate-500">
              Select an experiment to edit
            </h3>
            <p className="text-sm font-medium">
              Or create a new one to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlannerView;
