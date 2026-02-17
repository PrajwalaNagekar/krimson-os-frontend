import React from "react";
import { BookOpen, Calendar, Edit, Plus } from "lucide-react";

/**
 * CurriculumList Component
 * Displays existing curriculum history with edit functionality
 */
const CurriculumList = ({ curriculums, onEdit, onAddNew }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            📚 Curriculum List
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage all curriculum structures
          </p>
        </div>
        <button
          onClick={onAddNew}
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          Add New Curriculum
        </button>
      </div>

      <div className="space-y-3">
        {curriculums.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">
              No curriculum created yet. Click "Add New Curriculum" to get
              started.
            </p>
          </div>
        ) : (
          curriculums.map((curriculum) => (
            <div
              key={curriculum.id}
              className="p-4 border border-gray-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all bg-gradient-to-r from-slate-50 to-blue-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      {curriculum.subject}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-600">
                        {curriculum.framework}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">
                        {curriculum.grade}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Calendar className="w-3 h-3" />
                        {curriculum.lastModified}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      curriculum.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {curriculum.status}
                  </span>
                  <button
                    onClick={() => onEdit(curriculum)}
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-all flex items-center gap-1"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CurriculumList;
