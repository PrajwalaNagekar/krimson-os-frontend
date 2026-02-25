import React, { useState, useEffect } from "react";
import { X, Search, CheckCircle, AlertCircle } from "lucide-react";

const TopicFormModal = ({
  topic,
  chapter,
  units,
  outcomeLibrary,
  config,
  onSave,
  onClose,
}) => {
  const unit = units.find((u) => u.id === chapter?.unitId);

  const empty = {
    chapterId: chapter?.id || "",
    unitId: chapter?.unitId || "",
    title: "",
    sequence: "",
    outcomeStatement: "",
    outcomeCode: "",
    bloomLevel: "",
    competency: [],
    skillSubtype: [],
  };

  const [form, setForm] = useState(empty);
  const [saveAction, setSaveAction] = useState(null);
  const [showLibrary, setShowLibrary] = useState(false);
  const [librarySearch, setLibrarySearch] = useState("");

  useEffect(() => {
    if (topic) {
      setForm({
        chapterId: topic.chapterId,
        unitId: topic.unitId,
        title: topic.title,
        sequence: topic.sequence,
        outcomeStatement: topic.outcomeStatement,
        outcomeCode: topic.outcomeCode,
        bloomLevel: topic.bloomLevel,
        competency: [...topic.competency],
        skillSubtype: [...(topic.skillSubtype || [])],
      });
    }
  }, [topic]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const toggleArr = (key, val) =>
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(val)
        ? f[key].filter((v) => v !== val)
        : [...f[key], val],
    }));

  // validation
  const valid = {
    title: form.title.trim().length > 0,
    outcome: form.outcomeStatement.trim().length > 0,
    code: form.outcomeCode.trim().length > 0,
    bloom: form.bloomLevel.length > 0,
    competency: form.competency.length > 0,
  };
  const allValid = Object.values(valid).every(Boolean);

  const handleSave = (action) => {
    if (!allValid) return;
    onSave({ ...form }, action);
  };

  const filteredLibrary = outcomeLibrary.filter(
    (o) =>
      o.code.toLowerCase().includes(librarySearch.toLowerCase()) ||
      o.description.toLowerCase().includes(librarySearch.toLowerCase()),
  );

  const inputCls =
    "w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all";
  const labelCls =
    "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 rounded-t-3xl flex items-center justify-between text-white flex-shrink-0">
          <div>
            <h2 className="font-bold text-lg">
              {topic ? "Edit Topic" : "Create New Topic"}
            </h2>
            <p className="text-white/80 text-xs mt-0.5">
              Define topic details and learning outcomes
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6 space-y-5">
          {/* Auto Context */}
          {chapter && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">
                Auto Chapter Context (Read-only)
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Unit:</span> {unit?.title} (Unit{" "}
                {unit?.sequenceNo})
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Chapter:</span> {chapter.title}
              </p>
              {unit && (
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Framework:</span> CBSE - NCERT
                  Learning Outcomes
                </p>
              )}
            </div>
          )}

          {/* Topic Identity */}
          <div className="bg-slate-50 rounded-xl p-4 space-y-3 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Topic Identity
            </p>
            <div>
              <label className={labelCls}>Topic Title *</label>
              <input
                className={inputCls}
                placeholder="e.g. Prime Factorization"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Sequence *</label>
              <input
                type="number"
                className={inputCls}
                placeholder="1"
                value={form.sequence}
                onChange={(e) => set("sequence", e.target.value)}
                min={1}
              />
            </div>
          </div>

          {/* Learning Outcome */}
          <div className="bg-slate-50 rounded-xl p-4 space-y-3 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Learning Outcome (Mandatory)
            </p>
            <div>
              <label className={labelCls}>Outcome Statement *</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                placeholder="Students will..."
                value={form.outcomeStatement}
                onChange={(e) => set("outcomeStatement", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>
                Outcome Code * (Select from Library)
              </label>
              <select
                className={inputCls}
                value={form.outcomeCode}
                onChange={(e) => set("outcomeCode", e.target.value)}
              >
                <option value="">-- Select Outcome Code --</option>
                {outcomeLibrary.map((o) => (
                  <option key={o.code} value={o.code}>
                    {o.code} — {o.description}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setShowLibrary((v) => !v)}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Search size={14} /> Browse Outcome Library
            </button>
            {showLibrary && (
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="p-2 border-b border-slate-100 bg-white">
                  <input
                    className={inputCls}
                    placeholder="Search outcomes..."
                    value={librarySearch}
                    onChange={(e) => setLibrarySearch(e.target.value)}
                  />
                </div>
                <div className="max-h-48 overflow-y-auto divide-y divide-slate-50">
                  {filteredLibrary.map((o) => (
                    <button
                      key={o.code}
                      type="button"
                      onClick={() => {
                        set("outcomeCode", o.code);
                        setShowLibrary(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-xs font-bold text-blue-600">
                        {o.code}
                      </span>
                      <span className="text-xs text-slate-600 ml-2">
                        {o.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Outcome Tagging */}
          <div className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Outcome Tagging
            </p>

            {/* Bloom's Level */}
            <div>
              <label className={labelCls}>Bloom's Level *</label>
              <div className="grid grid-cols-3 gap-2">
                {config.bloomLevels.map((level) => (
                  <label
                    key={level}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer transition-all text-sm ${form.bloomLevel === level ? "border-blue-400 bg-blue-50 text-blue-700 font-semibold" : "border-slate-200 text-slate-600 hover:border-blue-200"}`}
                  >
                    <input
                      type="radio"
                      name="bloom"
                      className="sr-only"
                      value={level}
                      checked={form.bloomLevel === level}
                      onChange={() => set("bloomLevel", level)}
                    />
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${form.bloomLevel === level ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}
                    >
                      {form.bloomLevel === level && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </div>
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* Competency */}
            <div>
              <label className={labelCls}>Competency Type *</label>
              <div className="flex flex-wrap gap-2">
                {config.competencyTypes.map((c) => (
                  <label
                    key={c}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer transition-all text-sm ${form.competency.includes(c) ? "border-cyan-400 bg-cyan-50 text-cyan-700 font-semibold" : "border-slate-200 text-slate-600 hover:border-cyan-200"}`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={form.competency.includes(c)}
                      onChange={() => toggleArr("competency", c)}
                    />
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${form.competency.includes(c) ? "border-cyan-500 bg-cyan-500" : "border-slate-300"}`}
                    >
                      {form.competency.includes(c) && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    {c}
                  </label>
                ))}
              </div>
            </div>

            {/* Skill Sub-type */}
            {form.competency.includes("Skill") && (
              <div>
                <label className={labelCls}>Skill Sub-type</label>
                <div className="flex gap-2 flex-wrap">
                  {config.skillSubtypes.map((s) => (
                    <label
                      key={s}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-sm transition-all ${form.skillSubtype.includes(s) ? "border-purple-400 bg-purple-50 text-purple-700 font-semibold" : "border-slate-200 text-slate-600 hover:border-purple-200"}`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={form.skillSubtype.includes(s)}
                        onChange={() => toggleArr("skillSubtype", s)}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sub-topics summary */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
              Sub-Topics Summary
            </p>
            <p className="text-sm text-slate-500">
              This topic currently has{" "}
              <strong>{topic?.subtopics?.length || 0}</strong> sub-topic
              {(topic?.subtopics?.length || 0) !== 1 ? "s" : ""}.
            </p>
            {!topic && (
              <p className="text-xs text-blue-500 mt-1 flex items-center gap-1">
                <AlertCircle size={11} /> You can add sub-topics after saving
                the topic.
              </p>
            )}
          </div>

          {/* Validation Summary */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
              Validation Summary
            </p>
            <div className="space-y-1.5">
              {[
                { label: "Topic Title entered", ok: valid.title },
                { label: "Outcome Statement entered", ok: valid.outcome },
                { label: "Outcome Code selected", ok: valid.code },
                { label: "Bloom's Level selected", ok: valid.bloom },
                { label: "Competency Type selected", ok: valid.competency },
              ].map(({ label, ok }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <CheckCircle
                    size={14}
                    className={ok ? "text-emerald-500" : "text-slate-300"}
                  />
                  <span className={ok ? "text-slate-700" : "text-slate-400"}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p
              className={`text-xs font-semibold mt-2 ${allValid ? "text-emerald-600" : "text-orange-500"}`}
            >
              {allValid
                ? "All required fields completed"
                : "Please complete all required fields"}
            </p>
          </div>

          {/* Save Options */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              Save Options
            </p>
            {[
              {
                action: "curriculum",
                label: "[1] Save & Go to Curriculum Builder",
                sub: "→ Create lesson plan for this topic now",
              },
              {
                action: "subtopics",
                label: "[2] Save & Add Sub-Topics",
                sub: "→ Go to Subtopic Management screen",
              },
              {
                action: "new",
                label: "[3] Save & Add New Topic",
                sub: "→ Return with empty form for next topic in same chapter",
              },
              {
                action: "exit",
                label: "[4] Save & Exit",
                sub: "→ Return to Chapter/Topic List",
              },
            ].map(({ action, label, sub }) => (
              <button
                key={action}
                disabled={!allValid}
                onClick={() => handleSave(action)}
                className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all ${allValid ? "border-slate-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer" : "border-slate-100 opacity-50 cursor-not-allowed"}`}
              >
                <p className="font-semibold text-sm text-slate-800">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
          <p className="text-xs text-slate-400">* Required fields</p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicFormModal;
