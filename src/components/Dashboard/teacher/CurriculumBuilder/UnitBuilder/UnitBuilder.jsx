import React, { useState } from "react";
import {
  Trash2,
  Edit3,
  Plus,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Clock,
  Calendar,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";
import DeleteConfirmModal from "./DeleteConfirmModal";
import UnitFormModal from "./UnitFormModal";

const UnitBuilder = () => {
  const { config, terms, units: initialUnits } = CURRICULUM_BUILDER_DATA;
  const [units, setUnits] = useState(initialUnits);
  const [expandedUnits, setExpandedUnits] = useState({ U1: true });
  const [showForm, setShowForm] = useState(false);
  const [editingUnit, setEditingUnit] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const toggleExpand = (id) =>
    setExpandedUnits((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleCreate = () => {
    setEditingUnit(null);
    setShowForm(true);
  };

  const handleEdit = (unit) => {
    setEditingUnit(unit);
    setShowForm(true);
  };

  const handleSave = (formData) => {
    if (editingUnit) {
      setUnits((prev) =>
        prev.map((u) => (u.id === editingUnit.id ? { ...u, ...formData } : u)),
      );
    } else {
      const newUnit = {
        id: `U${Date.now()}`,
        termId: "T1",
        status: "draft",
        ...formData,
      };
      setUnits((prev) => [...prev, newUnit]);
    }
    setShowForm(false);
    setEditingUnit(null);
  };

  const handleDeleteConfirm = () => {
    setUnits((prev) => prev.filter((u) => u.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Unit Builder</h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Create and manage curriculum units within terms
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all"
        >
          <Plus size={16} />
          Create New Unit
        </button>
      </div>

      {/* Units List */}
      {units.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-100">
          <BookOpen size={40} className="mx-auto text-slate-300 mb-3" />
          <p className="text-slate-500 font-medium">
            No units created yet. Click "Create New Unit" to get started.
          </p>
        </div>
      ) : (
        units.map((unit) => {
          const term = terms.find((t) => t.id === unit.termId);
          const statusCls =
            config.unitStatusColors[unit.status] ||
            "bg-slate-100 text-slate-600";
          const isExpanded = expandedUnits[unit.id];

          return (
            <div
              key={unit.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              {/* Unit Header */}
              <div
                className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50/60 transition-colors"
                onClick={() => toggleExpand(unit.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <button className="text-slate-400 flex-shrink-0">
                    {isExpanded ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-800 text-base">
                        Unit {unit.sequenceNo}: {unit.title}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${statusCls}`}
                      >
                        {unit.status.replace("-", " ").toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                      {term && (
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {term.name} · {term.grade} · {term.subject}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {unit.weeks}
                      </span>
                      <span>
                        {unit.periods} Periods · {unit.chapters.length} Chapters
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div
                  className="flex items-center gap-2 flex-shrink-0 ml-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => handleEdit(unit)}
                    className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    title="Edit Unit"
                  >
                    <Edit3 size={15} />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(unit)}
                    className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                    title="Delete Unit"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {/* Chapters (expanded) */}
              {isExpanded && (
                <div className="border-t border-slate-100 divide-y divide-slate-50">
                  {unit.chapters.length === 0 ? (
                    <div className="px-8 py-4 text-sm text-slate-400">
                      No chapters added to this unit yet.
                    </div>
                  ) : (
                    unit.chapters.map((ch) => (
                      <div
                        key={ch.id}
                        className="px-8 py-3.5 flex items-center gap-3 hover:bg-slate-50/40 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-[11px] font-bold text-blue-600">
                            {ch.sequence}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-700">
                            {ch.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {ch.week} · {ch.periods} periods
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })
      )}

      {/* Modals */}
      {showForm && (
        <UnitFormModal
          unit={editingUnit}
          terms={terms}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingUnit(null);
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

export default UnitBuilder;
