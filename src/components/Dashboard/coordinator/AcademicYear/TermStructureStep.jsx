/**
 * @component TermStructureStep
 * @description Screen C – Add terms one by one. Initially empty; shows Add Term button.
 * Cannot proceed without at least 1 term.
 */
import React from "react";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Trash2,
  Plus,
  Calendar,
} from "lucide-react";

const inputClass =
  "w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm text-slate-800 bg-white";

const TermStructureStep = ({ terms, onChangeTerms, onBack, onNext }) => {
  const addTerm = () => {
    const newTerm = {
      id: `t-new-${Date.now()}`,
      name: `Term ${terms.length + 1}`,
      startDate: "",
      endDate: "",
      instructionalWeeks: 10,
      breakWeeks: 2,
      examWeeks: 1,
      totalWeeks: 0,
      assessmentWindows: {
        diagnostic: [],
        formative: [],
        summative: [],
        project: [],
      },
    };
    onChangeTerms([...terms, newTerm]);
  };

  const removeTerm = (id) => {
    onChangeTerms(terms.filter((t) => t.id !== id));
  };

  const handleTermField = (id, field, value) => {
    onChangeTerms(
      terms.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    );
  };

  const canProceed = terms.length > 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <BookOpen size={26} className="text-blue-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Term Structure
          </h2>
          <p className="text-sm text-slate-500">
            Add the terms for this academic year and set their date ranges.
          </p>
        </div>
      </div>

      {/* Empty state — only shown when no terms added */}
      {terms.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
          <Calendar size={40} className="text-slate-300 mb-3" />
          <p className="text-slate-500 font-semibold mb-1">
            No terms added yet
          </p>
          <p className="text-sm text-slate-400 mb-5">
            Click the button below to add your first term.
          </p>
          <button
            type="button"
            onClick={addTerm}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Plus size={18} />
            Add Term
          </button>
        </div>
      )}

      {/* Term cards */}
      {terms.length > 0 && (
        <div className="space-y-4">
          {terms.map((term, index) => (
            <div
              key={term.id}
              className="bg-white rounded-2xl border-2 border-slate-100 p-6 hover:border-blue-200 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-bold text-slate-700 uppercase text-sm tracking-wide">
                    Term {index + 1}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeTerm(term.id)}
                  className="flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors border border-rose-200"
                >
                  <Trash2 size={13} />
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Term Name
                  </label>
                  <input
                    type="text"
                    value={term.name || ""}
                    onChange={(e) =>
                      handleTermField(term.id, "name", e.target.value)
                    }
                    placeholder={`Term ${index + 1}`}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={term.startDate || ""}
                    onChange={(e) =>
                      handleTermField(term.id, "startDate", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={term.endDate || ""}
                    onChange={(e) =>
                      handleTermField(term.id, "endDate", e.target.value)
                    }
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add another term button */}
          <button
            type="button"
            onClick={addTerm}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-dashed border-blue-300 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            <Plus size={16} />
            Add Another Term
          </button>
        </div>
      )}

      {/* Validation hint */}
      {!canProceed && (
        <p className="text-xs text-slate-400 text-center">
          Please add at least one term to continue.
        </p>
      )}

      {/* Navigation */}
      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
            canProceed
              ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Save &amp; Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TermStructureStep;
