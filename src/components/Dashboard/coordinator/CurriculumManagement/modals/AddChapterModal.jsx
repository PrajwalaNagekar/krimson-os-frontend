import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { Check, X } from "lucide-react";

/**
 * AddChapterModal Component
 * Modal for adding a new chapter to a unit
 */
const AddChapterModal = ({ isOpen, onClose, onSave, unitName }) => {
  const [formData, setFormData] = useState({
    name: "",
    learningObjectives: "",
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
    if (!formData.name.trim()) newErrors.name = "Chapter name is required";
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
    setFormData({ name: "", learningObjectives: "" });
    setErrors({});
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={handleClose}
      title={`➕ Add Chapter${unitName ? ` to ${unitName}` : ""}`}
      size="md"
    >
      <div className="space-y-4">
        {/* Chapter Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Chapter Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Rational Numbers, Introduction to Algebra"
            className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all ${
              errors.name ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Learning Objectives */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Learning Objectives
          </label>
          <textarea
            name="learningObjectives"
            value={formData.learningObjectives}
            onChange={handleChange}
            placeholder="What students will learn in this chapter..."
            rows="4"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            List the key learning objectives for this chapter (optional)
          </p>
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
            className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Add Chapter
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddChapterModal;
