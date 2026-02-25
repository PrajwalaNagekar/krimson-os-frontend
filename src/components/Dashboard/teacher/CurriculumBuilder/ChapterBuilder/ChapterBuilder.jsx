import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Calendar,
  Clock,
  Target,
  CheckCircle,
  Hash,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";
import ChapterFormModal from "./ChapterFormModal";
import DeleteConfirmModal from "../UnitBuilder/DeleteConfirmModal";

const ChapterBuilder = () => {
  const { units, topics, config } = CURRICULUM_BUILDER_DATA;

  // Flatten all chapters across units into local state
  const [allUnits, setAllUnits] = useState(
    units.map((u) => ({ ...u, chapters: u.chapters.map((c) => ({ ...c })) })),
  );
  const [expandedUnits, setExpandedUnits] = useState({ U1: true, U2: true });
  const [showForm, setShowForm] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null);
  const [editingUnitId, setEditingUnitId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null); // { chapter, unitId }

  const toggleExpand = (uid) =>
    setExpandedUnits((p) => ({ ...p, [uid]: !p[uid] }));

  const handleCreate = (unitId) => {
    setEditingUnitId(unitId);
    setEditingChapter(null);
    setShowForm(true);
  };

  const handleEdit = (chapter, unitId) => {
    setEditingUnitId(unitId);
    setEditingChapter(chapter);
    setShowForm(true);
  };

  const handleSave = (formData) => {
    setAllUnits((prev) =>
      prev.map((u) => {
        if (u.id !== editingUnitId) return u;
        let chapters;
        if (editingChapter) {
          chapters = u.chapters.map((c) =>
            c.id === editingChapter.id ? { ...c, ...formData } : c,
          );
        } else {
          chapters = [
            ...u.chapters,
            { id: `CH${Date.now()}`, unitId: u.id, ...formData },
          ];
        }
        // Re-sort by sequence
        chapters.sort((a, b) => Number(a.sequence) - Number(b.sequence));
        return { ...u, chapters };
      }),
    );
    setShowForm(false);
    setEditingChapter(null);
    setEditingUnitId(null);
  };

  const handleDeleteConfirm = () => {
    const { chapter, unitId } = deleteTarget;
    setAllUnits((prev) =>
      prev.map((u) =>
        u.id === unitId
          ? { ...u, chapters: u.chapters.filter((c) => c.id !== chapter.id) }
          : u,
      ),
    );
    setDeleteTarget(null);
  };

  // Total stats
  const totalChapters = allUnits.reduce((a, u) => a + u.chapters.length, 0);
  const totalPeriods = allUnits.reduce(
    (a, u) => a + u.chapters.reduce((b, c) => b + Number(c.periods || 0), 0),
    0,
  );

  // Badge colours per unit index
  const unitAccents = [
    {
      bg: "from-cyan-500 to-blue-600",
      light: "bg-cyan-50",
      text: "text-cyan-700",
      dot: "bg-cyan-500",
    },
    {
      bg: "from-purple-500 to-pink-600",
      light: "bg-purple-50",
      text: "text-purple-700",
      dot: "bg-purple-500",
    },
    {
      bg: "from-emerald-500 to-teal-600",
      light: "bg-emerald-50",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Chapter Builder</h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Create and organise chapters within units
          </p>
        </div>
        {/* Global quick-stats */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 px-4 py-2 rounded-xl text-center">
            <p className="text-base font-bold text-blue-700">{totalChapters}</p>
            <p className="text-[10px] text-slate-500">Total Chapters</p>
          </div>
          <div className="bg-cyan-50 px-4 py-2 rounded-xl text-center">
            <p className="text-base font-bold text-cyan-700">{totalPeriods}</p>
            <p className="text-[10px] text-slate-500">Total Periods</p>
          </div>
        </div>
      </div>

      {/* Units → Chapters */}
      {allUnits.map((unit, uidx) => {
        const accent = unitAccents[uidx % unitAccents.length];
        const isExpanded = expandedUnits[unit.id];
        const unitTopics = topics.filter((t) => t.unitId === unit.id);

        return (
          <div
            key={unit.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            {/* Unit Header */}
            <div
              className={`bg-gradient-to-r ${accent.bg} px-5 py-4 text-white flex items-center justify-between cursor-pointer`}
              onClick={() => toggleExpand(unit.id)}
            >
              <div className="flex items-center gap-3">
                <button className="text-white/70 flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base">
                      Unit {unit.sequenceNo}: {unit.title}
                    </h4>
                    <span className="bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {unit.chapters.length} chapter
                      {unit.chapters.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <p className="text-white/70 text-xs mt-0.5">
                    {unit.weeks} · {unit.periods} periods
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCreate(unit.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all backdrop-blur-sm border border-white/20"
              >
                <Plus size={13} /> Add Chapter
              </button>
            </div>

            {/* Chapters Grid */}
            {isExpanded && (
              <div className="p-4">
                {unit.chapters.length === 0 ? (
                  <div className="py-10 text-center">
                    <BookOpen
                      size={32}
                      className="mx-auto text-slate-300 mb-2"
                    />
                    <p className="text-sm text-slate-400">
                      No chapters yet — click "Add Chapter" above to create one
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {unit.chapters.map((ch) => {
                      const chTopics = unitTopics.filter(
                        (t) => t.chapterId === ch.id,
                      );
                      const chPeriods = Number(ch.periods || 0);

                      return (
                        <div
                          key={ch.id}
                          className="border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-slate-50/60 group"
                        >
                          {/* Chapter number badge */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-8 h-8 rounded-xl bg-gradient-to-br ${accent.bg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                              >
                                <span className="text-xs font-bold text-white">
                                  {ch.sequence}
                                </span>
                              </div>
                              <div>
                                <p className="font-bold text-slate-800 text-sm leading-tight">
                                  {ch.title}
                                </p>
                                <p className="text-[10px] text-slate-400 mt-0.5">
                                  Chapter {ch.sequence}
                                </p>
                              </div>
                            </div>

                            {/* Action buttons (visible on hover) */}
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                              <button
                                onClick={() => handleEdit(ch, unit.id)}
                                className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                title="Edit chapter"
                              >
                                <Edit3 size={12} />
                              </button>
                              <button
                                onClick={() =>
                                  setDeleteTarget({
                                    chapter: ch,
                                    unitId: unit.id,
                                  })
                                }
                                className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                                title="Delete chapter"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Meta chips */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg bg-blue-50 text-blue-700">
                              <Calendar size={10} /> {ch.week}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg bg-cyan-50 text-cyan-700">
                              <Clock size={10} /> {chPeriods} period
                              {chPeriods !== 1 ? "s" : ""}
                            </span>
                          </div>

                          {/* Topics count */}
                          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                            <span
                              className={`flex items-center gap-1 text-[11px] font-semibold ${
                                chTopics.length > 0
                                  ? "text-emerald-600"
                                  : "text-slate-400"
                              }`}
                            >
                              <Target size={11} />
                              {chTopics.length > 0
                                ? `${chTopics.length} topic${chTopics.length !== 1 ? "s" : ""}`
                                : "No topics yet"}
                            </span>
                            {chTopics.length > 0 && (
                              <span className="flex items-center gap-1 text-[11px] text-emerald-500">
                                <CheckCircle size={11} />
                                {
                                  chTopics.filter((t) => t.subtopics.length > 0)
                                    .length
                                }{" "}
                                with sub-topics
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Modals */}
      {showForm && (
        <ChapterFormModal
          chapter={editingChapter}
          unitId={editingUnitId}
          units={allUnits}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingChapter(null);
            setEditingUnitId(null);
          }}
        />
      )}
      {deleteTarget && (
        <DeleteConfirmModal
          itemName={deleteTarget.chapter.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
};

export default ChapterBuilder;
