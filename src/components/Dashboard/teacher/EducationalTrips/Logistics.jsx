import React from "react";
import { Bus, Clock, Hotel, DollarSign } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const Logistics = ({ expandedSections, toggleSection }) => {
  const { logistics } = EDUCATIONAL_TRIPS_DATA;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:border-blue-200 transition-colors">
      <SectionHeader
        title="Logistics"
        section="logistics"
        isCompleted={true}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />
      {expandedSections.logistics && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Transport Type
            </label>
            <div className="relative">
              <Bus
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <select
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                defaultValue={logistics.transportType.selected}
              >
                {logistics.transportType.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Times
            </label>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Clock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  defaultValue={logistics.times.departure}
                  className="w-full pl-9 pr-2 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium"
                />
              </div>
              <div className="flex-1 relative">
                <Clock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  defaultValue={logistics.times.return}
                  className="w-full pl-9 pr-2 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Accommodation
              </label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={logistics.accommodation.enabled}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-3">
              <Hotel className="text-blue-500" size={20} />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-900">
                  {logistics.accommodation.name}
                </p>
                <p className="text-[11px] text-blue-700/70">
                  {logistics.accommodation.address}
                </p>
              </div>
              <button className="text-xs font-bold text-blue-600 underline">
                Change
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Estimated Budget
            </label>
            <div className="relative">
              <DollarSign
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                defaultValue={logistics.budget.estimated}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                {logistics.budget.currency}
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 pl-1">
              Target: approx. ${logistics.budget.targetPerStudent} per student
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logistics;
