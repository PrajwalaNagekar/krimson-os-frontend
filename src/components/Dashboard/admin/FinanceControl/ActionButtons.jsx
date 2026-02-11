import React from "react";
import { Plus, RefreshCcw, Download } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <Plus size={18} />
            Add Fee Category
          </div>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
          <div className="flex items-center gap-2">
            <RefreshCcw size={18} />
            Sync Gateways
          </div>
        </button>
        <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Export (QuickBooks)
          </div>
        </button>
        <button className="bg-white border-2 border-green-100 text-green-600 px-5 py-3 rounded-xl font-bold hover:bg-green-50 hover:border-green-200 transition-all flex flex-col items-center gap-0.5 text-sm">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Export (Tally)
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
