import React, { useState, useEffect } from "react";
import {
  X,
  Save,
  Check,
  Search,
  BookOpen,
  Target,
  Users,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Edit3,
  Trash2,
} from "lucide-react";

const GROUP_TYPES = [
  {
    id: "Mixed Ability",
    label: "Mixed Ability",
    desc: "Diverse skill levels for peer learning",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: "Support",
    label: "Support / Intervention",
    desc: "Targeted help for specific gaps",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    id: "Enrichment",
    label: "Enrichment / Advanced",
    desc: "Extension activities for high achievers",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
];

const SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
];

const GroupCreationForm = ({
  initialData,
  students = [],
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Mixed Ability",
    description: "",
    subject: "",
    topic: "",
    outcome: "",
    members: [],
  });

  const [step, setStep] = useState(1); // 1: Details, 2: Students
  const [searchStudent, setSearchStudent] = useState("");

  // Initialize form with existing data when editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        type: initialData.type || "Mixed Ability",
        description: initialData.description || "",
        subject: initialData.subject || "",
        topic: initialData.topic || "",
        outcome: initialData.outcome || "",
        members: initialData.members || [],
      });
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addStudent = (student) => {
    const alreadyAdded = formData.members.some((m) => m.id === student.id);
    if (alreadyAdded) return;
    setFormData((prev) => ({
      ...prev,
      members: [...prev.members, student],
    }));
  };

  const removeStudent = (studentId) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.id !== studentId),
    }));
  };

  // Compute available students (those not yet in the group)
  const memberIds = new Set(formData.members.map((m) => m.id));
  const availableStudents = (students || []).filter(
    (s) =>
      !memberIds.has(s.id) &&
      (s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
        (s.roll &&
          s.roll
            .toString()
            .toLowerCase()
            .includes(searchStudent.toLowerCase()))),
  );

  const allStudentsFiltered = (students || []).filter(
    (s) =>
      s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
      (s.roll &&
        s.roll.toString().toLowerCase().includes(searchStudent.toLowerCase())),
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-scaleIn">
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            {initialData ? "Edit Learning Group" : "Create Learning Group"}
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-1">
            {step === 1
              ? "Step 1: Group Details & Context"
              : "Step 2: Assign Students"}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row" style={{ height: "560px" }}>
        {/* Sidebar / Progress */}
        <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-6 flex flex-col gap-2 flex-shrink-0">
          <button
            onClick={() => setStep(1)}
            className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
              step === 1
                ? "bg-white shadow-md text-blue-700 ring-1 ring-blue-100"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                step === 1
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              1
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider opacity-70">
                Details
              </span>
              <span className="font-semibold text-sm">Context</span>
            </div>
          </button>
          <button
            onClick={() => formData.name && setStep(2)}
            className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
              step === 2
                ? "bg-white shadow-md text-blue-700 ring-1 ring-blue-100"
                : "text-slate-500 hover:bg-slate-100"
            } ${!formData.name ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                step === 2
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              2
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider opacity-70">
                Students
              </span>
              <span className="font-semibold text-sm">
                Assignment ({formData.members.length})
              </span>
            </div>
          </button>

          <div className="mt-auto p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-2 text-blue-600 mb-2">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Note
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Groups are linked to specific learning outcomes to track
              intervention effectiveness.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto no-scrollbar">
          {step === 1 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Group Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="e.g., Reader's Circle B, Adv Math Squad..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Group Strategy / Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {GROUP_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleChange("type", type.id)}
                      className={`relative p-4 rounded-xl text-left border-2 transition-all ${
                        formData.type === type.id
                          ? `${type.color} ring-2 ring-offset-2 ring-blue-100`
                          : "bg-white border-slate-100 text-slate-500 hover:border-slate-200 cursor-pointer"
                      }`}
                    >
                      {formData.type === type.id && (
                        <div className="absolute top-2 right-2 text-current">
                          <Check size={16} strokeWidth={3} />
                        </div>
                      )}
                      <div className="font-bold text-sm mb-1">{type.label}</div>
                      <div className="text-[10px] opacity-80 leading-tight">
                        {type.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Description / Purpose
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Why is this group being formed? What are the specific goals?"
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Link to Subject
                  </label>
                  <div className="relative">
                    <BookOpen
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                    <select
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:border-blue-500 appearance-none font-medium text-sm"
                    >
                      <option value="">Select Subject...</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Link to Topic / Unit
                  </label>
                  <div className="relative">
                    <Target
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                    <input
                      type="text"
                      value={formData.topic}
                      onChange={(e) => handleChange("topic", e.target.value)}
                      placeholder="e.g. Thermodynamics"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:border-blue-500 placeholder:text-slate-400 font-medium text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Learning Outcome
                </label>
                <input
                  type="text"
                  value={formData.outcome}
                  onChange={(e) => handleChange("outcome", e.target.value)}
                  placeholder="e.g. LO-9.PS.3.1: Analyze motion using kinematic equations"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:border-blue-500 placeholder:text-slate-400 font-medium text-sm"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">
                  Assign Students{" "}
                  <span className="text-slate-400 font-normal text-sm">
                    ({students.length} in class)
                  </span>
                </h3>
                <div className="relative w-64">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search by name or roll..."
                    value={searchStudent}
                    onChange={(e) => setSearchStudent(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex-1 flex gap-4 overflow-hidden min-h-0">
                {/* Available List */}
                <div className="flex-1 border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center flex-shrink-0">
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Class Roster
                    </span>
                    <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {availableStudents.length}
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {availableStudents.length === 0 && searchStudent === "" ? (
                      <div className="h-full flex flex-col items-center justify-center text-slate-400 py-8">
                        <Check size={28} className="mb-2 text-green-400" />
                        <p className="text-sm font-medium text-center">
                          All students assigned!
                        </p>
                      </div>
                    ) : availableStudents.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-slate-400 py-8">
                        <Search size={28} className="mb-2" />
                        <p className="text-sm font-medium">No results found</p>
                      </div>
                    ) : (
                      availableStudents.map((student) => (
                        <button
                          key={student.id}
                          type="button"
                          onClick={() => addStudent(student)}
                          className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all text-left group"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all flex-shrink-0">
                            {student.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-slate-700 truncate">
                              {student.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Roll: {student.roll}
                            </div>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 p-1.5 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 transition-opacity">
                            <ChevronRight size={14} />
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Assigned List */}
                <div className="flex-1 border-2 border-blue-100 bg-blue-50/20 rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-blue-50 px-4 py-3 border-b border-blue-100 flex justify-between items-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-800 uppercase">
                      Assigned to Group
                    </span>
                    <span className="bg-blue-200 text-blue-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {formData.members.length}
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {formData.members.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-50 py-8">
                        <Users size={32} className="mb-2" />
                        <p className="text-sm font-medium">
                          No students assigned
                        </p>
                        <p className="text-xs mt-1 text-center">
                          Click students from the roster to add them
                        </p>
                      </div>
                    ) : (
                      formData.members.map((student) => (
                        <button
                          key={student.id}
                          type="button"
                          onClick={() => removeStudent(student.id)}
                          className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-white border border-blue-100 shadow-sm hover:border-red-200 hover:ring-2 hover:ring-red-100 transition-all text-left group"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600 flex-shrink-0">
                            {student.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-slate-900 truncate">
                              {student.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Roll: {student.roll}
                            </div>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 p-1.5 bg-red-50 text-red-500 rounded-lg flex-shrink-0 transition-opacity">
                            <X size={14} />
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
        <div>
          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold text-sm px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
          )}
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          {step === 1 ? (
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name}
              className="px-8 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Next Step <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSubmit(formData)}
              className="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <Save size={16} /> Save Group
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupCreationForm;
