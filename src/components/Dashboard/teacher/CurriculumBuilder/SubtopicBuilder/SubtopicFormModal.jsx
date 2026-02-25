import React, { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

const SubtopicFormModal = ({
  subtopic,
  parentTopic,
  outcomeLibrary,
  config,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState({
    title: "",
    sequence: "",
    outcomeCode: parentTopic.outcomeCode,
    outcomeInherited: true,
    bloomLevel: parentTopic.bloomLevel,
    competency: parentTopic.competency[0] || "",
  });

  useEffect(() => {
    if (subtopic) {
      setForm({
        title: subtopic.title,
        sequence: subtopic.sequence,
        outcomeCode: subtopic.outcomeCode,
        outcomeInherited: subtopic.outcomeInherited,
        bloomLevel: subtopic.bloomLevel,
        competency: subtopic.competency,
      });
    }
  }, [subtopic]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const allValid =
    form.title.trim() && form.outcomeCode && form.bloomLevel && form.competency;

  const inputCls =
    "w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all";
  const labelCls =
    "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 rounded-t-3xl flex items-center justify-between text-white flex-shrink-0">
          <div>
            <h2 className="font-bold text-lg">
              {subtopic ? "Edit Sub-Topic" : "Create New Sub-Topic"}
            </h2>
            <p className="text-white/80 text-xs mt-0.5">
              Topic: {parentTopic.title}
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
          {/* Title & Sequence */}
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Sub-Topic Title *</label>
              <input
                className={inputCls}
                placeholder="e.g. Factor Tree Method"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Sequence No. *</label>
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

          {/* Outcome */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Learning Outcome
            </p>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.outcomeInherited}
                onChange={(e) => {
                  set("outcomeInherited", e.target.checked);
                  if (e.target.checked)
                    set("outcomeCode", parentTopic.outcomeCode);
                }}
                className="w-4 h-4 rounded accent-cyan-500"
              />
              <span className="text-sm text-slate-700 font-medium">
                Inherit parent outcome (
                <span className="text-blue-600 font-semibold">
                  {parentTopic.outcomeCode}
                </span>
                )
              </span>
            </label>
            {!form.outcomeInherited && (
              <div>
                <label className={labelCls}>Custom Outcome Code *</label>
                <select
                  className={inputCls}
                  value={form.outcomeCode}
                  onChange={(e) => set("outcomeCode", e.target.value)}
                >
                  <option value="">-- Select --</option>
                  {outcomeLibrary.map((o) => (
                    <option key={o.code} value={o.code}>
                      {o.code} — {o.description}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Bloom & Competency */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Outcome Tagging
            </p>
            <div>
              <label className={labelCls}>Bloom's Level *</label>
              <select
                className={inputCls}
                value={form.bloomLevel}
                onChange={(e) => set("bloomLevel", e.target.value)}
              >
                <option value="">-- Select --</option>
                {config.bloomLevels.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Competency *</label>
              <select
                className={inputCls}
                value={form.competency}
                onChange={(e) => set("competency", e.target.value)}
              >
                <option value="">-- Select --</option>
                {config.competencyTypes.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mini validation */}
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle
              size={15}
              className={allValid ? "text-emerald-500" : "text-slate-300"}
            />
            <span
              className={
                allValid ? "text-emerald-600 font-semibold" : "text-slate-400"
              }
            >
              {allValid
                ? "All required fields completed"
                : "Fill in all required fields to save"}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!allValid}
            onClick={() => allValid && onSave(form)}
            className={`px-6 py-2 rounded-xl text-white text-sm font-bold shadow-md transition-all ${allValid ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-105" : "bg-slate-300 cursor-not-allowed"}`}
          >
            {subtopic ? "Update Sub-Topic" : "Create Sub-Topic"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubtopicFormModal;
