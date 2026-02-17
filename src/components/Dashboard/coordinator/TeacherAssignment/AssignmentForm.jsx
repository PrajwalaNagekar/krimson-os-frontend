import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../../data/coordinatorData";

const AssignmentForm = ({ onAddAssignment }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    teacherId: "",
    gradeId: "",
    subjectId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.teacherId && formData.gradeId && formData.subjectId) {
      onAddAssignment(formData);
      setFormData({ teacherId: "", gradeId: "", subjectId: "" });
      setIsFormOpen(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isFormOpen) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Assign Teacher to Grade & Subject
          </h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <Plus className="h-5 w-5" />
            <span>New Assignment</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          New Assignment
        </h2>
        <button
          onClick={() => setIsFormOpen(false)}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Teacher Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Teacher
          </label>
          <select
            name="teacherId"
            value={formData.teacherId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
          >
            <option value="">Choose a teacher...</option>
            {TEACHER_ASSIGNMENT_DATA.teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name} - {teacher.specialization}
              </option>
            ))}
          </select>
        </div>

        {/* Grade Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Grade
          </label>
          <select
            name="gradeId"
            value={formData.gradeId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
          >
            <option value="">Choose a grade...</option>
            {TEACHER_ASSIGNMENT_DATA.grades.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.name} ({grade.section})
              </option>
            ))}
          </select>
        </div>

        {/* Subject Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Subject
          </label>
          <select
            name="subjectId"
            value={formData.subjectId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900"
          >
            <option value="">Choose a subject...</option>
            {TEACHER_ASSIGNMENT_DATA.subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="w-40 h-11 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Assign Teacher
          </button>
          <button
            type="button"
            onClick={() => setIsFormOpen(false)}
            className="w-32 h-11 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;
