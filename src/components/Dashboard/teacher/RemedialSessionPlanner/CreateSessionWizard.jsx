import React, { useState } from "react";
import {
  Trash2,
  ChevronRight,
  AlertCircle,
  Brain,
  Search,
  CheckCircle,
  FileText,
} from "lucide-react";

const CreateSessionWizard = ({ onClose }) => {
  const [wizardStep, setWizardStep] = useState(1);
  const [newSession, setNewSession] = useState({
    title: "",
    type: "Small Group",
    gap: "",
    students: [],
    objective: "",
    approach: "",
    resources: [],
  });

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
        {/* Wizard Header */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              Plan Remedial Session
            </h2>
            <p className="text-sm font-medium text-slate-500">
              Step {wizardStep} of 4:{" "}
              {wizardStep === 1
                ? "Session Basics"
                : wizardStep === 2
                  ? "Target Students"
                  : wizardStep === 3
                    ? "Instructional Design"
                    : "Review & Schedule"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
          >
            <Trash2 size={24} />
          </button>
        </div>

        {/* Wizard Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50/50">
          {wizardStep === 1 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Session Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Fractions - Concept Revision"
                  className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 focus:outline-none transition-all placeholder:font-medium placeholder:text-slate-400"
                  value={newSession.title}
                  onChange={(e) =>
                    setNewSession({ ...newSession, title: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Type
                  </label>
                  <div className="flex flex-col gap-2">
                    {["1-to-1", "Small Group", "Workshop"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setNewSession({ ...newSession, type })}
                        className={`p-4 rounded-xl text-left border-2 transition-all font-bold text-sm ${
                          newSession.type === type
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-500 hover:border-blue-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Linked Evidence
                  </label>
                  <select
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 focus:border-blue-500 outline-none appearance-none"
                    value={newSession.evidence || ""}
                    onChange={(e) =>
                      setNewSession({ ...newSession, evidence: e.target.value })
                    }
                  >
                    <option value="">Select Assessment / Outcome</option>
                    <option value="quiz4">Quiz 4: Fractions (8 Failed)</option>
                    <option value="assign3">Assignment 3: Mixed Numbers</option>
                    <option value="outcome_b2">Outcome B.2: Numerators</option>
                  </select>

                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block pt-4 ml-1">
                    Core Gap Note
                  </label>
                  <textarea
                    placeholder="Specific learning gap..."
                    className="w-full h-24 p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 outline-none resize-none placeholder:font-medium placeholder:text-slate-400"
                    value={newSession.gap}
                    onChange={(e) =>
                      setNewSession({ ...newSession, gap: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {wizardStep === 2 && (
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-1 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Low Mastery</h4>
                    <p className="text-xs font-bold text-orange-600 mt-1">
                      8 Students below 40%
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">AI Suggested</h4>
                    <p className="text-xs font-bold text-blue-600 mt-1">
                      Based on recent quiz
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 max-h-[400px]">
                  <span className="font-bold text-slate-500 text-xs uppercase tracking-wider px-2">
                    Select Students
                  </span>
                  <div className="relative">
                    <Search
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Search roster..."
                      className="pl-8 pr-3 py-1.5 text-xs font-bold border rounded-lg focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto p-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 mb-1 rounded-xl transition-all cursor-pointer ${
                        newSession.students.includes(i)
                          ? "bg-blue-50 border border-blue-100"
                          : "hover:bg-slate-50 border border-transparent"
                      }`}
                      onClick={() => {
                        const exists = newSession.students.includes(i);
                        setNewSession({
                          ...newSession,
                          students: exists
                            ? newSession.students.filter((id) => id !== i)
                            : [...newSession.students, i],
                        });
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${
                            newSession.students.includes(i)
                              ? "bg-blue-500"
                              : "bg-slate-300"
                          }`}
                        >
                          S{i}
                        </div>
                        <span
                          className={`font-bold ${
                            newSession.students.includes(i)
                              ? "text-slate-800"
                              : "text-slate-500"
                          }`}
                        >
                          Student Name {i}
                        </span>
                      </div>
                      {newSession.students.includes(i) && (
                        <CheckCircle
                          size={20}
                          className="text-blue-500 fill-white"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {wizardStep === 3 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Instructional Objective
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-blue-500 outline-none"
                  placeholder="e.g. Students will be able to simplify proper fractions"
                  value={newSession.objective}
                  onChange={(e) =>
                    setNewSession({ ...newSession, objective: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Teaching Approach
                </label>
                <div className="flex gap-3">
                  {["Reteaching", "Guided Practice", "Worked Examples"].map(
                    (app) => (
                      <button
                        key={app}
                        onClick={() =>
                          setNewSession({ ...newSession, approach: app })
                        }
                        className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                          newSession.approach === app
                            ? "bg-purple-50 text-purple-700 border-purple-200"
                            : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {app}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Resources (AI Suggested)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Visual Fraction Models (PDF)",
                    "Khan Academy Video: Denominators",
                    "Practice Worksheet A",
                  ].map((res) => (
                    <div
                      key={res}
                      className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 text-slate-700 text-sm font-bold bg-white hover:border-blue-300 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                        <FileText size={16} />
                      </div>
                      {res}
                    </div>
                  ))}
                  <button className="p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all">
                    + Upload Material
                  </button>
                </div>
              </div>
            </div>
          )}

          {wizardStep === 4 && (
            <div className="space-y-8 flex flex-col items-center justify-center py-8">
              <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center max-w-lg w-full">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Ready to Schedule?
                </h3>
                <p className="text-slate-500 font-medium mb-8">
                  This will log the session in your planner and notify selected
                  students.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-white flex justify-between items-center">
          {wizardStep > 1 ? (
            <button
              onClick={() => setWizardStep((curr) => curr - 1)}
              className="px-6 py-3 text-slate-500 font-bold uppercase tracking-wider text-xs hover:bg-slate-100 rounded-xl transition-all"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={() =>
              wizardStep < 4 ? setWizardStep((curr) => curr + 1) : onClose()
            }
            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all text-xs uppercase tracking-wider flex items-center gap-2"
          >
            {wizardStep === 4 ? "Confirm Session" : "Next Step"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        `}</style>
    </div>
  );
};

export default CreateSessionWizard;
