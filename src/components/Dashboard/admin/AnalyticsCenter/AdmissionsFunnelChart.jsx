import React from "react";
import { Target } from "lucide-react";

const AdmissionsFunnelChart = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Admissions Funnel
          </h3>
          <p className="text-sm text-slate-500">Quarterly conversion trends</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-full text-blue-600">
          <Target size={20} />
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="space-y-3">
        {data.byTerm.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="flex justify-between items-center mb-1 text-sm">
              <span className="font-semibold text-slate-700">{item.term}</span>
              <span className="font-bold text-blue-600">{item.rate}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300"
                style={{ width: `${item.rate}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
        Click on bars for detailed breakdown ()
      </div>
    </div>
  );
};

export default AdmissionsFunnelChart;
