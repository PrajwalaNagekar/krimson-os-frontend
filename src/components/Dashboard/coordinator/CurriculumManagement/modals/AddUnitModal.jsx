import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { Check, X } from "lucide-react";

/**
 * AddUnitModal Component
 * Modal for adding a new unit to a term
 */
const AddUnitModal = ({ isOpen, onClose, onSave, termName }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    estimatedHours: "",
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
    if (!formData.name.trim()) newErrors.name = "Unit name is required";
    if (!formData.estimatedHours || formData.estimatedHours <= 0) {
      newErrors.estimatedHours = "Valid estimated hours required";
    }
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
    setFormData({ name: "", description: "", estimatedHours: "" });
    setErrors({});
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={handleClose}
      title={`➕ Add Unit${termName ? ` to ${termName}` : ""}`}
      size="md"
    >
      <div className="space-y-4">
        {/* Unit Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Unit Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Real Numbers, Algebra Fundamentals"
            className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
              errors.name ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the unit..."
            rows="3"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
          />
        </div>

        {/* Estimated Hours */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Hours *
          </label>
          <input
            type="number"
            name="estimatedHours"
            value={formData.estimatedHours}
            onChange={handleChange}
            placeholder="e.g., 15"
            min="1"
            className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
              errors.estimatedHours ? "border-red-300" : "border-gray-200"
            }`}
          />
          {errors.estimatedHours && (
            <p className="text-xs text-red-600 mt-1">{errors.estimatedHours}</p>
          )}
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
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Add Unit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddUnitModal;
