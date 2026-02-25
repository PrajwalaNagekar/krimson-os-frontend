import React, { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle, AlertCircle, Upload } from "lucide-react";

const LessonPlanForm = ({ plan, units, topics, config, onSave, onClose }) => {
  const defaultSteps = config.krimsonStepLabels.reduce(
    (acc, s) => ({ ...acc, [s.key]: "" }),
    {},
  );

  const [form, setForm] = useState({
    title: "",
    intent: "",
    grade: "Grade 10",
    subject: "Mathematics",
    academicYear: "2024-25",
    week: "Week 1",
    periodsAllocated: 1,
    termId: "T1",
    unitId: "",
    chapterId: "",
    topicId: "",
    subtopicId: "",
    lockedOutcome: "",
    bloomLevelLocked: "",
    competencyLocked: "",
    krimsonSteps: { ...defaultSteps },
    assessmentType: "",
    rubricAttached: false,
    weightage: "",
    contentLevel: ["Core"],
    supportStrategy: "",
    enrichmentStrategy: "",
    autoAddTimetable: true,
    attendanceRequired: true,
    evidenceUploadRequired: true,
  });

  useEffect(() => {
    if (plan) setForm({ ...plan });
  }, [plan]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const setStep = (key, val) =>
    setForm((f) => ({ ...f, krimsonSteps: { ...f.krimsonSteps, [key]: val } }));
  const toggleContent = (level) =>
    setForm((f) => ({
      ...f,
      contentLevel: f.contentLevel.includes(level)
        ? f.contentLevel.filter((c) => c !== level)
        : [...f.contentLevel, level],
    }));

  // Auto-populate outcome from topic
  useEffect(() => {
    const topic = topics.find((t) => t.id === form.topicId);
    if (topic) {
      setForm((f) => ({
        ...f,
        lockedOutcome: topic.outcomeCode,
        bloomLevelLocked: topic.bloomLevel,
        competencyLocked: topic.competency[0] || "",
      }));
    }
  }, [form.topicId]);

  // Validation
  const stepsValid = config.krimsonStepLabels.every((s) =>
    form.krimsonSteps[s.key]?.trim(),
  );
  const valid = {
    title: form.title.trim().length > 0,
    intent: form.intent.trim().length > 0,
    steps: stepsValid,
    assessment: form.assessmentType.length > 0,
    materials: form.contentLevel.length > 0,
    differentiation:
      form.supportStrategy.trim() && form.enrichmentStrategy.trim(),
  };
  const allValid = Object.values(valid).every(Boolean);

  const handleSave = () => {
    onSave({ ...form, status: plan?.status || "Draft" });
  };

  const inputCls =
    "w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all";
  const labelCls =
    "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide";
  const sectionCls =
    "bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-4";

  // Auto-generate lesson ID
  const lessonId =
    plan?.lessonId ||
    `AY24-G10-MATH-T1-U${form.unitId || "?"}-LP${Date.now().toString().slice(-4)}`;

  return (
    <div className="space-y-5">
      {/* Back header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors bg-white shadow-sm"
        >
          <ArrowLeft size={15} /> Back to Lesson Plans
        </button>
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            {plan ? "Edit Lesson Plan" : "Create Lesson Plan"}
          </h3>
          <p className="text-xs text-slate-500">
            Fill in all sections to save as draft
          </p>
        </div>
      </div>

      {/* Curriculum Context (locked) */}
      <div className={sectionCls}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Curriculum Context (Read-only – Locked)
          </p>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            AUTO-GENERATED
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            ["Academic Year", form.academicYear],
            ["Grade", form.grade],
            ["Subject", form.subject],
            ["Lesson ID", lessonId],
          ].map(([label, val]) => (
            <div
              key={label}
              className="bg-slate-50 rounded-xl p-3 border border-slate-100"
            >
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                {label}
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-0.5 break-all">
                {val}
              </p>
            </div>
          ))}
        </div>

        {/* Selectors for curriculum context */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Unit</label>
            <select
              className={inputCls}
              value={form.unitId}
              onChange={(e) => set("unitId", e.target.value)}
            >
              <option value="">-- Select Unit --</option>
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  Unit {u.sequenceNo}: {u.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Topic</label>
            <select
              className={inputCls}
              value={form.topicId}
              onChange={(e) => set("topicId", e.target.value)}
            >
              <option value="">-- Select Topic --</option>
              {topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Week</label>
            <input
              className={inputCls}
              value={form.week}
              onChange={(e) => set("week", e.target.value)}
              placeholder="e.g. Week 1"
            />
          </div>
          <div>
            <label className={labelCls}>Periods Allocated</label>
            <input
              type="number"
              className={inputCls}
              value={form.periodsAllocated}
              onChange={(e) => set("periodsAllocated", e.target.value)}
              min={1}
            />
          </div>
        </div>

        {/* Locked outcome fields */}
        {form.lockedOutcome && (
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-sm">
            <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">
              Linked from Topic (Locked)
            </p>
            <p>
              <span className="text-slate-500 text-xs">Outcome:</span>{" "}
              <span className="font-semibold text-emerald-700">
                {form.lockedOutcome}
              </span>
            </p>
            <p>
              <span className="text-slate-500 text-xs">Bloom:</span>{" "}
              <span className="font-semibold text-slate-700">
                {form.bloomLevelLocked}
              </span>{" "}
              · <span className="text-slate-500 text-xs">Competency:</span>{" "}
              <span className="font-semibold text-slate-700">
                {form.competencyLocked}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Lesson Identity */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Lesson Identity
        </p>
        <div>
          <label className={labelCls}>Lesson Title *</label>
          <input
            className={inputCls}
            placeholder="e.g. Finding HCF Using Prime Factorization"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>
            Lesson Intent (Aligned to Outcome) *
          </label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            placeholder="Students will..."
            value={form.intent}
            onChange={(e) => set("intent", e.target.value)}
          />
        </div>
      </div>

      {/* Krimson 7-Step Model */}
      <div className={sectionCls}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Krimson Lesson Operating Model (Mandatory)
          </p>
          {!stepsValid && (
            <span className="flex items-center gap-1 text-[11px] text-orange-500">
              <AlertCircle size={11} /> All 7 steps required
            </span>
          )}
          {stepsValid && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-600">
              <CheckCircle size={11} /> All steps completed
            </span>
          )}
        </div>
        <div className="space-y-3">
          {config.krimsonStepLabels.map((step) => (
            <div key={step.key}>
              <label className={labelCls}>{step.label} *</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                placeholder={step.placeholder}
                value={form.krimsonSteps[step.key] || ""}
                onChange={(e) => setStep(step.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Assessment Configuration */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Assessment Configuration (Mandatory)
        </p>
        <div>
          <label className={labelCls}>Assessment Type *</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {config.assessmentTypes.map((type) => (
              <label
                key={type}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${form.assessmentType === type ? "border-blue-400 bg-blue-50 text-blue-700 font-semibold" : "border-slate-200 text-slate-600 hover:border-blue-200"}`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name="assessmentType"
                  value={type}
                  checked={form.assessmentType === type}
                  onChange={() => set("assessmentType", type)}
                />
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${form.assessmentType === type ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}
                >
                  {form.assessmentType === type && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
                {type}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Rubric Attached?</label>
            <button
              type="button"
              onClick={() => set("rubricAttached", !form.rubricAttached)}
              className={`flex items-center gap-2 w-full px-3 py-2.5 rounded-xl border text-sm transition-all ${form.rubricAttached ? "border-emerald-400 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
            >
              <Upload size={14} />{" "}
              {form.rubricAttached
                ? "Rubric Attached ✓"
                : "Upload / Create Rubric"}
            </button>
          </div>
          <div>
            <label className={labelCls}>Weightage %</label>
            <input
              type="number"
              className={inputCls}
              placeholder="%"
              value={form.weightage}
              onChange={(e) => set("weightage", e.target.value)}
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>

      {/* Materials & Content */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Materials & Content
        </p>
        <div className="flex gap-2 flex-wrap">
          {["Upload PPT", "Upload Worksheet", "Upload Lab Sheet"].map((btn) => (
            <button
              key={btn}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              <Upload size={13} /> {btn}
            </button>
          ))}
        </div>
        <div>
          <label className={labelCls}>Tag Content Level</label>
          <div className="flex gap-2 flex-wrap">
            {config.contentLevels.map((lvl) => (
              <label
                key={lvl}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-sm transition-all ${form.contentLevel.includes(lvl) ? "border-cyan-400 bg-cyan-50 text-cyan-700 font-semibold" : "border-slate-200 text-slate-600 hover:border-cyan-200"}`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={form.contentLevel.includes(lvl)}
                  onChange={() => toggleContent(lvl)}
                />
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${form.contentLevel.includes(lvl) ? "border-cyan-500 bg-cyan-500" : "border-slate-300"}`}
                >
                  {form.contentLevel.includes(lvl) && (
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
                {lvl}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Differentiation */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Differentiation (Non-Negotiable)
        </p>
        <div>
          <label className={labelCls}>Support Strategy *</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            placeholder="Define remediation approach..."
            value={form.supportStrategy}
            onChange={(e) => set("supportStrategy", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>Enrichment Strategy *</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            placeholder="Define stretch activity..."
            value={form.enrichmentStrategy}
            onChange={(e) => set("enrichmentStrategy", e.target.value)}
          />
        </div>
      </div>

      {/* Execution Settings */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Execution Settings (Pre-Approval)
        </p>
        <div className="space-y-2">
          {[
            {
              key: "autoAddTimetable",
              label: "Auto-Add to Weekly Timetable After Approval?",
            },
            { key: "attendanceRequired", label: "Attendance Required?" },
            {
              key: "evidenceUploadRequired",
              label: "Evidence Upload Required?",
            },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => set(key, !form[key])}
                className={`w-11 h-6 rounded-full flex items-center transition-all px-0.5 ${form[key] ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-slate-200"}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${form[key] ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
              <span className="text-sm text-slate-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Validation Summary */}
      <div className={sectionCls}>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          Validation Summary
        </p>
        <div className="space-y-1.5">
          {[
            { label: "Outcome Linked & Locked", ok: !!form.lockedOutcome },
            { label: "All 7 Krimson Steps Completed", ok: valid.steps },
            { label: "Assessment Declared", ok: valid.assessment },
            { label: "Rubric Attached", ok: form.rubricAttached },
            {
              label: "Materials Uploaded (Content tagged)",
              ok: valid.materials,
            },
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
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Status:{" "}
            <span className="font-bold text-yellow-600">
              {plan?.status || "Draft"}
            </span>
          </p>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center justify-end gap-3 pb-4">
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors bg-white shadow-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-md hover:brightness-105 hover:shadow-lg transition-all"
        >
          Save as Draft
        </button>
      </div>
    </div>
  );
};

export default LessonPlanForm;
