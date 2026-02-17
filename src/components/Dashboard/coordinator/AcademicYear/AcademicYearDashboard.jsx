import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Lock,
  Play,
  BookOpen,
  Users,
} from "lucide-react";

const AcademicYearDashboard = ({ academicYearData, onManageGrades }) => {
  const navigate = useNavigate();
  const {
    activeYear,
    terms,
    totalTeachingWeeks,
    assessmentWindows,
    calendarStatus,
  } = academicYearData;

  return (
    <div className="space-y-6">
      {/* Main Dashboard Card */}
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 opacity-50 rounded-full blur-3xl" />

        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Academic Year Dashboard
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  navigate("/dashboard/coordinator/academic-year/create")
                }
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Plus size={16} />
                Create Academic Year
              </button>
              <button
                onClick={() =>
                  navigate("/dashboard/coordinator/academic-year/activate")
                }
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Play size={16} />
                Activate Year
              </button>
              <button
                onClick={() =>
                  navigate("/dashboard/coordinator/academic-year/lock")
                }
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Lock size={16} />
                Lock Year
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                <Calendar size={16} />
                Active Academic Year
              </div>
              <div className="text-2xl font-bold text-cyan-600">
                {activeYear.name}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                <BookOpen size={16} />
                Terms Configured
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {terms.length}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl border border-pink-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                <Clock size={16} />
                Teaching Weeks
              </div>
              <div className="text-2xl font-bold text-pink-600">
                {totalTeachingWeeks}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                {calendarStatus.validated ? (
                  <CheckCircle size={16} />
                ) : (
                  <AlertCircle size={16} />
                )}
                Calendar Status
              </div>
              <div
                className={`text-2xl font-bold ${calendarStatus.validated ? "text-green-600" : "text-orange-600"}`}
              >
                {calendarStatus.validated ? "Validated" : "Pending"}
              </div>
            </div>
          </div>

          {/* Terms Timeline */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Terms Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {terms.map((term) => (
                <div
                  key={term.id}
                  className={`p-4 rounded-2xl border-2 ${
                    term.status === "active"
                      ? "bg-blue-50 border-blue-300"
                      : term.status === "completed"
                        ? "bg-slate-50 border-slate-300"
                        : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800">
                      {term.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        term.status === "active"
                          ? "bg-blue-200 text-blue-700"
                          : term.status === "completed"
                            ? "bg-green-200 text-green-700"
                            : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {term.status}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    {new Date(term.startDate).toLocaleDateString()} -{" "}
                    {new Date(term.endDate).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {term.teachingWeeks} weeks
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assessment Windows */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Upcoming Assessment Windows
            </h3>
            <div className="space-y-3">
              {assessmentWindows
                .filter((window) => window.status !== "completed")
                .map((window) => (
                  <div
                    key={window.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-cyan-50 rounded-2xl border border-pink-200"
                  >
                    <div>
                      <div className="font-bold text-slate-800">
                        {window.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {new Date(window.startDate).toLocaleDateString()} -{" "}
                        {new Date(window.endDate).toLocaleDateString()}
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        window.status === "upcoming"
                          ? "bg-orange-200 text-orange-700"
                          : "bg-blue-200 text-blue-700"
                      }`}
                    >
                      {window.status}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grades & Sections Management Section */}
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200">
        <div className="relative z-10 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Grades & Sections Overview
            </h2>
            <p className="text-slate-600 text-sm">
              Manage year-specific grade activation, section creation, and
              capacity planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl text-center">
              <div className="text-sm text-slate-600 mb-1">
                Grade Activation
              </div>
              <div className="text-xl font-bold text-cyan-600">Configure →</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl text-center">
              <div className="text-sm text-slate-600 mb-1">
                Section Creation
              </div>
              <div className="text-xl font-bold text-blue-600">Create →</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-50 to-cyan-50 rounded-2xl text-center">
              <div className="text-sm text-slate-600 mb-1">
                Capacity Planning
              </div>
              <div className="text-xl font-bold text-pink-600">Plan →</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl text-center">
              <div className="text-sm text-slate-600 mb-1">Promotion Rules</div>
              <div className="text-xl font-bold text-purple-600">Setup →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicYearDashboard;
