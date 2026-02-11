import React from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  MoreVertical,
  Edit3,
  Trash2,
  Plus,
} from "lucide-react";

const SessionList = ({ sessions, type, onWizardOpen }) => {
  if (type === "upcoming") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 border border-slate-100 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-bl-3xl -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-500 opacity-50"></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <span
                className={`px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wider ${
                  session.type === "Challenge Project"
                    ? "bg-indigo-100 text-indigo-700"
                    : session.type === "Advanced Seminar"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-teal-100 text-teal-700"
                }`}
              >
                {session.type}
              </span>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
              {session.title}
            </h3>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Key Competency
              </p>
              <p className="text-sm font-semibold text-slate-700">
                {session.focus}
              </p>
            </div>

            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Calendar size={16} className="text-indigo-400" />
                {session.date}
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Clock size={16} className="text-purple-400" />
                {session.time}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500"
                  >
                    S{i + 1}
                  </div>
                ))}
                {session.students > 3 && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white pl-0.5">
                    +{session.students - 3}
                  </div>
                )}
              </div>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                View Challenge <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Empty State / Add New */}
        <button
          onClick={onWizardOpen}
          className="bg-slate-50 rounded-3xl border-4 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-slate-400 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all duration-300 min-h-[350px] group"
        >
          <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Plus size={32} className="stroke-[3px]" />
          </div>
          <h4 className="font-bold text-lg mb-1">Create Challenge</h4>
          <p className="text-xs font-medium opacity-70 uppercase tracking-wide">
            Design Enrichment
          </p>
        </button>
      </div>
    );
  }

  if (type === "drafts") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 opacity-90 hover:opacity-100 hover:shadow-md transition-all"
          >
            <div className="mb-6">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                Draft • {session.lastEdited}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {session.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-xl">
                Focus: {session.focus}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wide hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
                <Edit3 size={16} /> Edit
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-red-100 text-red-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default SessionList;
