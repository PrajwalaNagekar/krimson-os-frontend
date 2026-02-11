import React from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  filterSubject,
  setFilterSubject,
  filterGrade,
  setFilterGrade,
  filterFormat,
  setFilterFormat,
  showFilters,
  setShowFilters,
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search resources by title, topic, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
        >
          <Filter size={18} />
          <span>Filters</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Subject Filter */}
            <div>
              <label className="text-xs font-bold text-slate-600 mb-2 block">
                Subject
              </label>
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
              >
                <option value="all">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>

            {/* Grade Filter */}
            <div>
              <label className="text-xs font-bold text-slate-600 mb-2 block">
                Grade
              </label>
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
              >
                <option value="all">All Grades</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>

            {/* Format Filter */}
            <div>
              <label className="text-xs font-bold text-slate-600 mb-2 block">
                Format
              </label>
              <select
                value={filterFormat}
                onChange={(e) => setFilterFormat(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none"
              >
                <option value="all">All Formats</option>
                <option value="pdf">PDF Documents</option>
                <option value="video">Videos</option>
                <option value="ppt">Presentations (PPT)</option>
                <option value="worksheet">Worksheets</option>
                <option value="image">Images</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
