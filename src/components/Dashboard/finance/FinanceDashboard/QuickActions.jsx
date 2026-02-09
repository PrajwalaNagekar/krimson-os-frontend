import React from "react";
import { Plus, CreditCard, Download } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>

      <h3 className="text-xl font-bold mb-4 relative z-10">Quick Actions</h3>
      <div className="space-y-3 relative z-10">
        <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Generate Invoice</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>Record Payment</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>

        <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
