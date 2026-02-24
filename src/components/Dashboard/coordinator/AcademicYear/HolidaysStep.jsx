/**
 * @component HolidaysStep
 * @description Screen F – Manage school holidays and public holidays.
 */
import React from "react";
import { MapPin, ArrowLeft, ArrowRight, Plus, Trash2, Sun } from "lucide-react";

const inputClass =
  "w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm text-slate-800 bg-white";

const SECTIONS = [
  {
    key: "school",
    label: "School Holidays",
    icon: MapPin,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-400",
    hasRange: true,
    placeholder: "e.g. Summer Break",
  },
  {
    key: "public",
    label: "Public Holidays",
    icon: Sun,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-400",
    hasRange: false,
    placeholder: "e.g. Independence Day",
  },
];

const HolidaysStep = ({ holidays, onChangeHolidays, onBack, onNext }) => {
  const addEntry = (sectionKey, hasRange) => {
    const newEntry = hasRange
      ? {
          id: `h-${Date.now()}`,
          name: "",
          description: "",
          startDate: "",
          endDate: "",
        }
      : { id: `h-${Date.now()}`, name: "", description: "", date: "" };

    onChangeHolidays({
      ...holidays,
      [sectionKey]: [...(holidays[sectionKey] || []), newEntry],
    });
  };

  const removeEntry = (sectionKey, id) => {
    onChangeHolidays({
      ...holidays,
      [sectionKey]: (holidays[sectionKey] || []).filter((h) => h.id !== id),
    });
  };

  const updateEntry = (sectionKey, id, field, value) => {
    onChangeHolidays({
      ...holidays,
      [sectionKey]: (holidays[sectionKey] || []).map((h) =>
        h.id === id ? { ...h, [field]: value } : h,
      ),
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center gap-3 mb-2">
        <MapPin size={26} className="text-emerald-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Holidays & Events
          </h2>
          <p className="text-sm text-slate-500">
            Add school holidays and public holidays for the academic year.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const entries = holidays[section.key] || [];

          return (
            <div
              key={section.key}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-sm"
            >
              <div
                className={`flex items-center justify-between px-6 py-4 ${section.bg} border-b ${section.border}`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} className={section.color} />
                  <h3 className={`font-bold ${section.color}`}>
                    {section.label}
                  </h3>
                  <span
                    className={`ml-1 text-xs font-bold px-2 py-0.5 rounded-full bg-white/70 ${section.color}`}
                  >
                    {entries.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => addEntry(section.key, section.hasRange)}
                  className="flex items-center gap-1 text-xs font-bold bg-white text-blue-600 border border-blue-200 px-3 py-1.5 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
                >
                  <Plus size={13} /> Add
                </button>
              </div>

              <div className="p-5 space-y-4">
                {entries.length === 0 && (
                  <div className="text-sm text-slate-400 italic text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    No {section.label.toLowerCase()} added yet — click Add to
                    create one.
                  </div>
                )}
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="relative bg-slate-50 rounded-xl p-5 border border-slate-200 group transition-all"
                  >
                    {/* Delete button (top right corner) */}
                    <button
                      type="button"
                      onClick={() => removeEntry(section.key, entry.id)}
                      className="absolute top-4 right-4 p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-100 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Row 1: Title */}
                      <div className="md:col-span-2 pr-10">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${section.dot}`}
                          />
                          Title <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={section.placeholder}
                          value={entry.name || ""}
                          onChange={(e) =>
                            updateEntry(
                              section.key,
                              entry.id,
                              "name",
                              e.target.value,
                            )
                          }
                          className={inputClass}
                        />
                      </div>

                      {/* Row 2: Description */}
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Description (Optional)
                        </label>
                        <textarea
                          placeholder="Add details about this holiday..."
                          value={entry.description || ""}
                          onChange={(e) =>
                            updateEntry(
                              section.key,
                              entry.id,
                              "description",
                              e.target.value,
                            )
                          }
                          className={`${inputClass} resize-none h-20`}
                        />
                      </div>

                      {/* Row 3: Dates */}
                      {section.hasRange ? (
                        <>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={entry.startDate || ""}
                              onChange={(e) =>
                                updateEntry(
                                  section.key,
                                  entry.id,
                                  "startDate",
                                  e.target.value,
                                )
                              }
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              End Date
                            </label>
                            <input
                              type="date"
                              value={entry.endDate || ""}
                              onChange={(e) =>
                                updateEntry(
                                  section.key,
                                  entry.id,
                                  "endDate",
                                  e.target.value,
                                )
                              }
                              className={inputClass}
                            />
                          </div>
                        </>
                      ) : (
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Date
                          </label>
                          <input
                            type="date"
                            value={entry.date || ""}
                            onChange={(e) =>
                              updateEntry(
                                section.key,
                                entry.id,
                                "date",
                                e.target.value,
                              )
                            }
                            className={inputClass}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Save & Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HolidaysStep;
