import React from "react";
import {
  BookOpen,
  Layers,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  Target,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div
    className={`bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4`}
  >
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={22} className="text-white" />
    </div>
    <div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-500 font-medium">{label}</p>
    </div>
  </div>
);

const statusIcon = (status) => {
  if (status === "in-progress")
    return <Clock size={14} className="text-blue-500" />;
  if (status === "completed")
    return <CheckCircle size={14} className="text-emerald-500" />;
  if (status === "draft")
    return <AlertCircle size={14} className="text-yellow-500" />;
  return <AlertCircle size={14} className="text-slate-400" />;
};

const CurriculumDashboard = () => {
  const { terms, units, topics, lessonPlans, config } = CURRICULUM_BUILDER_DATA;
  const totalTopics = topics.length;
  const totalSubtopics = topics.reduce((a, t) => a + t.subtopics.length, 0);
  const totalLessonPlans = lessonPlans.length;
  const totalUnits = units.length;

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={Layers}
          label="Units Created"
          value={totalUnits}
          color="bg-blue-500"
        />
        <StatCard
          icon={BookOpen}
          label="Topics Mapped"
          value={totalTopics}
          color="bg-cyan-500"
        />
        <StatCard
          icon={FileText}
          label="Sub-Topics"
          value={totalSubtopics}
          color="bg-purple-500"
        />
        <StatCard
          icon={Target}
          label="Lesson Plans"
          value={totalLessonPlans}
          color="bg-pink-500"
        />
      </div>

      {/* Terms + Units */}
      {terms.map((term) => {
        const termUnits = units.filter((u) => u.termId === term.id);
        return (
          <div
            key={term.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            {/* Term Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">
                    {term.name} — {term.grade} · {term.subject}
                  </h3>
                  <p className="text-white/80 text-sm mt-0.5">
                    {term.startDate} – {term.endDate} · {term.totalWeeks} Weeks
                    · {term.framework}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${term.status === "active" ? "bg-white/20 text-white" : "bg-white/10 text-white/70"}`}
                >
                  {term.status.charAt(0).toUpperCase() + term.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Units in this term */}
            <div className="divide-y divide-slate-50">
              {termUnits.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-sm">
                  No units created for this term yet.
                </div>
              ) : (
                termUnits.map((unit) => {
                  const unitTopics = topics.filter((t) => t.unitId === unit.id);
                  const unitLPs = lessonPlans.filter(
                    (lp) => lp.unitId === unit.id,
                  );
                  const statusCls =
                    config.unitStatusColors[unit.status] ||
                    "bg-slate-100 text-slate-600";

                  return (
                    <div
                      key={unit.id}
                      className="p-5 hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {statusIcon(unit.status)}
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-bold text-slate-800 text-base">
                                Unit {unit.sequenceNo}: {unit.title}
                              </h4>
                              <span
                                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${statusCls}`}
                              >
                                {unit.status.replace("-", " ").toUpperCase()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                              {unit.weeks} · {unit.periods} Periods ·{" "}
                              {unit.chapters.length} Chapters
                            </p>

                            {/* Chapters */}
                            <div className="mt-3 space-y-1">
                              {unit.chapters.map((ch) => {
                                const chTopics = unitTopics.filter(
                                  (t) => t.chapterId === ch.id,
                                );
                                return (
                                  <div
                                    key={ch.id}
                                    className="flex items-center gap-2 text-xs text-slate-600"
                                  >
                                    <ChevronRight
                                      size={12}
                                      className="text-slate-400 flex-shrink-0"
                                    />
                                    <span className="font-medium">
                                      Ch {ch.sequence}: {ch.title}
                                    </span>
                                    <span className="text-slate-400">
                                      · {ch.periods} periods · {ch.week}
                                    </span>
                                    {chTopics.length > 0 && (
                                      <span className="ml-1 bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                                        {chTopics.length} topic
                                        {chTopics.length !== 1 ? "s" : ""}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Mini stats */}
                        <div className="flex gap-2 flex-shrink-0 flex-wrap justify-end text-right">
                          <div className="bg-cyan-50 px-3 py-1.5 rounded-xl text-center">
                            <p className="text-xs font-bold text-cyan-700">
                              {unitTopics.length}
                            </p>
                            <p className="text-[10px] text-slate-500">Topics</p>
                          </div>
                          <div className="bg-pink-50 px-3 py-1.5 rounded-xl text-center">
                            <p className="text-xs font-bold text-pink-700">
                              {unitLPs.length}
                            </p>
                            <p className="text-[10px] text-slate-500">
                              Lessons
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumDashboard;
