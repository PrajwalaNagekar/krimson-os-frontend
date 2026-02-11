import React from "react";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Filter,
  CheckCircle as LucideCheckCircle,
  Lock,
  Info,
} from "lucide-react";

const SectionTable = ({
  sections,
  gradeName,
  totalSections,
  onSelectSection,
  onShowModal,
  onClearFilters,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-50 border-green-100";
      case "Locked":
        return "text-red-600 bg-red-50 border-red-100";
      case "Draft":
        return "text-yellow-600 bg-yellow-50 border-yellow-100";
      default:
        return "text-slate-600 bg-slate-50 border-slate-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <LucideCheckCircle size={14} />;
      case "Locked":
        return <Lock size={14} />;
      case "Draft":
        return <AlertTriangle size={14} />;
      default:
        return <Info size={14} />;
    }
  };

  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
        <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-800 text-xl flex items-center gap-3">
              {gradeName} Sections
              <span className="text-sm font-bold text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full">
                {sections.length}
              </span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Manage individual class sections details
            </p>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Section ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Class Teacher
                </th>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Config
                </th>
                <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sections.map((section) => (
                <tr
                  key={section.id}
                  className="hover:bg-blue-50/20 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        {section.section}
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block text-sm">
                          {section.id}
                        </span>
                        <span className="text-xs text-slate-400">Regular</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {section.teacher ? (
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-700 text-sm">
                          {section.teacher}
                        </span>
                        <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit mt-1 border border-green-100">
                          Verified
                        </span>
                      </div>
                    ) : (
                      <span className="text-red-500 text-xs font-bold bg-red-50 px-3 py-1 rounded-lg border border-red-100 inline-flex items-center gap-1">
                        <AlertTriangle size={10} /> Unassigned
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-sm ${
                            section.students > section.capacity
                              ? "text-red-600"
                              : "text-slate-700"
                          }`}
                        >
                          {section.students}{" "}
                          <span className="text-slate-400 text-xs">
                            / {section.capacity}
                          </span>
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          onSelectSection(section);
                          onShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-700 text-xs font-bold hover:underline text-left"
                      >
                        Manage Students
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-slate-600 font-semibold text-sm bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                      {section.room}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    {section.timetableLinked ? (
                      <span className="text-slate-400">
                        <CheckCircle size={20} className="text-green-500" />
                      </span>
                    ) : (
                      <span
                        className="text-slate-400"
                        title="Timetable Missing"
                      >
                        <XCircle size={20} className="text-slate-300" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(
                        section.status,
                      )}`}
                    >
                      {getStatusIcon(section.status)}
                      {section.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                        title="Edit Section"
                      >
                        <Edit size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sections.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter size={32} className="text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-700">
                No sections found
              </h3>
              <p className="text-slate-500 max-w-xs mx-auto mt-1">
                Try adjusting your active filters to see more results.
              </p>
              <button
                onClick={onClearFilters}
                className="mt-4 text-blue-600 font-bold text-sm hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {sections.length > 0 && (
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-center">
            <p className="text-xs text-slate-400 font-semibold">
              Viewing {sections.length} of {totalSections} sections for{" "}
              {gradeName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTable;
