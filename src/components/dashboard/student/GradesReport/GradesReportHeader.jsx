import React from "react";
import { Download } from "lucide-react";

const GradesReportHeader = ({ user, handleDownload }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 rounded-3xl shadow-lg print-area">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Academic Performance Report
        </h2>
        <p className="text-white/90 text-sm mt-1">
          Student: <span className="font-bold text-white">{user.name}</span> |
          Grade: <span className="font-bold text-white">{user.grade}</span> |
          Section: <span className="font-bold text-white">{user.section}</span>
        </p>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 md:mt-0 flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-white/90 shadow-lg transition-transform active:scale-95 hover:shadow-white/30 no-print"
      >
        <Download size={18} /> Download Report
      </button>
    </div>
  );
};

export default GradesReportHeader;
