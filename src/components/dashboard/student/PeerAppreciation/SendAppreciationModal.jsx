import React, { useState } from "react";
import { X, Send, AlertCircle } from "lucide-react";

/**
 * Send Appreciation Modal
 * Form to submit a new appreciation message.
 */
const SendAppreciationModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    recipient: "",
    category: "Kindness",
    message: "",
  });
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const categories = [
    "Kindness",
    "Teamwork",
    "Helpfulness",
    "Respect",
    "Inclusion",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.recipient.trim()) {
      setError("Please specify a recipient.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please write a message.");
      return;
    }
    if (formData.message.length > 200) {
      setError("Message is too long (max 200 characters).");
      return;
    }

    onSubmit({
      ...formData,
      date: new Date().toISOString().split("T")[0],
      sender: "Me", // Mock current user
      status: "pending",
      likes: 0,
    });

    // Reset and close
    setFormData({ recipient: "", category: "Kindness", message: "" });
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl m-4 transform transition-all scale-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Send Appreciation
            </h2>
            <p className="text-sm text-slate-500">Brighten someone's day!</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipient Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Who are you appreciating?
            </label>
            <input
              type="text"
              placeholder="e.g., Alex, Whole Class, Mr. Sharma"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              value={formData.recipient}
              onChange={(e) =>
                setFormData({ ...formData, recipient: e.target.value })
              }
            />
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select a Value
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    formData.category === cat
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Your Message
            </label>
            <textarea
              placeholder="Share something positive..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-slate-400">
                Keep it kind and respectful.
              </span>
              <span
                className={`text-xs font-medium ${formData.message.length > 200 ? "text-red-500" : "text-slate-400"}`}
              >
                {formData.message.length}/200
              </span>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4" />
            Send Appreciation
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendAppreciationModal;
