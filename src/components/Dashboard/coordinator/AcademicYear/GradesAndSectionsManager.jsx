import React, { useState } from "react";
import { Plus, Building, Users, AlertCircle } from "lucide-react";

const GradesAndSectionsManager = ({ grades, onAddGrade, onAddSection }) => {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Grades & Sections Management
          </h1>
          <p className="text-white/90 text-sm">
            Year-specific academic planning and section configuration
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onAddGrade}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all hover:scale-105"
        >
          <Plus size={20} />
          Add Grade
        </button>
        <button
          onClick={() => onAddSection(selectedGrade)}
          className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold shadow-md hover:shadow-lg transition-all hover:border-blue-300"
        >
          <Plus size={20} />
          Add Section
        </button>
      </div>

      {/* Grades Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Grades List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Grades</h3>
          {grades.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGrade(grade)}
              className={`w-full text-left p-4 rounded-2xl transition-all ${
                selectedGrade.id === grade.id
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shadow-lg"
                  : "bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-800"
              }`}
            >
              <div className="font-bold">{grade.name}</div>
              <div
                className={`text-sm ${selectedGrade.id === grade.id ? "text-white/80" : "text-slate-600"}`}
              >
                {grade.sections} sections • {grade.totalStudents} students
              </div>
            </button>
          ))}
        </div>

        {/* Sections Table */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {selectedGrade.name} Sections
                  </h3>
                  <p className="text-sm text-slate-600">
                    {selectedGrade.sectionsData.length} sections configured
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-600">Total Capacity</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                    {selectedGrade.capacity}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">
                      Section
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">
                      Teacher
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">
                      Students
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">
                      Room
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {selectedGrade.sectionsData.map((section) => (
                    <tr
                      key={section.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-800">
                          {section.section}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-700">
                          {section.teacher || (
                            <span className="text-orange-600 flex items-center gap-1">
                              <AlertCircle size={14} />
                              Not Assigned
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <span
                            className={`font-semibold ${
                              section.students > section.capacity
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            {section.students}
                          </span>
                          <span className="text-slate-500">
                            /{section.capacity}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-600">
                          {section.room}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            section.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : section.status === "Draft"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {section.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesAndSectionsManager;
