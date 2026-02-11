import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Rocket,
  Zap,
  Lightbulb,
  CheckCircle,
  FileText,
  ChevronRight,
  Search,
} from "lucide-react";
import { ENRICHMENT_DATA } from "../../../../data/teacherData";

const CreateChallengeWizard = ({ onClose }) => {
  const [wizardStep, setWizardStep] = useState(1);
  const [newSession, setNewSession] = useState({
    title: "",
    type: "Challenge Project",
    focus: "",
    students: [],
    question: "",
    approach: "",
    resources: [],
  });

  const { wizard } = ENRICHMENT_DATA;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
        {/* Wizard Header */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              Design Enrichment
            </h2>
            <p className="text-sm font-medium text-slate-500">
              Step {wizardStep} of 4:{" "}
              {wizardStep === 1
                ? "Challenge Basics"
                : wizardStep === 2
                  ? "Select Scholars"
                  : wizardStep === 3
                    ? "Learning Design"
                    : "Review & Publish"}
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
                  Challenge Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Design a Water-Saving System"
                  className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 focus:outline-none transition-all placeholder:font-medium placeholder:text-slate-400"
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
                    {wizard.types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setNewSession({ ...newSession, type })}
                        className={`p-4 rounded-xl text-left border-2 transition-all font-bold text-sm ${
                          newSession.type === type
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-slate-200 bg-white text-slate-500 hover:border-indigo-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Core Competency
                  </label>
                  <select
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 focus:border-indigo-500 outline-none appearance-none"
                    value={newSession.focus || ""}
                    onChange={(e) =>
                      setNewSession({ ...newSession, focus: e.target.value })
                    }
                  >
                    <option value="">Select Competency</option>
                    {wizard.competencies.map((comp) => (
                      <option key={comp.value} value={comp.value}>
                        {comp.label}
                      </option>
                    ))}
                  </select>

                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block pt-4 ml-1">
                    Challenge Concept Note
                  </label>
                  <textarea
                    placeholder="Briefly describe the challenge scenario..."
                    className="w-full h-24 p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 outline-none resize-none placeholder:font-medium placeholder:text-slate-400"
                    value={newSession.question}
                    onChange={(e) =>
                      setNewSession({ ...newSession, question: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {wizardStep === 2 && (
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-1 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">High Mastery</h4>
                    <p className="text-xs font-bold text-indigo-600 mt-1">
                      12 Students 90%
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-500 shadow-sm">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Rapid Learners</h4>
                    <p className="text-xs font-bold text-teal-600 mt-1">
                      Identified by pacing
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 max-h-[400px]">
                  <span className="font-bold text-slate-500 text-xs uppercase tracking-wider px-2">
                    Select Scholars
                  </span>
                  <div className="relative">
                    <Search
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Search roster..."
                      className="pl-8 pr-3 py-1.5 text-xs font-bold border rounded-lg focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto p-2">
                  {wizard.studentsList.map((student) => (
                    <div
                      key={student.id}
                      className={`flex items-center justify-between p-3 mb-1 rounded-xl transition-all cursor-pointer ${
                        newSession.students.includes(student.id)
                          ? "bg-indigo-50 border border-indigo-100"
                          : "hover:bg-slate-50 border border-transparent"
                      }`}
                      onClick={() => {
                        const exists = newSession.students.includes(student.id);
                        setNewSession({
                          ...newSession,
                          students: exists
                            ? newSession.students.filter(
                                (id) => id !== student.id,
                              )
                            : [...newSession.students, student.id],
                        });
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${newSession.students.includes(student.id) ? "bg-indigo-500" : "bg-slate-300"}`}
                        >
                          {String.fromCharCode(64 + student.id)}
                        </div>
                        <span
                          className={`font-bold ${newSession.students.includes(student.id) ? "text-slate-800" : "text-slate-500"}`}
                        >
                          {student.name}
                        </span>
                      </div>
                      {newSession.students.includes(student.id) && (
                        <CheckCircle
                          size={20}
                          className="text-indigo-500 fill-white"
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
                  The Essential Question
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 focus:border-indigo-500 outline-none"
                  placeholder="e.g. How can we optimize energy usage in the school?"
                  value={newSession.question}
                  onChange={(e) =>
                    setNewSession({ ...newSession, question: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Format
                </label>
                <div className="flex gap-3">
                  {wizard.formats.map((app) => (
                    <button
                      key={app}
                      onClick={() =>
                        setNewSession({ ...newSession, approach: app })
                      }
                      className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all ${newSession.approach === app ? "bg-teal-50 text-teal-700 border-teal-200" : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"}`}
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Advanced Resources
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {wizard.resources.map((res) => (
                    <div
                      key={res}
                      className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 text-slate-700 text-sm font-bold bg-white hover:border-indigo-300 transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                        <FileText size={16} />
                      </div>
                      {res}
                    </div>
                  ))}
                  <button className="p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-400 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all">
                    + Upload Guide
                  </button>
                </div>
              </div>
            </div>
          )}

          {wizardStep === 4 && (
            <div className="space-y-8 flex flex-col items-center justify-center py-8">
              <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 text-center max-w-lg w-full">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm mx-auto mb-6">
                  <Rocket size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Launch Challenge?
                </h3>
                <p className="text-slate-500 font-medium mb-8">
                  This will assign the challenge to selected students and add it
                  to their dashboards.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-indigo-400"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                      Kickoff Time
                    </label>
                    <input
                      type="time"
                      className="w-full p-3 rounded-xl border border-slate-200 font-bold text-slate-700 outline-none focus:border-indigo-400"
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
            className="px-8 py-3 bg-indigo-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all text-xs uppercase tracking-wider flex items-center gap-2"
          >
            {wizardStep === 4 ? "Launch Challenge" : "Next Step"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
            `}</style>
    </div>
  );
};

export default CreateChallengeWizard;
