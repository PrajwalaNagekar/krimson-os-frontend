import React from "react";
import { X, Plus } from "lucide-react";

const StudentAllocationModal = ({ section, students, onClose, showModal }) => {
  if (!showModal || !section) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
          <div>
            <h3 className="font-bold text-2xl">
              Class {section.section} Allocation
            </h3>
            <p className="text-sm text-white/90 mt-1 font-medium opacity-90">
              Manage students assigned to this section
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Capacity Indicator Bar */}
        <div className="px-8 py-5 bg-slate-50 border-b border-slate-200">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Occupancy
            </span>
            <span
              className={`text-sm font-bold ${
                section.students > section.capacity
                  ? "text-red-500"
                  : "text-slate-700"
              }`}
            >
              {section.students} / {section.capacity} Students
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                section.students > section.capacity
                  ? "bg-red-500"
                  : "bg-gradient-to-r from-green-400 to-emerald-500"
              }`}
              style={{
                width: `${Math.min(
                  (section.students / section.capacity) * 100,
                  100,
                )}%`,
              }}
            />
          </div>
        </div>

        {/* Student List */}
        <div className="flex-1 overflow-y-auto p-8 bg-white">
          <div className="space-y-3">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-slate-800">Enrolled Students</h4>
              <button className="text-blue-600 text-xs font-bold hover:underline flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Plus size={14} /> Add New
                </div>
              </button>
            </div>

            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 text-slate-600 font-bold flex items-center justify-center text-sm shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">
                      {student.name}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {student.admissionId} • {student.gender}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                  <X size={18} />
                </button>
              </div>
            ))}

            {students.length === 0 && (
              <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl">
                <p className="text-slate-400 font-semibold mb-2">
                  No students yet
                </p>
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors">
                  Auto-Assign Students
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30 flex flex-col items-center gap-0.5">
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAllocationModal;
