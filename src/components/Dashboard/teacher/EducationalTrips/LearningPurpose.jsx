import React from "react";
import { Info, Tag } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const LearningPurpose = ({ expandedSections, toggleSection }) => {
  const { learningPurpose } = EDUCATIONAL_TRIPS_DATA;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
      <SectionHeader
        title="Learning Purpose"
        section="learning"
        isCompleted={false}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />
      {expandedSections.learning && (
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              Learning Objectives <Info size={14} className="text-slate-300" />
            </label>
            <textarea
              rows="4"
              className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm leading-relaxed"
              placeholder="Enter detailed learning objectives for this trip..."
              defaultValue={learningPurpose.objectives}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Linked Curriculum Topics
            </label>
            <div className="flex flex-wrap gap-2">
              {learningPurpose.curriculumTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 flex items-center gap-2"
                >
                  <Tag size={12} /> {topic}
                </span>
              ))}
              <button className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">
                + Link Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPurpose;
