import React from "react";
import { X, Lock, MessageSquare, FileText, Plus } from "lucide-react";
import { getProgressStatus, getSeverityColor } from "./utils";

const NotesModal = ({ selectedCase, onClose, notes }) => {
  if (!selectedCase) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
              <Lock size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Confidential Case Notes</h2>
              <p className="text-white/90 text-sm">
                {selectedCase.student} - Case #{selectedCase.id}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Case Summary */}
          <div className="bg-slate-50 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${getSeverityColor(selectedCase.severity)}`}
              >
                {selectedCase.severity} Priority
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-500">
                {getProgressStatus(selectedCase.progress).label}
              </span>
            </div>
            <h3 className="font-bold text-slate-800 mb-1">
              {selectedCase.issue}
            </h3>
            <p className="text-sm text-slate-600">{selectedCase.description}</p>
          </div>

          {/* Notes Timeline */}
          <div className="mb-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MessageSquare size={18} className="text-purple-500" />
              Notes History
            </h3>
            <div className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className={`border-l-4 ${note.type === "blue" ? "border-blue-400 bg-blue-50/50" : "border-orange-400 bg-orange-50/50"} pl-4 py-2 rounded-r-xl`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold ${note.type === "blue" ? "text-blue-700" : "text-orange-700"}`}
                    >
                      {note.title}
                    </span>
                    <span className="text-xs text-slate-500">{note.date}</span>
                  </div>
                  <p className="text-sm text-slate-700">{note.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add Note */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <FileText size={18} className="text-green-500" />
              Add New Note
            </h3>
            <textarea
              className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
              rows="4"
              placeholder="Enter confidential case notes here..."
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Lock size={12} />
                Notes are strictly confidential
              </span>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                <Plus size={16} />
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
