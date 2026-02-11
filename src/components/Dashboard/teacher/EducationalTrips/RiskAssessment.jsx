import React from "react";
import { ShieldCheck } from "lucide-react";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const RiskAssessment = () => {
  const { riskAssessment } = EDUCATIONAL_TRIPS_DATA;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <h3 className="font-bold text-slate-700 flex items-center gap-2">
          <ShieldCheck size={18} className="text-blue-600" /> Risk Assessment
          Checklist
        </h3>
        <button className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
          + Add Risk Item
        </button>
      </div>
      <div className="p-0 border-t border-slate-100">
        {riskAssessment.checklist.map((item, idx) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 p-4 ${idx !== riskAssessment.checklist.length - 1 ? "border-b border-slate-50" : ""} hover:bg-slate-50/50 transition-colors`}
          >
            <div className="pt-1">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 ring-offset-0"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-slate-700 text-sm">
                  {item.risk}
                </h4>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    item.severity === "High"
                      ? "bg-red-50 text-red-600 border-red-100"
                      : item.severity === "Medium"
                        ? "bg-amber-50 text-amber-600 border-amber-100"
                        : "bg-blue-50 text-blue-600 border-blue-100"
                  }`}
                >
                  {item.severity}
                </span>
              </div>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskAssessment;
