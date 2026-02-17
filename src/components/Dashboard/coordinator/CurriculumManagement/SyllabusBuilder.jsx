import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Edit,
  Trash2,
  BookOpen,
} from "lucide-react";
import { CURRICULUM_MANAGEMENT_DATA } from "../../../../data/coordinatorData";
import AddTermModal from "./modals/AddTermModal";
import AddUnitModal from "./modals/AddUnitModal";
import AddChapterModal from "./modals/AddChapterModal";
import AddTopicModal from "./modals/AddTopicModal";
import AddSubTopicModal from "./modals/AddSubTopicModal";

/**
 * SyllabusBuilder Component
 * Main curriculum hierarchy builder with all levels
 */
const SyllabusBuilder = ({
  selectedFramework,
  selectedGrade,
  selectedSubject,
  frameworks,
  grades,
  subjects,
  onBackToList,
}) => {
  const { curriculumHierarchy } = CURRICULUM_MANAGEMENT_DATA;

  // Expansion states
  const [expandedTerms, setExpandedTerms] = useState(["term-1"]);
  const [expandedUnits, setExpandedUnits] = useState(["unit-1"]);
  const [expandedChapters, setExpandedChapters] = useState(["chapter-1"]);
  const [expandedTopics, setExpandedTopics] = useState(["topic-1"]);

  // Modal states
  const [activeModal, setActiveModal] = useState(null);
  const [modalContext, setModalContext] = useState({});

  const toggleExpand = (id, type) => {
    const setter = {
      term: setExpandedTerms,
      unit: setExpandedUnits,
      chapter: setExpandedChapters,
      topic: setExpandedTopics,
    }[type];

    const expanded = {
      term: expandedTerms,
      unit: expandedUnits,
      chapter: expandedChapters,
      topic: expandedTopics,
    }[type];

    setter(
      expanded.includes(id)
        ? expanded.filter((item) => item !== id)
        : [...expanded, id],
    );
  };

  const openModal = (modalType, context = {}) => {
    setActiveModal(modalType);
    setModalContext(context);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalContext({});
  };

  const handleSave = (type, data) => {
    console.log(`Save ${type}:`, data, modalContext);
    // TODO: Implement actual save logic
    alert(`${type} saved successfully!`);
  };

  const selectedSubjectName =
    subjects.find((s) => s.id === selectedSubject)?.name || "Selected Subject";
  const selectedFrameworkName =
    frameworks.find((f) => f.id === selectedFramework)?.name || "Framework";
  const selectedGradeName =
    grades.find((g) => g.id === selectedGrade)?.name || "Grade";

  return (
    <>
      {/* Selected Curriculum Info */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-4 border border-cyan-200 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">{selectedSubjectName}</h3>
              <p className="text-xs text-gray-600">
                {selectedFrameworkName} • {selectedGradeName}
              </p>
            </div>
          </div>
          <button
            onClick={onBackToList}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all"
          >
            ← Back to List
          </button>
        </div>
      </div>

      {/* Curriculum Hierarchy Builder */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              📚 Syllabus Decomposition
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Subject → Grade → Term → Unit → Chapter → Topic → Sub-topic
            </p>
          </div>
          <button
            onClick={() => openModal("term")}
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            Add Term
          </button>
        </div>

        {/* Hierarchy Structure */}
        <div className="space-y-3">
          {curriculumHierarchy.terms.map((term) => (
            <div
              key={term.id}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-300 transition-all"
            >
              {/* TERM Level */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:from-cyan-100 hover:to-blue-100 transition-all"
                  onClick={() => toggleExpand(term.id, "term")}
                >
                  <div className="flex items-center gap-3">
                    {expandedTerms.includes(term.id) ? (
                      <ChevronDown className="w-5 h-5 text-cyan-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-cyan-600" />
                    )}
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-1 bg-cyan-500 text-white text-xs font-bold rounded">
                        TERM
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{term.name}</h3>
                        <p className="text-xs text-gray-600">{term.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal("unit", {
                          termId: term.id,
                          termName: term.name,
                        });
                      }}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-medium hover:bg-blue-600 transition-all flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      Add Unit
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 hover:bg-white/50 rounded-lg transition-all"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* UNITS */}
              {expandedTerms.includes(term.id) && (
                <div className="bg-white p-4">
                  {term.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="border-l-4 border-blue-300 ml-6 my-3"
                    >
                      <div
                        className="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer transition-all rounded-r-xl"
                        onClick={() => toggleExpand(unit.id, "unit")}
                      >
                        <div className="flex items-center gap-2">
                          {expandedUnits.includes(unit.id) ? (
                            <ChevronDown className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-blue-600" />
                          )}
                          <div className="flex items-center gap-2">
                            <div className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded">
                              UNIT
                            </div>
                            <span className="font-semibold text-gray-700">
                              {unit.name}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal("chapter", {
                                unitId: unit.id,
                                unitName: unit.name,
                              });
                            }}
                            className="px-2 py-1 bg-pink-500 text-white rounded text-xs font-medium hover:bg-pink-600 transition-all flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            Add Chapter
                          </button>
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 hover:bg-white rounded transition-all"
                          >
                            <Edit className="w-3 h-3 text-gray-600" />
                          </button>
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 hover:bg-red-50 rounded transition-all"
                          >
                            <Trash2 className="w-3 h-3 text-red-500" />
                          </button>
                        </div>
                      </div>

                      {/* CHAPTERS */}
                      {expandedUnits.includes(unit.id) && (
                        <div className="pl-6">
                          {unit.chapters.map((chapter) => (
                            <div
                              key={chapter.id}
                              className="border-l-4 border-pink-300 ml-4 my-2"
                            >
                              <div
                                className="flex items-center justify-between p-3 hover:bg-pink-50 cursor-pointer transition-all rounded-r-xl"
                                onClick={() =>
                                  toggleExpand(chapter.id, "chapter")
                                }
                              >
                                <div className="flex items-center gap-2">
                                  {expandedChapters.includes(chapter.id) ? (
                                    <ChevronDown className="w-4 h-4 text-pink-600" />
                                  ) : (
                                    <ChevronRight className="w-4 h-4 text-pink-600" />
                                  )}
                                  <div className="flex items-center gap-2">
                                    <div className="px-2 py-0.5 bg-pink-500 text-white text-xs font-bold rounded">
                                      CHAPTER
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm">
                                      {chapter.name}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openModal("topic", {
                                        chapterId: chapter.id,
                                        chapterName: chapter.name,
                                      });
                                    }}
                                    className="px-2 py-1 bg-purple-500 text-white rounded text-xs font-medium hover:bg-purple-600 transition-all flex items-center gap-1"
                                  >
                                    <Plus className="w-3 h-3" />
                                    Add Topic
                                  </button>
                                  <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-1 hover:bg-white rounded transition-all"
                                  >
                                    <Edit className="w-3 h-3 text-gray-600" />
                                  </button>
                                  <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-1 hover:bg-red-50 rounded transition-all"
                                  >
                                    <Trash2 className="w-3 h-3 text-red-500" />
                                  </button>
                                </div>
                              </div>

                              {/* TOPICS */}
                              {expandedChapters.includes(chapter.id) &&
                                chapter.topics && (
                                  <div className="pl-6">
                                    {chapter.topics.map((topic) => (
                                      <div
                                        key={topic.id}
                                        className="border-l-4 border-purple-300 ml-4 my-2"
                                      >
                                        <div
                                          className="flex items-center justify-between p-2 hover:bg-purple-50 cursor-pointer transition-all rounded-r-xl"
                                          onClick={() =>
                                            toggleExpand(topic.id, "topic")
                                          }
                                        >
                                          <div className="flex items-center gap-2">
                                            {expandedTopics.includes(
                                              topic.id,
                                            ) ? (
                                              <ChevronDown className="w-3 h-3 text-purple-600" />
                                            ) : (
                                              <ChevronRight className="w-3 h-3 text-purple-600" />
                                            )}
                                            <div className="flex items-center gap-2">
                                              <div className="px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded">
                                                TOPIC
                                              </div>
                                              <span className="text-gray-700 text-sm">
                                                {topic.name}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                openModal("subtopic", {
                                                  topicId: topic.id,
                                                  topicName: topic.name,
                                                });
                                              }}
                                              className="px-2 py-1 bg-indigo-500 text-white rounded text-xs font-medium hover:bg-indigo-600 transition-all flex items-center gap-1"
                                            >
                                              <Plus className="w-2 h-2" />
                                              Add Sub-topic
                                            </button>
                                            <button
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                              className="p-1 hover:bg-white rounded transition-all"
                                            >
                                              <Edit className="w-3 h-3 text-gray-600" />
                                            </button>
                                            <button
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                              className="p-1 hover:bg-red-50 rounded transition-all"
                                            >
                                              <Trash2 className="w-3 h-3 text-red-500" />
                                            </button>
                                          </div>
                                        </div>

                                        {/* SUB-TOPICS */}
                                        {expandedTopics.includes(topic.id) &&
                                          topic.subTopics && (
                                            <div className="pl-6">
                                              {topic.subTopics.map(
                                                (subTopic) => (
                                                  <div
                                                    key={subTopic.id}
                                                    className="flex items-center justify-between p-2 ml-4 my-1 hover:bg-indigo-50 transition-all rounded-lg border-l-2 border-indigo-200"
                                                  >
                                                    <div className="flex items-center gap-2">
                                                      <div className="px-2 py-0.5 bg-indigo-500 text-white text-xs font-bold rounded">
                                                        SUB
                                                      </div>
                                                      <span className="text-gray-600 text-xs">
                                                        {subTopic.name}
                                                      </span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                      <button
                                                        onClick={(e) =>
                                                          e.stopPropagation()
                                                        }
                                                        className="p-1 hover:bg-white rounded transition-all"
                                                      >
                                                        <Edit className="w-2 h-2 text-gray-600" />
                                                      </button>
                                                      <button
                                                        onClick={(e) =>
                                                          e.stopPropagation()
                                                        }
                                                        className="p-1 hover:bg-red-50 rounded transition-all"
                                                      >
                                                        <Trash2 className="w-2 h-2 text-red-500" />
                                                      </button>
                                                    </div>
                                                  </div>
                                                ),
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Helper Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="text-sm font-bold text-blue-900 mb-2">
            📖 Hierarchy Structure
          </h4>
          <p className="text-xs text-blue-800 leading-relaxed">
            <strong>SUBJECT</strong> → <strong>GRADE</strong> →{" "}
            <strong className="text-cyan-700">TERM</strong> →{" "}
            <strong className="text-blue-700">UNIT</strong> →{" "}
            <strong className="text-pink-700">CHAPTER</strong> →{" "}
            <strong className="text-purple-700">TOPIC</strong> →{" "}
            <strong className="text-indigo-700">SUB-TOPIC</strong>
          </p>
          <p className="text-xs text-blue-700 mt-2">
            Use the <strong>"Add"</strong> buttons at each level to build your
            curriculum structure.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AddTermModal
        isOpen={activeModal === "term"}
        onClose={closeModal}
        onSave={(data) => handleSave("Term", data)}
      />

      <AddUnitModal
        isOpen={activeModal === "unit"}
        onClose={closeModal}
        onSave={(data) => handleSave("Unit", data)}
        termName={modalContext.termName}
      />

      <AddChapterModal
        isOpen={activeModal === "chapter"}
        onClose={closeModal}
        onSave={(data) => handleSave("Chapter", data)}
        unitName={modalContext.unitName}
      />

      <AddTopicModal
        isOpen={activeModal === "topic"}
        onClose={closeModal}
        onSave={(data) => handleSave("Topic", data)}
        chapterName={modalContext.chapterName}
      />

      <AddSubTopicModal
        isOpen={activeModal === "subtopic"}
        onClose={closeModal}
        onSave={(data) => handleSave("Sub-topic", data)}
        topicName={modalContext.topicName}
      />
    </>
  );
};

export default SyllabusBuilder;
