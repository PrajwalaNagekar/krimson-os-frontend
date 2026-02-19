import React from "react";
import { Calendar, Building2, CheckCircle } from "lucide-react";

const AcademicYearHeader = ({ activeYear, viewMode, setViewMode }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                Academic Coordinator
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                <Calendar size={12} /> {activeYear.name}
              </span>
              {activeYear.status === "active" && (
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-green-500/30 px-2 py-1 rounded-md">
                  <CheckCircle size={12} /> Active
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              Academic Structure
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed mb-6">
              Manage academic year, terms, grades, sections, and yearly
              planning.
            </p>

            {/* Integrated Navigation Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setViewMode("dashboard")}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg ${
                  viewMode === "dashboard"
                    ? "bg-white text-blue-600 scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md"
                }`}
              >
                Academic Year Dashboard
              </button>
              <button
                onClick={() => setViewMode("grades")}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg ${
                  viewMode === "grades"
                    ? "bg-white text-blue-600 scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md"
                }`}
              >
                Grades & Sections
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Building2 size={64} className="text-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicYearHeader;
