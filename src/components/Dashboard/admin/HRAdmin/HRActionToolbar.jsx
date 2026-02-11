import React from "react";
import { UserPlus, Fingerprint, Download, Search } from "lucide-react";

const HRActionToolbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <UserPlus size={18} />
            Add Staff
          </div>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-indigo-500/20">
          <div className="flex items-center gap-2">
            <Fingerprint size={18} />
            Sync Biometric
          </div>
        </button>
        <button className="bg-white border-2 border-blue-100 text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-0.5 text-sm">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Export Report
          </div>
        </button>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none md:w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search staff..."
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default HRActionToolbar;
