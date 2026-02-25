import React, { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";

const emptyChapter = () => ({
  id: `c_${Date.now()}_${Math.random()}`,
  title: "",
  sequence: "",
  periods: "",
  week: "",
});

const UnitFormModal = ({ unit, terms, onSave, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    sequenceNo: "",
    weeks: "",
    periods: "",
    termId: terms[0]?.id || "",
    chapters: [emptyChapter()],
  });

  useEffect(() => {
    if (unit) {
      setForm({
        title: unit.title,
        sequenceNo: unit.sequenceNo,
        weeks: unit.weeks,
        periods: unit.periods,
        termId: unit.termId,
        chapters: unit.chapters.map((c) => ({ ...c })),
      });
    }
  }, [unit]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const setChapter = (idx, key, val) =>
    setForm((f) => {
      const chapters = f.chapters.map((c, i) =>
        i === idx ? { ...c, [key]: val } : c,
      );
      return { ...f, chapters };
    });

  const addChapter = () =>
    setForm((f) => ({ ...f, chapters: [...f.chapters, emptyChapter()] }));

  const removeChapter = (idx) =>
    setForm((f) => ({
      ...f,
      chapters: f.chapters.filter((_, i) => i !== idx),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, chapters: form.chapters.filter((c) => c.title.trim()) });
  };

  const inputCls =
    "w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all";
  const labelCls =
    "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 rounded-t-3xl flex items-center justify-between text-white flex-shrink-0">
          <div>
            <h2 className="font-bold text-lg">
              {unit ? "Edit Unit" : "Create New Unit"}
            </h2>
            <p className="text-white/80 text-xs mt-0.5">
              Define unit details and chapters
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto flex-1 p-6 space-y-5"
        >
          {/* Term Select */}
          <div>
            <label className={labelCls}>Term *</label>
            <select
              className={inputCls}
              value={form.termId}
              onChange={(e) => set("termId", e.target.value)}
              required
            >
              {terms.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} — {t.grade} · {t.subject}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Title */}
            <div className="col-span-2">
              <label className={labelCls}>Unit Title *</label>
              <input
                className={inputCls}
                placeholder="e.g. Real Numbers"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                required
              />
            </div>
            {/* Sequence */}
            <div>
              <label className={labelCls}>Sequence No. *</label>
              <input
                type="number"
                className={inputCls}
                placeholder="1"
                value={form.sequenceNo}
                onChange={(e) => set("sequenceNo", e.target.value)}
                required
                min={1}
              />
            </div>
            {/* Periods */}
            <div>
              <label className={labelCls}>Total Periods *</label>
              <input
                type="number"
                className={inputCls}
                placeholder="12"
                value={form.periods}
                onChange={(e) => set("periods", e.target.value)}
                required
                min={1}
              />
            </div>
            {/* Weeks */}
            <div className="col-span-2">
              <label className={labelCls}>Week Range *</label>
              <input
                className={inputCls}
                placeholder="e.g. Week 1-3"
                value={form.weeks}
                onChange={(e) => set("weeks", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Chapters */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelCls}>Chapters</label>
              <button
                type="button"
                onClick={addChapter}
                className="flex items-center gap-1 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <Plus size={13} /> Add Chapter
              </button>
            </div>
            <div className="space-y-3">
              {form.chapters.map((ch, idx) => (
                <div
                  key={ch.id}
                  className="bg-slate-50 rounded-xl p-3 border border-slate-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">
                      Chapter {idx + 1}
                    </span>
                    {form.chapters.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeChapter(idx)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <input
                        className={inputCls}
                        placeholder="Chapter title *"
                        value={ch.title}
                        onChange={(e) =>
                          setChapter(idx, "title", e.target.value)
                        }
                      />
                    </div>
                    <input
                      type="number"
                      className={inputCls}
                      placeholder="Sequence"
                      value={ch.sequence}
                      onChange={(e) =>
                        setChapter(idx, "sequence", e.target.value)
                      }
                      min={1}
                    />
                    <input
                      type="number"
                      className={inputCls}
                      placeholder="Periods"
                      value={ch.periods}
                      onChange={(e) =>
                        setChapter(idx, "periods", e.target.value)
                      }
                      min={1}
                    />
                    <div className="col-span-2">
                      <input
                        className={inputCls}
                        placeholder="Week (e.g. Week 1)"
                        value={ch.week}
                        onChange={(e) =>
                          setChapter(idx, "week", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-md hover:brightness-105 transition-all"
          >
            {unit ? "Update Unit" : "Create Unit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitFormModal;
