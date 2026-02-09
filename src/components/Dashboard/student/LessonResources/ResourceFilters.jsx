import React from "react";
import { Filter, X, Video, Beaker, FileText } from "lucide-react";

const ResourceFilters = ({
  subjects,
  topics,
  weeks,
  types,
  selectedSubject,
  selectedTopic,
  selectedWeek,
  selectedType,
  onSubjectChange,
  onTopicChange,
  onWeekChange,
  onTypeChange,
  onClearFilters,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Filter size={20} className="text-blue-600" />
          <h3 className="font-bold text-slate-800">Filters</h3>
        </div>
        {(selectedSubject !== "All" ||
          selectedTopic !== "All" ||
          selectedWeek !== "All" ||
          selectedType !== "All") && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-600"
          >
            <X size={14} /> Clear Filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Subject Filter */}
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase mb-2">
            Subject
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => onSubjectChange(subject)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedSubject === subject
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Topic Filter */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">
              Topic
            </p>
            <select
              value={selectedTopic}
              onChange={(e) => onTopicChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-blue-400 transition-all"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Week Filter */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">
              Week
            </p>
            <select
              value={selectedWeek}
              onChange={(e) => onWeekChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-blue-400 transition-all"
            >
              {weeks.map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase mb-2">
            Resource Type
          </p>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedType === type
                    ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {type === "Video" && <Video size={14} />}
                {type === "Experiment" && <Beaker size={14} />}
                {type === "Document" && <FileText size={14} />}
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceFilters;
