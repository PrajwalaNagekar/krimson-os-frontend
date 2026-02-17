import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { Check, X } from "lucide-react";

/**
 * AddTopicModal Component
 * Modal for adding a new topic to a chapter
 */
const AddTopicModal = ({ isOpen, onClose, onSave, chapterName }) => {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    resources: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Topic name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSave(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({ name: "", duration: "", resources: "" });
    setErrors({});
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={handleClose}
      title={`➕ Add Topic${chapterName ? ` to ${chapterName}` : ""}`}
      size="md"
    >
      <div className="space-y-4">
        {/* Topic Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Topic Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Properties of Rational Numbers"
            className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
              errors.name ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Duration (Classes/Hours)
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 3 classes, 2 hours"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
        </div>

        {/* Resources */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Resources
          </label>
          <textarea
            name="resources"
            value={formData.resources}
            onChange={handleChange}
            placeholder="Links, books, videos, or other teaching resources..."
            rows="3"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Add Topic
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddTopicModal;
