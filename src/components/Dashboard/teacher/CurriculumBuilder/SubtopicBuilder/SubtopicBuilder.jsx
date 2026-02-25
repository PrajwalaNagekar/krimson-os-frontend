import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Target,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";
import SubtopicFormModal from "./SubtopicFormModal";
import DeleteConfirmModal from "../UnitBuilder/DeleteConfirmModal";

const SubtopicBuilder = () => {
  const { topics, config, outcomeLibrary } = CURRICULUM_BUILDER_DATA;
  const [allTopics, setAllTopics] = useState(
    topics.map((t) => ({ ...t, subtopics: [...t.subtopics] })),
  );
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0]?.id || null);
  const [showForm, setShowForm] = useState(false);
  const [editingSubtopic, setEditingSubtopic] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const selectedTopic = allTopics.find((t) => t.id === selectedTopicId);

  const handleSave = (formData) => {
    setAllTopics((prev) =>
      prev.map((t) => {
        if (t.id !== selectedTopicId) return t;
        const subtopics = editingSubtopic
          ? t.subtopics.map((s) =>
              s.id === editingSubtopic.id ? { ...s, ...formData } : s,
            )
          : [
              ...t.subtopics,
              {
                id: `ST${Date.now()}`,
                topicId: t.id,
                status: "pending-approval",
                ...formData,
              },
            ];
        return { ...t, subtopics };
      }),
    );
    setShowForm(false);
    setEditingSubtopic(null);
  };

  const handleDelete = () => {
    setAllTopics((prev) =>
      prev.map((t) =>
        t.id === selectedTopicId
          ? {
              ...t,
              subtopics: t.subtopics.filter((s) => s.id !== deleteTarget.id),
            }
          : t,
      ),
    );
    setDeleteTarget(null);
  };

  const statusColors = {
    approved: "bg-emerald-100 text-emerald-700",
    "pending-approval": "bg-yellow-100 text-yellow-700",
    draft: "bg-slate-100 text-slate-600",
  };

  const allValidated =
    selectedTopic?.subtopics.length > 0 &&
    selectedTopic.subtopics.every(
      (s) => s.outcomeCode && s.bloomLevel && s.competency,
    );

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Sub-Topic Builder
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Select a topic to manage its sub-topics
          </p>
        </div>
      </div>

      {/* Topic selector */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
          Select Topic
        </p>
        <select
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          value={selectedTopicId || ""}
          onChange={(e) => setSelectedTopicId(e.target.value)}
        >
          {allTopics.map((t) => (
            <option key={t.id} value={t.id}>
              Topic {t.sequence}: {t.title} ({t.subtopics.length} sub-topics)
            </option>
          ))}
        </select>
      </div>

      {selectedTopic && (
        <>
          {/* Parent topic summary */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
              Parent Topic Summary (Locked)
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
              <div>
                <span className="text-slate-500 text-xs">Topic:</span>{" "}
                <span className="font-semibold text-slate-700">
                  {selectedTopic.title}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-xs">Framework:</span>{" "}
                <span className="font-semibold text-slate-700">
                  NCERT (School Level – Locked)
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-xs">Outcome:</span>{" "}
                <span className="font-semibold text-blue-600">
                  {selectedTopic.outcomeCode}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-xs">Bloom:</span>{" "}
                <span className="font-semibold text-slate-700">
                  {selectedTopic.bloomLevel}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-500 text-xs">Competency:</span>{" "}
                <span className="font-semibold text-slate-700">
                  {selectedTopic.competency.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Sub-topics list */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <p className="font-bold text-slate-700 text-sm">
                Sub-Topics ({selectedTopic.subtopics.length})
              </p>
              <button
                onClick={() => {
                  setEditingSubtopic(null);
                  setShowForm(true);
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:brightness-105 transition-all"
              >
                <Plus size={13} /> Create New Sub-Topic
              </button>
            </div>

            {selectedTopic.subtopics.length === 0 ? (
              <div className="p-10 text-center">
                <Target size={32} className="mx-auto text-slate-300 mb-2" />
                <p className="text-sm text-slate-400">
                  No sub-topics yet. Click "Create New Sub-Topic" to add one.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-50 p-4 space-y-2">
                {selectedTopic.subtopics.map((st, idx) => (
                  <div
                    key={st.id}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-blue-100 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-800 text-sm">
                            {idx + 1}.{idx + 1} {st.title}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColors[st.status] || "bg-slate-100 text-slate-600"}`}
                          >
                            {st.status === "pending-approval"
                              ? "Pending Approval"
                              : st.status.charAt(0).toUpperCase() +
                                st.status.slice(1)}
                          </span>
                        </div>
                        <div className="mt-1.5 space-y-0.5 text-xs text-slate-500">
                          <p>
                            <span className="font-medium">Outcome:</span>{" "}
                            {st.outcomeInherited ? (
                              <span className="text-emerald-600">
                                Inherits {st.outcomeCode}
                              </span>
                            ) : (
                              <span className="text-blue-600">
                                {st.outcomeCode}
                              </span>
                            )}
                            {!st.outcomeInherited && (
                              <span className="ml-1 text-yellow-600">
                                (Custom Outcome)
                              </span>
                            )}
                          </p>
                          <p>
                            <span className="font-medium">Bloom:</span>{" "}
                            {st.bloomLevel} ·{" "}
                            <span className="font-medium">Competency:</span>{" "}
                            {st.competency}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditingSubtopic(st);
                            setShowForm(true);
                          }}
                          className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(st)}
                          className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Validation before exit */}
            {selectedTopic.subtopics.length > 0 && (
              <div className="mx-4 mb-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                  Validation Before Exit
                </p>
                <div className="space-y-1.5">
                  {[
                    "All sub-topics linked to valid outcome",
                    "All outcomes tagged (Bloom + Competency)",
                    "All outcomes mapped to declared framework",
                    "No unmapped instructional chunk",
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <CheckCircle
                        size={13}
                        className={
                          allValidated ? "text-emerald-500" : "text-slate-300"
                        }
                      />
                      <span
                        className={
                          allValidated ? "text-slate-700" : "text-slate-400"
                        }
                      >
                        {msg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {showForm && selectedTopic && (
        <SubtopicFormModal
          subtopic={editingSubtopic}
          parentTopic={selectedTopic}
          outcomeLibrary={outcomeLibrary}
          config={config}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingSubtopic(null);
          }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirmModal
          itemName={deleteTarget.title}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
};

export default SubtopicBuilder;
