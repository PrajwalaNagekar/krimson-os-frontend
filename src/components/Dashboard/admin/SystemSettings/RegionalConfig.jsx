import React from "react";
import { Globe, Clock, DollarSign, Save } from "lucide-react";

/**
 * @component RegionalConfig
 * @description Component for regional settings including timezone, currency, date, and language.
 * @param {Object} regionalization - The regional configuration data.
 */
const RegionalConfig = ({ regionalization }) => {
  if (!regionalization) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Globe size={24} />
          </div>
          <div>
            <h3 className="font-bold text-xl text-slate-800">
              Regional Configuration
            </h3>
            <p className="text-slate-500 text-sm mt-0.5">
              Timezone, currency, and format settings
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Time Zone
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Clock size={16} className="text-purple-500" />
              {regionalization.timezone}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Currency
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
              <DollarSign size={16} className="text-green-500" />
              {regionalization.currency}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Date Format
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
              {regionalization.dateFormat}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Language
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-700">
              {regionalization.language}
            </div>
          </div>
        </div>

        <button className="w-full flex flex-col items-center gap-0.5 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg">
          <div className="flex items-center gap-2">
            <Save size={18} />
            <span>Update Regional Settings</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegionalConfig;
