import React, { useState, useEffect } from "react";
import SubstitutionAlerts from "./SubstitutionAlerts";
import ClassFilters from "./ClassFilters";
import ClassCard from "./ClassCard";
import ClassStats from "./ClassStats";
import { AlertCircle } from "lucide-react";

const ClassList = ({ classes, substitutionAlerts, setShowTimetable }) => {
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    grade: "All",
    subject: "All",
    section: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique values for filters
  const grades = [
    "All",
    ...new Set(classes.map((cls) => cls.grade.split("-")[0])),
  ];
  const subjects = ["All", ...new Set(classes.map((cls) => cls.subject))];
  const sections = [
    "All",
    ...new Set(
      classes
        .map((cls) => {
          const match = cls.grade.match(/-([A-Z])$/);
          return match ? match[1] : null;
        })
        .filter(Boolean),
    ),
  ];

  // Filter logic
  useEffect(() => {
    let result = classes;

    // Apply grade filter
    if (filters.grade !== "All") {
      result = result.filter((cls) => cls.grade.startsWith(filters.grade));
    }

    // Apply subject filter
    if (filters.subject !== "All") {
      result = result.filter((cls) => cls.subject === filters.subject);
    }

    // Apply section filter
    if (filters.section !== "All") {
      result = result.filter((cls) =>
        cls.grade.endsWith(`-${filters.section}`),
      );
    }

    // Apply search query
    if (searchQuery) {
      result = result.filter(
        (cls) =>
          cls.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cls.topic.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredClasses(result);
  }, [filters, searchQuery, classes]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      grade: "All",
      subject: "All",
      section: "All",
    });
    setSearchQuery("");
  };

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "All",
  ).length;

  // Calculate average score
  const avgScore =
    classes.length > 0
      ? Math.round(
          classes.reduce((sum, cls) => sum + (cls.avgScore || 85), 0) /
            classes.length,
        )
      : 85;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Substitution Alerts */}
      <SubstitutionAlerts alerts={substitutionAlerts} />

      {/* Search and Filter Bar */}
      <ClassFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        filters={filters}
        handleFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        activeFiltersCount={activeFiltersCount}
        grades={grades}
        subjects={subjects}
        sections={sections}
      />

      {/* Results Summary */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-slate-600 font-medium">
          Showing{" "}
          <span className="font-bold text-slate-800">
            {filteredClasses.length}
          </span>{" "}
          of <span className="font-bold text-slate-800">{classes.length}</span>{" "}
          classes
        </p>
        {activeFiltersCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-xs text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            setShowTimetable={setShowTimetable}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredClasses.length === 0 && (
        <div className="bg-white p-12 rounded-3xl shadow-md text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-slate-400" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            No Classes Found
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Try adjusting your filters or search query to find what you're
            looking for.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Summary Stats Footer */}
      <ClassStats classes={classes} avgScore={avgScore} />
    </div>
  );
};

export default ClassList;
