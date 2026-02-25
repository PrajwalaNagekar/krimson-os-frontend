import React from "react";
import {
  BookOpen,
  Layers,
  Target,
  ClipboardList,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { CURRICULUM_BUILDER_DATA } from "../../../../../data/curriculumBuilderData";

const LessonBuilder = () => {
  const { units, topics, lessonPlans } = CURRICULUM_BUILDER_DATA;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Lesson Builder</h3>
        <p className="text-sm text-slate-500 mt-0.5">
          Visual overview of your curriculum lesson flow
        </p>
      </div>

      {/* Flow card per unit */}
      {units.map((unit) => {
        const unitLPs = lessonPlans.filter((lp) => lp.unitId === unit.id);
        const unitTopics = topics.filter((t) => t.unitId === unit.id);

        return (
          <div
            key={unit.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            {/* Unit Banner */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 text-white">
              <div className="flex items-center gap-2">
                <Layers size={18} className="opacity-80" />
                <h4 className="font-bold text-base">
                  Unit {unit.sequenceNo}: {unit.title}
                </h4>
              </div>
              <p className="text-white/70 text-xs mt-1">
                {unit.weeks} · {unit.periods} periods · {unit.chapters.length}{" "}
                chapters
              </p>
            </div>

            {/* Chapters flow */}
            <div className="p-5 space-y-4">
              {unit.chapters.map((ch) => {
                const chTopics = unitTopics.filter(
                  (t) => t.chapterId === ch.id,
                );
                return (
                  <div key={ch.id}>
                    {/* Chapter header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-[11px] font-bold text-blue-600">
                          {ch.sequence}
                        </span>
                      </div>
                      <span className="font-semibold text-slate-700 text-sm">
                        {ch.title}
                      </span>
                      <span className="text-xs text-slate-400">
                        · {ch.week} · {ch.periods} periods
                      </span>
                    </div>

                    {/* Topics under chapter */}
                    <div className="ml-9 space-y-2">
                      {chTopics.length === 0 ? (
                        <p className="text-xs text-slate-400 italic">
                          No topics assigned to this chapter yet.
                        </p>
                      ) : (
                        chTopics.map((topic) => {
                          const topicLPs = lessonPlans.filter(
                            (lp) => lp.topicId === topic.id,
                          );
                          return (
                            <div
                              key={topic.id}
                              className="border border-slate-100 rounded-xl overflow-hidden"
                            >
                              {/* Topic row */}
                              <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50">
                                <Target
                                  size={13}
                                  className="text-blue-500 flex-shrink-0"
                                />
                                <span className="font-semibold text-slate-700 text-sm flex-1">
                                  Topic {topic.sequence}: {topic.title}
                                </span>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                  {topic.outcomeCode}
                                </span>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    topic.subtopics.length > 0
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  {topic.subtopics.length} sub-topic
                                  {topic.subtopics.length !== 1 ? "s" : ""}
                                </span>
                              </div>

                              {/* Sub-topics */}
                              {topic.subtopics.map((st) => {
                                const stLP = lessonPlans.find(
                                  (lp) => lp.subtopicId === st.id,
                                );
                                return (
                                  <div
                                    key={st.id}
                                    className="flex items-center gap-3 px-6 py-2 border-t border-slate-50 hover:bg-blue-50/30 transition-colors"
                                  >
                                    <ArrowRight
                                      size={11}
                                      className="text-slate-300 flex-shrink-0"
                                    />
                                    <span className="text-xs text-slate-600 flex-1">
                                      {st.title}
                                    </span>
                                    <span className="text-[10px] text-slate-400">
                                      {st.outcomeCode}
                                    </span>
                                    {stLP ? (
                                      <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                                        <CheckCircle size={11} />
                                        <span>Lesson: {stLP.title}</span>
                                        <span className="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full ml-1">
                                          {stLP.status}
                                        </span>
                                      </div>
                                    ) : (
                                      <span className="flex items-center gap-1 text-[10px] text-slate-400">
                                        <ClipboardList size={11} /> No lesson
                                        plan
                                      </span>
                                    )}
                                  </div>
                                );
                              })}

                              {/* Direct topic LP (no subtopics) */}
                              {topic.subtopics.length === 0 && (
                                <div className="flex items-center gap-3 px-6 py-2 border-t border-slate-50">
                                  {topicLPs.length > 0 ? (
                                    topicLPs.map((lp) => (
                                      <div
                                        key={lp.id}
                                        className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600"
                                      >
                                        <CheckCircle size={11} />
                                        <span>{lp.title}</span>
                                        <span className="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full ml-1">
                                          {lp.status}
                                        </span>
                                      </div>
                                    ))
                                  ) : (
                                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                      <ClipboardList size={11} /> No lesson plan
                                      assigned to this topic
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Unit footer stats */}
            <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-6 text-xs text-slate-500">
              <span>
                <strong className="text-slate-700">{unitTopics.length}</strong>{" "}
                Topics
              </span>
              <span>
                <strong className="text-slate-700">
                  {unitTopics.reduce((a, t) => a + t.subtopics.length, 0)}
                </strong>{" "}
                Sub-topics
              </span>
              <span>
                <strong className="text-slate-700">{unitLPs.length}</strong>{" "}
                Lesson Plans
              </span>
              <span className="ml-auto">
                {unitLPs.length > 0 ? (
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle size={12} />{" "}
                    {unitLPs.filter((lp) => lp.status === "Approved").length}{" "}
                    Approved
                  </span>
                ) : (
                  <span className="text-slate-400">No lesson plans yet</span>
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LessonBuilder;
