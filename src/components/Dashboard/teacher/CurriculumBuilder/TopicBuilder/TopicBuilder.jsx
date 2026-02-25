import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  BookOpen,
  ChevronRight,
  CheckCircle,
  Target,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";
import TopicFormModal from "./TopicFormModal";
import DeleteConfirmModal from "../UnitBuilder/DeleteConfirmModal";

const TopicBuilder = () => {
  const {
    units,
    topics: initTopics,
    config,
    outcomeLibrary,
  } = CURRICULUM_BUILDER_DATA;
  const [topics, setTopics] = useState(initTopics);
  const [showForm, setShowForm] = useState(false);
  const [editingTopic, setEditingTopic] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [contextChapter, setContextChapter] = useState(null);

  // Flatten chapters from all units for context selection
  const allChapters = units.flatMap((u) =>
    u.chapters.map((ch) => ({ ...ch, unitTitle: u.title, unitId: u.id })),
  );

  const handleCreate = (chapter) => {
    setContextChapter(chapter);
    setEditingTopic(null);
    setShowForm(true);
  };

  const handleEdit = (topic) => {
    const ch = allChapters.find((c) => c.id === topic.chapterId);
    setContextChapter(ch);
    setEditingTopic(topic);
    setShowForm(true);
  };

  const handleSave = (formData, action) => {
    if (editingTopic) {
      setTopics((prev) =>
        prev.map((t) => (t.id === editingTopic.id ? { ...t, ...formData } : t)),
      );
    } else {
      const newTopic = { id: `TP${Date.now()}`, subtopics: [], ...formData };
      setTopics((prev) => [...prev, newTopic]);
    }
    setShowForm(false);
    setEditingTopic(null);
  };

  const handleDeleteConfirm = () => {
    setTopics((prev) => prev.filter((t) => t.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const bloomColors = {
    Remembering: "bg-slate-100 text-slate-600",
    Understanding: "bg-blue-100 text-blue-700",
    Applying: "bg-cyan-100 text-cyan-700",
    Analyzing: "bg-purple-100 text-purple-700",
    Evaluating: "bg-pink-100 text-pink-700",
    Creating: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Topic Builder</h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Add topics with outcomes to chapters
          </p>
        </div>
      </div>

      {/* Units → Chapters → Topics tree */}
      {units.map((unit) => (
        <div
          key={unit.id}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          {/* Unit header */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
            <BookOpen size={16} className="text-blue-500 flex-shrink-0" />
            <span className="font-bold text-slate-700 text-sm">
              Unit {unit.sequenceNo}: {unit.title}
            </span>
            <span className="text-slate-400 text-xs ml-auto">
              {unit.weeks} · {unit.periods} periods
            </span>
          </div>

          {/* Chapters */}
          <div className="divide-y divide-slate-50">
            {unit.chapters.map((chapter) => {
              const chapterTopics = topics.filter(
                (t) => t.chapterId === chapter.id,
              );
              return (
                <div key={chapter.id} className="p-4">
                  {/* Chapter row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-slate-400" />
                      <span className="font-semibold text-slate-700 text-sm">
                        Chapter {chapter.sequence}: {chapter.title}
                      </span>
                      <span className="text-xs text-slate-400">
                        {chapter.week} · {chapter.periods} periods
                      </span>
                    </div>
                    <button
                      onClick={() => handleCreate(chapter)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-sm hover:brightness-105 transition-all"
                    >
                      <Plus size={12} /> Add Topic
                    </button>
                  </div>

                  {/* Topics under this chapter */}
                  {chapterTopics.length === 0 ? (
                    <div className="ml-5 py-3 px-4 bg-slate-50 rounded-xl text-xs text-slate-400 text-center">
                      No topics yet — click "Add Topic" to create one
                    </div>
                  ) : (
                    <div className="ml-5 space-y-2">
                      {chapterTopics.map((topic) => (
                        <div
                          key={topic.id}
                          className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 flex items-start justify-between gap-3 hover:border-blue-100 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-slate-800 text-sm">
                                Topic {topic.sequence}: {topic.title}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${bloomColors[topic.bloomLevel] || "bg-slate-100 text-slate-600"}`}
                              >
                                {topic.bloomLevel}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {topic.outcomeStatement}
                            </p>
                            <div className="flex items-center gap-3 mt-2 flex-wrap">
                              <span className="flex items-center gap-1 text-[11px] text-blue-600 font-semibold">
                                <Target size={11} /> {topic.outcomeCode}
                              </span>
                              <span className="text-[11px] text-slate-400">
                                {topic.competency.join(", ")}
                              </span>
                              {topic.subtopics.length > 0 && (
                                <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                                  <CheckCircle size={11} />{" "}
                                  {topic.subtopics.length} sub-topic
                                  {topic.subtopics.length !== 1 ? "s" : ""}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <button
                              onClick={() => handleEdit(topic)}
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                              title="Edit"
                            >
                              <Edit3 size={13} />
                            </button>
                            <button
                              onClick={() => setDeleteTarget(topic)}
                              className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Modals */}
      {showForm && (
        <TopicFormModal
          topic={editingTopic}
          chapter={contextChapter}
          units={units}
          outcomeLibrary={outcomeLibrary}
          config={config}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingTopic(null);
          }}
        />
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

export default TopicBuilder;
