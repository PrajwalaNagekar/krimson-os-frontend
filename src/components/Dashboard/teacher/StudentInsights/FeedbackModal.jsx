import React from "react";
import { X } from "lucide-react";

const FeedbackModal = ({
  show,
  onClose,
  newFeedback,
  setNewFeedback,
  handleAddFeedback,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl animate-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">
            New Academic Feedback
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Message Subject
            </label>
            <input
              type="text"
              placeholder="e.g., Physics Mid-term Progress"
              value={newFeedback.subject}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, subject: e.target.value })
              }
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Feedback Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["positive", "neutral", "concern"].map((type) => (
                <button
                  key={type}
                  onClick={() => setNewFeedback({ ...newFeedback, type })}
                  className={`p-3 rounded-xl border-2 font-bold text-xs capitalize transition-all ${newFeedback.type === type ? "border-blue-500 bg-blue-50 text-blue-600" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Detailed Comments
            </label>
            <textarea
              placeholder="Share your observations..."
              value={newFeedback.comment}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, comment: e.target.value })
              }
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none min-h-[120px]"
            />
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleAddFeedback}
              disabled={!newFeedback.subject || !newFeedback.comment}
              className="flex-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              Save Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
