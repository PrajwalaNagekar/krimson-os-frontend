import React from "react";
import { MapPin, Calendar, Trash2, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const TripOverview = ({ expandedSections, toggleSection }) => {
  const { tripOverview } = EDUCATIONAL_TRIPS_DATA;
  const { fields } = tripOverview;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
      <SectionHeader
        title="Trip Overview"
        section="overview"
        isCompleted={true}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />
      {expandedSections.overview && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Trip Name
            </label>
            <input
              type="text"
              defaultValue={fields.tripName}
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Destination
            </label>
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                defaultValue={fields.destination}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Trip Type
            </label>
            <select
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              defaultValue={fields.tripType.selected}
            >
              {fields.tripType.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Date Range
            </label>
            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                defaultValue={fields.dateRange}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Grades / Classes
            </label>
            <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              {fields.grades.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-600 flex items-center gap-2"
                >
                  {tag}{" "}
                  <Trash2
                    size={12}
                    className="text-slate-300 hover:text-red-500 cursor-pointer"
                  />
                </span>
              ))}
              <button className="px-3 py-1 border border-dashed border-blue-300 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-50 flex items-center gap-1">
                <Plus size={12} /> Add Class
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripOverview;
