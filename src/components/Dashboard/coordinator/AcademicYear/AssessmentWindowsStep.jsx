/**
 * @component AssessmentWindowsStep
 * @description Screen E – Configure 4 assessment window types per term:
 * Diagnostic, Formative (multiple), Summative, Project Submission.
 */
import React from "react";
import {
  Target,
  ArrowLeft,
  ArrowRight,
  Plus,
  Trash2,
  ClipboardList,
  BookCheck,
  FileCheck,
  Folders,
} from "lucide-react";

const inputClass =
  "w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm text-slate-800 bg-white";

const WINDOW_TYPES = [
  {
    key: "diagnostic",
    label: "Diagnostic Window",
    icon: ClipboardList,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    multiple: false,
    description: "Initial assessment at the start of the term (Term 1 only)",
  },
  {
    key: "formative",
    label: "Formative Assessment Windows",
    icon: BookCheck,
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    multiple: true,
    description: "Choose multiple date ranges for ongoing assessments",
  },
  {
    key: "summative",
    label: "Summative Exam Period",
    icon: FileCheck,
    color: "text-pink-700",
    bg: "bg-pink-50",
    border: "border-pink-200",
    multiple: false,
    description: "End-of-term examination window",
  },
  {
    key: "project",
    label: "Project Submission Weeks",
    icon: Folders,
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
    multiple: false,
    description: "Deadline window for project submissions",
  },
];

const DateRangeRow = ({
  startDate,
  endDate,
  onChange,
  onDelete,
  canDelete,
}) => (
  <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
    <input
      type="date"
      value={startDate || ""}
      onChange={(e) => onChange("startDate", e.target.value)}
      className={`${inputClass} flex-1`}
    />
    <span className="text-slate-400 text-xs font-medium flex-shrink-0">to</span>
    <input
      type="date"
      value={endDate || ""}
      onChange={(e) => onChange("endDate", e.target.value)}
      className={`${inputClass} flex-1`}
    />
    {canDelete && (
      <button
        type="button"
        onClick={onDelete}
        className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex-shrink-0"
      >
        <Trash2 size={15} />
      </button>
    )}
  </div>
);

const AssessmentWindowsStep = ({
  terms,
  assessmentData,
  onChangeAssessment,
  onBack,
  onNext,
}) => {
  const updateWindow = (termIndex, type, winIndex, field, value) => {
    const updated = assessmentData.map((termData, ti) => {
      if (ti !== termIndex) return termData;
      const updatedType = (termData[type] || []).map((w, wi) =>
        wi === winIndex ? { ...w, [field]: value } : w,
      );
      return { ...termData, [type]: updatedType };
    });
    onChangeAssessment(updated);
  };

  const addWindow = (termIndex, type) => {
    const updated = assessmentData.map((termData, ti) => {
      if (ti !== termIndex) return termData;
      return {
        ...termData,
        [type]: [
          ...(termData[type] || []),
          { id: `win-${Date.now()}`, startDate: "", endDate: "" },
        ],
      };
    });
    onChangeAssessment(updated);
  };

  const removeWindow = (termIndex, type, winIndex) => {
    const updated = assessmentData.map((termData, ti) => {
      if (ti !== termIndex) return termData;
      return {
        ...termData,
        [type]: (termData[type] || []).filter((_, wi) => wi !== winIndex),
      };
    });
    onChangeAssessment(updated);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <Target size={26} className="text-pink-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Assessment Windows
          </h2>
          <p className="text-sm text-slate-500">
            Set date windows for each assessment type per term.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {terms.map((term, termIndex) => {
          const termData = assessmentData[termIndex] || {};

          return (
            <div
              key={term.id || termIndex}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-sm"
            >
              {/* Term header */}
              <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {termIndex + 1}
                </div>
                <span className="font-bold text-slate-800">
                  {term.name}
                  {term.startDate && term.endDate && (
                    <span className="ml-2 text-xs font-normal text-slate-500">
                      (
                      {new Date(term.startDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                      })}{" "}
                      —{" "}
                      {new Date(term.endDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                      )
                    </span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
                {WINDOW_TYPES.map((wt) => {
                  // Diagnostic only for Term 1
                  if (wt.key === "diagnostic" && termIndex > 0) return null;
                  const Icon = wt.icon;
                  const windows = termData[wt.key] || [];

                  return (
                    <div
                      key={wt.key}
                      className={`rounded-xl p-4 ${wt.bg} border ${wt.border}`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className={wt.color} />
                          <h4 className={`text-sm font-bold ${wt.color}`}>
                            {wt.label}
                          </h4>
                        </div>
                        {wt.multiple && (
                          <button
                            type="button"
                            onClick={() => addWindow(termIndex, wt.key)}
                            className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-white/80 px-2 py-1 rounded-lg border border-blue-200 transition-colors"
                          >
                            <Plus size={11} /> Add
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        {wt.description}
                      </p>

                      <div className="space-y-2">
                        {windows.length === 0 && (
                          <div className="text-xs text-slate-400 italic bg-white/60 rounded-lg px-3 py-2 border border-dashed border-slate-300">
                            No window set
                          </div>
                        )}
                        {windows.map((w, wi) => (
                          <DateRangeRow
                            key={w.id || wi}
                            startDate={w.startDate}
                            endDate={w.endDate}
                            canDelete={wt.multiple && windows.length > 1}
                            onChange={(field, val) =>
                              updateWindow(termIndex, wt.key, wi, field, val)
                            }
                            onDelete={() => removeWindow(termIndex, wt.key, wi)}
                          />
                        ))}
                        {/* Auto-add first window for single-window types */}
                        {!wt.multiple && windows.length === 0 && (
                          <button
                            type="button"
                            onClick={() => addWindow(termIndex, wt.key)}
                            className="w-full flex items-center justify-center gap-1 text-xs font-semibold text-blue-600 py-2.5 bg-white/60 rounded-lg border border-dashed border-blue-300 hover:bg-white transition-colors"
                          >
                            <Plus size={12} /> Set Date Range
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Save &amp; Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default AssessmentWindowsStep;
