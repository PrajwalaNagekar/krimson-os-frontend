import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  ClipboardList,
  CheckCircle,
  Clock,
  FileText,
  Eye,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";
import LessonPlanForm from "./LessonPlanForm";
import DeleteConfirmModal from "../UnitBuilder/DeleteConfirmModal";

const LessonPlanBuilder = () => {
  const {
    units,
    topics,
    lessonPlans: initial,
    config,
  } = CURRICULUM_BUILDER_DATA;
  const [lessonPlans, setLessonPlans] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [viewingPlan, setViewingPlan] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleSave = (formData) => {
    if (editingPlan) {
      setLessonPlans((prev) =>
        prev.map((lp) =>
          lp.id === editingPlan.id ? { ...lp, ...formData } : lp,
        ),
      );
    } else {
      setLessonPlans((prev) => [
        ...prev,
        {
          id: `LP${Date.now()}`,
          lessonId: `AY24-G10-MATH-T1-LP${Date.now()}`,
          status: "Draft",
          ...formData,
        },
      ]);
    }
    setShowForm(false);
    setEditingPlan(null);
  };

  const handleDeleteConfirm = () => {
    setLessonPlans((prev) => prev.filter((lp) => lp.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const statusColors = {
    Draft: "bg-yellow-100 text-yellow-700",
    "Coordinator Review": "bg-blue-100 text-blue-700",
    Approved: "bg-emerald-100 text-emerald-700",
    Locked: "bg-purple-100 text-purple-700",
  };

  // If showing form (create/edit)
  if (showForm) {
    return (
      <LessonPlanForm
        plan={editingPlan}
        units={units}
        topics={topics}
        config={config}
        onSave={handleSave}
        onClose={() => {
          setShowForm(false);
          setEditingPlan(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Lesson Plan Builder
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Create structured lesson plans with the Krimson 7-step model
          </p>
        </div>
        <button
          onClick={() => {
            setEditingPlan(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all"
        >
          <Plus size={16} /> Create Lesson Plan
        </button>
      </div>

      {/* Workflow hint */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700 flex items-start gap-2">
        <Clock size={14} className="flex-shrink-0 mt-0.5" />
        <span>
          <strong>Workflow:</strong> Draft → Coordinator Review → Approved →
          Locked · After Approval → Visible in Weekly Teacher Timetable
        </span>
      </div>

      {/* Plans List */}
      {lessonPlans.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-100">
          <ClipboardList size={40} className="mx-auto text-slate-300 mb-3" />
          <p className="text-slate-500 font-medium">
            No lesson plans yet. Click "Create Lesson Plan" to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {lessonPlans.map((lp) => {
            const topic = topics.find((t) => t.id === lp.topicId);
            const unit = units.find((u) => u.id === lp.unitId);
            const stepsCompleted = lp.krimsonSteps
              ? Object.values(lp.krimsonSteps).filter((v) => v?.trim()).length
              : 0;

            return (
              <div
                key={lp.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between p-5 gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="font-bold text-slate-800 text-base">
                        {lp.title}
                      </h4>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${statusColors[lp.status] || "bg-slate-100 text-slate-600"}`}
                      >
                        {lp.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{lp.lessonId}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-500">
                      <span>
                        <strong className="text-slate-700">Grade:</strong>{" "}
                        {lp.grade}
                      </span>
                      <span>
                        <strong className="text-slate-700">Subject:</strong>{" "}
                        {lp.subject}
                      </span>
                      <span>
                        <strong className="text-slate-700">Periods:</strong>{" "}
                        {lp.periodsAllocated}
                      </span>
                      <span>
                        <strong className="text-slate-700">Assessment:</strong>{" "}
                        {lp.assessmentType}
                      </span>
                    </div>
                    {topic && (
                      <p className="text-xs text-slate-400 mt-1">
                        Topic: {topic.title}{" "}
                        {unit ? `· Unit: ${unit.title}` : ""}
                      </p>
                    )}

                    {/* Krimson progress */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${(stepsCompleted / 7) * 100}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500 whitespace-nowrap">
                        {stepsCompleted}/7 steps
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => {
                        setEditingPlan(lp);
                        setShowForm(true);
                      }}
                      className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      title="Edit"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(lp)}
                      className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          itemName={deleteTarget.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
};

export default LessonPlanBuilder;
