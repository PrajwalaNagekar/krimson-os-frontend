/**
 * @component AcademicYearList
 * @description Screen A – Lists all academic years with status, stats, and actions.
 */
import React from "react";
import {
  Calendar,
  Eye,
  Edit2,
  CheckCircle,
  XCircle,
  Archive,
  FileText,
  Clock,
  BookOpen,
  Plus,
} from "lucide-react";

const STATUS_CONFIG = {
  active: {
    label: "Active",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },
  draft: {
    label: "Draft",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  closed: {
    label: "Closed",
    dot: "bg-slate-400",
    badge: "bg-slate-100 text-slate-600 border border-slate-200",
  },
  archived: {
    label: "Archived",
    dot: "bg-purple-400",
    badge: "bg-purple-100 text-purple-600 border border-purple-200",
  },
};

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const AcademicYearList = ({ years, onNew, onEdit, onView }) => {
  const activeYear = years.find((y) => y.status === "active");

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
              Academic Coordinator
            </span>
            {activeYear && (
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-emerald-500/30 px-2 py-1 rounded-md">
                <CheckCircle size={12} />
                {activeYear.name} Active
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight drop-shadow-sm">
            Academic Years
          </h1>
          <p className="text-white/85 text-sm md:text-base font-medium">
            Manage academic year cycles, terms, holidays, and assessment
            windows.
          </p>
        </div>
      </div>

      {/* Stat cards — outside the header */}
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            label: "Total Years",
            value: years.length,
            icon: Calendar,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100",
          },
          {
            label: "Active",
            value: years.filter((y) => y.status === "active").length,
            icon: CheckCircle,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
          },
          {
            label: "Archived",
            value: years.filter((y) => y.status === "archived").length,
            icon: Archive,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-100",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} border ${stat.border} rounded-2xl p-5 flex items-center gap-4 shadow-sm`}
          >
            <div
              className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center`}
            >
              <stat.icon size={22} className={stat.color} />
            </div>
            <div>
              <div className={`text-3xl font-extrabold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Year Cards */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-500" />
            All Academic Years
          </h2>
          <button
            onClick={onNew}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Plus size={16} />
            Create Academic Year
          </button>
        </div>

        {years.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Calendar size={48} className="mb-3 opacity-30" />
            <p className="text-lg font-semibold">No academic years yet</p>
            <p className="text-sm">
              Click "Create Academic Year" to create one.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {years.map((year, idx) => {
              const cfg = STATUS_CONFIG[year.status] || STATUS_CONFIG.draft;
              const canEdit =
                year.status === "active" || year.status === "draft";

              return (
                <div
                  key={year.id}
                  className={`flex flex-col md:flex-row md:items-center justify-between gap-4 px-8 py-5 hover:bg-slate-50/70 transition-colors group ${
                    year.status === "active"
                      ? "bg-gradient-to-r from-emerald-50/40 via-white to-white"
                      : ""
                  }`}
                >
                  {/* Left: Year info */}
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm flex-shrink-0 ${
                        year.status === "active"
                          ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
                          {year.name}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${cfg.badge}`}
                        >
                          <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {formatDate(year.startDate)} —{" "}
                          {formatDate(year.endDate)}
                        </span>
                        {year.terms && (
                          <span className="flex items-center gap-1">
                            <BookOpen size={13} />
                            {year.terms.length} Terms
                          </span>
                        )}
                      </p>
                      {year.description && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {year.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 md:ml-4 flex-shrink-0">
                    {canEdit ? (
                      <button
                        onClick={() => onEdit(year.id)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
                      >
                        <Edit2 size={15} />
                        Edit
                      </button>
                    ) : (
                      <button
                        onClick={() => onView(year.id)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-all"
                      >
                        <Eye size={15} />
                        View
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicYearList;
