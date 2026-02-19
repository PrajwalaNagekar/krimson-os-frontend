import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Users,
  Layers,
  TrendingUp,
} from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const AcademicActivationView = () => {
  const navigate = useNavigate();
  const { academicUsageOverview } = ADMIN_DATA.organisationStructure;

  const StatCard = ({ label, value, icon: Icon, gradient, textColor }) => (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200 group hover:scale-105 transition-transform">
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-2xl`}
      />
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
          >
            <Icon size={28} />
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${textColor} bg-opacity-10`}
          >
            Active
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className={`text-4xl font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* Premium Header Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-6 md:p-7 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105 shadow-lg font-semibold"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <span className="px-4 py-2 bg-green-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg">
                  <CheckCircle size={16} />
                  System Active
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-1 tracking-tight drop-shadow-sm">
                Academic Activation Status
              </h1>
              <p className="text-white/90 text-sm max-w-2xl font-medium">
                Real-time view of active academic structures and resource
                utilization
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-white/70 text-xs font-semibold">
                  Last Updated
                </p>
                <p className="text-xl font-bold">
                  {academicUsageOverview.lastStructureUpdate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Active Grades"
          value={academicUsageOverview.totalActiveGrades}
          icon={Layers}
          gradient="from-green-500 to-emerald-500"
          textColor="text-green-600"
        />
        <StatCard
          label="Total Sections"
          value={academicUsageOverview.totalSections}
          icon={BarChart3}
          gradient="from-blue-500 to-cyan-500"
          textColor="text-blue-600"
        />
        <StatCard
          label="Total Students"
          value={academicUsageOverview.totalStudentsEnrolled}
          icon={Users}
          gradient="from-purple-500 to-pink-500"
          textColor="text-purple-600"
        />
        <StatCard
          label="Utilization Rate"
          value={academicUsageOverview.utilizationRate}
          icon={TrendingUp}
          gradient="from-orange-500 to-amber-500"
          textColor="text-orange-600"
        />
      </div>

      {/* Active Grade Allocation */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg">
              <Layers size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Active Grade Allocation
              </h2>
              <p className="text-sm text-slate-500">
                Current distribution of grades and sections
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 font-semibold">Total Grades</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              {ADMIN_DATA.grades.length}
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {ADMIN_DATA.grades.map((grade, index) => (
              <div
                key={grade.id}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                      index % 4 === 0
                        ? "from-cyan-500 to-blue-500"
                        : index % 4 === 1
                          ? "from-blue-500 to-purple-500"
                          : index % 4 === 2
                            ? "from-purple-500 to-pink-500"
                            : "from-pink-500 to-cyan-500"
                    } flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {grade.name.substring(grade.name.indexOf(" ") + 1)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                      {grade.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold">
                      <span className="flex items-center gap-1">
                        <Layers size={14} className="text-blue-500" />
                        {grade.sections} Sections
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} className="text-purple-500" />
                        {grade.totalStudents} Students
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  {grade.sectionsData.map((section, sIdx) => (
                    <div
                      key={section.id}
                      className={`px-4 py-2 rounded-xl font-bold text-sm shadow-sm border-2 transition-all hover:scale-110 ${
                        section.teacher
                          ? "bg-green-50 border-green-200 text-green-700 hover:shadow-green-200"
                          : "bg-amber-50 border-amber-200 text-amber-700 hover:shadow-amber-200"
                      }`}
                      title={
                        section.teacher
                          ? `Teacher: ${section.teacher}`
                          : "Unassigned"
                      }
                    >
                      {section.section}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicActivationView;
