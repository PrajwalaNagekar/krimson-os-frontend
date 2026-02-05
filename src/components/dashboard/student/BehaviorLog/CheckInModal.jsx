import React, { useState } from "react";
import {
  X,
  Heart,
  Smile,
  Meh,
  Frown,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

/**
 * CheckInModal Component
 * Purpose: Allow students to log their current mood and a brief note.
 */
const CheckInModal = ({ isOpen, onClose }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const moods = [
    {
      id: "happy",
      emoji: "😊",
      label: "Happy",
      color: "text-green-500 bg-green-50 border-green-200",
    },
    {
      id: "good",
      emoji: "🙂",
      label: "Good",
      color: "text-blue-500 bg-blue-50 border-blue-200",
    },
    {
      id: "okay",
      emoji: "😐",
      label: "Okay",
      color: "text-yellow-500 bg-yellow-50 border-yellow-200",
    },
    {
      id: "sad",
      emoji: "😔",
      label: "Sad",
      color: "text-orange-500 bg-orange-50 border-orange-200",
    },
    {
      id: "stressed",
      emoji: "😫",
      label: "Stressed",
      color: "text-red-500 bg-red-50 border-red-200",
    },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        // Reset state after closing
        setTimeout(() => {
          setSelectedMood(null);
          setNote("");
          setIsSuccess(false);
        }, 300);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-2 rounded-xl">
              <Heart className="text-purple-600" size={20} />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">
              Wellbeing Check-in
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                Thank you for sharing
              </h4>
              <p className="text-slate-500 max-w-xs mx-auto">
                You’re not alone, and support is always available at school.
              </p>
            </div>
          ) : (
            <>
              {/* Mood Selection */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  How are you feeling today?
                </label>
                <div className="flex justify-between gap-2">
                  {moods.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                        selectedMood === mood.id
                          ? `${mood.color} ring-2 ring-offset-2 ring-purple-100 scale-105 shadow-md`
                          : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-400 grayscale hover:grayscale-0"
                      }`}
                    >
                      <span className="text-2xl filter-none">{mood.emoji}</span>
                      <span
                        className={`text-xs font-bold ${selectedMood === mood.id ? "" : "text-slate-500"}`}
                      >
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Note Input */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Would you like to share a brief reflection?{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="I'm feeling this way because..."
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-purple-300 focus:bg-white transition-all text-slate-700 resize-none h-32"
                />
              </div>

              {/* Footer / Submit */}
              <button
                onClick={handleSubmit}
                disabled={!selectedMood || isSubmitting}
                className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg shadow-purple-200 transition-all flex items-center justify-center gap-2 ${
                  !selectedMood || isSubmitting
                    ? "bg-slate-200 shadow-none cursor-not-allowed text-slate-400"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-300 transform active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    Complete Check-in
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {/* Safe Space Footer */}
        {!isSuccess && (
          <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <AlertCircle size={14} />
            <span>
              Responses are summarized for wellbeing support. Raw text is never
              shared with parents.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInModal;
