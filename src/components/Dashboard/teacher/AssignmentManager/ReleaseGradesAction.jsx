import React from "react";
import { Shield, Send } from "lucide-react";

const ReleaseGradesAction = () => {
  return (
    <div className="p-4 bg-orange-50 border border-orange-100 flex flex-col md:flex-row items-center justify-between rounded-3xl mb-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <div className="p-2 bg-orange-100 rounded-xl">
          <Shield size={20} className="text-orange-600" />
        </div>
        <p className="text-xs font-bold text-orange-800 uppercase tracking-wide">
          Official Grade Release Policy: Once grades are released, they become
          official academic records.
        </p>
      </div>
      <button className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
        <Send size={16} />
        Batch Release All
      </button>
    </div>
  );
};

export default ReleaseGradesAction;
