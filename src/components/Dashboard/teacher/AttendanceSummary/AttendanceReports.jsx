import React from "react";
import { FileText, Download } from "lucide-react";

const AttendanceReports = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <FileText size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">
            Generate Administrative Reports
          </h3>
          <p className="text-sm opacity-90">
            Export detailed attendance summaries for administrative submission
            and record-keeping
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <Download size={18} />
            <div className="text-left">
              <div>Excel Report</div>
            </div>
          </button>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2">
            <Download size={18} />
            <div className="text-left">
              <div>PDF Report</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
