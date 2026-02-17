import React from "react";
import { Target, Tag } from "lucide-react";
import { CURRICULUM_MANAGEMENT_DATA } from "../../../../data/coordinatorData";

const OutcomeMappingPanel = () => {
  const { learningOutcomes, bloomTaxonomy } = CURRICULUM_MANAGEMENT_DATA;

  const getBloomColor = (level) => {
    const bloom = bloomTaxonomy.find((b) => b.level === level);
    return bloom ? bloom.color : "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      {/* Bloom Taxonomy Reference */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-cyan-500 flex items-center justify-center">
            <Tag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Bloom's Taxonomy Levels
            </h2>
            <p className="text-sm text-gray-600">
              Cognitive complexity framework
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {bloomTaxonomy.map((bloom) => (
            <div
              key={bloom.level}
              className={`p-3 rounded-xl ${bloom.color} border-2 border-current/20 text-center`}
            >
              <div className="text-lg font-bold">{bloom.order}</div>
              <div className="text-sm font-semibold">{bloom.level}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Learning Outcomes Mapping
              </h2>
              <p className="text-sm text-gray-600">
                Map outcomes to curriculum topics
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2">
            <Target className="w-4 h-4" />
            Add Outcome
          </button>
        </div>

        <div className="space-y-4">
          {learningOutcomes.map((outcome) => (
            <div
              key={outcome.id}
              className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold rounded-lg">
                      {outcome.code}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-lg ${getBloomColor(
                        outcome.bloomLevel,
                      )}`}
                    >
                      {outcome.bloomLevel}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-2">
                    {outcome.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="font-semibold">Mapped to:</span>
                    {outcome.mappedTo.map((topicId, idx) => (
                      <span
                        key={topicId}
                        className="px-2 py-1 bg-white border border-gray-200 rounded-lg"
                      >
                        Topic {topicId.split("-")[1]}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="px-3 py-1 text-cyan-600 border border-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-50 transition-all">
                  Edit Mapping
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutcomeMappingPanel;
