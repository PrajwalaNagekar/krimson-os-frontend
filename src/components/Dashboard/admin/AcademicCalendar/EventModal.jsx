/**
 * @component EventModal
 * @description Modal for creating, viewing, and editing calendar events
 * @props {boolean} isOpen - Whether modal is open
 * @props {Function} onClose - Callback to close modal
 * @props {Function} onSave - Callback when event is saved
 * @props {Object} event - Event data for editing (null for new event)
 * @props {Date} selectedDate - Pre-selected date for new event
 * @props {Array} categories - Available event categories
 */
import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  FileText,
  Save,
} from "lucide-react";

const EventModal = ({
  isOpen,
  onClose,
  onSave,
  event = null,
  selectedDate = null,
  categories = [],
}) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    endDate: "",
    time: "09:00",
    type: "event",
    category: "Academic",
    description: "",
    location: "",
    organizer: "Administration",
    participants: "",
    status: "Scheduled",
    isMultiDay: false,
    reminderSet: true,
    reminderTime: "1 day before",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (event) {
      // Editing existing event
      setFormData({
        ...event,
        participants: event.participants?.join(", ") || "",
      });
    } else if (selectedDate) {
      // New event with pre-selected date
      const dateStr = selectedDate.toISOString().split("T")[0];
      setFormData((prev) => ({
        ...prev,
        date: dateStr,
      }));
    }
  }, [event, selectedDate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (formData.isMultiDay && !formData.endDate) {
      newErrors.endDate = "End date is required for multi-day events";
    }

    if (
      formData.isMultiDay &&
      formData.endDate &&
      formData.date > formData.endDate
    ) {
      newErrors.endDate = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const eventData = {
      ...formData,
      id: event?.id || `evt_${Date.now()}`,
      participants: formData.participants
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean),
      createdBy: "Admin",
      createdAt: event?.createdAt || new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      color: getEventColor(formData.type),
    };

    onSave(eventData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      title: "",
      date: "",
      endDate: "",
      time: "09:00",
      type: "event",
      category: "Academic",
      description: "",
      location: "",
      organizer: "Administration",
      participants: "",
      status: "Scheduled",
      isMultiDay: false,
      reminderSet: true,
      reminderTime: "1 day before",
    });
    setErrors({});
    onClose();
  };

  const getEventColor = (type) => {
    switch (type) {
      case "exam":
        return "from-pink-500 to-rose-500";
      case "class":
        return "from-blue-500 to-cyan-500";
      case "event":
      default:
        return "from-purple-500 to-indigo-500";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {event ? "Edit Event" : "Create New Event"}
              </h2>
              <p className="text-white/80 text-sm mt-1">
                {selectedDate && !event
                  ? `For ${selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`
                  : "Fill in the event details below"}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]"
        >
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Event Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.title ? "border-red-500" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                placeholder="Enter event title"
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" />
                  Start Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.date ? "border-red-500" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-purple-500" />
                  Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.time ? "border-red-500" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                )}
              </div>
            </div>

            {/* Multi-day Event */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isMultiDay"
                checked={formData.isMultiDay}
                onChange={handleChange}
                className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-sm font-semibold text-slate-700">
                Multi-day event
              </label>
            </div>

            {/* End Date (if multi-day) */}
            {formData.isMultiDay && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={formData.date}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.endDate ? "border-red-500" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                />
                {errors.endDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
                )}
              </div>
            )}

            {/* Type & Category Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Event Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="event">Event</option>
                  <option value="exam">Exam</option>
                  <option value="class">Class/Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Tag size={16} className="text-cyan-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-pink-500" />
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.location ? "border-red-500" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                placeholder="Enter event location"
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <FileText size={16} className="text-green-500" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                placeholder="Enter event description"
              />
            </div>

            {/* Participants */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <Users size={16} className="text-orange-500" />
                Participants (comma-separated)
              </label>
              <input
                type="text"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="e.g., All Students, Teachers, Parents"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Save size={20} />
              {event ? "Update Event" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
