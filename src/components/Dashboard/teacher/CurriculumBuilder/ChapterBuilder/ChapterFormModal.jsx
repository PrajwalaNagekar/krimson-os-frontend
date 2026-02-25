import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ChapterFormModal = ({ chapter, unitId, units, onSave, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    sequence: "",
    periods: "",
    week: "",
    unitId: unitId || "",
  });

  useEffect(() => {
    if (chapter) {
      setForm({
        title: chapter.title || "",
        sequence: chapter.sequence || "",
        periods: chapter.periods || "",
        week: chapter.week || "",
        unitId: unitId || chapter.unitId || "",
      });
    } else {
      setForm((f) => ({ ...f, unitId: unitId || "" }));
    }
  }, [chapter, unitId]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const isValid =
    form.title.trim() && form.sequence && form.periods && form.week.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSave({ ...form });
  };

  const inputCls =
    "w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all";
  const labelCls =
    "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 rounded-t-3xl flex items-center justify-between text-white flex-shrink-0">
          <div>
            <h2 className="font-bold text-lg">
              {chapter ? "Edit Chapter" : "Create New Chapter"}
            </h2>
            <p className="text-white/70 text-xs mt-0.5">
              Fill in chapter details below
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Unit — read-only context */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-0.5">
              Parent Unit
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {units.find((u) => u.id === form.unitId)
                ? `Unit ${units.find((u) => u.id === form.unitId).sequenceNo}: ${units.find((u) => u.id === form.unitId).title}`
                : "—"}
            </p>
          </div>

          {/* Title */}
          <div>
            <label className={labelCls}>Chapter Title *</label>
            <input
              className={inputCls}
              placeholder="e.g. Euclid's Division Lemma"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              required
            />
          </div>

          {/* Sequence + Periods */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Sequence No. *</label>
              <input
                type="number"
                className={inputCls}
                placeholder="1"
                value={form.sequence}
                onChange={(e) => set("sequence", e.target.value)}
                min={1}
                required
              />
            </div>
            <div>
              <label className={labelCls}>Periods *</label>
              <input
                type="number"
                className={inputCls}
                placeholder="3"
                value={form.periods}
                onChange={(e) => set("periods", e.target.value)}
                min={1}
                required
              />
            </div>
          </div>

          {/* Week */}
          <div>
            <label className={labelCls}>Week *</label>
            <input
              className={inputCls}
              placeholder="e.g. Week 1 or Week 1-2"
              value={form.week}
              onChange={(e) => set("week", e.target.value)}
              required
            />
          </div>

          {/* Validation hint */}
          {!isValid && (
            <p className="text-xs text-orange-500 font-medium">
              Fill in all required fields to save.
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-2 rounded-xl text-white text-sm font-bold shadow-md transition-all ${
                isValid
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-105"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              {chapter ? "Update Chapter" : "Create Chapter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChapterFormModal;
