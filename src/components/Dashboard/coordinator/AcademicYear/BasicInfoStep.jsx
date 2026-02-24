/**
 * @component BasicInfoStep
 * @description Screen B – Academic Year basic info (name + dates only, no description).
 */
import React from "react";
import { Calendar, ArrowRight, X } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-800 placeholder:text-slate-400 bg-white";

const BasicInfoStep = ({ data, onChange, onCancel }) => {
  const isValid = data.name?.trim() && data.startDate && data.endDate;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <Calendar size={26} className="text-blue-500 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            Basic Information
          </h2>
          <p className="text-sm text-slate-500">
            Set the name and duration for the new academic year.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Academic Year Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 2026-2027"
            value={data.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Start Date <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            value={data.startDate || ""}
            onChange={(e) => onChange("startDate", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            End Date <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            value={data.endDate || ""}
            onChange={(e) => onChange("endDate", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all"
        >
          <X size={18} />
          Cancel
        </button>
        <button
          type="button"
          onClick={() => isValid && onChange("__next__", true)}
          disabled={!isValid}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
            isValid
              ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Save &amp; Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BasicInfoStep;
